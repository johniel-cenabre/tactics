import { LitElement, html } from 'lit';
import { SignalWatcher, uiState } from '../../core/store.js';
import { actions } from '../actions.js';
import { CLASSES } from '../../data/classes.js';
import { CLASS_SKILLS } from '../../data/skills.js';
import { CLASS_IMAGES } from '../../data/class-look.js';

const PLACEMENT_MAX_ROWS = 3;

// Draft screen: class picker grid + selected-class detail. During placement the
// picker hides and a side column shows the current lineup. Light DOM.
class DraftPanel extends SignalWatcher(LitElement) {
  createRenderRoot() { return this; }

  constructor() {
    super();
    this._selected = null;
  }

  _select(cls) { this._selected = cls; this.requestUpdate(); }
  _confirm() { if (this._selected) { actions.draftPick(this._selected); this._selected = null; this.requestUpdate(); } }

  _statPairs(c) {
    return [
      ['HP', c.hp], ['MP', c.mp], ['STR', c.str], ['AGI', c.agi],
      ['VIT', c.vit], ['DEX', c.dex], ['LUK', c.luk], ['INT', c.int], ['RNG', c.range],
    ];
  }

  _skillCostLabel(skill) {
    if (skill.hpCost) return `${skill.hpCost} HP`;
    return `${skill.cost} MP`;
  }

  _renderSkills(classKey) {
    const skills = CLASS_SKILLS[classKey] || [];
    if (skills.length === 0) {
      return html`<div class="draft-detail-skills"><div class="draft-detail-skill">No skills</div></div>`;
    }
    return html`
      <div class="draft-detail-skills">
        ${skills.map((s) => html`
          <div class="draft-detail-skill">
            <span class="draft-detail-skill-name">${s.name}</span>
            <span class="draft-detail-skill-meta">${this._skillCostLabel(s)} · Lv.${s.level}</span>
            ${s.description ? html`<span class="draft-detail-skill-desc">${s.description}</span>` : ''}
          </div>
        `)}
      </div>
    `;
  }

  _placementCard(classKey, isCurrent) {
    const c = CLASSES[classKey];
    if (!c) return html``;
    return html`
      <div class="draft-class-card ${isCurrent ? 'draft-class-card-current' : ''}">
        <img class="draft-class-card-image" src="${CLASS_IMAGES[classKey] || ''}" alt="" referrerpolicy="no-referrer" />
        <div class="draft-class-card-body">
          <div class="draft-class-card-name">${c.name}</div>
          <div class="draft-class-card-stats">
            ${this._statPairs(c).map(([label, value]) => html`
              <span class="draft-stat-label">${label}</span><span class="draft-stat-value">${value}</span>
            `)}
          </div>
        </div>
      </div>
    `;
  }

  _renderPlacement(d) {
    const keys = [...(d.pickedClasses || []), d.pendingClassKey].filter(Boolean);
    const useCols = keys.length > PLACEMENT_MAX_ROWS;
    const columns = useCols
      ? Array.from({ length: Math.ceil(keys.length / PLACEMENT_MAX_ROWS) }, (_, i) =>
        keys.slice(i * PLACEMENT_MAX_ROWS, (i + 1) * PLACEMENT_MAX_ROWS))
      : [keys];

    return html`
      <div id="draft-placement-card" class="player-${d.player} ${useCols ? 'draft-placement-cols' : ''}" style="display:flex">
        ${columns.map((colKeys, colIndex) => html`
          <div class="draft-placement-col">
            ${colKeys.map((key, i) => {
              const globalIndex = colIndex * PLACEMENT_MAX_ROWS + i;
              return this._placementCard(key, globalIndex === keys.length - 1);
            })}
          </div>
        `)}
      </div>
    `;
  }

  _renderPicker(d) {
    const classes = d.availableClasses || [];
    const detail = this._selected ? CLASSES[this._selected] : null;
    const pickLabel = d.isHumanTurn
      ? `Player ${d.player}: Pick a class (${d.pickCount}/${d.picksPerPlayer})`
      : `Player ${d.player} is picking a class`;

    return html`
      <div id="draft-panel" style="display:flex">
        <div id="draft-header">
          <div id="draft-title">${pickLabel}</div>
          <div id="draft-message">${d.isHumanTurn ? 'Choose a class to draft.' : 'CPU is drafting…'}</div>
        </div>
        <div id="draft-body">
          <div id="draft-detail">
            <div class="draft-detail-card">
              ${detail ? html`
                <img class="draft-detail-image" src="${CLASS_IMAGES[this._selected] || ''}" alt="" referrerpolicy="no-referrer" />
                <div class="draft-detail-content">
                  <div class="draft-detail-name">${detail.name}</div>
                  <div class="draft-detail-stats">
                    ${this._statPairs(detail).map(([label, value]) => html`
                      <span class="draft-stat-label">${label}</span><span class="draft-stat-value">${value}</span>
                    `)}
                  </div>
                  ${this._renderSkills(this._selected)}
                </div>
                <button type="button" class="draft-select-btn" ?disabled=${!d.isHumanTurn} @click=${() => this._confirm()}>Select</button>
              ` : html`<div class="draft-detail-placeholder">Click a class to view details</div>`}
            </div>
          </div>
          <div id="draft-classes">
            ${classes.map((cls) => html`
              <button type="button" class="draft-class-card ${this._selected === cls ? 'draft-class-card-selected' : ''}"
                ?disabled=${!d.isHumanTurn}
                @click=${() => this._select(cls)}>
                <img class="draft-class-card-image" src="${CLASS_IMAGES[cls] || ''}" alt="" referrerpolicy="no-referrer" />
                <div class="draft-class-card-body">
                  <div class="draft-class-card-name">${CLASSES[cls] ? CLASSES[cls].name : cls}</div>
                </div>
              </button>
            `)}
          </div>
        </div>
      </div>
    `;
  }

  render() {
    const s = uiState.value;
    if (s.screen !== 'game' || s.phase !== 'draft' || !s.draft) return html``;
    const d = s.draft;
    if (d.pendingClassKey) return this._renderPlacement(d);
    return this._renderPicker(d);
  }
}
customElements.define('draft-panel', DraftPanel);
