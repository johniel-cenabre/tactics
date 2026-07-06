// Camera controller: owns the orbit target and all pan / rotate / zoom / follow /
// center-on-unit math. Pure presentation — it never touches game rules. The input
// controller calls these methods on drag; the render layer's move animation calls
// follow() each frame while a unit walks.

import * as THREE from 'three';

const INITIAL_ZOOM = 17;
const CAMERA_FOLLOW_LERP = 0.003;
const CAMERA_TWEEN_MS = 400;
const CENTER_SKIP_DIST_SQ = 1.8 * 1.8;
const ZOOM_MIN = 1;
const ZOOM_MAX = 40;
const ELEVATION_MIN = -Math.PI * 0.4;
const ELEVATION_MAX = Math.PI * 0.4;
const ROTATE_SENSITIVITY = 0.004;

export class CameraController {
  constructor(view, tween) {
    this.view = view;
    this.tween = tween;
    this.camera = view.camera;
    this.target = new THREE.Vector3();
    this.offset = new THREE.Vector3(12, 38, 16).normalize().multiplyScalar(INITIAL_ZOOM);
    this.followEnabled = true;
    this._cameraTween = null;
    this._zoomDir = new THREE.Vector3();
    this._orbitOffset = new THREE.Vector3();
    this._panPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    this._panHit = new THREE.Vector3();
    this._panPrev = new THREE.Vector3();
    this._raycaster = new THREE.Raycaster();
    this._endTarget = new THREE.Vector3();
    this._endPosition = new THREE.Vector3();
    this._camScratch = new THREE.Vector3();
    this._startTarget = new THREE.Vector3();
    this._startPosition = new THREE.Vector3();
    this._lastCenterKey = null;

    // Initial framing on the board center.
    const w = view.world;
    this.target.copy(view.worldPos((w.w / 2) | 0, (w.h / 2) | 0));
    this.camera.position.copy(this.target).add(this.offset);
    this.camera.lookAt(this.target);
  }

  disableFollow() {
    this.followEnabled = false;
  }

  _setCameraActive(active) {
    this.view.setPresentationActive({ camera: active, tweens: this.tween.active });
  }

  _cancelCameraTween() {
    if (this._cameraTween) {
      this._cameraTween.cancel();
      this._cameraTween = null;
    }
    this._setCameraActive(false);
  }

  _orbitDir(out) {
    out.copy(this.camera.position).sub(this.target);
    if (out.lengthSq() < 0.01) out.copy(this.offset);
    return out.normalize();
  }

  zoom(deltaY, sensitivity = 0.005) {
    const dist = this.camera.position.distanceTo(this.target);
    const newDist = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, dist + deltaY * sensitivity));
    this._orbitDir(this._zoomDir);
    this.camera.position.copy(this.target).add(this._zoomDir.multiplyScalar(newDist));
    this.camera.lookAt(this.target);
    this.view.requestRender();
  }

  rotate(dxPixels, dyPixels) {
    this._orbitOffset.copy(this.camera.position).sub(this.target);
    const r = this._orbitOffset.length();
    if (r < 0.001) return;
    let azimuth = Math.atan2(this._orbitOffset.x, this._orbitOffset.z);
    let elevation = Math.asin(Math.max(-1, Math.min(1, this._orbitOffset.y / r)));
    azimuth -= dxPixels * ROTATE_SENSITIVITY;
    elevation += dyPixels * ROTATE_SENSITIVITY;
    elevation = Math.max(ELEVATION_MIN, Math.min(ELEVATION_MAX, elevation));
    this._orbitOffset.x = r * Math.cos(elevation) * Math.sin(azimuth);
    this._orbitOffset.y = r * Math.sin(elevation);
    this._orbitOffset.z = r * Math.cos(elevation) * Math.cos(azimuth);
    this.camera.position.copy(this.target).add(this._orbitOffset);
    this.camera.lookAt(this.target);
    this.view.requestRender();
  }

  /** Pan by dragging the ground plane from one NDC point to another. */
  panFromNdc(prevNdc, currNdc, sensitivity = 1) {
    this._panPlane.setFromNormalAndCoplanarPoint(new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, this.target.y, 0));
    this._raycaster.setFromCamera(new THREE.Vector2(prevNdc.x, prevNdc.y), this.camera);
    this._raycaster.ray.intersectPlane(this._panPlane, this._panPrev);
    this._raycaster.setFromCamera(new THREE.Vector2(currNdc.x, currNdc.y), this.camera);
    this._raycaster.ray.intersectPlane(this._panPlane, this._panHit);
    const delta = this._panPrev.sub(this._panHit).multiplyScalar(sensitivity);
    this.target.add(delta);
    this.camera.position.add(delta);
    this.camera.lookAt(this.target);
    this.view.requestRender();
  }

  /** Called each move-animation frame to keep the walking unit framed. */
  follow(meshPosition) {
    if (!this.followEnabled) return;
    let dist = this.camera.position.distanceTo(this.target);
    if (dist < 0.1) dist = INITIAL_ZOOM;
    this._orbitDir(this._zoomDir);
    this.target.lerp(meshPosition, CAMERA_FOLLOW_LERP);
    this._camScratch.copy(this._zoomDir).multiplyScalar(dist);
    this.camera.position.copy(this.target).add(this._camScratch);
    this.camera.lookAt(this.target);
  }

  centerOn(gx, gy, instant = false) {
    const centerKey = `${gx},${gy}`;
    this.view.worldPos(gx, gy, this._endTarget);
    const distSq = this.target.distanceToSquared(this._endTarget);
    if (distSq < CENTER_SKIP_DIST_SQ && this._lastCenterKey === centerKey && !this._cameraTween) {
      return;
    }
    this._lastCenterKey = centerKey;
    this.followEnabled = true;

    let zoomDist = this.camera.position.distanceTo(this.target);
    if (zoomDist < 0.1) zoomDist = INITIAL_ZOOM;
    this._orbitDir(this._zoomDir);
    this._endPosition.copy(this._endTarget).add(this._camScratch.copy(this._zoomDir).multiplyScalar(zoomDist));

    if (instant) {
      this._cancelCameraTween();
      this.target.copy(this._endTarget);
      this.camera.position.copy(this._endPosition);
      this.camera.lookAt(this.target);
      this.view.markDirty();
      return;
    }

    this._cancelCameraTween();
    this._startTarget.copy(this.target);
    this._startPosition.copy(this.camera.position);
    this._setCameraActive(true);
    this.view.requestRender();

    this._cameraTween = this.tween.add({
      duration: CAMERA_TWEEN_MS,
      ease: (t) => t * (2 - t),
      onUpdate: (eased) => {
        this.target.lerpVectors(this._startTarget, this._endTarget, eased);
        this.camera.position.lerpVectors(this._startPosition, this._endPosition, eased);
        this.camera.lookAt(this.target);
        this.view.markDirty();
      },
      onComplete: () => {
        this._cameraTween = null;
        this._setCameraActive(false);
        this.view.markDirty();
      },
    });
  }
}
