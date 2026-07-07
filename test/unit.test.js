import { describe, it, expect } from 'vitest';
import { unitStatusEffects, unitSummary } from '../src/sim/unit.js';
import { createUnit } from '../src/sim/unit.js';

describe('unitStatusEffects', () => {
  it('returns none when no temp effects', () => {
    const u = createUnit({ id: 1, player: 1, classKey: 'knight', x: 0, y: 0 });
    expect(unitStatusEffects(u)).toEqual({ buffs: [], debuffs: [] });
  });

  it('shows skill name with heal/damage detail and omits stat keys', () => {
    const u = createUnit({ id: 1, player: 1, classKey: 'knight', x: 0, y: 0 });
    u.tempBuff = { str: 4, heal: 3, effectKey: 'overheal', duration: 3 };
    u.tempDebuff = { poison: 2, agi: 1, effectKey: 'poison', duration: 2 };
    expect(unitStatusEffects(u)).toEqual({
      buffs: [{ name: 'Overheal', detail: '3 HP/turn' }],
      debuffs: [{ name: 'Poison', detail: '2 dmg/turn' }],
    });
  });

  it('omits stat-only buffs without a skill source', () => {
    const u = createUnit({ id: 1, player: 1, classKey: 'knight', x: 0, y: 0 });
    u.tempBuff = { str: 4, duration: 3 };
    expect(unitStatusEffects(u)).toEqual({ buffs: [], debuffs: [] });
  });

  it('shows skill name without detail for non-dot effects', () => {
    const u = createUnit({ id: 1, player: 1, classKey: 'knight', x: 0, y: 0 });
    u.tempBuff = { str: 1, vit: 1, effectKey: 'brave', duration: 3 };
    expect(unitStatusEffects(u)).toEqual({
      buffs: [{ name: 'Brave', detail: '' }],
      debuffs: [],
    });
  });

  it('is included on unitSummary', () => {
    const u = createUnit({ id: 1, player: 1, classKey: 'amazon', x: 0, y: 0 });
    u.tempBuff = { doubleAttack: true, effectKey: 'rapid', duration: 2 };
    const s = unitSummary(u);
    expect(s.buffs).toEqual([{ name: 'Rapid', detail: '' }]);
    expect(s.debuffs).toEqual([]);
  });
});
