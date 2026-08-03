/* Infinite Paths v0.1.0 | generated from modular source | do not edit this bundle directly */

/* ===== src/js/config.js ===== */
(function (root, factory) {
  const namespace = (root.InfinitePaths = root.InfinitePaths || {});
  const exported = factory();
  Object.assign(namespace, exported);
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = exported;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const APP_CONFIG = Object.freeze({
    name: 'Infinite Paths',
    version: '0.1.0',
    buildId: 'foundation-2026-08-02',
    milestone: 'Milestone 1: Installable Application Shell',
    rulesVersion: '0.1.0',
    contentSchemaVersion: 1,
    saveFormatVersion: 1,
    preferencesSchemaVersion: 1,
    database: Object.freeze({
      name: 'infinite-paths',
      version: 1,
    }),
    routes: Object.freeze(['home', 'settings', 'system']),
  });

  return { APP_CONFIG };
});

/* ===== src/js/utils/dom.js ===== */
(function (root, factory) {
  const namespace = (root.InfinitePaths = root.InfinitePaths || {});
  const exported = factory();
  Object.assign(namespace, exported);
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = exported;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  function appendChildren(node, children) {
    for (const child of children.flat(Infinity)) {
      if (child === null || child === undefined || child === false) {
        continue;
      }
      node.append(child instanceof Node ? child : document.createTextNode(String(child)));
    }
    return node;
  }

  function h(tagName, options = {}, ...children) {
    const node = document.createElement(tagName);
    const normalizedOptions = options || {};

    if (normalizedOptions.className) {
      node.className = normalizedOptions.className;
    }
    if (normalizedOptions.text !== undefined) {
      node.textContent = String(normalizedOptions.text);
    }
    if (normalizedOptions.id) {
      node.id = normalizedOptions.id;
    }
    if (normalizedOptions.attrs) {
      for (const [name, value] of Object.entries(normalizedOptions.attrs)) {
        if (value === false || value === null || value === undefined) {
          continue;
        }
        if (value === true) {
          node.setAttribute(name, '');
        } else {
          node.setAttribute(name, String(value));
        }
      }
    }
    if (normalizedOptions.dataset) {
      for (const [name, value] of Object.entries(normalizedOptions.dataset)) {
        node.dataset[name] = String(value);
      }
    }
    if (normalizedOptions.on) {
      for (const [eventName, handler] of Object.entries(normalizedOptions.on)) {
        node.addEventListener(eventName, handler);
      }
    }

    return appendChildren(node, children);
  }

  function clearNode(node) {
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
    return node;
  }

  function setStatus(node, message, tone = 'neutral') {
    node.textContent = message;
    node.dataset.tone = tone;
  }

  function focusHeading(container) {
    const heading = container.querySelector('h1');
    if (!heading) {
      return;
    }
    heading.setAttribute('tabindex', '-1');
    requestAnimationFrame(() => heading.focus({ preventScroll: true }));
  }

  return { appendChildren, clearNode, focusHeading, h, setStatus };
});

/* ===== src/js/utils/platform.js ===== */
(function (root, factory) {
  const namespace = (root.InfinitePaths = root.InfinitePaths || {});
  const exported = factory();
  Object.assign(namespace, exported);
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = exported;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  function isIOS() {
    if (typeof navigator === 'undefined') {
      return false;
    }
    const userAgent = navigator.userAgent || '';
    const classicIOS = /iPad|iPhone|iPod/.test(userAgent);
    const modernIPad = navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
    return classicIOS || modernIPad;
  }

  function isStandalone() {
    if (typeof window === 'undefined') {
      return false;
    }
    const mediaStandalone = window.matchMedia?.('(display-mode: standalone)').matches || false;
    return mediaStandalone || window.navigator.standalone === true;
  }

  function getInstallGuidance() {
    if (isStandalone()) {
      return {
        state: 'installed',
        title: 'Home Screen mode is active',
        detail: 'Infinite Paths is running in its standalone app window.',
        steps: [],
      };
    }

    if (isIOS()) {
      return {
        state: 'available',
        title: 'Install on this iPhone',
        detail: 'Open this site in Safari, then use the Share menu.',
        steps: [
          'Tap Share in Safari.',
          'Choose Add to Home Screen.',
          'Leave Open as Web App enabled, then tap Add.',
          'Launch Infinite Paths from its new Home Screen icon once while online.',
        ],
      };
    }

    return {
      state: 'available',
      title: 'Install this web app',
      detail: 'Use your browser menu and choose its install or add-to-home-screen command.',
      steps: [
        'Open the browser menu.',
        'Choose Install app or Add to Home Screen.',
        'Open the installed app once while online so the offline shell can finish caching.',
      ],
    };
  }

  function createFreshSeed(prefix = 'PATH') {
    const safePrefix = String(prefix || 'PATH').replace(/[^A-Z0-9]/gi, '').slice(0, 12).toUpperCase() || 'PATH';
    const values = new Uint32Array(3);

    if (globalThis.crypto?.getRandomValues) {
      globalThis.crypto.getRandomValues(values);
    } else {
      const now = Date.now() >>> 0;
      const fineTime = Math.floor((globalThis.performance?.now?.() || 0) * 1000) >>> 0;
      values[0] = now;
      values[1] = fineTime;
      values[2] = (now ^ fineTime ^ 0x9e3779b9) >>> 0;
    }

    const token = Array.from(values, (value) => value.toString(36).padStart(7, '0')).join('-');
    return `${safePrefix}-${token}`.toUpperCase();
  }

  function supportsLocalStorage() {
    try {
      if (!globalThis.localStorage) {
        return false;
      }
      const key = '__infinite_paths_storage_probe__';
      globalThis.localStorage.setItem(key, '1');
      globalThis.localStorage.removeItem(key);
      return true;
    } catch (_error) {
      return false;
    }
  }

  return {
    createFreshSeed,
    getInstallGuidance,
    isIOS,
    isStandalone,
    supportsLocalStorage,
  };
});

/* ===== src/js/core/seeded-random.js ===== */
(function (root, factory) {
  const namespace = (root.InfinitePaths = root.InfinitePaths || {});
  const exported = factory();
  Object.assign(namespace, exported);
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = exported;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const RNG_ALGORITHM = 'xoshiro128ss-v1';
  const UINT32_RANGE = 0x100000000;

  function rotateLeft(value, shift) {
    return ((value << shift) | (value >>> (32 - shift))) >>> 0;
  }

  function hashSeed(seedText) {
    const text = String(seedText);
    let h1 = 1779033703;
    let h2 = 3144134277;
    let h3 = 1013904242;
    let h4 = 2773480762;

    for (let index = 0; index < text.length; index += 1) {
      const code = text.charCodeAt(index);
      h1 = h2 ^ Math.imul(h1 ^ code, 597399067);
      h2 = h3 ^ Math.imul(h2 ^ code, 2869860233);
      h3 = h4 ^ Math.imul(h3 ^ code, 951274213);
      h4 = h1 ^ Math.imul(h4 ^ code, 2716044179);
    }

    h1 = Math.imul(h3 ^ (h1 >>> 18), 597399067);
    h2 = Math.imul(h4 ^ (h2 >>> 22), 2869860233);
    h3 = Math.imul(h1 ^ (h3 >>> 17), 951274213);
    h4 = Math.imul(h2 ^ (h4 >>> 19), 2716044179);

    const state = [
      (h1 ^ h2 ^ h3 ^ h4) >>> 0,
      (h2 ^ h1) >>> 0,
      (h3 ^ h1) >>> 0,
      (h4 ^ h1) >>> 0,
    ];

    if (state.every((value) => value === 0)) {
      state[0] = 0x9e3779b9;
    }
    return state;
  }

  function validateState(state) {
    if (!Array.isArray(state) || state.length !== 4) {
      throw new TypeError('Random state must be an array of four unsigned integers.');
    }
    const normalized = state.map((value) => {
      if (!Number.isInteger(value) || value < 0 || value > 0xffffffff) {
        throw new RangeError('Random state values must be unsigned 32-bit integers.');
      }
      return value >>> 0;
    });
    if (normalized.every((value) => value === 0)) {
      throw new RangeError('The all-zero random state is invalid.');
    }
    return normalized;
  }

  class SeededRandom {
    constructor(seedOrSnapshot = 'INFINITE-PATHS') {
      if (seedOrSnapshot && typeof seedOrSnapshot === 'object' && !Array.isArray(seedOrSnapshot)) {
        const snapshot = seedOrSnapshot;
        if (snapshot.algorithm !== RNG_ALGORITHM) {
          throw new RangeError(`Unsupported random algorithm: ${snapshot.algorithm}`);
        }
        this.initialSeed = String(snapshot.initialSeed || 'INFINITE-PATHS');
        this.state = validateState(snapshot.state);
        this.draws = Number.isSafeInteger(snapshot.draws) && snapshot.draws >= 0 ? snapshot.draws : 0;
      } else {
        this.initialSeed = String(seedOrSnapshot ?? 'INFINITE-PATHS').normalize('NFKC');
        this.state = hashSeed(this.initialSeed);
        this.draws = 0;
      }
    }

    nextUint32() {
      const state = this.state;
      const result = Math.imul(rotateLeft(Math.imul(state[1], 5) >>> 0, 7), 9) >>> 0;
      const shifted = (state[1] << 9) >>> 0;

      state[2] = (state[2] ^ state[0]) >>> 0;
      state[3] = (state[3] ^ state[1]) >>> 0;
      state[1] = (state[1] ^ state[2]) >>> 0;
      state[0] = (state[0] ^ state[3]) >>> 0;
      state[2] = (state[2] ^ shifted) >>> 0;
      state[3] = rotateLeft(state[3], 11);
      this.draws += 1;

      return result;
    }

    nextFloat() {
      return this.nextUint32() / UINT32_RANGE;
    }

    integer(minimum, maximum) {
      if (!Number.isSafeInteger(minimum) || !Number.isSafeInteger(maximum)) {
        throw new TypeError('Random integer bounds must be safe integers.');
      }
      if (maximum < minimum) {
        throw new RangeError('Random integer maximum must be greater than or equal to minimum.');
      }

      const range = maximum - minimum + 1;
      if (range <= 0 || range > UINT32_RANGE) {
        throw new RangeError('Random integer range must fit within 32 bits.');
      }

      const rejectionLimit = Math.floor(UINT32_RANGE / range) * range;
      let value;
      do {
        value = this.nextUint32();
      } while (value >= rejectionLimit);

      return minimum + (value % range);
    }

    chance(probability = 0.5) {
      if (typeof probability !== 'number' || probability < 0 || probability > 1) {
        throw new RangeError('Chance probability must be between 0 and 1.');
      }
      return this.nextFloat() < probability;
    }

    pick(items) {
      if (!Array.isArray(items) || items.length === 0) {
        throw new RangeError('Random pick requires a non-empty array.');
      }
      return items[this.integer(0, items.length - 1)];
    }

    weightedPick(entries) {
      if (!Array.isArray(entries) || entries.length === 0) {
        throw new RangeError('Weighted pick requires a non-empty array.');
      }

      let totalWeight = 0;
      for (const entry of entries) {
        const weight = Number(entry?.weight);
        if (!Number.isFinite(weight) || weight < 0) {
          throw new RangeError('Weighted entries require finite, non-negative weights.');
        }
        totalWeight += weight;
      }
      if (totalWeight <= 0) {
        throw new RangeError('At least one weighted entry must have a positive weight.');
      }

      let cursor = this.nextFloat() * totalWeight;
      for (const entry of entries) {
        cursor -= Number(entry.weight);
        if (cursor < 0) {
          return entry.value;
        }
      }
      return entries[entries.length - 1].value;
    }

    shuffle(items) {
      if (!Array.isArray(items)) {
        throw new TypeError('Shuffle requires an array.');
      }
      const copy = items.slice();
      for (let index = copy.length - 1; index > 0; index -= 1) {
        const swapIndex = this.integer(0, index);
        [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
      }
      return copy;
    }

    derive(namespace) {
      const label = String(namespace ?? '').normalize('NFKC');
      if (!label) {
        throw new RangeError('Derived random streams require a non-empty namespace.');
      }
      return new SeededRandom(`${this.initialSeed}::${label}`);
    }

    snapshot() {
      return {
        algorithm: RNG_ALGORITHM,
        initialSeed: this.initialSeed,
        state: this.state.slice(),
        draws: this.draws,
      };
    }

    sequence(count) {
      if (!Number.isSafeInteger(count) || count < 0 || count > 100000) {
        throw new RangeError('Sequence count must be an integer between 0 and 100000.');
      }
      return Array.from({ length: count }, () => this.nextUint32());
    }

    static fromSnapshot(snapshot) {
      return new SeededRandom(snapshot);
    }

    static fingerprint(seedText) {
      const generator = new SeededRandom(seedText).derive('foundation-fingerprint');
      const hex = generator
        .sequence(4)
        .map((value) => value.toString(16).padStart(8, '0').toUpperCase())
        .join('');
      return hex.match(/.{1,4}/g).join('-');
    }
  }

  return { RNG_ALGORITHM, SeededRandom, hashSeed };
});

/* ===== src/js/storage/settings-store.js ===== */
(function (root, factory) {
  const namespace = (root.InfinitePaths = root.InfinitePaths || {});
  const exported = factory(namespace);
  Object.assign(namespace, exported);
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = exported;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function (IP) {
  'use strict';

  const PREFERENCES_KEY = 'infinitePaths.preferences';
  const PREFERENCES_SCHEMA_VERSION = IP.APP_CONFIG?.preferencesSchemaVersion || 1;

  const DEFAULT_SETTINGS = Object.freeze({
    theme: 'system',
    fontFamily: 'system',
    fontScale: 1,
    lineHeight: 1.7,
    paragraphSpacing: 1,
    contrast: 'standard',
    motion: 'system',
    readingWidth: 'comfortable',
  });

  const allowed = Object.freeze({
    theme: new Set(['system', 'light', 'dark']),
    fontFamily: new Set(['system', 'readable']),
    contrast: new Set(['standard', 'high']),
    motion: new Set(['system', 'reduced', 'full']),
    readingWidth: new Set(['compact', 'comfortable', 'wide']),
  });

  function clampNumber(value, minimum, maximum, step) {
    const numeric = Number(value);
    if (!Number.isFinite(numeric)) {
      return minimum;
    }
    const clamped = Math.min(maximum, Math.max(minimum, numeric));
    const stepped = Math.round(clamped / step) * step;
    return Number(stepped.toFixed(3));
  }

  function sanitizeSettings(candidate = {}) {
    const source = candidate && typeof candidate === 'object' ? candidate : {};
    return {
      theme: allowed.theme.has(source.theme) ? source.theme : DEFAULT_SETTINGS.theme,
      fontFamily: allowed.fontFamily.has(source.fontFamily)
        ? source.fontFamily
        : DEFAULT_SETTINGS.fontFamily,
      fontScale: clampNumber(source.fontScale ?? DEFAULT_SETTINGS.fontScale, 0.9, 1.35, 0.05),
      lineHeight: clampNumber(source.lineHeight ?? DEFAULT_SETTINGS.lineHeight, 1.45, 2.05, 0.05),
      paragraphSpacing: clampNumber(
        source.paragraphSpacing ?? DEFAULT_SETTINGS.paragraphSpacing,
        0.7,
        1.6,
        0.1,
      ),
      contrast: allowed.contrast.has(source.contrast) ? source.contrast : DEFAULT_SETTINGS.contrast,
      motion: allowed.motion.has(source.motion) ? source.motion : DEFAULT_SETTINGS.motion,
      readingWidth: allowed.readingWidth.has(source.readingWidth)
        ? source.readingWidth
        : DEFAULT_SETTINGS.readingWidth,
    };
  }

  class MemoryStorage {
    constructor() {
      this.values = new Map();
    }

    getItem(key) {
      return this.values.has(key) ? this.values.get(key) : null;
    }

    setItem(key, value) {
      this.values.set(key, String(value));
    }

    removeItem(key) {
      this.values.delete(key);
    }
  }

  function resolveBrowserStorage() {
    try {
      return globalThis.localStorage || null;
    } catch (_error) {
      return null;
    }
  }

  class SettingsStore {
    constructor(storage = resolveBrowserStorage(), key = PREFERENCES_KEY) {
      this.key = key;
      this.storage = storage || new MemoryStorage();
      this.persistent = Boolean(storage);
      this.lastError = null;
    }

    load() {
      this.lastError = null;
      try {
        const serialized = this.storage.getItem(this.key);
        if (!serialized) {
          return sanitizeSettings(DEFAULT_SETTINGS);
        }
        const parsed = JSON.parse(serialized);
        const values = parsed?.values && typeof parsed.values === 'object' ? parsed.values : parsed;
        return sanitizeSettings(values);
      } catch (error) {
        this.lastError = error;
        return sanitizeSettings(DEFAULT_SETTINGS);
      }
    }

    save(candidate) {
      const settings = sanitizeSettings(candidate);
      const payload = {
        schemaVersion: PREFERENCES_SCHEMA_VERSION,
        updatedAt: new Date().toISOString(),
        values: settings,
      };

      try {
        this.storage.setItem(this.key, JSON.stringify(payload));
        this.lastError = null;
      } catch (error) {
        this.lastError = error;
        if (this.persistent) {
          this.storage = new MemoryStorage();
          this.persistent = false;
          this.storage.setItem(this.key, JSON.stringify(payload));
        }
      }
      return settings;
    }

    reset() {
      return this.save(DEFAULT_SETTINGS);
    }

    status() {
      return {
        persistent: this.persistent,
        lastError: this.lastError ? String(this.lastError.message || this.lastError) : null,
      };
    }
  }

  return {
    DEFAULT_SETTINGS,
    MemoryStorage,
    PREFERENCES_KEY,
    SettingsStore,
    sanitizeSettings,
  };
});

/* ===== src/js/storage/database.js ===== */
(function (root, factory) {
  const namespace = (root.InfinitePaths = root.InfinitePaths || {});
  const exported = factory(namespace);
  Object.assign(namespace, exported);
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = exported;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function (IP) {
  'use strict';

  const STORE_NAMES = Object.freeze({
    appMeta: 'appMeta',
    campaigns: 'campaigns',
    saves: 'saves',
    archives: 'archives',
    backups: 'backups',
  });

  function requestToPromise(request) {
    return new Promise((resolve, reject) => {
      request.addEventListener('success', () => resolve(request.result), { once: true });
      request.addEventListener('error', () => reject(request.error || new Error('IndexedDB request failed.')), {
        once: true,
      });
    });
  }

  function transactionToPromise(transaction) {
    return new Promise((resolve, reject) => {
      transaction.addEventListener('complete', () => resolve(), { once: true });
      transaction.addEventListener(
        'abort',
        () => reject(transaction.error || new Error('IndexedDB transaction was aborted.')),
        { once: true },
      );
      transaction.addEventListener(
        'error',
        () => reject(transaction.error || new Error('IndexedDB transaction failed.')),
        { once: true },
      );
    });
  }

  function createStoreIfMissing(database, name, options) {
    return database.objectStoreNames.contains(name)
      ? null
      : database.createObjectStore(name, options);
  }

  function ensureIndex(store, name, keyPath, options = {}) {
    if (store && !store.indexNames.contains(name)) {
      store.createIndex(name, keyPath, options);
    }
  }

  class InfinitePathsDatabase {
    constructor(indexedDBFactory = globalThis.indexedDB, config = IP.APP_CONFIG?.database) {
      this.indexedDB = indexedDBFactory;
      this.name = config?.name || 'infinite-paths';
      this.version = config?.version || 1;
      this.database = null;
      this.openPromise = null;
    }

    async open() {
      if (this.database) {
        return this.database;
      }
      if (this.openPromise) {
        return this.openPromise;
      }
      if (!this.indexedDB) {
        throw new Error('IndexedDB is unavailable in this browser context.');
      }

      this.openPromise = new Promise((resolve, reject) => {
        const request = this.indexedDB.open(this.name, this.version);

        request.addEventListener('upgradeneeded', (event) => {
          const database = request.result;
          const transaction = request.transaction;

          const appMeta = createStoreIfMissing(database, STORE_NAMES.appMeta, { keyPath: 'key' });
          const campaigns = createStoreIfMissing(database, STORE_NAMES.campaigns, { keyPath: 'id' });
          const saves = createStoreIfMissing(database, STORE_NAMES.saves, { keyPath: 'id' });
          const archives = createStoreIfMissing(database, STORE_NAMES.archives, { keyPath: 'id' });
          const backups = createStoreIfMissing(database, STORE_NAMES.backups, { keyPath: 'id' });

          const campaignStore = campaigns || transaction.objectStore(STORE_NAMES.campaigns);
          ensureIndex(campaignStore, 'status', 'status');
          ensureIndex(campaignStore, 'genre', 'genre');
          ensureIndex(campaignStore, 'updatedAt', 'updatedAt');

          const saveStore = saves || transaction.objectStore(STORE_NAMES.saves);
          ensureIndex(saveStore, 'campaignId', 'campaignId');
          ensureIndex(saveStore, 'slotType', 'slotType');
          ensureIndex(saveStore, 'updatedAt', 'updatedAt');

          const archiveStore = archives || transaction.objectStore(STORE_NAMES.archives);
          ensureIndex(archiveStore, 'genre', 'genre');
          ensureIndex(archiveStore, 'outcome', 'outcome');
          ensureIndex(archiveStore, 'completedAt', 'completedAt');

          const backupStore = backups || transaction.objectStore(STORE_NAMES.backups);
          ensureIndex(backupStore, 'campaignId', 'campaignId');
          ensureIndex(backupStore, 'createdAt', 'createdAt');

          if (event.oldVersion < 1 && appMeta) {
            appMeta.put({ key: 'databaseSchemaVersion', value: 1, updatedAt: new Date().toISOString() });
          }
        });

        request.addEventListener('blocked', () => {
          reject(new Error('Database upgrade is blocked by another open Infinite Paths tab.'));
        });

        request.addEventListener('error', () => {
          reject(request.error || new Error('Unable to open the Infinite Paths database.'));
        });

        request.addEventListener('success', () => {
          this.database = request.result;
          this.database.addEventListener('versionchange', () => this.close());
          resolve(this.database);
        });
      }).finally(() => {
        this.openPromise = null;
      });

      return this.openPromise;
    }

    close() {
      this.database?.close();
      this.database = null;
    }

    async run(storeName, mode, operation) {
      const database = await this.open();
      if (!database.objectStoreNames.contains(storeName)) {
        throw new RangeError(`Unknown IndexedDB store: ${storeName}`);
      }
      const transaction = database.transaction(storeName, mode);
      const store = transaction.objectStore(storeName);
      const request = operation(store);
      const result = request ? await requestToPromise(request) : undefined;
      await transactionToPromise(transaction);
      return result;
    }

    put(storeName, value) {
      return this.run(storeName, 'readwrite', (store) => store.put(value));
    }

    get(storeName, key) {
      return this.run(storeName, 'readonly', (store) => store.get(key));
    }

    delete(storeName, key) {
      return this.run(storeName, 'readwrite', (store) => store.delete(key));
    }

    getAll(storeName) {
      return this.run(storeName, 'readonly', (store) => store.getAll());
    }

    count(storeName) {
      return this.run(storeName, 'readonly', (store) => store.count());
    }

    setMeta(key, value) {
      return this.put(STORE_NAMES.appMeta, {
        key,
        value,
        updatedAt: new Date().toISOString(),
      });
    }

    async getMeta(key) {
      const record = await this.get(STORE_NAMES.appMeta, key);
      return record?.value;
    }

    async healthCheck() {
      const token = `health-${Date.now()}-${globalThis.performance?.now?.() || 0}`;
      const key = '__healthcheck__';
      await this.setMeta(key, token);
      const stored = await this.getMeta(key);
      await this.delete(STORE_NAMES.appMeta, key);
      if (stored !== token) {
        throw new Error('IndexedDB health check returned mismatched data.');
      }
      return { ok: true, checkedAt: new Date().toISOString() };
    }
  }

  return {
    InfinitePathsDatabase,
    STORE_NAMES,
    requestToPromise,
    transactionToPromise,
  };
});

/* ===== src/js/ui/preferences.js ===== */
(function (root, factory) {
  const namespace = (root.InfinitePaths = root.InfinitePaths || {});
  const exported = factory();
  Object.assign(namespace, exported);
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = exported;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const THEME_COLORS = Object.freeze({
    light: '#f5f0e6',
    dark: '#0d1517',
  });

  function mediaMatches(query) {
    return typeof window !== 'undefined' && window.matchMedia?.(query).matches === true;
  }

  function resolveTheme(preference) {
    if (preference === 'light' || preference === 'dark') {
      return preference;
    }
    return mediaMatches('(prefers-color-scheme: dark)') ? 'dark' : 'light';
  }

  function resolveMotion(preference) {
    if (preference === 'reduced') {
      return 'reduced';
    }
    if (preference === 'full') {
      return 'full';
    }
    return mediaMatches('(prefers-reduced-motion: reduce)') ? 'reduced' : 'full';
  }

  function applyPreferences(settings) {
    if (typeof document === 'undefined') {
      return;
    }

    const rootElement = document.documentElement;
    const resolvedTheme = resolveTheme(settings.theme);
    rootElement.dataset.theme = resolvedTheme;
    rootElement.dataset.contrast = settings.contrast;
    rootElement.dataset.motion = resolveMotion(settings.motion);
    rootElement.dataset.font = settings.fontFamily;
    rootElement.dataset.readingWidth = settings.readingWidth;
    rootElement.style.setProperty('--reader-font-scale', String(settings.fontScale));
    rootElement.style.setProperty('--reader-line-height', String(settings.lineHeight));
    rootElement.style.setProperty('--reader-paragraph-space', `${settings.paragraphSpacing}rem`);

    const themeMeta = document.querySelector('meta[name="theme-color"]');
    if (themeMeta) {
      themeMeta.setAttribute('content', THEME_COLORS[resolvedTheme]);
    }
  }

  function watchSystemPreferences(getSettings, onChange = applyPreferences) {
    if (typeof window === 'undefined' || !window.matchMedia) {
      return () => {};
    }

    const mediaQueries = [
      window.matchMedia('(prefers-color-scheme: dark)'),
      window.matchMedia('(prefers-reduced-motion: reduce)'),
    ];
    const listener = () => onChange(getSettings());

    for (const query of mediaQueries) {
      query.addEventListener?.('change', listener);
    }

    return () => {
      for (const query of mediaQueries) {
        query.removeEventListener?.('change', listener);
      }
    };
  }

  return { applyPreferences, resolveMotion, resolveTheme, watchSystemPreferences };
});

/* ===== src/js/ui/router.js ===== */
(function (root, factory) {
  const namespace = (root.InfinitePaths = root.InfinitePaths || {});
  const exported = factory();
  Object.assign(namespace, exported);
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = exported;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  class HashRouter {
    constructor(routes, onRouteChange, fallbackRoute = 'home') {
      this.routes = new Set(routes);
      this.onRouteChange = onRouteChange;
      this.fallbackRoute = fallbackRoute;
      this.currentRoute = null;
      this.started = false;
      this.handleHashChange = this.handleHashChange.bind(this);
    }

    parseHash() {
      const raw = globalThis.location?.hash || '';
      const route = raw.replace(/^#\/?/, '').split(/[/?]/)[0].trim();
      return this.routes.has(route) ? route : this.fallbackRoute;
    }

    start() {
      if (this.started) {
        return;
      }
      this.started = true;
      globalThis.addEventListener?.('hashchange', this.handleHashChange);
      const route = this.parseHash();
      if (!globalThis.location.hash || !this.routes.has(route)) {
        globalThis.history?.replaceState?.(null, '', `#/${route}`);
      }
      this.commit(route, { initial: true });
    }

    stop() {
      globalThis.removeEventListener?.('hashchange', this.handleHashChange);
      this.started = false;
    }

    navigate(route, { replace = false } = {}) {
      const target = this.routes.has(route) ? route : this.fallbackRoute;
      const hash = `#/${target}`;
      if (replace) {
        globalThis.history?.replaceState?.(null, '', hash);
        this.commit(target, { initial: false });
      } else if (globalThis.location.hash !== hash) {
        globalThis.location.hash = hash;
      } else {
        this.commit(target, { initial: false });
      }
    }

    handleHashChange() {
      const route = this.parseHash();
      if (!this.routes.has(route)) {
        this.navigate(this.fallbackRoute, { replace: true });
        return;
      }
      this.commit(route, { initial: false });
    }

    commit(route, metadata) {
      this.currentRoute = route;
      this.onRouteChange(route, metadata);
    }
  }

  return { HashRouter };
});

/* ===== src/js/ui/toast.js ===== */
(function (root, factory) {
  const namespace = (root.InfinitePaths = root.InfinitePaths || {});
  const exported = factory(namespace);
  Object.assign(namespace, exported);
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = exported;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function (IP) {
  'use strict';

  class ToastManager {
    constructor(region) {
      this.region = region;
      this.active = new Set();
    }

    show(message, options = {}) {
      const {
        tone = 'info',
        duration = 5000,
        actionLabel = null,
        onAction = null,
        persistent = false,
      } = options;

      const toast = IP.h('div', {
        className: 'toast',
        attrs: { role: tone === 'error' ? 'alert' : 'status' },
        dataset: { tone },
      });
      const messageNode = IP.h('p', { className: 'toast__message', text: message });
      const controls = IP.h('div', { className: 'toast__controls' });
      toast.append(messageNode, controls);

      let timer = null;
      const dismiss = () => {
        if (!this.active.has(toast)) {
          return;
        }
        if (timer) {
          globalThis.clearTimeout(timer);
        }
        this.active.delete(toast);
        toast.dataset.state = 'leaving';
        globalThis.setTimeout(() => toast.remove(), 180);
      };

      if (actionLabel && typeof onAction === 'function') {
        controls.append(
          IP.h('button', {
            className: 'button button--small button--accent',
            text: actionLabel,
            attrs: { type: 'button' },
            on: {
              click: async () => {
                await onAction();
                dismiss();
              },
            },
          }),
        );
      }

      controls.append(
        IP.h('button', {
          className: 'toast__dismiss',
          text: 'Dismiss',
          attrs: { type: 'button', 'aria-label': 'Dismiss notification' },
          on: { click: dismiss },
        }),
      );

      this.active.add(toast);
      this.region.append(toast);
      requestAnimationFrame(() => {
        toast.dataset.state = 'visible';
      });

      if (!persistent && duration > 0) {
        timer = globalThis.setTimeout(dismiss, duration);
      }
      return { dismiss };
    }

    clear() {
      for (const toast of [...this.active]) {
        toast.remove();
      }
      this.active.clear();
    }
  }

  return { ToastManager };
});

/* ===== src/js/ui/service-worker.js ===== */
(function (root, factory) {
  const namespace = (root.InfinitePaths = root.InfinitePaths || {});
  const exported = factory();
  Object.assign(namespace, exported);
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = exported;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  async function registerAppServiceWorker({ onUpdate, onStateChange } = {}) {
    if (!('serviceWorker' in navigator)) {
      onStateChange?.({ state: 'unsupported', detail: 'Service workers are unavailable.' });
      return null;
    }

    onStateChange?.({ state: 'registering', detail: 'Registering offline shell.' });

    try {
      const registration = await navigator.serviceWorker.register('./sw.js', {
        scope: './',
        updateViaCache: 'none',
      });

      const reportWaiting = () => {
        if (registration.waiting && navigator.serviceWorker.controller) {
          onUpdate?.(registration);
        }
      };

      reportWaiting();
      registration.addEventListener('updatefound', () => {
        const worker = registration.installing;
        if (!worker) {
          return;
        }
        onStateChange?.({ state: 'updating', detail: 'Caching a newer application shell.' });
        worker.addEventListener('statechange', () => {
          if (worker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              onStateChange?.({ state: 'update-ready', detail: 'A newer shell is ready.' });
              onUpdate?.(registration);
            } else {
              onStateChange?.({ state: 'ready', detail: 'Offline shell cached.' });
            }
          }
          if (worker.state === 'redundant') {
            onStateChange?.({ state: 'error', detail: 'The service worker became redundant.' });
          }
        });
      });

      await navigator.serviceWorker.ready;
      if (!registration.waiting) {
        onStateChange?.({ state: 'ready', detail: 'Offline shell cached.' });
      }
      return registration;
    } catch (error) {
      onStateChange?.({
        state: 'error',
        detail: String(error?.message || 'Service worker registration failed.'),
      });
      return null;
    }
  }

  function activateWaitingWorker(registration) {
    if (!registration?.waiting) {
      return false;
    }
    registration.waiting.postMessage({ type: 'SKIP_WAITING' });
    return true;
  }

  return { activateWaitingWorker, registerAppServiceWorker };
});

/* ===== src/js/views/home-view.js ===== */
(function (root, factory) {
  const namespace = (root.InfinitePaths = root.InfinitePaths || {});
  const exported = factory(namespace);
  Object.assign(namespace, exported);
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = exported;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function (IP) {
  'use strict';

  function stateTone(state) {
    if (['ready', 'installed', 'persistent'].includes(state)) {
      return 'good';
    }
    if (['error', 'unavailable'].includes(state)) {
      return 'bad';
    }
    return 'neutral';
  }

  function statusTile(label, value, state = 'neutral') {
    return IP.h(
      'div',
      { className: 'status-tile' },
      IP.h('span', { className: 'status-tile__label', text: label }),
      IP.h('strong', {
        className: 'status-tile__value',
        text: value,
        dataset: { tone: stateTone(state) },
      }),
    );
  }

  function renderHomeView(container, context) {
    IP.clearNode(container);
    container.className = 'view view--home';

    const hero = IP.h(
      'section',
      { className: 'hero-card' },
      IP.h('div', { className: 'hero-card__path-mark', attrs: { 'aria-hidden': 'true' } }),
      IP.h('p', {
        className: 'eyebrow',
        text: `FOUNDATION BUILD · v${context.appConfig.version}`,
      }),
      IP.h('h1', { id: 'page-title', text: 'Every path begins with rules that hold.' }),
      IP.h('p', {
        className: 'hero-card__lead',
        text:
          'This installable foundation establishes the reader shell, deterministic seed engine, local data layer, accessibility controls, and offline update system for Infinite Paths.',
      }),
      IP.h(
        'div',
        { className: 'chip-row', attrs: { 'aria-label': 'Foundation capabilities' } },
        IP.h('span', { className: 'chip', text: 'Portrait-first' }),
        IP.h('span', { className: 'chip', text: 'Offline shell' }),
        IP.h('span', { className: 'chip', text: 'No tracking' }),
        IP.h('span', { className: 'chip', text: 'Seeded logic' }),
      ),
    );

    const settingsStatus = context.settingsStore.status();
    const statusGrid = IP.h(
      'section',
      { className: 'status-grid', attrs: { 'aria-label': 'Application readiness' } },
      statusTile('Network', context.networkOnline ? 'Online' : 'Offline', context.networkOnline ? 'ready' : 'neutral'),
      statusTile(
        'Offline shell',
        context.serviceWorkerStatus.state === 'ready' ? 'Cached' : context.serviceWorkerStatus.label,
        context.serviceWorkerStatus.state,
      ),
      statusTile(
        'Local database',
        context.databaseStatus.state === 'ready' ? 'Healthy' : context.databaseStatus.label,
        context.databaseStatus.state,
      ),
      statusTile(
        'Preferences',
        settingsStatus.persistent ? 'Saved locally' : 'Session only',
        settingsStatus.persistent ? 'persistent' : 'unavailable',
      ),
    );

    const seedInput = IP.h('input', {
      className: 'text-input',
      attrs: {
        id: 'seed-verifier-input',
        name: 'seed',
        type: 'text',
        autocomplete: 'off',
        autocapitalize: 'characters',
        spellcheck: 'false',
        maxlength: '120',
        placeholder: 'Enter any memorable seed',
      },
    });
    const seedResult = IP.h('div', {
      className: 'seed-result',
      attrs: { id: 'seed-verifier-result', role: 'status', 'aria-live': 'polite' },
    });

    function verifySeed() {
      let seed = seedInput.value.trim();
      if (!seed) {
        seed = IP.createFreshSeed('PATH');
        seedInput.value = seed;
      }
      const generator = new IP.SeededRandom(seed).derive('foundation-preview');
      const preview = Array.from({ length: 5 }, () => generator.integer(0, 99));
      IP.clearNode(seedResult);
      seedResult.append(
        IP.h('p', { className: 'seed-result__label', text: 'Deterministic fingerprint' }),
        IP.h('code', { className: 'seed-result__fingerprint', text: IP.SeededRandom.fingerprint(seed) }),
        IP.h('p', {
          className: 'seed-result__sequence',
          text: `Verification sequence: ${preview.map((value) => String(value).padStart(2, '0')).join(' · ')}`,
        }),
        IP.h('p', {
          className: 'fine-print',
          text: `The same seed and rules version ${context.appConfig.rulesVersion} will reproduce this result.`,
        }),
      );
    }

    const seedForm = IP.h(
      'form',
      {
        className: 'stack',
        on: {
          submit: (event) => {
            event.preventDefault();
            verifySeed();
          },
        },
      },
      IP.h('label', { className: 'field-label', text: 'Seed text', attrs: { for: 'seed-verifier-input' } }),
      seedInput,
      IP.h(
        'div',
        { className: 'button-row' },
        IP.h('button', {
          className: 'button button--primary',
          text: 'Verify seed',
          attrs: { type: 'submit' },
        }),
        IP.h('button', {
          className: 'button button--secondary',
          text: 'Create fresh seed',
          attrs: { type: 'button' },
          on: {
            click: () => {
              seedInput.value = IP.createFreshSeed('PATH');
              verifySeed();
              seedInput.focus();
              seedInput.select();
            },
          },
        }),
      ),
      seedResult,
    );

    const seedCard = IP.h(
      'section',
      { className: 'card' },
      IP.h('p', { className: 'eyebrow', text: 'DETERMINISM CHECK' }),
      IP.h('h2', { text: 'A seed should be a promise, not a suggestion.' }),
      IP.h('p', {
        text:
          'Use the verifier to confirm that a seed produces a stable fingerprint and sequence. This exercises the same versioned random engine reserved for future campaign generation.',
      }),
      seedForm,
    );

    const install = IP.getInstallGuidance();
    const installCard = IP.h(
      'section',
      { className: 'card card--tinted' },
      IP.h('p', { className: 'eyebrow', text: 'IPHONE INSTALLATION' }),
      IP.h('h2', { text: install.title }),
      IP.h('p', { text: install.detail }),
    );
    if (install.steps.length) {
      installCard.append(
        IP.h(
          'ol',
          { className: 'instruction-list' },
          install.steps.map((step) => IP.h('li', { text: step })),
        ),
      );
    } else {
      installCard.append(
        IP.h('div', {
          className: 'inline-status',
          text: 'Standalone display detected',
          dataset: { tone: 'good' },
        }),
      );
    }

    const privacyCard = IP.h(
      'section',
      { className: 'card card--quiet' },
      IP.h('h2', { text: 'Your paths stay on your device.' }),
      IP.h('p', {
        text:
          'This build sends no analytics and uses no account service. Reading preferences live in small local browser storage, while the campaign-ready database foundation uses IndexedDB.',
      }),
      IP.h('p', {
        className: 'fine-print',
        text:
          'The current build intentionally exposes no campaign controls. The creation and save interfaces enter only after their complete data contracts are implemented.',
      }),
    );

    container.append(hero, statusGrid, seedCard, installCard, privacyCard);
  }

  return { renderHomeView };
});

/* ===== src/js/views/settings-view.js ===== */
(function (root, factory) {
  const namespace = (root.InfinitePaths = root.InfinitePaths || {});
  const exported = factory(namespace);
  Object.assign(namespace, exported);
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = exported;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function (IP) {
  'use strict';

  function selectField({ id, label, description, value, options, onChange }) {
    const select = IP.h(
      'select',
      {
        className: 'select-input',
        attrs: { id, name: id },
        on: { change: (event) => onChange(event.target.value) },
      },
      options.map((option) =>
        IP.h('option', {
          text: option.label,
          attrs: { value: option.value, selected: option.value === value },
        }),
      ),
    );

    return IP.h(
      'div',
      { className: 'setting-row' },
      IP.h(
        'div',
        { className: 'setting-row__copy' },
        IP.h('label', { className: 'field-label', text: label, attrs: { for: id } }),
        IP.h('p', { className: 'field-help', text: description }),
      ),
      select,
    );
  }

  function rangeField({ id, label, description, value, min, max, step, format, onChange }) {
    const output = IP.h('output', {
      className: 'range-output',
      text: format(value),
      attrs: { for: id, id: `${id}-output` },
    });
    const input = IP.h('input', {
      className: 'range-input',
      attrs: { id, name: id, type: 'range', min, max, step, value },
      on: {
        input: (event) => {
          const nextValue = Number(event.target.value);
          output.value = format(nextValue);
          output.textContent = format(nextValue);
          onChange(nextValue);
        },
      },
    });

    return IP.h(
      'div',
      { className: 'setting-block' },
      IP.h(
        'div',
        { className: 'setting-block__heading' },
        IP.h('label', { className: 'field-label', text: label, attrs: { for: id } }),
        output,
      ),
      IP.h('p', { className: 'field-help', text: description }),
      input,
    );
  }

  function renderSettingsView(container, context) {
    IP.clearNode(container);
    container.className = 'view view--settings';

    let draft = { ...context.settings };
    const saveStatus = IP.h('p', {
      className: 'save-status',
      attrs: { role: 'status', 'aria-live': 'polite' },
      text: context.settingsStore.status().persistent
        ? 'Changes save automatically on this device.'
        : 'Browser storage is unavailable. Changes last only for this session.',
      dataset: { tone: context.settingsStore.status().persistent ? 'good' : 'warn' },
    });

    const update = (patch) => {
      draft = context.saveSettings({ ...draft, ...patch });
      const status = context.settingsStore.status();
      saveStatus.textContent = status.persistent
        ? `Saved locally at ${new Intl.DateTimeFormat(undefined, {
            hour: 'numeric',
            minute: '2-digit',
            second: '2-digit',
          }).format(new Date())}.`
        : 'Browser storage is unavailable. Changes last only for this session.';
      saveStatus.dataset.tone = status.persistent ? 'good' : 'warn';
    };

    const header = IP.h(
      'header',
      { className: 'view-header' },
      IP.h('p', { className: 'eyebrow', text: 'READING ENVIRONMENT' }),
      IP.h('h1', { id: 'page-title', text: 'Settings' }),
      IP.h('p', {
        text:
          'Tune the interface for long reading sessions. Every control applies immediately and remains independent of future campaign difficulty or content.',
      }),
      saveStatus,
    );

    const appearanceCard = IP.h(
      'section',
      { className: 'card settings-card' },
      IP.h('h2', { text: 'Appearance' }),
      selectField({
        id: 'theme-setting',
        label: 'Theme',
        description: 'Follow the iPhone setting or choose a fixed light or dark palette.',
        value: draft.theme,
        options: [
          { value: 'system', label: 'Follow system' },
          { value: 'light', label: 'Light' },
          { value: 'dark', label: 'Dark' },
        ],
        onChange: (theme) => update({ theme }),
      }),
      selectField({
        id: 'font-family-setting',
        label: 'Typeface',
        description: 'Use the platform typeface or a broader, highly readable sans-serif stack.',
        value: draft.fontFamily,
        options: [
          { value: 'system', label: 'System' },
          { value: 'readable', label: 'Readable sans' },
        ],
        onChange: (fontFamily) => update({ fontFamily }),
      }),
      selectField({
        id: 'contrast-setting',
        label: 'Contrast',
        description: 'High contrast strengthens borders, focus rings, and text separation.',
        value: draft.contrast,
        options: [
          { value: 'standard', label: 'Standard' },
          { value: 'high', label: 'High contrast' },
        ],
        onChange: (contrast) => update({ contrast }),
      }),
      selectField({
        id: 'motion-setting',
        label: 'Motion',
        description: 'Follow system preference, reduce transitions, or allow full interface motion.',
        value: draft.motion,
        options: [
          { value: 'system', label: 'Follow system' },
          { value: 'reduced', label: 'Reduced' },
          { value: 'full', label: 'Full' },
        ],
        onChange: (motion) => update({ motion }),
      }),
    );

    const readingCard = IP.h(
      'section',
      { className: 'card settings-card' },
      IP.h('h2', { text: 'Reading comfort' }),
      rangeField({
        id: 'font-scale-setting',
        label: 'Text size',
        description: 'Scales primary reading text without shrinking controls or status information.',
        value: draft.fontScale,
        min: 0.9,
        max: 1.35,
        step: 0.05,
        format: (value) => `${Math.round(value * 100)}%`,
        onChange: (fontScale) => update({ fontScale }),
      }),
      rangeField({
        id: 'line-height-setting',
        label: 'Line spacing',
        description: 'Changes the vertical breathing room inside narrative paragraphs.',
        value: draft.lineHeight,
        min: 1.45,
        max: 2.05,
        step: 0.05,
        format: (value) => Number(value).toFixed(2),
        onChange: (lineHeight) => update({ lineHeight }),
      }),
      rangeField({
        id: 'paragraph-spacing-setting',
        label: 'Paragraph spacing',
        description: 'Controls separation between paragraphs without fragmenting prose.',
        value: draft.paragraphSpacing,
        min: 0.7,
        max: 1.6,
        step: 0.1,
        format: (value) => `${Number(value).toFixed(1)}×`,
        onChange: (paragraphSpacing) => update({ paragraphSpacing }),
      }),
      selectField({
        id: 'reading-width-setting',
        label: 'Reading width',
        description: 'Choose a narrower measure for focus or a wider measure for larger screens.',
        value: draft.readingWidth,
        options: [
          { value: 'compact', label: 'Compact' },
          { value: 'comfortable', label: 'Comfortable' },
          { value: 'wide', label: 'Wide' },
        ],
        onChange: (readingWidth) => update({ readingWidth }),
      }),
    );

    const sampleCard = IP.h(
      'section',
      { className: 'card reader-sample' },
      IP.h('p', { className: 'eyebrow', text: 'LIVE READING SAMPLE' }),
      IP.h('h2', { text: 'The road beneath the rain' }),
      IP.h('div', { className: 'reader-prose' },
        IP.h('p', {
          text:
            'Rain had erased the smaller tracks, but not the deep twin grooves that turned away from the bridge. Someone had brought a wagon through after midnight, when the watch lanterns were supposed to be burning.',
        }),
        IP.h('p', {
          text:
            'Mira crouched beside the nearest rut without touching it. “They wanted us looking at the river,” she said. Her voice stayed quiet, though the empty road carried every word. “That means whatever matters went the other way.”',
        }),
      ),
    );

    const resetCard = IP.h(
      'section',
      { className: 'card card--quiet reset-card' },
      IP.h(
        'div',
        null,
        IP.h('h2', { text: 'Restore reading defaults' }),
        IP.h('p', {
          text: 'This changes interface preferences only. It does not erase campaign data or archives.',
        }),
      ),
      IP.h('button', {
        className: 'button button--secondary',
        text: 'Restore defaults',
        attrs: { type: 'button' },
        on: {
          click: () => {
            context.resetSettings();
          },
        },
      }),
    );

    container.append(header, appearanceCard, readingCard, sampleCard, resetCard);
  }

  return { renderSettingsView };
});

/* ===== src/js/views/system-view.js ===== */
(function (root, factory) {
  const namespace = (root.InfinitePaths = root.InfinitePaths || {});
  const exported = factory(namespace);
  Object.assign(namespace, exported);
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = exported;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function (IP) {
  'use strict';

  function diagnosticRow(label, value, tone = 'neutral') {
    return IP.h(
      'div',
      { className: 'diagnostic-row' },
      IP.h('dt', { text: label }),
      IP.h('dd', { text: value, dataset: { tone } }),
    );
  }

  function buildDiagnostics(context) {
    const settingsStatus = context.settingsStore.status();
    return [
      `${context.appConfig.name} diagnostics`,
      `App version: ${context.appConfig.version}`,
      `Build: ${context.appConfig.buildId}`,
      `Rules version: ${context.appConfig.rulesVersion}`,
      `Save format: ${context.appConfig.saveFormatVersion}`,
      `Content schema: ${context.appConfig.contentSchemaVersion}`,
      `Route: ${context.currentRoute}`,
      `Network: ${context.networkOnline ? 'online' : 'offline'}`,
      `Standalone: ${IP.isStandalone() ? 'yes' : 'no'}`,
      `Service worker: ${context.serviceWorkerStatus.state} (${context.serviceWorkerStatus.detail})`,
      `IndexedDB: ${context.databaseStatus.state} (${context.databaseStatus.detail})`,
      `Preferences persistent: ${settingsStatus.persistent ? 'yes' : 'no'}`,
      `User agent: ${navigator.userAgent}`,
      `Generated: ${new Date().toISOString()}`,
    ].join('\n');
  }

  async function copyText(text) {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return;
    }
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.append(textarea);
    textarea.select();
    const copied = document.execCommand('copy');
    textarea.remove();
    if (!copied) {
      throw new Error('The browser did not permit clipboard access.');
    }
  }

  function renderSystemView(container, context) {
    IP.clearNode(container);
    container.className = 'view view--system';

    const header = IP.h(
      'header',
      { className: 'view-header' },
      IP.h('p', { className: 'eyebrow', text: 'FOUNDATION HEALTH' }),
      IP.h('h1', { id: 'page-title', text: 'System' }),
      IP.h('p', {
        text:
          'Inspect the local application shell without exposing campaign internals. These checks are safe and do not alter legitimate game state.',
      }),
    );

    const statusList = IP.h(
      'dl',
      { className: 'diagnostic-list' },
      diagnosticRow('Application', `v${context.appConfig.version}`),
      diagnosticRow('Build', context.appConfig.buildId),
      diagnosticRow('Milestone', context.appConfig.milestone),
      diagnosticRow('Network', context.networkOnline ? 'Online' : 'Offline', context.networkOnline ? 'good' : 'warn'),
      diagnosticRow(
        'Offline shell',
        context.serviceWorkerStatus.detail,
        context.serviceWorkerStatus.state === 'ready' ? 'good' : context.serviceWorkerStatus.state === 'error' ? 'bad' : 'neutral',
      ),
      diagnosticRow(
        'IndexedDB',
        context.databaseStatus.detail,
        context.databaseStatus.state === 'ready' ? 'good' : context.databaseStatus.state === 'error' ? 'bad' : 'neutral',
      ),
      diagnosticRow('Display mode', IP.isStandalone() ? 'Installed web app' : 'Browser tab'),
      diagnosticRow('Rules version', context.appConfig.rulesVersion),
      diagnosticRow('Save format', String(context.appConfig.saveFormatVersion)),
      diagnosticRow('Content schema', String(context.appConfig.contentSchemaVersion)),
    );

    const overviewCard = IP.h(
      'section',
      { className: 'card' },
      IP.h('h2', { text: 'Build status' }),
      statusList,
    );

    const deterministicOutput = IP.h('div', {
      className: 'test-output',
      text: 'No deterministic test has been run in this view.',
      attrs: { role: 'status', 'aria-live': 'polite' },
    });
    const storageOutput = IP.h('div', {
      className: 'test-output',
      text: 'No database write-read-delete test has been run in this view.',
      attrs: { role: 'status', 'aria-live': 'polite' },
    });

    const checksCard = IP.h(
      'section',
      { className: 'card' },
      IP.h('h2', { text: 'Live integrity checks' }),
      IP.h('p', {
        text:
          'Each check performs real work in the current browser. It does not rely on a prewritten success message.',
      }),
      IP.h(
        'div',
        { className: 'integrity-check' },
        IP.h('div', null,
          IP.h('h3', { text: 'Deterministic random state' }),
          IP.h('p', {
            text: 'Compares two independent generators and verifies snapshot restoration.',
          }),
        ),
        IP.h('button', {
          className: 'button button--secondary',
          text: 'Run seed check',
          attrs: { type: 'button' },
          on: {
            click: () => {
              try {
                const seed = 'INFINITE-PATHS-FOUNDATION-CHECK';
                const first = new IP.SeededRandom(seed);
                const second = new IP.SeededRandom(seed);
                const firstSequence = first.sequence(8);
                const secondSequence = second.sequence(8);
                const snapshot = first.snapshot();
                const restored = IP.SeededRandom.fromSnapshot(snapshot);
                const restoredMatch = first.nextUint32() === restored.nextUint32();
                const equal = firstSequence.every((value, index) => value === secondSequence[index]);
                if (!equal || !restoredMatch) {
                  throw new Error('Generator sequences diverged.');
                }
                deterministicOutput.textContent = `Passed. Fingerprint ${IP.SeededRandom.fingerprint(seed)}; snapshot restored at draw ${snapshot.draws}.`;
                deterministicOutput.dataset.tone = 'good';
              } catch (error) {
                deterministicOutput.textContent = `Failed: ${String(error.message || error)}`;
                deterministicOutput.dataset.tone = 'bad';
              }
            },
          },
        }),
        deterministicOutput,
      ),
      IP.h(
        'div',
        { className: 'integrity-check' },
        IP.h('div', null,
          IP.h('h3', { text: 'IndexedDB round trip' }),
          IP.h('p', {
            text: 'Writes a temporary token, reads it back, verifies it, and removes it.',
          }),
        ),
        IP.h('button', {
          className: 'button button--secondary',
          text: 'Run storage check',
          attrs: { type: 'button', disabled: context.databaseStatus.state !== 'ready' },
          on: {
            click: async (event) => {
              const button = event.currentTarget;
              button.disabled = true;
              storageOutput.textContent = 'Checking local database…';
              storageOutput.dataset.tone = 'neutral';
              try {
                const result = await context.database.healthCheck();
                storageOutput.textContent = `Passed at ${new Intl.DateTimeFormat(undefined, {
                  hour: 'numeric',
                  minute: '2-digit',
                  second: '2-digit',
                }).format(new Date(result.checkedAt))}. Temporary test data was removed.`;
                storageOutput.dataset.tone = 'good';
              } catch (error) {
                storageOutput.textContent = `Failed: ${String(error.message || error)}`;
                storageOutput.dataset.tone = 'bad';
              } finally {
                button.disabled = context.databaseStatus.state !== 'ready';
              }
            },
          },
        }),
        storageOutput,
      ),
    );

    const toolsCard = IP.h(
      'section',
      { className: 'card card--quiet' },
      IP.h('h2', { text: 'Maintenance' }),
      IP.h('p', {
        text:
          'Copy a plain-text diagnostic report or ask the active service worker to check the deployed shell for a newer version.',
      }),
      IP.h(
        'div',
        { className: 'button-row' },
        IP.h('button', {
          className: 'button button--secondary',
          text: 'Copy diagnostics',
          attrs: { type: 'button' },
          on: {
            click: async () => {
              try {
                await copyText(buildDiagnostics(context));
                context.toast.show('Diagnostics copied.', { tone: 'success', duration: 3000 });
              } catch (error) {
                context.toast.show(`Could not copy diagnostics: ${String(error.message || error)}`, {
                  tone: 'error',
                });
              }
            },
          },
        }),
        IP.h('button', {
          className: 'button button--secondary',
          text: 'Check for app update',
          attrs: { type: 'button', disabled: !context.serviceWorkerRegistration },
          on: { click: () => context.checkForUpdate() },
        }),
      ),
    );

    container.append(header, overviewCard, checksCard, toolsCard);
  }

  return { buildDiagnostics, renderSystemView };
});

/* ===== src/js/app.js ===== */
(function (root, factory) {
  const namespace = (root.InfinitePaths = root.InfinitePaths || {});
  const exported = factory(namespace);
  Object.assign(namespace, exported);
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = exported;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function (IP) {
  'use strict';

  function statusRecord(state, detail) {
    const labels = {
      pending: 'Starting',
      registering: 'Registering',
      updating: 'Updating',
      'update-ready': 'Update ready',
      ready: 'Ready',
      unsupported: 'Unsupported',
      unavailable: 'Unavailable',
      error: 'Error',
    };
    return { state, detail, label: labels[state] || state };
  }

  class InfinitePathsApp {
    constructor() {
      this.appConfig = IP.APP_CONFIG;
      this.view = document.getElementById('app-view');
      this.connectionBadge = document.getElementById('connection-badge');
      this.toast = new IP.ToastManager(document.getElementById('toast-region'));
      this.settingsStore = new IP.SettingsStore();
      this.settings = this.settingsStore.load();
      this.database = new IP.InfinitePathsDatabase();
      this.databaseStatus = statusRecord('pending', 'Opening local database.');
      this.serviceWorkerStatus = statusRecord('pending', 'Waiting to register offline shell.');
      this.serviceWorkerRegistration = null;
      this.networkOnline = navigator.onLine;
      this.currentRoute = 'home';
      this.updateToast = null;
      this.reloadedForWorker = false;
      this.cleanupSystemPreferenceWatcher = null;

      this.router = new IP.HashRouter(this.appConfig.routes, (route, metadata) => {
        this.renderRoute(route, { focus: !metadata.initial });
      });
    }

    async start() {
      document.title = this.appConfig.name;
      IP.applyPreferences(this.settings);
      this.cleanupSystemPreferenceWatcher = IP.watchSystemPreferences(
        () => this.settings,
        IP.applyPreferences,
      );
      this.bindGlobalEvents();
      this.updateConnectionBadge();
      this.router.start();

      await Promise.allSettled([this.initializeDatabase(), this.initializeServiceWorker()]);
    }

    bindGlobalEvents() {
      globalThis.addEventListener('online', () => {
        this.networkOnline = true;
        this.updateConnectionBadge();
        this.renderCurrentRoute({ focus: false });
      });
      globalThis.addEventListener('offline', () => {
        this.networkOnline = false;
        this.updateConnectionBadge();
        this.renderCurrentRoute({ focus: false });
      });

      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.addEventListener('controllerchange', () => {
          if (this.reloadedForWorker) {
            return;
          }
          this.reloadedForWorker = true;
          globalThis.location.reload();
        });
      }
    }

    updateConnectionBadge() {
      this.connectionBadge.textContent = this.networkOnline ? 'Online' : 'Offline';
      this.connectionBadge.dataset.state = this.networkOnline ? 'online' : 'offline';
      this.connectionBadge.setAttribute(
        'aria-label',
        this.networkOnline ? 'Network connection online' : 'Network connection offline',
      );
    }

    async initializeDatabase() {
      try {
        await this.database.open();
        await this.database.setMeta('appVersion', this.appConfig.version);
        await this.database.setMeta('buildId', this.appConfig.buildId);
        await this.database.setMeta('saveFormatVersion', this.appConfig.saveFormatVersion);
        await this.database.healthCheck();
        this.databaseStatus = statusRecord('ready', 'Local database opened and passed a round-trip check.');
      } catch (error) {
        this.databaseStatus = statusRecord(
          'error',
          String(error?.message || 'The local database could not be opened.'),
        );
      }
      this.renderCurrentRoute({ focus: false });
    }

    async initializeServiceWorker() {
      this.serviceWorkerRegistration = await IP.registerAppServiceWorker({
        onUpdate: (registration) => this.presentUpdate(registration),
        onStateChange: (nextStatus) => {
          this.serviceWorkerStatus = statusRecord(nextStatus.state, nextStatus.detail);
          this.renderCurrentRoute({ focus: false });
        },
      });

      if (!this.serviceWorkerRegistration && this.serviceWorkerStatus.state === 'pending') {
        this.serviceWorkerStatus = statusRecord('unsupported', 'Offline installation is unavailable.');
      }
      this.renderCurrentRoute({ focus: false });
    }

    presentUpdate(registration) {
      if (this.updateToast) {
        return;
      }
      this.updateToast = this.toast.show('A newer Infinite Paths shell is ready.', {
        tone: 'success',
        persistent: true,
        actionLabel: 'Apply update',
        onAction: async () => {
          const activated = IP.activateWaitingWorker(registration);
          if (!activated) {
            this.toast.show('The waiting update was no longer available.', { tone: 'error' });
          }
          this.updateToast = null;
        },
      });
    }

    saveSettings(candidate) {
      this.settings = this.settingsStore.save(candidate);
      IP.applyPreferences(this.settings);
      return { ...this.settings };
    }

    resetSettings() {
      this.settings = this.settingsStore.reset();
      IP.applyPreferences(this.settings);
      this.toast.show('Reading settings restored.', { tone: 'success', duration: 3000 });
      this.renderRoute('settings', { focus: false });
      return { ...this.settings };
    }

    async checkForUpdate() {
      if (!this.serviceWorkerRegistration) {
        this.toast.show('No active service worker is available to check.', { tone: 'error' });
        return;
      }
      try {
        await this.serviceWorkerRegistration.update();
        if (this.serviceWorkerRegistration.waiting) {
          this.presentUpdate(this.serviceWorkerRegistration);
        } else {
          this.toast.show('Update check finished. No newer shell is waiting.', {
            tone: 'success',
            duration: 4000,
          });
        }
      } catch (error) {
        this.toast.show(`Update check failed: ${String(error?.message || error)}`, { tone: 'error' });
      }
    }

    buildContext() {
      return {
        appConfig: this.appConfig,
        checkForUpdate: () => this.checkForUpdate(),
        currentRoute: this.currentRoute,
        database: this.database,
        databaseStatus: this.databaseStatus,
        networkOnline: this.networkOnline,
        resetSettings: () => this.resetSettings(),
        saveSettings: (candidate) => this.saveSettings(candidate),
        serviceWorkerRegistration: this.serviceWorkerRegistration,
        serviceWorkerStatus: this.serviceWorkerStatus,
        settings: { ...this.settings },
        settingsStore: this.settingsStore,
        toast: this.toast,
      };
    }

    updateNavigation(route) {
      const links = document.querySelectorAll('[data-route]');
      for (const link of links) {
        const active = link.dataset.route === route;
        link.classList.toggle('is-active', active);
        if (active) {
          link.setAttribute('aria-current', 'page');
        } else {
          link.removeAttribute('aria-current');
        }
      }
    }

    renderCurrentRoute(options = {}) {
      if (!this.router.started) {
        return;
      }
      this.renderRoute(this.currentRoute, options);
    }

    renderRoute(route, { focus = true } = {}) {
      this.currentRoute = this.appConfig.routes.includes(route) ? route : 'home';
      this.updateNavigation(this.currentRoute);
      const context = this.buildContext();

      try {
        if (this.currentRoute === 'settings') {
          IP.renderSettingsView(this.view, context);
        } else if (this.currentRoute === 'system') {
          IP.renderSystemView(this.view, context);
        } else {
          IP.renderHomeView(this.view, context);
        }
      } catch (error) {
        this.renderFatalView(error);
      }

      if (focus) {
        IP.focusHeading(this.view);
      }
      globalThis.scrollTo?.({ top: 0, behavior: 'instant' });
    }

    renderFatalView(error) {
      IP.clearNode(this.view);
      this.view.className = 'view';
      this.view.append(
        IP.h(
          'section',
          { className: 'card error-card' },
          IP.h('p', { className: 'eyebrow', text: 'INTERFACE ERROR' }),
          IP.h('h1', { text: 'This view could not be rendered.' }),
          IP.h('p', {
            text:
              'Your local data has not been deleted. Reload the application, then copy diagnostics from the System view if the problem returns.',
          }),
          IP.h('pre', { className: 'error-detail', text: String(error?.stack || error) }),
          IP.h('button', {
            className: 'button button--primary',
            text: 'Reload application',
            attrs: { type: 'button' },
            on: { click: () => globalThis.location.reload() },
          }),
        ),
      );
    }
  }

  return { InfinitePathsApp, statusRecord };
});

/* ===== src/js/main.js ===== */
(function (root, factory) {
  const namespace = (root.InfinitePaths = root.InfinitePaths || {});
  const exported = factory(namespace);
  Object.assign(namespace, exported);
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = exported;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function (IP) {
  'use strict';

  async function boot() {
    const app = new IP.InfinitePathsApp();
    globalThis.infinitePathsApp = app;
    try {
      await app.start();
    } catch (error) {
      app.renderFatalView(error);
      console.error('Infinite Paths failed to start.', error);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, { once: true });
  } else {
    boot();
  }

  return { boot };
});

