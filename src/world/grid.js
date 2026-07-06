// Pure grid services: walkability, line-of-sight, BFS reachability and paths,
// knockback resolution, and world<->tile coordinate mapping. No THREE, no DOM.

import { TileType } from './tile-types.js';
import { TILE_SIZE, MIN_REACHABLE_MOVES } from '../config.js';

const tileKey = (world, x, y) => y * world.w + x;

export function isWalkable(world, x, y) {
  if (x < 0 || x >= world.w || y < 0 || y >= world.h) return false;
  const t = world.type[y][x];
  if (t === TileType.TREE || t === TileType.WATER || t === TileType.ROCK) return false;
  return true;
}

/**
 * Push target N tiles away from attacker. Stops at bounds/obstacle/unit and
 * applies collision damage there.
 * @returns {{ newGx:number, newGy:number, collisionDamage:number }}
 */
export function getKnockbackResult(world, units, attacker, target, tilesToPush) {
  let curGx = target.x;
  let curGy = target.y;
  const dx = target.x - attacker.x;
  const dy = target.y - attacker.y;
  const stepDx = Math.abs(dx) >= Math.abs(dy) ? (dx > 0 ? 1 : dx < 0 ? -1 : 0) : 0;
  const stepDy = Math.abs(dy) > Math.abs(dx) ? (dy > 0 ? 1 : dy < 0 ? -1 : 0) : 0;
  if (stepDx === 0 && stepDy === 0) return { newGx: curGx, newGy: curGy, collisionDamage: 0 };

  let tilesPushed = 0;
  for (let i = 0; i < tilesToPush; i++) {
    const nextGx = curGx + stepDx;
    const nextGy = curGy + stepDy;
    const outOfBounds = nextGx < 0 || nextGx >= world.w || nextGy < 0 || nextGy >= world.h;
    const blocked = !isWalkable(world, nextGx, nextGy);
    const occupied = units.some((u) => u.hp > 0 && u.id !== target.id && u.x === nextGx && u.y === nextGy);
    if (outOfBounds || blocked || occupied) {
      const collisionDamage = Math.max(1, tilesPushed * 3 + Math.ceil((attacker.str || 0) * 0.3));
      return { newGx: curGx, newGy: curGy, collisionDamage };
    }
    curGx = nextGx;
    curGy = nextGy;
    tilesPushed++;
  }
  return { newGx: curGx, newGy: curGy, collisionDamage: 0 };
}

/** Tiles the line from (ax,ay) to (bx,by) passes through (Bresenham). */
export function getTilesOnLine(ax, ay, bx, by) {
  const cells = [];
  let x = ax;
  let y = ay;
  const x1 = bx;
  const y1 = by;
  const dx = Math.abs(x1 - x);
  const dy = Math.abs(y1 - y);
  const sx = x < x1 ? 1 : -1;
  const sy = y < y1 ? 1 : -1;
  let err = dx - dy;
  for (;;) {
    cells.push({ x, y });
    if (x === x1 && y === y1) break;
    const e2 = 2 * err;
    if (e2 > -dy) { err -= dy; x += sx; }
    if (e2 < dx) { err += dx; y += sy; }
  }
  return cells;
}

export function hasLineOfSight(world, ax, ay, bx, by) {
  const cells = getTilesOnLine(ax, ay, bx, by);
  for (let i = 1; i < cells.length - 1; i++) {
    const c = cells[i];
    if (!isWalkable(world, c.x, c.y)) return false;
  }
  return true;
}

export function hasActiveTempAgiDebuff(unit) {
  if (!unit || !unit.tempDebuff) return false;
  const td = unit.tempDebuff;
  if (td.agi == null || !(td.agi > 0)) return false;
  if (td.duration != null && td.duration <= 0) return false;
  return true;
}

/** BFS flood-fill of reachable tiles. Returns Map<tileKey, distance>. */
export function getReachable(world, startX, startY, maxMoves, units, movingUnit) {
  if (movingUnit && hasActiveTempAgiDebuff(movingUnit)) {
    maxMoves = Math.max(0, maxMoves);
  } else {
    maxMoves = Math.max(MIN_REACHABLE_MOVES, maxMoves);
  }
  const dist = new Map();
  dist.set(tileKey(world, startX, startY), 0);
  const queue = [{ x: startX, y: startY, d: 0 }];
  let qh = 0;
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  const blockEnemies = units != null && movingUnit != null;
  const enemyOccupiedKeys = blockEnemies
    ? new Set(units.filter((u) => u.hp > 0 && u.player !== movingUnit.player).map((u) => tileKey(world, u.x, u.y)))
    : null;
  while (qh < queue.length) {
    const { x, y, d } = queue[qh++];
    if (d >= maxMoves) continue;
    for (const [dx, dy] of dirs) {
      const nx = x + dx;
      const ny = y + dy;
      if (!isWalkable(world, nx, ny)) continue;
      if (blockEnemies && enemyOccupiedKeys.has(tileKey(world, nx, ny))) continue;
      const k = tileKey(world, nx, ny);
      if (dist.has(k)) continue;
      const nd = d + 1;
      dist.set(k, nd);
      queue.push({ x: nx, y: ny, d: nd });
    }
  }
  return dist;
}

/** Tiles within Manhattan distance <= range. Returns Map<tileKey, dist> (1..range). */
export function getTilesInManhattanRange(world, centerX, centerY, range) {
  const dist = new Map();
  const gxLo = Math.max(0, centerX - range);
  const gxHi = Math.min(world.w - 1, centerX + range);
  const gyLo = Math.max(0, centerY - range);
  const gyHi = Math.min(world.h - 1, centerY + range);
  for (let gy = gyLo; gy <= gyHi; gy++) {
    for (let gx = gxLo; gx <= gxHi; gx++) {
      const d = Math.abs(gx - centerX) + Math.abs(gy - centerY);
      if (d >= 1 && d <= range) dist.set(tileKey(world, gx, gy), d);
    }
  }
  return dist;
}

export function getPath(world, startX, startY, endX, endY, units, movingUnit) {
  if (startX === endX && startY === endY) return [{ x: startX, y: startY }];
  const enemyOccupiedKeys = new Set(
    units.filter((u) => u.hp > 0 && u.player !== movingUnit.player).map((u) => tileKey(world, u.x, u.y))
  );
  const parent = new Map();
  const queue = [{ x: startX, y: startY }];
  let qh = 0;
  parent.set(tileKey(world, startX, startY), null);
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  const canPass = (x, y) => isWalkable(world, x, y) && !enemyOccupiedKeys.has(tileKey(world, x, y));

  while (qh < queue.length) {
    const { x, y } = queue[qh++];
    if (x === endX && y === endY) {
      const pathArr = [];
      let cur = { x: endX, y: endY };
      while (cur) {
        pathArr.unshift(cur);
        cur = parent.get(tileKey(world, cur.x, cur.y));
      }
      return pathArr;
    }
    for (const [dx, dy] of dirs) {
      const nx = x + dx;
      const ny = y + dy;
      const k = tileKey(world, nx, ny);
      if (parent.has(k)) continue;
      if (!canPass(nx, ny)) continue;
      parent.set(k, { x, y });
      queue.push({ x: nx, y: ny });
    }
  }
  return null;
}

/**
 * Shortest path from start to any tile in targets (each {gx,gy}).
 * @returns {{ path: {x,y}[], target: {gx,gy} } | null}
 */
export function getPathToNearestOfTargets(world, startX, startY, targets, units, movingUnit) {
  if (!targets || targets.length === 0) return null;
  const sk = tileKey(world, startX, startY);
  const targetKeys = new Set();
  for (let i = 0; i < targets.length; i++) {
    const g = targets[i];
    if (g && g.gx != null && g.gy != null) targetKeys.add(tileKey(world, g.gx, g.gy));
  }
  if (targetKeys.size === 0) return null;
  if (targetKeys.has(sk)) return { path: [{ x: startX, y: startY }], target: { gx: startX, gy: startY } };

  const enemyOccupiedKeys = new Set(
    units.filter((u) => u.hp > 0 && u.player !== movingUnit.player).map((u) => tileKey(world, u.x, u.y))
  );
  const parent = new Map();
  const queue = [{ x: startX, y: startY }];
  let qh = 0;
  parent.set(sk, null);
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  const canPass = (x, y) => isWalkable(world, x, y) && !enemyOccupiedKeys.has(tileKey(world, x, y));

  while (qh < queue.length) {
    const { x, y } = queue[qh++];
    const k = tileKey(world, x, y);
    if (targetKeys.has(k)) {
      const pathArr = [];
      let cur = { x, y };
      while (cur) {
        pathArr.unshift(cur);
        cur = parent.get(tileKey(world, cur.x, cur.y));
      }
      return { path: pathArr, target: { gx: x, gy: y } };
    }
    for (let di = 0; di < dirs.length; di++) {
      const nx = x + dirs[di][0];
      const ny = y + dirs[di][1];
      const nk = tileKey(world, nx, ny);
      if (parent.has(nk)) continue;
      if (!canPass(nx, ny)) continue;
      parent.set(nk, { x, y });
      queue.push({ x: nx, y: ny });
    }
  }
  return null;
}

export function tileWorldHalfExtents(world) {
  return { hw: (world.w * TILE_SIZE) / 2, hh: (world.h * TILE_SIZE) / 2 };
}

export function worldPointToTileCoords(world, p) {
  const { hw, hh } = tileWorldHalfExtents(world);
  const gx = Math.floor((p.x + hw) / TILE_SIZE);
  const gy = Math.floor((p.z + hh) / TILE_SIZE);
  if (gx < 0 || gx >= world.w || gy < 0 || gy >= world.h) return null;
  return { gx, gy };
}

export { tileKey };
