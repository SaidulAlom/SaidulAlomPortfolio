"use client";
import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!glowRef.current) return;
      glowRef.current.style.left = `${e.clientX}px`;
      glowRef.current.style.top = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
      style={{
        background:
          "radial-gradient(circle, rgba(163,255,51,0.08) 0%, transparent 70%)",
        transition: "left 0.08s ease-out, top 0.08s ease-out",
      }}
    />
  );
}
