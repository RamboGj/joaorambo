"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

/**
 * Fades and lifts its children into place the first time they scroll into
 * view, then stops observing. Renders as the element itself rather than
 * wrapping it, so it can sit directly in a grid or flex track.
 */
export function Reveal({
  as: Tag = "div",
  delay = 0,
  className,
  children,
  ...rest
}: {
  as?: ElementType;
  /** Stagger, in ms, applied as a transition delay once revealed. */
  delay?: number;
  className?: string;
  children: ReactNode;
} & React.HTMLAttributes<HTMLElement>) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reduced motion needs no special case here — the global stylesheet
    // collapses the transition, so the reveal simply lands instantly.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShown(true);
        io.disconnect();
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      // Hook for the no-JS fallback in the root layout.
      data-reveal=""
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : "translateY(30px)",
        transition:
          "opacity .9s var(--ease-out-expo), transform .9s var(--ease-out-expo)",
        transitionDelay: shown ? `${delay}ms` : undefined,
        willChange: "opacity, transform",
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
