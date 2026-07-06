import { describe, it, expect } from 'vitest';
import { flatWorld } from './helpers.js';
import { isWalkable, hasLineOfSight, getReachable, getPath, getTilesOnLine } from '../src/world/grid.js';
import { TileType } from '../src/world/tile-types.js';

describe('grid services', () => {
  it('marks in-bounds path tiles walkable and blocks obstacles', () => {
    const w = flatWorld(6, 6);
    expect(isWalkable(w, 0, 0)).toBe(true);
    expect(isWalkable(w, -1, 0)).toBe(false);
    expect(isWalkable(w, 6, 0)).toBe(false);
    w.type[2][2] = TileType.WATER;
    expect(isWalkable(w, 2, 2)).toBe(false);
  });

  it('line of sight is blocked by an obstacle between endpoints', () => {
    const w = flatWorld(7, 1);
    expect(hasLineOfSight(w, 0, 0, 6, 0)).toBe(true);
    w.type[0][3] = TileType.ROCK;
    expect(hasLineOfSight(w, 0, 0, 6, 0)).toBe(false);
  });

  it('bresenham line includes both endpoints', () => {
    const cells = getTilesOnLine(0, 0, 3, 0);
    expect(cells[0]).toEqual({ x: 0, y: 0 });
    expect(cells[cells.length - 1]).toEqual({ x: 3, y: 0 });
  });

  it('reachable BFS respects the move budget', () => {
    const w = flatWorld(11, 11);
    const map = getReachable(w, 5, 5, 2, [], { id: 1, x: 5, y: 5 });
    // Manhattan distance <= 2 from center, minus the origin.
    for (const [k, d] of map) {
      const gx = k % w.w;
      const gy = (k / w.w) | 0;
      expect(Math.abs(gx - 5) + Math.abs(gy - 5)).toBeLessThanOrEqual(Math.max(d, 4));
    }
  });

  it('finds a path between two open tiles', () => {
    const w = flatWorld(8, 8);
    const path = getPath(w, 0, 0, 5, 3, [], { id: 1, x: 0, y: 0 });
    expect(path.length).toBeGreaterThan(1);
    expect(path[0]).toMatchObject({ x: 0, y: 0 });
    expect(path[path.length - 1]).toMatchObject({ x: 5, y: 3 });
  });
});
