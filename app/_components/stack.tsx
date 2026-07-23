import { stack } from "../_data/profile";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { card, sectionShell } from "./styles";

export function Stack() {
  return (
    <section id="stack" className={`${sectionShell} pt-16 pb-10`}>
      <SectionHeading index="03">Stack</SectionHeading>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stack.map((group) => (
          <Reveal key={group.label}>
            <div className={`${card} rounded-2xl px-6 py-[26px]`}>
              <div className="mb-4 font-mono text-xs text-lime">{group.label}</div>
              <ul className="flex flex-wrap gap-[7px]">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-[7px] bg-paper/6 px-[11px] py-1.5 text-[13.5px] font-medium text-paper/80"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
