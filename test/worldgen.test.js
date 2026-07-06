import { describe, it, expect } from 'vitest';
import { createWorld, getCenterTiles, getEnemyBaseTiles } from '../src/world/worldgen.js';

const cfg = { w: 25, h: 17, centerPlazaRadius: 0.29, seed: 424242 };

describe('worldgen determinism', () => {
  it('produces an identical map for the same seed', () => {
    const a = createWorld(cfg);
    const b = createWorld(cfg);
    expect(a.w).toBe(cfg.w);
    expect(a.h).toBe(cfg.h);
    expect(a.type).toEqual(b.type);
    expect(a.height).toEqual(b.height);
    expect(a.path).toEqual(b.path);
  });

  it('produces a different map for a different seed', () => {
    const a = createWorld(cfg);
    const b = createWorld({ ...cfg, seed: cfg.seed + 1 });
    expect(a.type).not.toEqual(b.type);
  });

  it('has center and enemy-base tiles', () => {
    const w = createWorld(cfg);
    expect(getCenterTiles(w).length).toBeGreaterThan(0);
    expect(getEnemyBaseTiles(w, 1).length).toBeGreaterThan(0);
    expect(getEnemyBaseTiles(w, 2).length).toBeGreaterThan(0);
  });
});
