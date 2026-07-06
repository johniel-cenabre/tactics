// Tile highlight overlays (movement / attack / skill / placement). Pure presentation:
// given a list of tiles + a style, it draws pulsing squares. The pulsing opacity is
// driven by SceneView's render loop via the shared pulseMaterials array.

import * as THREE from 'three';

const HIGHLIGHT_SQUARE_SIZE = 0.82;
const HIGHLIGHT_GLOW_SIZE = 1.02;

const STYLES = {
  move: { glow: 0x3399ff, glowOpacity: 0.35, square: 0x66b3ff, squareOpacity: 0.65 },
  attack: { glow: 0x992222, glowOpacity: 0.4, square: 0xcc4444, squareOpacity: 0.7 },
  skill: { glow: 0x8833aa, glowOpacity: 0.4, square: 0xaa66cc, squareOpacity: 0.7 },
  placement: { glow: 0x22aa44, glowOpacity: 0.4, square: 0x44cc66, squareOpacity: 0.7 },
  facing: { glow: 0x2288cc, glowOpacity: 0.35, square: 0x44aaff, squareOpacity: 0.65 },
};

export class Highlights {
  constructor(sceneView) {
    this.view = sceneView;
    this.group = new THREE.Group();
    sceneView.scene.add(this.group);
    this.materials = [];
    this.glowGeo = new THREE.PlaneGeometry(HIGHLIGHT_GLOW_SIZE, HIGHLIGHT_GLOW_SIZE);
    this.squareGeo = new THREE.PlaneGeometry(HIGHLIGHT_SQUARE_SIZE, HIGHLIGHT_SQUARE_SIZE);
  }

  clear() {
    while (this.group.children.length) {
      const c = this.group.children[0];
      this.group.remove(c);
      if (c.geometry !== this.glowGeo && c.geometry !== this.squareGeo && c.geometry) c.geometry.dispose();
    }
    this.materials.forEach((m) => m.dispose());
    this.materials.length = 0;
    this.view.pulseMaterials = [];
    this.view.requestRender();
  }

  show(tiles, styleKey) {
    this.clear();
    const style = STYLES[styleKey] || STYLES.move;
    tiles.forEach(({ gx, gy }) => {
      const y = this.view.surfaceY(gx, gy) + 0.01;
      const p = this.view.worldPos(gx, gy);
      const glowMat = new THREE.MeshBasicMaterial({ color: style.glow, transparent: true, opacity: style.glowOpacity, side: THREE.DoubleSide });
      const glowMesh = new THREE.Mesh(this.glowGeo, glowMat);
      glowMesh.rotation.x = -Math.PI / 2;
      glowMesh.position.set(p.x, y, p.z);
      this.group.add(glowMesh);
      this.materials.push(glowMat);
      const squareMat = new THREE.MeshBasicMaterial({ color: style.square, transparent: true, opacity: style.squareOpacity, side: THREE.DoubleSide });
      const squareMesh = new THREE.Mesh(this.squareGeo, squareMat);
      squareMesh.rotation.x = -Math.PI / 2;
      squareMesh.position.set(p.x, y + 0.01, p.z);
      squareMesh.userData.gx = gx;
      squareMesh.userData.gy = gy;
      this.group.add(squareMesh);
      this.materials.push(squareMat);
    });
    this.view.pulseMaterials = this.materials;
    this.view.requestRender();
  }
}
