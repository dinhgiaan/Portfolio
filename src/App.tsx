import { Analytics } from "@vercel/analytics/react";
import { CyberpunkBackground } from "./components/background/background";
import { CursorGlow } from "./components/common/cursor-glow";
import Header from "./components/common/header";
import ContactSection from "./components/sections/contact";
import HeroSection from "./components/sections/hero";
import ProjectSection from "./components/sections/project";
import SkillsSection from "./components/sections/skills";
import ScrollIndicator from "./components/scroll.indicator";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#050a0e]">
      {/* Cyberpunk background với particles */}
      <CyberpunkBackground />

      {/* Custom cursor glow */}
      <CursorGlow />

      {/* Header */}
      <section className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </section>

      {/* Scroll progress indicator */}
      <ScrollIndicator />

      {/* Main content */}
      <div className="px-4 md:px-24 lg:px-40 pt-20">
        <section id="hero-section" className="pt-7 mb-32">
          <HeroSection />
        </section>

        <section id="skills-section" className="mb-32">
          <SkillsSection />
        </section>

        <section id="projects-section" className="mb-32">
          <ProjectSection />
        </section>

        <section id="contact-section" className="mb-32">
          <ContactSection />
        </section>
      </div>

      <Analytics />
    </div>
  );
};

export default App;
