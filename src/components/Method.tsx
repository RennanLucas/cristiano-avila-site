"use client";

import { motion } from "framer-motion";
import { METHOD_STEPS, buildWhatsAppLink } from "@/data/content";

export default function Method() {
  return (
    <section id="metodologia" className="relative overflow-hidden border-t border-zinc-100 bg-white py-24 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-24 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-zinc-100/80 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="editorial-label">Organização do acompanhamento</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-black md:text-5xl">Um processo claro, sem aparência de protocolo engessado.</h2>
          <p className="mt-5 text-base font-light leading-relaxed text-zinc-600 sm:text-lg">
            Objetivos e estratégias são definidos individualmente e podem ser revistos ao longo do acompanhamento.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[7%] right-[7%] top-8 hidden h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent lg:block" />
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-[12%] right-[12%] top-8 hidden h-px origin-left bg-black lg:block"
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {METHOD_STEPS.map((step, idx) => (
              <motion.article
                key={step.num}
                initial={{ opacity: 0, y: 35, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.58, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
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
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <a href={buildWhatsAppLink("Olá, Dr. Cristiano! Gostaria de esclarecer dúvidas sobre como funciona o acompanhamento psicológico.")} target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-3.5 text-xs">
            Entender como funciona o acompanhamento
          </a>
        </motion.div>
      </div>
    </section>
  );
}
