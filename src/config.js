// Central configuration: immutable constants and the mutable runtime settings
// that the mode-select screen tweaks before a match starts.

/** Fixed rendering / gameplay constants. */
export const TILE_SIZE = 0.95;
export const BASE_HEIGHT = 0.35;

/** Minimum tiles a unit can move in one turn (waived by an active AGI debuff). */
export const MIN_REACHABLE_MOVES = 4;

/** Default match settings. Cloned into a mutable settings object at boot. */
export const DEFAULT_SETTINGS = {
  gridW: 35,
  gridH: 25,
  centerPlazaRadius: 0.29,
  maxTurns: 200,
  draftPicksPerPlayer: 7,
  moveDurationMs: 300,
};

/** Preset dimensions for the PvP "short" map. */
export const SHORT_MAP = {
  gridW: 27,
  gridH: 15,
  centerPlazaRadius: 0.35,
  maxTurns: 100,
};

export const DEV_MODE =
  typeof window !== 'undefined' &&
  (window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1' ||
    window.location.search.includes('dev=1'));

/** Create a fresh mutable settings object from the defaults. */
export function createSettings(overrides = {}) {
  return { ...DEFAULT_SETTINGS, ...overrides };
}
