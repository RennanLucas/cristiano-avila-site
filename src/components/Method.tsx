'use client';

import { motion } from 'framer-motion';
import { METHOD_STEPS } from '@/data/content';

export default function Method() {
  return (
    <section id="metodo" className="py-24 lg:py-32 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-3">
            <span className="w-6 h-[1.5px] bg-[#B7925A]" />
            <span className="tag-gold text-xs">MÉTODO CLÍNICO</span>
            <span className="w-6 h-[1.5px] bg-[#B7925A]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#18363B] tracking-tight">
            Como funciona o acompanhamento
          </h2>

          <p className="text-[#667174] text-base lg:text-lg font-light leading-relaxed">
            Uma jornada transparente, pautada no respeito aos seus limites e focada em resultados progressivos e duradouros.
          </p>
        </div>

        {/* Timeline Desktop (Horizontal) & Mobile (Vertical) */}
        <div className="relative">
          {/* Horizontal Line on Desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[1.5px] bg-gradient-to-r from-[#B7925A]/20 via-[#B7925A] to-[#B7925A]/20 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-8">
            {METHOD_STEPS.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: 'easeOut' }}
                className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left group"
              >
                {/* Step Circle Header */}
                <div className="relative mb-6">
                  <div className="w-[104px] h-[104px] rounded-full bg-white border-2 border-[#18363B]/15 group-hover:border-[#B7925A] shadow-luxury flex items-center justify-center transition-all duration-400 group-hover:scale-105">
                    <span className="font-serif text-3xl font-normal text-[#18363B] group-hover:text-[#B7925A] transition-colors">
                      {step.num}
                    </span>
                  </div>
                  {/* Micro Badge */}
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 lg:left-2 lg:translate-x-0 text-[10px] font-semibold uppercase tracking-wider bg-[#18363B] text-white px-2.5 py-0.5 rounded-full whitespace-nowrap shadow-sm">
                    {step.badge}
                  </span>
                </div>

                {/* Step Text */}
                <h3 className="font-serif text-xl text-[#18363B] font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-[#667174] text-sm leading-relaxed font-light">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footnote CTA */}
        <div className="mt-16 pt-10 border-t border-gray-100 text-center">
          <p className="text-sm text-[#667174] mb-5">
            Deseja compreender qual abordagem é mais indicada para a sua situação?
          </p>
          <a
            href="https://wa.me/5511995235839?text=Ol%C3%A1%2C%20gostaria%20de%20esclarecer%20d%C3%BAvidas%20sobre%20as%20etapas%20do%20atendimento%20com%20Cristiano%20%C3%81vila."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs"
          >
            Tirar dúvidas com o profissional
          </a>
        </div>

      </div>
    </section>
  );
}
