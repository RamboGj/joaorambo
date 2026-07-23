"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "../_data/profile";
import { Monogram } from "./monogram";

/** Fixed header that condenses and picks up a blurred backdrop once scrolled. */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b px-5 transition-[background-color,border-color,padding] duration-400 ease-out sm:px-10 ${
        scrolled
          ? "border-paper/10 bg-ink/70 py-3 backdrop-blur-md"
          : "border-transparent bg-transparent py-[18px]"
      }`}
    >
      <a
        href="#top"
        className="flex items-center gap-3 font-display text-[17px] font-bold tracking-[-0.02em]"
      >
        <Monogram className="size-[34px] rounded-[9px] text-[15px]" />
        {profile.name}
      </a>

      <div className="flex items-center gap-1 sm:gap-2">
        {navLinks.map(({ href, label, hidden }) =>
          hidden ? null : (
            <a
              key={href}
              href={href}
              className="hidden px-3.5 py-2 font-mono text-[12.5px] tracking-[0.02em] text-paper/60 sm:inline"
            >
              {label}
            </a>
          ),
        )}
        <a
          href={`mailto:${profile.email}`}
          // A shallower lift than the page's CTAs — this one is always on
          // screen, so it stays quiet.
          className="rounded-lg bg-lime px-4 py-2.5 font-mono text-[12.5px] font-semibold whitespace-nowrap text-ink transition-[translate,box-shadow,color] duration-300 ease-out-soft hover:-translate-y-px hover:text-ink hover:shadow-[0_10px_22px_-10px_rgba(200,244,95,.5)] active:translate-y-0 active:duration-100"
        >
          Get in touch
        </a>
      </div>
    </nav>
  );
}
