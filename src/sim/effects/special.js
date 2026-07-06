// Effects that need extra systems: damage-over-time debuffs, knockback, mirror,
// and summoning.

export const specialEffects = {
  poison(ctx) {
    const { t, getEff } = ctx;
    if (!t) return;
    const poisonVal = Math.max(1, Math.floor(getEff(t, 'luk') * 0.4 - getEff(t, 'luk') * 0.2));
    t.tempDebuff = { poison: poisonVal, duration: 3 };
    ctx.statText(t.x, t.y, `${poisonVal} poison for 2 turns`, false);
  },

  infect(ctx) {
    const { u, t, getEff } = ctx;
    if (!t) return;
    const poisonVal = Math.max(1, Math.ceil(getEff(u, 'luk') * 0.4 - getEff(t, 'luk') * 0.1));
    t.tempDebuff = { poison: poisonVal, duration: 4 };
    ctx.statText(t.x, t.y, `${poisonVal} poison for 3 turns`, false);
  },

  vodoo(ctx) {
    const { u, t } = ctx;
    if (!t) return;
    u.tempBuff = { vodoo: t.id, duration: 3 };
    ctx.statText(t.x, t.y, `Vodoo for 2 turns`, false);
  },

  powerShot(ctx) {
    const { u, t, getEff } = ctx;
    if (!t) return;
    const d = Math.max(1, Math.floor(getEff(u, 'dex') * 0.6 - (getEff(t, 'vit') * 0.3 + getEff(t, 'luk') * 0.2)));
    const isHit = ctx.damage(t, d);
    if (isHit && ctx.knockback) {
      const tilesToPush = Math.max(1, Math.floor(d * 0.2));
      ctx.knockback(u, t, tilesToPush);
    }
  },

  reanimate(ctx) {
    const { u, state } = ctx;
    if (!ctx.reanimate) return;
    const list = state.units;
    let bestAll = null;
    let oBestAll = -1;
    let bestAlly = null;
    let oBestAlly = -1;
    let hadDeadAlly = false;
    for (let i = 0; i < list.length; i++) {
      const d = list[i];
      if (d.hp > 0) continue;
      if (d.isReanimated) continue;
      const oD = d.deathOrder ?? 0;
      if (oD >= oBestAll) { oBestAll = oD; bestAll = d; }
      if (d.player === u.player) {
        hadDeadAlly = true;
        if (oD >= oBestAlly) { oBestAlly = oD; bestAlly = d; }
      }
    }
    const pick = hadDeadAlly ? bestAlly : bestAll;
    if (pick) ctx.reanimate(u, pick);
  },
};
