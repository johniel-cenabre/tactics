// Shared geometries and materials for procedural figures. Cuts draw calls and GPU
// memory by reusing caps/spheres/cylinders and pooling MeshStandardMaterials by
// color + surface type instead of cloning one material per mesh.

import * as THREE from 'three';

const GEO = new Map();
const MAT = new Map();

export function sharedGeo(key, factory) {
  if (!GEO.has(key)) GEO.set(key, factory());
  return GEO.get(key);
}

/** Pool PBR materials; bumpMap is attached once per instance when provided. */
export function sharedMat(key, factory) {
  if (!MAT.has(key)) MAT.set(key, factory());
  return MAT.get(key);
}

export function attachBump(mat, bumpMap, scale) {
  if (!bumpMap || !mat) return mat;
  mat.bumpMap = bumpMap;
  mat.bumpScale = scale;
  if ('envMapIntensity' in mat) mat.envMapIntensity = 0.85;
  return mat;
}

export function matKey(kind, colorHex, roughness = 0.5, metalness = 0.2) {
  const r = (roughness * 10) | 0;
  const m = (metalness * 10) | 0;
  return `${kind}:${colorHex}:${r}:${m}`;
}

export function bodyMat(kind, color, bumpMap, { roughness = 0.5, metalness = 0.2, bumpScale = 0.1 } = {}) {
  const hex = color instanceof THREE.Color ? color.getHex() : color;
  const key = matKey(kind, hex, roughness, metalness);
  const mat = sharedMat(key, () => new THREE.MeshStandardMaterial({
    color: hex,
    metalness,
    roughness,
  }));
  return attachBump(mat, bumpMap, bumpScale);
}

// --- global decal materials (identical on every unit) ---
export const EYE_WHITE = sharedMat('eyeWhite', () => new THREE.MeshBasicMaterial({ color: 0xf7f5fb }));
export const PUPIL = sharedMat('pupil', () => new THREE.MeshBasicMaterial({ color: 0x141019 }));
export const SHINE = sharedMat('shine', () => new THREE.MeshBasicMaterial({ color: 0xffffff }));
export const LINER = sharedMat('liner', () => new THREE.MeshBasicMaterial({ color: 0x241820 }));
export const LIP = sharedMat('lip', () => new THREE.MeshBasicMaterial({ color: 0xcf6a80 }));
export const CHEEK = sharedMat('cheek', () => new THREE.MeshBasicMaterial({ color: 0xff9bab, transparent: true, opacity: 0.42 }));
export const MOUTH = sharedMat('mouth', () => new THREE.MeshBasicMaterial({ color: 0x5a3a30 }));

// Lower segment counts than the original figure — fine at tactics zoom.
export const CAP_SEG = 3;
export const RAD_SEG = 6;
export const HEAD_SEG = 10;
export const HEAD_RINGS = 8;
export const LATHE_SEG = 10;
export const CYL_SEG = 10;

export function isPooledGeometry(geo) {
  for (const g of GEO.values()) if (g === geo) return true;
  return false;
}

export function isPooledMaterial(mat) {
  for (const m of MAT.values()) if (m === mat) return true;
  return mat === EYE_WHITE || mat === PUPIL || mat === SHINE || mat === LINER
    || mat === LIP || mat === CHEEK || mat === MOUTH;
}
