import { describe, it, expect } from 'vitest';
import { Rng, createSeededRandom } from '../src/core/rng.js';

describe('seeded rng', () => {
  it('is deterministic for a given seed', () => {
    const a = new Rng(12345);
    const b = new Rng(12345);
    const seqA = Array.from({ length: 20 }, () => a.next());
    const seqB = Array.from({ length: 20 }, () => b.next());
    expect(seqA).toEqual(seqB);
  });

  it('produces different streams for different seeds', () => {
    const a = Array.from({ length: 10 }, ((r) => () => r.next())(new Rng(1)));
    const b = Array.from({ length: 10 }, ((r) => () => r.next())(new Rng(2)));
    expect(a).not.toEqual(b);
  });

  it('reseed resets the stream', () => {
    const r = new Rng(7);
    const first = [r.next(), r.next(), r.next()];
    r.reseed(7);
    const again = [r.next(), r.next(), r.next()];
    expect(first).toEqual(again);
  });

  it('int stays within inclusive bounds', () => {
    const r = new Rng(99);
    for (let i = 0; i < 200; i++) {
      const v = r.int(3, 6);
      expect(v).toBeGreaterThanOrEqual(3);
      expect(v).toBeLessThanOrEqual(6);
    }
  });

  it('string seeds are stable', () => {
    const f = createSeededRandom('hello');
    const g = createSeededRandom('hello');
    expect(f()).toBe(g());
  });
});
