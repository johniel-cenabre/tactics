import { LitElement, html } from 'lit';
import { SignalWatcher, uiState } from '../../core/store.js';
import { actions } from '../actions.js';
import { AI_DRAFT_PREFERENCE_OPTIONS } from '../../data/draft-config.js';
import { DEFAULT_SETTINGS, DEV_MODE } from '../../config.js';

const MODES = [
  { id: 'pvp', title: 'Player vs Player', short: 'PvP', desc: 'Two players on the same device.' },
  { id: 'pvcpu', title: 'Player vs CPU', short: 'PvCPU', desc: 'You control your army; the CPU responds.' },
  { id: 'cvcpu', title: 'CPU vs CPU', short: 'Watch', desc: 'Watch two AI armies fight.' },
  { id: 'online', title: 'Online Match', short: 'Online', desc: 'Play a friend over the internet.' },
];

const MODE_ICONS = {
  pvp: html`
    <svg class="mode-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M6.5 2.8 9.7 6l-1.4 1.4-2.4-2.4-1.4 1.4 2.4 2.4L5.5 10 2.3 6.8 3.7 5.4 6.1 7.8 7.5 6.4 4.3 3.2 5.7 1.8 6.5 2.8Zm11 0 1.4-1.4 3.2 3.2-1.4 1.4-2.4-2.4-1.4 1.4 2.4 2.4-1.4 1.4-3.2-3.2 1.4-1.4 2.4 2.4 1.4-1.4-2.4-2.4 1.4-1.4Z"/>
      <path fill="currentColor" d="M8.8 13.2 13.2 8.8l6 6-1.4 1.4-4.6-4.6-4.6 4.6-1.4-1.4 6-6Z"/>
    </svg>`,
  pvcpu: html`
    <svg class="mode-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M12 2 20 5v6.2c0 4.8-3.4 8.8-8 10.8-4.6-2-8-6-8-10.8V5l8-3Zm0 2.2L6 6.4V11c0 3.7 2.6 7 6 8.8 3.4-1.8 6-5.1 6-8.8V6.4l-6-2.2Z"/>
    </svg>`,
  cvcpu: html`
    <svg class="mode-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M12 5c-3.9 0-7 2.7-7 6.2 0 2.2 1.2 4.1 3 5.3-.3.9-.8 1.7-1.5 2.5 2-.5 3.6-1.5 4.8-2.8 1.5.4 3.1.4 4.7 0 1.2 1.3 2.8 2.3 4.8 2.8-.7-.8-1.2-1.6-1.5-2.5 1.8-1.2 3-3.1 3-5.3C19 7.7 15.9 5 12 5Zm0 2.2c2.6 0 4.6 1.7 4.6 4 0 2.3-2 4-4.6 4s-4.6-1.7-4.6-4c0-2.3 2-4 4.6-4Z"/>
    </svg>`,
  online: html`
    <svg class="mode-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="none" stroke="currentColor" stroke-width="1.8" d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z"/>
      <path fill="none" stroke="currentColor" stroke-width="1.8" d="M3 12h18M12 3c2.4 2.8 2.4 14.2 0 18M12 3c-2.4 2.8-2.4 14.2 0 18"/>
    </svg>`,
};

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

  _modeIcon(modeId, className) {
    return html`<span class="${className} mode-icon mode-icon--${modeId}">${MODE_ICONS[modeId]}</span>`;
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
                    ${this._modeIcon(m.id, 'mode-tile-icon')}
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
                  ${this._modeIcon(selected.id, 'mode-selected-icon')}
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
