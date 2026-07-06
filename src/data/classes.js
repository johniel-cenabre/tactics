// Class roster: base stat templates. Pure data, no logic.

export const CLASS_KEYS = [
  'knight', 'mage', 'monk', 'ghoul', 'lancer', 'hunter', 'assassin', 'berserker',
  'witch', 'ninja', 'samurai', 'werewolf', 'paladin', 'exorcist', 'bandit', 'ranger',
  'blacksmith', 'alchemist', 'vampire', 'necromancer', 'barbarian', 'cannibal', 'shaman',
  'oracle', 'amazon',
];

// `gender` drives the procedural figure's hair/silhouette in the renderer.
export const CLASSES = {
  knight:     { name: 'Knight',     gender: 'male',   hp: 27, maxHp: 27, mp: 5,  maxMp: 5,  str: 14, agi: 8,  vit: 14, dex: 10, luk: 4,  int: 7,  range: 1 },
  mage:       { name: 'Mage',       gender: 'female', hp: 16, maxHp: 16, mp: 22, maxMp: 22, str: 3,  agi: 3,  vit: 5,  dex: 4,  luk: 13, int: 17, range: 1 },
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
  paladin:    { name: 'Paladin',    gender: 'male',   hp: 26, maxHp: 26, mp: 12, maxMp: 12, str: 12, agi: 8,  vit: 16, dex: 8,  luk: 10, int: 11, range: 1 },
  exorcist:   { name: 'Exorcist',   gender: 'male',   hp: 21, maxHp: 21, mp: 14, maxMp: 14, str: 7,  agi: 5,  vit: 9,  dex: 6,  luk: 15, int: 13, range: 1 },
  bandit:     { name: 'Bandit',     gender: 'male',   hp: 20, maxHp: 20, mp: 6,  maxMp: 6,  str: 9,  agi: 14, vit: 6,  dex: 14, luk: 13, int: 4,  range: 1 },
  ranger:     { name: 'Ranger',     gender: 'female', hp: 19, maxHp: 19, mp: 10, maxMp: 10, str: 8,  agi: 10, vit: 8,  dex: 12, luk: 7,  int: 6,  range: 5 },
  blacksmith: { name: 'Blacksmith', gender: 'female', hp: 25, maxHp: 25, mp: 8,  maxMp: 8,  str: 13, agi: 8,  vit: 12, dex: 11, luk: 12, int: 2,  range: 1 },
  alchemist:  { name: 'Alchemist',  gender: 'female', hp: 17, maxHp: 17, mp: 13, maxMp: 13, str: 6,  agi: 6,  vit: 10, dex: 5,  luk: 8,  int: 11, range: 5 },
  vampire:    { name: 'Vampire',    gender: 'female', hp: 18, maxHp: 18, mp: 16, maxMp: 16, str: 10, agi: 12, vit: 3,  dex: 4,  luk: 3,  int: 12, range: 1 },
  necromancer:{ name: 'Necromancer',gender: 'male',   hp: 20, maxHp: 20, mp: 20, maxMp: 20, str: 4,  agi: 4,  vit: 7,  dex: 3,  luk: 11, int: 15, range: 1 },
  barbarian:  { name: 'Barbarian',  gender: 'male',   hp: 40, maxHp: 40, mp: 4,  maxMp: 4,  str: 16, agi: 4,  vit: 15, dex: 6,  luk: 3,  int: 2,  range: 1 },
  cannibal:   { name: 'Cannibal',   gender: 'male',   hp: 22, maxHp: 22, mp: 7,  maxMp: 7,  str: 6,  agi: 11, vit: 2,  dex: 13, luk: 9,  int: 7,  range: 4 },
  shaman:     { name: 'Shaman',     gender: 'female', hp: 17, maxHp: 17, mp: 21, maxMp: 21, str: 4,  agi: 3,  vit: 3,  dex: 3,  luk: 16, int: 16, range: 4 },
  oracle:     { name: 'Oracle',     gender: 'female', hp: 19, maxHp: 19, mp: 19, maxMp: 19, str: 5,  agi: 7,  vit: 4,  dex: 10, luk: 14, int: 10, range: 3 },
  amazon:     { name: 'Amazon',     gender: 'female', hp: 23, maxHp: 23, mp: 5,  maxMp: 5,  str: 11, agi: 9,  vit: 11, dex: 7,  luk: 4,  int: 3,  range: 3 },
};

/** Stat keys used when computing per-class stat variance (draft tie-break). */
export const DRAFT_VARIANCE_STAT_KEYS = ['hp', 'maxHp', 'mp', 'str', 'agi', 'vit', 'dex', 'luk', 'int'];

/** Precomputed stat variance per class. */
export const CLASS_STAT_VARIANCE = (() => {
  const out = {};
  for (const key of CLASS_KEYS) {
    const c = CLASSES[key];
    if (!c) continue;
    const values = DRAFT_VARIANCE_STAT_KEYS.map((s) => c[s] ?? 0);
    const mean = values.reduce((a, b) => a + b, 0) / values.length;
    out[key] = values.reduce((sum, v) => sum + (v - mean) ** 2, 0) / values.length;
  }
  return out;
})();
