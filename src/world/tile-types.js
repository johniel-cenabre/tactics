// Tile enum + per-type render colors. Shared by worldgen, grid, and renderer.

export const TileType = {
  PATH: 0,
  GRASS: 1,
  TREE: 2,
  WATER: 3,
  ROCK: 4,
  BASE_TOP: 5,
  BASE_BOTTOM: 6,
  CENTER: 7,
};

export const TILE_COLORS = {
  [TileType.PATH]: 0x2d6b2d,
  [TileType.GRASS]: 0x2d4a2d,
  [TileType.TREE]: 0x1a3d1a,
  [TileType.WATER]: 0x1e5a9e,
  [TileType.ROCK]: 0x4a5a4a,
  [TileType.BASE_TOP]: 0x7a4a4a,
  [TileType.BASE_BOTTOM]: 0x4a5a7a,
  [TileType.CENTER]: 0xd4b84a,
};
