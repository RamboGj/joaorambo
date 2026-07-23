import Image from "next/image";
import { profile } from "../_data/profile";
import { HeroSceneLazy } from "./hero-scene-lazy";
import { Parallax } from "./parallax";
import { Reveal } from "./reveal";
import { ghostCta, solidCta } from "./styles";

/** Shared sizing for the hero's row of actions. */
const ctaSize = "rounded-[10px] px-[22px] py-3.5 text-[13.5px]";

export function Hero() {
  return (
    <header
      id="top"
      className="relative flex min-h-screen items-center px-5 pt-30 pb-20 sm:px-10"
    >
      <div className="hero-grid pointer-events-none absolute inset-0 animate-grid-pan" />

      <div className="relative mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <Reveal className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-paper/15 px-[15px] py-[7px] font-mono text-[12.5px] text-paper/60">
            <span className="size-2 animate-blink rounded-full bg-lime" />
            {profile.availability}
          </Reveal>

          <Reveal
            as="h1"
            delay={60}
            className="mb-6 font-display text-[clamp(52px,7.2vw,104px)] leading-[.94] font-bold tracking-[-0.035em]"
          >
            João
            <br />
            Rambo<span className="text-lime">.</span>
          </Reveal>

          <Reveal
            as="p"
            delay={120}
            className="mb-[34px] max-w-[520px] text-[clamp(18px,1.5vw,22px)] leading-[1.5] font-medium text-paper/72"
          >
            Fullstack Software Engineer shipping and scaling products across{" "}
            <span className="text-paper">fintech</span>,{" "}
            <span className="text-paper">Web3</span> and{" "}
            <span className="text-paper">AI</span>{" "}
            — from architecture to production. 5+ years owning systems end to
            end, with a 0→1 founder&apos;s bias for shipping.
          </Reveal>

          <Reveal delay={180} className="flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className={`${solidCta} ${ctaSize}`}
            >
              Email me
              <span className="text-[15px]">↗</span>
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
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2.5 rounded-[10px] px-3 py-3.5 font-mono text-[13.5px] font-medium text-paper/70 transition-colors duration-300 ease-out-soft hover:text-lime"
            >
              Résumé ↓
            </a>
          </Reveal>
        </div>

        <Parallax
          speed={-0.08}
          className="relative flex h-[min(560px,66vh)] py-32 items-center justify-center"
        >
          <HeroSceneLazy />

          <Reveal
            delay={220}
            className="relative z-[2] aspect-3/4 w-[min(300px,60%)] animate-float overflow-hidden rounded-[22px] border border-paper/15 bg-paper/5 shadow-[0_40px_80px_-30px_rgba(0,0,0,.8)]"
          >
            <Image
              src={profile.portrait}
              alt={`${profile.name}, ${profile.role}`}
              fill
              priority
              sizes="(max-width: 1024px) 60vw, 300px"
              className="object-cover"
            />
          </Reveal>

          <Parallax
            speed={-0.18}
            className="absolute bottom-[6%] left-[2%] z-[2] flex flex-col gap-0.5 rounded-[10px] border border-paper/10 bg-ink/75 px-[13px] py-2.5 font-mono text-[11px] text-paper/62 backdrop-blur-lg"
          >
            <span className="text-lime">{"// based in"}</span>
            {profile.location}
          </Parallax>
        </Parallax>
      </div>

      <a
        href="#stack"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 font-mono text-[11px] tracking-[0.15em] text-paper/55 uppercase"
      >
        scroll ↓
      </a>
    </header>
  );
}
