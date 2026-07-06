// WebRTC transport with manual copy/paste signaling (no server). One reliable,
// ordered data channel carries JSON messages. The host creates an offer, the guest
// turns it into an answer, and the host applies the answer — after that both sides
// exchange messages via send(). Everything above this layer is transport-agnostic.

const ICE_SERVERS = [{ urls: 'stun:stun.l.google.com:19302' }];

function encode(desc) {
  return btoa(JSON.stringify(desc));
}
function decode(text) {
  return JSON.parse(atob(text.trim()));
}

export class Transport {
  constructor() {
    this.pc = null;
    this.channel = null;
    this.onOpen = null;
    this.onMessage = null;
    this.onClose = null;
    this.onError = null;
  }

  _newPc() {
    const pc = new RTCPeerConnection({ iceServers: ICE_SERVERS });
    pc.onconnectionstatechange = () => {
      if (['disconnected', 'failed', 'closed'].includes(pc.connectionState) && this.onClose) this.onClose();
    };
    this.pc = pc;
    return pc;
  }

  _wireChannel(channel) {
    this.channel = channel;
    channel.onopen = () => this.onOpen && this.onOpen();
    channel.onclose = () => this.onClose && this.onClose();
    channel.onmessage = (e) => {
      if (!this.onMessage) return;
      try { this.onMessage(JSON.parse(e.data)); } catch (err) { this.onError && this.onError(err); }
    };
  }

  _waitIceComplete(pc) {
    return new Promise((resolve) => {
      if (pc.iceGatheringState === 'complete') return resolve();
      const check = () => {
        if (pc.iceGatheringState === 'complete') {
          pc.removeEventListener('icegatheringstatechange', check);
          resolve();
        }
      };
      pc.addEventListener('icegatheringstatechange', check);
      // Safety timeout in case gathering stalls.
      setTimeout(resolve, 4000);
    });
  }

  /** Host: create an offer code to send to the guest. */
  async createOffer() {
    const pc = this._newPc();
    this._wireChannel(pc.createDataChannel('game', { ordered: true }));
    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer);
    await this._waitIceComplete(pc);
    return encode(pc.localDescription);
  }

  /** Host: apply the guest's answer code to complete the connection. */
  async acceptAnswer(answerCode) {
    await this.pc.setRemoteDescription(decode(answerCode));
  }

  /** Guest: consume the host's offer code and produce an answer code. */
  async acceptOffer(offerCode) {
    const pc = this._newPc();
    pc.ondatachannel = (e) => this._wireChannel(e.channel);
    await pc.setRemoteDescription(decode(offerCode));
    const answer = await pc.createAnswer();
    await pc.setLocalDescription(answer);
    await this._waitIceComplete(pc);
    return encode(pc.localDescription);
  }

  send(obj) {
    if (this.channel && this.channel.readyState === 'open') this.channel.send(JSON.stringify(obj));
  }

  close() {
    if (this.channel) try { this.channel.close(); } catch (_) {}
    if (this.pc) try { this.pc.close(); } catch (_) {}
    this.channel = null;
    this.pc = null;
  }
}
