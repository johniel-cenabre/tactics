// Buff / stat-steal effect handlers. Each handler receives an EffectContext
// (see sim/skills.js) and mutates units via ctx helpers. "Permanent" steals
// mutate base stats; temporary buffs write unit.tempBuff/tempDebuff.

export const buffEffects = {
  brave(ctx) {
    const { u } = ctx;
    const bVal = 1;
    u.tempBuff = { str: bVal, vit: bVal, duration: 3 };
    ctx.statText(u.x, u.y, `+${bVal} STR, +${bVal} VIT`, true);
  },

  dominate(ctx) {
    const { u, t } = ctx;
    if (!t) return;
    const dValStr = 2;
    const dValVit = 1;
    t.str = Math.max(1, (t.str || 0) - dValStr); u.str = (u.str || 0) + dValStr;
    t.vit = Math.max(1, (t.vit || 0) - dValVit); u.vit = (u.vit || 0) + dValVit;
    ctx.statText(t.x, t.y, `-${dValStr} STR and -${dValVit} VIT`, false);
    ctx.statText(u.x, u.y, `+${dValStr} STR and +${dValVit} VIT`, true);
  },

  mantra(ctx) {
    const { u, t, getEff } = ctx;
    if (!t) return;
    const d = Math.max(1, Math.ceil(getEff(u, 'int') * 0.3));
    u.tempBuff = { int: d, duration: 3 };
    ctx.statText(u.x, u.y, `+${d} LUK`, true);
    t.tempBuff = { luk: d, duration: 3 };
    ctx.statText(t.x, t.y, `+${d} LUK`, true);
  },

  weaken(ctx) {
    const { u, t } = ctx;
    if (!t) return;
    const dVal = 1;
    t.vit = Math.max(1, (t.vit || 0) - dVal); u.vit = (u.vit || 0) + dVal;
    ctx.statText(t.x, t.y, `-${dVal} VIT`, false); ctx.statText(u.x, u.y, `+${dVal} VIT`, true);
  },

  impale(ctx) {
    const { t } = ctx;
    if (!t) return;
    const dVal = 2;
    t.tempDebuff = { agi: dVal, duration: 3 };
    ctx.statText(t.x, t.y, `-${dVal} AGI`, false);
  },

  focus(ctx) {
    const { u } = ctx;
    const bVal = 3;
    u.tempBuff = { dex: bVal, duration: 3 };
    ctx.statText(u.x, u.y, `+${bVal} DEX`, true);
  },

  cripple(ctx) {
    const { u, t } = ctx;
    if (!t) return;
    const dVal = 1;
    t.agi = Math.max(1, (t.agi || 0) - dVal); u.agi = (u.agi || 0) + dVal;
    ctx.statText(t.x, t.y, `-${dVal} AGI`, false); ctx.statText(u.x, u.y, `+${dVal} AGI`, true);
  },

  bloodlust(ctx) {
    const { u } = ctx;
    const blVal = Math.max(1, Math.floor((u.maxHp - u.hp) * 0.2));
    u.tempBuff = { str: blVal, vit: blVal, duration: 2 };
    ctx.statText(u.x, u.y, `+${blVal} STR, +${blVal} VIT`, true);
  },

  hex(ctx) {
    const { u, t } = ctx;
    if (!t) return;
    const dVal = 1;
    t.int = Math.max(1, (t.int || 0) - dVal); u.int = (u.int || 0) + dVal;
    ctx.statText(t.x, t.y, `-${dVal} INT`, false); ctx.statText(u.x, u.y, `+${dVal} INT`, true);
  },

  blind(ctx) {
    const { u, t } = ctx;
    if (!t) return;
    const dVal = 1;
    t.dex = Math.max(1, (t.dex || 0) - dVal); u.dex = (u.dex || 0) + dVal;
    ctx.statText(t.x, t.y, `-${dVal} DEX`, false); ctx.statText(u.x, u.y, `+${dVal} DEX`, true);
  },

  iaido(ctx) {
    const { u } = ctx;
    const bVal = 1;
    u.tempBuff = { str: bVal, dex: bVal, duration: 3 };
    ctx.statText(u.x, u.y, `+${bVal} STR, +${bVal} DEX`, true);
  },

  howl(ctx) {
    const { u } = ctx;
    const bVal = 2;
    u.tempBuff = { str: bVal, agi: bVal, duration: 3 };
    ctx.statText(u.x, u.y, `+${bVal} STR, +${bVal} AGI`, true);
  },

  sanctuary(ctx) {
    const { u, t } = ctx;
    const bVal = 1;
    u.tempBuff = { str: bVal, vit: bVal, dex: bVal, agi: bVal, int: bVal, luk: bVal, duration: 4 };
    t.tempBuff = { str: bVal, vit: bVal, dex: bVal, agi: bVal, int: bVal, luk: bVal, duration: 4 };
    if (u.hp < u.maxHp) u.hp += bVal;
    if (t.hp < t.maxHp) t.hp += bVal;
    ctx.statText(u.x, u.y, `+${bVal} ALL STATS`, true);
    ctx.statText(t.x, t.y, `+${bVal} ALL STATS`, true);
  },

  raid(ctx) {
    const { u, t } = ctx;
    const dVal = 2;
    t.luk = Math.max(1, (t.luk || 0) - dVal); u.luk = (u.luk || 0) + dVal;
    ctx.statText(t.x, t.y, `-${dVal} LUK`, false); ctx.statText(u.x, u.y, `+${dVal} LUK`, true);
  },

  windWalk(ctx) {
    const { u } = ctx;
    const bVal = 3;
    u.tempBuff = { agi: bVal, duration: 3 };
    ctx.statText(u.x, u.y, `+${bVal} AGI`, true);
  },

  forge(ctx) {
    const { u, t } = ctx;
    const bVal = 2;
    u.tempBuff = { str: bVal, duration: 3 };
    t.tempBuff = { str: bVal, duration: 3 };
    ctx.statText(u.x, u.y, `+${bVal} STR`, true);
    ctx.statText(t.x, t.y, `+${bVal} STR`, true);
  },

  fortify(ctx) {
    const { u, t } = ctx;
    const bVal = 3;
    u.tempBuff = { str: bVal, vit: bVal, duration: 3 };
    t.tempBuff = { str: bVal, vit: bVal, duration: 3 };
    ctx.statText(u.x, u.y, `+${bVal} STR, +${bVal} VIT`, true);
    ctx.statText(t.x, t.y, `+${bVal} STR, +${bVal} VIT`, true);
  },

  gaze(ctx) {
    const { u, t } = ctx;
    if (!t) return;
    const dVal = 1;
    t.tempDebuff = { agi: dVal, vit: dVal, duration: 4 };
    u.tempBuff = { agi: dVal, vit: dVal, duration: 4 };
    ctx.statText(t.x, t.y, `-${dVal} AGI, -${dVal} VIT`, false);
    ctx.statText(u.x, u.y, `+${dVal} AGI, +${dVal} VIT`, true);
  },

  debilitate(ctx) {
    const { u, t } = ctx;
    if (!t) return;
    const d = 3;
    t.tempDebuff = { hp: d, maxHp: d, vit: d, duration: 3 };
    u.tempBuff = { hp: d, maxHp: d, vit: d, duration: 3 };
    ctx.statText(t.x, t.y, `-${d} HP, -${d} VIT`, false);
    ctx.statText(u.x, u.y, `+${d} HP, +${d} VIT`, true);
  },

  warCry(ctx) {
    const { u } = ctx;
    const bVal = Math.max(2, Math.ceil((u.maxHp - u.hp) * 0.3));
    u.tempBuff = { vit: bVal, luk: bVal, duration: 3 };
    ctx.statText(u.x, u.y, `+${bVal} VIT, +${bVal} LUK`, true);
  },

  bash(ctx) {
    const { t } = ctx;
    if (!t) return;
    const dVal = t.agi;
    t.tempDebuff = { agi: dVal, duration: 3 };
    ctx.statText(t.x, t.y, `-${dVal} AGI`, false);
  },

  foresight(ctx) {
    const { u, t, getEff } = ctx;
    const bVal = Math.max(2, Math.floor(getEff(u, 'int') * 0.2));
    u.tempBuff = { int: bVal, dex: bVal, mp: bVal, maxMp: bVal, duration: 3 };
    ctx.statText(u.x, u.y, `+${bVal} INT, +${bVal} DEX, +${bVal} MP`, true);
    if (!t) return;
    t.tempBuff = { int: bVal, dex: bVal, mp: bVal, maxMp: bVal, duration: 3 };
    ctx.statText(t.x, t.y, `+${bVal} INT, +${bVal} DEX, +${bVal} MP`, true);
  },

  overheal(ctx) {
    const { u, t, getEff } = ctx;
    const d = Math.max(1, Math.floor(getEff(u, 'int') * 0.3 + getEff(u, 'luk') * 0.2));
    u.tempBuff = { heal: d, duration: 3 };
    ctx.statText(u.x, u.y, `Auto heal for 2 turns`, true);
    if (!t) return;
    t.tempDebuff = { heal: d, duration: 3 };
    ctx.statText(t.x, t.y, `Auto heal for 2 turns`, true);
  },

  rapid(ctx) {
    const { u } = ctx;
    u.tempBuff = { doubleAttack: true, duration: 2 };
    ctx.statText(u.x, u.y, `Double attack for 1 turn`, true);
  },
};
