"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "./MagneticButton";
import CountUp from "./CountUp";
import SynapseCanvas from "./SynapseCanvas";
import BorderBeam from "./BorderBeam";
import HeroVideoBackground from "./HeroVideoBackground";
import { CLINIC_CONTACT, buildWhatsAppLink } from "@/data/content";

const CYCLING_WORDS = [
  "superar a ansiedade.",
  "vencer o esgotamento.",
  "dominar o foco e TDAH.",
  "transformar seus padrões.",
  "viver com autonomia.",
];

export default function Hero() {
  const [greeting, setGreeting] = useState("Bem-vindo");
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      setGreeting("Bom dia");
    } else if (hour >= 12 && hour < 18) {
      setGreeting("Boa tarde");
    } else {
      setGreeting("Boa noite");
    }

    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % CYCLING_WORDS.length);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <HeroVideoBackground>
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        {/* Interactive JavaScript Canvas (Neural Synapses) */}
        <SynapseCanvas />

      {/* Background radial gradient mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-zinc-200/70 via-white to-white blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Greeting + Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-zinc-100/90 border border-zinc-200/80 text-[11px] sm:text-xs font-medium text-zinc-700 mb-6 sm:mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span className="hidden sm:inline">{greeting} • Consultórios em SP, Atibaia, Santos & Online</span>
            <span className="sm:hidden">{greeting} • SP, Atibaia, Santos & Online</span>
          </motion.div>

          {/* Heading with Kinetic Word Cycler */}
          <motion.h1
            initial={{ opacity: 0, y: 25, scale: 0.96, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.1, type: "spring", bounce: 0.2 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-black leading-[1.1] mb-5 sm:mb-6 min-h-[105px] sm:min-h-[140px] md:min-h-[170px] flex flex-col items-center justify-center"
          >
            <span>Compreender a mente é o</span>
            <span className="inline-flex items-center justify-center h-[1.2em] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{ y: 35, opacity: 0, filter: "blur(4px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -35, opacity: 0, filter: "blur(4px)" }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="text-zinc-400 block"
                >
                  {CYCLING_WORDS[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-textMuted max-w-2xl font-light leading-relaxed mb-8 sm:mb-10 px-2 sm:px-0"
          >
            Atendimento psicológico clínico baseado em escuta qualificada, conhecimento neurocientífico e estratégias terapêuticas rigorosamente individualizadas.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-12 sm:mb-16 w-full sm:w-auto px-4 sm:px-0"
          >
            <MagneticButton href={buildWhatsAppLink("Olá, Dr. Cristiano! Gostaria de agendar uma primeira consulta de avaliação.")} className="w-full sm:w-auto">
              <div className="btn-primary shadow-apple w-full sm:w-auto text-center py-3.5 sm:py-3 text-xs sm:text-sm">Agendar uma consulta</div>
            </MagneticButton>
            <MagneticButton href="#especialidades" className="w-full sm:w-auto">
              <div className="btn-outline w-full sm:w-auto text-center py-3.5 sm:py-3 text-xs sm:text-sm">Explorar especialidades</div>
            </MagneticButton>
          </motion.div>

          {/* Profile Card Minimalist Apple Style with CountUp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="w-full max-w-3xl rounded-3xl p-5 sm:p-8 bg-zinc-50/80 border border-zinc-200/80 shadow-apple backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-6 text-left relative overflow-hidden"
          >
            <BorderBeam size={280} duration={12} colorFrom="#f97316" colorTo="#a855f7" borderWidth={1.5} />

            <div className="flex items-center gap-4 relative z-10 w-full md:w-auto">
              <div className="relative shrink-0">
                <img 
                  src={CLINIC_CONTACT.avatarUrl} 
                  alt="Cristiano Ávila" 
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-cover object-top border border-zinc-200 shadow-sm"
                />
                <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white" title="Disponível para consultas" />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm sm:text-base font-bold text-black tracking-tight truncate">Cristiano Ávila da Silva</h3>
                <p className="text-xs text-textMuted font-light">Psicólogo Clínico, Neurocientista & Hipnoterapeuta</p>
                <div className="flex items-center gap-2 mt-1 flex-wrap">
                  <span className="text-[10px] font-semibold text-zinc-500 bg-white px-2 py-0.5 rounded-full border border-zinc-200">
                    Certificação OMNI
                  </span>
                  <span className="text-[10px] font-semibold text-zinc-500 bg-white px-2 py-0.5 rounded-full border border-zinc-200">
                    CRP SP Ativo
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:flex sm:items-center sm:gap-6 pt-4 md:pt-0 border-t md:border-t-0 border-zinc-200/60 w-full md:w-auto justify-between md:justify-end text-xs">
              <div className="text-center sm:text-left">
                <span className="text-textMuted block text-[9px] sm:text-[10px] uppercase font-semibold">Experiência</span>
                <span className="font-bold text-black text-xs sm:text-sm">
                  +<CountUp end={10} duration={1.5} /> Anos
                </span>
              </div>
              <div className="hidden sm:block h-8 w-px bg-zinc-200" />
              <div className="text-center sm:text-left">
                <span className="text-textMuted block text-[9px] sm:text-[10px] uppercase font-semibold">Consultórios</span>
                <span className="font-bold text-black text-xs sm:text-sm">
                  <CountUp end={4} duration={1} /> Cidades
                </span>
              </div>
              <div className="hidden sm:block h-8 w-px bg-zinc-200" />
              <div className="text-center sm:text-left">
                <span className="text-textMuted block text-[9px] sm:text-[10px] uppercase font-semibold">Sigilo Ético</span>
                <span className="font-bold text-black text-xs sm:text-sm">
                  <CountUp end={100} duration={1.8} suffix="%" />
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  </HeroVideoBackground>
  );
}
