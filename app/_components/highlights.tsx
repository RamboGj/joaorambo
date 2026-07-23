import type { ReactNode } from "react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { card, cardWash, sectionShell } from "./styles";

type Highlight = {
  kicker: string;
  title: string;
  body: ReactNode;
  /** Alternating cards carry a lime wash. */
  washed?: boolean;
};

const highlights: Highlight[] = [
  {
    kicker: "/ fintech depth",
    title: "Financial systems, wired end to end",
    body: "At Haven, integrated QuickBooks, Gusto, Plaid and Treasury Prime to power accounting & payroll — event-driven, scheduled, and observable in production.",
    washed: true,
  },
  {
    kicker: "/ fullstack + infra",
    title: "Frontend to cloud, no handoffs",
    body: "TypeScript & Rust across the stack; GCP (Cloud Run, Pub/Sub, Cloud SQL) provisioned as code with Terraform. I own the whole path from UI to infra.",
  },
  {
    kicker: "/ 0→1 founder",
    title: "Builder mindset, product sense",
    body: (
      <>
        Co-founded{" "}
        <a
          href="https://aitr.tech/"
          target="_blank"
          rel="noopener"
          className="border-b border-lime/40 text-lime transition-[color,border-color] duration-300 ease-out-soft hover:border-lime hover:text-lime"
        >
          AITR
        </a>{" "}
        (as CPO) and Stocks IR — from concept to production, including an
        official B3 contract and a Play Store launch.
      </>
    ),
  },
  {
    kicker: "/ ai-native",
    title: "Spec-driven, agent-accelerated",
    body: "Practice spec-driven development with Claude Code and custom Claude Skills to ramp fast across unfamiliar stacks and accelerate delivery.",
    washed: true,
  },
];

export function Highlights() {
  return (
    <section className={`${sectionShell} pt-14 pb-10`}>
      <SectionHeading index="01">What I bring</SectionHeading>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {highlights.map(({ kicker, title, body, washed }, i) => (
          <Reveal key={kicker} delay={(i % 2) * 80}>
            <article className={`${card} ${washed ? cardWash : ""} px-8 py-[34px]`}>
              <div className="mb-4 font-mono text-xs text-lime">{kicker}</div>
              <h3 className="mb-3 font-display text-[22px] font-semibold tracking-[-0.02em]">
                {title}
              </h3>
              <p className="text-[15.5px] leading-[1.6] text-paper/66">{body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
