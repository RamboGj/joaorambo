import { Fragment } from "react";
import { marqueeItems } from "../_data/profile";

/**
 * One pass of the ticker. The trailing padding matches the internal gap so the
 * run's total width is uniform — that makes the -50% translate land exactly one
 * copy along, and the loop has no seam.
 */
function Run() {
  return (
    <div className="flex shrink-0 gap-10 pr-10">
      {marqueeItems.map((item) => (
        <Fragment key={item}>
          <span>{item}</span>
          <span className="text-lime">✦</span>
        </Fragment>
      ))}
    </div>
  );
}

/**
 * Endless ticker of tools and domains. Decorative — every name in it also
 * appears in the Stack section, so it is hidden from assistive tech rather
 * than read out twice.
 */
export function Marquee() {
  return (
    <div
      aria-hidden
      className="overflow-hidden border-y border-paper/10 py-[18px] whitespace-nowrap"
    >
      <div className="flex w-max animate-marquee font-display text-xl font-semibold text-paper/35">
        <Run />
        <Run />
      </div>
    </div>
  );
}
