'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CLINIC_CONTACT } from '@/data/content';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 lg:pt-36 pb-20 overflow-hidden bg-[#F8F8F5]">
      {/* Decorative luxury background ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Warm champagne radial orb */}
        <div className="absolute -top-[15%] -right-[10%] w-[650px] h-[650px] rounded-full bg-[#B7925A]/10 blur-[130px] animate-pulse-glow" />
        {/* Soft deep teal ground orb */}
        <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-[#18363B]/5 blur-[120px]" />
        {/* Abstract subtle circle hairline */}
        <div className="absolute top-[25%] right-[44%] w-[380px] h-[380px] rounded-full border border-[#B7925A]/15 pointer-events-none hidden xl:block animate-subtle-float" />
        <div className="absolute top-[28%] right-[42%] w-[320px] h-[320px] rounded-full border border-[#18363B]/5 pointer-events-none hidden xl:block" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Presentation (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Overline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-flex items-center gap-3"
            >
              <span className="w-8 h-[1.5px] bg-[#B7925A]" />
              <span className="tag-gold text-xs">
                PSICOLOGIA • NEUROCIÊNCIA • HIPNOTERAPIA
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
              className="font-serif text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] text-[#18363B] leading-[1.12] tracking-tight"
            >
              Compreender a mente é o primeiro passo para{' '}
              <span className="relative inline-block">
                <span className="relative z-10 italic text-[#B7925A]">transformar</span>
                <span className="absolute bottom-1.5 left-0 right-0 h-3 bg-[#B7925A]/15 -z-0 rounded-sm" />
              </span>{' '}
              a maneira como vivemos.
            </motion.h1>

            {/* Subtitle Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
              className="text-[#667174] text-lg lg:text-xl font-light leading-relaxed max-w-2xl"
            >
              Atendimento psicológico clínico baseado em escuta qualificada, conhecimento neurocientífico e estratégias terapêuticas rigorosamente individualizadas para cada pessoa.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <a
                href={CLINIC_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary shadow-luxury"
              >
                <span>Agendar uma consulta</span>
                <svg className="w-4 h-4 text-[#B7925A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              <Link
                href="/especialidades"
                className="btn-outline"
              >
                Conhecer especialidades
              </Link>
            </motion.div>

            {/* Presencial & Online Service Footnote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-6 border-t border-[#18363B]/10 space-y-3"
            >
              <div className="flex items-center gap-2.5 text-xs text-[#18363B] font-medium tracking-wide">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                <span>Atendimento presencial e online (Brasil e Exterior)</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#667174]">
                <span className="font-semibold text-[#18363B]">Consultórios:</span>
                {['Atibaia', 'São Paulo (Santana)', 'Santos', 'São Bernardo do Campo'].map((city, idx) => (
                  <span
                    key={city}
                    className="inline-flex items-center px-2.5 py-1 rounded-full bg-white border border-[#18363B]/8 text-[#1C2628]"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right Column: High-End Portrait & Badges (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            {/* Luxury Card Frame */}
            <div className="relative mx-auto max-w-[440px] lg:max-w-none">
              {/* Outer decorative borders */}
              <div className="absolute -inset-3 rounded-3xl border border-[#B7925A]/25 -rotate-1 pointer-events-none" />
              <div className="absolute -inset-6 rounded-3xl border border-[#18363B]/5 rotate-1 pointer-events-none hidden sm:block" />

              {/* Card Container */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#18363B] to-[#0F262B] shadow-2xl border border-white/40">
                {/* Authentic Photo */}
                <div className="relative aspect-[4/5] w-full overflow-hidden flex items-end justify-center bg-[#18363B]">
                  {/* Subtle lighting overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18363B] via-transparent to-[#18363B]/20 z-10 pointer-events-none" />
                  
                  <img
                    src={CLINIC_CONTACT.avatarUrl}
                    alt="Cristiano Ávila - Psicólogo Clínico e Hipnoterapeuta"
                    className="relative z-0 w-full h-full object-cover object-top filter contrast-[1.03]"
                  />

                  {/* Top Badge: Role */}
                  <div className="absolute top-5 left-5 z-20 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/80 shadow-md">
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-[#18363B]">
                      Psicólogo Clínico • OMNI
                    </span>
                  </div>
                </div>

                {/* Bottom Card Footer Info */}
                <div className="p-6 bg-white border-t border-[#B7925A]/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-serif text-xl text-[#18363B] font-semibold">
                        Cristiano Ávila da Silva
                      </h3>
                      <p className="text-xs text-[#667174] mt-0.5">
                        Psicólogo, Neurocientista e Hipnoterapeuta
                      </p>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-[#F8F8F5] border border-[#B7925A]/30 flex items-center justify-center text-[#B7925A] flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>

                  {/* Credentials Pills */}
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] text-[#667174]">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B7925A]" />
                      OMNI Training Center
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#18363B]" />
                      +10 anos de prática
                    </span>
                  </div>
                </div>

              </div>

              {/* Floating Verified Badge */}
              <div className="absolute -bottom-5 -left-5 bg-[#F8F8F5] p-3 rounded-xl border border-[#B7925A]/30 shadow-lg hidden sm:flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#18363B] text-white flex items-center justify-center font-serif text-sm">
                  CÁ
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-[#18363B]">Atendimento Individualizado</p>
                  <p className="text-[10px] text-[#667174]">Presencial & Online</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
