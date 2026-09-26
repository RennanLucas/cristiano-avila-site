"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroDesktopVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const desktopViewport = window.matchMedia("(min-width: 1024px)").matches;
    const connection = (navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }).connection;

    const saveData = Boolean(connection?.saveData);
    const constrainedConnection = ["slow-2g", "2g", "3g"].includes(connection?.effectiveType ?? "");

    if (!desktopViewport || reducedMotion || saveData || constrainedConnection) return;

    const enable = () => setEnabled(true);
    const timer = window.setTimeout(enable, 1400);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!enabled || !video) return;

    const pauseIfHidden = () => {
      if (document.hidden) video.pause();
      else video.play().catch(() => undefined);
    };

    video.play().catch(() => undefined);
    document.addEventListener("visibilitychange", pauseIfHidden);
    return () => document.removeEventListener("visibilitychange", pauseIfHidden);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <video
      ref={videoRef}
      loop
      muted
      playsInline
      preload="none"
      poster="/videos/hero-clouds-poster.jpg"
      className="hidden h-full w-full object-cover opacity-[0.13] lg:block"
      aria-hidden="true"
    >
      <source src="/videos/hero-clouds.webm" type="video/webm" />
      <source src="/videos/hero-clouds.mp4" type="video/mp4" />
    </video>
  );
}
