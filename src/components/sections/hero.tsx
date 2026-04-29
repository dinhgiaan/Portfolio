import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowDownRight, Github, Linkedin, Mail, FileText } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ScrollInView from "../scroll.inview";

/* ── Typewriter chữ vai trò ── */
const useTypewriter = (texts: string[], speed = 70, pause = 2400) => {
  const [displayed, setDisplayed] = useState("");
  const [idx, setIdx] = useState(0);
  const [del, setDel] = useState(false);
  const [wait, setWait] = useState(false);
  useEffect(() => {
    if (wait) return;
    const cur = texts[idx];
    const t = setTimeout(
      () => {
        if (!del) {
          setDisplayed(cur.slice(0, displayed.length + 1));
          if (displayed.length + 1 === cur.length) {
            setWait(true);
            setTimeout(() => {
              setWait(false);
              setDel(true);
            }, pause);
          }
        } else {
          setDisplayed(cur.slice(0, displayed.length - 1));
          if (displayed.length === 0) {
            setDel(false);
            setIdx((i) => (i + 1) % texts.length);
          }
        }
      },
      del ? speed / 2 : speed,
    );
    return () => clearTimeout(t);
  }, [displayed, del, wait, idx, texts, speed, pause]);
  return displayed;
};

/* ── Số đếm ── */
const CountUp = ({ end, suffix = "" }: { end: number; suffix?: string }) => {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      let i = 0;
      const step = Math.ceil(end / 50);
      const t = setInterval(() => {
        i += step;
        if (i >= end) {
          setN(end);
          clearInterval(t);
        } else setN(i);
      }, 35);
      ob.disconnect();
    });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, [end]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
};

const HeroSection = () => {
  const role = useTypewriter([
    "Frontend Developer",
    "Next.js Specialist",
    "UI/UX Enthusiast",
    "Team Lead",
  ]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(mx, { stiffness: 80, damping: 20 });
  const ry = useSpring(my, { stiffness: 80, damping: 20 });

  const onMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const cy = (e.clientY - rect.top - rect.height / 2) / rect.height;
    mx.set(cy * 6);
    my.set(-cx * 6);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const stats = [
    { value: 5, suffix: "+ mo", label: "Experience" },
    { value: 3, suffix: "+", label: "Client Projects" },
    { value: 90, suffix: "+", label: "Lighthouse Score" },
  ];

  return (
    <section
      id="hero-section"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "68px",
      }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "4rem 2rem",
          width: "100%",
        }}>
        <ScrollInView direction="up" delay={0}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "2.5rem",
            }}>
            <span className="section-label">01 — Introduction</span>
            <span className="gold-line" style={{ flex: 1 }} />
          </div>
        </ScrollInView>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "4rem",
            alignItems: "center",
          }}>
          {/* ── Tên lớn ── */}
          <div>
            <ScrollInView direction="up" delay={0.05}>
              <p
                className="font-mono-light"
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.2em",
                  color: "var(--text-muted)",
                  marginBottom: "0.75rem",
                }}>
                Hello, I'm
              </p>
            </ScrollInView>

            <ScrollInView direction="up" delay={0.12}>
              <h1
                className="font-display"
                style={{
                  fontSize: "clamp(3rem, 8vw, 6.5rem)",
                  lineHeight: 1.0,
                  color: "var(--text-primary)",
                  marginBottom: "0.25rem",
                  fontWeight: 600,
                }}>
                Dinh
              </h1>
            </ScrollInView>

            <ScrollInView direction="up" delay={0.18}>
              <h1
                className="font-display"
                style={{
                  fontSize: "clamp(3rem, 8vw, 6.5rem)",
                  lineHeight: 1.0,
                  color: "transparent",
                  WebkitTextStroke: "1px var(--text-primary)",
                  marginBottom: "1.5rem",
                  fontStyle: "italic",
                }}>
                Gia An
              </h1>
            </ScrollInView>

            {/* Role typewriter */}
            <ScrollInView direction="up" delay={0.24}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1.75rem",
                }}>
                <span
                  style={{
                    width: "24px",
                    height: "1px",
                    background: "var(--accent)",
                  }}
                />
                <span
                  className="font-mono-light"
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--accent)",
                    letterSpacing: "0.05em",
                  }}>
                  {role}
                </span>
                <span
                  style={{
                    width: "2px",
                    height: "1rem",
                    background: "var(--accent)",
                    display: "inline-block",
                    animation: "pulse 1s infinite",
                  }}
                />
              </div>
            </ScrollInView>

            {/* Bio */}
            <ScrollInView direction="up" delay={0.3}>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.8,
                  color: "var(--text-secondary)",
                  maxWidth: "540px",
                  marginBottom: "2.5rem",
                }}>
                Frontend developer with 5+ months of professional experience,
                specializing in{" "}
                <em
                  style={{ color: "var(--text-primary)", fontStyle: "normal" }}>
                  Next.js
                </em>
                ,{" "}
                <em
                  style={{ color: "var(--text-primary)", fontStyle: "normal" }}>
                  TypeScript
                </em>
                , and scalable UI architecture. Delivered 3 client projects on
                schedule with 90+ Lighthouse scores.
              </p>
            </ScrollInView>

            {/* CTAs */}
            <ScrollInView direction="up" delay={0.36}>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "3rem",
                }}>
                <button
                  className="btn-luxury"
                  onClick={() =>
                    document
                      .getElementById("contact-section")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }>
                  <span>Get in touch</span>
                  <ArrowDownRight size={12} />
                </button>
                <a
                  href="/cv/Resume_DinhGiaAn.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontSize: "0.7rem",
                    fontWeight: 500,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    paddingBottom: "2px",
                    borderBottom: "1px solid var(--border-strong)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--accent)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-secondary)")
                  }>
                  <FileText size={12} />
                  View Resume
                </a>
              </div>
            </ScrollInView>

            {/* Socials */}
            <ScrollInView direction="up" delay={0.42}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.25rem",
                }}>
                {[
                  {
                    icon: Github,
                    href: "https://github.com/dinhgiaan",
                    label: "GitHub",
                  },
                  {
                    icon: Linkedin,
                    href: "https://linkedin.com/in/dinhgiaan",
                    label: "LinkedIn",
                  },
                  {
                    icon: Mail,
                    href: "mailto:dinhgiaanforwork@gmail.com",
                    label: "Email",
                  },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    style={{
                      width: "38px",
                      height: "38px",
                      border: "1px solid var(--border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--text-muted)",
                      textDecoration: "none",
                      transition: "all 0.25s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--accent)";
                      e.currentTarget.style.color = "var(--accent)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border)";
                      e.currentTarget.style.color = "var(--text-muted)";
                      e.currentTarget.style.transform = "none";
                    }}>
                    <Icon size={15} />
                  </a>
                ))}
                <span
                  style={{
                    flex: 1,
                    height: "1px",
                    background: "var(--border)",
                  }}
                />
              </div>
            </ScrollInView>
          </div>

          {/* ── Right col: ảnh + stats ── */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {/* Avatar với parallax */}
            <ScrollInView direction="up" delay={0.15}>
              <motion.div
                onMouseMove={onMove}
                onMouseLeave={onLeave}
                style={{
                  rotateX: rx,
                  rotateY: ry,
                  perspective: 800,
                  display: "inline-block",
                  width: "100%",
                  maxWidth: "320px",
                  margin: "0 auto",
                }}>
                <div style={{ position: "relative" }}>
                  {/* Gold frame corner decorations */}
                  {[
                    {
                      top: "-6px",
                      left: "-6px",
                      borderTop: "2px solid var(--accent)",
                      borderLeft: "2px solid var(--accent)",
                      width: "28px",
                      height: "28px",
                    },
                    {
                      top: "-6px",
                      right: "-6px",
                      borderTop: "2px solid var(--accent)",
                      borderRight: "2px solid var(--accent)",
                      width: "28px",
                      height: "28px",
                    },
                    {
                      bottom: "-6px",
                      left: "-6px",
                      borderBottom: "2px solid var(--accent)",
                      borderLeft: "2px solid var(--accent)",
                      width: "28px",
                      height: "28px",
                    },
                    {
                      bottom: "-6px",
                      right: "-6px",
                      borderBottom: "2px solid var(--accent)",
                      borderRight: "2px solid var(--accent)",
                      width: "28px",
                      height: "28px",
                    },
                  ].map((s, i) => (
                    <span key={i} style={{ position: "absolute", ...s }} />
                  ))}

                  <div
                    style={{
                      overflow: "hidden",
                      aspectRatio: "3/4",
                      background: "var(--bg-secondary)",
                    }}>
                    <img
                      src="/assets/profile-picture.jpg"
                      alt="Dinh Gia An"
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        filter: "grayscale(15%)",
                        transition: "filter 0.4s ease, transform 0.6s ease",
                        pointerEvents: "none",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.filter = "grayscale(0%)";
                        e.currentTarget.style.transform = "scale(1.03)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.filter = "grayscale(15%)";
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    />
                  </div>

                  {/* Availability badge */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "1rem",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "var(--bg-card)",
                      border: "1px solid var(--accent-subtle)",
                      padding: "0.4rem 1rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      whiteSpace: "nowrap",
                    }}>
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "#22c55e",
                        animation: "pulse 2s infinite",
                      }}
                    />
                    <span
                      className="font-mono-light"
                      style={{
                        fontSize: "0.65rem",
                        letterSpacing: "0.12em",
                        color: "var(--text-secondary)",
                      }}>
                      Available for work
                    </span>
                  </div>
                </div>
              </motion.div>
            </ScrollInView>

            {/* Stats */}
            <ScrollInView direction="up" delay={0.3}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "1px",
                  background: "var(--border)",
                  border: "1px solid var(--border)",
                }}>
                {stats.map((s, i) => (
                  <div
                    key={i}
                    style={{
                      background: "var(--bg-primary)",
                      padding: "1.25rem 1rem",
                      textAlign: "center",
                    }}>
                    <div
                      className="font-display"
                      style={{
                        fontSize: "1.75rem",
                        color: "var(--accent)",
                        lineHeight: 1,
                        marginBottom: "0.25rem",
                      }}>
                      <CountUp end={s.value} suffix={s.suffix} />
                    </div>
                    <div
                      className="font-mono-light"
                      style={{
                        fontSize: "0.62rem",
                        letterSpacing: "0.12em",
                        color: "var(--text-muted)",
                        textTransform: "uppercase",
                      }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollInView>
          </div>
        </div>
      </div>

      {/* Responsive 2-col layout */}
      <style>{`
        @media (min-width: 900px) {
          #hero-section > div > div:last-child {
            grid-template-columns: 1fr 380px !important;
          }
        }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
      `}</style>
    </section>
  );
};

export default HeroSection;
