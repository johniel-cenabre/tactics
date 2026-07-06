import { LitElement, html } from 'lit';
import { SignalWatcher, uiState } from '../../core/store.js';
import { actions } from '../actions.js';
import { AI_DRAFT_PREFERENCE_OPTIONS } from '../../data/draft-config.js';
import { DEFAULT_SETTINGS, DEV_MODE } from '../../config.js';

const MODES = [
  { id: 'pvp', title: 'Player vs Player', short: 'PvP', icon: '⚔', desc: 'Two players on the same device.' },
  { id: 'pvcpu', title: 'Player vs CPU', short: 'PvCPU', icon: '🛡', desc: 'You control your army; the CPU responds.' },
  { id: 'cvcpu', title: 'CPU vs CPU', short: 'Watch', icon: '👁', desc: 'Watch two AI armies fight.' },
  { id: 'online', title: 'Online Match', short: 'Online', icon: '🌐', desc: 'Play a friend over the internet.' },
];

// Mode-select screen. Light DOM — styles live in styles/mode-select.css.
class ModeSelect extends SignalWatcher(LitElement) {
  createRenderRoot() { return this; }

  constructor() {
    super();
    this.mode = 'pvp';
    this.form = {
      mapMode: 'long',
      numUnits: DEFAULT_SETTINGS.draftPicksPerPlayer,
      aiDraftPreference: 'balanced',
      numGames: 1,
      moveDurationMs: DEFAULT_SETTINGS.moveDurationMs,
      gridW: DEFAULT_SETTINGS.gridW,
      gridH: DEFAULT_SETTINGS.gridH,
      centerPlazaRadius: DEFAULT_SETTINGS.centerPlazaRadius,
      maxTurns: DEFAULT_SETTINGS.maxTurns,
    };
  }

  _setMode(m) { this.mode = m; this.requestUpdate(); }
  _upd(key, value) { this.form = { ...this.form, [key]: value }; this.requestUpdate(); }

  _play() {
    const cfg = { mode: this.mode, ...this.form };
    if (this.mode === 'online') actions.onlineStart(cfg);
    else actions.startMatch(cfg);
  }

  _renderSettings(f) {
    const num = (id, key, attrs = {}) => html`
      <div class="mode-field">
        <label for=${id}>${attrs.label}</label>
        <input id=${id} type="number" inputmode="numeric" .value=${String(f[key])}
          min=${attrs.min ?? 1} max=${attrs.max ?? 999} step=${attrs.step ?? 1}
          @input=${(e) => this._upd(key, Number(e.target.value))} />
      </div>`;

    const select = (id, key, label, options) => html`
      <div class="mode-field">
        <label for=${id}>${label}</label>
        <select id=${id} @change=${(e) => this._upd(key, e.target.value)}>
          ${options.map(([val, text]) => html`<option value=${val} ?selected=${f[key] === val}>${text}</option>`)}
        </select>
      </div>`;

    return html`
      ${this.mode === 'pvp' || this.mode === 'online' ? select('mode-map', 'mapMode', 'Map size', [
        ['long', 'Normal'], ['short', 'Short'],
      ]) : ''}
      ${num('mode-units', 'numUnits', { label: 'Units per player', min: 1, max: 20 })}
      ${this.mode !== 'pvp' && this.mode !== 'online' ? select('mode-ai-draft', 'aiDraftPreference', 'AI draft style',
        AI_DRAFT_PREFERENCE_OPTIONS.map((o) => [o.value, o.label])) : ''}
      ${this.mode === 'cvcpu' ? num('mode-games', 'numGames', { label: 'Games to run', min: 1, max: 999 }) : ''}
      ${num('mode-speed', 'moveDurationMs', { label: 'Move speed (ms)', min: 0, max: 5000, step: 50 })}
      ${DEV_MODE ? html`
        ${num('mode-grid-w', 'gridW', { label: 'Grid width', min: 5, max: 50 })}
        ${num('mode-grid-h', 'gridH', { label: 'Grid height', min: 5, max: 50 })}
        ${num('mode-plaza', 'centerPlazaRadius', { label: 'Center plaza', min: 0.1, max: 0.9, step: 0.01 })}
        ${num('mode-turns', 'maxTurns', { label: 'Max turns', min: 10, max: 999 })}
      ` : ''}
    `;
  }

  render() {
    if (uiState.value.screen !== 'mode-select') return html``;
    const f = this.form;
    const selected = MODES.find((m) => m.id === this.mode);

    return html`
      <div id="mode-select-overlay" style="display:flex">
        <div class="mode-select-inner">
          <header class="mode-select-header">
            <div class="mode-select-brand">
              <h1 class="mode-select-title">TACTICS</h1>
              <p class="mode-select-tagline">Turn-based tactics on a living tile map</p>
            </div>
          </header>

          <div class="mode-select-main">
            <section class="mode-select-modes">
              <p class="mode-section-label">Choose a mode</p>
              <div class="mode-picker-grid" role="group" aria-label="Game mode">
                ${MODES.map((m) => html`
                  <button type="button"
                    class="mode-tile ${this.mode === m.id ? 'selected' : ''}"
                    aria-pressed=${this.mode === m.id}
                    aria-label=${`${m.title}. ${m.desc}`}
                    @click=${() => this._setMode(m.id)}>
                    <span class="mode-tile-icon" aria-hidden="true">${m.icon}</span>
                    <span class="mode-tile-body">
                      <span class="mode-tile-name mode-tile-name-short">${m.short}</span>
                      <span class="mode-tile-name mode-tile-name-full">${m.title}</span>
                      <span class="mode-tile-desc">${m.desc}</span>
                    </span>
                  </button>
                `)}
              </div>
              ${selected ? html`
                <div class="mode-selected-card">
                  <span class="mode-selected-icon" aria-hidden="true">${selected.icon}</span>
                  <div class="mode-selected-copy">
                    <div class="mode-selected-title">${selected.title}</div>
                    <p class="mode-selected-desc">${selected.desc}</p>
                  </div>
                </div>
              ` : ''}

              <ul class="mode-list-desktop" aria-label="Game mode">
                ${MODES.map((m) => html`
                  <li>
                    <button type="button"
                      class="mode-card mode-card-desc ${this.mode === m.id ? 'selected' : ''}"
                      aria-pressed=${this.mode === m.id}
                      aria-label=${m.title}
                      @click=${() => this._setMode(m.id)}>
                      <span class="mode-card-icon" aria-hidden="true">${m.icon}</span>
                      <span class="mode-card-copy">
                        <h2 class="mode-card-title">${m.title}</h2>
                        <p class="mode-card-desc-text">${m.desc}</p>
                      </span>
                    </button>
                  </li>
                `)}
              </ul>
            </section>

            <aside class="mode-select-settings-col">
              <div class="mode-play-wrap">
                <button type="button" class="mode-play-btn" @click=${() => this._play()}>
                  <span class="mode-play-text">${this.mode === 'online' ? 'Connect online' : 'Start game'}</span>
                </button>
              </div>
              <details class="mode-settings-details" open>
                <summary class="mode-settings-summary">Match settings</summary>
                <div class="mode-card mode-settings-card">
                  <div class="mode-settings-fields">
                    ${this._renderSettings(f)}
                  </div>
                </div>
              </details>
            </aside>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('mode-select-screen', ModeSelect);
