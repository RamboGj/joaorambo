import { profile } from "../_data/profile";
import { sectionShell } from "./styles";

export function SiteFooter() {
  return (
    <footer
      className={`${sectionShell} flex flex-wrap items-center justify-between gap-3 border-t border-paper/10 py-7 font-mono text-xs text-paper/40`}
    >
      <span>© {new Date().getFullYear()} {profile.legalName}</span>
      <span>Built from scratch · TypeScript &amp; Golang guy</span>
    </footer>
  );
}
