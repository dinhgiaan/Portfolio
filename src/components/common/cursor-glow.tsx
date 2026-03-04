import { useEffect, useRef, useState } from "react";

export const CursorGlow = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Chỉ chạy trên desktop có chuột thật
    const isDesktop = window.matchMedia("(pointer: fine)").matches;
    if (!isDesktop) return;

    let mouseX = 0,
      mouseY = 0;
    let trailX = 0,
      trailY = 0;
    let animId: number;

    // Ẩn cursor hệ thống bằng cách add class vào <html>
    document.documentElement.classList.add("custom-cursor");

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setVisible(true);

      // Dùng transform thay top/left → không trigger reflow, mượt hơn
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    };

    const animateTrail = () => {
      trailX += (mouseX - trailX) * 0.08;
      trailY += (mouseY - trailY) * 0.08;
      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${trailX}px, ${trailY}px)`;
      }
      animId = requestAnimationFrame(animateTrail);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    animId = requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animId);
      // Restore cursor hệ thống khi unmount
      document.documentElement.classList.remove("custom-cursor");
    };
  }, []);

  return (
    <>
      {/* Glow trail lớn - lag theo */}
      <div
        ref={trailRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "250px",
          height: "250px",
          marginLeft: "-125px",
          marginTop: "-125px",
          transform: "translate(-9999px, -9999px)", // off-screen mặc định
          borderRadius: "50%",
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--accent-cyan) 8%, transparent) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 9998,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.3s ease",
          willChange: "transform",
        }}
      />

      {/* Dot nhỏ - cursor chính */}
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "10px",
          height: "10px",
          marginLeft: "-5px",
          marginTop: "-5px",
          transform: "translate(-9999px, -9999px)", // off-screen mặc định
          borderRadius: "50%",
          background: "var(--accent-cyan)",
          boxShadow:
            "0 0 8px var(--accent-cyan), 0 0 16px color-mix(in srgb, var(--accent-cyan) 60%, transparent)",
          pointerEvents: "none",
          zIndex: 9999,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.2s ease",
          willChange: "transform",
        }}
      />
    </>
  );
};
