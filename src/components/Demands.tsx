'use client';

import { motion } from 'framer-motion';
import { DEMANDS_LIST } from '@/data/content';

export default function Demands() {
  return (
    <section className="py-24 lg:py-32 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-3">
            <span className="w-6 h-[1.5px] bg-zinc-200" />
            <span className="inline-block px-3 py-1 rounded-full bg-zinc-100 text-[10px] font-bold tracking-widest text-zinc-500 uppercase mb-3">DEMANDAS & SITUAÇÕES CLÍNICAS</span>
            <span className="w-6 h-[1.5px] bg-zinc-200" />
          </div>

          <h2 className="tracking-tight text-3xl sm:text-4xl lg:text-5xl text-black tracking-tight">
            Em quais situações o acompanhamento pode ajudar?
          </h2>

          <p className="text-textMuted text-base lg:text-lg font-light leading-relaxed">
            Buscar apoio psicológico é um passo de maturidade e autocuidado. A psicoterapia oferece suporte estruturado para diversas fases, transições e desafios emocionais.
          </p>
        </div>

        {/* Demands Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {DEMANDS_LIST.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.05, ease: 'easeOut' }}
              className="p-6 rounded-2xl bg-surface border border-zinc-200/8 hover:border-zinc-200/40 hover:bg-white hover:shadow-apple transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-2 h-2 rounded-full bg-zinc-200 mb-3 group-hover:scale-125 transition-transform" />
                <h3 className="tracking-tight text-lg text-black font-semibold mb-2 group-hover:text-zinc-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-textMuted leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ethical Disclaimer */}
        <div className="mt-12 text-center text-xs text-textMuted/80 max-w-2xl mx-auto">
          <p>
            * O acompanhamento é conduzido de forma ética e individualizada, em conformidade com as diretrizes do Conselho Federal de Psicologia. A evolução terapêutica varia para cada indivíduo e não constitui promessa de cura ou resultado absoluto.
          </p>
        </div>

      </div>
    </section>
  );
}
