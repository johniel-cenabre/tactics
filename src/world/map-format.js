// Serialize / deserialize hand-authored maps for the map editor and story mode.
// path, base coords, and centerTiles are derived on load — not stored in JSON.

import { TileType } from './tile-types.js';
import { CLASS_KEYS } from '../data/classes.js';
import { defaultFacing } from '../sim/unit.js';

const TILE_VALUES = new Set(Object.values(TileType));
const CLASS_SET = new Set(CLASS_KEYS);

const BLOCKED = new Set([TileType.TREE, TileType.WATER, TileType.ROCK]);

const MIN_DIM = 5;
const MAX_DIM = 50;

/** @returns {{ ok: true } | { ok: false, error: string }} */
export function validateMap(map) {
  if (!map || typeof map !== 'object') return { ok: false, error: 'Map is not an object.' };
  if (map.version !== 1) return { ok: false, error: `Unsupported map version: ${map.version}` };
  const w = map.w | 0;
  const h = map.h | 0;
  if (w < MIN_DIM || w > MAX_DIM || h < MIN_DIM || h > MAX_DIM) {
    return { ok: false, error: `Map size must be ${MIN_DIM}–${MAX_DIM} (got ${w}×${h}).` };
  }
  if (!Array.isArray(map.type) || map.type.length !== h) {
    return { ok: false, error: 'type must be an array of h rows.' };
  }
  if (!Array.isArray(map.height) || map.height.length !== h) {
    return { ok: false, error: 'height must be an array of h rows.' };
  }
  for (let y = 0; y < h; y++) {
    const typeRow = map.type[y];
    const heightRow = map.height[y];
    if (!Array.isArray(typeRow) || typeRow.length !== w) {
      return { ok: false, error: `type row ${y} must have length ${w}.` };
    }
    if (!Array.isArray(heightRow) || heightRow.length !== w) {
      return { ok: false, error: `height row ${y} must have length ${w}.` };
    }
    for (let x = 0; x < w; x++) {
      const t = typeRow[x];
      const ht = heightRow[x];
      if (!TILE_VALUES.has(t)) return { ok: false, error: `Invalid tile type at (${x},${y}): ${t}` };
      if (ht !== 0 && ht !== 1 && ht !== 2) {
        return { ok: false, error: `Invalid height at (${x},${y}): ${ht}` };
      }
    }
  }
  if (map.units != null) {
    if (!Array.isArray(map.units)) return { ok: false, error: 'units must be an array.' };
    for (let i = 0; i < map.units.length; i++) {
      const u = map.units[i];
      if (!u || typeof u !== 'object') return { ok: false, error: `units[${i}] is invalid.` };
      if (u.player !== 1 && u.player !== 2) {
        return { ok: false, error: `units[${i}].player must be 1 or 2.` };
      }
      if (!CLASS_SET.has(u.class)) {
        return { ok: false, error: `units[${i}].class is unknown: ${u.class}` };
      }
      const level = u.level != null ? (u.level | 0) : 1;
      if (level < 1 || level > 3) {
        return { ok: false, error: `units[${i}].level must be 1–3.` };
      }
      const x = u.x | 0;
      const y = u.y | 0;
      if (x < 0 || x >= w || y < 0 || y >= h) {
        return { ok: false, error: `units[${i}] position (${x},${y}) out of bounds.` };
      }
      if (u.tag != null && typeof u.tag !== 'string') {
        return { ok: false, error: `units[${i}].tag must be a string.` };
      }
    }
  }
  return { ok: true };
}

/** Blank map: all GRASS, height 0, no units. */
export function createBlankMap(w, h, name = 'Untitled') {
  const type = Array.from({ length: h }, () => Array(w).fill(TileType.GRASS));
  const height = Array.from({ length: h }, () => Array(w).fill(0));
  return { version: 1, name, w, h, type, height, units: [] };
}

/**
 * Serialize a live world + units into the map JSON shape.
 * @param {object} world
 * @param {object[]} units
 * @param {string} [name]
 */
export function mapFromWorld(world, units = [], name = 'Untitled') {
  const type = world.type.map((row) => row.slice());
  const height = world.height.map((row) => row.slice());
  const unitList = units.map((u) => {
    const entry = {
      player: u.player,
      class: u.class,
      level: u.level != null ? u.level : 1,
      x: u.x,
      y: u.y,
      facing: u.facing ? { dx: u.facing.dx, dy: u.facing.dy } : defaultFacing(u.player),
    };
    if (u.tag) entry.tag = u.tag;
    return entry;
  });
  return {
    version: 1,
    name: name || 'Untitled',
    w: world.w,
    h: world.h,
    type,
    height,
    units: unitList,
  };
}

/**
 * Build a runtime `world` object from map JSON (same shape as createWorld()).
 * Derives path, base coords, and centerTiles.
 */
export function worldFromMap(map) {
  const result = validateMap(map);
  if (!result.ok) throw new Error(result.error);

  const { w, h } = map;
  const type = map.type.map((row) => row.slice());
  const height = map.height.map((row) => row.slice());
  const path = Array.from({ length: h }, () => Array(w).fill(false));

  const centerTiles = [];
  let topSumX = 0;
  let topSumY = 0;
  let topN = 0;
  let botSumX = 0;
  let botSumY = 0;
  let botN = 0;

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const t = type[y][x];
      path[y][x] = !BLOCKED.has(t);
      if (t === TileType.CENTER) centerTiles.push({ gx: x, gy: y });
      if (t === TileType.BASE_TOP) {
        topSumX += x;
        topSumY += y;
        topN++;
      }
      if (t === TileType.BASE_BOTTOM) {
        botSumX += x;
        botSumY += y;
        botN++;
      }
    }
  }

  const topBaseX = topN > 0 ? Math.round(topSumX / topN) : Math.floor(w / 2);
  const topBaseY = topN > 0 ? Math.round(topSumY / topN) : 0;
  const botBaseX = botN > 0 ? Math.round(botSumX / botN) : Math.floor(w / 2);
  const botBaseY = botN > 0 ? Math.round(botSumY / botN) : h - 1;

  return { w, h, path, height, type, topBaseX, topBaseY, botBaseX, botBaseY, centerTiles };
}

/** Units array from map JSON (plain placement descriptors, not live units). */
export function unitsFromMap(map) {
  const result = validateMap(map);
  if (!result.ok) throw new Error(result.error);
  return (map.units || []).map((u) => {
    const entry = {
      player: u.player,
      class: u.class,
      level: u.level != null ? (u.level | 0) : 1,
      x: u.x | 0,
      y: u.y | 0,
      facing: u.facing && (u.facing.dx != null || u.facing.dy != null)
        ? { dx: u.facing.dx | 0, dy: u.facing.dy | 0 }
        : defaultFacing(u.player),
    };
    if (u.tag) entry.tag = u.tag;
    return entry;
  });
}
