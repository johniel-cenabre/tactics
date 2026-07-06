import { LitElement, html } from 'lit';
import { SignalWatcher, uiState } from '../../core/store.js';
import { actions } from '../actions.js';

// Online connect overlay: drives the WebRTC copy/paste handshake. It is a thin
// view over uiState.online (owned by main.js); buttons call action hooks and the
// overlay re-renders as main patches the online state. Light DOM to reuse global
// styles from styles/online.css.
class OnlineConnect extends SignalWatcher(LitElement) {
  createRenderRoot() { return this; }

  constructor() {
    super();
    this._name = '';
    this._reply = '';
    this._offerIn = '';
  }

  _upd(field, value) { this[field] = value; this.requestUpdate(); }

  async _copy(text) {
    try {
      if (navigator.clipboard && text) await navigator.clipboard.writeText(text);
    } catch (_) { /* clipboard may be unavailable; the code is still selectable */ }
  }

  render() {
    const o = uiState.value.online;
    if (!o) return html``;
    const view = o.view || 'menu';
    return html`
      <div id="online-connect-overlay" class="online-connect-overlay">
        <div class="online-connect-inner">
          <h2 class="online-connect-title">Online Match</h2>
          ${o.error ? html`<p class="online-error">${o.error}</p>` : ''}
          ${this._renderView(o, view)}
        </div>
      </div>`;
  }

  _renderView(o, view) {
    if (view === 'hosting') return this._renderHosting(o);
    if (view === 'joining') return this._renderJoining();
    if (view === 'joined') return this._renderJoined(o);
    return this._renderMenu();
  }

  _renderMenu() {
    return html`
      <label for="online-player-name">Your name</label>
      <input id="online-player-name" type="text" .value=${this._name}
        placeholder="Enter your name"
        @input=${(e) => this._upd('_name', e.target.value)} />
      <div class="online-connect-actions">
        <button type="button" @click=${() => actions.onlineHost(this._name)}>Host game</button>
        <button type="button" @click=${() => this._goJoin()}>Join game</button>
        <button type="button" @click=${() => actions.onlineCancel()}>Cancel</button>
      </div>`;
  }

  _goJoin() {
    // Switch to the join view; main keeps ownership of online state, so patch it.
    uiState.value = { ...uiState.value, online: { view: 'joining', error: '' } };
  }

  _renderHosting(o) {
    return html`
      <div class="online-section">
        <p class="online-instruction">1. Send this invite code to your opponent.</p>
        <textarea readonly .value=${o.offer || ''}></textarea>
        <button type="button" @click=${() => this._copy(o.offer)}>Copy invite code</button>
      </div>
      <div class="online-section">
        <p class="online-instruction">2. Paste their reply code and connect.</p>
        <textarea placeholder="Paste reply code here" .value=${this._reply}
          @input=${(e) => this._upd('_reply', e.target.value)}></textarea>
        <button type="button" @click=${() => actions.onlineHostConnect(this._reply)}>Connect</button>
        ${o.waiting ? html`<p class="online-waiting">Connecting…</p>` : ''}
      </div>
      <div class="online-connect-actions">
        <button type="button" @click=${() => actions.onlineCancel()}>Cancel</button>
      </div>`;
  }

  _renderJoining() {
    return html`
      <div class="online-section">
        <p class="online-instruction">Paste the invite code from the host.</p>
        <textarea placeholder="Paste invite code here" .value=${this._offerIn}
          @input=${(e) => this._upd('_offerIn', e.target.value)}></textarea>
        <button type="button" @click=${() => actions.onlineJoin(this._offerIn, this._name)}>Generate reply code</button>
      </div>
      <div class="online-connect-actions">
        <button type="button" @click=${() => actions.onlineCancel()}>Cancel</button>
      </div>`;
  }

  _renderJoined(o) {
    return html`
      <div class="online-section" id="online-join-answer-section">
        <p class="online-instruction">Send this reply code back to the host.</p>
        <textarea readonly .value=${o.answer || ''}></textarea>
        <button type="button" @click=${() => this._copy(o.answer)}>Copy reply code</button>
        <p class="online-waiting">Waiting for the host to connect…</p>
      </div>
      <div class="online-connect-actions">
        <button type="button" @click=${() => actions.onlineCancel()}>Cancel</button>
      </div>`;
  }
}
customElements.define('online-connect', OnlineConnect);
