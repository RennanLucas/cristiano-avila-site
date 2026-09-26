"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function SpotlightCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, opacity: 0 });
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    setMousePos({ x, y, opacity: 1 });
    setTilt({
      rotateX: ((y - centerY) / centerY) * -4.5,
      rotateY: ((x - centerX) / centerX) * 4.5,
    });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, opacity: 0 }));
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY }}
      transition={{ type: "spring", stiffness: 190, damping: 20, mass: 0.7 }}
      whileHover={{ y: -7, scale: 1.012 }}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      className={`group relative overflow-hidden rounded-[28px] border border-white/80 bg-white/80 backdrop-blur-xl transition-shadow duration-500 hover:shadow-[0_35px_90px_rgba(0,0,0,0.13)] ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(244,244,245,0.48))]" />
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full border border-zinc-200/80 bg-zinc-100/70 transition-transform duration-700 group-hover:scale-125" />
      <div className="pointer-events-none absolute -bottom-24 -left-20 h-44 w-44 rounded-full bg-fuchsia-100/40 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: mousePos.opacity,
          background: `radial-gradient(460px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.95), rgba(250,204,21,0.07) 28%, rgba(217,70,239,0.05) 45%, transparent 72%)`,
        }}
      />

      <div
        className="pointer-events-none absolute -inset-px rounded-[28px] border border-black/20 transition-opacity duration-300"
        style={{
          opacity: mousePos.opacity,
          maskImage: `radial-gradient(220px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(220px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
        }}
      />

      <div className="relative z-10 flex h-full flex-col justify-between" style={{ transform: "translateZ(18px)" }}>
        {children}
      </div>
    </motion.div>
  );
}
