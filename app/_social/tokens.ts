import { readFile } from "node:fs/promises";
import { join } from "node:path";

/** Palette shared by every generated social image. */
export const color = {
  ink: "#0a0a0a",
  paper: "#f4f2ec",
  lime: "#c8f45f",
  /** Paper at reduced opacity, for secondary and tertiary copy. */
  paper70: "rgba(244,242,236,.7)",
  paper68: "rgba(244,242,236,.68)",
  paper60: "rgba(244,242,236,.6)",
  paper55: "rgba(244,242,236,.55)",
  paper50: "rgba(244,242,236,.5)",
  hairline: "rgba(244,242,236,.16)",
} as const;

export const font = {
  display: "Space Grotesk",
  body: "Manrope",
  mono: "JetBrains Mono",
} as const;

/** Identity copy, kept in one place so both images stay in step. */
export const profile = {
  initials: "JR",
  name: "João Rambo",
  email: "jpramboguanabarar@gmail.com",
  github: "github.com/RamboGj",
} as const;

type BackdropSpec = {
  width: number;
  height: number;
  /** Radial mask over the grid, as fractions of the canvas — mirrors the
   * design's `radial-gradient(ellipse RX% RY% at CX% CY%, #000, transparent STOP%)`. */
  mask: { rx: number; ry: number; cx: number; cy: number; stop: number };
  /** Lime bloom: `size`-square box offset from the top-left corner. */
  glow: { x: number; y: number; size: number; alpha: number };
};

/**
 * Builds the full backdrop — flat fill, 60px lime graph-paper grid, its radial
 * falloff, and the corner bloom — as an SVG data URI.
 *
 * Satori cannot do this with CSS: it neither tiles gradient backgrounds (a
 * `background-size` grid renders as flat colour) nor supports `mask-image`.
 * An `<img>` is handed to the SVG rasterizer instead, which supports patterns
 * and masks natively, so the grid and its falloff match the design exactly.
 */
export function backdrop({ width, height, mask, glow }: BackdropSpec) {
  const rx = mask.rx * width;
  const ry = mask.ry * height;
  const cx = mask.cx * width;
  const cy = mask.cy * height;
  // The mask is a circle of radius rx squashed vertically about its centre.
  const squash = `translate(${cx} ${cy}) scale(1 ${ry / rx}) translate(${-cx} ${-cy})`;
  const gr = glow.size / 2;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">\
<defs>\
<pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">\
<path d="M0 0H60M0 0V60" stroke="${color.lime}" stroke-opacity=".06" stroke-width="1"/>\
</pattern>\
<radialGradient id="falloff" gradientUnits="userSpaceOnUse" cx="${cx}" cy="${cy}" r="${rx}" gradientTransform="${squash}">\
<stop offset="0" stop-color="#fff" stop-opacity="1"/>\
<stop offset="${mask.stop}" stop-color="#fff" stop-opacity="0"/>\
</radialGradient>\
<mask id="fade"><rect width="${width}" height="${height}" fill="url(#falloff)"/></mask>\
<radialGradient id="bloom">\
<stop offset="0" stop-color="${color.lime}" stop-opacity="${glow.alpha}"/>\
<stop offset=".65" stop-color="${color.lime}" stop-opacity="0"/>\
</radialGradient>\
</defs>\
<rect width="${width}" height="${height}" fill="${color.ink}"/>\
<rect width="${width}" height="${height}" fill="url(#grid)" mask="url(#fade)"/>\
<circle cx="${glow.x + gr}" cy="${glow.y + gr}" r="${gr}" fill="url(#bloom)"/>\
</svg>`;

  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}

const FONT_FILES = [
  ["SpaceGrotesk-Bold.ttf", font.display, 700],
  ["Manrope-Medium.ttf", font.body, 500],
  ["Manrope-SemiBold.ttf", font.body, 600],
  ["JetBrainsMono-Regular.ttf", font.mono, 400],
  ["JetBrainsMono-SemiBold.ttf", font.mono, 600],
] as const;

type FontFile = (typeof FONT_FILES)[number];

async function read(files: readonly FontFile[]) {
  return Promise.all(
    files.map(async ([file, name, weight]) => ({
      name,
      data: await readFile(join(process.cwd(), "assets/fonts", file)),
      weight,
      style: "normal" as const,
    })),
  );
}

/**
 * Reads the subsetted TTFs from `assets/fonts`. They are cut down to the
 * glyphs these images actually use to stay well inside the 500KB
 * `ImageResponse` bundle budget.
 */
export async function loadFonts() {
  return read(FONT_FILES);
}

/**
 * Just the display face — all the icons need, and a fifth of the bytes of
 * loading the whole set for two glyphs.
 */
export async function loadDisplayFont() {
  return read(FONT_FILES.filter(([, name]) => name === font.display));
}
