"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroVideoBackgroundProps {
  children?: React.ReactNode;
}

type AmbientMode = "clouds" | "stream" | "minimal";

export default function HeroVideoBackground({ children }: HeroVideoBackgroundProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [ambientMode, setAmbientMode] = useState<AmbientMode>("clouds");
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => {
          // Autoplay fallback if blocked
          setIsPlaying(false);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, ambientMode]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const getSource = () => {
    switch (ambientMode) {
      case "stream":
        return {
          webm: "/videos/hero-stream.webm",
          mp4: "/videos/hero-clouds.mp4",
          poster: "/videos/hero-stream-poster.jpg",
          name: "Águas de Mindfulness",
        };
      case "clouds":
      default:
        return {
          webm: "/videos/hero-clouds.webm",
          mp4: "/videos/hero-clouds.mp4",
          poster: "/videos/hero-clouds-poster.jpg",
          name: "Serenidade & Céu",
        };
    }
  };

  const currentSource = getSource();

  return (
    <div className="relative w-full overflow-hidden bg-white">
      {/* Background Video Layer */}
      {ambientMode !== "minimal" && (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={ambientMode}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster={currentSource.poster}
                onLoadedData={() => setIsLoaded(true)}
                className="w-full h-full object-cover object-center scale-[1.03] filter brightness-[1.02] contrast-[0.98] transition-opacity duration-1000"
                style={{ opacity: isLoaded ? 0.32 : 0.15 }}
              >
                <source src={currentSource.webm} type="video/webm" />
                <source src={currentSource.mp4} type="video/mp4" />
              </video>
            </motion.div>
          </AnimatePresence>

          {/* Premium Multi-layer Diffusion Overlay (Apple / Linear Aesthetic) */}
          {/* Top subtle vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/70 to-white pointer-events-none" />
          
          {/* Radial light focus on the headline area */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/40 via-white/80 to-white pointer-events-none" />

          {/* Subtle warm golden-cyan glow mesh */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-gradient-to-tr from-sky-100/30 via-emerald-50/20 to-amber-100/20 rounded-full blur-3xl pointer-events-none opacity-70" />
        </div>
      )}

      {/* Floating Ambient Controls Pill */}
      <div className="absolute top-20 sm:top-24 md:top-28 right-3 sm:right-6 z-20 pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center gap-1.5 p-1 rounded-full bg-white/70 hover:bg-white/90 backdrop-blur-md border border-zinc-200/80 shadow-sm text-[11px] text-zinc-600 transition-all duration-300"
        >
          {/* Play/Pause Button */}
          {ambientMode !== "minimal" && (
            <button
              onClick={togglePlay}
              className="flex items-center gap-1 px-2.5 py-1 rounded-full hover:bg-zinc-100 font-medium transition-colors"
              title={isPlaying ? "Pausar vídeo de fundo" : "Reproduzir vídeo"}
            >
              {isPlaying ? (
                <>
                  <svg className="w-3 h-3 text-zinc-700" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                  <span className="hidden sm:inline">Vídeo</span>
                </>
              ) : (
                <>
                  <svg className="w-3 h-3 text-zinc-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span className="hidden sm:inline">Play</span>
                </>
              )}
            </button>
          )}

          {/* Switch Ambient Theme */}
          <div className="flex items-center border-l border-zinc-200/80 pl-1">
            <button
              onClick={() => setAmbientMode("clouds")}
              className={`px-2 py-0.5 rounded-full transition-colors ${
                ambientMode === "clouds"
                  ? "bg-zinc-900 text-white font-semibold shadow-xs"
                  : "hover:bg-zinc-100 text-zinc-600"
              }`}
              title="Ambiente Céu & Serenidade"
            >
              ☁️ <span className="hidden md:inline">Céu</span>
            </button>
            <button
              onClick={() => setAmbientMode("stream")}
              className={`px-2 py-0.5 rounded-full transition-colors ${
                ambientMode === "stream"
                  ? "bg-zinc-900 text-white font-semibold shadow-xs"
                  : "hover:bg-zinc-100 text-zinc-600"
              }`}
              title="Ambiente Águas & Mindfulness"
            >
              🌊 <span className="hidden md:inline">Água</span>
            </button>
            <button
              onClick={() => setAmbientMode("minimal")}
              className={`px-2 py-0.5 rounded-full transition-colors ${
                ambientMode === "minimal"
                  ? "bg-zinc-900 text-white font-semibold shadow-xs"
                  : "hover:bg-zinc-100 text-zinc-600"
              }`}
              title="Modo Minimalista (Sem vídeo)"
            >
              ✨ <span className="hidden md:inline">Puro</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Hero Content Layer */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
