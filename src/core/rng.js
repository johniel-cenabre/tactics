// Seeded, deterministic random number generator (mulberry32).
//
// The whole simulation draws randomness from a single RNG instance so that a
// match is fully reproducible from its seed. This is what makes the netcode and
// the Vitest suite reliable: given the same seed and the same sequence of
// commands, both peers (and the tests) compute identical outcomes.

function hashString(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(31, h) + str.charCodeAt(i);
    h = h >>> 0;
  }
  return h;
}

/** Returns a function yielding floats in [0, 1). */
export function createSeededRandom(seed) {
  let s = typeof seed === 'string' ? hashString(seed) : seed >>> 0;
  return function next() {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = Math.imul(s ^ (s >>> 15), s | 1);
    t = (t ^ (t >>> 7)) >>> 0;
    return t / 4294967296;
  };
}

/**
 * A small stateful RNG service. Systems call `rng.next()` / `rng.range()`
 * instead of Math.random so results are deterministic and swappable in tests.
 */
export class Rng {
  constructor(seed = Date.now()) {
    this.reseed(seed);
  }

  reseed(seed) {
    this.seed = seed;
    this._next = createSeededRandom(seed);
  }

  /** Float in [0, 1). */
  next() {
    return this._next();
  }

  /** Float in [min, max). */
  range(min, max) {
    return min + this._next() * (max - min);
  }

  /** Integer in [min, max] inclusive. */
  int(min, max) {
    return Math.floor(min + this._next() * (max - min + 1));
  }

  /** Random element of a non-empty array. */
  pick(arr) {
    return arr[Math.floor(this._next() * arr.length)];
  }

  /** In-place Fisher-Yates shuffle. */
  shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(this._next() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
}

export { hashString };
