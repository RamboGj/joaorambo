import { profile } from "../_data/profile";

/** Lime `JR` tile. Size, radius and type scale come from the caller. */
export function Monogram({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`inline-flex shrink-0 items-center justify-center bg-lime font-display font-bold text-ink ${className}`}
    >
      {profile.initials}
    </span>
  );
}
