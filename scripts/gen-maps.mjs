// One-off generator for story-mode maps. Emits validated JSON into src/data/maps/.
// Run: node scripts/gen-maps.mjs

import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { TileType as T } from '../src/world/tile-types.js';
import { validateMap } from '../src/world/map-format.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '..', 'src', 'data', 'maps');

// Deterministic PRNG so regenerating a map yields identical terrain.
function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const BLOCKED = new Set([T.TREE, T.WATER, T.ROCK]);

function grid(w, h, fill) {
  return Array.from({ length: h }, () => Array(w).fill(fill));
}

// Draw a horizontal band of a tile across [x0,x1] on row y.
function hband(type, y, x0, x1, tile) {
  for (let x = x0; x <= x1; x++) type[y][x] = tile;
}

function rect(type, x0, y0, x1, y1, tile) {
  for (let y = y0; y <= y1; y++)
    for (let x = x0; x <= x1; x++) type[y][x] = tile;
}

// Scatter `count` tiles of `tile` in region, avoiding already-special tiles.
function scatter(type, rng, tile, count, x0, y0, x1, y1, avoid = new Set([T.WATER, T.BASE_TOP, T.BASE_BOTTOM, T.CENTER])) {
  let placed = 0;
  let guard = count * 40;
  while (placed < count && guard-- > 0) {
    const x = x0 + Math.floor(rng() * (x1 - x0 + 1));
    const y = y0 + Math.floor(rng() * (y1 - y0 + 1));
    if (avoid.has(type[y][x])) continue;
    if (type[y][x] === tile) continue;
    type[y][x] = tile;
    placed++;
  }
}

// Guarantee unit tiles are walkable (never on trees/water/rock or a base block).
function clearForUnit(type, x, y) {
  if (BLOCKED.has(type[y][x]) || type[y][x] === T.BASE_TOP || type[y][x] === T.BASE_BOTTOM || type[y][x] === T.CENTER) {
    type[y][x] = T.GRASS;
  }
}

function buildUnits(type, list, { cpuOnBase = true } = {}) {
  const seen = new Set();
  const out = [];
  for (const u of list) {
    const key = `${u.x},${u.y}`;
    if (seen.has(key)) throw new Error(`Duplicate unit tile ${key} on map`);
    seen.add(key);
    clearForUnit(type, u.x, u.y);
    // Every CPU (player 2) unit stands on its own enemy base tile — except on
    // reach maps, where scattered base tiles would corrupt the reach target.
    if (u.player === 2 && cpuOnBase) type[u.y][u.x] = T.BASE_TOP;
    const entry = {
      player: u.player,
      class: u.class,
      // All units are level 1 except a tagged boss.
      level: u.tag === 'boss' ? (u.level ?? 1) : 1,
      x: u.x,
      y: u.y,
      facing: u.facing ?? (u.player === 2 ? { dx: 0, dy: 1 } : { dx: 0, dy: -1 }),
    };
    if (u.tag) entry.tag = u.tag;
    out.push(entry);
  }
  return out;
}

// A neutral plaza block anchored at the geometric center of the map.
function centerPlaza(type, w, h) {
  const cx = Math.floor(w / 2);
  const cy = Math.floor(h / 2);
  for (let y = cy - 1; y <= cy; y++)
    for (let x = cx - 1; x <= cx + 1; x++) type[y][x] = T.CENTER;
}

function finalize(name, w, h, type, units) {
  const map = { version: 1, name, w, h, type, height: grid(w, h, 0), units };
  const res = validateMap(map);
  if (!res.ok) throw new Error(`${name}: ${res.error}`);
  return map;
}

function heights(map, spec) {
  // spec: array of { x0,y0,x1,y1,val } elevation rects.
  for (const s of spec) {
    for (let y = s.y0; y <= s.y1; y++)
      for (let x = s.x0; x <= s.x1; x++) map.height[y][x] = s.val;
  }
  return map;
}

// Player base block anchored at the bottom, enemy base block at the top.
function playerBase(type, w, h, cols) {
  const cx = Math.floor(w / 2);
  const half = Math.floor(cols / 2);
  rect(type, cx - half, h - 2, cx - half + cols - 1, h - 1, T.BASE_BOTTOM);
}
function enemyBase(type, w, h, cols) {
  const cx = Math.floor(w / 2);
  const half = Math.floor(cols / 2);
  rect(type, cx - half, 0, cx - half + cols - 1, 1, T.BASE_TOP);
}

const maps = {};

/* ── Stage 3: Ashen Woods — boss hunt in dense forest ───────────────── */
(() => {
  const w = 21, h = 15, rng = mulberry32(0xA5E7);
  const type = grid(w, h, T.GRASS);
  playerBase(type, w, h, 4);
  // Forest walls funnel the squad up the middle.
  scatter(type, rng, T.TREE, 70, 0, 2, w - 1, h - 3);
  rect(type, 0, 6, 5, 8, T.TREE);
  rect(type, w - 6, 6, w - 1, 8, T.TREE);
  hband(type, 7, 8, 12, T.GRASS); // keep a central gap open
  scatter(type, rng, T.ROCK, 10, 0, 2, w - 1, h - 3);
  centerPlaza(type, w, h);
  const units = buildUnits(type, [
    { player: 2, class: 'hunter', level: 1, x: 4, y: 4 },
    { player: 2, class: 'bandit', level: 1, x: 16, y: 4 },
    { player: 2, class: 'knight', level: 2, x: 8, y: 3 },
    { player: 2, class: 'knight', level: 2, x: 12, y: 3 },
    { player: 2, class: 'mage', level: 2, x: 6, y: 2 },
    { player: 2, class: 'berserker', level: 3, x: 10, y: 1, tag: 'boss' },
  ]);
  maps['ashen-woods'] = finalize('Ashen Woods', w, h, type, units);
})();

/* ── Stage 4: Broken Bridge — survive the river assault ─────────────── */
(() => {
  const w = 19, h = 15, rng = mulberry32(0xB12D);
  const type = grid(w, h, T.GRASS);
  playerBase(type, w, h, 6);
  // River splits the field; two narrow bridges are the only crossings.
  hband(type, 4, 0, w - 1, T.WATER);
  hband(type, 5, 0, w - 1, T.WATER);
  type[4][4] = T.PATH; type[5][4] = T.PATH;
  type[4][14] = T.PATH; type[5][14] = T.PATH;
  scatter(type, rng, T.TREE, 22, 0, 9, w - 1, h - 3);
  scatter(type, rng, T.ROCK, 8, 2, 9, w - 2, h - 3);
  centerPlaza(type, w, h);
  const enemies = [
    { player: 2, class: 'lancer', x: 4, y: 3 },
    { player: 2, class: 'lancer', x: 14, y: 3 },
    { player: 2, class: 'werewolf', x: 3, y: 2 },
    { player: 2, class: 'werewolf', x: 15, y: 2 },
    { player: 2, class: 'hunter', x: 9, y: 1 },
    { player: 2, class: 'hunter', x: 6, y: 0 },
    { player: 2, class: 'assassin', x: 12, y: 0 },
  ];
  maps['broken-bridge'] = finalize('Broken Bridge', w, h, type, buildUnits(type, enemies));
})();

/* ── Stage 5: The Long March — push to the enemy base ───────────────── */
(() => {
  const w = 25, h = 17, rng = mulberry32(0xC0FE);
  const type = grid(w, h, T.GRASS);
  playerBase(type, w, h, 5);
  enemyBase(type, w, h, 5);
  // A serpentine of water + rock walls the players must weave through.
  rect(type, 0, 5, 16, 5, T.WATER);
  rect(type, 8, 10, 24, 10, T.WATER);
  rect(type, 6, 3, 6, 6, T.ROCK);
  rect(type, 18, 8, 18, 11, T.ROCK);
  scatter(type, rng, T.TREE, 40, 0, 2, w - 1, h - 3);
  centerPlaza(type, w, h);
  const units = buildUnits(type, [
    { player: 2, class: 'ranger', x: 5, y: 3 },
    { player: 2, class: 'ranger', x: 19, y: 3 },
    { player: 2, class: 'knight', x: 10, y: 6 },
    { player: 2, class: 'knight', x: 14, y: 6 },
    { player: 2, class: 'paladin', x: 12, y: 2 },
    { player: 2, class: 'mage', x: 8, y: 2 },
    { player: 2, class: 'mage', x: 16, y: 2 },
  ], { cpuOnBase: false });
  maps['the-long-march'] = finalize('The Long March', w, h, type, units);
})();

/* ── Stage 6: Envoy's Road — escort the envoy to the far base ───────── */
(() => {
  const w = 23, h = 15, rng = mulberry32(0xD00D);
  const type = grid(w, h, T.GRASS);
  playerBase(type, w, h, 4);
  enemyBase(type, w, h, 4);
  // Forest verges hem the road; ambushers wait in the trees.
  rect(type, 0, 3, 4, 11, T.TREE);
  rect(type, w - 5, 3, w - 1, 11, T.TREE);
  scatter(type, rng, T.TREE, 26, 5, 3, w - 6, h - 4);
  scatter(type, rng, T.ROCK, 10, 5, 3, w - 6, h - 4);
  centerPlaza(type, w, h);
  const units = buildUnits(type, [
    // The envoy is a pre-placed, fragile ally the player must keep alive.
    { player: 1, class: 'oracle', x: 11, y: 12, tag: 'envoy', facing: { dx: 0, dy: -1 } },
    { player: 2, class: 'assassin', x: 6, y: 8 },
    { player: 2, class: 'assassin', x: 16, y: 8 },
    { player: 2, class: 'hunter', x: 9, y: 5 },
    { player: 2, class: 'hunter', x: 13, y: 5 },
    { player: 2, class: 'lancer', x: 11, y: 3 },
    { player: 2, class: 'ninja', x: 8, y: 2 },
  ], { cpuOnBase: false });
  maps['envoys-road'] = finalize("Envoy's Road", w, h, type, units);
})();

/* ── Stage 7: Warlord's Gate — kill the warlord AND clear the guard ─── */
(() => {
  const w = 25, h = 17, rng = mulberry32(0xE111);
  const type = grid(w, h, T.GRASS);
  playerBase(type, w, h, 6);
  // Fortress walls (rock) with a central gate; elevated ramparts.
  rect(type, 6, 5, 18, 5, T.ROCK);
  type[5][11] = T.GRASS; type[5][12] = T.GRASS; type[5][13] = T.GRASS;
  rect(type, 6, 5, 6, 9, T.ROCK);
  rect(type, 18, 5, 18, 9, T.ROCK);
  scatter(type, rng, T.TREE, 30, 0, 6, w - 1, h - 3);
  centerPlaza(type, w, h);
  const units = buildUnits(type, [
    { player: 2, class: 'knight', level: 2, x: 9, y: 6 },
    { player: 2, class: 'knight', level: 2, x: 15, y: 6 },
    { player: 2, class: 'lancer', level: 2, x: 12, y: 6 },
    { player: 2, class: 'hunter', level: 2, x: 7, y: 3 },
    { player: 2, class: 'mage', level: 3, x: 17, y: 3 },
    { player: 2, class: 'samurai', level: 3, x: 10, y: 2 },
    { player: 2, class: 'samurai', level: 3, x: 14, y: 2 },
    { player: 2, class: 'barbarian', level: 3, x: 12, y: 1, tag: 'boss' },
  ]);
  maps['warlords-gate'] = finalize("Warlord's Gate", w, h, type, units);
})();

/* ── Stage 8: Sunken Keep — capture the central shrine (reach tiles) ── */
(() => {
  const w = 23, h = 17, rng = mulberry32(0xF222);
  const type = grid(w, h, T.GRASS);
  playerBase(type, w, h, 5);
  // A moat rings a raised keep; CENTER tiles are the capture objective.
  const cx = 11, cy = 8;
  for (let y = cy - 3; y <= cy + 3; y++)
    for (let x = cx - 3; x <= cx + 3; x++) {
      const edge = Math.abs(x - cx) === 3 || Math.abs(y - cy) === 3;
      if (edge) type[y][x] = T.WATER;
    }
  // Drawbridges across the moat.
  type[cy - 3][cx] = T.PATH; type[cy + 3][cx] = T.PATH;
  type[cy][cx - 3] = T.PATH; type[cy][cx + 3] = T.PATH;
  rect(type, cx - 1, cy - 1, cx + 1, cy + 1, T.CENTER);
  scatter(type, rng, T.TREE, 30, 0, 2, w - 1, h - 3);
  scatter(type, rng, T.ROCK, 10, 0, 2, w - 1, h - 3);
  centerPlaza(type, w, h);
  const units = buildUnits(type, [
    { player: 2, class: 'paladin', x: cx, y: cy },
    { player: 2, class: 'monk', x: cx - 1, y: cy },
    { player: 2, class: 'monk', x: cx + 1, y: cy },
    { player: 2, class: 'hunter', x: 4, y: 4 },
    { player: 2, class: 'hunter', x: 18, y: 4 },
    { player: 2, class: 'mage', x: 11, y: 3 },
    { player: 2, class: 'assassin', x: 6, y: 12 },
    { player: 2, class: 'assassin', x: 16, y: 12 },
  ], { cpuOnBase: false });
  maps['sunken-keep'] = finalize('Sunken Keep', w, h, type, units);
})();

/* ── Stage 9: Final Vigil — hold the line and protect the seer ──────── */
(() => {
  const w = 21, h = 17, rng = mulberry32(0x1333);
  const type = grid(w, h, T.GRASS);
  playerBase(type, w, h, 6);
  // A rocky redoubt around the seer; enemies pour in from three sides.
  rect(type, 5, 12, 15, 12, T.ROCK);
  type[12][9] = T.GRASS; type[12][10] = T.GRASS; type[12][11] = T.GRASS;
  scatter(type, rng, T.TREE, 30, 0, 2, w - 1, 10);
  scatter(type, rng, T.ROCK, 12, 0, 2, w - 1, 10);
  centerPlaza(type, w, h);
  const units = buildUnits(type, [
    { player: 1, class: 'shaman', x: 10, y: 14, tag: 'seer', facing: { dx: 0, dy: -1 } },
    { player: 2, class: 'werewolf', level: 2, x: 3, y: 8 },
    { player: 2, class: 'werewolf', level: 2, x: 17, y: 8 },
    { player: 2, class: 'berserker', level: 3, x: 10, y: 6 },
    { player: 2, class: 'hunter', level: 2, x: 6, y: 3 },
    { player: 2, class: 'hunter', level: 2, x: 14, y: 3 },
    { player: 2, class: 'ranger', level: 3, x: 10, y: 2 },
    { player: 2, class: 'assassin', level: 3, x: 2, y: 4 },
    { player: 2, class: 'assassin', level: 3, x: 18, y: 4 },
  ]);
  maps['final-vigil'] = finalize('Final Vigil', w, h, type, units);
})();

/* ── Stage 10: The Iron Throne — the last army stands (boss + wipe) ──── */
(() => {
  const w = 27, h = 19, rng = mulberry32(0x2444);
  const type = grid(w, h, T.GRASS);
  playerBase(type, w, h, 7);
  // Throne room: pillars (rock), reflecting pools (water), raised dais.
  for (let x = 6; x <= 20; x += 3) rect(type, x, 6, x, 7, T.ROCK);
  rect(type, 2, 9, 8, 9, T.WATER);
  rect(type, 18, 9, 24, 9, T.WATER);
  scatter(type, rng, T.TREE, 34, 0, 10, w - 1, h - 3);
  scatter(type, rng, T.ROCK, 10, 0, 10, w - 1, h - 3);
  centerPlaza(type, w, h);
  const units = buildUnits(type, [
    { player: 2, class: 'knight', level: 3, x: 8, y: 8 },
    { player: 2, class: 'knight', level: 3, x: 18, y: 8 },
    { player: 2, class: 'samurai', level: 3, x: 11, y: 7 },
    { player: 2, class: 'samurai', level: 3, x: 15, y: 7 },
    { player: 2, class: 'paladin', level: 3, x: 13, y: 6 },
    { player: 2, class: 'mage', level: 3, x: 6, y: 4 },
    { player: 2, class: 'mage', level: 3, x: 20, y: 4 },
    { player: 2, class: 'ranger', level: 3, x: 9, y: 2 },
    { player: 2, class: 'ranger', level: 3, x: 17, y: 2 },
    { player: 2, class: 'necromancer', level: 3, x: 13, y: 3, tag: 'boss' },
  ]);
  maps['iron-throne'] = finalize('The Iron Throne', w, h, type, units);
})();

for (const [slug, map] of Object.entries(maps)) {
  const file = join(OUT, `${slug}.json`);
  writeFileSync(file, JSON.stringify(map, null, 2) + '\n');
  console.log(`wrote ${slug}.json  (${map.w}x${map.h}, ${map.units.length} units)`);
}
