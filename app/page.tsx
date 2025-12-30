import { Hero } from "@/components/sections/hero/hero";
import { About } from "@/components/sections/about/about";
import { Experience } from "@/components/sections/experience/experience";
import { OpenSource } from "@/components/sections/open-source/open-source";
import { Skills } from "@/components/sections/skills/skills";
import { Metrics } from "@/components/sections/metrics/metrics";
import { Contact } from "@/components/sections/contact/contact";
import { FloatingNav } from "@/components/floating-nav";
import { AnimatedBackground } from "@/components/animated-background";

export default function Page() {
  return (
    <>
      <AnimatedBackground />
      <FloatingNav />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <OpenSource />
        <Metrics />
        <Contact />
      </main>
    </>
  );
}
