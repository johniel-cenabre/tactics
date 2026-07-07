// Skill definitions (data only). The actual behavior for each `effectKey` lives
// in sim/effects/. To add a skill: add an entry here plus one effect handler.
//
// SkillDef shape:
//   name, description, cost (MP), target ('self'|'enemy'|'ally'), range (Manhattan),
//   level (unlock), effectKey (dispatch key), type? ('spell' = auto-hit),
//   hpCost? (used only to disable the skill when HP is too low)

export const CLASS_SKILLS = {
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
    { name: 'Impale', description: "Reduce target's AGI by 2 for 2 turns.", cost: 4, target: 'enemy', range: 2, level: 2, effectKey: 'impale' },
    { name: 'Pierce', description: 'Deal STR-based damage through the defense.', cost: 6, target: 'enemy', range: 2, level: 3, effectKey: 'pierce' },
  ],
  hunter: [
    { name: 'Focus', description: 'Gain +3 DEX for 2 turns.', cost: 3, target: 'self', range: 0, level: 1, effectKey: 'focus' },
    { name: 'Snipe', description: 'Deal long-ranged, DEX-based damage to one enemy.', cost: 6, target: 'enemy', range: 12, level: 2, effectKey: 'snipe' },
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
    { name: 'Sanctuary', description: 'Gain +1 ALL stats for both ally and self for 3 turns.', cost: 4, target: 'ally', range: 4, level: 1, effectKey: 'sanctuary' },
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
    { name: 'Gaze', description: 'Steal AGI and VIT by 1 for 3 turns', cost: 5, target: 'enemy', range: 4, level: 1, effectKey: 'gaze', type: 'spell' },
    { name: 'Blood Suck', description: 'Absorb enemy HP based on your MP', cost: 7, target: 'enemy', range: 1, level: 3, effectKey: 'bloodSuck' },
  ],
  necromancer: [
    { name: 'Debilitate', description: "Steal target's 3 HP and 3 VIT for 2 turns", cost: 5, target: 'enemy', range: 5, level: 1, effectKey: 'debilitate', type: 'spell' },
    { name: 'Reanimate', description: 'Resurrect dead unit to your control', cost: 12, target: 'self', range: 0, level: 2, effectKey: 'reanimate' },
  ],
  barbarian: [
    { name: 'War Cry', description: 'Gain VIT and LUK based on lost HP', cost: 2, target: 'self', range: 0, level: 1, effectKey: 'warCry' },
    { name: 'Bash', description: "Reduce target's AGI to 0 for 2 turns", cost: 4, target: 'enemy', range: 1, level: 2, effectKey: 'bash' },
  ],
  cannibal: [
    { name: 'Gnaw', description: 'Deal STR based damage to heal self', cost: 3, target: 'enemy', range: 1, level: 2, effectKey: 'gnaw' },
    { name: 'Infect', description: 'Poison enemy for 3 turns', cost: 4, target: 'enemy', range: 6, level: 3, effectKey: 'infect' },
  ],
  shaman: [
    { name: 'Vodoo', description: 'Mirror damage for 2 turns', cost: 4, target: 'enemy', range: 5, level: 1, effectKey: 'vodoo', type: 'spell' },
    { name: 'Malediction', description: 'Deal INT+LUK-based damage to ALL stats for 2 turns', cost: 6, target: 'enemy', range: 6, level: 2, effectKey: 'malediction', type: 'spell' },
  ],
  oracle: [
    { name: 'Foresight', description: 'Gain INT and DEX based on INT for 2 turns', cost: 4, target: 'ally', range: 6, level: 1, effectKey: 'foresight' },
    { name: 'Overheal', description: 'Heal ally for 2 turns', cost: 7, target: 'ally', range: 6, level: 2, effectKey: 'overheal' },
  ],
  amazon: [
    { name: 'Skewer', description: 'Deal DEX-based damage to AGI for 2 turns ', cost: 4, target: 'enemy', range: 3, level: 2, effectKey: 'skewer' },
    { name: 'Rapid', description: 'Double attack for 1 turn', cost: 6, target: 'self', range: 0, level: 3, effectKey: 'rapid' },
  ],
};

export const SKILL_EFFECT_DISPLAY_NAMES = {
  brave: 'Brave', dominate: 'Dominate', arcaneBolt: 'Arcane Bolt', manaDrain: 'Mana Drain',
  mantra: 'Mantra', chakra: 'Chakra', weaken: 'Weaken', feast: 'Feast', impale: 'Impale',
  pierce: 'Pierce', focus: 'Focus', snipe: 'Snipe', execute: 'Execute', cripple: 'Cripple',
  berserk: 'Berserk', bloodlust: 'Bloodlust', hex: 'Hex', drain: 'Drain', shuriken: 'Shuriken',
  blind: 'Blind', iaido: 'Iaido', chokuto: 'Chokuto', bite: 'Bite', howl: 'Howl',
};

const skillEffectTitleCache = new Map();

export function getSkillEffectDisplayTitle(effectKey) {
  let t = skillEffectTitleCache.get(effectKey);
  if (t !== undefined) return t;
  for (const list of Object.values(CLASS_SKILLS)) {
    const skill = list.find((s) => s.effectKey === effectKey);
    if (skill) {
      t = skill.name;
      skillEffectTitleCache.set(effectKey, t);
      return t;
    }
  }
  t =
    SKILL_EFFECT_DISPLAY_NAMES[effectKey] ??
    effectKey.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase()).trim();
  skillEffectTitleCache.set(effectKey, t);
  return t;
}
