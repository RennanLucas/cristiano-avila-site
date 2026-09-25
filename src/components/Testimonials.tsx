"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS_DATA } from "@/data/content";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 9000);
    return () => clearInterval(timer);
  }, [next]);

  const current = TESTIMONIALS_DATA[index];

  return (
    <section id="depoimentos" className="py-24 lg:py-32 bg-surface relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-zinc-100 text-[10px] font-bold tracking-widest text-zinc-600 uppercase mb-3">
            Depoimentos Reais de Pacientes
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black mb-4">
            Experiências de quem passou pelo acompanhamento
          </h2>
          <p className="text-textMuted text-base font-light leading-relaxed">
            Relatos espontâneos registrados por pessoas atendidas presencialmente e de forma online.
          </p>
        </div>

        {/* Testimonial Card Slider */}
        <div className="relative">
          <div className="min-h-[360px] sm:min-h-[300px] relative flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.id}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 40 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="w-full bg-white rounded-3xl p-8 sm:p-12 lg:p-14 shadow-apple border border-zinc-200/80 relative"
              >
                {/* Quotation mark decoration */}
                <div className="absolute top-6 right-8 text-zinc-100 text-7xl font-serif leading-none select-none pointer-events-none">
                  “
                </div>

                {/* Stars and verified tag */}
                <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                  <div className="flex items-center gap-1 text-zinc-800">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs text-zinc-700 bg-zinc-50 px-3 py-1 rounded-full border border-zinc-200 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Paciente Verificado
                  </span>
                </div>

                {/* Testimonial Quote */}
                <p className="text-black text-base sm:text-lg font-light leading-relaxed mb-8 italic">
                  &ldquo;{current.text}&rdquo;
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-zinc-100">
                  <div className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold shrink-0">
                    {current.initials}
                  </div>
                  <div>
                    <h4 className="text-base text-black font-bold tracking-tight">
                      {current.name}
                    </h4>
                    <p className="text-xs text-textMuted font-light">
                      {current.treatment} • Atendido em {current.date}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prev}
                className="w-10 h-10 rounded-full bg-white border border-zinc-200 text-black hover:bg-black hover:text-white flex items-center justify-center transition-all shadow-sm focus:outline-none"
                aria-label="Depoimento anterior"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={next}
                className="w-10 h-10 rounded-full bg-white border border-zinc-200 text-black hover:bg-black hover:text-white flex items-center justify-center transition-all shadow-sm focus:outline-none"
                aria-label="Próximo depoimento"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS_DATA.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-7 bg-black" : "w-2 bg-zinc-300 hover:bg-zinc-400"
                  }`}
                  aria-label={`Ir para depoimento ${i + 1}`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
