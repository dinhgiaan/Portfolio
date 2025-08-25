import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
      { id: "hero-section", label: "About me" },
      { id: "skills-section", label: "Skills" },
      { id: "projects-section", label: "Projects" },
      { id: "contact-section", label: "Contact" },
];

export default function SectionIndicator() {
      const [activeIndex, setActiveIndex] = useState(0);

      useEffect(() => {
            const handleScroll = () => {
                  const scrollMiddle = window.scrollY + window.innerHeight / 2;
                  const current = sections.findIndex((s) => {
                        const el = document.getElementById(s.id);
                        if (!el) return false;
                        const top = el.offsetTop;
                        const bottom = top + el.offsetHeight;
                        return scrollMiddle >= top && scrollMiddle < bottom;
                  });
                  if (current !== -1) setActiveIndex(current);
            };

            window.addEventListener("scroll", handleScroll);
            handleScroll();
            return () => window.removeEventListener("scroll", handleScroll);
      }, []);

      const handleClick = (id: string) => {
            const el = document.getElementById(id);
            if (!el) return;
            const offset = 80;
            const top = el.getBoundingClientRect().top + window.scrollY - offset;

            window.scrollTo({ top, behavior: "smooth" });
      };

      return (
            <div
                  className="fixed top-1/2 left-6 transform -translate-y-1/2 flex flex-col gap-4 z-50
                 max-md:bottom-8 max-md:top-auto max-md:left-1/2 max-md:-translate-x-1/2 max-md:translate-y-0 max-md:flex-row max-md:gap-3"
            >
                  {sections.map((section, i) => {
                        const isActive = i === activeIndex;
                        return (
                              <div key={section.id} className="relative flex items-center">
                                    <motion.div
                                          onClick={() => handleClick(section.id)}
                                          className={`w-3 h-3 md:w-3 md:h-3 sm:w-3 sm:h-3 rounded-full cursor-pointer ${isActive
                                                ? "bg-gradient-to-b from-teal-400 to-blue-500 shadow-lg"
                                                : "bg-gray-400"
                                                }`}
                                          animate={{ scale: isActive ? 1.8 : 1 }}
                                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    />
                                    {/* tooltip chỉ hiển thị desktop */}
                                    <AnimatePresence>
                                          {isActive && (
                                                <motion.span
                                                      initial={{ opacity: 0, x: -10 }}
                                                      animate={{ opacity: 1, x: -20 }}
                                                      exit={{ opacity: 0, x: -10 }}
                                                      className="hidden md:block absolute left-8 dark:text-white text-black text-sm font-medium whitespace-nowrap"
                                                >
                                                      {section.label}
                                                </motion.span>
                                          )}
                                    </AnimatePresence>
                              </div>
                        );
                  })}
            </div>
      );
}
