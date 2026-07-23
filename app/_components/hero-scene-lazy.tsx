"use client";

import dynamic from "next/dynamic";

/**
 * Splits three.js out of the initial bundle — the scene is decoration, so it
 * loads after the page is interactive and never renders on the server.
 */
const HeroScene = dynamic(
  () => import("./hero-scene").then((m) => m.HeroScene),
  { ssr: false },
);

export function HeroSceneLazy() {
  return <HeroScene />;
}
