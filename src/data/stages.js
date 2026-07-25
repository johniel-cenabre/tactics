// Story stage catalog. Each stage references a map JSON and battle rules.

import { CLASS_KEYS } from './classes.js';
import riverWalk from './maps/river-walk.json';
import marshLand from './maps/marsh-land.json';
import ashenWoods from './maps/ashen-woods.json';
import brokenBridge from './maps/broken-bridge.json';
import theLongMarch from './maps/the-long-march.json';
import envoysRoad from './maps/envoys-road.json';
import warlordsGate from './maps/warlords-gate.json';
import sunkenKeep from './maps/sunken-keep.json';
import finalVigil from './maps/final-vigil.json';
import ironThrone from './maps/iron-throne.json';

/** Resolve a classPool config to a Set of allowed class keys. */
export function resolveClassPool(classPool) {
  let keys = [...CLASS_KEYS];
  if (classPool?.allow?.length) {
    const allow = new Set(classPool.allow);
    keys = keys.filter((k) => allow.has(k));
  }
  if (classPool?.ban?.length) {
    const ban = new Set(classPool.ban);
    keys = keys.filter((k) => !ban.has(k));
  }
  return new Set(keys);
}

export function getStageById(id) {
  return STAGES.find((s) => s.id === id) || null;
}

export function getStageIndex(id) {
  return STAGES.findIndex((s) => s.id === id);
}

/** Human-readable objective lines for the level-select / HUD. */
export function describeObjectives(objectives) {
  const lines = [];
  for (const w of objectives?.win || []) {
    if (w.type === 'eliminate') lines.push('Defeat all enemies');
    else if (w.type === 'boss') lines.push(`Defeat the boss (${w.tag || 'boss'})`);
    else if (w.type === 'survive') lines.push(`Survive ${w.turns} turns`);
    else if (w.type === 'reach') {
      if (w.unitTag) lines.push(`Escort ${w.unitTag} to the objective`);
      else if (w.target === 'enemyBase') lines.push('Reach the enemy base');
      else {
        const n = (w.tiles || []).length;
        lines.push(`Reach the objective (${n} tile${n === 1 ? '' : 's'})`);
      }
    }
  }
  for (const l of objectives?.lose || []) {
    if (l.type === 'protect') lines.push(`Keep ${l.tag || 'VIP'} alive`);
  }
  if (lines.length === 0) lines.push('Defeat all enemies');
  return lines;
}

export const STAGES = [
  {
    id: 'river-walk',
    name: 'River Walk',
    description: 'Draft a small squad and clear the bandits holding the western camp.',
    map: riverWalk,
    maxPlayerUnits: 4,
    classPool: {
      allow: ['knight', 'mage', 'monk', 'hunter', 'lancer', 'assassin', 'ranger', 'paladin'],
    },
    maxTurns: 80,
    objectives: {
      win: [{ type: 'eliminate' }],
      lose: [],
    },
  },
  {
    id: 'marsh-land',
    name: 'Marsh Land',
    description: 'Push through the wetlands and seize the enemy base before your squad falls.',
    map: marshLand,
    maxPlayerUnits: 3,
    classPool: {
      allow: ['witch', 'shaman', 'necromancer', 'alchemist', 'ghoul', 'vampire', 'cannibal', 'berserker'],
    },
    maxTurns: 80,
    objectives: {
      win: [{ type: 'reach', target: 'enemyBase' }],
      lose: [],
    },
  },
  {
    id: 'ashen-woods',
    name: 'Ashen Woods',
    description: 'A bandit warlord hides in the burnt forest. Cut through the trees and take his head.',
    map: ashenWoods,
    maxPlayerUnits: 4,
    classPool: {
      allow: ['knight', 'monk', 'lancer', 'hunter', 'assassin', 'samurai', 'werewolf', 'ranger'],
    },
    maxTurns: 60,
    objectives: {
      win: [{ type: 'boss', tag: 'boss' }],
      lose: [],
    },
  },
  {
    id: 'broken-bridge',
    name: 'Broken Bridge',
    description: 'Two bridges are all that hold the river. Dig in and survive the assault for 8 turns.',
    map: brokenBridge,
    maxPlayerUnits: 4,
    classPool: {
      allow: ['knight', 'paladin', 'monk', 'blacksmith', 'mage', 'ranger', 'hunter', 'amazon'],
    },
    maxTurns: 60,
    objectives: {
      win: [{ type: 'survive', turns: 60 }],
      lose: [],
    },
  },
  {
    id: 'the-long-march',
    name: 'The Long March',
    description: 'Fight across the flooded lowlands and seize the enemy base at the far end.',
    map: theLongMarch,
    maxPlayerUnits: 4,
    classPool: {
      ban: ['barbarian', 'necromancer', 'vampire', 'cannibal', 'ghoul'],
    },
    maxTurns: 60,
    objectives: {
      win: [{ type: 'reach', target: 'enemyBase' }],
      lose: [],
    },
  },
  {
    id: 'envoys-road',
    name: "Envoy's Road",
    description: 'Guide the envoy up the ambushed road to the enemy base. If she falls, all is lost.',
    map: envoysRoad,
    maxPlayerUnits: 3,
    classPool: {
      allow: ['knight', 'paladin', 'monk', 'lancer', 'samurai', 'werewolf', 'berserker', 'amazon'],
    },
    maxTurns: 50,
    objectives: {
      win: [{ type: 'reach', target: 'enemyBase', unitTag: 'envoy' }],
      lose: [{ type: 'protect', tag: 'envoy' }],
    },
  },
  {
    id: 'warlords-gate',
    name: "Warlord's Gate",
    description: 'Storm the fortress gate. Slay the warlord and leave none of his guard standing.',
    map: warlordsGate,
    maxPlayerUnits: 6,
    classPool: {
      allow: ['knight', 'mage', 'monk', 'lancer', 'hunter', 'assassin', 'paladin', 'samurai', 'ranger', 'ninja'],
    },
    maxTurns: 70,
    objectives: {
      win: [
        { type: 'boss', tag: 'boss' },
        { type: 'eliminate' },
      ],
      lose: [],
    },
  },
  {
    id: 'sunken-keep',
    name: 'Sunken Keep',
    description: 'A moat rings the shrine. Break the garrison and hold the central dais.',
    map: sunkenKeep,
    maxPlayerUnits: 4,
    classPool: {
      allow: ['mage', 'witch', 'shaman', 'oracle', 'exorcist', 'alchemist', 'ranger', 'hunter', 'assassin', 'ninja'],
    },
    maxTurns: 60,
    objectives: {
      win: [{
        type: 'reach',
        tiles: [
          { x: 9, y: 0 }, { x: 10, y: 0 }, { x: 11, y: 0 }, { x: 12, y: 0 }, { x: 13, y: 0 },
        ],
      }],
      lose: [],
    },
  },
  {
    id: 'final-vigil',
    name: 'Final Vigil',
    description: 'The seer must complete her rite. Hold the redoubt for 12 turns and keep her alive.',
    map: finalVigil,
    maxPlayerUnits: 4,
    classPool: {
      allow: ['knight', 'paladin', 'monk', 'blacksmith', 'berserker', 'barbarian', 'samurai', 'amazon', 'lancer'],
    },
    maxTurns: 80,
    objectives: {
      win: [{ type: 'survive', turns: 80 }],
      lose: [{ type: 'protect', tag: 'seer' }],
    },
  },
  {
    id: 'iron-throne',
    name: 'The Iron Throne',
    description: 'The last army guards the necromancer king. Destroy them all and end his reign.',
    map: ironThrone,
    maxPlayerUnits: 7,
    classPool: {},
    maxTurns: 100,
    objectives: {
      win: [
        { type: 'eliminate' },
        { type: 'boss', tag: 'boss' },
      ],
      lose: [],
    },
  },
];
