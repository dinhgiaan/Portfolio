import { useEffect, useRef } from "react";

export const LuxuryCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) return;

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
        dotRef.current.style.opacity = "1";
      }
    };

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x}px`;
        ringRef.current.style.top = `${ring.current.y}px`;
        ringRef.current.style.opacity = "0.5";
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    const onEnterLink = () => {
      if (dotRef.current) { dotRef.current.style.width = "12px"; dotRef.current.style.height = "12px"; }
      if (ringRef.current) { ringRef.current.style.width = "48px"; ringRef.current.style.height = "48px"; ringRef.current.style.opacity = "0.8"; }
    };

    const onLeaveLink = () => {
      if (dotRef.current) { dotRef.current.style.width = "5px"; dotRef.current.style.height = "5px"; }
      if (ringRef.current) { ringRef.current.style.width = "30px"; ringRef.current.style.height = "30px"; ringRef.current.style.opacity = "0.5"; }
    };

    document.addEventListener("mousemove", onMove);
    rafRef.current = requestAnimationFrame(animate);

    const addLinkListeners = () => {
      document.querySelectorAll("a, button, [data-cursor]").forEach(el => {
        el.addEventListener("mouseenter", onEnterLink);
        el.addEventListener("mouseleave", onLeaveLink);
      });
    };
    addLinkListeners();

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" style={{ opacity: 0 }} />
      <div ref={ringRef} className="cursor-ring" style={{ opacity: 0 }} />
    </>
  );
};
