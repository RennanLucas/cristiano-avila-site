"use client";

import { useEffect, useRef, useState } from "react";

interface HeroVideoBackgroundProps {
  children?: React.ReactNode;
}

export default function HeroVideoBackground({ children }: HeroVideoBackgroundProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [canAnimate, setCanAnimate] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const desktopViewport = window.matchMedia("(min-width: 1024px)").matches;
    const connection = (navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }).connection;

    const saveData = Boolean(connection?.saveData);
    const constrainedConnection = ["slow-2g", "2g", "3g"].includes(connection?.effectiveType ?? "");

    if (!desktopViewport || reducedMotion || saveData || constrainedConnection) return;

    const timer = window.setTimeout(() => setCanAnimate(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const node = wrapperRef.current;
    if (!node || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.05 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!canAnimate || !video) return;

    if (isVisible && !document.hidden) {
      video.play().catch(() => undefined);
    } else {
      video.pause();
    }

    const handleVisibilityChange = () => {
      if (document.hidden || !isVisible) {
        video.pause();
      } else {
        video.play().catch(() => undefined);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [canAnimate, isVisible]);

  return (
    <div ref={wrapperRef} className="relative w-full overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {canAnimate && (
          <video
            ref={videoRef}
            loop
            muted
            playsInline
            preload="none"
            poster="/videos/hero-clouds-poster.jpg"
            className="h-full w-full object-cover opacity-[0.13]"
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
