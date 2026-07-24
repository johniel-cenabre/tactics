import { describe, it, expect } from 'vitest';
import { TileType } from '../src/world/tile-types.js';
import {
  createBlankMap,
  validateMap,
  mapFromWorld,
  worldFromMap,
  unitsFromMap,
} from '../src/world/map-format.js';

describe('map-format', () => {
  it('createBlankMap makes grass height-0 grid', () => {
    const map = createBlankMap(8, 6, 'Blank');
    expect(map.version).toBe(1);
    expect(map.w).toBe(8);
    expect(map.h).toBe(6);
    expect(map.name).toBe('Blank');
    expect(map.type).toHaveLength(6);
    expect(map.type[0]).toHaveLength(8);
    expect(map.type[0][0]).toBe(TileType.GRASS);
    expect(map.height[2][3]).toBe(0);
    expect(map.units).toEqual([]);
    expect(validateMap(map).ok).toBe(true);
  });

  it('validateMap rejects bad dimensions and tile enums', () => {
    expect(validateMap(null).ok).toBe(false);
    expect(validateMap({ version: 2, w: 8, h: 8 }).ok).toBe(false);
    expect(validateMap(createBlankMap(3, 8)).ok).toBe(false);
    const map = createBlankMap(8, 8);
    map.type[0][0] = 99;
    expect(validateMap(map).ok).toBe(false);
    const map2 = createBlankMap(8, 8);
    map2.height[0][0] = 5;
    expect(validateMap(map2).ok).toBe(false);
  });

  it('validateMap rejects out-of-bounds and unknown units', () => {
    const map = createBlankMap(8, 8);
    map.units = [{ player: 1, class: 'knight', level: 1, x: 20, y: 0 }];
    expect(validateMap(map).ok).toBe(false);
    map.units = [{ player: 1, class: 'notaclass', level: 1, x: 1, y: 1 }];
    expect(validateMap(map).ok).toBe(false);
    map.units = [{ player: 3, class: 'knight', level: 1, x: 1, y: 1 }];
    expect(validateMap(map).ok).toBe(false);
  });

  it('round-trips type/height through mapFromWorld / worldFromMap', () => {
    const map = createBlankMap(10, 8, 'Arena');
    map.type[0][4] = TileType.BASE_TOP;
    map.type[0][5] = TileType.BASE_TOP;
    map.type[7][4] = TileType.BASE_BOTTOM;
    map.type[7][5] = TileType.BASE_BOTTOM;
    map.type[3][4] = TileType.CENTER;
    map.type[3][5] = TileType.CENTER;
    map.type[2][2] = TileType.TREE;
    map.type[4][1] = TileType.WATER;
    map.type[5][5] = TileType.ROCK;
    map.type[4][4] = TileType.PATH;
    map.height[4][4] = 2;
    map.height[2][2] = 1;
    map.units = [
      { player: 1, class: 'knight', level: 2, x: 4, y: 7, facing: { dx: 0, dy: -1 }, tag: 'vip' },
      { player: 2, class: 'mage', level: 1, x: 5, y: 0, tag: 'boss' },
    ];

    const world = worldFromMap(map);
    expect(world.w).toBe(10);
    expect(world.h).toBe(8);
    expect(world.type[4][4]).toBe(TileType.PATH);
    expect(world.height[4][4]).toBe(2);
    expect(world.path[4][4]).toBe(true);
    expect(world.path[2][2]).toBe(false); // TREE
    expect(world.path[4][1]).toBe(false); // WATER
    expect(world.path[5][5]).toBe(false); // ROCK
    expect(world.centerTiles).toEqual([{ gx: 4, gy: 3 }, { gx: 5, gy: 3 }]);
    expect(world.topBaseY).toBe(0);
    expect(world.botBaseY).toBe(7);

    const placements = unitsFromMap(map);
    expect(placements[0].tag).toBe('vip');
    expect(placements[1].tag).toBe('boss');
    const again = mapFromWorld(world, placements, map.name);
    expect(again.type).toEqual(map.type);
    expect(again.height).toEqual(map.height);
    expect(again.units).toHaveLength(2);
    expect(again.units[0].class).toBe('knight');
    expect(again.units[0].level).toBe(2);
    expect(again.units[0].tag).toBe('vip');
    expect(again.units[1].class).toBe('mage');
    expect(again.units[1].tag).toBe('boss');
  });

  it('validateMap rejects non-string tags', () => {
    const map = createBlankMap(8, 8);
    map.units = [{ player: 1, class: 'knight', level: 1, x: 1, y: 1, tag: 42 }];
    expect(validateMap(map).ok).toBe(false);
  });

  it('derives path for walkable tile types', () => {
    const map = createBlankMap(6, 6);
    map.type[1][1] = TileType.PATH;
    map.type[1][2] = TileType.GRASS;
    map.type[1][3] = TileType.CENTER;
    map.type[2][1] = TileType.TREE;
    const world = worldFromMap(map);
    expect(world.path[1][1]).toBe(true);
    expect(world.path[1][2]).toBe(true);
    expect(world.path[1][3]).toBe(true);
    expect(world.path[2][1]).toBe(false);
  });
});
