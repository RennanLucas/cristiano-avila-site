"use client";

import { motion } from "framer-motion";

export default function InfiniteMarquee() {
  const keywords = [
    "Psicoterapia Baseada em Evidências", "•",
    "Tratamento de Ansiedade", "•",
    "Regulação Emocional", "•",
    "Hipnoterapia Clínica Avançada", "•",
    "TDAH em Adultos", "•",
    "Desenvolvimento Profissional", "•",
    "Neurociência Aplicada", "•",
  ];

  return (
    <div className="relative flex overflow-x-hidden bg-black text-white py-4 border-y border-zinc-800">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
      
      <div className="animate-marquee whitespace-nowrap flex items-center gap-6">
        {[...Array(3)].map((_, i) => (
          <span key={i} className="flex items-center gap-6 text-sm font-medium tracking-wide text-zinc-300">
            {keywords.map((word, j) => (
              <span key={`${i}-${j}`} className={word === "•" ? "text-zinc-600 opacity-50" : ""}>
                {word}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
