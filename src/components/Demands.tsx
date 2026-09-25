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
            <span className="w-6 h-[1.5px] bg-[#B7925A]" />
            <span className="tag-gold text-xs">DEMANDAS & SITUAÇÕES CLÍNICAS</span>
            <span className="w-6 h-[1.5px] bg-[#B7925A]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#18363B] tracking-tight">
            Em quais situações o acompanhamento pode ajudar?
          </h2>

          <p className="text-[#667174] text-base lg:text-lg font-light leading-relaxed">
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
              className="p-6 rounded-2xl bg-[#F8F8F5] border border-[#18363B]/8 hover:border-[#B7925A]/40 hover:bg-white hover:shadow-luxury transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-2 h-2 rounded-full bg-[#B7925A] mb-3 group-hover:scale-125 transition-transform" />
                <h3 className="font-serif text-lg text-[#18363B] font-semibold mb-2 group-hover:text-[#B7925A] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#667174] leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ethical Disclaimer */}
        <div className="mt-12 text-center text-xs text-[#667174]/80 max-w-2xl mx-auto">
          <p>
            * O acompanhamento é conduzido de forma ética e individualizada, em conformidade com as diretrizes do Conselho Federal de Psicologia. A evolução terapêutica varia para cada indivíduo e não constitui promessa de cura ou resultado absoluto.
          </p>
        </div>

      </div>
    </section>
  );
}
