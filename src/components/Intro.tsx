'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Intro() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative top borderline */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#18363B]/10 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-3">
              <span className="inline-block px-3 py-1 rounded-full bg-zinc-100 text-[10px] font-bold tracking-widest text-zinc-500 uppercase mb-3">UMA ABORDAGEM INTEGRADA</span>
              <h2 className="tracking-tight text-3xl sm:text-4xl lg:text-5xl text-black leading-[1.18] tracking-tight">
                Cada pessoa possui uma história.{' '}
                <span className="text-zinc-500 block sm:inline">
                  O tratamento também deve ser individual.
                </span>
              </h2>
            </div>

            <div className="space-y-5 text-textMuted text-base lg:text-lg leading-relaxed font-light">
              <p>
                O processo terapêutico parte da compreensão aprofundada das experiências, emoções, comportamentos e particularidades de cada pessoa. Não existem fórmulas prontas para dores humanas singulares.
              </p>
              <p>
                A partir dessa escuta atenta, diferentes abordagens podem ser utilizadas de maneira integrada durante o acompanhamento: a estrutura científica da <strong>Terapia Cognitivo-Comportamental</strong>, o alcance profundo da <strong>Hipnoterapia Clínica</strong>, a precisão da <strong>Neuropsicologia</strong> e a clareza da <strong>visão sistêmica</strong>.
              </p>
              <p>
                O objetivo primordial é construir autonomia duradoura, auxiliando o paciente a ressignificar memórias de sofrimento, romper padrões repetitivos e restaurar o bem-estar psicológico com sustentabilidade.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link
                href="/sobre"
                className="btn-outline"
              >
                Conheça a trajetória profissional
              </Link>
              <div className="flex items-center gap-3 text-xs text-textMuted">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-200" />
                <span>Base científica e ética profissional</span>
              </div>
            </div>
          </motion.div>

          {/* Right Image Column (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-apple border border-zinc-200/10">
              {/* Image of warm therapeutic setting */}
              <div className="aspect-[4/3] sm:aspect-[1/1] w-full overflow-hidden bg-surface">
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=85&fit=crop"
                  alt="Espaço terapêutico acolhedor e humanizado"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Inset Quote Pill */}
              <div className="p-6 bg-black text-white">
                <p className="tracking-tight italic text-lg leading-snug text-[#F8F8F5]">
                  &ldquo;A escuta atenta revela caminhos onde antes só existiam bloqueios.&rdquo;
                </p>
                <div className="mt-3 flex items-center justify-between text-xs text-zinc-500">
                  <span className="font-semibold tracking-wider uppercase">Cristiano Ávila</span>
                  <span className="text-white/60">Atendimento Humanizado</span>
                </div>
              </div>
            </div>

            {/* Subtle decorative offset border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border border-zinc-200/20 -z-10 hidden sm:block" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
