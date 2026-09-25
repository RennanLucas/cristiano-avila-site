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

    // Cálculo de inclinação 3D sutil (máximo 4 graus para elegância)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -3.5;
    const rotateY = ((x - centerX) / centerX) * 3.5;

    setMousePos({ x, y, opacity: 1 });
    setTilt({ rotateX, rotateY });
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
      animate={{
        rotateX: tilt.rotateX,
        rotateY: tilt.rotateY,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      style={{ transformStyle: "preserve-3d" }}
      className={`relative overflow-hidden rounded-3xl border border-zinc-200/90 bg-white transition-shadow duration-300 hover:shadow-apple-hover ${className}`}
    >
      {/* Luz Spotlight Radial que segue o mouse em JavaScript */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: mousePos.opacity,
          background: `radial-gradient(420px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 0, 0, 0.05), transparent 70%)`,
        }}
      />

      {/* Borda Iluminada no ponto do cursor */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300 border border-black/25"
        style={{
          opacity: mousePos.opacity,
          maskImage: `radial-gradient(180px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(180px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
        }}
      />

      <div className="relative z-10 h-full flex flex-col justify-between">
        {children}
      </div>
    </motion.div>
  );
}
