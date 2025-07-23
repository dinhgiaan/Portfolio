import { SubtleGridBackground } from "./components/background/background"
import Header from "./components/common/header"
import ContactSection from "./components/sections/contact"
import HeroSection from "./components/sections/hero"
import ProjectSection from "./components/sections/project"
import SkillsSection from "./components/sections/skills"

const App = () => {

  return (
    <div className="min-h-screen flex flex-col">
      <SubtleGridBackground />

      <section className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
        <Header />
      </section>

      <div className="px-4 md:px-40 pt-20">

        {/* Hero Section */}
        <section id="hero-section" className="pt-7 mb-44">
          <HeroSection />
        </section>

        {/*  Skills section */}
        <section id="skills-section" className="mb-44">
          <SkillsSection />
        </section>

        {/* Projects section */}
        <section id="projects-section" className="mb-44">
          <ProjectSection />
        </section>

        {/* Contact section */}
        <section id="contact-section" className="mb-44">
          <ContactSection />
        </section>
      </div>
    </div>
  )
}

export default App
