import { motion } from "framer-motion";
import TechIcon from "../ui/tech.img";
import ScrollInView from "../scroll.inview";

/* ── Marquee banner công nghệ ── */
const MARQUEE_TECHS = [
  { name: "Next.js", tech: "nextjs" },
  { name: "React", tech: "reactjs" },
  { name: "TypeScript", tech: "typescript" },
  { name: "Tailwind CSS", tech: "tailwindcss" },
  { name: "Node.js", tech: "nodejs" },
  { name: "Express.js", tech: "expressjs" },
  { name: "MongoDB", tech: "mongodb" },
  { name: "Redux Toolkit", tech: "redux" },
  { name: "Figma", tech: "figma" },
  { name: "Git", tech: "git" },
  { name: "Postman", tech: "postman" },
];

const MarqueeItem = ({ name, tech }: { name: string; tech: string }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "0.6rem",
      color: "var(--text-muted)",
      whiteSpace: "nowrap",
    }}>
    <TechIcon tech={tech} alt={name} className="w-4 h-4 pointer-events-none" />
    <span
      className="font-mono-light"
      style={{ fontSize: "0.8rem", letterSpacing: "0.08em" }}>
      {name}
    </span>
    <span
      style={{ marginLeft: "1.5rem", color: "var(--accent)", opacity: 0.4 }}>
      ✦
    </span>
  </div>
);

/* ── Competency grid ── */
const SKILLS = [
  {
    num: "01",
    title: "Frontend",
    desc: "Pixel-perfect interfaces with Next.js, React, TypeScript. Mobile-first, 90+ Lighthouse.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "SCSS",
      "Framer Motion",
    ],
  },
  {
    num: "02",
    title: "Backend",
    desc: "RESTful APIs, JWT auth, MongoDB. Clean architecture with Express.js.",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT", "REST API"],
  },
  {
    num: "03",
    title: "State & Data",
    desc: "Complex state management patterns, optimized data fetching and caching.",
    tags: ["Redux Toolkit", "Zustand", "SWR", "Axios", "React Query"],
  },
  {
    num: "04",
    title: "UI/UX & Tools",
    desc: "From Figma design to polished component libraries. Agile workflows.",
    tags: ["Figma", "MUI", "Shadcn", "Git", "Postman", "Vercel"],
  },
];

const SkillsSection = () => {
  const doubled = [...MARQUEE_TECHS, ...MARQUEE_TECHS];

  return (
    <section id="skills-section" style={{ paddingBottom: "0" }}>
      {/* ── Section header ── */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 2rem 3rem",
        }}>
        <ScrollInView direction="up" delay={0}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "3rem",
            }}>
            <span className="section-label">02 — Expertise</span>
            <span className="gold-line" style={{ flex: 1 }} />
          </div>
        </ScrollInView>

        {/* ── Heading editorial ── */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "1.5rem",
            marginBottom: "4rem",
          }}>
          <ScrollInView direction="up" delay={0.08}>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                lineHeight: 1.1,
                color: "var(--text-primary)",
              }}>
              Crafting digital
              <br />
              <span style={{ fontStyle: "italic", color: "var(--accent)" }}>
                experiences.
              </span>
            </h2>
          </ScrollInView>
          <ScrollInView direction="up" delay={0.16}>
            <p
              style={{
                maxWidth: "340px",
                color: "var(--text-muted)",
                lineHeight: 1.7,
                fontSize: "0.9rem",
              }}>
              Full-stack leaning frontend developer focused on building fast,
              beautiful, maintainable web applications.
            </p>
          </ScrollInView>
        </div>

        {/* ── 4-col grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1px",
            background: "var(--border)",
            border: "1px solid var(--border)",
          }}>
          {SKILLS.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                background: "var(--bg-primary)",
                padding: "2rem 1.75rem",
                cursor: "default",
                transition: "background 0.3s ease",
              }}
              whileHover={{ backgroundColor: "var(--bg-card)" } as never}>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  marginBottom: "1.25rem",
                }}>
                <span
                  className="font-mono-light"
                  style={{
                    fontSize: "0.65rem",
                    color: "var(--accent)",
                    letterSpacing: "0.2em",
                  }}>
                  {s.num}
                </span>
                <span
                  style={{
                    width: "20px",
                    height: "1px",
                    background: "var(--accent)",
                    marginTop: "0.5rem",
                  }}
                />
              </div>
              <h3
                className="font-display"
                style={{
                  fontSize: "1.4rem",
                  color: "var(--text-primary)",
                  marginBottom: "0.75rem",
                  fontWeight: 500,
                }}>
                {s.title}
              </h3>
              <p
                style={{
                  fontSize: "0.82rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.7,
                  marginBottom: "1.25rem",
                }}>
                {s.desc}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {s.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: "0.62rem",
                      fontWeight: 500,
                      letterSpacing: "0.08em",
                      padding: "0.2rem 0.6rem",
                      border: "1px solid var(--border-strong)",
                      color: "var(--text-secondary)",
                      fontFamily: "'DM Mono', monospace",
                    }}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Marquee banner ── */}
      <ScrollInView direction="up" delay={0.1}>
        <div
          style={{
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
            padding: "1.25rem 0",
            overflow: "hidden",
            position: "relative",
          }}>
          {/* gradient fade edges */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "80px",
              background:
                "linear-gradient(90deg, var(--bg-primary), transparent)",
              zIndex: 1,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: "80px",
              background:
                "linear-gradient(-90deg, var(--bg-primary), transparent)",
              zIndex: 1,
              pointerEvents: "none",
            }}
          />
          <div className="marquee-track" style={{ gap: "3rem" }}>
            {doubled.map((t, i) => (
              <MarqueeItem key={i} {...t} />
            ))}
          </div>
        </div>
      </ScrollInView>
    </section>
  );
};

export default SkillsSection;
