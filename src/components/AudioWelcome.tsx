"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CLINIC_CONTACT } from "@/data/content";

export default function AudioWelcome() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 2;
        });
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200/80 shadow-apple max-w-xl mx-auto my-12">
      <div className="flex items-center gap-4 mb-4">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-zinc-200">
          <img
            src={CLINIC_CONTACT.avatarUrl}
            alt="Cristiano Ávila"
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div>
          <span className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase block">
            Áudio Exclusivo
          </span>
          <h4 className="text-sm font-bold text-black tracking-tight">
            Mensagem do Dr. Cristiano Ávila
          </h4>
        </div>
      </div>

      {/* Player Bar */}
      <div className="bg-zinc-50 rounded-2xl p-4 border border-zinc-100 flex items-center gap-4">
        {/* Play/Pause Button */}
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? "Pausar áudio" : "Ouvir áudio"}
          className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shrink-0 hover:scale-105 active:scale-95 transition-transform"
        >
          {isPlaying ? (
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* Animated Waveform */}
        <div className="flex-1 flex items-center gap-1 h-8">
          {[40, 70, 30, 90, 60, 100, 45, 80, 50, 75, 35, 95, 60, 85, 40, 65, 30, 90, 50, 70].map((h, i) => {
            const isBarActive = (i / 20) * 100 <= progress;
            return (
              <motion.span
                key={i}
                animate={{
                  scaleY: isPlaying ? [1, 1.4, 0.7, 1.2, 1] : 1,
                }}
                transition={{
                  repeat: Infinity,
                  duration: 0.8,
                  delay: i * 0.04,
                  ease: "easeInOut",
                }}
                style={{ height: `${h}%` }}
                className={`flex-1 rounded-full transition-colors duration-150 ${
                  isBarActive ? "bg-black" : "bg-zinc-200"
                }`}
              />
            );
          })}
        </div>

        {/* Timer */}
        <span className="text-xs font-mono text-zinc-500 shrink-0">
          {isPlaying ? `00:${Math.floor((progress / 100) * 35).toString().padStart(2, "0")}` : "00:35"}
        </span>
      </div>

      <p className="text-[11px] text-textMuted mt-3 text-center font-light">
        "Compreender como sua mente funciona é o primeiro passo para recuperar sua autonomia."
      </p>
    </div>
  );
}
