import { stats } from "../_data/profile";
import { Reveal } from "./reveal";
import { sectionShell } from "./styles";

/**
 * Four figures in a hairline grid. The 1px gap over a paper-tinted background
 * draws the dividers, so each cell repaints the ink fill.
 */
export function Stats() {
  return (
    <section className={`${sectionShell} pt-22 pb-10`}>
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-paper/10 bg-paper/10 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ value, label }, i) => (
          <Reveal key={value} delay={i * 80} className="bg-ink px-6 py-8">
            <div className="font-display text-[46px] font-bold tracking-[-0.03em] text-lime">
              {value}
            </div>
            <div className="mt-1.5 text-sm text-paper/60">{label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
