import { useState, useEffect, useCallback, useRef } from "react";
import { useTheme } from "@/components/theme/theme.provider";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const getIsDark = (theme: string) =>
  theme === "dark" ||
  (theme === "system" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches);

const NAV = [
  { name: "About", id: "hero-section" },
  { name: "Skills", id: "skills-section" },
  { name: "Work", id: "projects-section" },
  { name: "Contact", id: "contact-section" },
];

/* Chữ chạy từng ký tự khi hover nav item */
const ScrambleText = ({ text, active }: { text: string; active: boolean }) => {
  const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [displayed, setDisplayed] = useState(text);
  const rafRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!active) {
      setDisplayed(text);
      return;
    }
    let iter = 0;
    const total = text.length;
    const run = () => {
      setDisplayed(
        text
          .split("")
          .map((c, i) => (i < iter ? c : CHARS[Math.floor(Math.random() * 26)]))
          .join(""),
      );
      iter += 0.5;
      if (iter < total + 1) rafRef.current = setTimeout(run, 35);
    };
    run();
    return () => {
      if (rafRef.current) clearTimeout(rafRef.current);
    };
  }, [active, text]);

  return (
    <span style={{ fontVariantNumeric: "tabular-nums" }}>{displayed}</span>
  );
};

const Header = () => {
  const { theme, setTheme } = useTheme();
  const isDark = getIsDark(theme);
  const toggle = () => setTheme(isDark ? "light" : "dark");

  const [activeIdx, setActiveIdx] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const scrollingRef = useRef(false);

  /* Lock body scroll khi menu mobile mở */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      if (scrollingRef.current) return;
      for (let i = NAV.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV[i].id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveIdx(i);
          return;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = useCallback((id: string, idx: number) => {
    setMenuOpen(false);
    setActiveIdx(idx);
    scrollingRef.current = true;
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => {
      scrollingRef.current = false;
    }, 1100);
  }, []);

  return (
    <>
      {/* ── Header bar ─────────────────────────────────── */}
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-[var(--border)]"
            : "border-b border-transparent",
        ].join(" ")}
        style={{
          backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          backgroundColor: scrolled
            ? isDark
              ? "rgba(12,11,9,0.88)"
              : "rgba(247,243,236,0.88)"
            : "transparent",
        }}>
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="flex items-center justify-between h-[68px]">
            {/* Logo */}
            <button
              onClick={() => scrollTo("hero-section", 0)}
              className="bg-transparent border-none cursor-pointer p-0 group">
              <span
                className="font-display italic text-xl tracking-tight"
                style={{
                  color: "var(--text-primary)",
                  letterSpacing: "-0.01em",
                }}>
                Gia An
                <motion.span
                  style={{ color: "var(--accent)" }}
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}>
                  .
                </motion.span>
              </span>
            </button>

            {/* ── Desktop Nav ── */}
            <nav className="desktop-only items-center gap-10">
              {NAV.map((item, i) => (
                <button
                  key={item.id}
                  className={`nav-link ${activeIdx === i ? "active" : ""}`}
                  onClick={() => scrollTo(item.id, i)}
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}>
                  <ScrambleText text={item.name} active={hoveredIdx === i} />
                </button>
              ))}
            </nav>

            {/* ── Right actions ── */}
            <div className="flex items-center gap-3">
              {/* Index counter — mốc thẩm mỹ kiểu editorial */}
              <span
                className="desktop-only font-mono-light"
                style={{
                  fontSize: "0.62rem",
                  color: "var(--text-muted)",
                  letterSpacing: "0.15em",
                }}>
                {String(activeIdx + 1).padStart(2, "0")}/
                {String(NAV.length).padStart(2, "0")}
              </span>

              {/* Divider dọc */}
              <span
                className="desktop-only"
                style={{
                  width: "1px",
                  height: "18px",
                  background: "var(--border-strong)",
                }}
              />

              {/* Theme toggle */}
              <button
                onClick={toggle}
                aria-label="Toggle theme"
                className="theme-btn">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={isDark ? "sun" : "moon"}
                    initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    style={{ display: "flex" }}>
                    {isDark ? <Sun size={14} /> : <Moon size={14} />}
                  </motion.span>
                </AnimatePresence>
              </button>

              {/* CTA — desktop only */}
              <button
                className="btn-luxury desktop-only"
                onClick={() =>
                  window.open("mailto:dinhgiaanforwork@gmail.com")
                }>
                <span>Hire me</span>
              </button>

              {/* Hamburger — mobile only */}
              <button
                className={`hamburger mobile-only ${menuOpen ? "open" : ""}`}
                onClick={() => setMenuOpen((p) => !p)}
                aria-label="Menu">
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>

        {/* Progress bar cuộn trang — 1px accent */}
        <ScrollProgress />
      </header>

      {/* ── Mobile Full-screen Menu ──────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu open"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
            style={{ zIndex: 48 }}>
            {/* Decorative index */}
            <span
              className="font-mono-light absolute top-8 right-8"
              style={{
                fontSize: "0.6rem",
                color: "var(--text-muted)",
                letterSpacing: "0.2em",
              }}>
              MENU
            </span>

            <nav style={{ paddingTop: "2rem" }}>
              {NAV.map((item, i) => (
                <motion.button
                  key={item.id}
                  className={`mobile-nav-item w-full ${activeIdx === i ? "active" : ""}`}
                  onClick={() => scrollTo(item.id, i)}
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.45,
                    delay: i * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: "1.5rem",
                    }}>
                    <span
                      className="font-mono-light"
                      style={{
                        fontSize: "0.65rem",
                        color: "var(--accent)",
                        letterSpacing: "0.15em",
                      }}>
                      0{i + 1}
                    </span>
                    <span
                      className="font-display"
                      style={{
                        fontSize: "clamp(2.2rem, 8vw, 3.5rem)",
                        fontStyle: activeIdx === i ? "italic" : "normal",
                      }}>
                      {item.name}
                    </span>
                  </span>
                </motion.button>
              ))}
            </nav>

            {/* Bottom info */}
            <motion.div
              className="absolute bottom-10 left-8 right-8 flex justify-between items-end"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}>
              <span
                className="font-mono-light"
                style={{
                  fontSize: "0.62rem",
                  color: "var(--text-muted)",
                  letterSpacing: "0.15em",
                }}>
                dinhgiaanforwork@gmail.com
              </span>
              <span
                className="font-display italic"
                style={{ fontSize: "0.9rem", color: "var(--accent)" }}>
                HCMC, VN
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

/* Thanh tiến trình cuộn nhỏ, màu accent */
const ScrollProgress = () => {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const fn = () => {
      const el = document.documentElement;
      setPct((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100);
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "1px",
        background: "var(--border)",
      }}>
      <motion.div
        style={{
          height: "100%",
          background: "var(--accent)",
          width: `${pct}%`,
        }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
};

export default Header;
