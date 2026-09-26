"use client";

import { motion } from "framer-motion";
import { METHOD_STEPS, buildWhatsAppLink } from "@/data/content";

export default function Method() {
  return (
    <section id="metodologia" className="relative overflow-hidden border-t border-zinc-100 bg-white py-24 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-24 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-zinc-100/80 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0.45, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-35px" }}
          transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="editorial-label">Como funciona</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-black md:text-5xl">Um acompanhamento com etapas claras e espaço para ajustes.</h2>
          <p className="mt-5 text-base font-light leading-relaxed text-zinc-600 sm:text-lg">
            O processo começa pela compreensão da sua demanda e evolui de acordo com objetivos, necessidades e avanços ao longo do acompanhamento.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[7%] right-[7%] top-8 hidden h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent lg:block" />
          <motion.div
            initial={{ scaleX: 0.25, opacity: 0.4 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-[12%] right-[12%] top-8 hidden h-px origin-left bg-black lg:block"
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {METHOD_STEPS.map((step, idx) => (
              <motion.article
                key={step.num}
                initial={{ opacity: 0.5, y: 16, scale: 0.99 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-35px" }}
                transition={{ duration: 0.4, delay: idx * 0.055, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="relative z-10 mb-5 ml-6 flex h-16 w-16 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-[0_14px_38px_rgba(0,0,0,0.09)] transition-all duration-500 group-hover:scale-110 group-hover:bg-black group-hover:text-white lg:mx-auto">
                  <span className="font-mono text-sm font-semibold">{step.num}</span>
                  <span className="absolute inset-[-7px] rounded-full border border-zinc-100 transition-transform duration-700 group-hover:scale-110" />
                </div>

                <div className="premium-card relative min-h-[250px] overflow-hidden rounded-[26px] p-7">
                  <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-zinc-100 transition-transform duration-700 group-hover:scale-125" />
                  <div className="pointer-events-none absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-amber-100/45 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-zinc-400">Etapa {String(idx + 1).padStart(2, "0")}</span>
                    <h3 className="mt-4 text-xl font-semibold tracking-[-0.025em] text-black">{step.title}</h3>
                    <p className="mt-4 text-sm font-light leading-relaxed text-zinc-600">{step.desc}</p>
                  </div>

                  {step.badge && (
                    <div className="relative z-10 mt-7 border-t border-zinc-200/70 pt-4 text-[11px] font-light leading-relaxed text-zinc-500">{step.badge}</div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0.55, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-25px" }}
          transition={{ duration: 0.35, delay: 0.08 }}
          className="mt-16 text-center"
        >
          <a href={buildWhatsAppLink("Olá, Dr. Cristiano! Gostaria de esclarecer dúvidas sobre como funciona o acompanhamento psicológico.")} target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-3.5 text-xs">
            Tirar dúvidas sobre o atendimento
          </a>
        </motion.div>
      </div>
    </section>
  );
}
