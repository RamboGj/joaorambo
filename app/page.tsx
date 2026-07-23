import { Contact } from "./_components/contact";
import { Experience } from "./_components/experience";
import { Hero } from "./_components/hero";
import { Highlights } from "./_components/highlights";
import { Marquee } from "./_components/marquee";
import { Nav } from "./_components/nav";
import { SiteFooter } from "./_components/site-footer";
import { Stack } from "./_components/stack";
import { Stats } from "./_components/stats";

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <Highlights />
        <Experience />
        <Stack />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
