"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const LIME = 0xc8f45f;
const PAPER = 0xf4f2ec;
/** Ambient motes drifting around the solid. */
const SCATTER_COUNT = 90;

/**
 * Wireframe icosahedron behind the portrait, with a vertex point cloud and a
 * loose halo of motes. Rotates on its own and leans toward the cursor.
 *
 * Sized from its parent element, so the parent needs its own dimensions.
 */
export function HeroScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = parent.clientWidth;
    let height = parent.clientHeight;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height, false);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.z = 4.2;

    const group = new THREE.Group();
    scene.add(group);

    const solid = new THREE.IcosahedronGeometry(2.1, 1);

    const wireGeometry = new THREE.WireframeGeometry(solid);
    const wireMaterial = new THREE.LineBasicMaterial({
      color: LIME,
      transparent: true,
      opacity: 0.55,
    });
    group.add(new THREE.LineSegments(wireGeometry, wireMaterial));

    const vertexMaterial = new THREE.PointsMaterial({
      color: PAPER,
      size: 0.055,
      transparent: true,
      opacity: 0.9,
    });
    group.add(new THREE.Points(solid, vertexMaterial));

    // Motes on a spherical shell just outside the solid.
    const positions = new Float32Array(SCATTER_COUNT * 3);
    for (let i = 0; i < SCATTER_COUNT; i++) {
      const radius = 2.7 + Math.random() * 1.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    const scatterGeometry = new THREE.BufferGeometry();
    scatterGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3),
    );
    const scatterMaterial = new THREE.PointsMaterial({
      color: LIME,
      size: 0.03,
      transparent: true,
      opacity: 0.5,
    });
    const scatter = new THREE.Points(scatterGeometry, scatterMaterial);
    scene.add(scatter);

    // Cursor lean, eased toward the pointer rather than snapped to it.
    let leanX = 0;
    let leanY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event: MouseEvent) => {
      targetX = (event.clientX / window.innerWidth - 0.5) * 2;
      targetY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    const onResize = () => {
      width = parent.clientWidth;
      height = parent.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    window.addEventListener("resize", onResize);
    if (!reduced) window.addEventListener("mousemove", onMouseMove, { passive: true });

    const start = performance.now();
    let frame = 0;
    let running = false;
    let onScreen = true;

    const tick = () => {
      const t = (performance.now() - start) / 1000;
      leanX += (targetX - leanX) * 0.05;
      leanY += (targetY - leanY) * 0.05;

      group.rotation.y = t * 0.18 + leanX * 0.5;
      group.rotation.x = Math.sin(t * 0.15) * 0.25 + leanY * 0.4;
      scatter.rotation.y = -t * 0.06;
      scatter.rotation.x = t * 0.03;

      renderer.render(scene, camera);
      frame = requestAnimationFrame(tick);
    };

    // Only animate while the hero is on-screen and the tab is visible. Once
    // scrolled past the fold, an always-on 60fps loop would keep burning mobile
    // CPU and battery to render pixels no one can see.
    const play = () => {
      if (running || reduced) return;
      running = true;
      frame = requestAnimationFrame(tick);
    };
    const pause = () => {
      if (!running) return;
      running = false;
      cancelAnimationFrame(frame);
    };
    const sync = () => (onScreen && !document.hidden ? play() : pause());

    const observer = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      sync();
    });
    observer.observe(parent);
    document.addEventListener("visibilitychange", sync);

    // Paint one frame up front so the scene is there before the first tick,
    // then let visibility drive the loop (reduced-motion stops at this frame).
    renderer.render(scene, camera);
    sync();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      solid.dispose();
      wireGeometry.dispose();
      wireMaterial.dispose();
      vertexMaterial.dispose();
      scatterGeometry.dispose();
      scatterMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[1] size-full"
    />
  );
}
