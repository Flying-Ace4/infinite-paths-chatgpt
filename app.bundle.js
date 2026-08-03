/* Infinite Paths v0.9.0 | generated from modular source | do not edit this bundle directly */

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

  const PLAYER_PROFILE = Object.freeze({
    profileVersion: 1,
    sex: 'male',
    pronouns: Object.freeze({
      subject: 'he',
      object: 'him',
      possessiveAdjective: 'his',
      possessivePronoun: 'his',
      reflexive: 'himself',
    }),
    romance: Object.freeze({
      orientation: 'heterosexual',
      eligiblePartnerSexes: Object.freeze(['female']),
    }),
  });

  const DIFFICULTY_PROFILES = Object.freeze({
    story: Object.freeze({
      id: 'story',
      name: 'Story',
      description: 'Clearer warnings, stronger reserves, slower escalation, and more room to recover.',
      startingHealth: 100,
      startingMorale: 100,
      startingThreatPressure: 4,
      startingEvacuationReadiness: 42,
      pressurePerTimeSegment: 1,
      sharedTrustThreshold: 11,
      cleanPressureLimit: 88,
      fullRescuePressureLimit: 68,
      fullRescueReadinessMinimum: 54,
      witnessRiskThreshold: 86,
      startingResources: Object.freeze({ light: 4, medicine: 3, resolve: 4 }),
      pressureLabel: 'Forgiving',
    }),
    standard: Object.freeze({
      id: 'standard',
      name: 'Standard',
      description: 'Balanced danger, investigation, resources, and relationship consequences.',
      startingHealth: 100,
      startingMorale: 96,
      startingThreatPressure: 10,
      startingEvacuationReadiness: 30,
      pressurePerTimeSegment: 2,
      sharedTrustThreshold: 15,
      cleanPressureLimit: 78,
      fullRescuePressureLimit: 58,
      fullRescueReadinessMinimum: 58,
      witnessRiskThreshold: 76,
      startingResources: Object.freeze({ light: 3, medicine: 2, resolve: 3 }),
      pressureLabel: 'Balanced',
    }),
    hard: Object.freeze({
      id: 'hard',
      name: 'Hard',
      description: 'Tighter supplies, faster escalation, harsher injuries, and little room for wasted time.',
      startingHealth: 100,
      startingMorale: 92,
      startingThreatPressure: 17,
      startingEvacuationReadiness: 20,
      pressurePerTimeSegment: 3,
      sharedTrustThreshold: 19,
      cleanPressureLimit: 68,
      fullRescuePressureLimit: 50,
      fullRescueReadinessMinimum: 62,
      witnessRiskThreshold: 66,
      startingResources: Object.freeze({ light: 2, medicine: 1, resolve: 2 }),
      pressureLabel: 'Severe',
    }),
    brutal: Object.freeze({
      id: 'brutal',
      name: 'Brutal',
      description: 'No plot armor, scarce reserves, permanent losses, rapid escalation, and lethal compounded mistakes.',
      startingHealth: 100,
      startingMorale: 86,
      startingThreatPressure: 26,
      startingEvacuationReadiness: 10,
      pressurePerTimeSegment: 4,
      sharedTrustThreshold: 23,
      cleanPressureLimit: 58,
      fullRescuePressureLimit: 42,
      fullRescueReadinessMinimum: 66,
      witnessRiskThreshold: 56,
      startingResources: Object.freeze({ light: 1, medicine: 1, resolve: 1 }),
      pressureLabel: 'Unforgiving',
    }),
  });


  const MYSTERY_DIFFICULTY_PROFILES = Object.freeze({
    story: Object.freeze({
      id: 'story',
      name: 'Story',
      description: 'More time, resilient evidence, clearer contradictions, and one careful opportunity to reconsider a weak accusation.',
      startingHealth: 100,
      startingMorale: 100,
      startingTimeRemaining: 12,
      startingCaseStrength: 20,
      startingEvidenceIntegrity: 100,
      startingPublicConfidence: 72,
      accusationStrengthMinimum: 52,
      airtightStrengthMinimum: 78,
      airtightIntegrityMinimum: 68,
      confessionTrustMinimum: 10,
      pressureLabel: 'Forgiving',
      startingResources: Object.freeze({ focus: 4, authority: 3 }),
    }),
    standard: Object.freeze({
      id: 'standard',
      name: 'Standard',
      description: 'Balanced time pressure, witness resistance, evidence risk, and accusation consequences.',
      startingHealth: 100,
      startingMorale: 96,
      startingTimeRemaining: 10,
      startingCaseStrength: 12,
      startingEvidenceIntegrity: 92,
      startingPublicConfidence: 60,
      accusationStrengthMinimum: 58,
      airtightStrengthMinimum: 82,
      airtightIntegrityMinimum: 72,
      confessionTrustMinimum: 14,
      pressureLabel: 'Balanced',
      startingResources: Object.freeze({ focus: 3, authority: 2 }),
    }),
    hard: Object.freeze({
      id: 'hard',
      name: 'Hard',
      description: 'Less time, less cooperative witnesses, fragile evidence, and a demanding prosecution threshold.',
      startingHealth: 100,
      startingMorale: 92,
      startingTimeRemaining: 8,
      startingCaseStrength: 6,
      startingEvidenceIntegrity: 84,
      startingPublicConfidence: 50,
      accusationStrengthMinimum: 64,
      airtightStrengthMinimum: 86,
      airtightIntegrityMinimum: 76,
      confessionTrustMinimum: 18,
      pressureLabel: 'Severe',
      startingResources: Object.freeze({ focus: 2, authority: 1 }),
    }),
    brutal: Object.freeze({
      id: 'brutal',
      name: 'Brutal',
      description: 'No procedural mercy, seven time segments, hostile witnesses, permanent contamination, and immediate ruin for a reckless accusation.',
      startingHealth: 100,
      startingMorale: 86,
      startingTimeRemaining: 7,
      startingCaseStrength: 0,
      startingEvidenceIntegrity: 76,
      startingPublicConfidence: 40,
      accusationStrengthMinimum: 70,
      airtightStrengthMinimum: 90,
      airtightIntegrityMinimum: 80,
      confessionTrustMinimum: 22,
      pressureLabel: 'Unforgiving',
      startingResources: Object.freeze({ focus: 1, authority: 1 }),
    }),
  });

  const APP_CONFIG = Object.freeze({
    name: 'Infinite Paths',
    version: '0.9.0',
    buildId: 'milestone-7-installable-content-packs-2026-08-03',
    milestone: 'Milestone 7: Installable Content-Pack System',
    rulesVersion: '0.9.0',
    contentSchemaVersion: 3,
    contentVersion: 'installable-pack-platform@0.9.0',
    narrativeContentVersion: 'horror-vertical-slice-1.0.0+mystery-foundation-1.0.0',
    narrativeContentVersions: Object.freeze({
      'ip.original.horror-foundation': 'horror-vertical-slice-1.0.0',
      'ip.original.mystery-foundation': 'mystery-foundation-1.0.0',
    }),
    contentVersions: Object.freeze({
      'ip.original.horror-foundation': '0.2.0',
      'ip.original.mystery-foundation': '0.1.0',
    }),
    defaultContentPackId: 'ip.original.horror-foundation',
    defaultContentPackByGenre: Object.freeze({
      horror: 'ip.original.horror-foundation',
      mystery: 'ip.original.mystery-foundation',
    }),
    playerProfile: PLAYER_PROFILE,
    difficultyProfiles: DIFFICULTY_PROFILES,
    mysteryDifficultyProfiles: MYSTERY_DIFFICULTY_PROFILES,
    saveFormatVersion: 2,
    preferencesSchemaVersion: 1,
    manualSaveSlots: 3,
    maximumImportBytes: 8 * 1024 * 1024,
    maximumPackImportBytes: 12 * 1024 * 1024,
    database: Object.freeze({
      name: 'infinite-paths',
      version: 3,
    }),
    routes: Object.freeze(['home', 'new', 'campaign', 'play', 'saves', 'archive', 'settings', 'system', 'packs', 'developer']),
  });

  return { APP_CONFIG, DIFFICULTY_PROFILES, MYSTERY_DIFFICULTY_PROFILES, PLAYER_PROFILE };
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

/* ===== src/js/utils/format.js ===== */
(function (root, factory) {
  const namespace = (root.InfinitePaths = root.InfinitePaths || {});
  const exported = factory();
  Object.assign(namespace, exported);
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = exported;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  function formatDateTime(value, fallback = 'Unknown time') {
    const timestamp = Date.parse(value);
    if (!Number.isFinite(timestamp)) {
      return fallback;
    }
    try {
      return new Intl.DateTimeFormat(undefined, {
        dateStyle: 'medium',
        timeStyle: 'short',
      }).format(new Date(timestamp));
    } catch (_error) {
      return new Date(timestamp).toLocaleString();
    }
  }

  function formatBytes(value) {
    const bytes = Math.max(0, Number(value) || 0);
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(bytes < 10240 ? 1 : 0)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }

  function titleCase(value) {
    return String(value || '')
      .replace(/[-_]+/g, ' ')
      .replace(/\b\w/g, (character) => character.toUpperCase());
  }


  function relationshipLabel(relationship = {}) {
    const trust = Number(relationship.trust || 0);
    const admiration = Number(relationship.admiration || 0);
    const comfort = Number(relationship.comfort || 0);
    const intimacy = Number(relationship.emotionalIntimacy || 0);
    const reliability = Number(relationship.perceivedReliability || 0);
    const suspicion = Number(relationship.suspicion || 0);
    const resentment = Number(relationship.resentment || 0);
    const conflict = Number(relationship.unresolvedConflict || 0);
    const score = trust + admiration * 0.55 + comfort * 0.45 + intimacy * 0.7
      + reliability * 0.45 - suspicion * 0.65 - resentment * 0.8 - conflict * 0.6;
    if (score <= -18) return 'Fractured';
    if (score <= -5) return 'Distrustful';
    if (score < 10) return 'Guarded';
    if (score < 24) return 'Cooperative';
    if (score < 42) return 'Trusted';
    if (score < 65) return 'Close';
    return 'Deeply bonded';
  }

  function relationshipNote(relationship = {}) {
    const trust = Number(relationship.trust || 0);
    const admiration = Number(relationship.admiration || 0);
    const suspicion = Number(relationship.suspicion || 0);
    const protectiveness = Number(relationship.protectiveness || 0);
    const intimacy = Number(relationship.emotionalIntimacy || 0);
    const resentment = Number(relationship.resentment || 0);
    if (resentment >= 8) return 'Unresolved resentment is shaping this relationship.';
    if (suspicion > trust + 4) return 'Your motives are still being watched carefully.';
    if (intimacy >= 8 && trust >= 14) return 'Private trust has begun to matter as much as the mission.';
    if (protectiveness >= 8) return 'Protective instincts are visible even when they go unspoken.';
    if (admiration >= 10) return 'Your judgment has earned genuine admiration.';
    if (trust >= 10) return 'Cooperation has become dependable rather than merely convenient.';
    return 'The relationship is still being decided through actions.';
  }

  function shortHash(value, length = 12) {
    const text = String(value || '');
    if (text.length <= length) return text;
    return `${text.slice(0, length)}…`;
  }

  return { formatBytes, formatDateTime, relationshipLabel, relationshipNote, shortHash, titleCase };
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

/* ===== src/js/core/data-integrity.js ===== */
(function (root, factory) {
  const namespace = (root.InfinitePaths = root.InfinitePaths || {});
  const exported = factory();
  Object.assign(namespace, exported);
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = exported;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const INTEGRITY_ALGORITHM = 'sha256-v1';
  const FORBIDDEN_JSON_KEYS = new Set(['__proto__', 'prototype', 'constructor']);
  const DEFAULT_JSON_LIMITS = Object.freeze({
    maximumBytes: 8 * 1024 * 1024,
    maximumDepth: 80,
    maximumEntries: 100000,
    maximumStringLength: 2 * 1024 * 1024,
  });

  function cloneData(value) {
    if (typeof structuredClone === 'function') {
      return structuredClone(value);
    }
    return JSON.parse(JSON.stringify(value));
  }

  function isPlainObject(value) {
    if (!value || typeof value !== 'object') {
      return false;
    }
    const prototype = Object.getPrototypeOf(value);
    return prototype === Object.prototype || prototype === null;
  }

  function canonicalStringify(value) {
    const seen = new Set();

    function encode(current, path) {
      if (current === null) {
        return 'null';
      }

      const type = typeof current;
      if (type === 'string' || type === 'boolean') {
        return JSON.stringify(current);
      }
      if (type === 'number') {
        if (!Number.isFinite(current)) {
          throw new TypeError(`Non-finite number at ${path}.`);
        }
        return Object.is(current, -0) ? '0' : JSON.stringify(current);
      }
      if (type !== 'object') {
        throw new TypeError(`Unsupported ${type} value at ${path}.`);
      }
      if (seen.has(current)) {
        throw new TypeError(`Circular data at ${path}.`);
      }

      seen.add(current);
      let output;
      if (Array.isArray(current)) {
        const values = current.map((item, index) => {
          if (typeof item === 'undefined') {
            throw new TypeError(`Undefined array item at ${path}[${index}].`);
          }
          return encode(item, `${path}[${index}]`);
        });
        output = `[${values.join(',')}]`;
      } else {
        if (!isPlainObject(current)) {
          throw new TypeError(`Non-plain object at ${path}.`);
        }
        const keys = Object.keys(current).sort();
        const pairs = [];
        for (const key of keys) {
          if (FORBIDDEN_JSON_KEYS.has(key)) {
            throw new TypeError(`Forbidden JSON key “${key}” at ${path}.`);
          }
          if (typeof current[key] === 'undefined') {
            throw new TypeError(`Undefined property at ${path}.${key}.`);
          }
          pairs.push(`${JSON.stringify(key)}:${encode(current[key], `${path}.${key}`)}`);
        }
        output = `{${pairs.join(',')}}`;
      }
      seen.delete(current);
      return output;
    }

    return encode(value, '$');
  }

  function utf8Bytes(input) {
    const text = String(input);
    if (typeof TextEncoder !== 'undefined') {
      return new TextEncoder().encode(text);
    }

    const encoded = unescape(encodeURIComponent(text));
    const bytes = new Uint8Array(encoded.length);
    for (let index = 0; index < encoded.length; index += 1) {
      bytes[index] = encoded.charCodeAt(index);
    }
    return bytes;
  }

  function rotateRight(value, amount) {
    return (value >>> amount) | (value << (32 - amount));
  }

  function sha256Hex(input) {
    const source = input instanceof Uint8Array ? input : utf8Bytes(input);
    const bitLength = source.length * 8;
    const paddedLength = Math.ceil((source.length + 9) / 64) * 64;
    const bytes = new Uint8Array(paddedLength);
    bytes.set(source);
    bytes[source.length] = 0x80;

    const high = Math.floor(bitLength / 0x100000000);
    const low = bitLength >>> 0;
    const view = new DataView(bytes.buffer);
    view.setUint32(paddedLength - 8, high, false);
    view.setUint32(paddedLength - 4, low, false);

    const constants = [
      0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5,
      0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
      0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3,
      0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
      0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc,
      0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
      0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7,
      0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
      0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13,
      0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
      0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3,
      0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
      0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5,
      0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
      0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208,
      0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2,
    ];

    let h0 = 0x6a09e667;
    let h1 = 0xbb67ae85;
    let h2 = 0x3c6ef372;
    let h3 = 0xa54ff53a;
    let h4 = 0x510e527f;
    let h5 = 0x9b05688c;
    let h6 = 0x1f83d9ab;
    let h7 = 0x5be0cd19;
    const words = new Uint32Array(64);

    for (let offset = 0; offset < bytes.length; offset += 64) {
      for (let index = 0; index < 16; index += 1) {
        words[index] = view.getUint32(offset + index * 4, false);
      }
      for (let index = 16; index < 64; index += 1) {
        const s0 = rotateRight(words[index - 15], 7) ^ rotateRight(words[index - 15], 18) ^ (words[index - 15] >>> 3);
        const s1 = rotateRight(words[index - 2], 17) ^ rotateRight(words[index - 2], 19) ^ (words[index - 2] >>> 10);
        words[index] = (words[index - 16] + s0 + words[index - 7] + s1) >>> 0;
      }

      let a = h0;
      let b = h1;
      let c = h2;
      let d = h3;
      let e = h4;
      let f = h5;
      let g = h6;
      let h = h7;

      for (let index = 0; index < 64; index += 1) {
        const sum1 = rotateRight(e, 6) ^ rotateRight(e, 11) ^ rotateRight(e, 25);
        const choose = (e & f) ^ (~e & g);
        const temp1 = (h + sum1 + choose + constants[index] + words[index]) >>> 0;
        const sum0 = rotateRight(a, 2) ^ rotateRight(a, 13) ^ rotateRight(a, 22);
        const majority = (a & b) ^ (a & c) ^ (b & c);
        const temp2 = (sum0 + majority) >>> 0;

        h = g;
        g = f;
        f = e;
        e = (d + temp1) >>> 0;
        d = c;
        c = b;
        b = a;
        a = (temp1 + temp2) >>> 0;
      }

      h0 = (h0 + a) >>> 0;
      h1 = (h1 + b) >>> 0;
      h2 = (h2 + c) >>> 0;
      h3 = (h3 + d) >>> 0;
      h4 = (h4 + e) >>> 0;
      h5 = (h5 + f) >>> 0;
      h6 = (h6 + g) >>> 0;
      h7 = (h7 + h) >>> 0;
    }

    return [h0, h1, h2, h3, h4, h5, h6, h7]
      .map((value) => value.toString(16).padStart(8, '0'))
      .join('');
  }

  function unsignedRecord(record) {
    const copy = cloneData(record);
    delete copy.integrity;
    delete copy.checksum;
    return copy;
  }

  function createIntegrity(value, scope) {
    const normalizedScope = String(scope || '').trim();
    if (!normalizedScope) {
      throw new RangeError('Integrity scope is required.');
    }
    return {
      algorithm: INTEGRITY_ALGORITHM,
      scope: normalizedScope,
      value: sha256Hex(canonicalStringify(value)),
    };
  }

  function sealRecord(record, scope) {
    const sealed = cloneData(record);
    delete sealed.checksum;
    sealed.integrity = createIntegrity(unsignedRecord(sealed), scope);
    return sealed;
  }

  function constantTimeEqual(left, right) {
    const a = String(left || '');
    const b = String(right || '');
    const length = Math.max(a.length, b.length);
    let difference = a.length ^ b.length;
    for (let index = 0; index < length; index += 1) {
      difference |= (a.charCodeAt(index) || 0) ^ (b.charCodeAt(index) || 0);
    }
    return difference === 0;
  }

  function verifyIntegrity(value, integrity, expectedScope = null) {
    if (!integrity || integrity.algorithm !== INTEGRITY_ALGORITHM) {
      return { ok: false, reason: 'Missing or unsupported SHA-256 integrity record.' };
    }
    if (expectedScope && integrity.scope !== expectedScope) {
      return { ok: false, reason: `Integrity scope ${integrity.scope || 'unknown'} does not match ${expectedScope}.` };
    }
    const expected = sha256Hex(canonicalStringify(value));
    if (!constantTimeEqual(expected, integrity.value)) {
      return { ok: false, reason: 'Stored data does not match its SHA-256 checksum.' };
    }
    return { ok: true, reason: 'Checksum verified.' };
  }

  function verifySealedRecord(record, expectedScope = null) {
    if (!record || typeof record !== 'object') {
      return { ok: false, reason: 'Record is not an object.' };
    }
    return verifyIntegrity(unsignedRecord(record), record.integrity, expectedScope);
  }

  function inspectJsonValue(value, limits = {}) {
    const settings = { ...DEFAULT_JSON_LIMITS, ...limits };
    let entries = 0;
    const stack = [{ value, depth: 0, path: '$' }];
    while (stack.length) {
      const current = stack.pop();
      entries += 1;
      if (entries > settings.maximumEntries) {
        throw new RangeError('Imported JSON contains too many values.');
      }
      if (current.depth > settings.maximumDepth) {
        throw new RangeError(`Imported JSON exceeds the maximum nesting depth at ${current.path}.`);
      }
      if (typeof current.value === 'string' && current.value.length > settings.maximumStringLength) {
        throw new RangeError(`Imported JSON contains an oversized string at ${current.path}.`);
      }
      if (!current.value || typeof current.value !== 'object') {
        continue;
      }
      if (!Array.isArray(current.value) && !isPlainObject(current.value)) {
        throw new TypeError(`Imported JSON contains a non-plain object at ${current.path}.`);
      }
      if (Array.isArray(current.value)) {
        for (let index = current.value.length - 1; index >= 0; index -= 1) {
          stack.push({ value: current.value[index], depth: current.depth + 1, path: `${current.path}[${index}]` });
        }
      } else {
        for (const [key, nested] of Object.entries(current.value)) {
          if (FORBIDDEN_JSON_KEYS.has(key)) {
            throw new TypeError(`Imported JSON contains forbidden key “${key}” at ${current.path}.`);
          }
          stack.push({ value: nested, depth: current.depth + 1, path: `${current.path}.${key}` });
        }
      }
    }
    canonicalStringify(value);
    return { entries };
  }

  function parseJsonData(text, limits = {}) {
    const settings = { ...DEFAULT_JSON_LIMITS, ...limits };
    const source = String(text || '');
    const byteLength = utf8Bytes(source).byteLength;
    if (!source.trim()) {
      throw new RangeError('The selected file is empty.');
    }
    if (byteLength > settings.maximumBytes) {
      throw new RangeError(`The selected JSON file exceeds the ${Math.floor(settings.maximumBytes / 1048576)} MB safety limit.`);
    }
    let parsed;
    try {
      parsed = JSON.parse(source);
    } catch (_error) {
      throw new SyntaxError('The selected file is not valid JSON.');
    }
    inspectJsonValue(parsed, settings);
    return parsed;
  }

  return {
    DEFAULT_JSON_LIMITS,
    FORBIDDEN_JSON_KEYS,
    INTEGRITY_ALGORITHM,
    canonicalStringify,
    cloneData,
    constantTimeEqual,
    createIntegrity,
    inspectJsonValue,
    isPlainObject,
    parseJsonData,
    sealRecord,
    sha256Hex,
    unsignedRecord,
    utf8Bytes,
    verifyIntegrity,
    verifySealedRecord,
  };
});

/* ===== src/js/content/content-pack-registry.js ===== */
(function (root, factory) {
  const namespace = (root.InfinitePaths = root.InfinitePaths || {});
  const exported = factory(namespace);
  Object.assign(namespace, exported);
  if (typeof module !== 'undefined' && module.exports) module.exports = exported;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (IP) {
  'use strict';

  const PACK_KINDS = Object.freeze(['original', 'fanfiction', 'user-original']);
  const DISTRIBUTION_MODES = Object.freeze(['bundled', 'private-local', 'redistributable']);
  const DELIVERY_MODES = Object.freeze(['embedded', 'external-json']);
  const CANON_MODES = Object.freeze(['canon-compatible', 'canon-divergent', 'alternate-universe', 'crossover', 'mixed']);
  const GENRES = Object.freeze(['fantasy', 'horror', 'adventure', 'science-fiction', 'mystery', 'survival', 'romance', 'dark-academy', 'superhero', 'historical-adventure']);
  const FILE_TYPES = Object.freeze(['campaign-generators', 'scenes', 'event-chains', 'npcs', 'characters', 'relationships', 'locations', 'factions', 'mysteries', 'endings', 'names', 'items', 'abilities', 'canon', 'lore', 'visual-theme', 'rules']);
  const ID_PATTERN = /^[a-z0-9]+(?:[._-][a-z0-9]+)*$/;
  const SEMVER_PATTERN = /^(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)(?:-[0-9A-Za-z.-]+)?(?:\+[0-9A-Za-z.-]+)?$/;
  const SAFE_JSON_PATH_PATTERN = /^(?!https?:|data:|javascript:)(?!\/)[A-Za-z0-9_./-]+\.json$/;

  const BUILTIN_CONTENT_PACKS = Object.freeze([
    Object.freeze({
      schemaVersion: 2,
      id: 'ip.original.horror-foundation',
      namespace: 'ip.original.horror',
      title: 'Horror Foundation',
      version: '0.2.0',
      supportedCampaignVersions: Object.freeze(['0.1.1', '0.2.0']),
      description: 'The original deterministic Horror vertical slice with locked mysteries, companion outcomes, and multiple complete endings.',
      kind: 'original',
      delivery: 'embedded',
      genres: Object.freeze(['horror']),
      sourceMaterial: null,
      distribution: Object.freeze({ mode: 'bundled', intendedUse: 'personal local play' }),
      engineCompatibility: Object.freeze({
        minimumRulesVersion: '0.2.2',
        maximumRulesVersion: '0.9.99',
        contentSchemaVersion: 3,
      }),
      playerProfileCompatibility: Object.freeze({
        protagonistSexes: Object.freeze(['male']),
        romancePartnerSexes: Object.freeze(['female']),
        requiredProfileTags: Object.freeze([]),
      }),
      dependencies: Object.freeze([]),
      files: Object.freeze([]),
      contentWarnings: Object.freeze(['graphic-violence', 'psychological-horror', 'character-death']),
      credits: Object.freeze({
        authors: Object.freeze(['Infinite Paths project']),
        license: 'Project-original private application content',
        notes: 'Bundled original foundation content.',
      }),
    }),
    Object.freeze({
      schemaVersion: 2,
      id: 'ip.original.mystery-foundation',
      namespace: 'ip.original.mystery',
      title: 'Mystery Foundation',
      version: '0.1.0',
      supportedCampaignVersions: Object.freeze(['0.1.0']),
      description: 'A deterministic murder-mystery vertical slice with a permanently locked culprit, evidence integrity, suspect dossiers, witness cooperation, accusation risk, and authored case endings.',
      kind: 'original',
      delivery: 'embedded',
      genres: Object.freeze(['mystery']),
      sourceMaterial: null,
      distribution: Object.freeze({ mode: 'bundled', intendedUse: 'personal local play' }),
      engineCompatibility: Object.freeze({
        minimumRulesVersion: '0.8.0',
        maximumRulesVersion: '0.9.99',
        contentSchemaVersion: 3,
      }),
      playerProfileCompatibility: Object.freeze({
        protagonistSexes: Object.freeze(['male']),
        romancePartnerSexes: Object.freeze(['female']),
        requiredProfileTags: Object.freeze([]),
      }),
      dependencies: Object.freeze([]),
      files: Object.freeze([]),
      contentWarnings: Object.freeze(['character-death', 'crime-scene-detail', 'manipulation']),
      credits: Object.freeze({
        authors: Object.freeze(['Infinite Paths project']),
        license: 'Project-original private application content',
        notes: 'Bundled original Mystery foundation content.',
      }),
    }),
  ]);

  const RUNTIME_CONTENT_PACKS = new Map();
  const RUNTIME_CAMPAIGN_GENERATORS = new Map();
  const RUNTIME_NARRATIVE_CONTENT = new Map();

  function cloneData(value) {
    return value === undefined ? undefined : IP.cloneData ? IP.cloneData(value) : JSON.parse(JSON.stringify(value));
  }

  function contentPackKey(id, version) {
    return `${String(id || '').trim()}@${String(version || '').trim()}`;
  }

  function requireText(value, label, maximum = 2000) {
    const text = String(value || '').normalize('NFKC').trim();
    if (!text || text.length > maximum) {
      throw new RangeError(`${label} must contain between 1 and ${maximum} characters.`);
    }
    return text;
  }

  function requireId(value, label) {
    const text = requireText(value, label, 160);
    if (!ID_PATTERN.test(text)) {
      throw new RangeError(`${label} must use lowercase letters, numbers, dots, underscores, or hyphens.`);
    }
    return text;
  }

  function requireSemver(value, label) {
    const text = requireText(value, label, 80);
    if (!SEMVER_PATTERN.test(text)) throw new RangeError(`${label} must use semantic versioning.`);
    return text;
  }

  function requireUniqueStringArray(value, label, allowedValues = null, minimum = 0) {
    if (!Array.isArray(value) || value.length < minimum) {
      throw new RangeError(`${label} must contain at least ${minimum} value${minimum === 1 ? '' : 's'}.`);
    }
    const normalized = value.map((item) => requireText(item, label, 240));
    if (new Set(normalized).size !== normalized.length) {
      throw new RangeError(`${label} cannot contain duplicate values.`);
    }
    if (allowedValues && normalized.some((item) => !allowedValues.includes(item))) {
      throw new RangeError(`${label} contains an unsupported value.`);
    }
    return normalized;
  }

  function normalizeSourceMaterial(source, kind) {
    if (kind !== 'fanfiction') {
      if (source !== null) throw new RangeError('Original content packs must set sourceMaterial to null.');
      return null;
    }
    if (!source || typeof source !== 'object' || Array.isArray(source)) {
      throw new RangeError('Fanfiction packs must identify their source material.');
    }
    const normalized = {
      propertyName: requireText(source.propertyName, 'Source property name', 160),
      sourceWorks: requireUniqueStringArray(source.sourceWorks, 'Source works', null, 1),
      canonMode: requireText(source.canonMode, 'Canon mode', 80),
      rightsNotice: requireText(source.rightsNotice, 'Rights notice', 1000),
    };
    if (!CANON_MODES.includes(normalized.canonMode)) throw new RangeError('Fanfiction canon mode is invalid.');
    return normalized;
  }

  function normalizeDependencies(value) {
    if (!Array.isArray(value)) throw new RangeError('Content-pack dependencies must be an array.');
    const normalized = value.map((dependency) => ({
      packId: requireId(dependency?.packId, 'Dependency pack ID'),
      minimumVersion: requireSemver(dependency?.minimumVersion, 'Dependency minimum version'),
    }));
    const identities = normalized.map((dependency) => dependency.packId);
    if (new Set(identities).size !== identities.length) {
      throw new RangeError('Content-pack dependencies cannot repeat a pack ID.');
    }
    return normalized;
  }

  function normalizeFiles(value, delivery) {
    if (!Array.isArray(value)) throw new RangeError('Content-pack files must be an array.');
    if (delivery === 'external-json' && value.length < 1) {
      throw new RangeError('External JSON content packs must declare at least one file.');
    }
    const normalized = value.map((file) => {
      const record = {
        id: requireId(file?.id, 'Content file ID'),
        type: requireText(file?.type, 'Content file type', 80),
        path: requireText(file?.path, 'Content file path', 300),
        loadPhase: requireText(file?.loadPhase, 'Content file load phase', 80),
      };
      if (!FILE_TYPES.includes(record.type)) throw new RangeError(`Unsupported content file type: ${record.type}`);
      const pathSegments = record.path.split('/');
      if (!SAFE_JSON_PATH_PATTERN.test(record.path)
        || pathSegments.some((segment) => !segment || segment === '.' || segment === '..')) {
        throw new RangeError('Content file path must be a safe relative JSON path without empty, current-directory, or parent-directory segments.');
      }
      if (!['startup', 'campaign-create', 'act', 'lazy'].includes(record.loadPhase)) throw new RangeError('Content file load phase is invalid.');
      if (file?.sha256 !== undefined) {
        const digest = requireText(file.sha256, 'Content file SHA-256', 64);
        if (!/^[a-f0-9]{64}$/.test(digest)) throw new RangeError('Content file SHA-256 must contain 64 lowercase hexadecimal characters.');
        record.sha256 = digest;
      }
      return record;
    });
    if (new Set(normalized.map((file) => file.id)).size !== normalized.length) {
      throw new RangeError('Content file IDs must be unique.');
    }
    if (new Set(normalized.map((file) => file.path)).size !== normalized.length) {
      throw new RangeError('Content file paths must be unique.');
    }
    return normalized;
  }

  function validateContentPackManifest(candidate) {
    if (!candidate || typeof candidate !== 'object' || Array.isArray(candidate)) {
      throw new TypeError('Content-pack manifest must be an object.');
    }

    const manifest = cloneData(candidate);
    if (manifest.schemaVersion !== 2) throw new RangeError('Content-pack schemaVersion must be 2.');
    manifest.id = requireId(manifest.id, 'Content-pack ID');
    manifest.namespace = requireId(manifest.namespace, 'Content-pack namespace');
    manifest.title = requireText(manifest.title, 'Content-pack title', 120);
    manifest.version = requireSemver(manifest.version, 'Content-pack version');
    manifest.description = requireText(manifest.description, 'Content-pack description');
    if (!PACK_KINDS.includes(manifest.kind)) throw new RangeError(`Unsupported content-pack kind: ${String(manifest.kind)}`);
    if (!DELIVERY_MODES.includes(manifest.delivery)) throw new RangeError('Content-pack delivery must be embedded or external-json.');
    manifest.genres = requireUniqueStringArray(manifest.genres, 'Content-pack genres', GENRES, 1);
    manifest.supportedCampaignVersions = requireUniqueStringArray(
      manifest.supportedCampaignVersions || [manifest.version],
      'Supported campaign content-pack versions',
      null,
      1,
    ).map((version) => requireSemver(version, 'Supported campaign content-pack version'));
    if (!manifest.supportedCampaignVersions.includes(manifest.version)) {
      throw new RangeError('Supported campaign versions must include the current content-pack version.');
    }
    manifest.sourceMaterial = normalizeSourceMaterial(manifest.sourceMaterial, manifest.kind);

    const distribution = manifest.distribution;
    if (!distribution || !DISTRIBUTION_MODES.includes(distribution.mode)) {
      throw new RangeError('Content-pack distribution mode is invalid.');
    }
    manifest.distribution = {
      mode: distribution.mode,
      intendedUse: requireText(distribution.intendedUse, 'Content-pack intended use', 160),
    };
    if (manifest.kind === 'fanfiction' && manifest.distribution.mode !== 'private-local') {
      throw new RangeError('Fanfiction packs must use private-local distribution mode in this project.');
    }

    const compatibility = manifest.engineCompatibility;
    if (!compatibility || typeof compatibility !== 'object' || Array.isArray(compatibility)) {
      throw new RangeError('Content-pack engine compatibility is required.');
    }
    manifest.engineCompatibility = {
      minimumRulesVersion: requireSemver(compatibility.minimumRulesVersion, 'Minimum rules version'),
      maximumRulesVersion: requireSemver(compatibility.maximumRulesVersion, 'Maximum rules version'),
      contentSchemaVersion: Number(compatibility.contentSchemaVersion),
    };
    if (!Number.isInteger(manifest.engineCompatibility.contentSchemaVersion) || manifest.engineCompatibility.contentSchemaVersion < 1) {
      throw new RangeError('Content-pack content schema version must be a positive integer.');
    }

    const profile = manifest.playerProfileCompatibility;
    if (!profile || typeof profile !== 'object' || Array.isArray(profile)) {
      throw new RangeError('Content-pack player-profile compatibility is required.');
    }
    manifest.playerProfileCompatibility = {
      protagonistSexes: requireUniqueStringArray(profile.protagonistSexes, 'Compatible protagonist sexes', ['male', 'female'], 1),
      romancePartnerSexes: requireUniqueStringArray(profile.romancePartnerSexes, 'Compatible romance partner sexes', ['male', 'female', 'none'], 1),
      requiredProfileTags: requireUniqueStringArray(profile.requiredProfileTags || [], 'Required profile tags', null, 0),
    };

    manifest.dependencies = normalizeDependencies(manifest.dependencies);
    if (manifest.dependencies.some((dependency) => dependency.packId === manifest.id)) {
      throw new RangeError('A content pack cannot depend on itself.');
    }
    manifest.files = normalizeFiles(manifest.files, manifest.delivery);
    manifest.contentWarnings = requireUniqueStringArray(manifest.contentWarnings, 'Content warnings', null, 0);

    if (!manifest.credits || !Array.isArray(manifest.credits.authors) || manifest.credits.authors.length < 1) {
      throw new RangeError('Content-pack credits must identify at least one author.');
    }
    manifest.credits = {
      authors: requireUniqueStringArray(manifest.credits.authors, 'Content-pack authors', null, 1),
      license: requireText(manifest.credits.license, 'Content-pack license', 500),
      ...(manifest.credits.notes ? { notes: requireText(manifest.credits.notes, 'Content-pack credit notes', 2000) } : {}),
    };

    return manifest;
  }

  function isContentPackCompatibleWithPlayerProfile(candidate, profile = IP.APP_CONFIG?.playerProfile) {
    const manifest = validateContentPackManifest(candidate);
    if (!profile) return false;
    const sexes = manifest.playerProfileCompatibility.protagonistSexes;
    const romanceSexes = manifest.playerProfileCompatibility.romancePartnerSexes;
    const desiredPartners = profile.romance?.eligiblePartnerSexes || [];
    const requiredTags = manifest.playerProfileCompatibility.requiredProfileTags || [];
    const profileTags = profile.tags || [];
    return sexes.includes(profile.sex)
      && desiredPartners.every((sex) => romanceSexes.includes(sex))
      && requiredTags.every((tag) => profileTags.includes(tag));
  }

  class ContentPackRegistry {
    constructor(initialPacks = BUILTIN_CONTENT_PACKS) {
      this.packs = new Map();
      for (const manifest of initialPacks) this.register(manifest);
    }

    register(candidate) {
      const manifest = validateContentPackManifest(candidate);
      if (this.packs.has(manifest.id)) throw new RangeError(`Content-pack ID is already registered: ${manifest.id}`);
      this.packs.set(manifest.id, manifest);
      return cloneData(manifest);
    }

    get(id) {
      const manifest = this.packs.get(String(id || ''));
      return manifest ? cloneData(manifest) : null;
    }

    require(id) {
      const manifest = this.get(id);
      if (!manifest) throw new RangeError(`Unknown content pack: ${String(id)}`);
      return manifest;
    }

    list() {
      return [...this.packs.values()].map((manifest) => cloneData(manifest));
    }

    getDefaultForGenre(genre) {
      const manifest = [...this.packs.values()].find((pack) => pack.genres.includes(genre));
      return manifest ? cloneData(manifest) : null;
    }
  }

  const BUILTIN_CONTENT_PACK_REGISTRY = new ContentPackRegistry();

  function getBuiltInContentPack(id = IP.APP_CONFIG?.defaultContentPackId || 'ip.original.horror-foundation') {
    return BUILTIN_CONTENT_PACK_REGISTRY.require(id);
  }

  function registerRuntimeContentPack(candidate, { generator = null, narrative = null, enabled = true } = {}) {
    const manifest = validateContentPackManifest(candidate);
    if (manifest.delivery !== 'external-json') {
      throw new RangeError('Only external JSON packs may enter the runtime registry.');
    }
    const key = contentPackKey(manifest.id, manifest.version);
    RUNTIME_CONTENT_PACKS.set(key, { manifest: cloneData(manifest), enabled: Boolean(enabled) });
    if (generator) RUNTIME_CAMPAIGN_GENERATORS.set(key, cloneData(generator));
    if (narrative) RUNTIME_NARRATIVE_CONTENT.set(key, cloneData(narrative));
    return cloneData(manifest);
  }

  function unregisterRuntimeContentPack(id, version) {
    const key = contentPackKey(id, version);
    const removed = RUNTIME_CONTENT_PACKS.delete(key);
    RUNTIME_CAMPAIGN_GENERATORS.delete(key);
    RUNTIME_NARRATIVE_CONTENT.delete(key);
    return removed;
  }

  function setRuntimeContentPackEnabled(id, version, enabled) {
    const key = contentPackKey(id, version);
    const record = RUNTIME_CONTENT_PACKS.get(key);
    if (!record) return false;
    record.enabled = Boolean(enabled);
    return true;
  }

  function listRuntimeContentPacks({ enabledOnly = false } = {}) {
    return [...RUNTIME_CONTENT_PACKS.values()]
      .filter((record) => !enabledOnly || record.enabled)
      .map((record) => ({ ...cloneData(record.manifest), runtime: true, enabled: record.enabled }));
  }

  function listRegisteredContentPacks({ enabledOnly = false } = {}) {
    const builtIn = BUILTIN_CONTENT_PACKS.map((manifest) => ({
      ...cloneData(manifest),
      builtIn: true,
      runtime: false,
      enabled: true,
    }));
    return [...builtIn, ...listRuntimeContentPacks({ enabledOnly })];
  }

  function getRegisteredContentPack(id, version = null, { enabledOnly = false, allowBuiltInLegacy = true } = {}) {
    const normalizedId = String(id || '');
    const normalizedVersion = version === null || version === undefined ? null : String(version);
    const builtIn = BUILTIN_CONTENT_PACKS.find((manifest) => manifest.id === normalizedId);
    if (builtIn) {
      if (
        normalizedVersion
        && normalizedVersion !== builtIn.version
        && !(allowBuiltInLegacy && builtIn.supportedCampaignVersions.includes(normalizedVersion))
      ) return null;
      return { ...cloneData(builtIn), builtIn: true, runtime: false, enabled: true };
    }
    if (normalizedVersion) {
      const record = RUNTIME_CONTENT_PACKS.get(contentPackKey(normalizedId, normalizedVersion));
      if (!record || (enabledOnly && !record.enabled)) return null;
      return { ...cloneData(record.manifest), builtIn: false, runtime: true, enabled: record.enabled };
    }
    const candidates = [...RUNTIME_CONTENT_PACKS.values()]
      .filter((record) => record.manifest.id === normalizedId && (!enabledOnly || record.enabled))
      .sort((left, right) => {
        if (typeof IP.compareVersions === 'function') return IP.compareVersions(right.manifest.version, left.manifest.version);
        return right.manifest.version.localeCompare(left.manifest.version, undefined, { numeric: true });
      });
    const selected = candidates.find((record) => record.enabled) || candidates[0];
    return selected ? { ...cloneData(selected.manifest), builtIn: false, runtime: true, enabled: selected.enabled } : null;
  }

  function requireRegisteredContentPack(id, version = null, options = {}) {
    const manifest = getRegisteredContentPack(id, version, options);
    if (!manifest) {
      const suffix = version ? `@${version}` : '';
      throw new RangeError(`Content pack is not installed: ${id}${suffix}`);
    }
    return manifest;
  }

  function getCampaignGeneratorForPack(id, version) {
    const value = RUNTIME_CAMPAIGN_GENERATORS.get(contentPackKey(id, version));
    return value ? cloneData(value) : null;
  }

  function listRuntimeNarrativeContent() {
    return [...RUNTIME_NARRATIVE_CONTENT.values()].map((content) => cloneData(content));
  }

  function getRuntimeNarrativeContent(id, version) {
    const value = RUNTIME_NARRATIVE_CONTENT.get(contentPackKey(id, version));
    return value ? cloneData(value) : null;
  }

  function resetRuntimeContentPacks() {
    RUNTIME_CONTENT_PACKS.clear();
    RUNTIME_CAMPAIGN_GENERATORS.clear();
    RUNTIME_NARRATIVE_CONTENT.clear();
  }

  return {
    BUILTIN_CONTENT_PACKS,
    BUILTIN_CONTENT_PACK_REGISTRY,
    CANON_MODES,
    ContentPackRegistry,
    DELIVERY_MODES,
    DISTRIBUTION_MODES,
    FILE_TYPES,
    GENRES,
    ID_PATTERN,
    PACK_KINDS,
    SEMVER_PATTERN,
    contentPackKey,
    getBuiltInContentPack,
    getCampaignGeneratorForPack,
    getRegisteredContentPack,
    getRuntimeNarrativeContent,
    isContentPackCompatibleWithPlayerProfile,
    listRegisteredContentPacks,
    listRuntimeContentPacks,
    listRuntimeNarrativeContent,
    registerRuntimeContentPack,
    requireRegisteredContentPack,
    resetRuntimeContentPacks,
    setRuntimeContentPackEnabled,
    unregisterRuntimeContentPack,
    validateContentPackManifest,
  };
});

/* ===== src/js/content/horror-foundation-content.js ===== */
(function (root, factory) {
  const namespace = (root.InfinitePaths = root.InfinitePaths || {});
  const exported = factory();
  Object.assign(namespace, exported);
  if (typeof module !== 'undefined' && module.exports) module.exports = exported;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const HORROR_FOUNDATION_NARRATIVE_VERSION = 'horror-vertical-slice-1.0.0';
  const HORROR_FOUNDATION_START_SCENE = 'ip.horror.opening.arrival';

  const MYSTERY_THEORIES = Object.freeze([
    Object.freeze({ id: 'theory.failed-containment', label: 'The first disappearance was staged to conceal a failed containment operation.' }),
    Object.freeze({ id: 'theory.living-transmission', label: 'A living operator remains inside the exclusion zone and is maintaining the false broadcasts.' }),
    Object.freeze({ id: 'theory.erased-settlement', label: 'The county erased an inhabited settlement from its maps and built the emergency system around that absence.' }),
    Object.freeze({ id: 'theory.crime-awakened-threat', label: 'A human confinement crime came first, and the cover-up awakened the supernatural threat afterward.' }),
  ]);

  function theoryChoice(theory) {
    const correct = { path: 'mystery.correctTheoryId', equals: theory.id };
    const wrong = { not: correct };
    return {
      id: theory.id,
      label: theory.label,
      effects: [
        { type: 'flag', key: 'selectedTheoryId', value: theory.id },
        { type: 'flag', key: 'hiddenTruthResolved', value: true, when: correct },
        { type: 'flag', key: 'wrongTheoryId', value: theory.id, when: wrong },
        { type: 'objective', id: 'objective.uncover-truth', status: 'completed', when: correct },
        { type: 'objective', id: 'objective.uncover-truth', status: 'failed', when: { all: [wrong, { path: 'payload.worldState.flags.reconsideredTheory', equals: true }] } },
        { type: 'clue', value: { id: 'clue.mystery-conclusion', name: '{{mystery.title}}', summary: '{{mystery.truth}}' }, when: correct },
        { type: 'readiness', amount: 10, when: correct },
        { type: 'pressure', amount: -6, when: correct },
        { type: 'morale', amount: -6, when: wrong },
        { type: 'pressure', amount: 7, when: wrong },
        { type: 'stat', key: 'mysteryDeductionsCorrect', amount: 1, when: correct },
      ],
      nextOptions: [
        { when: correct, next: 'ip.horror.chapter2.deduction-correct' },
        { when: { all: [wrong, { path: 'payload.worldState.flags.reconsideredTheory', equals: true }] }, next: 'ip.horror.chapter2.false-conclusion' },
      ],
      next: 'ip.horror.chapter2.deduction-wrong',
    };
  }

  const MYSTERY_THEORY_CHOICES = Object.freeze(MYSTERY_THEORIES.map(theoryChoice));

  const scenes = [
    {
      id: 'ip.horror.opening.arrival',
      schemaVersion: 2,
      sceneType: 'narrative',
      act: 1,
      chapter: 1,
      kicker: 'ACT I · THE CLOSED ROAD',
      title: 'The Northern Road',
      location: '{{world.settlement}} outskirts',
      contentWarnings: ['psychological-horror'],
      prose: [
        {
          id: 'arrival.road.variant.0',
          variant: [0],
          text: 'The last county sign before {{world.settlement}} had been peppered with old buckshot. Beyond it, the pavement narrowed between black pines, their wet branches leaning over the road until the remaining daylight looked strained through a sieve. Your phone had lost its signal ten miles back. The car clock insisted it was 6:17, although the sky had already darkened toward night.',
        },
        {
          id: 'arrival.road.variant.1',
          variant: [1],
          text: 'Rain followed you into {{world.region}} without ever becoming a proper storm. It drifted across the windshield in pale threads, enough to blur the tree line and turn every roadside reflector into a watchful little eye. The county road descended toward {{world.settlement}}, then stopped at a cedar laid cleanly across both lanes.',
        },
        {
          id: 'arrival.vehicle',
          text: 'A county emergency vehicle sat crooked beyond the fallen tree with its driver door open and its amber lights turning in slow, soundless circles. No one stood near it. Fresh mud covered the shoulder, but one set of boot prints led from the vehicle toward the ditch and another continued into the woods.',
        },
        {
          id: 'arrival.listener',
          when: { path: 'campaign.world.antagonist.id', equals: 'threat_the_listener' },
          text: 'The emergency radio inside the vehicle clicked on by itself. Static breathed through the open door, then thinned around a voice that sounded almost close enough to be sitting behind the wheel. It said your first name once. The amber lights kept turning.',
        },
        {
          id: 'arrival.surveyor',
          when: { path: 'campaign.world.antagonist.id', equals: 'threat_the_pale_surveyor' },
          text: 'A red survey mark had been painted across the vehicle’s hood and repeated on the little maintenance shed beside the road. The lines were too fresh for the rain to have dulled them. Someone had drawn a careful rectangle around each doorway.',
        },
        {
          id: 'arrival.borrowed',
          when: { path: 'campaign.world.antagonist.id', equals: 'threat_the_borrowed_man' },
          text: 'A sheet of county stationery had been tucked beneath the windshield wiper. The handwriting was steady and dark: {{cast.responder.firstName}}, I WENT AHEAD. FOLLOW THE SERVICE TRACK. The final stroke of the signature had bled in the rain, but the paper itself was nearly dry.',
        },
        {
          id: 'arrival.widow',
          when: { path: 'campaign.world.antagonist.id', equals: 'threat_the_orchard_widow' },
          text: 'A wooden produce crate had spilled across the shoulder. The apples were unbruised despite the fall, their skins a deep, varnished red. One rested upright in the emergency vehicle’s cupholder as neatly as if someone had placed it there for the next driver.',
        },
        {
          id: 'arrival.responder',
          text: 'A woman in an orange search jacket rose from the ditch with a hand-crank flashlight tucked beneath one arm. She was muddy to the knees and breathing hard, but the beam in her hand never wavered. “You’re not supposed to be past the county line,” she said. Her eyes moved from you to the empty vehicle. “Since you are, don’t touch anything until I tell you what happened.” She introduced herself as {{cast.responder.name}}, the volunteer search coordinator for {{world.settlement}}.',
        },
      ],
      onEnter: [
        { type: 'setLocation', value: '{{world.settlement}} outskirts' },
        { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { trust: 0, admiration: 0, suspicion: 0, protectiveness: 0 } },
      ],
      choices: [
        {
          id: 'stay_with_responder',
          label: 'Help {{cast.responder.firstName}} clear the road and go with her.',
          effects: [
            { type: 'flag', key: 'arrivalRoute', value: 'roadblock' },
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { trust: 4, admiration: 2 } },
            { type: 'time', amount: 1 },
          ],
          next: 'ip.horror.opening.roadblock',
        },
        {
          id: 'search_vehicle',
          label: 'Search the abandoned emergency vehicle before leaving.',
          effects: [
            { type: 'flag', key: 'arrivalRoute', value: 'vehicle' },
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { suspicion: 2 } },
            { type: 'time', amount: 1 },
          ],
          next: 'ip.horror.opening.vehicle',
        },
        {
          id: 'follow_tracks',
          label: 'Follow the fresh tracks into the tree line before the rain erases them.',
          effects: [
            { type: 'flag', key: 'arrivalRoute', value: 'treeline' },
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { admiration: 1, suspicion: 1 } },
            { type: 'time', amount: 1 },
          ],
          next: 'ip.horror.opening.treeline',
        },
      ],
    },
    {
      id: 'ip.horror.opening.roadblock',
      schemaVersion: 2,
      sceneType: 'narrative',
      act: 1,
      chapter: 1,
      kicker: 'THE CLOSED ROAD',
      title: 'What {{cast.responder.firstName}} Knows',
      location: '{{world.settlement}} outskirts',
      contentWarnings: [],
      prose: [
        {
          id: 'roadblock.work',
          text: 'The cedar was too heavy to move outright. You and {{cast.responder.firstName}} dragged the thinner branches toward the ditch until there was barely enough room to squeeze a vehicle through. She worked with the impatience of someone who had already spent the day losing arguments with people who outranked her.',
        },
        {
          id: 'roadblock.background.ranger',
          when: { path: 'campaign.protagonist.background.id', equals: 'ranger' },
          text: 'Your old field habits returned before you invited them. The tree had not fallen in the storm; the trunk had been cut from the far side and pushed across the road. {{cast.responder.firstName}} noticed where you were looking. “Good,” she said quietly. “I need somebody who sees the part people meant to hide.”',
        },
        {
          id: 'roadblock.background.paramedic',
          when: { path: 'campaign.protagonist.background.id', equals: 'paramedic' },
          text: 'There was diluted blood on the bark, not enough to explain an abandoned vehicle but too much to ignore. {{cast.responder.firstName}} saw you assessing it and gave a short nod. “The deputy who drove that rig was alive twenty minutes ago. I’m trying to keep that sentence true.”',
        },
        {
          id: 'roadblock.background.journalist',
          when: { path: 'campaign.protagonist.background.id', equals: 'journalist' },
          text: 'The official closure notice had no issuing signature, and the date had been typed over an older one. {{cast.responder.firstName}} caught you reading it twice. “That paper came from the county office,” she said. “It didn’t come from anyone willing to put a name on it.”',
        },
        {
          id: 'roadblock.background.mechanic',
          when: { path: 'campaign.protagonist.background.id', equals: 'mechanic' },
          text: 'The emergency vehicle’s engine was running too smoothly for an accidental abandonment, and the rotating lights were drawing power from a bypassed auxiliary line. {{cast.responder.firstName}} followed your glance. “Somebody wanted that thing lit after the keys were gone.”',
        },
        {
          id: 'roadblock.question',
          text: 'When the gap was wide enough, she leaned against the wet trunk and studied you. “I can get you to the volunteer hall. After that, I need to know whether you’re going to listen when I tell you something sounds impossible.”',
        },
      ],
      choices: [
        {
          id: 'tell_truth',
          label: 'Tell her exactly why you came and what your background taught you to notice.',
          effects: [
            { type: 'flag', key: 'honestWithResponder', value: true },
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { trust: 6, comfort: 2, suspicion: -2 } },
          ],
          next: 'ip.horror.opening.safehouse',
        },
        {
          id: 'ask_about_vehicle',
          label: 'Ask why she left the emergency vehicle running.',
          effects: [
            { type: 'clue', value: { id: 'clue.abandoned-vehicle', name: 'The abandoned emergency vehicle', summary: 'The vehicle was deliberately left powered as part of the incident, not abandoned by accident.' } },
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { trust: 2, admiration: 2 } },
          ],
          next: 'ip.horror.opening.safehouse',
        },
        {
          id: 'stay_vague',
          label: 'Keep your reasons to yourself and ask only for the safest route into town.',
          effects: [
            { type: 'flag', key: 'guardedWithResponder', value: true },
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { suspicion: 4, trust: -1 } },
            { type: 'morale', amount: 3 },
          ],
          next: 'ip.horror.opening.safehouse',
        },
      ],
    },
    {
      id: 'ip.horror.opening.vehicle',
      schemaVersion: 2,
      sceneType: 'narrative',
      act: 1,
      chapter: 1,
      kicker: 'THE ABANDONED VEHICLE',
      title: 'Amber Light',
      location: 'County road shoulder',
      contentWarnings: ['graphic-violence', 'psychological-horror'],
      prose: [
        {
          id: 'vehicle.common',
          text: '{{cast.responder.firstName}} told you not to touch the vehicle. She did not try to stop you when you ducked beneath the fallen branches, but the silence behind you changed. The driver’s seat was empty. A smear of blood crossed the steering wheel and ended in three fingerprints on the passenger window.',
        },
        {
          id: 'vehicle.graphic',
          when: { path: 'campaign.contentPreferences.graphicViolence', equals: true },
          text: 'A triangular piece of glass lay on the floor mat with a strip of skin caught along one edge. The blood around it had begun to clot, dark and glossy beneath the rotating amber light.',
        },
        {
          id: 'vehicle.restrained',
          when: { path: 'campaign.contentPreferences.graphicViolence', equals: false },
          text: 'Broken safety glass glittered across the floor mat. Whatever had happened inside the vehicle had been recent and violent enough to leave the cab smelling sharply of copper.',
        },
        {
          id: 'vehicle.listener',
          when: { path: 'campaign.world.antagonist.id', equals: 'threat_the_listener' },
          text: 'The radio speaker whispered beneath the static. “{{player.name}}?” it asked. Not loudly. Not urgently. It used the careful tone of someone checking whether a sleeping person had finally awakened. A dispatch card taped beside the handset carried one instruction in block letters: DO NOT ANSWER A POWERED RADIO. IT FOLLOWS THE VOICE THAT ANSWERS.',
        },
        {
          id: 'vehicle.surveyor',
          when: { path: 'campaign.world.antagonist.id', equals: 'threat_the_pale_surveyor' },
          text: 'The same red rectangle from the hood had been drawn around the maintenance shed. A county map lay open on the passenger seat, and every building marked in red had a time written beside it. Sunset was listed as 6:24. Beneath the time, someone had written: RED MEANS CLAIMED. DO NOT CROSS AFTER THE MARK APPEARS. RUNNING WATER BREAKS THE LINE.',
        },
        {
          id: 'vehicle.borrowed',
          when: { path: 'campaign.world.antagonist.id', equals: 'threat_the_borrowed_man' },
          text: 'The note beneath the windshield wiper matched the handwriting in the deputy’s logbook down to the cramped capital R. In the rearview mirror, the service track behind the vehicle was empty. Across the open logbook, the deputy had underlined three sentences: HANDWRITING IS NOT IDENTITY. MAKE IT SPEAK. CHECK THE MIRROR. The wet mud outside still showed a fresh set of prints leading that way.',
        },
        {
          id: 'vehicle.widow',
          when: { path: 'campaign.world.antagonist.id', equals: 'threat_the_orchard_widow' },
          text: 'The apple in the cupholder smelled newly cut although its skin was unbroken. Beneath it, the deputy had scratched four words into the plastic with a key: DO NOT EAT HERE.',
        },
      ],
      choices: [
        {
          id: 'use_ranger_training',
          when: { path: 'campaign.protagonist.background.id', equals: 'ranger' },
          label: 'Circle the vehicle first and read the ground before reaching inside.',
          effects: [
            { type: 'clue', value: { id: 'clue.disturbed-gravel', name: 'Disturbed gravel', summary: 'Someone left the vehicle under his own power, then doubled back along the ditch to hide the direction of travel.' } },
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { admiration: 4, trust: 1 } },
          ],
          next: 'ip.horror.opening.safehouse',
        },
        {
          id: 'use_paramedic_training',
          when: { path: 'campaign.protagonist.background.id', equals: 'paramedic' },
          label: 'Examine the blood pattern before disturbing the cab.',
          effects: [
            { type: 'clue', value: { id: 'clue.blood-direction', name: 'Blood direction', summary: 'The injured deputy climbed out voluntarily and moved toward town rather than being dragged into the woods.' } },
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { admiration: 4, trust: 1 } },
          ],
          next: 'ip.horror.opening.safehouse',
        },
        {
          id: 'use_journalist_training',
          when: { path: 'campaign.protagonist.background.id', equals: 'journalist' },
          label: 'Record the dashboard, logbook, and closure notice before touching them.',
          effects: [
            { type: 'clue', value: { id: 'clue.dispatch-log', name: 'Dispatch log discrepancy', summary: 'The last official dispatch was altered after the vehicle reached the roadblock.' } },
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { admiration: 3, suspicion: -1 } },
          ],
          next: 'ip.horror.opening.safehouse',
        },
        {
          id: 'use_mechanic_training',
          when: { path: 'campaign.protagonist.background.id', equals: 'mechanic' },
          label: 'Trace the live auxiliary circuit before reaching across the console.',
          effects: [
            { type: 'clue', value: { id: 'clue.bypassed-ignition', name: 'Bypassed ignition', summary: 'The lights and radio were deliberately wired to remain powered after the driver left.' } },
            { type: 'inventoryAdd', value: { id: 'item.fused-wire', name: 'Fused bypass wire', quantity: 1, source: 'roadside vehicle' } },
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { admiration: 4, trust: 1 } },
          ],
          next: 'ip.horror.opening.safehouse',
        },
        {
          id: 'take_map_fast',
          label: 'Reach across the broken glass and take the county map before leaving.',
          effects: [
            { type: 'health', amountByDifficulty: { story: -6, standard: -12, hard: -18, brutal: -24 } },
            { type: 'injury', value: { id: 'injury.forearm-cut', name: 'Deep forearm cut', severity: 'moderate', treated: false, source: 'broken vehicle glass' } },
            { type: 'clue', value: { id: 'clue.evacuation-map', name: 'Altered evacuation map', summary: 'The official evacuation route has been changed by hand to avoid the northern bridge.' } },
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { protectiveness: 4, resentment: 1 } },
          ],
          next: 'ip.horror.opening.safehouse',
        },
        {
          id: 'answer_radio',
          when: { path: 'campaign.world.antagonist.id', equals: 'threat_the_listener' },
          label: 'Lift the handset and answer the voice using your name.',
          effects: [
            { type: 'flag', key: 'violatedThreatRule', value: 'spoke-through-powered-radio' },
          ],
          next: 'ip.horror.ending.roadside',
        },
        {
          id: 'enter_marked_shed',
          when: { path: 'campaign.world.antagonist.id', equals: 'threat_the_pale_surveyor' },
          label: 'Step inside the red-marked maintenance shed and search it before sunset.',
          effects: [
            { type: 'flag', key: 'violatedThreatRule', value: 'entered-marked-structure' },
          ],
          next: 'ip.horror.ending.roadside',
        },
        {
          id: 'follow_handwritten_note',
          when: { path: 'campaign.world.antagonist.id', equals: 'threat_the_borrowed_man' },
          label: 'Follow the handwritten instruction down the service track.',
          effects: [
            { type: 'flag', key: 'violatedThreatRule', value: 'trusted-imitated-handwriting' },
          ],
          next: 'ip.horror.ending.roadside',
        },
        {
          id: 'eat_apple',
          when: { path: 'campaign.world.antagonist.id', equals: 'threat_the_orchard_widow' },
          label: 'Eat the untouched apple while you finish searching the cab.',
          effects: [
            { type: 'flag', key: 'violatedThreatRule', value: 'ate-orchard-fruit' },
          ],
          next: 'ip.horror.ending.roadside',
        },
      ],
    },
    {
      id: 'ip.horror.opening.treeline',
      schemaVersion: 2,
      sceneType: 'narrative',
      act: 1,
      chapter: 1,
      kicker: 'BEYOND THE SHOULDER',
      title: 'Tracks in the Rain',
      location: 'Northern tree line',
      contentWarnings: ['medical-trauma', 'psychological-horror'],
      prose: [
        {
          id: 'treeline.common',
          text: 'The tracks left the road in a staggered line. Twenty yards into the pines, they became knee prints, then handprints, then boots again. You found the missing deputy beneath a wind-thrown spruce with one leg pinned under a branch. He was conscious, though every breath came through clenched teeth.',
        },
        {
          id: 'treeline.warning',
          text: 'He caught your sleeve before you could speak. “Quiet,” he whispered. His eyes stayed fixed on the deeper woods. “It learns from whatever we give it.” Behind you, {{cast.responder.firstName}} called your name once from the road and then stopped, waiting for an answer you had not yet decided to make.',
        },
        {
          id: 'treeline.listener',
          when: { path: 'campaign.world.antagonist.id', equals: 'threat_the_listener' },
          text: 'Somewhere beyond the deputy, a portable radio began broadcasting the sound of your own tires on wet pavement. The recording ended with the soft click of your car door opening.',
        },
        {
          id: 'treeline.surveyor',
          when: { path: 'campaign.world.antagonist.id', equals: 'threat_the_pale_surveyor' },
          text: 'Red paint marked three tree trunks around the deputy, each line drawn at exactly shoulder height. A narrow stream ran ten feet downhill, swollen and quick from the rain.',
        },
        {
          id: 'treeline.borrowed',
          when: { path: 'campaign.world.antagonist.id', equals: 'threat_the_borrowed_man' },
          text: 'A second figure stood between the trees in the deputy’s uniform. It copied the injured man’s posture perfectly, one hand braced against its ribs, but when the deputy whispered a warning, the figure’s mouth did not move.',
        },
        {
          id: 'treeline.widow',
          when: { path: 'campaign.world.antagonist.id', equals: 'threat_the_orchard_widow' },
          text: 'The deputy had packed his mouth with pine needles. At his side lay three bitten apples, their white flesh untouched by rain or insects. “I stopped swallowing,” he said. “That helped.”',
        },
      ],
      choices: [
        {
          id: 'use_background_gear',
          when: { hasItemFromBackground: true },
          label: 'Use your {{player.backgroundResourceLabel}} before going any closer.',
          effects: [
            { type: 'inventoryRemoveBackgroundResource' },
            { type: 'clue', value: { id: 'clue.deputy-account', name: 'Deputy’s account', summary: 'The deputy survived long enough to confirm that the threat obeys a repeatable rule rather than acting at random.' } },
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { trust: 4, admiration: 4 } },
            { type: 'flag', key: 'deputyLocated', value: true },
          ],
          next: 'ip.horror.opening.safehouse',
        },
        {
          id: 'call_responder_softly',
          label: 'Call {{cast.responder.firstName}} over in a low voice and lift the branch together.',
          effects: [
            { type: 'clue', value: { id: 'clue.deputy-account', name: 'Deputy’s account', summary: 'The deputy survived long enough to confirm that the threat obeys a repeatable rule rather than acting at random.' } },
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { trust: 6, comfort: 3, admiration: 2 } },
            { type: 'flag', key: 'deputyLocated', value: true },
            { type: 'time', amount: 1 },
          ],
          next: 'ip.horror.opening.safehouse',
        },
        {
          id: 'lift_branch_alone',
          label: 'Try to free the deputy alone before anything in the woods gets closer.',
          effects: [
            { type: 'health', amountByDifficulty: { story: -8, standard: -15, hard: -22, brutal: -32 } },
            { type: 'injury', value: { id: 'injury.knee-strain', name: 'Severe knee strain', severity: 'moderate', treated: false, source: 'lifting the fallen spruce' } },
            { type: 'clue', value: { id: 'clue.deputy-account', name: 'Deputy’s account', summary: 'The deputy survived long enough to confirm that the threat obeys a repeatable rule rather than acting at random.' } },
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { admiration: 5, protectiveness: 5, resentment: 1 } },
            { type: 'flag', key: 'deputyLocated', value: true },
          ],
          next: 'ip.horror.opening.safehouse',
        },
      ],
    },
    {
      id: 'ip.horror.opening.safehouse',
      schemaVersion: 2,
      sceneType: 'narrative',
      act: 1,
      chapter: 1,
      kicker: 'THE VOLUNTEER HALL',
      title: 'Rules Written in Marker',
      location: '{{world.settlement}} volunteer hall',
      contentWarnings: ['psychological-horror'],
      prose: [
        {
          id: 'safehouse.arrival',
          text: 'The volunteer hall occupied an old brick schoolhouse near the center of {{world.settlement}}. Its windows had been covered from the inside with wool blankets, and a gasoline generator sat cold beneath the rear awning. Every powered radio had been removed from the building. Every mirror had been turned toward the wall. A blue water barrel stood beside each entrance, and the kitchen counters had been stripped bare of fruit.',
        },
        {
          id: 'safehouse.injury',
          when: { hasAnyInjury: true },
          text: '{{cast.responder.firstName}} sat you beneath the emergency map and cleaned the worst of the injury without asking permission twice. Her hands were practiced but not gentle. “You don’t get points for making me carry you later,” she said, tying the bandage tighter than comfort required.',
        },
        {
          id: 'safehouse.trust',
          when: { relationship: { npcId: 'npc.opening_responder', metric: 'trust', gte: 6 } },
          text: 'When the room was secure, she told you the part she had not trusted to the road. The county had known about {{threat.name}} before the northern closure. The official instructions were not guesses. They were rules learned from people who had already paid for each mistake.',
        },
        {
          id: 'safehouse.guard',
          when: { relationship: { npcId: 'npc.opening_responder', metric: 'suspicion', gte: 4 } },
          text: '{{cast.responder.firstName}} kept the table between you while she spoke. She gave you the information you needed, not the information she possessed. Whatever else she knew remained locked behind the same expression she had worn at the roadblock.',
        },
        {
          id: 'safehouse.rule',
          text: 'She uncapped a black marker and wrote one sentence across the emergency map: {{threat.limitation}} Underneath it she added, in smaller letters, {{threat.capability}} “Those two things stay true,” she said. “Fear doesn’t get to edit them. Neither do we.”',
        },
        {
          id: 'safehouse.interruption',
          text: 'Something struck the outside wall. Once. Then again, farther along the bricks. The blankets over the windows stirred although the glass was closed. {{cast.responder.firstName}} looked toward the dark hallway and reached for the bolt cutters on the supply table. “Choose what you’re carrying,” she said. “We’re out of time.”',
        },
      ],
      onEnter: [
        { type: 'setLocation', value: '{{world.settlement}} volunteer hall' },
        { type: 'clue', value: { id: 'clue.threat-rule', name: '{{threat.name}} rule', summary: '{{threat.capability}} {{threat.limitation}}' } },
        { type: 'health', amount: 5, when: { hasAnyInjury: true } },
        { type: 'flag', key: 'injuryBandaged', value: true, when: { hasAnyInjury: true } },
      ],
      choices: [
        {
          id: 'study_rule_sheet',
          label: 'Read the rule sheet line by line before moving.',
          effects: [
            { type: 'flag', key: 'studiedThreatRule', value: true },
            { type: 'morale', amount: 4 },
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { admiration: 3, trust: 2 } },
          ],
          next: 'ip.horror.opening.first-contact',
        },
        {
          id: 'bar_east_door',
          label: 'Help {{cast.responder.firstName}} bar the east door and keep the bolt cutters.',
          effects: [
            { type: 'inventoryAdd', value: { id: 'item.bolt-cutters', name: 'Heavy bolt cutters', quantity: 1, source: 'volunteer hall' } },
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { trust: 4, comfort: 2 } },
          ],
          next: 'ip.horror.opening.first-contact',
        },
        {
          id: 'take_lantern',
          when: { hasAnyInjury: false },
          label: 'Take the hand-crank lantern and cover the rear hall.',
          effects: [
            { type: 'inventoryAdd', value: { id: 'item.hand-crank-lantern', name: 'Hand-crank lantern', quantity: 1, source: 'volunteer hall' } },
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { admiration: 2 } },
          ],
          next: 'ip.horror.opening.first-contact',
        },
        {
          id: 'let_injury_be_treated',
          when: { hasAnyInjury: true },
          label: 'Stay still long enough for {{cast.responder.firstName}} to finish treating the injury.',
          effects: [
            { type: 'health', amountByDifficulty: { story: 12, standard: 10, hard: 8, brutal: 6 } },
            { type: 'treatAllInjuries' },
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { trust: 3, comfort: 4, protectiveness: 2 } },
          ],
          next: 'ip.horror.opening.first-contact',
        },
      ],
    },
    {
      id: 'ip.horror.opening.first-contact',
      schemaVersion: 2,
      sceneType: 'narrative',
      act: 1,
      chapter: 1,
      kicker: 'FIRST CONTACT',
      title: 'The Rule Holds',
      location: '{{world.settlement}} volunteer hall',
      contentWarnings: ['psychological-horror', 'character-death'],
      prose: [
        {
          id: 'contact.common.intense',
          when: { path: 'campaign.contentPreferences.psychologicalHorror', equals: true },
          text: 'The building changed before anything entered it. The air tightened. The hallway seemed to lengthen by a few impossible feet, enough that the far doorway no longer aligned with the classroom beyond it. {{cast.responder.firstName}} stood shoulder to shoulder with you, her breathing slow and deliberate.',
        },
        {
          id: 'contact.common.restrained',
          when: { path: 'campaign.contentPreferences.psychologicalHorror', equals: false },
          text: 'The building fell unnaturally quiet before anything entered it. The far doorway slipped out of alignment with the classroom beyond it by only an inch, but the error remained when you blinked. {{cast.responder.firstName}} stood shoulder to shoulder with you, her breathing slow and deliberate.',
        },
        {
          id: 'contact.listener',
          when: { path: 'campaign.world.antagonist.id', equals: 'threat_the_listener' },
          text: 'A radio hidden somewhere inside the wall came alive. It broadcast {{cast.responder.firstName}} screaming your name, although she was beside you and silent. The false scream moved from one speaker to another through dead wiring, drawing nearer each time.',
        },
        {
          id: 'contact.surveyor',
          when: { path: 'campaign.world.antagonist.id', equals: 'threat_the_pale_surveyor' },
          text: 'Red lines appeared beneath the east door, wet as fresh paint. On the other side, a metal survey chain dragged once across the floor. The blue barrel beside the rear exit shuddered with every impact against the bricks.',
        },
        {
          id: 'contact.borrowed',
          when: { path: 'campaign.world.antagonist.id', equals: 'threat_the_borrowed_man' },
          text: '{{cast.responder.name}} stepped into the far doorway. The real {{cast.responder.firstName}} remained beside you. The copy wore her mud, her search jacket, and the small white scar beneath her chin. Only the covered mirror at its shoulder refused to show anyone standing there.',
        },
        {
          id: 'contact.widow.intense',
          when: { all: [{ path: 'campaign.world.antagonist.id', equals: 'threat_the_orchard_widow' }, { path: 'campaign.contentPreferences.psychologicalHorror', equals: true }] },
          text: 'The schoolhouse filled with the smell of baked apples. A supper table appeared at the end of the hall where no room existed, set with steaming plates and glasses beaded with cold water. Someone you loved called from the table and asked why you had taken so long to come home.',
        },
        {
          id: 'contact.widow.restrained',
          when: { all: [{ path: 'campaign.world.antagonist.id', equals: 'threat_the_orchard_widow' }, { path: 'campaign.contentPreferences.psychologicalHorror', equals: false }] },
          text: 'The schoolhouse filled with the smell of baked apples. A supper table shimmered at the end of the hall where no room existed, its plates bright and indistinct. A familiar voice invited you to sit, but the words repeated with the flat precision of a recording.',
        },
        {
          id: 'contact.choice',
          text: 'The written rule remained on the map behind you. It had not changed. Whatever stood in the hallway wanted you to behave as though it had.',
        },
      ],
      choices: [
        {
          id: 'use_listener_limitation',
          when: { all: [{ path: 'campaign.world.antagonist.id', equals: 'threat_the_listener' }, { hasClue: 'clue.threat-rule' }] },
          label: 'Cut every powered circuit and move without answering any transmitted voice.',
          effects: [
            { type: 'flag', key: 'usedThreatLimitation', value: true },
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { trust: 7, admiration: 6, loyalty: 2 } },
          ],
          next: 'ip.horror.checkpoint.first-night',
        },
        {
          id: 'use_surveyor_limitation',
          when: { all: [{ path: 'campaign.world.antagonist.id', equals: 'threat_the_pale_surveyor' }, { hasClue: 'clue.threat-rule' }] },
          label: 'Break the water barrel across the rear steps and lead everyone through the running stream.',
          effects: [
            { type: 'flag', key: 'usedThreatLimitation', value: true },
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { trust: 7, admiration: 6, loyalty: 2 } },
          ],
          next: 'ip.horror.checkpoint.first-night',
        },
        {
          id: 'use_borrowed_limitation',
          when: { all: [{ path: 'campaign.world.antagonist.id', equals: 'threat_the_borrowed_man' }, { hasClue: 'clue.threat-rule' }] },
          label: 'Turn the covered mirror toward the figure and force it to answer in a living voice.',
          effects: [
            { type: 'flag', key: 'usedThreatLimitation', value: true },
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { trust: 7, admiration: 6, loyalty: 2 } },
          ],
          next: 'ip.horror.checkpoint.first-night',
        },
        {
          id: 'use_widow_limitation',
          when: { all: [{ path: 'campaign.world.antagonist.id', equals: 'threat_the_orchard_widow' }, { hasClue: 'clue.threat-rule' }] },
          label: 'Refuse the table, keep everyone fasting, and move beyond the county marker.',
          effects: [
            { type: 'flag', key: 'usedThreatLimitation', value: true },
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { trust: 7, admiration: 6, loyalty: 2 } },
          ],
          next: 'ip.horror.checkpoint.first-night',
        },
        {
          id: 'escape_through_window',
          label: 'Ignore the apparition and force a way through the narrow washroom window.',
          effects: [
            { type: 'health', amountByDifficulty: { story: -8, standard: -16, hard: -24, brutal: -36 } },
            { type: 'injury', value: { id: 'injury.rib-impact', name: 'Bruised ribs', severity: 'moderate', treated: false, source: 'escape through the washroom window' } },
            { type: 'flag', key: 'escapedWithoutTestingRule', value: true },
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { trust: 3, protectiveness: 5, admiration: 2 } },
          ],
          next: 'ip.horror.checkpoint.first-night',
        },
        {
          id: 'confront_directly',
          label: 'Hold the hallway and confront it before it can choose the terms.',
          effects: [
            { type: 'flag', key: 'ignoredThreatLimitation', value: true },
          ],
          next: 'ip.horror.ending.first-contact',
        },
      ],
    },
    {
      id: 'ip.horror.checkpoint.first-night',
      schemaVersion: 2,
      sceneType: 'narrative',
      act: 1,
      chapter: 1,
      kicker: 'ACT I · THE FIRST RULE',
      title: 'The First Hour Survived',
      location: '{{world.settlement}} southern edge',
      contentWarnings: [],
      prose: [
        {
          id: 'checkpoint.rule',
          when: { path: 'payload.worldState.flags.usedThreatLimitation', equals: true },
          text: 'The rule held. {{threat.name}} did exactly what the county records said it would do, and no more. Knowledge did not make the darkness friendly, but it gave the darkness edges. For the first time since the road closed behind you, fear became something you could measure.',
        },
        {
          id: 'checkpoint.escape',
          when: { path: 'payload.worldState.flags.escapedWithoutTestingRule', equals: true },
          text: 'You escaped without proving the rule. The washroom window tore clothing, skin, and breath from everyone who went through it, but the volunteer hall receded behind you without anything crossing the broken frame. Survival answered one question and left the more important one untouched.',
        },
        {
          id: 'checkpoint.story-guidance',
          when: { difficultyIn: ['story'] },
          text: 'The evidence already suggested a disciplined order of work: protect the people who could testify, identify what the county had concealed, and only then choose how to confront the recurrence. The night would still punish carelessness, but it would not hide the shape of the problem from you.',
        },
        {
          id: 'checkpoint.responder.high-trust',
          when: { relationship: { npcId: 'npc.opening_responder', metric: 'trust', gte: 10 } },
          text: '{{cast.responder.firstName}} walked beside you rather than ahead. At the county marker she caught your sleeve, checked that you were still steady, and let go only after you met her eyes. “I was supposed to get you out,” she said. “Now I think I need you to stay long enough to help me get everyone else.”',
        },
        {
          id: 'checkpoint.responder.guarded',
          when: { relationship: { npcId: 'npc.opening_responder', metric: 'trust', lte: 9 } },
          text: '{{cast.responder.firstName}} kept watch on the road while you caught your breath. She trusted you enough to keep you near her and not enough to turn her back. In {{world.settlement}}, that already counted as a kind of alliance.',
        },
        {
          id: 'checkpoint.injury',
          when: { hasAnyInjury: true },
          text: 'Pain had begun to settle into its permanent places. Nothing you had suffered was immediately fatal, but the campaign would remember every injury until time and treatment earned a recovery. The next decision would be made by the man you were now, not the untouched man who had crossed the county line.',
        },
        {
          id: 'checkpoint.close',
          text: 'Behind you, the road into {{world.region}} remained open just wide enough to invite another mistake. Ahead, the evacuation lights of {{world.settlement}} blinked through the rain. You had a witness, a rule, and one night to learn why the county had arranged itself around both.',
        },
      ],
      onEnter: [
        { type: 'setLocation', value: '{{world.settlement}} southern edge' },
        { type: 'flag', key: 'openingChapterComplete', value: true },
        { type: 'objective', id: 'objective.learn-rule', status: 'completed' },
        { type: 'objective', id: 'objective.break-cycle', status: 'active' },
        { type: 'readiness', amount: 4, when: { path: 'payload.worldState.flags.usedThreatLimitation', equals: true } },
        { type: 'pressure', amount: -3, when: { path: 'payload.worldState.flags.usedThreatLimitation', equals: true } },
      ],
      choices: [
        {
          id: 'continue_to_shelter',
          label: 'Continue with {{cast.responder.firstName}} to the evacuation shelter and learn what the town has hidden.',
          effects: [
            { type: 'time', amount: 1 },
            { type: 'objective', id: 'objective.protect-witness', status: 'active' },
            { type: 'objective', id: 'objective.uncover-truth', status: 'active' },
          ],
          next: 'ip.horror.chapter2.shelter',
        },
      ],
    },
    {
      id: 'ip.horror.chapter2.shelter',
      schemaVersion: 2,
      sceneType: 'narrative',
      act: 2,
      chapter: 2,
      kicker: 'ACT II · THE PEOPLE WHO STAYED',
      title: 'Forty-Seven Names',
      location: '{{world.settlement}} civic gymnasium',
      contentWarnings: ['psychological-horror', 'medical-trauma'],
      prose: [
        {
          id: 'shelter.arrival',
          text: 'The civic gymnasium held forty-seven people and enough folding cots for thirty. Battery lanterns made islands of light across the varnished floor. Nobody asked what had followed you from the volunteer hall. They watched {{cast.shelterLead.name}}, the {{cast.shelterLead.role}}, count everyone twice, then watched her stop at forty-seven both times.',
        },
        {
          id: 'shelter.deputy-found',
          when: { path: 'payload.worldState.flags.deputyLocated', equals: true },
          text: 'A space had been cleared beside the equipment cage for {{cast.deputy.name}}. His leg was splinted, his uniform cut open at the knee. He could still testify, but only if the shelter held long enough for him to leave it alive.',
        },
        {
          id: 'shelter.deputy-missing',
          when: { not: { path: 'payload.worldState.flags.deputyLocated', equals: true } },
          text: '{{cast.shelterLead.firstName}} had left one cot empty for {{cast.deputy.name}}, the {{cast.deputy.role}} who drove the emergency vehicle. No one had seen him enter town. His name remained on the head-count sheet in pencil, as though ink would be too final.',
        },
        {
          id: 'shelter.records',
          text: '{{cast.shelterLead.firstName}} unlocked a steel dispatch case and placed a county ledger on the scorer’s table. Three disappearances had been filed as accidents, two as voluntary departures, and one as a clerical error. Every correction used the same typewriter ribbon. Every corrected date moved the incident farther from the county relay station.',
        },
        {
          id: 'shelter.trust',
          when: { relationship: { npcId: 'npc.opening_responder', metric: 'trust', gte: 10 } },
          text: '{{cast.responder.firstName}} sat close enough that her shoulder touched yours while she read. She did not apologize for it. “You were right on the road,” she said. “So I’m going to trust you with the part that can still get us killed.”',
        },
        {
          id: 'shelter.pressure',
          when: { path: 'payload.worldState.threatPressure', gte: 60 },
          text: 'The shelter was already beginning to come apart at its seams. Someone had opened a side door without recording it. Two families disputed the head count. A child insisted that a woman in an orange search jacket had asked him to follow her into the locker room, although {{cast.responder.firstName}} had never left your side.',
        },
      ],
      onEnter: [
        { type: 'setLocation', value: '{{world.settlement}} civic gymnasium' },
        { type: 'companionStatus', npcId: 'npc.shelter_lead', status: 'active', lastAction: 'Maintaining the shelter head count and dispatch ledger.' },
        { type: 'companionStatus', npcId: 'npc.missing_deputy', status: 'injured', when: { path: 'payload.worldState.flags.deputyLocated', equals: true }, lastAction: 'Recovered from the northern tree line and brought to the shelter.' },
      ],
      choices: [
        {
          id: 'stabilize_shelter',
          label: 'Secure the exits, establish a witnessed head count, and put {{cast.shelterLead.firstName}} in charge of identity checks.',
          effects: [
            { type: 'flag', key: 'shelterSecured', value: true },
            { type: 'flag', key: 'witnessProtected', value: true },
            { type: 'readiness', amountByDifficulty: { story: 24, standard: 22, hard: 20, brutal: 20 } },
            { type: 'time', amount: 1 },
            { type: 'objective', id: 'objective.protect-witness', status: 'completed' },
            { type: 'companionStatus', npcId: 'npc.shelter_lead', status: 'safe', lastAction: 'Established a witnessed head count and locked identity protocol.' },
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { trust: 5, admiration: 3, protectiveness: 2 } },
            { type: 'relationshipAdjust', npcId: 'npc.shelter_lead', values: { trust: 7, respect: 6 } },
            { type: 'stat', key: 'witnessesSaved', amount: 1 },
          ],
          nextOptions: [
            { when: { lengthIn: ['standard'] }, next: 'ip.horror.chapter2.deputy-signal' },
          ],
          next: 'ip.horror.chapter2.records',
        },
        {
          id: 'triage_shelter',
          when: { path: 'campaign.protagonist.background.id', equals: 'paramedic' },
          label: 'Use your paramedic training to triage the room, separate the vulnerable, and build a defensible medical roster.',
          effects: [
            { type: 'flag', key: 'shelterSecured', value: true },
            { type: 'flag', key: 'witnessProtected', value: true },
            { type: 'readiness', amountByDifficulty: { story: 23, standard: 21, hard: 19, brutal: 18 } },
            { type: 'health', amount: 6 },
            { type: 'time', amount: 1 },
            { type: 'objective', id: 'objective.protect-witness', status: 'completed' },
            { type: 'companionStatus', npcId: 'npc.shelter_lead', status: 'safe', lastAction: 'Maintained a medical roster that doubled as an identity record.' },
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { trust: 5, admiration: 5, comfort: 2 } },
            { type: 'relationshipAdjust', npcId: 'npc.shelter_lead', values: { trust: 8, respect: 7 } },
            { type: 'stat', key: 'witnessesSaved', amount: 1 },
          ],
          nextOptions: [
            { when: { lengthIn: ['standard'] }, next: 'ip.horror.chapter2.deputy-signal' },
          ],
          next: 'ip.horror.chapter2.records',
        },
        {
          id: 'audit_ledger',
          label: 'Leave the shelter arrangements to others and begin reconstructing the altered incident ledger immediately.',
          effects: [
            { type: 'flag', key: 'earlyLedgerAudit', value: true },
            { type: 'clue', value: { id: 'clue.cycle-map', name: 'The recurrence cycle', summary: 'Every major incident follows the same sequence of locations and converges at the county relay station.' } },
            { type: 'readiness', amount: 7 },
            { type: 'time', amount: 1 },
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { admiration: 4, trust: 1, fear: 1 } },
            { type: 'relationshipAdjust', npcId: 'npc.shelter_lead', values: { suspicion: 3, respect: 2 } },
          ],
          nextOptions: [
            { when: { lengthIn: ['standard'] }, next: 'ip.horror.chapter2.deputy-signal' },
          ],
          next: 'ip.horror.chapter2.records',
        },
        {
          id: 'question_survivors',
          label: 'Interview the survivors separately before a shared story can harden around the room.',
          effects: [
            { type: 'flag', key: 'survivorsInterviewed', value: true },
            { type: 'clue', value: { id: 'clue.false-memory', name: 'Shared false memory', summary: 'Several survivors remember an evacuation order that was never transmitted through any official channel.' } },
            { type: 'pressure', amount: 3 },
            { type: 'readiness', amount: 5 },
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { admiration: 3, suspicion: -1 } },
          ],
          nextOptions: [
            { when: { lengthIn: ['standard'] }, next: 'ip.horror.chapter2.deputy-signal' },
          ],
          next: 'ip.horror.chapter2.records',
        },
      ],
    },
    {
      id: 'ip.horror.chapter2.deputy-signal',
      schemaVersion: 2,
      sceneType: 'narrative',
      act: 2,
      chapter: 2,
      kicker: 'STANDARD CAMPAIGN · THE UNRESOLVED CALL',
      title: '{{cast.complication.label}}',
      location: '{{world.settlement}} civic gymnasium',
      contentWarnings: ['medical-trauma', 'psychological-horror'],
      prose: [
        {
          id: 'deputy.signal.common',
          text: 'The hand radio on the scorer’s table gave one short burst of static. It was not connected to county power. {{cast.deputy.name}} identified himself, supplied the correct dispatch code, and named a service route near {{world.majorSite1}}. Then the transmission repeated from the beginning with exactly the same breath between every word.',
        },
        {
          id: 'deputy.signal.blackout',
          when: { path: 'cast.complication.id', equals: 'blackout' },
          text: 'The county-wide blackout had trapped the emergency gates half open. The deputy claimed to be pinned beyond them. Reaching him meant crossing a service corridor where every backup radio had begun turning itself on.',
        },
        {
          id: 'deputy.signal.false-order',
          when: { path: 'cast.complication.id', equals: 'false-evacuation' },
          text: 'The false evacuation order directed him toward the sealed transmitter annex. The route was plausible, official in tone, and absent from every dispatch log in the shelter.',
        },
        {
          id: 'deputy.signal.missing',
          when: { path: 'cast.complication.id', equals: 'missing-deputy' },
          text: 'The call placed him within walking distance of the abandoned vehicle. If it was genuine, the rain and his injuries were working against him. If it was not, something had learned enough of his dispatch procedure to make the lie expensive.',
        },
        {
          id: 'deputy.signal.responder',
          text: '{{cast.responder.firstName}} listened twice. “I know his code,” she said. “I don’t know whether that means he sent it.” Her eyes stayed on the radio. “We can go, I can decide with what we have, or we can protect the forty-seven people who are definitely here.”',
        },
      ],
      choices: [
        {
          id: 'go_after_deputy',
          label: 'Go with {{cast.responder.firstName}} and verify the call in person.',
          effects: [
            { type: 'flag', key: 'deputyRescueAttempted', value: true },
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { admiration: 4, protectiveness: 3, fear: 2 } },
            { type: 'time', amount: 1 },
          ],
          next: 'ip.horror.chapter2.deputy-extraction',
        },
        {
          id: 'let_responder_decide',
          label: 'Give {{cast.responder.firstName}} every fact you have and let her decide whether the call is worth the lives it may cost.',
          effects: [
            { type: 'flag', key: 'delegatedDeputyDecision', value: true },
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { trust: 3, respect: 5, emotionalIntimacy: 2 } },
          ],
          next: 'ip.horror.chapter2.deputy-decision',
        },
        {
          id: 'prioritize_shelter',
          label: 'Refuse the call and keep every available person at the shelter.',
          effects: [
            { type: 'flag', key: 'deputyAbandoned', value: true },
            { type: 'readiness', amount: 8 },
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { trust: -2, resentment: 4, respect: 1 } },
          ],
          next: 'ip.horror.chapter2.deputy-lost',
        },
      ],
    },
    {
      id: 'ip.horror.chapter2.deputy-decision',
      schemaVersion: 2,
      sceneType: 'narrative',
      act: 2,
      chapter: 2,
      kicker: 'AN INDEPENDENT DECISION',
      title: 'Her Call',
      location: '{{world.settlement}} civic gymnasium',
      contentWarnings: [],
      prose: [
        {
          id: 'deputy.decision.common',
          text: '{{cast.responder.firstName}} did not reward your trust by agreeing with you. She questioned {{cast.shelterLead.firstName}}, checked the time stamps against the road closure, and listened to the repeated transmission without speaking. Her decision belonged to her goals, her knowledge, and the people she had already promised to protect.',
        },
        {
          id: 'deputy.decision.high-trust',
          when: { relationship: { npcId: 'npc.opening_responder', metric: 'trust', gteRule: 'sharedTrustThreshold' } },
          text: 'When she finally looked at you, there was no performance in it. “I think it’s him,” she said. “I also think the thing out there expects me to come alone. If we go, we go together and we follow the rule exactly.”',
        },
        {
          id: 'deputy.decision.low-trust',
          when: { relationship: { npcId: 'npc.opening_responder', metric: 'trust', ltRule: 'sharedTrustThreshold' } },
          text: 'She turned the radio face down. “I can’t spend the shelter on a voice I can’t verify,” she said. The words were controlled, but the hand around the radio had gone white at the knuckles.',
        },
        {
          id: 'deputy.decision.pressure',
          when: { path: 'payload.worldState.threatPressure', gteRule: 'witnessRiskThreshold' },
          text: 'A crash sounded from the locker-room corridor before she could finish. The shelter itself had crossed into immediate danger. Whatever chance remained on the service route was now competing with a threat already inside the building’s perimeter.',
        },
      ],
      choices: [
        {
          id: 'accept_responder_judgment',
          label: 'Accept her judgment, even if it is not the answer you hoped to hear.',
          effects: [
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { trust: 3, comfort: 3, respect: 5, loyalty: 2 } },
          ],
          nextOptions: [
            {
              when: {
                all: [
                  { relationship: { npcId: 'npc.opening_responder', metric: 'trust', gteRule: 'sharedTrustThreshold' } },
                  { path: 'payload.worldState.threatPressure', ltRule: 'witnessRiskThreshold' },
                  { companion: { npcId: 'npc.opening_responder', status: 'active' } },
                ],
              },
              next: 'ip.horror.chapter2.deputy-extraction',
            },
          ],
          next: 'ip.horror.chapter2.deputy-lost',
        },
        {
          id: 'override_responder_judgment',
          label: 'Override her and insist that the two of you verify the call yourselves.',
          effects: [
            { type: 'flag', key: 'overrodeResponder', value: true },
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { trust: -4, resentment: 5, admiration: 1 } },
            { type: 'time', amount: 1 },
          ],
          next: 'ip.horror.chapter2.deputy-extraction',
        },
      ],
    },
    {
      id: 'ip.horror.chapter2.deputy-extraction',
      schemaVersion: 2,
      sceneType: 'narrative',
      act: 2,
      chapter: 2,
      kicker: 'THE SERVICE ROUTE',
      title: 'A Voice with Weight',
      location: '{{world.majorSite1}} service route',
      contentWarnings: ['medical-trauma', 'graphic-violence', 'psychological-horror'],
      prose: [
        {
          id: 'deputy.extraction.common',
          text: 'You found {{cast.deputy.name}} where the service route narrowed beneath a collapsed maintenance gate. The call had been genuine. So had the trap arranged around it. His ankle was caught under the gate, and a portable radio beyond his reach kept broadcasting the same plea in his voice.',
        },
        {
          id: 'deputy.extraction.listener',
          when: { path: 'campaign.world.antagonist.id', equals: 'threat_the_listener' },
          text: 'The radio answered every scrape of metal with another copy of the deputy’s voice. The copies could follow powered sound, not the hand signals {{cast.responder.firstName}} used to coordinate the lift.',
        },
        {
          id: 'deputy.extraction.surveyor',
          when: { path: 'campaign.world.antagonist.id', equals: 'threat_the_pale_surveyor' },
          text: 'Red survey paint enclosed the route on three sides. Rainwater rushed through a drainage channel beneath the gate, the only boundary the marks did not cross.',
        },
        {
          id: 'deputy.extraction.borrowed',
          when: { path: 'campaign.world.antagonist.id', equals: 'threat_the_borrowed_man' },
          text: 'A second deputy waited behind the fence, matching the injured man’s posture but not his reflection in the pooled water. It wrote HELP ME on the concrete with one gloved finger and never spoke.',
        },
        {
          id: 'deputy.extraction.widow',
          when: { path: 'campaign.world.antagonist.id', equals: 'threat_the_orchard_widow' },
          text: 'Crushed apples had been pressed into the gravel around the gate. {{cast.deputy.firstName}} had wrapped his mouth in a strip of uniform cloth rather than risk swallowing anything carried by the rain.',
        },
      ],
      choices: [
        {
          id: 'use_background_for_deputy',
          when: { hasItemFromBackground: true },
          label: 'Use your {{player.backgroundResourceLabel}} to control the extraction before the route closes.',
          effects: [
            { type: 'inventoryRemoveBackgroundResource' },
            { type: 'flag', key: 'deputyRescued', value: true },
            { type: 'flag', key: 'witnessProtected', value: true },
            { type: 'objective', id: 'objective.resolve-deputy', status: 'completed' },
            { type: 'objective', id: 'objective.protect-witness', status: 'completed' },
            { type: 'companionStatus', npcId: 'npc.missing_deputy', status: 'safe', lastAction: 'Survived the service-route extraction and returned with direct evidence.' },
            { type: 'readiness', amount: 10 },
            { type: 'time', amount: 1 },
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { trust: 5, admiration: 6, comfort: 2 } },
            { type: 'stat', key: 'witnessesSaved', amount: 1 },
          ],
          next: 'ip.horror.chapter2.deputy-resolved',
        },
        {
          id: 'extract_carefully',
          label: 'Work slowly, obey the established limitation, and accept the time cost.',
          effects: [
            { type: 'flag', key: 'deputyRescueMethod', value: 'careful' },
            { type: 'time', amount: 2 },
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { trust: 4, admiration: 3, respect: 3 } },
          ],
          nextOptions: [
            { when: { path: 'payload.worldState.threatPressure', ltRule: 'witnessRiskThreshold' }, next: 'ip.horror.chapter2.deputy-resolved' },
          ],
          next: 'ip.horror.chapter2.deputy-lost',
        },
        {
          id: 'rush_extraction',
          label: 'Force the gate up at once and accept whatever injury the speed demands.',
          effects: [
            { type: 'flag', key: 'deputyRescueMethod', value: 'rushed' },
            { type: 'health', amountByDifficulty: { story: -8, standard: -15, hard: -24, brutal: -34 } },
            { type: 'injury', value: { id: 'injury.gate-crush', name: 'Crush injury from the maintenance gate', severity: 'serious', treated: false, source: 'service-route extraction' } },
            { type: 'pressure', amountByDifficulty: { story: 1, standard: 4, hard: 7, brutal: 10 } },
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { admiration: 5, protectiveness: 6, resentment: 2 } },
          ],
          nextOptions: [
            {
              when: {
                all: [
                  { difficultyIn: ['story', 'standard'] },
                  { path: 'payload.worldState.threatPressure', ltRule: 'witnessRiskThreshold' },
                ],
              },
              next: 'ip.horror.chapter2.deputy-resolved',
            },
          ],
          next: 'ip.horror.chapter2.deputy-lost',
        },
        {
          id: 'mark_and_withdraw',
          label: 'Mark the location, leave him supplies, and withdraw before the shelter loses both rescuers.',
          effects: [
            { type: 'flag', key: 'deputyLeftBehind', value: true },
            { type: 'readiness', amount: 5 },
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { respect: 2, resentment: 3, grief: 2 } },
          ],
          next: 'ip.horror.chapter2.deputy-lost',
        },
      ],
    },
    {
      id: 'ip.horror.chapter2.deputy-resolved',
      schemaVersion: 2,
      sceneType: 'narrative',
      act: 2,
      chapter: 2,
      kicker: 'OPTIONAL OBJECTIVE COMPLETE',
      title: 'The Man from the Empty Vehicle',
      location: '{{world.settlement}} civic gymnasium',
      contentWarnings: ['medical-trauma'],
      prose: [
        {
          id: 'deputy.resolved.common',
          text: '{{cast.deputy.name}} returned to the shelter on his own feet only because you and {{cast.responder.firstName}} took most of his weight. Once his breathing steadied, he identified the person who altered the road-closure log and the exact hour the county’s official timeline stopped matching reality.',
        },
        {
          id: 'deputy.resolved.relationship',
          text: '{{cast.responder.firstName}} cleaned blood from her hands at the scorer’s table. She did not look at you when she said, “I would have heard that call for the rest of my life.” A moment later her fingers found your wrist, checked your pulse without explanation, and stayed there after the count was finished.',
        },
      ],
      onEnter: [
        { type: 'flag', key: 'deputyRescued', value: true },
        { type: 'flag', key: 'witnessProtected', value: true },
        { type: 'objective', id: 'objective.resolve-deputy', status: 'completed' },
        { type: 'objective', id: 'objective.protect-witness', status: 'completed' },
        { type: 'companionStatus', npcId: 'npc.missing_deputy', status: 'safe', lastAction: 'Returned to the shelter and authenticated the closure logs.' },
        { type: 'clue', value: { id: 'clue.deputy-authentication', name: 'Authenticated closure log', summary: '{{cast.deputy.name}} identified the exact hour and official who falsified the northern-road record.' } },
        { type: 'readiness', amount: 7 },
      ],
      choices: [
        {
          id: 'continue_from_deputy_rescue',
          label: 'Use his testimony to reopen the sealed county records.',
          effects: [
            { type: 'relationshipAdjust', npcId: 'npc.missing_deputy', values: { trust: 8, loyalty: 5, admiration: 6 } },
          ],
          next: 'ip.horror.chapter2.records',
        },
      ],
    },
    {
      id: 'ip.horror.chapter2.deputy-lost',
      schemaVersion: 2,
      sceneType: 'narrative',
      act: 2,
      chapter: 2,
      kicker: 'AN IRREVERSIBLE COST',
      title: 'The Call Ends',
      location: '{{world.settlement}} civic gymnasium',
      contentWarnings: ['character-death', 'grief'],
      prose: [
        {
          id: 'deputy.lost.missing',
          when: { all: [{ difficultyIn: ['story', 'standard'] }, { path: 'payload.worldState.threatPressure', ltRule: 'witnessRiskThreshold' }] },
          text: 'The transmission ended before anyone could verify the route. Search lights later found the maintenance gate and the deputy’s blood beneath it, but no body. {{cast.shelterLead.firstName}} changed his name on the shelter roster from absent to missing and refused to let anyone erase the distinction.',
        },
        {
          id: 'deputy.lost.dead',
          when: { any: [{ difficultyIn: ['hard', 'brutal'] }, { path: 'payload.worldState.threatPressure', gteRule: 'witnessRiskThreshold' }] },
          text: 'The last transmission did not repeat. It ended with the gate moving, one short breath, and silence. At dawn, the service route yielded the deputy’s badge and enough evidence to make uncertainty an act of denial. {{cast.shelterLead.firstName}} wrote the time beside his name in ink.',
        },
        {
          id: 'deputy.lost.responder',
          text: '{{cast.responder.firstName}} accepted the decision without pretending it had become easy. She folded the dispatch code into the county ledger. “We keep going,” she said. “That is not the same thing as saying this was acceptable.”',
        },
      ],
      onEnter: [
        { type: 'flag', key: 'deputyLost', value: true },
        { type: 'objective', id: 'objective.resolve-deputy', status: 'failed' },
        { type: 'morale', amountByDifficulty: { story: -7, standard: -10, hard: -14, brutal: -18 } },
        { type: 'companionStatus', npcId: 'npc.missing_deputy', status: 'missing', cause: 'The service-route transmission ended before the deputy could be recovered.', when: { all: [{ difficultyIn: ['story', 'standard'] }, { path: 'payload.worldState.threatPressure', ltRule: 'witnessRiskThreshold' }] } },
        { type: 'companionStatus', npcId: 'npc.missing_deputy', status: 'dead', cause: 'The service-route trap closed before extraction was completed.', when: { any: [{ difficultyIn: ['hard', 'brutal'] }, { path: 'payload.worldState.threatPressure', gteRule: 'witnessRiskThreshold' }] } },
      ],
      choices: [
        {
          id: 'continue_after_deputy_loss',
          label: 'Record what happened accurately and continue the investigation.',
          effects: [
            { type: 'clue', value: { id: 'clue.deputy-last-call', name: 'The deputy’s last call', summary: 'The repeated transmission proved that the service-route trap was linked to the altered county response system.' } },
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { grief: 4, trust: 2, emotionalIntimacy: 2 } },
          ],
          next: 'ip.horror.chapter2.records',
        },
      ],
    },
    {
      id: 'ip.horror.chapter2.records',
      schemaVersion: 2,
      sceneType: 'narrative',
      act: 2,
      chapter: 2,
      kicker: 'THE SEALED RECORDS',
      title: '{{mystery.title}}',
      location: '{{world.settlement}} county records room',
      contentWarnings: ['disturbing-imagery', 'psychological-horror'],
      prose: [
        {
          id: 'records.entry',
          text: 'The records room occupied a windowless office beneath the old courthouse. The county had preserved nearly everything and cataloged almost nothing. Property rolls shared boxes with autopsy photographs. Dispatch reels had been wrapped in grocery paper. Someone had not wanted the past destroyed. Someone had wanted it difficult to assemble.',
        },
        {
          id: 'records.key-clue',
          text: '{{mystery.keyClue.summary}}',
        },
        {
          id: 'records.failed-containment',
          when: { path: 'mystery.id', equals: 'failed-containment' },
          text: 'The supposed first victim had signed an evacuation receipt six hours after his recorded disappearance. The signature was witnessed by two county employees, then hidden beneath a replacement incident sheet. Whatever the public had been told, the disappearance was part of an operation already under way.',
        },
        {
          id: 'records.living-transmission',
          when: { path: 'mystery.id', equals: 'living-transmission' },
          text: 'The false orders carried a live carrier pulse from the sealed transmitter annex. A recording could repeat words. It could not renegotiate frequency drift against the weather every eleven seconds. Someone, or something capable of maintaining the equipment, was still transmitting inside the exclusion zone.',
        },
        {
          id: 'records.erased-settlement',
          when: { path: 'mystery.id', equals: 'erased-settlement' },
          text: 'The tax rolls collected money from sixty-three parcels that did not exist on the current map. School-bus mileage and water records described roads the county now labeled forest. The residents had not vanished from the land. They had been removed from the official shape of it.',
        },
        {
          id: 'records.crime-awakened',
          when: { path: 'mystery.id', equals: 'crime-awakened-threat' },
          text: 'The earliest photographs showed restraint bruises, chemical burns, and evidence of a human confinement site. The impossible injuries appeared only after officials buried the victim and rewrote the report. The horror had not excused the crime. The crime had invited the horror into a prepared room.',
        },
        {
          id: 'records.responder',
          text: '{{cast.responder.firstName}} spread the chronology across the floor. “Four explanations fit pieces of this,” she said. “Only one fits the order they happened in. We choose before the factions turn these papers into whatever plan they already wanted.”',
        },
      ],
      onEnter: [
        { type: 'setLocation', value: '{{world.settlement}} county records room' },
        { type: 'clue', value: { id: '{{mystery.keyClue.id}}', name: '{{mystery.keyClue.name}}', summary: '{{mystery.keyClue.summary}}' } },
        { type: 'clue', value: { id: 'clue.relay-convergence', name: 'Relay convergence map', summary: 'Every altered incident route and emergency order converges on the county relay station.' } },
      ],
      choices: [
        {
          id: 'reconstruct_chronology',
          label: 'Reconstruct the official chronology and mark every event that could not have happened in the recorded order.',
          effects: [
            { type: 'clue', value: { id: 'clue.timeline-contradiction', name: 'Chronology contradiction', summary: 'The public timeline requires county actions that occurred before the events supposedly triggering them.' } },
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { admiration: 4, trust: 2 } },
            { type: 'time', amount: 1 },
          ],
          next: 'ip.horror.chapter2.deduction',
        },
        {
          id: 'trace_infrastructure',
          label: 'Trace power, roads, water, and radio infrastructure until the physical system reveals what the paperwork avoids.',
          effects: [
            { type: 'clue', value: { id: 'clue.infrastructure-chain', name: 'Infrastructure chain', summary: 'The sealed annex, relay station, old settlement routes, and containment sites were built as one coordinated system.' } },
            { type: 'readiness', amount: 5 },
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { admiration: 3, respect: 3 } },
            { type: 'time', amount: 1 },
          ],
          next: 'ip.horror.chapter2.deduction',
        },
        {
          id: 'compare_testimony',
          label: 'Compare witness statements against the records and isolate the memory no firsthand witness could possess.',
          effects: [
            { type: 'clue', value: { id: 'clue.borrowed-memory', name: 'Borrowed memory', summary: 'Multiple witnesses repeat one official detail that existed only in a sealed county memorandum.' } },
            { type: 'relationshipAdjust', npcId: 'npc.shelter_lead', values: { trust: 5, respect: 4 } },
            { type: 'time', amount: 1 },
          ],
          next: 'ip.horror.chapter2.deduction',
        },
      ],
    },
    {
      id: 'ip.horror.chapter2.deduction',
      schemaVersion: 2,
      sceneType: 'narrative',
      act: 2,
      chapter: 2,
      kicker: 'THE LOCKED MYSTERY',
      title: 'What Actually Happened',
      location: '{{world.settlement}} county records room',
      contentWarnings: [],
      prose: [
        {
          id: 'deduction.common',
          text: 'The evidence existed before you touched it. The culprit was not waiting for your choice to become true. The county’s hidden history had one fixed shape, and the four surviving explanations could not all contain it.',
        },
        {
          id: 'deduction.evidence',
          text: 'The decisive record was {{mystery.keyClue.name}}: {{mystery.keyClue.summary}} The relay map, testimony, and chronology had to be read around that fact rather than over it.',
        },
        {
          id: 'deduction.second-attempt',
          when: { path: 'payload.worldState.flags.reconsideredTheory', equals: true },
          text: 'You had already followed one attractive explanation into contradiction. This was the final chance to separate the theory that felt complete from the one the evidence could actually support.',
        },
      ],
      choices: [
        ...MYSTERY_THEORY_CHOICES,
      ],
    },
    {
      id: 'ip.horror.chapter2.deduction-correct',
      schemaVersion: 2,
      sceneType: 'narrative',
      act: 2,
      chapter: 2,
      kicker: 'MYSTERY RESOLVED',
      title: '{{mystery.title}}',
      location: '{{world.settlement}} county records room',
      contentWarnings: [],
      prose: [
        {
          id: 'deduction.correct',
          text: 'Once stated plainly, the conclusion did not need the room to admire it. {{mystery.truth}} The smaller contradictions fell into place around that fact, including the relay station’s role and the reason every faction possessed only a useful fragment of the truth.',
        },
        {
          id: 'deduction.correct.responder',
          text: '{{cast.responder.firstName}} read the decisive line again. Her relief was not happiness. It was the hard relief of finally knowing which danger belonged to the world and which danger people had built around it. “All right,” she said. “Now we can make a plan that answers the thing that actually happened.”',
        },
      ],
      onEnter: [
        { type: 'flag', key: 'hiddenTruthResolved', value: true },
        { type: 'objective', id: 'objective.uncover-truth', status: 'completed' },
        { type: 'clue', value: { id: 'clue.mystery-conclusion', name: '{{mystery.title}}', summary: '{{mystery.truth}}' } },
      ],
      choices: [
        {
          id: 'carry_correct_conclusion_to_factions',
          label: 'Take the resolved chronology to the three factions and force each plan to answer it.',
          effects: [
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { trust: 5, admiration: 5, emotionalIntimacy: 2 } },
          ],
          next: 'ip.horror.chapter2.faction',
        },
      ],
    },
    {
      id: 'ip.horror.chapter2.deduction-wrong',
      schemaVersion: 2,
      sceneType: 'narrative',
      act: 2,
      chapter: 2,
      kicker: 'THE THEORY DOES NOT CLOSE',
      title: 'One Contradiction Remains',
      location: '{{world.settlement}} county records room',
      contentWarnings: [],
      prose: [
        {
          id: 'deduction.wrong',
          text: 'The theory explained enough to be dangerous. Then {{cast.responder.firstName}} placed {{mystery.keyClue.name}} beside it, and one fact refused to fit. The explanation required the county to react to an event before that event occurred, or required a dead system to produce live evidence, or required a population to vanish from land records it continued paying into.',
        },
        {
          id: 'deduction.wrong.responder',
          text: 'She did not tell you that you were wrong. “Show me where this belongs,” she said. It was kinder and less comfortable. Outside the records room, the factions were already gathering, and the pressure in the county continued rising while the papers waited.',
        },
      ],
      choices: [
        {
          id: 'reopen_evidence',
          when: { not: { path: 'payload.worldState.flags.reconsideredTheory', equals: true } },
          label: 'Reopen the evidence, accept the lost time, and test the remaining explanations against the contradiction.',
          effects: [
            { type: 'flag', key: 'reconsideredTheory', value: true },
            { type: 'time', amount: 1 },
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { trust: 3, respect: 5, admiration: 2 } },
          ],
          next: 'ip.horror.chapter2.deduction',
        },
        {
          id: 'stand_by_wrong_theory',
          label: 'Stand by the explanation and build the final plan around it despite the contradiction.',
          effects: [
            { type: 'flag', key: 'falseTheoryLocked', value: true },
            { type: 'objective', id: 'objective.uncover-truth', status: 'failed' },
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { trust: -4, suspicion: 5, resentment: 2 } },
          ],
          next: 'ip.horror.chapter2.false-conclusion',
        },
      ],
    },
    {
      id: 'ip.horror.chapter2.false-conclusion',
      schemaVersion: 2,
      sceneType: 'narrative',
      act: 2,
      chapter: 2,
      kicker: 'MYSTERY UNRESOLVED',
      title: 'A Plan Built around the Wrong Absence',
      location: '{{world.settlement}} county records room',
      contentWarnings: [],
      prose: [
        {
          id: 'false-conclusion.common',
          text: 'The county did not rewrite itself to reward certainty. The contradiction remained in the file after the folders were closed. You carried a coherent theory into the next room, but not the truth, and the final machinery would remember the difference even if every frightened person around the table did not.',
        },
        {
          id: 'false-conclusion.responder',
          text: '{{cast.responder.firstName}} gathered the original pages separately from your notes. “I’ll follow the parts that are supported,” she said. “I won’t pretend the rest became evidence because we ran out of time.”',
        },
      ],
      onEnter: [
        { type: 'flag', key: 'hiddenTruthResolved', value: false },
        { type: 'objective', id: 'objective.uncover-truth', status: 'failed' },
      ],
      choices: [
        {
          id: 'carry_uncertain_conclusion',
          label: 'Present the theory as uncertain and preserve the contrary evidence.',
          effects: [
            { type: 'flag', key: 'admittedUncertainty', value: true },
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { trust: 2, respect: 4, suspicion: -2 } },
          ],
          next: 'ip.horror.chapter2.faction',
        },
        {
          id: 'present_false_certainty',
          label: 'Present the theory as settled so the factions will commit to one plan.',
          effects: [
            { type: 'flag', key: 'presentedFalseCertainty', value: true },
            { type: 'readiness', amount: 7 },
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { trust: -5, suspicion: 5, resentment: 4 } },
          ],
          next: 'ip.horror.chapter2.faction',
        },
      ],
    },
    {
      id: 'ip.horror.chapter2.faction',
      schemaVersion: 2,
      sceneType: 'narrative',
      act: 2,
      chapter: 2,
      kicker: 'THREE AGENDAS',
      title: 'The Plans People Brought with Them',
      location: '{{world.settlement}} civic gymnasium',
      contentWarnings: [],
      prose: [
        {
          id: 'faction.plans',
          text: 'The three active factions had already chosen what the emergency meant before you entered the room. {{world.factions.0.name}} wanted to {{world.factions.0.agenda}} {{world.factions.1.name}} wanted to {{world.factions.1.agenda}} {{world.factions.2.name}} wanted to {{world.factions.2.agenda}} Each plan protected something real and concealed the cost most likely to make the room reject it.',
        },
        {
          id: 'faction.truth-resolved',
          when: { path: 'payload.worldState.flags.hiddenTruthResolved', equals: true },
          text: 'The resolved chronology gave you leverage. Every leader could dispute blame. None could dispute the sequence of events without denying a record their own people had created.',
        },
        {
          id: 'faction.truth-unresolved',
          when: { not: { path: 'payload.worldState.flags.hiddenTruthResolved', equals: true } },
          text: 'Without a resolved chronology, every faction found the piece of your theory that justified its existing agenda. Agreement became easier and less trustworthy.',
        },
        {
          id: 'faction.responder',
          text: '{{cast.responder.firstName}} folded the county map into quarters. “We can’t save everybody by agreeing with everybody,” she said. “Choose whose resources we need, and remember what they expect to own afterward.”',
        },
      ],
      choices: [
        {
          id: 'back_first_faction',
          label: 'Back {{world.factions.0.name}} and use its organization to harden the evacuation plan.',
          effects: [
            { type: 'flag', key: 'factionAlly', value: '{{world.factions.0.name}}' },
            { type: 'readiness', amountByDifficulty: { story: 18, standard: 17, hard: 16, brutal: 15 } },
            { type: 'time', amount: 1 },
            { type: 'relationshipAdjust', npcId: 'npc.shelter_lead', values: { trust: 4, respect: 5 } },
          ],
          next: 'ip.horror.chapter2.preparation',
        },
        {
          id: 'back_second_faction',
          label: 'Back {{world.factions.1.name}} and secure independent copies of the evidence before the relay operation begins.',
          effects: [
            { type: 'flag', key: 'factionAlly', value: '{{world.factions.1.name}}' },
            { type: 'flag', key: 'evidenceDuplicated', value: true },
            { type: 'inventoryAdd', value: { id: 'item.evidence-copy', name: 'Independent evidence copy', quantity: 1, source: '{{world.factions.1.name}}' } },
            { type: 'pressure', amount: 3 },
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { admiration: 3, fear: 1 } },
          ],
          next: 'ip.horror.chapter2.preparation',
        },
        {
          id: 'back_third_faction',
          label: 'Back {{world.factions.2.name}} and take the specialized tools it can put in your hands tonight.',
          effects: [
            { type: 'flag', key: 'factionAlly', value: '{{world.factions.2.name}}' },
            { type: 'inventoryAdd', value: { id: 'item.containment-hardware', name: 'Containment hardware kit', quantity: 1, source: '{{world.factions.2.name}}' } },
            { type: 'readiness', amount: 9 },
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { trust: 2, admiration: 3 } },
          ],
          next: 'ip.horror.chapter2.preparation',
        },
      ],
    },
    {
      id: 'ip.horror.chapter2.preparation',
      schemaVersion: 2,
      sceneType: 'narrative',
      act: 2,
      chapter: 2,
      kicker: 'BEFORE DAWN',
      title: 'What You Carry',
      location: '{{world.settlement}} civic gymnasium',
      contentWarnings: [],
      prose: [
        {
          id: 'prep.common',
          text: 'Preparation stripped the night of its drama and left only weight. Batteries. Water. Bandages. Cutters. The ledger. Every object meant one less hand free when the road narrowed, and every object left behind closed a future choice before you knew whether you would need it.',
        },
        {
          id: 'prep.injury',
          when: { hasAnyInjury: true },
          text: 'Your injury had stiffened while you sat. {{cast.responder.firstName}} noticed before you stood and redistributed the heaviest equipment without asking permission. When you began to object, she looked at you until the objection became less useful than breathing.',
        },
        {
          id: 'prep.deputy-safe',
          when: { companion: { npcId: 'npc.missing_deputy', status: 'safe' } },
          text: '{{cast.deputy.firstName}} marked a maintenance entrance on the relay blueprint. He could not make the climb, but the route he provided was the first advantage the county had not already leaked to the threat.',
        },
        {
          id: 'prep.pressure-high',
          when: { path: 'payload.worldState.threatPressure', gte: 65 },
          text: 'The county was moving faster than your plan. Three emergency channels had begun repeating one another. The shelter lights dimmed whenever the relay beacon turned north. Whatever you chose to carry would have to work under pressure already approaching the point of no return.',
        },
      ],
      choices: [
        {
          id: 'carry_evidence',
          label: 'Carry the ledger and the authenticated evidence needed to expose the county beyond its own borders.',
          effects: [
            { type: 'flag', key: 'carriedEvidence', value: true },
            { type: 'inventoryAdd', value: { id: 'item.incident-ledger', name: 'County incident ledger', quantity: 1, source: 'county records room' } },
            { type: 'relationshipAdjust', npcId: 'npc.shelter_lead', values: { trust: 3, respect: 4 } },
          ],
          next: 'ip.horror.chapter3.approach',
        },
        {
          id: 'carry_supplies',
          label: 'Carry medical supplies and repair tools for keeping people alive when the machinery fails.',
          effects: [
            { type: 'flag', key: 'carriedSupplies', value: true },
            { type: 'inventoryAdd', value: { id: 'item.emergency-kit', name: 'Emergency medical and repair kit', quantity: 1, source: 'evacuation shelter' } },
            { type: 'health', amount: 5 },
            { type: 'readiness', amount: 5 },
          ],
          next: 'ip.horror.chapter3.approach',
        },
        {
          id: 'carry_relay_spares',
          label: 'Carry the relay’s obsolete fuses, switch braces, and a manual line tester.',
          effects: [
            { type: 'flag', key: 'carriedRelaySpares', value: true },
            { type: 'inventoryAdd', value: { id: 'item.relay-spares', name: 'Relay switch spares', quantity: 1, source: 'county maintenance cabinet' } },
            { type: 'readiness', amount: 7 },
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { admiration: 3, trust: 2 } },
          ],
          next: 'ip.horror.chapter3.approach',
        },
        {
          id: 'travel_light',
          label: 'Travel light enough to move quickly and preserve the option to retreat.',
          effects: [
            { type: 'flag', key: 'travelledLight', value: true },
            { type: 'morale', amount: 5 },
            { type: 'pressure', amountByDifficulty: { story: -8, standard: -7, hard: -6, brutal: -5 } },
          ],
          next: 'ip.horror.chapter3.approach',
        },
      ],
    },
    {
      id: 'ip.horror.chapter3.approach',
      schemaVersion: 2,
      sceneType: 'narrative',
      act: 3,
      chapter: 3,
      kicker: 'ACT III · THE COUNTY CROWN',
      title: 'The Road to the Relay',
      location: '{{world.region}} relay access road',
      contentWarnings: ['psychological-horror'],
      prose: [
        {
          id: 'approach.common',
          text: 'The relay road climbed above the pines in six wet switchbacks. Every turn exposed another portion of {{world.settlement}} below, its shelter lights, road flares, and dark residential blocks arranged around the hill like pieces on a board no living planner had designed alone.',
        },
        {
          id: 'approach.responder',
          text: '{{cast.responder.firstName}} kept pace beside you. The night had stripped the ceremonial distance from both of you. She no longer pretended not to watch how heavily you favored an injury, and you no longer pretended not to notice when she counted the shelter lights after every turn.',
        },
        {
          id: 'approach.deputy-safe',
          when: { companion: { npcId: 'npc.missing_deputy', status: 'safe' } },
          text: 'The maintenance route {{cast.deputy.firstName}} marked remained clear. His testimony had become a physical advantage, not merely a better line in the archive.',
        },
        {
          id: 'approach.deputy-lost',
          when: { any: [{ companion: { npcId: 'npc.missing_deputy', status: 'dead' } }, { companion: { npcId: 'npc.missing_deputy', status: 'missing' } }] },
          text: 'The emergency channel remained silent where {{cast.deputy.firstName}}’s voice had been. The absence traveled with you, not as a lesson arranged for your benefit, but as the continuing cost of a decision that could not be reversed.',
        },
      ],
      onEnter: [
        { type: 'setLocation', value: '{{world.region}} relay access road' },
        { type: 'time', amount: 1 },
      ],
      choices: [
        {
          id: 'take_direct_road',
          label: 'Take the direct road and preserve strength for the machinery inside.',
          effects: [
            { type: 'flag', key: 'relayApproach', value: 'direct' },
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { comfort: 2, trust: 2 } },
          ],
          nextOptions: [
            {
              when: {
                all: [
                  { path: 'payload.worldState.threatPressure', gteRule: 'witnessRiskThreshold' },
                  { not: { path: 'payload.worldState.flags.shelterSecured', equals: true } },
                  { not: { companion: { npcId: 'npc.missing_deputy', status: 'safe' } } },
                ],
              },
              next: 'ip.horror.chapter3.witness-crisis',
            },
          ],
          next: 'ip.horror.chapter3.convergence',
        },
        {
          id: 'verify_shelter_channel',
          label: 'Stop long enough to verify the shelter head count and the voice answering for it.',
          effects: [
            { type: 'flag', key: 'shelterChannelChecked', value: true },
            { type: 'time', amount: 1 },
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { trust: 4, protectiveness: 3, emotionalIntimacy: 1 } },
          ],
          nextOptions: [
            {
              when: {
                any: [
                  { path: 'payload.worldState.threatPressure', gteRule: 'witnessRiskThreshold' },
                  { path: 'payload.worldState.evacuationReadiness', lt: 45 },
                ],
              },
              next: 'ip.horror.chapter3.witness-crisis',
            },
          ],
          next: 'ip.horror.chapter3.convergence',
        },
        {
          id: 'take_deputy_route',
          when: { companion: { npcId: 'npc.missing_deputy', status: 'safe' } },
          label: 'Use {{cast.deputy.firstName}}’s maintenance route and approach beneath the relay’s blind side.',
          effects: [
            { type: 'flag', key: 'relayApproach', value: 'maintenance' },
            { type: 'pressure', amount: -8 },
            { type: 'readiness', amount: 5 },
          ],
          next: 'ip.horror.chapter3.convergence',
        },
        {
          id: 'cut_through_ravine',
          label: 'Leave the road and cut through the ravine before the threat can close the mapped approach.',
          effects: [
            { type: 'flag', key: 'relayApproach', value: 'ravine' },
            { type: 'pressure', amountByDifficulty: { story: -9, standard: -7, hard: -5, brutal: -3 } },
            { type: 'health', amountByDifficulty: { story: -2, standard: -5, hard: -9, brutal: -14 } },
            { type: 'injury', value: { id: 'injury.ravine-cut', name: 'Deep forearm cut', severity: 'moderate', treated: false, source: 'relay ravine approach' }, when: { difficultyIn: ['hard', 'brutal'] } },
          ],
          next: 'ip.horror.chapter3.convergence',
        },
      ],
    },
    {
      id: 'ip.horror.chapter3.witness-crisis',
      schemaVersion: 2,
      sceneType: 'narrative',
      act: 3,
      chapter: 3,
      kicker: 'THE SHELTER BREAKS',
      title: 'A Voice on the Wrong Side of the Door',
      location: '{{world.region}} relay access road',
      contentWarnings: ['character-death', 'psychological-horror'],
      prose: [
        {
          id: 'witness.crisis.common',
          text: '{{cast.shelterLead.firstName}} answered the shelter channel with the correct code and the wrong head count. Someone had opened the locker-room corridor. The emergency lights were failing in sequence, and a second voice behind hers kept repeating the names she had not yet read.',
        },
        {
          id: 'witness.crisis.secured',
          when: { path: 'payload.worldState.flags.shelterSecured', equals: true },
          text: 'The identity protocol you established had slowed the breach. Doors were locked in pairs, each opened only after two witnesses agreed on the person outside. The shelter was in danger, not chaos.',
        },
        {
          id: 'witness.crisis.unsecured',
          when: { not: { path: 'payload.worldState.flags.shelterSecured', equals: true } },
          text: 'No witnessed head count existed. Three people claimed authority over the side exit. Nobody could establish whether the woman giving instructions in {{cast.shelterLead.firstName}}’s voice had been inside the building when the night began.',
        },
        {
          id: 'witness.crisis.responder',
          text: '{{cast.responder.firstName}} turned back toward town before stopping herself. “The relay is the cause,” she said. “The shelter is the consequence. We can spend time on one before the other gets worse.” She looked at you, but she did not surrender the decision hidden inside her posture.',
        },
      ],
      choices: [
        {
          id: 'return_for_witnesses',
          label: 'Return to the shelter together and recover {{cast.shelterLead.firstName}} before approaching the relay again.',
          effects: [
            { type: 'flag', key: 'returnedForShelter', value: true },
            { type: 'time', amount: 2 },
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { trust: 5, admiration: 4, loyalty: 4 } },
          ],
          nextOptions: [
            {
              when: {
                any: [
                  { path: 'payload.worldState.flags.shelterSecured', equals: true },
                  { path: 'payload.worldState.evacuationReadiness', gteRule: 'fullRescueReadinessMinimum' },
                  { companion: { npcId: 'npc.missing_deputy', status: 'safe' } },
                ],
              },
              next: 'ip.horror.chapter3.witness-saved',
            },
          ],
          next: 'ip.horror.chapter3.witness-lost',
        },
        {
          id: 'send_responder_back',
          label: 'Ask {{cast.responder.firstName}} to return while you continue alone toward the relay.',
          effects: [
            { type: 'flag', key: 'responderSentToShelter', value: true },
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { trust: 2, protectiveness: 5, fear: 4 } },
          ],
          nextOptions: [
            {
              when: {
                all: [
                  { relationship: { npcId: 'npc.opening_responder', metric: 'trust', gteRule: 'sharedTrustThreshold' } },
                  { path: 'payload.worldState.threatPressure', ltRule: 'witnessRiskThreshold' },
                ],
              },
              next: 'ip.horror.chapter3.witness-saved',
            },
          ],
          next: 'ip.horror.chapter3.witness-lost',
        },
        {
          id: 'continue_to_relay_during_crisis',
          label: 'Continue to the relay and trust that ending the source is the only rescue that can still matter.',
          effects: [
            { type: 'flag', key: 'leftShelterInCrisis', value: true },
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { trust: -3, resentment: 5, fear: 3 } },
          ],
          next: 'ip.horror.chapter3.witness-lost',
        },
      ],
    },
    {
      id: 'ip.horror.chapter3.witness-saved',
      schemaVersion: 2,
      sceneType: 'narrative',
      act: 3,
      chapter: 3,
      kicker: 'WITNESS RECOVERED',
      title: 'The Head Count Holds',
      location: '{{world.settlement}} civic gymnasium',
      contentWarnings: ['medical-trauma'],
      prose: [
        {
          id: 'witness.saved.common',
          text: 'The shelter doors opened only after two people verified each face. {{cast.shelterLead.name}} emerged with blood on one sleeve and the incident ledger sealed beneath her coat. She had held the roster together long enough for the false voice to run out of names it could use.',
        },
        {
          id: 'witness.saved.responder',
          text: '{{cast.responder.firstName}} checked every person herself, then rested both hands on the scorer’s table and breathed. “Now we go back,” she said. Her voice was gentler when she added, “Together, if you’re still willing.”',
        },
      ],
      onEnter: [
        { type: 'flag', key: 'witnessProtected', value: true },
        { type: 'objective', id: 'objective.protect-witness', status: 'completed' },
        { type: 'companionStatus', npcId: 'npc.shelter_lead', status: 'safe', lastAction: 'Survived the shelter breach with the witnessed roster and incident ledger.' },
        { type: 'readiness', amount: 10 },
        { type: 'stat', key: 'witnessesSaved', amount: 1 },
      ],
      choices: [
        {
          id: 'return_to_relay_after_rescue',
          label: 'Return to the relay with the shelter secured behind you.',
          effects: [
            { type: 'relationshipAdjust', npcId: 'npc.shelter_lead', values: { trust: 8, loyalty: 5, respect: 7 } },
          ],
          next: 'ip.horror.chapter3.convergence',
        },
      ],
    },
    {
      id: 'ip.horror.chapter3.witness-lost',
      schemaVersion: 2,
      sceneType: 'narrative',
      act: 3,
      chapter: 3,
      kicker: 'THE COST REACHES TOWN',
      title: 'Forty-Six Names',
      location: '{{world.region}} relay access road',
      contentWarnings: ['character-death', 'grief'],
      prose: [
        {
          id: 'witness.lost.common',
          text: 'The shelter channel opened one final time. {{cast.shelterLead.firstName}} read forty-six names. The forty-seventh was her own. Then the channel carried only the relay tone, level and patient, as though the county had completed a routine administrative task.',
        },
        {
          id: 'witness.lost.deputy-safe',
          when: { companion: { npcId: 'npc.missing_deputy', status: 'safe' } },
          text: '{{cast.deputy.firstName}} remained alive at the southern exit with the authenticated records. One essential witness had survived, but survival did not make the missing name negotiable.',
        },
        {
          id: 'witness.lost.no-deputy',
          when: { not: { companion: { npcId: 'npc.missing_deputy', status: 'safe' } } },
          text: 'No other authenticated witness remained outside the relay team. You still carried evidence, perhaps even the truth, but the person who could prove how the shelter had been breached was gone.',
        },
        {
          id: 'witness.lost.responder',
          text: '{{cast.responder.firstName}} did not cry on the road. She folded once at the waist, caught herself against the hood of the maintenance truck, and stood again. When she looked at you, grief and purpose had become difficult to separate.',
        },
      ],
      onEnter: [
        { type: 'flag', key: 'witnessLost', value: true },
        { type: 'companionStatus', npcId: 'npc.shelter_lead', status: 'dead', cause: 'Killed during the shelter breach while protecting the witnessed roster.' },
        { type: 'morale', amountByDifficulty: { story: -12, standard: -16, hard: -20, brutal: -24 } },
        { type: 'objective', id: 'objective.protect-witness', status: 'failed', when: { not: { companion: { npcId: 'npc.missing_deputy', status: 'safe' } } } },
        { type: 'objective', id: 'objective.protect-witness', status: 'completed', when: { companion: { npcId: 'npc.missing_deputy', status: 'safe' } } },
      ],
      choices: [
        {
          id: 'continue_after_witness_loss',
          label: 'Carry the exact cost with you and continue to the relay.',
          effects: [
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { grief: 7, emotionalIntimacy: 3, protectiveness: 4 } },
          ],
          next: 'ip.horror.chapter3.convergence',
        },
      ],
    },
    {
      id: 'ip.horror.chapter3.convergence',
      schemaVersion: 2,
      sceneType: 'narrative',
      act: 3,
      chapter: 3,
      kicker: 'THE RELAY STATION',
      title: 'The Convergence',
      location: '{{world.region}} county relay station',
      contentWarnings: ['psychological-horror', 'character-death'],
      prose: [
        {
          id: 'convergence.arrival',
          text: 'The relay station stood above the tree line on a concrete crown. Every road, service track, buried cable, and old survey line in the county converged beneath it. The machinery was ordinary enough to have maintenance labels. Its purpose was not. The station had been built to focus the county’s recurrence into one place where a known limitation could be used against it.',
        },
        {
          id: 'convergence.truth',
          when: { path: 'payload.worldState.flags.hiddenTruthResolved', equals: true },
          text: 'Because you had resolved the hidden truth, the control diagram made sense. {{mystery.truth}} The relay was not merely broadcasting the crisis. It was maintaining the human arrangement that had allowed the crisis to repeat.',
        },
        {
          id: 'convergence.false-theory',
          when: { not: { path: 'payload.worldState.flags.hiddenTruthResolved', equals: true } },
          text: 'The control diagram resisted your theory at three crucial points. The sequence you had brought to the hill could still activate the machinery, but you could not prove that it would interrupt the actual cause rather than remove one of its restraints.',
        },
        {
          id: 'convergence.shelter-secured',
          when: { path: 'payload.worldState.flags.shelterSecured', equals: true },
          text: 'A verified head count came through the hand radio. The shelter protocol was holding. The time spent on ordinary locks, names, and witnesses had become part of the final plan.',
        },
        {
          id: 'convergence.shelter-uncertain',
          when: { all: [{ not: { path: 'payload.worldState.flags.shelterSecured', equals: true } }, { not: { path: 'payload.worldState.flags.witnessProtected', equals: true } }] },
          text: 'The shelter channel broke into overlapping voices. No one could agree who had left or whether the person answering the door belonged to the original count.',
        },
        {
          id: 'convergence.responder',
          text: '{{cast.responder.firstName}} placed one hand on the manual reset housing. “The rule is still the rule,” she said. “The question is whether we prepared the people around it well enough to survive what the rule costs.”',
        },
      ],
      onEnter: [
        { type: 'setLocation', value: '{{world.region}} county relay station' },
        { type: 'flag', key: 'witnessProtected', value: true, when: { companion: { npcId: 'npc.missing_deputy', status: 'safe' } } },
        { type: 'objective', id: 'objective.protect-witness', status: 'completed', when: { companion: { npcId: 'npc.missing_deputy', status: 'safe' } } },
        { type: 'flag', key: 'witnessProtected', value: true, when: { path: 'payload.worldState.flags.shelterSecured', equals: true } },
        { type: 'objective', id: 'objective.protect-witness', status: 'completed', when: { path: 'payload.worldState.flags.shelterSecured', equals: true } },
      ],
      choices: [
        {
          id: 'seal_with_rule',
          when: { hasClue: 'clue.threat-rule' },
          label: 'Use the established limitation to reset the containment network rather than inventing a new answer under pressure.',
          effects: [
            { type: 'flag', key: 'finalMethod', value: 'seal' },
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { trust: 7, loyalty: 5, admiration: 5 } },
          ],
          next: 'ip.horror.chapter3.cost',
        },
        {
          id: 'destroy_station',
          label: 'Destroy the relay station and break the system before it can complete another cycle.',
          effects: [
            { type: 'flag', key: 'finalMethod', value: 'destroy' },
            { type: 'morale', amount: -6 },
          ],
          nextOptions: [
            {
              when: {
                all: [
                  { path: 'payload.worldState.flags.hiddenTruthResolved', equals: true },
                  { any: [{ hasItem: 'item.containment-hardware' }, { hasItem: 'item.relay-spares' }] },
                ],
              },
              next: 'ip.horror.ending.scarred-victory',
            },
          ],
          next: 'ip.horror.ending.false-solution',
        },
        {
          id: 'retreat_with_evidence',
          when: { any: [{ path: 'payload.worldState.flags.carriedEvidence', equals: true }, { path: 'payload.worldState.flags.evidenceDuplicated', equals: true }] },
          label: 'Trigger the evacuation plan, withdraw with the evidence, and isolate the county instead of risking the reset.',
          effects: [
            { type: 'flag', key: 'finalMethod', value: 'evacuate' },
          ],
          nextOptions: [
            {
              when: {
                all: [
                  { path: 'payload.worldState.flags.hiddenTruthResolved', equals: true },
                  { objective: { id: 'objective.protect-witness', status: 'completed' } },
                  { path: 'payload.worldState.evacuationReadiness', gteRule: 'fullRescueReadinessMinimum' },
                ],
              },
              next: 'ip.horror.ending.evacuation-victory',
            },
          ],
          next: 'ip.horror.ending.truth-without-rescue',
        },
        {
          id: 'abandon_station_untouched',
          label: 'Leave the station untouched and attempt to escape before the county roads close.',
          effects: [
            { type: 'flag', key: 'finalMethod', value: 'abandon' },
          ],
          next: 'ip.horror.ending.antagonist-victory',
        },
      ],
    },
    {
      id: 'ip.horror.chapter3.cost',
      schemaVersion: 2,
      sceneType: 'narrative',
      act: 3,
      chapter: 3,
      kicker: 'THE PRICE OF THE PLAN',
      title: 'One Person at the Switch',
      location: '{{world.region}} county relay station',
      contentWarnings: ['character-death'],
      prose: [
        {
          id: 'cost.common',
          text: 'The final switch had to be held by hand while the network reset. The mechanism was not magical and did not invent a new rule. It was old county machinery, warped by heat and neglect, and it would not stay closed by itself.',
        },
        {
          id: 'cost.truth-resolved',
          when: { path: 'payload.worldState.flags.hiddenTruthResolved', equals: true },
          text: 'The resolved chronology gave you the correct relay order. The remaining problem was physical: hold the switch, brace it, or trust another person with the weight while you completed the sequence.',
        },
        {
          id: 'cost.truth-unresolved',
          when: { not: { path: 'payload.worldState.flags.hiddenTruthResolved', equals: true } },
          text: 'Your sequence still contained the contradiction from the records room. Someone could die holding the switch perfectly and still complete the wrong circuit.',
        },
        {
          id: 'cost.relationship',
          when: { relationship: { npcId: 'npc.opening_responder', metric: 'trust', gte: 10 } },
          text: '{{cast.responder.firstName}} understood before you finished explaining. “Don’t decide for me,” she said, very quietly. “And don’t make me decide for you because you’re afraid to ask.”',
        },
        {
          id: 'cost.injured',
          when: { hasAnyInjury: true },
          text: 'Your injuries turned every movement into arithmetic. You could still hold the switch. The question was how long, and what would remain of your ability to leave afterward.',
        },
      ],
      choices: [
        {
          id: 'hold_switch_self',
          label: 'Hold the switch yourself and order {{cast.responder.firstName}} to lead the others clear.',
          effects: [
            { type: 'flag', key: 'heldSwitchSelf', value: true },
          ],
          nextOptions: [
            { when: { path: 'payload.worldState.flags.hiddenTruthResolved', equals: true }, next: 'ip.horror.ending.sacrificial-victory' },
          ],
          next: 'ip.horror.ending.false-solution',
        },
        {
          id: 'trust_responder',
          when: { companion: { npcId: 'npc.opening_responder', status: 'active' } },
          label: 'Ask {{cast.responder.firstName}} to hold the switch while you complete the sequence.',
          effects: [
            { type: 'flag', key: 'askedResponderAtEnd', value: true },
          ],
          nextOptions: [
            {
              when: {
                all: [
                  { path: 'payload.worldState.flags.hiddenTruthResolved', equals: true },
                  { relationship: { npcId: 'npc.opening_responder', metric: 'trust', gteRule: 'sharedTrustThreshold' } },
                  { objective: { id: 'objective.protect-witness', status: 'completed' } },
                ],
              },
              next: 'ip.horror.ending.shared-victory',
            },
          ],
          next: 'ip.horror.chapter3.responder-refusal',
        },
        {
          id: 'improvise_lock',
          when: { any: [{ hasItem: 'item.emergency-kit' }, { hasItem: 'item.relay-spares' }, { hasItem: 'item.containment-hardware' }, { hasItem: 'item.bolt-cutters' }] },
          label: 'Use the carried tools to brace the switch mechanically and remove a person from the equation.',
          effects: [
            { type: 'flag', key: 'improvisedFinalLock', value: true },
            { type: 'inventoryRemoveFirstAvailable', ids: ['item.emergency-kit', 'item.relay-spares', 'item.containment-hardware', 'item.bolt-cutters'], quantity: 1 },
          ],
          nextOptions: [
            {
              when: {
                all: [
                  { path: 'payload.worldState.flags.hiddenTruthResolved', equals: true },
                  { objective: { id: 'objective.protect-witness', status: 'completed' } },
                  { path: 'payload.worldState.threatPressure', lteRule: 'fullRescuePressureLimit' },
                  { path: 'payload.worldState.evacuationReadiness', gteRule: 'fullRescueReadinessMinimum' },
                ],
              },
              next: 'ip.horror.ending.full-rescue',
            },
            {
              when: {
                all: [
                  { path: 'payload.worldState.flags.hiddenTruthResolved', equals: true },
                  { objective: { id: 'objective.protect-witness', status: 'completed' } },
                  { path: 'payload.worldState.threatPressure', lteRule: 'cleanPressureLimit' },
                ],
              },
              next: 'ip.horror.ending.clean-victory',
            },
            {
              when: { path: 'payload.worldState.flags.hiddenTruthResolved', equals: true },
              next: 'ip.horror.ending.scarred-victory',
            },
          ],
          next: 'ip.horror.ending.false-solution',
        },
        {
          id: 'abandon_sequence',
          label: 'Abandon the reset and escape before the station closes around you.',
          effects: [
            { type: 'flag', key: 'abandonedFinalSequence', value: true },
          ],
          next: 'ip.horror.ending.antagonist-victory',
        },
      ],
    },
    {
      id: 'ip.horror.chapter3.responder-refusal',
      schemaVersion: 2,
      sceneType: 'narrative',
      act: 3,
      chapter: 3,
      kicker: 'SHE CHOOSES TOO',
      title: 'No',
      location: '{{world.region}} county relay station',
      contentWarnings: [],
      prose: [
        {
          id: 'refusal.truth',
          when: { not: { path: 'payload.worldState.flags.hiddenTruthResolved', equals: true } },
          text: '{{cast.responder.firstName}} looked from the switch to the unresolved control diagram. “No,” she said. “I’ll take a risk. I won’t die to make an unproven theory feel complete.”',
        },
        {
          id: 'refusal.witness',
          when: { all: [{ path: 'payload.worldState.flags.hiddenTruthResolved', equals: true }, { objective: { id: 'objective.protect-witness', status: 'failed' } }] },
          text: '{{cast.responder.firstName}} shook her head. “I’m the last person here who can carry the record out. You don’t get to call it trust if the plan spends every witness.”',
        },
        {
          id: 'refusal.relationship',
          when: { all: [{ path: 'payload.worldState.flags.hiddenTruthResolved', equals: true }, { objective: { id: 'objective.protect-witness', status: 'completed' } }, { relationship: { npcId: 'npc.opening_responder', metric: 'trust', ltRule: 'sharedTrustThreshold' } }] },
          text: 'She held your gaze and did not soften the answer. “You asked me for my life before you earned my judgment,” she said. “That is not the same thing as trusting me.”',
        },
        {
          id: 'refusal.close',
          text: 'Her refusal did not stop the machinery. It returned the decision to you with fewer comforting stories attached.',
        },
      ],
      choices: [
        {
          id: 'accept_refusal_and_hold',
          label: 'Accept her refusal and hold the switch yourself.',
          effects: [
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { respect: 6, grief: 4, protectiveness: 5 } },
          ],
          nextOptions: [
            { when: { path: 'payload.worldState.flags.hiddenTruthResolved', equals: true }, next: 'ip.horror.ending.sacrificial-victory' },
          ],
          next: 'ip.horror.ending.false-solution',
        },
        {
          id: 'accept_refusal_and_improvise',
          when: { any: [{ hasItem: 'item.emergency-kit' }, { hasItem: 'item.relay-spares' }, { hasItem: 'item.containment-hardware' }, { hasItem: 'item.bolt-cutters' }] },
          label: 'Accept her refusal and use the remaining tools to brace the switch.',
          effects: [
            { type: 'flag', key: 'improvisedAfterRefusal', value: true },
            { type: 'inventoryRemoveFirstAvailable', ids: ['item.emergency-kit', 'item.relay-spares', 'item.containment-hardware', 'item.bolt-cutters'], quantity: 1 },
          ],
          nextOptions: [
            {
              when: {
                all: [
                  { path: 'payload.worldState.flags.hiddenTruthResolved', equals: true },
                  { objective: { id: 'objective.protect-witness', status: 'completed' } },
                  { path: 'payload.worldState.threatPressure', lteRule: 'cleanPressureLimit' },
                ],
              },
              next: 'ip.horror.ending.clean-victory',
            },
            { when: { path: 'payload.worldState.flags.hiddenTruthResolved', equals: true }, next: 'ip.horror.ending.scarred-victory' },
          ],
          next: 'ip.horror.ending.false-solution',
        },
        {
          id: 'reject_refusal_and_flee',
          label: 'Reject the remaining cost and flee the relay station.',
          effects: [
            { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { trust: -10, resentment: 10 } },
          ],
          next: 'ip.horror.ending.antagonist-victory',
        },
      ],
    },
    {
      id: 'ip.horror.ending.full-rescue',
      schemaVersion: 2,
      sceneType: 'ending',
      act: 3,
      chapter: 3,
      kicker: 'EXCEPTIONAL VICTORY',
      title: 'Every Name Answered',
      location: '{{world.settlement}}',
      contentWarnings: [],
      terminalStatus: 'completed',
      ending: {
        outcome: 'victory',
        cause: 'The mystery was solved, an essential witness was protected, pressure was controlled, and preparation removed the need for sacrifice.',
        summary: '{{player.name}} ended the recurrence, preserved the truth, and brought every recoverable companion out of {{world.region}}.',
      },
      prose: [
        {
          id: 'full-rescue.common',
          text: 'The mechanical brace took the switch and held it. The reset moved through the county in measured stages: the false signal died, the marked routes opened, the shelter lights steadied, and the machinery beneath the hill stopped demanding a human body to complete an old design.',
        },
        {
          id: 'full-rescue.deputy',
          when: { companion: { npcId: 'npc.missing_deputy', status: 'safe' } },
          text: '{{cast.deputy.name}} met the relay team at the southern road with the authenticated log beneath his arm. The empty emergency vehicle finally acquired an ending that included its driver.',
        },
        {
          id: 'full-rescue.relationship',
          text: '{{cast.responder.firstName}} reached you at the bottom of the hill and caught both sides of your coat. For a moment she seemed undecided between checking for injuries and refusing to let you move. “You’re still here,” she said, almost accusingly. Then she smiled with exhausted relief and pulled you against her before the town could ask either of you for another decision.',
        },
      ],
      onEnter: [
        { type: 'objective', id: 'objective.break-cycle', status: 'completed' },
        { type: 'objective', id: 'objective.uncover-truth', status: 'completed' },
        { type: 'objective', id: 'objective.protect-witness', status: 'completed' },
        { type: 'companionStatus', npcId: 'npc.opening_responder', status: 'safe', lastAction: 'Completed the relay reset and returned to town.' },
        { type: 'companionStatus', npcId: 'npc.shelter_lead', status: 'safe', lastAction: 'Preserved the shelter roster and county ledger.' },
      ],
      choices: [],
    },
    {
      id: 'ip.horror.ending.clean-victory',
      schemaVersion: 2,
      sceneType: 'ending',
      act: 3,
      chapter: 3,
      kicker: 'VICTORY ENDING',
      title: 'No One Left at the Switch',
      location: '{{world.settlement}}',
      contentWarnings: [],
      terminalStatus: 'completed',
      ending: {
        outcome: 'victory',
        cause: 'Preparation supplied a physical solution to the final containment failure.',
        summary: '{{player.name}} contained {{threat.name}}, preserved an essential witness, and escaped with {{cast.responder.name}}.',
      },
      prose: [
        {
          id: 'clean.win',
          text: 'The improvised brace screamed under the load and held. You and {{cast.responder.firstName}} reached the tree line before the relay station went dark. At dawn, the shelter opened its doors to a town that was frightened, alive, and finally in possession of its own history.',
        },
        {
          id: 'clean.cost',
          when: { any: [{ companion: { npcId: 'npc.missing_deputy', status: 'dead' } }, { companion: { npcId: 'npc.missing_deputy', status: 'missing' } }] },
          text: 'The victory did not rewrite the empty place on the shelter roster. The county survived with one name still missing from the road home.',
        },
      ],
      onEnter: [
        { type: 'objective', id: 'objective.break-cycle', status: 'completed' },
        { type: 'companionStatus', npcId: 'npc.opening_responder', status: 'safe', lastAction: 'Escaped the relay station after containment was restored.' },
      ],
      choices: [],
    },
    {
      id: 'ip.horror.ending.shared-victory',
      schemaVersion: 2,
      sceneType: 'ending',
      act: 3,
      chapter: 3,
      kicker: 'RELATIONSHIP VICTORY',
      title: 'The Hand You Trusted',
      location: '{{world.settlement}}',
      contentWarnings: [],
      terminalStatus: 'completed',
      ending: {
        outcome: 'victory',
        cause: 'Consistent trust and protected witnesses allowed two people to share the final risk without surrendering judgment.',
        summary: '{{player.name}} and {{cast.responder.name}} trusted one another with the containment sequence and survived together.',
      },
      prose: [
        {
          id: 'shared.win',
          text: '{{cast.responder.firstName}} held the switch while you rebuilt the sequence around her. She did not obey blindly. She called every relay back to you, challenged one number that did not match the records, and kept her hand in place only after you corrected it. When the last circuit engaged, you pulled her free together.',
        },
        {
          id: 'shared.close',
          text: 'Outside, she laughed once from shock, caught the front of your coat, and rested her forehead against yours until both of you stopped shaking. “Next time,” she murmured, “we find a way to trust each other somewhere with fewer switches.” The private smile that followed belonged to the future rather than the emergency.',
        },
      ],
      onEnter: [
        { type: 'flag', key: 'trustedResponderAtEnd', value: true },
        { type: 'objective', id: 'objective.break-cycle', status: 'completed' },
        { type: 'companionStatus', npcId: 'npc.opening_responder', status: 'safe', lastAction: 'Held the manual reset while the protagonist completed the correct sequence.' },
        { type: 'relationshipAdjust', npcId: 'npc.opening_responder', values: { trust: 8, loyalty: 8, emotionalIntimacy: 8, attraction: 4, admiration: 5 } },
      ],
      choices: [],
    },
    {
      id: 'ip.horror.ending.scarred-victory',
      schemaVersion: 2,
      sceneType: 'ending',
      act: 3,
      chapter: 3,
      kicker: 'COSTLY VICTORY',
      title: 'The County Survives the Truth',
      location: '{{world.settlement}}',
      contentWarnings: ['character-death', 'grief'],
      terminalStatus: 'completed',
      ending: {
        outcome: 'victory',
        cause: 'The recurrence was ended after pressure and earlier losses made a clean resolution impossible.',
        summary: '{{player.name}} ended {{threat.name}} and escaped, but the surviving county carried irreversible losses into daylight.',
      },
      prose: [
        {
          id: 'scarred.common',
          text: 'The relay station failed in the direction you intended. The recurrence broke. The roads reopened. None of those facts restored the people lost while the county was still climbing toward the hill.',
        },
        {
          id: 'scarred.shelter',
          when: { companion: { npcId: 'npc.shelter_lead', status: 'dead' } },
          text: '{{cast.shelterLead.name}} was buried with a copy of the head-count sheet folded beneath her hands. Every surviving name had a check beside it. Her own did not.',
        },
        {
          id: 'scarred.deputy',
          when: { companion: { npcId: 'npc.missing_deputy', status: 'dead' } },
          text: '{{cast.deputy.name}} became the last official death attributed to the old false record. {{cast.responder.firstName}} made certain the amended report described the choice that cost him his life rather than hiding it beneath another clerical phrase.',
        },
        {
          id: 'scarred.close',
          text: '{{cast.responder.firstName}} found you after the hearings began. She sat beside you without offering absolution or blame. What remained between you was not tidy, but it was honest enough to survive the silence.',
        },
      ],
      onEnter: [
        { type: 'objective', id: 'objective.break-cycle', status: 'completed' },
        { type: 'companionStatus', npcId: 'npc.opening_responder', status: 'safe', lastAction: 'Survived the destruction or unstable reset of the relay station.' },
      ],
      choices: [],
    },
    {
      id: 'ip.horror.ending.evacuation-victory',
      schemaVersion: 2,
      sceneType: 'ending',
      act: 3,
      chapter: 3,
      kicker: 'EVACUATION VICTORY',
      title: 'The County Line Opens Once',
      location: 'Southern road outside {{world.region}}',
      contentWarnings: [],
      terminalStatus: 'completed',
      ending: {
        outcome: 'victory',
        cause: 'The mystery, evidence, witness protection, and evacuation preparation created a viable victory without attempting the relay reset.',
        summary: '{{player.name}} evacuated the trapped population, preserved the truth, and isolated {{threat.name}} inside an abandoned county.',
      },
      prose: [
        {
          id: 'evacuation.common',
          text: 'The convoy crossed the southern bridge in groups of six, each identity verified twice. The county did not become safe. It became empty enough that the threat could no longer hide its consequences among people trapped by administrative lies.',
        },
        {
          id: 'evacuation.evidence',
          text: 'The ledger, authenticated witness testimony, and resolved chronology reached state investigators before the county could seal itself again. The exclusion zone remained on every map this time, not as a blank space, but as an accusation with coordinates.',
        },
        {
          id: 'evacuation.relationship',
          text: '{{cast.responder.firstName}} was the last person across. She stopped beside you on the far bank and watched the road disappear into rain. “We didn’t fix the land,” she said. “We got the people out.” Her hand found yours without ceremony. Neither of you treated the distinction as small.',
        },
      ],
      onEnter: [
        { type: 'objective', id: 'objective.break-cycle', status: 'completed', detail: 'The recurrence was deprived of victims through a complete, verified evacuation rather than direct containment.' },
        { type: 'companionStatus', npcId: 'npc.opening_responder', status: 'safe', lastAction: 'Led the verified convoy across the southern county line.' },
      ],
      choices: [],
    },
    {
      id: 'ip.horror.ending.sacrificial-victory',
      schemaVersion: 2,
      sceneType: 'ending',
      act: 3,
      chapter: 3,
      kicker: 'BITTERSWEET VICTORY',
      title: 'The Last Light on the Hill',
      location: '{{world.region}} county relay station',
      contentWarnings: ['character-death', 'grief'],
      terminalStatus: 'completed',
      ending: {
        outcome: 'victory',
        cause: 'The correct containment sequence was restored through a deliberate personal sacrifice.',
        summary: '{{player.name}} saved {{world.settlement}} but did not leave the relay station.',
      },
      prose: [
        {
          id: 'sacrifice.win',
          text: '{{cast.responder.firstName}} obeyed only because the doors were already closing. The reset completed beneath your hand. By sunrise, every false signal in the county had gone silent. Your name entered the same ledger that had hidden so many others, but this time she wrote the truth beside it.',
        },
        {
          id: 'sacrifice.relationship',
          when: { relationship: { npcId: 'npc.opening_responder', metric: 'trust', gte: 12 } },
          text: 'She returned to the hill every year on the date the road reopened. She never polished the story into something easier to carry. She remembered the exact words you used, the fear in your face, and the fact that courage had not made the loss fair.',
        },
      ],
      onEnter: [
        { type: 'health', amount: -100 },
        { type: 'objective', id: 'objective.break-cycle', status: 'completed' },
        { type: 'companionStatus', npcId: 'npc.opening_responder', status: 'safe', lastAction: 'Led the survivors clear while the protagonist held the final switch.' },
      ],
      choices: [],
    },
    {
      id: 'ip.horror.ending.false-solution',
      schemaVersion: 2,
      sceneType: 'ending',
      act: 3,
      chapter: 3,
      kicker: 'FAILURE ENDING',
      title: 'The Switch Was Held Perfectly',
      location: '{{world.region}} county relay station',
      contentWarnings: ['character-death', 'psychological-horror'],
      terminalStatus: 'failed',
      ending: {
        outcome: 'failure',
        cause: 'The final sequence was built around an unresolved or incorrect account of the county’s hidden truth.',
        summary: '{{player.name}} paid the physical cost of the plan, but the plan answered the wrong mystery.',
      },
      prose: [
        {
          id: 'false-solution.common',
          text: 'The switch held. The relay sequence completed exactly as you entered it. For eleven seconds, every light in the county went dark. Then the system restarted from a point your theory had treated as impossible.',
        },
        {
          id: 'false-solution.truth',
          text: 'The contradiction from the records room had not been decorative. It marked the part of the history your plan never explained. {{threat.name}} did not gain a new power. The county machinery did not cheat. You had used a real rule against the wrong structure.',
        },
        {
          id: 'false-solution.close',
          text: '{{cast.responder.firstName}} reached the outer door before the relay sealed. Whether she escaped depended on losses already set in motion elsewhere. The last thing she heard from the control room was the station beginning the cycle again.',
        },
      ],
      onEnter: [
        { type: 'health', amount: -100 },
        { type: 'objective', id: 'objective.break-cycle', status: 'failed' },
      ],
      choices: [],
    },
    {
      id: 'ip.horror.ending.truth-without-rescue',
      schemaVersion: 2,
      sceneType: 'ending',
      act: 3,
      chapter: 3,
      kicker: 'SURVIVAL AT AN UNACCEPTABLE COST',
      title: 'The County Believed You Too Late',
      location: 'Outside {{world.region}}',
      contentWarnings: ['character-death', 'grief'],
      terminalStatus: 'failed',
      ending: {
        outcome: 'failure',
        cause: 'Evidence escaped, but witness protection or evacuation readiness was insufficient to rescue the trapped population.',
        summary: '{{player.name}} escaped with proof while {{world.settlement}} remained inside the recurrence.',
      },
      prose: [
        {
          id: 'truth.fail',
          text: 'The ledger reached state investigators. The documents were authenticated. Hearings began. None of it opened the roads quickly enough. You proved what the county had done and spent the rest of your life knowing proof was not rescue.',
        },
        {
          id: 'truth.responder',
          text: 'The last verified message from {{cast.responder.firstName}} contained no accusation. She read the remaining shelter names into the record and asked you not to let anyone call them missing when the county knew where it had left them.',
        },
      ],
      onEnter: [
        { type: 'morale', amount: -45 },
        { type: 'objective', id: 'objective.break-cycle', status: 'failed' },
      ],
      choices: [],
    },
    {
      id: 'ip.horror.ending.antagonist-victory',
      schemaVersion: 2,
      sceneType: 'ending',
      act: 3,
      chapter: 3,
      kicker: 'FAILURE ENDING',
      title: 'The Cycle Completes',
      location: '{{world.region}}',
      contentWarnings: ['character-death', 'psychological-horror'],
      terminalStatus: 'failed',
      ending: {
        outcome: 'failure',
        cause: 'The relay sequence was abandoned while the recurrence remained active.',
        summary: '{{threat.name}} completed the cycle and claimed {{world.settlement}}.',
      },
      prose: [
        {
          id: 'antagonist.win',
          text: 'You escaped the relay station. That was the last thing the plan accomplished. By dawn, every emergency frequency carried the same instruction, every road sign pointed inward, and the county line ceased to behave like a boundary anyone could cross twice.',
        },
        {
          id: 'antagonist.rule',
          text: '{{threat.name}} never needed a new capability. It used {{threat.capability}} inside a county whose remaining protections had been left unfinished. Its limitation remained true and useless to people no longer organized to exploit it.',
        },
      ],
      onEnter: [
        { type: 'morale', amount: -100 },
        { type: 'objective', id: 'objective.break-cycle', status: 'failed' },
      ],
      choices: [],
    },
    {
      id: 'ip.horror.ending.roadside',
      schemaVersion: 2,
      sceneType: 'ending',
      act: 1,
      chapter: 1,
      kicker: 'FAILURE ENDING',
      title: 'The Road Keeps Your Name',
      location: 'Northern county road',
      contentWarnings: ['character-death', 'graphic-violence', 'psychological-horror'],
      terminalStatus: 'failed',
      ending: {
        outcome: 'failure',
        cause: 'The established threat rule was knowingly violated at the abandoned vehicle.',
        summary: '{{player.name}} disappeared before reaching {{world.settlement}}, leaving the county with one more unanswered vehicle at the roadblock.',
      },
      prose: [
        {
          id: 'road-ending.listener',
          when: { path: 'campaign.world.antagonist.id', equals: 'threat_the_listener' },
          text: 'The instant you answered, the static stopped. Your own voice repeated from the speaker, clean and close, although your mouth had already closed. Then it came from the rear radio, then the handset, then the emergency loudspeaker above the light bar. Each copy was one word nearer than the last.',
        },
        {
          id: 'road-ending.surveyor',
          when: { path: 'campaign.world.antagonist.id', equals: 'threat_the_pale_surveyor' },
          text: 'The red rectangle around the shed door brightened as you crossed it. Outside, the rain continued falling through empty air. Inside, the floor plan lengthened, room after room, every exit marked before you reached it. At 6:24, the survey chain began dragging across the roof.',
        },
        {
          id: 'road-ending.borrowed',
          when: { path: 'campaign.world.antagonist.id', equals: 'threat_the_borrowed_man' },
          text: 'The note led you beyond sight of the road. A figure waited beside the service track wearing your posture and holding the same note in your handwriting. It smiled without speaking. When {{cast.responder.firstName}} reached the place later, only one of you came back with her.',
        },
        {
          id: 'road-ending.widow',
          when: { path: 'campaign.world.antagonist.id', equals: 'threat_the_orchard_widow' },
          text: 'The apple tasted like the first safe kitchen you could remember. The road vanished before you swallowed. In its place stood an orchard beneath summer sunlight, and someone at the far gate promised that everyone you had lost was waiting just beyond the next row.',
        },
        {
          id: 'road-ending.graphic',
          when: { path: 'campaign.contentPreferences.graphicViolence', equals: true },
          text: 'By the time help returned, the emergency vehicle was still running. Blood had dried across the passenger door. No tracks led away from it that the rain could explain.',
        },
        {
          id: 'road-ending.restrained',
          when: { path: 'campaign.contentPreferences.graphicViolence', equals: false },
          text: 'By the time help returned, the emergency vehicle was still running. Your belongings remained inside. You did not.',
        },
      ],
      onEnter: [
        { type: 'morale', amount: -100 },
        { type: 'objective', id: 'objective.break-cycle', status: 'failed' },
      ],
      choices: [],
    },
    {
      id: 'ip.horror.ending.first-contact',
      schemaVersion: 2,
      sceneType: 'ending',
      act: 1,
      chapter: 1,
      kicker: 'FAILURE ENDING',
      title: 'No Rule for Courage Alone',
      location: '{{world.settlement}} volunteer hall',
      contentWarnings: ['character-death', 'graphic-violence', 'psychological-horror'],
      terminalStatus: 'failed',
      ending: {
        outcome: 'failure',
        cause: 'The threat was confronted without using or respecting its established limitation.',
        summary: '{{player.name}} chose direct confrontation over the known rule, and the volunteer hall became the campaign’s final location.',
      },
      prose: [
        {
          id: 'contact-ending.common',
          text: 'You stepped into the hallway before {{cast.responder.firstName}} could catch you. The thing ahead did not retreat. It did not become stronger, faster, or cleverer than the world had established. It simply used the capability you had already been warned about, while you refused the limitation that might have contained it.',
        },
        {
          id: 'contact-ending.listener',
          when: { path: 'campaign.world.antagonist.id', equals: 'threat_the_listener' },
          text: 'Every speaker in the building answered with {{cast.responder.firstName}}’s voice. You shouted over them, and the sound gave it a path straight to you.',
        },
        {
          id: 'contact-ending.surveyor',
          when: { path: 'campaign.world.antagonist.id', equals: 'threat_the_pale_surveyor' },
          text: 'The red mark closed around the hallway behind you. There was running water ten yards away and no longer any door leading to it.',
        },
        {
          id: 'contact-ending.borrowed',
          when: { path: 'campaign.world.antagonist.id', equals: 'threat_the_borrowed_man' },
          text: 'The copy matched your stance, your breathing, and the angle of your raised hands. It needed no voice to convince {{cast.responder.firstName}} that only one of you would leave the hall.',
        },
        {
          id: 'contact-ending.widow',
          when: { path: 'campaign.world.antagonist.id', equals: 'threat_the_orchard_widow' },
          text: 'The false table became a childhood home, then a hospital room, then every place where hunger had ever meant safety. You reached for what was offered and did not return to the hallway.',
        },
        {
          id: 'contact-ending.close',
          text: '{{cast.responder.firstName}} survived long enough to close the southern road. The truth remained inside {{world.region}}, still coherent, still discoverable, and now beyond your reach.',
        },
      ],
      onEnter: [
        { type: 'health', amount: -100 },
        { type: 'objective', id: 'objective.break-cycle', status: 'failed' },
      ],
      choices: [],
    },
  ];

  const HORROR_FOUNDATION_CONTENT = Object.freeze({
    schemaVersion: 2,
    id: 'ip.original.horror-foundation.opening',
    contentPackId: 'ip.original.horror-foundation',
    contentPackVersions: Object.freeze(['0.1.1', '0.2.0']),
    genre: 'horror',
    narrativeVersion: HORROR_FOUNDATION_NARRATIVE_VERSION,
    startSceneId: HORROR_FOUNDATION_START_SCENE,
    scenes: Object.freeze(scenes.map((scene) => Object.freeze(scene))),
  });

  return {
    HORROR_FOUNDATION_CONTENT,
    HORROR_FOUNDATION_NARRATIVE_VERSION,
    HORROR_FOUNDATION_START_SCENE,
    MYSTERY_THEORIES,
  };
});

/* ===== src/js/content/mystery-foundation-content.js ===== */
(function (root, factory) {
  const namespace = (root.InfinitePaths = root.InfinitePaths || {});
  const exported = factory();
  Object.assign(namespace, exported);
  if (typeof module !== 'undefined' && module.exports) module.exports = exported;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const MYSTERY_FOUNDATION_NARRATIVE_VERSION = 'mystery-foundation-1.0.0';
  const MYSTERY_FOUNDATION_START_SCENE = 'ip.mystery.opening.body';

  const correctAccusation = (suspectId) => ({ path: 'case.culpritId', equals: suspectId });
  const wrongAccusation = (suspectId) => ({ not: correctAccusation(suspectId) });
  const metric = (key, comparison) => ({ path: `payload.worldState.genreState.metrics.${key}`, ...comparison });
  const flag = (key, value = true) => ({ path: `payload.worldState.flags.${key}`, equals: value });
  const notFlag = (key, value = true) => ({ not: flag(key, value) });

  function accusationChoice(slot) {
    const suspectId = `suspect.${slot}`;
    const correct = correctAccusation(suspectId);
    const wrong = wrongAccusation(suspectId);
    return {
      id: `accuse.${suspectId}`,
      label: `Accuse {{case.suspects.${slot}.name}}, {{case.suspects.${slot}.role}}.`,
      effects: [
        { type: 'flag', key: 'selectedSuspectId', value: suspectId },
        { type: 'suspectStatus', suspectId, status: 'accused' },
        { type: 'genreMetric', key: 'publicConfidence', amount: -5 },
        { type: 'stat', key: 'accusationsMade', amount: 1 },
        { type: 'flag', key: 'accusationCorrect', value: true, when: correct },
        { type: 'flag', key: 'accusationCorrect', value: false, when: wrong },
        { type: 'stat', key: 'mysteryDeductionsCorrect', amount: 1, when: correct },
      ],
      nextOptions: [
        { when: correct, next: 'ip.mystery.act3.correct-confrontation' },
        {
          when: {
            all: [
              wrong,
              { difficultyIn: ['story'] },
              { relationship: { npcId: 'npc.mystery_partner', metric: 'trust', gte: 10 } },
              notFlag('storyReprieveUsed'),
            ],
          },
          next: 'ip.mystery.act3.story-reprieve',
        },
      ],
      next: 'ip.mystery.act3.wrong-confrontation',
    };
  }

  const ACCUSATION_CHOICES = Object.freeze([
    accusationChoice('heir'),
    accusationChoice('curator'),
    accusationChoice('security'),
    accusationChoice('physician'),
  ]);

  function returnFromLeadOptions() {
    return [
      {
        when: {
          all: [
            { lengthIn: ['standard'] },
            metric('leadsCompleted', { gte: 2 }),
            notFlag('complicationTriggered'),
          ],
        },
        next: 'ip.mystery.act2.complication',
      },
    ];
  }

  const scenes = [
    {
      id: 'ip.mystery.opening.body',
      schemaVersion: 2,
      sceneType: 'narrative',
      act: 1,
      chapter: 1,
      kicker: 'ACT I · THE SEALED HOUSE',
      title: 'A Death Behind a Locked Door',
      location: '{{case.venue.name}} · {{case.venue.locations.0}}',
      contentWarnings: ['character-death', 'crime-scene-detail'],
      prose: [
        {
          id: 'body.variant.0',
          variant: [0],
          text: 'The storm had turned the long windows of {{case.venue.name}} into black mirrors. Beyond them, the county road was a white blur and the last patrol car sat nose-first against a drift. Inside, the guests from {{case.event}} had been collected beneath the chandelier with their coats still on, as though everyone had agreed to leave and then remembered there was nowhere to go.',
        },
        {
          id: 'body.variant.1',
          variant: [1],
          text: '{{case.venue.name}} had been built to make silence look expensive. Tonight it felt punitive. Snow pressed against the windows, the power hummed on its private generator, and four people waited in the gallery under the supervision of a deputy who had already been told not to let anyone touch a telephone.',
        },
        {
          id: 'body.discovery',
          text: '{{case.victim.name}}, {{case.victim.role}}, lay behind the library desk. The public door had been locked from the inside. {{case.witness.name}}, the {{case.witness.role}}, had opened it with the emergency key and found him eight minutes after the lights returned.',
        },
        {
          id: 'body.graphic',
          when: { path: 'campaign.contentPreferences.graphicCrimeScene', equals: true },
          text: 'Death had not arranged him neatly. One hand was trapped beneath his chest, the other curled near the brass lamp switch, and a narrow line of blood had dried at the corner of his mouth. The room smelled of hot dust, old paper, and the cordial spilled across the blotter.',
        },
        {
          id: 'body.reduced',
          when: { path: 'campaign.contentPreferences.graphicCrimeScene', equals: false },
          text: 'The body and the room offered several quiet contradictions: the position of one hand, the cordial on the blotter, and a desk lamp that had gone dark while the rest of the room remained lit.',
        },
        {
          id: 'body.partner',
          text: '{{case.partner.name}} met you at the threshold. She was the county major-crimes investigator who had asked for your help before the road vanished under snow. “Four suspects,” she said. “One locked timeline. Dawn gives us the prosecutor or the killer, depending on which one we deserve.”',
        },
      ],
      onEnter: [
        { type: 'setLocation', value: '{{case.venue.locations.0}}' },
        { type: 'relationshipAdjust', npcId: 'npc.mystery_partner', values: { trust: 0, respect: 0, suspicion: 0, protectiveness: 0 } },
      ],
      choices: [
        {
          id: 'secure_scene_first',
          label: 'Seal the library, log every person present, and protect the scene before asking questions.',
          effects: [
            { type: 'flag', key: 'openingRoute', value: 'scene-control' },
            { type: 'genreMetric', key: 'evidenceIntegrity', amount: 4 },
            { type: 'genreMetric', key: 'caseStrength', amount: 4 },
            { type: 'relationshipAdjust', npcId: 'npc.mystery_partner', values: { trust: 4, respect: 4 } },
            { type: 'objective', id: 'objective.preserve-scene', status: 'completed' },
          ],
          next: 'ip.mystery.opening.secure-scene',
        },
        {
          id: 'take_first_statement',
          label: 'Question {{case.witness.firstName}} before the other guests can influence her memory.',
          effects: [
            { type: 'flag', key: 'openingRoute', value: 'first-statement' },
            { type: 'genreMetric', key: 'caseStrength', amount: 5 },
            { type: 'genreMetric', key: 'timeRemaining', amount: -1 },
            { type: 'stat', key: 'interviewsConducted', amount: 1 },
            { type: 'relationshipAdjust', npcId: 'npc.mystery_partner', values: { admiration: 2, suspicion: 1 } },
          ],
          next: 'ip.mystery.opening.first-statement',
        },
        {
          id: 'pursue_service_shadow',
          label: 'Follow the movement reported in the service corridor before the trail disappears.',
          effects: [
            { type: 'flag', key: 'openingRoute', value: 'corridor' },
            { type: 'genreMetric', key: 'timeRemaining', amount: -1 },
            { type: 'genreMetric', key: 'publicConfidence', amount: -3 },
            { type: 'relationshipAdjust', npcId: 'npc.mystery_partner', values: { admiration: 2, trust: -2 } },
          ],
          next: 'ip.mystery.opening.service-corridor',
        },
      ],
    },
    {
      id: 'ip.mystery.opening.secure-scene',
      schemaVersion: 2,
      sceneType: 'narrative',
      act: 1,
      chapter: 1,
      kicker: 'THE SEALED HOUSE',
      title: 'The First Honest Ten Minutes',
      location: '{{case.venue.locations.0}}',
      contentWarnings: [],
      prose: [
        { id: 'secure.1', text: 'You numbered the doorway, the emergency key, the glasses, the lamp, and every pair of shoes that had crossed the carpet before the room was sealed. The deputy objected to having his own boots photographed. {{case.partner.firstName}} photographed them anyway.' },
        { id: 'secure.2', text: 'By the time the evidence log reached a second page, the locked-room spectacle had begun to look less magical. Someone had entered, acted, and left. The question was not whether the room obeyed ordinary rules. It was which ordinary rule someone had expected panic to hide.' },
        { id: 'secure.3', text: '“Good,” {{case.partner.firstName}} said, glancing at the intact seal across the door. “Now whatever we find belongs to the case instead of the loudest person in the gallery.”' },
      ],
      choices: [
        {
          id: 'examine_after_securing',
          label: 'Examine the body and room with the chain of custody intact.',
          effects: [{ type: 'genreMetric', key: 'caseStrength', amount: 3 }],
          next: 'ip.mystery.opening.examination',
        },
      ],
    },
    {
      id: 'ip.mystery.opening.first-statement',
      schemaVersion: 2,
      sceneType: 'narrative',
      act: 1,
      chapter: 1,
      kicker: 'THE SEALED HOUSE',
      title: 'Before Memory Becomes a Committee',
      location: '{{case.venue.name}} · an empty receiving room',
      contentWarnings: ['grief'],
      prose: [
        { id: 'statement.1', text: '{{case.witness.name}} sat with both hands around a cup she had forgotten to drink. She had found the door locked, heard nothing inside, and used the emergency key only after {{case.victim.name}} missed a scheduled toast.' },
        { id: 'statement.2', text: 'She remembered the six-minute lighting failure. During it, somebody crossed the service corridor behind her. She could not identify a face, but the person moved without using a flashlight and seemed to know exactly where the furniture stood.' },
        { id: 'statement.3', text: '“I told the others that before your deputy put us together,” she said. “I don’t know whether that helps you.” “It helps,” {{case.partner.firstName}} said. “It means it was yours before it became theirs.”' },
      ],
      onEnter: [
        { type: 'clue', value: { id: 'clue.witness.first-statement', name: 'Uncontaminated first statement', summary: '{{case.witness.name}} heard a person moving confidently through the service corridor during the lighting failure.', reliability: 'verified', category: 'testimony' } },
        { type: 'genreMetric', key: 'verifiedClues', amount: 1 },
      ],
      choices: [
        {
          id: 'seal_statement_and_examine',
          label: 'Seal the statement, separate the suspects, and examine the library.',
          effects: [
            { type: 'objective', id: 'objective.protect-witness', status: 'active' },
            { type: 'relationshipAdjust', npcId: 'npc.mystery_partner', values: { trust: 3 } },
          ],
          next: 'ip.mystery.opening.examination',
        },
      ],
    },
    {
      id: 'ip.mystery.opening.service-corridor',
      schemaVersion: 2,
      sceneType: 'narrative',
      act: 1,
      chapter: 1,
      kicker: 'THE SEALED HOUSE',
      title: 'The Corridor That Bypasses the Locks',
      location: '{{case.venue.name}} · {{case.venue.locations.3}}',
      contentWarnings: [],
      prose: [
        { id: 'corridor.1', text: 'The service corridor ran behind the formal rooms like the hidden spine of the house. Its doors had no brass plates, only penciled maintenance numbers. A person who knew the route could move from the conservatory to the library without entering the gallery at all.' },
        { id: 'corridor.2', text: 'You found a fresh scuff near the library service panel and three older marks that meant nothing. The useful trace was already being softened by melting snow from your own shoes. Chasing the report had shown you the route, but arriving without the evidence kit had cost the scene a little of its cleanliness.' },
        { id: 'corridor.3', text: '{{case.partner.firstName}} joined you with an evidence bag and a look that stopped just short of accusation. “Next time,” she said, “tell me before you run into the part of the house our killer understands better than we do.”' },
      ],
      onEnter: [
        { type: 'clue', value: { id: 'clue.service-route', name: 'Hidden service route', summary: 'A concealed corridor connects the principal rooms and can bypass several public locks.', reliability: 'tentative', category: 'access' } },
        { type: 'genreMetric', key: 'evidenceIntegrity', amount: -6 },
        { type: 'stat', key: 'evidenceContaminated', amount: 1 },
      ],
      choices: [
        {
          id: 'admit_risk_and_examine',
          label: 'Acknowledge the contamination and return to the library with proper controls.',
          effects: [
            { type: 'relationshipAdjust', npcId: 'npc.mystery_partner', values: { trust: 3, respect: 2, unresolvedConflict: -1 } },
            { type: 'genreMetric', key: 'publicConfidence', amount: 2 },
          ],
          next: 'ip.mystery.opening.examination',
        },
        {
          id: 'dismiss_partner_concern',
          label: 'Tell {{case.partner.firstName}} the route matters more than procedural neatness.',
          effects: [
            { type: 'relationshipAdjust', npcId: 'npc.mystery_partner', values: { trust: -4, resentment: 3, unresolvedConflict: 3 } },
            { type: 'genreMetric', key: 'publicConfidence', amount: -3 },
          ],
          next: 'ip.mystery.opening.examination',
        },
      ],
    },
    {
      id: 'ip.mystery.opening.examination',
      schemaVersion: 2,
      sceneType: 'narrative',
      act: 1,
      chapter: 2,
      kicker: 'THE SEALED HOUSE',
      title: 'What the Room Refuses to Explain',
      location: '{{case.venue.locations.0}}',
      contentWarnings: ['crime-scene-detail'],
      prose: [
        { id: 'exam.1', text: 'The library offered too many possible stories at once: a cordial glass, a dark lamp, a locked door, a medical case in the hall, and a carpet whose oldest stains had outlived the people who could explain them. A poor investigation would choose the most dramatic detail. A useful one would make the details answer one another.' },
        { id: 'exam.detective', when: { path: 'campaign.protagonist.background.id', equals: 'detective' }, text: 'Your former badge no longer opened doors, but the habits it had paid for remained. You separated observation from conclusion, then separated both from what the witnesses wanted the room to mean.' },
        { id: 'exam.reporter', when: { path: 'campaign.protagonist.background.id', equals: 'reporter' }, text: 'Years of interviewing public liars had taught you to notice what objects were being volunteered before anyone had asked about them. Three guests had already mentioned the locked door. Nobody had mentioned the service panel behind the bookcase.' },
        { id: 'exam.attorney', when: { path: 'campaign.protagonist.background.id', equals: 'attorney' }, text: 'You looked at the room as a future argument. Every conclusion would need a witness, a chain, and an answer to the most hostile reasonable alternative.' },
        { id: 'exam.accountant', when: { path: 'campaign.protagonist.background.id', equals: 'accountant' }, text: 'The desk was arranged like a balance sheet interrupted in the middle of a lie. One folder had been opened, another removed, and a third replaced with enough care to invite the wrong audit.' },
        { id: 'exam.partner', text: '{{case.partner.firstName}} placed four dossier folders on the reading table. “The beneficiary. The curator. Security. The doctor. Every one of them has a secret. Only one secret killed him.”' },
      ],
      choices: [
        {
          id: 'build_caseboard',
          label: 'Lock the public facts, separate the suspects, and build the first case board.',
          effects: [
            { type: 'flag', key: 'openingComplete', value: true },
            { type: 'phase', value: 'act-2' },
            { type: 'objective', id: 'objective.establish-cause', status: 'active' },
            { type: 'objective', id: 'objective.test-alibis', status: 'active' },
            { type: 'objective', id: 'objective.find-motive', status: 'active' },
          ],
          next: 'ip.mystery.opening.lockdown',
        },
      ],
    },
    {
      id: 'ip.mystery.opening.lockdown',
      schemaVersion: 2,
      sceneType: 'narrative',
      act: 1,
      chapter: 2,
      kicker: 'THE FOUR DOSSIERS',
      title: 'Everyone Has Something to Hide',
      location: '{{case.venue.name}} · {{case.venue.locations.2}}',
      contentWarnings: ['manipulation'],
      prose: [
        { id: 'lockdown.heir', text: '{{case.suspects.heir.name}}, {{case.suspects.heir.role}}, had learned that the victim intended to alter the trust. {{case.suspects.heir.alibi}}' },
        { id: 'lockdown.curator', text: '{{case.suspects.curator.name}}, {{case.suspects.curator.role}}, faced an audit of disputed acquisitions. {{case.suspects.curator.alibi}}' },
        { id: 'lockdown.security', text: '{{case.suspects.security.name}}, {{case.suspects.security.role}}, controlled the cameras, keys, and maintenance panels. {{case.suspects.security.alibi}}' },
        { id: 'lockdown.physician', text: '{{case.suspects.physician.name}}, {{case.suspects.physician.role}}, had been replaced by an independent medical reviewer. {{case.suspects.physician.alibi}}' },
        { id: 'lockdown.close', text: 'The prosecutor’s snowplow would reach the estate at dawn. Until then, the house was yours to question. After that, an unsupported theory would become a public mistake with your name attached.' },
      ],
      choices: [
        {
          id: 'open_caseboard',
          label: 'Begin the investigation and decide which evidentiary gap to attack first.',
          effects: [{ type: 'phase', value: 'act-2' }],
          next: 'ip.mystery.act2.caseboard',
        },
      ],
    },
    {
      id: 'ip.mystery.act2.caseboard',
      schemaVersion: 2,
      sceneType: 'narrative',
      act: 2,
      chapter: 3,
      kicker: 'ACT II · THE CASE BOARD',
      title: 'What Still Has to Be Proved',
      location: '{{case.venue.name}} · {{case.venue.locations.2}}',
      contentWarnings: [],
      prose: [
        { id: 'board.1', text: 'Four columns covered the temporary case board: cause, access, timeline, motive. Beneath them, the suspects’ photographs were beginning to collect arrows, corrections, and the small humiliations people called irrelevant until a murder made them useful.' },
        { id: 'board.time', text: '{{metrics.timeRemaining}} investigative time segments remain before the prosecutor reaches {{case.venue.name}}. The case is not waiting politely. Every careful search consumes time; every careless one consumes credibility.' },
        { id: 'board.partner', text: '{{case.partner.firstName}} stood beside the board with her sleeves rolled to the elbows. “We don’t need a person who looks guilty,” she said. “We need one person who can account for every piece of the death.”' },
        { id: 'board.lowtime', when: metric('timeRemaining', { lte: 2 }), text: 'The clock had begun to dominate the room. Dawn was no longer an idea outside the windows; it was a deadline with engines somewhere beyond the snow.' },
      ],
      choices: [
        {
          id: 'investigate_cause',
          label: 'Establish the physical cause of death.',
          when: { all: [notFlag('leadCauseComplete'), metric('timeRemaining', { gt: 0 })] },
          effects: [{ type: 'flag', key: 'currentLead', value: 'cause' }],
          next: 'ip.mystery.act2.lead-cause',
        },
        {
          id: 'investigate_access',
          label: 'Audit locks, keys, cameras, and concealed routes.',
          when: { all: [notFlag('leadAccessComplete'), metric('timeRemaining', { gt: 0 })] },
          effects: [{ type: 'flag', key: 'currentLead', value: 'access' }],
          next: 'ip.mystery.act2.lead-access',
        },
        {
          id: 'investigate_timeline',
          label: 'Test the alibis and reconstruct the lighting failure minute by minute.',
          when: { all: [notFlag('leadTimelineComplete'), metric('timeRemaining', { gt: 0 })] },
          effects: [{ type: 'flag', key: 'currentLead', value: 'timeline' }],
          next: 'ip.mystery.act2.lead-timeline',
        },
        {
          id: 'investigate_motive',
          label: 'Follow the victim’s private records and identify whose future changed at dawn.',
          when: { all: [notFlag('leadMotiveComplete'), metric('timeRemaining', { gt: 0 })] },
          effects: [{ type: 'flag', key: 'currentLead', value: 'motive' }],
          next: 'ip.mystery.act2.lead-motive',
        },
        {
          id: 'review_with_partner',
          label: 'Review the contradictions privately with {{case.partner.firstName}} before accusing anyone.',
          when: { all: [metric('leadsCompleted', { gte: 2 }), notFlag('partnerReviewComplete'), metric('timeRemaining', { gt: 0 })] },
          effects: [{ type: 'flag', key: 'partnerReviewComplete', value: true }],
          next: 'ip.mystery.act2.partner-review',
        },
        {
          id: 'convene_accusation',
          label: 'Convene the suspects and make a formal accusation.',
          when: metric('leadsCompleted', { gte: 3 }),
          effects: [{ type: 'phase', value: 'act-3' }],
          next: 'ip.mystery.act3.accusation-room',
        },
        {
          id: 'force_early_accusation',
          label: 'Force an early accusation with only two investigative pillars.',
          when: { all: [metric('leadsCompleted', { equals: 2 }), notFlag('earlyAccusationAttempted')] },
          effects: [
            { type: 'flag', key: 'earlyAccusationAttempted', value: true },
            { type: 'genreMetric', key: 'caseStrength', amount: -8 },
            { type: 'genreMetric', key: 'publicConfidence', amount: -8 },
            { type: 'relationshipAdjust', npcId: 'npc.mystery_partner', values: { trust: -5, respect: -4, unresolvedConflict: 4 } },
            { type: 'phase', value: 'act-3' },
          ],
          next: 'ip.mystery.act3.accusation-room',
        },
        {
          id: 'face_deadline',
          label: 'The deadline has arrived. Give the prosecutor the strongest conclusion you still possess.',
          when: metric('timeRemaining', { lte: 0 }),
          effects: [{ type: 'phase', value: 'act-3' }],
          next: 'ip.mystery.act3.deadline',
        },
      ],
    },
    {
      id: 'ip.mystery.act2.lead-cause',
      schemaVersion: 2,
      sceneType: 'narrative',
      act: 2,
      chapter: 3,
      kicker: 'EVIDENCE PILLAR · CAUSE',
      title: 'The Body Is Not an Opinion',
      location: '{{case.venue.locations.0}}',
      contentWarnings: ['crime-scene-detail', 'medical-trauma'],
      prose: [
        { id: 'cause.1', text: 'The first question was not who benefited. It was what physically ended {{case.victim.name}}’s life. Until that answer could survive hostile scrutiny, every suspect story was only theater.' },
        { id: 'cause.2', text: 'The room held the relevant trace, but not in a form that rewarded haste. {{case.partner.firstName}} opened the portable kit and waited for you to decide whether the clock or the evidence would set the pace.' },
      ],
      choices: [
        {
          id: 'cause_full_examination',
          label: 'Perform a complete controlled examination and document the alternative causes you eliminate.',
          effects: [
            { type: 'genreMetric', key: 'timeRemaining', amount: -2 },
            { type: 'genreMetric', key: 'caseStrength', amount: 18 },
            { type: 'genreMetric', key: 'evidenceIntegrity', amount: 2 },
            { type: 'genreMetric', key: 'leadsCompleted', amount: 1 },
            { type: 'genreMetric', key: 'verifiedClues', amount: 1 },
            { type: 'flag', key: 'leadCauseComplete', value: true },
            { type: 'clue', value: { id: '{{case.evidence.cause.id}}', name: '{{case.evidence.cause.name}}', summary: '{{case.evidence.cause.summary}}', reliability: 'verified', category: 'cause' } },
            { type: 'objective', id: 'objective.establish-cause', status: 'completed' },
            { type: 'relationshipAdjust', npcId: 'npc.mystery_partner', values: { trust: 3, respect: 4 } },
          ],
          nextOptions: returnFromLeadOptions(),
          next: 'ip.mystery.act2.caseboard',
        },
        {
          id: 'cause_visual_shortcut',
          label: 'Use the visible injuries to form a fast working cause and preserve time.',
          effects: [
            { type: 'genreMetric', key: 'timeRemaining', amount: -1 },
            { type: 'genreMetric', key: 'caseStrength', amount: 9 },
            { type: 'genreMetric', key: 'evidenceIntegrity', amount: -5 },
            { type: 'genreMetric', key: 'leadsCompleted', amount: 1 },
            { type: 'flag', key: 'leadCauseComplete', value: true },
            { type: 'clue', value: { id: '{{case.evidence.cause.id}}', name: '{{case.evidence.cause.name}}', summary: '{{case.evidence.cause.summary}}', reliability: 'tentative', category: 'cause' } },
            { type: 'objective', id: 'objective.establish-cause', status: 'completed' },
            { type: 'relationshipAdjust', npcId: 'npc.mystery_partner', values: { respect: -1 } },
          ],
          nextOptions: returnFromLeadOptions(),
          next: 'ip.mystery.act2.caseboard',
        },
        {
          id: 'cause_detective_kit',
          label: 'Use your evidence kit and former detective training to preserve the trace while working faster.',
          when: { all: [{ path: 'campaign.protagonist.background.id', equals: 'detective' }, { hasItemFromBackground: true }] },
          effects: [
            { type: 'inventoryRemoveBackgroundResource' },
            { type: 'genreMetric', key: 'timeRemaining', amount: -1 },
            { type: 'genreMetric', key: 'caseStrength', amount: 17 },
            { type: 'genreMetric', key: 'evidenceIntegrity', amount: 3 },
            { type: 'genreMetric', key: 'leadsCompleted', amount: 1 },
            { type: 'genreMetric', key: 'verifiedClues', amount: 1 },
            { type: 'flag', key: 'leadCauseComplete', value: true },
            { type: 'clue', value: { id: '{{case.evidence.cause.id}}', name: '{{case.evidence.cause.name}}', summary: '{{case.evidence.cause.summary}}', reliability: 'verified', category: 'cause' } },
            { type: 'objective', id: 'objective.establish-cause', status: 'completed' },
            { type: 'relationshipAdjust', npcId: 'npc.mystery_partner', values: { admiration: 4, trust: 3 } },
          ],
          nextOptions: returnFromLeadOptions(),
          next: 'ip.mystery.act2.caseboard',
        },
      ],
    },
    {
      id: 'ip.mystery.act2.lead-access',
      schemaVersion: 2,
      sceneType: 'narrative',
      act: 2,
      chapter: 3,
      kicker: 'EVIDENCE PILLAR · ACCESS',
      title: 'The Locked Door’s Less Impressive Relatives',
      location: '{{case.venue.name}} · {{case.venue.locations.3}}',
      contentWarnings: [],
      prose: [
        { id: 'access.1', text: 'The public door had been locked. The room, however, belonged to a building full of service panels, old ventilation shafts, maintenance codes, and people paid to know which keys were ceremonial and which ones worked.' },
        { id: 'access.2', text: 'You and {{case.partner.firstName}} mapped every route that reached the library without crossing the gallery. One of them carried the trace the killer had failed to understand as evidence.' },
      ],
      choices: [
        {
          id: 'access_full_audit',
          label: 'Audit every key, code, hidden route, and maintenance record against the locked timeline.',
          effects: [
            { type: 'genreMetric', key: 'timeRemaining', amount: -2 },
            { type: 'genreMetric', key: 'caseStrength', amount: 18 },
            { type: 'genreMetric', key: 'leadsCompleted', amount: 1 },
            { type: 'genreMetric', key: 'verifiedClues', amount: 1 },
            { type: 'flag', key: 'leadAccessComplete', value: true },
            { type: 'clue', value: { id: '{{case.evidence.access.id}}', name: '{{case.evidence.access.name}}', summary: '{{case.evidence.access.summary}}', reliability: 'verified', category: 'access' } },
            { type: 'objective', id: 'objective.test-alibis', status: 'active' },
            { type: 'relationshipAdjust', npcId: 'npc.mystery_partner', values: { respect: 3 } },
          ],
          nextOptions: returnFromLeadOptions(),
          next: 'ip.mystery.act2.caseboard',
        },
        {
          id: 'access_pressure_security',
          label: 'Pressure {{case.suspects.security.name}} for a fast explanation of every blind spot.',
          effects: [
            { type: 'genreMetric', key: 'timeRemaining', amount: -1 },
            { type: 'genreMetric', key: 'caseStrength', amount: 9 },
            { type: 'genreMetric', key: 'publicConfidence', amount: -4 },
            { type: 'genreMetric', key: 'leadsCompleted', amount: 1 },
            { type: 'flag', key: 'leadAccessComplete', value: true },
            { type: 'suspectStatus', suspectId: 'suspect.security', status: 'hostile' },
            { type: 'clue', value: { id: '{{case.evidence.access.id}}', name: '{{case.evidence.access.name}}', summary: '{{case.evidence.access.summary}}', reliability: 'tentative', category: 'access' } },
            { type: 'stat', key: 'interviewsConducted', amount: 1 },
            { type: 'relationshipAdjust', npcId: 'npc.mystery_partner', values: { trust: -2, unresolvedConflict: 2 } },
          ],
          nextOptions: returnFromLeadOptions(),
          next: 'ip.mystery.act2.caseboard',
        },
        {
          id: 'access_detective_reconstruction',
          label: 'Reconstruct the route from trace placement instead of accepting the building’s key ledger.',
          when: { path: 'campaign.protagonist.background.id', equals: 'detective' },
          effects: [
            { type: 'genreMetric', key: 'timeRemaining', amount: -1 },
            { type: 'genreMetric', key: 'caseStrength', amount: 15 },
            { type: 'genreMetric', key: 'evidenceIntegrity', amount: 2 },
            { type: 'genreMetric', key: 'leadsCompleted', amount: 1 },
            { type: 'genreMetric', key: 'verifiedClues', amount: 1 },
            { type: 'flag', key: 'leadAccessComplete', value: true },
            { type: 'clue', value: { id: '{{case.evidence.access.id}}', name: '{{case.evidence.access.name}}', summary: '{{case.evidence.access.summary}}', reliability: 'verified', category: 'access' } },
            { type: 'relationshipAdjust', npcId: 'npc.mystery_partner', values: { admiration: 3, respect: 3 } },
          ],
          nextOptions: returnFromLeadOptions(),
          next: 'ip.mystery.act2.caseboard',
        },
      ],
    },
    {
      id: 'ip.mystery.act2.lead-timeline',
      schemaVersion: 2,
      sceneType: 'narrative',
      act: 2,
      chapter: 4,
      kicker: 'EVIDENCE PILLAR · TIMELINE',
      title: 'Six Minutes Everyone Remembers Differently',
      location: '{{case.venue.name}} · {{case.venue.locations.2}}',
      contentWarnings: ['manipulation'],
      prose: [
        { id: 'timeline.1', text: 'The lighting failure had lasted six minutes. The suspects described those minutes with the suspicious precision of people who had rehearsed separate stories and assumed nobody would lay them side by side.' },
        { id: 'timeline.2', text: '{{case.partner.firstName}} placed the statements in a row. “One contradiction can be fear,” she said. “Three contradictions sharing the same minute are architecture.”' },
      ],
      choices: [
        {
          id: 'timeline_separate_interviews',
          label: 'Interview each suspect separately, then compare their answers against the mechanical records.',
          effects: [
            { type: 'genreMetric', key: 'timeRemaining', amount: -2 },
            { type: 'genreMetric', key: 'caseStrength', amount: 18 },
            { type: 'genreMetric', key: 'leadsCompleted', amount: 1 },
            { type: 'genreMetric', key: 'verifiedClues', amount: 1 },
            { type: 'flag', key: 'leadTimelineComplete', value: true },
            { type: 'clue', value: { id: '{{case.evidence.timeline.id}}', name: '{{case.evidence.timeline.name}}', summary: '{{case.evidence.timeline.summary}}', reliability: 'verified', category: 'timeline' } },
            { type: 'clue', value: { id: '{{case.evidence.contradiction.id}}', name: '{{case.evidence.contradiction.name}}', summary: '{{case.evidence.contradiction.summary}}', reliability: 'verified', category: 'contradiction' } },
            { type: 'objective', id: 'objective.test-alibis', status: 'completed' },
            { type: 'stat', key: 'interviewsConducted', amount: 4 },
            { type: 'relationshipAdjust', npcId: 'npc.mystery_partner', values: { trust: 3, admiration: 2 } },
          ],
          nextOptions: returnFromLeadOptions(),
          next: 'ip.mystery.act2.caseboard',
        },
        {
          id: 'timeline_group_confrontation',
          label: 'Confront all four suspects together and watch who corrects whom.',
          effects: [
            { type: 'genreMetric', key: 'timeRemaining', amount: -1 },
            { type: 'genreMetric', key: 'caseStrength', amount: 10 },
            { type: 'genreMetric', key: 'publicConfidence', amount: -3 },
            { type: 'genreMetric', key: 'leadsCompleted', amount: 1 },
            { type: 'flag', key: 'leadTimelineComplete', value: true },
            { type: 'clue', value: { id: '{{case.evidence.timeline.id}}', name: '{{case.evidence.timeline.name}}', summary: '{{case.evidence.timeline.summary}}', reliability: 'tentative', category: 'timeline' } },
            { type: 'objective', id: 'objective.test-alibis', status: 'completed' },
            { type: 'stat', key: 'interviewsConducted', amount: 1 },
            { type: 'relationshipAdjust', npcId: 'npc.mystery_partner', values: { respect: -2 } },
          ],
          nextOptions: returnFromLeadOptions(),
          next: 'ip.mystery.act2.caseboard',
        },
        {
          id: 'timeline_reporter_recordings',
          label: 'Use your recorder to compare pauses, corrections, and exact wording across the first statements.',
          when: { all: [{ path: 'campaign.protagonist.background.id', equals: 'reporter' }, { hasItemFromBackground: true }] },
          effects: [
            { type: 'inventoryRemoveBackgroundResource' },
            { type: 'genreMetric', key: 'timeRemaining', amount: -1 },
            { type: 'genreMetric', key: 'caseStrength', amount: 17 },
            { type: 'genreMetric', key: 'leadsCompleted', amount: 1 },
            { type: 'genreMetric', key: 'verifiedClues', amount: 2 },
            { type: 'flag', key: 'leadTimelineComplete', value: true },
            { type: 'clue', value: { id: '{{case.evidence.timeline.id}}', name: '{{case.evidence.timeline.name}}', summary: '{{case.evidence.timeline.summary}}', reliability: 'verified', category: 'timeline' } },
            { type: 'clue', value: { id: '{{case.evidence.contradiction.id}}', name: '{{case.evidence.contradiction.name}}', summary: '{{case.evidence.contradiction.summary}}', reliability: 'verified', category: 'contradiction' } },
            { type: 'objective', id: 'objective.test-alibis', status: 'completed' },
            { type: 'stat', key: 'interviewsConducted', amount: 4 },
            { type: 'relationshipAdjust', npcId: 'npc.mystery_partner', values: { admiration: 4, trust: 3 } },
          ],
          nextOptions: returnFromLeadOptions(),
          next: 'ip.mystery.act2.caseboard',
        },
        {
          id: 'timeline_attorney_crosscheck',
          label: 'Cross-examine each alibi against the statement most likely to impeach it.',
          when: { path: 'campaign.protagonist.background.id', equals: 'attorney' },
          effects: [
            { type: 'genreMetric', key: 'timeRemaining', amount: -1 },
            { type: 'genreMetric', key: 'caseStrength', amount: 16 },
            { type: 'genreMetric', key: 'publicConfidence', amount: 2 },
            { type: 'genreMetric', key: 'leadsCompleted', amount: 1 },
            { type: 'genreMetric', key: 'verifiedClues', amount: 1 },
            { type: 'flag', key: 'leadTimelineComplete', value: true },
            { type: 'clue', value: { id: '{{case.evidence.timeline.id}}', name: '{{case.evidence.timeline.name}}', summary: '{{case.evidence.timeline.summary}}', reliability: 'verified', category: 'timeline' } },
            { type: 'clue', value: { id: '{{case.evidence.contradiction.id}}', name: '{{case.evidence.contradiction.name}}', summary: '{{case.evidence.contradiction.summary}}', reliability: 'verified', category: 'contradiction' } },
            { type: 'objective', id: 'objective.test-alibis', status: 'completed' },
            { type: 'stat', key: 'interviewsConducted', amount: 4 },
            { type: 'relationshipAdjust', npcId: 'npc.mystery_partner', values: { respect: 4 } },
          ],
          nextOptions: returnFromLeadOptions(),
          next: 'ip.mystery.act2.caseboard',
        },
      ],
    },
    {
      id: 'ip.mystery.act2.lead-motive',
      schemaVersion: 2,
      sceneType: 'narrative',
      act: 2,
      chapter: 4,
      kicker: 'EVIDENCE PILLAR · MOTIVE',
      title: 'The Morning That Would Have Changed Everything',
      location: '{{case.venue.locations.0}} · the victim’s private files',
      contentWarnings: ['manipulation'],
      prose: [
        { id: 'motive.1', text: '{{case.victim.name}} had not merely collected enemies. He had scheduled them. The desk calendar contained four dawn appointments, each attached to a file capable of changing somebody’s money, career, or freedom.' },
        { id: 'motive.2', text: 'The false leads were real secrets. That was what made them useful to the killer. Shame had supplied camouflage without needing to be invented.' },
      ],
      choices: [
        {
          id: 'motive_full_document_audit',
          label: 'Audit the victim’s private files against bank, trust, inventory, and medical records.',
          effects: [
            { type: 'genreMetric', key: 'timeRemaining', amount: -2 },
            { type: 'genreMetric', key: 'caseStrength', amount: 18 },
            { type: 'genreMetric', key: 'leadsCompleted', amount: 1 },
            { type: 'genreMetric', key: 'verifiedClues', amount: 1 },
            { type: 'flag', key: 'leadMotiveComplete', value: true },
            { type: 'clue', value: { id: '{{case.evidence.motive.id}}', name: '{{case.evidence.motive.name}}', summary: '{{case.evidence.motive.summary}}', reliability: 'verified', category: 'motive' } },
            { type: 'objective', id: 'objective.find-motive', status: 'completed' },
            { type: 'relationshipAdjust', npcId: 'npc.mystery_partner', values: { respect: 3 } },
          ],
          nextOptions: returnFromLeadOptions(),
          next: 'ip.mystery.act2.caseboard',
        },
        {
          id: 'motive_accept_obvious_scandal',
          label: 'Treat the most visible scandal as the likely motive and preserve time.',
          effects: [
            { type: 'genreMetric', key: 'timeRemaining', amount: -1 },
            { type: 'genreMetric', key: 'caseStrength', amount: 7 },
            { type: 'genreMetric', key: 'publicConfidence', amount: -5 },
            { type: 'genreMetric', key: 'leadsCompleted', amount: 1 },
            { type: 'flag', key: 'leadMotiveComplete', value: true },
            { type: 'flag', key: 'motiveBuiltOnFalseLead', value: true },
            { type: 'clue', value: { id: 'clue.false-motive', name: 'The most visible scandal', summary: 'A real secret supplies motive-shaped noise but does not connect cleanly to the method or opportunity.', reliability: 'contested', category: 'motive' } },
            { type: 'relationshipAdjust', npcId: 'npc.mystery_partner', values: { trust: -2, suspicion: 2 } },
          ],
          nextOptions: returnFromLeadOptions(),
          next: 'ip.mystery.act2.caseboard',
        },
        {
          id: 'motive_accountant_reconcile',
          label: 'Reconcile the dawn files against the victim’s private ledger and isolate the one consequence he had already funded.',
          when: { all: [{ path: 'campaign.protagonist.background.id', equals: 'accountant' }, { hasItemFromBackground: true }] },
          effects: [
            { type: 'inventoryRemoveBackgroundResource' },
            { type: 'genreMetric', key: 'timeRemaining', amount: -1 },
            { type: 'genreMetric', key: 'caseStrength', amount: 18 },
            { type: 'genreMetric', key: 'publicConfidence', amount: 3 },
            { type: 'genreMetric', key: 'leadsCompleted', amount: 1 },
            { type: 'genreMetric', key: 'verifiedClues', amount: 1 },
            { type: 'flag', key: 'leadMotiveComplete', value: true },
            { type: 'clue', value: { id: '{{case.evidence.motive.id}}', name: '{{case.evidence.motive.name}}', summary: '{{case.evidence.motive.summary}}', reliability: 'verified', category: 'motive' } },
            { type: 'objective', id: 'objective.find-motive', status: 'completed' },
            { type: 'relationshipAdjust', npcId: 'npc.mystery_partner', values: { admiration: 4, trust: 2 } },
          ],
          nextOptions: returnFromLeadOptions(),
          next: 'ip.mystery.act2.caseboard',
        },
      ],
    },
    {
      id: 'ip.mystery.act2.complication',
      schemaVersion: 2,
      sceneType: 'narrative',
      act: 2,
      chapter: 5,
      kicker: 'STANDARD CAMPAIGN COMPLICATION',
      title: 'The Case Acts Back',
      location: '{{case.venue.name}} · central gallery',
      contentWarnings: ['manipulation'],
      prose: [
        { id: 'complication.1', text: 'The investigation had stopped being private. Somebody inside the sealed house had understood where your case was becoming dangerous and moved before you could complete it.' },
        { id: 'complication.leak', when: { path: 'case.complication.id', equals: 'evidence-leak' }, text: 'A crime-scene photograph appeared on the Morning Ledger’s waiting news feed, cropped to make one suspect look guilty. The leak did not change the evidence. It changed how every witness expected the evidence to be used.' },
        { id: 'complication.flight', when: { path: 'case.complication.id', equals: 'fleeing-suspect' }, text: 'A deputy reported movement at the service gate. One suspect had packed a coat, taken an emergency key, and decided the blizzard was preferable to another interview.' },
        { id: 'complication.recant', when: { path: 'case.complication.id', equals: 'recanting-witness' }, text: '{{case.witness.name}} withdrew her first statement and asked to leave the protected room. She would not say who had spoken to her, only that she had “remembered it differently.”' },
      ],
      onEnter: [{ type: 'flag', key: 'complicationTriggered', value: true }],
      choices: [
        {
          id: 'respond_to_evidence_leak',
          label: 'Contain the evidence leak before the false narrative hardens.',
          when: { path: 'case.complication.id', equals: 'evidence-leak' },
          effects: [],
          next: 'ip.mystery.act2.complication-evidence-leak',
        },
        {
          id: 'respond_to_fleeing_suspect',
          label: 'Stop the fleeing suspect without abandoning the sealed scene.',
          when: { path: 'case.complication.id', equals: 'fleeing-suspect' },
          effects: [],
          next: 'ip.mystery.act2.complication-fleeing-suspect',
        },
        {
          id: 'respond_to_recanting_witness',
          label: 'Protect {{case.witness.firstName}} and find out why she recanted.',
          when: { path: 'case.complication.id', equals: 'recanting-witness' },
          effects: [],
          next: 'ip.mystery.act2.complication-recanting-witness',
        },
      ],
    },
    {
      id: 'ip.mystery.act2.complication-evidence-leak',
      schemaVersion: 2,
      sceneType: 'narrative',
      act: 2,
      chapter: 5,
      kicker: 'THE LEAK',
      title: 'A Photograph Without Its Chain',
      location: '{{case.venue.name}} · security office',
      contentWarnings: ['manipulation'],
      prose: [
        { id: 'leak.1', text: 'The leaked image was genuine and therefore more dangerous than a fabrication. Its missing context turned a real trace into an accusation the evidence had not yet earned.' },
        { id: 'leak.2', text: '{{case.partner.firstName}} traced the upload to a guest network terminal. “We can spend time finding the hand,” she said, “or spend credibility making the photograph honest again.”' },
      ],
      choices: [
        {
          id: 'leak_publish_context',
          label: 'Release a narrow factual correction that protects the case without naming a suspect.',
          effects: [
            { type: 'genreMetric', key: 'timeRemaining', amount: -1 },
            { type: 'genreMetric', key: 'publicConfidence', amount: 10 },
            { type: 'genreMetric', key: 'evidenceIntegrity', amount: 2 },
            { type: 'flag', key: 'complicationResolved', value: true },
            { type: 'relationshipAdjust', npcId: 'npc.mystery_partner', values: { trust: 3, respect: 3 } },
          ],
          next: 'ip.mystery.act2.caseboard',
        },
        {
          id: 'leak_hunt_source',
          label: 'Trace the leak to its source and accept the lost investigative time.',
          effects: [
            { type: 'genreMetric', key: 'timeRemaining', amount: -2 },
            { type: 'genreMetric', key: 'caseStrength', amount: 7 },
            { type: 'genreMetric', key: 'publicConfidence', amount: 3 },
            { type: 'flag', key: 'complicationResolved', value: true },
            { type: 'clue', value: { id: 'clue.leak.source', name: 'Evidence-leak terminal log', summary: 'The photograph was uploaded from a terminal accessible to all four suspects; the source is useful context, not proof of murder.', reliability: 'verified', category: 'conduct' } },
          ],
          next: 'ip.mystery.act2.caseboard',
        },
        {
          id: 'leak_exploit_story',
          label: 'Let the misleading story pressure the suspects and see who panics.',
          effects: [
            { type: 'genreMetric', key: 'caseStrength', amount: 4 },
            { type: 'genreMetric', key: 'evidenceIntegrity', amount: -10 },
            { type: 'genreMetric', key: 'publicConfidence', amount: -10 },
            { type: 'flag', key: 'complicationResolved', value: true },
            { type: 'stat', key: 'evidenceContaminated', amount: 1 },
            { type: 'relationshipAdjust', npcId: 'npc.mystery_partner', values: { trust: -5, resentment: 4 } },
          ],
          next: 'ip.mystery.act2.caseboard',
        },
      ],
    },
    {
      id: 'ip.mystery.act2.complication-fleeing-suspect',
      schemaVersion: 2,
      sceneType: 'narrative',
      act: 2,
      chapter: 5,
      kicker: 'THE SERVICE GATE',
      title: 'Flight Is Evidence of Something',
      location: '{{case.venue.name}} · service gate',
      contentWarnings: ['injury'],
      prose: [
        { id: 'flight.1', text: 'The figure at the gate had not yet reached the road. Snow rose to the knees beyond the wall, and the key in the lock had frozen halfway through its turn.' },
        { id: 'flight.2', text: 'Running did not prove murder. It proved fear, and fear could belong to a killer, a liar, or an innocent person with another ruin waiting in the files.' },
      ],
      choices: [
        {
          id: 'flight_send_partner',
          label: 'Let {{case.partner.firstName}} make the stop while you preserve the evidence room.',
          effects: [
            { type: 'genreMetric', key: 'timeRemaining', amount: -1 },
            { type: 'genreMetric', key: 'caseStrength', amount: 5 },
            { type: 'flag', key: 'complicationResolved', value: true },
            { type: 'relationshipAdjust', npcId: 'npc.mystery_partner', values: { trust: 4, admiration: 2, protectiveness: 2 } },
            { type: 'clue', value: { id: 'clue.flight.secret', name: 'The reason for flight', summary: 'The fleeing suspect admits a separate concealed offense that explains panic but does not match the murder method.', reliability: 'verified', category: 'false-lead' } },
          ],
          next: 'ip.mystery.act2.caseboard',
        },
        {
          id: 'flight_pursue_alone',
          label: 'Pursue personally through the snow and force an immediate surrender.',
          effects: [
            { type: 'genreMetric', key: 'timeRemaining', amount: -1 },
            { type: 'genreMetric', key: 'caseStrength', amount: 4 },
            { type: 'genreMetric', key: 'evidenceIntegrity', amount: -4 },
            { type: 'health', amountByDifficulty: { story: -4, standard: -8, hard: -12, brutal: -18 } },
            { type: 'injury', value: { id: 'injury.ice-fall', name: 'Twisted knee from the service-gate pursuit', severity: 'moderate', treated: false } },
            { type: 'flag', key: 'complicationResolved', value: true },
            { type: 'relationshipAdjust', npcId: 'npc.mystery_partner', values: { trust: -3, fear: 3, protectiveness: 4 } },
          ],
          next: 'ip.mystery.act2.caseboard',
        },
        {
          id: 'flight_lock_gate_and_wait',
          label: 'Lock the outer gate remotely and make the suspect return under observation.',
          effects: [
            { type: 'genreMetric', key: 'publicConfidence', amount: 4 },
            { type: 'genreMetric', key: 'caseStrength', amount: 3 },
            { type: 'flag', key: 'complicationResolved', value: true },
            { type: 'relationshipAdjust', npcId: 'npc.mystery_partner', values: { respect: 3 } },
          ],
          next: 'ip.mystery.act2.caseboard',
        },
      ],
    },
    {
      id: 'ip.mystery.act2.complication-recanting-witness',
      schemaVersion: 2,
      sceneType: 'narrative',
      act: 2,
      chapter: 5,
      kicker: 'THE RECANTATION',
      title: 'Fear Has Edited the Statement',
      location: '{{case.venue.name}} · protected receiving room',
      contentWarnings: ['manipulation', 'character-death'],
      prose: [
        { id: 'recant.1', text: '{{case.witness.name}} would not meet your eyes. The first statement remained signed and sealed, but she now claimed the service-corridor movement might have been a curtain shifting in the ventilation.' },
        { id: 'recant.2', text: 'There were four suspects in the house and only one person whose story had just become less convenient. Somebody had reached her through a message, a threat, or a remembered obligation.' },
      ],
      choices: [
        {
          id: 'recant_protect_and_reassure',
          label: 'Move her under direct protection, acknowledge the fear, and ask what changed.',
          effects: [
            { type: 'genreMetric', key: 'timeRemaining', amount: -1 },
            { type: 'genreMetric', key: 'caseStrength', amount: 8 },
            { type: 'genreMetric', key: 'publicConfidence', amount: 5 },
            { type: 'flag', key: 'complicationResolved', value: true },
            { type: 'flag', key: 'witnessProtected', value: true },
            { type: 'objective', id: 'objective.protect-witness', status: 'completed' },
            { type: 'stat', key: 'witnessesSaved', amount: 1 },
            { type: 'clue', value: { id: 'clue.witness.intimidation', name: 'The intimidation phrase', summary: 'The witness received a message quoting a private phrase only someone close to the victim’s files would know.', reliability: 'verified', category: 'conduct' } },
            { type: 'relationshipAdjust', npcId: 'npc.mystery_partner', values: { trust: 4, admiration: 3 } },
          ],
          next: 'ip.mystery.act2.caseboard',
        },
        {
          id: 'recant_threaten_obstruction',
          label: 'Threaten obstruction charges until she repeats the original statement.',
          effects: [
            { type: 'genreMetric', key: 'timeRemaining', amount: -1 },
            { type: 'genreMetric', key: 'caseStrength', amount: 3 },
            { type: 'genreMetric', key: 'publicConfidence', amount: -8 },
            { type: 'flag', key: 'complicationResolved', value: true },
            { type: 'suspectStatus', suspectId: 'witness', status: 'hostile' },
            { type: 'relationshipAdjust', npcId: 'npc.mystery_partner', values: { trust: -5, resentment: 5, respect: -4 } },
          ],
          next: 'ip.mystery.act2.caseboard',
        },
        {
          id: 'recant_send_back_unguarded',
          label: 'Send her back to the gallery and preserve the remaining investigative time.',
          effects: [
            { type: 'flag', key: 'witnessLost', value: true },
            { type: 'objective', id: 'objective.protect-witness', status: 'failed' },
            { type: 'relationshipAdjust', npcId: 'npc.mystery_partner', values: { trust: -10, respect: -8, unresolvedConflict: 8 } },
          ],
          next: 'ip.mystery.ending.witness-killed',
        },
      ],
    },
    {
      id: 'ip.mystery.act2.partner-review',
      schemaVersion: 2,
      sceneType: 'narrative',
      act: 2,
      chapter: 5,
      kicker: 'PRIVATE REVIEW',
      title: 'The Person Who Can Still Tell You No',
      location: '{{case.venue.name}} · trustees’ anteroom',
      contentWarnings: [],
      prose: [
        { id: 'partner.1', text: '{{case.partner.firstName}} closed the door on the case board and made you state the theory without looking at it. Each time you used the word “obvious,” she asked which exhibit would prove it.' },
        { id: 'partner.2', text: 'Her resistance was not disloyalty. It was the last protection between a private suspicion and a public accusation that could not be taken back.' },
        { id: 'partner.3', text: '“I will stand beside you in that room,” she said. “But I won’t stand there as decoration. Tell me where the case is weakest.”' },
      ],
      choices: [
        {
          id: 'partner_share_doubt',
          label: 'Tell her honestly which conclusion still troubles you.',
          effects: [
            { type: 'genreMetric', key: 'timeRemaining', amount: -1 },
            { type: 'genreMetric', key: 'caseStrength', amount: 7 },
            { type: 'relationshipAdjust', npcId: 'npc.mystery_partner', values: { trust: 6, respect: 4, emotionalIntimacy: 3, protectiveness: 2 } },
            { type: 'flag', key: 'partnerAuditComplete', value: true },
          ],
          next: 'ip.mystery.act2.caseboard',
        },
        {
          id: 'partner_demand_support',
          label: 'Tell her you need support in the accusation room, not another cross-examination.',
          effects: [
            { type: 'genreMetric', key: 'publicConfidence', amount: -2 },
            { type: 'relationshipAdjust', npcId: 'npc.mystery_partner', values: { trust: -5, resentment: 4, unresolvedConflict: 5 } },
            { type: 'flag', key: 'partnerAuditComplete', value: false },
          ],
          next: 'ip.mystery.act2.caseboard',
        },
        {
          id: 'partner_independent_audit',
          label: 'Give her the complete file and ask for an independent conclusion.',
          effects: [
            { type: 'genreMetric', key: 'timeRemaining', amount: -1 },
            { type: 'genreMetric', key: 'caseStrength', amount: 9 },
            { type: 'relationshipAdjust', npcId: 'npc.mystery_partner', values: { trust: 5, admiration: 4, respect: 5 } },
            { type: 'flag', key: 'partnerAuditComplete', value: true },
          ],
          next: 'ip.mystery.act2.caseboard',
        },
      ],
    },
    {
      id: 'ip.mystery.act3.accusation-room',
      schemaVersion: 2,
      sceneType: 'narrative',
      act: 3,
      chapter: 6,
      kicker: 'ACT III · THE ACCUSATION',
      title: 'Four Chairs Facing One Empty Place',
      location: '{{case.venue.name}} · central gallery',
      contentWarnings: ['manipulation'],
      prose: [
        { id: 'accusation.1', text: 'The four suspects sat in a shallow half-circle beneath the portrait of {{case.victim.name}}. His chair remained empty between them. Snowplow lights moved faintly beyond the windows, still distant but no longer theoretical.' },
        { id: 'accusation.2', text: 'The physical evidence, access route, timeline, and motive did not need to make every suspect innocent. They needed to make one suspect uniquely capable of the whole crime.' },
        { id: 'accusation.3', text: '{{case.partner.firstName}} stood at your right shoulder. She did not prompt you. She did not rescue you from the silence. That restraint was the final measure of how much she trusted the work.' },
      ],
      choices: [...ACCUSATION_CHOICES],
    },
    {
      id: 'ip.mystery.act3.correct-confrontation',
      schemaVersion: 2,
      sceneType: 'narrative',
      act: 3,
      chapter: 6,
      kicker: 'THE TRUE CULPRIT',
      title: 'The Timeline Narrows to One Person',
      location: '{{case.venue.name}} · central gallery',
      contentWarnings: ['manipulation'],
      prose: [
        { id: 'correct.1', text: 'You named {{case.culpritName}}. The room changed in a way no transcript would capture: one suspect stopped performing innocence and began measuring the distance to every door.' },
        { id: 'correct.2', text: 'The truth had not changed because you found it. {{case.motive}} {{case.method}} The method, access, timeline, and motive had existed from the instant the campaign began. Your accusation was correct because the evidence converged, not because the story had decided to reward you.' },
        { id: 'correct.3', text: 'Correct was not yet the same as provable. {{case.partner.firstName}} watched the culprit, then looked to you for the form the final confrontation would take.' },
      ],
      choices: [
        {
          id: 'present_complete_chain',
          label: 'Present the complete evidentiary chain and let each contradiction close the next escape route.',
          effects: [
            { type: 'flag', key: 'culpritRevealed', value: true },
            { type: 'objective', id: 'objective.identify-culprit', status: 'completed' },
          ],
          nextOptions: [
            {
              when: {
                all: [
                  metric('caseStrength', { gteRule: 'airtightStrengthMinimum' }),
                  metric('evidenceIntegrity', { gteRule: 'airtightIntegrityMinimum' }),
                  metric('verifiedClues', { gte: 3 }),
                ],
              },
              next: 'ip.mystery.ending.airtight-case',
            },
            { when: metric('evidenceIntegrity', { lte: 30 }), next: 'ip.mystery.ending.evidence-ruined' },
          ],
          next: 'ip.mystery.ending.truth-no-conviction',
        },
        {
          id: 'press_for_confession',
          label: 'Use the locked contradiction to press for a confession while {{case.partner.firstName}} controls the room.',
          when: { hasClue: 'clue.case.contradiction' },
          effects: [
            { type: 'flag', key: 'culpritRevealed', value: true },
            { type: 'objective', id: 'objective.identify-culprit', status: 'completed' },
          ],
          nextOptions: [
            {
              when: {
                all: [
                  { relationship: { npcId: 'npc.mystery_partner', metric: 'trust', gteRule: 'confessionTrustMinimum' } },
                  metric('caseStrength', { gteRule: 'accusationStrengthMinimum' }),
                ],
              },
              next: 'ip.mystery.ending.confession',
            },
          ],
          next: 'ip.mystery.ending.partner-walks',
        },
        {
          id: 'offer_quiet_deal',
          label: 'Offer a private admission and surrender in exchange for keeping the institution’s wider scandals out of the first report.',
          effects: [
            { type: 'flag', key: 'culpritRevealed', value: true },
            { type: 'flag', key: 'acceptedQuietDeal', value: true },
            { type: 'objective', id: 'objective.identify-culprit', status: 'completed' },
            { type: 'relationshipAdjust', npcId: 'npc.mystery_partner', values: { trust: -4, ideologicalAlignment: -6, unresolvedConflict: 5 } },
          ],
          next: 'ip.mystery.ending.quiet-deal',
        },
      ],
    },
    {
      id: 'ip.mystery.act3.wrong-confrontation',
      schemaVersion: 2,
      sceneType: 'narrative',
      act: 3,
      chapter: 6,
      kicker: 'THE WRONG THEORY',
      title: 'A Case Can Be Coherent and Still Be False',
      location: '{{case.venue.name}} · central gallery',
      contentWarnings: ['manipulation'],
      prose: [
        { id: 'wrong.1', text: 'You named the suspect. The theory sounded persuasive because the suspect truly had a secret, a motive-shaped fear, and a reason to lie. None of those facts changed the physical method or the locked opportunity.' },
        { id: 'wrong.2', text: '{{case.partner.firstName}} looked at the case board, then at you. The expression on her face was not surprise. It was the recognition that you had mistaken a concealed wrong for this murder.' },
        { id: 'wrong.3', text: 'The true culprit remained in the room, quiet enough to let your certainty do the work.' },
      ],
      choices: [
        {
          id: 'make_wrong_accusation_public',
          label: 'Proceed publicly and demand the suspect’s arrest.',
          effects: [
            { type: 'objective', id: 'objective.identify-culprit', status: 'failed' },
            { type: 'genreMetric', key: 'publicConfidence', amount: -100 },
          ],
          next: 'ip.mystery.ending.wrong-accusation',
        },
        {
          id: 'coerce_wrong_confession',
          label: 'Use the suspect’s unrelated secret to force a confession before the prosecutor arrives.',
          effects: [
            { type: 'objective', id: 'objective.identify-culprit', status: 'failed' },
            { type: 'relationshipAdjust', npcId: 'npc.mystery_partner', values: { trust: -100, respect: -100, resentment: 40 } },
          ],
          next: 'ip.mystery.ending.partner-walks',
        },
      ],
    },
    {
      id: 'ip.mystery.act3.story-reprieve',
      schemaVersion: 2,
      sceneType: 'narrative',
      act: 3,
      chapter: 6,
      kicker: 'STORY DIFFICULTY SAFEGUARD',
      title: 'The Accusation {{case.partner.firstName}} Refuses to Let You Make',
      location: '{{case.venue.name}} · gallery threshold',
      contentWarnings: [],
      prose: [
        { id: 'reprieve.1', text: '{{case.partner.firstName}} caught your sleeve before you crossed the gallery threshold. “No,” she said softly. “Your suspect has a secret. Your suspect does not have the method. We get one minute in private, and then you decide whether you still want to ruin the wrong person.”' },
        { id: 'reprieve.2', text: 'Story difficulty had not changed the culprit or supplied hidden evidence. It had given the relationship and the clearer warning signs enough room to stop one unsupported accusation before it became public.' },
      ],
      onEnter: [
        { type: 'flag', key: 'storyReprieveUsed', value: true },
        { type: 'genreMetric', key: 'timeRemaining', amount: -1 },
        { type: 'genreMetric', key: 'caseStrength', amount: -4 },
        { type: 'genreMetric', key: 'publicConfidence', amount: -4 },
      ],
      choices: [
        {
          id: 'accept_story_reconsideration',
          label: 'Listen, withdraw the private accusation, and return to the evidence.',
          effects: [
            { type: 'flag', key: 'selectedSuspectId', value: null },
            { type: 'flag', key: 'accusationCorrect', value: null },
            { type: 'relationshipAdjust', npcId: 'npc.mystery_partner', values: { trust: 4, respect: 3, unresolvedConflict: -3 } },
            { type: 'phase', value: 'act-2' },
          ],
          next: 'ip.mystery.act2.caseboard',
        },
        {
          id: 'reject_story_reconsideration',
          label: 'Reject her warning and make the accusation public anyway.',
          effects: [{ type: 'relationshipAdjust', npcId: 'npc.mystery_partner', values: { trust: -30, respect: -30 } }],
          next: 'ip.mystery.act3.wrong-confrontation',
        },
      ],
    },
    {
      id: 'ip.mystery.act3.deadline',
      schemaVersion: 2,
      sceneType: 'narrative',
      act: 3,
      chapter: 6,
      kicker: 'DAWN',
      title: 'The Prosecutor Reaches the House',
      location: '{{case.venue.name}} · front hall',
      contentWarnings: [],
      prose: [
        { id: 'deadline.1', text: 'The snowplow arrived before your last question did. The prosecutor entered with two deputies, a clean coat, and the authority to end the sealed-house arrangement.' },
        { id: 'deadline.2', text: 'You could give her the case you had built. You could not ask the clock to refund the leads you had left untouched.' },
      ],
      choices: [
        {
          id: 'submit_deadline_case',
          label: 'Submit the strongest defensible conclusion and accept what the evidence can still support.',
          effects: [],
          nextOptions: [
            {
              when: {
                all: [
                  metric('caseStrength', { gteRule: 'accusationStrengthMinimum' }),
                  metric('verifiedClues', { gte: 3 }),
                  metric('evidenceIntegrity', { gte: 50 }),
                ],
              },
              next: 'ip.mystery.ending.truth-no-conviction',
            },
            { when: metric('evidenceIntegrity', { lte: 30 }), next: 'ip.mystery.ending.evidence-ruined' },
          ],
          next: 'ip.mystery.ending.culprit-escapes',
        },
      ],
    },
    {
      id: 'ip.mystery.ending.airtight-case',
      schemaVersion: 2,
      sceneType: 'ending',
      act: 3,
      chapter: 7,
      kicker: 'VICTORY ENDING',
      title: 'An Airtight Case',
      location: '{{case.venue.name}} · central gallery',
      contentWarnings: [],
      terminalStatus: 'completed',
      ending: {
        outcome: 'victory',
        cause: 'The correct culprit was identified through a complete, admissible evidentiary chain.',
        summary: '{{player.name}} connected cause, access, timeline, and motive without sacrificing the integrity needed to hold {{case.culpritName}} after dawn.',
      },
      prose: [
        { id: 'airtight.1', text: 'Each denial forced {{case.culpritName}} into the next piece of evidence. The method contradicted the public story. The access trace contradicted the alibi. The timeline contradicted the access claim. The motive explained why those particular lies had been necessary.' },
        { id: 'airtight.2', text: 'When the prosecutor arrived, she did not ask whom you suspected. She asked where to sign the custody order.' },
        { id: 'airtight.3', text: '{{case.partner.firstName}} remained beside you until the suspect was removed. Only then did she let the severity leave her face. “That,” she said, touching the edge of the sealed case file, “is a conclusion that can survive being hated.”' },
      ],
      onEnter: [
        { type: 'objective', id: 'objective.identify-culprit', status: 'completed' },
        { type: 'objective', id: 'objective.preserve-scene', status: 'completed' },
      ],
      choices: [],
    },
    {
      id: 'ip.mystery.ending.confession',
      schemaVersion: 2,
      sceneType: 'ending',
      act: 3,
      chapter: 7,
      kicker: 'VICTORY ENDING',
      title: 'The Confession Between Two Silences',
      location: '{{case.venue.name}} · central gallery',
      contentWarnings: ['manipulation'],
      terminalStatus: 'completed',
      ending: {
        outcome: 'victory',
        cause: 'The correct culprit confessed after the locked contradiction destroyed the final alibi.',
        summary: '{{player.name}} and {{case.partner.name}} used evidence and earned trust together, leaving {{case.culpritName}} no safe lie to occupy.',
      },
      prose: [
        { id: 'confession.1', text: 'You did not raise your voice. {{case.partner.firstName}} did not crowd the suspect. She repeated the contradiction once, exactly as the evidence had established it, and then allowed the silence to become more expensive than the truth.' },
        { id: 'confession.2', text: '{{case.culpritName}} confessed in pieces: first to being in the room, then to preparing the method, then to the moment when retreat had still been possible and was not chosen.' },
        { id: 'confession.3', text: 'The statement was recorded, witnessed, and matched the physical record. Trust had not replaced proof. It had allowed two investigators to use proof without stepping on one another.' },
      ],
      onEnter: [{ type: 'objective', id: 'objective.identify-culprit', status: 'completed' }],
      choices: [],
    },
    {
      id: 'ip.mystery.ending.truth-no-conviction',
      schemaVersion: 2,
      sceneType: 'ending',
      act: 3,
      chapter: 7,
      kicker: 'COSTLY ENDING',
      title: 'The Truth Without a Clean Conviction',
      location: '{{case.venue.name}} · front hall at dawn',
      contentWarnings: [],
      terminalStatus: 'completed',
      ending: {
        outcome: 'victory',
        cause: 'The correct truth was established, but evidentiary weakness prevented an immediate airtight prosecution.',
        summary: '{{player.name}} identified {{case.culpritName}} correctly, preserved the case from a false accusation, and left prosecutors a difficult investigation rather than a finished conviction.',
      },
      prose: [
        { id: 'truth.1', text: 'The prosecutor agreed with the conclusion and refused the arrest. That distinction hurt because it was honest.' },
        { id: 'truth.2', text: 'The evidence placed {{case.culpritName}} at the center of the death, but one contaminated trace or missing pillar gave the defense room to survive the morning. The suspect remained under surveillance while warrants were prepared beyond the estate.' },
        { id: 'truth.3', text: '{{case.partner.firstName}} closed the case file without pretending it was finished. “We found the truth,” she said. “Now we do the slower work of making it admissible.”' },
      ],
      onEnter: [{ type: 'objective', id: 'objective.identify-culprit', status: 'completed' }],
      choices: [],
    },
    {
      id: 'ip.mystery.ending.quiet-deal',
      schemaVersion: 2,
      sceneType: 'ending',
      act: 3,
      chapter: 7,
      kicker: 'COMPROMISED VICTORY',
      title: 'The Quiet Deal',
      location: '{{case.venue.name}} · private archive',
      contentWarnings: ['manipulation'],
      terminalStatus: 'completed',
      ending: {
        outcome: 'victory',
        cause: 'The culprit surrendered, but the first public account concealed wider institutional wrongdoing.',
        summary: '{{player.name}} secured {{case.culpritName}} and solved the murder while accepting a silence that would remain inside the relationship with {{case.partner.name}}.',
      },
      prose: [
        { id: 'deal.1', text: '{{case.culpritName}} accepted the offer because surrender had become safer than public exposure of every connected secret. The admission was sufficient. The first report was narrower than the truth.' },
        { id: 'deal.2', text: 'The murder was solved. The institution survived the morning. Several people who had enabled the victim’s private machinery kept their names out of print.' },
        { id: 'deal.3', text: '{{case.partner.firstName}} signed the custody form and did not argue in front of the deputies. Her restraint was not agreement. Whatever might grow between you later would have to grow around the knowledge that you had chosen which truth the public was allowed to keep.' },
      ],
      onEnter: [{ type: 'objective', id: 'objective.identify-culprit', status: 'completed' }],
      choices: [],
    },
    {
      id: 'ip.mystery.ending.wrong-accusation',
      schemaVersion: 2,
      sceneType: 'ending',
      act: 3,
      chapter: 7,
      kicker: 'FAILURE ENDING',
      title: 'The Wrong Person in Handcuffs',
      location: '{{case.venue.name}} · front steps',
      contentWarnings: ['false-accusation'],
      terminalStatus: 'failed',
      ending: {
        outcome: 'failure',
        cause: 'An innocent suspect was publicly accused while the locked culprit remained free.',
        summary: '{{player.name}} allowed a real but unrelated secret to replace the murder evidence, giving the true culprit time to leave {{case.venue.name}} behind the confusion.',
      },
      prose: [
        { id: 'wrong-ending.1', text: 'The arrest lasted forty-three minutes. The first laboratory confirmation destroyed the theory before the patrol car reached the county line.' },
        { id: 'wrong-ending.2', text: 'By then, {{case.culpritName}} had used the evacuation traffic to leave the estate. The method, motive, and timeline had never changed. Your accusation had merely pointed every available pair of eyes away from them.' },
        { id: 'wrong-ending.3', text: '{{case.partner.firstName}} filed the correction herself. She included your warnings, your evidence, and the exact place where your reasoning abandoned both.' },
      ],
      onEnter: [{ type: 'objective', id: 'objective.identify-culprit', status: 'failed' }],
      choices: [],
    },
    {
      id: 'ip.mystery.ending.culprit-escapes',
      schemaVersion: 2,
      sceneType: 'ending',
      act: 3,
      chapter: 7,
      kicker: 'FAILURE ENDING',
      title: 'Dawn Opens the Gate',
      location: '{{case.venue.name}} · service drive',
      contentWarnings: [],
      terminalStatus: 'failed',
      ending: {
        outcome: 'failure',
        cause: 'The investigative deadline expired without enough evidence to hold the culprit.',
        summary: '{{case.culpritName}} left with the other released guests because the case had not established a defensible cause, access route, timeline, and motive before dawn.',
      },
      prose: [
        { id: 'escape.1', text: 'The prosecutor could not keep four people confined because one of them was guilty. She released them in order, under observation, with instructions that sounded serious and were not a locked door.' },
        { id: 'escape.2', text: '{{case.culpritName}} crossed the service drive carrying the same private truth that had existed all night. The snowplow opened the road. The case closed around the space where proof should have been.' },
      ],
      onEnter: [{ type: 'objective', id: 'objective.identify-culprit', status: 'failed' }],
      choices: [],
    },
    {
      id: 'ip.mystery.ending.evidence-ruined',
      schemaVersion: 2,
      sceneType: 'ending',
      act: 3,
      chapter: 7,
      kicker: 'FAILURE ENDING',
      title: 'A True Theory Nobody Can Use',
      location: '{{case.venue.name}} · evidence room',
      contentWarnings: [],
      terminalStatus: 'failed',
      ending: {
        outcome: 'failure',
        cause: 'Evidence contamination and procedural shortcuts made the correct theory unusable.',
        summary: '{{player.name}} reached the truth but damaged the chain required to prove it, allowing {{case.culpritName}} to survive the accusation through reasonable doubt.',
      },
      prose: [
        { id: 'ruined.1', text: 'The theory was right. The defense objections were also right.' },
        { id: 'ruined.2', text: 'The trace had been handled without control, the witness had heard too much from other guests, and the leaked photograph had shaped memories before they were sealed. Every fact pointed toward {{case.culpritName}}. Too few of those facts could enter a courtroom unchanged.' },
        { id: 'ruined.3', text: '{{case.partner.firstName}} stared at the evidence log as if it were a map of avoidable injuries. “Truth isn’t self-authenticating,” she said. “We were supposed to carry it there.”' },
      ],
      onEnter: [{ type: 'objective', id: 'objective.identify-culprit', status: 'failed' }],
      choices: [],
    },
    {
      id: 'ip.mystery.ending.partner-walks',
      schemaVersion: 2,
      sceneType: 'ending',
      act: 3,
      chapter: 7,
      kicker: 'FAILURE ENDING',
      title: 'The Investigator Who Will Not Help You Cheat',
      location: '{{case.venue.name}} · central gallery',
      contentWarnings: ['coercion'],
      terminalStatus: 'failed',
      ending: {
        outcome: 'failure',
        cause: 'Coercion replaced evidence, and the investigative partnership broke before the truth could be secured.',
        summary: '{{case.partner.name}} refused to support an accusation built through intimidation, leaving {{player.name}} without the legal or moral authority to finish the case.',
      },
      prose: [
        { id: 'walks.1', text: '{{case.partner.firstName}} removed her case badge from the table and put it back in her coat. “I asked you to prove a murder,” she said. “I did not ask you to manufacture a confession from the nearest frightened person.”' },
        { id: 'walks.2', text: 'She ended the interview, notified the prosecutor, and placed the remaining evidence beyond your control. The true culprit survived the night behind the confusion you had created.' },
      ],
      onEnter: [{ type: 'objective', id: 'objective.identify-culprit', status: 'failed' }],
      choices: [],
    },
    {
      id: 'ip.mystery.ending.witness-killed',
      schemaVersion: 2,
      sceneType: 'ending',
      act: 2,
      chapter: 5,
      kicker: 'FAILURE ENDING',
      title: 'The Witness Returned to the Hall',
      location: '{{case.venue.name}} · west gallery',
      contentWarnings: ['character-death', 'violence'],
      terminalStatus: 'failed',
      ending: {
        outcome: 'failure',
        cause: 'An intimidated essential witness was knowingly returned to an unguarded area.',
        summary: '{{case.witness.name}} was killed before she could identify the person who threatened her, destroying the clearest route to the culprit and turning procedural impatience into a second death.',
      },
      prose: [
        { id: 'witness-ending.1', text: 'The lights failed for less than a minute. When they returned, {{case.witness.name}} lay behind the west-gallery curtains with the emergency key still clenched in one hand.' },
        { id: 'witness-ending.2', text: 'The killer had not gained a new power. You had removed the protection from a frightened witness after being shown that somebody inside the house was actively shaping testimony.' },
        { id: 'witness-ending.3', text: '{{case.partner.firstName}} did not shout. She knelt beside the body, called the second death, and then told the deputy to remove you from the active investigation.' },
      ],
      onEnter: [
        { type: 'objective', id: 'objective.protect-witness', status: 'failed' },
        { type: 'objective', id: 'objective.identify-culprit', status: 'failed' },
      ],
      choices: [],
    },
  ];

  const MYSTERY_FOUNDATION_CONTENT = Object.freeze({
    schemaVersion: 2,
    id: 'ip.original.mystery-foundation.case',
    contentPackId: 'ip.original.mystery-foundation',
    contentPackVersions: Object.freeze(['0.1.0']),
    genre: 'mystery',
    narrativeVersion: MYSTERY_FOUNDATION_NARRATIVE_VERSION,
    startSceneId: MYSTERY_FOUNDATION_START_SCENE,
    scenes: Object.freeze(scenes.map((scene) => Object.freeze(scene))),
  });

  return {
    ACCUSATION_CHOICES,
    MYSTERY_FOUNDATION_CONTENT,
    MYSTERY_FOUNDATION_NARRATIVE_VERSION,
    MYSTERY_FOUNDATION_START_SCENE,
  };
});

/* ===== src/js/core/narrative-engine.js ===== */
(function (root, factory) {
  const namespace = (root.InfinitePaths = root.InfinitePaths || {});
  const exported = factory(namespace);
  Object.assign(namespace, exported);
  if (typeof module !== 'undefined' && module.exports) module.exports = exported;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (IP) {
  'use strict';

  const SCENE_TYPES = new Set(['narrative', 'checkpoint', 'ending']);
  const RELATIONSHIP_METRICS = Object.freeze([
    'friendship',
    'attraction',
    'trust',
    'admiration',
    'comfort',
    'respect',
    'resentment',
    'fear',
    'jealousy',
    'dependence',
    'protectiveness',
    'suspicion',
    'loyalty',
    'emotionalIntimacy',
    'physicalAttraction',
    'ideologicalAlignment',
    'perceivedReliability',
    'unresolvedConflict',
    'grief',
  ]);

  const DIFFICULTY_RULES = Object.freeze(
    Object.fromEntries(
      Object.entries(IP.DIFFICULTY_PROFILES).map(([id, profile]) => [id, Object.freeze({
        label: profile.name,
        initialThreatPressure: profile.startingThreatPressure,
        initialEvacuationReadiness: profile.startingEvacuationReadiness,
        pressurePerTimeSegment: profile.pressurePerTimeSegment,
        sharedTrustThreshold: profile.sharedTrustThreshold,
        cleanPressureLimit: profile.cleanPressureLimit,
        fullRescuePressureLimit: profile.fullRescuePressureLimit,
        fullRescueReadinessMinimum: profile.fullRescueReadinessMinimum,
        witnessRiskThreshold: profile.witnessRiskThreshold,
      })]),
    ),
  );

  const MYSTERY_DIFFICULTY_RULES = Object.freeze(
    Object.fromEntries(
      Object.entries(IP.MYSTERY_DIFFICULTY_PROFILES).map(([id, profile]) => [id, Object.freeze({
        label: profile.name,
        initialThreatPressure: 0,
        initialEvacuationReadiness: 0,
        pressurePerTimeSegment: 0,
        startingCaseStrength: profile.startingCaseStrength,
        startingEvidenceIntegrity: profile.startingEvidenceIntegrity,
        startingPublicConfidence: profile.startingPublicConfidence,
        startingTimeRemaining: profile.startingTimeRemaining,
        accusationStrengthMinimum: profile.accusationStrengthMinimum,
        airtightStrengthMinimum: profile.airtightStrengthMinimum,
        airtightIntegrityMinimum: profile.airtightIntegrityMinimum,
        confessionTrustMinimum: profile.confessionTrustMinimum,
      })]),
    ),
  );

  const OBJECTIVE_STATUSES = Object.freeze(['locked', 'active', 'completed', 'failed']);
  const COMPANION_STATUSES = Object.freeze(['active', 'safe', 'missing', 'injured', 'dead', 'departed']);

  const OPENING_RESPONDERS = Object.freeze([
    Object.freeze({ id: 'npc.opening_responder', name: 'June Mercer', firstName: 'June', role: 'volunteer search coordinator', temperament: 'measured', instinct: 'methodical' }),
    Object.freeze({ id: 'npc.opening_responder', name: 'Naomi Cross', firstName: 'Naomi', role: 'volunteer search coordinator', temperament: 'guarded', instinct: 'protective' }),
    Object.freeze({ id: 'npc.opening_responder', name: 'Claire Danner', firstName: 'Claire', role: 'volunteer search coordinator', temperament: 'blunt', instinct: 'defiant' }),
    Object.freeze({ id: 'npc.opening_responder', name: 'Rebecca Holt', firstName: 'Rebecca', role: 'volunteer search coordinator', temperament: 'wry', instinct: 'pragmatic' }),
  ]);

  const SUPPORTING_DEPUTIES = Object.freeze([
    Object.freeze({ id: 'npc.missing_deputy', name: 'Elias Boone', firstName: 'Elias', role: 'county deputy', temperament: 'dutiful' }),
    Object.freeze({ id: 'npc.missing_deputy', name: 'Marcus Bell', firstName: 'Marcus', role: 'county deputy', temperament: 'skeptical' }),
    Object.freeze({ id: 'npc.missing_deputy', name: 'Jonah Price', firstName: 'Jonah', role: 'county deputy', temperament: 'quiet' }),
    Object.freeze({ id: 'npc.missing_deputy', name: 'Caleb Ward', firstName: 'Caleb', role: 'county deputy', temperament: 'stubborn' }),
  ]);

  const SHELTER_LEADS = Object.freeze([
    Object.freeze({ id: 'npc.shelter_lead', name: 'Ruth Calder', firstName: 'Ruth', role: 'retired dispatcher', temperament: 'precise' }),
    Object.freeze({ id: 'npc.shelter_lead', name: 'Helen Voss', firstName: 'Helen', role: 'school nurse', temperament: 'steady' }),
    Object.freeze({ id: 'npc.shelter_lead', name: 'Miriam Cole', firstName: 'Miriam', role: 'church administrator', temperament: 'unyielding' }),
    Object.freeze({ id: 'npc.shelter_lead', name: 'Diane Mercer', firstName: 'Diane', role: 'retired dispatcher', temperament: 'dry' }),
  ]);

  const STANDARD_COMPLICATIONS = Object.freeze([
    Object.freeze({ id: 'blackout', label: 'the county-wide blackout' }),
    Object.freeze({ id: 'false-evacuation', label: 'the false evacuation order' }),
    Object.freeze({ id: 'missing-deputy', label: 'the missing deputy call' }),
  ]);

  const WEATHER_DETAILS = Object.freeze([
    'cold rain drifting from the north',
    'low fog gathering between the pines',
    'a windless dusk under a bruised sky',
    'thin rain ticking against dead leaves',
  ]);

  const BACKGROUND_RESOURCE_LABELS = Object.freeze({
    flare: 'road flare',
    traumaKit: 'trauma kit',
    recorder: 'digital recorder',
    toolRoll: 'tool roll',
    evidenceKit: 'evidence kit',
    caseNotebook: 'case notebook',
    auditPacket: 'forensic audit packet',
  });

  const MYSTERY_METRIC_LIMITS = Object.freeze({
    caseStrength: Object.freeze({ minimum: 0, maximum: 100 }),
    evidenceIntegrity: Object.freeze({ minimum: 0, maximum: 100 }),
    publicConfidence: Object.freeze({ minimum: 0, maximum: 100 }),
    timeRemaining: Object.freeze({ minimum: 0, maximum: 24 }),
    leadsCompleted: Object.freeze({ minimum: 0, maximum: 99 }),
    verifiedClues: Object.freeze({ minimum: 0, maximum: 99 }),
  });

  const SUSPECT_STATUSES = Object.freeze([
    'unexamined',
    'cooperative',
    'guarded',
    'hostile',
    'accused',
    'cleared',
    'under-review',
  ]);

  function cloneData(value) {
    return IP.cloneData(value);
  }

  function assert(condition, message, ErrorType = TypeError) {
    if (!condition) throw new ErrorType(message);
  }

  function isObject(value) {
    return IP.isPlainObject(value);
  }

  function sceneIndex(content) {
    return new Map(content.scenes.map((scene) => [scene.id, scene]));
  }

  function listInstalledNarrativeContent() {
    return [IP.HORROR_FOUNDATION_CONTENT, IP.MYSTERY_FOUNDATION_CONTENT, ...(IP.listRuntimeNarrativeContent?.() || [])]
      .filter((content) => content && typeof content === 'object');
  }

  function getNarrativeContentForCampaign(campaign) {
    if (!campaign?.contentPack?.id) {
      throw new RangeError('No installed narrative library matches this campaign content pack.');
    }
    const content = listInstalledNarrativeContent().find((candidate) =>
      candidate.contentPackId === campaign.contentPack.id
      && candidate.contentPackVersions.includes(campaign.contentPack.version));
    if (!content) {
      throw new RangeError(
        `Narrative content for ${campaign.contentPack.id}@${campaign.contentPack.version} is not installed.`,
      );
    }
    return content;
  }

  function getPath(source, path) {
    const parts = String(path || '').split('.').filter(Boolean);
    let cursor = source;
    for (const part of parts) {
      if (cursor === null || cursor === undefined) return undefined;
      cursor = cursor[part];
    }
    return cursor;
  }

  function difficultyRules(campaign) {
    if (campaign?.genre === 'mystery') {
      const profile = IP.MYSTERY_DIFFICULTY_PROFILES?.[campaign.difficulty]
        || IP.MYSTERY_DIFFICULTY_PROFILES?.standard;
      if (!profile) throw new RangeError('Mystery difficulty rules are unavailable.');
      return {
        ...cloneData(profile),
        label: profile.name,
        initialThreatPressure: 0,
        initialEvacuationReadiness: 0,
        pressurePerTimeSegment: 0,
        sharedTrustThreshold: profile.confessionTrustMinimum,
      };
    }
    return DIFFICULTY_RULES[campaign?.difficulty] || DIFFICULTY_RULES.standard;
  }

  function descriptorNumber(descriptor, key, context) {
    if (descriptor[key] !== undefined) return Number(descriptor[key]);
    const ruleKey = descriptor[`${key}Rule`];
    if (ruleKey !== undefined) {
      const value = context?.payload?.worldState?.narrative?.difficultyRules?.[ruleKey];
      if (!Number.isFinite(Number(value))) {
        throw new RangeError(`Narrative condition references an unknown difficulty rule: ${ruleKey}`);
      }
      return Number(value);
    }
    return undefined;
  }

  function compareNumeric(actual, descriptor, context = null) {
    const comparisons = Object.fromEntries(
      ['gte', 'lte', 'gt', 'lt'].map((key) => [key, descriptorNumber(descriptor, key, context)]),
    );
    const usesNumericComparison = Object.values(comparisons).some((value) => value !== undefined);
    if (!usesNumericComparison) return true;
    const value = Number(actual);
    if (!Number.isFinite(value)) return false;
    if (comparisons.gte !== undefined && value < comparisons.gte) return false;
    if (comparisons.lte !== undefined && value > comparisons.lte) return false;
    if (comparisons.gt !== undefined && value <= comparisons.gt) return false;
    if (comparisons.lt !== undefined && value >= comparisons.lt) return false;
    return true;
  }

  function buildCast(campaign) {
    if (isObject(campaign?.world?.cast) && isObject(campaign.world.cast.responder)) {
      return cloneData(campaign.world.cast);
    }
    if (campaign?.genre === 'mystery' && isObject(campaign.world?.case)) {
      const caseFile = campaign.world.case;
      return {
        partner: cloneData(caseFile.partner),
        witness: cloneData(caseFile.witness),
        victim: cloneData(caseFile.victim),
        ...cloneData(caseFile.suspects || {}),
      };
    }
    const seed = `${campaign.contentPack.id}@${campaign.contentPack.version}::${campaign.seed}`;
    const openingGenerator = new IP.SeededRandom(seed).derive('narrative.opening.cast');
    const responder = cloneData(openingGenerator.pick(OPENING_RESPONDERS));
    const weather = openingGenerator.pick(WEATHER_DETAILS);
    const deputy = cloneData(new IP.SeededRandom(seed).derive('narrative.cast.deputy').pick(SUPPORTING_DEPUTIES));
    const shelterLead = cloneData(new IP.SeededRandom(seed).derive('narrative.cast.shelter-lead').pick(SHELTER_LEADS));
    const complication = cloneData(new IP.SeededRandom(seed).derive('narrative.standard.complication').pick(STANDARD_COMPLICATIONS));
    return { responder, deputy, shelterLead, complication, weather };
  }

  const LEGACY_MYSTERIES = Object.freeze([
    Object.freeze({
      id: 'failed-containment',
      title: 'The Staged Disappearance',
      truth: 'The first disappearance was staged to conceal a failed containment operation.',
      correctTheoryId: 'theory.failed-containment',
      keyClue: Object.freeze({
        id: 'clue.mystery.failed-containment',
        name: 'The altered first-incident file',
        summary: 'The first victim signed an evacuation receipt six hours after the county recorded his disappearance, proving the public timeline was manufactured.',
      }),
    }),
    Object.freeze({
      id: 'living-transmission',
      title: 'The Voice Still Broadcasting',
      truth: 'The emergency broadcast repeats because someone is still transmitting from inside the exclusion zone.',
      correctTheoryId: 'theory.living-transmission',
      keyClue: Object.freeze({
        id: 'clue.mystery.living-transmission',
        name: 'The unscheduled carrier pulse',
        summary: 'Every false evacuation order contains a live carrier pulse from the sealed transmitter annex rather than a historical recording.',
      }),
    }),
    Object.freeze({
      id: 'erased-settlement',
      title: 'The Town Removed from the Map',
      truth: 'The county map omits a settlement whose residents were never officially declared dead.',
      correctTheoryId: 'theory.erased-settlement',
      keyClue: Object.freeze({
        id: 'clue.mystery.erased-settlement',
        name: 'The missing municipal tax roll',
        summary: 'Property taxes continued to be collected for an unmarked settlement nine years after its supposed evacuation.',
      }),
    }),
    Object.freeze({
      id: 'crime-awakened-threat',
      title: 'The Crime Beneath the Haunting',
      truth: 'The apparent haunting began as a human crime, but the cover-up awakened something real.',
      correctTheoryId: 'theory.crime-awakened-threat',
      keyClue: Object.freeze({
        id: 'clue.mystery.crime-awakened-threat',
        name: 'The restraint photographs',
        summary: 'The earliest injuries were caused by human restraints; the impossible phenomena began only after officials buried the victim and falsified the report.',
      }),
    }),
  ]);

  function resolveCampaignMystery(campaign) {
    if (campaign?.genre === 'mystery' && isObject(campaign?.world?.case)) {
      const caseRecord = campaign.world.case;
      return {
        id: caseRecord.id,
        title: caseRecord.title,
        truth: campaign.world.hiddenTruth,
        correctTheoryId: caseRecord.correctAccusationId,
        correctAccusationId: caseRecord.correctAccusationId,
        culpritId: caseRecord.culpritId,
        keyClue: cloneData(caseRecord.evidence?.cause || null),
      };
    }
    if (isObject(campaign?.world?.mystery)) return cloneData(campaign.world.mystery);
    const hiddenTruth = String(campaign?.world?.hiddenTruth || '');
    const match = LEGACY_MYSTERIES.find((mystery) => mystery.truth === hiddenTruth);
    if (match) return cloneData(match);
    return {
      id: 'unclassified-legacy-truth',
      title: 'The Buried County Record',
      truth: hiddenTruth || 'The county concealed the origin of the current recurrence cycle.',
      correctTheoryId: 'theory.failed-containment',
      keyClue: {
        id: 'clue.mystery.legacy-record',
        name: 'The contradictory county record',
        summary: 'The oldest surviving record contradicts the official incident chronology and proves that the public account was manufactured.',
      },
    };
  }

  function backgroundResourceId(campaign) {
    return `background.${campaign.protagonist.background.resource}`;
  }

  function backgroundResourceLabel(campaign) {
    const resource = campaign.protagonist.background.resource;
    return BACKGROUND_RESOURCE_LABELS[resource] || String(resource || 'background gear');
  }

  function buildTemplateContext(campaign, payload) {
    const narrative = payload.worldState?.narrative || {};
    const cast = narrative.cast || buildCast(campaign);
    const threat = campaign.world.antagonist;
    const mystery = resolveCampaignMystery(campaign);
    return {
      campaign,
      payload,
      world: {
        ...campaign.world,
        majorSite1: campaign.world.geography?.majorSites?.[0] || 'the northern exclusion zone',
      },
      mystery,
      case: campaign.world.case || null,
      metrics: payload.worldState?.genreState?.metrics || {},
      threat: {
        ...threat,
        capability: threat.capabilities?.[0] || '',
        limitation: threat.limitations?.[0] || '',
      },
      player: {
        ...campaign.protagonist,
        backgroundName: campaign.protagonist.background?.name || 'traveler',
        backgroundResourceLabel: backgroundResourceLabel(campaign),
      },
      cast,
      state: payload.worldState,
      narrative,
    };
  }

  function interpolateText(text, context) {
    return String(text ?? '').replace(/\{\{\s*([A-Za-z0-9_.-]+)\s*\}\}/g, (_match, path) => {
      const value = getPath(context, path);
      if (value === undefined || value === null) {
        throw new RangeError(`Narrative template references unavailable value: ${path}`);
      }
      if (typeof value === 'object') {
        throw new TypeError(`Narrative template value must be scalar: ${path}`);
      }
      return String(value);
    });
  }

  function interpolateValue(value, context) {
    if (typeof value === 'string') return interpolateText(value, context);
    if (Array.isArray(value)) return value.map((item) => interpolateValue(item, context));
    if (isObject(value)) {
      return Object.fromEntries(
        Object.entries(value).map(([key, item]) => [key, interpolateValue(item, context)]),
      );
    }
    return value;
  }

  function hasItem(payload, id) {
    return payload.inventory.some((item) => item?.id === id && Number(item.quantity || 0) > 0);
  }

  function hasClue(payload, id) {
    return payload.clues.some((clue) => clue?.id === id);
  }

  function hasInjury(payload, id) {
    return payload.injuries.some((injury) => injury?.id === id);
  }

  function evaluateRelationshipCondition(descriptor, context) {
    if (!isObject(descriptor)) return false;
    const relationship = context.payload.relationships?.[descriptor.npcId] || {};
    const actual = Number(relationship[descriptor.metric] || 0);
    if (descriptor.equals !== undefined && actual !== Number(descriptor.equals)) return false;
    if (descriptor.notEquals !== undefined && actual === Number(descriptor.notEquals)) return false;
    return compareNumeric(actual, descriptor, context);
  }

  function evaluateCondition(condition, context) {
    if (condition === undefined || condition === null) return true;
    if (condition === true || condition === false) return condition;
    if (!isObject(condition)) throw new TypeError('Narrative condition must be a plain object.');
    if (Array.isArray(condition.all)) return condition.all.every((entry) => evaluateCondition(entry, context));
    if (Array.isArray(condition.any)) return condition.any.some((entry) => evaluateCondition(entry, context));
    if (condition.not !== undefined) return !evaluateCondition(condition.not, context);
    if (condition.hasItem !== undefined) return hasItem(context.payload, condition.hasItem);
    if (condition.hasClue !== undefined) return hasClue(context.payload, condition.hasClue);
    if (condition.hasInjury !== undefined) return hasInjury(context.payload, condition.hasInjury);
    if (condition.hasAnyInjury !== undefined) {
      const actual = context.payload.injuries.length > 0;
      return actual === Boolean(condition.hasAnyInjury);
    }
    if (condition.hasItemFromBackground !== undefined) {
      const actual = hasItem(context.payload, backgroundResourceId(context.campaign));
      return actual === Boolean(condition.hasItemFromBackground);
    }
    if (Array.isArray(condition.difficultyIn)) {
      return condition.difficultyIn.includes(context.campaign.difficulty);
    }
    if (Array.isArray(condition.lengthIn)) {
      return condition.lengthIn.includes(context.campaign.length);
    }
    if (condition.objective !== undefined) {
      const objective = context.payload.worldState.objectives?.[condition.objective.id];
      if (!objective) return false;
      if (condition.objective.status !== undefined && objective.status !== condition.objective.status) return false;
      return true;
    }
    if (condition.companion !== undefined) {
      const companion = context.payload.worldState.companions?.[condition.companion.npcId];
      if (!companion) return false;
      if (condition.companion.status !== undefined && companion.status !== condition.companion.status) return false;
      return true;
    }
    if (condition.relationship !== undefined) {
      return evaluateRelationshipCondition(condition.relationship, context);
    }
    if (condition.path) {
      const actual = getPath(context, condition.path);
      if (condition.equals !== undefined && actual !== condition.equals) return false;
      if (condition.notEquals !== undefined && actual === condition.notEquals) return false;
      if (condition.exists !== undefined) {
        const exists = actual !== undefined && actual !== null;
        if (exists !== Boolean(condition.exists)) return false;
      }
      if (condition.truthy !== undefined && Boolean(actual) !== Boolean(condition.truthy)) return false;
      if (condition.includes !== undefined) {
        if (Array.isArray(actual)) {
          if (!actual.includes(condition.includes)) return false;
        } else if (typeof actual === 'string') {
          if (!actual.includes(String(condition.includes))) return false;
        } else {
          return false;
        }
      }
      if (!compareNumeric(actual, condition, context)) return false;
      return true;
    }
    throw new RangeError(`Unsupported narrative condition: ${JSON.stringify(condition)}`);
  }

  function emptyRelationship(existing = null) {
    const record = {};
    for (const metric of RELATIONSHIP_METRICS) record[metric] = Number(existing?.[metric] || 0);
    return record;
  }

  function mergeCast(campaign, existingCast) {
    const generated = buildCast(campaign);
    const source = isObject(existingCast) ? existingCast : {};
    const result = {};
    for (const key of new Set([...Object.keys(generated), ...Object.keys(source)])) {
      const generatedValue = generated[key];
      const sourceValue = source[key];
      result[key] = isObject(generatedValue) || isObject(sourceValue)
        ? { ...(isObject(generatedValue) ? cloneData(generatedValue) : {}), ...(isObject(sourceValue) ? cloneData(sourceValue) : {}) }
        : sourceValue ?? generatedValue;
    }
    return result;
  }

  function defaultHorrorObjectives(campaign, payload) {
    const flags = payload.worldState.flags;
    const ending = payload.endingEligibility?.currentEnding || null;
    const completedCampaign = payload.status === 'completed';
    const failedCampaign = payload.status === 'failed';
    const result = {
      'objective.learn-rule': {
        id: 'objective.learn-rule',
        title: 'Understand the threat’s rule',
        detail: 'Find a repeatable capability and limitation before relying on either.',
        optional: false,
        status: hasClue(payload, 'clue.threat-rule') ? 'completed' : 'active',
      },
      'objective.protect-witness': {
        id: 'objective.protect-witness',
        title: 'Protect an essential witness',
        detail: 'Keep at least one person alive who can establish what happened in the county.',
        optional: false,
        status: flags.witnessProtected
          ? 'completed'
          : flags.witnessLost || failedCampaign
            ? 'failed'
            : 'active',
      },
      'objective.uncover-truth': {
        id: 'objective.uncover-truth',
        title: 'Uncover the hidden truth',
        detail: 'Connect the county records, the recurrence cycle, and the containment system.',
        optional: false,
        status: flags.hiddenTruthResolved ? 'completed' : 'active',
      },
      'objective.break-cycle': {
        id: 'objective.break-cycle',
        title: 'End the recurrence cycle',
        detail: 'Contain or destroy the immediate threat without rewriting its established rules.',
        optional: false,
        status: completedCampaign
          ? 'completed'
          : failedCampaign
            ? 'failed'
            : flags.openingChapterComplete
              ? 'active'
              : 'locked',
      },
    };
    if (campaign.length === 'standard') {
      result['objective.resolve-deputy'] = {
        id: 'objective.resolve-deputy',
        title: 'Resolve the missing deputy’s fate',
        detail: 'Find out whether the abandoned emergency vehicle’s driver can still be brought home.',
        optional: true,
        status: flags.deputyRescued
          ? 'completed'
          : flags.deputyLost
            ? 'failed'
            : 'active',
      };
    }
    if (ending?.outcome === 'failure') result['objective.break-cycle'].status = 'failed';
    return result;
  }

  function defaultMysteryObjectives(campaign, payload) {
    const flags = payload.worldState.flags;
    const completedCampaign = payload.status === 'completed';
    const failedCampaign = payload.status === 'failed';
    const metrics = payload.worldState.genreState?.metrics || {};
    const result = {
      'objective.preserve-scene': {
        id: 'objective.preserve-scene',
        title: 'Preserve the death scene',
        detail: 'Protect the room, the body, and the evidence chain from avoidable contamination.',
        optional: false,
        status: flags.openingComplete
          ? Number(metrics.evidenceIntegrity || 0) >= 55 ? 'completed' : 'failed'
          : failedCampaign ? 'failed' : 'active',
      },
      'objective.establish-cause': {
        id: 'objective.establish-cause',
        title: 'Establish the cause and method',
        detail: 'Find physical evidence that explains how the victim was killed.',
        optional: false,
        status: flags.leadCauseComplete || hasClue(payload, 'clue.case.cause')
          ? 'completed'
          : failedCampaign ? 'failed' : 'active',
      },
      'objective.test-alibis': {
        id: 'objective.test-alibis',
        title: 'Test the suspect timeline',
        detail: 'Compare testimony against access records, movement, and the permanently locked chronology.',
        optional: false,
        status: flags.leadTimelineComplete || hasClue(payload, 'clue.case.timeline')
          ? 'completed'
          : failedCampaign ? 'failed' : 'active',
      },
      'objective.find-motive': {
        id: 'objective.find-motive',
        title: 'Find a supported motive',
        detail: 'Separate private embarrassment from the motive that actually explains the murder.',
        optional: false,
        status: flags.leadMotiveComplete || hasClue(payload, 'clue.case.motive')
          ? 'completed'
          : failedCampaign ? 'failed' : 'active',
      },
      'objective.identify-culprit': {
        id: 'objective.identify-culprit',
        title: 'Identify the culprit',
        detail: 'Name the locked culprit without changing the facts to fit the accusation.',
        optional: false,
        status: flags.accusationCorrect || flags.culpritRevealed
          ? 'completed'
          : failedCampaign ? 'failed' : 'active',
      },
    };
    if (campaign.length === 'standard') {
      result['objective.protect-witness'] = {
        id: 'objective.protect-witness',
        title: 'Protect the essential witness',
        detail: 'Keep the witness alive and available after the seeded complication begins.',
        optional: true,
        status: flags.witnessProtected
          ? 'completed'
          : flags.witnessLost || completedCampaign ? 'failed' : 'active',
      };
    }
    return result;
  }

  function defaultObjectives(campaign, payload) {
    return campaign.genre === 'mystery'
      ? defaultMysteryObjectives(campaign, payload)
      : defaultHorrorObjectives(campaign, payload);
  }

  function ensureNarrativeState(campaign, payload, now = () => new Date().toISOString()) {
    const content = getNarrativeContentForCampaign(campaign);
    const next = cloneData(payload);
    const rules = difficultyRules(campaign);
    next.player = isObject(next.player) ? next.player : { protagonist: cloneData(campaign.protagonist) };
    next.player.protagonist = next.player.protagonist || cloneData(campaign.protagonist);
    next.player.health = Number.isFinite(Number(next.player.health)) ? Number(next.player.health) : 100;
    next.player.morale = Number.isFinite(Number(next.player.morale)) ? Number(next.player.morale) : 100;
    next.player.currentLocation = next.player.currentLocation || campaign.world.settlement;
    next.worldState = isObject(next.worldState) ? next.worldState : {};
    next.worldState.flags = isObject(next.worldState.flags) ? next.worldState.flags : {};
    next.worldState.phase = next.worldState.phase || 'preplay';
    next.worldState.currentLocation = next.worldState.currentLocation || next.player.currentLocation;
    next.worldState.timeSegment = Number.isInteger(next.worldState.timeSegment)
      ? next.worldState.timeSegment
      : 0;
    next.worldState.threatPressure = Number.isFinite(Number(next.worldState.threatPressure))
      ? clamp(Number(next.worldState.threatPressure), 0, 100)
      : rules.initialThreatPressure;
    next.worldState.evacuationReadiness = Number.isFinite(Number(next.worldState.evacuationReadiness))
      ? clamp(Number(next.worldState.evacuationReadiness), 0, 100)
      : rules.initialEvacuationReadiness;
    if (campaign.genre === 'mystery') {
      next.worldState.genreState = isObject(next.worldState.genreState) ? next.worldState.genreState : {};
      next.worldState.genreState.kind = 'mystery';
      next.worldState.genreState.metrics = isObject(next.worldState.genreState.metrics)
        ? next.worldState.genreState.metrics
        : {};
      const metricDefaults = {
        caseStrength: rules.startingCaseStrength,
        evidenceIntegrity: rules.startingEvidenceIntegrity,
        publicConfidence: rules.startingPublicConfidence,
        timeRemaining: rules.startingTimeRemaining,
        leadsCompleted: 0,
        verifiedClues: 0,
      };
      for (const [key, fallback] of Object.entries(metricDefaults)) {
        const current = Number(next.worldState.genreState.metrics[key]);
        const limits = MYSTERY_METRIC_LIMITS[key];
        next.worldState.genreState.metrics[key] = clamp(
          Number.isFinite(current) ? current : Number(fallback || 0),
          limits.minimum,
          limits.maximum,
        );
      }
      next.worldState.genreState.suspects = isObject(next.worldState.genreState.suspects)
        ? next.worldState.genreState.suspects
        : {};
      for (const suspect of Object.values(campaign.world.case?.suspects || {})) {
        const existing = isObject(next.worldState.genreState.suspects[suspect.id])
          ? next.worldState.genreState.suspects[suspect.id]
          : {};
        next.worldState.genreState.suspects[suspect.id] = {
          id: suspect.id,
          name: suspect.name,
          role: suspect.role,
          ...cloneData(existing),
          status: SUSPECT_STATUSES.includes(existing.status) ? existing.status : 'unexamined',
        };
      }
      next.worldState.genreState.accusation = isObject(next.worldState.genreState.accusation)
        ? next.worldState.genreState.accusation
        : { selectedSuspectId: null, correct: null, public: false };
    }
    next.worldState.establishedFactsLocked = true;
    next.inventory = Array.isArray(next.inventory) ? next.inventory : [];
    next.injuries = Array.isArray(next.injuries) ? next.injuries : [];
    next.clues = Array.isArray(next.clues) ? next.clues : [];
    next.relationships = isObject(next.relationships) ? next.relationships : {};
    next.unresolvedConsequences = Array.isArray(next.unresolvedConsequences)
      ? next.unresolvedConsequences
      : [];
    next.eventHistory = Array.isArray(next.eventHistory) ? next.eventHistory : [];
    next.randomStreams = isObject(next.randomStreams) ? next.randomStreams : {};
    next.campaignStatistics = isObject(next.campaignStatistics) ? next.campaignStatistics : {};
    next.campaignStatistics.scenesVisited = Number(next.campaignStatistics.scenesVisited || 0);
    next.campaignStatistics.choicesMade = Number(next.campaignStatistics.choicesMade || 0);
    next.campaignStatistics.manualSavesCreated = Number(next.campaignStatistics.manualSavesCreated || 0);
    next.campaignStatistics.playTimeSeconds = Number(next.campaignStatistics.playTimeSeconds || 0);
    next.campaignStatistics.optionalObjectivesCompleted = Number(next.campaignStatistics.optionalObjectivesCompleted || 0);
    next.campaignStatistics.companionsLost = Number(next.campaignStatistics.companionsLost || 0);
    next.campaignStatistics.witnessesSaved = Number(next.campaignStatistics.witnessesSaved || 0);
    next.campaignStatistics.mysteryDeductionsCorrect = Number(next.campaignStatistics.mysteryDeductionsCorrect || 0);
    next.campaignStatistics.inquiriesCompleted = Number(next.campaignStatistics.inquiriesCompleted || 0);
    next.campaignStatistics.interviewsConducted = Number(next.campaignStatistics.interviewsConducted || 0);
    next.campaignStatistics.accusationsMade = Number(next.campaignStatistics.accusationsMade || 0);
    next.campaignStatistics.evidenceContaminated = Number(next.campaignStatistics.evidenceContaminated || 0);
    next.endingEligibility = isObject(next.endingEligibility) ? next.endingEligibility : {};

    const seed = `${campaign.contentPack.id}@${campaign.contentPack.version}::${campaign.seed}`;
    if (!next.randomStreams.narrativeScenes) {
      next.randomStreams.narrativeScenes = new IP.SeededRandom(seed)
        .derive(`narrative.scenes.${content.narrativeVersion}`)
        .snapshot();
    }

    const existingNarrative = isObject(next.worldState.narrative) ? next.worldState.narrative : {};
    const cast = mergeCast(campaign, existingNarrative.cast);
    const migratedFromVersions = Array.isArray(existingNarrative.migratedFromVersions)
      ? [...new Set(existingNarrative.migratedFromVersions)]
      : [];
    if (existingNarrative.version && existingNarrative.version !== content.narrativeVersion) {
      migratedFromVersions.push(existingNarrative.version);
    }
    next.worldState.narrative = {
      contentId: content.id,
      version: content.narrativeVersion,
      engineRulesVersion: IP.APP_CONFIG.rulesVersion,
      migratedFromVersions: [...new Set(migratedFromVersions)],
      startedAt: existingNarrative.startedAt || null,
      act: Number(existingNarrative.act || 1),
      chapter: Number(existingNarrative.chapter || 1),
      sceneSequence: Number(existingNarrative.sceneSequence || 0),
      currentSceneEnteredAt: existingNarrative.currentSceneEnteredAt || null,
      lastChoiceId: existingNarrative.lastChoiceId || null,
      visitedSceneIds: Array.isArray(existingNarrative.visitedSceneIds)
        ? [...new Set(existingNarrative.visitedSceneIds)]
        : [],
      sceneVisits: isObject(existingNarrative.sceneVisits) ? existingNarrative.sceneVisits : {},
      sceneVariants: isObject(existingNarrative.sceneVariants) ? existingNarrative.sceneVariants : {},
      cast,
      difficultyRules: cloneData(rules),
      initializedAt: existingNarrative.initializedAt || now(),
    };

    next.worldState.companions = isObject(next.worldState.companions)
      ? next.worldState.companions
      : {};
    const companionDefaults = campaign.genre === 'mystery'
      ? [
        { ...cast.partner, status: 'active' },
        {
          ...cast.witness,
          status: next.worldState.flags.witnessLost
            ? 'dead'
            : next.worldState.flags.witnessProtected
              ? 'safe'
              : 'active',
        },
      ]
      : [
        { ...cast.responder, status: 'active' },
        { ...cast.deputy, status: next.worldState.flags.deputyLocated ? 'injured' : 'missing' },
        { ...cast.shelterLead, status: 'active' },
      ];
    for (const person of companionDefaults) {
      const existing = isObject(next.worldState.companions[person.id])
        ? next.worldState.companions[person.id]
        : {};
      next.worldState.companions[person.id] = {
        id: person.id,
        name: person.name,
        role: person.role,
        status: COMPANION_STATUSES.includes(existing.status) ? existing.status : person.status,
        cause: existing.cause || null,
        lastAction: existing.lastAction || null,
      };
      next.relationships[person.id] = emptyRelationship(next.relationships[person.id]);
    }

    const defaults = defaultObjectives(campaign, next);
    const existingObjectives = isObject(next.worldState.objectives) ? next.worldState.objectives : {};
    next.worldState.objectives = {};
    for (const [id, objective] of Object.entries(defaults)) {
      const existing = isObject(existingObjectives[id]) ? existingObjectives[id] : {};
      const status = OBJECTIVE_STATUSES.includes(existing.status) ? existing.status : objective.status;
      next.worldState.objectives[id] = { ...objective, ...cloneData(existing), id, status };
    }
    for (const [id, objective] of Object.entries(existingObjectives)) {
      if (!next.worldState.objectives[id] && isObject(objective)) {
        next.worldState.objectives[id] = cloneData(objective);
      }
    }

    next.currentScene = typeof next.currentScene === 'string' ? next.currentScene : null;
    next.status = next.status || campaign.status;
    return next;
  }

  function addUniqueRecord(collection, value, context) {
    const record = interpolateValue(value, context);
    if (!record?.id) throw new RangeError('Narrative collection records require an ID.');
    const existing = collection.find((item) => item?.id === record.id);
    if (existing) return existing;
    collection.push(record);
    return record;
  }

  function clamp(value, minimum, maximum) {
    return Math.min(maximum, Math.max(minimum, Number(value)));
  }

  function effectAmount(effect, campaign) {
    if (isObject(effect.amountByDifficulty)) {
      const selected = effect.amountByDifficulty[campaign.difficulty];
      if (!Number.isFinite(Number(selected))) {
        throw new RangeError(`Effect lacks a value for difficulty ${campaign.difficulty}.`);
      }
      return Number(selected);
    }
    if (!Number.isFinite(Number(effect.amount))) throw new RangeError('Narrative effect amount is invalid.');
    return Number(effect.amount);
  }

  function adjustRelationship(payload, npcId, values) {
    payload.relationships[npcId] = emptyRelationship(payload.relationships[npcId]);
    for (const [metric, adjustment] of Object.entries(values || {})) {
      if (!RELATIONSHIP_METRICS.includes(metric)) {
        throw new RangeError(`Unsupported relationship metric: ${metric}`);
      }
      payload.relationships[npcId][metric] = clamp(
        Number(payload.relationships[npcId][metric] || 0) + Number(adjustment || 0),
        -100,
        100,
      );
    }
  }

  function addInventory(payload, value, context) {
    const item = interpolateValue(value, context);
    assert(item?.id && item?.name, 'Inventory effects require item ID and name.');
    const quantity = Math.max(1, Number(item.quantity || 1));
    const existing = payload.inventory.find((entry) => entry.id === item.id);
    if (existing) existing.quantity = Number(existing.quantity || 0) + quantity;
    else payload.inventory.push({ ...item, quantity });
  }

  function removeInventory(payload, id, quantity = 1) {
    const index = payload.inventory.findIndex((item) => item.id === id);
    if (index < 0) throw new RangeError(`Required inventory item is unavailable: ${id}`);
    const item = payload.inventory[index];
    item.quantity = Number(item.quantity || 0) - Math.max(1, Number(quantity || 1));
    if (item.quantity <= 0) payload.inventory.splice(index, 1);
  }

  function removeFirstAvailableInventory(payload, ids, quantity = 1) {
    if (!Array.isArray(ids) || ids.length === 0) {
      throw new RangeError('First-available inventory effects require at least one item ID.');
    }
    const id = ids.find((candidate) => payload.inventory.some((item) => item.id === candidate));
    if (!id) throw new RangeError(`None of the required inventory items are available: ${ids.join(', ')}`);
    removeInventory(payload, id, quantity);
    return id;
  }

  function setObjective(payload, effect, context) {
    const id = String(effect.id || '');
    if (!id) throw new RangeError('Objective effects require an ID.');
    const status = String(effect.status || 'active');
    if (!OBJECTIVE_STATUSES.includes(status)) {
      throw new RangeError(`Unsupported objective status: ${status}`);
    }
    const existing = isObject(payload.worldState.objectives[id])
      ? payload.worldState.objectives[id]
      : { id, title: id, detail: '', optional: false, status: 'locked' };
    const transitionedToComplete = existing.status !== 'completed' && status === 'completed';
    payload.worldState.objectives[id] = {
      ...existing,
      id,
      status,
      ...(effect.title !== undefined ? { title: interpolateText(effect.title, context) } : {}),
      ...(effect.detail !== undefined ? { detail: interpolateText(effect.detail, context) } : {}),
      ...(effect.optional !== undefined ? { optional: Boolean(effect.optional) } : {}),
    };
    if (transitionedToComplete && payload.worldState.objectives[id].optional) {
      payload.campaignStatistics.optionalObjectivesCompleted += 1;
    }
  }

  function setCompanionStatus(payload, effect, context) {
    const npcId = interpolateText(effect.npcId, context);
    if (!npcId) throw new RangeError('Companion-status effects require an NPC ID.');
    const status = String(effect.status || 'active');
    if (!COMPANION_STATUSES.includes(status)) {
      throw new RangeError(`Unsupported companion status: ${status}`);
    }
    const castPerson = Object.values(context.cast || {}).find((entry) => entry?.id === npcId) || {};
    const existing = isObject(payload.worldState.companions[npcId])
      ? payload.worldState.companions[npcId]
      : { id: npcId, name: castPerson.name || npcId, role: castPerson.role || 'companion', status: 'active' };
    const transitionedToDead = existing.status !== 'dead' && status === 'dead';
    payload.worldState.companions[npcId] = {
      ...existing,
      status,
      cause: effect.cause !== undefined ? interpolateText(effect.cause, context) : existing.cause || null,
      lastAction: effect.lastAction !== undefined
        ? interpolateText(effect.lastAction, context)
        : existing.lastAction || null,
    };
    if (transitionedToDead) payload.campaignStatistics.companionsLost += 1;
  }

  function applyEffect(effect, campaign, payload) {
    const context = buildTemplateContext(campaign, payload);
    if (effect.when && !evaluateCondition(effect.when, context)) return;
    switch (effect.type) {
      case 'flag':
        payload.worldState.flags[String(effect.key)] = interpolateValue(effect.value, context);
        break;
      case 'time': {
        const amount = effectAmount(effect, campaign);
        payload.worldState.timeSegment = Math.max(0, payload.worldState.timeSegment + amount);
        payload.worldState.threatPressure = clamp(
          payload.worldState.threatPressure + Math.max(0, amount) * difficultyRules(campaign).pressurePerTimeSegment,
          0,
          100,
        );
        break;
      }
      case 'pressure':
        payload.worldState.threatPressure = clamp(
          payload.worldState.threatPressure + effectAmount(effect, campaign),
          0,
          100,
        );
        break;
      case 'readiness':
        payload.worldState.evacuationReadiness = clamp(
          payload.worldState.evacuationReadiness + effectAmount(effect, campaign),
          0,
          100,
        );
        break;
      case 'genreMetric': {
        if (campaign.genre !== 'mystery') {
          throw new RangeError('Genre-metric effects are only valid for Mystery campaigns.');
        }
        const key = String(effect.key || '');
        const limits = MYSTERY_METRIC_LIMITS[key];
        if (!limits) throw new RangeError(`Unsupported Mystery metric: ${key}`);
        payload.worldState.genreState.metrics[key] = clamp(
          Number(payload.worldState.genreState.metrics[key] || 0) + effectAmount(effect, campaign),
          limits.minimum,
          limits.maximum,
        );
        break;
      }
      case 'suspectStatus': {
        if (campaign.genre !== 'mystery') {
          throw new RangeError('Suspect-status effects are only valid for Mystery campaigns.');
        }
        const suspectId = interpolateText(effect.suspectId, context);
        if (!suspectId) throw new RangeError('Suspect-status effects require a suspect ID.');
        const status = String(effect.status || 'under-review');
        if (!SUSPECT_STATUSES.includes(status)) {
          throw new RangeError(`Unsupported suspect status: ${status}`);
        }
        const knownSuspect = Object.values(campaign.world.case?.suspects || {})
          .find((entry) => entry?.id === suspectId) || {};
        const existing = isObject(payload.worldState.genreState.suspects[suspectId])
          ? payload.worldState.genreState.suspects[suspectId]
          : {};
        payload.worldState.genreState.suspects[suspectId] = {
          id: suspectId,
          name: knownSuspect.name || existing.name || suspectId,
          role: knownSuspect.role || existing.role || 'case participant',
          ...existing,
          status,
        };
        if (status === 'accused') {
          payload.worldState.genreState.accusation.selectedSuspectId = suspectId;
          payload.worldState.genreState.accusation.correct = suspectId === campaign.world.case?.culpritId;
          payload.worldState.genreState.accusation.public = true;
        }
        break;
      }
      case 'health':
        payload.player.health = clamp(payload.player.health + effectAmount(effect, campaign), 0, 100);
        break;
      case 'morale':
        payload.player.morale = clamp(payload.player.morale + effectAmount(effect, campaign), 0, 100);
        break;
      case 'relationshipAdjust':
        adjustRelationship(payload, interpolateText(effect.npcId, context), effect.values);
        break;
      case 'objective':
        setObjective(payload, effect, context);
        break;
      case 'companionStatus':
        setCompanionStatus(payload, effect, context);
        break;
      case 'stat': {
        const key = String(effect.key || '');
        if (!key) throw new RangeError('Statistic effects require a key.');
        payload.campaignStatistics[key] = Number(payload.campaignStatistics[key] || 0) + effectAmount(effect, campaign);
        break;
      }
      case 'clue':
        addUniqueRecord(payload.clues, effect.value, context);
        break;
      case 'injury':
        addUniqueRecord(payload.injuries, effect.value, context);
        break;
      case 'inventoryAdd':
        addInventory(payload, effect.value, context);
        break;
      case 'inventoryRemove':
        removeInventory(payload, effect.id, effect.quantity);
        break;
      case 'inventoryRemoveFirstAvailable':
        removeFirstAvailableInventory(payload, effect.ids, effect.quantity);
        break;
      case 'inventoryRemoveBackgroundResource':
        removeInventory(payload, backgroundResourceId(campaign), 1);
        break;
      case 'treatAllInjuries':
        payload.injuries = payload.injuries.map((injury) => ({ ...injury, treated: true }));
        break;
      case 'setLocation': {
        const location = interpolateText(effect.value, context);
        payload.player.currentLocation = location;
        payload.worldState.currentLocation = location;
        break;
      }
      case 'phase':
        payload.worldState.phase = String(effect.value);
        break;
      default:
        throw new RangeError(`Unsupported narrative effect type: ${String(effect.type)}`);
    }
  }

  function applyEffects(effects, campaign, payload) {
    for (const effect of effects || []) applyEffect(effect, campaign, payload);
  }

  function makeEventId(payload, type, suffix) {
    const sequence = Number(payload.worldState.narrative.sceneSequence || 0);
    const choices = Number(payload.campaignStatistics.choicesMade || 0);
    return `event.${type}.${sequence}.${choices}.${String(suffix).replace(/[^a-z0-9._-]+/gi, '_')}`;
  }

  function appendEvent(payload, event) {
    if (payload.eventHistory.some((item) => item.id === event.id)) {
      throw new RangeError(`Narrative event ID was duplicated: ${event.id}`);
    }
    payload.eventHistory.push(event);
  }

  function enterScene(content, campaign, sourcePayload, sceneId, now = () => new Date().toISOString()) {
    const index = sceneIndex(content);
    const scene = index.get(sceneId);
    if (!scene) throw new RangeError(`Unknown narrative scene: ${sceneId}`);
    const payload = ensureNarrativeState(campaign, sourcePayload, now);
    const narrative = payload.worldState.narrative;
    const firstVisit = !Object.prototype.hasOwnProperty.call(narrative.sceneVisits, sceneId);
    if (firstVisit) {
      const generator = IP.SeededRandom.fromSnapshot(payload.randomStreams.narrativeScenes);
      narrative.sceneVariants[sceneId] = generator.integer(0, 1);
      payload.randomStreams.narrativeScenes = generator.snapshot();
      narrative.visitedSceneIds.push(sceneId);
      applyEffects(scene.onEnter, campaign, payload);
    }

    narrative.sceneVisits[sceneId] = Number(narrative.sceneVisits[sceneId] || 0) + 1;
    narrative.sceneSequence += 1;
    narrative.act = scene.act;
    narrative.chapter = scene.chapter;
    narrative.currentSceneEnteredAt = now();
    payload.currentScene = sceneId;
    payload.campaignStatistics.scenesVisited += 1;
    payload.status = scene.sceneType === 'ending'
      ? scene.terminalStatus
      : payload.status === 'created'
        ? 'active'
        : payload.status;

    const context = buildTemplateContext(campaign, payload);
    const location = interpolateText(scene.location, context);
    payload.player.currentLocation = location;
    payload.worldState.currentLocation = location;
    if (scene.sceneType === 'narrative') payload.worldState.phase = `act-${scene.act}`;
    if (scene.sceneType === 'checkpoint') payload.worldState.phase = 'chapter-checkpoint';
    if (scene.sceneType === 'ending') {
      payload.worldState.phase = 'ending';
      payload.endingEligibility.currentEnding = {
        sceneId,
        outcome: scene.ending.outcome,
        cause: interpolateText(scene.ending.cause, context),
        summary: interpolateText(scene.ending.summary, context),
        reachedAt: narrative.currentSceneEnteredAt,
      };
    }

    appendEvent(payload, {
      id: makeEventId(payload, 'scene-entered', sceneId),
      type: scene.sceneType === 'ending' ? 'ending' : 'scene',
      sceneId,
      occurredAt: narrative.currentSceneEnteredAt,
      summary: scene.sceneType === 'ending'
        ? `Ending reached: ${scene.title}`
        : `Entered scene: ${scene.title}`,
    });
    return payload;
  }

  function startNarrative(content, campaign, sourcePayload, now = () => new Date().toISOString()) {
    let payload = ensureNarrativeState(campaign, sourcePayload, now);
    if (payload.currentScene) return payload;
    const startedAt = now();
    payload.worldState.narrative.startedAt = startedAt;
    payload.status = 'active';
    appendEvent(payload, {
      id: 'event.narrative.started',
      type: 'system',
      occurredAt: startedAt,
      summary: `Narrative progression began with ${content.narrativeVersion}.`,
    });
    payload = enterScene(content, campaign, payload, content.startSceneId, now);
    return validateNarrativePayload(content, campaign, payload);
  }

  function renderScene(content, campaign, sourcePayload) {
    const payload = ensureNarrativeState(campaign, sourcePayload);
    const index = sceneIndex(content);
    const scene = index.get(payload.currentScene);
    if (!scene) throw new RangeError(`Current scene is unavailable: ${String(payload.currentScene)}`);
    const context = buildTemplateContext(campaign, payload);
    const variant = Number(payload.worldState.narrative.sceneVariants[scene.id] || 0);
    const paragraphs = scene.prose
      .filter((block) => !block.variant || block.variant.includes(variant))
      .filter((block) => evaluateCondition(block.when, context))
      .map((block) => ({ id: block.id, text: interpolateText(block.text, context) }));
    const choices = scene.choices
      .filter((choice) => evaluateCondition(choice.when, context))
      .map((choice) => ({
        id: choice.id,
        label: interpolateText(choice.label, context),
      }));
    if (scene.sceneType === 'narrative' && choices.length === 0) {
      throw new RangeError(`Playable scene ${scene.id} has no eligible choices in the current state.`);
    }
    return {
      id: scene.id,
      sceneType: scene.sceneType,
      act: scene.act,
      chapter: scene.chapter,
      kicker: interpolateText(scene.kicker, context),
      title: interpolateText(scene.title, context),
      location: interpolateText(scene.location, context),
      paragraphs,
      choices,
      contentWarnings: [...(scene.contentWarnings || [])],
      ending: scene.ending
        ? {
          outcome: scene.ending.outcome,
          cause: interpolateText(scene.ending.cause, context),
          summary: interpolateText(scene.ending.summary, context),
        }
        : null,
      checkpoint: scene.sceneType === 'checkpoint',
      terminal: scene.sceneType === 'ending',
      variant,
    };
  }

  function resolveChoiceDestination(choice, context) {
    for (const option of choice.nextOptions || []) {
      if (evaluateCondition(option.when, context)) return option.next;
    }
    if (choice.next) return choice.next;
    throw new RangeError(`Choice ${choice.id} has no eligible destination.`);
  }

  function resolveChoice(content, campaign, sourcePayload, choiceId, now = () => new Date().toISOString()) {
    const payload = ensureNarrativeState(campaign, sourcePayload, now);
    const index = sceneIndex(content);
    const scene = index.get(payload.currentScene);
    if (!scene) throw new RangeError('The active save references an unknown scene.');
    if (scene.sceneType !== 'narrative') throw new RangeError('This scene does not accept choices.');
    const context = buildTemplateContext(campaign, payload);
    const choice = scene.choices.find(
      (candidate) => candidate.id === choiceId && evaluateCondition(candidate.when, context),
    );
    if (!choice) throw new RangeError('The selected choice is unavailable in the current state.');
    applyEffects(choice.effects, campaign, payload);
    payload.campaignStatistics.choicesMade += 1;
    payload.worldState.narrative.lastChoiceId = choice.id;
    const occurredAt = now();
    appendEvent(payload, {
      id: makeEventId(payload, 'choice', `${scene.id}.${choice.id}`),
      type: 'choice',
      sceneId: scene.id,
      choiceId: choice.id,
      occurredAt,
      summary: interpolateText(choice.label, buildTemplateContext(campaign, payload)),
    });
    const nextSceneId = resolveChoiceDestination(choice, buildTemplateContext(campaign, payload));
    const nextPayload = enterScene(content, campaign, payload, nextSceneId, now);
    return validateNarrativePayload(content, campaign, nextPayload);
  }

  function validateUniqueIds(records, label) {
    const ids = records.map((record) => record?.id);
    assert(ids.every((id) => typeof id === 'string' && id.length > 0), `${label} require IDs.`);
    assert(new Set(ids).size === ids.length, `${label} contain duplicate IDs.`, RangeError);
  }

  function validateNarrativePayload(content, campaign, payload) {
    assert(isObject(payload), 'Narrative payload must be an object.');
    assert(payload.campaignId === campaign.id, 'Narrative payload belongs to another campaign.', RangeError);
    assert(Number(payload.player.health) >= 0 && Number(payload.player.health) <= 100, 'Player health is invalid.', RangeError);
    assert(Number(payload.player.morale) >= 0 && Number(payload.player.morale) <= 100, 'Player morale is invalid.', RangeError);
    assert(Number(payload.worldState.threatPressure) >= 0 && Number(payload.worldState.threatPressure) <= 100, 'Threat pressure is invalid.', RangeError);
    assert(Number(payload.worldState.evacuationReadiness) >= 0 && Number(payload.worldState.evacuationReadiness) <= 100, 'Evacuation readiness is invalid.', RangeError);
    if (campaign.genre === 'mystery') {
      const genreState = payload.worldState.genreState;
      const metrics = genreState?.metrics;
      assert(isObject(genreState) && genreState.kind === 'mystery', 'Mystery state is missing or invalid.');
      assert(isObject(metrics), 'Mystery metric state is missing.');
      for (const [key, limits] of Object.entries(MYSTERY_METRIC_LIMITS)) {
        const value = Number(metrics[key]);
        assert(Number.isFinite(value) && value >= limits.minimum && value <= limits.maximum, `Mystery metric ${key} is invalid.`, RangeError);
      }
      assert(isObject(genreState.suspects), 'Mystery suspect state is missing.');
      for (const suspect of Object.values(genreState.suspects)) {
        assert(SUSPECT_STATUSES.includes(suspect.status), `Suspect ${suspect.id} has an invalid status.`, RangeError);
      }
    }
    assert(isObject(payload.worldState.objectives), 'Objective state is missing.');
    assert(isObject(payload.worldState.companions), 'Companion state is missing.');
    for (const objective of Object.values(payload.worldState.objectives)) {
      assert(OBJECTIVE_STATUSES.includes(objective.status), `Objective ${objective.id} has an invalid status.`, RangeError);
    }
    for (const companion of Object.values(payload.worldState.companions)) {
      assert(COMPANION_STATUSES.includes(companion.status), `Companion ${companion.id} has an invalid status.`, RangeError);
    }
    validateUniqueIds(payload.inventory, 'Inventory records');
    validateUniqueIds(payload.injuries, 'Injury records');
    validateUniqueIds(payload.clues, 'Clue records');
    validateUniqueIds(payload.eventHistory, 'Event history records');
    assert(isObject(payload.worldState.narrative), 'Narrative state is missing.');
    assert(payload.worldState.narrative.version === content.narrativeVersion, 'Narrative content version is incompatible.', RangeError);
    if (payload.currentScene) renderScene(content, campaign, payload);
    return payload;
  }

  function validateConditionShape(condition) {
    if (condition === undefined || condition === null) return;
    assert(isObject(condition), 'Scene conditions must be objects.');
    if (condition.all) {
      assert(Array.isArray(condition.all) && condition.all.length > 0, 'Condition all must be a non-empty array.');
      condition.all.forEach(validateConditionShape);
      return;
    }
    if (condition.any) {
      assert(Array.isArray(condition.any) && condition.any.length > 0, 'Condition any must be a non-empty array.');
      condition.any.forEach(validateConditionShape);
      return;
    }
    if (condition.not) {
      validateConditionShape(condition.not);
      return;
    }
    const supported = [
      'path', 'hasItem', 'hasClue', 'hasInjury', 'hasAnyInjury',
      'hasItemFromBackground', 'relationship', 'difficultyIn', 'lengthIn',
      'objective', 'companion',
    ];
    assert(supported.some((key) => Object.prototype.hasOwnProperty.call(condition, key)), 'Condition has no supported operator.');
  }

  function validateNarrativeContent(content) {
    assert(isObject(content), 'Narrative content must be a plain object.');
    assert(content.schemaVersion === 2, 'Narrative content uses an unsupported schema version.', RangeError);
    assert(typeof content.id === 'string' && content.id.length > 0, 'Narrative content requires an ID.');
    assert(typeof content.narrativeVersion === 'string' && content.narrativeVersion.length > 0, 'Narrative content requires a version.');
    assert(Array.isArray(content.scenes) && content.scenes.length > 0, 'Narrative content requires scenes.');
    validateUniqueIds(content.scenes, 'Narrative scenes');
    const index = sceneIndex(content);
    assert(index.has(content.startSceneId), 'Narrative start scene is missing.', RangeError);
    const effectTypes = new Set([
      'flag', 'time', 'pressure', 'readiness', 'genreMetric', 'suspectStatus', 'health', 'morale',
      'relationshipAdjust', 'objective', 'companionStatus', 'stat', 'clue', 'injury',
      'inventoryAdd', 'inventoryRemove', 'inventoryRemoveFirstAvailable', 'inventoryRemoveBackgroundResource',
      'treatAllInjuries', 'setLocation', 'phase',
    ]);
    for (const scene of content.scenes) {
      assert(SCENE_TYPES.has(scene.sceneType), `Scene ${scene.id} has an invalid type.`, RangeError);
      assert(typeof scene.title === 'string' && scene.title.length > 0, `Scene ${scene.id} lacks a title.`);
      assert(typeof scene.location === 'string' && scene.location.length > 0, `Scene ${scene.id} lacks a location.`);
      assert(Array.isArray(scene.prose) && scene.prose.length > 0, `Scene ${scene.id} lacks prose.`);
      validateUniqueIds(scene.prose, `Prose blocks in ${scene.id}`);
      assert(Array.isArray(scene.choices), `Scene ${scene.id} choices must be an array.`);
      if (scene.sceneType === 'narrative') assert(scene.choices.length > 0, `Scene ${scene.id} must offer choices.`);
      if (scene.sceneType !== 'narrative') assert(scene.choices.length === 0, `Scene ${scene.id} cannot offer choices.`);
      if (scene.sceneType === 'ending') {
        assert(['failed', 'completed'].includes(scene.terminalStatus), `Ending ${scene.id} has an invalid status.`);
        assert(isObject(scene.ending), `Ending ${scene.id} lacks ending metadata.`);
        assert(['failure', 'victory'].includes(scene.ending.outcome), `Ending ${scene.id} has an invalid outcome.`, RangeError);
        assert(typeof scene.ending.cause === 'string' && scene.ending.cause.trim().length > 0, `Ending ${scene.id} lacks a cause.`);
        assert(typeof scene.ending.summary === 'string' && scene.ending.summary.trim().length > 0, `Ending ${scene.id} lacks a summary.`);
      }
      validateUniqueIds(scene.choices, `Choices in ${scene.id}`);
      for (const block of scene.prose) validateConditionShape(block.when);
      for (const choice of scene.choices) {
        assert(typeof choice.label === 'string' && choice.label.length > 0, `Choice ${choice.id} lacks a label.`);
        const destinations = [
          ...(typeof choice.next === 'string' ? [choice.next] : []),
          ...(Array.isArray(choice.nextOptions) ? choice.nextOptions.map((option) => option.next) : []),
        ];
        assert(destinations.length > 0, `Choice ${choice.id} has no destination.`, RangeError);
        for (const destination of destinations) {
          assert(typeof destination === 'string' && index.has(destination), `Choice ${choice.id} references a missing scene.`, RangeError);
        }
        validateConditionShape(choice.when);
        for (const option of choice.nextOptions || []) validateConditionShape(option.when);
        for (const effect of choice.effects || []) {
          assert(effectTypes.has(effect.type), `Choice ${choice.id} uses unsupported effect ${effect.type}.`, RangeError);
          validateConditionShape(effect.when);
        }
      }
      for (const effect of scene.onEnter || []) {
        assert(effectTypes.has(effect.type), `Scene ${scene.id} uses unsupported entry effect ${effect.type}.`, RangeError);
        validateConditionShape(effect.when);
      }
    }

    const reachable = new Set();
    const stack = [content.startSceneId];
    while (stack.length) {
      const id = stack.pop();
      if (reachable.has(id)) continue;
      reachable.add(id);
      for (const choice of index.get(id).choices) {
        if (choice.next) stack.push(choice.next);
        for (const option of choice.nextOptions || []) stack.push(option.next);
      }
    }
    assert(reachable.size === content.scenes.length, 'Narrative content contains unreachable scenes.', RangeError);
    assert([...reachable].some((id) => index.get(id).sceneType === 'ending'), 'Narrative content lacks a reachable ending.', RangeError);
    return {
      ok: true,
      contentId: content.id,
      narrativeVersion: content.narrativeVersion,
      sceneCount: content.scenes.length,
      reachableScenes: reachable.size,
      checkpointCount: content.scenes.filter((scene) => scene.sceneType === 'checkpoint').length,
      endingCount: content.scenes.filter((scene) => scene.sceneType === 'ending').length,
    };
  }

  function buildCampaignSummary(content, campaign, sourcePayload) {
    const payload = ensureNarrativeState(campaign, sourcePayload);
    const scene = payload.currentScene ? renderScene(content, campaign, payload) : null;
    const objectiveList = Object.values(payload.worldState.objectives).map((objective) => ({
      id: objective.id,
      title: objective.title,
      status: objective.status,
      optional: Boolean(objective.optional),
    }));
    const companions = Object.values(payload.worldState.companions).map((companion) => {
      const relationship = payload.relationships[companion.id] || {};
      return {
        id: companion.id,
        name: companion.name,
        role: companion.role,
        status: companion.status,
        cause: companion.cause || null,
        trust: Number(relationship.trust || 0),
        admiration: Number(relationship.admiration || 0),
        protectiveness: Number(relationship.protectiveness || 0),
      };
    });
    const majorChoices = payload.eventHistory
      .filter((event) => event.type === 'choice')
      .slice(-10)
      .map((event) => ({
        sceneId: event.sceneId,
        choiceId: event.choiceId,
        summary: event.summary,
        occurredAt: event.occurredAt,
      }));
    return {
      schemaVersion: 1,
      narrativeVersion: payload.worldState.narrative.version,
      progress: {
        act: payload.worldState.narrative.act,
        chapter: payload.worldState.narrative.chapter,
        sceneId: payload.currentScene,
        sceneTitle: scene?.title || null,
        phase: payload.worldState.phase,
      },
      condition: {
        health: payload.player.health,
        morale: payload.player.morale,
        threatPressure: payload.worldState.threatPressure,
        evacuationReadiness: payload.worldState.evacuationReadiness,
        timeSegment: payload.worldState.timeSegment,
        genreMetrics: cloneData(payload.worldState.genreState?.metrics || {}),
        labels: campaign.world.mechanics?.labels || null,
      },
      objectives: objectiveList,
      companions,
      clues: payload.clues.map((clue) => ({ id: clue.id, name: clue.name, summary: clue.summary || '' })),
      injuries: payload.injuries.map((injury) => ({
        id: injury.id,
        name: injury.name,
        severity: injury.severity || 'unknown',
        treated: Boolean(injury.treated),
      })),
      inventory: payload.inventory.map((item) => ({ id: item.id, name: item.name, quantity: Number(item.quantity || 0) })),
      majorChoices,
      statistics: cloneData(payload.campaignStatistics),
      mystery: campaign.genre === 'mystery'
        ? {
          id: campaign.world.case.id,
          title: campaign.world.case.title,
          resolved: Boolean(payload.worldState.flags.accusationCorrect || payload.worldState.flags.culpritRevealed),
          selectedSuspectId: payload.worldState.flags.selectedSuspectId
            || payload.worldState.genreState?.accusation?.selectedSuspectId
            || null,
          culpritId: payload.status === 'completed' || payload.status === 'failed'
            ? campaign.world.case.culpritId
            : null,
        }
        : {
          id: resolveCampaignMystery(campaign).id,
          title: resolveCampaignMystery(campaign).title,
          resolved: Boolean(payload.worldState.flags.hiddenTruthResolved),
          selectedTheoryId: payload.worldState.flags.selectedTheoryId || null,
        },
      hiddenTruthResolved: campaign.genre === 'mystery'
        ? Boolean(payload.worldState.flags.accusationCorrect || payload.worldState.flags.culpritRevealed)
        : Boolean(payload.worldState.flags.hiddenTruthResolved),
      ending: cloneData(payload.endingEligibility.currentEnding || null),
    };
  }

  function inspectNarrativeState(content, campaign, sourcePayload) {
    const payload = ensureNarrativeState(campaign, sourcePayload);
    const scene = payload.currentScene ? renderScene(content, campaign, payload) : null;
    const primaryCompanion = campaign.genre === 'mystery'
      ? payload.worldState.narrative.cast.partner
      : payload.worldState.narrative.cast.responder;
    return {
      narrativeVersion: payload.worldState.narrative.version,
      currentSceneId: payload.currentScene,
      currentSceneTitle: scene?.title || null,
      sceneType: scene?.sceneType || null,
      act: payload.worldState.narrative.act,
      chapter: payload.worldState.narrative.chapter,
      sceneSequence: payload.worldState.narrative.sceneSequence,
      sceneVariant: scene?.variant ?? null,
      phase: payload.worldState.phase,
      location: payload.player.currentLocation,
      health: payload.player.health,
      morale: payload.player.morale,
      threatPressure: payload.worldState.threatPressure,
      evacuationReadiness: payload.worldState.evacuationReadiness,
      genreMetrics: cloneData(payload.worldState.genreState?.metrics || {}),
      timeSegment: payload.worldState.timeSegment,
      objectives: cloneData(payload.worldState.objectives),
      companions: cloneData(payload.worldState.companions),
      mystery: campaign.genre === 'mystery'
        ? {
          id: campaign.world.case.id,
          resolved: Boolean(payload.worldState.flags.accusationCorrect || payload.worldState.flags.culpritRevealed),
          selectedSuspectId: payload.worldState.flags.selectedSuspectId
            || payload.worldState.genreState?.accusation?.selectedSuspectId
            || null,
          suspects: cloneData(payload.worldState.genreState?.suspects || {}),
        }
        : {
          id: resolveCampaignMystery(campaign).id,
          resolved: Boolean(payload.worldState.flags.hiddenTruthResolved),
          selectedTheoryId: payload.worldState.flags.selectedTheoryId || null,
        },
      inventoryIds: payload.inventory.map((item) => item.id),
      clueIds: payload.clues.map((clue) => clue.id),
      injuryIds: payload.injuries.map((injury) => injury.id),
      flags: cloneData(payload.worldState.flags),
      primaryCompanion: primaryCompanion ? {
        id: primaryCompanion.id,
        name: primaryCompanion.name,
        relationship: cloneData(payload.relationships[primaryCompanion.id]),
      } : null,
      responder: campaign.genre === 'horror' && primaryCompanion ? {
        id: primaryCompanion.id,
        name: primaryCompanion.name,
        relationship: cloneData(payload.relationships[primaryCompanion.id]),
      } : null,
      partner: campaign.genre === 'mystery' && primaryCompanion ? {
        id: primaryCompanion.id,
        name: primaryCompanion.name,
        relationship: cloneData(payload.relationships[primaryCompanion.id]),
      } : null,
      randomState: cloneData(payload.randomStreams.narrativeScenes),
      ending: cloneData(payload.endingEligibility.currentEnding || null),
    };
  }

  return {
    BACKGROUND_RESOURCE_LABELS,
    COMPANION_STATUSES,
    DIFFICULTY_RULES,
    MYSTERY_DIFFICULTY_RULES,
    OBJECTIVE_STATUSES,
    LEGACY_MYSTERIES,
    MYSTERY_METRIC_LIMITS,
    SUSPECT_STATUSES,
    OPENING_RESPONDERS,
    SHELTER_LEADS,
    STANDARD_COMPLICATIONS,
    SUPPORTING_DEPUTIES,
    RELATIONSHIP_METRICS,
    WEATHER_DETAILS,
    applyEffects,
    buildCampaignSummary,
    buildTemplateContext,
    difficultyRules,
    ensureNarrativeState,
    enterScene,
    evaluateCondition,
    getNarrativeContentForCampaign,
    listInstalledNarrativeContent,
    inspectNarrativeState,
    interpolateText,
    renderScene,
    resolveCampaignMystery,
    resolveChoice,
    startNarrative,
    validateNarrativeContent,
    validateNarrativePayload,
  };
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
  if (typeof module !== 'undefined' && module.exports) module.exports = exported;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (IP) {
  'use strict';

  const STORE_NAMES = Object.freeze({
    appMeta: 'appMeta',
    campaigns: 'campaigns',
    saves: 'saves',
    archives: 'archives',
    backups: 'backups',
    contentPacks: 'contentPacks',
    contentFiles: 'contentFiles',
    packQuarantine: 'packQuarantine',
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
    return database.objectStoreNames.contains(name) ? null : database.createObjectStore(name, options);
  }

  function ensureIndex(store, name, keyPath, options = {}) {
    if (store && !store.indexNames.contains(name)) store.createIndex(name, keyPath, options);
  }

  class InfinitePathsDatabase {
    constructor(indexedDBFactory = globalThis.indexedDB, config = IP.APP_CONFIG?.database) {
      this.indexedDB = indexedDBFactory;
      this.name = config?.name || 'infinite-paths';
      this.version = config?.version || 3;
      this.database = null;
      this.openPromise = null;
    }

    async open() {
      if (this.database) return this.database;
      if (this.openPromise) return this.openPromise;
      if (!this.indexedDB) throw new Error('IndexedDB is unavailable in this browser context.');

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
          const contentPacks = createStoreIfMissing(database, STORE_NAMES.contentPacks, { keyPath: 'id' });
          const contentFiles = createStoreIfMissing(database, STORE_NAMES.contentFiles, { keyPath: 'id' });
          const packQuarantine = createStoreIfMissing(database, STORE_NAMES.packQuarantine, { keyPath: 'id' });

          const campaignStore = campaigns || transaction.objectStore(STORE_NAMES.campaigns);
          ensureIndex(campaignStore, 'status', 'status');
          ensureIndex(campaignStore, 'genre', 'genre');
          ensureIndex(campaignStore, 'updatedAt', 'updatedAt');

          const saveStore = saves || transaction.objectStore(STORE_NAMES.saves);
          ensureIndex(saveStore, 'campaignId', 'campaignId');
          ensureIndex(saveStore, 'slotType', 'slotType');
          ensureIndex(saveStore, 'slotNumber', 'slotNumber');
          ensureIndex(saveStore, 'updatedAt', 'updatedAt');
          ensureIndex(saveStore, 'campaignSlot', ['campaignId', 'slotType', 'slotNumber']);

          const archiveStore = archives || transaction.objectStore(STORE_NAMES.archives);
          ensureIndex(archiveStore, 'genre', 'genre');
          ensureIndex(archiveStore, 'status', 'status');
          ensureIndex(archiveStore, 'outcome', 'outcome');
          ensureIndex(archiveStore, 'completedAt', 'completedAt');

          const backupStore = backups || transaction.objectStore(STORE_NAMES.backups);
          ensureIndex(backupStore, 'campaignId', 'campaignId');
          ensureIndex(backupStore, 'reason', 'reason');
          ensureIndex(backupStore, 'createdAt', 'createdAt');

          const contentPackStore = contentPacks || transaction.objectStore(STORE_NAMES.contentPacks);
          ensureIndex(contentPackStore, 'packId', 'packId');
          ensureIndex(contentPackStore, 'packVersion', 'packVersion');
          ensureIndex(contentPackStore, 'enabled', 'enabled');
          ensureIndex(contentPackStore, 'updatedAt', 'updatedAt');

          const contentFileStore = contentFiles || transaction.objectStore(STORE_NAMES.contentFiles);
          ensureIndex(contentFileStore, 'packKey', 'packKey');
          ensureIndex(contentFileStore, 'packId', 'packId');
          ensureIndex(contentFileStore, 'type', 'type');

          const quarantineStore = packQuarantine || transaction.objectStore(STORE_NAMES.packQuarantine);
          ensureIndex(quarantineStore, 'createdAt', 'createdAt');
          ensureIndex(quarantineStore, 'sourceFilename', 'sourceFilename');

          const metadataStore = appMeta || transaction.objectStore(STORE_NAMES.appMeta);
          metadataStore.put({
            key: 'databaseSchemaVersion',
            value: event.newVersion || this.version,
            previousValue: event.oldVersion,
            updatedAt: new Date().toISOString(),
          });
        });

        request.addEventListener('blocked', () => {
          reject(new Error('Database upgrade is blocked by another open Infinite Paths tab. Close the other tab and reopen the app.'));
        });
        request.addEventListener('error', () => reject(request.error || new Error('Unable to open the Infinite Paths database.')));
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
      if (!database.objectStoreNames.contains(storeName)) throw new RangeError(`Unknown IndexedDB store: ${storeName}`);
      const transaction = database.transaction(storeName, mode);
      const store = transaction.objectStore(storeName);
      const request = operation(store, transaction);
      const result = request ? await requestToPromise(request) : undefined;
      await transactionToPromise(transaction);
      return result;
    }

    async runTransaction(storeNames, mode, operation) {
      const database = await this.open();
      const names = [...new Set(storeNames)];
      for (const name of names) {
        if (!database.objectStoreNames.contains(name)) throw new RangeError(`Unknown IndexedDB store: ${name}`);
      }
      const transaction = database.transaction(names, mode);
      const stores = Object.fromEntries(names.map((name) => [name, transaction.objectStore(name)]));
      let result;
      try {
        result = await operation(stores, transaction);
      } catch (error) {
        try { transaction.abort(); } catch (_) {}
        throw error;
      }
      await transactionToPromise(transaction);
      return result;
    }

    put(storeName, value) { return this.run(storeName, 'readwrite', (store) => store.put(value)); }
    add(storeName, value) { return this.run(storeName, 'readwrite', (store) => store.add(value)); }
    get(storeName, key) { return this.run(storeName, 'readonly', (store) => store.get(key)); }
    delete(storeName, key) { return this.run(storeName, 'readwrite', (store) => store.delete(key)); }
    getAll(storeName) { return this.run(storeName, 'readonly', (store) => store.getAll()); }
    count(storeName) { return this.run(storeName, 'readonly', (store) => store.count()); }

    async getAllByIndex(storeName, indexName, key) {
      return this.run(storeName, 'readonly', (store) => store.index(indexName).getAll(key));
    }

    setMeta(key, value) {
      return this.put(STORE_NAMES.appMeta, { key, value, updatedAt: new Date().toISOString() });
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
      if (stored !== token) throw new Error('IndexedDB health check returned mismatched data.');
      return { ok: true, checkedAt: new Date().toISOString() };
    }
  }

  return { InfinitePathsDatabase, STORE_NAMES, requestToPromise, transactionToPromise };
});

/* ===== src/js/storage/save-format.js ===== */
(function (root, factory) {
  const namespace = (root.InfinitePaths = root.InfinitePaths || {});
  const exported = factory(namespace);
  Object.assign(namespace, exported);
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = exported;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function (IP) {
  'use strict';

  const SAVE_FORMAT_VERSION = 2;
  const EXPORT_SCHEMA_VERSION = 1;
  const BACKUP_SCHEMA_VERSION = 1;
  const MANUAL_SLOT_COUNT = 3;
  const CAMPAIGN_INTEGRITY_SCOPE = 'campaign-record-v1';
  const SAVE_INTEGRITY_SCOPE = 'save-envelope-v2';
  const ARCHIVE_INTEGRITY_SCOPE = 'archive-record-v1';
  const BACKUP_INTEGRITY_SCOPE = 'campaign-backup-v1';
  const EXPORT_INTEGRITY_SCOPE = 'campaign-export-v1';

  const CAMPAIGN_STATUSES = new Set(['created', 'active', 'completed', 'failed', 'abandoned']);
  const SLOT_TYPES = new Set(['autosave', 'manual']);

  function assert(condition, message, ErrorType = TypeError) {
    if (!condition) {
      throw new ErrorType(message);
    }
  }

  function assertString(value, label, minimum = 1, maximum = 500) {
    assert(typeof value === 'string', `${label} must be text.`);
    assert(value.length >= minimum && value.length <= maximum, `${label} has an invalid length.`, RangeError);
    return value;
  }

  function assertInteger(value, label, minimum = 0, maximum = Number.MAX_SAFE_INTEGER) {
    assert(Number.isInteger(value), `${label} must be an integer.`);
    assert(value >= minimum && value <= maximum, `${label} is outside its supported range.`, RangeError);
    return value;
  }

  function assertPlainObject(value, label) {
    assert(IP.isPlainObject(value), `${label} must be a plain object.`);
    return value;
  }

  function assertArray(value, label, maximum = 100000) {
    assert(Array.isArray(value), `${label} must be an array.`);
    assert(value.length <= maximum, `${label} contains too many entries.`, RangeError);
    return value;
  }

  function assertDateString(value, label) {
    assertString(value, label, 10, 80);
    assert(Number.isFinite(Date.parse(value)), `${label} must be an ISO-compatible date.`, RangeError);
    return value;
  }

  function activeSaveMetaKey(campaignId) {
    assertString(campaignId, 'Campaign ID', 5, 160);
    return `activeSaveId:${campaignId}`;
  }

  function makeSaveId(campaignId, slotType, slotNumber = 0) {
    assertString(campaignId, 'Campaign ID', 5, 160);
    assert(SLOT_TYPES.has(slotType), 'Save slot type is invalid.', RangeError);
    if (slotType === 'autosave') {
      return `${campaignId}:autosave`;
    }
    assertInteger(slotNumber, 'Manual slot number', 1, MANUAL_SLOT_COUNT);
    return `${campaignId}:manual:${slotNumber}`;
  }

  function normalizeContentPackSnapshot(contentPack) {
    assertPlainObject(contentPack, 'Content-pack snapshot');
    return {
      ...IP.cloneData(contentPack),
      id: assertString(contentPack.id, 'Content-pack ID', 3, 160),
      version: assertString(contentPack.version, 'Content-pack version', 1, 80),
    };
  }

  function normalizeSavePayload(payload, campaign) {
    const source = IP.cloneData(payload || {});
    const contentPack = source.contentPack || {
      id: campaign.contentPack?.id || IP.APP_CONFIG.defaultContentPackId,
      version: campaign.contentPack?.version || String(campaign.contentVersion || '').split('@').pop() || '0.0.0',
    };

    const normalized = {
      ...source,
      campaignId: campaign.id,
      status: CAMPAIGN_STATUSES.has(source.status) ? source.status : campaign.status,
      contentPack: {
        id: assertString(contentPack.id, 'Save content-pack ID', 3, 160),
        version: assertString(contentPack.version, 'Save content-pack version', 1, 80),
      },
      player: IP.isPlainObject(source.player)
        ? source.player
        : { protagonist: IP.cloneData(campaign.protagonist) },
      worldState: IP.isPlainObject(source.worldState) ? source.worldState : {},
      currentScene: typeof source.currentScene === 'string' || source.currentScene === null
        ? source.currentScene
        : null,
      eventHistory: Array.isArray(source.eventHistory) ? source.eventHistory : [],
      inventory: Array.isArray(source.inventory) ? source.inventory : [],
      injuries: Array.isArray(source.injuries) ? source.injuries : [],
      clues: Array.isArray(source.clues) ? source.clues : [],
      relationships: IP.isPlainObject(source.relationships) ? source.relationships : {},
      unresolvedConsequences: Array.isArray(source.unresolvedConsequences)
        ? source.unresolvedConsequences
        : [],
      randomStreams: IP.isPlainObject(source.randomStreams)
        ? source.randomStreams
        : IP.cloneData(campaign.randomStreams || {}),
      campaignStatistics: IP.isPlainObject(source.campaignStatistics)
        ? source.campaignStatistics
        : {
          scenesVisited: 0,
          choicesMade: 0,
          manualSavesCreated: 0,
          playTimeSeconds: 0,
        },
      endingEligibility: IP.isPlainObject(source.endingEligibility)
        ? source.endingEligibility
        : {},
    };

    validateSavePayload(normalized, campaign.id);
    return normalized;
  }

  function createSaveRecord({
    campaign,
    payload,
    slotType = 'autosave',
    slotNumber = 0,
    existingRecord = null,
    now = () => new Date().toISOString(),
  }) {
    validateCampaignRecord(campaign, { allowMissingIntegrity: true });
    assert(SLOT_TYPES.has(slotType), 'Save slot type is invalid.', RangeError);
    const normalizedSlotNumber = slotType === 'autosave'
      ? 0
      : assertInteger(Number(slotNumber), 'Manual slot number', 1, MANUAL_SLOT_COUNT);
    const timestamp = now();
    const createdAt = existingRecord?.createdAt || timestamp;
    const record = {
      id: makeSaveId(campaign.id, slotType, normalizedSlotNumber),
      schemaVersion: 2,
      campaignId: campaign.id,
      slotType,
      slotNumber: normalizedSlotNumber,
      label: slotType === 'autosave' ? 'Autosave' : `Manual Save ${normalizedSlotNumber}`,
      revision: Math.max(1, Number(existingRecord?.revision || 0) + 1),
      saveFormatVersion: SAVE_FORMAT_VERSION,
      compatibility: {
        minimumAppVersion: '0.3.0',
        rulesVersion: campaign.rulesVersion,
        contentVersion: campaign.contentVersion,
        contentPack: {
          id: campaign.contentPack?.id || IP.APP_CONFIG.defaultContentPackId,
          version: campaign.contentPack?.version || '0.0.0',
        },
      },
      payload: normalizeSavePayload(payload, campaign),
      createdAt,
      updatedAt: timestamp,
    };
    return IP.sealRecord(record, SAVE_INTEGRITY_SCOPE);
  }

  function sealCampaignRecord(campaign) {
    const copy = IP.cloneData(campaign);
    copy.saveFormatVersion = SAVE_FORMAT_VERSION;
    return IP.sealRecord(copy, CAMPAIGN_INTEGRITY_SCOPE);
  }

  function sealArchiveRecord(archive) {
    return IP.sealRecord(archive, ARCHIVE_INTEGRITY_SCOPE);
  }

  function validateFixedProfile(protagonist, { allowLegacy = true } = {}) {
    assertPlainObject(protagonist, 'Campaign protagonist');
    assertString(protagonist.name, 'Protagonist name', 1, 40);
    assertPlainObject(protagonist.background, 'Protagonist background');
    if (allowLegacy && !protagonist.sex) {
      return;
    }
    assert(protagonist.sex === 'male', 'This private build supports a male protagonist only.', RangeError);
    assertPlainObject(protagonist.pronouns, 'Protagonist grammar profile');
    assert(protagonist.pronouns.subject === 'he', 'The protagonist grammar profile is incompatible.', RangeError);
    assertPlainObject(protagonist.romance, 'Protagonist romance profile');
    assert(protagonist.romance.orientation === 'heterosexual', 'The protagonist romance profile is incompatible.', RangeError);
    assertArray(protagonist.romance.eligiblePartnerSexes, 'Eligible romance partners', 4);
    assert(
      protagonist.romance.eligiblePartnerSexes.length === 1
        && protagonist.romance.eligiblePartnerSexes[0] === 'female',
      'The protagonist romance profile is incompatible.',
      RangeError,
    );
  }

  function validateCampaignRecord(campaign, { allowMissingIntegrity = false, allowLegacyProfile = true } = {}) {
    assertPlainObject(campaign, 'Campaign');
    assertString(campaign.id, 'Campaign ID', 5, 160);
    assert(/^cmp_[a-z0-9]+$/.test(campaign.id), 'Campaign ID has an invalid format.', RangeError);
    assertInteger(campaign.schemaVersion, 'Campaign schema version', 1, 2);
    assertInteger(campaign.saveFormatVersion, 'Campaign save-format version', 1, SAVE_FORMAT_VERSION);
    assertString(campaign.contentVersion, 'Campaign content version', 1, 200);
    assertString(campaign.rulesVersion, 'Campaign rules version', 1, 80);
    assert(CAMPAIGN_STATUSES.has(campaign.status), 'Campaign status is invalid.', RangeError);
    assertString(campaign.genre, 'Campaign genre', 1, 80);
    assertString(campaign.difficulty, 'Campaign difficulty', 1, 40);
    assertString(campaign.length, 'Campaign length', 1, 40);
    assertString(campaign.seed, 'Campaign seed', 1, 120);
    assertString(campaign.seedFingerprint, 'Campaign seed fingerprint', 1, 160);
    assertString(campaign.title, 'Campaign title', 1, 200);
    validateFixedProfile(campaign.protagonist, { allowLegacy: allowLegacyProfile });
    assertPlainObject(campaign.world, 'Campaign world');
    assertPlainObject(campaign.randomStreams, 'Campaign random streams');
    assertDateString(campaign.createdAt, 'Campaign creation time');
    assertDateString(campaign.updatedAt, 'Campaign update time');
    if (campaign.contentPack) {
      normalizeContentPackSnapshot(campaign.contentPack);
    }
    if (campaign.integrity) {
      const integrity = IP.verifySealedRecord(campaign, CAMPAIGN_INTEGRITY_SCOPE);
      assert(integrity.ok, `Campaign integrity failed: ${integrity.reason}`, RangeError);
    } else if (!allowMissingIntegrity) {
      throw new RangeError('Campaign integrity metadata is missing.');
    }
    return campaign;
  }

  function validateSavePayload(payload, campaignId) {
    assertPlainObject(payload, 'Save payload');
    assert(payload.campaignId === campaignId, 'Save payload campaign ID does not match its envelope.', RangeError);
    assert(CAMPAIGN_STATUSES.has(payload.status), 'Save payload status is invalid.', RangeError);
    assertPlainObject(payload.contentPack, 'Save payload content pack');
    assertString(payload.contentPack.id, 'Save content-pack ID', 3, 160);
    assertString(payload.contentPack.version, 'Save content-pack version', 1, 80);
    assertPlainObject(payload.player, 'Save player state');
    assertPlainObject(payload.worldState, 'Save world state');
    assertArray(payload.eventHistory, 'Save event history');
    assertArray(payload.inventory, 'Save inventory');
    assertArray(payload.injuries, 'Save injuries');
    assertArray(payload.clues, 'Save clues');
    assertPlainObject(payload.relationships, 'Save relationship state');
    assertArray(payload.unresolvedConsequences, 'Save unresolved consequences');
    assertPlainObject(payload.randomStreams, 'Save random streams');
    assertPlainObject(payload.campaignStatistics, 'Save campaign statistics');
    assertPlainObject(payload.endingEligibility, 'Save ending eligibility');
    assert(payload.currentScene === null || typeof payload.currentScene === 'string', 'Save current scene is invalid.', RangeError);
    IP.canonicalStringify(payload);
    return payload;
  }

  function inspectSaveRecord(save) {
    try {
      assertPlainObject(save, 'Save record');
      assertInteger(save.saveFormatVersion, 'Save-format version', 1, 100000);
      if (save.saveFormatVersion < SAVE_FORMAT_VERSION) {
        return { state: 'legacy', valid: true, recoverable: true, message: `Save format ${save.saveFormatVersion} requires migration.` };
      }
      if (save.saveFormatVersion > SAVE_FORMAT_VERSION) {
        return { state: 'unsupported', valid: false, recoverable: false, message: `Save format ${save.saveFormatVersion} requires a newer Infinite Paths release.` };
      }
      assertString(save.id, 'Save ID', 5, 240);
      assertString(save.campaignId, 'Save campaign ID', 5, 160);
      assert(SLOT_TYPES.has(save.slotType), 'Save slot type is invalid.', RangeError);
      const expectedSlot = save.slotType === 'autosave' ? 0 : save.slotNumber;
      assertInteger(expectedSlot, 'Save slot number', save.slotType === 'autosave' ? 0 : 1, save.slotType === 'autosave' ? 0 : MANUAL_SLOT_COUNT);
      assert(save.id === makeSaveId(save.campaignId, save.slotType, expectedSlot), 'Save ID does not match its slot.', RangeError);
      assertInteger(save.schemaVersion, 'Save schema version', 2, 2);
      assertInteger(save.revision, 'Save revision', 1);
      assertPlainObject(save.compatibility, 'Save compatibility record');
      validateSavePayload(save.payload, save.campaignId);
      assertDateString(save.createdAt, 'Save creation time');
      assertDateString(save.updatedAt, 'Save update time');
      const integrity = IP.verifySealedRecord(save, SAVE_INTEGRITY_SCOPE);
      if (!integrity.ok) {
        return { state: 'corrupt', valid: false, recoverable: true, message: integrity.reason };
      }
      return { state: 'healthy', valid: true, recoverable: false, message: 'SHA-256 checksum verified.' };
    } catch (error) {
      return {
        state: 'corrupt',
        valid: false,
        recoverable: true,
        message: String(error?.message || error),
      };
    }
  }

  function validateSaveRecord(save) {
    const inspection = inspectSaveRecord(save);
    if (!inspection.valid || inspection.state !== 'healthy') {
      throw new RangeError(inspection.message);
    }
    return save;
  }

  function requireAutosave(saves, campaignId) {
    assertArray(saves, 'Campaign save collection', MANUAL_SLOT_COUNT + 1);
    const autosaveId = makeSaveId(campaignId, 'autosave', 0);
    assert(
      saves.some((save) => save?.id === autosaveId && save?.slotType === 'autosave' && save?.slotNumber === 0),
      'Campaign save collection must contain its autosave.',
      RangeError,
    );
    return autosaveId;
  }

  function createArchiveRecord(campaign, existing = null, updatedAt = null) {
    validateCampaignRecord(campaign, { allowMissingIntegrity: true, allowLegacyProfile: true });
    const timestamp = updatedAt || campaign.updatedAt || new Date().toISOString();
    const terminal = ['completed', 'failed', 'abandoned'].includes(campaign.status);
    const record = {
      ...(existing ? IP.cloneData(existing) : {}),
      id: campaign.id,
      campaignId: campaign.id,
      title: campaign.title,
      genre: campaign.genre,
      seed: campaign.seed,
      difficulty: campaign.difficulty,
      length: campaign.length,
      protagonist: campaign.protagonist.name,
      contentPackId: campaign.contentPack?.id || IP.APP_CONFIG.defaultContentPackId,
      contentPackVersion: campaign.contentPack?.version || '0.0.0',
      status: terminal ? campaign.status : 'active',
      outcome: campaign.status === 'completed'
        ? 'victory'
        : campaign.status === 'failed'
          ? 'failure'
          : campaign.status === 'abandoned'
            ? 'abandoned'
            : null,
      createdAt: existing?.createdAt || campaign.createdAt,
      updatedAt: timestamp,
      completedAt: terminal ? timestamp : null,
      contentVersion: campaign.contentVersion,
      dataMigrationVersion: SAVE_FORMAT_VERSION,
      ending: campaign.ending ? IP.cloneData(campaign.ending) : existing?.ending || null,
      summary: campaign.summary ? IP.cloneData(campaign.summary) : existing?.summary || null,
    };
    return sealArchiveRecord(record);
  }

  function validateArchiveRecord(archive, { allowMissingIntegrity = false } = {}) {
    assertPlainObject(archive, 'Archive record');
    assertString(archive.id, 'Archive ID', 5, 160);
    assertString(archive.campaignId, 'Archive campaign ID', 5, 160);
    assert(archive.id === archive.campaignId, 'Archive ID must match its campaign ID.', RangeError);
    assertString(archive.title, 'Archive title', 1, 200);
    assertString(archive.genre, 'Archive genre', 1, 80);
    assertString(archive.protagonist, 'Archive protagonist', 1, 40);
    assertDateString(archive.createdAt, 'Archive creation time');
    assertDateString(archive.updatedAt, 'Archive update time');
    if (archive.integrity) {
      const integrity = IP.verifySealedRecord(archive, ARCHIVE_INTEGRITY_SCOPE);
      assert(integrity.ok, `Archive integrity failed: ${integrity.reason}`, RangeError);
    } else if (!allowMissingIntegrity) {
      throw new RangeError('Archive integrity metadata is missing.');
    }
    return archive;
  }

  function compareVersions(left, right) {
    const normalize = (version) => String(version || '0.0.0').split(/[+-]/)[0].split('.').map((part) => Number(part) || 0);
    const a = normalize(left);
    const b = normalize(right);
    for (let index = 0; index < Math.max(a.length, b.length, 3); index += 1) {
      const difference = (a[index] || 0) - (b[index] || 0);
      if (difference !== 0) {
        return difference < 0 ? -1 : 1;
      }
    }
    return 0;
  }

  function inspectCampaignCompatibility(campaign, appConfig = IP.APP_CONFIG) {
    const warnings = [];
    let playable = true;
    if (Number(campaign.saveFormatVersion) > Number(appConfig.saveFormatVersion)) {
      playable = false;
      warnings.push(`Save format ${campaign.saveFormatVersion} requires a newer app.`);
    }
    if (compareVersions(campaign.rulesVersion, appConfig.rulesVersion) > 0) {
      playable = false;
      warnings.push(`Rules version ${campaign.rulesVersion} is newer than this app's ${appConfig.rulesVersion}.`);
    }
    let packInstalled = false;
    try {
      const installed = IP.getRegisteredContentPack(
        campaign.contentPack?.id,
        campaign.contentPack?.version,
        { enabledOnly: false, allowBuiltInLegacy: true },
      );
      packInstalled = Boolean(installed);
      if (!packInstalled) {
        playable = false;
        warnings.push(`Content pack ${campaign.contentPack?.id}@${campaign.contentPack?.version} is not installed at a compatible version.`);
      }
    } catch (_error) {
      playable = false;
      warnings.push(`Content pack ${campaign.contentPack?.id || 'unknown'} is not installed. Its stored world summary remains readable.`);
    }
    return { playable, packInstalled, warnings };
  }

  return {
    ARCHIVE_INTEGRITY_SCOPE,
    BACKUP_INTEGRITY_SCOPE,
    BACKUP_SCHEMA_VERSION,
    CAMPAIGN_INTEGRITY_SCOPE,
    EXPORT_INTEGRITY_SCOPE,
    EXPORT_SCHEMA_VERSION,
    MANUAL_SLOT_COUNT,
    SAVE_FORMAT_VERSION,
    SAVE_INTEGRITY_SCOPE,
    activeSaveMetaKey,
    compareVersions,
    createArchiveRecord,
    createSaveRecord,
    inspectCampaignCompatibility,
    inspectSaveRecord,
    makeSaveId,
    normalizeSavePayload,
    requireAutosave,
    sealArchiveRecord,
    sealCampaignRecord,
    validateArchiveRecord,
    validateCampaignRecord,
    validateSavePayload,
    validateSaveRecord,
  };
});

/* ===== src/js/storage/save-migrations.js ===== */
(function (root, factory) {
  const namespace = (root.InfinitePaths = root.InfinitePaths || {});
  const exported = factory(namespace);
  Object.assign(namespace, exported);
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = exported;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function (IP) {
  'use strict';

  const SAVE_MIGRATIONS = new Map();

  function migrationStep(fromVersion, toVersion, migrate) {
    return Object.freeze({ fromVersion, toVersion, migrate });
  }

  SAVE_MIGRATIONS.set(1, migrationStep(1, 2, (legacySave, campaign, now) => {
    const slotType = legacySave.slotType === 'manual' ? 'manual' : 'autosave';
    const slotNumber = slotType === 'manual'
      ? Math.min(IP.MANUAL_SLOT_COUNT, Math.max(1, Number(legacySave.slotNumber) || 1))
      : 0;
    const migrated = IP.createSaveRecord({
      campaign,
      payload: legacySave.payload || {},
      slotType,
      slotNumber,
      existingRecord: {
        createdAt: legacySave.createdAt || campaign.createdAt,
        revision: Math.max(0, Number(legacySave.revision || 0)),
      },
      now,
    });
    migrated.createdAt = legacySave.createdAt || migrated.createdAt;
    migrated.updatedAt = now();
    const knownLegacyKeys = new Set([
      'id', 'campaignId', 'slotType', 'slotNumber', 'saveFormatVersion', 'checksum',
      'payload', 'createdAt', 'updatedAt', 'migrationHistory', 'integrity',
    ]);
    const preservedEnvelopeFields = Object.fromEntries(
      Object.entries(legacySave).filter(([key]) => !knownLegacyKeys.has(key)),
    );
    if (Object.keys(preservedEnvelopeFields).length) {
      migrated.legacyEnvelopeExtensions = IP.cloneData(preservedEnvelopeFields);
    }
    migrated.migrationHistory = [
      ...(Array.isArray(legacySave.migrationHistory) ? legacySave.migrationHistory : []),
      {
        from: 1,
        to: 2,
        migratedAt: migrated.updatedAt,
        appVersion: IP.APP_CONFIG.version,
        note: 'Legacy fingerprint replaced with canonical SHA-256 envelope integrity.',
      },
    ];
    return IP.sealRecord(migrated, IP.SAVE_INTEGRITY_SCOPE);
  }));

  function getSaveMigrationPath(fromVersion, targetVersion = IP.SAVE_FORMAT_VERSION) {
    if (!Number.isInteger(fromVersion) || fromVersion < 1) {
      throw new RangeError('Save-format version is invalid.');
    }
    if (fromVersion > targetVersion) {
      throw new RangeError(`Save format ${fromVersion} requires a newer Infinite Paths release.`);
    }
    const path = [];
    let current = fromVersion;
    while (current < targetVersion) {
      const step = SAVE_MIGRATIONS.get(current);
      if (!step || step.toVersion <= current) {
        throw new RangeError(`No migration path exists from save format ${current}.`);
      }
      path.push(step);
      current = step.toVersion;
    }
    return path;
  }

  function migrateSaveRecord(save, campaign, now = () => new Date().toISOString()) {
    const sourceVersion = Number(save?.saveFormatVersion);
    const path = getSaveMigrationPath(sourceVersion);
    let migrated = IP.cloneData(save);
    for (const step of path) {
      migrated = step.migrate(migrated, campaign, now);
    }
    return migrated;
  }

  function migrateCampaignBundle(bundle, now = () => new Date().toISOString()) {
    const campaign = IP.cloneData(bundle.campaign);
    const archive = IP.cloneData(bundle.archive);
    IP.requireAutosave(bundle.saves, campaign.id);
    const migrationAt = now();
    campaign.appVersion = IP.APP_CONFIG.version;
    campaign.saveFormatVersion = IP.SAVE_FORMAT_VERSION;
    campaign.dataMigrationHistory = [
      ...(Array.isArray(campaign.dataMigrationHistory) ? campaign.dataMigrationHistory : []),
      {
        targetSaveFormatVersion: IP.SAVE_FORMAT_VERSION,
        migratedAt: migrationAt,
        appVersion: IP.APP_CONFIG.version,
      },
    ];
    const sealedCampaign = IP.sealCampaignRecord(campaign);
    const migratedSaves = bundle.saves.map((save) => {
      if (Number(save.saveFormatVersion) === IP.SAVE_FORMAT_VERSION) {
        IP.validateSaveRecord(save);
        return IP.cloneData(save);
      }
      return migrateSaveRecord(save, sealedCampaign, now);
    });
    const sealedArchive = IP.sealArchiveRecord({
      ...archive,
      dataMigrationVersion: IP.SAVE_FORMAT_VERSION,
    });
    return {
      campaign: sealedCampaign,
      saves: migratedSaves,
      archive: sealedArchive,
      activeSaveId: bundle.activeSaveId || IP.makeSaveId(campaign.id, 'autosave', 0),
      migrationAt,
    };
  }

  return {
    SAVE_MIGRATIONS,
    getSaveMigrationPath,
    migrateCampaignBundle,
    migrateSaveRecord,
  };
});

/* ===== src/js/utils/file-transfer.js ===== */
(function (root, factory) {
  const namespace = (root.InfinitePaths = root.InfinitePaths || {});
  const exported = factory(namespace);
  Object.assign(namespace, exported);
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = exported;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function (IP) {
  'use strict';

  function safeFilename(value, fallback = 'infinite-paths') {
    const cleaned = String(value || '')
      .normalize('NFKD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 80);
    return cleaned || fallback;
  }

  function jsonText(value) {
    IP.canonicalStringify(value);
    return `${JSON.stringify(value, null, 2)}\n`;
  }

  function triggerBrowserDownload(blob, filename) {
    if (typeof document === 'undefined' || !globalThis.URL?.createObjectURL) {
      throw new Error('File download is unavailable in this browser context.');
    }
    const url = globalThis.URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = filename;
    anchor.rel = 'noopener';
    anchor.hidden = true;
    document.body.append(anchor);
    anchor.click();
    anchor.remove();
    globalThis.setTimeout(() => globalThis.URL.revokeObjectURL(url), 2000);
  }

  async function deliverTextFile(text, filename, mimeType = 'application/json') {
    if (typeof Blob === 'undefined') {
      throw new Error('File export is unavailable in this browser context.');
    }
    const source = String(text);
    const blob = new Blob([source], { type: `${mimeType};charset=utf-8` });

    if (typeof File !== 'undefined' && globalThis.navigator?.share && globalThis.navigator?.canShare) {
      const file = new File([blob], filename, { type: blob.type, lastModified: Date.now() });
      if (globalThis.navigator.canShare({ files: [file] })) {
        try {
          await globalThis.navigator.share({
            files: [file],
            title: filename,
            text: 'Infinite Paths local campaign data',
          });
          return { filename, bytes: blob.size, method: 'share' };
        } catch (error) {
          if (error?.name === 'AbortError') {
            return { filename, bytes: blob.size, method: 'cancelled' };
          }
        }
      }
    }

    triggerBrowserDownload(blob, filename);
    return { filename, bytes: blob.size, method: 'download' };
  }

  function deliverJsonFile(value, filename) {
    return deliverTextFile(jsonText(value), filename, 'application/json');
  }

  async function readSelectedFile(file, maximumBytes = IP.DEFAULT_JSON_LIMITS.maximumBytes) {
    if (!file || typeof file.text !== 'function') {
      throw new TypeError('Choose a JSON backup file first.');
    }
    if (Number(file.size) > maximumBytes) {
      throw new RangeError(`The selected file exceeds the ${Math.floor(maximumBytes / 1048576)} MB safety limit.`);
    }
    const text = await file.text();
    if (!text.trim()) {
      throw new RangeError('The selected file is empty.');
    }
    return text;
  }

  return {
    deliverJsonFile,
    deliverTextFile,
    jsonText,
    readSelectedFile,
    safeFilename,
    triggerBrowserDownload,
  };
});

/* ===== src/js/content/content-pack-bundle.js ===== */
(function (root, factory) {
  const namespace = (root.InfinitePaths = root.InfinitePaths || {});
  const exported = factory(namespace);
  Object.assign(namespace, exported);
  if (typeof module !== 'undefined' && module.exports) module.exports = exported;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (IP) {
  'use strict';

  const CONTENT_PACK_PACKAGE_SCHEMA_VERSION = 1;
  const CONTENT_PACK_PACKAGE_KIND = 'infinite-paths-content-pack';
  const CONTENT_PACK_PACKAGE_INTEGRITY_SCOPE = 'content-pack-bundle-v1';
  const CAMPAIGN_GENERATOR_SCHEMA_VERSION = 1;
  const CAMPAIGN_GENERATOR_KIND = 'generic-horror-v1';
  const MAXIMUM_PACK_FILES = 128;
  const MAXIMUM_PACK_SCENES = 10000;
  const MAXIMUM_GENERATOR_ENTRIES = 256;

  function assert(condition, message, ErrorType = TypeError) {
    if (!condition) throw new ErrorType(message);
  }

  function isObject(value) {
    return IP.isPlainObject(value);
  }

  function requireObject(value, label) {
    assert(isObject(value), `${label} must be an object.`);
    return value;
  }

  function requireString(value, label, minimum = 1, maximum = 2000) {
    const text = String(value ?? '').normalize('NFKC').trim();
    assert(text.length >= minimum && text.length <= maximum, `${label} must contain between ${minimum} and ${maximum} characters.`, RangeError);
    return text;
  }

  function requireId(value, label) {
    const text = requireString(value, label, 1, 160);
    assert(IP.ID_PATTERN.test(text), `${label} is not a valid Infinite Paths identifier.`, RangeError);
    return text;
  }

  function requireSemver(value, label) {
    const text = requireString(value, label, 1, 80);
    assert(IP.SEMVER_PATTERN.test(text), `${label} must use semantic versioning.`, RangeError);
    return text;
  }

  function requireArray(value, label, minimum = 0, maximum = MAXIMUM_GENERATOR_ENTRIES) {
    assert(Array.isArray(value), `${label} must be an array.`);
    assert(value.length >= minimum && value.length <= maximum, `${label} must contain between ${minimum} and ${maximum} entries.`, RangeError);
    return value;
  }

  function uniqueBy(records, selector, label) {
    const values = records.map(selector);
    assert(new Set(values).size === values.length, `${label} must be unique.`, RangeError);
  }

  function normalizeBackground(record) {
    requireObject(record, 'Campaign background');
    return {
      id: requireId(record.id, 'Background ID'),
      name: requireString(record.name, 'Background name', 1, 100),
      skill: requireId(record.skill, 'Background skill'),
      resource: requireId(record.resource, 'Background resource'),
      description: record.description === undefined
        ? ''
        : requireString(record.description, 'Background description', 1, 500),
    };
  }

  function normalizeThreat(record, namespace) {
    requireObject(record, 'Threat');
    const id = requireId(record.id, 'Threat ID');
    assert(id.startsWith(`${namespace}.`), `Threat ID ${id} must use namespace ${namespace}.`, RangeError);
    const capabilities = record.capabilities || (record.capability ? [record.capability] : []);
    const limitations = record.limitations || (record.limitation ? [record.limitation] : []);
    return {
      id,
      name: requireString(record.name, 'Threat name', 1, 120),
      capabilities: requireArray(capabilities, 'Threat capabilities', 1, 12)
        .map((item) => requireString(item, 'Threat capability', 1, 800)),
      limitations: requireArray(limitations, 'Threat limitations', 1, 12)
        .map((item) => requireString(item, 'Threat limitation', 1, 800)),
      knowledge: requireArray(record.knowledge || [], 'Threat knowledge', 0, 24)
        .map((item) => requireString(item, 'Threat knowledge', 1, 400)),
    };
  }

  function normalizeFaction(record) {
    requireObject(record, 'Faction');
    return {
      name: requireString(record.name, 'Faction name', 1, 120),
      agenda: requireString(record.agenda, 'Faction agenda', 1, 800),
    };
  }

  function normalizeMystery(record, namespace) {
    requireObject(record, 'Mystery');
    const id = requireId(record.id, 'Mystery ID');
    assert(id.startsWith(`${namespace}.`), `Mystery ID ${id} must use namespace ${namespace}.`, RangeError);
    requireObject(record.keyClue, 'Mystery key clue');
    const clueId = requireId(record.keyClue.id, 'Mystery key-clue ID');
    assert(clueId.startsWith(`${namespace}.`), `Key-clue ID ${clueId} must use namespace ${namespace}.`, RangeError);
    return {
      id,
      title: requireString(record.title, 'Mystery title', 1, 160),
      truth: requireString(record.truth, 'Mystery truth', 1, 1600),
      correctTheoryId: requireId(record.correctTheoryId, 'Correct theory ID'),
      keyClue: {
        id: clueId,
        name: requireString(record.keyClue.name, 'Key-clue name', 1, 160),
        summary: requireString(record.keyClue.summary, 'Key-clue summary', 1, 1200),
      },
    };
  }

  function normalizeCastList(value, label, namespace, expectedSex = null) {
    const records = requireArray(value, label, 1, 64).map((record) => {
      requireObject(record, label);
      const id = requireId(record.id, `${label} ID`);
      assert(id.startsWith(`${namespace}.`), `${label} ID ${id} must use namespace ${namespace}.`, RangeError);
      const sex = record.sex === undefined ? expectedSex : requireString(record.sex, `${label} sex`, 1, 20);
      if (expectedSex) assert(sex === expectedSex, `${label} entries must use ${expectedSex} characters.`, RangeError);
      return {
        id,
        name: requireString(record.name, `${label} name`, 1, 120),
        firstName: requireString(record.firstName, `${label} first name`, 1, 80),
        role: requireString(record.role, `${label} role`, 1, 160),
        sex,
        temperament: record.temperament === undefined ? 'steady' : requireString(record.temperament, `${label} temperament`, 1, 80),
        instinct: record.instinct === undefined ? 'practical' : requireString(record.instinct, `${label} instinct`, 1, 80),
      };
    });
    uniqueBy(records, (record) => record.id, `${label} IDs`);
    return records;
  }

  function normalizeInventory(value, namespace) {
    return requireArray(value || [], 'Initial inventory', 0, 64).map((record) => {
      requireObject(record, 'Initial inventory item');
      const id = requireId(record.id, 'Initial inventory item ID');
      assert(id.startsWith(`${namespace}.`) || id.startsWith('background.'), `Inventory ID ${id} must use the pack namespace or background namespace.`, RangeError);
      return {
        id,
        name: requireString(record.name, 'Initial inventory item name', 1, 120),
        quantity: Math.max(1, Math.min(99, Number(record.quantity || 1))),
        source: requireString(record.source || 'content-pack', 'Initial inventory source', 1, 80),
      };
    });
  }

  function validateCampaignGeneratorDefinition(candidate, manifest = null) {
    requireObject(candidate, 'Campaign-generator file');
    IP.inspectJsonValue(candidate, {
      maximumDepth: 48,
      maximumEntries: 20000,
      maximumStringLength: 100000,
    });
    const generator = IP.cloneData(candidate);
    assert(generator.schemaVersion === CAMPAIGN_GENERATOR_SCHEMA_VERSION, `Campaign-generator schemaVersion must be ${CAMPAIGN_GENERATOR_SCHEMA_VERSION}.`, RangeError);
    generator.id = requireId(generator.id, 'Campaign-generator ID');
    generator.contentPackId = requireId(generator.contentPackId, 'Campaign-generator content-pack ID');
    generator.contentPackVersions = requireArray(generator.contentPackVersions, 'Campaign-generator content-pack versions', 1, 64)
      .map((version) => requireSemver(version, 'Campaign-generator content-pack version'));
    uniqueBy(generator.contentPackVersions, (version) => version, 'Campaign-generator content-pack versions');
    generator.genre = requireString(generator.genre, 'Campaign-generator genre', 1, 80);
    generator.engineProfile = requireString(generator.engineProfile, 'Campaign-generator engine profile', 1, 80);
    assert(generator.engineProfile === CAMPAIGN_GENERATOR_KIND, `Milestone 7 external packs must use engineProfile ${CAMPAIGN_GENERATOR_KIND}.`, RangeError);
    generator.seedPrefix = requireString(generator.seedPrefix || 'PATH', 'Campaign-generator seed prefix', 2, 16).toUpperCase();
    generator.backgrounds = requireArray(generator.backgrounds, 'Campaign-generator backgrounds', 1, 24).map(normalizeBackground);
    uniqueBy(generator.backgrounds, (background) => background.id, 'Background IDs');

    const namespace = manifest?.namespace || generator.contentPackId;
    assert(generator.id.startsWith(`${namespace}.`), `Campaign-generator ID must use namespace ${namespace}.`, RangeError);
    if (manifest) {
      assert(generator.contentPackId === manifest.id, 'Campaign-generator contentPackId does not match the manifest.', RangeError);
      assert(generator.contentPackVersions.includes(manifest.version), 'Campaign-generator versions do not include the manifest version.', RangeError);
      assert(manifest.genres.includes(generator.genre), 'Campaign-generator genre is not declared by the manifest.', RangeError);
      assert(generator.genre === 'horror', 'The first external generator profile supports Horror packs only.', RangeError);
    }

    const world = requireObject(generator.world, 'Campaign-generator world definition');
    generator.world = {
      regions: requireArray(world.regions, 'World regions', 1, 64).map((item) => requireString(item, 'World region', 1, 120)),
      settlements: requireArray(world.settlements, 'World settlements', 1, 64).map((item) => requireString(item, 'World settlement', 1, 120)),
      incidents: requireArray(world.incidents, 'World incidents', 1, 64).map((item) => requireString(item, 'World incident', 1, 160)),
      sites: requireArray(world.sites, 'World sites', 3, 128).map((item) => requireString(item, 'World site', 1, 200)),
      travelRule: requireString(world.travelRule || 'Travel between major locations consumes one time segment.', 'World travel rule', 1, 500),
      threats: requireArray(world.threats, 'World threats', 1, 64).map((record) => normalizeThreat(record, namespace)),
      factions: requireArray(world.factions, 'World factions', 1, 64).map(normalizeFaction),
      mysteries: requireArray(world.mysteries, 'World mysteries', 1, 64).map((record) => normalizeMystery(record, namespace)),
      weather: requireArray(world.weather || ['still air under a darkening sky'], 'World weather details', 1, 64)
        .map((item) => requireString(item, 'World weather detail', 1, 200)),
      cast: {
        responder: normalizeCastList(world.cast?.responder, 'Responder cast', namespace, 'female'),
        deputy: normalizeCastList(world.cast?.deputy, 'Deputy cast', namespace),
        shelterLead: normalizeCastList(world.cast?.shelterLead, 'Shelter-lead cast', namespace),
        complications: requireArray(world.cast?.complications, 'Standard complications', 1, 32).map((record) => {
          requireObject(record, 'Standard complication');
          const id = requireId(record.id, 'Standard complication ID');
          assert(id.startsWith(`${namespace}.`), `Complication ID ${id} must use namespace ${namespace}.`, RangeError);
          return { id, label: requireString(record.label, 'Standard complication label', 1, 160) };
        }),
      },
      timeline: requireArray(world.timeline || [], 'World timeline', 0, 64).map((record) => {
        requireObject(record, 'World timeline entry');
        return {
          day: Number.isFinite(Number(record.day)) ? Number(record.day) : 0,
          event: requireString(record.event, 'World timeline event', 1, 600),
        };
      }),
      victoryConditions: requireArray(world.victoryConditions, 'World victory conditions', 1, 32)
        .map((item) => requireString(item, 'Victory condition', 1, 800)),
      failureConditions: requireArray(world.failureConditions, 'World failure conditions', 1, 32)
        .map((item) => requireString(item, 'Failure condition', 1, 800)),
    };
    uniqueBy(generator.world.threats, (record) => record.id, 'Threat IDs');
    uniqueBy(generator.world.mysteries, (record) => record.id, 'Mystery IDs');
    uniqueBy(generator.world.cast.complications, (record) => record.id, 'Complication IDs');

    generator.initialState = {
      inventory: normalizeInventory(generator.initialState?.inventory || [], namespace),
      storyBonusInventory: normalizeInventory(generator.initialState?.storyBonusInventory || [], namespace),
    };
    return generator;
  }

  function fileDigest(data) {
    return IP.sha256Hex(IP.canonicalStringify(data));
  }

  function validateContentPackPackage(candidate, { allowMissingIntegrity = false } = {}) {
    requireObject(candidate, 'Content-pack package');
    IP.inspectJsonValue(candidate, {
      maximumBytes: IP.APP_CONFIG?.maximumPackImportBytes || 12 * 1024 * 1024,
      maximumDepth: 100,
      maximumEntries: 160000,
      maximumStringLength: 2 * 1024 * 1024,
    });
    const bundle = IP.cloneData(candidate);
    assert(bundle.packageSchemaVersion === CONTENT_PACK_PACKAGE_SCHEMA_VERSION, `Content-pack package schemaVersion must be ${CONTENT_PACK_PACKAGE_SCHEMA_VERSION}.`, RangeError);
    assert(bundle.kind === CONTENT_PACK_PACKAGE_KIND, `Content-pack package kind must be ${CONTENT_PACK_PACKAGE_KIND}.`, RangeError);
    requireString(bundle.createdAt, 'Content-pack package creation time', 10, 80);
    assert(!Number.isNaN(Date.parse(bundle.createdAt)), 'Content-pack package creation time must be a date-time.', RangeError);
    bundle.manifest = IP.validateContentPackManifest(bundle.manifest);
    assert(bundle.manifest.delivery === 'external-json', 'Installable content packs must use external-json delivery.', RangeError);
    assert(!bundle.manifest.id.startsWith('ip.original.'), 'External packs cannot claim the reserved ip.original namespace.', RangeError);
    assert(!bundle.manifest.namespace.startsWith('ip.original.'), 'External packs cannot claim a bundled-content namespace.', RangeError);

    bundle.files = requireArray(bundle.files, 'Content-pack package files', 1, MAXIMUM_PACK_FILES).map((file) => {
      requireObject(file, 'Content-pack package file');
      const path = requireString(file.path, 'Package file path', 1, 300);
      const type = requireString(file.type, 'Package file type', 1, 80);
      const sha256 = requireString(file.sha256, 'Package file SHA-256', 64, 64);
      assert(/^[a-f0-9]{64}$/.test(sha256), 'Package file SHA-256 must contain 64 lowercase hexadecimal characters.', RangeError);
      assert(isObject(file.data) || Array.isArray(file.data), `Package file ${path} must contain JSON object or array data.`, RangeError);
      return { path, type, sha256, data: IP.cloneData(file.data) };
    });
    uniqueBy(bundle.files, (file) => file.path, 'Package file paths');

    const manifestFiles = new Map(bundle.manifest.files.map((file) => [file.path, file]));
    assert(manifestFiles.size === bundle.files.length, 'Package files must exactly match the manifest file list.', RangeError);
    for (const file of bundle.files) {
      const descriptor = manifestFiles.get(file.path);
      assert(descriptor, `Package contains undeclared file ${file.path}.`, RangeError);
      assert(descriptor.type === file.type, `Package file type does not match the manifest for ${file.path}.`, RangeError);
      assert(descriptor.sha256, `Manifest file ${file.path} must include a SHA-256 digest.`, RangeError);
      const calculated = fileDigest(file.data);
      assert(IP.constantTimeEqual(calculated, file.sha256), `Package file ${file.path} does not match its SHA-256 digest.`, RangeError);
      assert(IP.constantTimeEqual(calculated, descriptor.sha256), `Manifest digest does not match package file ${file.path}.`, RangeError);
    }
    for (const descriptor of bundle.manifest.files) {
      assert(bundle.files.some((file) => file.path === descriptor.path), `Manifest file ${descriptor.path} is missing from the package.`, RangeError);
    }

    const generatorFiles = bundle.files.filter((file) => file.type === 'campaign-generators');
    const sceneFiles = bundle.files.filter((file) => file.type === 'scenes');
    assert(generatorFiles.length === 1, 'A playable external pack must include exactly one campaign-generators file.', RangeError);
    assert(sceneFiles.length === 1, 'A playable external pack must include exactly one scenes file.', RangeError);
    const generator = validateCampaignGeneratorDefinition(generatorFiles[0].data, bundle.manifest);
    const narrative = IP.cloneData(sceneFiles[0].data);
    const narrativeReport = IP.validateNarrativeContent(narrative);
    assert(narrativeReport.ok, 'Narrative content did not pass validation.', RangeError);
    assert(narrative.scenes.length <= MAXIMUM_PACK_SCENES, `Narrative content exceeds ${MAXIMUM_PACK_SCENES} scenes.`, RangeError);
    assert(narrative.contentPackId === bundle.manifest.id, 'Narrative contentPackId does not match the manifest.', RangeError);
    assert(narrative.contentPackVersions.includes(bundle.manifest.version), 'Narrative versions do not include the manifest version.', RangeError);
    assert(narrative.genre === generator.genre, 'Narrative genre does not match the campaign generator.', RangeError);
    assert(narrative.id.startsWith(`${bundle.manifest.namespace}.`), 'Narrative content ID must use the manifest namespace.', RangeError);
    for (const scene of narrative.scenes) {
      assert(scene.id.startsWith(`${bundle.manifest.namespace}.`), `Scene ID ${scene.id} must use namespace ${bundle.manifest.namespace}.`, RangeError);
    }

    if (bundle.integrity) {
      const verified = IP.verifySealedRecord(bundle, CONTENT_PACK_PACKAGE_INTEGRITY_SCOPE);
      assert(verified.ok, `Content-pack package integrity failed: ${verified.reason}`, RangeError);
    } else if (!allowMissingIntegrity) {
      throw new RangeError('Content-pack package integrity metadata is missing.');
    }

    return { bundle, manifest: bundle.manifest, generator, narrative };
  }

  function createContentPackPackage({ manifest, files, createdAt = new Date().toISOString() }) {
    const normalizedManifest = IP.validateContentPackManifest(manifest);
    const normalizedFiles = requireArray(files, 'Content-pack package files', 1, MAXIMUM_PACK_FILES).map((file) => ({
      path: requireString(file.path, 'Package file path', 1, 300),
      type: requireString(file.type, 'Package file type', 1, 80),
      data: IP.cloneData(file.data),
      sha256: fileDigest(file.data),
    }));
    const digestByPath = new Map(normalizedFiles.map((file) => [file.path, file.sha256]));
    const manifestWithDigests = {
      ...normalizedManifest,
      files: normalizedManifest.files.map((descriptor) => {
        const digest = digestByPath.get(descriptor.path);
        assert(digest, `No package data was provided for ${descriptor.path}.`, RangeError);
        return { ...descriptor, sha256: digest };
      }),
    };
    const packageRecord = {
      packageSchemaVersion: CONTENT_PACK_PACKAGE_SCHEMA_VERSION,
      kind: CONTENT_PACK_PACKAGE_KIND,
      createdAt,
      manifest: manifestWithDigests,
      files: normalizedFiles,
    };
    const sealed = IP.sealRecord(packageRecord, CONTENT_PACK_PACKAGE_INTEGRITY_SCOPE);
    return validateContentPackPackage(sealed).bundle;
  }

  function inspectContentPackPackageHeader(candidate) {
    if (!isObject(candidate)) return { state: 'invalid', reason: 'The selected JSON is not a content-pack object.' };
    const schemaVersion = Number(candidate.packageSchemaVersion);
    if (Number.isInteger(schemaVersion) && schemaVersion > CONTENT_PACK_PACKAGE_SCHEMA_VERSION) {
      return {
        state: 'future',
        reason: `Package schema ${schemaVersion} requires a newer Infinite Paths release.`,
        schemaVersion,
        title: candidate.manifest?.title || null,
        packId: candidate.manifest?.id || null,
        version: candidate.manifest?.version || null,
      };
    }
    if (candidate.manifest?.schemaVersion > 2) {
      return {
        state: 'future',
        reason: `Manifest schema ${candidate.manifest.schemaVersion} requires a newer Infinite Paths release.`,
        schemaVersion: candidate.manifest.schemaVersion,
        title: candidate.manifest?.title || null,
        packId: candidate.manifest?.id || null,
        version: candidate.manifest?.version || null,
      };
    }
    return { state: 'current' };
  }

  function packageFilename(manifest) {
    return `${IP.safeFilename(manifest.title, manifest.id)}-${manifest.version}.ippack.json`;
  }

  return {
    CAMPAIGN_GENERATOR_KIND,
    CAMPAIGN_GENERATOR_SCHEMA_VERSION,
    CONTENT_PACK_PACKAGE_INTEGRITY_SCOPE,
    CONTENT_PACK_PACKAGE_KIND,
    CONTENT_PACK_PACKAGE_SCHEMA_VERSION,
    createContentPackPackage,
    fileDigest,
    inspectContentPackPackageHeader,
    packageFilename,
    validateCampaignGeneratorDefinition,
    validateContentPackPackage,
  };
});

/* ===== src/js/content/fanfiction-pack-templates.js ===== */
(function (root, factory) {
  const namespace = (root.InfinitePaths = root.InfinitePaths || {});
  const exported = factory(namespace);
  Object.assign(namespace, exported);
  if (typeof module !== 'undefined' && module.exports) module.exports = exported;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (IP) {
  'use strict';

  const FANFICTION_PACK_SKELETONS = Object.freeze([
    Object.freeze({
      id: 'fan.private.harry-potter',
      namespace: 'fan.private.harry-potter',
      title: 'Harry Potter Private Pack Skeleton',
      propertyName: 'Harry Potter',
      sourceWorks: Object.freeze(['Harry Potter novels']),
      genre: 'horror',
      intendedEngineProfile: IP.CAMPAIGN_GENERATOR_KIND || 'generic-horror-v1',
      notes: 'Private local authoring skeleton. Canon research, characters, spells, locations, and scenes must be authored separately before installation.',
    }),
    Object.freeze({
      id: 'fan.private.eragon',
      namespace: 'fan.private.eragon',
      title: 'Eragon Private Pack Skeleton',
      propertyName: 'The Inheritance Cycle',
      sourceWorks: Object.freeze(['The Inheritance Cycle novels']),
      genre: 'horror',
      intendedEngineProfile: IP.CAMPAIGN_GENERATOR_KIND || 'generic-horror-v1',
      notes: 'Private local authoring skeleton for future dragon-rider campaigns. It contains no playable source text.',
    }),
    Object.freeze({
      id: 'fan.private.spider-man',
      namespace: 'fan.private.spider-man',
      title: 'Spider-Man Private Pack Skeleton',
      propertyName: 'Spider-Man',
      sourceWorks: Object.freeze(['Selected Spider-Man continuity to be declared by the author']),
      genre: 'horror',
      intendedEngineProfile: IP.CAMPAIGN_GENERATOR_KIND || 'generic-horror-v1',
      notes: 'Private local authoring skeleton for future superhero campaigns. Exact continuity must be selected before content is written.',
    }),
  ]);

  function createFanfictionPackSkeleton(templateId) {
    const template = FANFICTION_PACK_SKELETONS.find((candidate) => candidate.id === templateId);
    if (!template) throw new RangeError('Unknown fanfiction-pack skeleton.');
    const generatorPath = 'content/campaign-generator.json';
    const scenesPath = 'content/scenes.json';
    return {
      skeletonVersion: 1,
      status: 'authoring-only',
      title: template.title,
      instructions: [
        'Replace all AUTHOR_TODO values with researched, original authored data.',
        'Keep the pack private-local unless the source rights permit redistribution.',
        'Use unique namespaced IDs for every threat, clue, character, scene, and ending.',
        'Run package validation and campaign simulations before installation.',
      ],
      manifest: {
        schemaVersion: 2,
        id: template.id,
        namespace: template.namespace,
        title: template.title.replace(' Skeleton', ''),
        version: '0.1.0',
        supportedCampaignVersions: ['0.1.0'],
        description: 'AUTHOR_TODO: describe the private interactive-fiction pack.',
        kind: 'fanfiction',
        delivery: 'external-json',
        genres: [template.genre],
        sourceMaterial: {
          propertyName: template.propertyName,
          sourceWorks: [...template.sourceWorks],
          canonMode: 'canon-compatible',
          rightsNotice: 'Private, noncommercial fan work. No ownership of the source property is claimed.',
        },
        distribution: { mode: 'private-local', intendedUse: 'personal local play' },
        engineCompatibility: {
          minimumRulesVersion: '0.9.0',
          maximumRulesVersion: '0.9.99',
          contentSchemaVersion: 3,
        },
        playerProfileCompatibility: {
          protagonistSexes: ['male'],
          romancePartnerSexes: ['female'],
          requiredProfileTags: [],
        },
        dependencies: [],
        files: [
          { id: `${template.namespace}.generator`, type: 'campaign-generators', path: generatorPath, loadPhase: 'campaign-create' },
          { id: `${template.namespace}.scenes`, type: 'scenes', path: scenesPath, loadPhase: 'campaign-create' },
        ],
        contentWarnings: [],
        credits: {
          authors: ['Private author'],
          license: 'Private fan work',
          notes: template.notes,
        },
      },
      generatorTemplate: {
        schemaVersion: 1,
        id: `${template.namespace}.campaign-generator`,
        contentPackId: template.id,
        contentPackVersions: ['0.1.0'],
        genre: template.genre,
        engineProfile: template.intendedEngineProfile,
        seedPrefix: 'FAN',
        backgrounds: [],
        world: {
          regions: [], settlements: [], incidents: [], sites: [],
          travelRule: 'AUTHOR_TODO', threats: [], factions: [], mysteries: [], weather: [],
          cast: { responder: [], deputy: [], shelterLead: [], complications: [] },
          timeline: [], victoryConditions: [], failureConditions: [],
        },
        initialState: { inventory: [], storyBonusInventory: [] },
      },
      narrativeTemplate: {
        schemaVersion: 2,
        id: `${template.namespace}.narrative`,
        contentPackId: template.id,
        contentPackVersions: ['0.1.0'],
        narrativeVersion: '0.1.0',
        genre: template.genre,
        startSceneId: `${template.namespace}.opening`,
        scenes: [],
      },
    };
  }

  return { FANFICTION_PACK_SKELETONS, createFanfictionPackSkeleton };
});

/* ===== src/js/storage/content-pack-store.js ===== */
(function (root, factory) {
  const namespace = (root.InfinitePaths = root.InfinitePaths || {});
  const exported = factory(namespace);
  Object.assign(namespace, exported);
  if (typeof module !== 'undefined' && module.exports) module.exports = exported;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (IP) {
  'use strict';

  const INSTALLED_PACK_SCOPE = 'installed-content-pack-v1';
  const INSTALLED_FILE_SCOPE = 'installed-content-file-v1';
  const PACK_QUARANTINE_SCOPE = 'content-pack-quarantine-v1';

  function cloneData(value) {
    return IP.cloneData(value);
  }

  function packKey(packId, version) {
    return IP.contentPackKey(packId, version);
  }

  function fileKey(packIdentity, path) {
    return `${packIdentity}::${path}`;
  }

  function verifyRecord(record, scope, label) {
    const result = IP.verifySealedRecord(record, scope);
    if (!result.ok) throw new RangeError(`${label} integrity failed: ${result.reason}`);
    return record;
  }

  class ContentPackStore {
    constructor(database) {
      this.database = database;
    }

    async listInstalledRecords({ verify = true } = {}) {
      const records = await this.database.getAll(IP.STORE_NAMES.contentPacks);
      return records
        .map((record) => {
          try {
            return verify ? cloneData(verifyRecord(record, INSTALLED_PACK_SCOPE, 'Installed content pack')) : cloneData(record);
          } catch (error) {
            return { ...cloneData(record), invalid: true, integrityError: String(error.message || error) };
          }
        })
        .sort((left, right) => {
          const title = String(left.manifest?.title || left.packId || '').localeCompare(String(right.manifest?.title || right.packId || ''));
          if (title) return title;
          return typeof IP.compareVersions === 'function'
            ? IP.compareVersions(right.packVersion, left.packVersion)
            : String(right.packVersion).localeCompare(String(left.packVersion), undefined, { numeric: true });
        });
    }

    async getInstalledRecord(packId, version, { verify = true } = {}) {
      const record = await this.database.get(IP.STORE_NAMES.contentPacks, packKey(packId, version));
      if (!record) return null;
      return cloneData(verify ? verifyRecord(record, INSTALLED_PACK_SCOPE, 'Installed content pack') : record);
    }

    async listFileRecords(packId, version, { verify = true } = {}) {
      const identity = packKey(packId, version);
      const records = await this.database.getAllByIndex(IP.STORE_NAMES.contentFiles, 'packKey', identity);
      return records
        .map((record) => cloneData(verify ? verifyRecord(record, INSTALLED_FILE_SCOPE, 'Installed content file') : record))
        .sort((left, right) => left.path.localeCompare(right.path));
    }

    async reconstructPackage(packId, version) {
      const record = await this.getInstalledRecord(packId, version);
      if (!record) return null;
      const files = await this.listFileRecords(packId, version);
      const bundle = {
        packageSchemaVersion: record.packageSchemaVersion,
        kind: record.packageKind,
        createdAt: record.packageCreatedAt,
        manifest: cloneData(record.manifest),
        files: files.map((file) => ({
          path: file.path,
          type: file.type,
          sha256: file.sha256,
          data: cloneData(file.data),
        })),
        integrity: cloneData(record.packageIntegrity),
      };
      return IP.validateContentPackPackage(bundle).bundle;
    }

    async saveValidatedPackage(validation, {
      enabled = true,
      sourceFilename = null,
      installedAt = new Date().toISOString(),
      updatedAt = installedAt,
    } = {}) {
      const { bundle, manifest } = validation;
      const identity = packKey(manifest.id, manifest.version);
      const existingFiles = await this.listFileRecords(manifest.id, manifest.version, { verify: false });
      const record = IP.sealRecord({
        id: identity,
        recordType: 'installed-content-pack',
        schemaVersion: 1,
        packId: manifest.id,
        packVersion: manifest.version,
        manifest: cloneData(manifest),
        enabled: Boolean(enabled),
        packageSchemaVersion: bundle.packageSchemaVersion,
        packageKind: bundle.kind,
        packageCreatedAt: bundle.createdAt,
        packageIntegrity: cloneData(bundle.integrity),
        sourceFilename: sourceFilename ? String(sourceFilename).slice(0, 300) : null,
        sizeBytes: IP.utf8Bytes(IP.canonicalStringify(bundle)).byteLength,
        fileCount: bundle.files.length,
        installedAt,
        updatedAt,
      }, INSTALLED_PACK_SCOPE);
      const files = bundle.files.map((file) => IP.sealRecord({
        id: fileKey(identity, file.path),
        recordType: 'installed-content-file',
        schemaVersion: 1,
        packKey: identity,
        packId: manifest.id,
        packVersion: manifest.version,
        path: file.path,
        type: file.type,
        sha256: file.sha256,
        data: cloneData(file.data),
        installedAt,
        updatedAt,
      }, INSTALLED_FILE_SCOPE));

      await this.database.runTransaction(
        [IP.STORE_NAMES.contentPacks, IP.STORE_NAMES.contentFiles],
        'readwrite',
        (stores) => {
          for (const existing of existingFiles) stores[IP.STORE_NAMES.contentFiles].delete(existing.id);
          for (const file of files) stores[IP.STORE_NAMES.contentFiles].put(file);
          stores[IP.STORE_NAMES.contentPacks].put(record);
        },
      );
      return cloneData(record);
    }

    async setEnabled(packId, version, enabled, updatedAt = new Date().toISOString()) {
      const record = await this.getInstalledRecord(packId, version);
      if (!record) throw new RangeError(`Content pack is not installed: ${packId}@${version}`);
      const next = IP.sealRecord({
        ...IP.unsignedRecord(record),
        enabled: Boolean(enabled),
        updatedAt,
      }, INSTALLED_PACK_SCOPE);
      await this.database.put(IP.STORE_NAMES.contentPacks, next);
      return cloneData(next);
    }

    async remove(packId, version) {
      const identity = packKey(packId, version);
      const existing = await this.database.get(IP.STORE_NAMES.contentPacks, identity);
      const files = await this.listFileRecords(packId, version, { verify: false });
      await this.database.runTransaction(
        [IP.STORE_NAMES.contentPacks, IP.STORE_NAMES.contentFiles],
        'readwrite',
        (stores) => {
          for (const file of files) stores[IP.STORE_NAMES.contentFiles].delete(file.id);
          stores[IP.STORE_NAMES.contentPacks].delete(identity);
        },
      );
      return Boolean(existing);
    }

    async saveQuarantine({ rawText, sourceFilename = null, reason, header = null }, now = () => new Date().toISOString()) {
      const createdAt = now();
      const digest = IP.sha256Hex(String(rawText));
      const id = `pack-quarantine:${createdAt}:${digest.slice(0, 16)}`;
      const record = IP.sealRecord({
        id,
        recordType: 'content-pack-quarantine',
        schemaVersion: 1,
        sourceFilename: sourceFilename ? String(sourceFilename).slice(0, 300) : null,
        reason: String(reason || 'Future content-pack format').slice(0, 1000),
        header: header ? cloneData(header) : null,
        rawText: String(rawText),
        sha256: digest,
        createdAt,
      }, PACK_QUARANTINE_SCOPE);
      await this.database.put(IP.STORE_NAMES.packQuarantine, record);
      return cloneData(record);
    }

    async listQuarantine() {
      const records = await this.database.getAll(IP.STORE_NAMES.packQuarantine);
      return records.map((record) => cloneData(verifyRecord(record, PACK_QUARANTINE_SCOPE, 'Content-pack quarantine record')))
        .sort((left, right) => String(right.createdAt).localeCompare(String(left.createdAt)));
    }

    async getQuarantine(id) {
      const record = await this.database.get(IP.STORE_NAMES.packQuarantine, id);
      return record ? cloneData(verifyRecord(record, PACK_QUARANTINE_SCOPE, 'Content-pack quarantine record')) : null;
    }

    deleteQuarantine(id) {
      return this.database.delete(IP.STORE_NAMES.packQuarantine, id);
    }
  }

  return {
    ContentPackStore,
    INSTALLED_FILE_SCOPE,
    INSTALLED_PACK_SCOPE,
    PACK_QUARANTINE_SCOPE,
  };
});

/* ===== src/js/content/content-pack-service.js ===== */
(function (root, factory) {
  const namespace = (root.InfinitePaths = root.InfinitePaths || {});
  const exported = factory(namespace);
  Object.assign(namespace, exported);
  if (typeof module !== 'undefined' && module.exports) module.exports = exported;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (IP) {
  'use strict';

  function cloneData(value) {
    return IP.cloneData(value);
  }

  function compare(left, right) {
    return typeof IP.compareVersions === 'function'
      ? IP.compareVersions(left, right)
      : String(left).localeCompare(String(right), undefined, { numeric: true });
  }

  function compatibleRules(manifest) {
    const current = IP.APP_CONFIG.rulesVersion;
    return compare(current, manifest.engineCompatibility.minimumRulesVersion) >= 0
      && compare(current, manifest.engineCompatibility.maximumRulesVersion) <= 0;
  }

  function exactCampaignUsage(campaigns, packId, version) {
    return campaigns.filter((campaign) => campaign.contentPack?.id === packId && campaign.contentPack?.version === version);
  }

  class ContentPackService {
    constructor(store, campaignStore) {
      this.store = store;
      this.campaignStore = campaignStore;
      this.initialized = false;
      this.initializationReport = null;
    }

    async initialize() {
      IP.resetRuntimeContentPacks();
      const records = await this.store.listInstalledRecords({ verify: false });
      const report = {
        checked: records.length,
        loaded: 0,
        disabled: 0,
        invalid: [],
        missingDependencies: [],
      };
      for (const record of records) {
        try {
          const packageRecord = await this.store.reconstructPackage(record.packId, record.packVersion);
          const validation = IP.validateContentPackPackage(packageRecord);
          IP.registerRuntimeContentPack(validation.manifest, {
            generator: validation.generator,
            narrative: validation.narrative,
            enabled: Boolean(record.enabled),
          });
          report.loaded += 1;
          if (!record.enabled) report.disabled += 1;
        } catch (error) {
          report.invalid.push({
            packId: record.packId || record.manifest?.id || 'unknown',
            version: record.packVersion || record.manifest?.version || 'unknown',
            reason: String(error.message || error),
          });
        }
      }
      const installed = IP.listRuntimeContentPacks();
      for (const manifest of installed) {
        const missing = this.findMissingDependencies(manifest, installed);
        if (missing.length) report.missingDependencies.push({ packId: manifest.id, version: manifest.version, missing });
      }
      this.initialized = true;
      this.initializationReport = report;
      return cloneData(report);
    }

    findMissingDependencies(manifest, externalManifests = IP.listRuntimeContentPacks()) {
      const all = [...IP.BUILTIN_CONTENT_PACKS, ...externalManifests];
      return manifest.dependencies.filter((dependency) => !all.some((candidate) =>
        candidate.id === dependency.packId && compare(candidate.version, dependency.minimumVersion) >= 0));
    }

    async listCatalog() {
      const campaigns = await this.campaignStore.listCampaigns();
      const records = await this.store.listInstalledRecords({ verify: false });
      const recordByKey = new Map(records.map((record) => [IP.contentPackKey(record.packId, record.packVersion), record]));
      const manifests = IP.listRegisteredContentPacks();
      return manifests.map((manifest) => {
        const usage = exactCampaignUsage(campaigns, manifest.id, manifest.version);
        const record = recordByKey.get(IP.contentPackKey(manifest.id, manifest.version));
        return {
          ...cloneData(manifest),
          enabled: manifest.builtIn ? true : Boolean(record?.enabled),
          installedAt: record?.installedAt || null,
          updatedAt: record?.updatedAt || null,
          sizeBytes: record?.sizeBytes || 0,
          fileCount: record?.fileCount || manifest.files?.length || 0,
          sourceFilename: record?.sourceFilename || null,
          campaignCount: usage.length,
          activeCampaignCount: usage.filter((campaign) => !['completed', 'failed', 'abandoned'].includes(campaign.status)).length,
          missingDependencies: this.findMissingDependencies(manifest),
          compatible: compatibleRules(manifest)
            && manifest.engineCompatibility.contentSchemaVersion === IP.APP_CONFIG.contentSchemaVersion
            && IP.isContentPackCompatibleWithPlayerProfile(manifest),
        };
      }).sort((left, right) => {
        if (left.builtIn !== right.builtIn) return left.builtIn ? -1 : 1;
        const title = left.title.localeCompare(right.title);
        return title || compare(right.version, left.version);
      });
    }

    async listCreationPacks() {
      return (await this.listCatalog()).filter((pack) => pack.enabled && pack.compatible && !pack.missingDependencies.length);
    }

    async analyzeImportText(rawText, sourceFilename = null) {
      const parsed = IP.parseJsonData(rawText, {
        maximumBytes: IP.APP_CONFIG.maximumPackImportBytes,
        maximumDepth: 100,
        maximumEntries: 160000,
        maximumStringLength: 2 * 1024 * 1024,
      });
      const header = IP.inspectContentPackPackageHeader(parsed);
      if (header.state === 'future') {
        return {
          state: 'future',
          rawText: String(rawText),
          sourceFilename,
          header,
          canQuarantine: true,
        };
      }
      const validation = IP.validateContentPackPackage(parsed);
      const { manifest, narrative, generator, bundle } = validation;
      if (!compatibleRules(manifest)) {
        throw new RangeError(`This pack supports rules ${manifest.engineCompatibility.minimumRulesVersion} through ${manifest.engineCompatibility.maximumRulesVersion}; this app uses ${IP.APP_CONFIG.rulesVersion}.`);
      }
      if (manifest.engineCompatibility.contentSchemaVersion !== IP.APP_CONFIG.contentSchemaVersion) {
        throw new RangeError(`This pack uses content schema ${manifest.engineCompatibility.contentSchemaVersion}; this app requires schema ${IP.APP_CONFIG.contentSchemaVersion}.`);
      }
      if (!IP.isContentPackCompatibleWithPlayerProfile(manifest)) {
        throw new RangeError('This pack is incompatible with the fixed personal protagonist and romance profile.');
      }
      const catalog = await this.listCatalog();
      const namespaceCollision = catalog.find((pack) => pack.namespace === manifest.namespace && pack.id !== manifest.id);
      if (namespaceCollision) {
        throw new RangeError(`Namespace ${manifest.namespace} is already owned by ${namespaceCollision.id}.`);
      }
      const missingDependencies = this.findMissingDependencies(manifest);
      if (missingDependencies.length) {
        throw new RangeError(`Missing dependencies: ${missingDependencies.map((item) => `${item.packId} ${item.minimumVersion}+`).join(', ')}.`);
      }
      this.assertNoDependencyCycle(manifest, catalog);
      const existing = catalog.find((pack) => pack.id === manifest.id && pack.version === manifest.version);
      const otherVersions = catalog.filter((pack) => pack.id === manifest.id && pack.version !== manifest.version);
      return {
        state: existing ? 'replace' : otherVersions.length ? 'update' : 'new',
        sourceFilename,
        validation,
        bundle: cloneData(bundle),
        manifest: cloneData(manifest),
        generator: cloneData(generator),
        narrativeReport: IP.validateNarrativeContent(narrative),
        existing: existing ? cloneData(existing) : null,
        otherVersions: cloneData(otherVersions),
        packageBytes: IP.utf8Bytes(String(rawText)).byteLength,
        packageDigest: bundle.integrity.value,
      };
    }

    assertNoDependencyCycle(candidate, catalog) {
      const manifests = new Map();
      for (const manifest of [...catalog, candidate]) {
        const existing = manifests.get(manifest.id);
        if (!existing || compare(manifest.version, existing.version) > 0) manifests.set(manifest.id, manifest);
      }
      const visiting = new Set();
      const visited = new Set();
      const visit = (id, path = []) => {
        if (visiting.has(id)) throw new RangeError(`Content-pack dependency cycle detected: ${[...path, id].join(' → ')}.`);
        if (visited.has(id)) return;
        const manifest = manifests.get(id);
        if (!manifest) return;
        visiting.add(id);
        for (const dependency of manifest.dependencies || []) visit(dependency.packId, [...path, id]);
        visiting.delete(id);
        visited.add(id);
      };
      visit(candidate.id);
    }

    async installPreview(preview, { replaceExisting = false, enable = true } = {}) {
      if (!preview || !['new', 'update', 'replace'].includes(preview.state)) {
        throw new TypeError('A validated current-version content-pack preview is required.');
      }
      if (preview.state === 'replace' && !replaceExisting) {
        throw new RangeError('This exact content-pack version is already installed. Explicit replacement confirmation is required.');
      }
      const manifest = preview.validation.manifest;
      if (preview.state === 'replace') {
        const current = await this.store.reconstructPackage(manifest.id, manifest.version);
        if (current) {
          await this.store.saveQuarantine({
            rawText: IP.jsonText(current),
            sourceFilename: IP.packageFilename(current.manifest),
            reason: `Recovery copy before exact-version replacement of ${manifest.id}@${manifest.version}.`,
            header: { state: 'recovery', packId: manifest.id, version: manifest.version, title: manifest.title },
          });
        }
      }
      const now = new Date().toISOString();
      await this.store.saveValidatedPackage(preview.validation, {
        enabled: Boolean(enable),
        sourceFilename: preview.sourceFilename,
        installedAt: preview.existing?.installedAt || now,
        updatedAt: now,
      });
      if (enable) {
        const samePack = (await this.store.listInstalledRecords()).filter((record) =>
          record.packId === manifest.id && record.packVersion !== manifest.version && record.enabled);
        for (const record of samePack) await this.store.setEnabled(record.packId, record.packVersion, false, now);
      }
      await this.initialize();
      return IP.requireRegisteredContentPack(manifest.id, manifest.version);
    }

    async setEnabled(packId, version, enabled) {
      const manifest = IP.requireRegisteredContentPack(packId, version);
      if (manifest.builtIn) throw new RangeError('Bundled content packs are always enabled.');
      if (enabled) {
        const missing = this.findMissingDependencies(manifest);
        if (missing.length) throw new RangeError(`Cannot enable this pack until dependencies are installed: ${missing.map((item) => item.packId).join(', ')}.`);
        const records = await this.store.listInstalledRecords();
        const now = new Date().toISOString();
        for (const record of records) {
          if (record.packId === packId && record.packVersion !== version && record.enabled) {
            await this.store.setEnabled(packId, record.packVersion, false, now);
          }
        }
      }
      await this.store.setEnabled(packId, version, enabled);
      await this.initialize();
      return IP.getRegisteredContentPack(packId, version);
    }

    async exportPackage(packId, version) {
      const manifest = IP.requireRegisteredContentPack(packId, version);
      if (manifest.builtIn) throw new RangeError('Bundled packs are already part of the application release and cannot be exported as external packages.');
      const bundle = await this.store.reconstructPackage(packId, version);
      if (!bundle) throw new RangeError('The installed content pack could not be reconstructed.');
      return IP.deliverJsonFile(bundle, IP.packageFilename(bundle.manifest));
    }

    async removalPreview(packId, version) {
      const manifest = IP.requireRegisteredContentPack(packId, version);
      if (manifest.builtIn) throw new RangeError('Bundled packs cannot be removed.');
      const [campaigns, catalog] = await Promise.all([
        this.campaignStore.listCampaigns(),
        this.listCatalog(),
      ]);
      const dependentCampaigns = exactCampaignUsage(campaigns, packId, version).map((campaign) => ({
        id: campaign.id,
        title: campaign.title,
        status: campaign.status,
      }));
      const remainingVersions = catalog.filter((pack) => pack.id === packId && pack.version !== version);
      const dependentPacks = catalog.filter((pack) => pack.dependencies?.some((dependency) => {
        if (dependency.packId !== packId) return false;
        return !remainingVersions.some((candidate) => compare(candidate.version, dependency.minimumVersion) >= 0);
      })).map((pack) => ({ id: pack.id, version: pack.version, title: pack.title, enabled: pack.enabled }));
      return {
        manifest: cloneData(manifest),
        dependentCampaigns,
        dependentPacks,
        safe: dependentCampaigns.length === 0 && dependentPacks.length === 0,
      };
    }

    async removePackage(packId, version, { force = false } = {}) {
      const preview = await this.removalPreview(packId, version);
      if (!preview.safe && !force) {
        throw new RangeError('Removal is blocked because campaigns or other packs still depend on this exact installed version.');
      }
      const current = await this.store.reconstructPackage(packId, version);
      if (current) {
        await this.store.saveQuarantine({
          rawText: IP.jsonText(current),
          sourceFilename: IP.packageFilename(current.manifest),
          reason: `Recovery copy before removal of ${packId}@${version}.`,
          header: { state: 'recovery', packId, version, title: current.manifest.title },
        });
      }
      await this.store.remove(packId, version);
      await this.initialize();
      return preview;
    }

    async quarantineFuture(preview) {
      if (!preview || preview.state !== 'future') throw new TypeError('A future-version pack preview is required.');
      return this.store.saveQuarantine({
        rawText: preview.rawText,
        sourceFilename: preview.sourceFilename,
        reason: preview.header.reason,
        header: preview.header,
      });
    }

    async exportQuarantine(id) {
      const record = await this.store.getQuarantine(id);
      if (!record) throw new RangeError('Quarantined content pack not found.');
      const filename = record.sourceFilename || `future-content-pack-${record.sha256.slice(0, 12)}.ippack.json`;
      return IP.deliverTextFile(record.rawText, filename, 'application/json');
    }

    deleteQuarantine(id) {
      return this.store.deleteQuarantine(id);
    }

    async diagnostics() {
      const [catalog, quarantine] = await Promise.all([this.listCatalog(), this.store.listQuarantine()]);
      return {
        initialized: this.initialized,
        initializationReport: cloneData(this.initializationReport),
        builtInPacks: catalog.filter((pack) => pack.builtIn).length,
        externalPacks: catalog.filter((pack) => pack.runtime).length,
        enabledExternalPacks: catalog.filter((pack) => pack.runtime && pack.enabled).length,
        incompatiblePacks: catalog.filter((pack) => !pack.compatible).map((pack) => `${pack.id}@${pack.version}`),
        missingDependencies: catalog.filter((pack) => pack.missingDependencies.length).map((pack) => ({
          pack: `${pack.id}@${pack.version}`,
          missing: pack.missingDependencies,
        })),
        quarantinedPackages: quarantine.length,
      };
    }
  }

  return { ContentPackService };
});

/* ===== src/js/campaign/campaign-generator.js ===== */
(function (root, factory) {
  const namespace = (root.InfinitePaths = root.InfinitePaths || {});
  const exported = factory(namespace);
  Object.assign(namespace, exported);
  if (typeof module !== 'undefined' && module.exports) module.exports = exported;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (IP) {
  'use strict';

  const PLAYER_PROFILE = IP.APP_CONFIG.playerProfile;

  const HORROR_BACKGROUNDS = Object.freeze({
    ranger: Object.freeze({ id: 'ranger', name: 'Former Park Ranger', skill: 'fieldcraft', resource: 'flare' }),
    paramedic: Object.freeze({ id: 'paramedic', name: 'Paramedic', skill: 'medicine', resource: 'traumaKit' }),
    journalist: Object.freeze({ id: 'journalist', name: 'Investigative Journalist', skill: 'inquiry', resource: 'recorder' }),
    mechanic: Object.freeze({ id: 'mechanic', name: 'Rural Mechanic', skill: 'repair', resource: 'toolRoll' }),
  });

  const MYSTERY_BACKGROUNDS = Object.freeze({
    detective: Object.freeze({ id: 'detective', name: 'Former Detective', skill: 'chain-of-custody', resource: 'evidenceKit' }),
    reporter: Object.freeze({ id: 'reporter', name: 'Investigative Reporter', skill: 'interviewing', resource: 'recorder' }),
    attorney: Object.freeze({ id: 'attorney', name: 'Defense Attorney', skill: 'cross-examination', resource: 'caseNotebook' }),
    accountant: Object.freeze({ id: 'accountant', name: 'Forensic Accountant', skill: 'financial-analysis', resource: 'auditPacket' }),
  });

  const BACKGROUNDS_BY_GENRE = Object.freeze({
    horror: HORROR_BACKGROUNDS,
    mystery: MYSTERY_BACKGROUNDS,
  });

  const HORROR_WORLD_DATA = Object.freeze({
    regions: Object.freeze(['Black Pine County', 'Morrow Vale', 'Ashwater District', 'Coldwater Reach', 'Hollow Ridge']),
    incidents: Object.freeze(['The Vanishing Broadcast', 'The Long Night', 'The Bellweather Disappearance', 'The Ashwater Silence', 'The Hollow Road']),
    settlements: Object.freeze(['Bellweather', 'Saint Orison', 'Miller’s Crossing', 'Grayhaven', 'Foxglove']),
    sites: Object.freeze(['an abandoned fire lookout', 'a flooded limestone quarry', 'a shuttered roadside hospital', 'a decommissioned radio station', 'a forest chapel sealed since 1978']),
    threats: Object.freeze([
      Object.freeze({ name: 'The Listener', capability: 'It can follow voices carried through powered radios.', limitation: 'It cannot hear unamplified speech beyond ordinary human range.' }),
      Object.freeze({ name: 'The Pale Surveyor', capability: 'It marks occupied buildings and returns after sunset.', limitation: 'It cannot cross running water and never enters an unmarked structure.' }),
      Object.freeze({ name: 'The Borrowed Man', capability: 'It can imitate the posture and handwriting of people it has observed.', limitation: 'It cannot imitate a living voice and casts no reflection.' }),
      Object.freeze({ name: 'The Orchard Widow', capability: 'She can induce waking visions in anyone who eats fruit from the old orchard.', limitation: 'Her influence ends beyond the county boundary and cannot affect the fasting.' }),
    ]),
    factions: Object.freeze([
      Object.freeze({ name: 'County Emergency Office', agenda: 'Contain panic and preserve the evacuation route.' }),
      Object.freeze({ name: 'The Night Frequency Club', agenda: 'Record proof before authorities erase it.' }),
      Object.freeze({ name: 'Saint Orison Volunteer Search', agenda: 'Recover the missing, even after official operations stop.' }),
      Object.freeze({ name: 'Morrow Land Company', agenda: 'Keep the oldest property records sealed.' }),
      Object.freeze({ name: 'The Lantern House', agenda: 'Protect families who survived an earlier incident.' }),
    ]),
    mysteries: Object.freeze([
      Object.freeze({
        id: 'failed-containment',
        title: 'The Staged Disappearance',
        truth: 'The first disappearance was staged to conceal a failed containment operation.',
        correctTheoryId: 'theory.failed-containment',
        keyClue: Object.freeze({
          id: 'clue.mystery.failed-containment',
          name: 'The altered first-incident file',
          summary: 'The first victim signed an evacuation receipt six hours after the county recorded his disappearance, proving the public timeline was manufactured.',
        }),
      }),
      Object.freeze({
        id: 'living-transmission',
        title: 'The Voice Still Broadcasting',
        truth: 'The emergency broadcast repeats because someone is still transmitting from inside the exclusion zone.',
        correctTheoryId: 'theory.living-transmission',
        keyClue: Object.freeze({
          id: 'clue.mystery.living-transmission',
          name: 'The unscheduled carrier pulse',
          summary: 'Every false evacuation order contains a live carrier pulse from the sealed transmitter annex rather than a historical recording.',
        }),
      }),
      Object.freeze({
        id: 'erased-settlement',
        title: 'The Town Removed from the Map',
        truth: 'The county map omits a settlement whose residents were never officially declared dead.',
        correctTheoryId: 'theory.erased-settlement',
        keyClue: Object.freeze({
          id: 'clue.mystery.erased-settlement',
          name: 'The missing municipal tax roll',
          summary: 'Property taxes continued to be collected for an unmarked settlement nine years after its supposed evacuation.',
        }),
      }),
      Object.freeze({
        id: 'crime-awakened-threat',
        title: 'The Crime Beneath the Haunting',
        truth: 'The apparent haunting began as a human crime, but the cover-up awakened something real.',
        correctTheoryId: 'theory.crime-awakened-threat',
        keyClue: Object.freeze({
          id: 'clue.mystery.crime-awakened-threat',
          name: 'The restraint photographs',
          summary: 'The earliest injuries were caused by human restraints; the impossible phenomena began only after officials buried the victim and falsified the report.',
        }),
      }),
    ]),
  });

  const MYSTERY_VENUES = Object.freeze([
    Object.freeze({ name: 'Vesper House', region: 'Marlowe County', event: 'the Vesper Foundation winter benefit', locations: Object.freeze(['the locked library', 'the glass conservatory', 'the portrait gallery', 'the service corridor', 'the east guest wing']) }),
    Object.freeze({ name: 'Blackthorn Hall', region: 'Ashbury County', event: 'a private antiquities auction', locations: Object.freeze(['the oak-paneled study', 'the winter garden', 'the auction gallery', 'the security office', 'the servants’ stair']) }),
    Object.freeze({ name: 'Harrowgate Museum', region: 'Danner County', event: 'the reopening gala', locations: Object.freeze(['the director’s archive', 'the sculpture court', 'the conservation laboratory', 'the loading corridor', 'the trustees’ lounge']) }),
    Object.freeze({ name: 'Merritt Lodge', region: 'Coldwater County', event: 'a closed charitable summit', locations: Object.freeze(['the map room', 'the lake conservatory', 'the banquet hall', 'the generator room', 'the north guest corridor']) }),
  ]);

  const MYSTERY_VICTIMS = Object.freeze([
    Object.freeze({ name: 'Gideon Vesper', role: 'foundation chairman', reputation: 'a celebrated benefactor with a private talent for making enemies feel indebted' }),
    Object.freeze({ name: 'Arthur Blackthorn', role: 'estate trustee', reputation: 'a meticulous patron who kept personal leverage filed more carefully than receipts' }),
    Object.freeze({ name: 'Malcolm Harrow', role: 'museum director', reputation: 'a public reformer whose closed-door decisions had ruined several careers' }),
    Object.freeze({ name: 'Edmund Merritt', role: 'industrial philanthropist', reputation: 'a charming donor who had recently begun revising old agreements without warning' }),
  ]);

  const MYSTERY_PARTNERS = Object.freeze([
    Object.freeze({ id: 'npc.mystery_partner', name: 'Evelyn Shaw', firstName: 'Evelyn', role: 'county major-crimes investigator', temperament: 'controlled', instinct: 'procedural' }),
    Object.freeze({ id: 'npc.mystery_partner', name: 'Isabel Mercer', firstName: 'Isabel', role: 'county major-crimes investigator', temperament: 'direct', instinct: 'protective' }),
    Object.freeze({ id: 'npc.mystery_partner', name: 'Rebecca Sloan', firstName: 'Rebecca', role: 'county major-crimes investigator', temperament: 'dry', instinct: 'skeptical' }),
    Object.freeze({ id: 'npc.mystery_partner', name: 'June Avery', firstName: 'June', role: 'county major-crimes investigator', temperament: 'patient', instinct: 'methodical' }),
  ]);

  const MYSTERY_WITNESSES = Object.freeze([
    Object.freeze({ id: 'npc.house_witness', name: 'Margaret Bell', firstName: 'Margaret', role: 'house manager' }),
    Object.freeze({ id: 'npc.house_witness', name: 'Helen Price', firstName: 'Helen', role: 'event coordinator' }),
    Object.freeze({ id: 'npc.house_witness', name: 'Diane Cole', firstName: 'Diane', role: 'senior conservator' }),
    Object.freeze({ id: 'npc.house_witness', name: 'Ruth Ward', firstName: 'Ruth', role: 'trust secretary' }),
  ]);

  const MYSTERY_COMPLICATIONS = Object.freeze([
    Object.freeze({ id: 'evidence-leak', label: 'an evidence photograph leaked to the waiting press' }),
    Object.freeze({ id: 'fleeing-suspect', label: 'one suspect tried to leave through the service gate' }),
    Object.freeze({ id: 'recanting-witness', label: 'the principal witness abruptly withdrew her first statement' }),
  ]);

  const SUSPECT_ARCHETYPES = Object.freeze({
    heir: Object.freeze({
      id: 'suspect.heir',
      role: 'the victim’s adult stepdaughter and principal beneficiary',
      names: Object.freeze(['Eleanor Vale', 'Grace Merritt', 'Lydia Ash', 'Victoria March']),
      publicMotive: 'A revised trust would have delayed her inheritance for another decade.',
      privateSecret: 'She concealed severe personal debt and forged a letter to keep the trustees from learning about it.',
      alibi: 'She says she remained in the conservatory from the final toast until the body was found.',
      culprit: Object.freeze({
        motive: 'The victim planned to remove her from the trust at dawn.',
        method: 'A bitter botanical toxin was placed in the victim’s private cordial before the final toast.',
        means: 'She had access to the conservatory’s restricted medicinal plants and knew which bottle the victim reserved for himself.',
        opportunity: 'She left the conservatory by the service door during the six-minute lighting failure.',
        evidence: Object.freeze({
          cause: Object.freeze({ id: 'clue.case.cause', name: 'Crystalline residue in the cordial glass', summary: 'The residue matches a toxin derived from a restricted conservatory plant rather than any medicine carried by the physician.' }),
          access: Object.freeze({ id: 'clue.case.access', name: 'Service-door pollen trace', summary: 'Fresh conservatory pollen appears on the inner library latch and on the beneficiary’s evening glove.' }),
          timeline: Object.freeze({ id: 'clue.case.timeline', name: 'The six-minute lighting gap', summary: 'A staff timer and the conservatory irrigation log place the beneficiary outside her claimed location during the only viable poisoning window.' }),
          motive: Object.freeze({ id: 'clue.case.motive', name: 'Unsigned trust revision', summary: 'The victim’s desk contains a dawn appointment to remove the beneficiary from the trust, with her debt file attached.' }),
          contradiction: Object.freeze({ id: 'clue.case.contradiction', name: 'The dry hem', summary: 'She claims she crossed the rain-soaked west terrace, yet the lower edge of her dress is dry; the covered service corridor is the only route that fits.' }),
        }),
      }),
    }),
    curator: Object.freeze({
      id: 'suspect.curator',
      role: 'the collection curator and keeper of the private archive',
      names: Object.freeze(['Adrian Pike', 'Simon Bell', 'Daniel Voss', 'Marcus Reed']),
      publicMotive: 'The victim had scheduled an audit of several disputed acquisitions.',
      privateSecret: 'He sold one authentic piece and replaced it with a flawless replica to cover a family medical debt.',
      alibi: 'He says he spent the critical period cataloguing alone in the lower archive.',
      culprit: Object.freeze({
        motive: 'The victim had discovered the substitution and planned to expose him during the morning trustees’ meeting.',
        method: 'The victim was struck once with a bronze cataloguing seal, then positioned behind the locked desk to suggest a collapse.',
        means: 'The seal belonged to the restricted archive and could be removed without appearing on the public inventory.',
        opportunity: 'He used the archive dumbwaiter to enter the library during the lighting failure and relocked the inner door from the service side.',
        evidence: Object.freeze({
          cause: Object.freeze({ id: 'clue.case.cause', name: 'Curved bronze impact trace', summary: 'The wound carries the same shallow crescent and alloy dust as the missing archive seal.' }),
          access: Object.freeze({ id: 'clue.case.access', name: 'Dumbwaiter grease on the carpet', summary: 'Fresh industrial grease leads from the archive lift to the library desk, bypassing the locked public door.' }),
          timeline: Object.freeze({ id: 'clue.case.timeline', name: 'The interrupted catalogue entry', summary: 'The curator’s terminal stopped recording work seven minutes before the death and resumed only after the body was found.' }),
          motive: Object.freeze({ id: 'clue.case.motive', name: 'The substitution memorandum', summary: 'The victim had documented the replica and prepared an accusation naming the curator for the morning meeting.' }),
          contradiction: Object.freeze({ id: 'clue.case.contradiction', name: 'The clean archive gloves', summary: 'He claims to have handled oxidized bronze all evening, but his issued gloves are clean; a second pair was burned in the furnace chute.' }),
        }),
      }),
    }),
    security: Object.freeze({
      id: 'suspect.security',
      role: 'the estate security director',
      names: Object.freeze(['Rachel Knox', 'Tessa Ward', 'Naomi Black', 'Claire Dyer']),
      publicMotive: 'The victim had threatened to terminate the security contract after a private breach.',
      privateSecret: 'She disabled one camera to conceal an employee’s theft and then falsified the maintenance ticket.',
      alibi: 'She says she monitored every occupied corridor from the security office.',
      culprit: Object.freeze({
        motive: 'The victim was blackmailing her over an earlier cover-up and demanded a payment she could not make.',
        method: 'The library desk lamp was rewired so touching its brass switch delivered a fatal electrical discharge.',
        means: 'She controlled the maintenance closet, breaker panel, and camera blind spots.',
        opportunity: 'She entered the empty library before the gala and later triggered the lighting failure to erase the useful camera segment.',
        evidence: Object.freeze({
          cause: Object.freeze({ id: 'clue.case.cause', name: 'Arc burn beneath the victim’s thumb', summary: 'The injury and melted switch contact prove the desk lamp was weaponized before the victim entered the room.' }),
          access: Object.freeze({ id: 'clue.case.access', name: 'Unauthorized breaker override', summary: 'The security director’s private override code opened the maintenance panel fifteen minutes before the final toast.' }),
          timeline: Object.freeze({ id: 'clue.case.timeline', name: 'The manufactured camera outage', summary: 'The camera system did not fail with the house lights; its recording gap began forty-two seconds earlier under a manual command.' }),
          motive: Object.freeze({ id: 'clue.case.motive', name: 'The blackmail schedule', summary: 'A payment calendar in the victim’s encrypted notes names the security director and the breach he had promised to expose.' }),
          contradiction: Object.freeze({ id: 'clue.case.contradiction', name: 'The impossible monitor claim', summary: 'She describes the victim entering the library during a minute when her own system recorded no live feed.' }),
        }),
      }),
    }),
    physician: Object.freeze({
      id: 'suspect.physician',
      role: 'the victim’s private physician and longtime adviser',
      names: Object.freeze(['Dr. Thomas Hale', 'Dr. Julian Cross', 'Dr. Caleb Stone', 'Dr. Elias North']),
      publicMotive: 'The victim had recently hired an independent doctor to review years of private treatment.',
      privateSecret: 'He concealed an earlier diagnostic error that had harmed another patient but had not caused this death.',
      alibi: 'He says he was treating a guest’s migraine in the east wing when the victim died.',
      culprit: Object.freeze({
        motive: 'The independent review would have exposed falsified research data and ended his career.',
        method: 'A fast-acting paralytic was delivered through a prepared vitamin syringe, making the death resemble sudden cardiac failure.',
        means: 'He carried the sealed medical case and knew the victim accepted private injections without witnesses.',
        opportunity: 'He entered the library during the victim’s scheduled medication check and used the east-wing call as a delayed alibi.',
        evidence: Object.freeze({
          cause: Object.freeze({ id: 'clue.case.cause', name: 'Hidden injection mark', summary: 'A tiny puncture beneath the collar and the absence of expected cardiac signs contradict a natural collapse.' }),
          access: Object.freeze({ id: 'clue.case.access', name: 'Broken medical-case seal', summary: 'The numbered seal on the physician’s case was replaced with one issued months earlier and already recorded as destroyed.' }),
          timeline: Object.freeze({ id: 'clue.case.timeline', name: 'The delayed east-wing call', summary: 'The guest requested treatment after the estimated time of death, so the physician’s alibi begins too late.' }),
          motive: Object.freeze({ id: 'clue.case.motive', name: 'Independent review letter', summary: 'The victim had arranged a dawn transfer of the physician’s research files to an outside medical board.' }),
          contradiction: Object.freeze({ id: 'clue.case.contradiction', name: 'The missing vitamin ampoule', summary: 'He insists no injection was scheduled, but his handwritten treatment chart lists one and the corresponding ampoule is gone.' }),
        }),
      }),
    }),
  });

  function cloneData(value) {
    return IP.cloneData(value);
  }

  function cleanText(value, maximum = 80) {
    return String(value || '').normalize('NFKC').trim().replace(/\s+/g, ' ').slice(0, maximum);
  }

  function copyPlayerProfile() {
    return cloneData(PLAYER_PROFILE);
  }

  function contentPackSnapshot(contentPack) {
    return cloneData(contentPack);
  }

  function packSeed(seed, contentPack) {
    return `${contentPack.id}@${contentPack.version}::${seed}`;
  }

  function campaignId(seed, createdAt, contentPack) {
    const fingerprint = IP.SeededRandom.fingerprint(`${packSeed(seed, contentPack)}::${createdAt}`)
      .replaceAll('-', '')
      .slice(0, 16)
      .toLowerCase();
    return `cmp_${fingerprint}`;
  }

  function backgroundsForContentPack(contentPack, genre) {
    if (contentPack.runtime) {
      const generator = IP.getCampaignGeneratorForPack(contentPack.id, contentPack.version);
      if (!generator) throw new RangeError(`Campaign generator for ${contentPack.id}@${contentPack.version} is not installed.`);
      if (generator.genre !== genre) throw new RangeError(`The selected content pack does not provide the ${genre} generator.`);
      return Object.fromEntries(generator.backgrounds.map((background) => [background.id, cloneData(background)]));
    }
    return BACKGROUNDS_BY_GENRE[genre] || {};
  }

  function generateExternalHorrorWorld(seed, contentPack, generator = IP.getCampaignGeneratorForPack(contentPack.id, contentPack.version)) {
    if (!generator) throw new RangeError(`Campaign generator for ${contentPack.id}@${contentPack.version} is not installed.`);
    const rootSeed = packSeed(seed, contentPack);
    const geography = new IP.SeededRandom(rootSeed).derive('world.geography');
    const threatRng = new IP.SeededRandom(rootSeed).derive('world.antagonist');
    const factionRng = new IP.SeededRandom(rootSeed).derive('world.factions');
    const truthRng = new IP.SeededRandom(rootSeed).derive('world.mystery');
    const castRng = new IP.SeededRandom(rootSeed).derive('world.cast');
    const region = geography.pick(generator.world.regions);
    const settlement = geography.pick(generator.world.settlements);
    const incident = geography.pick(generator.world.incidents);
    const majorSites = geography.shuffle(generator.world.sites).slice(0, Math.min(3, generator.world.sites.length));
    const threat = cloneData(threatRng.pick(generator.world.threats));
    const factions = factionRng.shuffle(generator.world.factions).slice(0, Math.min(3, generator.world.factions.length));
    const mystery = cloneData(truthRng.pick(generator.world.mysteries));
    const responder = cloneData(castRng.pick(generator.world.cast.responder));
    const deputy = cloneData(castRng.pick(generator.world.cast.deputy));
    const shelterLead = cloneData(castRng.pick(generator.world.cast.shelterLead));
    const complication = cloneData(castRng.pick(generator.world.cast.complications));
    const weather = castRng.pick(generator.world.weather);
    const baseTimeline = generator.world.timeline.map((entry) => cloneData(entry));
    if (!baseTimeline.some((entry) => Number(entry.day) === 0)) {
      baseTimeline.push({ day: 0, event: 'The protagonist enters the affected region.' });
    }
    return {
      worldId: IP.SeededRandom.fingerprint(`${rootSeed}::world`).replaceAll('-', '').toLowerCase(),
      title: `${incident}: ${region}`,
      region,
      settlement,
      engineProfile: generator.engineProfile,
      campaignGeneratorId: generator.id,
      geography: { majorSites, travelRule: generator.world.travelRule },
      factions,
      antagonist: {
        id: threat.id,
        name: threat.name,
        capabilities: cloneData(threat.capabilities),
        limitations: cloneData(threat.limitations),
        knowledge: cloneData(threat.knowledge),
      },
      hiddenTruth: mystery.truth,
      mystery,
      cast: { responder, deputy, shelterLead, complication, weather },
      mechanics: {
        labels: { primary: 'Threat pressure', secondary: 'Evacuation readiness', time: 'Time segment' },
        descriptions: {
          primary: 'Higher pressure means greater danger and fewer clean endings.',
          secondary: 'Higher readiness improves rescue and withdrawal options.',
        },
      },
      timeline: baseTimeline,
      victoryConditions: cloneData(generator.world.victoryConditions),
      failureConditions: cloneData(generator.world.failureConditions),
      initialInventory: cloneData(generator.initialState.inventory),
      storyBonusInventory: cloneData(generator.initialState.storyBonusInventory),
    };
  }

  function generateHorrorWorld(seed, contentPack = IP.getBuiltInContentPack('ip.original.horror-foundation')) {
    const rootSeed = packSeed(seed, contentPack);
    const geography = new IP.SeededRandom(rootSeed).derive('world.geography');
    const threatRng = new IP.SeededRandom(rootSeed).derive('world.antagonist');
    const factionRng = new IP.SeededRandom(rootSeed).derive('world.factions');
    const truthRng = new IP.SeededRandom(rootSeed).derive('world.mystery');
    const region = geography.pick(HORROR_WORLD_DATA.regions);
    const settlement = geography.pick(HORROR_WORLD_DATA.settlements);
    const incident = geography.pick(HORROR_WORLD_DATA.incidents);
    const majorSites = geography.shuffle(HORROR_WORLD_DATA.sites).slice(0, 3);
    const threat = threatRng.pick(HORROR_WORLD_DATA.threats);
    const factions = factionRng.shuffle(HORROR_WORLD_DATA.factions).slice(0, 3);
    const mystery = truthRng.pick(HORROR_WORLD_DATA.mysteries);
    return {
      worldId: IP.SeededRandom.fingerprint(`${rootSeed}::world`).replaceAll('-', '').toLowerCase(),
      title: `${incident}: ${region}`,
      region,
      settlement,
      geography: { majorSites, travelRule: 'Travel between major locations consumes one time segment.' },
      factions,
      antagonist: {
        id: `threat_${threat.name.toLowerCase().replace(/[^a-z0-9]+/g, '_')}`,
        name: threat.name,
        capabilities: [threat.capability],
        limitations: [threat.limitation],
        knowledge: ['The exclusion zone', 'Its established hunting rule'],
      },
      hiddenTruth: mystery.truth,
      mystery: cloneData(mystery),
      mechanics: {
        labels: {
          primary: 'Threat pressure',
          secondary: 'Evacuation readiness',
          time: 'Time segment',
        },
        descriptions: {
          primary: 'Higher pressure means greater danger and fewer clean endings.',
          secondary: 'Higher readiness improves rescue and withdrawal options.',
        },
      },
      timeline: [
        { day: -21, event: 'The first unexplained disappearance is recorded.' },
        { day: -3, event: 'County officials quietly close the northern road.' },
        { day: 0, event: 'The protagonist enters the affected region.' },
      ],
      victoryConditions: [
        'Identify the hidden truth and escape with credible evidence.',
        'Protect at least one essential witness and end the immediate threat.',
      ],
      failureConditions: [
        'Death or irreversible capture.',
        'The final evacuation route closes before the truth is secured.',
        'The threat escapes containment because its known rule is violated.',
      ],
    };
  }

  function generateMysteryWorld(seed, contentPack = IP.getBuiltInContentPack('ip.original.mystery-foundation')) {
    const rootSeed = packSeed(seed, contentPack);
    const settingRng = new IP.SeededRandom(rootSeed).derive('world.case.setting');
    const castRng = new IP.SeededRandom(rootSeed).derive('world.case.cast');
    const culpritRng = new IP.SeededRandom(rootSeed).derive('world.case.culprit');
    const complicationRng = new IP.SeededRandom(rootSeed).derive('world.case.complication');
    const venue = cloneData(settingRng.pick(MYSTERY_VENUES));
    const victim = cloneData(settingRng.pick(MYSTERY_VICTIMS));
    const partner = cloneData(castRng.pick(MYSTERY_PARTNERS));
    const witness = cloneData(castRng.pick(MYSTERY_WITNESSES));
    const complication = cloneData(complicationRng.pick(MYSTERY_COMPLICATIONS));
    const archetypeEntries = Object.entries(SUSPECT_ARCHETYPES);
    const culpritKey = culpritRng.pick(archetypeEntries.map(([key]) => key));
    const suspects = {};
    for (const [key, archetype] of archetypeEntries) {
      const nameRng = new IP.SeededRandom(rootSeed).derive(`world.case.suspect.${key}`);
      suspects[key] = {
        id: archetype.id,
        slot: key,
        name: nameRng.pick(archetype.names),
        role: archetype.role,
        publicMotive: archetype.publicMotive,
        privateSecret: archetype.privateSecret,
        alibi: archetype.alibi,
      };
    }
    const culpritArchetype = SUSPECT_ARCHETYPES[culpritKey];
    const culprit = suspects[culpritKey];
    const truth = culpritArchetype.culprit;
    const caseId = IP.SeededRandom.fingerprint(`${rootSeed}::case`).replaceAll('-', '').toLowerCase();
    const titleNoun = ['Murder', 'Death', 'Last Toast', 'Locked Room'][settingRng.integer(0, 3)];
    return {
      worldId: IP.SeededRandom.fingerprint(`${rootSeed}::world`).replaceAll('-', '').toLowerCase(),
      title: `The ${venue.name} ${titleNoun}`,
      region: venue.region,
      settlement: venue.name,
      geography: {
        majorSites: [...venue.locations],
        travelRule: 'Moving between investigative locations consumes finite case time only when the selected action says so.',
      },
      factions: [
        { name: 'County Major Crimes', agenda: 'Preserve admissible evidence and prevent a public accusation unsupported by the record.' },
        { name: `${venue.name} Trustees`, agenda: 'Protect the institution from scandal without allowing the estate to remain sealed indefinitely.' },
        { name: 'The Morning Ledger', agenda: 'Publish the first credible account before the roads reopen.' },
      ],
      cast: {
        partner: cloneData(partner),
        witness: cloneData(witness),
        complication: cloneData(complication),
      },
      mechanics: {
        labels: {
          primary: 'Case strength',
          secondary: 'Evidence integrity',
          tertiary: 'Public confidence',
          time: 'Time remaining',
        },
        descriptions: {
          primary: 'Corroborated evidence and tested contradictions make the final accusation stronger.',
          secondary: 'Careless handling and leaks can make true evidence unusable.',
          tertiary: 'Public and institutional confidence determines whether the case survives pressure.',
          time: 'Investigative opportunities close when the prosecutor arrives at dawn.',
        },
      },
      antagonist: {
        id: 'unknown_locked_culprit',
        name: `The killer inside ${venue.name}`,
        capabilities: ['The culprit can lie, conceal personal secrets, exploit the sealed venue, and manipulate evidence only through opportunities established in the locked timeline.'],
        limitations: ['The culprit cannot change the physical cause of death, erase every contradiction, or acquire knowledge they had no way to obtain.'],
        knowledge: ['The venue layout', 'The victim’s private routine', 'The culprit’s own method and cover story'],
      },
      hiddenTruth: `${culprit.name} killed ${victim.name}. ${truth.motive} ${truth.method}`,
      case: {
        id: `case_${caseId}`,
        title: `The ${venue.name} Case`,
        venue,
        event: venue.event,
        victim,
        partner,
        witness,
        suspects,
        culpritId: culprit.id,
        culpritSlot: culpritKey,
        culpritName: culprit.name,
        correctAccusationId: `accuse.${culprit.id}`,
        motive: truth.motive,
        method: truth.method,
        means: truth.means,
        opportunity: truth.opportunity,
        evidence: cloneData(truth.evidence),
        complication,
        publicFacts: [
          `${victim.name} was found dead inside a room whose public door was locked.`,
          'Four people had motive, access, or a concealed reason to distort the timeline.',
          'The county prosecutor will reopen the roads at dawn and expects one defensible conclusion.',
        ],
      },
      timeline: [
        { minute: -51, event: `${victim.name} entered ${venue.name} for ${venue.event}.`, visibility: 'public' },
        { minute: -21, event: 'The final toast ended and the guests separated into smaller rooms.', visibility: 'public' },
        { minute: -12, event: 'The venue suffered a six-minute lighting failure.', visibility: 'public' },
        { minute: -8, event: truth.opportunity, visibility: 'hidden' },
        { minute: 0, event: `${witness.name} discovered the body and called County Major Crimes.`, visibility: 'public' },
      ],
      victoryConditions: [
        'Identify the permanently locked culprit through evidence that existed before discovery.',
        'Make an accusation supported by admissible physical, timeline, access, and motive evidence.',
        'Preserve enough public and partner confidence to keep the truth from collapsing after the confrontation.',
      ],
      failureConditions: [
        'Accuse an innocent person after the accusation becomes public.',
        'Allow the deadline to expire without enough evidence to hold the culprit.',
        'Damage or contaminate the evidence until the true case cannot be prosecuted.',
        'Lose the essential witness during the Standard-campaign complication.',
      ],
    };
  }

  function validateCampaignInput(input) {
    const name = cleanText(input?.name, 40);
    if (name.length < 1) throw new RangeError('Enter a protagonist name.');
    const requestedPackId = cleanText(input?.contentPackId, 160);
    const requestedPackVersion = cleanText(input?.contentPackVersion, 80);
    const fallbackGenre = ['horror', 'mystery'].includes(input?.genre) ? input.genre : 'horror';
    const defaultPackId = IP.APP_CONFIG.defaultContentPackByGenre?.[fallbackGenre]
      || IP.APP_CONFIG.defaultContentPackId;
    const contentPack = IP.requireRegisteredContentPack(
      requestedPackId || defaultPackId,
      requestedPackVersion || null,
      { enabledOnly: true },
    );
    const genre = contentPack.genres.includes(input?.genre)
      ? input.genre
      : contentPack.genres[0];
    if (!['horror', 'mystery'].includes(genre)) {
      throw new RangeError('This release can create campaigns only from Horror or Mystery generator profiles.');
    }
    const backgrounds = backgroundsForContentPack(contentPack, genre);
    const background = backgrounds[input?.background];
    if (!background) throw new RangeError(`Choose a valid background for ${contentPack.title}.`);
    const difficulty = ['story', 'standard', 'hard', 'brutal'].includes(input?.difficulty)
      ? input.difficulty
      : 'standard';
    const length = ['short', 'standard'].includes(input?.length) ? input.length : 'short';
    if (!contentPack.genres.includes(genre)) {
      throw new RangeError(`The selected content pack does not provide the ${IP.titleCase ? IP.titleCase(genre) : genre} generator.`);
    }
    if (!contentPack.playerProfileCompatibility.protagonistSexes.includes(PLAYER_PROFILE.sex)) {
      throw new RangeError('The selected content pack is incompatible with the fixed protagonist profile.');
    }
    const compatibleRomance = PLAYER_PROFILE.romance.eligiblePartnerSexes.every((sex) =>
      contentPack.playerProfileCompatibility.romancePartnerSexes.includes(sex));
    if (!compatibleRomance) {
      throw new RangeError('The selected content pack is incompatible with the fixed romance profile.');
    }
    let seed = cleanText(input?.seed, 120);
    const generator = contentPack.runtime ? IP.getCampaignGeneratorForPack(contentPack.id, contentPack.version) : null;
    if (!seed) seed = IP.createFreshSeed(generator?.seedPrefix || (genre === 'mystery' ? 'CASE' : 'PATH'));
    return { name, background: { ...background }, difficulty, length, seed, genre, contentPack, generator };
  }

  function initialHorrorSavePayload(campaign) {
    const profile = IP.DIFFICULTY_PROFILES[campaign.difficulty];
    return {
      campaignId: campaign.id,
      status: campaign.status,
      contentPack: { id: campaign.contentPack.id, version: campaign.contentPack.version },
      player: {
        protagonist: cloneData(campaign.protagonist),
        health: profile.startingHealth,
        morale: profile.startingMorale,
        currentLocation: campaign.world.settlement,
      },
      worldState: {
        phase: 'preplay',
        worldId: campaign.world.worldId,
        settlement: campaign.world.settlement,
        timeSegment: 0,
        establishedFactsLocked: true,
        difficultyProfile: cloneData(profile),
        threatPressure: profile.startingThreatPressure,
        evacuationReadiness: profile.startingEvacuationReadiness,
        objectives: {},
        companions: {},
      },
      currentScene: null,
      eventHistory: [{
        id: 'event.campaign.created',
        type: 'system',
        occurredAt: campaign.createdAt,
        summary: 'Campaign identity and immutable world truth were established.',
      }],
      inventory: [
        { id: `background.${campaign.protagonist.background.resource}`, name: campaign.protagonist.background.resource, quantity: 1, source: 'background' },
        ...(campaign.world.initialInventory || []),
        ...(campaign.difficulty === 'story'
          ? (campaign.world.storyBonusInventory?.length
            ? campaign.world.storyBonusInventory
            : [{ id: 'item.spare-battery', name: 'Spare emergency battery', quantity: 1, source: 'difficulty' }])
          : []),
      ],
      injuries: [],
      clues: [],
      relationships: {},
      unresolvedConsequences: [],
      randomStreams: cloneData(campaign.randomStreams),
      campaignStatistics: {
        scenesVisited: 0,
        choicesMade: 0,
        manualSavesCreated: 0,
        playTimeSeconds: 0,
        optionalObjectivesCompleted: 0,
        companionsLost: 0,
        witnessesSaved: 0,
        mysteryDeductionsCorrect: 0,
      },
      endingEligibility: {},
    };
  }

  function initialMysterySavePayload(campaign) {
    const profile = IP.MYSTERY_DIFFICULTY_PROFILES[campaign.difficulty];
    return {
      campaignId: campaign.id,
      status: campaign.status,
      contentPack: { id: campaign.contentPack.id, version: campaign.contentPack.version },
      player: {
        protagonist: cloneData(campaign.protagonist),
        health: profile.startingHealth,
        morale: profile.startingMorale,
        currentLocation: campaign.world.settlement,
      },
      worldState: {
        phase: 'preplay',
        worldId: campaign.world.worldId,
        settlement: campaign.world.settlement,
        timeSegment: 0,
        establishedFactsLocked: true,
        difficultyProfile: cloneData(profile),
        threatPressure: 0,
        evacuationReadiness: 0,
        objectives: {},
        companions: {},
        genreState: {
          kind: 'mystery',
          metrics: {
            caseStrength: profile.startingCaseStrength,
            evidenceIntegrity: profile.startingEvidenceIntegrity,
            publicConfidence: profile.startingPublicConfidence,
            timeRemaining: profile.startingTimeRemaining,
            leadsCompleted: 0,
            verifiedClues: 0,
          },
          suspects: {},
          accusation: { selectedSuspectId: null, correct: null, public: false },
        },
      },
      currentScene: null,
      eventHistory: [{
        id: 'event.campaign.created',
        type: 'system',
        occurredAt: campaign.createdAt,
        summary: 'Campaign identity, culprit, method, motive, timeline, evidence, and false leads were permanently locked.',
      }],
      inventory: [
        { id: `background.${campaign.protagonist.background.resource}`, name: campaign.protagonist.background.resource, quantity: 1, source: 'background' },
        { id: 'item.sealed-case-file', name: 'Sealed case file', quantity: 1, source: 'campaign' },
        ...(campaign.difficulty === 'story'
          ? [{ id: 'item.prosecutor-reference-card', name: 'Prosecutor’s evidence reference card', quantity: 1, source: 'difficulty' }]
          : []),
      ],
      injuries: [],
      clues: [],
      relationships: {},
      unresolvedConsequences: [],
      randomStreams: cloneData(campaign.randomStreams),
      campaignStatistics: {
        scenesVisited: 0,
        choicesMade: 0,
        manualSavesCreated: 0,
        playTimeSeconds: 0,
        optionalObjectivesCompleted: 0,
        companionsLost: 0,
        witnessesSaved: 0,
        mysteryDeductionsCorrect: 0,
        interviewsConducted: 0,
        accusationsMade: 0,
        evidenceContaminated: 0,
      },
      endingEligibility: {},
    };
  }

  function initialSavePayload(campaign) {
    return campaign.genre === 'mystery'
      ? initialMysterySavePayload(campaign)
      : initialHorrorSavePayload(campaign);
  }

  function generateCampaign(input, now = () => new Date().toISOString()) {
    const settings = validateCampaignInput(input);
    const createdAt = now();
    const world = settings.contentPack.runtime
      ? generateExternalHorrorWorld(settings.seed, settings.contentPack, settings.generator)
      : settings.genre === 'mystery'
        ? generateMysteryWorld(settings.seed, settings.contentPack)
        : generateHorrorWorld(settings.seed, settings.contentPack);
    const id = campaignId(settings.seed, createdAt, settings.contentPack);
    const protagonist = { name: settings.name, ...copyPlayerProfile(), background: settings.background };
    const rootSeed = packSeed(settings.seed, settings.contentPack);
    const campaign = IP.sealCampaignRecord({
      id,
      schemaVersion: 2,
      appVersion: IP.APP_CONFIG.version,
      saveFormatVersion: IP.SAVE_FORMAT_VERSION,
      contentVersion: `${settings.contentPack.id}@${settings.contentPack.version}`,
      rulesVersion: IP.APP_CONFIG.rulesVersion,
      status: 'created',
      genre: settings.genre,
      difficulty: settings.difficulty,
      length: settings.length,
      seed: settings.seed,
      seedFingerprint: IP.SeededRandom.fingerprint(settings.seed),
      title: world.title,
      contentPack: contentPackSnapshot(settings.contentPack),
      protagonist,
      contentPreferences: settings.genre === 'mystery'
        ? {
          graphicCrimeScene: input?.graphicCrimeScene !== false,
          manipulationThemes: input?.manipulationThemes !== false,
        }
        : {
          graphicViolence: input?.graphicViolence !== false,
          psychologicalHorror: input?.psychologicalHorror !== false,
        },
      world,
      randomStreams: {
        campaignStructure: new IP.SeededRandom(rootSeed).derive('campaign.structure').snapshot(),
        sceneSelectionAct1: new IP.SeededRandom(rootSeed).derive('scene.selection.act:1').snapshot(),
        sceneSelectionAct2: new IP.SeededRandom(rootSeed).derive('scene.selection.act:2').snapshot(),
        sceneSelectionAct3: new IP.SeededRandom(rootSeed).derive('scene.selection.act:3').snapshot(),
        companionBehavior: new IP.SeededRandom(rootSeed).derive('npc.behavior.companions').snapshot(),
      },
      currentScene: null,
      dataMigrationHistory: [],
      createdAt,
      updatedAt: createdAt,
    });
    const save = IP.createSaveRecord({
      campaign,
      payload: initialSavePayload(campaign),
      slotType: 'autosave',
      slotNumber: 0,
      now: () => createdAt,
    });
    const archive = IP.createArchiveRecord(campaign, null, createdAt);
    return { campaign, save, archive };
  }

  return {
    BACKGROUNDS: HORROR_BACKGROUNDS,
    BACKGROUNDS_BY_GENRE,
    HORROR_BACKGROUNDS,
    MYSTERY_BACKGROUNDS,
    MYSTERY_COMPLICATIONS,
    MYSTERY_PARTNERS,
    PLAYER_PROFILE,
    SUSPECT_ARCHETYPES,
    generateCampaign,
    generateExternalHorrorWorld,
    generateHorrorWorld,
    generateMysteryWorld,
    initialSavePayload,
    backgroundsForContentPack,
    packSeed,
    validateCampaignInput,
  };
});

/* ===== src/js/core/campaign-simulator.js ===== */
(function (root, factory) {
  const namespace = (root.InfinitePaths = root.InfinitePaths || {});
  const exported = factory(namespace);
  Object.assign(namespace, exported);
  if (typeof module !== 'undefined' && module.exports) module.exports = exported;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (IP) {
  'use strict';

  const SIMULATION_STRATEGIES = Object.freeze([
    'balanced',
    'survival',
    'investigation',
    'relationship',
    'resource',
    'aggressive',
    'random',
  ]);

  const CHOICE_TAGS = Object.freeze({
    stay_with_responder: ['relationship', 'safe'],
    search_vehicle: ['investigation', 'resource', 'risk'],
    follow_tracks: ['investigation', 'risk'],
    tell_truth: ['relationship', 'truth'],
    ask_about_vehicle: ['investigation'],
    stay_vague: ['caution'],
    use_ranger_training: ['investigation', 'safe'],
    use_paramedic_training: ['resource', 'compassion'],
    use_journalist_training: ['investigation', 'truth'],
    use_mechanic_training: ['resource', 'preparation'],
    take_map_fast: ['speed', 'risk'],
    answer_radio: ['failure', 'aggressive'],
    enter_marked_shed: ['failure', 'aggressive'],
    follow_handwritten_note: ['failure', 'aggressive'],
    eat_apple: ['failure', 'resource'],
    use_background_gear: ['resource', 'safe', 'rescue'],
    call_responder_softly: ['relationship', 'safe', 'rescue'],
    lift_branch_alone: ['aggressive', 'risk', 'rescue'],
    study_rule_sheet: ['investigation', 'safe', 'truth'],
    bar_east_door: ['survival', 'preparation', 'resource'],
    take_lantern: ['resource', 'preparation'],
    let_injury_be_treated: ['resource', 'relationship', 'safe'],
    use_listener_limitation: ['survival', 'investigation', 'safe'],
    use_surveyor_limitation: ['survival', 'investigation', 'safe'],
    use_borrowed_limitation: ['survival', 'investigation', 'safe'],
    use_widow_limitation: ['survival', 'investigation', 'safe'],
    escape_through_window: ['survival', 'risk'],
    confront_directly: ['failure', 'aggressive'],
    continue_to_shelter: ['safe', 'rescue'],

    stabilize_shelter: ['survival', 'preparation', 'rescue', 'relationship'],
    triage_shelter: ['resource', 'compassion', 'rescue', 'safe'],
    audit_ledger: ['investigation', 'truth', 'speed'],
    question_survivors: ['investigation', 'relationship', 'truth'],
    go_after_deputy: ['rescue', 'relationship', 'risk'],
    let_responder_decide: ['relationship', 'trust', 'safe'],
    prioritize_shelter: ['survival', 'caution', 'rescue'],
    accept_responder_judgment: ['relationship', 'trust', 'safe'],
    override_responder_judgment: ['rescue', 'aggressive', 'risk'],
    use_background_for_deputy: ['rescue', 'resource', 'preparation', 'compassion'],
    extract_carefully: ['rescue', 'survival', 'safe'],
    rush_extraction: ['rescue', 'aggressive', 'risk'],
    mark_and_withdraw: ['survival', 'caution', 'truth'],
    continue_from_deputy_rescue: ['truth', 'investigation'],
    continue_after_deputy_loss: ['truth', 'investigation', 'caution'],

    reconstruct_chronology: ['investigation', 'truth'],
    trace_infrastructure: ['investigation', 'preparation'],
    compare_testimony: ['investigation', 'truth', 'relationship'],
    'theory.failed-containment': ['investigation', 'truth'],
    'theory.living-transmission': ['investigation', 'truth'],
    'theory.erased-settlement': ['investigation', 'truth'],
    'theory.crime-awakened-threat': ['investigation', 'truth'],
    carry_correct_conclusion_to_factions: ['truth', 'preparation'],
    reopen_evidence: ['investigation', 'truth', 'caution'],
    stand_by_wrong_theory: ['aggressive', 'failure'],
    carry_uncertain_conclusion: ['truth', 'caution'],
    present_false_certainty: ['aggressive', 'failure'],
    back_first_faction: ['rescue', 'preparation', 'relationship'],
    back_second_faction: ['truth', 'investigation', 'preparation'],
    back_third_faction: ['resource', 'preparation', 'aggressive'],
    carry_evidence: ['investigation', 'truth'],
    carry_supplies: ['resource', 'preparation', 'survival', 'rescue'],
    carry_relay_spares: ['resource', 'preparation', 'survival'],
    travel_light: ['speed', 'aggressive', 'caution'],

    take_direct_road: ['safe', 'survival'],
    verify_shelter_channel: ['investigation', 'truth', 'rescue'],
    take_deputy_route: ['survival', 'preparation', 'rescue'],
    cut_through_ravine: ['speed', 'risk', 'aggressive'],
    return_for_witnesses: ['rescue', 'relationship', 'compassion'],
    send_responder_back: ['rescue', 'relationship', 'risk'],
    continue_to_relay_during_crisis: ['aggressive', 'failure', 'speed'],
    return_to_relay_after_rescue: ['rescue', 'safe'],
    continue_after_witness_loss: ['truth', 'survival'],

    seal_with_rule: ['survival', 'investigation', 'preparation', 'truth'],
    destroy_station: ['aggressive', 'risk', 'preparation'],
    retreat_with_evidence: ['truth', 'survival', 'rescue'],
    abandon_station_untouched: ['failure', 'survival'],
    hold_switch_self: ['sacrifice', 'rescue', 'aggressive'],
    trust_responder: ['relationship', 'trust', 'rescue'],
    improvise_lock: ['resource', 'preparation', 'survival', 'rescue'],
    abandon_sequence: ['failure', 'survival'],
    accept_refusal_and_hold: ['sacrifice', 'rescue', 'relationship'],
    accept_refusal_and_improvise: ['resource', 'preparation', 'survival'],
    reject_refusal_and_flee: ['failure', 'survival'],
  });

  const STRATEGY_WEIGHTS = Object.freeze({
    balanced: Object.freeze({
      survival: 5, safe: 4, investigation: 4, preparation: 4, rescue: 4,
      relationship: 3, truth: 3, resource: 3, compassion: 2, trust: 2,
      caution: 1, speed: 0, aggressive: -1, risk: -4, failure: -40, sacrifice: -2,
    }),
    survival: Object.freeze({
      survival: 8, safe: 7, preparation: 5, resource: 4, rescue: 3,
      investigation: 2, relationship: 1, truth: 1, caution: 3, speed: 0,
      aggressive: -4, risk: -8, failure: -80, sacrifice: -6,
    }),
    investigation: Object.freeze({
      investigation: 9, truth: 8, preparation: 4, safe: 3, survival: 3,
      resource: 2, relationship: 1, rescue: 2, risk: -3, failure: -70,
      aggressive: -1, speed: -1, sacrifice: -4,
    }),
    relationship: Object.freeze({
      relationship: 9, trust: 8, compassion: 7, rescue: 6, truth: 2,
      survival: 3, safe: 3, preparation: 2, resource: 1, aggressive: -3,
      risk: -4, failure: -75, sacrifice: 1,
    }),
    resource: Object.freeze({
      resource: 9, preparation: 7, survival: 5, safe: 4, investigation: 2,
      rescue: 2, relationship: 1, speed: -1, aggressive: -2, risk: -5,
      failure: -75, sacrifice: -6,
    }),
    aggressive: Object.freeze({
      aggressive: 9, speed: 6, preparation: 2, investigation: 1, rescue: 1,
      risk: 3, survival: -2, safe: -2, caution: -4, relationship: -1,
      failure: -3, sacrifice: 5,
    }),
    random: Object.freeze({}),
  });

  function assertStrategy(strategy) {
    if (!SIMULATION_STRATEGIES.includes(strategy)) {
      throw new RangeError(`Unsupported simulation strategy: ${String(strategy)}`);
    }
  }

  function inferredChoiceTags(choice) {
    const id = String(choice?.id || '');
    const label = String(choice?.label || '').toLowerCase();
    const tags = [];
    const add = (...values) => values.forEach((value) => { if (!tags.includes(value)) tags.push(value); });
    if (/secure|preserve|seal|protect|controlled|external_review|state_transfer/.test(id)) add('safe', 'investigation', 'preparation');
    if (/statement|interview|question|review|records|timeline|cause|access|motive|audit|examine/.test(id)) add('investigation', 'truth');
    if (/partner|witness|comfort|consent|together|trust/.test(id)) add('relationship', 'trust', 'compassion');
    if (/accuse\.|public_case|present|prosecut/.test(id)) add('truth', 'investigation');
    if (/pursue|confront_alone|force|coerce|dismiss|ignore|rush|reject/.test(id)) add('aggressive', 'risk');
    if (/dismiss|coerce|reckless|fabricate|walk_away|let_deadline/.test(id) || /without evidence|ignore the warning/.test(label)) add('failure');
    if (/resource|kit|notebook|recorder|audit|portfolio/.test(id)) add('resource', 'preparation');
    return tags;
  }

  function tagsForChoice(choice) {
    if (Array.isArray(choice.strategyTags)) return [...choice.strategyTags];
    const explicit = CHOICE_TAGS[choice.id] || [];
    return [...new Set([...explicit, ...inferredChoiceTags(choice)])];
  }

  function scoreChoice(choice, strategy) {
    assertStrategy(strategy);
    if (strategy === 'random') return 0;
    const weights = STRATEGY_WEIGHTS[strategy];
    return tagsForChoice(choice).reduce((total, tag) => total + Number(weights[tag] || 0), 0);
  }

  function chooseSimulationChoice(scene, strategy, generator, context = {}) {
    assertStrategy(strategy);
    if (!scene?.choices?.length) throw new RangeError(`Simulation scene ${scene?.id || 'unknown'} has no choices.`);
    if (strategy === 'random') return generator.pick(scene.choices);
    const scored = scene.choices.map((choice) => {
      let score = scoreChoice(choice, strategy);
      const carefulStrategy = ['balanced', 'survival', 'investigation', 'relationship', 'resource'].includes(strategy);
      if (scene.id === 'ip.horror.chapter2.deduction'
        && choice.id === context.correctTheoryId
        && carefulStrategy) {
        score += 50;
      }
      if (context.correctAccusationId
        && choice.id === context.correctAccusationId
        && carefulStrategy) {
        score += 60;
      }
      if (scene.id === 'ip.mystery.act3.story-reprieve'
        && choice.id === 'accept_story_reconsideration'
        && carefulStrategy) {
        score += 45;
      }
      return { choice, score };
    });
    const best = Math.max(...scored.map((entry) => entry.score));
    return generator.pick(scored.filter((entry) => entry.score === best)).choice;
  }

  function simulateCampaign(options = {}) {
    const strategy = options.strategy || 'balanced';
    assertStrategy(strategy);
    const genre = options.genre || 'horror';
    const seed = String(options.seed || `SIM-${genre}-${strategy}-0001`);
    const difficulty = options.difficulty || 'standard';
    const length = options.length || 'short';
    const chooser = new IP.SeededRandom(`${seed}::simulation`).derive(`strategy.${strategy}`);
    const backgrounds = Object.keys(IP.BACKGROUNDS_BY_GENRE[genre] || {});
    if (!backgrounds.length) throw new RangeError(`No simulation backgrounds exist for genre ${genre}.`);
    const generated = IP.generateCampaign({
      genre,
      contentPackId: IP.APP_CONFIG.defaultContentPackByGenre[genre],
      name: options.name || 'Simulation Protagonist',
      background: options.background || chooser.pick(backgrounds),
      difficulty,
      length,
      seed,
      graphicViolence: Boolean(options.graphicViolence),
      psychologicalHorror: options.psychologicalHorror !== false,
      graphicCrimeScene: Boolean(options.graphicCrimeScene),
      manipulationThemes: options.manipulationThemes !== false,
    }, () => options.timestamp || '2026-08-03T12:00:00.000Z');
    const content = IP.getNarrativeContentForCampaign(generated.campaign);
    let tick = 0;
    const baseTime = Date.parse(options.timestamp || '2026-08-03T12:00:00.000Z');
    const now = () => new Date(baseTime + tick++ * 1000).toISOString();
    let payload = IP.startNarrative(content, generated.campaign, generated.save.payload, now);
    const path = [];
    const maximumChoices = Number.isInteger(options.maximumChoices) ? options.maximumChoices : 64;

    while (payload.status !== 'completed' && payload.status !== 'failed') {
      if (path.length >= maximumChoices) {
        throw new RangeError(`Simulation exceeded ${maximumChoices} choices without reaching an ending.`);
      }
      const scene = IP.renderScene(content, generated.campaign, payload);
      if (scene.terminal) break;
      const choice = chooseSimulationChoice(scene, strategy, chooser, {
        correctTheoryId: generated.campaign.world.mystery?.correctTheoryId || null,
        correctAccusationId: generated.campaign.world.case?.correctAccusationId || null,
      });
      path.push({ sceneId: scene.id, choiceId: choice.id, score: scoreChoice(choice, strategy) });
      payload = IP.resolveChoice(content, generated.campaign, payload, choice.id, now);
    }

    const ending = payload.endingEligibility?.currentEnding || null;
    if (!ending) throw new RangeError('Simulation reached a terminal status without ending metadata.');
    return {
      seed,
      genre,
      strategy,
      difficulty,
      length,
      background: generated.campaign.protagonist.background.id,
      campaignId: generated.campaign.id,
      threatId: genre === 'horror' ? generated.campaign.world.antagonist.id : null,
      mysteryId: genre === 'horror' ? generated.campaign.world.mystery?.id || null : generated.campaign.world.case?.id || null,
      culpritId: generated.campaign.world.case?.culpritId || null,
      primaryCompanion: genre === 'mystery'
        ? payload.worldState.narrative.cast.partner?.name || null
        : payload.worldState.narrative.cast.responder?.name || null,
      responder: payload.worldState.narrative.cast.responder?.name || null,
      responderInstinct: payload.worldState.narrative.cast.responder?.instinct || null,
      complication: payload.worldState.narrative.cast.complication?.id || null,
      status: payload.status,
      endingSceneId: ending.sceneId,
      outcome: ending.outcome,
      choices: path.length,
      path,
      finalState: {
        health: payload.player.health,
        morale: payload.player.morale,
        threatPressure: payload.worldState.threatPressure,
        evacuationReadiness: payload.worldState.evacuationReadiness,
        genreMetrics: IP.cloneData(payload.worldState.genreState?.metrics || {}),
        clues: payload.clues.length,
        injuries: payload.injuries.length,
        companionsLost: payload.campaignStatistics.companionsLost,
        optionalObjectivesCompleted: payload.campaignStatistics.optionalObjectivesCompleted,
      },
      summary: IP.buildCampaignSummary(content, generated.campaign, payload),
    };
  }

  function runSimulationBatch(options = {}) {
    const genres = options.genres || ['horror', 'mystery'];
    const strategies = options.strategies || SIMULATION_STRATEGIES;
    const difficulties = options.difficulties || ['story', 'standard', 'hard', 'brutal'];
    const lengths = options.lengths || ['short', 'standard'];
    const campaignsPerCombination = Math.max(1, Number(options.campaignsPerCombination || 2));
    strategies.forEach(assertStrategy);
    const runs = [];
    const errors = [];
    for (const genre of genres) {
      for (const strategy of strategies) {
        for (const difficulty of difficulties) {
          for (const length of lengths) {
            for (let index = 0; index < campaignsPerCombination; index += 1) {
              const seed = `${options.seedPrefix || 'M6-SIM'}-${genre}-${strategy}-${difficulty}-${length}-${String(index + 1).padStart(3, '0')}`;
              try {
                runs.push(simulateCampaign({ genre, strategy, difficulty, length, seed }));
              } catch (error) {
                errors.push({ seed, genre, strategy, difficulty, length, error: String(error?.message || error) });
              }
            }
          }
        }
      }
    }
    const endings = {};
    const byGenre = {};
    const byDifficulty = {};
    const byStrategy = {};
    for (const run of runs) {
      endings[run.endingSceneId] = Number(endings[run.endingSceneId] || 0) + 1;
      byGenre[run.genre] ||= { total: 0, victories: 0, failures: 0, averageChoices: 0 };
      byDifficulty[run.difficulty] ||= { total: 0, victories: 0, failures: 0, averageChoices: 0 };
      byStrategy[run.strategy] ||= { total: 0, victories: 0, failures: 0, averageChoices: 0 };
      for (const group of [byGenre[run.genre], byDifficulty[run.difficulty], byStrategy[run.strategy]]) {
        group.total += 1;
        if (run.status === 'completed') group.victories += 1;
        else group.failures += 1;
        group.averageChoices += run.choices;
      }
    }
    for (const group of [...Object.values(byGenre), ...Object.values(byDifficulty), ...Object.values(byStrategy)]) {
      group.averageChoices = group.total ? Number((group.averageChoices / group.total).toFixed(2)) : 0;
    }
    return {
      generatedAt: new Date().toISOString(),
      totalRequested: genres.length * strategies.length * difficulties.length * lengths.length * campaignsPerCombination,
      completedRuns: runs.length,
      errors,
      endings,
      byGenre,
      byDifficulty,
      byStrategy,
      runs,
      passed: errors.length === 0,
    };
  }

  return {
    CHOICE_TAGS,
    SIMULATION_STRATEGIES,
    STRATEGY_WEIGHTS,
    chooseSimulationChoice,
    runSimulationBatch,
    inferredChoiceTags,
    scoreChoice,
    simulateCampaign,
    tagsForChoice,
  };
});

/* ===== src/js/core/developer-tools.js ===== */
(function (root, factory) {
  const namespace = (root.InfinitePaths = root.InfinitePaths || {});
  const exported = factory(namespace);
  Object.assign(namespace, exported);
  if (typeof module !== 'undefined' && module.exports) module.exports = exported;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (IP) {
  'use strict';

  const DEVELOPER_STORAGE_KEY = 'infinite-paths.developer-mode.v1';
  const DEVELOPER_PASSPHRASE = 'PATHFINDER';

  function clone(value) { return IP.cloneData(value); }

  function isDeveloperUnlocked(storage = globalThis.localStorage) {
    try { return storage?.getItem(DEVELOPER_STORAGE_KEY) === 'unlocked'; } catch { return false; }
  }

  function unlockDeveloperMode(passphrase, storage = globalThis.localStorage) {
    if (String(passphrase || '').trim().toUpperCase() !== DEVELOPER_PASSPHRASE) return false;
    try { storage?.setItem(DEVELOPER_STORAGE_KEY, 'unlocked'); } catch { /* session access still succeeds */ }
    return true;
  }

  function lockDeveloperMode(storage = globalThis.localStorage) {
    try { storage?.removeItem(DEVELOPER_STORAGE_KEY); } catch { /* no-op */ }
  }

  function destinationIds(choice) {
    const ids = [];
    if (choice.next) ids.push(choice.next);
    for (const option of choice.nextOptions || []) if (option.next) ids.push(option.next);
    return ids;
  }

  function collectConditionTypes(condition, counts = {}) {
    if (!condition || typeof condition !== 'object') return counts;
    if (Array.isArray(condition.all)) {
      counts.all = (counts.all || 0) + 1;
      condition.all.forEach((item) => collectConditionTypes(item, counts));
    } else if (Array.isArray(condition.any)) {
      counts.any = (counts.any || 0) + 1;
      condition.any.forEach((item) => collectConditionTypes(item, counts));
    } else if (condition.not) {
      counts.not = (counts.not || 0) + 1;
      collectConditionTypes(condition.not, counts);
    } else if (condition.relationship) {
      counts.relationship = (counts.relationship || 0) + 1;
    } else if (condition.path) {
      counts.path = (counts.path || 0) + 1;
    } else {
      counts.unknown = (counts.unknown || 0) + 1;
    }
    return counts;
  }

  function validateContentDeep(content) {
    const base = IP.validateNarrativeContent(content);
    const ids = new Set(content.scenes.map((scene) => scene.id));
    const incoming = Object.fromEntries(content.scenes.map((scene) => [scene.id, []]));
    const outgoing = {};
    const brokenReferences = [];
    const duplicateChoiceIds = [];
    const effectTypes = {};
    const conditionTypes = {};
    let choiceCount = 0;

    for (const scene of content.scenes) {
      const seenChoices = new Set();
      outgoing[scene.id] = [];
      for (const choice of scene.choices || []) {
        choiceCount += 1;
        if (seenChoices.has(choice.id)) duplicateChoiceIds.push(`${scene.id}::${choice.id}`);
        seenChoices.add(choice.id);
        collectConditionTypes(choice.when, conditionTypes);
        for (const effect of choice.effects || []) {
          effectTypes[effect.type] = (effectTypes[effect.type] || 0) + 1;
          collectConditionTypes(effect.when, conditionTypes);
        }
        for (const destination of destinationIds(choice)) {
          outgoing[scene.id].push(destination);
          if (!ids.has(destination)) brokenReferences.push({ sceneId: scene.id, choiceId: choice.id, destination });
          else incoming[destination].push({ sceneId: scene.id, choiceId: choice.id });
        }
      }
    }

    const entryId = content.entrySceneId || content.startSceneId;
    const reached = new Set();
    const queue = entryId ? [entryId] : [];
    while (queue.length) {
      const id = queue.shift();
      if (!id || reached.has(id) || !ids.has(id)) continue;
      reached.add(id);
      for (const next of outgoing[id] || []) queue.push(next);
    }
    const unreachable = [...ids].filter((id) => !reached.has(id));
    const orphaned = [...ids].filter((id) => id !== entryId && !(incoming[id] || []).length);
    const endings = content.scenes.filter((scene) => scene.sceneType === 'ending').map((scene) => ({
      id: scene.id,
      title: scene.title,
      incoming: incoming[scene.id] || [],
    }));
    const warnings = [];
    if (unreachable.length) warnings.push(`${unreachable.length} scene(s) are unreachable.`);
    if (orphaned.length) warnings.push(`${orphaned.length} scene(s) have no incoming path.`);
    if (duplicateChoiceIds.length) warnings.push(`${duplicateChoiceIds.length} duplicate choice ID(s) were found.`);
    if (brokenReferences.length) warnings.push(`${brokenReferences.length} broken destination reference(s) were found.`);

    return {
      passed: warnings.length === 0,
      narrativeVersion: base.narrativeVersion,
      contentPackId: content.contentPackId,
      sceneCount: content.scenes.length,
      choiceCount,
      endingCount: endings.length,
      reachableScenes: reached.size,
      unreachable,
      orphaned,
      brokenReferences,
      duplicateChoiceIds,
      conditionTypes,
      effectTypes,
      incoming,
      outgoing,
      endings,
      warnings,
    };
  }

  function mermaidSceneGraph(content) {
    const lines = ['flowchart TD'];
    const safe = (value) => String(value).replace(/[^a-zA-Z0-9_]/g, '_');
    for (const scene of content.scenes) {
      const shapeOpen = scene.sceneType === 'ending' ? '(["' : '["';
      const shapeClose = scene.sceneType === 'ending' ? '"])' : '"]';
      lines.push(`  ${safe(scene.id)}${shapeOpen}${String(scene.title || scene.id).replace(/"/g, "'")}${shapeClose}`);
      for (const choice of scene.choices || []) {
        for (const destination of destinationIds(choice)) {
          lines.push(`  ${safe(scene.id)} -->|"${String(choice.label || choice.id).replace(/"/g, "'").slice(0, 64)}"| ${safe(destination)}`);
        }
      }
    }
    return `${lines.join('\n')}\n`;
  }

  function explainCondition(condition, context) {
    if (!condition) return { passed: true, summary: 'No condition', children: [] };
    if (Array.isArray(condition.all)) {
      const children = condition.all.map((item) => explainCondition(item, context));
      return { passed: children.every((item) => item.passed), summary: 'All conditions', children };
    }
    if (Array.isArray(condition.any)) {
      const children = condition.any.map((item) => explainCondition(item, context));
      return { passed: children.some((item) => item.passed), summary: 'Any condition', children };
    }
    if (condition.not) {
      const child = explainCondition(condition.not, context);
      return { passed: !child.passed, summary: 'Not', children: [child] };
    }
    let passed = false;
    try { passed = IP.evaluateCondition(condition, context); } catch { passed = false; }
    if (condition.relationship) {
      const descriptor = condition.relationship;
      return { passed, summary: `Relationship ${descriptor.npcId || ''}.${descriptor.metric || ''}`, descriptor: clone(descriptor), children: [] };
    }
    if (condition.path) {
      return { passed, summary: `${condition.path} comparison`, descriptor: clone(condition), children: [] };
    }
    return { passed, summary: 'Unknown condition', descriptor: clone(condition), children: [] };
  }

  function explainCurrentScene(campaign, payload, content = IP.HORROR_FOUNDATION_CONTENT) {
    const currentSceneId = typeof payload?.currentScene === 'string' ? payload.currentScene : payload?.currentScene?.id;
    const scene = content.scenes.find((item) => item.id === currentSceneId);
    if (!scene) throw new RangeError('The active scene is not installed in this content pack.');
    const context = IP.buildTemplateContext(campaign, payload);
    return {
      scene: { id: scene.id, title: scene.title, type: scene.sceneType, act: scene.act, chapter: scene.chapter },
      choices: (scene.choices || []).map((choice) => ({
        id: choice.id,
        label: IP.interpolateText(choice.label, context),
        available: IP.evaluateCondition(choice.when, context),
        explanation: explainCondition(choice.when, context),
        destinations: destinationIds(choice),
        effects: clone(choice.effects || []),
      })),
    };
  }

  function buildEndingEligibilityReport(campaign, payload, content = IP.HORROR_FOUNDATION_CONTENT) {
    const graph = validateContentDeep(content);
    return graph.endings.map((ending) => ({
      id: ending.id,
      title: ending.title,
      alreadyReached: payload?.endingEligibility?.currentEnding?.sceneId === ending.id,
      incomingRoutes: ending.incoming.map((edge) => {
        const scene = content.scenes.find((item) => item.id === edge.sceneId);
        const choice = scene?.choices?.find((item) => item.id === edge.choiceId);
        return {
          fromScene: edge.sceneId,
          choiceId: edge.choiceId,
          choiceLabel: choice?.label || edge.choiceId,
          condition: explainCondition(choice?.when, IP.buildTemplateContext(campaign, payload)),
        };
      }),
    }));
  }

  function previewScene(campaign, payload, sceneId, content = IP.HORROR_FOUNDATION_CONTENT) {
    const scene = content.scenes.find((item) => item.id === sceneId);
    if (!scene) throw new RangeError(`Unknown scene: ${sceneId}`);
    const testPayload = clone(payload);
    const sourceSceneId = typeof payload?.currentScene === 'string' ? payload.currentScene : payload?.currentScene?.id || null;
    testPayload.currentScene = sceneId;
    testPayload.worldState = testPayload.worldState || {};
    testPayload.worldState.narrative = testPayload.worldState.narrative || {};
    testPayload.worldState.narrative.sceneVariants = testPayload.worldState.narrative.sceneVariants || {};
    testPayload.worldState.narrative.sceneVariants[sceneId] = 0;
    testPayload.developer = { testPreview: true, sourceSceneId };
    const rendered = IP.renderScene(content, campaign, testPayload);
    return { testOnly: true, campaignId: campaign.id, sceneId, payload: testPayload, rendered };
  }

  function createAuthoringTemplate() {
    return {
      schemaVersion: 3,
      id: 'ip.pack.scene.unique-id',
      sceneType: 'narrative',
      act: 1,
      chapter: 1,
      kicker: 'ACT I',
      title: 'Scene title',
      location: 'Location',
      contentWarnings: [],
      prerequisites: null,
      prose: [{ id: 'scene.prose.1', text: 'Authored prose.' }],
      onEnter: [],
      choices: [{ id: 'choice_id', label: 'Meaningful action.', when: null, effects: [], next: 'ip.pack.scene.next-id' }],
      testing: { expectedReachable: true, notes: '' },
      versionIntroduced: '0.1.0',
    };
  }

  return {
    DEVELOPER_PASSPHRASE,
    DEVELOPER_STORAGE_KEY,
    buildEndingEligibilityReport,
    createAuthoringTemplate,
    explainCondition,
    explainCurrentScene,
    isDeveloperUnlocked,
    lockDeveloperMode,
    mermaidSceneGraph,
    previewScene,
    unlockDeveloperMode,
    validateContentDeep,
  };
});

/* ===== src/js/storage/campaign-store.js ===== */
(function (root, factory) {
  const namespace = (root.InfinitePaths = root.InfinitePaths || {});
  const exported = factory(namespace);
  Object.assign(namespace, exported);
  if (typeof module !== 'undefined' && module.exports) module.exports = exported;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (IP) {
  'use strict';

  class CampaignStore {
    constructor(database) {
      this.database = database;
    }

    async createBundle(bundle) {
      if (!bundle?.campaign || !bundle?.save || !bundle?.archive) {
        throw new TypeError('Campaign creation requires campaign, save, and archive records.');
      }
      IP.validateCampaignRecord(bundle.campaign);
      IP.validateSaveRecord(bundle.save);
      IP.validateArchiveRecord(bundle.archive);
      if (bundle.save.campaignId !== bundle.campaign.id || bundle.archive.campaignId !== bundle.campaign.id) {
        throw new RangeError('Campaign creation records do not share one identity.');
      }
      const database = await this.database.open();
      const transaction = database.transaction(
        [IP.STORE_NAMES.campaigns, IP.STORE_NAMES.saves, IP.STORE_NAMES.archives, IP.STORE_NAMES.appMeta],
        'readwrite',
      );
      transaction.objectStore(IP.STORE_NAMES.campaigns).add(bundle.campaign);
      transaction.objectStore(IP.STORE_NAMES.saves).add(bundle.save);
      transaction.objectStore(IP.STORE_NAMES.archives).add(bundle.archive);
      const meta = transaction.objectStore(IP.STORE_NAMES.appMeta);
      meta.put({ key: 'lastCampaignId', value: bundle.campaign.id, updatedAt: bundle.campaign.updatedAt });
      meta.put({ key: IP.activeSaveMetaKey(bundle.campaign.id), value: bundle.save.id, updatedAt: bundle.save.updatedAt });
      await IP.transactionToPromise(transaction);
      return bundle.campaign;
    }

    getCampaign(id) {
      return id ? this.database.get(IP.STORE_NAMES.campaigns, id) : Promise.resolve(null);
    }

    getSave(id) {
      return id ? this.database.get(IP.STORE_NAMES.saves, id) : Promise.resolve(null);
    }

    getArchive(id) {
      return id ? this.database.get(IP.STORE_NAMES.archives, id) : Promise.resolve(null);
    }

    getBackup(id) {
      return id ? this.database.get(IP.STORE_NAMES.backups, id) : Promise.resolve(null);
    }

    async listCampaigns() {
      const records = await this.database.getAll(IP.STORE_NAMES.campaigns);
      return records.sort((left, right) => String(right.updatedAt).localeCompare(String(left.updatedAt)));
    }

    async listActiveCampaigns() {
      return (await this.listCampaigns()).filter(
        (campaign) => !['completed', 'failed', 'abandoned'].includes(campaign.status),
      );
    }

    async listArchives() {
      const records = await this.database.getAll(IP.STORE_NAMES.archives);
      return records.sort((left, right) => String(right.updatedAt).localeCompare(String(left.updatedAt)));
    }

    async listSaves(campaignId) {
      const records = await this.database.getAllByIndex(IP.STORE_NAMES.saves, 'campaignId', campaignId);
      return records.sort((left, right) => {
        if (left.slotType !== right.slotType) return left.slotType === 'autosave' ? -1 : 1;
        return Number(left.slotNumber) - Number(right.slotNumber);
      });
    }

    async listBackups(campaignId) {
      const records = await this.database.getAllByIndex(IP.STORE_NAMES.backups, 'campaignId', campaignId);
      return records
        .filter((record) => record.recordType !== 'quarantined-import')
        .sort((left, right) => String(right.createdAt).localeCompare(String(left.createdAt)));
    }

    async listQuarantinedImports() {
      const records = await this.database.getAll(IP.STORE_NAMES.backups);
      return records
        .filter((record) => record.recordType === 'quarantined-import')
        .sort((left, right) => String(right.createdAt).localeCompare(String(left.createdAt)));
    }

    async getActiveSaveId(campaignId) {
      const configured = await this.database.getMeta(IP.activeSaveMetaKey(campaignId));
      if (configured && await this.getSave(configured)) return configured;
      const autosaveId = IP.makeSaveId(campaignId, 'autosave', 0);
      if (await this.getSave(autosaveId)) return autosaveId;
      const saves = await this.listSaves(campaignId);
      return saves[0]?.id || null;
    }

    async getActiveSave(campaignId) {
      const id = await this.getActiveSaveId(campaignId);
      return id ? this.getSave(id) : null;
    }

    async getCampaignBundle(campaignId) {
      const campaign = await this.getCampaign(campaignId);
      if (!campaign) throw new RangeError('Campaign not found.');
      const [saves, storedArchive, activeSaveId] = await Promise.all([
        this.listSaves(campaignId),
        this.getArchive(campaignId),
        this.getActiveSaveId(campaignId),
      ]);
      if (!saves.length) throw new RangeError('Campaign contains no save records.');
      const archive = storedArchive || IP.createArchiveRecord(campaign, null, campaign.updatedAt);
      return {
        campaign,
        saves,
        archive,
        activeSaveId: activeSaveId || saves[0].id,
      };
    }

    async getLastCampaign() {
      const id = await this.database.getMeta('lastCampaignId');
      const selected = id ? await this.getCampaign(id) : null;
      if (selected && !['completed', 'failed', 'abandoned'].includes(selected.status)) return selected;
      return (await this.listActiveCampaigns())[0] || null;
    }

    async deleteBackup(id) {
      const record = await this.getBackup(id);
      if (!record) return false;
      await this.database.delete(IP.STORE_NAMES.backups, id);
      return true;
    }
  }

  return { CampaignStore };
});

/* ===== src/js/storage/save-service.js ===== */
(function (root, factory) {
  const namespace = (root.InfinitePaths = root.InfinitePaths || {});
  const exported = factory(namespace);
  Object.assign(namespace, exported);
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = exported;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function (IP) {
  'use strict';

  const MAX_AUTOMATIC_BACKUPS = 12;
  const MAX_AUTOSAVE_RECOVERY_BACKUPS = 3;
  const QUARANTINE_SCHEMA_VERSION = 1;
  const QUARANTINE_INTEGRITY_SCOPE = 'quarantined-import-v1';

  const BACKUP_REASON_LABELS = Object.freeze({
    'user-created': 'User recovery point',
    'pre-migration': 'Before data migration',
    'pre-import-overwrite': 'Before imported data replaced local data',
    'pre-manual-overwrite': 'Before a manual save was overwritten',
    'pre-manual-delete': 'Before a manual save was deleted',
    'pre-restore': 'Before a backup was restored',
    'pre-abandonment': 'Before campaign abandonment',
    'autosave-recovery': 'Previous autosave recovery point',
  });

  class SaveConflictError extends Error {
    constructor(message, campaignId) {
      super(message);
      this.name = 'SaveConflictError';
      this.code = 'CAMPAIGN_EXISTS';
      this.campaignId = campaignId;
    }
  }

  class FutureDataError extends Error {
    constructor(message, details = {}) {
      super(message);
      this.name = 'FutureDataError';
      this.code = 'FUTURE_DATA';
      Object.assign(this, details);
    }
  }

  function backupReasonLabel(reason) {
    return BACKUP_REASON_LABELS[reason] || String(reason || 'Recovery point');
  }

  function validateBackupRecord(backup) {
    if (!IP.isPlainObject(backup)) {
      throw new TypeError('Backup record must be an object.');
    }
    if (backup.schemaVersion !== IP.BACKUP_SCHEMA_VERSION) {
      throw new RangeError(`Backup schema ${backup.schemaVersion} is not supported.`);
    }
    if (typeof backup.id !== 'string' || !backup.id.startsWith('bkp_')) {
      throw new RangeError('Backup ID is invalid.');
    }
    if (typeof backup.campaignId !== 'string' || backup.campaignId !== backup.snapshot?.campaign?.id) {
      throw new RangeError('Backup campaign identity is inconsistent.');
    }
    if (!Array.isArray(backup.snapshot?.saves) || backup.snapshot.saves.length < 1) {
      throw new RangeError('Backup save collection is missing.');
    }
    IP.requireAutosave(backup.snapshot.saves, backup.campaignId);
    if (backup.snapshot.archive?.campaignId !== backup.campaignId) {
      throw new RangeError('Backup archive identity is inconsistent.');
    }
    if (!backup.snapshot.saves.some((save) => save.id === backup.snapshot.activeSaveId)) {
      throw new RangeError('Backup active-save pointer is invalid.');
    }
    const integrity = IP.verifySealedRecord(backup, IP.BACKUP_INTEGRITY_SCOPE);
    if (!integrity.ok) {
      throw new RangeError(`Backup integrity failed: ${integrity.reason}`);
    }
    return backup;
  }

  function createBackupRecord(bundle, {
    reason = 'user-created',
    automatic = false,
    now = () => new Date().toISOString(),
  } = {}) {
    if (!bundle?.campaign?.id) {
      throw new TypeError('A campaign bundle is required to create a backup.');
    }
    IP.requireAutosave(bundle.saves || [], bundle.campaign.id);
    const createdAt = now();
    const snapshot = {
      campaign: IP.cloneData(bundle.campaign),
      saves: IP.cloneData(bundle.saves || []),
      archive: IP.cloneData(bundle.archive),
      activeSaveId: bundle.activeSaveId || IP.makeSaveId(bundle.campaign.id, 'autosave', 0),
    };
    const fingerprint = IP.sha256Hex(IP.canonicalStringify({
      campaignId: bundle.campaign.id,
      createdAt,
      reason,
      saveIds: snapshot.saves.map((save) => `${save.id}:${save.revision || 0}:${save.updatedAt || ''}`),
    })).slice(0, 16);
    const record = {
      id: `bkp_${bundle.campaign.id.slice(4)}_${Date.parse(createdAt) || 0}_${fingerprint}`,
      recordType: 'campaign-backup',
      schemaVersion: IP.BACKUP_SCHEMA_VERSION,
      campaignId: bundle.campaign.id,
      reason,
      label: backupReasonLabel(reason),
      automatic: Boolean(automatic),
      appVersion: IP.APP_CONFIG.version,
      sourceSaveFormatVersion: Number(bundle.campaign.saveFormatVersion || 1),
      snapshot,
      createdAt,
    };
    return IP.sealRecord(record, IP.BACKUP_INTEGRITY_SCOPE);
  }

  function validateQuarantinedImport(record) {
    if (!IP.isPlainObject(record) || record.recordType !== 'quarantined-import') {
      throw new TypeError('Quarantined import record is invalid.');
    }
    if (record.schemaVersion !== QUARANTINE_SCHEMA_VERSION) {
      throw new RangeError('Quarantined import schema is unsupported.');
    }
    if (typeof record.id !== 'string' || !record.id.startsWith('qtn_')) {
      throw new RangeError('Quarantined import ID is invalid.');
    }
    if (typeof record.rawText !== 'string' || !record.rawText.trim()) {
      throw new RangeError('Quarantined import source is missing.');
    }
    const integrity = IP.verifySealedRecord(record, QUARANTINE_INTEGRITY_SCOPE);
    if (!integrity.ok) {
      throw new RangeError(`Quarantined import integrity failed: ${integrity.reason}`);
    }
    return record;
  }

  function createQuarantinedImport(text, error, {
    filename = 'future-infinite-paths-export.json',
    parsed = null,
    now = () => new Date().toISOString(),
  } = {}) {
    const rawText = String(text || '');
    if (!rawText.trim()) {
      throw new RangeError('An empty file cannot be preserved.');
    }
    const createdAt = now();
    const campaignId = typeof parsed?.campaign?.id === 'string' ? parsed.campaign.id : null;
    const record = {
      id: `qtn_${Date.parse(createdAt) || 0}_${IP.sha256Hex(rawText).slice(0, 16)}`,
      recordType: 'quarantined-import',
      schemaVersion: QUARANTINE_SCHEMA_VERSION,
      campaignId,
      filename: `${IP.safeFilename(String(filename || '').replace(/\.json$/i, ''), 'future-infinite-paths-export')}.json`,
      rawText,
      bytes: IP.utf8Bytes(rawText).byteLength,
      reasonCode: error?.code || 'FUTURE_DATA',
      reason: String(error?.message || 'This file requires a newer Infinite Paths release.'),
      detectedExportSchemaVersion: Number.isInteger(parsed?.exportSchemaVersion)
        ? parsed.exportSchemaVersion
        : null,
      detectedSaveFormatVersion: Number.isInteger(parsed?.campaign?.saveFormatVersion)
        ? parsed.campaign.saveFormatVersion
        : null,
      detectedRulesVersion: typeof parsed?.campaign?.rulesVersion === 'string'
        ? parsed.campaign.rulesVersion
        : null,
      createdAt,
    };
    return IP.sealRecord(record, QUARANTINE_INTEGRITY_SCOPE);
  }

  function validateExportBundle(exportBundle) {
    if (!IP.isPlainObject(exportBundle)) {
      throw new TypeError('Imported backup must be a JSON object.');
    }
    if (exportBundle.exportType !== 'infinite-paths-campaign') {
      throw new RangeError('This JSON file is not an Infinite Paths campaign export.');
    }
    if (!Number.isInteger(exportBundle.exportSchemaVersion)) {
      throw new RangeError('Export schema version is missing.');
    }
    if (exportBundle.exportSchemaVersion > IP.EXPORT_SCHEMA_VERSION) {
      throw new FutureDataError(
        `Export schema ${exportBundle.exportSchemaVersion} requires a newer Infinite Paths release.`,
        { exportSchemaVersion: exportBundle.exportSchemaVersion },
      );
    }
    if (exportBundle.exportSchemaVersion < 1) {
      throw new RangeError('Export schema version is invalid.');
    }
    const integrity = IP.verifySealedRecord(exportBundle, IP.EXPORT_INTEGRITY_SCOPE);
    if (!integrity.ok) {
      throw new RangeError(`Export integrity failed: ${integrity.reason}`);
    }

    const campaign = exportBundle.campaign;
    if (Number(campaign?.saveFormatVersion) > IP.SAVE_FORMAT_VERSION) {
      throw new FutureDataError(
        `Save format ${campaign.saveFormatVersion} requires a newer Infinite Paths release.`,
        { saveFormatVersion: campaign.saveFormatVersion },
      );
    }
    IP.validateCampaignRecord(campaign, { allowMissingIntegrity: false, allowLegacyProfile: true });
    if (!Array.isArray(exportBundle.saves) || exportBundle.saves.length < 1) {
      throw new RangeError('Export contains no campaign saves.');
    }
    IP.requireAutosave(exportBundle.saves, campaign.id);
    const seenIds = new Set();
    const seenSlots = new Set();
    for (const save of exportBundle.saves) {
      if (save.campaignId !== campaign.id || save.payload?.campaignId !== campaign.id) {
        throw new RangeError('Export contains a save for a different campaign.');
      }
      const inspection = IP.inspectSaveRecord(save);
      if (inspection.state === 'unsupported') {
        throw new FutureDataError(inspection.message, { saveFormatVersion: save.saveFormatVersion });
      }
      if (inspection.state === 'corrupt') {
        throw new RangeError(`Export contains a damaged save: ${inspection.message}`);
      }
      if (seenIds.has(save.id)) {
        throw new RangeError('Export contains duplicate save IDs.');
      }
      const slotKey = `${save.slotType}:${save.slotNumber}`;
      if (seenSlots.has(slotKey)) {
        throw new RangeError('Export contains duplicate save slots.');
      }
      seenIds.add(save.id);
      seenSlots.add(slotKey);
    }
    IP.validateArchiveRecord(exportBundle.archive, { allowMissingIntegrity: false });
    if (exportBundle.archive.campaignId !== campaign.id) {
      throw new RangeError('Export archive does not match its campaign.');
    }
    if (typeof exportBundle.activeSaveId !== 'string' || !seenIds.has(exportBundle.activeSaveId)) {
      throw new RangeError('Export active-save pointer is invalid.');
    }
    return exportBundle;
  }

  function createExportBundle(bundle, now = () => new Date().toISOString()) {
    IP.validateCampaignRecord(bundle.campaign);
    IP.requireAutosave(bundle.saves, bundle.campaign.id);
    for (const save of bundle.saves) {
      IP.validateSaveRecord(save);
    }
    IP.validateArchiveRecord(bundle.archive);
    if (!bundle.saves.some((save) => save.id === bundle.activeSaveId)) {
      throw new RangeError('The active save is missing from this campaign.');
    }
    const exportBundle = {
      exportType: 'infinite-paths-campaign',
      exportSchemaVersion: IP.EXPORT_SCHEMA_VERSION,
      exportedAt: now(),
      exportedBy: {
        application: IP.APP_CONFIG.name,
        appVersion: IP.APP_CONFIG.version,
        saveFormatVersion: IP.SAVE_FORMAT_VERSION,
      },
      compatibility: {
        minimumAppVersion: '0.3.0',
        rulesVersion: bundle.campaign.rulesVersion,
        contentVersion: bundle.campaign.contentVersion,
        contentPack: {
          id: bundle.campaign.contentPack?.id,
          version: bundle.campaign.contentPack?.version,
        },
      },
      campaign: IP.cloneData(bundle.campaign),
      saves: IP.cloneData(bundle.saves),
      archive: IP.cloneData(bundle.archive),
      activeSaveId: bundle.activeSaveId,
    };
    return IP.sealRecord(exportBundle, IP.EXPORT_INTEGRITY_SCOPE);
  }

  function isTerminalStatus(status) {
    return ['completed', 'failed', 'abandoned'].includes(status);
  }

  class SaveService {
    constructor(database, campaignStore, now = () => new Date().toISOString()) {
      this.database = database;
      this.campaignStore = campaignStore;
      this.now = now;
      this.lastInitializationReport = null;
    }

    async initialize() {
      const report = {
        checkedCampaigns: 0,
        migratedCampaigns: 0,
        migratedSaves: 0,
        corruptCampaigns: 0,
        corruptSaves: 0,
        unsupportedSaves: 0,
        warnings: [],
        completedAt: null,
      };
      const campaigns = await this.campaignStore.listCampaigns();
      for (const campaign of campaigns) {
        report.checkedCampaigns += 1;
        try {
          const bundle = await this.campaignStore.getCampaignBundle(campaign.id);
          const campaignIntegrity = campaign.integrity
            ? IP.verifySealedRecord(campaign, IP.CAMPAIGN_INTEGRITY_SCOPE)
            : { ok: true, legacy: true };
          const archiveIntegrity = bundle.archive?.integrity
            ? IP.verifySealedRecord(bundle.archive, IP.ARCHIVE_INTEGRITY_SCOPE)
            : { ok: true, legacy: true };
          const saveInspections = bundle.saves.map((save) => IP.inspectSaveRecord(save));
          report.corruptSaves += saveInspections.filter((inspection) => inspection.state === 'corrupt').length;
          report.unsupportedSaves += saveInspections.filter((inspection) => inspection.state === 'unsupported').length;
          if (!campaignIntegrity.ok || !archiveIntegrity.ok) {
            report.corruptCampaigns += 1;
            report.warnings.push(`${campaign.title}: identity or archive integrity failed; automatic migration was not attempted.`);
            continue;
          }
          const needsMigration = !campaign.integrity
            || Number(campaign.saveFormatVersion) < IP.SAVE_FORMAT_VERSION
            || !bundle.archive?.integrity
            || saveInspections.some((inspection) => inspection.state === 'legacy');
          const blocked = saveInspections.some((inspection) => ['corrupt', 'unsupported'].includes(inspection.state));
          if (needsMigration && !blocked) {
            const migration = await this.migrateStoredCampaign(campaign.id, bundle);
            report.migratedCampaigns += 1;
            report.migratedSaves += migration.migratedSaves;
          } else if (blocked) {
            report.warnings.push(`${campaign.title}: migration skipped because one or more saves require recovery or a newer app.`);
          }
        } catch (error) {
          report.warnings.push(`${campaign.title || campaign.id}: ${String(error?.message || error)}`);
        }
      }
      report.completedAt = this.now();
      this.lastInitializationReport = report;
      await this.database.setMeta('lastSaveMaintenanceReport', report);
      return report;
    }

    async migrateStoredCampaign(campaignId, existingBundle = null) {
      const bundle = existingBundle || await this.campaignStore.getCampaignBundle(campaignId);
      const legacyCount = bundle.saves.filter(
        (save) => Number(save.saveFormatVersion) < IP.SAVE_FORMAT_VERSION,
      ).length;
      const backup = createBackupRecord(bundle, {
        reason: 'pre-migration',
        automatic: true,
        now: this.now,
      });
      const migrated = IP.migrateCampaignBundle(bundle, this.now);
      await this.replaceCampaignData(migrated, {
        backup,
        existingSaveIds: bundle.saves.map((save) => save.id),
      });
      await this.pruneAutomaticBackups(campaignId);
      return {
        campaignId,
        migratedSaves: legacyCount,
        backupId: backup.id,
      };
    }

    async replaceCampaignData(bundle, { backup = null, existingSaveIds = [] } = {}) {
      IP.validateCampaignRecord(bundle.campaign);
      IP.requireAutosave(bundle.saves, bundle.campaign.id);
      bundle.saves.forEach((save) => IP.validateSaveRecord(save));
      IP.validateArchiveRecord(bundle.archive);
      if (!bundle.saves.some((save) => save.id === bundle.activeSaveId)) {
        throw new RangeError('Replacement bundle does not contain its active save.');
      }
      if (backup) {
        validateBackupRecord(backup);
      }

      const database = await this.database.open();
      const transaction = database.transaction(
        [IP.STORE_NAMES.campaigns, IP.STORE_NAMES.saves, IP.STORE_NAMES.archives, IP.STORE_NAMES.backups, IP.STORE_NAMES.appMeta],
        'readwrite',
      );
      transaction.objectStore(IP.STORE_NAMES.campaigns).put(bundle.campaign);
      const saveStore = transaction.objectStore(IP.STORE_NAMES.saves);
      const incomingIds = new Set(bundle.saves.map((save) => save.id));
      for (const id of existingSaveIds) {
        if (!incomingIds.has(id)) {
          saveStore.delete(id);
        }
      }
      for (const save of bundle.saves) {
        saveStore.put(save);
      }
      transaction.objectStore(IP.STORE_NAMES.archives).put(bundle.archive);
      if (backup) {
        transaction.objectStore(IP.STORE_NAMES.backups).put(backup);
      }
      const meta = transaction.objectStore(IP.STORE_NAMES.appMeta);
      meta.put({ key: 'lastCampaignId', value: bundle.campaign.id, updatedAt: this.now() });
      meta.put({ key: IP.activeSaveMetaKey(bundle.campaign.id), value: bundle.activeSaveId, updatedAt: this.now() });
      await IP.transactionToPromise(transaction);
      return bundle.campaign;
    }

    async createUserBackup(campaignId) {
      const bundle = await this.campaignStore.getCampaignBundle(campaignId);
      const backup = createBackupRecord(bundle, {
        reason: 'user-created',
        automatic: false,
        now: this.now,
      });
      validateBackupRecord(backup);
      await this.database.put(IP.STORE_NAMES.backups, backup);
      return backup;
    }

    async createManualSave(campaignId, slotNumber) {
      const campaign = await this.campaignStore.getCampaign(campaignId);
      if (!campaign) {
        throw new RangeError('Campaign not found.');
      }
      IP.validateCampaignRecord(campaign);
      const activeSave = await this.campaignStore.getActiveSave(campaignId);
      IP.validateSaveRecord(activeSave);
      const normalizedSlot = Number(slotNumber);
      const targetId = IP.makeSaveId(campaignId, 'manual', normalizedSlot);
      const existing = await this.campaignStore.getSave(targetId);
      const bundle = existing ? await this.campaignStore.getCampaignBundle(campaignId) : null;
      const backup = existing
        ? createBackupRecord(bundle, { reason: 'pre-manual-overwrite', automatic: true, now: this.now })
        : null;
      const payload = IP.cloneData(activeSave.payload);
      payload.campaignStatistics = {
        ...payload.campaignStatistics,
        manualSavesCreated: Number(payload.campaignStatistics?.manualSavesCreated || 0) + 1,
      };
      const save = IP.createSaveRecord({
        campaign,
        payload,
        slotType: 'manual',
        slotNumber: normalizedSlot,
        existingRecord: existing,
        now: this.now,
      });

      const database = await this.database.open();
      const stores = backup
        ? [IP.STORE_NAMES.saves, IP.STORE_NAMES.backups]
        : [IP.STORE_NAMES.saves];
      const transaction = database.transaction(stores, 'readwrite');
      transaction.objectStore(IP.STORE_NAMES.saves).put(save);
      if (backup) {
        transaction.objectStore(IP.STORE_NAMES.backups).put(backup);
      }
      await IP.transactionToPromise(transaction);
      if (backup) {
        await this.pruneAutomaticBackups(campaignId);
      }
      return { save, backup };
    }

    async deleteManualSave(campaignId, slotNumber) {
      const saveId = IP.makeSaveId(campaignId, 'manual', Number(slotNumber));
      const existing = await this.campaignStore.getSave(saveId);
      if (!existing) {
        return { deleted: false, backup: null };
      }
      const bundle = await this.campaignStore.getCampaignBundle(campaignId);
      const backup = createBackupRecord(bundle, {
        reason: 'pre-manual-delete',
        automatic: true,
        now: this.now,
      });
      const activeSaveId = await this.campaignStore.getActiveSaveId(campaignId);
      const fallbackId = IP.makeSaveId(campaignId, 'autosave', 0);
      const database = await this.database.open();
      const transaction = database.transaction(
        [IP.STORE_NAMES.saves, IP.STORE_NAMES.backups, IP.STORE_NAMES.appMeta],
        'readwrite',
      );
      transaction.objectStore(IP.STORE_NAMES.saves).delete(saveId);
      transaction.objectStore(IP.STORE_NAMES.backups).put(backup);
      if (activeSaveId === saveId) {
        transaction.objectStore(IP.STORE_NAMES.appMeta).put({
          key: IP.activeSaveMetaKey(campaignId),
          value: fallbackId,
          updatedAt: this.now(),
        });
      }
      await IP.transactionToPromise(transaction);
      await this.pruneAutomaticBackups(campaignId);
      return { deleted: true, backup };
    }

    async loadSave(campaignId, saveId) {
      const [campaign, save, existingArchive] = await Promise.all([
        this.campaignStore.getCampaign(campaignId),
        this.campaignStore.getSave(saveId),
        this.campaignStore.getArchive(campaignId),
      ]);
      if (!campaign || !save || save.campaignId !== campaignId) {
        throw new RangeError('The selected save does not belong to this campaign.');
      }
      IP.validateCampaignRecord(campaign);
      IP.validateSaveRecord(save);
      const compatibility = IP.inspectCampaignCompatibility(campaign);
      if (!compatibility.playable || !compatibility.packInstalled) {
        throw new RangeError(compatibility.warnings.join(' ') || 'This campaign cannot be loaded by the current installation.');
      }
      const updatedAt = this.now();
      const summary = save.payload.currentScene
        ? IP.buildCampaignSummary(IP.getNarrativeContentForCampaign(campaign), campaign, save.payload)
        : campaign.summary || null;
      const updatedCampaign = IP.sealCampaignRecord({
        ...campaign,
        status: save.payload.status,
        currentScene: save.payload.currentScene,
        summary: summary ? IP.cloneData(summary) : null,
        updatedAt,
      });
      const archive = IP.createArchiveRecord(updatedCampaign, existingArchive, updatedAt);
      const database = await this.database.open();
      const transaction = database.transaction(
        [IP.STORE_NAMES.campaigns, IP.STORE_NAMES.archives, IP.STORE_NAMES.appMeta],
        'readwrite',
      );
      transaction.objectStore(IP.STORE_NAMES.campaigns).put(updatedCampaign);
      transaction.objectStore(IP.STORE_NAMES.archives).put(archive);
      const meta = transaction.objectStore(IP.STORE_NAMES.appMeta);
      meta.put({ key: IP.activeSaveMetaKey(campaignId), value: saveId, updatedAt });
      meta.put({ key: 'lastCampaignId', value: campaignId, updatedAt });
      await IP.transactionToPromise(transaction);
      return { campaign: updatedCampaign, save, compatibility };
    }

    async writeAutosave(campaignId, payload, { createRecovery = true } = {}) {
      const [campaign, existingArchive] = await Promise.all([
        this.campaignStore.getCampaign(campaignId),
        this.campaignStore.getArchive(campaignId),
      ]);
      if (!campaign) {
        throw new RangeError('Campaign not found.');
      }
      IP.validateCampaignRecord(campaign);
      const autosaveId = IP.makeSaveId(campaignId, 'autosave', 0);
      const existing = await this.campaignStore.getSave(autosaveId);
      if (existing) {
        IP.validateSaveRecord(existing);
      }
      const bundle = createRecovery && existing
        ? await this.campaignStore.getCampaignBundle(campaignId)
        : null;
      const backup = bundle
        ? createBackupRecord(bundle, { reason: 'autosave-recovery', automatic: true, now: this.now })
        : null;
      const updatedAt = this.now();
      const currentEnding = payload?.endingEligibility?.currentEnding || campaign.ending || null;
      const summary = payload?.currentScene
        ? IP.buildCampaignSummary(IP.getNarrativeContentForCampaign(campaign), campaign, payload)
        : campaign.summary || null;
      const updatedCampaign = IP.sealCampaignRecord({
        ...campaign,
        status: payload?.status || campaign.status,
        currentScene: payload?.currentScene ?? campaign.currentScene,
        ending: currentEnding ? IP.cloneData(currentEnding) : null,
        summary: summary ? IP.cloneData(summary) : null,
        updatedAt,
      });
      const save = IP.createSaveRecord({
        campaign: updatedCampaign,
        payload,
        slotType: 'autosave',
        slotNumber: 0,
        existingRecord: existing,
        now: () => updatedAt,
      });
      const archive = IP.createArchiveRecord(updatedCampaign, existingArchive, updatedAt);
      const database = await this.database.open();
      const stores = [
        IP.STORE_NAMES.campaigns,
        IP.STORE_NAMES.saves,
        IP.STORE_NAMES.archives,
        IP.STORE_NAMES.appMeta,
        ...(backup ? [IP.STORE_NAMES.backups] : []),
      ];
      const transaction = database.transaction(stores, 'readwrite');
      transaction.objectStore(IP.STORE_NAMES.campaigns).put(updatedCampaign);
      transaction.objectStore(IP.STORE_NAMES.saves).put(save);
      transaction.objectStore(IP.STORE_NAMES.archives).put(archive);
      if (backup) {
        transaction.objectStore(IP.STORE_NAMES.backups).put(backup);
      }
      const meta = transaction.objectStore(IP.STORE_NAMES.appMeta);
      meta.put({ key: IP.activeSaveMetaKey(campaignId), value: save.id, updatedAt });
      meta.put({ key: 'lastCampaignId', value: campaignId, updatedAt });
      await IP.transactionToPromise(transaction);
      if (backup) {
        await this.pruneAutomaticBackups(campaignId);
      }
      return { campaign: updatedCampaign, save, archive, backup };
    }

    async exportCampaign(campaignId) {
      const bundle = await this.campaignStore.getCampaignBundle(campaignId);
      return createExportBundle(bundle, this.now);
    }

    parseImportText(text) {
      return validateExportBundle(IP.parseJsonData(text, {
        maximumBytes: IP.APP_CONFIG.maximumImportBytes,
      }));
    }

    async inspectImport(input) {
      const exportBundle = typeof input === 'string'
        ? this.parseImportText(input)
        : validateExportBundle(input);
      const compatibility = IP.inspectCampaignCompatibility(exportBundle.campaign);
      if (!compatibility.playable) {
        throw new FutureDataError(compatibility.warnings.join(' '), {
          rulesVersion: exportBundle.campaign.rulesVersion,
          saveFormatVersion: exportBundle.campaign.saveFormatVersion,
        });
      }
      const conflict = Boolean(await this.campaignStore.getCampaign(exportBundle.campaign.id));
      return {
        status: 'ready',
        exportBundle,
        conflict,
        compatibility,
        summary: {
          campaignId: exportBundle.campaign.id,
          title: exportBundle.campaign.title,
          protagonist: exportBundle.campaign.protagonist.name,
          genre: exportBundle.campaign.genre,
          difficulty: exportBundle.campaign.difficulty,
          length: exportBundle.campaign.length,
          saveCount: exportBundle.saves.length,
          exportedAt: exportBundle.exportedAt,
          contentPack: `${exportBundle.campaign.contentPack?.title || exportBundle.campaign.contentPack?.id} ${exportBundle.campaign.contentPack?.version || ''}`.trim(),
        },
      };
    }

    async inspectImportSafely(text, metadata = {}) {
      let parsed = null;
      try {
        parsed = IP.parseJsonData(text, { maximumBytes: IP.APP_CONFIG.maximumImportBytes });
        return await this.inspectImport(parsed);
      } catch (error) {
        if (error?.code !== 'FUTURE_DATA') {
          throw error;
        }
        const quarantine = createQuarantinedImport(text, error, {
          filename: metadata.filename,
          parsed,
          now: this.now,
        });
        validateQuarantinedImport(quarantine);
        await this.database.put(IP.STORE_NAMES.backups, quarantine);
        return {
          status: 'quarantined',
          quarantine,
          error: {
            code: error.code,
            message: error.message,
          },
        };
      }
    }

    async importCampaign(input, { overwrite = false } = {}) {
      const preview = await this.inspectImport(input);
      const exportBundle = preview.exportBundle;
      const campaignId = exportBundle.campaign.id;
      const existingCampaign = await this.campaignStore.getCampaign(campaignId);
      if (existingCampaign && !overwrite) {
        throw new SaveConflictError('A campaign with this identity already exists on this device.', campaignId);
      }

      let incoming = {
        campaign: IP.cloneData(exportBundle.campaign),
        saves: IP.cloneData(exportBundle.saves),
        archive: IP.cloneData(exportBundle.archive),
        activeSaveId: exportBundle.activeSaveId,
      };
      const hasLegacySave = incoming.saves.some(
        (save) => Number(save.saveFormatVersion) < IP.SAVE_FORMAT_VERSION,
      );
      if (hasLegacySave || !incoming.campaign.integrity || !incoming.archive.integrity) {
        incoming = IP.migrateCampaignBundle(incoming, this.now);
      }
      incoming.saves.forEach((save) => IP.validateSaveRecord(save));
      IP.validateCampaignRecord(incoming.campaign);
      IP.validateArchiveRecord(incoming.archive);

      const existingBundle = existingCampaign
        ? await this.campaignStore.getCampaignBundle(campaignId)
        : null;
      const backup = existingBundle
        ? createBackupRecord(existingBundle, {
          reason: 'pre-import-overwrite',
          automatic: true,
          now: this.now,
        })
        : null;
      await this.replaceCampaignData(incoming, {
        backup,
        existingSaveIds: existingBundle?.saves.map((save) => save.id) || [],
      });
      if (backup) {
        await this.pruneAutomaticBackups(campaignId);
      }
      return {
        campaign: incoming.campaign,
        conflictReplaced: Boolean(existingCampaign),
        backup,
        compatibility: preview.compatibility,
      };
    }

    async restoreBackup(backupId) {
      const backup = await this.campaignStore.getBackup(backupId);
      validateBackupRecord(backup);
      const campaignId = backup.campaignId;
      let restored = IP.cloneData(backup.snapshot);
      const hasLegacySave = restored.saves.some(
        (save) => Number(save.saveFormatVersion) < IP.SAVE_FORMAT_VERSION,
      );
      if (hasLegacySave || !restored.campaign.integrity || !restored.archive.integrity) {
        restored = IP.migrateCampaignBundle(restored, this.now);
      }
      restored.saves.forEach((save) => IP.validateSaveRecord(save));
      IP.validateCampaignRecord(restored.campaign);
      IP.validateArchiveRecord(restored.archive);
      const compatibility = IP.inspectCampaignCompatibility(restored.campaign);
      if (!compatibility.playable) {
        throw new FutureDataError(compatibility.warnings.join(' '));
      }

      let currentBundle = null;
      try {
        currentBundle = await this.campaignStore.getCampaignBundle(campaignId);
      } catch (_error) {
        currentBundle = null;
      }
      const safetyBackup = currentBundle
        ? createBackupRecord(currentBundle, { reason: 'pre-restore', automatic: true, now: this.now })
        : null;
      await this.replaceCampaignData(restored, {
        backup: safetyBackup,
        existingSaveIds: currentBundle?.saves.map((save) => save.id) || [],
      });
      await this.pruneAutomaticBackups(campaignId);
      return { campaign: restored.campaign, restoredFrom: backup.id, safetyBackup };
    }

    async abandonCampaign(campaignId) {
      const bundle = await this.campaignStore.getCampaignBundle(campaignId);
      if (isTerminalStatus(bundle.campaign.status)) {
        throw new RangeError('This campaign is already archived as a terminal outcome.');
      }
      const backup = createBackupRecord(bundle, {
        reason: 'pre-abandonment',
        automatic: true,
        now: this.now,
      });
      const healthySave = bundle.saves.find((save) => IP.inspectSaveRecord(save).state === 'healthy');
      if (!healthySave) {
        throw new RangeError('No healthy save is available to record abandonment. Restore a recovery point first.');
      }
      const updatedAt = this.now();
      const payload = IP.cloneData(healthySave.payload);
      payload.status = 'abandoned';
      payload.eventHistory = [
        ...(payload.eventHistory || []),
        {
          id: `event.campaign.abandoned.${Date.parse(updatedAt) || 0}`,
          type: 'system',
          occurredAt: updatedAt,
          summary: 'The player deliberately archived the campaign without an ending.',
        },
      ];
      const campaign = IP.sealCampaignRecord({
        ...bundle.campaign,
        status: 'abandoned',
        currentScene: payload.currentScene,
        updatedAt,
      });
      const autosaveId = IP.makeSaveId(campaignId, 'autosave', 0);
      const existingAutosave = bundle.saves.find((save) => save.id === autosaveId) || null;
      const save = IP.createSaveRecord({
        campaign,
        payload,
        slotType: 'autosave',
        slotNumber: 0,
        existingRecord: existingAutosave,
        now: () => updatedAt,
      });
      const archive = IP.createArchiveRecord(campaign, bundle.archive, updatedAt);

      const database = await this.database.open();
      const transaction = database.transaction(
        [IP.STORE_NAMES.campaigns, IP.STORE_NAMES.saves, IP.STORE_NAMES.archives, IP.STORE_NAMES.backups, IP.STORE_NAMES.appMeta],
        'readwrite',
      );
      transaction.objectStore(IP.STORE_NAMES.campaigns).put(campaign);
      transaction.objectStore(IP.STORE_NAMES.saves).put(save);
      transaction.objectStore(IP.STORE_NAMES.archives).put(archive);
      transaction.objectStore(IP.STORE_NAMES.backups).put(backup);
      const meta = transaction.objectStore(IP.STORE_NAMES.appMeta);
      meta.put({ key: IP.activeSaveMetaKey(campaignId), value: save.id, updatedAt });
      meta.put({ key: 'lastCampaignId', value: null, updatedAt });
      await IP.transactionToPromise(transaction);
      await this.pruneAutomaticBackups(campaignId);
      return { campaign, save, archive, backup };
    }

    async scanCampaign(campaignId) {
      const bundle = await this.campaignStore.getCampaignBundle(campaignId);
      let campaignStatus;
      try {
        IP.validateCampaignRecord(bundle.campaign);
        campaignStatus = { state: 'healthy', message: 'Campaign identity checksum verified.' };
      } catch (error) {
        campaignStatus = { state: 'corrupt', message: String(error?.message || error) };
      }
      let archiveStatus;
      try {
        IP.validateArchiveRecord(bundle.archive);
        archiveStatus = { state: 'healthy', message: 'Archive checksum verified.' };
      } catch (error) {
        archiveStatus = { state: 'corrupt', message: String(error?.message || error) };
      }
      const saves = bundle.saves.map((save) => ({
        id: save.id,
        label: save.label || save.slotType,
        ...IP.inspectSaveRecord(save),
      }));
      const backups = await this.campaignStore.listBackups(campaignId);
      const backupInspections = backups.map((backup) => {
        try {
          validateBackupRecord(backup);
          return { id: backup.id, state: 'healthy', message: 'Backup checksum verified.' };
        } catch (error) {
          return { id: backup.id, state: 'corrupt', message: String(error?.message || error) };
        }
      });
      const unhealthy = [campaignStatus, archiveStatus, ...saves, ...backupInspections]
        .filter((item) => item.state !== 'healthy');
      return {
        campaignId,
        checkedAt: this.now(),
        campaign: campaignStatus,
        archive: archiveStatus,
        saves,
        backups: backupInspections,
        healthy: unhealthy.length === 0,
        recoverableBackups: backupInspections.filter((item) => item.state === 'healthy').length,
      };
    }

    async scanAllCampaigns() {
      const campaigns = await this.campaignStore.listCampaigns();
      const reports = [];
      for (const campaign of campaigns) {
        try {
          reports.push(await this.scanCampaign(campaign.id));
        } catch (error) {
          reports.push({
            campaignId: campaign.id,
            checkedAt: this.now(),
            healthy: false,
            fatal: String(error?.message || error),
            recoverableBackups: 0,
          });
        }
      }
      return {
        checkedAt: this.now(),
        campaigns: reports,
        total: reports.length,
        healthy: reports.filter((report) => report.healthy).length,
        unhealthy: reports.filter((report) => !report.healthy).length,
      };
    }

    async deleteBackup(backupId) {
      const record = await this.campaignStore.getBackup(backupId);
      if (!record) {
        return false;
      }
      if (record.recordType === 'quarantined-import') {
        validateQuarantinedImport(record);
      } else {
        validateBackupRecord(record);
      }
      return this.campaignStore.deleteBackup(backupId);
    }

    async pruneAutomaticBackups(campaignId) {
      const backups = await this.campaignStore.listBackups(campaignId);
      const autosaveRecovery = backups.filter(
        (backup) => backup.automatic && backup.reason === 'autosave-recovery',
      );
      const otherAutomatic = backups.filter(
        (backup) => backup.automatic && backup.reason !== 'autosave-recovery',
      );
      const remove = [
        ...autosaveRecovery.slice(MAX_AUTOSAVE_RECOVERY_BACKUPS),
        ...otherAutomatic.slice(MAX_AUTOMATIC_BACKUPS),
      ];
      for (const backup of remove) {
        await this.database.delete(IP.STORE_NAMES.backups, backup.id);
      }
      return remove.length;
    }
  }

  return {
    BACKUP_REASON_LABELS,
    MAX_AUTOMATIC_BACKUPS,
    MAX_AUTOSAVE_RECOVERY_BACKUPS,
    QUARANTINE_INTEGRITY_SCOPE,
    QUARANTINE_SCHEMA_VERSION,
    FutureDataError,
    SaveConflictError,
    SaveService,
    backupReasonLabel,
    createBackupRecord,
    createExportBundle,
    createQuarantinedImport,
    validateBackupRecord,
    validateExportBundle,
    validateQuarantinedImport,
  };
});

/* ===== src/js/campaign/narrative-service.js ===== */
(function (root, factory) {
  const namespace = (root.InfinitePaths = root.InfinitePaths || {});
  const exported = factory(namespace);
  Object.assign(namespace, exported);
  if (typeof module !== 'undefined' && module.exports) module.exports = exported;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (IP) {
  'use strict';

  class NarrativeConflictError extends Error {
    constructor(message) {
      super(message);
      this.name = 'NarrativeConflictError';
    }
  }

  class NarrativeService {
    constructor(campaignStore, saveService, now = () => new Date().toISOString()) {
      this.campaignStore = campaignStore;
      this.saveService = saveService;
      this.now = now;
      this.pendingCampaigns = new Set();
    }

    async loadSession(campaignId) {
      const campaign = await this.campaignStore.getCampaign(campaignId);
      if (!campaign) throw new RangeError('Campaign not found.');
      IP.validateCampaignRecord(campaign);
      const compatibility = IP.inspectCampaignCompatibility(campaign);
      if (!compatibility.playable || !compatibility.packInstalled) {
        throw new RangeError(
          compatibility.warnings.join(' ') || 'This campaign cannot be played by the current installation.',
        );
      }
      const activeSave = await this.campaignStore.getActiveSave(campaign.id);
      if (!activeSave) throw new RangeError('Campaign has no active save.');
      IP.validateSaveRecord(activeSave);
      const content = IP.getNarrativeContentForCampaign(campaign);
      const payload = activeSave.payload.currentScene
        ? IP.validateNarrativePayload(content, campaign, activeSave.payload)
        : IP.ensureNarrativeState(campaign, activeSave.payload, this.now);
      const scene = payload.currentScene ? IP.renderScene(content, campaign, payload) : null;
      return {
        campaign,
        activeSave,
        payload,
        content,
        scene,
        compatibility,
        canStart: !payload.currentScene && !['completed', 'failed', 'abandoned'].includes(payload.status),
      };
    }

    async withCampaignLock(campaignId, operation) {
      if (this.pendingCampaigns.has(campaignId)) {
        throw new NarrativeConflictError('A choice is already being committed for this campaign.');
      }
      this.pendingCampaigns.add(campaignId);
      try {
        return await operation();
      } finally {
        this.pendingCampaigns.delete(campaignId);
      }
    }

    async startCampaign(campaignId) {
      return this.withCampaignLock(campaignId, async () => {
        const session = await this.loadSession(campaignId);
        if (session.scene) return session;
        if (!session.canStart) {
          throw new RangeError('This campaign cannot begin from its current archive state.');
        }
        const payload = IP.startNarrative(
          session.content,
          session.campaign,
          session.activeSave.payload,
          this.now,
        );
        const committed = await this.saveService.writeAutosave(campaignId, payload, {
          createRecovery: true,
        });
        const scene = IP.renderScene(session.content, committed.campaign, committed.save.payload);
        return {
          campaign: committed.campaign,
          activeSave: committed.save,
          payload: committed.save.payload,
          content: session.content,
          scene,
          compatibility: session.compatibility,
          canStart: false,
          backup: committed.backup,
        };
      });
    }

    async resolveChoice(campaignId, choiceId, expected = {}) {
      return this.withCampaignLock(campaignId, async () => {
        const session = await this.loadSession(campaignId);
        if (!session.scene) throw new RangeError('The campaign has not begun.');
        if (expected.saveId && session.activeSave.id !== expected.saveId) {
          throw new NarrativeConflictError('The active save changed before this choice could be committed.');
        }
        if (
          expected.revision !== undefined
          && Number(session.activeSave.revision) !== Number(expected.revision)
        ) {
          throw new NarrativeConflictError('The scene changed in another operation. Reload before choosing again.');
        }
        if (session.scene.checkpoint || session.scene.terminal) {
          throw new RangeError('The current scene does not accept choices.');
        }
        const payload = IP.resolveChoice(
          session.content,
          session.campaign,
          session.activeSave.payload,
          choiceId,
          this.now,
        );
        const committed = await this.saveService.writeAutosave(campaignId, payload, {
          createRecovery: true,
        });
        const scene = IP.renderScene(session.content, committed.campaign, committed.save.payload);
        return {
          campaign: committed.campaign,
          activeSave: committed.save,
          payload: committed.save.payload,
          content: session.content,
          scene,
          compatibility: session.compatibility,
          canStart: false,
          backup: committed.backup,
        };
      });
    }

    async inspectCampaign(campaignId) {
      const session = await this.loadSession(campaignId);
      return {
        campaignId: session.campaign.id,
        title: session.campaign.title,
        status: session.campaign.status,
        saveId: session.activeSave.id,
        saveRevision: session.activeSave.revision,
        canStart: session.canStart,
        narrative: session.scene
          ? IP.inspectNarrativeState(session.content, session.campaign, session.activeSave.payload)
          : null,
      };
    }
  }

  return { NarrativeConflictError, NarrativeService };
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
    if (['ready', 'installed', 'persistent'].includes(state)) return 'good';
    if (['error', 'unavailable'].includes(state)) return 'bad';
    if (state === 'warning') return 'warn';
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

  function campaignDestination(campaign) {
    const route = campaign.currentScene ? 'play' : 'campaign';
    return `#/${route}?id=${encodeURIComponent(campaign.id)}`;
  }

  function activeCampaignCard(campaign, isLast) {
    return IP.h(
      'a',
      {
        className: 'campaign-resume-card',
        attrs: { href: campaignDestination(campaign) },
      },
      IP.h(
        'div',
        {},
        IP.h('p', { className: 'eyebrow', text: isLast ? 'MOST RECENT PATH' : 'ACTIVE PATH' }),
        IP.h('h3', { text: campaign.title }),
        IP.h('p', {
          text: `${campaign.protagonist.name} · ${IP.titleCase(campaign.difficulty)} · ${IP.titleCase(campaign.length)}`,
        }),
      ),
      IP.h('span', { className: 'campaign-resume-card__arrow', text: '›', attrs: { 'aria-hidden': 'true' } }),
    );
  }

  function renderHomeView(container, context) {
    IP.clearNode(container);
    container.className = 'view view--home';
    const hasCampaign = Boolean(context.lastCampaign);
    const maintenanceWarnings = Number(context.saveMaintenanceReport?.warnings?.length || 0)
      + Number(context.saveMaintenanceReport?.corruptSaves || 0)
      + Number(context.saveMaintenanceReport?.corruptCampaigns || 0)
      + Number(context.saveMaintenanceReport?.unsupportedSaves || 0);

    const hero = IP.h(
      'section',
      { className: 'hero-card' },
      IP.h('div', { className: 'hero-card__path-mark', attrs: { 'aria-hidden': 'true' } }),
      IP.h('p', { className: 'eyebrow', text: `TWO DISTINCT PLAYABLE GENRES · v${context.appConfig.version}` }),
      IP.h('h1', {
        id: 'page-title',
        text: hasCampaign ? 'Your path is ready to continue.' : 'Create a world whose truth will hold.',
      }),
      IP.h('p', {
        className: 'hero-card__lead',
        text: hasCampaign
          ? `${context.lastCampaign.title} is ready. Horror and Mystery now share one trustworthy engine while preserving different rules, pressures, routes, and failure states.`
          : 'Choose Horror for supernatural survival under fixed threat rules, or Mystery for a locked-culprit investigation where evidence, witnesses, time, and accusations carry permanent consequences.',
      }),
      IP.h(
        'div',
        { className: 'hero-actions' },
        hasCampaign
          ? IP.h('a', {
            className: 'button button--primary button--wide',
            text: context.lastCampaign.currentScene ? 'Continue story' : 'Open campaign',
            attrs: { href: campaignDestination(context.lastCampaign) },
          })
          : null,
        IP.h('a', {
          className: hasCampaign ? 'button button--secondary button--wide' : 'button button--primary button--wide',
          text: 'Create new campaign',
          attrs: { href: '#/new' },
        }),
        IP.h('a', {
          className: 'button button--secondary button--wide',
          text: 'Import or recover campaign',
          attrs: { href: '#/saves' },
        }),
        IP.h('a', {
          className: 'button button--ghost button--wide',
          text: 'Open campaign archive',
          attrs: { href: '#/archive' },
        }),
      ),
    );

    const settingsStatus = context.settingsStore.status();
    const saveSystemState = context.databaseStatus.state === 'ready' && maintenanceWarnings === 0
      ? 'ready'
      : context.databaseStatus.state === 'error'
        ? 'error'
        : 'warning';
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
        'Save system',
        saveSystemState === 'ready' ? 'Checksums active' : saveSystemState === 'warning' ? 'Review advised' : 'Unavailable',
        saveSystemState,
      ),
      statusTile(
        'Active paths',
        String(context.activeCampaigns.length),
        context.activeCampaigns.length ? 'ready' : 'neutral',
      ),
      statusTile(
        'Preferences',
        settingsStatus.persistent ? 'Saved locally' : 'Session only',
        settingsStatus.persistent ? 'persistent' : 'unavailable',
      ),
    );

    const activeSection = context.activeCampaigns.length
      ? IP.h(
        'section',
        { className: 'card' },
        IP.h('div', { className: 'section-heading-row' },
          IP.h('div', {},
            IP.h('p', { className: 'eyebrow', text: 'ACTIVE CAMPAIGNS' }),
            IP.h('h2', { text: context.activeCampaigns.length === 1 ? 'One path remains open.' : `${context.activeCampaigns.length} paths remain open.` }),
          ),
          IP.h('a', { className: 'text-link', text: 'Manage saves', attrs: { href: '#/saves' } }),
        ),
        IP.h(
          'div',
          { className: 'campaign-resume-list' },
          context.activeCampaigns.slice(0, 6).map((campaign) => activeCampaignCard(
            campaign,
            campaign.id === context.lastCampaign?.id,
          )),
        ),
      )
      : null;

    const principle = IP.h(
      'section',
      { className: 'card card--tinted' },
      IP.h('p', { className: 'eyebrow', text: 'PLAYER TRUST' }),
      IP.h('h2', { text: 'The world keeps its truth, and the save keeps your consequences.' }),
      IP.h('p', {
        text: 'Horror tracks threat pressure, evacuation readiness, injuries, and containment. Mystery tracks case strength, evidence integrity, public confidence, time, suspects, and accusation risk. Both preserve objectives, clues, relationships, companion outcomes, scene history, and deterministic state before the next scene appears.',
      }),
    );

    const privacyCard = IP.h(
      'section',
      { className: 'card card--quiet' },
      IP.h('h2', { text: 'Your paths stay on your device.' }),
      IP.h('p', {
        text: 'Campaigns, saves, backups, archive records, and preferences remain inside local browser storage unless you deliberately export a JSON file. Infinite Paths sends no analytics and requires no account.',
      }),
    );

    container.append(hero, statusGrid, activeSection, principle, privacyCard);
  }

  return { renderHomeView };
});

/* ===== src/js/views/create-campaign-view.js ===== */
(function (root, factory) {
  const namespace = (root.InfinitePaths = root.InfinitePaths || {});
  const exported = factory(namespace);
  Object.assign(namespace, exported);
  if (typeof module !== 'undefined' && module.exports) module.exports = exported;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (IP) {
  'use strict';

  const GENRE_COPY = Object.freeze({
    horror: Object.freeze({
      label: 'Horror',
      description: 'Locked supernatural rules, threat pressure, evacuation readiness, injuries, witnesses, and authored endings.',
      firstWarningLabel: 'Allow graphic violence',
      secondWarningLabel: 'Allow intensified psychological horror',
      warningNote: 'Horror campaigns still contain supernatural danger and dread when intensified material is reduced.',
    }),
    mystery: Object.freeze({
      label: 'Mystery',
      description: 'A permanently fixed culprit, admissible evidence, witness credibility, accusation risk, and authored case endings.',
      firstWarningLabel: 'Allow graphic crime-scene detail',
      secondWarningLabel: 'Allow intensified manipulation themes',
      warningNote: 'Mystery campaigns still involve murder, deception, jeopardy, and the possibility of accusing an innocent person.',
    }),
  });

  function option(value, text, selected = false) {
    return IP.h('option', { text, attrs: { value, selected } });
  }

  function field(label, control, hintNode = null) {
    return IP.h(
      'div',
      { className: 'form-field' },
      IP.h('label', { className: 'field-label', text: label, attrs: { for: control.id } }),
      control,
      hintNode,
    );
  }

  function replaceOptions(select, records, labelFor = (record) => record.name) {
    IP.clearNode(select);
    records.forEach((record, index) => select.append(option(record.id, labelFor(record), index === 0)));
  }

  function packValue(pack) {
    return `${pack.id}@${pack.version}`;
  }

  async function renderCreateCampaignView(container, context) {
    IP.clearNode(container);
    container.className = 'view view--campaign-create view--genre-horror';
    const packs = await context.contentPackService.listCreationPacks();
    if (!packs.length) {
      container.append(
        IP.h('section', { className: 'card error-card' },
          IP.h('p', { className: 'eyebrow', text: 'NO PLAYABLE PACKS' }),
          IP.h('h1', { id: 'page-title', text: 'Campaign creation is unavailable.' }),
          IP.h('p', { text: 'No enabled content pack passed compatibility and dependency validation.' }),
          IP.h('a', { className: 'button button--primary', text: 'Open Content Packs', attrs: { href: '#/packs' } }),
        ),
      );
      return;
    }

    const name = IP.h('input', {
      id: 'campaign-name', className: 'text-input',
      attrs: { maxlength: 40, autocomplete: 'name', required: true, placeholder: 'Protagonist name' },
    });
    const packSelect = IP.h('select', { id: 'campaign-content-pack', className: 'select-input' });
    for (const [index, pack] of packs.entries()) {
      const suffix = pack.builtIn ? 'Built in' : 'Installed locally';
      packSelect.append(option(packValue(pack), `${pack.title} · v${pack.version} · ${suffix}`, index === 0));
    }
    const genre = IP.h('input', { id: 'campaign-genre', className: 'text-input', attrs: { readonly: true } });
    const difficulty = IP.h(
      'select', { id: 'campaign-difficulty', className: 'select-input' },
      option('story', 'Story'), option('standard', 'Standard', true), option('hard', 'Hard'), option('brutal', 'Brutal'),
    );
    const length = IP.h(
      'select', { id: 'campaign-length', className: 'select-input' },
      option('short', 'Short', true), option('standard', 'Standard'),
    );
    const background = IP.h('select', { id: 'campaign-background', className: 'select-input' });
    const seed = IP.h('input', {
      id: 'campaign-seed', className: 'text-input',
      attrs: { maxlength: 120, autocomplete: 'off', spellcheck: 'false', placeholder: 'Leave blank for a fresh seed' },
    });
    const packHint = IP.h('p', { className: 'field-hint' });
    const genreHint = IP.h('p', { className: 'field-hint' });
    const backgroundHint = IP.h('p', { className: 'field-hint' });
    const warningOneText = IP.h('span');
    const warningTwoText = IP.h('span');
    const warningNote = IP.h('p', { className: 'field-hint' });
    const warningOne = IP.h('input', { id: 'content-warning-one', attrs: { type: 'checkbox', checked: true } });
    const warningTwo = IP.h('input', { id: 'content-warning-two', attrs: { type: 'checkbox', checked: true } });
    const error = IP.h('div', { className: 'form-error', attrs: { role: 'alert', 'aria-live': 'assertive' } });
    const submit = IP.h('button', {
      className: 'button button--primary button--wide', text: 'Generate locked campaign', attrs: { type: 'submit' },
    });

    function selectedPack() {
      return packs.find((pack) => packValue(pack) === packSelect.value) || packs[0];
    }

    function applyPack() {
      const pack = selectedPack();
      const selectedGenre = pack.genres[0];
      const copy = GENRE_COPY[selectedGenre] || GENRE_COPY.horror;
      const generator = pack.runtime ? IP.getCampaignGeneratorForPack(pack.id, pack.version) : null;
      const backgrounds = generator?.backgrounds || Object.values(IP.BACKGROUNDS_BY_GENRE[selectedGenre] || {});
      replaceOptions(background, backgrounds);
      genre.value = copy.label;
      genreHint.textContent = copy.description;
      packHint.textContent = `${pack.description} Campaigns permanently pin ${pack.id}@${pack.version}.`;
      backgroundHint.textContent = backgrounds[0]?.description || 'Background skills can change available choices and resources.';
      warningOneText.textContent = copy.firstWarningLabel;
      warningTwoText.textContent = copy.secondWarningLabel;
      warningNote.textContent = copy.warningNote;
      container.className = `view view--campaign-create view--genre-${selectedGenre}`;
      seed.placeholder = selectedGenre === 'mystery' ? 'Leave blank for a fresh case seed' : 'Leave blank for a fresh world seed';
    }

    packSelect.addEventListener('change', applyPack);
    background.addEventListener('change', () => {
      const pack = selectedPack();
      const generator = pack.runtime ? IP.getCampaignGeneratorForPack(pack.id, pack.version) : null;
      const records = generator?.backgrounds || Object.values(IP.BACKGROUNDS_BY_GENRE[pack.genres[0]] || {});
      backgroundHint.textContent = records.find((item) => item.id === background.value)?.description
        || 'Background skills can change available choices and resources.';
    });
    applyPack();

    const form = IP.h(
      'form',
      {
        className: 'card campaign-form',
        on: {
          submit: async (event) => {
            event.preventDefault();
            error.textContent = '';
            submit.disabled = true;
            const pack = selectedPack();
            const selectedGenre = pack.genres[0];
            submit.textContent = selectedGenre === 'mystery' ? 'Locking the case…' : 'Establishing world…';
            try {
              const bundle = IP.generateCampaign({
                genre: selectedGenre,
                contentPackId: pack.id,
                contentPackVersion: pack.version,
                name: name.value,
                difficulty: difficulty.value,
                length: length.value,
                background: background.value,
                seed: seed.value,
                ...(selectedGenre === 'mystery'
                  ? { graphicCrimeScene: warningOne.checked, manipulationThemes: warningTwo.checked }
                  : { graphicViolence: warningOne.checked, psychologicalHorror: warningTwo.checked }),
              });
              await context.campaignStore.createBundle(bundle);
              await context.refreshCampaignData({ rerender: false });
              context.toast.show(`${pack.title} campaign truth locked with an exact pack-version pin.`, { tone: 'success' });
              globalThis.location.hash = `#/campaign?id=${encodeURIComponent(bundle.campaign.id)}`;
            } catch (cause) {
              error.textContent = String(cause?.message || cause);
              submit.disabled = false;
              submit.textContent = 'Generate locked campaign';
            }
          },
        },
      },
      field('Content pack', packSelect, packHint),
      field('Genre', genre, genreHint),
      field('Protagonist name', name),
      field('Background', background, backgroundHint),
      field('Difficulty', difficulty, IP.h('p', { className: 'field-hint', text: 'Brutal mode will never add plot armor or procedural mercy.' })),
      field('Campaign length', length, IP.h('p', { className: 'field-hint', text: 'Short and Standard routes depend on what the selected pack actually implements.' })),
      field('World or case seed', seed, IP.h('p', { className: 'field-hint', text: 'The seed, exact pack version, and rules version permanently define campaign truth.' })),
      IP.h('div', { className: 'setting-block' },
        IP.h('label', { className: 'check-row' }, warningOne, warningOneText),
        IP.h('label', { className: 'check-row' }, warningTwo, warningTwoText),
        warningNote,
      ),
      error,
      submit,
      IP.h('a', { className: 'text-link', text: 'Manage installed content packs', attrs: { href: '#/packs' } }),
    );

    container.append(
      IP.h('header', { className: 'view-header' },
        IP.h('p', { className: 'eyebrow', text: 'CAMPAIGN CREATION' }),
        IP.h('h1', { id: 'page-title', text: 'Choose the library that will establish this world.' }),
        IP.h('p', { text: 'Built-in and locally installed packs use the same locked-truth, deterministic-save, and integrity rules. Disabling a pack removes it from new creation without erasing campaigns already pinned to it.' }),
      ),
      form,
    );
  }

  return { GENRE_COPY, renderCreateCampaignView };
});

/* ===== src/js/views/campaign-view.js ===== */
(function (root, factory) {
  const namespace = (root.InfinitePaths = root.InfinitePaths || {});
  const exported = factory(namespace);
  Object.assign(namespace, exported);
  if (typeof module !== 'undefined' && module.exports) module.exports = exported;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (IP) {
  'use strict';

  function fact(label, value) {
    return IP.h(
      'div',
      { className: 'world-fact' },
      IP.h('span', { text: label }),
      IP.h('strong', { text: String(value ?? 'Unknown') }),
    );
  }

  function list(title, items) {
    return IP.h(
      'section',
      { className: 'card' },
      IP.h('h2', { text: title }),
      IP.h('ul', { className: 'detail-list' }, items.map((item) => IP.h('li', { text: item }))),
    );
  }

  function integrityBanner(inspection, activeSave) {
    const healthy = inspection?.state === 'healthy';
    return IP.h(
      'div',
      { className: `integrity-banner integrity-banner--${healthy ? 'good' : 'bad'}` },
      IP.h('strong', { text: healthy ? 'Active save verified' : 'Active save needs recovery' }),
      IP.h('span', {
        text: healthy
          ? `${activeSave.label} · revision ${activeSave.revision} · ${IP.formatDateTime(activeSave.updatedAt)}`
          : inspection?.message || 'The selected save could not be validated.',
      }),
    );
  }

  function mysteryTruthCard(world) {
    const caseFile = world.case;
    return IP.h(
      'section',
      { className: 'card card--tinted' },
      IP.h('p', { className: 'eyebrow', text: 'LOCKED CASE CONTRACT' }),
      IP.h('h2', { text: caseFile.title }),
      IP.h('p', {
        text: 'The culprit, motive, method, means, opportunity, timeline, physical evidence, and false leads were permanently established when this campaign was created.',
      }),
      IP.h('p', {
        className: 'rule-box',
        text: 'The investigation may uncover, preserve, contaminate, misread, or fail to prove those facts. It cannot cause the true solution to change.',
      }),
      IP.h('h3', { text: 'Public facts' }),
      IP.h('ul', { className: 'detail-list' }, caseFile.publicFacts.map((item) => IP.h('li', { text: item }))),
    );
  }

  function horrorTruthCard(world) {
    return IP.h(
      'section',
      { className: 'card card--tinted' },
      IP.h('p', { className: 'eyebrow', text: 'THREAT RULE' }),
      IP.h('h2', { text: world.antagonist.name }),
      IP.h('p', { text: world.antagonist.capabilities[0] }),
      IP.h('p', { className: 'rule-box', text: `Known limitation: ${world.antagonist.limitations[0]}` }),
    );
  }

  function genreFacts(campaign) {
    const world = campaign.world;
    if (campaign.genre === 'mystery') {
      const profile = IP.MYSTERY_DIFFICULTY_PROFILES[campaign.difficulty];
      return [
        fact('Seed', campaign.seedFingerprint),
        fact('Venue', world.case.venue.name),
        fact('Victim', `${world.case.victim.name} · ${world.case.victim.role}`),
        fact('Suspect pool', `${Object.keys(world.case.suspects).length} permanently locked suspects`),
        fact('Deadline', `${profile.startingTimeRemaining} investigative segments`),
        fact('Rules', campaign.rulesVersion),
        fact('Content pack', `${campaign.contentPack.title} ${campaign.contentPack.version}`),
        fact('Status', IP.titleCase(campaign.status)),
        fact('Case pressure', profile.pressureLabel),
      ];
    }
    return [
      fact('Seed', campaign.seedFingerprint),
      fact('Settlement', world.settlement),
      fact('Threat', world.antagonist.name),
      fact('Rules', campaign.rulesVersion),
      fact('Content pack', `${campaign.contentPack.title} ${campaign.contentPack.version}`),
      fact('Status', IP.titleCase(campaign.status)),
      fact('Difficulty pressure', IP.DIFFICULTY_PROFILES[campaign.difficulty]?.pressureLabel || IP.titleCase(campaign.difficulty)),
    ];
  }

  function readinessCard(campaign, activeSave, abandoned, terminal) {
    const isMystery = campaign.genre === 'mystery';
    const heading = abandoned
      ? 'This path was deliberately archived.'
      : terminal
        ? 'This path has an authored ending.'
        : activeSave?.payload?.currentScene
          ? 'The campaign remembers where you stopped.'
          : isMystery
            ? 'The complete case is ready.'
            : 'The full campaign is ready.';
    const body = abandoned
      ? 'The final playable state remains preserved in saves and recovery points, but abandonment does not fabricate an ending scene.'
      : terminal
        ? 'Open the story to reread the ending, its cause, and the consequences recorded in the campaign archive.'
        : isMystery
          ? 'The case includes distinct investigative openings, four suspects, multiple evidence classes, alibi testing, a seeded Standard complication, witness jeopardy, partner trust, accusation review, nine authored endings, and the possibility of reaching the correct conclusion without building a case strong enough to hold.'
          : 'The campaign contains branching arrivals, three distinct middle-game plans, seed-locked Standard complications, autonomous companion behavior, persistent objectives and injuries, eleven authored endings, recoverable danger, and failure that the game will not quietly reverse.';
    return IP.h(
      'section',
      { className: 'card card--quiet' },
      IP.h('p', { className: 'eyebrow', text: isMystery ? 'COMPLETE MYSTERY ROUTE' : 'COMPLETE HORROR ROUTE' }),
      IP.h('h2', { text: heading }),
      IP.h('p', { text: body }),
    );
  }

  async function renderCampaignView(container, context) {
    IP.clearNode(container);
    const params = new URLSearchParams(globalThis.location.hash.split('?')[1] || '');
    const requestedId = params.get('id');
    const campaign = await context.campaignStore.getCampaign(requestedId)
      || await context.campaignStore.getLastCampaign();
    if (!campaign) {
      globalThis.location.hash = '#/home';
      return;
    }
    container.className = `view view--genre-${campaign.genre}`;

    const [activeSave, compatibility] = await Promise.all([
      context.campaignStore.getActiveSave(campaign.id),
      Promise.resolve(IP.inspectCampaignCompatibility(campaign)),
    ]);
    const saveInspection = activeSave
      ? IP.inspectSaveRecord(activeSave)
      : { state: 'corrupt', message: 'No active save record exists.' };
    const world = campaign.world;
    const terminal = ['completed', 'failed'].includes(campaign.status);
    const abandoned = campaign.status === 'abandoned';
    const playLabel = terminal
      ? 'Read ending'
      : activeSave?.payload?.currentScene
        ? campaign.genre === 'mystery' ? 'Continue investigation' : 'Continue story'
        : campaign.genre === 'mystery' ? 'Open the case' : 'Begin the campaign';

    const compatibilityNotice = compatibility.warnings.length
      ? IP.h(
        'section',
        { className: 'card warning-card' },
        IP.h('p', { className: 'eyebrow', text: 'COMPATIBILITY NOTICE' }),
        IP.h('h2', { text: compatibility.playable ? 'The campaign record remains readable.' : 'This campaign cannot be resumed safely.' }),
        IP.h('ul', { className: 'detail-list' }, compatibility.warnings.map((warning) => IP.h('li', { text: warning }))),
      )
      : null;

    container.append(
      IP.h(
        'section',
        { className: 'hero-card campaign-hero' },
        IP.h('p', { className: 'eyebrow', text: activeSave?.payload?.currentScene ? 'ESTABLISHED CAMPAIGN' : 'LOCKED CAMPAIGN' }),
        IP.h('h1', { id: 'page-title', text: campaign.title }),
        IP.h('p', {
          className: 'hero-card__lead',
          text: campaign.genre === 'mystery'
            ? `${campaign.protagonist.name}, a ${campaign.protagonist.background.name.toLowerCase()}, has entered a closed suspect investigation at ${world.case.venue.name}. The solution below the surface was established before the first question was asked.`
            : `${campaign.protagonist.name}, a ${campaign.protagonist.background.name.toLowerCase()}, has entered ${world.region}. The facts below were established at creation and cannot be rewritten by later choices.`,
        }),
        IP.h(
          'div',
          { className: 'chip-row' },
          IP.h('span', { className: 'chip', text: IP.titleCase(campaign.genre) }),
          IP.h('span', { className: 'chip', text: IP.titleCase(campaign.difficulty) }),
          IP.h('span', { className: 'chip', text: IP.titleCase(campaign.length) }),
          IP.h('span', { className: 'chip', text: campaign.contentPack.title }),
        ),
      ),
      compatibilityNotice,
      IP.h(
        'section',
        { className: 'card save-summary-card' },
        IP.h('div', { className: 'section-heading-row' },
          IP.h('div', {},
            IP.h('p', { className: 'eyebrow', text: 'SAVE STATUS' }),
            IP.h('h2', { text: 'The path has a recoverable memory.' }),
          ),
          IP.h('span', { className: 'version-pill', text: `Format ${campaign.saveFormatVersion}` }),
        ),
        integrityBanner(saveInspection, activeSave || { label: 'Missing save', revision: 0, updatedAt: null }),
        IP.h('p', {
          text: 'The active scene, choices, consequences, inventory, clues, injuries, relationships, genre state, and deterministic random position share one verified save envelope with manual slots and recovery points.',
        }),
        IP.h(
          'div',
          { className: 'button-row' },
          abandoned ? null : IP.h('a', {
            className: 'button button--primary button--wide',
            text: playLabel,
            attrs: { href: `#/play?id=${encodeURIComponent(campaign.id)}` },
          }),
          IP.h('a', {
            className: 'button button--secondary button--wide',
            text: 'Manage saves and recovery',
            attrs: { href: `#/saves?id=${encodeURIComponent(campaign.id)}` },
          }),
          IP.h('a', {
            className: 'button button--ghost button--wide',
            text: 'Return home',
            attrs: { href: '#/home' },
          }),
        ),
      ),
      IP.h('section', { className: 'card world-grid' }, genreFacts(campaign)),
      list(campaign.genre === 'mystery' ? 'Investigative locations' : 'Known geography', world.geography.majorSites),
      list('Active institutions and factions', world.factions.map((item) => `${item.name}: ${item.agenda}`)),
      campaign.genre === 'mystery' ? mysteryTruthCard(world) : horrorTruthCard(world),
      readinessCard(campaign, activeSave, abandoned, terminal),
    );
  }

  return { renderCampaignView };
});

/* ===== src/js/views/play-view.js ===== */
(function (root, factory) {
  const namespace = (root.InfinitePaths = root.InfinitePaths || {});
  const exported = factory(namespace);
  Object.assign(namespace, exported);
  if (typeof module !== 'undefined' && module.exports) module.exports = exported;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (IP) {
  'use strict';

  function routeCampaignId() {
    const params = new URLSearchParams(globalThis.location.hash.split('?')[1] || '');
    return params.get('id');
  }

  function clamp(value, minimum, maximum) {
    return Math.max(minimum, Math.min(maximum, Number(value || 0)));
  }

  function meter(label, value, description = '', maximum = 100) {
    const actual = clamp(value, 0, maximum);
    const percent = maximum > 0 ? Math.round((actual / maximum) * 100) : 0;
    return IP.h(
      'div',
      { className: 'story-meter' },
      IP.h('div', { className: 'story-meter__copy' },
        IP.h('span', { text: label }),
        IP.h('strong', { text: String(actual) }),
      ),
      IP.h('div', {
        className: 'story-meter__track',
        attrs: {
          role: 'meter',
          'aria-label': label,
          'aria-valuemin': '0',
          'aria-valuemax': String(maximum),
          'aria-valuenow': String(actual),
          ...(description ? { 'aria-description': description } : {}),
        },
      }, IP.h('span', { className: 'story-meter__fill', attrs: { style: `width:${percent}%` } })),
    );
  }

  function compactList(title, records, emptyText, describe = (record) => record.name || record.id) {
    return IP.h(
      'section',
      { className: 'story-state-group' },
      IP.h('h3', { text: title }),
      records.length
        ? IP.h('ul', { className: 'story-state-list' }, records.map((record) => IP.h('li', { text: describe(record) })))
        : IP.h('p', { className: 'field-hint', text: emptyText }),
    );
  }

  function objectivePanel(payload) {
    const objectives = Object.values(payload.worldState.objectives || {});
    return IP.h(
      'section',
      { className: 'story-state-group story-state-group--wide' },
      IP.h('h3', { text: 'Objectives' }),
      objectives.length
        ? IP.h('div', { className: 'objective-list' }, objectives.map((objective) => IP.h(
          'article',
          { className: `objective-card objective-card--${objective.status}` },
          IP.h('div', { className: 'objective-card__heading' },
            IP.h('strong', { text: objective.title }),
            IP.h('span', { className: 'objective-card__status', text: IP.titleCase(objective.status) }),
          ),
          IP.h('p', { text: objective.detail || '' }),
          objective.optional ? IP.h('span', { className: 'field-hint', text: 'Optional objective' }) : null,
        )))
        : IP.h('p', { className: 'field-hint', text: 'No objectives are currently registered.' }),
    );
  }

  function companionPanel(payload) {
    const companions = Object.values(payload.worldState.companions || {});
    return IP.h(
      'section',
      { className: 'story-state-group story-state-group--wide' },
      IP.h('h3', { text: 'People in this path' }),
      companions.length
        ? IP.h('div', { className: 'companion-list' }, companions.map((companion) => {
          const relationship = payload.relationships?.[companion.id] || {};
          return IP.h(
            'article',
            { className: `companion-card companion-card--${companion.status}` },
            IP.h('div', { className: 'companion-card__heading' },
              IP.h('div', {},
                IP.h('strong', { text: companion.name }),
                IP.h('span', { text: companion.role }),
              ),
              IP.h('span', { className: 'companion-card__status', text: IP.titleCase(companion.status) }),
            ),
            companion.lastAction ? IP.h('p', { text: companion.lastAction }) : null,
            companion.cause ? IP.h('p', { className: 'field-hint', text: companion.cause }) : null,
            IP.h('div', { className: 'relationship-reading' },
              IP.h('strong', { text: IP.relationshipLabel(relationship) }),
              IP.h('p', { text: IP.relationshipNote(relationship) }),
            ),
          );
        }))
        : IP.h('p', { className: 'field-hint', text: 'No important people are currently tracked.' }),
    );
  }

  function truthPanel(session) {
    const campaign = session.campaign;
    const payload = session.activeSave.payload;
    if (campaign.genre === 'mystery') {
      const selected = payload.worldState.genreState?.accusation?.selectedSuspectId || null;
      const suspect = selected
        ? Object.values(campaign.world.case.suspects).find((entry) => entry.id === selected)
        : null;
      return IP.h(
        'section',
        { className: 'story-state-group' },
        IP.h('h3', { text: 'Case file' }),
        IP.h('p', { className: 'story-state-emphasis', text: campaign.world.case.title }),
        IP.h('p', {
          text: suspect
            ? `Current public accusation: ${suspect.name}. The locked truth has not changed to agree with it.`
            : 'No public accusation has been made. The culprit and all case facts remain locked beneath the evidence you have actually discovered.',
        }),
      );
    }
    const mystery = campaign.world.mystery || { title: 'The hidden county truth' };
    const resolved = Boolean(payload.worldState.flags.hiddenTruthResolved);
    const theory = payload.worldState.flags.selectedTheoryId || null;
    return IP.h(
      'section',
      { className: 'story-state-group' },
      IP.h('h3', { text: 'Hidden truth' }),
      IP.h('p', { className: 'story-state-emphasis', text: mystery.title }),
      IP.h('p', {
        text: resolved
          ? 'Resolved. The campaign may now use the established truth in later choices and endings.'
          : theory
            ? 'A theory has been committed, but the full truth has not yet been secured.'
            : 'Unresolved. Evidence exists independently of whether you discover it.',
      }),
    );
  }

  function routePanel(session) {
    const campaign = session.campaign;
    const payload = session.activeSave.payload;
    const flags = payload.worldState.flags || {};
    if (campaign.genre === 'mystery') {
      const leadNames = {
        cause: 'Cause and method',
        access: 'Access and means',
        timeline: 'Timeline and opportunity',
        motive: 'Motive and concealed records',
      };
      const lead = leadNames[flags.currentLead] || 'Caseboard review';
      const complicationText = campaign.length === 'standard'
        ? flags.complicationTriggered
          ? flags.complicationResolved
            ? `Resolved complication: ${campaign.world.case.complication.label}.`
            : `Active complication: ${campaign.world.case.complication.label}.`
          : 'A Standard-case complication is permanently seeded but has not yet surfaced.'
        : 'Short cases omit the overnight complication and move toward accusation sooner.';
      return IP.h(
        'section',
        { className: 'story-state-group' },
        IP.h('h3', { text: 'Investigative route' }),
        IP.h('p', { className: 'story-state-emphasis', text: lead }),
        IP.h('p', { text: complicationText }),
      );
    }
    const routeNames = { road: 'Southern road evacuation', tunnels: 'Limestone tunnel shelter', relay: 'Relay-station reconnaissance' };
    const route = routeNames[flags.chapter2Plan] || 'No middle-game plan selected yet';
    const complication = payload.worldState.narrative.cast.complication?.label || 'No extended complication selected';
    return IP.h(
      'section',
      { className: 'story-state-group' },
      IP.h('h3', { text: 'Current route' }),
      IP.h('p', { className: 'story-state-emphasis', text: route }),
      IP.h('p', {
        text: campaign.length === 'standard'
          ? `Standard campaign complication: ${complication}.`
          : 'Short campaigns move directly from preparation to the final convergence.',
      }),
    );
  }

  function mysterySuspectPanel(session) {
    if (session.campaign.genre !== 'mystery') return null;
    const caseFile = session.campaign.world.case;
    const statuses = session.activeSave.payload.worldState.genreState?.suspects || {};
    return IP.h(
      'section',
      { className: 'story-state-group story-state-group--wide' },
      IP.h('h3', { text: 'Closed suspect pool' }),
      IP.h('div', { className: 'companion-list mystery-suspect-list' }, Object.values(caseFile.suspects).map((suspect) => {
        const status = statuses[suspect.id]?.status || 'unexamined';
        return IP.h(
          'article',
          { className: `companion-card companion-card--${status}` },
          IP.h('div', { className: 'companion-card__heading' },
            IP.h('div', {},
              IP.h('strong', { text: suspect.name }),
              IP.h('span', { text: suspect.role }),
            ),
            IP.h('span', { className: 'companion-card__status', text: IP.titleCase(status.replaceAll('-', ' ')) }),
          ),
          IP.h('p', { className: 'field-hint', text: suspect.alibi }),
        );
      })),
    );
  }

  function meterGrid(session) {
    const campaign = session.campaign;
    const payload = session.activeSave.payload;
    if (campaign.genre === 'mystery') {
      const metrics = payload.worldState.genreState.metrics;
      const maximumTime = IP.MYSTERY_DIFFICULTY_PROFILES[campaign.difficulty].startingTimeRemaining;
      return IP.h('div', { className: 'story-meter-grid story-meter-grid--four' },
        meter('Health', payload.player.health),
        meter('Morale', payload.player.morale),
        meter('Case strength', metrics.caseStrength, 'Higher values represent corroborated admissible proof.'),
        meter('Evidence integrity', metrics.evidenceIntegrity, 'Contamination can make a correct theory impossible to prosecute.'),
        meter('Public confidence', metrics.publicConfidence, 'Low confidence weakens cooperation and institutional support.'),
        meter('Time remaining', metrics.timeRemaining, 'The roads reopen and outside review begins when the investigative window closes.', maximumTime),
      );
    }
    return IP.h('div', { className: 'story-meter-grid story-meter-grid--four' },
      meter('Health', payload.player.health),
      meter('Morale', payload.player.morale),
      meter('Threat pressure', payload.worldState.threatPressure, 'Higher values indicate greater danger and fewer clean endings.'),
      meter('Evacuation readiness', payload.worldState.evacuationReadiness, 'Higher values improve rescue and withdrawal options.'),
    );
  }

  function statisticsPanel(session) {
    const stats = session.activeSave.payload.campaignStatistics;
    const rows = [
      ['Scenes', stats.scenesVisited || 0],
      ['Choices', stats.choicesMade || 0],
      ['Optional goals', stats.optionalObjectivesCompleted || 0],
      ['People lost', stats.companionsLost || 0],
    ];
    if (session.campaign.genre === 'mystery') {
      rows.push(['Interviews', stats.interviewsConducted || 0]);
      rows.push(['Accusations', stats.accusationsMade || 0]);
    }
    return IP.h(
      'section',
      { className: 'story-state-group' },
      IP.h('h3', { text: 'Campaign statistics' }),
      IP.h('dl', { className: 'story-relationship' }, rows.map(([label, value]) => IP.h(
        'div', {},
        IP.h('dt', { text: label }),
        IP.h('dd', { text: String(value) }),
      ))),
    );
  }

  function storyStateDrawer(session) {
    const payload = session.activeSave.payload;
    const objectiveCounts = Object.values(payload.worldState.objectives || {}).reduce((counts, item) => {
      counts[item.status] = Number(counts[item.status] || 0) + 1;
      return counts;
    }, {});
    return IP.h(
      'details',
      { className: 'story-state-drawer' },
      IP.h('summary', {},
        IP.h('span', { text: session.campaign.genre === 'mystery' ? 'Case state' : 'Campaign state' }),
        IP.h('span', {
          className: 'story-state-drawer__summary',
          text: `${objectiveCounts.completed || 0} objectives complete · ${payload.clues.length} clues · ${payload.injuries.length} injuries`,
        }),
      ),
      IP.h('div', { className: 'story-state-drawer__body' },
        meterGrid(session),
        objectivePanel(payload),
        companionPanel(payload),
        mysterySuspectPanel(session),
        IP.h('div', { className: 'story-state-grid' },
          compactList('Inventory', payload.inventory, 'Nothing carried.', (record) => `${record.name || record.id}${Number(record.quantity || 1) > 1 ? ` ×${record.quantity}` : ''}`),
          compactList('Clues', payload.clues, 'No clues recorded.'),
          compactList('Injuries', payload.injuries, 'No injuries.', (record) => `${record.name || record.id}${record.treated ? ' · treated' : ''}`),
          truthPanel(session),
          routePanel(session),
          statisticsPanel(session),
        ),
      ),
    );
  }

  function contentWarningLine(scene) {
    if (!scene.contentWarnings.length) return null;
    const labels = scene.contentWarnings.map((warning) => IP.titleCase(warning.replaceAll('-', ' ')));
    return IP.h(
      'p',
      { className: 'scene-warning' },
      IP.h('strong', { text: 'Scene content: ' }),
      IP.h('span', { text: labels.join(', ') }),
    );
  }

  function renderStoryHeader(session) {
    const scene = session.scene;
    const payload = session.activeSave.payload;
    const status = session.campaign.genre === 'mystery'
      ? [
        `Health ${payload.player.health}`,
        `Case ${payload.worldState.genreState.metrics.caseStrength}`,
        `Evidence ${payload.worldState.genreState.metrics.evidenceIntegrity}`,
        `Time ${payload.worldState.genreState.metrics.timeRemaining}`,
      ]
      : [
        `Health ${payload.player.health}`,
        `Pressure ${payload.worldState.threatPressure}`,
        `Readiness ${payload.worldState.evacuationReadiness}`,
      ];
    status.push(`Autosave r${session.activeSave.revision}`);
    return IP.h(
      'header',
      { className: `story-header story-header--${scene.sceneType}` },
      IP.h('div', { className: 'story-header__meta' },
        IP.h('span', { text: scene.kicker }),
        IP.h('span', { text: scene.location }),
      ),
      IP.h('h1', { id: 'page-title', text: scene.title }),
      IP.h('div', { className: 'story-header__status' }, status.map((text) => IP.h('span', { text }))),
      contentWarningLine(scene),
    );
  }

  function endingReport(session) {
    const content = IP.getNarrativeContentForCampaign(session.campaign);
    const summary = session.campaign.summary
      || IP.buildCampaignSummary(content, session.campaign, session.activeSave.payload);
    const completed = summary.objectives.filter((item) => item.status === 'completed').length;
    const failed = summary.objectives.filter((item) => item.status === 'failed').length;
    const companionLines = summary.companions.map((companion) => `${companion.name}: ${IP.titleCase(companion.status)}`);
    const conditionCards = session.campaign.genre === 'mystery'
      ? [
        ['Case strength', summary.condition.genreMetrics.caseStrength],
        ['Evidence integrity', summary.condition.genreMetrics.evidenceIntegrity],
        ['Public confidence', summary.condition.genreMetrics.publicConfidence],
        ['Time remaining', summary.condition.genreMetrics.timeRemaining],
      ]
      : [
        ['Final health', summary.condition.health],
        ['Final pressure', summary.condition.threatPressure],
      ];
    return IP.h(
      'div',
      { className: 'ending-report' },
      IP.h('h3', { text: 'Path report' }),
      IP.h('div', { className: 'ending-report__grid' },
        IP.h('div', {}, IP.h('span', { text: 'Scenes' }), IP.h('strong', { text: String(summary.statistics.scenesVisited || 0) })),
        IP.h('div', {}, IP.h('span', { text: 'Choices' }), IP.h('strong', { text: String(summary.statistics.choicesMade || 0) })),
        IP.h('div', {}, IP.h('span', { text: 'Objectives' }), IP.h('strong', { text: `${completed} complete · ${failed} failed` })),
        IP.h('div', {}, IP.h('span', { text: 'Clues' }), IP.h('strong', { text: String(summary.clues.length) })),
        conditionCards.map(([label, value]) => IP.h('div', {}, IP.h('span', { text: label }), IP.h('strong', { text: String(value) }))),
      ),
      companionLines.length ? IP.h('p', { className: 'field-hint', text: companionLines.join(' · ') }) : null,
    );
  }

  function renderEndingActions(session) {
    const isFailure = session.scene.ending?.outcome === 'failure';
    return IP.h(
      'section',
      { className: `story-resolution story-resolution--${isFailure ? 'failure' : 'success'}` },
      IP.h('p', { className: 'eyebrow', text: isFailure ? 'CAMPAIGN FAILED' : 'CAMPAIGN COMPLETE' }),
      IP.h('h2', { text: session.scene.ending?.cause || 'This path has reached its ending.' }),
      IP.h('p', { text: session.scene.ending?.summary || '' }),
      endingReport(session),
      IP.h('div', { className: 'button-row' },
        IP.h('a', { className: 'button button--primary', text: 'Create another campaign', attrs: { href: '#/new' } }),
        IP.h('a', { className: 'button button--secondary', text: 'Open archive', attrs: { href: '#/archive' } }),
        IP.h('a', { className: 'button button--ghost', text: 'Saves & recovery', attrs: { href: `#/saves?id=${encodeURIComponent(session.campaign.id)}` } }),
      ),
    );
  }

  function renderCheckpointActions(session) {
    return IP.h(
      'section',
      { className: 'story-resolution story-resolution--checkpoint' },
      IP.h('p', { className: 'eyebrow', text: 'STABLE CHAPTER CHECKPOINT' }),
      IP.h('h2', { text: 'The campaign is active and safely paused.' }),
      IP.h('p', { text: 'Every choice, clue, injury, relationship change, objective, companion outcome, genre metric, random-stream position, and established fact has been committed to the autosave.' }),
      IP.h('div', { className: 'button-row' },
        IP.h('a', { className: 'button button--primary', text: 'Return home', attrs: { href: '#/home' } }),
        IP.h('a', { className: 'button button--secondary', text: 'Open campaign record', attrs: { href: `#/campaign?id=${encodeURIComponent(session.campaign.id)}` } }),
        IP.h('a', { className: 'button button--ghost', text: 'Manage saves', attrs: { href: `#/saves?id=${encodeURIComponent(session.campaign.id)}` } }),
      ),
    );
  }

  function choicePanel(session, context) {
    const error = IP.h('div', { className: 'choice-error', attrs: { role: 'alert', 'aria-live': 'assertive' } });
    const buttons = session.scene.choices.map((choice, index) => IP.h(
      'button',
      {
        className: 'story-choice',
        attrs: { type: 'button', 'data-choice-id': choice.id },
        on: {
          click: async (event) => {
            const selected = event.currentTarget;
            const allButtons = selected.closest('.story-choices')?.querySelectorAll('button') || [];
            for (const button of allButtons) button.disabled = true;
            selected.dataset.committing = 'true';
            error.textContent = '';
            try {
              const result = await context.narrativeService.resolveChoice(
                session.campaign.id,
                choice.id,
                { saveId: session.activeSave.id, revision: session.activeSave.revision },
              );
              context.toast.show(
                result.scene.terminal
                  ? 'The ending and its consequences were autosaved.'
                  : result.scene.checkpoint
                    ? 'The chapter was committed at a stable checkpoint.'
                    : 'Choice committed to autosave.',
                { tone: 'success', duration: result.scene.terminal || result.scene.checkpoint ? 4500 : 2600 },
              );
              await context.refreshCampaignData();
            } catch (cause) {
              error.textContent = String(cause?.message || cause);
              selected.dataset.committing = 'false';
              for (const button of allButtons) button.disabled = false;
            }
          },
        },
      },
      IP.h('span', { className: 'story-choice__number', text: String(index + 1), attrs: { 'aria-hidden': 'true' } }),
      IP.h('span', { className: 'story-choice__label', text: choice.label }),
      IP.h('span', { className: 'story-choice__arrow', text: '›', attrs: { 'aria-hidden': 'true' } }),
    ));
    return IP.h(
      'section',
      { className: 'story-choice-panel' },
      IP.h('p', { className: 'eyebrow', text: 'CHOOSE' }),
      IP.h('h2', { text: session.campaign.genre === 'mystery' ? 'What do you investigate?' : 'What do you do?' }),
      IP.h('div', { className: 'story-choices' }, buttons),
      error,
      IP.h('p', { className: 'story-autosave-note', text: 'The selected consequence is committed atomically before the next scene appears.' }),
    );
  }

  async function renderPlayView(container, context) {
    IP.clearNode(container);
    container.className = 'view view--play';
    const requestedId = routeCampaignId();
    const campaign = await context.campaignStore.getCampaign(requestedId)
      || await context.campaignStore.getLastCampaign();
    if (!campaign) {
      globalThis.location.hash = '#/home';
      return;
    }
    container.className = `view view--play view--genre-${campaign.genre}`;

    container.append(IP.h(
      'section',
      { className: 'card story-loading', attrs: { 'aria-live': 'polite' } },
      IP.h('p', { className: 'eyebrow', text: 'LOADING VERIFIED SAVE' }),
      IP.h('h1', { id: 'page-title', text: campaign.genre === 'mystery' ? 'Opening the active case file.' : 'Opening the current scene.' }),
      IP.h('p', { text: 'Checking campaign identity, active save integrity, narrative version, objectives, companions, genre state, and deterministic position.' }),
    ));

    const session = await context.narrativeService.startCampaign(campaign.id);
    IP.clearNode(container);
    container.className = `view view--play view--genre-${campaign.genre}`;
    const sceneArticle = IP.h(
      'article',
      { className: `story-scene story-scene--${session.scene.sceneType}` },
      renderStoryHeader(session),
      IP.h('div', { className: 'story-prose' }, session.scene.paragraphs.map((paragraph) => IP.h('p', { text: paragraph.text }))),
    );

    container.append(
      IP.h('nav', { className: 'story-toolbar', attrs: { 'aria-label': 'Campaign tools' } },
        IP.h('a', { className: 'text-link', text: 'Campaign record', attrs: { href: `#/campaign?id=${encodeURIComponent(campaign.id)}` } }),
        IP.h('span', { text: '·', attrs: { 'aria-hidden': 'true' } }),
        IP.h('a', { className: 'text-link', text: 'Save & Recovery', attrs: { href: `#/saves?id=${encodeURIComponent(campaign.id)}` } }),
      ),
      sceneArticle,
      storyStateDrawer(session),
      session.scene.terminal
        ? renderEndingActions(session)
        : session.scene.checkpoint
          ? renderCheckpointActions(session)
          : choicePanel(session, context),
    );
  }

  return { renderPlayView };
});

/* ===== src/js/views/save-recovery-view.js ===== */
(function (root, factory) {
  const namespace = (root.InfinitePaths = root.InfinitePaths || {});
  const exported = factory(namespace);
  Object.assign(namespace, exported);
  if (typeof module !== 'undefined' && module.exports) module.exports = exported;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (IP) {
  'use strict';

  function statusPill(state, label = null) {
    const normalized = state === 'healthy' ? 'good' : state === 'legacy' ? 'warn' : 'bad';
    return IP.h('span', {
      className: `status-pill status-pill--${normalized}`,
      text: label || IP.titleCase(state),
    });
  }

  function actionButton(text, handler, className = 'button button--secondary') {
    return IP.h('button', {
      className,
      text,
      attrs: { type: 'button' },
      on: { click: handler },
    });
  }

  function setBusy(button, busy, busyText, idleText) {
    button.disabled = busy;
    button.textContent = busy ? busyText : idleText;
  }

  function messageBox(message, tone = 'neutral') {
    return IP.h('div', {
      className: 'operation-message',
      text: message,
      dataset: { tone },
      attrs: { role: tone === 'bad' ? 'alert' : 'status' },
    });
  }

  function campaignPicker(campaigns) {
    if (!campaigns.length) {
      return IP.h(
        'section',
        { className: 'card empty-state' },
        IP.h('h2', { text: 'No local campaigns yet.' }),
        IP.h('p', { text: 'Create a campaign or import a verified Infinite Paths export.' }),
        IP.h('a', { className: 'button button--primary', text: 'Create campaign', attrs: { href: '#/new' } }),
      );
    }
    return IP.h(
      'section',
      { className: 'card' },
      IP.h('p', { className: 'eyebrow', text: 'LOCAL CAMPAIGNS' }),
      IP.h('h2', { text: 'Choose a path to protect.' }),
      IP.h(
        'div',
        { className: 'campaign-resume-list' },
        campaigns.map((campaign) => IP.h(
          'a',
          {
            className: 'campaign-resume-card',
            attrs: { href: `#/saves?id=${encodeURIComponent(campaign.id)}` },
          },
          IP.h('div', {},
            IP.h('h3', { text: campaign.title }),
            IP.h('p', {
              text: `${campaign.protagonist?.name || 'Unknown protagonist'} · ${IP.titleCase(campaign.status)} · updated ${IP.formatDateTime(campaign.updatedAt)}`,
            }),
          ),
          IP.h('span', { className: 'campaign-resume-card__arrow', text: '›', attrs: { 'aria-hidden': 'true' } }),
        )),
      ),
    );
  }

  function renderImportPreview(previewRegion, result, context, selectedText, filename) {
    IP.clearNode(previewRegion);
    if (result.status === 'quarantined') {
      previewRegion.append(
        messageBox(
          `${result.error.message} The original JSON was preserved locally without being applied.`,
          'warn',
        ),
      );
      return;
    }

    const summary = result.summary;
    const conflictConfirmation = result.conflict
      ? IP.h(
        'label',
        { className: 'check-row confirmation-row' },
        IP.h('input', { attrs: { type: 'checkbox' } }),
        IP.h('span', {
          text: 'I understand that this import will replace the local copy after Infinite Paths creates a recovery backup.',
        }),
      )
      : null;
    const importButton = actionButton(
      result.conflict ? 'Replace local campaign safely' : 'Import verified campaign',
      async () => {
        if (result.conflict && !conflictConfirmation.querySelector('input').checked) {
          context.toast.show('Confirm the protected overwrite before importing.', { tone: 'error' });
          return;
        }
        setBusy(importButton, true, 'Importing…', result.conflict ? 'Replace local campaign safely' : 'Import verified campaign');
        try {
          const imported = await context.saveService.importCampaign(result.exportBundle, {
            overwrite: result.conflict,
          });
          context.toast.show(
            imported.conflictReplaced
              ? 'Campaign replaced. The previous local copy is preserved as a recovery point.'
              : 'Campaign imported and verified.',
            { tone: 'success', duration: 5500 },
          );
          await context.refreshCampaignData({ rerender: false });
          globalThis.location.hash = `#/saves?id=${encodeURIComponent(imported.campaign.id)}`;
        } catch (error) {
          context.toast.show(String(error?.message || error), { tone: 'error', persistent: true });
          setBusy(importButton, false, 'Importing…', result.conflict ? 'Replace local campaign safely' : 'Import verified campaign');
        }
      },
      result.conflict ? 'button button--danger button--wide' : 'button button--primary button--wide',
    );

    previewRegion.append(
      IP.h(
        'section',
        { className: 'import-preview' },
        IP.h('div', { className: 'section-heading-row' },
          IP.h('div', {},
            IP.h('p', { className: 'eyebrow', text: 'VERIFIED IMPORT' }),
            IP.h('h3', { text: summary.title }),
          ),
          statusPill('healthy', 'Checksum verified'),
        ),
        IP.h('dl', { className: 'compact-facts' },
          IP.h('div', {}, IP.h('dt', { text: 'Protagonist' }), IP.h('dd', { text: summary.protagonist })),
          IP.h('div', {}, IP.h('dt', { text: 'Campaign' }), IP.h('dd', { text: `${IP.titleCase(summary.genre)} · ${IP.titleCase(summary.difficulty)} · ${IP.titleCase(summary.length)}` })),
          IP.h('div', {}, IP.h('dt', { text: 'Saves' }), IP.h('dd', { text: String(summary.saveCount) })),
          IP.h('div', {}, IP.h('dt', { text: 'Content pack' }), IP.h('dd', { text: summary.contentPack })),
          IP.h('div', {}, IP.h('dt', { text: 'Exported' }), IP.h('dd', { text: IP.formatDateTime(summary.exportedAt) })),
          IP.h('div', {}, IP.h('dt', { text: 'File' }), IP.h('dd', { text: filename })),
        ),
        result.compatibility.packInstalled
          ? null
          : messageBox(
            'The exact content-pack version is not installed. The campaign can be stored and inspected, but play remains blocked until that pack is available.',
            'warn',
          ),
        result.conflict
          ? messageBox('A campaign with the same immutable identity already exists on this device.', 'warn')
          : null,
        conflictConfirmation,
        importButton,
        IP.h('p', {
          className: 'field-hint',
          text: `The selected source contains ${IP.formatBytes(IP.utf8Bytes(selectedText).byteLength)} of inert JSON data. No script from the file can execute.`,
        }),
      ),
    );
  }

  async function importPanel(context) {
    const fileInput = IP.h('input', {
      id: 'campaign-import-file',
      className: 'file-input',
      attrs: {
        type: 'file',
        accept: '.json,application/json',
      },
    });
    const previewRegion = IP.h('div', {
      className: 'import-preview-region',
      attrs: { 'aria-live': 'polite' },
    });

    fileInput.addEventListener('change', async () => {
      IP.clearNode(previewRegion);
      const file = fileInput.files?.[0];
      if (!file) return;
      previewRegion.append(messageBox('Reading and validating the selected JSON…'));
      try {
        const text = await IP.readSelectedFile(file, context.appConfig.maximumImportBytes);
        const result = await context.saveService.inspectImportSafely(text, { filename: file.name });
        renderImportPreview(previewRegion, result, context, text, file.name);
      } catch (error) {
        IP.clearNode(previewRegion);
        previewRegion.append(messageBox(String(error?.message || error), 'bad'));
      }
    });

    return IP.h(
      'section',
      { className: 'card import-card' },
      IP.h('p', { className: 'eyebrow', text: 'IMPORT' }),
      IP.h('h2', { text: 'Restore a portable campaign export.' }),
      IP.h('p', {
        text: 'Infinite Paths validates file size, JSON structure, version compatibility, campaign identity, every save slot, and SHA-256 checksums before offering an import button.',
      }),
      IP.h('label', { className: 'file-picker', attrs: { for: 'campaign-import-file' } },
        IP.h('strong', { text: 'Choose Infinite Paths JSON' }),
        IP.h('span', { text: `Maximum ${IP.formatBytes(context.appConfig.maximumImportBytes)}` }),
      ),
      fileInput,
      previewRegion,
    );
  }

  async function quarantinedImportsSection(context) {
    const records = await context.campaignStore.listQuarantinedImports();
    if (!records.length) return null;

    const list = IP.h('div', { className: 'recovery-list' });
    for (const record of records) {
      let inspection;
      try {
        IP.validateQuarantinedImport(record);
        inspection = { state: 'healthy', message: 'Preserved source checksum verified.' };
      } catch (error) {
        inspection = { state: 'corrupt', message: String(error?.message || error) };
      }
      const exportButton = actionButton('Share preserved JSON', async () => {
        try {
          const delivery = await IP.deliverTextFile(record.rawText, record.filename, 'application/json');
          if (delivery.method !== 'cancelled') {
            context.toast.show('Preserved JSON prepared for export.', { tone: 'success' });
          }
        } catch (error) {
          context.toast.show(String(error?.message || error), { tone: 'error' });
        }
      });
      const deleteButton = actionButton('Delete preserved copy', async () => {
        if (!globalThis.confirm('Delete this preserved future-version file from local recovery storage?')) return;
        try {
          await context.saveService.deleteBackup(record.id);
          context.toast.show('Preserved import deleted.', { tone: 'success' });
          await context.refreshCampaignData();
        } catch (error) {
          context.toast.show(String(error?.message || error), { tone: 'error' });
        }
      }, 'button button--ghost');
      list.append(
        IP.h(
          'article',
          { className: 'recovery-card' },
          IP.h('div', { className: 'section-heading-row' },
            IP.h('div', {},
              IP.h('h3', { text: record.filename }),
              IP.h('p', { text: `${IP.formatBytes(record.bytes)} · preserved ${IP.formatDateTime(record.createdAt)}` }),
            ),
            statusPill(inspection.state, inspection.state === 'healthy' ? 'Preserved' : 'Damaged'),
          ),
          IP.h('p', { text: record.reason }),
          IP.h('p', { className: 'field-hint', text: inspection.message }),
          IP.h('div', { className: 'button-row' }, exportButton, deleteButton),
        ),
      );
    }

    return IP.h(
      'section',
      { className: 'card warning-card' },
      IP.h('p', { className: 'eyebrow', text: 'FUTURE-VERSION HOLDING AREA' }),
      IP.h('h2', { text: 'These files were preserved, never applied.' }),
      IP.h('p', {
        text: 'A newer app may understand them later. Infinite Paths keeps their original JSON inert and separate from playable campaign records.',
      }),
      list,
    );
  }

  function saveSlotCard({ campaign, save, activeSave, slotType, slotNumber, context }) {
    const slotId = IP.makeSaveId(campaign.id, slotType, slotNumber);
    const isActive = activeSave?.id === slotId;
    const inspection = save ? IP.inspectSaveRecord(save) : null;
    const title = slotType === 'autosave' ? 'Autosave' : `Manual Save ${slotNumber}`;
    const actions = IP.h('div', { className: 'button-row save-slot__actions' });

    if (!save) {
      const createButton = actionButton('Create from active save', async () => {
        setBusy(createButton, true, 'Creating…', 'Create from active save');
        try {
          await context.saveService.createManualSave(campaign.id, slotNumber);
          context.toast.show(`${title} created.`, { tone: 'success' });
          await context.refreshCampaignData();
        } catch (error) {
          context.toast.show(String(error?.message || error), { tone: 'error', persistent: true });
          setBusy(createButton, false, 'Creating…', 'Create from active save');
        }
      }, 'button button--secondary');
      actions.append(createButton);
    } else {
      if (!isActive && inspection.state === 'healthy') {
        const loadButton = actionButton('Load this save', async () => {
          setBusy(loadButton, true, 'Loading…', 'Load this save');
          try {
            await context.saveService.loadSave(campaign.id, save.id);
            context.toast.show(`${title} is now active.`, { tone: 'success' });
            await context.refreshCampaignData();
          } catch (error) {
            context.toast.show(String(error?.message || error), { tone: 'error', persistent: true });
            setBusy(loadButton, false, 'Loading…', 'Load this save');
          }
        }, 'button button--primary');
        actions.append(loadButton);
      }
      if (slotType === 'manual') {
        const replaceButton = actionButton('Replace from active save', async () => {
          if (!globalThis.confirm(`Replace ${title}? A recovery point will be created first.`)) return;
          setBusy(replaceButton, true, 'Replacing…', 'Replace from active save');
          try {
            await context.saveService.createManualSave(campaign.id, slotNumber);
            context.toast.show(`${title} replaced. The previous version is recoverable.`, { tone: 'success' });
            await context.refreshCampaignData();
          } catch (error) {
            context.toast.show(String(error?.message || error), { tone: 'error', persistent: true });
            setBusy(replaceButton, false, 'Replacing…', 'Replace from active save');
          }
        });
        const deleteButton = actionButton('Delete', async () => {
          if (!globalThis.confirm(`Delete ${title}? A recovery point will be created first.`)) return;
          setBusy(deleteButton, true, 'Deleting…', 'Delete');
          try {
            await context.saveService.deleteManualSave(campaign.id, slotNumber);
            context.toast.show(`${title} deleted. A recovery point was preserved.`, { tone: 'success' });
            await context.refreshCampaignData();
          } catch (error) {
            context.toast.show(String(error?.message || error), { tone: 'error', persistent: true });
            setBusy(deleteButton, false, 'Deleting…', 'Delete');
          }
        }, 'button button--ghost');
        actions.append(replaceButton, deleteButton);
      }
    }

    return IP.h(
      'article',
      { className: `save-slot ${isActive ? 'save-slot--active' : ''}` },
      IP.h('div', { className: 'section-heading-row' },
        IP.h('div', {},
          IP.h('h3', { text: title }),
          IP.h('p', {
            text: save
              ? `Revision ${save.revision || 1} · ${IP.formatDateTime(save.updatedAt)}`
              : 'Empty slot',
          }),
        ),
        isActive
          ? statusPill('healthy', 'Active')
          : save
            ? statusPill(inspection.state)
            : statusPill('legacy', 'Empty'),
      ),
      save
        ? IP.h('p', {
          className: `save-integrity-copy save-integrity-copy--${inspection.state}`,
          text: inspection.message,
        })
        : IP.h('p', { className: 'field-hint', text: 'A manual slot records an independent snapshot of the currently active save.' }),
      actions,
    );
  }

  async function campaignSaveManager(campaign, context) {
    const [bundle, scan, backups] = await Promise.all([
      context.campaignStore.getCampaignBundle(campaign.id),
      context.saveService.scanCampaign(campaign.id),
      context.campaignStore.listBackups(campaign.id),
    ]);
    const activeSave = bundle.saves.find((save) => save.id === bundle.activeSaveId) || null;
    const savesById = new Map(bundle.saves.map((save) => [save.id, save]));
    const slots = [
      { slotType: 'autosave', slotNumber: 0 },
      ...Array.from({ length: context.appConfig.manualSaveSlots }, (_, index) => ({
        slotType: 'manual',
        slotNumber: index + 1,
      })),
    ];

    const exportButton = actionButton('Export or share campaign JSON', async () => {
      setBusy(exportButton, true, 'Preparing export…', 'Export or share campaign JSON');
      try {
        const exported = await context.saveService.exportCampaign(campaign.id);
        const filename = `infinite-paths-${IP.safeFilename(campaign.title)}-${new Date().toISOString().slice(0, 10)}.json`;
        const delivery = await IP.deliverJsonFile(exported, filename);
        if (delivery.method !== 'cancelled') {
          context.toast.show('Portable campaign export prepared.', { tone: 'success' });
        }
      } catch (error) {
        context.toast.show(String(error?.message || error), { tone: 'error', persistent: true });
      } finally {
        setBusy(exportButton, false, 'Preparing export…', 'Export or share campaign JSON');
      }
    }, 'button button--primary button--wide');

    const backupButton = actionButton('Create local recovery point', async () => {
      setBusy(backupButton, true, 'Creating…', 'Create local recovery point');
      try {
        await context.saveService.createUserBackup(campaign.id);
        context.toast.show('Local recovery point created.', { tone: 'success' });
        await context.refreshCampaignData();
      } catch (error) {
        context.toast.show(String(error?.message || error), { tone: 'error', persistent: true });
        setBusy(backupButton, false, 'Creating…', 'Create local recovery point');
      }
    }, 'button button--secondary button--wide');

    const saveSlotsSection = IP.h(
      'section',
      { className: 'card' },
      IP.h('div', { className: 'section-heading-row' },
        IP.h('div', {},
          IP.h('p', { className: 'eyebrow', text: 'SAVE SLOTS' }),
          IP.h('h2', { text: 'Four snapshots, one active path.' }),
        ),
        statusPill(scan.healthy ? 'healthy' : 'corrupt', scan.healthy ? 'Verified' : 'Review needed'),
      ),
      IP.h('p', {
        text: 'Loading a slot changes the active resume point. It does not erase the other slots. Manual overwrites and deletions create a recovery point first.',
      }),
      IP.h(
        'div',
        { className: 'save-slot-list' },
        slots.map((slot) => saveSlotCard({
          campaign,
          save: savesById.get(IP.makeSaveId(campaign.id, slot.slotType, slot.slotNumber)) || null,
          activeSave,
          context,
          ...slot,
        })),
      ),
    );

    const integritySection = IP.h(
      'section',
      { className: scan.healthy ? 'card card--quiet' : 'card warning-card' },
      IP.h('p', { className: 'eyebrow', text: 'INTEGRITY SCAN' }),
      IP.h('h2', { text: scan.healthy ? 'Every stored record passed.' : 'One or more records need attention.' }),
      IP.h('p', {
        text: scan.healthy
          ? `Campaign identity, archive, ${scan.saves.length} save record${scan.saves.length === 1 ? '' : 's'}, and ${scan.backups.length} recovery point${scan.backups.length === 1 ? '' : 's'} match their stored checksums.`
          : `${scan.recoverableBackups} healthy recovery point${scan.recoverableBackups === 1 ? '' : 's'} are available. A damaged slot cannot be loaded or exported as though it were trustworthy.`,
      }),
      IP.h('ul', { className: 'integrity-result-list' },
        IP.h('li', { text: `Campaign identity: ${scan.campaign.message}`, dataset: { state: scan.campaign.state } }),
        IP.h('li', { text: `Archive: ${scan.archive.message}`, dataset: { state: scan.archive.state } }),
        ...scan.saves.map((item) => IP.h('li', {
          text: `${item.label}: ${item.message}`,
          dataset: { state: item.state },
        })),
      ),
      actionButton('Run integrity scan again', async () => {
        context.toast.show('Integrity scan refreshed.', { tone: 'success', duration: 2500 });
        await context.refreshCampaignData();
      }, 'button button--ghost'),
    );

    const recoveryList = IP.h('div', { className: 'recovery-list' });
    if (!backups.length) {
      recoveryList.append(messageBox('No local recovery points have been created yet.'));
    } else {
      for (const backup of backups) {
        let healthy = true;
        let message = 'Recovery checksum verified.';
        try {
          IP.validateBackupRecord(backup);
        } catch (error) {
          healthy = false;
          message = String(error?.message || error);
        }
        const restoreButton = actionButton('Restore this point', async () => {
          if (!globalThis.confirm(`Restore “${backup.label}” from ${IP.formatDateTime(backup.createdAt)}? The current state will be backed up first.`)) return;
          setBusy(restoreButton, true, 'Restoring…', 'Restore this point');
          try {
            await context.saveService.restoreBackup(backup.id);
            context.toast.show('Recovery point restored. The replaced state remains recoverable.', { tone: 'success', duration: 6000 });
            await context.refreshCampaignData();
          } catch (error) {
            context.toast.show(String(error?.message || error), { tone: 'error', persistent: true });
            setBusy(restoreButton, false, 'Restoring…', 'Restore this point');
          }
        }, 'button button--secondary');
        restoreButton.disabled = !healthy;
        const deleteButton = actionButton('Delete', async () => {
          if (!globalThis.confirm('Delete this local recovery point? Portable campaign exports are unaffected.')) return;
          try {
            await context.saveService.deleteBackup(backup.id);
            context.toast.show('Recovery point deleted.', { tone: 'success' });
            await context.refreshCampaignData();
          } catch (error) {
            context.toast.show(String(error?.message || error), { tone: 'error' });
          }
        }, 'button button--ghost');
        recoveryList.append(
          IP.h(
            'article',
            { className: 'recovery-card' },
            IP.h('div', { className: 'section-heading-row' },
              IP.h('div', {},
                IP.h('h3', { text: backup.label }),
                IP.h('p', { text: `${IP.formatDateTime(backup.createdAt)} · format ${backup.sourceSaveFormatVersion}` }),
              ),
              statusPill(healthy ? 'healthy' : 'corrupt'),
            ),
            IP.h('p', { className: 'field-hint', text: message }),
            IP.h('div', { className: 'button-row' }, restoreButton, deleteButton),
          ),
        );
      }
    }

    const recoverySection = IP.h(
      'section',
      { className: 'card' },
      IP.h('p', { className: 'eyebrow', text: 'BACKUP & RESTORE' }),
      IP.h('h2', { text: 'Local recovery points remember the state before risky changes.' }),
      IP.h('p', {
        text: 'They live inside this browser. Use the portable JSON export as the separate copy you can place in Files, iCloud Drive, or another private location.',
      }),
      IP.h('div', { className: 'stacked-actions' }, exportButton, backupButton),
      recoveryList,
    );

    let abandonSection = null;
    if (!['completed', 'failed', 'abandoned'].includes(campaign.status)) {
      const confirmBox = IP.h('input', { attrs: { type: 'checkbox' } });
      const abandonButton = actionButton('Archive campaign as abandoned', async () => {
        if (!confirmBox.checked) {
          context.toast.show('Confirm abandonment first.', { tone: 'error' });
          return;
        }
        if (!globalThis.confirm('Archive this campaign as abandoned? A recovery point will be created first.')) return;
        setBusy(abandonButton, true, 'Archiving…', 'Archive campaign as abandoned');
        try {
          await context.saveService.abandonCampaign(campaign.id);
          context.toast.show('Campaign archived as abandoned. Its prior state is recoverable.', { tone: 'success', duration: 6000 });
          await context.refreshCampaignData({ rerender: false });
          globalThis.location.hash = '#/archive';
        } catch (error) {
          context.toast.show(String(error?.message || error), { tone: 'error', persistent: true });
          setBusy(abandonButton, false, 'Archiving…', 'Archive campaign as abandoned');
        }
      }, 'button button--danger button--wide');
      abandonSection = IP.h(
        'section',
        { className: 'card danger-zone' },
        IP.h('p', { className: 'eyebrow', text: 'CAMPAIGN STATUS' }),
        IP.h('h2', { text: 'Abandon this path without deleting it.' }),
        IP.h('p', {
          text: 'Abandonment creates an archive outcome and removes the campaign from active Continue lists. It does not erase saves, the ending summary, or the pre-abandonment recovery point.',
        }),
        IP.h('label', { className: 'check-row confirmation-row' },
          confirmBox,
          IP.h('span', { text: `I understand that ${campaign.title} will leave the active campaign list.` }),
        ),
        abandonButton,
      );
    }

    return IP.h(
      'div',
      { className: 'save-manager-sections' },
      IP.h(
        'section',
        { className: 'hero-card save-manager-hero' },
        IP.h('p', { className: 'eyebrow', text: 'SAVE & RECOVERY' }),
        IP.h('h1', { id: 'page-title', text: campaign.title }),
        IP.h('p', {
          className: 'hero-card__lead',
          text: `${campaign.protagonist.name} · ${IP.titleCase(campaign.difficulty)} · ${IP.titleCase(campaign.status)} · save format ${campaign.saveFormatVersion}`,
        }),
        IP.h('div', { className: 'button-row' },
          IP.h('a', {
            className: 'button button--ghost',
            text: 'Campaign summary',
            attrs: { href: `#/campaign?id=${encodeURIComponent(campaign.id)}` },
          }),
          IP.h('a', { className: 'button button--ghost', text: 'All campaigns', attrs: { href: '#/saves' } }),
        ),
      ),
      integritySection,
      saveSlotsSection,
      recoverySection,
      abandonSection,
    );
  }

  async function renderSaveRecoveryView(container, context) {
    IP.clearNode(container);
    container.className = 'view view--saves';
    const params = new URLSearchParams(globalThis.location.hash.split('?')[1] || '');
    const requestedId = params.get('id');
    const allCampaigns = await context.campaignStore.listCampaigns();
    const campaign = requestedId ? await context.campaignStore.getCampaign(requestedId) : null;

    if (requestedId && !campaign) {
      container.append(
        IP.h('section', { className: 'card error-card' },
          IP.h('p', { className: 'eyebrow', text: 'CAMPAIGN NOT FOUND' }),
          IP.h('h1', { id: 'page-title', text: 'That local path is unavailable.' }),
          IP.h('a', { className: 'button button--primary', text: 'Open save center', attrs: { href: '#/saves' } }),
        ),
      );
      return;
    }

    if (campaign) {
      container.append(await campaignSaveManager(campaign, context));
    } else {
      container.append(
        IP.h(
          'header',
          { className: 'view-header' },
          IP.h('p', { className: 'eyebrow', text: 'MILESTONE 2B' }),
          IP.h('h1', { id: 'page-title', text: 'Save, export, import, and recover.' }),
          IP.h('p', {
            text: 'Every portable campaign is validated before use. Every destructive local operation either creates a recovery point first or refuses to proceed.',
          }),
        ),
        campaignPicker(allCampaigns),
      );
    }

    container.append(await importPanel(context));
    const quarantineSection = await quarantinedImportsSection(context);
    if (quarantineSection) container.append(quarantineSection);
  }

  return { renderSaveRecoveryView };
});

/* ===== src/js/views/archive-view.js ===== */
(function (root, factory) {
  const namespace = (root.InfinitePaths = root.InfinitePaths || {});
  const exported = factory(namespace);
  Object.assign(namespace, exported);
  if (typeof module !== 'undefined' && module.exports) module.exports = exported;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (IP) {
  'use strict';

  function summaryCell(label, value) {
    return IP.h('div', {}, IP.h('span', { text: label }), IP.h('strong', { text: String(value) }));
  }

  function archiveSummary(summary, item) {
    if (!summary) {
      return IP.h('p', {
        className: 'field-hint',
        text: item.status === 'created'
          ? 'This campaign has not entered its first playable scene yet.'
          : 'A detailed path report will be written the next time this compatible campaign is opened.',
      });
    }
    const objectives = summary.objectives || [];
    const companions = summary.companions || [];
    const completedObjectives = objectives.filter((objective) => objective.status === 'completed').length;
    const failedObjectives = objectives.filter((objective) => objective.status === 'failed').length;
    const companionLine = companions.length
      ? companions.map((companion) => `${companion.name}: ${IP.titleCase(companion.status)}`).join(' · ')
      : 'No companion outcomes recorded.';
    return IP.h(
      'section',
      { className: 'archive-summary' },
      item.ending?.summary
        ? IP.h('p', { className: 'archive-summary__ending', text: item.ending.summary })
        : IP.h('p', {
          className: 'field-hint',
          text: summary.progress?.sceneTitle
            ? `Current scene: ${summary.progress.sceneTitle}`
            : 'No ending has been reached.',
        }),
      IP.h('div', { className: 'archive-summary__grid' },
        summaryCell('Act', summary.progress?.act || 1),
        summaryCell('Scenes', summary.statistics?.scenesVisited || 0),
        summaryCell('Choices', summary.statistics?.choicesMade || 0),
        summaryCell('Objectives', `${completedObjectives} complete · ${failedObjectives} failed`),
        summaryCell('Clues', summary.clues?.length || 0),
        summaryCell('Injuries', summary.injuries?.length || 0),
        summaryCell('Health', summary.condition?.health ?? 100),
        ...(item.genre === 'mystery'
          ? [
            summaryCell('Case strength', summary.condition?.genreMetrics?.caseStrength ?? 0),
            summaryCell('Evidence integrity', summary.condition?.genreMetrics?.evidenceIntegrity ?? 0),
            summaryCell('Confidence', summary.condition?.genreMetrics?.publicConfidence ?? 0),
            summaryCell('Time left', summary.condition?.genreMetrics?.timeRemaining ?? 0),
          ]
          : [
            summaryCell('Pressure', summary.condition?.threatPressure ?? 0),
            summaryCell('Readiness', summary.condition?.evacuationReadiness ?? 0),
          ]),
      ),
      IP.h('p', { className: 'field-hint', text: companionLine }),
    );
  }

  async function renderArchiveView(container, context) {
    IP.clearNode(container);
    container.className = 'view';
    container.append(
      IP.h(
        'header',
        { className: 'view-header' },
        IP.h('p', { className: 'eyebrow', text: 'CAMPAIGN ARCHIVE' }),
        IP.h('h1', { id: 'page-title', text: 'Every path leaves a record.' }),
        IP.h('p', {
          text: 'Active, completed, failed, and abandoned campaigns retain their immutable identity, ending status, objective history, companion outcomes, important decisions, and versioned recovery data.',
        }),
      ),
    );

    const archives = await context.campaignStore.listArchives();
    if (!archives.length) {
      container.append(
        IP.h(
          'section',
          { className: 'card empty-state' },
          IP.h('h2', { text: 'No paths recorded yet.' }),
          IP.h('p', {
            text: 'Create a campaign and its archive identity will be committed in the same transaction as its first verified autosave.',
          }),
          IP.h('a', { className: 'button button--primary', text: 'Create first campaign', attrs: { href: '#/new' } }),
        ),
      );
      return;
    }

    const list = IP.h('div', { className: 'archive-list' });
    for (const item of archives) {
      const storedCampaign = await context.campaignStore.getCampaign(item.campaignId);
      const storyAvailable = Boolean(storedCampaign?.currentScene) && item.status !== 'abandoned';
      const terminal = ['completed', 'failed', 'abandoned'].includes(item.status);
      const summary = item.summary || storedCampaign?.summary || null;
      const statusText = item.outcome
        ? `${IP.titleCase(item.outcome)} · ${IP.titleCase(item.status)}`
        : IP.titleCase(item.status);
      list.append(
        IP.h(
          'article',
          { className: 'archive-card archive-card--expanded' },
          IP.h(
            'div',
            { className: 'archive-card__copy' },
            IP.h('p', { className: 'eyebrow', text: `${String(item.genre).toUpperCase()} · ${String(item.difficulty).toUpperCase()} · ${String(item.length).toUpperCase()}` }),
            IP.h('h2', { text: item.title }),
            IP.h('p', {
              text: `${item.protagonist} · created ${IP.formatDateTime(item.createdAt)} · updated ${IP.formatDateTime(item.updatedAt)}`,
            }),
            IP.h('p', {
              className: 'field-hint',
              text: `${item.contentPackId || 'unknown content pack'} @ ${item.contentPackVersion || 'unknown version'}`,
            }),
          ),
          IP.h('span', { className: 'archive-card__status', text: statusText }),
          archiveSummary(summary, item),
          IP.h(
            'div',
            { className: 'button-row archive-card__actions' },
            IP.h('a', {
              className: 'button button--secondary',
              text: storyAvailable ? (terminal ? 'Read ending' : 'Continue story') : 'Open campaign record',
              attrs: { href: `#/${storyAvailable ? 'play' : 'campaign'}?id=${encodeURIComponent(item.campaignId)}` },
            }),
            IP.h('a', {
              className: 'button button--ghost',
              text: 'Saves & recovery',
              attrs: { href: `#/saves?id=${encodeURIComponent(item.campaignId)}` },
            }),
          ),
        ),
      );
    }
    container.append(list);
  }

  return { renderArchiveView };
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

  function buildDiagnostics(context, extras = {}) {
    const settingsStatus = context.settingsStore.status();
    const report = context.saveMaintenanceReport || {};
    return [
      `${context.appConfig.name} diagnostics`,
      `App version: ${context.appConfig.version}`,
      `Build: ${context.appConfig.buildId}`,
      `Milestone: ${context.appConfig.milestone}`,
      `Rules version: ${context.appConfig.rulesVersion}`,
      `Save format: ${context.appConfig.saveFormatVersion}`,
      `Database schema: ${context.appConfig.database.version}`,
      `Content schema: ${context.appConfig.contentSchemaVersion}`,
      `Narrative content: ${context.appConfig.narrativeContentVersion}`,
      `Route: ${context.currentRoute}`,
      `Network: ${context.networkOnline ? 'online' : 'offline'}`,
      `Standalone: ${IP.isStandalone() ? 'yes' : 'no'}`,
      `Service worker: ${context.serviceWorkerStatus.state} (${context.serviceWorkerStatus.detail})`,
      `IndexedDB: ${context.databaseStatus.state} (${context.databaseStatus.detail})`,
      `Active campaigns: ${context.activeCampaigns.length}`,
      `Maintenance checked: ${report.checkedCampaigns || 0}`,
      `Maintenance migrated: ${report.migratedCampaigns || 0}`,
      `Maintenance warnings: ${report.warnings?.length || 0}`,
      `Quarantined imports: ${extras.quarantinedImports ?? 'not checked'}`,
      `External content packs: ${extras.externalPacks ?? 'not checked'}`,
      `Enabled external packs: ${extras.enabledExternalPacks ?? 'not checked'}`,
      `Quarantined content packs: ${extras.quarantinedPacks ?? 'not checked'}`,
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

  async function renderSystemView(container, context) {
    IP.clearNode(container);
    container.className = 'view view--system';
    const quarantinedImports = context.databaseStatus.state === 'error'
      ? []
      : await context.campaignStore.listQuarantinedImports();
    const maintenance = context.saveMaintenanceReport || {};
    const packDiagnostics = await context.contentPackService.diagnostics();
    const campaigns = context.databaseStatus.state === 'error'
      ? []
      : await context.campaignStore.listCampaigns();

    const header = IP.h(
      'header',
      { className: 'view-header' },
      IP.h('p', { className: 'eyebrow', text: 'APPLICATION HEALTH' }),
      IP.h('h1', { id: 'page-title', text: 'System' }),
      IP.h('p', {
        text: 'Inspect the application shell, deterministic engine, installed Horror and Mystery content graphs, simulation matrix, local database, and save-integrity layer. These checks do not alter legitimate campaign state.',
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
        context.databaseStatus.state === 'ready' ? 'good' : context.databaseStatus.state === 'error' ? 'bad' : 'warn',
      ),
      diagnosticRow('Display mode', IP.isStandalone() ? 'Installed web app' : 'Browser tab'),
      diagnosticRow('Rules version', context.appConfig.rulesVersion),
      diagnosticRow('Save format', String(context.appConfig.saveFormatVersion)),
      diagnosticRow('Database schema', String(context.appConfig.database.version)),
      diagnosticRow('Content schema', String(context.appConfig.contentSchemaVersion)),
      diagnosticRow('Narrative content', context.appConfig.narrativeContentVersion),
      diagnosticRow('External content packs', `${packDiagnostics.externalPacks} installed · ${packDiagnostics.enabledExternalPacks} enabled`, packDiagnostics.incompatiblePacks.length ? 'warn' : 'good'),
      diagnosticRow('Pack holding area', String(packDiagnostics.quarantinedPackages), packDiagnostics.quarantinedPackages ? 'warn' : 'good'),
      diagnosticRow('Active campaigns', String(context.activeCampaigns.length)),
      diagnosticRow(
        'Save maintenance',
        `${maintenance.checkedCampaigns || 0} checked · ${maintenance.migratedCampaigns || 0} migrated · ${maintenance.warnings?.length || 0} warnings`,
        maintenance.warnings?.length ? 'warn' : 'good',
      ),
      diagnosticRow(
        'Future imports held safely',
        String(quarantinedImports.length),
        quarantinedImports.length ? 'warn' : 'good',
      ),
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
    const saveOutput = IP.h('div', {
      className: 'test-output',
      text: 'No campaign integrity scan has been run in this view.',
      attrs: { role: 'status', 'aria-live': 'polite' },
    });

    const checksCard = IP.h(
      'section',
      { className: 'card' },
      IP.h('h2', { text: 'Live integrity checks' }),
      IP.h('p', {
        text: 'Each check performs real work in the current browser rather than displaying a prewritten result.',
      }),
      IP.h(
        'div',
        { className: 'integrity-check' },
        IP.h('div', {},
          IP.h('h3', { text: 'Deterministic random state' }),
          IP.h('p', { text: 'Compares two independent generators and verifies snapshot restoration.' }),
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
                if (!equal || !restoredMatch) throw new Error('Generator sequences diverged.');
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
        IP.h('div', {},
          IP.h('h3', { text: 'IndexedDB round trip' }),
          IP.h('p', { text: 'Writes a temporary token, reads it back, verifies it, and removes it.' }),
        ),
        IP.h('button', {
          className: 'button button--secondary',
          text: 'Run storage check',
          attrs: { type: 'button', disabled: context.databaseStatus.state === 'error' },
          on: {
            click: async (event) => {
              const button = event.currentTarget;
              button.disabled = true;
              storageOutput.textContent = 'Checking local database…';
              storageOutput.dataset.tone = 'neutral';
              try {
                const result = await context.database.healthCheck();
                storageOutput.textContent = `Passed at ${IP.formatDateTime(result.checkedAt)}. Temporary test data was removed.`;
                storageOutput.dataset.tone = 'good';
              } catch (error) {
                storageOutput.textContent = `Failed: ${String(error.message || error)}`;
                storageOutput.dataset.tone = 'bad';
              } finally {
                button.disabled = context.databaseStatus.state === 'error';
              }
            },
          },
        }),
        storageOutput,
      ),
      IP.h(
        'div',
        { className: 'integrity-check' },
        IP.h('div', {},
          IP.h('h3', { text: 'Campaign save envelopes' }),
          IP.h('p', {
            text: 'Recomputes checksums for campaign identity, archive records, save slots, and local recovery points.',
          }),
        ),
        IP.h('button', {
          className: 'button button--secondary',
          text: 'Scan all campaigns',
          attrs: { type: 'button', disabled: context.databaseStatus.state === 'error' },
          on: {
            click: async (event) => {
              const button = event.currentTarget;
              button.disabled = true;
              saveOutput.textContent = 'Recomputing local save checksums…';
              saveOutput.dataset.tone = 'neutral';
              try {
                const report = await context.saveService.scanAllCampaigns();
                saveOutput.textContent = report.total
                  ? `${report.healthy} of ${report.total} campaign${report.total === 1 ? '' : 's'} passed; ${report.unhealthy} need recovery review.`
                  : 'Passed. No campaigns are stored yet.';
                saveOutput.dataset.tone = report.unhealthy ? 'bad' : 'good';
              } catch (error) {
                saveOutput.textContent = `Failed: ${String(error.message || error)}`;
                saveOutput.dataset.tone = 'bad';
              } finally {
                button.disabled = context.databaseStatus.state === 'error';
              }
            },
          },
        }),
        saveOutput,
      ),
    );


    const contentValidationOutput = IP.h('div', {
      className: 'test-output',
      text: 'No narrative graph validation has been run in this view.',
      attrs: { role: 'status', 'aria-live': 'polite' },
    });
    const simulationOutput = IP.h('pre', {
      className: 'narrative-inspector-output',
      text: 'No campaign simulation has been run in this view.',
      attrs: { role: 'status', 'aria-live': 'polite' },
    });
    const developerValidationCard = IP.h(
      'section',
      { className: 'card' },
      IP.h('p', { className: 'eyebrow', text: 'DEVELOPER VALIDATION' }),
      IP.h('h2', { text: 'Campaign graph and simulation' }),
      IP.h('p', {
        text: 'Validate every authored scene reference, then automatically play both Horror and Mystery with seven decision strategies across Story, Standard, Hard, and Brutal difficulty.',
      }),
      IP.h(
        'div',
        { className: 'integrity-check' },
        IP.h('div', {},
          IP.h('h3', { text: 'Narrative graph' }),
          IP.h('p', { text: 'Checks unique IDs, conditions, effects, destinations, reachability, and authored endings.' }),
        ),
        IP.h('button', {
          className: 'button button--secondary',
          text: 'Validate content graph',
          attrs: { type: 'button' },
          on: {
            click: () => {
              try {
                const reports = IP.listInstalledNarrativeContent().map((content) => IP.validateNarrativeContent(content));
                contentValidationOutput.textContent = `Passed. ${reports.map((report) => `${report.sceneCount} ${report.contentId.includes('mystery') ? 'Mystery' : 'Horror'} scenes, ${report.reachableScenes} reachable, ${report.endingCount} endings`).join(' · ')}.`;
                contentValidationOutput.dataset.tone = 'good';
              } catch (error) {
                contentValidationOutput.textContent = `Failed: ${String(error?.message || error)}`;
                contentValidationOutput.dataset.tone = 'bad';
              }
            },
          },
        }),
        contentValidationOutput,
      ),
      IP.h(
        'div',
        { className: 'integrity-check' },
        IP.h('div', {},
          IP.h('h3', { text: 'Automated campaign matrix' }),
          IP.h('p', { text: 'Runs 112 deterministic campaigns across two genres without writing any of them to your save database.' }),
        ),
        IP.h('button', {
          className: 'button button--secondary',
          text: 'Simulate 112 campaigns',
          attrs: { type: 'button' },
          on: {
            click: (event) => {
              const button = event.currentTarget;
              button.disabled = true;
              simulationOutput.textContent = 'Simulating campaign strategies…';
              simulationOutput.dataset.tone = 'neutral';
              try {
                const report = IP.runSimulationBatch({ campaignsPerCombination: 1, seedPrefix: 'DEVICE-M6' });
                const victories = report.runs.filter((run) => run.status === 'completed').length;
                const failures = report.runs.filter((run) => run.status === 'failed').length;
                const compact = {
                  passed: report.passed,
                  completedRuns: report.completedRuns,
                  victories,
                  failures,
                  endingsReached: Object.keys(report.endings).length,
                  endings: report.endings,
                  byGenre: report.byGenre,
                  byDifficulty: report.byDifficulty,
                  errors: report.errors,
                };
                simulationOutput.textContent = JSON.stringify(compact, null, 2);
                simulationOutput.dataset.tone = report.passed ? 'good' : 'bad';
              } catch (error) {
                simulationOutput.textContent = `Simulation failed: ${String(error?.message || error)}`;
                simulationOutput.dataset.tone = 'bad';
              } finally {
                button.disabled = false;
              }
            },
          },
        }),
        simulationOutput,
      ),
    );

    const narrativeOutput = IP.h('pre', {
      className: 'narrative-inspector-output',
      text: campaigns.length
        ? 'Select a campaign and inspect its current narrative state.'
        : 'No campaigns are stored yet.',
      attrs: { role: 'status', 'aria-live': 'polite' },
    });
    const campaignSelect = IP.h(
      'select',
      {
        id: 'narrative-inspector-campaign',
        className: 'select-input',
        attrs: { disabled: campaigns.length === 0 },
      },
      campaigns.map((campaign) => IP.h('option', {
        text: `${campaign.title} · ${IP.titleCase(campaign.status)}`,
        attrs: { value: campaign.id },
      })),
    );
    const narrativeInspectorCard = IP.h(
      'section',
      { className: 'card card--quiet' },
      IP.h('p', { className: 'eyebrow', text: 'DEVELOPER INSPECTION' }),
      IP.h('h2', { text: 'Narrative state inspector' }),
      IP.h('p', {
        text: 'Reads the active save without changing it. The report exposes the current scene, variant, flags, resources, relationship state, ending data, and serialized random-stream position.',
      }),
      campaignSelect,
      IP.h('button', {
        className: 'button button--secondary',
        text: 'Inspect selected campaign',
        attrs: { type: 'button', disabled: campaigns.length === 0 },
        on: {
          click: async (event) => {
            const button = event.currentTarget;
            button.disabled = true;
            narrativeOutput.textContent = 'Validating active save and narrative state…';
            narrativeOutput.dataset.tone = 'neutral';
            try {
              const report = await context.narrativeService.inspectCampaign(campaignSelect.value);
              narrativeOutput.textContent = JSON.stringify(report, null, 2);
              narrativeOutput.dataset.tone = 'good';
            } catch (error) {
              narrativeOutput.textContent = `Inspection failed: ${String(error?.message || error)}`;
              narrativeOutput.dataset.tone = 'bad';
            } finally {
              button.disabled = campaigns.length === 0;
            }
          },
        },
      }),
      narrativeOutput,
    );

    const contentPackCard = IP.h(
      'section',
      { className: 'card card--quiet' },
      IP.h('p', { className: 'eyebrow', text: 'CONTENT DELIVERY' }),
      IP.h('h2', { text: 'Installed content packs' }),
      IP.h('p', {
        text: `The catalog currently contains ${packDiagnostics.builtInPacks} built-in and ${packDiagnostics.externalPacks} locally installed pack version${packDiagnostics.externalPacks === 1 ? '' : 's'}. Exact versions remain available to campaigns even when disabled for new creation.`,
      }),
      IP.h('a', { className: 'button button--secondary', text: 'Open content-pack catalog', attrs: { href: '#/packs' } }),
    );

    const developerCard = IP.h(
      'section',
      { className: 'card card--quiet' },
      IP.h('p', { className: 'eyebrow', text: 'PROTECTED TOOLS' }),
      IP.h('h2', { text: 'Developer workshop' }),
      IP.h('p', {
        text: 'Open the hidden authoring and validation workspace. The local passphrase is PATHFINDER. Test previews never write to legitimate campaigns.',
      }),
      IP.h('a', { className: 'button button--secondary', text: 'Open developer workshop', attrs: { href: '#/developer' } }),
    );

    const toolsCard = IP.h(
      'section',
      { className: 'card card--quiet' },
      IP.h('h2', { text: 'Maintenance' }),
      IP.h('p', {
        text: 'Copy a plain-text diagnostic report, open save recovery, or ask the active service worker to check the deployed shell for a newer version.',
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
                await copyText(buildDiagnostics(context, {
                  quarantinedImports: quarantinedImports.length,
                  externalPacks: packDiagnostics.externalPacks,
                  enabledExternalPacks: packDiagnostics.enabledExternalPacks,
                  quarantinedPacks: packDiagnostics.quarantinedPackages,
                }));
                context.toast.show('Diagnostics copied.', { tone: 'success', duration: 3000 });
              } catch (error) {
                context.toast.show(`Could not copy diagnostics: ${String(error.message || error)}`, { tone: 'error' });
              }
            },
          },
        }),
        IP.h('a', { className: 'button button--secondary', text: 'Open save recovery', attrs: { href: '#/saves' } }),
        IP.h('button', {
          className: 'button button--secondary',
          text: 'Check for app update',
          attrs: { type: 'button', disabled: !context.serviceWorkerRegistration },
          on: { click: () => context.checkForUpdate() },
        }),
      ),
    );

    container.append(header, overviewCard, contentPackCard, checksCard, developerValidationCard, narrativeInspectorCard, developerCard, toolsCard);
  }

  return { buildDiagnostics, renderSystemView };
});

/* ===== src/js/views/content-packs-view.js ===== */
(function (root, factory) {
  const namespace = (root.InfinitePaths = root.InfinitePaths || {});
  const exported = factory(namespace);
  Object.assign(namespace, exported);
  if (typeof module !== 'undefined' && module.exports) module.exports = exported;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (IP) {
  'use strict';

  function detail(label, value) {
    return IP.h('div', { className: 'pack-detail' },
      IP.h('dt', { text: label }),
      IP.h('dd', { text: String(value) }),
    );
  }

  function sourceLabel(pack) {
    if (pack.kind !== 'fanfiction') return pack.kind === 'original' ? 'Project original' : 'User original';
    return `Private fanfiction · ${pack.sourceMaterial?.propertyName || 'source property'}`;
  }

  function renderStatus(pack) {
    if (pack.builtIn) return { label: 'Built in', tone: 'good' };
    if (!pack.compatible) return { label: 'Incompatible', tone: 'bad' };
    if (pack.missingDependencies.length) return { label: 'Dependency missing', tone: 'warn' };
    return pack.enabled ? { label: 'Enabled', tone: 'good' } : { label: 'Disabled', tone: 'neutral' };
  }

  async function renderContentPacksView(container, context) {
    IP.clearNode(container);
    container.className = 'view view--content-packs';
    const [catalog, quarantine] = await Promise.all([
      context.contentPackService.listCatalog(),
      context.contentPackStore.listQuarantine(),
    ]);
    let pendingPreview = null;

    const header = IP.h('header', { className: 'view-header' },
      IP.h('p', { className: 'eyebrow', text: 'LOCAL LIBRARIES' }),
      IP.h('h1', { id: 'page-title', text: 'Content Packs' }),
      IP.h('p', { text: 'Install private local story libraries from the iPhone Files app. Every package is parsed as inert JSON, checksum-verified, compatibility-checked, and pinned by exact version before it can create a campaign.' }),
    );

    const fileInput = IP.h('input', {
      id: 'content-pack-file',
      className: 'file-input',
      attrs: { type: 'file', accept: '.json,.ippack.json,application/json' },
    });
    const importOutput = IP.h('div', {
      className: 'pack-preview',
      text: 'Choose an .ippack.json file to validate it before installation.',
      attrs: { role: 'status', 'aria-live': 'polite' },
    });
    const actionRow = IP.h('div', { className: 'button-row' });

    function resetPreview(message = 'Choose an .ippack.json file to validate it before installation.') {
      pendingPreview = null;
      importOutput.textContent = message;
      importOutput.dataset.tone = 'neutral';
      IP.clearNode(actionRow);
    }

    async function analyzeSelectedFile() {
      resetPreview('Reading and validating the selected package…');
      const file = fileInput.files?.[0];
      if (!file) {
        resetPreview();
        return;
      }
      try {
        const rawText = await IP.readSelectedFile(file, context.appConfig.maximumPackImportBytes);
        pendingPreview = await context.contentPackService.analyzeImportText(rawText, file.name);
        if (pendingPreview.state === 'future') {
          importOutput.textContent = `${pendingPreview.header.title || file.name} uses a future package format. It will not be interpreted or installed by this version.`;
          importOutput.dataset.tone = 'warn';
          actionRow.append(IP.h('button', {
            className: 'button button--secondary', text: 'Preserve in holding area', attrs: { type: 'button' },
            on: { click: async () => {
              await context.contentPackService.quarantineFuture(pendingPreview);
              context.toast.show('Future content pack preserved without applying it.', { tone: 'success' });
              await renderContentPacksView(container, context);
            } },
          }));
          return;
        }
        const preview = pendingPreview;
        const verb = preview.state === 'replace' ? 'Replace exact version' : preview.state === 'update' ? 'Install alongside older version' : 'Install content pack';
        importOutput.textContent = `${preview.manifest.title} v${preview.manifest.version} passed package, file, narrative, generator, profile, dependency, and compatibility validation. ${preview.narrativeReport.sceneCount} scenes and ${preview.narrativeReport.endingCount} endings are ready.`;
        importOutput.dataset.tone = 'good';
        actionRow.append(IP.h('button', {
          className: 'button button--primary', text: verb, attrs: { type: 'button' },
          on: { click: async (event) => {
            const button = event.currentTarget;
            const replacing = preview.state === 'replace';
            if (replacing && !globalThis.confirm(`Replace ${preview.manifest.title} v${preview.manifest.version}? Infinite Paths will preserve the previous package as a recovery copy first.`)) return;
            button.disabled = true;
            try {
              await context.contentPackService.installPreview(preview, { replaceExisting: replacing, enable: true });
              context.toast.show(`${preview.manifest.title} v${preview.manifest.version} installed and enabled.`, { tone: 'success' });
              await renderContentPacksView(container, context);
            } catch (error) {
              importOutput.textContent = `Installation failed: ${String(error.message || error)}`;
              importOutput.dataset.tone = 'bad';
              button.disabled = false;
            }
          } },
        }));
      } catch (error) {
        pendingPreview = null;
        importOutput.textContent = `Rejected: ${String(error.message || error)}`;
        importOutput.dataset.tone = 'bad';
      }
    }

    fileInput.addEventListener('change', () => void analyzeSelectedFile());
    const importCard = IP.h('section', { className: 'card' },
      IP.h('p', { className: 'eyebrow', text: 'INSTALL FROM FILES' }),
      IP.h('h2', { text: 'Validate a local package' }),
      IP.h('p', { text: 'The selected file is inspected before any IndexedDB write. Imported text is never executed, injected as HTML, or fetched from the network.' }),
      fileInput,
      importOutput,
      actionRow,
    );

    const catalogList = IP.h('div', { className: 'pack-catalog' });
    for (const pack of catalog) {
      const status = renderStatus(pack);
      const actions = IP.h('div', { className: 'button-row pack-actions' });
      if (pack.runtime) {
        actions.append(IP.h('button', {
          className: 'button button--secondary',
          text: pack.enabled ? 'Disable for new campaigns' : 'Enable for new campaigns',
          attrs: { type: 'button', disabled: !pack.compatible || Boolean(pack.missingDependencies.length) },
          on: { click: async () => {
            try {
              await context.contentPackService.setEnabled(pack.id, pack.version, !pack.enabled);
              context.toast.show(`${pack.title} ${pack.enabled ? 'disabled' : 'enabled'} for new campaigns. Existing pinned campaigns are unchanged.`, { tone: 'success' });
              await renderContentPacksView(container, context);
            } catch (error) {
              context.toast.show(String(error.message || error), { tone: 'error', duration: 6000 });
            }
          } },
        }));
        actions.append(IP.h('button', {
          className: 'button button--secondary', text: 'Export package', attrs: { type: 'button' },
          on: { click: async () => {
            try {
              await context.contentPackService.exportPackage(pack.id, pack.version);
            } catch (error) {
              context.toast.show(String(error.message || error), { tone: 'error' });
            }
          } },
        }));
        actions.append(IP.h('button', {
          className: 'button button--danger', text: 'Remove local version', attrs: { type: 'button' },
          on: { click: async () => {
            try {
              const preview = await context.contentPackService.removalPreview(pack.id, pack.version);
              const dependencyText = [
                preview.dependentCampaigns.length ? `${preview.dependentCampaigns.length} campaign(s)` : null,
                preview.dependentPacks.length ? `${preview.dependentPacks.length} dependent pack(s)` : null,
              ].filter(Boolean).join(' and ');
              if (!preview.safe) {
                const forced = globalThis.confirm(`${pack.title} v${pack.version} is still required by ${dependencyText}. Forced removal will preserve a recovery copy, but affected campaigns will no longer play until this exact version is reinstalled. Continue?`);
                if (!forced) return;
                await context.contentPackService.removePackage(pack.id, pack.version, { force: true });
              } else {
                if (!globalThis.confirm(`Remove ${pack.title} v${pack.version}? A recovery copy will be preserved first.`)) return;
                await context.contentPackService.removePackage(pack.id, pack.version);
              }
              context.toast.show(`${pack.title} v${pack.version} removed. Unrelated packs and campaigns were not changed.`, { tone: 'success' });
              await renderContentPacksView(container, context);
            } catch (error) {
              context.toast.show(String(error.message || error), { tone: 'error', duration: 7000 });
            }
          } },
        }));
      }
      catalogList.append(IP.h('article', { className: 'card pack-card' },
        IP.h('div', { className: 'pack-card__heading' },
          IP.h('div', {}, IP.h('p', { className: 'eyebrow', text: sourceLabel(pack).toUpperCase() }), IP.h('h3', { text: pack.title })),
          IP.h('span', { className: 'status-pill', text: status.label, dataset: { tone: status.tone } }),
        ),
        IP.h('p', { text: pack.description }),
        IP.h('dl', { className: 'pack-details' },
          detail('Exact version', pack.version),
          detail('Pack ID', pack.id),
          detail('Genre', pack.genres.map((genre) => IP.titleCase(genre)).join(', ')),
          detail('Campaigns pinned', pack.campaignCount),
          detail('Files', pack.fileCount),
          detail('Distribution', pack.distribution.mode),
        ),
        pack.missingDependencies.length
          ? IP.h('p', { className: 'form-error', text: `Missing: ${pack.missingDependencies.map((dependency) => `${dependency.packId} ${dependency.minimumVersion}+`).join(', ')}` })
          : null,
        actions,
      ));
    }

    const catalogCard = IP.h('section', { className: 'stack-section' },
      IP.h('div', { className: 'section-heading' },
        IP.h('div', {}, IP.h('p', { className: 'eyebrow', text: 'CATALOG' }), IP.h('h2', { text: `${catalog.length} installed version${catalog.length === 1 ? '' : 's'}` })),
        IP.h('a', { className: 'button button--secondary', text: 'Create campaign', attrs: { href: '#/new' } }),
      ),
      catalogList,
    );

    const quarantineList = IP.h('div', { className: 'pack-catalog' });
    if (!quarantine.length) {
      quarantineList.append(IP.h('p', { className: 'empty-state', text: 'No future or recovery packages are being held.' }));
    } else {
      for (const record of quarantine) {
        quarantineList.append(IP.h('article', { className: 'card pack-card pack-card--quarantine' },
          IP.h('p', { className: 'eyebrow', text: 'HELD WITHOUT APPLYING' }),
          IP.h('h3', { text: record.header?.title || record.sourceFilename || 'Preserved content package' }),
          IP.h('p', { text: record.reason }),
          IP.h('p', { className: 'field-hint', text: `${IP.formatDateTime(record.createdAt)} · SHA-256 ${record.sha256.slice(0, 16)}…` }),
          IP.h('div', { className: 'button-row' },
            IP.h('button', { className: 'button button--secondary', text: 'Export preserved file', attrs: { type: 'button' }, on: { click: () => context.contentPackService.exportQuarantine(record.id) } }),
            IP.h('button', { className: 'button button--danger', text: 'Delete preserved file', attrs: { type: 'button' }, on: { click: async () => {
              if (!globalThis.confirm('Delete this preserved package from local storage?')) return;
              await context.contentPackService.deleteQuarantine(record.id);
              await renderContentPacksView(container, context);
            } } }),
          ),
        ));
      }
    }
    const quarantineCard = IP.h('section', { className: 'stack-section' },
      IP.h('p', { className: 'eyebrow', text: 'HOLDING AREA' }),
      IP.h('h2', { text: 'Future formats and recovery copies' }),
      IP.h('p', { text: 'These files remain inert and separate from the installed catalog. They can be exported intact or deleted deliberately.' }),
      quarantineList,
    );

    container.append(header, importCard, catalogCard, quarantineCard);
  }

  return { renderContentPacksView };
});

/* ===== src/js/views/developer-view.js ===== */
(function (root, factory) {
  const namespace = (root.InfinitePaths = root.InfinitePaths || {});
  const exported = factory(namespace);
  Object.assign(namespace, exported);
  if (typeof module !== 'undefined' && module.exports) module.exports = exported;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (IP) {
  'use strict';

  function output(text = 'No report generated.') {
    return IP.h('pre', {
      className: 'narrative-inspector-output',
      text,
      attrs: { role: 'status', 'aria-live': 'polite' },
    });
  }

  function contentLabel(content) {
    return `${IP.titleCase(content.genre)} · ${content.narrativeVersion}`;
  }

  function replaceSceneOptions(select, content) {
    IP.clearNode(select);
    for (const scene of content.scenes) {
      select.append(IP.h('option', {
        text: `${scene.act || '–'}.${scene.chapter || '–'} · ${scene.title}`,
        attrs: { value: scene.id },
      }));
    }
  }

  async function renderDeveloperView(container, context) {
    IP.clearNode(container);
    container.className = 'view view--developer';

    if (!IP.isDeveloperUnlocked()) {
      const passphrase = IP.h('input', {
        className: 'text-input',
        attrs: {
          type: 'password',
          autocomplete: 'off',
          placeholder: 'Developer passphrase',
          'aria-label': 'Developer passphrase',
        },
      });
      const message = IP.h('p', { className: 'form-message', text: 'Developer tools are locked.' });
      container.append(
        IP.h('header', { className: 'view-header' },
          IP.h('p', { className: 'eyebrow', text: 'PROTECTED WORKSPACE' }),
          IP.h('h1', { id: 'page-title', text: 'Developer Mode' }),
          IP.h('p', { text: 'This area exposes campaign truth and test-only controls. It never appears in ordinary navigation.' }),
        ),
        IP.h('section', { className: 'card' },
          IP.h('h2', { text: 'Unlock tools' }),
          IP.h('p', { text: 'Enter the project passphrase. Unlocking is stored only in this browser.' }),
          passphrase,
          IP.h('button', {
            className: 'button button--primary',
            text: 'Unlock developer mode',
            attrs: { type: 'button' },
            on: {
              click: () => {
                if (IP.unlockDeveloperMode(passphrase.value)) {
                  context.toast.show('Developer mode unlocked.', { tone: 'success' });
                  void renderDeveloperView(container, context);
                } else {
                  message.textContent = 'That passphrase is not valid.';
                  message.dataset.tone = 'bad';
                }
              },
            },
          }),
          message,
        ),
      );
      return;
    }

    const installedContent = IP.listInstalledNarrativeContent();
    const contentById = new Map(installedContent.map((content) => [content.id, content]));
    const campaigns = context.databaseStatus.state === 'error'
      ? []
      : await context.campaignStore.listCampaigns();
    const campaignById = new Map(campaigns.map((campaign) => [campaign.id, campaign]));
    const packDiagnostics = await context.contentPackService.diagnostics();

    const contentSelect = IP.h(
      'select',
      { className: 'select-input', attrs: { 'aria-label': 'Installed content library' } },
      installedContent.map((content) => IP.h('option', {
        text: contentLabel(content),
        attrs: { value: content.id },
      })),
    );
    const campaignSelect = IP.h(
      'select',
      { className: 'select-input', attrs: { disabled: campaigns.length === 0 } },
      campaigns.map((campaign) => IP.h('option', {
        text: `${IP.titleCase(campaign.genre)} · ${campaign.title} · ${IP.titleCase(campaign.status)}`,
        attrs: { value: campaign.id },
      })),
    );
    const sceneSelect = IP.h('select', { className: 'select-input', attrs: { disabled: campaigns.length === 0 } });
    const graphOutput = output();
    const campaignOutput = output(campaigns.length ? 'Choose an inspection action.' : 'No campaigns are stored yet.');
    const simulationOutput = output();

    function selectedContent() {
      return contentById.get(contentSelect.value) || installedContent[0];
    }

    function updateScenesForCampaign() {
      const campaign = campaignById.get(campaignSelect.value);
      if (!campaign) {
        IP.clearNode(sceneSelect);
        sceneSelect.disabled = true;
        return;
      }
      try {
        const content = IP.getNarrativeContentForCampaign(campaign);
        replaceSceneOptions(sceneSelect, content);
        sceneSelect.disabled = false;
      } catch (error) {
        IP.clearNode(sceneSelect);
        sceneSelect.disabled = true;
        campaignOutput.textContent = `Scene library unavailable: ${String(error?.message || error)}`;
        campaignOutput.dataset.tone = 'bad';
      }
    }

    if (campaigns.length) updateScenesForCampaign();
    campaignSelect.addEventListener('change', updateScenesForCampaign);

    const header = IP.h('header', { className: 'view-header' },
      IP.h('p', { className: 'eyebrow', text: 'MILESTONE 7' }),
      IP.h('h1', { id: 'page-title', text: 'Developer Workshop' }),
      IP.h('p', {
        text: 'Inspect every installed library, explain eligibility, preview scenes without saving, validate local pack delivery, export private fanfiction skeletons, and run deterministic simulations. Test previews cannot enter the campaign archive.',
      }),
    );

    const graphCard = IP.h('section', { className: 'card' },
      IP.h('h2', { text: 'Content validation and graph' }),
      IP.h('p', { text: 'Select an installed content library. Deep validation reports references, reachability, effect usage, conditions, endings, and orphaned nodes.' }),
      contentSelect,
      IP.h('div', { className: 'button-row' },
        IP.h('button', {
          className: 'button button--secondary',
          text: 'Run deep validation',
          attrs: { type: 'button' },
          on: {
            click: () => {
              try {
                const report = IP.validateContentDeep(selectedContent());
                graphOutput.textContent = JSON.stringify(report, null, 2);
                graphOutput.dataset.tone = report.passed ? 'good' : 'bad';
              } catch (error) {
                graphOutput.textContent = `Validation failed: ${String(error?.message || error)}`;
                graphOutput.dataset.tone = 'bad';
              }
            },
          },
        }),
        IP.h('button', {
          className: 'button button--secondary',
          text: 'Export scene graph',
          attrs: { type: 'button' },
          on: {
            click: async () => {
              const content = selectedContent();
              const graph = IP.mermaidSceneGraph(content);
              await IP.deliverTextFile(graph, `infinite-paths-${content.genre}-scene-graph.mmd`, 'text/plain');
              context.toast.show(`${IP.titleCase(content.genre)} scene graph exported.`, { tone: 'success' });
            },
          },
        }),
        IP.h('button', {
          className: 'button button--secondary',
          text: 'Export authoring template',
          attrs: { type: 'button' },
          on: {
            click: async () => {
              const content = selectedContent();
              const template = IP.createAuthoringTemplate();
              template.genre = content.genre;
              template.contentPackId = content.contentPackId;
              await IP.deliverJsonFile(template, `infinite-paths-${content.genre}-scene-template.json`);
              context.toast.show('Authoring template exported.', { tone: 'success' });
            },
          },
        }),
      ),
      graphOutput,
    );

    const packOutput = output(JSON.stringify(packDiagnostics, null, 2));
    const packCard = IP.h('section', { className: 'card' },
      IP.h('h2', { text: 'Content-pack delivery diagnostics' }),
      IP.h('p', { text: 'Inspect installed external versions and export authoring-only private pack skeletons. Skeletons contain manifests and empty structured data, not playable copyrighted prose.' }),
      IP.h('div', { className: 'button-row' },
        IP.h('a', { className: 'button button--secondary', text: 'Open pack catalog', attrs: { href: '#/packs' } }),
        ...IP.FANFICTION_PACK_SKELETONS.map((template) => IP.h('button', {
          className: 'button button--secondary',
          text: `Export ${template.propertyName} skeleton`,
          attrs: { type: 'button' },
          on: { click: async () => {
            const skeleton = IP.createFanfictionPackSkeleton(template.id);
            await IP.deliverJsonFile(skeleton, `${IP.safeFilename(template.propertyName)}-private-pack-skeleton.json`);
            context.toast.show(`${template.propertyName} authoring skeleton exported.`, { tone: 'success' });
          } },
        })),
      ),
      packOutput,
    );

    const inspectCard = IP.h('section', { className: 'card' },
      IP.h('h2', { text: 'Campaign truth and eligibility' }),
      IP.h('p', {
        text: 'Read the active save, choice prerequisites, hidden relationship state, immutable genre truth, and ending routes without changing the campaign.',
      }),
      campaignSelect,
      IP.h('div', { className: 'button-row' },
        IP.h('button', {
          className: 'button button--secondary',
          text: 'Explain current choices',
          attrs: { type: 'button', disabled: campaigns.length === 0 },
          on: { click: async () => {
            try {
              const session = await context.narrativeService.loadSession(campaignSelect.value);
              campaignOutput.textContent = JSON.stringify(IP.explainCurrentScene(session.campaign, session.activeSave.payload, session.content), null, 2);
              campaignOutput.dataset.tone = 'good';
            } catch (error) {
              campaignOutput.textContent = `Inspection failed: ${String(error?.message || error)}`;
              campaignOutput.dataset.tone = 'bad';
            }
          } },
        }),
        IP.h('button', {
          className: 'button button--secondary',
          text: 'Inspect ending eligibility',
          attrs: { type: 'button', disabled: campaigns.length === 0 },
          on: { click: async () => {
            try {
              const session = await context.narrativeService.loadSession(campaignSelect.value);
              campaignOutput.textContent = JSON.stringify(IP.buildEndingEligibilityReport(session.campaign, session.activeSave.payload, session.content), null, 2);
              campaignOutput.dataset.tone = 'good';
            } catch (error) {
              campaignOutput.textContent = `Inspection failed: ${String(error?.message || error)}`;
              campaignOutput.dataset.tone = 'bad';
            }
          } },
        }),
        IP.h('button', {
          className: 'button button--secondary',
          text: 'Inspect full state',
          attrs: { type: 'button', disabled: campaigns.length === 0 },
          on: { click: async () => {
            try {
              campaignOutput.textContent = JSON.stringify(await context.narrativeService.inspectCampaign(campaignSelect.value), null, 2);
              campaignOutput.dataset.tone = 'good';
            } catch (error) {
              campaignOutput.textContent = `Inspection failed: ${String(error?.message || error)}`;
              campaignOutput.dataset.tone = 'bad';
            }
          } },
        }),
      ),
      IP.h('h3', { text: 'Test-only scene preview' }),
      sceneSelect,
      IP.h('button', {
        className: 'button button--secondary',
        text: 'Preview selected scene',
        attrs: { type: 'button', disabled: campaigns.length === 0 },
        on: { click: async () => {
          try {
            const session = await context.narrativeService.loadSession(campaignSelect.value);
            const preview = IP.previewScene(session.campaign, session.activeSave.payload, sceneSelect.value, session.content);
            campaignOutput.textContent = JSON.stringify(preview, null, 2);
            campaignOutput.dataset.tone = 'warn';
          } catch (error) {
            campaignOutput.textContent = `Preview failed: ${String(error?.message || error)}`;
            campaignOutput.dataset.tone = 'bad';
          }
        } },
      }),
      campaignOutput,
    );

    const genreSelect = IP.h(
      'select',
      { className: 'select-input', attrs: { 'aria-label': 'Simulation genre' } },
      IP.h('option', { text: 'Horror', attrs: { value: 'horror' } }),
      IP.h('option', { text: 'Mystery', attrs: { value: 'mystery' } }),
    );
    const strategySelect = IP.h(
      'select',
      { className: 'select-input', attrs: { 'aria-label': 'Simulation strategy' } },
      IP.SIMULATION_STRATEGIES.map((id) => IP.h('option', { text: IP.titleCase(id), attrs: { value: id } })),
    );
    const simulationCard = IP.h('section', { className: 'card' },
      IP.h('h2', { text: 'Focused simulation' }),
      IP.h('p', { text: 'Run a reproducible two-campaign strategy sample for one genre without writing test campaigns to IndexedDB.' }),
      genreSelect,
      strategySelect,
      IP.h('button', {
        className: 'button button--secondary',
        text: 'Run focused matrix',
        attrs: { type: 'button' },
        on: { click: () => {
          try {
            const report = IP.runSimulationBatch({
              genres: [genreSelect.value],
              campaignsPerCombination: 2,
              strategies: [strategySelect.value],
              seedPrefix: `DEVICE-M6-${genreSelect.value}-${strategySelect.value}`,
            });
            simulationOutput.textContent = JSON.stringify(report, null, 2);
            simulationOutput.dataset.tone = report.passed ? 'good' : 'bad';
          } catch (error) {
            simulationOutput.textContent = `Simulation failed: ${String(error?.message || error)}`;
            simulationOutput.dataset.tone = 'bad';
          }
        } },
      }),
      simulationOutput,
    );

    const lockCard = IP.h('section', { className: 'card card--quiet' },
      IP.h('h2', { text: 'Leave developer mode' }),
      IP.h('p', { text: 'Locking removes the local unlock flag. It does not change campaigns or content.' }),
      IP.h('button', {
        className: 'button button--secondary',
        text: 'Lock developer tools',
        attrs: { type: 'button' },
        on: { click: () => {
          IP.lockDeveloperMode();
          context.toast.show('Developer mode locked.', { tone: 'success' });
          globalThis.location.hash = '#/system';
        } },
      }),
    );

    container.append(header, graphCard, packCard, inspectCard, simulationCard, lockCard);
  }

  return { renderDeveloperView };
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
      warning: 'Needs attention',
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
      this.campaignStore = new IP.CampaignStore(this.database);
      this.contentPackStore = new IP.ContentPackStore(this.database);
      this.contentPackService = new IP.ContentPackService(this.contentPackStore, this.campaignStore);
      this.saveService = new IP.SaveService(this.database, this.campaignStore);
      this.narrativeService = new IP.NarrativeService(this.campaignStore, this.saveService);
      this.lastCampaign = null;
      this.activeCampaigns = [];
      this.saveMaintenanceReport = null;
      this.contentPackReport = null;
      this.databaseStatus = statusRecord('pending', 'Opening local database.');
      this.serviceWorkerStatus = statusRecord('pending', 'Waiting to register offline shell.');
      this.serviceWorkerRegistration = null;
      this.networkOnline = navigator.onLine;
      this.currentRoute = 'home';
      this.updateToast = null;
      this.reloadedForWorker = false;
      this.cleanupSystemPreferenceWatcher = null;
      this.renderSequence = 0;

      this.router = new IP.HashRouter(this.appConfig.routes, (route, metadata) => {
        void this.renderRoute(route, { focus: !metadata.initial });
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

    async refreshCampaignData() {
      const [activeCampaigns, lastCampaign] = await Promise.all([
        this.campaignStore.listActiveCampaigns(),
        this.campaignStore.getLastCampaign(),
      ]);
      this.activeCampaigns = activeCampaigns;
      this.lastCampaign = lastCampaign || activeCampaigns[0] || null;
      return {
        activeCampaigns: [...this.activeCampaigns],
        lastCampaign: this.lastCampaign,
      };
    }

    async initializeDatabase() {
      try {
        await this.database.open();
        await this.database.setMeta('appVersion', this.appConfig.version);
        await this.database.setMeta('buildId', this.appConfig.buildId);
        await this.database.setMeta('saveFormatVersion', this.appConfig.saveFormatVersion);
        await this.database.healthCheck();
        this.contentPackReport = await this.contentPackService.initialize();
        this.saveMaintenanceReport = await this.saveService.initialize();
        await this.refreshCampaignData();

        const migrated = this.saveMaintenanceReport.migratedCampaigns;
        const warnings = this.saveMaintenanceReport.warnings.length;
        const detail = migrated
          ? `Local database is healthy. ${migrated} campaign${migrated === 1 ? '' : 's'} migrated with a recovery backup.`
          : warnings
            ? `Local database is healthy, but ${warnings} save warning${warnings === 1 ? '' : 's'} need review.`
            : 'Local database opened, save integrity initialized, and a round-trip check passed.';
        this.databaseStatus = statusRecord(warnings ? 'warning' : 'ready', detail);

        if (migrated) {
          this.toast.show(
            `${migrated} older campaign${migrated === 1 ? '' : 's'} upgraded safely.`,
            { tone: 'success', duration: 5000 },
          );
        }
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
      void this.renderRoute('settings', { focus: false });
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
        campaignStore: this.campaignStore,
        saveService: this.saveService,
        narrativeService: this.narrativeService,
        contentPackStore: this.contentPackStore,
        contentPackService: this.contentPackService,
        contentPackReport: this.contentPackReport,
        saveMaintenanceReport: this.saveMaintenanceReport,
        activeCampaigns: [...this.activeCampaigns],
        lastCampaign: this.lastCampaign,
        refreshCampaignData: async ({ rerender = true } = {}) => {
          const result = await this.refreshCampaignData();
          if (rerender) {
            this.renderCurrentRoute({ focus: false });
          }
          return result;
        },
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
      const routeGroup = ['new', 'campaign', 'play', 'saves'].includes(route) ? 'home' : route === 'packs' ? 'system' : route;
      const links = document.querySelectorAll('[data-route]');
      for (const link of links) {
        const active = link.dataset.route === routeGroup;
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
      void this.renderRoute(this.currentRoute, options);
    }

    async renderRoute(route, { focus = true } = {}) {
      const sequence = ++this.renderSequence;
      this.currentRoute = this.appConfig.routes.includes(route) ? route : 'home';
      this.updateNavigation(this.currentRoute);
      const context = this.buildContext();

      try {
        if (this.currentRoute === 'new') {
          await IP.renderCreateCampaignView(this.view, context);
        } else if (this.currentRoute === 'campaign') {
          await IP.renderCampaignView(this.view, context);
        } else if (this.currentRoute === 'play') {
          await IP.renderPlayView(this.view, context);
        } else if (this.currentRoute === 'saves') {
          await IP.renderSaveRecoveryView(this.view, context);
        } else if (this.currentRoute === 'archive') {
          await IP.renderArchiveView(this.view, context);
        } else if (this.currentRoute === 'settings') {
          await IP.renderSettingsView(this.view, context);
        } else if (this.currentRoute === 'system') {
          await IP.renderSystemView(this.view, context);
        } else if (this.currentRoute === 'packs') {
          await IP.renderContentPacksView(this.view, context);
        } else if (this.currentRoute === 'developer') {
          await IP.renderDeveloperView(this.view, context);
        } else {
          await IP.renderHomeView(this.view, context);
        }
      } catch (error) {
        if (sequence === this.renderSequence) {
          this.renderFatalView(error);
        }
        return;
      }

      if (sequence !== this.renderSequence) {
        return;
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

