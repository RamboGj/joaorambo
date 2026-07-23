import { Reveal } from "./reveal";

/** Numbered section title — `01 / What I bring`. */
export function SectionHeading({
  index,
  children,
  className = "mb-10",
}: {
  index: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Reveal className={`flex items-baseline gap-4 ${className}`}>
      <span className="font-mono text-[13px] text-lime">{index}</span>
      <h2 className="font-display text-[clamp(30px,3.4vw,44px)] font-bold tracking-[-0.03em]">
        {children}
      </h2>
    </Reveal>
  );
}
