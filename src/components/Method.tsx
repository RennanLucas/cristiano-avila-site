"use client";

import { motion } from "framer-motion";
import { METHOD_STEPS, buildWhatsAppLink } from "@/data/content";

export default function Method() {
  return (
    <section id="metodologia" className="py-24 lg:py-32 bg-white relative border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-3 py-1 rounded-full bg-zinc-100 text-[10px] font-bold tracking-widest text-zinc-600 uppercase mb-3">
            Método Clínico Estruturado
          </span>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black mb-4">
            Como funciona o acompanhamento
          </h2>

          <p className="text-textMuted text-base sm:text-lg font-light leading-relaxed">
            Uma jornada transparente, pautada no respeito aos seus limites e focada em resultados progressivos e duradouros.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {METHOD_STEPS.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-7 rounded-3xl bg-surface border border-zinc-200/80 shadow-apple flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-2xl font-bold text-zinc-300 block mb-4">
                  {step.num}
                </span>

                <h3 className="text-lg font-bold text-black tracking-tight mb-2">
                  {step.title}
                </h3>

                <p className="text-xs text-textMuted font-light leading-relaxed mb-4">
                  {step.desc}
                </p>
              </div>

              {step.badge && (
                <div className="pt-3 border-t border-zinc-100 text-[11px] text-zinc-500 font-light">
                  {step.badge}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <a
            href={buildWhatsAppLink("Olá, Dr. Cristiano! Gostaria de esclarecer dúvidas sobre as etapas do atendimento clínico.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs py-3 px-8 shadow-apple"
          >
            Esclarecer dúvidas sobre o método no WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
