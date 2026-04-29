import { Analytics } from "@vercel/analytics/react";
import Header from "./components/common/header";
import HeroSection from "./components/sections/hero";
import SkillsSection from "./components/sections/skills";
import ProjectSection from "./components/sections/project";
import ContactSection from "./components/sections/contact";
import { LuxuryCursor } from "./components/common/cursor";

const App = () => (
  <div
    className="grain"
    style={{ minHeight: "100vh", background: "var(--bg-primary)" }}>
    {/* Custom cursor */}
    <LuxuryCursor />

    {/* Fixed header */}
    <Header />

    {/* Main content */}
    <main>
      <HeroSection />

      <SkillsSection />

      <ProjectSection />

      <ContactSection />
    </main>

    <Analytics />
  </div>
);

export default App;
