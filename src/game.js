/**
 * Turn-based tile tactics game — Three.js (3D)
 * World: path from base to base (circular corridor), obstacles enclose the path.
 */

import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

let gridW = 35;
let gridH = 25;
let centerPlazaRadius = 0.29;
const TILE_SIZE = 0.95;
const BASE_HEIGHT = 0.35;
let maxTurns = 200;
let draftPicksPerPlayer = 7;
let moveDurationMs = 300;
const DEV_MODE = typeof window !== 'undefined' && (
  window.location.hostname === 'localhost' ||
  window.location.hostname === '127.0.0.1' ||
  window.location.search.includes('dev=1')
);

/** Seeded RNG for deterministic world generation (mulberry32). Returns a function that yields 0..1. */
function createSeededRandom(seed) {
  let s = typeof seed === 'string' ? hashString(seed) : (seed >>> 0);
  return function () {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = Math.imul(s ^ (s >>> 15), s | 1);
    t = (t ^ (t >>> 7)) >>> 0;
    return t / 4294967296;
  };
}
function hashString(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(31, h) + str.charCodeAt(i);
    h = h >>> 0;
  }
  return h;
}

/** AI draft preference: 'balanced' (default), 'random', 'tanky', 'aggressive', 'scout', 'ranged', 'caster', or 'custom'.
 *  When 'custom', use AI_DRAFT_CUSTOM_ORDER. Change at runtime via UI or set here. */
const AI_DRAFT_PREFERENCE_OPTIONS = [
  { value: 'balanced', label: 'Balanced (lineup mix)' },
  { value: 'tanky', label: 'Tanky (HP + VIT)' },
  { value: 'aggressive', label: 'Aggressive (STR + AGI)' },
  { value: 'scout', label: 'Scout (high AGI)' },
  { value: 'ranged', label: 'Ranged (DEX + range)' },
  { value: 'caster', label: 'Caster (INT + MP)' },
  { value: 'random', label: 'Random' },
  { value: 'custom', label: 'Custom order' },
];
/** When preference is 'custom', AI picks first available from this order (class keys). Filled after CLASS_KEYS. */
let AI_DRAFT_CUSTOM_ORDER = [];

/** Role buckets for balanced draft: each class appears in at most one. */
const BALANCED_ROLES = {
  tank: ['knight', 'berserker', 'werewolf', 'ghoul', 'barbarian'],
  melee: ['samurai', 'assassin', 'ninja', 'bandit', 'lancer'],
  support: ['paladin', 'monk', 'blacksmith', 'exorcist', 'oracle'],
  ranged: ['ranger', 'amazon', 'hunter', 'alchemist', 'cannibal'],
  caster: ['mage', 'witch', 'vampire', 'necromancer', 'shaman'],
};
/** Target count per role: computed from lineup size (see getBalancedTargets). */
const BALANCED_RATIOS = { tank: 2, melee: 2, support: 1, ranged: 1, caster: 1 };
/** classKey → role bucket (for draft AI). */
const CLASS_DRAFT_ROLE = {};
for (const [role, list] of Object.entries(BALANCED_ROLES)) {
  for (const ck of list) CLASS_DRAFT_ROLE[ck] = role;
}
function getBalancedTargets(lineupSize) {
  const n = Math.max(1, lineupSize);
  const keys = Object.keys(BALANCED_RATIOS);
  const total = keys.reduce((s, k) => s + (BALANCED_RATIOS[k] ?? 0), 0);
  const targets = {};
  let sum = 0;
  for (const k of keys) {
    const t = Math.floor((n * (BALANCED_RATIOS[k] ?? 0)) / total);
    targets[k] = t;
    sum += t;
  }
  let remainder = n - sum;
  const bySmallestFirst = [...keys].sort((a, b) => {
    if (targets[a] !== targets[b]) return targets[a] - targets[b];
    return (BALANCED_RATIOS[b] ?? 0) - (BALANCED_RATIOS[a] ?? 0);
  });
  for (let i = 0; remainder > 0 && i < bySmallestFirst.length; i++) {
    targets[bySmallestFirst[i]]++;
    remainder--;
  }
  return targets;
}

const TileType = {
  PATH: 0,
  GRASS: 1,
  TREE: 2,
  WATER: 3,
  ROCK: 4,
  BASE_TOP: 5,
  BASE_BOTTOM: 6,
  CENTER: 7,
};

const CLASS_KEYS = ['knight', 'mage', 'monk', 'ghoul', 'lancer', 'hunter', 'assassin', 'berserker', 'witch', 'ninja', 'samurai', 'werewolf', 'paladin', 'exorcist', 'bandit', 'ranger', 'blacksmith', 'alchemist', 'vampire', 'necromancer', 'barbarian', 'cannibal', 'shaman', 'oracle', 'amazon'];

AI_DRAFT_CUSTOM_ORDER = [...CLASS_KEYS];

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const CLASSES = {
  knight:     { name: 'Knight',     gender: 'male',   hp: 27, maxHp: 27, mp: 5,  maxMp: 5,  str: 14, agi: 8,  vit: 14, dex: 10, luk: 4,  int: 7,  range: 1 },
  mage:       { name: 'Mage',       gender: 'female', hp: 16, maxHp: 16, mp: 22, maxMp: 22, str: 4,  agi: 3,  vit: 5,  dex: 4,  luk: 13, int: 17, range: 1 },
  monk:       { name: 'Monk',       gender: 'male',   hp: 24, maxHp: 24, mp: 13, maxMp: 13, str: 10, agi: 10, vit: 12, dex: 9,  luk: 11, int: 10, range: 1 },
  ghoul:      { name: 'Ghoul',      gender: 'male',   hp: 23, maxHp: 23, mp: 6,  maxMp: 6,  str: 12, agi: 9,  vit: 9,  dex: 11, luk: 9,  int: 5,  range: 1 },
  lancer:     { name: 'Lancer',     gender: 'female', hp: 22, maxHp: 22, mp: 7,  maxMp: 7,  str: 13, agi: 11, vit: 10, dex: 7,  luk: 5,  int: 8,  range: 2 },
  hunter:     { name: 'Hunter',     gender: 'female', hp: 18, maxHp: 18, mp: 9,  maxMp: 9,  str: 7,  agi: 5,  vit: 7,  dex: 16, luk: 12, int: 5,  range: 8 },
  assassin:   { name: 'Assassin',   gender: 'female', hp: 20, maxHp: 20, mp: 10, maxMp: 10, str: 9,  agi: 14, vit: 6,  dex: 14, luk: 10, int: 4,  range: 1 },
  berserker:  { name: 'Berserker',  gender: 'male',   hp: 30, maxHp: 30, mp: 3,  maxMp: 3,  str: 15, agi: 7,  vit: 13, dex: 8,  luk: 6,  int: 1,  range: 1 },
  witch:      { name: 'Witch',      gender: 'female', hp: 16, maxHp: 16, mp: 24, maxMp: 24, str: 5,  agi: 6,  vit: 4,  dex: 5,  luk: 14, int: 14, range: 3 },
  ninja:      { name: 'Ninja',      gender: 'female', hp: 21, maxHp: 21, mp: 11, maxMp: 11, str: 8,  agi: 15, vit: 7,  dex: 12, luk: 8,  int: 9,  range: 1 },
  samurai:    { name: 'Samurai',    gender: 'male',   hp: 24, maxHp: 24, mp: 8,  maxMp: 8,  str: 11, agi: 12, vit: 8,  dex: 13, luk: 7,  int: 6,  range: 1 },
  werewolf:   { name: 'Werewolf',   gender: 'male',   hp: 25, maxHp: 25, mp: 4,  maxMp: 4,  str: 14, agi: 13, vit: 11, dex: 6,  luk: 6,  int: 3,  range: 1 },
  paladin:    { name: 'Paladin',    gender: 'male',   hp: 26, maxHp: 26, mp: 12, maxMp: 12, str: 10, agi: 8,  vit: 16, dex: 8,  luk: 10, int: 11, range: 1 },
  exorcist:   { name: 'Exorcist',   gender: 'male',   hp: 21, maxHp: 21, mp: 14, maxMp: 14, str: 7,  agi: 5,  vit: 9,  dex: 6,  luk: 15, int: 13, range: 1 },
  bandit:     { name: 'Bandit',     gender: 'male',   hp: 20, maxHp: 20, mp: 6,  maxMp: 6,  str: 9,  agi: 14, vit: 6,  dex: 14, luk: 13, int: 4,  range: 1 },
  ranger:     { name: 'Ranger',     gender: 'female', hp: 19, maxHp: 19, mp: 10, maxMp: 10, str: 8,  agi: 10, vit: 8,  dex: 12, luk: 7,  int: 6,  range: 5 },
  blacksmith: { name: 'Blacksmith', gender: 'female', hp: 25, maxHp: 25, mp: 8,  maxMp: 8,  str: 13, agi: 8,  vit: 12, dex: 11, luk: 12, int: 2,  range: 1 },
  alchemist:  { name: 'Alchemist',  gender: 'female', hp: 17, maxHp: 17, mp: 13, maxMp: 13, str: 6,  agi: 6,  vit: 10, dex: 5,  luk: 8,  int: 11, range: 5 },
  vampire:    { name: 'Vampire',    gender: 'female', hp: 18, maxHp: 18, mp: 16, maxMp: 16, str: 11, agi: 12, vit: 3,  dex: 4,  luk: 3,  int: 12, range: 1 },
  necromancer:{ name: 'Necromancer',gender: 'male',   hp: 20, maxHp: 20, mp: 20, maxMp: 20, str: 5,  agi: 4,  vit: 7,  dex: 3,  luk: 11, int: 15, range: 1 },
  barbarian:  { name: 'Barbarian',  gender: 'male',   hp: 31, maxHp: 31, mp: 4,  maxMp: 4,  str: 16, agi: 4,  vit: 15, dex: 6,  luk: 3,  int: 2,  range: 1 },
  cannibal:   { name: 'Cannibal',   gender: 'male',   hp: 22, maxHp: 22, mp: 7,  maxMp: 7,  str: 6,  agi: 11, vit: 2,  dex: 13, luk: 9,  int: 7,  range: 4 },
  shaman:     { name: 'Shaman',     gender: 'female', hp: 17, maxHp: 17, mp: 21, maxMp: 21, str: 4,  agi: 3,  vit: 3,  dex: 3,  luk: 16, int: 16, range: 4 },
  oracle:     { name: 'Oracle',     gender: 'female', hp: 19, maxHp: 19, mp: 19, maxMp: 19, str: 6,  agi: 7,  vit: 4,  dex: 10, luk: 14, int: 10, range: 1 },
  amazon:     { name: 'Amazon',     gender: 'female', hp: 23, maxHp: 23, mp: 5,  maxMp: 5,  str: 12, agi: 9,  vit: 11, dex: 7,  luk: 4,  int: 3,  range: 3 },
};

const DRAFT_VARIANCE_STAT_KEYS = ['hp', 'maxHp', 'mp', 'str', 'agi', 'vit', 'dex', 'luk', 'int'];
/** Precomputed stat variance per class (balanced draft tie-break). */
const CLASS_STAT_VARIANCE = {};
for (const key of CLASS_KEYS) {
  const c = CLASSES[key];
  if (!c) continue;
  const values = DRAFT_VARIANCE_STAT_KEYS.map((s) => c[s] ?? 0);
  const mean = values.reduce((a, b) => a + b, 0) / values.length;
  CLASS_STAT_VARIANCE[key] = values.reduce((sum, v) => sum + (v - mean) ** 2, 0) / values.length;
}

const CLASS_LOOK = {
  knight:     { primary: 0x696969, secondary: 0x8B4513, hair: 0xb27a01, cape: 0x333333, belt: 0x8B4513 },
  mage:       { primary: 0xFFFDD0, secondary: 0x333333, hair: 0xCBC3E3, cape: 0x4A0E4E },
  monk:       { primary: 0xFFFFE4, secondary: 0xF5F5F5, hair: 0x2c1810, belt: 0x0A0A0A },
  ghoul:      { primary: 0x008080, secondary: 0x654321, hair: 0x008080, skin: 0x008080 },
  lancer:     { primary: 0x305CDE, secondary: 0xFFFDD0, hair: 0xF1EAD2, cape: 0xDC143C },
  hunter:     { primary: 0x808000, secondary: 0x92400e, hair: 0x78866B, cape: 0xF5F5F5 },
  assassin:   { primary: 0x0F0E47, secondary: 0xF5F5F5, hair: 0x280137, belt: 0x888B8D },
  berserker:  { primary: 0x0A0A0A, secondary: 0x0F0E47, hair: 0x0A0A0A, cape: 0x111111 },
  witch:      { primary: 0xF5F5F5, secondary: 0x800020, hair: 0xFFFFE4, cape: 0x228B22 },
  ninja:      { primary: 0x04141c, secondary: 0x021945, hair: 0x0C1222 },
  samurai:    { primary: 0xD3D3D3, secondary: 0x36454F, hair: 0x1f2022 },
  werewolf:   { primary: 0x43464b, secondary: 0x24496b, hair: 0xC0C0C0, belt: 0x071f35 },
  paladin:    { primary: 0xFAF0BE, secondary: 0xFFF5EE, hair: 0xC4A484, cape: 0x4169E1, belt: 0x4169E1 },
  exorcist:   { primary: 0x3B3B3B, secondary: 0x3B3B3B, hair: 0xFFFAFA, cape: 0x818589 },
  bandit:     { primary: 0x8B3E31, secondary: 0x5C4033, hair: 0xDC143C, cape: 0x666699 },
  ranger:     { primary: 0xFFFAFA, secondary: 0xA68613, hair: 0xf4ae00, cape: 0xADFC6C, belt: 0xA68613 },
  blacksmith: { primary: 0xD3B683, secondary: 0x964B00, hair: 0xb27a01, apron: 0x964B00 },
  alchemist:  { primary: 0xFF69B4, secondary: 0xAA336A, hair: 0xFF007F, cape: 0x87CEEB },
  vampire:    { primary: 0xFEE3D4, secondary: 0xFEE3D4, hair: 0x131312, cape: 0x131312, apron: 0x131312 },
  necromancer:{ primary: 0x062e24, secondary: 0x062e24, hair: 0x71706E, cape: 0x062e24, belt: 0xAD8621 },
  barbarian:  { primary: 0xaf6e51, secondary: 0x5C4033, hair: 0x5C4033, belt: 0xa95b0e, skin: 0xaf6e51 },
  cannibal:   { primary: 0xaf6e51, secondary: 0x808080, hair: 0x5C4033, cape: 0xFFA500, belt: 0xFFA500, skin: 0xaf6e51 },
  shaman:     { primary: 0x313345, secondary: 0x425d8c, hair: 0x008080, cape: 0x4E9FE5, horns: 0xFFFAFA },
  oracle:     { primary: 0xFFFAFA, secondary: 0xFFFAFA, hair: 0x5C4033, cape: 0xFFFFFF, belt: 0xEFBF04, horns: 0xEFBF04 },
  amazon:     { primary: 0xaf6e51, secondary: 0xaf6e51, hair: 0x000000, cape: 0x05100e, belt: 0x000000, horns: 0x000000, skin: 0xaf6e51, apron: 0x05100e },
};

const CLASS_IMAGES = {
  knight:     'https://creator.nightcafe.studio/jobs/OlIWpAye2LeM5gPkAGEI/OlIWpAye2LeM5gPkAGEI--1--xc223.jpg',
  mage:       'https://media.craiyon.com/2025-08-13/bLqz0LbwSIynOcUHty4Maw.webp',
  monk:       'https://cdnb.artstation.com/p/assets/images/images/028/576/499/large/ahruna-art-oct17.jpg?1594859688',
  ghoul:      'https://i.pinimg.com/736x/d3/cc/41/d3cc41778d05dec0371a69e29659f792.jpg',
  lancer:     'https://i.redd.it/zolf64gpoa0c1.jpg',
  hunter:     'https://coolvibe.com/wp-content/uploads/2011/02/hunter.jpg',
  assassin:   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk2-NBPpPOU7duYgN_k_9oFKZ5hJjU28qyoA&s',
  berserker:  'https://entertainment.inquirer.net/files/2016/07/top_bg.jpg',
  witch:      'https://w0.peakpx.com/wallpaper/382/134/HD-wallpaper-evil-witch-witch-female-dress-white-hair-evil-black-woman-girl-darkness-anime-dark-beauty-lady-long-hair.jpg',
  ninja:      'https://i.pinimg.com/474x/02/88/60/0288609778e53701b7e64051d7164922.jpg',
  samurai:    'https://files.idyllic.app/files/static/3120390?width=256&optimizer=image',
  werewolf:   'https://i.pinimg.com/736x/1f/95/27/1f9527c6255465547d664f19dd11967c.jpg',
  paladin:    'https://upload-os-bbs.hoyolab.com/upload/2023/12/01/84522063/a6a130d65b61025d979eda3750b0abd4_2602645990799609868.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70',
  exorcist:   'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bdc0afb9-e917-4267-b7e6-2155f9c5c14c/detuach-b1b79b16-7fed-4175-b1a2-ca3d1bc6166b.jpg/v1/fill/w_1024,h_1449,q_75,strp/my_priest_by_domyzu_detuach-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9iZGMwYWZiOS1lOTE3LTQyNjctYjdlNi0yMTU1ZjljNWMxNGMvZGV0dWFjaC1iMWI3OWIxNi03ZmVkLTQxNzUtYjFhMi1jYTNkMWJjNjE2NmIuanBnIiwiaGVpZ2h0IjoiPD0xNDQ5Iiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiL3dtL2JkYzBhZmI5LWU5MTctNDI2Ny1iN2U2LTIxNTVmOWM1YzE0Yy9kb215enUtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.5ueq8PhVPSB7hz65z6Cok8mX7IGeIrsQzCOaVFpt1pU',
  bandit:     'https://i.pinimg.com/736x/6b/15/b0/6b15b06ae23f690e20968bc87c370831.jpg',
  ranger:     'https://i.redd.it/2nfikbmqpwoa1.jpg',
  blacksmith: 'https://images-ng.pixai.art/images/orig/489d970a-890e-4523-8f99-c0ba2d6bfeae',
  alchemist:  'https://pics.craiyon.com/2023-07-11/ddbb35d3d2614541a9ad13181838257d.webp',
  vampire:    'https://files.idyllic.app/files/static/2567599?width=256&optimizer=image',
  necromancer:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c77f367a-4886-467a-b509-a194cf9a6aca/dbq4hoj-c2811e28-2314-49ac-9c57-b2f7ab1ee170.jpg/v1/fill/w_1024,h_1434,q_75,strp/necromancer_by_johnathanchong_dbq4hoj-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQzNCIsInBhdGgiOiIvZi9jNzdmMzY3YS00ODg2LTQ2N2EtYjUwOS1hMTk0Y2Y5YTZhY2EvZGJxNGhvai1jMjgxMWUyOC0yMzE0LTQ5YWMtOWM1Ny1iMmY3YWIxZWUxNzAuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.vBO5eVep2-eoiZnpDxMvlWBsJ0_zfdGT_IAaPdqEv2k',
  barbarian:  'https://image.lexica.art/full_jpg/dd171d51-f518-4ae9-949b-23f5d7a157be',
  cannibal:   'https://i.pinimg.com/736x/de/57/d1/de57d1e7aa4dd2d8f052d48b06831cbd.jpg',
  shaman:     'https://w0.peakpx.com/wallpaper/350/203/HD-wallpaper-guy-shaman-skull-horns-anime-art-green-thumbnail.jpg',
  oracle:     'https://images.stockcake.com/public/a/3/d/a3d08448-237f-4c23-8660-43b615c9e3c9_large/desert-oracle-enchantress-stockcake.jpg',
  amazon:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTnWAK4nkfgm8v-Ab35e3lkKOPOGTJzprr1w&s',
};

const CLASS_RECORD = CLASS_KEYS.reduce((acc, k) => {
  acc[k] = { battles: 0, kills: 0, deaths: 0, wins: 0, losses: 0 };
  return acc;
}, /** @type {Record<string, { battles: number, kills: number, deaths: number, wins: number, losses: number }>} */ ({}));

function recordClassKill(killerUnit, victimUnit, unitsList) {
  if (!DEV_MODE) return;

  let killerClass = killerUnit?.class;
  if (killerUnit?.summonedBy != null && Array.isArray(unitsList)) {
    const summoner = unitsList.find((u) => u.id === killerUnit.summonedBy);
    if (summoner?.class) killerClass = summoner.class;
  }
  if (CLASS_KEYS.includes(killerClass) && CLASS_RECORD[killerClass]) {
    CLASS_RECORD[killerClass].kills++;
  }

  // Summoned-unit deaths do not affect class death records.
  if (victimUnit?.summonedBy != null) return;
  const victimClass = victimUnit?.class;
  if (CLASS_KEYS.includes(victimClass) && CLASS_RECORD[victimClass]) {
    CLASS_RECORD[victimClass].deaths++;
  }
}

function recordGameOver(unitsList, winningPlayer) {
  if (!DEV_MODE) return;
  for (const u of unitsList) {
    if (!u || !CLASS_RECORD[u.class]) continue;
    CLASS_RECORD[u.class].battles++;
    if (winningPlayer != null) {
      if (u.player === winningPlayer) CLASS_RECORD[u.class].wins++;
      else CLASS_RECORD[u.class].losses++;
    }
  }
  const table = CLASS_KEYS.map((k) => {
    const r = CLASS_RECORD[k];
    const total = r.wins + r.losses || 1;
    return {
      class: k,
      battles: r.battles,
      kills: r.kills,
      deaths: r.deaths,
      wins: r.wins,
      losses: r.losses,
      winRate: r.wins + r.losses > 0 ? (r.wins / total * 100).toFixed(1) + '%' : '-',
      lossRate: r.wins + r.losses > 0 ? (r.losses / total * 100).toFixed(1) + '%' : '-',
    };
  });
  console.table(table);
}

const CLASS_SKILLS = {
  knight: [
    { name: 'Brave', description: 'Gain +1 STR and +1 VIT for 2 turns.', cost: 3, target: 'self', range: 0, level: 2, effectKey: 'brave' },
    { name: 'Dominate', description: 'Steal 2 STR and 1 VIT from an enemy.', cost: 6, target: 'enemy', range: 1, level: 3, effectKey: 'dominate' },
  ],
  mage: [
    { name: 'Arcane Bolt', description: 'Deal INT-based damage to one enemy.', cost: 6, target: 'enemy', range: 6, level: 1, effectKey: 'arcaneBolt', type: 'spell' },
    { name: 'Mana Drain', description: 'Drain enemy MP based on INT.', cost: 3, target: 'enemy', range: 6, level: 2, effectKey: 'manaDrain', type: 'spell' },
  ],
  monk: [
    { name: 'Mantra', description: 'Gain LUK based on INT for both ally and self for 2 turns.', cost: 4, target: 'ally', range: 1, level: 2, effectKey: 'mantra' },
    { name: 'Chakra', description: 'Heal HP for both ally and self.', cost: 8, target: 'ally', range: 4, level: 3, effectKey: 'chakra' },
  ],
  ghoul: [
    { name: 'Weaken', description: 'Steal 1 VIT from an enemy.', cost: 3, target: 'enemy', range: 1, level: 2, effectKey: 'weaken' },
    { name: 'Feast', description: 'Deal STR-based damage to enemy and heal self.', cost: 4, target: 'enemy', range: 1, level: 3, effectKey: 'feast' },
  ],
  lancer: [
    { name: 'Impale', description: 'Reduce target\'s AGI by 2 for 2 turns.', cost: 4, target: 'enemy', range: 2, level: 2, effectKey: 'impale' },
    { name: 'Pierce', description: 'Deal STR-based damage through the defense.', cost: 6, target: 'enemy', range: 2, level: 3, effectKey: 'pierce' },
  ],
  hunter: [
    { name: 'Focus', description: 'Gain +3 DEX for 2 turns.', cost: 4, target: 'self', range: 0, level: 1, effectKey: 'focus' },
    { name: 'Snipe', description: 'Deal long-ranged, DEX-based damage to one enemy.', cost: 5, target: 'enemy', range: 12, level: 2, effectKey: 'snipe' },
  ],
  assassin: [
    { name: 'Cripple', description: 'Steal 1 AGI from an enemy.', cost: 4, target: 'enemy', range: 1, level: 2, effectKey: 'cripple' },
    { name: 'Execute', description: 'Deal AGI-based damage to one enemy.', cost: 6, target: 'enemy', range: 1, level: 3, effectKey: 'execute' },
  ],
  berserker: [
    { name: 'Berserk', description: 'Deal STR-based damage for -3 HP.', cost: 0, hpCost: 3, target: 'enemy', range: 1, level: 2, effectKey: 'berserk' },
    { name: 'Bloodlust', description: 'Gain STR and VIT based on lost HP for 1 turn.', cost: 5, target: 'self', range: 0, level: 3, effectKey: 'bloodlust' },
  ],
  witch: [
    { name: 'Hex', description: 'Steal 1 INT from an enemy.', cost: 5, target: 'enemy', range: 4, level: 1, effectKey: 'hex', type: 'spell' },
    { name: 'Drain', description: 'Deal INT-based damage to HP and MP and heal self.', cost: 8, target: 'enemy', range: 4, level: 2, effectKey: 'drain', type: 'spell' },
  ],
  ninja: [
    { name: 'Blind', description: 'Steal 1 DEX from an enemy.', cost: 4, target: 'enemy', range: 1, level: 2, effectKey: 'blind' },
    { name: 'Shuriken', description: 'Deal DEX-based ranged attack.', cost: 6, target: 'enemy', range: 4, level: 3, effectKey: 'shuriken' },
  ],
  samurai: [
    { name: 'Iaido', description: 'Gain +1 STR and +1 DEX for 2 turns.', cost: 4, target: 'self', range: 0, level: 2, effectKey: 'iaido' },
    { name: 'Chokuto', description: 'Deal STR+DEX-based damage to one enemy.', cost: 7, target: 'enemy', range: 1, level: 3, effectKey: 'chokuto' },
  ],
  werewolf: [
    { name: 'Bite', description: 'Deal STR+AGI-based damage to one enemy.', cost: 5, target: 'enemy', range: 1, level: 2, effectKey: 'bite' },
    { name: 'Howl', description: 'Gain +2 STR and +2 AGI for 2 turns.', cost: 6, target: 'self', range: 0, level: 3, effectKey: 'howl' },
  ],
  paladin: [
    { name: 'Sacrifice', description: 'Heal ally for -3 HP.', cost: 1, hpCost: 3, target: 'ally', range: 3, level: 2, effectKey: 'sacrifice' },
    { name: 'Judgement', description: 'Deal damage based on remaining HP.', cost: 6, target: 'enemy', range: 1, level: 3, effectKey: 'judgement', type: 'spell' },
  ],
  exorcist: [
    { name: 'Sanctuary', description: 'Gain +1 ALL stats for both ally and self for 3 turns.', cost: 5, target: 'ally', range: 4, level: 1, effectKey: 'sanctuary' },
    { name: 'Exorcise', description: 'Deal damage based on enemy lost HP.', cost: 6, target: 'enemy', range: 3, level: 2, effectKey: 'exorcise', type: 'spell' },
  ],
  bandit: [
    { name: 'Raid', description: 'Steal 2 LUK from an enemy.', cost: 3, target: 'enemy', range: 1, level: 2, effectKey: 'raid' },
    { name: 'Ambush', description: 'Deal LUK-based damage to one enemy.', cost: 4, target: 'enemy', range: 1, level: 3, effectKey: 'ambush' },
  ],
  ranger: [
    { name: 'Wind walk', description: 'Gain +3 AGI for 2 turns.', cost: 5, target: 'self', range: 0, level: 1, effectKey: 'windWalk' },
    { name: 'Power Shot', description: 'Deal knockback damage to one enemy.', cost: 7, target: 'enemy', range: 7, level: 3, effectKey: 'powerShot' },
  ],
  blacksmith: [
    { name: 'Forge', description: 'Gain +2 STR for both ally and self for 2 turns.', cost: 4, target: 'ally', range: 1, level: 2, effectKey: 'forge' },
    { name: 'Fortify', description: 'Gain +2 STR and +2 VIT for both ally and self for 2 turns.', cost: 5, target: 'ally', range: 2, level: 3, effectKey: 'fortify' },
  ],
  alchemist: [
    { name: 'Poison', description: 'Poison enemy for 2 turns.', cost: 5, target: 'enemy', range: 5, level: 1, effectKey: 'poison' },
    { name: 'Concoct', description: 'Deal INT-based damage and add to 50% to LUK', cost: 8, target: 'enemy', range: 7, level: 2, effectKey: 'concoct', type: 'spell' },
  ],
  vampire: [
    { name: 'Gaze', description: 'Reduce target\'s AGI and VIT by 1 for 3 turns', cost: 5, target: 'enemy', range: 4, level: 2, effectKey: 'gaze', type: 'spell' },
    { name: 'Blood Suck', description: 'Absorb enemy HP based on your MP', cost: 7, target: 'enemy', range: 1, level: 3, effectKey: 'bloodSuck' },
  ],
  necromancer: [
    { name: 'Debilitate', description: 'Steal target\'s 2 HP and 2 VIT for 2 turns', cost: 5, target: 'enemy', range: 5, level: 1, effectKey: 'debilitate', type: 'spell' },
    { name: 'Reanimate', description: 'Resurrect dead unit to your control', cost: 10, target: 'self', range: 0, level: 2, effectKey: 'reanimate' },
  ],
  barbarian: [
    { name: 'War Cry', description: 'Gain +3 VIT for 2 turns', cost: 2, target: 'self', range: 0, level: 1, effectKey: 'warCry' },
    { name: 'Bash', description: 'Reduce target\'s AGI to 0 for 2 turns', cost: 5, target: 'enemy', range: 1, level: 3, effectKey: 'bash' },
  ],
  cannibal: [
    { name: 'Gnaw', description: 'Deal STR based damage to heal self', cost: 3, target: 'enemy', range: 1, level: 2, effectKey: 'gnaw' },
    { name: 'Infect', description: 'Poison enemy for 3 turns', cost: 4, target: 'enemy', range: 6, level: 3, effectKey: 'infect' },
  ],
  shaman: [
    { name: 'Vodoo', description: 'Mirror damage for 2 turns', cost: 4, target: 'enemy', range: 6, level: 1, effectKey: 'vodoo', type: 'spell' },
    { name: 'Malediction', description: 'Deal INT+LUK-based damage to ALL stats for 2 turns', cost: 7, target: 'enemy', range: 6, level: 2, effectKey: 'malediction', type: 'spell' },
  ],
  oracle: [
    { name: 'Foresight', description: 'Gain +2 INT and +2 DEX for 2 turns', cost: 5, target: 'ally', range: 6, level: 1, effectKey: 'foresight' },
    { name: 'Overheal', description: 'Heal ally for 2 turns', cost: 8, target: 'ally', range: 6, level: 2, effectKey: 'overheal' },
  ],
  amazon: [
    { name: 'Skewer', description: 'Deal DEX-based damage to AGI for 2 turns ', cost: 4, target: 'enemy', range: 3, level: 2, effectKey: 'skewer' },
    { name: 'Rapid', description: 'Double attack for 1 turn', cost: 6, target: 'self', range: 0, level: 3, effectKey: 'rapid' },
  ],
};

function getEffectiveStat(unit, key) {
  const base = unit[key] != null ? unit[key] : 0;
  const buff = unit.tempBuff && unit.tempBuff[key] != null ? unit.tempBuff[key] : 0;
  const debuff = unit.tempDebuff && unit.tempDebuff[key] != null ? unit.tempDebuff[key] : 0;
  return base + buff - debuff;
}

function formatStatWithBuffs(unit, key) {
  const base = unit[key] != null ? unit[key] : 0;
  const buff = unit.tempBuff && unit.tempBuff[key] != null ? unit.tempBuff[key] : 0;
  const debuff = unit.tempDebuff && unit.tempDebuff[key] != null ? unit.tempDebuff[key] : 0;
  let html = String(base);
  if (buff > 0) html += ` <span class="stat-val-buff">+${buff}</span>`;
  if (debuff > 0) html += ` <span class="stat-val-debuff">-${debuff}</span>`;
  return html;
}

const SKILL_EFFECT_DISPLAY_NAMES = {
  brave: 'Brave', dominate: 'Dominate', arcaneBolt: 'Arcane Bolt', manaDrain: 'Mana Drain', mantra: 'Mantra', chakra: 'Chakra', weaken: 'Weaken', feast: 'Feast', impale: 'Impale', pierce: 'Pierce', focus: 'Focus', snipe: 'Snipe', execute: 'Execute', cripple: 'Cripple', berserk: 'Berserk', bloodlust: 'Bloodlust', hex: 'Hex', drain: 'Drain', shuriken: 'Shuriken', blind: 'Blind', iaido: 'Iaido', chokuto: 'Chokuto', bite: 'Bite', howl: 'Howl',
};
const skillEffectTitleCache = new Map();
function getSkillEffectDisplayTitle(effectKey) {
  let t = skillEffectTitleCache.get(effectKey);
  if (t !== undefined) return t;
  t = SKILL_EFFECT_DISPLAY_NAMES[effectKey]
    ?? effectKey.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase()).trim();
  skillEffectTitleCache.set(effectKey, t);
  return t;
}

/**
 * Vodoo (skill): caster keeps tempBuff.vodoo = cursed enemy unit id. When that caster loses HP from a hit,
 * linked enemy loses the same amount. Does not recurse (mirror damage does not trigger further vodoo).
 */
function applyVodooMirrorHpLoss(damagedUnit, hpLost, ctx) {
  if (!damagedUnit || hpLost <= 0) return;
  const list = ctx && ctx.units;
  if (!list || !list.length) return;
  const tb = damagedUnit.tempBuff;
  if (!tb || tb.vodoo == null || tb.duration != null && tb.duration <= 0) return;
  const victimId = damagedUnit.id;
  for (let i = 0; i < list.length; i++) {
    const w = list[i];
    if (!w || w.hp <= 0 || w.id === victimId) continue;
    if (tb.vodoo === w.id) {
      const deathFn = ctx.handleUnitDeath || ctx.vodooMirrorDeath;
      w.hp = Math.max(0, w.hp - hpLost);
      console.log('[DEBUFF]', `vodoo: ${hpLost} to ${w.name}`);
      if (ctx.showFloatingCombatText) ctx.showFloatingCombatText(w.x, w.y, String(hpLost), false, 'vodoo');
      if (ctx.updateUnitSlashVisibility) ctx.updateUnitSlashVisibility(w);
      if (w.hp <= 0 && deathFn) deathFn(w, damagedUnit);
      break;
    }
  }
}

function applySkillEffect(effectKey, unit, target, ctx) {
  const u = unit;
  const t = target;
  const skillDisplayName = getSkillEffectDisplayTitle(effectKey);
  if (ctx.showFloatingCombatText) ctx.showFloatingCombatText(u.x, u.y, skillDisplayName, false, 'skill-name');
  const skillName = skillDisplayName;
  const targetDesc = t ? `${t.name} (${t.class}, P${t.player})` : 'self';
  let skillDamage = null;
  const applyDamage = (victim, d, isHeal, isSpell) => {
    if (isHeal) {
      victim.hp = Math.min(victim.maxHp, victim.hp + d);
      if (ctx.showFloatingCombatText) ctx.showFloatingCombatText(victim.x, victim.y, `+${d}`, false, 'heal');
    } else {
      const isSelfDamage = victim === u;
      let isHit = true;
      if (!isSelfDamage && !isSpell) {
        const evasionMax = getEffectiveStat(victim, 'agi') * 0.7 + getEffectiveStat(victim, 'luk') * 0.3;
        const evasionRoll = Math.random() * Math.max(0.001, evasionMax);
        isHit = evasionRoll <= getEffectiveStat(u, 'dex');
      }
      if (isHit) {
        victim.hp = Math.max(0, victim.hp - d);
        if (victim !== u) skillDamage = d;
        if (ctx.showFloatingCombatText) ctx.showFloatingCombatText(victim.x, victim.y, String(d), false);
        if (ctx.updateUnitSlashVisibility) ctx.updateUnitSlashVisibility(victim);
        applyVodooMirrorHpLoss(victim, d, ctx);
        if (victim.hp <= 0 && ctx.handleUnitDeath) ctx.handleUnitDeath(victim, u);
      } else {
        if (ctx.showFloatingCombatText) ctx.showFloatingCombatText(victim.x, victim.y, 'MISS', true);
      }

      return isHit;
    }
  };
  const showStatChange = (gx, gy, text, isBuff) => {
    if (ctx.showFloatingCombatText) ctx.showFloatingCombatText(gx, gy, text, false, isBuff ? 'buff' : 'debuff');
  };
  switch (effectKey) {
    case 'brave': {
      const bVal = 1;
      u.tempBuff = { str: bVal, vit: bVal, duration: 3 };
      showStatChange(u.x, u.y, `+${bVal} STR, +${bVal} VIT`, true);
    } break;
    case 'dominate': {
      if (!t) break;
      const dValStr = 2;
      const dValVit = 1;
      t.str = Math.max(1, (t.str || 0) - dValStr); u.str = (u.str || 0) + dValStr;
      t.vit = Math.max(1, (t.vit || 0) - dValVit); u.vit = (u.vit || 0) + dValVit;
      showStatChange(t.x, t.y, `-${dValStr} STR and -${dValVit} VIT`, false);
      showStatChange(u.x, u.y, `+${dValStr} STR and +${dValVit} VIT`, true);
    } break;
    case 'arcaneBolt': {
      if (!t) break;
      const d = Math.max(1, Math.ceil(getEffectiveStat(u, 'int') - (getEffectiveStat(t, 'int') * 0.7 + getEffectiveStat(t, 'luk') * 0.1)));
      applyDamage(t, d, false, true);
    } break;
    case 'manaDrain': if (t) {
      const dVal = Math.max(1, Math.floor(getEffectiveStat(t, 'int') * 0.3))
      t.str = Math.max(1, (t.mp || 0) - dVal); u.mp = (u.mp || 0) + dVal;
      showStatChange(t.x, t.y, `-${dVal} MP`, false);
      showStatChange(u.x, u.y, `+${dVal} MP`, true);
    } break;
    case 'mantra': if (t) {
      const d = Math.max(1, Math.floor(getEffectiveStat(u, 'int') * 0.3));
      u.tempBuff = { int: d, duration: 3 };
      showStatChange(u.x, u.y, `+${d} LUK`, true);
      t.tempBuff = { luk: d, duration: 3 };
      showStatChange(t.x, t.y, `+${d} LUK`, true);
    } break;
    case 'chakra': {
      applyDamage(u, Math.max(1, Math.floor((getEffectiveStat(u, 'int') * 0.3) + (getEffectiveStat(u, 'luk') * 0.15))), true);
      if (!t) break;
      applyDamage(t, Math.max(1, Math.floor((getEffectiveStat(u, 'int') * 0.3) + (getEffectiveStat(t, 'luk') * 0.15))), true);
    } break;
    case 'weaken': {
      if (!t) break;
      const dVal = 1;
      t.vit = Math.max(1, (t.vit || 0) - dVal); u.vit = (u.vit || 0) + dVal;
      showStatChange(t.x, t.y, `-${dVal} VIT`, false); showStatChange(u.x, u.y, `+${dVal} VIT`, true);
    } break;
    case 'feast': {
      if (!t) break;
      const d = Math.max(1, Math.floor((getEffectiveStat(u, 'str') * 0.8) - (getEffectiveStat(t, 'vit') * 0.3 + getEffectiveStat(t, 'luk') * 0.2)));
      const isHit = applyDamage(t, d, false);
      if (isHit) {
        applyDamage(u, d, true);
      }
    } break;
    case 'impale': {
      if (!t) break;
      const dVal = 2;
      t.tempDebuff = { agi: dVal, duration: 3 };
      showStatChange(t.x, t.y, `-${dVal} AGI`, false);
    } break;
    case 'pierce': {
      if (!t) break;
      const d = Math.max(1, Math.floor(getEffectiveStat(u, 'str') * 0.6));
      applyDamage(t, d, false);
    } break;
    case 'focus': {
      const bVal = 3;
      u.tempBuff = { dex: bVal, duration: 3 };
      showStatChange(u.x, u.y, `+${bVal} DEX`, true);
    } break;
    case 'snipe': {
      if (!t) break;
      const d = Math.max(1, Math.floor((getEffectiveStat(u, 'dex') * 0.7) - (getEffectiveStat(t, 'vit') * 0.3 + getEffectiveStat(t, 'luk') * 0.2)));
      applyDamage(t, d, false);
    } break;
    case 'cripple': {
      if (!t) break;
      const dVal = 1;
      t.agi = Math.max(1, (t.agi || 0) - dVal); u.agi = (u.agi || 0) + dVal;
      showStatChange(t.x, t.y, `-${dVal} AGI`, false); showStatChange(u.x, u.y, `+${dVal} AGI`, true);
    } break;
    case 'execute': if (t) {
      const d = Math.max(1, Math.floor((getEffectiveStat(u, 'agi') * 0.8) - (getEffectiveStat(t, 'vit') * 0.3 + getEffectiveStat(t, 'luk') * 0.2)));
      applyDamage(t, d, false);
    } break;
    case 'berserk': if (t) {
      applyDamage(t, Math.max(1, Math.floor(getEffectiveStat(u, 'str') * 0.8 - getEffectiveStat(t, 'vit') * 0.3 + getEffectiveStat(t, 'luk') * 0.2)), false);
      applyDamage(u, 3, false);
    } break;
    case 'bloodlust': {
      const blVal = Math.max(1, Math.floor((u.maxHp - u.hp) * 0.2));
      u.tempBuff = { str: blVal, vit: blVal, duration: 2 };
      showStatChange(u.x, u.y, `+${blVal} STR, +${blVal} VIT`, true);
    } break;
    case 'hex': {
      if (!t) break;
      const dVal = 1;
      t.int = Math.max(1, (t.int || 0) - dVal); u.int = (u.int || 0) + dVal;
      showStatChange(t.x, t.y, `-${dVal} INT`, false); showStatChange(u.x, u.y, `+${dVal} INT`, true);
    } break;
    case 'drain': {
      if (!t) break;
      const dHp = Math.max(1, Math.floor((getEffectiveStat(u, 'int') * 0.5) - (getEffectiveStat(t, 'int') * 0.4 + getEffectiveStat(t, 'luk') * 0.3)));
      const dMp = Math.max(1, Math.floor((getEffectiveStat(u, 'int') * 0.3) - (getEffectiveStat(t, 'int') * 0.4 + getEffectiveStat(t, 'luk') * 0.3)));
      applyDamage(t, dHp, false, true);
      applyDamage(u, dHp + dMp, true);
      t.mp = Math.max(1, (t.mp || 0) - dMp);
      showStatChange(t.x, t.y, `-${dMp} MP`, false);
    } break;
    case 'blind': {
      if (!t) break;
      const dVal = 1;
      t.dex = Math.max(1, (t.dex || 0) - dVal); u.dex = (u.dex || 0) + dVal;
      showStatChange(t.x, t.y, `-${dVal} DEX`, false); showStatChange(u.x, u.y, `+${dVal} DEX`, true);
    } break;
    case 'shuriken': {
      if (!t) break;
      const d = Math.max(1, Math.floor((getEffectiveStat(u, 'dex') * 0.7) - (getEffectiveStat(t, 'vit') * 0.3 + getEffectiveStat(t, 'luk') * 0.2)));
      applyDamage(t, d, false);
    } break;
    case 'iaido': {
      const bVal = 1;
      u.tempBuff = { str: bVal, dex: bVal, duration: 3 };
      showStatChange(u.x, u.y, `+${bVal} STR, +${bVal} DEX`, true);
    } break;
    case 'chokuto': {
      if (!t) break;
      const d = Math.max(1, Math.floor((getEffectiveStat(u, 'str') * 0.4 + getEffectiveStat(u, 'dex') * 0.4) - (getEffectiveStat(t, 'vit') * 0.3 + getEffectiveStat(t, 'luk') * 0.2)));
      applyDamage(t, d, false);
    } break;
    case 'bite': {
      if (!t) break;
      const d = Math.max(1, Math.floor((getEffectiveStat(u, 'str') * 0.7 + getEffectiveStat(u, 'agi') * 0.1) - (getEffectiveStat(t, 'vit') * 0.3 + getEffectiveStat(t, 'luk') * 0.2)));
      applyDamage(t, d, false);
    } break;
    case 'howl': {
      const bVal = 2;
      u.tempBuff = { str: bVal, agi: bVal, duration: 3 };
      showStatChange(u.x, u.y, `+${bVal} STR, +${bVal} AGI`, true);
    } break;
    case 'sacrifice': {
      const d = Math.max(1, Math.floor(getEffectiveStat(u, 'int') * 0.5));
      applyDamage(t, d, true);
      applyDamage(u, 3, false);
    } break;
    case 'judgement': {
      if (!t) break;
      const d = Math.max(1, Math.floor((u.maxHp - u.hp) - (getEffectiveStat(t, 'int') * 0.2 + getEffectiveStat(t, 'luk') * 0.1)));
      applyDamage(t, d, false, true);
    } break;
    case 'sanctuary': {
      const bVal = 1;
      u.tempBuff = { str: bVal, vit: bVal, dex: bVal, agi: bVal, int: bVal, luk: bVal, duration: 4 };
      t.tempBuff = { str: bVal, vit: bVal, dex: bVal, agi: bVal, int: bVal, luk: bVal, duration: 4 };
      if (u.hp < u.maxHp) u.hp += bVal;
      if (t.hp < t.maxHp) t.hp += bVal;
      showStatChange(u.x, u.y, `+${bVal} ALL STATS`, true);
      showStatChange(t.x, t.y, `+${bVal} ALL STATS`, true);
    } break;
    case 'exorcise': {
      if (!t) break;
      const d = Math.max(1, Math.floor((t.maxHp - t.hp) * 1.1 - (getEffectiveStat(t, 'int') * 0.2 + getEffectiveStat(t, 'luk') * 0.1)));
      applyDamage(t, d, false, true);
    } break;
    case 'raid': {
      const dVal = 2;
      t.luk = Math.max(1, (t.luk || 0) - dVal); u.luk = (u.luk || 0) + dVal;
      showStatChange(t.x, t.y, `-${dVal} LUK`, false); showStatChange(u.x, u.y, `+${dVal} LUK`, true);
    } break;
    case 'ambush': {
      if (!t) break;
      const d = Math.max(1, Math.floor((getEffectiveStat(u, 'luk') * 0.8) - (getEffectiveStat(t, 'vit') * 0.3 + getEffectiveStat(t, 'luk') * 0.2)));
      applyDamage(t, d, false);
    } break;
    case 'windWalk': {
      const bVal = 3;
      u.tempBuff = { agi: bVal, duration: 3 };
      showStatChange(u.x, u.y, `+${bVal} AGI`, true);
    } break;
    case 'powerShot': {
      if (!t) break;
      const d = Math.max(1, Math.floor((getEffectiveStat(u, 'dex') * 0.6) - (getEffectiveStat(t, 'vit') * 0.3 + getEffectiveStat(t, 'luk') * 0.2)));
      const isHit = applyDamage(t, d, false);
      if (isHit) {
        if (ctx.world && ctx.units && ctx.updateUnitPosition) {
          const tilesToPush = Math.max(1, Math.floor(d * 0.2));
          const knock = getKnockbackResult(ctx.world, ctx.units, u, t, tilesToPush);
          const oldGx = t.x;
          const oldGy = t.y;
          t.x = knock.newGx;
          t.y = knock.newGy;
          if (ctx.updateUnitTileIndex) ctx.updateUnitTileIndex(t, oldGx, oldGy);
          if (knock.collisionDamage > 0) {
            console.log('[KNOCKBACK]', `${knock.collisionDamage} dmg to ${t.name}`);
            ctx.updateUnitPosition(t);
            if (ctx.updateUnitSlashVisibility) ctx.updateUnitSlashVisibility(t);
            applyDamage(t, knock.collisionDamage, false);
            if (t.hp > 0 && ctx.tryCollectPowerup) ctx.tryCollectPowerup(t);
          } else if (ctx.animateKnockback) {
            ctx.animateKnockback(t, oldGx, oldGy, knock.newGx, knock.newGy, () => {
              if (ctx.updateUnitSlashVisibility) ctx.updateUnitSlashVisibility(t);
              if (t.hp > 0 && ctx.tryCollectPowerup) ctx.tryCollectPowerup(t);
            });
          } else {
            ctx.updateUnitPosition(t);
            if (ctx.updateUnitSlashVisibility) ctx.updateUnitSlashVisibility(t);
            if (t.hp > 0 && ctx.tryCollectPowerup) ctx.tryCollectPowerup(t);
          }
        }
      }
    } break;
    case 'forge': {
      const bVal = 2;
      u.tempBuff = { str: bVal, duration: 3 };
      t.tempBuff = { str: bVal, duration: 3 };
      showStatChange(u.x, u.y, `+${bVal} STR`, true);
      showStatChange(t.x, t.y, `+${bVal} STR`, true);
    } break;
    case 'fortify': {
      const bVal = 3;
      u.tempBuff = { str: bVal, vit: bVal, duration: 3 };
      t.tempBuff = { str: bVal, vit: bVal, duration: 3 };
      showStatChange(u.x, u.y, `+${bVal} STR, +${bVal} VIT`, true);
      showStatChange(t.x, t.y, `+${bVal} STR, +${bVal} VIT`, true);
    } break;
    case 'poison': {
      if (!t) break;
      const poisonVal = Math.max(1, Math.floor(getEffectiveStat(t, 'luk') * 0.3 - getEffectiveStat(t, 'luk') * 0.2));
      t.tempDebuff = { poison: poisonVal, duration: 3 };
      showStatChange(t.x, t.y, `Poisoned for 2 turns`, false);
    } break;
    case 'concoct': {
      if (!t) break;
      const d = Math.max(1, Math.floor((getEffectiveStat(u, 'int') * 0.8) - (getEffectiveStat(t, 'int') * 0.4 + getEffectiveStat(t, 'luk') * 0.2)));
      applyDamage(t, d, false, true);
      const lukVal = Math.max(1, Math.floor(d * 0.5));
      u.luk = Math.max(1, (u.luk || 0) + lukVal);
      showStatChange(u.x, u.y, `+${lukVal} LUK`, true);
    } break;
    case 'gaze': {
      if (!t) break;
      const dVal = 1;
      t.tempDebuff = { agi: dVal, vit: dVal, duration: 4 };
      showStatChange(t.x, t.y, `-${dVal} AGI, -${dVal} VIT`, false);
    } break;
    case 'bloodSuck': {
      if (!t) break;
      const d = Math.max(1, Math.floor((u.mp * 0.6 + getEffectiveStat(u, 'int') * 0.6) - (t.hp * 0.3 + getEffectiveStat(t, 'luk') * 0.1)));
      const isHit = applyDamage(t, d, false, true);
      if (isHit) applyDamage(u, d, true);
    } break;
    case 'debilitate': {
      if (!t) break;
      const d = 2;
      t.tempDebuff = { hp: d, maxHp: d, vit: d, duration: 3 };
      u.tempBuff = { hp: d, maxHp: d, vit: d, duration: 3 };
      showStatChange(t.x, t.y, `-${d} HP, -${d} VIT`, false);
      showStatChange(u.x, u.y, `+${d} HP, +${d} VIT`, true);
    } break;
    case 'reanimate': {
      if (!ctx.units || !ctx.reanimateDeadUnit) break;
      const list = ctx.units;
      let bestAll = null;
      let oBestAll = -1;
      let bestAlly = null;
      let oBestAlly = -1;
      let hadDeadAlly = false;
      for (let i = 0; i < list.length; i++) {
        const d = list[i];
        if (d.hp > 0) continue;
        const oD = d.deathOrder ?? 0;
        if (oD >= oBestAll) {
          oBestAll = oD;
          bestAll = d;
        }
        if (d.player === u.player) {
          hadDeadAlly = true;
          if (oD >= oBestAlly) {
            oBestAlly = oD;
            bestAlly = d;
          }
        }
      }
      const pick = hadDeadAlly ? bestAlly : bestAll;
      if (pick) ctx.reanimateDeadUnit(u, pick);
      // if (reanimated) {
      //   const hp = Math.max(1, Math.floor(reanimated.hp * 0.3));
      //   const vit = Math.max(1, Math.floor(reanimated.vit * 0.3));
      //   applyDamage(u, hp, true);
      //   showStatChange(u.x, u.y, `+${vit} VIT`, true);
      // }
    } break;
    case 'warCry': {
      const bVal = 3;
      u.tempBuff = { vit: bVal, duration: 3 };
      showStatChange(u.x, u.y, `+${bVal} VIT`, true);
    } break;
    case 'bash': {
      if (!t) break;
      const dVal = t.agi;
      t.tempDebuff = { agi: dVal, duration: 3 };
      showStatChange(t.x, t.y, `-${dVal} AGI`, false);
    } break;
    case 'gnaw': {
      const d = Math.max(1, Math.floor(getEffectiveStat(u, 'str') - (getEffectiveStat(t, 'vit') * 0.3 + getEffectiveStat(t, 'luk') * 0.2)));
      applyDamage(t, d, false, true);
      applyDamage(u, d, true);
    } break;
    case 'infect': {
      const poisonVal = Math.max(1, Math.floor(getEffectiveStat(u, 'luk') * 0.4 - getEffectiveStat(t, 'luk') * 0.1));
      t.tempDebuff = { poison: poisonVal, duration: 4 };
      showStatChange(t.x, t.y, `Poisoned for 3 turns`, false);
    } break;
    case 'vodoo': {
      if (!t) break;
      u.tempBuff = { vodoo: t.id, duration: 3 };
      showStatChange(t.x, t.y, `Vodoo for 2 turns`, false);
    } break;
    case 'malediction': {
      if (!t) break;
      const d = Math.max(1, Math.ceil(((getEffectiveStat(u, 'int') * 0.4 + getEffectiveStat(u, 'luk') * 0.3)) - (getEffectiveStat(t, 'int') * 0.3 + getEffectiveStat(t, 'luk') * 0.2)));
      const dVal = Math.max(1, Math.ceil(d * 0.3));
      t.tempDebuff = { luk: dVal, int: dVal, str: dVal, vit: dVal, agi: dVal, dex: dVal, duration: 3 };
      applyDamage(t, d, false, true);
      showStatChange(t.x, t.y, `-${dVal} ALL STATS`, false);
    } break;
    case 'foresight': {
      const bVal = 2;
      u.tempBuff = { int: bVal, dex: bVal, duration: 3 };
      showStatChange(u.x, u.y, `+${bVal} INT, +${bVal} DEX`, true);
      if (!t) break;
      t.tempBuff = { int: bVal, dex: bVal, duration: 3 };
      showStatChange(t.x, t.y, `+${bVal} INT, +${bVal} DEX`, true);
    } break;
    case 'overheal': {
      const d = Math.max(1, Math.floor(getEffectiveStat(u, 'int') * 0.3 + getEffectiveStat(u, 'luk') * 0.2));
      u.tempBuff = { heal: d, duration: 3 };
      showStatChange(u.x, u.y, `Auto heal for 2 turns`, true);
      if (!t) break;
      t.tempDebuff = { heal: d, duration: 3 };
      showStatChange(t.x, t.y, `Auto heal for 2 turns`, true);
    } break;
    case 'skewer': {
      const d = Math.max(1, Math.ceil(getEffectiveStat(u, 'dex') * 0.8 - (getEffectiveStat(t, 'vit') * 0.3 + getEffectiveStat(t, 'luk') * 0.2)));
      t.tempDebuff = { agi: d, duration: 3 };
      showStatChange(t.x, t.y, `-${d} AGI`, false);
    } break;
    case 'rapid': {
      u.tempBuff = { doubleAttack: true, duration: 2 };
      showStatChange(u.x, u.y, `Double attack for 1 turn`, true);
    } break;
    default: break;
  }
  console.log('[SKILL]', `${u.name} (${u.class}, P${u.player})`, 'uses', skillName, '→', targetDesc, `| MP ${u.mp}`, skillDamage != null ? `| ${skillDamage} dmg` : '');
  if (ctx.updateTurnUI) ctx.updateTurnUI();
}

function createWorld(seed) {
  const w = gridW;
  const h = gridH;
  const path = Array.from({ length: h }, () => Array(w).fill(false));
  const height = Array.from({ length: h }, () => Array(w).fill(0));
  const type = Array.from({ length: h }, () => Array(w).fill(TileType.GRASS));
  const rnd = seed != null ? createSeededRandom(seed) : () => Math.random();

  // Invariant: same layout for any map size — top base at top, bottom base at bottom, center plaza in middle (all horizontally centered)
  const centerX = Math.floor(w / 2);
  const centerY = Math.floor(h / 2);
  const topBaseX = centerX;
  const topBaseY = 0;
  const botBaseX = centerX;
  const botBaseY = h - 1;

  // Base and center tile extent: 5 cols (center ±2), 3 rows each
  const baseHalfW = 2;
  const baseRows = 3;
  function setRegion(typeId, rowStart, rowEnd, colCenter) {
    const c = colCenter;
    for (let gy = rowStart; gy <= rowEnd; gy++) {
      if (gy < 0 || gy >= h) continue;
      for (let dx = -baseHalfW; dx <= baseHalfW; dx++) {
        const gx = c + dx;
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

  // Two arcs (left and right) from bottom base to top base — do not connect through center plaza
  const pathCells = new Set();
  const inCenterPlaza = (x, y) =>
    Math.abs(x - centerX) <= 2 && Math.abs(y - centerY) <= 1;
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

  // Connector path: cross the map through the arc midpoints and the center plaza
  const leftArcMidX = Math.round(cx - radius * 1.6);
  const rightArcMidX = Math.round(cx + radius * 1.6);
  const leftArcX = Math.round(cx - radius);
  const rightArcX = Math.round(cx + radius);
  const bridgeHalfWidth = 1; // 3 tiles thick
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

  // Side paths: connect arcs to top and bottom bases (path along both sides of each base)
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

  // Re-apply base and center so they are never overwritten by path (invariant: top, bottom, center)
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

function getBaseTiles(world, player, occupiedKeys) {
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

function getCenterTilesForSort(world) {
  if (world.centerTiles && world.centerTiles.length > 0) return world.centerTiles;
  const out = [];
  for (let gy = 0; gy < world.h; gy++)
    for (let gx = 0; gx < world.w; gx++)
      if (world.type[gy][gx] === TileType.CENTER) out.push({ gx, gy });
  return out;
}

/** Sort base/placement tiles by Manhattan distance to nearest center tile (closest first). */
function sortTilesByDistanceToCenter(world, tiles) {
  const centerTiles = getCenterTilesForSort(world);
  if (centerTiles.length === 0) return tiles;
  const dist = (t) => Math.min(...centerTiles.map((c) => Math.abs(t.gx - c.gx) + Math.abs(t.gy - c.gy)));
  return [...tiles].sort((a, b) => dist(a) - dist(b));
}

function isWalkable(world, x, y) {
  if (x < 0 || x >= world.w || y < 0 || y >= world.h) return false;
  const t = world.type[y][x];
  if (t === TileType.TREE || t === TileType.WATER || t === TileType.ROCK) return false;
  return true;
}

/**
 * Compute knockback result: push target N tiles away from attacker.
 * If target would be pushed into an obstacle or another unit, leave target at last valid tile and apply variable collision damage.
 * @param {object} world - world with w, h, type
 * @param {Array} units - all units (to check occupancy)
 * @param {object} attacker - unit doing the knockback
 * @param {object} target - unit being knocked back
 * @param {number} tilesToPush - number of tiles to push (e.g. 1 or 2)
 * @returns {{ newGx: number, newGy: number, collisionDamage: number }}
 */
function getKnockbackResult(world, units, attacker, target, tilesToPush) {
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

/** Tiles that the line from (ax,ay) to (bx,by) passes through (Bresenham). */
function getTilesOnLine(ax, ay, bx, by) {
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
    if (e2 > -dy) {
      err -= dy;
      x += sx;
    }
    if (e2 < dx) {
      err += dx;
      y += sy;
    }
  }
  return cells;
}

/** True if there is no obstacle blocking the line from (ax,ay) to (bx,by). */
function hasLineOfSight(world, ax, ay, bx, by) {
  const cells = getTilesOnLine(ax, ay, bx, by);
  for (let i = 1; i < cells.length - 1; i++) {
    const c = cells[i];
    if (!isWalkable(world, c.x, c.y)) return false;
  }
  return true;
}

/** Minimum tiles a unit can move in one turn (applied in getReachable). */
const MIN_REACHABLE_MOVES = 4;

function getReachable(world, startX, startY, maxMoves, units, movingUnit) {
  maxMoves = Math.max(MIN_REACHABLE_MOVES, maxMoves);
  const key = (x, y) => y * world.w + x;
  const dist = new Map();
  dist.set(key(startX, startY), 0);
  const queue = [{ x: startX, y: startY, d: 0 }];
  let qh = 0;
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  const blockEnemies = units != null && movingUnit != null;
  const enemyOccupiedKeys = blockEnemies
    ? new Set(units.filter((u) => u.hp > 0 && u.player !== movingUnit.player).map((u) => u.y * world.w + u.x))
    : null;
  while (qh < queue.length) {
    const { x, y, d } = queue[qh++];
    if (d >= maxMoves) continue;
    for (const [dx, dy] of dirs) {
      const nx = x + dx;
      const ny = y + dy;
      if (!isWalkable(world, nx, ny)) continue;
      if (blockEnemies && enemyOccupiedKeys.has(key(nx, ny))) continue;
      const k = key(nx, ny);
      if (dist.has(k)) continue;
      const nd = d + 1;
      dist.set(k, nd);
      queue.push({ x: nx, y: ny, d: nd });
    }
  }
  return dist;
}

/** Tiles within Manhattan distance <= range (for attack range). Returns Map key -> dist (1..range). */
function getTilesInManhattanRange(world, centerX, centerY, range) {
  const dist = new Map();
  const gxLo = Math.max(0, centerX - range);
  const gxHi = Math.min(world.w - 1, centerX + range);
  const gyLo = Math.max(0, centerY - range);
  const gyHi = Math.min(world.h - 1, centerY + range);
  for (let gy = gyLo; gy <= gyHi; gy++) {
    for (let gx = gxLo; gx <= gxHi; gx++) {
      const d = Math.abs(gx - centerX) + Math.abs(gy - centerY);
      if (d >= 1 && d <= range) dist.set(gy * world.w + gx, d);
    }
  }
  return dist;
}

function getPath(world, startX, startY, endX, endY, units, movingUnit) {
  if (startX === endX && startY === endY) return [{ x: startX, y: startY }];
  const key = (x, y) => y * world.w + x;
  const enemyOccupiedKeys = new Set(
    units.filter((u) => u.hp > 0 && u.player !== movingUnit.player).map((u) => u.y * world.w + u.x)
  );
  const parent = new Map();
  const queue = [{ x: startX, y: startY }];
  let qh = 0;
  parent.set(key(startX, startY), null);
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];

  function canPass(x, y) {
    if (!isWalkable(world, x, y)) return false;
    return !enemyOccupiedKeys.has(key(x, y));
  }

  while (qh < queue.length) {
    const { x, y } = queue[qh++];
    if (x === endX && y === endY) {
      const pathArr = [];
      let cur = { x: endX, y: endY };
      while (cur) {
        pathArr.unshift(cur);
        cur = parent.get(key(cur.x, cur.y));
      }
      return pathArr;
    }
    for (const [dx, dy] of dirs) {
      const nx = x + dx;
      const ny = y + dy;
      const k = key(nx, ny);
      if (parent.has(k)) continue;
      if (!canPass(nx, ny)) continue;
      parent.set(k, { x, y });
      queue.push({ x: nx, y: ny });
    }
  }
  return null;
}

/**
 * Shortest path from start to any tile in targets (each { gx, gy }). Same passability rules as getPath.
 * @returns {{ path: Array<{x:number,y:number}>, target: { gx: number, gy: number } } | null}
 */
function getPathToNearestOfTargets(world, startX, startY, targets, units, movingUnit) {
  if (!targets || targets.length === 0) return null;
  const key = (x, y) => y * world.w + x;
  const sk = key(startX, startY);
  const targetKeys = new Set();
  for (let i = 0; i < targets.length; i++) {
    const g = targets[i];
    if (g && g.gx != null && g.gy != null) targetKeys.add(key(g.gx, g.gy));
  }
  if (targetKeys.size === 0) return null;
  if (targetKeys.has(sk)) {
    return { path: [{ x: startX, y: startY }], target: { gx: startX, gy: startY } };
  }
  const enemyOccupiedKeys = new Set(
    units.filter((u) => u.hp > 0 && u.player !== movingUnit.player).map((u) => u.y * world.w + u.x)
  );
  const parent = new Map();
  const queue = [{ x: startX, y: startY }];
  let qh = 0;
  parent.set(sk, null);
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  function canPass(x, y) {
    if (!isWalkable(world, x, y)) return false;
    return !enemyOccupiedKeys.has(key(x, y));
  }
  while (qh < queue.length) {
    const { x, y } = queue[qh++];
    const k = key(x, y);
    if (targetKeys.has(k)) {
      const pathArr = [];
      let cur = { x, y };
      while (cur) {
        pathArr.unshift(cur);
        cur = parent.get(key(cur.x, cur.y));
      }
      return { path: pathArr, target: { gx: x, gy: y } };
    }
    for (let di = 0; di < dirs.length; di++) {
      const dx = dirs[di][0];
      const dy = dirs[di][1];
      const nx = x + dx;
      const ny = y + dy;
      const nk = key(nx, ny);
      if (parent.has(nk)) continue;
      if (!canPass(nx, ny)) continue;
      parent.set(nk, { x, y });
      queue.push({ x: nx, y: ny });
    }
  }
  return null;
}

function tileWorldHalfExtents(w) {
  return { hw: (w.w * TILE_SIZE) / 2, hh: (w.h * TILE_SIZE) / 2 };
}

/** World hit point → grid tile (merged outside terrain; bases stay on instanced path). */
function worldPointToTileCoords(world, p) {
  const { hw, hh } = tileWorldHalfExtents(world);
  const gx = Math.floor((p.x + hw) / TILE_SIZE);
  const gy = Math.floor((p.z + hh) / TILE_SIZE);
  if (gx < 0 || gx >= world.w || gy < 0 || gy >= world.h) return null;
  return { gx, gy };
}

function applySolidVertexColors(geometry, cr, cg, cb) {
  const pos = geometry.getAttribute('position');
  if (!pos) return;
  const n = pos.count;
  const arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    arr[i * 3] = cr;
    arr[i * 3 + 1] = cg;
    arr[i * 3 + 2] = cb;
  }
  geometry.setAttribute('color', new THREE.BufferAttribute(arr, 3));
}

const colors = {
  [TileType.PATH]: 0x2d6b2d,
  [TileType.GRASS]: 0x2d4a2d,
  [TileType.TREE]: 0x1a3d1a,
  [TileType.WATER]: 0x1e5a9e,
  [TileType.ROCK]: 0x4a5a4a,
  [TileType.BASE_TOP]: 0x7a4a4a,
  [TileType.BASE_BOTTOM]: 0x4a5a7a,
  [TileType.CENTER]: 0xd4b84a,
};

function halfW(world) {
  return (world.w * TILE_SIZE) / 2;
}
function halfH(world) {
  return (world.h * TILE_SIZE) / 2;
}

/** Creates a small tiling canvas texture with subtle noise for tile surface detail (used as bumpMap). */
function createTilingNoiseTexture(size) {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const imageData = ctx.createImageData(size, size);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    const v = Math.floor(128 + (Math.random() - 0.5) * 80);
    data[i] = data[i + 1] = data[i + 2] = v;
    data[i + 3] = 255;
  }
  ctx.putImageData(imageData, 0, 0);
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(4, 4);
  tex.needsUpdate = true;
  return tex;
}

function buildTileMesh(world) {
  const group = new THREE.Group();
  const hw = halfW(world);
  const hh = halfH(world);
  const groundGeo = new THREE.BoxGeometry(TILE_SIZE, BASE_HEIGHT, TILE_SIZE);
  const noiseBumpMap = createTilingNoiseTexture(64);
  const baseRoughness = 0.88;
  const baseMetalness = 0.02;
  const treeGroups = [];
  group.userData.swayingFoliage = [];

  function addGrassTufts(baseX, baseZ, surfaceY, numTufts, maxHeight) {
    const grassMat = new THREE.MeshStandardMaterial({ color: 0x3a6a2a, roughness: 0.9 });
    grassMat.bumpMap = noiseBumpMap;
    grassMat.bumpScale = 0.12;
    for (let i = 0; i < numTufts; i++) {
      const h = 0.08 + Math.random() * maxHeight;
      const w = 0.03 + Math.random() * 0.03;
      const tuft = new THREE.Mesh(
        new THREE.CylinderGeometry(w * 0.5, w, h, 6),
        grassMat
      );
      tuft.position.set(
        baseX + (Math.random() - 0.5) * 0.5,
        surfaceY + h / 2,
        baseZ + (Math.random() - 0.5) * 0.5
      );
      tuft.rotation.x = (Math.random() - 0.5) * 0.2;
      tuft.rotation.z = (Math.random() - 0.5) * 0.2;
      tuft.castShadow = true;
      group.add(tuft);
    }
  }

  const rootRadius = 0.12;
  function buildCrisscrossLineGeometry(px, pz, surfaceY) {
    const ly = surfaceY + 0.02;
    const points = [
      [px - rootRadius, ly, pz - rootRadius], [px + rootRadius, ly, pz + rootRadius],
      [px - rootRadius, ly, pz + rootRadius], [px + rootRadius, ly, pz - rootRadius],
      [px - rootRadius + 0.06, ly, pz - rootRadius + 0.06], [px + rootRadius - 0.06, ly, pz + rootRadius - 0.06],
      [px - rootRadius + 0.06, ly, pz + rootRadius - 0.06], [px + rootRadius - 0.06, ly, pz - rootRadius + 0.06],
    ];
    const vertices = new Float32Array(points.length * 3);
    for (let i = 0; i < points.length; i++) {
      vertices[i * 3] = points[i][0];
      vertices[i * 3 + 1] = points[i][1];
      vertices[i * 3 + 2] = points[i][2];
    }
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    return lineGeo;
  }

  let insideCount = 0;
  for (let y = 0; y < world.h; y++) {
    for (let x = 0; x < world.w; x++) {
      if (world.path[y][x]) insideCount++;
    }
  }

  const groundMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: baseRoughness,
    metalness: baseMetalness,
    bumpMap: noiseBumpMap,
    bumpScale: 0.12,
  });
  const instancedGround = new THREE.InstancedMesh(groundGeo, groundMat, insideCount);
  instancedGround.userData.tileGridGround = true;
  instancedGround.userData.insideTileGx = new Uint16Array(insideCount);
  instancedGround.userData.insideTileGy = new Uint16Array(insideCount);
  instancedGround.castShadow = true;
  instancedGround.receiveShadow = true;
  instancedGround.frustumCulled = false;

  const outsideGroundGeoms = [];
  const outsideWaterGeoms = [];
  const outsideRockGeoms = [];
  const outsideLineGeoms = [];

  const _dummy = new THREE.Object3D();
  const _instColor = new THREE.Color();
  const _m4 = new THREE.Matrix4();
  const _quat = new THREE.Quaternion();
  const _euler = new THREE.Euler();
  const _vec3 = new THREE.Vector3();
  const _scaleOne = new THREE.Vector3(1, 1, 1);

  let instanceIndex = 0;
  for (let y = 0; y < world.h; y++) {
    for (let x = 0; x < world.w; x++) {
      const t = world.type[y][x];
      const elev = world.height[y][x];
      const color = colors[t];
      const topY = BASE_HEIGHT + elev * 0.35;
      const surfaceY = topY / 2 + BASE_HEIGHT / 2;
      const px = x * TILE_SIZE - hw + TILE_SIZE / 2;
      const pz = y * TILE_SIZE - hh + TILE_SIZE / 2;
      const cr = ((color >> 16) & 0xff) / 255;
      const cg = ((color >> 8) & 0xff) / 255;
      const cb = (color & 0xff) / 255;
      let fr = cr;
      let fg = cg;
      let fb = cb;
      if (t === TileType.PATH || t === TileType.TREE || t === TileType.ROCK) {
        const dirtR = 0.42;
        const dirtG = 0.26;
        const dirtB = 0.14;
        const mix = Math.random() * 0.45;
        fr = cr * (1 - mix) + dirtR * mix;
        fg = cg * (1 - mix) + dirtG * mix;
        fb = cb * (1 - mix) + dirtB * mix;
      }
      if (t === TileType.TREE || t === TileType.ROCK) {
        fr *= 0.5;
        fg *= 0.5;
        fb *= 0.5;
      }
      const variation = 1 + (Math.random() - 0.5) * 0.12;
      const ffr = Math.min(1, fr * variation);
      const ffg = Math.min(1, fg * variation);
      const ffb = Math.min(1, fb * variation);

      const onWalkablePath = world.path[y][x];

      if (onWalkablePath) {
        instancedGround.userData.insideTileGx[instanceIndex] = x;
        instancedGround.userData.insideTileGy[instanceIndex] = y;
        _instColor.setRGB(ffr, ffg, ffb);
        instancedGround.setColorAt(instanceIndex, _instColor);
        _dummy.position.set(
        x * TILE_SIZE - hw + TILE_SIZE / 2,
        topY / 2,
          y * TILE_SIZE - hh + TILE_SIZE / 2,
        );
        _dummy.updateMatrix();
        instancedGround.setMatrixAt(instanceIndex, _dummy.matrix);
        instanceIndex++;
      } else {
        const gg = groundGeo.clone();
        _dummy.position.set(
          x * TILE_SIZE - hw + TILE_SIZE / 2,
          topY / 2,
          y * TILE_SIZE - hh + TILE_SIZE / 2,
        );
        _dummy.updateMatrix();
        gg.applyMatrix4(_dummy.matrix);
        applySolidVertexColors(gg, ffr, ffg, ffb);
        outsideGroundGeoms.push(gg);

        if (t === TileType.TREE) {
          outsideLineGeoms.push(buildCrisscrossLineGeometry(px, pz, surfaceY));
        } else if (t === TileType.WATER) {
          const wc = colors[TileType.WATER];
          const wr = ((wc >> 16) & 0xff) / 255;
          const wg = ((wc >> 8) & 0xff) / 255;
          const wb = (wc & 0xff) / 255;
          const wVariation = 1 + (Math.random() - 0.5) * 0.12;
          const wfr = Math.min(1, wr * wVariation);
          const wfg = Math.min(1, wg * wVariation);
          const wfb = Math.min(1, wb * wVariation);
          const wgPl = new THREE.PlaneGeometry(TILE_SIZE, TILE_SIZE);
          wgPl.rotateX(-Math.PI / 2);
          _dummy.position.set(px, surfaceY + 0.02, pz);
          _dummy.rotation.set(0, 0, 0);
          _dummy.scale.set(1, 1, 1);
          _dummy.updateMatrix();
          wgPl.applyMatrix4(_dummy.matrix);
          applySolidVertexColors(wgPl, wfr, wfg, wfb);
          outsideWaterGeoms.push(wgPl);
        } else if (t === TileType.ROCK) {
          const pushRockGeom = (size, offX, offZ) => {
            const rg = new THREE.DodecahedronGeometry(size, 0);
            const rx = Math.random() * Math.PI * 2;
            const ry = Math.random() * Math.PI * 2;
            const rz = Math.random() * Math.PI * 2;
            _euler.set(rx, ry, rz);
            _quat.setFromEuler(_euler);
            _vec3.set(px + offX, surfaceY + size - 0.2, pz + offZ);
            _m4.compose(_vec3, _quat, _scaleOne);
            rg.applyMatrix4(_m4);
            outsideRockGeoms.push(rg);
          };
          pushRockGeom(0.32 + Math.random() * 0.14, (Math.random() - 0.5) * 0.15, (Math.random() - 0.5) * 0.15);
          pushRockGeom(0.2 + Math.random() * 0.12, (Math.random() - 0.5) * 0.25, (Math.random() - 0.5) * 0.25);
          pushRockGeom(0.12 + Math.random() * 0.12, (Math.random() - 0.5) * 0.28, (Math.random() - 0.5) * 0.28);
        }
      }
    }
  }

  instancedGround.instanceMatrix.needsUpdate = true;
  if (instancedGround.instanceColor) instancedGround.instanceColor.needsUpdate = true;
  group.add(instancedGround);

  function disposeGeoms(arr) {
    for (let i = 0; i < arr.length; i++) arr[i].dispose();
  }

  if (outsideGroundGeoms.length > 0) {
    const mergedG = mergeGeometries(outsideGroundGeoms);
    disposeGeoms(outsideGroundGeoms);
    if (mergedG) {
      const mat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        vertexColors: true,
        roughness: baseRoughness,
        metalness: baseMetalness,
        bumpMap: noiseBumpMap,
        bumpScale: 0.12,
      });
      const mesh = new THREE.Mesh(mergedG, mat);
      mesh.receiveShadow = true;
      mesh.castShadow = true;
      mesh.frustumCulled = false;
      mesh.userData.mergedOutsidePick = true;
      group.add(mesh);
    }
  }

  if (outsideLineGeoms.length > 0) {
    const mergedL = mergeGeometries(outsideLineGeoms);
    disposeGeoms(outsideLineGeoms);
    if (mergedL) {
      const lineMat = new THREE.LineBasicMaterial({ color: 0x0d0d0d, linewidth: 1 });
      const lines = new THREE.LineSegments(mergedL, lineMat);
      lines.frustumCulled = false;
      lines.userData.mergedOutsidePick = true;
      group.add(lines);
    }
  }

  if (outsideRockGeoms.length > 0) {
    const mergedR = mergeGeometries(outsideRockGeoms);
    disposeGeoms(outsideRockGeoms);
    if (mergedR) {
      const rockMat = new THREE.MeshStandardMaterial({ color: 0x6a6a6a, roughness: 0.9 });
      rockMat.bumpMap = noiseBumpMap;
      rockMat.bumpScale = 0.2;
      const rockMesh = new THREE.Mesh(mergedR, rockMat);
      rockMesh.castShadow = true;
      rockMesh.frustumCulled = false;
      rockMesh.userData.mergedOutsidePick = true;
      group.add(rockMesh);
    }
  }

  if (outsideWaterGeoms.length > 0) {
    const mergedW = mergeGeometries(outsideWaterGeoms);
    disposeGeoms(outsideWaterGeoms);
    if (mergedW) {
      const waterMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        vertexColors: true,
        roughness: 0.08,
        metalness: 0.45,
        transparent: true,
        opacity: 0.94,
        bumpMap: noiseBumpMap,
        bumpScale: 0.03,
      });
      const waterMesh = new THREE.Mesh(mergedW, waterMat);
      waterMesh.receiveShadow = true;
      waterMesh.frustumCulled = false;
      waterMesh.userData.mergedOutsidePick = true;
      group.add(waterMesh);
    }
  }

  for (let y = 0; y < world.h; y++) {
    for (let x = 0; x < world.w; x++) {
      if (world.path[y][x]) continue;
      const t = world.type[y][x];
      const elev = world.height[y][x];
      const topY = BASE_HEIGHT + elev * 0.35;
      const surfaceY = topY / 2 + BASE_HEIGHT / 2;
      const px = x * TILE_SIZE - hw + TILE_SIZE / 2;
      const pz = y * TILE_SIZE - hh + TILE_SIZE / 2;

      if (t === TileType.TREE) {
        const treeGroup = new THREE.Group();
        treeGroup.userData = { gx: x, gy: y };
        treeGroup.position.set(px, surfaceY, pz);

        const atEdge = x === 0 || x === world.w - 1 || y === 0 || y === world.h - 1;
        const trunkH = atEdge ? 0.75 + Math.random() * 0.35 : 0.5 + Math.random() * 0.2;
        const trunkColor = new THREE.Color(0x3d2817);
        const tn = () => 1 + (Math.random() - 0.5) * 0.4;
        trunkColor.r = Math.min(1, Math.max(0, trunkColor.r * tn()));
        trunkColor.g = Math.min(1, Math.max(0, trunkColor.g * tn()));
        trunkColor.b = Math.min(1, Math.max(0, trunkColor.b * tn()));
        const trunkRough = 0.85 + Math.random() * 0.2;
        const trunkMat = new THREE.MeshStandardMaterial({ color: trunkColor, roughness: trunkRough });
        trunkMat.bumpMap = noiseBumpMap;
        trunkMat.bumpScale = 0.1 + Math.random() * 0.12;
        const trunk = new THREE.Mesh(
          new THREE.CylinderGeometry(0.12, 0.14, trunkH, 8),
          trunkMat
        );
        trunk.position.set(0, trunkH / 2, 0);
        trunk.castShadow = true;
        trunk.raycast = function () {};
        treeGroup.add(trunk);

        const leafBumpMap = noiseBumpMap.clone();
        leafBumpMap.repeat.set(3, 3);
        const foliageColor = new THREE.Color(0x2d5a2d);
        const fn = () => 1 + (Math.random() - 0.5) * 0.44;
        foliageColor.r = Math.min(1, Math.max(0, foliageColor.r * fn()));
        foliageColor.g = Math.min(1, Math.max(0, foliageColor.g * fn()));
        foliageColor.b = Math.min(1, Math.max(0, foliageColor.b * fn()));
        const foliageRough = 0.78 + Math.random() * 0.24;
        const foliageMat = new THREE.MeshStandardMaterial({ color: foliageColor, roughness: foliageRough });
        foliageMat.bumpMap = leafBumpMap;
        foliageMat.bumpScale = 0.16 + Math.random() * 0.14;

        const coneRad = atEdge ? 0.52 : 0.45;
        const coneH = atEdge ? 1.05 : 0.9;
        const overlap = 0.12;
        const bottomH = coneH * 0.5;
        const middleH = coneH * 0.45;
        const topH = coneH * 0.4;
        const foliageGroup = new THREE.Group();
        foliageGroup.position.set(0, trunkH, 0);
        const bottomCone = new THREE.Mesh(
          new THREE.ConeGeometry(coneRad, bottomH, 8),
          foliageMat
        );
        bottomCone.position.set(0, bottomH / 2, 0);
        bottomCone.castShadow = true;
        bottomCone.raycast = function () {};
        foliageGroup.add(bottomCone);
        const middleCone = new THREE.Mesh(
          new THREE.ConeGeometry(coneRad * 0.75, middleH, 8),
          foliageMat
        );
        middleCone.position.set(0, bottomH - overlap + middleH / 2, 0);
        middleCone.castShadow = true;
        middleCone.raycast = function () {};
        foliageGroup.add(middleCone);
        const topCone = new THREE.Mesh(
          new THREE.ConeGeometry(coneRad * 0.5, topH, 8),
          foliageMat
        );
        topCone.position.set(0, bottomH - overlap + middleH - overlap + topH / 2, 0);
        topCone.castShadow = true;
        topCone.raycast = function () {};
        foliageGroup.add(topCone);
        treeGroup.add(foliageGroup);

        const cx = (world.w - 1) * 0.5;
        const cy = (world.h - 1) * 0.5;
        const centerRadiusTiles = Math.max(3.5, Math.min(world.w, world.h) * 0.24);
        const distSq = (x - cx) ** 2 + (y - cy) ** 2;
        const treeNearMapCenter = distSq <= centerRadiusTiles * centerRadiusTiles;
        if (treeNearMapCenter && Math.random() < 2 / 3) {
          group.userData.swayingFoliage.push({
            group: foliageGroup,
            phase: Math.random() * Math.PI * 2,
          });
        }

        group.add(treeGroup);
        treeGroups.push(treeGroup);
      }
    }
  }
  group.userData.treeGroups = treeGroups;
  return group;
}

function main() {
  const instructionsEl = document.querySelector('#mode-select-overlay .mode-select-instructions');
  if (instructionsEl) console.log(instructionsEl.textContent.trim());

  let world = createWorld();
  const container = document.getElementById('canvas-wrap');
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x1a1e24);
  scene.fog = new THREE.Fog(0x1a1e24, 30, 90);

  const cx = (world.w * TILE_SIZE) / 2;
  const cz = (world.h * TILE_SIZE) / 2;
  const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 200);
  const INITIAL_ZOOM = 17;
  const CAMERA_FOLLOW_LERP = 0.003;
  const cameraOffset = new THREE.Vector3(12, 38, 16).normalize().multiplyScalar(INITIAL_ZOOM);
  const cameraTarget = new THREE.Vector3();
  const _zoomDir = new THREE.Vector3();
  const panPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  const panIntersect = new THREE.Vector3();
  const zoomDir = new THREE.Vector3();
  let isPanning = false;
  let isRotating = false;
  let cameraFollowUnit = true;
  let ctrlKeyOnDown = false;
  let prevPointerNdc = null;
  const CLICK_DRAG_THRESHOLD_PX = 5;
  const ROTATE_SENSITIVITY = 0.004;
  const ELEVATION_MIN = -Math.PI * 0.4;
  const ELEVATION_MAX = Math.PI * 0.4;
  const _orbitOffset = new THREE.Vector3();
  let pointerDownPixel = { x: 0, y: 0 };
  let pointerIsTouch = false;
  const ZOOM_MIN = 1;
  const ZOOM_MAX = 40;
  const ZOOM_SENSITIVITY = 0.005;
  const PINCH_ZOOM_SENSITIVITY = 0.15;
  const TOUCH_PAN_SENSITIVITY = 1;
  let pinchLastDistance = null;

  const ambient = new THREE.AmbientLight(0xffffff, 0.45);
  scene.add(ambient);
  const sun = new THREE.DirectionalLight(0xfff5e6, 1.1);
  sun.position.set(30, 50, 20);
  sun.castShadow = true;
  sun.shadow.mapSize.width = 2048;
  sun.shadow.mapSize.height = 2048;
  sun.shadow.camera.near = 1; sun.shadow.camera.far = 120;
  sun.shadow.camera.left = -50; sun.shadow.camera.right = 50;
  sun.shadow.camera.top = 50; sun.shadow.camera.bottom = -50;
  scene.add(sun);

  let tilesGroup = buildTileMesh(world);
  scene.add(tilesGroup);

  const powerups = new Map();
  const powerupMeshesGroup = new THREE.Group();
  scene.add(powerupMeshesGroup);
  let powerupSpawnedTurnsLeft = { 30: false, 20: false, 10: false };

  const POWERUP_TYPES = ['red', 'yellow', 'purple', 'blue', 'green'];
  const POWERUP_COLORS = { red: 0xe53935, yellow: 0xfdd835, purple: 0x8e24aa, blue: 0x1e88e5, green: 0x43a047 };

  const POWERUP_GLOW_SIZE = 0.92;
  function createPowerupTileGlow(colorHex, gx, gy) {
    const topY = BASE_HEIGHT + world.height[gy][gx] * 0.35;
    const surfaceY = topY / 2 + BASE_HEIGHT / 2;
    const geo = new THREE.PlaneGeometry(POWERUP_GLOW_SIZE, POWERUP_GLOW_SIZE);
    const mat = new THREE.MeshBasicMaterial({
      color: colorHex,
      transparent: true,
      opacity: 0.45,
      side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.set(
      gx * TILE_SIZE - hw + TILE_SIZE / 2,
      surfaceY + 0.01,
      gy * TILE_SIZE - hh + TILE_SIZE / 2
    );
    return mesh;
  }

  function createPowerupGem(colorHex) {
    const geo = new THREE.OctahedronGeometry(0.22, 0);
    const mat = new THREE.MeshStandardMaterial({ color: colorHex, metalness: 0.3, roughness: 0.4 });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.rotation.x = Math.PI / 4;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    return mesh;
  }

  function getValidPowerupSpawnTiles() {
    const centerY = Math.floor(world.h / 2);
    const tiles = [];
    for (let gx = 0; gx < world.w; gx++) {
      const gy = centerY;
      if (world.type[gy][gx] !== TileType.PATH) continue;
      const occupied = getUnitAtTile(gx, gy) != null;
      if (occupied) continue;
      const key = gy * world.w + gx;
      if (powerups.has(key)) continue;
      tiles.push({ gx, gy });
    }
    return tiles;
  }

  function spawnPowerupsForTurnsLeft(turnsLeft) {
    const valid = getValidPowerupSpawnTiles();
    if (valid.length === 0) return;
    const tile = valid[Math.floor(Math.random() * valid.length)];
    const type = POWERUP_TYPES[Math.floor(Math.random() * POWERUP_TYPES.length)];
    const key = tile.gy * world.w + tile.gx;
    const colorHex = POWERUP_COLORS[type];
    const pos = worldPos(tile.gx, tile.gy);
    pos.y += 0.35;
    const mesh = createPowerupGem(colorHex);
    mesh.position.copy(pos);
    powerupMeshesGroup.add(mesh);
    const glowMesh = createPowerupTileGlow(colorHex, tile.gx, tile.gy);
    powerupMeshesGroup.add(glowMesh);
    powerups.set(key, { type, mesh, glowMesh });
    console.log('[POWERUP]', `turnsLeft: ${turnsLeft}, type: ${type}, gx: ${tile.gx}, gy: ${tile.gy}`);
  }

  function tryCollectPowerup(unit) {
    const key = unit.y * world.w + unit.x;
    const pu = powerups.get(key);
    if (!pu) return;
    const mesh = pu.mesh;
    powerupMeshesGroup.remove(mesh);
    mesh.geometry.dispose();
    if (mesh.material) { const m = mesh.material; if (m.dispose) m.dispose(); }
    if (pu.glowMesh) {
      powerupMeshesGroup.remove(pu.glowMesh);
      pu.glowMesh.geometry.dispose();
      if (pu.glowMesh.material && pu.glowMesh.material.dispose) pu.glowMesh.material.dispose();
    }
    powerups.delete(key);
    if (pu.type === 'green') {
      unit.hp = Math.min(unit.maxHp, unit.hp + 6);
      showFloatingCombatText(unit.x, unit.y, '+6 HP', false, 'buff');
    } else {
      const duration = 3;
      if (pu.type === 'red') unit.tempBuff = { str: 4, duration };
      else if (pu.type === 'yellow') unit.tempBuff = { agi: 4, duration };
      else if (pu.type === 'purple') unit.tempBuff = { int: 4, duration };
      else if (pu.type === 'blue') unit.tempBuff = { dex: 4, duration };
      showFloatingCombatText(unit.x, unit.y, `+4 ${pu.type === 'red' ? 'STR' : pu.type === 'yellow' ? 'AGI' : pu.type === 'purple' ? 'INT' : 'DEX'}`, false, 'buff');
    }
    playBuffAnimation(unit, () => updateUnitSlashVisibility(unit));
  }

  const units = [];
  let deadCorpseCount = 0;
  const unitById = new Map();
  function clearUnitIdIndex() {
    unitById.clear();
  }
  function registerUnitInIdIndex(u) {
    unitById.set(u.id, u);
  }
  function unregisterUnitId(id) {
    unitById.delete(id);
  }
  function getUnitById(id) {
    return unitById.get(id);
  }
  /** Living units only: grid key -> unit (one unit per tile). */
  const unitAtTileKey = new Map();
  function clearUnitTileIndex() {
    unitAtTileKey.clear();
  }
  function updateUnitTileIndex(unit, prevGx, prevGy) {
    if (prevGx != null && prevGy != null) {
      const ok = prevGy * world.w + prevGx;
      if (unitAtTileKey.get(ok) === unit) unitAtTileKey.delete(ok);
    }
    if (unit.hp > 0) {
      unitAtTileKey.set(unit.y * world.w + unit.x, unit);
    }
  }
  function getUnitAtTile(gx, gy) {
    const k = gy * world.w + gx;
    const u = unitAtTileKey.get(k);
    if (!u || u.hp <= 0 || u.x !== gx || u.y !== gy) return null;
    return u;
  }
  let nextUnitId = 1;
  let deathOrderSeq = 0;
  const unitMeshes = new Map();
  const unitNoiseBumpMap = createTilingNoiseTexture(64);
  let hw = halfW(world);
  let hh = halfH(world);
  function worldPos(gx, gy) {
    const topY = BASE_HEIGHT + world.height[gy][gx] * 0.35;
    const surfaceY = topY / 2 + BASE_HEIGHT / 2;
    return new THREE.Vector3(
      gx * TILE_SIZE - hw + TILE_SIZE / 2,
      surfaceY,
      gy * TILE_SIZE - hh + TILE_SIZE / 2
    );
  }

  function rebuildWorldForPvp(mapMode, mapSeed) {
    if (mapMode === 'short') {
      gridW = 27;
      gridH = 15;
      centerPlazaRadius = 0.35;
      maxTurns = 100;
    }
    scene.remove(tilesGroup);
    tilesGroup.traverse((obj) => {
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) {
        const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
        mats.forEach((m) => m.dispose());
      }
    });
    unitMeshes.forEach((mesh) => {
      scene.remove(mesh);
      mesh.traverse((o) => {
        if (o.geometry) o.geometry.dispose();
        if (o.material) {
          const mats = Array.isArray(o.material) ? o.material : [o.material];
          mats.forEach((m) => m.dispose());
        }
      });
    });
    unitMeshes.clear();
    units.length = 0;
    clearUnitIdIndex();
    clearUnitTileIndex();
    nextUnitId = 1;
    deathOrderSeq = 0;
    deadCorpseCount = 0;
    powerups.forEach((pu) => {
      powerupMeshesGroup.remove(pu.mesh);
      pu.mesh.geometry.dispose();
      if (pu.mesh.material && pu.mesh.material.dispose) pu.mesh.material.dispose();
      if (pu.glowMesh) {
        powerupMeshesGroup.remove(pu.glowMesh);
        pu.glowMesh.geometry.dispose();
        if (pu.glowMesh.material && pu.glowMesh.material.dispose) pu.glowMesh.material.dispose();
      }
    });
    powerups.clear();
    powerupSpawnedTurnsLeft = { 30: false, 20: false, 10: false };
    world = createWorld(typeof mapSeed !== 'undefined' ? mapSeed : undefined);
    hw = halfW(world);
    hh = halfH(world);
    tilesGroup = buildTileMesh(world);
    scene.add(tilesGroup);
  }

  function clearAllUnits() {
    unitMeshes.forEach((mesh) => {
      scene.remove(mesh);
      mesh.traverse((o) => {
        if (o.geometry) o.geometry.dispose();
        if (o.material) {
          const mats = Array.isArray(o.material) ? o.material : [o.material];
          mats.forEach((m) => m.dispose());
        }
      });
    });
    unitMeshes.clear();
    units.length = 0;
    clearUnitIdIndex();
    clearUnitTileIndex();
    nextUnitId = 1;
    deathOrderSeq = 0;
    deadCorpseCount = 0;
  }

  function nudgeColor(hex, amount) {
    const r = ((hex >> 16) & 0xff) / 255;
    const g = ((hex >> 8) & 0xff) / 255;
    const b = (hex & 0xff) / 255;
    const v = 1 + (Math.random() - 0.5) * amount;
    return new THREE.Color(
      Math.min(1, r * v),
      Math.min(1, g * v),
      Math.min(1, b * v)
    );
  }

  const UNIT_COLOR_DARKEN = 0.62;
  function darkenColor(color, factor) {
    factor = factor != null ? factor : UNIT_COLOR_DARKEN;
    const c = color instanceof THREE.Color ? color : new THREE.Color(color);
    return new THREE.Color(
      Math.max(0, c.r * factor),
      Math.max(0, c.g * factor),
      Math.max(0, c.b * factor)
    );
  }

  function createHumanFigure(player, classKey, hairColor) {
    const look = CLASS_LOOK[classKey] || CLASS_LOOK.knight;
    const primary = darkenColor(nudgeColor(look.primary, 0.08));
    const secondary = darkenColor(nudgeColor(look.secondary, 0.08));
    const gender = (CLASSES[classKey] && CLASSES[classKey].gender) || 'male';
    const hairHex = hairColor != null ? hairColor : 0x3d2314;
    const skinColor = darkenColor(nudgeColor(look.skin != null ? look.skin : 0xe8b4a0, 0.06));
    const hairColorNudged = darkenColor(nudgeColor(hairHex, 0.08));
    const roughnessVar = () => (Math.random() - 0.5) * 0.08;
    const metalVar = () => (Math.random() - 0.5) * 0.04;

    const torsoMat = new THREE.MeshStandardMaterial({
      color: primary,
      metalness: Math.max(0, 0.25 + metalVar()),
      roughness: Math.max(0.3, Math.min(1, 0.5 + roughnessVar())),
    });
    torsoMat.bumpMap = unitNoiseBumpMap;
    torsoMat.bumpScale = 0.1;
    const legMat = new THREE.MeshStandardMaterial({
      color: secondary,
      metalness: Math.max(0, 0.2 + metalVar()),
      roughness: Math.max(0.3, Math.min(1, 0.55 + roughnessVar())),
    });
    legMat.bumpMap = unitNoiseBumpMap;
    legMat.bumpScale = 0.1;
    const armMat = new THREE.MeshStandardMaterial({
      color: primary,
      metalness: Math.max(0, 0.25 + metalVar()),
      roughness: Math.max(0.3, Math.min(1, 0.5 + roughnessVar())),
    });
    armMat.bumpMap = unitNoiseBumpMap;
    armMat.bumpScale = 0.1;
    const skin = new THREE.MeshStandardMaterial({
      color: skinColor,
      metalness: 0.1,
      roughness: Math.max(0.5, Math.min(1, 0.7 + roughnessVar())),
    });
    skin.bumpMap = unitNoiseBumpMap;
    skin.bumpScale = 0.05;
    const group = new THREE.Group();

    const legH = 0.28;
    const legW = 0.08;
    const legD = 0.08;
    const leftLeg = new THREE.Mesh(
      new THREE.BoxGeometry(legW, legH, legD),
      legMat
    );
    leftLeg.position.set(-0.06, legH / 2, 0);
    leftLeg.castShadow = true;
    group.add(leftLeg);
    const rightLeg = new THREE.Mesh(
      new THREE.BoxGeometry(legW, legH, legD),
      legMat
    );
    rightLeg.position.set(0.06, legH / 2, 0);
    rightLeg.castShadow = true;
    group.add(rightLeg);

    const torsoH = 0.28;
    const torsoW = 0.2;
    const torsoD = 0.12;
    const torso = new THREE.Mesh(
      new THREE.BoxGeometry(torsoW, torsoH, torsoD),
      torsoMat
    );
    torso.position.set(0, legH + torsoH / 2, 0);
    torso.castShadow = true;
    group.add(torso);

    const armW = 0.06;
    const armH = 0.22;
    const armD = 0.06;
    const leftArm = new THREE.Mesh(
      new THREE.BoxGeometry(armW, armH, armD),
      armMat
    );
    leftArm.position.set(-(torsoW / 2 + armW / 2), legH + torsoH - 0.08, 0);
    leftArm.castShadow = true;
    group.add(leftArm);
    const rightArm = new THREE.Mesh(
      new THREE.BoxGeometry(armW, armH, armD),
      armMat
    );
    rightArm.position.set(torsoW / 2 + armW / 2, legH + torsoH - 0.08, 0);
    rightArm.castShadow = true;
    group.add(rightArm);

    if (look.cape != null) {
      const capeW = torsoW * 1.95;
      const capeWTop = capeW * 0.60;
      const capeH = legH + torsoH * 0.28;
      const shape = new THREE.Shape();
      shape.moveTo(-capeWTop / 2, capeH / 2);
      shape.lineTo(capeWTop / 2, capeH / 2);
      shape.lineTo(capeW / 2, -capeH / 2);
      shape.lineTo(-capeW / 2, -capeH / 2);
      shape.closePath();
      const capeGeo = new THREE.ShapeGeometry(shape);
      const capeMat = new THREE.MeshStandardMaterial({
        color: darkenColor(nudgeColor(look.cape, 0.08)),
        metalness: 0.15,
        roughness: Math.max(0.5, Math.min(1, 0.8 + roughnessVar())),
        side: THREE.DoubleSide,
      });
      capeMat.bumpMap = unitNoiseBumpMap;
      capeMat.bumpScale = 0.12;
      const cape = new THREE.Mesh(capeGeo, capeMat);
      cape.position.set(0, legH + torsoH - capeH / 2 + 0.05, -torsoD / 2 - 0.02);
      cape.rotation.y = Math.PI;
      cape.castShadow = true;
      group.add(cape);
      const padRadius = 0.055;
      const shoulderY = legH + torsoH + 0.02;
      const shoulderZ = 0.02;
      const padX = torsoW / 2 + armW * 0.5;
      const leftPad = new THREE.Mesh(
        new THREE.SphereGeometry(padRadius, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.55),
        capeMat.clone()
      );
      leftPad.position.set(-padX, shoulderY, shoulderZ);
      leftPad.rotation.x = -Math.PI * 0.35;
      leftPad.rotation.z = Math.PI * 0.5;
      leftPad.scale.set(1.2, 0.85, 1.1);
      leftPad.castShadow = true;
      group.add(leftPad);
      const rightPad = new THREE.Mesh(
        new THREE.SphereGeometry(padRadius, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.55),
        capeMat.clone()
      );
      rightPad.position.set(padX, shoulderY, shoulderZ);
      rightPad.rotation.x = -Math.PI * 0.35;
      rightPad.rotation.z = -Math.PI * 0.5;
      rightPad.scale.set(1.2, 0.85, 1.1);
      rightPad.castShadow = true;
      group.add(rightPad);
    }

    if (look.belt != null) {
      const beltMat = new THREE.MeshStandardMaterial({
        color: darkenColor(nudgeColor(look.belt, 0.08)),
        metalness: 0.2,
        roughness: Math.max(0.4, Math.min(1, 0.6 + roughnessVar())),
      });
      beltMat.bumpMap = unitNoiseBumpMap;
      beltMat.bumpScale = 0.1;
      const beltThick = 0.022;
      const beltDepth = 0.04;
      const belt = new THREE.Mesh(
        new THREE.BoxGeometry(torsoW + 0.04, beltThick, torsoD + beltDepth),
        beltMat
      );
      belt.position.set(0, legH + 0.04, 0);
      belt.castShadow = true;
      group.add(belt);
    }

    if (look.apron != null) {
      const apronMat = new THREE.MeshStandardMaterial({
        color: darkenColor(nudgeColor(look.apron, 0.08)),
        metalness: 0.08,
        roughness: Math.max(0.5, Math.min(1, 0.75 + roughnessVar())),
        side: THREE.DoubleSide,
      });
      apronMat.bumpMap = unitNoiseBumpMap;
      apronMat.bumpScale = 0.12;
      const apronW = torsoW * 0.95;
      const apronH = legH * 0.85;
      const apron = new THREE.Mesh(
        new THREE.PlaneGeometry(apronW, apronH),
        apronMat
      );
      const apronTopY = legH + 0.2;
      apron.position.set(0, apronTopY - apronH / 2, torsoD / 2 + 0.02);
      apron.castShadow = true;
      group.add(apron);
      const shoulderY = legH + torsoH + 0.02;
      const strapX = torsoW / 2 + armW * 0.2;
      const strapW = 0.018;
      const strapThick = 0.008;
      const strapLen = shoulderY - apronTopY;
      const leftStrap = new THREE.Mesh(
        new THREE.BoxGeometry(strapW, strapLen, strapThick),
        apronMat.clone()
      );
      leftStrap.position.set(-strapX, (apronTopY + shoulderY) / 2, torsoD / 2 + 0.015);
      leftStrap.castShadow = true;
      group.add(leftStrap);
      const rightStrap = new THREE.Mesh(
        new THREE.BoxGeometry(strapW, strapLen, strapThick),
        apronMat.clone()
      );
      rightStrap.position.set(strapX, (apronTopY + shoulderY) / 2, torsoD / 2 + 0.015);
      rightStrap.castShadow = true;
      group.add(rightStrap);
    }

    const headRadius = 0.1;
    const head = new THREE.Mesh(
      new THREE.SphereGeometry(headRadius, 12, 10),
      skin
    );
    head.position.set(0, legH + torsoH + headRadius, 0);
    head.castShadow = true;
    group.add(head);

    const eyeMat = new THREE.MeshBasicMaterial({ color: 0x1a1a2e });
    const leftEye = new THREE.Mesh(
      new THREE.BoxGeometry(0.032, 0.004, 0.004),
      eyeMat
    );
    leftEye.position.set(-0.032, 0.028, headRadius * 0.92);
    head.add(leftEye);
    const rightEye = new THREE.Mesh(
      new THREE.BoxGeometry(0.032, 0.004, 0.004),
      eyeMat
    );
    rightEye.position.set(0.032, 0.028, headRadius * 0.92);
    head.add(rightEye);

    const mouthMat = new THREE.MeshBasicMaterial({ color: 0x2d1f1f });
    const mouth = new THREE.Mesh(
      new THREE.BoxGeometry(0.045, 0.012, 0.008),
      mouthMat
    );
    mouth.position.set(0, -0.028, headRadius * 0.92);
    head.add(mouth);

    const hairMat = new THREE.MeshStandardMaterial({
      color: hairColorNudged,
      metalness: 0.05,
      roughness: Math.max(0.6, Math.min(1, 0.85 + roughnessVar())),
    });
    hairMat.bumpMap = unitNoiseBumpMap;
    hairMat.bumpScale = 0.15;
    const addBangs = (parent) => {
      const bangH = headRadius * 0.32;
      const bangR = headRadius * 0.22;
      const leftBang = new THREE.Mesh(
        new THREE.ConeGeometry(bangR * 0.9, bangH, 5),
        hairMat
      );
      leftBang.position.set(-headRadius * 0.25, headRadius * 0.22, headRadius * 0.72);
      leftBang.rotation.x = 0.35;
      leftBang.rotation.z = 0.12;
      leftBang.castShadow = true;
      parent.add(leftBang);
      const rightBang = new THREE.Mesh(
        new THREE.ConeGeometry(bangR, bangH, 5),
        hairMat
      );
      rightBang.position.set(headRadius * 0.28, headRadius * 0.18, headRadius * 0.68);
      rightBang.rotation.x = 0.28;
      rightBang.rotation.z = -0.1;
      rightBang.castShadow = true;
      parent.add(rightBang);
      const centerBang = new THREE.Mesh(
        new THREE.ConeGeometry(bangR * 0.7, bangH * 0.9, 5),
        hairMat
      );
      centerBang.position.set(0, headRadius * 0.28, headRadius * 0.78);
      centerBang.rotation.x = 0.4;
      centerBang.castShadow = true;
      parent.add(centerBang);
    };
    if (gender === 'female') {
      const hairTop = new THREE.Mesh(
        new THREE.SphereGeometry(headRadius * 0.92, 12, 10, 0, Math.PI * 2, 0, Math.PI * 0.52),
        hairMat
      );
      hairTop.position.set(0, headRadius * 0.28, -headRadius * 0.18);
      hairTop.rotation.y = 0.06;
      hairTop.rotation.x = -0.04;
      hairTop.castShadow = true;
      head.add(hairTop);
      const hairLong = new THREE.Mesh(
        new THREE.BoxGeometry(headRadius * 1.15, headRadius * 2.2, headRadius * 0.55),
        hairMat
      );
      hairLong.position.set(0, -headRadius * 0.6, -headRadius * 0.95);
      hairLong.rotation.z = 0.03;
      hairLong.castShadow = true;
      head.add(hairLong);
      addBangs(head);
    } else {
      const hairCap = new THREE.Mesh(
        new THREE.SphereGeometry(headRadius * 0.9, 12, 10, 0, Math.PI * 2, 0, Math.PI * 0.5),
        hairMat
      );
      hairCap.position.set(0, headRadius * 0.4, -headRadius * 0.12);
      hairCap.rotation.y = 0.08;
      hairCap.rotation.x = -0.05;
      hairCap.rotation.z = 0.04;
      hairCap.castShadow = true;
      head.add(hairCap);
      const hairSides = new THREE.Mesh(
        new THREE.SphereGeometry(headRadius * 0.75, 10, 8, Math.PI * 0.2, Math.PI * 0.6, 0, Math.PI * 0.4),
        hairMat
      );
      hairSides.position.set(0, headRadius * 0.1, -headRadius * 0.05);
      hairSides.rotation.y = 0.1;
      hairSides.castShadow = true;
      head.add(hairSides);
      addBangs(head);
    }

    if (look.horns != null) {
      const hornsMat = new THREE.MeshStandardMaterial({
        color: darkenColor(nudgeColor(look.horns, 0.08)),
        metalness: Math.max(0, 0.12 + metalVar()),
        roughness: Math.max(0.4, Math.min(1, 0.62 + roughnessVar())),
      });
      hornsMat.bumpMap = unitNoiseBumpMap;
      hornsMat.bumpScale = 0.1;
      const bandMajor = headRadius * 1.12;
      const bandTube = headRadius * 0.22;
      const bandGeo = new THREE.TorusGeometry(bandMajor, bandTube, 8, 28);
      const band = new THREE.Mesh(bandGeo, hornsMat);
      band.rotation.x = Math.PI / 2;
      band.position.y = headRadius * 0.42;
      band.castShadow = true;
      head.add(band);
      const hornR = headRadius * 0.48;
      const hornH = headRadius * 2.55;
      const leftHorn = new THREE.Mesh(new THREE.ConeGeometry(hornR, hornH, 8), hornsMat.clone());
      leftHorn.position.set(-headRadius * 1.02, headRadius * 0.18, headRadius * 0.02);
      leftHorn.rotation.set(-0.42, -0.32, 0.58);
      leftHorn.castShadow = true;
      head.add(leftHorn);
      const rightHorn = new THREE.Mesh(new THREE.ConeGeometry(hornR, hornH, 8), hornsMat.clone());
      rightHorn.position.set(headRadius * 1.02, headRadius * 0.18, headRadius * 0.02);
      rightHorn.rotation.set(-0.42, 0.32, -0.58);
      rightHorn.castShadow = true;
      head.add(rightHorn);
    }

    group.userData.leftLeg = leftLeg;
    group.userData.rightLeg = rightLeg;
    group.userData.leftArm = leftArm;
    group.userData.rightArm = rightArm;
    return group;
  }

  function setWalkPose(mesh, t) {
    const u = mesh.userData;
    if (!u.leftLeg) return;
    const phase = t * Math.PI * 2;
    const legSwing = 0.35;
    const armSwing = 0.28;
    u.leftLeg.rotation.x = Math.sin(phase) * legSwing;
    u.rightLeg.rotation.x = Math.sin(phase + Math.PI) * legSwing;
    u.leftArm.rotation.y = Math.sin(phase + Math.PI) * armSwing;
    u.rightArm.rotation.y = Math.sin(phase) * armSwing;
  }

  function resetWalkPose(mesh) {
    const u = mesh.userData;
    if (!u.leftLeg) return;
    u.leftLeg.rotation.x = 0;
    u.rightLeg.rotation.x = 0;
    u.leftArm.rotation.y = 0;
    u.rightArm.rotation.y = 0;
  }

  function addUnitToScene(unit) {
    const body = createHumanFigure(unit.player, unit.class, unit.hairColor);
    body.position.copy(worldPos(unit.x, unit.y));
    body.castShadow = true;
    body.userData.unitId = unit.id;

    const legH = 0.28;
    const torsoH = 0.28;
    const torsoD = 0.12;
    const slashW = 0.18;
    const slashH = 0.04;
    const slashGeo = new THREE.PlaneGeometry(slashW, slashH);
    const slashMat = new THREE.MeshBasicMaterial({
      color: 0x5c2018,
      side: THREE.DoubleSide,
      depthTest: true,
      depthWrite: false,
    });
    const slashMark = new THREE.Mesh(slashGeo, slashMat);
    slashMark.position.set(0, legH + torsoH / 2, torsoD / 2 + 0.02);
    slashMark.rotation.x = -Math.PI / 2;
    slashMark.rotation.z = Math.PI / 4;
    slashMark.visible = unit.maxHp > 0 && unit.hp < unit.maxHp && unit.hp > 0;
    body.add(slashMark);
    body.userData.slashMark = slashMark;

    scene.add(body);
    unitMeshes.set(unit.id, body);
    updateUnitMeshLowHp(body, unit.maxHp > 0 && (unit.hp / unit.maxHp) < 0.35);
  }

  function updateUnitSlashVisibility(unit) {
    const mesh = unitMeshes.get(unit.id);
    if (!mesh || !mesh.userData.slashMark) return;
    mesh.userData.slashMark.visible = unit.maxHp > 0 && unit.hp < unit.maxHp && unit.hp > 0;
  }

  /** Make a unit mesh look dull and grayscale (e.g. for reanimated skeleton). */
  function makeMeshGrayscale(mesh) {
    const DULL = 0.55;
    mesh.traverse((child) => {
      if (!child.isMesh || !child.material) return;
      const mat = child.material;
      if (mat.color) {
        const r = mat.color.r;
        const g = mat.color.g;
        const b = mat.color.b;
        const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        const gray = Math.max(0, Math.min(1, luminance * DULL));
        mat.color.setRGB(gray, gray, gray);
      }
    });
  }

  const LOW_HP_VISUAL_THRESHOLD = 0.35;
  function updateUnitMeshLowHp(mesh, isLowHp) {
    if (!mesh) return;
    if (isLowHp) {
      mesh.rotation.x = 0.35;
      mesh.scale.setScalar(0.96);
      const u = mesh.userData;
      if (u && u.leftArm && u.rightArm) {
        u.leftArm.rotation.y = 0.2;
        u.rightArm.rotation.y = 0.2;
      }
      mesh.traverse((child) => {
        if (child.isMesh && child.material && child.material.color) {
          if (!child.userData.originalColor) child.userData.originalColor = child.material.color.clone();
          child.material.color.copy(child.userData.originalColor).multiplyScalar(0.82);
        }
      });
    } else {
      mesh.rotation.x = 0;
      mesh.scale.setScalar(1);
      const u = mesh.userData;
      if (u && u.leftArm && u.rightArm) {
        u.leftArm.rotation.y = 0;
        u.rightArm.rotation.y = 0;
      }
      mesh.traverse((child) => {
        if (child.isMesh && child.material && child.userData.originalColor) {
          child.material.color.copy(child.userData.originalColor);
        }
      });
    }
  }

  function levelUpUnit(unit) {
    if (unit.level >= 3) return;
    const hpRatio = unit.maxHp > 0 ? unit.hp / unit.maxHp : 1;
    unit.level += 1;
    const boost = (v) => Math.max(1, Math.ceil(v * 1.1));
    const boostStat = (v) => Math.max(1, Math.ceil(v * 1.1));
    unit.maxHp = boost(unit.maxHp);
    unit.maxMp = boost(unit.maxMp);
    unit.hp = Math.max(1, Math.min(unit.maxHp, Math.ceil(hpRatio * unit.maxHp)));
    unit.mp = Math.max(1, Math.min(unit.maxMp, Math.ceil(hpRatio * unit.maxMp)));
    unit.str = boostStat(unit.str);
    unit.agi = boostStat(unit.agi);
    unit.vit = boostStat(unit.vit);
    unit.dex = boostStat(unit.dex);
    unit.luk = boostStat(unit.luk);
    unit.int = boostStat(unit.int);
    if (unit.range > 3) unit.range = boostStat(unit.range);
    console.log('[LEVEL UP]', `${unit.name} (${unit.class}, P${unit.player})`, `→ Lv.${unit.level}`, `| HP ${unit.hp}/${unit.maxHp} MP ${unit.mp}/${unit.maxMp} STR ${unit.str} VIT ${unit.vit}`);
    showLevelUpAnimation(unit);
  }

  function showLevelUpAnimation(unit) {
    const mesh = unitMeshes.get(unit.id);
    const levelClass = unit.level === 3 ? 'levelup level3' : unit.level === 2 ? 'levelup level2' : 'levelup';
    showLevelUpFloatingText(unit, levelClass);
    if (!mesh) return;
    const startTime = performance.now();
    let levelTickCount = 0;
    function levelUpTick(now) {
      levelTickCount++;
      if (levelTickCount % 2 === 0) requestRender();
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / LEVEL_UP_ANIMATION_MS);
      const s = t < 0.5 ? 1 + 0.35 * (t / 0.5) : 1 + 0.35 * (1 - (t - 0.5) / 0.5);
      mesh.scale.setScalar(s);
      if (t < 1) requestAnimationFrame(levelUpTick);
      else mesh.scale.setScalar(1);
    }
    requestAnimationFrame(levelUpTick);
  }

  function playBuffAnimation(unit, onDone) {
    const mesh = unitMeshes.get(unit.id);
    if (!mesh) {
      if (onDone) onDone();
      return;
    }
    const startTime = performance.now();
    let tickCount = 0;
    function tick(now) {
      tickCount++;
      if (tickCount % 2 === 0) requestRender();
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / LEVEL_UP_ANIMATION_MS);
      const s = t < 0.5 ? 1 + 0.35 * (t / 0.5) : 1 + 0.35 * (1 - (t - 0.5) / 0.5);
      mesh.scale.setScalar(s);
      if (t < 1) requestAnimationFrame(tick);
      else {
        mesh.scale.setScalar(1);
        if (onDone) onDone();
      }
    }
    requestAnimationFrame(tick);
  }

  const CAMERA_TWEEN_MS = 400;
  const ATTACK_ANIMATION_MS = 280;
  const ATTACK_HIT_AT_T = 0.45;
  const HIT_REACT_MS = 160;
  const PROJECTILE_MS = 280;
  const SPELL_EXPLOSION_MS = 350;
  const DEATH_ANIMATION_MS = 500;
  const LEVEL_UP_ANIMATION_MS = 600;
  const SUMMON_GROW_MS = 400;
  const SUMMON_JUMP_MS = 280;
  const SUMMON_START_SCALE = 0.2;
  const SUMMON_JUMP_HEIGHT = 0.18;
  let cameraTweenActive = false;
  const _startTarget = new THREE.Vector3(); 
  const _startPosition = new THREE.Vector3();
  const _endTarget = new THREE.Vector3();
  const _endPosition = new THREE.Vector3();

  function centerCameraOnCurrentPlayer(instant = false) {
    cameraFollowUnit = true;
    let unit = null;
    if (phase === 'playing' && initiativeOrder.length > 0) {
      const uid = initiativeOrder[currentTurnIndex];
      const uCur = getUnitById(uid);
      unit = uCur && uCur.hp > 0 ? uCur : null;
    }
    if (!unit) unit = units.find((u) => u.player === currentPlayer && u.hp > 0);
    if (!unit) return;
    let zoomDist = camera.position.distanceTo(cameraTarget);
    if (zoomDist < 0.1) zoomDist = INITIAL_ZOOM;
    _zoomDir.copy(camera.position).sub(cameraTarget).normalize();
    if (_zoomDir.lengthSq() < 0.01) _zoomDir.copy(cameraOffset).normalize();
    _endTarget.copy(worldPos(unit.x, unit.y));
    _endPosition.copy(_endTarget).add(_zoomDir.clone().multiplyScalar(zoomDist));

    if (instant || cameraTweenActive) {
      cameraTarget.copy(_endTarget);
      camera.position.copy(_endPosition);
      camera.lookAt(cameraTarget);
      requestRender();
      return;
    }

    cameraTweenActive = true;
    _startTarget.copy(cameraTarget);
    _startPosition.copy(camera.position);
    const startTime = performance.now();
    let cameraTickCount = 0;
    renderer.shadowMap.enabled = false;

    function tick(now) {
      cameraTickCount++;
      if (cameraTickCount % 2 === 0) requestRender();
      const t = Math.min(1, (now - startTime) / CAMERA_TWEEN_MS);
      const eased = t * (2 - t);
      cameraTarget.lerpVectors(_startTarget, _endTarget, eased);
      camera.position.lerpVectors(_startPosition, _endPosition, eased);
      camera.lookAt(cameraTarget);
      if (t < 1) requestAnimationFrame(tick);
      else {
        renderer.shadowMap.enabled = true;
        cameraTweenActive = false;
      }
    }
    requestAnimationFrame(tick);
  }

  let turnCount = 0;
  let currentPlayer = 1;
  let phase = 'draft';
  let gameMode = 'pvp';
  let localPlayerNumber = 1;
  let playerNames = { 1: '', 2: '' };
  let peerConnection = null;
  let dataChannel = null;
  let onlineMapSeed = null;
  let onlineMapMode = 'long';
  function getPlayerLabel(playerNum) {
    if (gameMode === 'online' && playerNames[playerNum]) return playerNames[playerNum];
    return 'Player ' + playerNum;
  }
  let cvcpuTotalGames = 1;
  let cvcpuGamesPlayed = 0;
  let wakeLock = null;

  async function requestWakeLock() {
    if (typeof navigator === 'undefined' || !navigator.wakeLock) return;
    try {
      wakeLock = await navigator.wakeLock.request('screen');
      wakeLock.addEventListener('release', () => { wakeLock = null; });
    } catch (_) { wakeLock = null; }
  }

  function releaseWakeLock() {
    if (wakeLock) {
      wakeLock.release().catch(() => {});
      wakeLock = null;
    }
  }

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' && gameMode === 'cvcpu' && phase === 'playing') {
      requestWakeLock();
    }
  });

  let aiDraftPreference = 'balanced';
  let availableClasses = new Set(CLASS_KEYS);
  let draftClassOrder = [...CLASS_KEYS];
  let draftPickIndex = 0;
  /** Completed class picks per player (O(1) draft pick label). */
  const draftPickCountByPlayer = { 1: 0, 2: 0 };
  let pendingClassKey = null;
  let draftSelectedClassKey = null;
  let draftClassSelectedCardEl = null;
  let placementTileKeys = new Set();
  /** Same order as pickClass / showPlacementHighlights (AI reuses without re-sorting). */
  let placementTilesSorted = [];
  let initiativeOrder = [];
  let currentTurnIndex = 0;
  /** Debounce CPU auto-play so stacked updateTurnUI calls do not queue multiple runPlayingAI timers (skipped turns). */
  let cvCpuAiTimeoutId = null;
  let selectedUnitId = null;
  let reachable = new Map();
  let previewUnitId = null;

  function showUnitPreviewCard(unit) {
    if (!unit || unit.hp <= 0) return;
    previewUnitId = unit.id;
    const card = document.getElementById('unit-preview-card');
    const imgEl = document.getElementById('unit-preview-image');
    const nameEl = document.getElementById('unit-preview-name');
    const metaEl = document.getElementById('unit-preview-meta');
    const statsEl = document.getElementById('unit-preview-stats');
    card.classList.remove('player-1', 'player-2');
    card.classList.add(unit.player === 1 ? 'player-1' : 'player-2');
    card.classList.toggle('level-2', unit.level >= 2 && unit.level < 3);
    card.classList.toggle('level-3', unit.level >= 3);
    imgEl.src = CLASS_IMAGES[unit.class] || '';
    imgEl.alt = unit.name;
    nameEl.textContent = unit.name;
    metaEl.textContent = `Lv.${unit.level} ${unit.class} — ${getPlayerLabel(unit.player)}`;
    const statRows = [
      ['HP', `${unit.hp}/${unit.maxHp}`, 'stat-val-hp'],
      ['MP', `${unit.mp}/${unit.maxMp}`, ''],
      ['STR', formatStatWithBuffs(unit, 'str'), ''],
      ['AGI', formatStatWithBuffs(unit, 'agi'), ''],
      ['VIT', formatStatWithBuffs(unit, 'vit'), ''],
      ['DEX', formatStatWithBuffs(unit, 'dex'), ''],
      ['LUK', formatStatWithBuffs(unit, 'luk'), ''],
      ['INT', formatStatWithBuffs(unit, 'int'), ''],
    ];
    if (unit.tempDebuff && unit.tempDebuff.poison != null) {
      statRows.push(['Poison', `${unit.tempDebuff.poison} dmg/turn`, 'stat-val-poison']);
    }
    if (unit.tempBuff && unit.tempBuff.heal != null) {
      statRows.push(['Regen', `${unit.tempBuff.heal} HP/turn`, 'stat-val-buff']);
    }
    statsEl.innerHTML = statRows.map(([label, val, extraClass]) => {
      const cls = extraClass ? ` ${extraClass}` : '';
      return `<span class="stat-label">${label}</span><span class="stat-val${cls}">${val}</span>`;
    }).join('');
    const lowHp = unit.maxHp > 0 && (unit.hp / unit.maxHp) < 0.3;
    card.classList.toggle('low-hp', lowHp);
    card.style.display = 'block';
  }

  function hideUnitPreviewCard() {
    previewUnitId = null;
    const card = document.getElementById('unit-preview-card');
    card.classList.remove('low-hp', 'level-2', 'level-3');
    card.style.display = 'none';
  }
  let isUnitMoving = false;
  let isAttackMode = false;
  let isSkillMode = false;
  let selectedSkill = null;
  let hasMoved = false;
  let hasAttacked = false;
  let isChoosingFacing = false;
  let allowedFacingAngles = [];
  const highlightGroup = new THREE.Group();
  scene.add(highlightGroup);
  const highlightMaterials = [];

  let needsRender = true;
  let lastInteractionTime = 0;
  let lastIdleFrameTime = 0;
  function requestRender() {
    needsRender = true;
    lastInteractionTime = performance.now();
  }

  const unitBordersGroup = new THREE.Group();
  scene.add(unitBordersGroup);
  const unitBorderMaterials = [];

  const TILE_BORDER_SIZE = TILE_SIZE;
  const TILE_BORDER_THICKNESS = 0.02;
  const PLAYER1_BORDER_COLOR = 0x3366ff;
  const PLAYER2_BORDER_COLOR = 0xcc3333;

  function createSquareBorderGeometry(size, thickness) {
    const half = size / 2;
    const inner = half - thickness;
    const shape = new THREE.Shape();
    shape.moveTo(-half, -half);
    shape.lineTo(half, -half);
    shape.lineTo(half, half);
    shape.lineTo(-half, half);
    shape.lineTo(-half, -half);
    const hole = new THREE.Path();
    hole.moveTo(-inner, -inner);
    hole.lineTo(inner, -inner);
    hole.lineTo(inner, inner);
    hole.lineTo(-inner, inner);
    hole.lineTo(-inner, -inner);
    shape.holes.push(hole);
    return new THREE.ShapeGeometry(shape);
  }

  const sharedBorderGeometry = createSquareBorderGeometry(TILE_BORDER_SIZE, TILE_BORDER_THICKNESS);

  function updateUnitTileBorders(excludeUnitId = null) {
    const sig = units
      .filter((u) => u.hp > 0 && u.id !== excludeUnitId)
      .map((u) => `${u.id},${u.x},${u.y},${u.player}`)
      .sort()
      .join('|');
    if (updateUnitTileBorders._lastSig === sig && updateUnitTileBorders._lastExclude === excludeUnitId) return;
    updateUnitTileBorders._lastSig = sig;
    updateUnitTileBorders._lastExclude = excludeUnitId;

    unitBorderMaterials.forEach((m) => m.dispose());
    unitBorderMaterials.length = 0;
    while (unitBordersGroup.children.length) {
      const c = unitBordersGroup.children[0];
      unitBordersGroup.remove(c);
    }
    units.filter((u) => u.hp > 0 && u.id !== excludeUnitId).forEach((unit) => {
      const gx = unit.x;
      const gy = unit.y;
      const topY = BASE_HEIGHT + world.height[gy][gx] * 0.35;
      const surfaceY = topY / 2 + BASE_HEIGHT / 2;
      const px = gx * TILE_SIZE - hw + TILE_SIZE / 2;
      const pz = gy * TILE_SIZE - hh + TILE_SIZE / 2;
      const y = surfaceY + 0.02;
      const color = unit.player === 1 ? PLAYER1_BORDER_COLOR : PLAYER2_BORDER_COLOR;
      const borderMat = new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide });
      const borderMesh = new THREE.Mesh(sharedBorderGeometry, borderMat);
      borderMesh.rotation.x = -Math.PI / 2;
      borderMesh.position.set(px, y, pz);
      unitBordersGroup.add(borderMesh);
      unitBorderMaterials.push(borderMat);
    });
    requestRender();
  }

  const turnPointerHeight = 1.15;
  const turnPointerPlayerColors = { 1: 0x7BA3F5, 2: 0xEE7A8F }; // light royal blue, light crimson
  const turnPointerMesh = (() => {
    const material = new THREE.MeshBasicMaterial({ color: turnPointerPlayerColors[1] });
    const cone = new THREE.Mesh(
      new THREE.ConeGeometry(0.1, 0.25, 8),
      material
    );
    cone.rotation.x = Math.PI;
    cone.visible = false;
    scene.add(cone);
    return cone;
  })();

  function updateActiveUnitPointer() {
    if (phase !== 'playing' || initiativeOrder.length === 0 || isChoosingFacing) {
      turnPointerMesh.visible = false;
      turnPointerMesh.removeFromParent();
      scene.add(turnPointerMesh);
      return;
    }
    const uid = initiativeOrder[currentTurnIndex];
    const unit = getUnitById(uid);
    if (!unit || unit.hp <= 0) {
      turnPointerMesh.visible = false;
      turnPointerMesh.removeFromParent();
      scene.add(turnPointerMesh);
      return;
    }
    const unitMesh = unitMeshes.get(uid);
    if (!unitMesh) {
      turnPointerMesh.visible = false;
      return;
    }
    turnPointerMesh.removeFromParent();
    unitMesh.add(turnPointerMesh);
    turnPointerMesh.position.set(0, turnPointerHeight, 0);
    if (turnPointerMesh.material) turnPointerMesh.material.color.setHex(turnPointerPlayerColors[unit.player] ?? turnPointerPlayerColors[1]);
    turnPointerMesh.visible = true;
  }

  function getAllowedFacingAngles(unit) {
    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const angles = [];
    for (const [dx, dy] of dirs) {
      const nx = unit.x + dx;
      const ny = unit.y + dy;
      if (!isWalkable(world, nx, ny)) continue;
      const occupied = units.some((o) => o.id !== unit.id && o.x === nx && o.y === ny && o.hp > 0);
      if (occupied) continue;
      angles.push(Math.atan2(dx, dy));
    }
    return angles;
  }

  function snapToAllowedFacing(angle) {
    if (allowedFacingAngles.length === 0) return angle;
    if (allowedFacingAngles.length === 1) return allowedFacingAngles[0];
    let best = allowedFacingAngles[0];
    let bestDiff = Math.abs(normalizeAngle(angle - best));
    for (let i = 1; i < allowedFacingAngles.length; i++) {
      const d = Math.abs(normalizeAngle(angle - allowedFacingAngles[i]));
      if (d < bestDiff) {
        bestDiff = d;
        best = allowedFacingAngles[i];
      }
    }
    return best;
  }

  function normalizeAngle(a) {
    while (a > Math.PI) a -= 2 * Math.PI;
    while (a < -Math.PI) a += 2 * Math.PI;
    return a;
  }

  const facingArrowHeight = 1.2;
  const facingArrowMesh = (() => {
    const cone = new THREE.Mesh(
      new THREE.ConeGeometry(0.12, 0.35, 8),
      new THREE.MeshBasicMaterial({ color: 0x44aaff })
    );
    cone.rotation.x = -Math.PI / 2;
    cone.visible = false;
    scene.add(cone);
    return cone;
  })();

  function updateFacingFromPointer(clientX, clientY) {
    if (!isChoosingFacing || initiativeOrder.length === 0 || allowedFacingAngles.length === 0) return;
    const uid = initiativeOrder[currentTurnIndex];
    const unit = getUnitById(uid);
    const mesh = unitMeshes.get(uid);
    if (!unit || !mesh) return;
    pointerToNdc(clientX, clientY);
    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects(tilesGroup.children, true);
    if (intersects.length === 0) return;
    let point = null;
    for (const hit of intersects) {
      if (tileHitFromIntersect(hit)) {
        point = hit.point;
        break;
      }
    }
    if (!point) return;
    const unitWorld = worldPos(unit.x, unit.y);
    const dx = point.x - unitWorld.x;
    const dz = point.z - unitWorld.z;
    if (dx * dx + dz * dz < 1e-6) return;
    const angle = Math.atan2(dx, dz);
    mesh.rotation.y = snapToAllowedFacing(angle);
  }

  function showFacingArrow() {
    if (initiativeOrder.length === 0) return;
    const uid = initiativeOrder[currentTurnIndex];
    const unit = getUnitById(uid);
    const mesh = unitMeshes.get(uid);
    if (!unit || !mesh) return;
    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    allowedFacingAngles = dirs.map(([dx, dy]) => Math.atan2(dx, dy));
    facingArrowMesh.removeFromParent();
    mesh.add(facingArrowMesh);
    facingArrowMesh.position.set(0, facingArrowHeight, 0);
    facingArrowMesh.rotation.x = -Math.PI / 2;
    facingArrowMesh.rotation.y = 0;
    facingArrowMesh.rotation.z = Math.PI;
    facingArrowMesh.visible = true;
    mesh.rotation.y = allowedFacingAngles[0];
  }

  function hideFacingArrow() {
    facingArrowMesh.visible = false;
    facingArrowMesh.removeFromParent();
    scene.add(facingArrowMesh);
  }

  let DRAFT_ORDER = [];
  (function initDraftOrder() {
    const n = draftPicksPerPlayer;
    const order = [1];
    for (let i = 0; i < Math.floor((n - 1) / 2); i++) order.push(2, 2, 1, 1);
    if (n % 2 === 1) order.push(2);
    else { order.push(2, 2); order.push(1); }
    DRAFT_ORDER = order;
  })();

  function getCurrentDraftPlayer() {
    return DRAFT_ORDER[draftPickIndex];
  }

  function getCurrentPlayerPickCount() {
    const p = getCurrentDraftPlayer();
    return draftPickCountByPlayer[p] + 1;
  }

  function startDraftPhase() {
    deathOrderSeq = 0;
    deadCorpseCount = 0;
    powerups.forEach((pu) => {
      powerupMeshesGroup.remove(pu.mesh);
      pu.mesh.geometry.dispose();
      if (pu.mesh.material && pu.mesh.material.dispose) pu.mesh.material.dispose();
      if (pu.glowMesh) {
        powerupMeshesGroup.remove(pu.glowMesh);
        pu.glowMesh.geometry.dispose();
        if (pu.glowMesh.material && pu.glowMesh.material.dispose) pu.glowMesh.material.dispose();
      }
    });
    powerups.clear();
    powerupSpawnedTurnsLeft = { 30: false, 20: false, 10: false };

    const n = draftPicksPerPlayer;
    const order = [1];
    for (let i = 0; i < Math.floor((n - 1) / 2); i++) order.push(2, 2, 1, 1);
    if (n % 2 === 1) order.push(2);
    else { order.push(2, 2); order.push(1); }
    DRAFT_ORDER = order;
    phase = 'draft';
    draftPickIndex = 0;
    draftPickCountByPlayer[1] = 0;
    draftPickCountByPlayer[2] = 0;
    availableClasses = new Set(CLASS_KEYS);
    draftClassOrder = shuffleArray([...CLASS_KEYS]);
    pendingClassKey = null;
    draftSelectedClassKey = null;
    draftClassSelectedCardEl = null;
    placementTileKeys.clear();
    placementTilesSorted = [];
    clearHighlights();
    updateDraftUI();
    document.getElementById('turn-menu').style.display = 'none';
    document.getElementById('draft-panel').style.display = 'flex';
  }

  function buildInitiativeOrder() {
    return units
      .filter((u) => u.hp > 0)
      .sort((a, b) => {
        const agiA = getEffectiveStat(a, 'agi');
        const agiB = getEffectiveStat(b, 'agi');
        if (agiB !== agiA) return agiB - agiA;
        const dexA = getEffectiveStat(a, 'dex');
        const dexB = getEffectiveStat(b, 'dex');
        return dexB - dexA;
      })
      .map((u) => u.id);
  }

  /**
   * Get a valid tile to place a summoned unit: prefer tile in front of summoner, else any walkable unoccupied tile at 1 distance.
   * @param {object} summoner - unit that is summoning
   * @returns {{ gx: number, gy: number } | null}
   */
  function getSummonPosition(summoner) {
    const occupied = new Set(units.filter((u) => u.hp > 0).map((u) => u.y * world.w + u.x));
    const isOccupied = (gx, gy) => occupied.has(gy * world.w + gx);
    const inBounds = (gx, gy) => gx >= 0 && gx < world.w && gy >= 0 && gy < world.h;
    const valid = (gx, gy) => inBounds(gx, gy) && isWalkable(world, gx, gy) && !isOccupied(gx, gy);

    const mesh = unitMeshes.get(summoner.id);
    const angle = mesh != null ? mesh.rotation.y : (summoner.player === 1 ? Math.PI : 0);
    const frontGx = summoner.x - Math.round(Math.cos(angle));
    const frontGy = summoner.y + Math.round(Math.sin(angle));
    if (valid(frontGx, frontGy)) return { gx: frontGx, gy: frontGy };

    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    for (const [dx, dy] of dirs) {
      const gx = summoner.x + dx;
      const gy = summoner.y + dy;
      if (valid(gx, gy)) return { gx, gy };
    }
    return null;
  }

  /**
   * Summon a new unit. Summoned unit is placed in front of summoner (or at 1 tile distance if blocked),
   * or at opts.position if provided (e.g. for reanimate at corpse tile).
   * Summoned unit is added to turn order by same criteria (AGI/DEX). Summoned units die when summoner dies
   * and do not count toward win condition.
   * @param {object} summoner - unit performing the summon
   * @param {object} stats - stats for the summoned unit: name, class (for appearance), hp, maxHp, mp, maxMp, str, agi, vit, dex, luk, int, range; optional hairColor
   * @param {Array<object>} [skills] - optional array of skill definitions (same shape as CLASS_SKILLS entries) the summoned unit can use
   * @param {{ position?: { gx: number, gy: number }, useGrayscaleAppearance?: boolean, ownerPlayer?: number, omitSummonedBy?: boolean }} [opts] - optional; position forces placement at (gx, gy); useGrayscaleAppearance makes mesh dull/grayscale; ownerPlayer sets team (e.g. reanimation keeps dead unit's player); omitSummonedBy skips summon link (reanimation copies are normal roster units)
   * @returns {object | null} the summoned unit, or null if no valid tile
   */
  function summonUnit(summoner, stats, skills, opts) {
    const pos = opts?.position && opts.position.gx != null && opts.position.gy != null
      ? { gx: opts.position.gx, gy: opts.position.gy }
      : getSummonPosition(summoner);
    if (!pos) return null;

    const appearanceClass = stats.class && CLASS_KEYS.includes(stats.class) ? stats.class : 'knight';
    const hairColor = stats.hairColor != null ? stats.hairColor : (CLASS_LOOK[appearanceClass] || CLASS_LOOK.knight).hair;
    const unitPlayer = opts?.ownerPlayer != null ? opts.ownerPlayer : summoner.player;

    const unit = {
      id: nextUnitId++,
      player: unitPlayer,
      x: pos.gx,
      y: pos.gy,
      level: stats.level != null ? stats.level : 1,
      name: stats.name != null ? stats.name : 'Summoned',
      class: appearanceClass,
      hairColor,
      hp: stats.hp != null ? stats.hp : 10,
      maxHp: stats.maxHp != null ? stats.maxHp : 10,
      mp: stats.mp != null ? stats.mp : 5,
      maxMp: stats.maxMp != null ? stats.maxMp : 5,
      str: stats.str != null ? stats.str : 5,
      agi: stats.agi != null ? stats.agi : 5,
      vit: stats.vit != null ? stats.vit : 5,
      dex: stats.dex != null ? stats.dex : 5,
      luk: stats.luk != null ? stats.luk : 5,
      int: stats.int != null ? stats.int : 5,
      range: stats.range != null ? stats.range : 1,
    };
    if (!opts?.omitSummonedBy) unit.summonedBy = summoner.id;
    if (skills != null && Array.isArray(skills) && skills.length > 0) unit.summonedSkills = skills;

    units.push(unit);
    registerUnitInIdIndex(unit);
    updateUnitTileIndex(unit, null, null);
    addUnitToScene(unit);
    const summonedMesh = unitMeshes.get(unit.id);
    if (summonedMesh && opts?.useGrayscaleAppearance) makeMeshGrayscale(summonedMesh);
    if (summonedMesh) {
      const summonerMesh = unitMeshes.get(summoner.id);
      summonedMesh.rotation.y = opts?.ownerPlayer != null
        ? (unitPlayer === 1 ? Math.PI : 0)
        : (summonerMesh != null ? summonerMesh.rotation.y : (summoner.player === 1 ? Math.PI : 0));
      summonedMesh.scale.setScalar(SUMMON_START_SCALE);
      const basePos = worldPos(unit.x, unit.y);
      const startTime = performance.now();
      let tickCount = 0;
      function summonTick(now) {
        tickCount++;
        if (tickCount % 2 === 0) requestRender();
        const elapsed = now - startTime;
        if (elapsed < SUMMON_GROW_MS) {
          const t = elapsed / SUMMON_GROW_MS;
          const easeOut = 1 - (1 - t) * (1 - t);
          const s = SUMMON_START_SCALE + (1 - SUMMON_START_SCALE) * easeOut;
          summonedMesh.scale.setScalar(s);
          requestAnimationFrame(summonTick);
          return;
        }
        const jumpElapsed = elapsed - SUMMON_GROW_MS;
        if (jumpElapsed < SUMMON_JUMP_MS) {
          const t = jumpElapsed / SUMMON_JUMP_MS;
          const jumpT = Math.sin(t * Math.PI);
          summonedMesh.position.y = basePos.y + SUMMON_JUMP_HEIGHT * jumpT;
          requestAnimationFrame(summonTick);
          return;
        }
        summonedMesh.scale.setScalar(1);
        summonedMesh.position.y = basePos.y;
        requestRender();
      }
      requestAnimationFrame(summonTick);
    }

    const actorIdPreservingTurn =
      phase === 'playing' &&
      initiativeOrder.length > 0 &&
      currentTurnIndex >= 0 &&
      currentTurnIndex < initiativeOrder.length
        ? initiativeOrder[currentTurnIndex]
        : null;
    initiativeOrder = buildInitiativeOrder();
    if (actorIdPreservingTurn != null) {
      const newIdx = initiativeOrder.indexOf(actorIdPreservingTurn);
      if (newIdx >= 0) currentTurnIndex = newIdx;
    }
    updateUnitTileBorders();
    if (typeof updateTurnUI === 'function') updateTurnUI();
    requestRender();
    return unit;
  }

  function reanimateDeadUnit(summoner, deadUnit) {
    const idx = units.indexOf(deadUnit);
    if (idx === -1) return null;
    unregisterUnitId(deadUnit.id);
    units.splice(idx, 1);
    deadCorpseCount = Math.max(0, deadCorpseCount - 1);
    const oldMesh = unitMeshes.get(deadUnit.id);
    if (oldMesh) {
      scene.remove(oldMesh);
      unitMeshes.delete(deadUnit.id);
    }

    const appearanceClass = deadUnit.class && CLASS_KEYS.includes(deadUnit.class) ? deadUnit.class : 'knight';
    const hairColor = deadUnit.hairColor != null ? deadUnit.hairColor : (CLASS_LOOK[appearanceClass] || CLASS_LOOK.knight).hair;
    const q = (v) => Math.max(1, Math.floor((v || 0) * 6 / 7));
    const maxHp = q(deadUnit.maxHp);
    const maxMp = q(deadUnit.maxMp);
    const stats = {
      name: 'Reanimated ' + deadUnit.name,
      class: appearanceClass,
      hairColor,
      level: deadUnit.level,
      hp: q(deadUnit.maxHp),
      maxHp,
      mp: q(deadUnit.maxMp),
      maxMp,
      str: q(deadUnit.str),
      agi: q(deadUnit.agi),
      vit: q(deadUnit.vit),
      dex: q(deadUnit.dex),
      luk: q(deadUnit.luk),
      int: q(deadUnit.int),
      range: deadUnit.range,
    };
    const skills = (deadUnit.summonedSkills && deadUnit.summonedSkills.length > 0)
      ? deadUnit.summonedSkills.slice()
      : (CLASS_SKILLS[appearanceClass] || []).slice();
    const occupied = new Set(units.filter((u) => u.hp > 0).map((u) => u.y * world.w + u.x));
    const cx = deadUnit.x;
    const cy = deadUnit.y;
    const corpseTileFree =
      isWalkable(world, cx, cy) && !occupied.has(cy * world.w + cx);
    const summonOpts = {
      useGrayscaleAppearance: true,
      ownerPlayer: deadUnit.player,
      omitSummonedBy: true,
    };
    if (corpseTileFree) summonOpts.position = { gx: cx, gy: cy };
    return summonUnit(summoner, stats, skills, summonOpts);
  }

  function endDraftPhase() {
    document.getElementById('draft-panel').style.display = 'none';
    const placementCardEl = document.getElementById('draft-placement-card');
    if (placementCardEl) {
      placementCardEl.style.display = 'none';
      placementCardEl.innerHTML = '';
    }
    clearHighlights();
    const battleStartEl = document.getElementById('battle-start-overlay');
    if (battleStartEl) {
      battleStartEl.classList.add('visible');
      battleStartEl.setAttribute('aria-hidden', 'false');
    }
    document.getElementById('draft-panel').style.display = 'none';
    const placementCardEl2 = document.getElementById('draft-placement-card');
    if (placementCardEl2) {
      placementCardEl2.style.display = 'none';
      placementCardEl2.innerHTML = '';
    }
    phase = 'playing';
    turnCount = 0;
    initiativeOrder = buildInitiativeOrder();
    currentTurnIndex = 0;
    while (currentTurnIndex < initiativeOrder.length) {
      const u0 = getUnitById(initiativeOrder[currentTurnIndex]);
      if (u0 && u0.hp > 0) break;
      currentTurnIndex++;
    }
    if (currentTurnIndex >= initiativeOrder.length) currentTurnIndex = 0;
    const currentUnit = getUnitById(initiativeOrder[currentTurnIndex]);
    currentPlayer = currentUnit ? currentUnit.player : 1;
    hasMoved = false;
    hasAttacked = false;
    selectedUnitId = initiativeOrder[currentTurnIndex];
    const BATTLE_START_DELAY_MS = 4000;
    setTimeout(() => {
      if (battleStartEl) {
        battleStartEl.classList.remove('visible');
        battleStartEl.setAttribute('aria-hidden', 'true');
      }
      document.getElementById('turn-menu').style.display = 'flex';
      updateUnitTileBorders();
    updateTurnUI();
    updateActiveUnitPointer();
    centerCameraOnCurrentPlayer(true);
      if (gameMode === 'cvcpu') requestWakeLock();
    }, BATTLE_START_DELAY_MS);
  }

  function updateDraftUI() {
    const draftPanel = document.getElementById('draft-panel');
    const draftTitle = document.getElementById('draft-title');
    const draftClasses = document.getElementById('draft-classes');
    const draftMessage = document.getElementById('draft-message');
    const turnEl = document.getElementById('turn-player');
    const placementCardEl = document.getElementById('draft-placement-card');
    if (pendingClassKey) {
      draftPanel.style.display = 'none';
      turnEl.textContent = `Draft: ${getPlayerLabel(getCurrentDraftPlayer())} — place ${CLASSES[pendingClassKey].name}`;
      const p = getCurrentDraftPlayer();
      placementCardEl.style.display = 'flex';
      placementCardEl.classList.remove('player-1', 'player-2');
      placementCardEl.classList.add('player-' + p);
      placementCardEl.style.left = p === 1 ? '24px' : '';
      placementCardEl.style.right = p === 2 ? '24px' : '';
      const selectedClassKeys = [
        ...units.filter((u) => u.player === p).map((u) => u.class),
        pendingClassKey,
      ];
      const renderCard = (key, isCurrent) => {
        const c = CLASSES[key];
        return `
        <div class="draft-class-card${isCurrent ? ' draft-class-card-current' : ''}">
          <img class="draft-class-card-image" src="${CLASS_IMAGES[key] || ''}" alt="${c.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="draft-class-card-body">
            <div class="draft-class-card-name">${c.name}</div>
            <div class="draft-class-card-stats">
              <span class="draft-stat-label">HP</span><span class="draft-stat-value">${c.hp}</span>
              <span class="draft-stat-label">MP</span><span class="draft-stat-value">${c.mp}</span>
              <span class="draft-stat-label">STR</span><span class="draft-stat-value">${c.str}</span>
              <span class="draft-stat-label">AGI</span><span class="draft-stat-value">${c.agi}</span>
              <span class="draft-stat-label">VIT</span><span class="draft-stat-value">${c.vit}</span>
              <span class="draft-stat-label">DEX</span><span class="draft-stat-value">${c.dex}</span>
              <span class="draft-stat-label">LUK</span><span class="draft-stat-value">${c.luk}</span>
              <span class="draft-stat-label">INT</span><span class="draft-stat-value">${c.int}</span>
              <span class="draft-stat-label">Range</span><span class="draft-stat-value">${c.range}</span>
            </div>
          </div>
        </div>
      `;
      };
      const DRAFT_PLACEMENT_MAX_ROWS = 3;
      if (selectedClassKeys.length > DRAFT_PLACEMENT_MAX_ROWS) {
        placementCardEl.classList.add('draft-placement-cols');
        const columns = [];
        for (let i = 0; i < selectedClassKeys.length; i += DRAFT_PLACEMENT_MAX_ROWS) {
          columns.push(selectedClassKeys.slice(i, i + DRAFT_PLACEMENT_MAX_ROWS));
        }
        const lastIndex = selectedClassKeys.length - 1;
        placementCardEl.innerHTML = columns.map((colKeys, colIndex) => {
          const isCurrentCol = colIndex === columns.length - 1;
          const cardsHtml = colKeys.map((key, i) => {
            const globalIndex = colIndex * DRAFT_PLACEMENT_MAX_ROWS + i;
            const isCurrent = globalIndex === lastIndex;
            return renderCard(key, isCurrent);
          }).join('');
          return `<div class="draft-placement-col${isCurrentCol ? ' draft-placement-col-current' : ''}">${cardsHtml}</div>`;
        }).join('');
      } else {
        placementCardEl.classList.remove('draft-placement-cols');
        placementCardEl.innerHTML = selectedClassKeys.map((key, i) => {
          const isCurrent = i === selectedClassKeys.length - 1;
          return renderCard(key, isCurrent);
        }).join('');
      }
      if (gameMode === 'pvcpu' && getCurrentDraftPlayer() === 2) setTimeout(runDraftAI, 500);
      if (gameMode === 'cvcpu') setTimeout(runDraftAI, 500);
      return;
    }
    placementCardEl.style.display = 'none';
    placementCardEl.innerHTML = '';
    if (phase === 'draft') {
      draftPanel.style.display = 'flex';
    }
    const draftDetailEl = document.getElementById('draft-detail');
    if (draftDetailEl) draftDetailEl.style.display = '';
    const p = getCurrentDraftPlayer();
    const isMyDraftTurn = gameMode !== 'online' || p === localPlayerNumber;
    if (isMyDraftTurn) {
      draftTitle.textContent = `${getPlayerLabel(p)}: Pick a class (${getCurrentPlayerPickCount()}/${draftPicksPerPlayer})`;
      draftMessage.textContent = '';
      draftClassSelectedCardEl = null;
      draftClasses.innerHTML = '';
      turnEl.textContent = `Draft: ${getPlayerLabel(p)} — pick a class`;
      const detailPlaceholder = document.getElementById('draft-detail-placeholder');
      const detailImage = document.getElementById('draft-detail-image');
      const detailContent = document.getElementById('draft-detail-content');
      const detailName = document.getElementById('draft-detail-name');
      const detailStats = document.getElementById('draft-detail-stats');
      const detailSkills = document.getElementById('draft-detail-skills');
      const selectBtn = document.getElementById('draft-select-btn');
      function updateDraftDetailCard() {
        const key = draftSelectedClassKey;
        if (!key || !CLASSES[key]) {
          if (detailPlaceholder) detailPlaceholder.style.display = '';
          if (detailImage) detailImage.style.display = 'none';
          if (detailContent) detailContent.style.display = 'none';
          if (selectBtn) selectBtn.style.display = 'none';
          return;
        }
        const c = CLASSES[key];
        const skills = CLASS_SKILLS[key] || [];
        if (detailPlaceholder) detailPlaceholder.style.display = 'none';
        if (detailImage) {
          detailImage.src = CLASS_IMAGES[key] || '';
          detailImage.alt = c.name;
          detailImage.style.display = 'block';
        }
        if (detailContent) detailContent.style.display = 'block';
        if (detailName) detailName.textContent = c.name;
        if (detailStats) {
          detailStats.innerHTML = [
            ['HP', c.hp], ['MP', c.mp], ['STR', c.str], ['AGI', c.agi], ['VIT', c.vit],
            ['DEX', c.dex], ['LUK', c.luk], ['INT', c.int], ['Range', c.range],
          ].map(([label, val]) => `<span class="draft-stat-label">${label}</span><span class="draft-stat-value">${val}</span>`).join('');
        }
        if (detailSkills) {
          detailSkills.innerHTML = skills.length
            ? skills.map((s) => `<div class="draft-detail-skill"><span class="draft-detail-skill-name">${s.name}</span><span class="draft-detail-skill-desc">${s.description || ''}</span></div>`).join('')
            : '<div class="draft-detail-skill">No skills</div>';
        }
        if (selectBtn) {
          selectBtn.style.display = 'block';
          selectBtn.disabled = !availableClasses.has(key);
          selectBtn.onclick = () => {
            const k = draftSelectedClassKey;
            if (k && availableClasses.has(k)) pickClass(k);
          };
        }
        const nextSel = key ? draftClasses.querySelector(`button.draft-class-card[data-class-key="${key}"]`) : null;
        if (draftClassSelectedCardEl !== nextSel) {
          if (draftClassSelectedCardEl) draftClassSelectedCardEl.classList.remove('draft-class-card-selected');
          draftClassSelectedCardEl = nextSel;
          if (draftClassSelectedCardEl) draftClassSelectedCardEl.classList.add('draft-class-card-selected');
        }
      }
      draftClassOrder.forEach((key) => {
        const isAvailable = availableClasses.has(key);
        const c = CLASSES[key];
        const card = document.createElement('button');
        card.type = 'button';
        card.dataset.classKey = key;
        card.className = 'draft-class-card' + (isAvailable ? '' : ' draft-class-card-unavailable') + (draftSelectedClassKey === key ? ' draft-class-card-selected' : '');
        card.disabled = !isAvailable;
        card.innerHTML = `
          <img class="draft-class-card-image" src="${CLASS_IMAGES[key] || ''}" alt="${c.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="draft-class-card-body">
            <div class="draft-class-card-name">${c.name}</div>
          </div>
        `;
        if (isAvailable) {
          card.addEventListener('click', () => {
            draftSelectedClassKey = key;
            if (draftClassSelectedCardEl && draftClassSelectedCardEl !== card) {
              draftClassSelectedCardEl.classList.remove('draft-class-card-selected');
            }
            draftClassSelectedCardEl = card;
            card.classList.add('draft-class-card-selected');
            updateDraftDetailCard();
          });
        }
        if (draftSelectedClassKey === key) draftClassSelectedCardEl = card;
        draftClasses.appendChild(card);
      });
      updateDraftDetailCard();
    } else {
      draftTitle.textContent = `${getPlayerLabel(p)} is picking a class`;
      draftMessage.textContent = '';
      draftClassSelectedCardEl = null;
      draftClasses.innerHTML = '';
      turnEl.textContent = `Draft: ${getPlayerLabel(p)} — pick a class`;
      const detailPlaceholder = document.getElementById('draft-detail-placeholder');
      const detailImage = document.getElementById('draft-detail-image');
      const detailContent = document.getElementById('draft-detail-content');
      const selectBtn = document.getElementById('draft-select-btn');
      if (detailPlaceholder) detailPlaceholder.style.display = '';
      if (detailImage) detailImage.style.display = 'none';
      if (detailContent) detailContent.style.display = 'none';
      if (selectBtn) selectBtn.style.display = 'none';
    }
    if (gameMode === 'pvcpu' && getCurrentDraftPlayer() === 2) setTimeout(runDraftAI, 500);
    if (gameMode === 'cvcpu') setTimeout(runDraftAI, 500);
  }

  function pickClass(classKey) {
    if (!availableClasses.has(classKey) || pendingClassKey) return;
    pendingClassKey = classKey;
    const p = getCurrentDraftPlayer();
    const occupied = new Set(units.map((u) => u.y * world.w + u.x));
    const tiles = getBaseTiles(world, p, occupied);
    const tilesSorted = sortTilesByDistanceToCenter(world, tiles);
    placementTilesSorted = tilesSorted;
    placementTileKeys = new Set(tilesSorted.map((t) => t.gy * world.w + t.gx));
    showPlacementHighlights(tilesSorted);
    updateDraftUI();
    if (gameMode === 'online' && p === localPlayerNumber && typeof sendOnlineMessage === 'function') {
      sendOnlineMessage({ type: 'draftPick', classKey });
    }
  }

  function placeUnit(gx, gy) {
    if (!pendingClassKey) return;
    const p = getCurrentDraftPlayer();
    const k = gy * world.w + gx;
    if (!placementTileKeys.has(k)) return;
    const template = CLASSES[pendingClassKey];
    const unit = {
      id: nextUnitId++,
      player: p,
      x: gx,
      y: gy,
      level: 1,
      name: template.name,
      class: pendingClassKey,
      hairColor: (CLASS_LOOK[pendingClassKey] || CLASS_LOOK.knight).hair,
      hp: template.hp,
      maxHp: template.maxHp,
      mp: template.mp,
      maxMp: template.maxMp,
      str: template.str,
      agi: template.agi,
      vit: template.vit,
      dex: template.dex,
      luk: template.luk,
      int: template.int,
      range: template.range,
    };
    units.push(unit);
    registerUnitInIdIndex(unit);
    updateUnitTileIndex(unit, null, null);
    addUnitToScene(unit);
    const mesh = unitMeshes.get(unit.id);
    if (mesh) {
      mesh.rotation.y = unit.player === 1 ? Math.PI : 0;
    }
    availableClasses.delete(pendingClassKey);
    pendingClassKey = null;
    placementTileKeys.clear();
    placementTilesSorted = [];
    clearHighlights();
    if (gameMode === 'online' && p === localPlayerNumber && typeof sendOnlineMessage === 'function') {
      sendOnlineMessage({ type: 'draftPlace', gx, gy });
    }
    const placementCardEl = document.getElementById('draft-placement-card');
    if (placementCardEl) {
      placementCardEl.style.display = 'none';
      placementCardEl.innerHTML = '';
    }
    draftPickCountByPlayer[p]++;
    draftPickIndex++;
    if (draftPickIndex >= 2 * draftPicksPerPlayer) {
      endDraftPhase();
      return;
    }
    const nextP = getCurrentDraftPlayer();
    const nextPickCount = getCurrentPlayerPickCount();
    const draftPanel = document.getElementById('draft-panel');
    const draftTitle = document.getElementById('draft-title');
    const draftMessage = document.getElementById('draft-message');
    const draftDetailElAfter = document.getElementById('draft-detail');
    const draftClasses = document.getElementById('draft-classes');
    const turnEl = document.getElementById('turn-player');
    const nextIsMyDraftTurn = gameMode !== 'online' || nextP === localPlayerNumber;
    if (draftPanel && draftTitle && draftClasses && turnEl) {
      draftPanel.style.display = 'flex';
      draftTitle.textContent = nextIsMyDraftTurn
        ? `${getPlayerLabel(nextP)}: Pick a class (${nextPickCount}/${draftPicksPerPlayer})`
        : `${getPlayerLabel(nextP)} is picking a class`;
      if (draftMessage) draftMessage.textContent = nextIsMyDraftTurn ? 'Get ready…' : '';
      draftClassSelectedCardEl = null;
      draftClasses.innerHTML = '';
      turnEl.textContent = `Draft: ${getPlayerLabel(nextP)} — pick a class`;
    }
    if (draftDetailElAfter) draftDetailElAfter.style.display = 'none';
    const DRAFT_AFTER_PLACEMENT_DELAY_MS = 1500;
    setTimeout(updateDraftUI, DRAFT_AFTER_PLACEMENT_DELAY_MS);
  }

  function updateTurnUI() {
    if (updateTurnUI._pending) return;
    updateTurnUI._pending = true;
    requestAnimationFrame(() => {
      updateTurnUI._pending = false;
      updateTurnUIImpl();
    });
  }
  function updateTurnUIImpl() {
    const cache = updateTurnUI._cache || (updateTurnUI._cache = {});
    const turnEl = cache.turnEl || (cache.turnEl = document.getElementById('turn-player'));
    const menuLabel = cache.menuLabel || (cache.menuLabel = document.getElementById('menu-label'));
    const turnMenu = cache.turnMenu || (cache.turnMenu = document.getElementById('turn-menu'));
    const unitInfo = cache.unitInfo || (cache.unitInfo = document.getElementById('unit-info'));
    const unitNameEl = cache.unitNameEl || (cache.unitNameEl = document.getElementById('unit-name'));
    const unitLevelClassEl = cache.unitLevelClassEl || (cache.unitLevelClassEl = document.getElementById('unit-level-class'));
    const unitStatsEl = cache.unitStatsEl || (cache.unitStatsEl = document.getElementById('unit-stats'));
    const unitClassImageEl = cache.unitClassImageEl || (cache.unitClassImageEl = document.getElementById('unit-class-image'));

    if (phase === 'playing') {
      units.forEach((u) => {
        if (u.hp <= 0) return;
        const mesh = unitMeshes.get(u.id);
        if (mesh) updateUnitMeshLowHp(mesh, u.maxHp > 0 && (u.hp / u.maxHp) < LOW_HP_VISUAL_THRESHOLD);
      });
    }
    turnMenu.classList.remove('player-1', 'player-2');
    turnMenu.classList.add(currentPlayer === 1 ? 'player-1' : 'player-2');
    turnMenu.classList.toggle('level-2', false);
    turnMenu.classList.toggle('level-3', false);

    if (phase === 'playing' && initiativeOrder.length > 0) {
      const currentUid = initiativeOrder[currentTurnIndex];
      const cu = getUnitById(currentUid);
      const currentUnitAlive = cu && cu.hp > 0 ? cu : null;
      if (gameMode === 'online' && currentUnitAlive && currentUnitAlive.player !== localPlayerNumber) {
        selectedUnitId = null;
      } else if (currentUnitAlive) {
        const selU = selectedUnitId != null ? getUnitById(selectedUnitId) : null;
        if (selectedUnitId == null || !selU || selU.hp <= 0) selectedUnitId = currentUid;
      }
    }

    if (selectedUnitId != null) {
      const u = getUnitById(selectedUnitId);
      if (u && u.hp > 0) {
        unitInfo.classList.remove('no-unit');
        const lowHp = u.maxHp > 0 && (u.hp / u.maxHp) < 0.25;
        turnMenu.classList.toggle('low-hp', lowHp);
        turnMenu.classList.toggle('level-2', u.level >= 2 && u.level < 3);
        turnMenu.classList.toggle('level-3', u.level >= 3);
        unitNameEl.textContent = u.name;
        unitLevelClassEl.textContent = `Lv.${u.level} ${u.class}`;
        unitClassImageEl.src = CLASS_IMAGES[u.class] || '';
        unitClassImageEl.alt = u.name;
        const statRows = [
          ['HP', `${u.hp}/${u.maxHp}`, 'stat-val-hp'],
          ['MP', `${u.mp}/${u.maxMp}`, ''],
          ['STR', formatStatWithBuffs(u, 'str'), ''],
          ['AGI', formatStatWithBuffs(u, 'agi'), ''],
          ['VIT', formatStatWithBuffs(u, 'vit'), ''],
          ['DEX', formatStatWithBuffs(u, 'dex'), ''],
          ['LUK', formatStatWithBuffs(u, 'luk'), ''],
          ['INT', formatStatWithBuffs(u, 'int'), ''],
        ];
        if (u.tempDebuff && u.tempDebuff.poison != null) {
          statRows.push(['Poison', `${u.tempDebuff.poison} dmg/turn`, 'stat-val-poison']);
        }
        if (u.tempBuff && u.tempBuff.heal != null) {
          statRows.push(['Regen', `${u.tempBuff.heal} HP/turn`, 'stat-val-buff']);
        }
        unitStatsEl.innerHTML = statRows.map(([label, val, extraClass]) => {
          const cls = extraClass ? ` ${extraClass}` : '';
          return `<span>${label}</span><span class="stat-val${cls}">${val}</span>`;
        }).join('');
      } else {
        turnMenu.classList.remove('low-hp', 'level-2', 'level-3');
        unitInfo.classList.add('no-unit');
        unitNameEl.textContent = '— Select a unit —';
        unitLevelClassEl.textContent = '';
        unitStatsEl.textContent = '';
        unitClassImageEl.src = '';
        unitClassImageEl.alt = '';
      }
    } else {
      turnMenu.classList.remove('low-hp', 'level-2', 'level-3');
      unitInfo.classList.add('no-unit');
      unitNameEl.textContent = '— Select a unit —';
      unitLevelClassEl.textContent = '';
      unitStatsEl.textContent = '';
      unitClassImageEl.src = '';
      unitClassImageEl.alt = '';
    }

    if (selectedUnitId != null) {
      turnEl.textContent = `${getPlayerLabel(currentPlayer)} — Unit ${unitNameEl.innerHTML} active`;
    } else {
      const currentUnit = initiativeOrder.length ? getUnitById(initiativeOrder[currentTurnIndex]) : null;
      turnEl.textContent = currentUnit ? `${currentUnit.name} (${getPlayerLabel(currentPlayer)})` : getPlayerLabel(currentPlayer);
    }
    menuLabel.textContent = getPlayerLabel(currentPlayer);

    const btnAttack = cache.btnAttack || (cache.btnAttack = document.getElementById('btn-attack'));
    const btnSkill = cache.btnSkill || (cache.btnSkill = document.getElementById('btn-skill'));
    const btnEnd = cache.btnEnd || (cache.btnEnd = document.getElementById('btn-end'));
    if (gameMode === 'cvcpu' && phase === 'playing') {
      btnAttack.disabled = true;
      btnSkill.disabled = true;
      if (btnEnd) btnEnd.disabled = true;
      turnEl.textContent = `${getPlayerLabel(currentPlayer)} (CPU)`;
    } else if (isChoosingFacing) {
      btnAttack.disabled = true;
      btnSkill.disabled = true;
      turnEl.textContent = 'Click on map to choose facing direction';
    } else if (phase === 'playing') {
      btnAttack.disabled = hasAttacked;
      const currentUid = initiativeOrder.length ? initiativeOrder[currentTurnIndex] : null;
      const cuTurn = currentUid ? getUnitById(currentUid) : null;
      const currentUnit = cuTurn && cuTurn.hp > 0 ? cuTurn : null;
      const isHumanTurn = gameMode !== 'cvcpu' && (gameMode !== 'pvcpu' || currentPlayer === 1) && (gameMode !== 'online' || currentPlayer === localPlayerNumber);
      const availableSkills = isHumanTurn && currentUnit && !hasAttacked ? getAvailableSkills(currentUnit) : [];
      btnSkill.disabled = hasAttacked || !isHumanTurn || availableSkills.length === 0;
      if (btnEnd) btnEnd.disabled = gameMode === 'online' && currentPlayer !== localPlayerNumber;
    }
    if (phase === 'playing') {
      const turnNum = Math.min(turnCount + 1, maxTurns);
      turnEl.textContent = (turnEl.textContent || '') + ` — Turn ${turnNum}/${maxTurns}`;
      const turnsLeftEl = cache.turnsLeftEl || (cache.turnsLeftEl = document.getElementById('turns-left'));
      const turnsLeftValueEl = cache.turnsLeftValueEl || (cache.turnsLeftValueEl = document.getElementById('turns-left-value'));
      if (turnsLeftEl && turnsLeftValueEl) {
        turnsLeftEl.style.display = '';
        const turnsLeft = Math.max(0, maxTurns - turnCount);
        turnsLeftValueEl.textContent = String(turnsLeft);
        turnsLeftEl.classList.toggle('turns-left-low', turnsLeft <= 10);
        if (turnsLeft === 30 || turnsLeft === 20 || turnsLeft === 10) {
          if (!powerupSpawnedTurnsLeft[turnsLeft]) {
            spawnPowerupsForTurnsLeft(turnsLeft);
            powerupSpawnedTurnsLeft[turnsLeft] = true;
          }
        }
      }
    } else {
      const turnsLeftEl = cache.turnsLeftEl || (cache.turnsLeftEl = document.getElementById('turns-left'));
      if (turnsLeftEl) turnsLeftEl.style.display = 'none';
    }
    if (phase === 'playing' && isCPUPlayer(currentPlayer) && !isUnitMoving) {
      if (cvCpuAiTimeoutId != null) clearTimeout(cvCpuAiTimeoutId);
      cvCpuAiTimeoutId = setTimeout(() => {
        cvCpuAiTimeoutId = null;
        runPlayingAI();
      }, 700);
    } else if (cvCpuAiTimeoutId != null) {
      clearTimeout(cvCpuAiTimeoutId);
      cvCpuAiTimeoutId = null;
    }
  }

  function endTurn() {
    if (gameMode === 'online' && currentPlayer === localPlayerNumber && typeof sendOrQueueOnlineMessage === 'function') {
      const uid = initiativeOrder[currentTurnIndex];
      const mesh = unitMeshes.get(uid);
      const facingAngle = mesh != null ? mesh.rotation.y : undefined;
      sendOrQueueOnlineMessage({ type: 'endTurn', unitId: uid, facingAngle });
    }
    requestRender();
    hideUnitPreviewCard();
    isAttackMode = false;
    isSkillMode = false;
    selectedSkill = null;
    isChoosingFacing = false;
    allowedFacingAngles = [];
    hideFacingArrow();
    clearHighlights();
    const n = initiativeOrder.length;
    if (n === 0) return;
    const currentUid = initiativeOrder[currentTurnIndex];
    const currentUnit = getUnitById(currentUid);
    if (currentUnit && currentUnit.tempDebuff) currentUnit.tempDebuff.duration--;
    if (currentUnit && currentUnit.tempDebuff && currentUnit.tempDebuff.duration <= 0) currentUnit.tempDebuff = undefined;
    if (currentUnit && currentUnit.tempBuff) currentUnit.tempBuff.duration--;
    if (currentUnit && currentUnit.tempBuff && currentUnit.tempBuff.duration <= 0) currentUnit.tempBuff = undefined;
    if (currentUnit && currentUnit.hp > 0) {
      const regen = Math.ceil(getEffectiveStat(currentUnit, 'int') * 0.15);
      currentUnit.mp = Math.min(currentUnit.maxMp, currentUnit.mp + regen);
    }
    if (currentUnit && currentUnit.hp > 0) {
      const gx = currentUnit.x;
      const gy = currentUnit.y;
      if (world.type[gy][gx] === TileType.CENTER && currentUnit.level === 1) levelUpUnit(currentUnit);
      const enemyBase = currentUnit.player === 1 ? TileType.BASE_TOP : TileType.BASE_BOTTOM;
      if (world.type[gy][gx] === enemyBase && currentUnit.level === 2) levelUpUnit(currentUnit);
    }
    turnCount++;
    if (turnCount >= maxTurns) {
      endGameByTurnLimit();
      return;
    }
    const prevTurnIndex = currentTurnIndex;
    let next = (prevTurnIndex + 1) % n;
    let steps = 0;
    while (steps < n) {
      const uid = initiativeOrder[next];
      const u = getUnitById(uid);
      if (u && u.hp > 0) break;
      next = (next + 1) % n;
      steps++;
    }
    /** Re-sort initiative when the turn order wraps (not only when next slot is index 0 — that misses wrap if slot 0 is dead). */
    const startingNewRound = n > 0 && next <= prevTurnIndex;
    currentTurnIndex = next;

    const TEMP_DEBUFF_DAMAGER = ['poison'];

    const nextUid = initiativeOrder[currentTurnIndex];
    const nextUnit = getUnitById(nextUid);
    for (let steps2 = 0; steps2 < n; steps2++) {
      if (!nextUnit || nextUnit.hp <= 0) break;
      const tempDebuffs = nextUnit.tempDebuff || {};
      const tempDebuffName = TEMP_DEBUFF_DAMAGER.find((name) => !isNaN(tempDebuffs[name]));
      const tempDebuffValue = tempDebuffs[tempDebuffName] || 0;
      if (tempDebuffValue <= 0) break;
      console.log('[DEBUFF]', `${tempDebuffName}: ${tempDebuffValue} to ${nextUnit.name}`);
      nextUnit.hp = Math.max(0, nextUnit.hp - tempDebuffValue);
      showFloatingCombatText(nextUnit.x, nextUnit.y, String(tempDebuffValue), false, tempDebuffName);
      updateUnitSlashVisibility(nextUnit);
      if (nextUnit.hp <= 0) {
        handleUnitDeath(nextUnit);
        next = (currentTurnIndex + 1) % n;
        let steps3 = 0;
        while (steps3 < n) {
          const uid = initiativeOrder[next];
          const u = getUnitById(uid);
          if (u && u.hp > 0) break;
          next = (next + 1) % n;
          steps3++;
        }
        currentTurnIndex = next;
        continue;
      }
      break;
    }

    const turnUid = initiativeOrder[currentTurnIndex];
    const unitStartingTurn = getUnitById(turnUid);
    if (unitStartingTurn && unitStartingTurn.hp > 0) {
      const buff = unitStartingTurn.tempBuff;
      const healAmt = buff && buff.heal != null && !isNaN(buff.heal) ? Number(buff.heal) : 0;
      if (healAmt > 0) {
        const before = unitStartingTurn.hp;
        unitStartingTurn.hp = Math.min(unitStartingTurn.maxHp, unitStartingTurn.hp + healAmt);
        const applied = unitStartingTurn.hp - before;
        if (applied > 0) {
          console.log('[BUFF]', `heal: ${applied} to ${unitStartingTurn.name}`);
          showFloatingCombatText(unitStartingTurn.x, unitStartingTurn.y, `+${applied}`, false, 'heal');
          updateUnitSlashVisibility(unitStartingTurn);
        }
      }
    }

    currentPlayer = unitStartingTurn && unitStartingTurn.hp > 0 ? unitStartingTurn.player : 1;
    hasMoved = false;
    hasAttacked = false;
    selectedUnitId = initiativeOrder[currentTurnIndex];

    if (startingNewRound) {
      initiativeOrder = buildInitiativeOrder();
      currentTurnIndex = 0;
    }

    updateTurnUI();
    updateActiveUnitPointer();
    centerCameraOnCurrentPlayer();
  }

  document.getElementById('btn-attack').addEventListener('click', () => {
    if (isUnitMoving) return;
    if (hasAttacked) return;
    if (phase !== 'playing' || initiativeOrder.length === 0) return;
    if (gameMode === 'online') {
      const uid = initiativeOrder[currentTurnIndex];
      const unit = getUnitById(uid);
      if (!unit || unit.player !== localPlayerNumber) return;
    }
    hideUnitPreviewCard();
    const uid = initiativeOrder[currentTurnIndex];
    const unit = getUnitById(uid);
    if (!unit || unit.hp <= 0) return;
    const range = unit.range != null ? unit.range : 1;
    selectedUnitId = uid;
    isAttackMode = true;
    const rawRange = getTilesInManhattanRange(world, unit.x, unit.y, range);
    reachable = new Map();
    rawRange.forEach((d, k) => {
      const gx = k % world.w;
      const gy = Math.floor(k / world.w);
      if (hasLineOfSight(world, unit.x, unit.y, gx, gy)) reachable.set(k, d);
    });
    showAttackRange(reachable);
    updateTurnUI();
  });
  document.getElementById('btn-skill').addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isUnitMoving || hasAttacked) return;
    const uid = initiativeOrder[currentTurnIndex];
    const uSkill = uid ? getUnitById(uid) : null;
    const unit = uSkill && uSkill.hp > 0 ? uSkill : null;
    if (!unit || unit.player !== currentPlayer) return;
    if (gameMode === 'online' && unit.player !== localPlayerNumber) return;
    let overlay = document.getElementById('skill-list-overlay');
    const btnSkill = document.getElementById('btn-skill');
    if (!btnSkill) return;
    if (overlay && overlay.style.display === 'block') {
      overlay.style.display = 'none';
      return;
    }
    const available = getAvailableSkills(unit);
    const rect = btnSkill.getBoundingClientRect();
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'skill-list-overlay';
      overlay.className = 'skill-list-overlay';
      overlay.setAttribute('aria-hidden', 'true');
      document.body.appendChild(overlay);
    }
    overlay.style.left = `${rect.left}px`;
    overlay.style.top = `${rect.top - 4}px`;
    overlay.style.transform = 'translateY(-100%)';
    overlay.style.right = 'auto';
    overlay.style.bottom = 'auto';
    overlay.style.display = 'none';
    if (available.length === 0) {
      overlay.innerHTML = '<div class="skill-option" style="cursor:default;color:#8b949e;">No skills available</div>';
    } else {
      overlay.innerHTML = available.map((skill, i) => {
        return `<button type="button" class="skill-option" data-skill-index="${i}" ${skill.disabled ? 'disabled' : ''}>
          <span class="skill-name">${skill.name}</span> <span class="skill-meta">${skill.cost} MP · Lv.${skill.level}</span><br/>
          <span class="skill-meta">${skill.description}</span>
        </button>`;
      }).join('');
      overlay.querySelectorAll('.skill-option').forEach((btn, i) => {
        btn.addEventListener('click', (ev) => {
          ev.preventDefault();
          ev.stopPropagation();
          const skill = available[i];
          selectedSkill = skill;
          overlay.style.display = 'none';
          overlay.setAttribute('aria-hidden', 'true');
          if (skill.target === 'self') {
            if (unit.mp < skill.cost) return;
            unit.mp -= skill.cost;
            hasAttacked = true;
            const ctx = {
              showFloatingCombatText,
              handleUnitDeath,
              updateUnitSlashVisibility,
              updateTurnUI,
              units,
              reanimateDeadUnit,
            };
            if (gameMode === 'online' && unit.player === localPlayerNumber && typeof sendOnlineMessage === 'function') {
              sendOnlineMessage({ type: 'requestRender' });
              sendOrQueueOnlineMessage({ type: 'skill', unitId: unit.id, targetId: unit.id, effectKey: skill.effectKey });
            }
            executeSkillWithProjectile(unit, unit, skill, ctx, () => {
              clearHighlights();
              isSkillMode = false;
              selectedSkill = null;
              skillTargetTiles = new Set();
              if (unit.hp <= 0) updateTurnUI();
              else if (hasMoved && unit.hp > 0) endTurn();
              else updateTurnUI();
            });
            updateTurnUI();
            return;
          }
          if (skill.target === 'ally') {
            const allyTargets = getSkillTargetTiles(unit, skill, units);
            const otherAllies = allyTargets.filter((t) => t.targetUnit && t.targetUnit.id !== unit.id);
            if (otherAllies.length === 0 && unit.mp >= skill.cost) {
              unit.mp -= skill.cost;
              hasAttacked = true;
              const ctx = {
                showFloatingCombatText,
                handleUnitDeath,
                updateUnitSlashVisibility,
                updateTurnUI,
                units,
                reanimateDeadUnit,
              };
              if (gameMode === 'online' && unit.player === localPlayerNumber && typeof sendOnlineMessage === 'function') {
                sendOnlineMessage({ type: 'requestRender' });
                sendOrQueueOnlineMessage({ type: 'skill', unitId: unit.id, targetId: unit.id, effectKey: skill.effectKey });
              }
              executeSkillWithProjectile(unit, unit, skill, ctx, () => {
                clearHighlights();
                isSkillMode = false;
                selectedSkill = null;
                skillTargetTiles = new Set();
                if (unit.hp <= 0) updateTurnUI();
                else if (hasMoved && unit.hp > 0) endTurn();
                else updateTurnUI();
              });
              updateTurnUI();
              return;
            }
          }
          isSkillMode = true;
          isAttackMode = false;
          showSkillTargetTiles(unit, skill);
          updateTurnUI();
        });
      });
    }
    requestAnimationFrame(() => {
      overlay.style.display = 'block';
      overlay.style.visibility = 'visible';
      overlay.setAttribute('aria-hidden', 'false');
    });
  });
  document.addEventListener('click', (e) => {
    const overlay = document.getElementById('skill-list-overlay');
    const btnSkill = document.getElementById('btn-skill');
    const wrap = document.querySelector('.skill-wrap');
    if (!overlay || overlay.style.display !== 'block') return;
    if (wrap && wrap.contains(e.target)) return;
    if (overlay.contains(e.target)) return;
    overlay.style.display = 'none';
    overlay.setAttribute('aria-hidden', 'true');
  });
  document.getElementById('btn-end').addEventListener('click', () => {
    if (isUnitMoving) return;
    if (isChoosingFacing) return;
    if (phase !== 'playing' || initiativeOrder.length === 0) return;
    const uid = initiativeOrder[currentTurnIndex];
    const unit = getUnitById(uid);
    if (!unit || unit.hp <= 0) return;
    if (gameMode === 'online' && unit.player !== localPlayerNumber) return;
    isChoosingFacing = true;
    selectedUnitId = null;
    isAttackMode = false;
    reachable = new Map();
    clearHighlights();
    showFacingArrow();
    updateActiveUnitPointer();
    const turnEl = document.getElementById('turn-player');
    turnEl.textContent = 'Click on map to choose facing direction';
    updateTurnUI();
  });

  cameraTarget.set(0, 8, 0);
  camera.position.copy(cameraTarget).add(cameraOffset);
  camera.lookAt(cameraTarget);

  const modeOverlay = document.getElementById('mode-select-overlay');
  const carouselTrack = document.getElementById('mode-carousel-track');
  const carouselPrev = document.getElementById('mode-carousel-prev');
  const carouselNext = document.getElementById('mode-carousel-next');
  const carouselDots = document.getElementById('mode-carousel-dots');
  const modePlayBtn = document.getElementById('mode-play-btn');
  const modeSettingsPvp = document.getElementById('mode-settings-pvp');
  const modeSettingsPvpMap = document.getElementById('mode-settings-pvp-map');
  const modeSettingsPvpNumUnits = document.getElementById('mode-settings-pvp-num-units');
  const modeSettingsPvpNone = document.getElementById('mode-settings-pvp-none');
  const modeSettingsOptions = document.getElementById('mode-settings-options');
  const pvpMapModeSelect = document.getElementById('pvp-map-mode');
  const pvpNumUnitsInput = document.getElementById('pvp-num-units');
  const aiDraftSelect = document.getElementById('ai-draft-preference');
  const cvcpuNumGamesInput = document.getElementById('cvcpu-num-games');
  const cvcpuNumUnitsInput = document.getElementById('cvcpu-num-units');
  const cvcpuGridWInput = document.getElementById('cvcpu-grid-w');
  const cvcpuGridHInput = document.getElementById('cvcpu-grid-h');
  const cvcpuCenterPlazaInput = document.getElementById('cvcpu-center-plaza');
  const cvcpuMaxTurnsInput = document.getElementById('cvcpu-max-turns');
  const moveSpeedInput = document.getElementById('move-speed');
  const draftPicksInput = document.getElementById('draft-picks-per-player');
  const onlineConnectOverlay = document.getElementById('online-connect-overlay');
  const onlinePlayerNameInput = document.getElementById('online-player-name');
  const onlineCreateSection = document.getElementById('online-create-section');
  const onlineJoinSection = document.getElementById('online-join-section');
  const onlineOfferText = document.getElementById('online-offer-text');
  const onlineReplyText = document.getElementById('online-reply-text');
  const onlinePasteOffer = document.getElementById('online-paste-offer');
  const onlineJoinAnswerSection = document.getElementById('online-join-answer-section');
  const onlineAnswerText = document.getElementById('online-answer-text');
  const onlineErrorEl = document.getElementById('online-error');
  const onlineWaitingMsg = document.getElementById('online-waiting-msg');

  const MODES = DEV_MODE ? ['pvp', 'pvcpu', 'cvcpu', 'online', 'story'] : ['pvp', 'pvcpu', 'online', 'story'];
  const maxSlideIndex = MODES.length - 1;
  let currentSlideIndex = 0;

  function isStorySlide() {
    return currentSlideIndex === maxSlideIndex;
  }
  function isOnlineSlide() {
    return MODES[currentSlideIndex] === 'online';
  }

  function goToSlide(index) {
    currentSlideIndex = Math.max(0, Math.min(index, maxSlideIndex));
    if (carouselTrack) carouselTrack.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    if (carouselDots) {
      carouselDots.querySelectorAll('.mode-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlideIndex);
        dot.setAttribute('aria-selected', i === currentSlideIndex);
      });
    }
    if (modeSettingsPvp) modeSettingsPvp.style.display = (currentSlideIndex === 0 || currentSlideIndex === 1 || isStorySlide() || MODES[currentSlideIndex] === 'online') ? '' : 'none';
    if (modeSettingsPvpMap) modeSettingsPvpMap.style.display = (currentSlideIndex === 0 || currentSlideIndex === 1 || MODES[currentSlideIndex] === 'online') ? '' : 'none';
    if (modeSettingsPvpNumUnits) modeSettingsPvpNumUnits.style.display = MODES[currentSlideIndex] === 'pvp' ? '' : 'none';
    if (MODES[currentSlideIndex] === 'pvp' && pvpNumUnitsInput) {
      pvpNumUnitsInput.style.width = '11em';
      pvpNumUnitsInput.value = String(Math.max(1, Math.min(20, draftPicksPerPlayer)));
    }
    if (modeSettingsPvpNone) modeSettingsPvpNone.style.display = isStorySlide() ? '' : 'none';
    if (modeSettingsOptions) modeSettingsOptions.style.display = (DEV_MODE && MODES[currentSlideIndex] === 'cvcpu') ? '' : 'none';
    if (DEV_MODE && MODES[currentSlideIndex] === 'cvcpu' && cvcpuNumUnitsInput) {
      cvcpuNumUnitsInput.value = String(Math.max(1, Math.min(20, draftPicksPerPlayer)));
    }
    const playTextEl = modePlayBtn?.querySelector('.mode-play-text');
    if (modePlayBtn && playTextEl) {
      if (isStorySlide()) {
        modePlayBtn.disabled = true;
        playTextEl.textContent = 'Coming Soon';
      } else {
        modePlayBtn.disabled = false;
        playTextEl.textContent = isOnlineSlide() ? 'Connect' : 'Play game';
      }
    }
  }

  if (carouselDots) {
    for (let i = 0; i <= maxSlideIndex; i++) {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'mode-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-label', `Mode ${i + 1}`);
      dot.setAttribute('aria-selected', i === 0);
      dot.addEventListener('click', () => goToSlide(i));
      carouselDots.appendChild(dot);
    }
  }
  if (carouselPrev) carouselPrev.addEventListener('click', () => goToSlide(currentSlideIndex - 1));
  if (carouselNext) carouselNext.addEventListener('click', () => goToSlide(currentSlideIndex + 1));
  if (modeOverlay && !DEV_MODE) {
    const slideCvcpu = modeOverlay.querySelector('.mode-slide[data-mode="cvcpu"]');
    if (slideCvcpu && slideCvcpu.parentNode) slideCvcpu.parentNode.removeChild(slideCvcpu);
  }
  goToSlide(0);

  if (moveSpeedInput) {
    moveSpeedInput.value = String(moveDurationMs);
    moveSpeedInput.addEventListener('input', () => {
      const v = parseInt(moveSpeedInput.value, 10);
      if (!Number.isNaN(v) && v >= 0) moveDurationMs = v;
    });
    moveSpeedInput.addEventListener('change', () => {
      const v = parseInt(moveSpeedInput.value, 10);
      if (!Number.isNaN(v) && v >= 0) moveDurationMs = v;
    });
  }
  if (draftPicksInput) {
    draftPicksInput.value = String(draftPicksPerPlayer);
    draftPicksInput.addEventListener('input', () => {
      const v = parseInt(draftPicksInput.value, 10);
      if (!Number.isNaN(v) && v >= 1) draftPicksPerPlayer = v;
    });
    draftPicksInput.addEventListener('change', () => {
      const v = parseInt(draftPicksInput.value, 10);
      if (!Number.isNaN(v) && v >= 1) draftPicksPerPlayer = v;
    });
  }
  if (aiDraftSelect) {
    AI_DRAFT_PREFERENCE_OPTIONS.forEach((opt) => {
      const o = document.createElement('option');
      o.value = opt.value;
      o.textContent = opt.label;
      aiDraftSelect.appendChild(o);
    });
    aiDraftSelect.value = aiDraftPreference;
    aiDraftSelect.addEventListener('change', () => { aiDraftPreference = aiDraftSelect.value; });
  }

  if (onlineConnectOverlay) {
    const onlineBtnCreate = document.getElementById('online-btn-create');
    const onlineBtnJoin = document.getElementById('online-btn-join');
    const onlineBtnCopyOffer = document.getElementById('online-btn-copy-offer');
    const onlineBtnConnect = document.getElementById('online-btn-connect');
    const onlineBtnJoinConnect = document.getElementById('online-btn-join-connect');
    const onlineBtnCopyAnswer = document.getElementById('online-btn-copy-answer');

    if (onlineBtnCreate) {
      onlineBtnCreate.addEventListener('click', async () => {
        const name = (onlinePlayerNameInput && onlinePlayerNameInput.value.trim()) || 'Player 1';
        if (!name) { showOnlineError('Enter your name'); return; }
        showOnlineError('');
        try {
          onlineMapMode = (pvpMapModeSelect && pvpMapModeSelect.value) || 'long';
          onlineMapSeed = (Date.now() ^ (Math.random() * 0xffffffff)) >>> 0;
          rebuildWorldForPvp(onlineMapMode, onlineMapSeed);
          const blob = await createOfferBlob(name, onlineMapSeed, onlineMapMode);
          if (onlineOfferText) onlineOfferText.value = blob;
          if (onlineCreateSection) {
            onlineCreateSection.style.display = 'flex';
            onlineCreateSection.style.alignItems = 'flex-start';
          }
          if (onlineJoinSection) onlineJoinSection.style.display = 'none';
        } catch (err) {
          showOnlineError(err.message || 'Failed to create game');
        }
      });
    }
    if (onlineBtnCopyOffer && onlineOfferText) {
      onlineBtnCopyOffer.addEventListener('click', () => {
        onlineOfferText.select();
        document.execCommand('copy');
      });
    }
    if (onlineBtnConnect && onlineReplyText) {
      onlineBtnConnect.addEventListener('click', async () => {
        const reply = onlineReplyText.value.trim();
        if (!reply) { showOnlineError('Paste your friend\'s reply'); return; }
        showOnlineError('');
        try {
          await applyAnswerBlob(reply);
        } catch (err) {
          showOnlineError(err.message || 'Failed to connect');
        }
      });
    }
    if (onlineBtnJoin) {
      onlineBtnJoin.addEventListener('click', () => {
        const name = (onlinePlayerNameInput && onlinePlayerNameInput.value.trim()) || 'Player 2';
        if (!name) { showOnlineError('Enter your name'); return; }
        showOnlineError('');
        if (onlineCreateSection) onlineCreateSection.style.display = 'none';
        if (onlineJoinSection) onlineJoinSection.style.display = 'flex';
      });
    }
    if (onlineBtnJoinConnect && onlinePasteOffer) {
      onlineBtnJoinConnect.addEventListener('click', async () => {
        const blob = onlinePasteOffer.value.trim();
        if (!blob) { showOnlineError('Paste the host\'s code'); return; }
        showOnlineError('');
        try {
          localPlayerNumber = 2;
          playerNames[2] = (onlinePlayerNameInput && onlinePlayerNameInput.value.trim()) || 'Player 2';
          const answerStr = await createAnswerBlob(playerNames[2], blob);
          if (onlineAnswerText) onlineAnswerText.value = answerStr;
          if (onlineJoinAnswerSection) {
            onlineJoinAnswerSection.style.display = 'flex';
            onlineJoinAnswerSection.style.alignItems = 'flex-start';
          }
        } catch (err) {
          showOnlineError(err.message || 'Failed to join');
        }
      });
    }
    if (onlineBtnCopyAnswer && onlineAnswerText) {
      onlineBtnCopyAnswer.addEventListener('click', () => {
        onlineAnswerText.select();
        document.execCommand('copy');
      });
    }
  }

  const bgMusic = new Audio();
  bgMusic.loop = true;
  bgMusic.volume = 0.30;
  bgMusic.preload = 'auto';
  const baseUrl = window.location.href.replace(/[^/]*$/, '');
  const BACKGROUND_MUSIC_URL = typeof window.TACTICS_BGM_URL !== 'undefined'
    ? window.TACTICS_BGM_URL
    : baseUrl + (baseUrl.includes('/src/') ? '../assets/music/tavern.mp3' : 'assets/music/tavern.mp3');
  bgMusic.src = BACKGROUND_MUSIC_URL;
  bgMusic.addEventListener('error', () => {
    const fallback = baseUrl + 'assets/music/tavern.mp3';
    if (fallback !== BACKGROUND_MUSIC_URL) {
      bgMusic.src = fallback;
    }
  });
  function startBackgroundMusic() {
    if (bgMusic.paused) {
      bgMusic.play().catch(() => {});
    }
  }

  function showOnlineError(msg) {
    if (onlineErrorEl) {
      onlineErrorEl.textContent = msg || '';
      onlineErrorEl.style.display = msg ? 'block' : 'none';
    }
  }

  function hideOnlineConnectOverlay() {
    if (onlineConnectOverlay) {
      onlineConnectOverlay.style.display = 'none';
      onlineConnectOverlay.setAttribute('aria-hidden', 'true');
    }
  }

  function showOnlineConnectOverlay() {
    showOnlineError('');
    localPlayerNumber = 1;
    playerNames = { 1: '', 2: '' };
    if (onlineConnectOverlay) {
      onlineConnectOverlay.style.display = 'flex';
      onlineConnectOverlay.setAttribute('aria-hidden', 'false');
    }
    if (onlinePlayerNameInput) onlinePlayerNameInput.value = '';
    if (onlineCreateSection) onlineCreateSection.style.display = 'none';
    if (onlineJoinSection) onlineJoinSection.style.display = 'none';
    if (onlineOfferText) onlineOfferText.value = '';
    if (onlineReplyText) onlineReplyText.value = '';
    if (onlinePasteOffer) onlinePasteOffer.value = '';
    if (onlineAnswerText) onlineAnswerText.value = '';
    if (onlineJoinAnswerSection) onlineJoinAnswerSection.style.display = 'none';
    if (onlineWaitingMsg) onlineWaitingMsg.style.display = 'block';
  }

  function waitForIceGatheringComplete(pc) {
    return new Promise((resolve) => {
      if (pc.iceGatheringState === 'complete') {
        resolve();
        return;
      }
      const check = () => {
        if (pc.iceGatheringState === 'complete') {
          pc.removeEventListener('icegatheringstatechange', check);
          resolve();
        }
      };
      pc.addEventListener('icegatheringstatechange', check);
    });
  }

  async function createOfferBlob(playerName, mapSeed, mapMode) {
    if (peerConnection) {
      peerConnection.close();
      peerConnection = null;
      dataChannel = null;
    }
    const pc = new RTCPeerConnection({ iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] });
    const candidates = [];
    pc.addEventListener('icecandidate', (e) => {
      if (e.candidate) candidates.push(e.candidate);
    });
    const dc = pc.createDataChannel('game-sync', { ordered: true });
    dataChannel = dc;
    peerConnection = pc;
    dc.addEventListener('open', () => setupDataChannel(dc, true));
    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer);
    await waitForIceGatheringComplete(pc);
    return JSON.stringify({
      type: 'offer',
      sdp: pc.localDescription.sdp,
      candidates,
      playerName: playerName || 'Player 1',
    });
  }

  async function createAnswerBlob(playerName, offerBlob) {
    const offer = JSON.parse(offerBlob);
    const pc = new RTCPeerConnection({ iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] });
    const candidates = [];
    pc.addEventListener('icecandidate', (e) => {
      if (e.candidate) candidates.push(e.candidate);
    });
    pc.addEventListener('datachannel', (e) => {
      dataChannel = e.channel;
      peerConnection = pc;
      setupDataChannel(dataChannel, false);
    });
    await pc.setRemoteDescription(new RTCSessionDescription({ type: 'offer', sdp: offer.sdp }));
    if (offer.candidates && offer.candidates.length) {
      for (const c of offer.candidates) {
        await pc.addIceCandidate(new RTCIceCandidate(c));
      }
    }
    const answer = await pc.createAnswer();
    await pc.setLocalDescription(answer);
    await waitForIceGatheringComplete(pc);
    return JSON.stringify({
      type: 'answer',
      sdp: pc.localDescription.sdp,
      candidates,
      playerName: playerName || 'Player 2',
    });
  }

  async function applyAnswerBlob(answerBlob) {
    const answer = JSON.parse(answerBlob);
    if (!peerConnection) {
      showOnlineError('Create a game first, then paste your friend\'s reply.');
      return;
    }
    const state = peerConnection.signalingState;
    if (state === 'stable') {
      return;
    }
    if (state !== 'have-local-offer') {
      showOnlineError('Wrong step: create a game first and send the code, then paste the reply.');
      return;
    }
    await peerConnection.setRemoteDescription(new RTCSessionDescription({ type: 'answer', sdp: answer.sdp }));
    if (answer.candidates && answer.candidates.length) {
      for (const c of answer.candidates) {
        await peerConnection.addIceCandidate(new RTCIceCandidate(c));
      }
    }
  }

  let lastAppliedSeq = 0;
  let pendingRemoteActionCount = 0;
  const onlineMessageQueue = [];
  let localMoveInProgress = false;
  const onlineOutboundQueue = [];

  function onRemoteActionDone() {
    pendingRemoteActionCount = Math.max(0, pendingRemoteActionCount - 1);
    if (pendingRemoteActionCount === 0) processNextOnlineMessage();
  }

  function processNextOnlineMessage() {
    while (pendingRemoteActionCount === 0 && onlineMessageQueue.length > 0) {
      const msg = onlineMessageQueue.shift();
      if (msg.type === 'move') {
        applyMoveFromRemote(msg.unitId, msg.toGx, msg.toGy);
        return;
      }
      if (msg.type === 'attack') {
        if (msg.strikes && Array.isArray(msg.strikes) && msg.strikes.length > 0) {
          applyAttackFromRemote(msg.unitId, msg.targetId, undefined, undefined, msg.strikes);
        } else {
          applyAttackFromRemote(msg.unitId, msg.targetId, msg.hit, msg.damage);
        }
        return;
      }
      if (msg.type === 'skill') {
        applySkillFromRemote(msg);
        return;
      }
      if (msg.type === 'endTurn') {
        if (msg.unitId != null && msg.facingAngle != null) {
          const mesh = unitMeshes.get(msg.unitId);
          if (mesh) mesh.rotation.y = msg.facingAngle;
        }
        endTurn();
        return;
      }
      if (msg.type === 'unitDeath') {
        const unit = getUnitById(msg.unitId);
        const killer = msg.killerId != null ? getUnitById(msg.killerId) : null;
        if (unit) {
          unit.hp = 0;
          handleUnitDeath(unit, killer, { skipSync: true });
        }
        processNextOnlineMessage();
        return;
      }
    }
  }

  function setupDataChannel(dc, isHost) {
    dc.binaryType = 'arraybuffer';
    dc.addEventListener('message', (e) => {
      try {
        const msg = JSON.parse(e.data);
        if (msg.seq != null && msg.seq <= lastAppliedSeq) return;
        if (msg.seq != null) lastAppliedSeq = msg.seq;
        handleOnlineMessage(msg, isHost);
      } catch (err) {
        console.warn('Online message parse error', err);
      }
    });
    dc.addEventListener('close', () => {
      if (gameMode === 'online') showOnlineError('Connection lost.');
    });
    if (!isHost) {
      const name = playerNames[2] || (onlinePlayerNameInput && onlinePlayerNameInput.value.trim()) || 'Player 2';
      sendOnlineMessage({ type: 'joined', playerName: name });
      return;
    }
    const localName = (onlinePlayerNameInput && onlinePlayerNameInput.value.trim()) || 'Player 1';
    const seed = onlineMapSeed != null ? onlineMapSeed : (Date.now() ^ (Math.random() * 0xffffffff)) >>> 0;
    const mapMode = onlineMapMode || 'long';
    playerNames[1] = localName;
    sendOnlineMessage({ type: 'start', mapSeed: seed, mapMode, playerName: localName });
    hideOnlineConnectOverlay();
  startDraftPhase();
  }

  function handleOnlineMessage(msg, isHost) {
    if (msg.type === 'start') {
      playerNames[1] = msg.playerName || 'Player 1';
      onlineMapSeed = msg.mapSeed;
      onlineMapMode = msg.mapMode || 'long';
      rebuildWorldForPvp(onlineMapMode, onlineMapSeed);
      hideOnlineConnectOverlay();
      startDraftPhase();
      return;
    }
    if (msg.type === 'joined') {
      playerNames[2] = msg.playerName || 'Player 2';
      return;
    }
    if (phase === 'draft') {
      if (msg.type === 'draftPick') {
        pickClass(msg.classKey);
      } else if (msg.type === 'draftPlace') {
        placeUnit(msg.gx, msg.gy);
      }
      return;
    }
    if (phase === 'playing') {
      if (msg.type === 'move' || msg.type === 'attack' || msg.type === 'skill' || msg.type === 'endTurn' || msg.type === 'unitDeath') {
        onlineMessageQueue.push(msg);
        processNextOnlineMessage();
      } else if (msg.type === 'requestRender') {
        requestRender();
      }
    }
  }

  function sendOnlineMessage(obj) {
    if (dataChannel && dataChannel.readyState === 'open') {
      const seq = (typeof sendOnlineMessage.seq !== 'undefined' ? sendOnlineMessage.seq : 0) + 1;
      sendOnlineMessage.seq = seq;
      dataChannel.send(JSON.stringify({ ...obj, seq }));
    }
  }

  function sendOrQueueOnlineMessage(obj) {
    if (gameMode === 'online' && localMoveInProgress && (obj.type === 'attack' || obj.type === 'skill' || obj.type === 'endTurn')) {
      onlineOutboundQueue.push(obj);
      return;
    }
    sendOnlineMessage(obj);
  }

  function flushOnlineOutboundQueue() {
    for (let i = 0; i < onlineOutboundQueue.length; i++) {
      sendOnlineMessage(onlineOutboundQueue[i]);
    }
    onlineOutboundQueue.length = 0;
  }

  function applyMoveFromRemote(unitId, toGx, toGy) {
    const unit = getUnitById(unitId);
    if (!unit || unit.hp <= 0) return;
    pendingRemoteActionCount++;
    performMove(unit, toGx, toGy, () => {
      requestRender();
      updateTurnUI();
      onRemoteActionDone();
    });
  }

  function applyAttackFromRemote(unitId, targetId, hit, damage, strikeList) {
    const unit = getUnitById(unitId);
    const target = getUnitById(targetId);
    if (!unit || !target || target.hp <= 0) return;
    pendingRemoteActionCount++;
    const done = () => {
      requestRender();
      updateTurnUI();
      onRemoteActionDone();
    };
    if (strikeList && strikeList.length > 0) {
      performAttack(unit, target, undefined, undefined, done, strikeList);
    } else {
      performAttack(unit, target, hit, damage, done);
    }
  }

  function applySkillFromRemote(msg) {
    const unit = getUnitById(msg.unitId);
    const target = msg.targetId != null ? getUnitById(msg.targetId) : null;
    if (!unit) return;
    pendingRemoteActionCount++;
    if (msg.effectKey && unit.mp >= (CLASS_SKILLS[unit.class] || []).find((s) => s.effectKey === msg.effectKey)?.cost) {
      const skill = (CLASS_SKILLS[unit.class] || []).find((s) => s.effectKey === msg.effectKey);
      if (skill) {
        unit.mp -= skill.cost;
        const ctx = {
          showFloatingCombatText,
          handleUnitDeath,
          updateUnitSlashVisibility,
          updateTurnUI,
          tryCollectPowerup,
          world,
          units,
          reanimateDeadUnit,
          updateUnitTileIndex,
          updateUnitPosition(u) {
            const m = unitMeshes.get(u.id);
            if (m) m.position.copy(worldPos(u.x, u.y));
          },
          animateKnockback(targ, fromGx, fromGy, toGx, toGy, onDone) {
            const mesh = unitMeshes.get(targ.id);
            if (!mesh) { if (onDone) onDone(); return; }
            const startPos = worldPos(fromGx, fromGy).clone();
            const endPos = worldPos(toGx, toGy).clone();
            const startTime = performance.now();
            let tickCount = 0;
            function tick(now) {
              tickCount++;
              if (tickCount % 2 === 0) requestRender();
              const t = Math.min(1, (now - startTime) / moveDurationMs);
              const smoothstep = (x) => x * x * (3 - 2 * x);
              mesh.position.lerpVectors(startPos, endPos, smoothstep(t));
              if (t < 1) requestAnimationFrame(tick);
              else { mesh.position.copy(endPos); if (onDone) onDone(); }
            }
            requestAnimationFrame(tick);
          },
        };
        applySkillEffect(msg.effectKey, unit, target, ctx);
        if (target) updateUnitSlashVisibility(target);
        const isBuff = skill.target === 'self' || skill.target === 'ally';
        const buffTarget = isBuff ? (skill.target === 'self' ? unit : target) : null;
        if (buffTarget) {
          playBuffAnimation(buffTarget, () => {
            requestRender();
            updateTurnUI();
            onRemoteActionDone();
          });
        } else {
          requestRender();
          setTimeout(() => { requestRender(); updateTurnUI(); onRemoteActionDone(); }, 400);
        }
      } else {
        requestRender();
        setTimeout(() => { requestRender(); updateTurnUI(); onRemoteActionDone(); }, 400);
      }
    } else {
      requestRender();
      setTimeout(() => { requestRender(); updateTurnUI(); onRemoteActionDone(); }, 400);
    }
  }

  function startSelectedMode() {
    if (MODES[currentSlideIndex] === 'story') return;
    const mode = MODES[currentSlideIndex];
    startBackgroundMusic();
    gameMode = mode;
    if (mode === 'online') {
      if (modeOverlay) modeOverlay.classList.add('hidden');
      showOnlineConnectOverlay();
      return;
    }
    if (mode === 'pvp' || mode === 'pvcpu') {
      const mapMode = (pvpMapModeSelect && pvpMapModeSelect.value) || 'long';
      rebuildWorldForPvp(mapMode);
      if (mode === 'pvp' && pvpNumUnitsInput) {
        draftPicksPerPlayer = Math.max(1, Math.min(20, parseInt(pvpNumUnitsInput.value, 10) || 7));
      }
    } else if (mode === 'cvcpu') {
      if (DEV_MODE && cvcpuGridWInput && cvcpuGridHInput && cvcpuCenterPlazaInput) {
        gridW = Math.max(5, Math.min(50, parseInt(cvcpuGridWInput.value, 10) || 21));
        gridH = Math.max(5, Math.min(50, parseInt(cvcpuGridHInput.value, 10) || 11));
        centerPlazaRadius = Math.max(0.1, Math.min(0.9, parseFloat(cvcpuCenterPlazaInput.value) || 0.29));
      }
      if (DEV_MODE && cvcpuMaxTurnsInput) {
        maxTurns = Math.max(10, Math.min(999, parseInt(cvcpuMaxTurnsInput.value, 10) || 200));
      }
      rebuildWorldForPvp('long');
    }
    if (mode === 'cvcpu') {
      cvcpuTotalGames = Math.max(1, parseInt(cvcpuNumGamesInput?.value, 10) || 1);
      cvcpuGamesPlayed = 0;
      if (cvcpuNumUnitsInput) {
        draftPicksPerPlayer = Math.max(1, Math.min(20, parseInt(cvcpuNumUnitsInput.value, 10) || 7));
      }
    }
    if (modeOverlay) modeOverlay.classList.add('hidden');
    startDraftPhase();
  }

  if (modePlayBtn) {
    modePlayBtn.addEventListener('click', (e) => {
      if (modePlayBtn.disabled) return;
      const ripple = modePlayBtn.querySelector('.mode-play-ripple');
      if (ripple) {
        const rect = modePlayBtn.getBoundingClientRect();
        ripple.style.left = (e.clientX - rect.left) + 'px';
        ripple.style.top = (e.clientY - rect.top) + 'px';
        ripple.style.width = ripple.style.height = '20px';
        ripple.style.marginLeft = ripple.style.marginTop = '-10px';
        ripple.classList.remove('ripple');
        ripple.offsetHeight;
        ripple.classList.add('ripple');
        setTimeout(() => ripple.classList.remove('ripple'), 500);
      }
      startSelectedMode();
    });
  } else {
    startDraftPhase();
  }

  function isCPUPlayer(player) {
    return (gameMode === 'pvcpu' && player === 2) || gameMode === 'cvcpu';
  }

  function pickBalancedClass() {
    const available = CLASS_KEYS.filter((k) => availableClasses.has(k));
    if (available.length === 0) return null;
    const preference = aiDraftPreference || 'balanced';

    if (preference === 'random') {
      return available[Math.floor(Math.random() * available.length)];
    }
    if (preference === 'custom') {
      const ordered = AI_DRAFT_CUSTOM_ORDER.filter((k) => availableClasses.has(k));
      return ordered[0] ?? available[0] ?? null;
    }

    function pickBest2(getterA, getterB) {
      let best = available[0];
      let va = getterA(best);
      let vb = getterB(best);
      for (let i = 1; i < available.length; i++) {
        const k = available[i];
        const a = getterA(k);
        const b = getterB(k);
        if (a > va || (a === va && b > vb)) {
          best = k;
          va = a;
          vb = b;
        }
      }
      return best;
    }

    if (preference === 'tanky') {
      return pickBest2((k) => CLASSES[k]?.hp ?? 0, (k) => CLASSES[k]?.vit ?? 0);
    }
    if (preference === 'aggressive') {
      return pickBest2((k) => CLASSES[k]?.str ?? 0, (k) => CLASSES[k]?.agi ?? 0);
    }
    if (preference === 'scout') {
      return pickBest2((k) => CLASSES[k]?.agi ?? 0, (k) => CLASSES[k]?.dex ?? 0);
    }
    if (preference === 'ranged') {
      return pickBest2((k) => CLASSES[k]?.range ?? 0, (k) => CLASSES[k]?.dex ?? 0);
    }
    if (preference === 'caster') {
      return pickBest2((k) => CLASSES[k]?.int ?? 0, (k) => CLASSES[k]?.mp ?? 0);
    }

    // balanced (default): pick to build a balanced lineup (tank / melee / support / ranged / caster mix)
    const p = getCurrentDraftPlayer();
    const n = draftPicksPerPlayer;
    const targets = getBalancedTargets(n);
    const roleCounts = { tank: 0, melee: 0, support: 0, ranged: 0, caster: 0 };
    for (let i = 0; i < units.length; i++) {
      const u = units[i];
      if (u.player !== p) continue;
      const role = CLASS_DRAFT_ROLE[u.class];
      if (role) roleCounts[role]++;
    }
    const deficit = (rk) => Math.max(0, (targets[rk] ?? 0) - (roleCounts[rk] ?? 0));
    const scoreBalanced = (classKey) => {
      const role = CLASS_DRAFT_ROLE[classKey];
      const def = role != null ? deficit(role) : 0;
      const hp = CLASSES[classKey]?.hp ?? 0;
      const negVar = -(CLASS_STAT_VARIANCE[classKey] ?? Infinity);
      return { def, hp, negVar };
    };
    const betterBalanced = (A, B) => {
      if (A.def !== B.def) return A.def > B.def;
      if (A.hp !== B.hp) return A.hp > B.hp;
      return A.negVar > B.negVar;
    };
    let best = available[0];
    let sb = scoreBalanced(best);
    for (let i = 1; i < available.length; i++) {
      const sk = scoreBalanced(available[i]);
      if (betterBalanced(sk, sb)) {
        best = available[i];
        sb = sk;
      }
    }
    return best;
  }

  function runDraftAI() {
    if (phase !== 'draft' || !isCPUPlayer(getCurrentDraftPlayer())) return;
    if (!pendingClassKey) {
      const key = pickBalancedClass();
      if (key) pickClass(key);
      setTimeout(runDraftAI, 500);
      return;
    }
    const sorted = placementTilesSorted.length > 0
      ? placementTilesSorted
      : sortTilesByDistanceToCenter(
          world,
          Array.from(placementTileKeys, (k) => ({ gx: k % world.w, gy: (k / world.w) | 0 })),
        );
    if (sorted.length > 0) {
      const { gx, gy } = sorted[0];
      placeUnit(gx, gy);
    }
  }

  function getCenterTiles() {
    if (world.centerTiles && world.centerTiles.length > 0) return world.centerTiles;
    const out = [];
    for (let gy = 0; gy < world.h; gy++)
      for (let gx = 0; gx < world.w; gx++)
        if (world.type[gy][gx] === TileType.CENTER) out.push({ gx, gy });
    return out;
  }

  function getEnemyBaseTiles(player) {
    const out = [];
    const baseType = player === 1 ? TileType.BASE_TOP : TileType.BASE_BOTTOM;
    for (let gy = 0; gy < world.h; gy++)
      for (let gx = 0; gx < world.w; gx++)
        if (world.type[gy][gx] === baseType) out.push({ gx, gy });
    return out;
  }

  function manhattanDist(ax, ay, bx, by) {
    return Math.abs(ax - bx) + Math.abs(ay - by);
  }

  function getEnemiesInRange(unit) {
    const range = unit.range != null ? unit.range : 1;
    const enemies = [];
    for (const o of units) {
      if (o.hp <= 0 || o.player === unit.player) continue;
      const d = manhattanDist(unit.x, unit.y, o.x, o.y);
      if (d <= range && d > 0 && hasLineOfSight(world, unit.x, unit.y, o.x, o.y)) {
        enemies.push({ target: o, dist: d });
      }
    }
    return enemies;
  }

  function isAllyInDanger(unit, enemiesOpt, alliesOpt) {
    const allies = alliesOpt != null ? alliesOpt : units.filter((u) => u.hp > 0 && u.player === unit.player && u.id !== unit.id);
    const enemiesNear = enemiesOpt != null ? enemiesOpt : units.filter((u) => u.hp > 0 && u.player !== unit.player);
    for (const ally of allies) {
      for (const en of enemiesNear) {
        const r = en.range != null ? en.range : 1;
        const d = manhattanDist(en.x, en.y, ally.x, ally.y);
        if (d <= r && d > 0 && hasLineOfSight(world, en.x, en.y, ally.x, ally.y)) return true;
      }
    }
    return false;
  }

  function performMove(unit, toGx, toGy, onDone) {
    const fromGx = unit.x;
    const fromGy = unit.y;
    const path = getPath(world, unit.x, unit.y, toGx, toGy, units, unit);
    if (!path || path.length <= 1) {
      if (onDone) onDone();
      return;
    }
    selectedUnitId = null;
    clearHighlights();
    isUnitMoving = true;
    cameraFollowUnit = true;
    updateUnitTileBorders(unit.id);
    requestRender();
    const mesh = unitMeshes.get(unit.id);
    let stepIndex = 1;

    function animateStep() {
      if (stepIndex >= path.length) {
        const px = unit.x;
        const py = unit.y;
        unit.x = path[path.length - 1].x;
        unit.y = path[path.length - 1].y;
        updateUnitTileIndex(unit, px, py);
        tryCollectPowerup(unit);
        isUnitMoving = false;
        resetWalkPose(mesh);
        updateUnitTileBorders();
        reachable = new Map();
        hasMoved = true;
        if (gameMode === 'online' && unit.player === localPlayerNumber && typeof sendOnlineMessage === 'function') {
          sendOnlineMessage({ type: 'move', unitId: unit.id, toGx: unit.x, toGy: unit.y });
        }
        if (onDone) onDone();
        return;
      }
      const from = path[stepIndex - 1];
      const to = path[stepIndex];
      const startPos = worldPos(from.x, from.y).clone();
      const endPos = worldPos(to.x, to.y).clone();
      const dx = endPos.x - startPos.x;
      const dz = endPos.z - startPos.z;
      if (dx * dx + dz * dz > 1e-6) mesh.rotation.y = Math.atan2(dx, dz);
        const startTime = performance.now();
      let tickCount = 0;
      function tick(now) {
        tickCount++;
        if (tickCount % 2 === 0) requestRender();
        const t = Math.min(1, (now - startTime) / moveDurationMs);
        const smoothstep = (x) => x * x * (3 - 2 * x);
        const eased = smoothstep(t);
        mesh.position.lerpVectors(startPos, endPos, eased);
        setWalkPose(mesh, eased);
        if (cameraFollowUnit) {
          const zoomDist = camera.position.distanceTo(cameraTarget);
          const dist = zoomDist < 0.1 ? INITIAL_ZOOM : zoomDist;
          _zoomDir.copy(camera.position).sub(cameraTarget).normalize();
          if (_zoomDir.lengthSq() < 0.01) _zoomDir.copy(cameraOffset).normalize();
          cameraTarget.lerp(mesh.position, CAMERA_FOLLOW_LERP);
          camera.position.copy(cameraTarget).add(_zoomDir.clone().multiplyScalar(dist));
          camera.lookAt(cameraTarget);
        }
        if (t < 1) requestAnimationFrame(tick);
        else { stepIndex++; animateStep(); }
      }
      requestAnimationFrame(tick);
    }
    animateStep();
  }

  function computeStrikeOutcome(unit, target) {
    const evasionMax = getEffectiveStat(target, 'agi') * 0.7 + getEffectiveStat(target, 'luk') * 0.3;
    const evasionRoll = Math.random() * Math.max(0.001, evasionMax);
    const isHit = evasionRoll <= getEffectiveStat(unit, 'dex');
    let damage = 0;
    if (isHit) {
      const rawDamage = (getEffectiveStat(unit, 'str') * 0.7 + getEffectiveStat(unit, 'dex') * 0.2 + getEffectiveStat(unit, 'int') * 0.1) - (getEffectiveStat(target, 'vit') * 0.3 + getEffectiveStat(target, 'luk') * 0.2);
      damage = Math.max(1, Math.floor(rawDamage));
    }
    return { isHit, damage };
  }

  function performAttack(unit, target, overrideHit, overrideDamage, onDone, strikeListReplay) {
    const vodooCtx = {
      units,
      showFloatingCombatText,
      updateUnitSlashVisibility,
      handleUnitDeath,
    };
    function mirrorVodooHp(victim, hpLost) {
      applyVodooMirrorHpLoss(victim, hpLost, vodooCtx);
    }
    let strikes;
    let isReplay;
    if (Array.isArray(strikeListReplay) && strikeListReplay.length > 0) {
      isReplay = true;
      strikes = strikeListReplay.map((s) => {
        const hit = s.isHit !== undefined ? s.isHit : s.hit;
        return {
          isHit: !!hit,
          damage: hit && s.damage != null && s.damage > 0 ? s.damage : 0,
        };
      });
    } else if (overrideHit !== undefined) {
      isReplay = true;
      const hit = !!overrideHit;
      const dmg = hit && overrideDamage != null && overrideDamage > 0 ? overrideDamage : 0;
      strikes = [{ isHit: hit, damage: dmg }];
    } else {
      isReplay = false;
      if (gameMode === 'online' && unit.player === localPlayerNumber && typeof sendOnlineMessage === 'function') {
        sendOnlineMessage({ type: 'requestRender' });
      }
      const s1 = computeStrikeOutcome(unit, target);
      strikes = [s1];
      if (unit.tempBuff && unit.tempBuff.doubleAttack === true && target.hp > 0) {
        strikes.push(computeStrikeOutcome(unit, target));
      }
    }

    hasAttacked = true;
    selectedUnitId = null;
    isAttackMode = false;
    clearHighlights();

    if (!isReplay && gameMode === 'online' && unit.player === localPlayerNumber && typeof sendOrQueueOnlineMessage === 'function') {
      const strikePayload = strikes.map((s) => ({ hit: s.isHit, damage: s.isHit ? s.damage : undefined }));
      sendOrQueueOnlineMessage({
        type: 'attack',
        unitId: unit.id,
        targetId: target.id,
        strikes: strikePayload,
        hit: strikes[0].isHit,
        damage: strikes[0].isHit ? strikes[0].damage : undefined,
      });
    }

    if (!isReplay) {
      let simHp = target.hp;
      strikes.forEach((s, i) => {
        const hpAfter = s.isHit ? Math.max(0, simHp - s.damage) : simHp;
        console.log('[ATTACK]', `${unit.name} (${unit.class}, P${unit.player})`, '→', `${target.name} (${target.class}, P${target.player})`, `strike ${i + 1}/${strikes.length}:`, s.isHit ? `${s.damage} dmg` : 'MISS', `| ${target.name} HP ${simHp} → ${hpAfter}/${target.maxHp}`);
        simHp = hpAfter;
      });
    }

    const mesh = unitMeshes.get(unit.id);

    /** If the attacker died during the strike (e.g. vodoo mirror), handleUnitDeath already queued endTurn — do not endTurn again or the next unit's turn is skipped. */
    function scheduleAfterAttackSequence() {
      if (isReplay) return;
      if (unit.hp <= 0) {
        setTimeout(() => updateTurnUI(), 400);
        return;
      }
      if (hasMoved && unit.hp > 0) endTurn();
      else setTimeout(() => updateTurnUI(), 400);
    }

    function afterAnimatedStrikeSequence() {
      renderer.shadowMap.enabled = true;
      isUnitMoving = false;
      if (onDone) setTimeout(() => onDone(), 0);
      scheduleAfterAttackSequence();
    }

    if (!mesh || !mesh.userData.rightArm) {
      isUnitMoving = true;
      let idx = 0;
      function runNoMeshStrike() {
        if (idx >= strikes.length || target.hp <= 0) {
          setTimeout(() => {
            isUnitMoving = false;
            if (onDone) onDone();
            if (!isReplay) {
              if (unit.hp <= 0) updateTurnUI();
              else if (hasMoved && unit.hp > 0) endTurn();
              else updateTurnUI();
            }
          }, 400);
          return;
        }
        const s = strikes[idx];
        idx++;
        if (s.isHit) {
          target.hp = Math.max(0, target.hp - s.damage);
          showFloatingCombatText(target.x, target.y, String(s.damage), false);
          updateUnitSlashVisibility(target);
          mirrorVodooHp(target, s.damage);
          if (target.hp <= 0) handleUnitDeath(target, unit);
        } else {
          showFloatingCombatText(target.x, target.y, 'MISS', true);
        }
        if (idx < strikes.length && target.hp > 0 && unit.hp > 0) {
          setTimeout(runNoMeshStrike, 400);
        } else {
          setTimeout(() => {
            isUnitMoving = false;
            if (onDone) onDone();
            if (!isReplay) {
              if (unit.hp <= 0) updateTurnUI();
              else if (hasMoved && unit.hp > 0) endTurn();
              else updateTurnUI();
            }
          }, 400);
        }
      }
      runNoMeshStrike();
      return;
    }

    const startPos = worldPos(unit.x, unit.y).clone();
    const endPos = worldPos(target.x, target.y).clone();
    const lungePos = startPos.clone().lerp(endPos, 0.35);
    const dx = endPos.x - startPos.x;
    const dz = endPos.z - startPos.z;
    if (dx * dx + dz * dz > 1e-6) mesh.rotation.y = Math.atan2(dx, dz);

    const attackRange = unit.range != null ? unit.range : 1;
    const isRanged = attackRange > 2;

    if (isRanged) {
      const rightArm = mesh.userData.rightArm;
      const targetBasePos = worldPos(target.x, target.y).clone();
      const knockbackDir = endPos.clone().sub(startPos).normalize();
      const knockbackAmount = 0.4;

      function runRangedStrike(strikeIndex) {
        if (strikeIndex >= strikes.length || target.hp <= 0 || unit.hp <= 0) {
          if (rightArm) rightArm.rotation.y = 0;
          afterAnimatedStrikeSequence();
          return;
        }
        const isHit = strikes[strikeIndex].isHit;
        const damage = strikes[strikeIndex].damage;

        const shaftGeo = new THREE.CylinderGeometry(0.035, 0.035, 0.4, 6);
        const projectileMat = new THREE.MeshBasicMaterial({ color: 0xffcc44 });
        const projectile = new THREE.Mesh(shaftGeo, projectileMat);
        projectile.position.copy(startPos);
        projectile.position.y += 0.6;
        const dir = endPos.clone().sub(startPos).normalize();
        projectile.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
        scene.add(projectile);
        let hitApplied = false;
        let hitReactStartTime = null;
        let targetDeathPending = false;
        const projStart = projectile.position.clone();
        const projEnd = endPos.clone();
        projEnd.y += 0.6;
        const startTime = performance.now();
        let projTickCount = 0;

        function projectileTick(now) {
          projTickCount++;
          if (projTickCount % 2 === 0) requestRender();
          const elapsed = now - startTime;
          const t = Math.min(1, elapsed / PROJECTILE_MS);
          projectile.position.lerpVectors(projStart, projEnd, t);
          if (rightArm) {
            const armSway = Math.sin(t * Math.PI) * 1.1;
            rightArm.rotation.y = -armSway;
          }

          if (!hitApplied && t >= 1) {
            hitApplied = true;
            scene.remove(projectile);
            shaftGeo.dispose();
            projectileMat.dispose();
            if (isHit) {
              target.hp = Math.max(0, target.hp - damage);
              showFloatingCombatText(target.x, target.y, String(damage), false);
              mirrorVodooHp(target, damage);
              if (target.hp <= 0) targetDeathPending = true;
              const targetMesh = unitMeshes.get(target.id);
              if (targetMesh) hitReactStartTime = now;
              else if (targetDeathPending) {
                handleUnitDeath(target, unit);
                targetDeathPending = false;
              }
              updateUnitSlashVisibility(target);
            } else {
              showFloatingCombatText(target.x, target.y, 'MISS', true);
            }
          }

          if (hitReactStartTime != null && isHit) {
            const targetMesh = unitMeshes.get(target.id);
            if (targetMesh) {
              const tReact = Math.min(1, (now - hitReactStartTime) / HIT_REACT_MS);
              const easeOut = 1 - tReact;
              _knockbackOffset.copy(knockbackDir).multiplyScalar(knockbackAmount * easeOut);
              targetMesh.position.copy(targetBasePos).add(_knockbackOffset);
              if (tReact >= 1) {
                targetMesh.position.copy(targetBasePos);
                hitReactStartTime = null;
                if (targetDeathPending) {
                  handleUnitDeath(target, unit);
                  targetDeathPending = false;
                }
              }
            } else {
              hitReactStartTime = null;
              if (targetDeathPending) {
                handleUnitDeath(target, unit);
                targetDeathPending = false;
              }
            }
          }

          if (t < 1) {
            requestAnimationFrame(projectileTick);
          } else {
            if (rightArm) rightArm.rotation.y = 0;
            const hitReactDone = hitReactStartTime == null;
            if (hitReactDone && targetDeathPending) {
              handleUnitDeath(target, unit);
              targetDeathPending = false;
            }
            if (hitReactDone) {
              if (strikeIndex + 1 < strikes.length && target.hp > 0 && unit.hp > 0) {
                runRangedStrike(strikeIndex + 1);
              } else {
                afterAnimatedStrikeSequence();
              }
            } else {
              requestAnimationFrame(projectileTick);
            }
          }
        }
        requestAnimationFrame(projectileTick);
      }

      isUnitMoving = true;
      renderer.shadowMap.enabled = false;
      runRangedStrike(0);
      return;
    }

    function runMeleeStrike(strikeIndex) {
      if (strikeIndex >= strikes.length || target.hp <= 0 || unit.hp <= 0) {
        mesh.position.copy(startPos);
        if (mesh.userData.rightArm) mesh.userData.rightArm.rotation.y = 0;
        afterAnimatedStrikeSequence();
        return;
      }
      const isHit = strikes[strikeIndex].isHit;
      const damage = strikes[strikeIndex].damage;
      let hitApplied = false;
      const startTime = performance.now();
      const rightArm = mesh.userData.rightArm;
      let hitReactStartTime = null;
      let targetDeathPending = false;
      const targetBasePos = worldPos(target.x, target.y).clone();
      const knockbackDir = endPos.clone().sub(startPos).normalize();
      const knockbackAmount = 0.4;
      let attackTickCount = 0;

      function attackTick(now) {
        attackTickCount++;
        if (attackTickCount % 2 === 0) requestRender();
        const elapsed = now - startTime;
        const t = Math.min(1, elapsed / ATTACK_ANIMATION_MS);
        const lungeOut = t <= 0.4 ? t / 0.4 : 1;
        const lungeBack = t > 0.4 ? (t - 0.4) / 0.6 : 0;
        if (t <= 0.4) {
          mesh.position.lerpVectors(startPos, lungePos, lungeOut);
        } else {
          mesh.position.lerpVectors(lungePos, startPos, lungeBack);
        }
        const armSwing = t <= 0.35 ? t / 0.35 : t <= 0.7 ? (0.7 - t) / 0.35 : 0;
        rightArm.rotation.y = -armSwing * 1.1;

        if (!hitApplied && t >= ATTACK_HIT_AT_T) {
          hitApplied = true;
          if (isHit) {
            target.hp = Math.max(0, target.hp - damage);
            showFloatingCombatText(target.x, target.y, String(damage), false);
            mirrorVodooHp(target, damage);
            if (target.hp <= 0) targetDeathPending = true;
            updateUnitSlashVisibility(target);
            const targetMesh = unitMeshes.get(target.id);
            if (targetMesh) {
              hitReactStartTime = now;
            } else if (targetDeathPending) {
              handleUnitDeath(target, unit);
              targetDeathPending = false;
            }
          } else {
            showFloatingCombatText(target.x, target.y, 'MISS', true);
          }
        }

        if (hitReactStartTime != null && isHit) {
          const targetMesh = unitMeshes.get(target.id);
          if (targetMesh) {
            const tReact = Math.min(1, (now - hitReactStartTime) / HIT_REACT_MS);
            const easeOut = 1 - tReact;
            _knockbackOffset.copy(knockbackDir).multiplyScalar(knockbackAmount * easeOut);
            targetMesh.position.copy(targetBasePos).add(_knockbackOffset);
            if (tReact >= 1) {
              targetMesh.position.copy(targetBasePos);
              hitReactStartTime = null;
              if (targetDeathPending) {
                handleUnitDeath(target, unit);
                targetDeathPending = false;
              }
            }
          } else {
            hitReactStartTime = null;
            if (targetDeathPending) {
              handleUnitDeath(target, unit);
              targetDeathPending = false;
            }
          }
        }

        if (t < 1) {
          requestAnimationFrame(attackTick);
        } else {
          mesh.position.copy(startPos);
          rightArm.rotation.y = 0;
          const hitReactDone = hitReactStartTime == null;
          if (hitReactDone && targetDeathPending) {
            handleUnitDeath(target, unit);
            targetDeathPending = false;
          }
          if (hitReactDone) {
            if (strikeIndex + 1 < strikes.length && target.hp > 0 && unit.hp > 0) {
              runMeleeStrike(strikeIndex + 1);
            } else {
              afterAnimatedStrikeSequence();
            }
          } else {
            requestAnimationFrame(attackTick);
          }
        }
      }
      requestAnimationFrame(attackTick);
    }

    isUnitMoving = true;
    renderer.shadowMap.enabled = false;
    runMeleeStrike(0);
  }

  function showSpellExplosion(gx, gy) {
    const pos = worldPos(gx, gy);
    pos.y += 0.4;
    const geo = new THREE.SphereGeometry(0.1, 12, 12);
    const mat = new THREE.MeshBasicMaterial({
      color: 0x8844ff,
      transparent: true,
      opacity: 0.9,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.copy(pos);
    scene.add(mesh);
    const startTime = performance.now();
    let spellTickCount = 0;
    function tick(now) {
      spellTickCount++;
      if (spellTickCount % 2 === 0) requestRender();
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / SPELL_EXPLOSION_MS);
      const scale = t * (2 - t);
      mesh.scale.setScalar(scale * 7.5);
      mat.opacity = 0.9 * (1 - t);
      if (t < 1) {
        requestAnimationFrame(tick);
      } else {
        scene.remove(mesh);
        geo.dispose();
        mat.dispose();
      }
    }
    requestAnimationFrame(tick);
  }

  function executeSkillWithProjectile(unit, target, skill, ctx, onDone) {
    if (skill.target === 'enemy' && target == null) {
      setTimeout(() => {
        if (ctx.updateTurnUI) ctx.updateTurnUI();
        if (onDone) onDone();
      }, 400);
      return;
    }
    const range = skill.range ?? 0;
    const useProjectile = range > 2 && target != null && (target.x !== unit.x || target.y !== unit.y);
    const useMeleeAnimation = !useProjectile && target != null && (target.x !== unit.x || target.y !== unit.y);
    if (!useProjectile && !useMeleeAnimation) {
      isUnitMoving = true;
      applySkillEffect(skill.effectKey, unit, target, ctx);
      const isBuff = skill.target === 'self' || skill.target === 'ally';
      const buffTarget = skill.target === 'self' ? unit : target;
      if (isBuff && buffTarget) {
        playBuffAnimation(buffTarget, () => {
          setTimeout(() => {
            isUnitMoving = false;
            if (ctx.updateTurnUI) ctx.updateTurnUI();
            if (onDone) onDone();
          }, 400);
        });
      } else {
        setTimeout(() => {
          isUnitMoving = false;
          if (ctx.updateTurnUI) ctx.updateTurnUI();
          if (onDone) onDone();
        }, 400);
      }
      return;
    }
    if (useMeleeAnimation) {
      const mesh = unitMeshes.get(unit.id);
      if (!mesh || !mesh.userData.rightArm) {
        isUnitMoving = true;
        applySkillEffect(skill.effectKey, unit, target, ctx);
        if (ctx.updateUnitSlashVisibility) ctx.updateUnitSlashVisibility(target);
        setTimeout(() => {
          isUnitMoving = false;
          if (ctx.updateTurnUI) ctx.updateTurnUI();
          if (onDone) onDone();
        }, 400);
        return;
      }
      isUnitMoving = true;
      const startPos = worldPos(unit.x, unit.y).clone();
      const endPos = worldPos(target.x, target.y).clone();
      const lungePos = startPos.clone().lerp(endPos, 0.35);
      const dx = endPos.x - startPos.x;
      const dz = endPos.z - startPos.z;
      if (dx * dx + dz * dz > 1e-6) mesh.rotation.y = Math.atan2(dx, dz);
      const targetBasePos = worldPos(target.x, target.y).clone();
      const knockbackDir = endPos.clone().sub(startPos).normalize();
      const knockbackAmount = 0.4;
      const rightArm = mesh.userData.rightArm;
      let hitApplied = false;
      let hitReactStartTime = null;
      let targetDeathPending = false;
      const ctxNoDeath = { ...ctx, handleUnitDeath: undefined, vodooMirrorDeath: handleUnitDeath };
      const startTime = performance.now();
      let skillTickCount = 0;
      function meleeSkillTick(now) {
        skillTickCount++;
        if (skillTickCount % 2 === 0) requestRender();
        const elapsed = now - startTime;
        const t = Math.min(1, elapsed / ATTACK_ANIMATION_MS);
        const lungeOut = t <= 0.4 ? t / 0.4 : 1;
        const lungeBack = t > 0.4 ? (t - 0.4) / 0.6 : 0;
        if (t <= 0.4) {
          mesh.position.lerpVectors(startPos, lungePos, lungeOut);
        } else {
          mesh.position.lerpVectors(lungePos, startPos, lungeBack);
        }
        const armSwing = t <= 0.35 ? t / 0.35 : t <= 0.7 ? (0.7 - t) / 0.35 : 0;
        rightArm.rotation.y = -armSwing * 1.1;
        if (!hitApplied && t >= ATTACK_HIT_AT_T) {
          hitApplied = true;
          applySkillEffect(skill.effectKey, unit, target, ctxNoDeath);
          if (target.hp <= 0) targetDeathPending = true;
          if (ctx.updateUnitSlashVisibility) ctx.updateUnitSlashVisibility(target);
          const targetMesh = unitMeshes.get(target.id);
          if (targetMesh && skill.target !== 'ally') hitReactStartTime = now;
          else if (targetDeathPending) {
            handleUnitDeath(target, unit);
            targetDeathPending = false;
          }
        }
        if (hitReactStartTime != null) {
          const targetMesh = unitMeshes.get(target.id);
          if (targetMesh) {
            const tReact = Math.min(1, (now - hitReactStartTime) / HIT_REACT_MS);
            const easeOut = 1 - tReact;
            _knockbackOffset.copy(knockbackDir).multiplyScalar(knockbackAmount * easeOut);
            targetMesh.position.copy(targetBasePos).add(_knockbackOffset);
            if (tReact >= 1) {
              targetMesh.position.copy(targetBasePos);
              hitReactStartTime = null;
              if (targetDeathPending) {
                handleUnitDeath(target, unit);
                targetDeathPending = false;
              }
            }
          } else {
            hitReactStartTime = null;
            if (targetDeathPending) {
              handleUnitDeath(target, unit);
              targetDeathPending = false;
            }
          }
        }
        if (t < 1) {
          requestAnimationFrame(meleeSkillTick);
        } else {
          mesh.position.copy(startPos);
          rightArm.rotation.y = 0;
          if (hitReactStartTime == null && targetDeathPending) {
            handleUnitDeath(target, unit);
            targetDeathPending = false;
          }
          if (hitReactStartTime == null) {
            renderer.shadowMap.enabled = true;
            isUnitMoving = false;
            setTimeout(() => {
              if (ctx.updateTurnUI) ctx.updateTurnUI();
              if (onDone) onDone();
            }, 400);
          } else {
            requestAnimationFrame(meleeSkillTick);
          }
        }
      }
      renderer.shadowMap.enabled = false;
      requestAnimationFrame(meleeSkillTick);
      return;
    }
    const startPos = worldPos(unit.x, unit.y).clone();
    const endPos = worldPos(target.x, target.y).clone();
    const shaftGeo = new THREE.CylinderGeometry(0.035, 0.035, 0.4, 6);
    const projectileMat = new THREE.MeshBasicMaterial({ color: 0xffcc44 });
    const projectile = new THREE.Mesh(shaftGeo, projectileMat);
    projectile.position.copy(startPos);
    projectile.position.y += 0.6;
    const dir = endPos.clone().sub(startPos).normalize();
    projectile.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
    scene.add(projectile);
    isUnitMoving = true;
    const casterMesh = unitMeshes.get(unit.id);
    const casterRightArm = casterMesh && casterMesh.userData.rightArm ? casterMesh.userData.rightArm : null;
    if (casterMesh) {
      const dx = endPos.x - startPos.x;
      const dz = endPos.z - startPos.z;
      if (dx * dx + dz * dz > 1e-6) casterMesh.rotation.y = Math.atan2(dx, dz);
    }
    const projStart = projectile.position.clone();
    const projEnd = endPos.clone();
    projEnd.y += 0.6;
    const startTime = performance.now();
    const targetBasePos = worldPos(target.x, target.y).clone();
    const knockbackDir = endPos.clone().sub(startPos).normalize();
    const knockbackAmount = 0.4;
    let hitApplied = false;
    let hitReactStartTime = null;
    let projTickCount = 0;
    let pendingKnockback = null;
    const ctxForEffect = skill.effectKey === 'powerShot'
      ? {
          ...ctx,
          animateKnockback(targ, fromGx, fromGy, toGx, toGy, knockbackOnDone) {
            pendingKnockback = { targ, fromGx, fromGy, toGx, toGy, knockbackOnDone };
          },
        }
      : ctx;

    function doProjectileComplete() {
      renderer.shadowMap.enabled = true;
      isUnitMoving = false;
      setTimeout(() => {
        if (ctx.updateTurnUI) ctx.updateTurnUI();
        if (onDone) onDone();
      }, 400);
    }

    function projectileTick(now) {
      projTickCount++;
      if (projTickCount % 2 === 0) requestRender();
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / PROJECTILE_MS);
      projectile.position.lerpVectors(projStart, projEnd, t);
      if (casterRightArm) {
        const armSway = Math.sin(t * Math.PI) * 1.1;
        casterRightArm.rotation.y = -armSway;
      }

      if (!hitApplied && t >= 1) {
        hitApplied = true;
        scene.remove(projectile);
        shaftGeo.dispose();
        projectileMat.dispose();
        if (skill.type === 'spell') showSpellExplosion(target.x, target.y);
        applySkillEffect(skill.effectKey, unit, target, ctxForEffect);
        const targetMesh = unitMeshes.get(target.id);
        if (targetMesh && target.hp > 0) hitReactStartTime = now;
        if (ctx.updateUnitSlashVisibility) ctx.updateUnitSlashVisibility(target);
      }

      if (hitReactStartTime != null) {
        const targetMesh = unitMeshes.get(target.id);
        if (targetMesh) {
          const tReact = Math.min(1, (now - hitReactStartTime) / HIT_REACT_MS);
          const easeOut = 1 - tReact;
          _knockbackOffset.copy(knockbackDir).multiplyScalar(knockbackAmount * easeOut);
          targetMesh.position.copy(targetBasePos).add(_knockbackOffset);
          if (tReact >= 1) {
            targetMesh.position.copy(targetBasePos);
            hitReactStartTime = null;
            if (pendingKnockback) {
              const { targ, fromGx, fromGy, toGx, toGy, knockbackOnDone } = pendingKnockback;
              pendingKnockback = null;
              if (ctx.animateKnockback) {
                ctx.animateKnockback(targ, fromGx, fromGy, toGx, toGy, () => {
                  if (knockbackOnDone) knockbackOnDone();
                  if (ctx.updateUnitSlashVisibility) ctx.updateUnitSlashVisibility(targ);
                  doProjectileComplete();
                });
              } else {
                doProjectileComplete();
              }
              return;
            }
          }
        } else {
          hitReactStartTime = null;
          if (pendingKnockback) {
            pendingKnockback = null;
            doProjectileComplete();
            return;
          }
        }
      }

      if (t < 1) {
        requestAnimationFrame(projectileTick);
      } else {
        if (casterRightArm) casterRightArm.rotation.y = 0;
        if (hitReactStartTime == null) {
          if (pendingKnockback) {
            const { targ, fromGx, fromGy, toGx, toGy, knockbackOnDone } = pendingKnockback;
            pendingKnockback = null;
            if (ctx.animateKnockback) {
              ctx.animateKnockback(targ, fromGx, fromGy, toGx, toGy, () => {
                if (knockbackOnDone) knockbackOnDone();
                if (ctx.updateUnitSlashVisibility) ctx.updateUnitSlashVisibility(targ);
                doProjectileComplete();
              });
            } else {
              doProjectileComplete();
            }
          } else {
            doProjectileComplete();
          }
        } else {
          requestAnimationFrame(projectileTick);
        }
      }
    }
    renderer.shadowMap.enabled = false;
    requestAnimationFrame(projectileTick);
  }

  function runPlayingAI() {
    if (phase !== 'playing' || !isCPUPlayer(currentPlayer) || isUnitMoving || initiativeOrder.length === 0) return;
    const uid = initiativeOrder[currentTurnIndex];
    const unit = getUnitById(uid);
    if (!unit || unit.hp <= 0) {
      // Recover if initiative changed mid-turn (e.g. reanimate) and current pointer is now invalid.
      endTurn();
      return;
    }

    const unitAgi = Math.max(MIN_REACHABLE_MOVES, getEffectiveStat(unit, 'agi'));
    const reachableDist = getReachable(world, unit.x, unit.y, unitAgi, units, unit);
    const otherOccupiedKeys = new Set(
      units.filter((u) => u.hp > 0 && u.id !== unit.id).map((u) => u.y * world.w + u.x)
    );
    const reachableTiles = [];
    reachableDist.forEach((d, k) => {
      if (d === 0) return;
      if (!otherOccupiedKeys.has(k)) reachableTiles.push({ gx: k % world.w, gy: Math.floor(k / world.w), dist: d });
    });

    const enemiesInRange = getEnemiesInRange(unit);
    const centerTiles = getCenterTiles();
    const enemyBaseTiles = getEnemyBaseTiles(unit.player);
    const lowHpThreshold = 0.25;
    const SURVIVAL_ONLY_HP_RATIO = 0.03;
    const isLowHp = unit.maxHp > 0 && (unit.hp / unit.maxHp) < lowHpThreshold;
    const isCriticalHp = unit.maxHp > 0 && (unit.hp / unit.maxHp) < SURVIVAL_ONLY_HP_RATIO;
    /** Level 2 only: go to enemy base to level up. Level 3 units prioritize fighting/surviving. */
    const prioritizeEnemyBase = unit.level === 2;
    const unoccupiedCenterTiles = centerTiles.filter((t) => !otherOccupiedKeys.has(t.gy * world.w + t.gx));
    const unoccupiedEnemyBaseTiles = enemyBaseTiles.filter((t) => !otherOccupiedKeys.has(t.gy * world.w + t.gx));

    const centerKeys = new Set(centerTiles.map((c) => c.gy * world.w + c.gx));
    const centerTargets = unoccupiedCenterTiles.length > 0 ? unoccupiedCenterTiles : centerTiles;
    const baseTargets = unoccupiedEnemyBaseTiles.length > 0 ? unoccupiedEnemyBaseTiles : enemyBaseTiles;
    const pathToCenterResult = centerTargets.length > 0 ? getPathToNearestTarget(centerTargets) : null;
    const pathToEnemyBaseResult = baseTargets.length > 0 ? getPathToNearestTarget(baseTargets) : null;

    /** Max range for movement: attack range or best usable enemy-targeting skill range (if enough MP). */
    const availableSkills = getAvailableSkills(unit);
    const aiSkipSkillsForDoubleAttack = unit.tempBuff && unit.tempBuff.doubleAttack === true;
    const availableForMove = aiSkipSkillsForDoubleAttack
      ? []
      : availableSkills.filter((s) => !s.disabled && unit.mp >= s.cost && s.target === 'enemy');
    const maxSkillRange = availableForMove.length > 0 ? Math.max(...availableForMove.map((s) => s.range || 0)) : 0;
    const effectiveRange = Math.max(unit.range != null ? unit.range : 1, maxSkillRange);
    const isRangedUnit = unit.level >= 2 && effectiveRange >= 2;
    /** Ranged kiting / post-attack ranged heuristics only when skills can extend threat; basic-only turns should close for double attack. */
    const isRangedUnitForAi = aiSkipSkillsForDoubleAttack ? false : isRangedUnit;

    const enemies = units.filter((u) => u.hp > 0 && u.player !== unit.player);
    const allies = units.filter((u) => u.hp > 0 && u.player === unit.player && u.id !== unit.id);

    function closestTileToTargets(tiles, targets) {
      if (targets.length === 0) return null;
      let best = null;
      let bestDist = Infinity;
      for (const t of tiles) {
        let total = 0;
        for (const g of targets) total += manhattanDist(t.gx, t.gy, g.gx, g.gy);
        if (total < bestDist) { bestDist = total; best = t; }
      }
      return best;
    }

    /** Pick the reachable tile that gets closest to the target region (min distance to nearest target). */
    function farthestReachableTowardTargets(tiles, targets) {
      if (targets.length === 0 || tiles.length === 0) return null;
      let best = null;
      let bestMinDist = Infinity;
      for (const t of tiles) {
        let minDistToTarget = Infinity;
        for (let gi = 0; gi < targets.length; gi++) {
          const g = targets[gi];
          const d = manhattanDist(t.gx, t.gy, g.gx, g.gy);
          if (d < minDistToTarget) minDistToTarget = d;
        }
        if (minDistToTarget < bestMinDist) { bestMinDist = minDistToTarget; best = t; }
      }
      return best;
    }

    /** Enemies in attack/skill range from (fromGx, fromGy) for this unit (for move-then-attack planning). */
    function getEnemiesInRangeFrom(fromGx, fromGy) {
      const range = effectiveRange;
      const list = [];
      for (let ei = 0; ei < enemies.length; ei++) {
        const o = enemies[ei];
        const d = manhattanDist(fromGx, fromGy, o.x, o.y);
        if (d <= range && d > 0 && hasLineOfSight(world, fromGx, fromGy, o.x, o.y)) {
          list.push({ target: o, dist: d });
        }
      }
      return list;
    }

    const reachableKeys = new Set(reachableTiles.map((t) => t.gy * world.w + t.gx));

    /** Return the farthest tile along the path that is reachable this turn (path[0] = current pos). */
    function farthestReachableOnPath(path, maxSteps) {
      if (!path || path.length <= 1) return null;
      const limit = Math.min(maxSteps, path.length - 1);
      for (let i = limit; i >= 1; i--) {
        const p = path[i];
        const k = p.y * world.w + p.x;
        if (reachableKeys.has(k)) return { gx: p.x, gy: p.y };
      }
      return null;
    }

    /** Farthest path step within maxSteps that is unoccupied (allows passing through allies toward base). */
    function farthestUnoccupiedOnPath(path, maxSteps) {
      if (!path || path.length <= 1) return null;
      const limit = Math.min(maxSteps, path.length - 1);
      for (let i = limit; i >= 1; i--) {
        const p = path[i];
        if (!otherOccupiedKeys.has(p.y * world.w + p.x)) return { gx: p.x, gy: p.y };
      }
      return null;
    }

    /** Find the shortest path from unit to any target; return { path, target } or null. */
    function getPathToNearestTarget(targets) {
      const result = getPathToNearestOfTargets(world, unit.x, unit.y, targets, units, unit);
      if (!result || result.path.length <= 1) return null;
      return result;
    }

    function safestReachableTile(tiles) {
      const set = tiles != null ? tiles : reachableTiles;
      if (set.length === 0) return null;
      if (enemies.length === 0) return set[0];
      let best = null;
      let bestMinDist = -1;
      for (const t of set) {
        let minDist = Infinity;
        for (let ei = 0; ei < enemies.length; ei++) {
          const e = enemies[ei];
          const d = manhattanDist(t.gx, t.gy, e.x, e.y);
          if (d < minDist) minDist = d;
        }
        if (minDist > bestMinDist) { bestMinDist = minDist; best = t; }
      }
      return best;
    }

    /** After attacking: retreat tile that is away from enemies. High-HP units stay in front of allies; low-HP prefer moving toward allies. */
    function bestRetreatTowardAlliesTile(tiles) {
      const set = tiles != null ? tiles : reachableTiles;
      if (set.length === 0) return null;
      if (enemies.length === 0) return set[0];
      const isHighHp = unit.maxHp > 0 && (unit.hp / unit.maxHp) >= 0.6;
      let best = null;
      let bestScore = -Infinity;
      for (const t of set) {
        let minDistToEnemy = Infinity;
        for (let ei = 0; ei < enemies.length; ei++) {
          const d = manhattanDist(t.gx, t.gy, enemies[ei].x, enemies[ei].y);
          if (d < minDistToEnemy) minDistToEnemy = d;
        }
        let minDistToAlly = 999;
        if (allies.length > 0) {
          minDistToAlly = Infinity;
          for (let ai = 0; ai < allies.length; ai++) {
            const d = manhattanDist(t.gx, t.gy, allies[ai].x, allies[ai].y);
            if (d < minDistToAlly) minDistToAlly = d;
          }
        }
        let score;
        if (isHighHp) {
          const behindAllies = minDistToAlly < minDistToEnemy;
          score = behindAllies ? minDistToEnemy - 1000 : minDistToEnemy;
        } else {
          score = minDistToEnemy - minDistToAlly;
        }
        if (score > bestScore) { bestScore = score; best = t; }
      }
      return best;
    }

    /** For ranged units: reachable tile that keeps at least one enemy in range but maximizes distance to nearest enemy. */
    function bestKiteTile() {
      const range = effectiveRange;
      if (enemies.length === 0) return null;
      let best = null;
      let bestMinDistToEnemy = -1;
      for (const t of reachableTiles) {
        let minDistToEnemy = Infinity;
        for (let ei = 0; ei < enemies.length; ei++) {
          const d = manhattanDist(t.gx, t.gy, enemies[ei].x, enemies[ei].y);
          if (d < minDistToEnemy) minDistToEnemy = d;
        }
        let hasEnemyInRange = false;
        for (let ei = 0; ei < enemies.length; ei++) {
          const e = enemies[ei];
          const d = manhattanDist(t.gx, t.gy, e.x, e.y);
          if (d <= 0 || d > range) continue;
          if (hasLineOfSight(world, t.gx, t.gy, e.x, e.y)) {
            hasEnemyInRange = true;
            break;
          }
        }
        if (hasEnemyInRange && minDistToEnemy > bestMinDistToEnemy) {
          bestMinDistToEnemy = minDistToEnemy;
          best = t;
        }
      }
      return best;
    }

    /** Step toward a tile from which the unit can basic-attack an enemy within attackRange (Manhattan + LOS). Returns true if a move was started. */
    function attemptMoveWithinAttackRange(attackRange) {
      if (hasAttacked || enemies.length === 0 || hasMoved || reachableTiles.length === 0) return false;
      const livingOccupiedKeys = new Set();
      for (let ui = 0; ui < units.length; ui++) {
        const uu = units[ui];
        if (uu.hp > 0) livingOccupiedKeys.add(uu.y * world.w + uu.x);
      }
      function pathToTileInAttackRangeOf(enemy, requireReachableInOneTurn) {
        let bestPath = null;
        const r = attackRange;
        for (let dy = -r; dy <= r; dy++) {
          for (let dx = -r; dx <= r; dx++) {
            if (dx === 0 && dy === 0) continue;
            if (Math.abs(dx) + Math.abs(dy) > r) continue;
            const tx = enemy.x + dx;
            const ty = enemy.y + dy;
            if (tx < 0 || tx >= world.w || ty < 0 || ty >= world.h) continue;
            if (!isWalkable(world, tx, ty)) continue;
            if (!hasLineOfSight(world, tx, ty, enemy.x, enemy.y)) continue;
            if (livingOccupiedKeys.has(ty * world.w + tx)) continue;
            const path = getPath(world, unit.x, unit.y, tx, ty, units, unit);
            const steps = path ? path.length - 1 : Infinity;
            const ok = path && path.length > 1 && (!requireReachableInOneTurn || steps <= unitAgi);
            if (ok && (!bestPath || path.length < bestPath.length)) bestPath = path;
          }
        }
        return bestPath;
      }
      const pathable = [];
      for (const e of enemies) {
        const path = pathToTileInAttackRangeOf(e, true);
        if (path) pathable.push({ enemy: e, path });
      }
      if (pathable.length > 0) {
        const weakPathable = pathable.filter(
          (p) => p.enemy.maxHp > 0 && (p.enemy.hp / p.enemy.maxHp) < lowHpThreshold
        );
        const candidates = weakPathable.length > 0 ? weakPathable : pathable;
        if (weakPathable.length > 0) {
          candidates.sort((a, b) => a.enemy.hp - b.enemy.hp || a.path.length - b.path.length);
        } else {
          candidates.sort((a, b) => a.path.length - b.path.length || a.enemy.hp - b.enemy.hp);
        }
        const chosen = candidates[0];
        const toward = farthestReachableOnPath(chosen.path, unitAgi);
        if (toward && (toward.gx !== unit.x || toward.gy !== unit.y)) {
          performMove(unit, toward.gx, toward.gy, () => setTimeout(runPlayingAI, 600));
          return true;
        }
      }
      let bestPath = null;
      let bestLen = Infinity;
      for (const e of enemies) {
        const path = pathToTileInAttackRangeOf(e, false);
        if (path && path.length < bestLen) {
          bestLen = path.length;
          bestPath = path;
        }
      }
      if (bestPath) {
        const toward = farthestReachableOnPath(bestPath, unitAgi);
        if (toward && (toward.gx !== unit.x || toward.gy !== unit.y)) {
          performMove(unit, toward.gx, toward.gy, () => setTimeout(runPlayingAI, 600));
          return true;
        }
      }
      return false;
    }

    const enemiesInRangeByTile = new Map();
    const erScratch = [];
    for (const t of reachableTiles) {
      const k = t.gy * world.w + t.gx;
      erScratch.length = 0;
      for (let ei = 0; ei < enemies.length; ei++) {
        const o = enemies[ei];
        const d = manhattanDist(t.gx, t.gy, o.x, o.y);
        if (d <= effectiveRange && d > 0 && hasLineOfSight(world, t.gx, t.gy, o.x, o.y)) {
          erScratch.push({ target: o, dist: d });
        }
      }
      enemiesInRangeByTile.set(k, erScratch.length > 0 ? erScratch.slice() : []);
    }
    const hasLowHpEnemyInRange = enemiesInRange.some((e) => e.target.maxHp > 0 && (e.target.hp / e.target.maxHp) < lowHpThreshold);
    const hasLowHpEnemyReachable =
      hasLowHpEnemyInRange ||
      reachableTiles.some((t) => {
        const inRange = enemiesInRangeByTile.get(t.gy * world.w + t.gx) || [];
        return inRange.some((e) => e.target.maxHp > 0 && (e.target.hp / e.target.maxHp) < lowHpThreshold);
      });

    if (hasAttacked) {
      if (hasMoved) {
        endTurn();
        return;
      }
      /** When kiting (ranged unit with enemies), prioritize powerup over center or enemy base. */
      if (isRangedUnitForAi && enemies.length > 0 && powerups.size > 0 && reachableTiles.length > 0) {
        const powerupTiles = [];
        powerups.forEach((_, key) => {
          powerupTiles.push({ gx: key % world.w, gy: Math.floor(key / world.w) });
        });
        const pathToPowerupResult = getPathToNearestTarget(powerupTiles);
        if (pathToPowerupResult) {
          const toward = farthestUnoccupiedOnPath(pathToPowerupResult.path, unitAgi);
          if (toward && (toward.gx !== unit.x || toward.gy !== unit.y)) {
            performMove(unit, toward.gx, toward.gy, () => endTurn());
            return;
          }
          const fallback = farthestReachableTowardTargets(reachableTiles, powerupTiles);
          if (fallback && (fallback.gx !== unit.x || fallback.gy !== unit.y)) {
            performMove(unit, fallback.gx, fallback.gy, () => endTurn());
            return;
          }
        }
      }
      const turnsLeft = maxTurns - turnCount;
      if (turnsLeft <= 20 && centerTiles.length > 0) {
        const onCenter = centerTiles.some((c) => c.gx === unit.x && c.gy === unit.y);
        if (onCenter && reachableTiles.length > 0) {
          const reachableCenterTiles = reachableTiles.filter((t) => centerKeys.has(t.gy * world.w + t.gx));
          const otherCenterTiles = reachableCenterTiles.filter((t) => t.gx !== unit.x || t.gy !== unit.y);
          if (otherCenterTiles.length > 0) {
            const awayFromEnemy = safestReachableTile(otherCenterTiles);
            if (awayFromEnemy && (awayFromEnemy.gx !== unit.x || awayFromEnemy.gy !== unit.y)) {
              performMove(unit, awayFromEnemy.gx, awayFromEnemy.gy, () => endTurn());
              return;
            }
          }
          endTurn();
          return;
        }
        if (onCenter) {
          endTurn();
          return;
        }
        if (reachableTiles.length > 0) {
          const result = pathToCenterResult;
          const toward = result ? farthestUnoccupiedOnPath(result.path, unitAgi) : null;
          if (toward && (toward.gx !== unit.x || toward.gy !== unit.y)) {
            performMove(unit, toward.gx, toward.gy, () => endTurn());
            return;
          }
          const fallback = farthestReachableTowardTargets(reachableTiles, centerTargets);
          if (fallback && (fallback.gx !== unit.x || fallback.gy !== unit.y)) {
            performMove(unit, fallback.gx, fallback.gy, () => endTurn());
            return;
          }
        }
        endTurn();
        return;
      }
      /** When not low HP (and turnsLeft > 20): level 2 prioritizes enemy base (level up), then center; others prioritize center. */
      if (!isLowHp && reachableTiles.length > 0) {
        if (prioritizeEnemyBase && enemyBaseTiles.length > 0) {
          const onEnemyBase = enemyBaseTiles.some((c) => c.gx === unit.x && c.gy === unit.y);
          if (!onEnemyBase) {
            const result = pathToEnemyBaseResult;
            const toward = result ? farthestUnoccupiedOnPath(result.path, unitAgi) : null;
            if (toward && (toward.gx !== unit.x || toward.gy !== unit.y)) {
              performMove(unit, toward.gx, toward.gy, () => endTurn());
              return;
            }
            const fallback = farthestReachableTowardTargets(reachableTiles, baseTargets);
            if (fallback && (fallback.gx !== unit.x || fallback.gy !== unit.y)) {
              performMove(unit, fallback.gx, fallback.gy, () => endTurn());
              return;
            }
          }
        }
        if (centerTiles.length > 0) {
          const onCenter = centerTiles.some((c) => c.gx === unit.x && c.gy === unit.y);
          if (!onCenter) {
            const result = pathToCenterResult;
            const toward = result ? farthestUnoccupiedOnPath(result.path, unitAgi) : null;
            if (toward && (toward.gx !== unit.x || toward.gy !== unit.y)) {
              performMove(unit, toward.gx, toward.gy, () => endTurn());
              return;
            }
            const fallback = farthestReachableTowardTargets(reachableTiles, centerTargets);
            if (fallback && (fallback.gx !== unit.x || fallback.gy !== unit.y)) {
              performMove(unit, fallback.gx, fallback.gy, () => endTurn());
              return;
            }
          }
        }
      }
      const reachableCenterTiles = centerTiles.length > 0
        ? reachableTiles.filter((t) => centerKeys.has(t.gy * world.w + t.gx))
        : null;
      const retreatTileSet = (reachableCenterTiles != null && reachableCenterTiles.length > 0)
        ? reachableCenterTiles
        : reachableTiles;

      let retreat = null;
      if (retreatTileSet.length > 0 && allies.length > 0) {
        retreat = bestRetreatTowardAlliesTile(retreatTileSet);
        if (retreat) {
          const path = getPath(world, unit.x, unit.y, retreat.gx, retreat.gy, units, unit);
          const steps = path ? path.length - 1 : Infinity;
          if (!path || path.length <= 1 || steps > unitAgi) retreat = safestReachableTile(retreatTileSet);
        }
      }
      if (!retreat && retreatTileSet.length > 0) retreat = safestReachableTile(retreatTileSet);
      if (retreat && (retreat.gx !== unit.x || retreat.gy !== unit.y)) {
        performMove(unit, retreat.gx, retreat.gy, () => endTurn());
        return;
      }
      endTurn();
      return;
    }

    /** Only play for survival when HP is below 3% of max: just move to safest tile or end turn. Skip when ≤20 turns left. */
    if (isCriticalHp && (maxTurns - turnCount) > 20 && !hasMoved && reachableTiles.length > 0) {
      let moveTowardLowHp = null;
      let bestEnemyHp = Infinity;
      for (const t of reachableTiles) {
        const inRange = enemiesInRangeByTile.get(t.gy * world.w + t.gx) || [];
        const lowHp = inRange.filter((x) => x.target.maxHp > 0 && (x.target.hp / x.target.maxHp) < lowHpThreshold);
        if (lowHp.length > 0) {
          const minHp = Math.min(...lowHp.map((x) => x.target.hp));
          if (minHp < bestEnemyHp) {
            bestEnemyHp = minHp;
            moveTowardLowHp = t;
          }
        }
      }
      if (moveTowardLowHp) {
        const path = getPath(world, unit.x, unit.y, moveTowardLowHp.gx, moveTowardLowHp.gy, units, unit);
        const toward = path ? farthestReachableOnPath(path, unitAgi) : null;
        if (toward && (toward.gx !== unit.x || toward.gy !== unit.y)) {
          performMove(unit, toward.gx, toward.gy, () => setTimeout(runPlayingAI, 600));
          return;
        }
      }
      const safe = safestReachableTile();
      if (safe && (safe.gx !== unit.x || safe.gy !== unit.y)) {
        performMove(unit, safe.gx, safe.gy, () => setTimeout(runPlayingAI, 600));
        return;
      }
      endTurn();
      return;
    }

    /** CPU skill usage: prioritize killing (damage on low-HP enemy) > damage in range > heal at 50% HP > buff when available > debuff. */
    if (!hasAttacked && !aiSkipSkillsForDoubleAttack) {
      const available = availableSkills;
      const hpRatio = unit.maxHp > 0 ? unit.hp / unit.maxHp : 1;
      const lowHpEnemyThreshold = 0.35;

      const DAMAGE_KEYS = new Set(['arcaneBolt', 'feast', 'pierce', 'snipe', 'berserk', 'drain', 'shuriken', 'chokuto', 'bite', 'execute', 'judgement', 'exorcise', 'ambush', 'powerShot', 'concoct', 'bloodSuck', 'gnaw', 'malediction', 'skewer']);
      const HEAL_KEYS = new Set(['chakra', 'sacrifice']);
      const BUFF_KEYS = new Set(['brave', 'focus', 'bloodlust', 'iaido', 'howl', 'mantra', 'sanctuary', 'windWalk', 'forge', 'fortify', 'warCry', 'foresight', 'overheal', 'rapid', 'vodoo']);
      const DEBUFF_KEYS = new Set(['impale', 'poison', 'gaze', 'debilitate', 'bash', 'infect']);
      const PERMANENT_DEBUFF_KEYS = new Set(['dominate', 'manaDrain', 'weaken', 'cripple', 'hex', 'blind', 'raid']);
      const SUMMON_KEYS = new Set(['reanimate']);

      function getEnemyTargets(skill) {
        const targets = getSkillTargetTiles(unit, skill, units);
        return targets.filter((t) => t.targetUnit != null).map((t) => t.targetUnit);
      }

      const skillCtx = {
        showFloatingCombatText,
        handleUnitDeath,
        updateUnitSlashVisibility,
        updateTurnUI,
        tryCollectPowerup,
        world,
        units,
        reanimateDeadUnit,
        updateUnitTileIndex,
        updateUnitPosition(unit) {
          const mesh = unitMeshes.get(unit.id);
          if (mesh) mesh.position.copy(worldPos(unit.x, unit.y));
        },
        animateKnockback(target, fromGx, fromGy, toGx, toGy, onDone) {
          const mesh = unitMeshes.get(target.id);
          if (!mesh) {
            if (onDone) onDone();
            return;
          }
          const startPos = worldPos(fromGx, fromGy).clone();
          const endPos = worldPos(toGx, toGy).clone();
          const startTime = performance.now();
          let tickCount = 0;
          function tick(now) {
            tickCount++;
            if (tickCount % 2 === 0) requestRender();
            const t = Math.min(1, (now - startTime) / moveDurationMs);
            const smoothstep = (x) => x * x * (3 - 2 * x);
            mesh.position.lerpVectors(startPos, endPos, smoothstep(t));
            if (t < 1) requestAnimationFrame(tick);
            else {
              mesh.position.copy(endPos);
              if (onDone) onDone();
            }
          }
          requestAnimationFrame(tick);
        },
      };

      let chosen = null;
      let chosenTarget = null;

      const hasKillPotential = hasLowHpEnemyInRange || (!hasMoved && hasLowHpEnemyReachable)
      if (!hasKillPotential) {
        const HEAL_HP_RATIO_THRESHOLD = 0.5;
        for (const skill of available) {
          if (skill.disabled || unit.mp < skill.cost) continue;
          if (HEAL_KEYS.has(skill.effectKey)) {
            const targets = getSkillTargetTiles(unit, skill, units);
            const lowHpTargets = targets
              .filter((t) => t.targetUnit && t.targetUnit.maxHp > 0 && (t.targetUnit.hp / t.targetUnit.maxHp) < HEAL_HP_RATIO_THRESHOLD);
            if (lowHpTargets.length > 0) {
              const toHeal = lowHpTargets.sort((a, b) => a.targetUnit.hp - b.targetUnit.hp)[0].targetUnit;
              chosen = skill;
              chosenTarget = toHeal;
              break;
            }
          }
        }
      }
      if (!chosen && !hasKillPotential) {
        const deadUnits = units.filter((u) => u.hp <= 0);
        for (const skill of available) {
          if (skill.disabled || unit.mp < skill.cost) continue;
          if (skill.effectKey === 'reanimate' && !deadUnits.length) continue;
          if (SUMMON_KEYS.has(skill.effectKey)) {
            chosen = skill;
            chosenTarget = unit;
            break;
          }
        }
      }
      if (!chosen && !hasKillPotential) {
        const hasEnemyReachableOrNearby = enemiesInRange.length > 0 || reachableTiles.some((t) => (enemiesInRangeByTile.get(t.gy * world.w + t.gx) || []).length > 0);
        if (hasEnemyReachableOrNearby) {
          const buffSkills = available.filter((s) => !s.disabled && BUFF_KEYS.has(s.effectKey)).sort((a, b) => (b.level || 1) - (a.level || 1));
          for (const skill of buffSkills) {
            const hasActiveBuff = unit.tempBuff && unit.tempBuff.duration > 0;
            if (skill.target === 'self') {
              if (skill.effectKey === 'bloodlust' && (unit.hp / unit.maxHp) > 0.8) continue;
              if (!hasActiveBuff) {
                chosen = skill;
                chosenTarget = unit;
                break;
              }
            }
            if (skill.target === 'ally') {
              if (skill.effectKey === 'overheal' && (unit.hp / unit.maxHp) > 0.7) continue;
              const targets = getSkillTargetTiles(unit, skill, units);
              const allyTargets = targets.filter((t) => t.targetUnit != null).map((t) => t.targetUnit);
              if (allyTargets.length > 0) {
                const withoutBuff = allyTargets.filter((a) => !a.tempBuff || a.tempBuff.duration <= 0);
                const toBuff = (withoutBuff.length > 0 ? withoutBuff : allyTargets).sort((a, b) => a.hp - b.hp)[0];
                if (toBuff.tempBuff && toBuff.tempBuff.duration > 0) continue;
                if (skill.effectKey === 'overheal' && (toBuff.hp / toBuff.maxHp) > 0.7) continue;
                chosen = skill;
                chosenTarget = toBuff;
                break;
              }
            }
            if (skill.target === 'enemy') {
              let enemyTargets = getEnemyTargets(skill);
              if (skill.effectKey === 'vodoo' && unit.tempBuff && unit.tempBuff.vodoo) {
                enemyTargets = enemyTargets.filter((e) => e.id !== unit.tempBuff.vodoo);
              }
              if (enemyTargets.length > 0) {
                chosen = skill;
                chosenTarget = enemyTargets.sort((a, b) => a.hp - b.hp)[0];
                break;
              }
            }
          }
        }
      }
      if (!chosen) {
        for (const skill of available) {
          if (skill.disabled || unit.mp < skill.cost) continue;
          if (DAMAGE_KEYS.has(skill.effectKey)) {
            if (skill.effectKey === 'feast' && (unit.hp / unit.maxHp) > 0.7) continue;
            if (skill.effectKey === 'warCry' && (unit.hp / unit.maxHp) < 0.3) continue;
            if (skill.effectKey === 'berserk' && (unit.hp / unit.maxHp) < 0.25) continue;
            if (skill.effectKey === 'shuriken' && enemiesInRange.length > 0) continue;
            if (skill.effectKey === 'judgement' && (unit.hp / unit.maxHp) > 0.7) continue;
            const enemyTargets = getEnemyTargets(skill);
            if (enemyTargets.length === 0) continue;
            const lowHp = enemyTargets.filter((e) => e.maxHp > 0 && (e.hp / e.maxHp) < lowHpEnemyThreshold);
            const pool = lowHp.length > 0 ? lowHp : enemyTargets;
            const toHit = skill.type === 'spell'
              ? pool.reduce((best, e) => {
                  if (!best) return e;
                  const c = getEffectiveStat(e, 'int') - getEffectiveStat(best, 'int');
                  return c < 0 || (c === 0 && e.hp < best.hp) ? e : best;
                }, null)
              : pool.reduce((best, e) => (!best || e.hp < best.hp ? e : best), null);
            chosen = skill;
            chosenTarget = toHit;
            break;
          }
        }
      }
      if (!chosen && !hasKillPotential) {
        for (const skill of available) {
          if (skill.disabled || unit.mp < skill.cost) continue;
          if (PERMANENT_DEBUFF_KEYS.has(skill.effectKey)) {
            const enemyTargets = getEnemyTargets(skill);
            if (enemyTargets.length === 0) continue;
            const toHit = enemyTargets.reduce((best, e) => (!best || e.hp < best.hp ? e : best), null);
            if (!toHit) continue;
            chosen = skill;
            chosenTarget = toHit;
            break;
          }
        }
      }
      if (!chosen && !hasKillPotential) {
        for (const skill of available) {
          if (skill.disabled || unit.mp < skill.cost) continue;
          if (DEBUFF_KEYS.has(skill.effectKey)) {
            const enemyTargets = getEnemyTargets(skill);
            const notAlreadyDebuffed = enemyTargets.filter((e) => !e.tempDebuff || e.tempDebuff.duration <= 0);
            if (notAlreadyDebuffed.length > 0) {
              const toHit = notAlreadyDebuffed.reduce((best, e) => (!best || e.hp < best.hp ? e : best), null);
              chosen = skill;
              chosenTarget = toHit;
              break;
            }
          }
        }
      }

      if (chosen && chosenTarget) {
          unit.mp -= chosen.cost;
          hasAttacked = true;
          const skillTarget = chosen.target === 'self' ? unit : chosenTarget;
          executeSkillWithProjectile(unit, skillTarget, chosen, skillCtx, () => setTimeout(runPlayingAI, 600));
          return;
      }
    }

    if (isAllyInDanger(unit, enemies, allies) && enemiesInRange.length > 0) {
      enemiesInRange.sort((a, b) => a.target.hp - b.target.hp || a.dist - b.dist);
      const target = enemiesInRange[0].target;
      performAttack(unit, target);
      return;
    }

    if (enemiesInRange.length > 0) {
      enemiesInRange.sort((a, b) => a.target.hp - b.target.hp || a.dist - b.dist);
      const target = enemiesInRange[0].target;
      performAttack(unit, target);
      return;
    }

    if (aiSkipSkillsForDoubleAttack && attemptMoveWithinAttackRange(unit.range != null ? unit.range : 1)) return;

    /** Prioritize moving toward a powerup over center/enemy base when no very low HP enemies are reachable or in range. */
    if (!hasMoved && !hasLowHpEnemyReachable && powerups.size > 0 && reachableTiles.length > 0) {
      const powerupTiles = [];
      powerups.forEach((_, key) => {
        powerupTiles.push({ gx: key % world.w, gy: Math.floor(key / world.w) });
      });
      const pathToPowerupResult = getPathToNearestTarget(powerupTiles);
      if (pathToPowerupResult) {
        const toward = farthestUnoccupiedOnPath(pathToPowerupResult.path, unitAgi);
        if (toward && (toward.gx !== unit.x || toward.gy !== unit.y)) {
          performMove(unit, toward.gx, toward.gy, () => setTimeout(runPlayingAI, 600));
          return;
        }
        const fallback = farthestReachableTowardTargets(reachableTiles, powerupTiles);
        if (fallback && (fallback.gx !== unit.x || fallback.gy !== unit.y)) {
          performMove(unit, fallback.gx, fallback.gy, () => setTimeout(runPlayingAI, 600));
          return;
        }
      }
    }

    const turnsLeft = maxTurns - turnCount;
    if (turnsLeft <= 20 && centerTiles.length > 0 && !hasMoved && reachableTiles.length > 0) {
      const onCenter = centerTiles.some((c) => c.gx === unit.x && c.gy === unit.y);
      if (!onCenter) {
        const result = pathToCenterResult;
        const pathToCenter = result ? result.path : null;
        const unitDistToCenter = centerTiles.length > 0
          ? Math.min(...centerTiles.map((c) => manhattanDist(unit.x, unit.y, c.gx, c.gy)))
          : Infinity;
        const reachableMinDistToCenter = new Map();
        const reachablePathIndex = new Map();
        for (const t of reachableTiles) {
          const k = t.gy * world.w + t.gx;
          reachableMinDistToCenter.set(k, centerTiles.length > 0 ? Math.min(...centerTiles.map((c) => manhattanDist(t.gx, t.gy, c.gx, c.gy))) : Infinity);
          reachablePathIndex.set(k, pathToCenter ? pathToCenter.findIndex((p) => p.x === t.gx && p.y === t.gy) : -1);
        }

        /** When rushing to center with ≤20 turns left, still move into range of a weak enemy if on the way. */
        let moveTowardWeakOnPath = null;
        let bestPathIndex = -1;
        const weakEnemyThreshold = lowHpThreshold;
        for (const t of reachableTiles) {
          const k = t.gy * world.w + t.gx;
          if (reachableMinDistToCenter.get(k) > unitDistToCenter) continue;
          const fromHere = enemiesInRangeByTile.get(k) || [];
          const weak = fromHere.filter(
            (e) => e.target.maxHp > 0 && (e.target.hp / e.target.maxHp) < weakEnemyThreshold
          );
          if (weak.length === 0) continue;
          const pathIndexRaw = reachablePathIndex.get(k);
          const pathIndex = pathIndexRaw >= 0 ? pathIndexRaw : 0;
          if (pathIndex > bestPathIndex) {
            bestPathIndex = pathIndex;
            moveTowardWeakOnPath = t;
          }
        }
        if (moveTowardWeakOnPath && (moveTowardWeakOnPath.gx !== unit.x || moveTowardWeakOnPath.gy !== unit.y)) {
          performMove(unit, moveTowardWeakOnPath.gx, moveTowardWeakOnPath.gy, () => setTimeout(runPlayingAI, 600));
          return;
        }

        const toward = result ? farthestUnoccupiedOnPath(result.path, unitAgi) : null;
        if (toward && (toward.gx !== unit.x || toward.gy !== unit.y)) {
          performMove(unit, toward.gx, toward.gy, () => setTimeout(runPlayingAI, 600));
          return;
        }
        const fallback = farthestReachableTowardTargets(reachableTiles, centerTargets);
        if (fallback && (fallback.gx !== unit.x || fallback.gy !== unit.y)) {
          performMove(unit, fallback.gx, fallback.gy, () => setTimeout(runPlayingAI, 600));
          return;
        }
      }
    }

    if (isLowHp && reachableTiles.length > 0 && !hasMoved) {
      let moveTowardLowHp = null;
      let bestEnemyHp = Infinity;
      for (const t of reachableTiles) {
        const inRange = enemiesInRangeByTile.get(t.gy * world.w + t.gx) || [];
        const lowHp = inRange.filter((x) => x.target.maxHp > 0 && (x.target.hp / x.target.maxHp) < lowHpThreshold);
        if (lowHp.length > 0) {
          const minHp = Math.min(...lowHp.map((x) => x.target.hp));
          if (minHp < bestEnemyHp) {
            bestEnemyHp = minHp;
            moveTowardLowHp = t;
          }
        }
      }
      if (moveTowardLowHp) {
        const path = getPath(world, unit.x, unit.y, moveTowardLowHp.gx, moveTowardLowHp.gy, units, unit);
        const toward = path ? farthestReachableOnPath(path, unitAgi) : null;
        if (toward && (toward.gx !== unit.x || toward.gy !== unit.y)) {
          performMove(unit, toward.gx, toward.gy, () => setTimeout(runPlayingAI, 600));
          return;
        }
      }
      if (turnsLeft > 20 && prioritizeEnemyBase && enemyBaseTiles.length > 0) {
        const onEnemyBase = enemyBaseTiles.some((c) => c.gx === unit.x && c.gy === unit.y);
        if (!onEnemyBase) {
          const baseTargets = unoccupiedEnemyBaseTiles.length > 0 ? unoccupiedEnemyBaseTiles : enemyBaseTiles;
          const result = pathToEnemyBaseResult;
          const veryCloseByForSurvival = result != null && result.path.length <= 5;
          if (veryCloseByForSurvival) {
            const toward = farthestUnoccupiedOnPath(result.path, unitAgi);
            if (toward && (toward.gx !== unit.x || toward.gy !== unit.y)) {
              performMove(unit, toward.gx, toward.gy, () => setTimeout(runPlayingAI, 600));
              return;
            }
            const fallback = farthestReachableTowardTargets(reachableTiles, baseTargets);
            if (fallback && (fallback.gx !== unit.x || fallback.gy !== unit.y)) {
              performMove(unit, fallback.gx, fallback.gy, () => setTimeout(runPlayingAI, 600));
              return;
            }
          }
        }
      }
      if (turnsLeft > 20) {
        const safe = safestReachableTile();
        if (safe && manhattanDist(unit.x, unit.y, safe.gx, safe.gy) > 0) {
          performMove(unit, safe.gx, safe.gy, () => setTimeout(runPlayingAI, 600));
          return;
        }
        endTurn();
        return;
      }
    }

    if (turnsLeft <= 10 && centerTiles.length > 0 && !hasMoved && reachableTiles.length > 0) {
      const onCenter = centerTiles.some((c) => c.gx === unit.x && c.gy === unit.y);
      if (!onCenter) {
        const centerTargets = unoccupiedCenterTiles.length > 0 ? unoccupiedCenterTiles : centerTiles;
        const result = pathToCenterResult;
        const toward = result ? farthestUnoccupiedOnPath(result.path, unitAgi) : null;
        if (toward && (toward.gx !== unit.x || toward.gy !== unit.y)) {
          performMove(unit, toward.gx, toward.gy, () => setTimeout(runPlayingAI, 600));
          return;
        }
        const fallback = farthestReachableTowardTargets(reachableTiles, centerTargets);
        if (fallback && (fallback.gx !== unit.x || fallback.gy !== unit.y)) {
          performMove(unit, fallback.gx, fallback.gy, () => setTimeout(runPlayingAI, 600));
          return;
        }
      }
    }

    if (unit.level === 1 && centerTiles.length > 0 && !hasMoved) {
      const onCenter = centerTiles.some((c) => c.gx === unit.x && c.gy === unit.y);
      if (!onCenter && reachableTiles.length > 0) {
        const centerTargets = unoccupiedCenterTiles.length > 0 ? unoccupiedCenterTiles : centerTiles;
        const result = pathToCenterResult;
        const toward = result ? farthestUnoccupiedOnPath(result.path, unitAgi) : null;
        if (toward && (toward.gx !== unit.x || toward.gy !== unit.y)) {
          performMove(unit, toward.gx, toward.gy, () => setTimeout(runPlayingAI, 600));
          return;
        }
        const fallback = farthestReachableTowardTargets(reachableTiles, centerTargets);
        if (fallback && (fallback.gx !== unit.x || fallback.gy !== unit.y)) {
          performMove(unit, fallback.gx, fallback.gy, () => setTimeout(runPlayingAI, 600));
          return;
        }
      }
    }

    if (prioritizeEnemyBase && enemyBaseTiles.length > 0 && !hasMoved) {
      const onEnemyBase = enemyBaseTiles.some((c) => c.gx === unit.x && c.gy === unit.y);
      if (!onEnemyBase && reachableTiles.length > 0) {
        const lowHpEnemies = enemies.filter((e) => e.maxHp > 0 && (e.hp / e.maxHp) < lowHpThreshold);
        let moveTowardLowHp = null;
        let bestEnemyHp = Infinity;
        for (const t of reachableTiles) {
          const inRange = enemiesInRangeByTile.get(t.gy * world.w + t.gx) || [];
          const hit = inRange.find((x) => lowHpEnemies.some((e) => e.id === x.target.id));
          if (hit && hit.target.hp < bestEnemyHp) {
            bestEnemyHp = hit.target.hp;
            moveTowardLowHp = t;
          }
        }
        if (moveTowardLowHp) {
          const path = getPath(world, unit.x, unit.y, moveTowardLowHp.gx, moveTowardLowHp.gy, units, unit);
          const toward = path ? farthestReachableOnPath(path, unitAgi) : null;
          if (toward && (toward.gx !== unit.x || toward.gy !== unit.y)) {
            performMove(unit, toward.gx, toward.gy, () => setTimeout(runPlayingAI, 600));
            return;
          }
        }
        const baseTargets = unoccupiedEnemyBaseTiles.length > 0 ? unoccupiedEnemyBaseTiles : enemyBaseTiles;
        const result = pathToEnemyBaseResult;
        const toward = result ? farthestUnoccupiedOnPath(result.path, unitAgi) : null;
        if (toward && (toward.gx !== unit.x || toward.gy !== unit.y)) {
          performMove(unit, toward.gx, toward.gy, () => setTimeout(runPlayingAI, 600));
          return;
        }
        const fallback = farthestReachableTowardTargets(reachableTiles, baseTargets);
        if (fallback && (fallback.gx !== unit.x || fallback.gy !== unit.y)) {
          performMove(unit, fallback.gx, fallback.gy, () => setTimeout(runPlayingAI, 600));
          return;
        }
      }
    }

    if (isRangedUnitForAi && enemies.length > 0 && !hasMoved && reachableTiles.length > 0) {
      if (!hasLowHpEnemyReachable && powerups.size > 0) {
        const powerupTiles = [];
        powerups.forEach((_, key) => {
          powerupTiles.push({ gx: key % world.w, gy: Math.floor(key / world.w) });
        });
        const pathToPowerupResult = getPathToNearestTarget(powerupTiles);
        if (pathToPowerupResult) {
          const toward = farthestUnoccupiedOnPath(pathToPowerupResult.path, unitAgi);
          if (toward && (toward.gx !== unit.x || toward.gy !== unit.y)) {
            performMove(unit, toward.gx, toward.gy, () => setTimeout(runPlayingAI, 600));
            return;
          }
          const fallback = farthestReachableTowardTargets(reachableTiles, powerupTiles);
          if (fallback && (fallback.gx !== unit.x || fallback.gy !== unit.y)) {
            performMove(unit, fallback.gx, fallback.gy, () => setTimeout(runPlayingAI, 600));
            return;
          }
        }
      }
      const kite = bestKiteTile();
      if (kite && (kite.gx !== unit.x || kite.gy !== unit.y)) {
        performMove(unit, kite.gx, kite.gy, () => setTimeout(runPlayingAI, 600));
        return;
      }
    }

    if (!aiSkipSkillsForDoubleAttack && attemptMoveWithinAttackRange(effectiveRange)) return;
    
    endTurn();
  }

  function clearHighlights() {
    highlightMaterials.length = 0;
    while (highlightGroup.children.length) {
      const c = highlightGroup.children[0];
      highlightGroup.remove(c);
      if (c.geometry !== sharedHighlightGlowGeo && c.geometry !== sharedHighlightSquareGeo) c.geometry.dispose();
      c.material.dispose();
    }
    requestRender();
  }

  let skillTargetTiles = new Set();

  function getAvailableSkills(unit) {
    if (!unit) return [];
    const skillList = unit.summonedSkills && unit.summonedSkills.length > 0
      ? unit.summonedSkills
      : (unit.class && CLASS_SKILLS[unit.class] ? CLASS_SKILLS[unit.class] : []);
    return skillList.map((s) => ({
      ...s,
      disabled: s.disabled === true || unit.level < (s.level || 1) || (s.hpCost && unit.hp < s.hpCost) || (s.cost != null && unit.mp < s.cost)
        || (s.effectKey === 'reanimate' && deadCorpseCount <= 0),
    }));
  }

  function getSkillTargetTiles(unit, skill, unitsList) {
    const out = [];
    const range = skill.range || 0;
    const ux = unit.x;
    const uy = unit.y;
    if (skill.target === 'self') {
      out.push({ gx: ux, gy: uy, targetUnit: null });
      return out;
    }
    for (const o of unitsList) {
      if (o.hp <= 0) continue;
      const d = Math.abs(ux - o.x) + Math.abs(uy - o.y);
      if (d > range) continue;
      if (skill.target === 'enemy') {
        if (o.player === unit.player) continue;
      } else if (skill.target === 'ally') {
        if (o.player !== unit.player) continue;
      }
      if (range >= 2 && !hasLineOfSight(world, ux, uy, o.x, o.y)) continue;
      out.push({ gx: o.x, gy: o.y, targetUnit: o });
    }
    return out;
  }

  /** Visits each tile in skill range (Manhattan + LOS when range >= 2). Self is a single tile. */
  function forEachSkillRangeTile(unit, skill, fn) {
    const range = skill.range || 0;
    if (skill.target === 'self') {
      fn(unit.x, unit.y);
      return;
    }
    const distMap = getTilesInManhattanRange(world, unit.x, unit.y, range);
    distMap.forEach((d, k) => {
      const gx = k % world.w;
      const gy = (k / world.w) | 0;
      if (range >= 2 && !hasLineOfSight(world, unit.x, unit.y, gx, gy)) return;
      fn(gx, gy);
    });
  }

  /** All tiles within skill range (for display). For enemy/ally skills with range >= 2, respects line of sight. */
  function getSkillRangeTiles(unit, skill) {
    const tiles = [];
    forEachSkillRangeTile(unit, skill, (gx, gy) => tiles.push({ gx, gy }));
    return tiles;
  }

  function showSkillTargetTiles(unit, skill) {
    const tilesToShow = [];
    if (skill.target === 'self') {
      skillTargetTiles = new Set([`${unit.x},${unit.y}`]);
      tilesToShow.push({ gx: unit.x, gy: unit.y });
    } else {
      skillTargetTiles = new Set();
      forEachSkillRangeTile(unit, skill, (gx, gy) => {
        tilesToShow.push({ gx, gy });
        const occ = getUnitAtTile(gx, gy);
        if (!occ) return;
        if (skill.target === 'enemy' && occ.player !== unit.player) skillTargetTiles.add(`${gx},${gy}`);
        if (skill.target === 'ally' && occ.player === unit.player) skillTargetTiles.add(`${gx},${gy}`);
      });
    }
    clearHighlights();
    tilesToShow.forEach(({ gx, gy }) => {
      const topY = BASE_HEIGHT + world.height[gy][gx] * 0.35;
      const surfaceY = topY / 2 + BASE_HEIGHT / 2;
      const px = gx * TILE_SIZE - hw + TILE_SIZE / 2;
      const pz = gy * TILE_SIZE - hh + TILE_SIZE / 2;
      const y = surfaceY + 0.01;
      const glowMat = new THREE.MeshBasicMaterial({ color: 0x8833aa, transparent: true, opacity: 0.4, side: THREE.DoubleSide });
      const glowMesh = new THREE.Mesh(sharedHighlightGlowGeo, glowMat);
      glowMesh.rotation.x = -Math.PI / 2;
      glowMesh.position.set(px, y, pz);
      highlightGroup.add(glowMesh);
      highlightMaterials.push(glowMat);
      const squareMat = new THREE.MeshBasicMaterial({ color: 0xaa66cc, transparent: true, opacity: 0.7, side: THREE.DoubleSide });
      const squareMesh = new THREE.Mesh(sharedHighlightSquareGeo, squareMat);
      squareMesh.rotation.x = -Math.PI / 2;
      squareMesh.position.set(px, y + 0.01, pz);
      squareMesh.userData.gx = gx;
      squareMesh.userData.gy = gy;
      highlightGroup.add(squareMesh);
      highlightMaterials.push(squareMat);
    });
  }

  const HIGHLIGHT_SQUARE_SIZE = 0.82;
  const HIGHLIGHT_GLOW_SIZE = 1.02;
  const sharedHighlightGlowGeo = new THREE.PlaneGeometry(HIGHLIGHT_GLOW_SIZE, HIGHLIGHT_GLOW_SIZE);
  const sharedHighlightSquareGeo = new THREE.PlaneGeometry(HIGHLIGHT_SQUARE_SIZE, HIGHLIGHT_SQUARE_SIZE);

  function showPlacementHighlights(tileList) {
    clearHighlights();
    tileList.forEach(({ gx, gy }) => {
      const topY = BASE_HEIGHT + world.height[gy][gx] * 0.35;
      const surfaceY = topY / 2 + BASE_HEIGHT / 2;
      const px = gx * TILE_SIZE - hw + TILE_SIZE / 2;
      const pz = gy * TILE_SIZE - hh + TILE_SIZE / 2;
      const y = surfaceY + 0.01;
      const glowMat = new THREE.MeshBasicMaterial({ color: 0x22aa44, transparent: true, opacity: 0.4, side: THREE.DoubleSide });
      const glowMesh = new THREE.Mesh(sharedHighlightGlowGeo, glowMat);
      glowMesh.rotation.x = -Math.PI / 2;
      glowMesh.position.set(px, y, pz);
      highlightGroup.add(glowMesh);
      highlightMaterials.push(glowMat);
      const squareMat = new THREE.MeshBasicMaterial({ color: 0x44cc66, transparent: true, opacity: 0.7, side: THREE.DoubleSide });
      const squareMesh = new THREE.Mesh(sharedHighlightSquareGeo, squareMat);
      squareMesh.rotation.x = -Math.PI / 2;
      squareMesh.position.set(px, y + 0.01, pz);
      squareMesh.userData.gx = gx;
      squareMesh.userData.gy = gy;
      highlightGroup.add(squareMesh);
      highlightMaterials.push(squareMat);
    });
    requestRender();
  }

  function showReachable(distMap) {
    clearHighlights();
    distMap.forEach((d, k) => {
      if (d === 0) return;
      const gx = k % world.w;
      const gy = (k / world.w) | 0;
      const topY = BASE_HEIGHT + world.height[gy][gx] * 0.35;
      const surfaceY = topY / 2 + BASE_HEIGHT / 2;
      const px = gx * TILE_SIZE - hw + TILE_SIZE / 2;
      const pz = gy * TILE_SIZE - hh + TILE_SIZE / 2;
      const y = surfaceY + 0.01;
      const glowMat = new THREE.MeshBasicMaterial({ color: 0x3399ff, transparent: true, opacity: 0.35, side: THREE.DoubleSide });
      const glowMesh = new THREE.Mesh(sharedHighlightGlowGeo, glowMat);
      glowMesh.rotation.x = -Math.PI / 2;
      glowMesh.position.set(px, y, pz);
      highlightGroup.add(glowMesh);
      highlightMaterials.push(glowMat);
      const squareMat = new THREE.MeshBasicMaterial({ color: 0x66b3ff, transparent: true, opacity: 0.65, side: THREE.DoubleSide });
      const squareMesh = new THREE.Mesh(sharedHighlightSquareGeo, squareMat);
      squareMesh.rotation.x = -Math.PI / 2;
      squareMesh.position.set(px, y + 0.01, pz);
      highlightGroup.add(squareMesh);
      highlightMaterials.push(squareMat);
    });
    requestRender();
  }

  function showAttackRange(distMap) {
    clearHighlights();
    distMap.forEach((d, k) => {
      if (d === 0) return;
      const gx = k % world.w;
      const gy = (k / world.w) | 0;
      const topY = BASE_HEIGHT + world.height[gy][gx] * 0.35;
      const surfaceY = topY / 2 + BASE_HEIGHT / 2;
      const px = gx * TILE_SIZE - hw + TILE_SIZE / 2;
      const pz = gy * TILE_SIZE - hh + TILE_SIZE / 2;
      const y = surfaceY + 0.01;
      const glowMat = new THREE.MeshBasicMaterial({ color: 0x992222, transparent: true, opacity: 0.4, side: THREE.DoubleSide });
      const glowMesh = new THREE.Mesh(sharedHighlightGlowGeo, glowMat);
      glowMesh.rotation.x = -Math.PI / 2;
      glowMesh.position.set(px, y, pz);
      highlightGroup.add(glowMesh);
      highlightMaterials.push(glowMat);
      const squareMat = new THREE.MeshBasicMaterial({ color: 0xcc4444, transparent: true, opacity: 0.7, side: THREE.DoubleSide });
      const squareMesh = new THREE.Mesh(sharedHighlightSquareGeo, squareMat);
      squareMesh.rotation.x = -Math.PI / 2;
      squareMesh.position.set(px, y + 0.01, pz);
      highlightGroup.add(squareMesh);
      highlightMaterials.push(squareMat);
    });
    requestRender();
  }

  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();

  function tileHitFromIntersect(hit) {
    const o = hit.object;
    if (o.isInstancedMesh && o.userData.tileGridGround) {
      const id = hit.instanceId;
      if (id == null || id < 0) return null;
      const gxa = o.userData.insideTileGx;
      const gya = o.userData.insideTileGy;
      if (gxa && gya && id < gxa.length) return { gx: gxa[id], gy: gya[id] };
      return null;
    }
    if (o.userData.mergedOutsidePick) {
      return worldPointToTileCoords(world, hit.point);
    }
    let cur = o;
    while (cur && (cur.userData.gx == null || cur.userData.gy == null)) cur = cur.parent;
    if (cur && cur.userData.gx != null) return { gx: cur.userData.gx, gy: cur.userData.gy };
    return null;
  }

  function pointerToNdc(clientX, clientY) {
    const rect = container.getBoundingClientRect();
    pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;
    return { x: pointer.x, y: pointer.y };
  }

  function handleMapClick(ndcX, ndcY) {
    if (isUnitMoving) return;
    pointer.x = ndcX;
    pointer.y = ndcY;
    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects(tilesGroup.children, true);
    if (intersects.length === 0) return;
    let gx;
    let gy;
    for (const hit of intersects) {
      const tile = tileHitFromIntersect(hit);
      if (tile) {
        gx = tile.gx;
        gy = tile.gy;
        break;
      }
    }
    if (gx == null || gy == null) return;

    if (phase === 'draft' && pendingClassKey) {
      const k = gy * world.w + gx;
      if (placementTileKeys.has(k)) {
        placeUnit(gx, gy);
      }
      return;
    }

    if (phase !== 'playing') return;
    if (gameMode === 'cvcpu') return;

    if (isSkillMode && selectedSkill) {
      const uid = initiativeOrder[currentTurnIndex];
      const uCast = getUnitById(uid);
      const unit = uCast && uCast.hp > 0 ? uCast : null;
      if (unit && gx === unit.x && gy === unit.y) {
        isSkillMode = false;
        selectedSkill = null;
        skillTargetTiles = new Set();
        clearHighlights();
        if (!hasMoved) {
          reachable = getReachable(world, unit.x, unit.y, getEffectiveStat(unit, 'agi'), units, unit);
          showReachable(reachable);
        } else {
          reachable = new Map();
        }
        updateTurnUI();
        return;
      }
      const key = `${gx},${gy}`;
      if (!skillTargetTiles.has(key)) return;
      if (!unit || unit.mp < selectedSkill.cost) {
        isSkillMode = false;
        selectedSkill = null;
        clearHighlights();
        updateTurnUI();
        return;
      }
      let targetUnit = getUnitAtTile(gx, gy);
      if (selectedSkill.target === 'enemy' && (!targetUnit || targetUnit.player === unit.player)) return;
      if (selectedSkill.target === 'ally' && targetUnit && targetUnit.player !== unit.player) return;
      if (selectedSkill.target === 'self' && (gx !== unit.x || gy !== unit.y)) return;
      if (selectedSkill.target === 'enemy' && !targetUnit) return;
      unit.mp -= selectedSkill.cost;
      hasAttacked = true;
      const ctx = {
        showFloatingCombatText,
        handleUnitDeath,
        updateUnitSlashVisibility,
        updateTurnUI,
        tryCollectPowerup,
        world,
        units,
        reanimateDeadUnit,
        updateUnitTileIndex,
        updateUnitPosition(unit) {
          const mesh = unitMeshes.get(unit.id);
          if (mesh) mesh.position.copy(worldPos(unit.x, unit.y));
        },
        animateKnockback(target, fromGx, fromGy, toGx, toGy, onDone) {
          const mesh = unitMeshes.get(target.id);
          if (!mesh) {
            if (onDone) onDone();
            return;
          }
          const startPos = worldPos(fromGx, fromGy).clone();
          const endPos = worldPos(toGx, toGy).clone();
          const startTime = performance.now();
          let tickCount = 0;
          function tick(now) {
            tickCount++;
            if (tickCount % 2 === 0) requestRender();
            const t = Math.min(1, (now - startTime) / moveDurationMs);
            const smoothstep = (x) => x * x * (3 - 2 * x);
            mesh.position.lerpVectors(startPos, endPos, smoothstep(t));
            if (t < 1) requestAnimationFrame(tick);
            else {
              mesh.position.copy(endPos);
              if (onDone) onDone();
            }
          }
          requestAnimationFrame(tick);
        },
      };
      const skillTarget = selectedSkill.target === 'self' ? unit : (targetUnit || null);
      if (gameMode === 'online' && unit.player === localPlayerNumber && typeof sendOnlineMessage === 'function') {
        sendOnlineMessage({ type: 'requestRender' });
        sendOrQueueOnlineMessage({ type: 'skill', unitId: unit.id, targetId: skillTarget ? skillTarget.id : undefined, effectKey: selectedSkill.effectKey });
      }
      executeSkillWithProjectile(unit, skillTarget, selectedSkill, ctx, () => {
        clearHighlights();
        isSkillMode = false;
        selectedSkill = null;
        skillTargetTiles = new Set();
        if (unit.hp <= 0) updateTurnUI();
        else if (hasMoved && unit.hp > 0) endTurn();
        else updateTurnUI();
      });
      return;
    }

    if (isChoosingFacing) {
      const uid = initiativeOrder[currentTurnIndex];
      const unit = getUnitById(uid);
      if (gameMode === 'online' && unit && unit.player !== localPlayerNumber) return;
      const mesh = unitMeshes.get(uid);
      if (unit && mesh && allowedFacingAngles.length > 0) {
        const unitWorld = worldPos(unit.x, unit.y);
        const clickWorld = worldPos(gx, gy);
        const dx = clickWorld.x - unitWorld.x;
        const dz = clickWorld.z - unitWorld.z;
        const angle = dx * dx + dz * dz > 1e-6 ? Math.atan2(dx, dz) : mesh.rotation.y;
        mesh.rotation.y = snapToAllowedFacing(angle);
      }
      endTurn();
      return;
    }

    if (selectedUnitId != null && isAttackMode) {
      const u = getUnitById(selectedUnitId);
      if (!u || u.player !== currentPlayer) return;
      if (gameMode === 'online' && u.player !== localPlayerNumber) return;
      const k = gy * world.w + gx;
      const target = getUnitAtTile(gx, gy);
      if (target && target.id === initiativeOrder[currentTurnIndex] && target.player === currentPlayer && (gameMode !== 'online' || target.player === localPlayerNumber)) {
        isAttackMode = false;
        selectedUnitId = target.id;
        if (!hasMoved) {
          reachable = getReachable(world, target.x, target.y, getEffectiveStat(target, 'agi'), units, target);
          showReachable(reachable);
        } else {
          clearHighlights();
          reachable = new Map();
        }
        updateTurnUI();
        return;
      }
      if (!reachable.has(k) || reachable.get(k) === 0) return;
      if (target && target.player !== currentPlayer) {
        performAttack(u, target);
      }
      return;
    }

    const unitAt = getUnitAtTile(gx, gy);
    if (unitAt) {
      if (unitAt.id === initiativeOrder[currentTurnIndex] && unitAt.player === currentPlayer && (gameMode !== 'online' || unitAt.player === localPlayerNumber)) {
        hideUnitPreviewCard();
        selectedUnitId = unitAt.id;
        isAttackMode = false;
        if (!hasMoved) {
          reachable = getReachable(world, gx, gy, getEffectiveStat(unitAt, 'agi'), units, unitAt);
          showReachable(reachable);
        } else {
          clearHighlights();
          reachable = new Map();
        }
        updateTurnUI();
        return;
      }
      clearHighlights();
      reachable = new Map();
      isAttackMode = false;
      showUnitPreviewCard(unitAt);
      updateTurnUI();
      return;
    }

    hideUnitPreviewCard();

    if (selectedUnitId != null) {
      if (isAttackMode) return;
      const u = getUnitById(selectedUnitId);
      if (!u || u.player !== currentPlayer) return;
      if (gameMode === 'online' && u.player !== localPlayerNumber) return;
      const k = gy * world.w + gx;
      if (!reachable.has(k) || reachable.get(k) === 0) return;
      const occ = getUnitAtTile(gx, gy);
      const occupied = occ != null && occ.id !== u.id;
      if (occupied) return;
      if (isUnitMoving) return;
      if (hasMoved) return;

      const path = getPath(world, u.x, u.y, gx, gy, units, u);
      if (!path || path.length <= 1) return;

      if (gameMode === 'online' && u.player === localPlayerNumber && typeof sendOnlineMessage === 'function') {
        sendOnlineMessage({ type: 'requestRender' });
        localMoveInProgress = true;
      }
      selectedUnitId = null;
      clearHighlights();
      isUnitMoving = true;
      cameraFollowUnit = true;
      updateUnitTileBorders(u.id);
      const mesh = unitMeshes.get(u.id);
      let stepIndex = 1;

      function animateStep() {
        if (stepIndex >= path.length) {
          const px = u.x;
          const py = u.y;
          u.x = path[path.length - 1].x;
          u.y = path[path.length - 1].y;
          updateUnitTileIndex(u, px, py);
          tryCollectPowerup(u);
          isUnitMoving = false;
          resetWalkPose(mesh);
          updateUnitTileBorders();
          reachable = new Map();
          hasMoved = true;
          if (gameMode === 'online' && u.player === localPlayerNumber && typeof sendOnlineMessage === 'function') {
            sendOnlineMessage({ type: 'move', unitId: u.id, toGx: u.x, toGy: u.y });
            localMoveInProgress = false;
            flushOnlineOutboundQueue();
          }
          if (hasAttacked && u.hp > 0) endTurn();
          else setTimeout(() => updateTurnUI(), 400);
          return;
        }
        const from = path[stepIndex - 1];
        const to = path[stepIndex];
        const startPos = worldPos(from.x, from.y).clone();
        const endPos = worldPos(to.x, to.y).clone();
        const dx = endPos.x - startPos.x;
        const dz = endPos.z - startPos.z;
        if (dx * dx + dz * dz > 1e-6) {
          mesh.rotation.y = Math.atan2(dx, dz);
        }
        const startTime = performance.now();
        let tickCount = 0;

        function tick(now) {
          tickCount++;
          if (tickCount % 2 === 0) requestRender();
          const t = Math.min(1, (now - startTime) / moveDurationMs);
          const smoothstep = (x) => x * x * (3 - 2 * x);
          const eased = smoothstep(t);
          mesh.position.lerpVectors(startPos, endPos, eased);
          setWalkPose(mesh, eased);
          if (cameraFollowUnit) {
            const zoomDist = camera.position.distanceTo(cameraTarget);
            const dist = zoomDist < 0.1 ? INITIAL_ZOOM : zoomDist;
            _zoomDir.copy(camera.position).sub(cameraTarget).normalize();
            if (_zoomDir.lengthSq() < 0.01) _zoomDir.copy(cameraOffset).normalize();
            cameraTarget.lerp(mesh.position, CAMERA_FOLLOW_LERP);
            camera.position.copy(cameraTarget).add(_zoomDir.clone().multiplyScalar(dist));
            camera.lookAt(cameraTarget);
          }
          if (t < 1) requestAnimationFrame(tick);
          else {
            stepIndex++;
            animateStep();
          }
        }
        requestAnimationFrame(tick);
      }
      animateStep();
    }
  }

  function onPointerDown(e) {
    pointerDownPixel.x = e.clientX;
    pointerDownPixel.y = e.clientY;
    pointerIsTouch = e.isTouch === true;
    ctrlKeyOnDown = e.ctrlKey;
    prevPointerNdc = pointerToNdc(e.clientX, e.clientY);
    container.style.cursor = e.ctrlKey ? 'grabbing' : 'grabbing';
  }

  function touchCoords(e) {
    if (e.touches && e.touches.length > 0)
      return { clientX: e.touches[0].clientX, clientY: e.touches[0].clientY };
    if (e.changedTouches && e.changedTouches.length > 0)
      return { clientX: e.changedTouches[0].clientX, clientY: e.changedTouches[0].clientY };
    return { clientX: e.clientX, clientY: e.clientY };
  }

  function touchDistance(touches) {
    if (!touches || touches.length < 2) return 0;
    const a = touches[0], b = touches[1];
    return Math.hypot(b.clientX - a.clientX, b.clientY - a.clientY);
  }

  function onTouchStart(e) {
    if (e.touches.length === 2) {
      pinchLastDistance = touchDistance(e.touches);
      prevPointerNdc = null;
      return;
    }
    if (e.touches.length !== 1) return;
    pinchLastDistance = null;
    const c = touchCoords(e);
    onPointerDown({ clientX: c.clientX, clientY: c.clientY, ctrlKey: false, isTouch: true });
  }

  function onTouchMove(e) {
    if (e.touches.length === 2) {
      e.preventDefault();
      const d = touchDistance(e.touches);
      if (pinchLastDistance != null && pinchLastDistance > 0) {
        const delta = d - pinchLastDistance;
        const dist = camera.position.distanceTo(cameraTarget);
        const newDist = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, dist - delta * PINCH_ZOOM_SENSITIVITY));
        zoomDir.copy(cameraTarget).sub(camera.position).normalize();
        camera.position.copy(cameraTarget).sub(zoomDir.multiplyScalar(newDist));
        camera.lookAt(cameraTarget);
        lastInteractionTime = performance.now();
      }
      pinchLastDistance = d;
      return;
    }
    pinchLastDistance = null;
    if (e.touches.length !== 1) return;
    e.preventDefault();
    const c = touchCoords(e);
    onPointerMove({ clientX: c.clientX, clientY: c.clientY, ctrlKey: false });
  }

  function onTouchEnd(e) {
    if (e.touches.length < 2) pinchLastDistance = null;
    if (e.touches.length === 2) return;
    if (e.changedTouches.length === 0) return;
    pointerIsTouch = false;
    const c = touchCoords(e);
    onPointerUp({ clientX: c.clientX, clientY: c.clientY, ctrlKey: false });
  }

  function onPointerMove(e) {
    if (isChoosingFacing) {
      updateFacingFromPointer(e.clientX, e.clientY);
      return;
    }
    if (prevPointerNdc == null) return;
    const dx = e.clientX - pointerDownPixel.x;
    const dy = e.clientY - pointerDownPixel.y;
    if (!isPanning && !isRotating && (Math.abs(dx) > CLICK_DRAG_THRESHOLD_PX || Math.abs(dy) > CLICK_DRAG_THRESHOLD_PX)) {
      if (e.ctrlKey || ctrlKeyOnDown) {
        isRotating = true;
        cameraFollowUnit = false;
      } else {
        isPanning = true;
        cameraFollowUnit = false;
      }
    }
    if (isRotating) {
      _orbitOffset.copy(camera.position).sub(cameraTarget);
      const r = _orbitOffset.length();
      if (r < 0.001) return;
      let azimuth = Math.atan2(_orbitOffset.x, _orbitOffset.z);
      let elevation = Math.asin(Math.max(-1, Math.min(1, _orbitOffset.y / r)));
      azimuth -= dx * ROTATE_SENSITIVITY;
      elevation += dy * ROTATE_SENSITIVITY;
      elevation = Math.max(ELEVATION_MIN, Math.min(ELEVATION_MAX, elevation));
      _orbitOffset.x = r * Math.cos(elevation) * Math.sin(azimuth);
      _orbitOffset.y = r * Math.sin(elevation);
      _orbitOffset.z = r * Math.cos(elevation) * Math.cos(azimuth);
      camera.position.copy(cameraTarget).add(_orbitOffset);
      camera.lookAt(cameraTarget);
      pointerDownPixel.x = e.clientX;
      pointerDownPixel.y = e.clientY;
      lastInteractionTime = performance.now();
    } else if (isPanning) {
      const currNdc = pointerToNdc(e.clientX, e.clientY);
      panPlane.setFromNormalAndCoplanarPoint(new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, cameraTarget.y, 0));
      raycaster.setFromCamera(new THREE.Vector2(prevPointerNdc.x, prevPointerNdc.y), camera);
      raycaster.ray.intersectPlane(panPlane, panIntersect);
      const prevWorld = panIntersect.clone();
      raycaster.setFromCamera(new THREE.Vector2(currNdc.x, currNdc.y), camera);
      raycaster.ray.intersectPlane(panPlane, panIntersect);
      const delta = prevWorld.sub(panIntersect);
      if (pointerIsTouch) delta.multiplyScalar(TOUCH_PAN_SENSITIVITY);
      cameraTarget.add(delta);
      camera.position.add(delta);
      camera.lookAt(cameraTarget);
      prevPointerNdc = { x: currNdc.x, y: currNdc.y };
      lastInteractionTime = performance.now();
    }
  }

  function onPointerUp(e) {
    if (prevPointerNdc != null && !isPanning && !isRotating) {
      const ndc = pointerToNdc(e.clientX, e.clientY);
      handleMapClick(ndc.x, ndc.y);
    }
    prevPointerNdc = null;
    isPanning = false;
    isRotating = false;
    ctrlKeyOnDown = false;
    container.style.cursor = 'grab';
  }

  function onWheel(e) {
    e.preventDefault();
    const dist = camera.position.distanceTo(cameraTarget);
    const newDist = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, dist + e.deltaY * ZOOM_SENSITIVITY));
    zoomDir.copy(cameraTarget).sub(camera.position).normalize();
    camera.position.copy(cameraTarget).sub(zoomDir.multiplyScalar(newDist));
    camera.lookAt(cameraTarget);
    lastInteractionTime = performance.now();
  }

  container.style.cursor = 'grab';
  container.addEventListener('mousedown', onPointerDown);
  container.addEventListener('mousemove', onPointerMove);
  container.addEventListener('mouseup', onPointerUp);
  container.addEventListener('mouseleave', onPointerUp);
  container.addEventListener('touchstart', onTouchStart, { passive: true });
  container.addEventListener('touchmove', onTouchMove, { passive: false });
  container.addEventListener('touchend', onTouchEnd, { passive: true });
  container.addEventListener('wheel', onWheel, { passive: false });

  function resize() {
    const w = container.clientWidth;
    const h = container.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.7));
  }
  window.addEventListener('resize', resize);

  const renderer = new THREE.WebGLRenderer({ antialias: false });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.7));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  container.appendChild(renderer.domElement);
  resize();

  const combatTextLayer = document.createElement('div');
  combatTextLayer.id = 'combat-text-layer';
  container.appendChild(combatTextLayer);

  const _projVec = new THREE.Vector3();
  const _knockbackOffset = new THREE.Vector3();
  const COMBAT_TEXT_DURATION_MS = 1400;
  function showFloatingCombatText(gx, gy, text, isMiss, extraClass) {
    const el = document.createElement('div');
    el.className = 'combat-text-float ' + (isMiss ? 'miss' : 'damage') + (extraClass ? ' ' + extraClass : '');
    el.textContent = text;
    el.style.position = 'absolute';
    combatTextLayer.appendChild(el);
    const yOffset = extraClass === 'skill-name' ? 1.7 : 1.2;
    const startTime = performance.now();
    function updatePosition() {
    _projVec.copy(worldPos(gx, gy));
      _projVec.y += yOffset;
    _projVec.project(camera);
    const w = container.clientWidth;
    const h = container.clientHeight;
      el.style.left = (_projVec.x * 0.5 + 0.5) * w + 'px';
      el.style.top = (1 - (_projVec.y * 0.5 + 0.5)) * h + 'px';
    }
    let frameCount = 0;
    function tick() {
      if (frameCount % 2 === 0) updatePosition();
      frameCount++;
      if (performance.now() - startTime < COMBAT_TEXT_DURATION_MS) {
        requestAnimationFrame(tick);
      } else {
        el.remove();
      }
    }
    requestAnimationFrame(tick);
  }

  const LEVEL_UP_TEXT_DURATION_MS = 1500;
  function showLevelUpFloatingText(unit, levelClass) {
    const el = document.createElement('div');
    el.className = 'combat-text-float ' + (levelClass || 'levelup');
    el.textContent = 'LEVEL UP!';
    el.style.position = 'absolute';
    combatTextLayer.appendChild(el);
    const startTime = performance.now();
    let frameCount = 0;
    function updatePosition() {
      _projVec.copy(worldPos(unit.x, unit.y));
      _projVec.y += 1.2;
      _projVec.project(camera);
      const w = container.clientWidth;
      const h = container.clientHeight;
      el.style.left = (_projVec.x * 0.5 + 0.5) * w + 'px';
      el.style.top = (1 - (_projVec.y * 0.5 + 0.5)) * h + 'px';
    }
    function tick() {
      if (frameCount % 2 === 0) updatePosition();
      frameCount++;
      if (performance.now() - startTime < LEVEL_UP_TEXT_DURATION_MS) {
        requestAnimationFrame(tick);
      } else {
        el.remove();
      }
    }
    requestAnimationFrame(tick);
  }

  function handleUnitDeath(unit, killer, opts) {
    updateUnitTileIndex(unit, unit.x, unit.y);
    deadCorpseCount++;
    unit.deathOrder = ++deathOrderSeq;
    if (gameMode === 'online' && typeof sendOnlineMessage === 'function' && !(opts && opts.skipSync)) {
      sendOnlineMessage({ type: 'unitDeath', unitId: unit.id, killerId: killer != null ? killer.id : undefined });
    }
    recordClassKill(killer, unit, units);
    console.log('[DEATH]', `${unit.name} (${unit.class}, P${unit.player})`, `at (${unit.x},${unit.y})`, `Lv.${unit.level}`);
    showFloatingCombatText(unit.x, unit.y, 'DEAD', false);

    const summonedIds = units.filter((u) => u.summonedBy === unit.id && u.hp > 0).map((u) => u.id);
    summonedIds.forEach((summonedId) => {
      const summoned = getUnitById(summonedId);
      if (summoned) {
        summoned.hp = 0;
        handleUnitDeath(summoned, null, { skipSync: true });
      }
    });

    if (phase === 'playing' && initiativeOrder.length > 0 && unit.id === initiativeOrder[currentTurnIndex]) {
      const deadId = unit.id;
      queueMicrotask(() => {
        if (phase !== 'playing' || initiativeOrder.length === 0) return;
        if (initiativeOrder[currentTurnIndex] !== deadId) return;
        const cur = getUnitById(deadId);
        if (cur && cur.hp > 0) return;
        endTurn();
      });
    }

      const mesh = unitMeshes.get(unit.id);
    if (!mesh) {
      updateUnitTileBorders();
      checkGameOver();
      return;
    }
    const startTime = performance.now();
    function deathTick(now) {
      requestRender();
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / DEATH_ANIMATION_MS);
      const easeIn = t * t;
      mesh.rotation.x = easeIn * Math.PI * 0.5;
      if (t < 1) {
        requestAnimationFrame(deathTick);
      } else {
        scene.remove(mesh);
        unitMeshes.delete(unit.id);
        updateUnitTileBorders();
      checkGameOver();
      }
    }
    requestAnimationFrame(deathTick);
  }

  function checkGameOver() {
    if (phase !== 'playing') return;
    const p1Alive = units.some((u) => u.player === 1 && u.hp > 0 && !u.summonedBy);
    const p2Alive = units.some((u) => u.player === 2 && u.hp > 0 && !u.summonedBy);
    if (!p1Alive) {
      showGameOver(2);
    } else if (!p2Alive) {
      showGameOver(1);
    }
  }

  function endGameByTurnLimit() {
    const centerTiles = getCenterTiles();
    const centerKeys = new Set(centerTiles.map((c) => c.gy * world.w + c.gx));
    const p1OnCenter = units.filter((u) => u.hp > 0 && u.player === 1 && !u.summonedBy && centerKeys.has(u.y * world.w + u.x)).length;
    const p2OnCenter = units.filter((u) => u.hp > 0 && u.player === 2 && !u.summonedBy && centerKeys.has(u.y * world.w + u.x)).length;
    let winningPlayer = null;
    let title = '';
    if (p1OnCenter > p2OnCenter) {
      winningPlayer = 1;
      title = `Time's up! ${getPlayerLabel(1)} wins! (${p1OnCenter} vs ${p2OnCenter} units on center base)`;
    } else if (p2OnCenter > p1OnCenter) {
      winningPlayer = 2;
      title = `Time's up! ${getPlayerLabel(2)} wins! (${p2OnCenter} vs ${p1OnCenter} units on center base)`;
    } else {
      const p1TotalHp = units.filter((u) => u.hp > 0 && u.player === 1 && !u.summonedBy).reduce((sum, u) => sum + u.hp, 0);
      const p2TotalHp = units.filter((u) => u.hp > 0 && u.player === 2 && !u.summonedBy).reduce((sum, u) => sum + u.hp, 0);
      if (p1TotalHp > p2TotalHp) {
        winningPlayer = 1;
        title = `Time's up! Draw on center — ${getPlayerLabel(1)} wins on total HP (${p1TotalHp} vs ${p2TotalHp})`;
      } else if (p2TotalHp > p1TotalHp) {
        winningPlayer = 2;
        title = `Time's up! Draw on center — ${getPlayerLabel(2)} wins on total HP (${p2TotalHp} vs ${p1TotalHp})`;
      } else {
        title = `Draw! (equal units on center: ${p1OnCenter}, equal HP)`;
      }
    }
    showGameOver(winningPlayer, title);
  }

  function showGameOver(winningPlayer, titleOverride) {
    releaseWakeLock();
    recordGameOver(units, winningPlayer);
    phase = 'gameover';
    document.getElementById('turn-menu').style.display = 'none';
    hideUnitPreviewCard();
    clearHighlights();
    const overlay = document.getElementById('game-over-overlay');
    const titleEl = document.getElementById('game-over-title');
    const cardsEl = document.getElementById('game-over-cards');
    const classRecordEl = document.getElementById('game-over-class-record');
    if (classRecordEl) {
      classRecordEl.style.display = 'none';
      classRecordEl.innerHTML = '';
    }
    titleEl.textContent = titleOverride != null ? titleOverride : `${getPlayerLabel(winningPlayer)} wins!`;
    const winnerUnits = units.filter((u) => u.player === (winningPlayer != null ? winningPlayer : 1));
    cardsEl.innerHTML = winnerUnits.map((unit) => {
      const c = unit;
      const levelClass = unit.level >= 3 ? ' level-3' : unit.level >= 2 ? ' level-2' : '';
      const lowHpClass = c.maxHp > 0 && (c.hp / c.maxHp) < 0.3 ? ' low-hp' : '';
      return `
        <div class="game-over-card${levelClass}${lowHpClass}">
          <img class="game-over-card-image" src="${CLASS_IMAGES[unit.class] || ''}" alt="${c.name}" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="game-over-card-body">
            <div class="game-over-card-name">${c.name}</div>
            <div class="game-over-card-meta">Lv.${c.level} ${c.class} — HP ${c.hp}/${c.maxHp}</div>
            <div class="game-over-card-stats">
              <span class="stat-label">HP</span><span class="stat-val stat-val-hp">${c.hp}/${c.maxHp}</span>
              <span class="stat-label">MP</span><span class="stat-val">${c.mp}/${c.maxMp}</span>
              <span class="stat-label">STR</span><span class="stat-val">${getEffectiveStat(c, 'str')}</span>
              <span class="stat-label">AGI</span><span class="stat-val">${getEffectiveStat(c, 'agi')}</span>
              <span class="stat-label">VIT</span><span class="stat-val">${getEffectiveStat(c, 'vit')}</span>
              <span class="stat-label">DEX</span><span class="stat-val">${getEffectiveStat(c, 'dex')}</span>
              <span class="stat-label">LUK</span><span class="stat-val">${getEffectiveStat(c, 'luk')}</span>
              <span class="stat-label">INT</span><span class="stat-val">${getEffectiveStat(c, 'int')}</span>
              <span class="stat-label">Range</span><span class="stat-val">${c.range}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');
    overlay.classList.add('visible');

    if (gameMode === 'cvcpu') {
      cvcpuGamesPlayed++;
      if (classRecordEl && DEV_MODE && cvcpuGamesPlayed >= cvcpuTotalGames) {
        const tableRows = CLASS_KEYS.map((k) => {
          const r = CLASS_RECORD[k];
          const total = r.wins + r.losses || 1;
          const winRate = r.wins + r.losses > 0 ? (r.wins / total * 100).toFixed(1) + '%' : '—';
          const lossRate = r.wins + r.losses > 0 ? (r.losses / total * 100).toFixed(1) + '%' : '—';
          return { class: k, battles: r.battles, kills: r.kills, deaths: r.deaths, wins: r.wins, losses: r.losses, winRate, lossRate };
        });
        classRecordEl.innerHTML = `
          <table>
            <thead>
              <tr>
                <th>Class</th>
                <th>Battles</th>
                <th>Kills</th>
                <th>Deaths</th>
                <th>Wins</th>
                <th>Losses</th>
                <th>Win%</th>
                <th>Loss%</th>
              </tr>
            </thead>
            <tbody>
              ${tableRows.map((row) => `
                <tr>
                  <td class="class-name">${row.class}</td>
                  <td>${row.battles}</td>
                  <td>${row.kills}</td>
                  <td>${row.deaths}</td>
                  <td>${row.wins}</td>
                  <td>${row.losses}</td>
                  <td>${row.winRate}</td>
                  <td>${row.lossRate}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        `;
        classRecordEl.style.display = 'block';
      }
      if (cvcpuGamesPlayed < cvcpuTotalGames) {
        setTimeout(() => {
          overlay.classList.remove('visible');
          clearAllUnits();
          startDraftPhase();
        }, 2000);
      }
    }
  }

  function animate(now = 0) {
    requestAnimationFrame(animate);
    const swayList = tilesGroup.userData && tilesGroup.userData.swayingFoliage;
    if (swayList && swayList.length > 0) {
      const tw = now * 0.0017;
      for (let i = 0; i < swayList.length; i++) {
        const { group: fol, phase } = swayList[i];
        fol.rotation.z = Math.sin(tw + phase) * 0.14;
        fol.rotation.x = Math.sin(tw * 0.79 + phase * 1.55) * 0.09;
        fol.rotation.y = Math.sin(tw * 0.62 + phase * 0.9) * 0.055;
      }
      needsRender = true;
    }
    if (lastInteractionTime === 0) lastInteractionTime = now;
    const isIdle = (now - lastInteractionTime > 500);
    animate.frameCount = (typeof animate.frameCount === 'number' ? animate.frameCount : 0) + 1;
    const doUpdateAndRender = () => {
      if (needsRender) {
    const pulse = 0.6 + 0.4 * Math.sin(now * 0.004);
    for (let i = 0; i < highlightMaterials.length; i++) {
      const base = i % 2 === 0 ? 0.4 : 0.7;
      highlightMaterials[i].opacity = base * pulse;
    }
    renderer.render(scene, camera);
        needsRender = false;
      }
    };
    if (isIdle) {
      if (now - lastIdleFrameTime >= 100) {
        lastIdleFrameTime = now;
        needsRender = true;
        doUpdateAndRender();
      }
    } else {
      if (animate.frameCount % 2 === 0) needsRender = true;
      doUpdateAndRender();
    }
  }
  animate();
}

main();
