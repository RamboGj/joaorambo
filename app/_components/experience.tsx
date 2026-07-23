import { roles } from "../_data/profile";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { sectionShell } from "./styles";

export function Experience() {
  return (
    <section id="work" className={`${sectionShell} pt-16 pb-10`}>
      <SectionHeading index="02" className="mb-12">
        Experience
      </SectionHeading>

      {roles.map((role) => (
        <Reveal key={`${role.company}-${role.dates}`}>
          <article className="grid grid-cols-1 gap-4 border-t border-paper/12 py-[30px] transition-[translate,border-color] duration-450 ease-out-expo hover:translate-x-2 hover:border-lime/40 sm:grid-cols-[200px_1fr] sm:gap-9">
            <div>
              <div className="font-mono text-xs text-paper/55">{role.dates}</div>
              <div className="mt-[5px] font-mono text-[11.5px] text-paper/50">
                {role.location}
              </div>
            </div>

            <div>
              <div className="mb-2 flex flex-wrap items-baseline gap-2.5">
                <h3 className="font-display text-[21px] font-semibold tracking-[-0.02em]">
                  {role.title}
                </h3>
                <span className="font-mono text-[13px] text-lime">
                  @ {role.company}
                </span>
                {role.link && (
                  <a
                    href={role.link}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-1.5 rounded-full border border-paper/16 px-[11px] py-[3px] font-mono text-[11.5px] text-paper/55 transition-[color,border-color,background-color] duration-300 ease-out-soft hover:border-lime hover:bg-lime hover:text-ink"
                  >
                    {role.linkLabel} ↗
                  </a>
                )}
              </div>

              <p className="mb-3.5 max-w-[720px] text-[15px] leading-[1.6] text-paper/60">
                {role.blurb}
              </p>

              <ul className="flex flex-wrap gap-2">
                {role.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md border border-paper/14 px-[9px] py-1 font-mono text-[11.5px] text-paper/62"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </Reveal>
      ))}

      <div className="border-t border-paper/12" />
    </section>
  );
}
