import { useState, useRef, useEffect, useCallback, useMemo } from "react";
// import ModeToggle from "../theme/mode.toggle";
import { Menu, X, Terminal } from "lucide-react";

const NAVIGATION_ITEMS = [
  { name: "whoami", sectionId: "hero-section" },
  { name: "skills", sectionId: "skills-section" },
  { name: "projects", sectionId: "projects-section" },
  { name: "contact", sectionId: "contact-section" },
];

const Header = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [glitchIndex, setGlitchIndex] = useState<number | null>(null);

  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Glitch effect ngẫu nhiên trên nav items
  useEffect(() => {
    const interval = setInterval(() => {
      const idx = Math.floor(Math.random() * NAVIGATION_ITEMS.length);
      setGlitchIndex(idx);
      setTimeout(() => setGlitchIndex(null), 150);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const updateIndicator = useCallback(() => {
    const activeItem = itemRefs.current[activeIndex];
    const container = containerRef.current;
    if (activeItem && container) {
      const containerRect = container.getBoundingClientRect();
      const itemRect = activeItem.getBoundingClientRect();
      setIndicatorStyle({
        left: itemRect.left - containerRect.left,
        width: itemRect.width,
      });
    }
  }, [activeIndex]);

  const scrollToSection = useCallback((sectionId: string, index: number) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setIsScrolling(true);
      setActiveIndex(index);
      const headerHeight = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => setIsScrolling(false), 1000);
    }
  }, []);

  const getActiveIndexFromScroll = useCallback(() => {
    if (isScrolling) return;
    const headerHeight = 100;
    for (let i = NAVIGATION_ITEMS.length - 1; i >= 0; i--) {
      const section = document.getElementById(NAVIGATION_ITEMS[i].sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= headerHeight) {
          setActiveIndex(i);
          return;
        }
      }
    }
  }, [isScrolling]);

  const handleItemClick = useCallback(
    (index: number) => {
      setIsMobileMenuOpen(false);
      scrollToSection(NAVIGATION_ITEMS[index].sectionId, index);
    },
    [scrollToSection]
  );

  useEffect(() => {
    const timer = setTimeout(updateIndicator, 0);
    return () => clearTimeout(timer);
  }, [updateIndicator]);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          getActiveIndexFromScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [getActiveIndexFromScroll]);

  useEffect(() => {
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
        updateIndicator();
      }, 150);
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [updateIndicator]);

  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const navigationItems = useMemo(
    () =>
      NAVIGATION_ITEMS.map((item, index) => (
        <div
          key={index}
          ref={(el) => {
            itemRefs.current[index] = el;
          }}
          onClick={() => handleItemClick(index)}
          className={`
                  relative py-2 px-1 cursor-pointer font-mono text-sm tracking-widest uppercase
                  transition-all duration-200 select-none whitespace-nowrap
                  ${glitchIndex === index ? "glitch-text" : ""}
                  ${
                    activeIndex === index
                      ? "text-[#00fff7]"
                      : "text-[#8892a4] hover:text-[#00fff7]"
                  }
                `}>
          {activeIndex === index && (
            <span className="absolute -left-3 top-1/2 -translate-y-1/2 text-[#00fff7] text-xs opacity-70">
              ▸
            </span>
          )}
          {item.name}
        </div>
      )),
    [activeIndex, handleItemClick, glitchIndex]
  );

  return (
    <>
      {/* Cyberpunk header */}
      <header className="sticky top-0 z-50">
        {/* Top accent line */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#00fff7] to-transparent opacity-40" />

        <div
          className="backdrop-blur-md border-b border-[#00fff7]/10"
          style={{ background: "rgba(5, 10, 14, 0.85)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Desktop */}
            <div className="hidden md:flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center gap-2 flex-1">
                <Terminal className="w-4 h-4 text-[#00fff7]" />
                <span className="font-mono text-sm text-[#00fff7] tracking-widest">
                  dinhgiaan<span className="animate-pulse">_</span>
                </span>
              </div>

              {/* Nav */}
              <nav className="flex-1 flex justify-center">
                <div
                  ref={containerRef}
                  className="relative inline-flex space-x-8 lg:space-x-12 items-center">
                  {navigationItems}
                  {/* Neon underline indicator */}
                  <div
                    className="absolute bottom-0 h-[1px] transition-all duration-300 ease-out"
                    style={{
                      left: `${indicatorStyle.left}px`,
                      width: `${indicatorStyle.width}px`,
                      background: "#00fff7",
                      boxShadow:
                        "0 0 8px #00fff7, 0 0 16px rgba(0,255,247,0.5)",
                    }}
                  />
                </div>
              </nav>

              {/* Actions */}
              <div className="flex-1 flex justify-end items-center space-x-3">
                <button
                  className="hidden lg:inline-flex px-5 py-2 font-mono text-xs tracking-widest text-[#00fff7] border border-[#00fff7]/50 rounded-sm
                                   hover:bg-[#00fff7]/10 hover:border-[#00fff7] transition-all duration-200
                                   relative overflow-hidden group cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://mail.google.com/mail/?view=cm&fs=1&to=dinhgiaanforwork@gmail.com",
                      "_blank"
                    )
                  }>
                  <span className="relative z-10">HIRE ME</span>
                  <span className="absolute inset-0 bg-[#00fff7] opacity-0 group-hover:opacity-5 transition-opacity" />
                </button>
                {/* <ModeToggle /> */}
              </div>
            </div>

            {/* Mobile */}
            <div className="md:hidden flex justify-between items-center h-16">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#00fff7]" />
                <span className="font-mono text-xs text-[#00fff7] tracking-widest">
                  dinhgiaan_
                </span>
              </div>
              <div className="flex items-center space-x-2">
                {/* <ModeToggle /> */}
                <button
                  onClick={() => setIsMobileMenuOpen((p) => !p)}
                  className="p-2 text-[#8892a4] hover:text-[#00fff7] transition-colors border border-[#00fff7]/20 rounded-sm">
                  {isMobileMenuOpen ? (
                    <X className="h-4 w-4" />
                  ) : (
                    <Menu className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{
            background: "rgba(5, 10, 14, 0.95)",
            borderBottom: "1px solid rgba(0,255,247,0.1)",
          }}>
          <nav className="px-4 py-4">
            <div className="space-y-1">
              {NAVIGATION_ITEMS.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleItemClick(index)}
                  className={`
                              flex items-center gap-3 py-3 px-3 font-mono text-sm tracking-widest uppercase cursor-pointer
                              border-l-2 transition-all duration-200 select-none
                              ${
                                activeIndex === index
                                  ? "border-[#00fff7] text-[#00fff7] bg-[#00fff7]/5"
                                  : "border-transparent text-[#8892a4] hover:text-[#00fff7] hover:border-[#00fff7]/40"
                              }
                            `}>
                  <span className="text-xs text-[#00fff7]/40">
                    0{index + 1}
                  </span>
                  {item.name}
                </div>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          style={{ background: "rgba(0,0,0,0.5)" }}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
