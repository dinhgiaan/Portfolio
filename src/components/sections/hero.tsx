import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { CardContainer, CardItem } from "@/components/ui/3d-card";
import ScrollInView from "../scroll.inview";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const useTypewriter = (texts: string[], speed = 80, pause = 2000) => {
  const [displayed, setDisplayed] = useState("");
  const [textIdx, setTextIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    if (isWaiting) return;

    const current = texts[textIdx];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayed(current.slice(0, displayed.length + 1));
          if (displayed.length + 1 === current.length) {
            setIsWaiting(true);
            setTimeout(() => {
              setIsWaiting(false);
              setIsDeleting(true);
            }, pause);
          }
        } else {
          setDisplayed(current.slice(0, displayed.length - 1));
          if (displayed.length === 0) {
            setIsDeleting(false);
            setTextIdx((i) => (i + 1) % texts.length);
          }
        }
      },
      isDeleting ? speed / 2 : speed
    );

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, isWaiting, textIdx, texts, speed, pause]);

  return displayed;
};

const CountUp = ({ end, suffix = "" }: { end: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      let start = 0;
      const step = Math.ceil(end / 40);
      const timer = setInterval(() => {
        start += step;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else setCount(start);
      }, 40);
      observer.disconnect();
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const HeroSection = () => {
  const role = useTypewriter(
    [
      "Frontend Developer",
      "React.js / Next.js Dev",
      "UI/UX Enthusiast",
      "Team Lead @ CodeGuru",
    ],
    75,
    2200
  );

  const stats = [
    { value: 2, suffix: " mo", label: "Experience" },
    { value: 2, suffix: "+", label: "Projects" },
    { value: 15, suffix: "+", label: "APIs Built" },
  ];

  return (
    <ScrollInView>
      <section className="min-w-full">
        <motion.div
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}>
          <span className="text-[#00fff7] font-mono text-sm tracking-widest">
            01.
          </span>
          <span className="text-[#8892a4] font-mono text-sm tracking-widest uppercase">
            About Me
          </span>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-[#00fff7]/30 to-transparent" />
        </motion.div>

        <div className="flex flex-col lg:flex-row justify-center items-start gap-12 px-4">
          {/* Avatar card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="w-full lg:w-auto flex justify-center flex-shrink-0">
            <CardContainer className="inter-var">
              <CardItem translateZ="120" className="w-full max-w-[240px]">
                <div className="relative group">
                  {/* Neon border glow */}
                  <div
                    className="absolute -inset-[1px] rounded-md opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "linear-gradient(135deg, #00fff7, #7b61ff, #ff2d78)",
                    }}
                  />
                  <div className="relative overflow-hidden rounded-md bg-[#050a0e] p-[1px]">
                    <img
                      className="h-80 w-full object-cover rounded-md transition-all duration-500 group-hover:scale-105"
                      alt="Dinh Gia An"
                      width="240"
                      height="320"
                      loading="lazy"
                      src="/assets/profile-picture.jpg"
                    />
                    {/* Scanline overlay */}
                    <div
                      className="absolute inset-0 pointer-events-none opacity-20"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)",
                      }}
                    />
                    {/* Corner decorations */}
                    <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-[#00fff7] opacity-80" />
                    <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-[#00fff7] opacity-80" />
                    <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-[#00fff7] opacity-80" />
                    <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-[#00fff7] opacity-80" />
                  </div>
                </div>

                {/* Stats dưới ảnh */}
                <div className="flex justify-between mt-4 px-1">
                  {stats.map((s, i) => (
                    <div key={i} className="text-center">
                      <div className="font-mono text-lg font-bold text-[#00fff7]">
                        <CountUp end={s.value} suffix={s.suffix} />
                      </div>
                      <div className="font-mono text-[10px] text-[#8892a4] tracking-wider">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </CardItem>
            </CardContainer>
          </motion.div>

          {/* Info panel */}
          <motion.div
            className="w-full lg:w-3/5 space-y-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}>
            {/* Terminal card */}
            <div
              className="rounded-sm border border-[#00fff7]/20 overflow-hidden"
              style={{ background: "rgba(5, 10, 14, 0.8)" }}>
              {/* Terminal title bar */}
              <div
                className="flex items-center gap-2 px-4 py-2 border-b border-[#00fff7]/10"
                style={{ background: "rgba(0,255,247,0.03)" }}>
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff2d78]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffb800]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#00ff9d]" />
                <span className="ml-2 font-mono text-xs text-[#8892a4] tracking-widest">
                  ~/portfolio/about.sh
                </span>
              </div>

              {/* Terminal content */}
              <div className="p-5 font-mono text-sm space-y-3">
                <div>
                  <span className="text-[#7b61ff]">❯</span>
                  <span className="text-[#8892a4]"> whoami</span>
                </div>

                <div className="pl-4 space-y-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[#00fff7]/40 text-xs">name</span>
                    <span className="text-[#cdd6f4] text-lg font-bold tracking-wider">
                      DINH GIA AN
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#00fff7]/40 text-xs">role</span>
                    <span className="text-[#00fff7]">{role}</span>
                    <span className="w-[2px] h-4 bg-[#00fff7] animate-pulse inline-block" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#00fff7]/40 text-xs">loc </span>
                    <span className="text-[#8892a4]">
                      Thu Duc, Ho Chi Minh City
                    </span>
                    <span className="text-xs">🇻🇳</span>
                  </div>
                </div>

                <div className="h-[1px] bg-[#00fff7]/10" />

                <div>
                  <span className="text-[#7b61ff]">❯</span>
                  <span className="text-[#8892a4]"> cat bio.txt</span>
                </div>

                <div className="pl-4 text-[#8892a4] text-sm leading-relaxed space-y-2">
                  <p>
                    Passionate <span className="text-[#7b61ff]">Developer</span>{" "}
                    with experience in both{" "}
                    <span className="text-[#ff9d00]">Frontend</span> and{" "}
                    <span className="text-[#00fff7]">Backend</span> development.
                  </p>
                  <p>
                    Skilled in React, Next.js, TypeScript, Express.js, and
                    database management. Building modern web applications with
                    clean architecture.
                  </p>
                  <p className="text-[#00ff9d]">
                    // Looking for opportunities to contribute &amp; grow 🚀
                  </p>
                </div>

                <div>
                  <span className="text-[#7b61ff]">❯</span>
                  <span className="animate-pulse text-[#00fff7]">_</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <Menubar
                className="rounded-sm border-0 p-0"
                onClick={() =>
                  window.open("/cv/Resume_DinhGiaAn.pdf", "_blank")
                }>
                <MenubarMenu>
                  <MenubarTrigger
                    className="
                                   font-mono text-xs tracking-widest text-[#050a0e] bg-[#00fff7]
                                   px-5 py-2.5 rounded-sm cursor-pointer
                                   hover:bg-[#00fff7]/90 transition-colors
                                   border-0 shadow-[0_0_20px_rgba(0,255,247,0.4)]
                                   hover:shadow-[0_0_30px_rgba(0,255,247,0.6)]
                                 ">
                    ▸ VIEW RESUME
                  </MenubarTrigger>
                </MenubarMenu>
              </Menubar>

              <button
                className="font-mono text-xs tracking-widest text-[#00fff7] border border-[#00fff7]/40
                             px-5 py-2.5 rounded-sm hover:bg-[#00fff7]/10 hover:border-[#00fff7]
                             transition-all duration-200 cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://mail.google.com/mail/?view=cm&fs=1&to=dinhgiaanforwork@gmail.com",
                    "_blank"
                  )
                }>
                CONTACT ME
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </ScrollInView>
  );
};

export default HeroSection;
