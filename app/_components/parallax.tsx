"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Drifts its children against the scroll position. `speed` is a multiple of
 * scrollY — negative values rise as the page moves down. Writes the transform
 * straight to the node inside a rAF rather than through state, so scrolling
 * never queues a React render.
 */
export function Parallax({
  speed,
  className,
  children,
}: {
  speed: number;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;

    const apply = () => {
      el.style.transform = `translate3d(0, ${(window.scrollY * speed).toFixed(1)}px, 0)`;
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(apply);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    apply();

    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
