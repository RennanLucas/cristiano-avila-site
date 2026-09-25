'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS_DATA } from '@/data/content';

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
    <section className="py-24 lg:py-32 bg-[#F8F8F5] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-3">
            <span className="w-6 h-[1.5px] bg-[#B7925A]" />
            <span className="tag-gold text-xs">DEPOIMENTOS REAIS DE PACIENTES</span>
            <span className="w-6 h-[1.5px] bg-[#B7925A]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#18363B] tracking-tight">
            Experiências de quem passou pelo acompanhamento
          </h2>

          <p className="text-[#667174] text-base lg:text-lg font-light leading-relaxed">
            Relatos espontâneos registrados por pessoas atendidas presencialmente e de forma online.
          </p>
        </div>

        {/* Testimonial Card Slider */}
        <div className="relative">
          <div className="min-h-[380px] sm:min-h-[320px] relative flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.id}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 40 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="w-full bg-white rounded-3xl p-8 sm:p-12 lg:p-14 shadow-luxury border border-[#18363B]/8 relative"
              >
                {/* Quotation icon */}
                <div className="absolute top-6 right-8 text-[#B7925A]/15 font-serif text-8xl leading-none select-none pointer-events-none">
                  &ldquo;
                </div>

                {/* Stars and verified tag */}
                <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                  <div className="flex items-center gap-1 text-[#B7925A]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs text-[#18363B] bg-[#F8F8F5] px-3 py-1 rounded-full border border-[#18363B]/10 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    Paciente Verificado
                  </span>
                </div>

                {/* Testimonial Quote */}
                <p className="text-[#1C2628] text-base sm:text-lg lg:text-xl font-light leading-relaxed mb-8 italic">
                  &ldquo;{current.text}&rdquo;
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-[#18363B] text-white flex items-center justify-center font-serif text-lg font-semibold flex-shrink-0">
                    {current.initials}
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-[#18363B] font-semibold">
                      {current.name}
                    </h4>
                    <p className="text-xs text-[#667174]">
                      {current.treatment} • Registrado em {current.date}
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
                onClick={prev}
                className="w-11 h-11 rounded-full bg-white border border-[#18363B]/15 text-[#18363B] hover:border-[#B7925A] hover:text-[#B7925A] flex items-center justify-center transition-colors shadow-sm focus:outline-none"
                aria-label="Depoimento anterior"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={next}
                className="w-11 h-11 rounded-full bg-white border border-[#18363B]/15 text-[#18363B] hover:border-[#B7925A] hover:text-[#B7925A] flex items-center justify-center transition-colors shadow-sm focus:outline-none"
                aria-label="Próximo depoimento"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Dots */}
            <div className="flex items-center gap-1.5">
              {TESTIMONIALS_DATA.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? 'w-8 bg-[#B7925A]' : 'w-2 bg-[#18363B]/20 hover:bg-[#18363B]/40'
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
