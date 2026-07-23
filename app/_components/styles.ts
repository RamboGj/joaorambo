/**
 * Class strings shared across sections, so the hero and contact CTAs can't
 * drift apart.
 *
 * Every interactive surface transitions on a decelerating curve rather than
 * `ease`, and settles back on the same curve — hovering off feels like the
 * mirror of hovering on. Sizing (padding, radius, type scale) stays with the
 * caller; only appearance and motion live here.
 */

/** Shared page gutter and max width. */
export const sectionShell = "mx-auto w-full max-w-[1280px] px-5 sm:px-10";

/**
 * Note `translate` rather than `transform`: Tailwind v4 emits `translate-*`
 * onto the standalone `translate` property, so transitioning `transform`
 * leaves the lift untweened and it snaps.
 */
const ctaBase =
  "inline-flex items-center font-mono transition-[translate,box-shadow,border-color,background-color,color] duration-300 ease-out-soft";

/** Lime primary action. Lifts into a soft glow, presses back down on click. */
export const solidCta = `${ctaBase} gap-2.5 bg-lime font-semibold text-ink hover:-translate-y-[3px] hover:text-ink hover:shadow-[0_16px_34px_-12px_rgba(200,244,95,.55)] active:translate-y-0 active:duration-100`;

/** Outlined secondary action. Picks up a lime edge and a faint wash. */
export const ghostCta = `${ctaBase} gap-2.5 border border-paper/20 font-medium text-paper hover:-translate-y-px hover:border-lime/50 hover:bg-lime/[.06] active:translate-y-0 active:duration-100`;

/**
 * Card chrome. Slower than the buttons — a bigger surface needs a longer
 * settle to avoid looking twitchy — with a shadow that grows alongside the
 * lift so the card reads as rising rather than sliding.
 */
export const card =
  "h-full rounded-[18px] border border-paper/12 transition-[translate,border-color,box-shadow] duration-450 ease-out-expo hover:-translate-y-1.5 hover:border-lime/40 hover:shadow-[0_24px_50px_-24px_rgba(200,244,95,.22)]";

/** Lime wash used on alternating highlight cards. */
export const cardWash =
  "bg-[linear-gradient(160deg,rgba(200,244,95,.06),transparent_60%)]";
