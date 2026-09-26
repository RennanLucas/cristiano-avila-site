"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CLINIC_CONTACT, buildWhatsAppLink } from "@/data/content";

export default function CtaSection() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2500);
  };

  return (
    <section className="relative overflow-hidden bg-black py-24 text-white lg:py-32">
      <div className="pointer-events-none absolute inset-0 soft-grid opacity-[0.08]" />
      <motion.div
        aria-hidden="true"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07]"
      >
        <span className="absolute left-1/2 top-[-5px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-white/30 shadow-[0_0_25px_rgba(255,255,255,0.35)]" />
      </motion.div>
      <motion.div
        aria-hidden="true"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]"
      >
        <span className="absolute right-8 top-8 h-2 w-2 rounded-full bg-fuchsia-300/50 shadow-[0_0_28px_rgba(240,171,252,0.5)]" />
      </motion.div>
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/[0.07] blur-[100px]" />
      <div className="pointer-events-none absolute left-[58%] top-[48%] h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300/[0.06] blur-[95px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.045] p-7 text-center shadow-[0_40px_120px_rgba(0,0,0,0.38)] backdrop-blur-xl sm:p-10 lg:p-14"
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40">Primeiro contato</span>
            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-4xl lg:text-6xl">
              Um primeiro passo pode começar com uma conversa simples.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base font-light leading-relaxed text-white/60 lg:text-lg">
              Entre em contato para consultar modalidades de atendimento, horários e disponibilidade de agenda.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-9"
          >
            <a
              href={buildWhatsAppLink("Olá, Dr. Cristiano! Gostaria de obter informações sobre horários disponíveis para consulta.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-xs font-semibold text-black shadow-[0_18px_50px_rgba(255,255,255,0.12)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.015] hover:shadow-[0_22px_70px_rgba(255,255,255,0.18)] active:translate-y-0 active:scale-[0.99]"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.913.913l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.675-.839-6.481-2.373l-.388-.322-2.65.889.889-2.65-.322-.388A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              <span>Falar pelo WhatsApp</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.28 }}
            className="relative mt-10 grid gap-3 border-t border-white/10 pt-7 sm:grid-cols-3"
          >
            <button
              type="button"
              onClick={() => copyToClipboard(CLINIC_CONTACT.phone, "Telefone")}
              className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-4 text-left transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
              title="Clique para copiar o telefone"
            >
              <span className="block text-[9px] font-semibold uppercase tracking-[0.16em] text-white/35">Telefone</span>
              <strong className="mt-1.5 block text-sm font-medium text-white">{CLINIC_CONTACT.phone}</strong>
            </button>

            <button
              type="button"
              onClick={() => copyToClipboard(CLINIC_CONTACT.email, "E-mail")}
              className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-4 text-left transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
              title="Clique para copiar o e-mail"
            >
              <span className="block text-[9px] font-semibold uppercase tracking-[0.16em] text-white/35">E-mail</span>
              <strong className="mt-1.5 block truncate text-sm font-medium text-white">{CLINIC_CONTACT.email}</strong>
            </button>

            <div className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-4 text-left">
              <span className="block text-[9px] font-semibold uppercase tracking-[0.16em] text-white/35">Modalidades</span>
              <strong className="mt-1.5 block text-sm font-medium text-white">Presencial & online</strong>
            </div>

            <AnimatePresence>
              {copiedText && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  className="absolute -top-10 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1.5 text-[10px] font-bold text-black shadow-lg"
                >
                  ✓ {copiedText} copiado
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
