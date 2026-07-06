import { LitElement, html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { SignalWatcher, uiState } from '../../core/store.js';
import { CLASS_IMAGES } from '../../data/class-look.js';

// Floating card describing a tapped (non-active) unit. Light DOM.
class UnitPreview extends SignalWatcher(LitElement) {
  createRenderRoot() { return this; }

  render() {
    const u = uiState.value.previewUnit;
    if (!u) return html``;
    const statOrder = ['str', 'agi', 'vit', 'dex', 'luk', 'int'];
    return html`
      <div id="unit-preview-card" class="player-${u.player}" style="display:flex">
        <img class="unit-preview-image" src="${CLASS_IMAGES[u.class] || ''}" alt="" referrerpolicy="no-referrer" />
        <div class="unit-preview-body">
          <div class="unit-preview-name">${u.name} <small>Lv.${u.level}</small></div>
          <div class="unit-preview-meta">HP ${u.hp}/${u.maxHp} · MP ${u.mp}/${u.maxMp}</div>
          <div class="unit-preview-stats">
            ${statOrder.map((k) => html`<span>${k.toUpperCase()} ${unsafeHTML(u.statsHtml[k])}</span>`)}
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('unit-preview', UnitPreview);
