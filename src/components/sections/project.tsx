import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, Youtube } from "lucide-react";
import ScrollInView from "../scroll.inview";
import ProjectImage from "../ui/project.img";

const PROJECTS = [
  {
    num: "01",
    title: "NovelNest",
    subtitle: "Online Book Reading Platform",
    desc: "A full-stack EPUB reader with JWT auth, role-based access, PayOS payment gateway, and 95+ Lighthouse score in production.",
    image: "/assets/novelnest-homepage.webp",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "SWR",
      "PayOS",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    links: {
      live: "https://www.novelnest.tech",
      video: undefined as string | undefined,
      github: [
        {
          label: "Client",
          url: "https://github.com/dinhgiaan/NovelNest-Frontend",
        },
        {
          label: "Server",
          url: "https://github.com/dinhgiaan/NovelNest-Backend",
        },
      ],
    },
    tag: "Personal Project",
  },
  {
    num: "02",
    title: "CodeGuru",
    subtitle: "Coding Video Course Platform",
    desc: "Team-led LMS platform with video streaming, Stripe payments, progress tracking, and certificate generation. Built in 2 months with a 3-person team.",
    image: "/assets/codeguru-homepage.webp",
    tech: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Stripe",
      "Express.js",
      "MongoDB",
      "Redis",
    ],
    links: {
      live: undefined as string | undefined,
      video: "https://youtu.be/F69pqAsAizY",
      github: [
        { label: "Client", url: "https://github.com/dinhgiaan/CodeGuru-FE" },
        { label: "Server", url: "https://github.com/dinhgiaan/CodeGuru-BE" },
      ],
    },
    tag: "Team Lead",
  },
];

const ProjectSection = () => (
  <section id="projects-section" style={{ padding: "6rem 0" }}>
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
      {/* Header */}
      <ScrollInView direction="up" delay={0}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginBottom: "3rem",
          }}>
          <span className="section-label">03 — Work</span>
          <span className="gold-line" style={{ flex: 1 }} />
        </div>
      </ScrollInView>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: "1rem",
          marginBottom: "4rem",
        }}>
        <ScrollInView direction="up" delay={0.08}>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", lineHeight: 1.1 }}>
            Selected
            <br />
            <span style={{ fontStyle: "italic", color: "var(--accent)" }}>
              projects.
            </span>
          </h2>
        </ScrollInView>
        <ScrollInView direction="up" delay={0.14}>
          <a
            href="https://github.com/dinhgiaan?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              fontSize: "0.7rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              textDecoration: "none",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
              borderBottom: "1px solid var(--border-strong)",
              paddingBottom: "2px",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--accent)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-muted)")
            }>
            All repositories <ArrowUpRight size={12} />
          </a>
        </ScrollInView>
      </div>

      {/* Project list */}
      <div>
        {PROJECTS.map((p) => (
          <motion.article
            key={p.num}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="project-article">
            {/* Image */}
            <div
              className="project-img-wrap"
              onClick={() => {
                const href = p.links.live || p.links.video;
                if (href) window.open(href, "_blank");
              }}>
              <ProjectImage src={p.image} alt={p.title} />

              {/* Overlay — hiện qua CSS :hover trên parent */}
              <div className="project-overlay">
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "var(--accent)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.15em",
                    fontWeight: 500,
                    textTransform: "uppercase",
                  }}>
                  {p.links.live ? (
                    <>
                      <ExternalLink size={14} /> View Live
                    </>
                  ) : (
                    <>
                      <Youtube size={14} /> Watch Demo
                    </>
                  )}
                </span>
              </div>

              {/* Number badge */}
              <div
                style={{
                  position: "absolute",
                  top: "1rem",
                  left: "1rem",
                  background: "var(--bg-primary)",
                  border: "1px solid var(--border)",
                  padding: "0.2rem 0.6rem",
                }}>
                <span
                  className="font-mono-light"
                  style={{
                    fontSize: "0.65rem",
                    color: "var(--accent)",
                    letterSpacing: "0.15em",
                  }}>
                  {p.num}
                </span>
              </div>
            </div>

            {/* Info */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "1.25rem",
              }}>
              <span
                className="font-mono-light"
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                }}>
                {p.tag}
              </span>

              <div>
                <h3
                  className="font-display"
                  style={{
                    fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                    lineHeight: 1.1,
                    color: "var(--text-primary)",
                    marginBottom: "0.35rem",
                  }}>
                  {p.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--text-muted)",
                    letterSpacing: "0.03em",
                  }}>
                  {p.subtitle}
                </p>
              </div>

              <p
                style={{
                  fontSize: "0.9rem",
                  lineHeight: 1.75,
                  color: "var(--text-secondary)",
                  maxWidth: "480px",
                }}>
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-[0.4rem]">
                {p.tech.map((t) => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 flex-wrap">
                {p.links.live && (
                  <a
                    href={p.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-luxury"
                    style={{ textDecoration: "none" }}>
                    <span>Live Demo</span>
                    <ExternalLink size={11} />
                  </a>
                )}
                {p.links.video && (
                  <a
                    href={p.links.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-luxury"
                    style={{ textDecoration: "none" }}>
                    <span>Video Demo</span>
                    <Youtube size={11} />
                  </a>
                )}
                {p.links.github.map((g) => (
                  <a
                    key={g.label}
                    href={g.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ghost-link">
                    <Github size={12} />
                    {g.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectSection;
