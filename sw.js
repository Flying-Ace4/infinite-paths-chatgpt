'use strict';

const APP_VERSION = '0.2.2';
const CACHE_PREFIX = 'infinite-paths';
const SHELL_CACHE = `${CACHE_PREFIX}-shell-v${APP_VERSION}`;
const RUNTIME_CACHE = `${CACHE_PREFIX}-runtime-v${APP_VERSION}`;
const PRECACHE_PATHS = [
  './',
  './index.html',
  './offline.html',
  './manifest.webmanifest',
  './app.bundle.css',
  './app.bundle.js',
  './favicon.svg',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-192.png',
  './icon-maskable-512.png',
  './apple-touch-icon.png'
];

function scopedUrl(path) {
  return new URL(path, self.registration.scope).href;
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE).then((cache) => {
      const requests = PRECACHE_PATHS.map(
        (path) => new Request(scopedUrl(path), { cache: 'reload', credentials: 'same-origin' }),
      );
      return cache.addAll(requests);
    }),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key.startsWith(CACHE_PREFIX) && ![SHELL_CACHE, RUNTIME_CACHE].includes(key))
            .map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

async function networkFirstNavigation(request) {
  try {
    const response = await fetch(request);
    if (response?.ok) {
      const runtime = await caches.open(RUNTIME_CACHE);
      runtime.put(scopedUrl('./index.html'), response.clone());
    }
    return response;
  } catch (_error) {
    const shell = await caches.open(SHELL_CACHE);
    return (
      (await shell.match(scopedUrl('./index.html'))) ||
      (await caches.match(scopedUrl('./index.html'))) ||
      (await shell.match(scopedUrl('./offline.html')))
    );
  }
}

async function cacheFirstAsset(request) {
  const shell = await caches.open(SHELL_CACHE);
  const cached = await shell.match(request);
  if (cached) {
    return cached;
  }

  const runtime = await caches.open(RUNTIME_CACHE);
  const runtimeCached = await runtime.match(request);
  if (runtimeCached) {
    return runtimeCached;
  }

  const response = await fetch(request);
  if (response?.ok) {
    runtime.put(request, response.clone());
  }
  return response;
}

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') {
    return;
  }

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) {
    return;
  }

  if (request.mode === 'navigate') {
    event.respondWith(networkFirstNavigation(request));
    return;
  }

  if (['script', 'style', 'image', 'manifest', 'font'].includes(request.destination)) {
    event.respondWith(cacheFirstAsset(request));
  }
});

self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
