import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { SignalWatcher, uiState } from '../../core/store.js';
import { actions } from '../actions.js';
import { CLASS_IMAGES } from '../../data/class-look.js';
import { CLASSES } from '../../data/classes.js';

const STAT_ORDER = ['str', 'agi', 'vit', 'dex', 'luk', 'int'];
const DETAILS_STORAGE_KEY = 'tactics-turn-details';

// Bottom action bar: active unit info + Attack / Skill / End. Unit stats/skills
// slide up in a separate card above the dock. Light DOM to reuse #turn-menu styles.
class TurnMenu extends SignalWatcher(LitElement) {
  createRenderRoot() { return this; }

  constructor() {
    super();
    this._skillsOpen = false;
    this._showDetails = sessionStorage.getItem(DETAILS_STORAGE_KEY) !== '0';
    this._onDocClick = null;
  }

  connectedCallback() {
    super.connectedCallback();
    this._onDocClick = (e) => {
      if (!this._skillsOpen) return;
      const wrap = this.querySelector('.skill-wrap');
      if (wrap && !wrap.contains(e.target)) {
        this._skillsOpen = false;
        this.requestUpdate();
      }
    };
    document.addEventListener('click', this._onDocClick);
  }

  disconnectedCallback() {
    if (this._onDocClick) document.removeEventListener('click', this._onDocClick);
    super.disconnectedCallback();
  }

  _toggleSkills(e) {
    e?.stopPropagation();
    this._skillsOpen = !this._skillsOpen;
    this.requestUpdate();
  }

  _toggleDetails(e) {
    e?.stopPropagation();
    this._showDetails = !this._showDetails;
    sessionStorage.setItem(DETAILS_STORAGE_KEY, this._showDetails ? '1' : '0');
    this.requestUpdate();
  }

  _pickSkill(index) {
    this._skillsOpen = false;
    actions.skill(index);
    this.requestUpdate();
  }

  _statRows(u) {
    return html`
      <span>HP</span><span class="stat-val stat-val-hp">${u.hp}/${u.maxHp}</span>
      <span>MP</span><span class="stat-val">${u.mp}/${u.maxMp}</span>
      ${STAT_ORDER.map((k) => html`
        <span>${k.toUpperCase()}</span>
        <span class="stat-val">${unsafeHTML(u.statsHtml[k])}</span>
      `)}
    `;
  }

  _effectRows(effects, kind) {
    if (!effects || effects.length === 0) {
      return html`<li class="unit-effect-item unit-effect-empty">None</li>`;
    }
    return effects.map((e) => html`
      <li class="unit-effect-item unit-effect-${kind}">
        <span class="unit-effect-name">${e.name}</span>
        ${e.detail ? html`<span class="unit-effect-meta">${e.detail}</span>` : ''}
      </li>
    `);
  }

  _renderEffectsSection(label, effects, kind) {
    return html`
      <div class="unit-effects-group unit-effects-${kind}">
        <span class="unit-details-row-label">${label}</span>
        <ul class="unit-effects-list">${this._effectRows(effects, kind)}</ul>
      </div>
    `;
  }

  _renderDetailsBody(u) {
    return html`
      <div class="unit-details-body">
        <div class="unit-details-col unit-details-col-stats">
          <span class="unit-details-row-label">Stats</span>
          <div class="unit-details-stats">${this._statRows(u)}</div>
        </div>
        <div class="unit-details-col unit-details-col-effects">
          ${this._renderEffectsSection('Buffs', u.buffs ?? [], 'buff')}
          ${this._renderEffectsSection('Debuffs', u.debuffs ?? [], 'debuff')}
        </div>
      </div>
    `;
  }

  render() {
    const s = uiState.value;
    if (s.screen !== 'game' || s.phase !== 'playing') return html``;
    const u = s.selectedUnit;
    const disabled = !s.isHumanTurn;
    const choosingFacing = s.actionState?.choosingFacing;
    const skills = s.availableSkills || [];
    const noSkills = skills.length === 0;
    const detailsOpen = this._showDetails && !!u;

    return html`
      <div id="turn-menu-stack" class=${classMap({
        [`player-${s.currentPlayer}`]: true,
        'details-open': detailsOpen,
        'details-closed': !detailsOpen,
        'low-hp': !!u?.lowHp,
        'level-2': !!u && u.level >= 2 && u.level < 3,
        'level-3': !!u && u.level >= 3,
      })}>
        ${u ? html`
          <div id="unit-details-card" class="unit-details-card unit-details-card--mobile" aria-hidden=${!detailsOpen}>
            <div class="unit-details-card-inner">
              ${this._renderDetailsBody(u)}
            </div>
          </div>
        ` : ''}

        <div id="turn-menu" style="display:flex">
          <div class="unit-info ${u ? '' : 'no-unit'}" id="unit-info">
            <div class="unit-info-primary">
              <img class="unit-class-image" src="${u ? (CLASS_IMAGES[u.class] || '') : ''}" alt="" referrerpolicy="no-referrer" />
              <div class="unit-info-meta">
                <div class="unit-info-text">
                  <div class="unit-name-row">
                    <span class="unit-name">${u ? u.name : '— Select a unit —'}</span>
                    <span class="unit-level-class">${u ? `Lv.${u.level} ${CLASSES[u.class]?.name || u.class}` : ''}</span>
                  </div>
                  ${u ? html`
                    <div class="unit-info-compact">HP ${u.hp}/${u.maxHp} · MP ${u.mp}/${u.maxMp}</div>
                  ` : ''}
                </div>
                ${u ? html`
                  <div class="unit-info-stats unit-details-stats">${this._statRows(u)}</div>
                ` : ''}
              </div>
            </div>
            ${u ? html`
              <div class="unit-info-effects">
                ${this._renderEffectsSection('Buffs', u.buffs ?? [], 'buff')}
                ${this._renderEffectsSection('Debuffs', u.debuffs ?? [], 'debuff')}
              </div>
            ` : ''}
          </div>
          <div class="menu-actions">
            <span class="menu-label">${choosingFacing ? 'Choose facing' : `Player ${s.currentPlayer}`}</span>
            <button type="button"
              class="details-toggle"
              ?disabled=${!u}
              aria-expanded=${detailsOpen}
              aria-label=${detailsOpen ? 'Hide unit details' : 'Show unit details'}
              @click=${(e) => this._toggleDetails(e)}>
              Details
            </button>
            <button type="button" ?disabled=${disabled || choosingFacing || s.actionState.hasAttacked} @click=${() => actions.attack()}>Attack</button>
            <div class="skill-wrap">
              <button type="button" ?disabled=${disabled || choosingFacing || s.actionState.hasAttacked || noSkills} @click=${(e) => this._toggleSkills(e)}>Skill</button>
              <div class="skill-list-overlay" style="display:${this._skillsOpen ? 'block' : 'none'}">
                ${skills.length === 0 ? html`<div class="skill-option" style="cursor:default;color:#8b949e;">No skills available</div>` : ''}
                ${skills.map((sk) => html`
                  <button type="button" class="skill-option" ?disabled=${sk.disabled} @click=${() => this._pickSkill(sk.index)}>
                    <span class="skill-name">${sk.name}</span>
                    <span class="skill-meta">${sk.cost} MP · Lv.${sk.level}</span>
                    ${sk.description ? html`<br /><span class="skill-meta">${sk.description}</span>` : ''}
                  </button>
                `)}
              </div>
            </div>
            <button type="button" class="end" ?disabled=${disabled || choosingFacing} @click=${() => actions.endTurn()}>End</button>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('turn-menu', TurnMenu);
