"use client";

import { useEffect, useRef, useState } from "react";

interface HeroVideoBackgroundProps {
  children?: React.ReactNode;
}

export default function HeroVideoBackground({ children }: HeroVideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [canAnimate, setCanAnimate] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    const saveData = Boolean(connection?.saveData);
    const slowConnection = connection?.effectiveType === "2g" || connection?.effectiveType === "slow-2g";

    if (!reducedMotion && !saveData && !slowConnection) {
      setCanAnimate(true);
    }
  }, []);

  useEffect(() => {
    if (!canAnimate || !videoRef.current) return;
    videoRef.current.play().catch(() => undefined);
  }, [canAnimate]);

  return (
    <div className="relative w-full overflow-hidden bg-white">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {canAnimate && (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/videos/hero-clouds-poster.jpg"
            className="w-full h-full object-cover opacity-[0.13]"
          >
            <source src="/videos/hero-clouds.webm" type="video/webm" />
            <source src="/videos/hero-clouds.mp4" type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-white" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(228,228,231,0.45),transparent_42%)]" />
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
}
