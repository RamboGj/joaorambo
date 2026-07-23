import { profile } from "../_data/profile";
import { Reveal } from "./reveal";
import { ghostCta, sectionShell, solidCta } from "./styles";

/** Shared sizing for the closing row of actions — larger than the hero's. */
const ctaSize = "rounded-[11px] px-[26px] py-4 text-sm";

export function Contact() {
  return (
    <section id="contact" className={`${sectionShell} mt-16 pt-25 pb-30 text-center`}>
      <Reveal className="mb-[22px] font-mono text-[13px] text-lime">
        04 / let&apos;s talk
      </Reveal>

      <Reveal
        as="h2"
        delay={60}
        className="mx-auto mb-7 max-w-[900px] font-display text-[clamp(40px,6.5vw,88px)] leading-[.98] font-bold tracking-[-0.035em]"
      >
        Looking for someone who ships<span className="text-lime">?</span>
      </Reveal>

      <Reveal
        as="p"
        delay={120}
        className="mx-auto mb-10 max-w-[560px] text-lg leading-[1.6] text-paper/65"
      >
        Open to Senior roles — Frontend, Fullstack or Backend. Remote-first.
        Let&apos;s talk about what you&apos;re building.
      </Reveal>

      <Reveal delay={180} className="flex flex-wrap justify-center gap-3">
        <a
          href={`mailto:${profile.email}`}
          className={`${solidCta} ${ctaSize}`}
        >
          {profile.email} ↗
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener"
          className={`${ghostCta} ${ctaSize}`}
        >
          GitHub
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener"
          className={`${ghostCta} ${ctaSize}`}
        >
          LinkedIn
        </a>
      </Reveal>
    </section>
  );
}
