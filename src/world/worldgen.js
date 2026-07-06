// Deterministic world/map generation. Pure: takes explicit dimensions + seed and
// returns a plain `world` object. No THREE, no globals.
//
// world = {
//   w, h,
//   path:   boolean[h][w]  walkable corridor flag
//   height: number[h][w]   elevation 0..2
//   type:   number[h][w]   TileType enum
//   topBaseX/Y, botBaseX/Y,
//   centerTiles: {gx,gy}[]
// }

import { TileType } from './tile-types.js';
import { createSeededRandom } from '../core/rng.js';

/**
 * @param {object} opts
 * @param {number} opts.w grid width
 * @param {number} opts.h grid height
 * @param {number} opts.centerPlazaRadius fraction of min(w,h)
 * @param {number|string} [opts.seed] optional deterministic seed
 */
export function createWorld({ w, h, centerPlazaRadius, seed }) {
  const path = Array.from({ length: h }, () => Array(w).fill(false));
  const height = Array.from({ length: h }, () => Array(w).fill(0));
  const type = Array.from({ length: h }, () => Array(w).fill(TileType.GRASS));
  const rnd = seed != null ? createSeededRandom(seed) : () => Math.random();

  const centerX = Math.floor(w / 2);
  const centerY = Math.floor(h / 2);
  const topBaseX = centerX;
  const topBaseY = 0;
  const botBaseX = centerX;
  const botBaseY = h - 1;

  const baseHalfW = 2;
  const baseRows = 3;
  function setRegion(typeId, rowStart, rowEnd, colCenter) {
    for (let gy = rowStart; gy <= rowEnd; gy++) {
      if (gy < 0 || gy >= h) continue;
      for (let dx = -baseHalfW; dx <= baseHalfW; dx++) {
        const gx = colCenter + dx;
        if (gx < 0 || gx >= w) continue;
        path[gy][gx] = true;
        type[gy][gx] = typeId;
        height[gy][gx] = 1;
      }
    }
  }

  setRegion(TileType.BASE_TOP, topBaseY, topBaseY + baseRows - 1, topBaseX);
  setRegion(TileType.BASE_BOTTOM, botBaseY - baseRows + 1, botBaseY, botBaseX);
  setRegion(TileType.CENTER, centerY - 1, centerY + 1, centerX);

  const pathCells = new Set();
  const inCenterPlaza = (x, y) => Math.abs(x - centerX) <= 2 && Math.abs(y - centerY) <= 1;
  const addPath = (x, y) => {
    if (x < 0 || x >= w || y < 0 || y >= h) return;
    if (inCenterPlaza(x, y)) return;
    pathCells.add(y * w + x);
  };
  const cx = Math.floor(w / 2);
  const cy = Math.floor(h / 2);
  const radius = Math.min(w, h) * centerPlazaRadius;
  const numSamples = Math.max(60, (h + w) * 2);
  for (let arc = 0; arc < 2; arc++) {
    const centerXArc = arc === 0 ? cx - radius : cx + radius;
    const thetaStart = arc === 0 ? Math.PI / 2 : -Math.PI / 2;
    const thetaEnd = arc === 0 ? (Math.PI * 3) / 2 : Math.PI / 2;
    for (let i = 0; i <= numSamples; i++) {
      const t = i / numSamples;
      const theta = thetaStart + t * (thetaEnd - thetaStart);
      const px = centerXArc + radius * Math.cos(theta);
      const py = cy + radius * Math.sin(theta);
      const gx = Math.round(px);
      const gy = Math.round(py);
      addPath(gx, gy);
      addPath(gx + 1, gy);
      addPath(gx - 1, gy);
      addPath(gx, gy + 1);
      addPath(gx, gy - 1);
    }
  }
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  for (let dilate = 0; dilate < 1; dilate++) {
    const toAdd = [];
    pathCells.forEach((k) => {
      const x = k % w;
      const y = (k / w) | 0;
      for (const [dx, dy] of dirs) {
        const nx = x + dx;
        const ny = y + dy;
        if (nx < 0 || nx >= w || ny < 0 || ny >= h) continue;
        const nk = ny * w + nx;
        if (!pathCells.has(nk)) toAdd.push(nk);
      }
    });
    toAdd.forEach((k) => pathCells.add(k));
  }
  pathCells.forEach((k) => {
    const x = k % w;
    const y = (k / w) | 0;
    if (type[y][x] === TileType.BASE_TOP || type[y][x] === TileType.BASE_BOTTOM || type[y][x] === TileType.CENTER) return;
    path[y][x] = true;
    type[y][x] = TileType.PATH;
    height[y][x] = 1;
  });

  const leftArcMidX = Math.round(cx - radius * 1.6);
  const rightArcMidX = Math.round(cx + radius * 1.6);
  const leftArcX = Math.round(cx - radius);
  const rightArcX = Math.round(cx + radius);
  const bridgeHalfWidth = 1;
  for (let by = centerY - bridgeHalfWidth; by <= centerY + bridgeHalfWidth; by++) {
    if (by < 0 || by >= h) continue;
    for (let bx = leftArcMidX; bx <= rightArcMidX; bx++) {
      if (bx < 0 || bx >= w) continue;
      path[by][bx] = true;
      if (type[by][bx] !== TileType.CENTER && type[by][bx] !== TileType.BASE_TOP && type[by][bx] !== TileType.BASE_BOTTOM) {
        type[by][bx] = TileType.PATH;
      }
      height[by][bx] = Math.max(height[by][bx], 1);
    }
  }

  function fillPathStrip(yStart, yEnd, xStart, xEnd) {
    const y0 = Math.max(1, Math.min(yStart, yEnd));
    const y1 = Math.min(h - 2, Math.max(yStart, yEnd));
    const x0 = Math.max(1, Math.min(xStart, xEnd));
    const x1 = Math.min(w - 2, Math.max(xStart, xEnd));
    for (let yy = y0; yy <= y1; yy++) {
      for (let xx = x0; xx <= x1; xx++) {
        if (type[yy][xx] === TileType.BASE_TOP || type[yy][xx] === TileType.BASE_BOTTOM || type[yy][xx] === TileType.CENTER) continue;
        path[yy][xx] = true;
        type[yy][xx] = TileType.PATH;
        height[yy][xx] = 1;
      }
    }
  }
  const topBaseRows = 3;
  const botBaseRows = 3;
  fillPathStrip(topBaseY, topBaseY + topBaseRows - 1, leftArcX, topBaseX - 1);
  fillPathStrip(topBaseY, topBaseY + topBaseRows - 1, topBaseX + 1, rightArcX);
  fillPathStrip(botBaseY - botBaseRows + 1, botBaseY, leftArcX, botBaseX - 1);
  fillPathStrip(botBaseY - botBaseRows + 1, botBaseY, botBaseX + 1, rightArcX);

  setRegion(TileType.BASE_TOP, topBaseY, topBaseY + baseRows - 1, topBaseX);
  setRegion(TileType.BASE_BOTTOM, botBaseY - baseRows + 1, botBaseY, botBaseX);
  setRegion(TileType.CENTER, centerY - 1, centerY + 1, centerX);

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (path[y][x]) continue;
      if (type[y][x] === TileType.BASE_TOP || type[y][x] === TileType.BASE_BOTTOM || type[y][x] === TileType.CENTER) continue;
      const nearTopBase = Math.abs(x - topBaseX) <= 4 && Math.abs(y - topBaseY) <= 3;
      const nearBotBase = Math.abs(x - botBaseX) <= 4 && Math.abs(y - botBaseY) <= 3;
      const nearAnyBase = nearTopBase || nearBotBase;
      const r = rnd();
      if (r < 0.55 && !nearAnyBase) {
        type[y][x] = TileType.TREE;
        height[y][x] = 1 + Math.floor(rnd() * 2);
      } else if (r < 0.75 || (nearAnyBase && r < 0.5)) {
        type[y][x] = TileType.WATER;
        height[y][x] = 0;
      } else {
        type[y][x] = TileType.ROCK;
        height[y][x] = 1 + Math.floor(rnd() * 2);
      }
    }
  }

  const centerTiles = [];
  for (let gy = 0; gy < h; gy++) {
    for (let gx = 0; gx < w; gx++) {
      if (type[gy][gx] === TileType.CENTER) centerTiles.push({ gx, gy });
    }
  }

  return { w, h, path, height, type, topBaseX, topBaseY, botBaseX, botBaseY, centerTiles };
}

export function getBaseTiles(world, player, occupiedKeys) {
  const baseType = player === 1 ? TileType.BASE_BOTTOM : TileType.BASE_TOP;
  const out = [];
  for (let gy = 0; gy < world.h; gy++) {
    for (let gx = 0; gx < world.w; gx++) {
      if (world.type[gy][gx] !== baseType) continue;
      if (occupiedKeys && occupiedKeys.has(gy * world.w + gx)) continue;
      out.push({ gx, gy });
    }
  }
  return out;
}

export function getCenterTiles(world) {
  if (world.centerTiles && world.centerTiles.length > 0) return world.centerTiles;
  const out = [];
  for (let gy = 0; gy < world.h; gy++)
    for (let gx = 0; gx < world.w; gx++)
      if (world.type[gy][gx] === TileType.CENTER) out.push({ gx, gy });
  return out;
}

export function getEnemyBaseTiles(world, player) {
  const baseType = player === 1 ? TileType.BASE_TOP : TileType.BASE_BOTTOM;
  const out = [];
  for (let gy = 0; gy < world.h; gy++)
    for (let gx = 0; gx < world.w; gx++)
      if (world.type[gy][gx] === baseType) out.push({ gx, gy });
  return out;
}

/** Sort tiles by Manhattan distance to nearest center tile (closest first). */
export function sortTilesByDistanceToCenter(world, tiles) {
  const centerTiles = getCenterTiles(world);
  if (centerTiles.length === 0) return tiles;
  const dist = (t) => Math.min(...centerTiles.map((c) => Math.abs(t.gx - c.gx) + Math.abs(t.gy - c.gy)));
  return [...tiles].sort((a, b) => dist(a) - dist(b));
}
