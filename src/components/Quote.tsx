'use client';

import { motion } from 'framer-motion';

export default function Quote() {
  return (
    <section className="relative py-28 lg:py-36 bg-black text-white overflow-hidden flex items-center justify-center">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-zinc-200/10 blur-[140px]" />
        {/* Subtle geometric dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #FFFFFF 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      {/* Decorative Quotation Marks */}
      <div className="absolute top-8 left-8 sm:left-16 text-white/5 tracking-tight text-[120px] sm:text-[180px] leading-none select-none pointer-events-none">
        &ldquo;
      </div>
      <div className="absolute bottom-4 right-8 sm:right-16 text-white/5 tracking-tight text-[120px] sm:text-[180px] leading-none select-none pointer-events-none">
        &rdquo;
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6"
        >
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-zinc-500 block">
            CONCEITO TERAPÊUTICO
          </span>

          <blockquote className="tracking-tight text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] italic leading-[1.25] text-white tracking-tight">
            &ldquo;A mesma mente que adoece é a mesma que pode{' '}
            <span className="text-zinc-500 underline decoration-[#B7925A]/40 underline-offset-8">
              transformar
            </span>
            .&rdquo;
          </blockquote>

          <div className="w-16 h-[1.5px] bg-zinc-200 mx-auto mt-8" />

          <p className="text-sm uppercase tracking-[0.25em] text-white/70 font-medium">
            Cristiano Ávila
          </p>
          <p className="text-xs text-white/40 font-light">
            Psicólogo Clínico & Hipnoterapeuta
          </p>
        </motion.div>
      </div>
    </section>
  );
}
