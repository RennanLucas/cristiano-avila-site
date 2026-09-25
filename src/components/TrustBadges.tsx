"use client";

import { motion } from "framer-motion";
import { PROFESSIONAL_REGISTRATION } from "@/lib/site-policy";

const CREDENTIALS = [
  {
    label: "Registro profissional",
    value: PROFESSIONAL_REGISTRATION,
    detail: "Psicologia clínica",
    icon: "01",
  },
  {
    label: "Experiência",
    value: "+10 anos",
    detail: "Atuação clínica e institucional",
    icon: "02",
  },
  {
    label: "Atendimento presencial",
    value: "4 cidades",
    detail: "Praia Grande • Atibaia • SBC • Santos",
    icon: "03",
  },
  {
    label: "Formação complementar",
    value: "OMNI",
    detail: "Hipnoterapia clínica",
    icon: "04",
  },
];

export default function TrustBadges() {
  return (
    <div className="mx-auto w-full max-w-6xl">
      <div className="relative overflow-hidden rounded-[30px] premium-dark text-white">
        <div className="pointer-events-none absolute -left-16 -top-20 h-56 w-56 rounded-full bg-fuchsia-500/10 blur-[70px]" />
        <div className="pointer-events-none absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-amber-300/10 blur-[80px]" />
        <div className="pointer-events-none absolute inset-0 soft-grid opacity-[0.08]" />

        <div className="relative z-10 border-b border-white/10 px-6 py-6 sm:px-8 lg:flex lg:items-center lg:justify-between">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">Perfil profissional</span>
            <h2 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">Credenciais e formas de atendimento</h2>
          </div>
          <p className="mt-3 max-w-xl text-xs font-light leading-relaxed text-white/50 lg:mt-0 lg:text-right">
            Informações objetivas sobre registro, experiência, presença física e formação complementar.
          </p>
        </div>

        <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-4">
          {CREDENTIALS.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
              className="group relative min-h-[175px] border-white/10 p-6 sm:p-7 [&:not(:first-child)]:border-t sm:[&:nth-child(even)]:border-l sm:[&:nth-child(n+3)]:border-t lg:[&:not(:first-child)]:border-l lg:[&:nth-child(n+3)]:border-t-0"
            >
              <div className="mb-7 flex items-center justify-between">
                <span className="text-[10px] font-mono text-white/25">{item.icon}</span>
                <span className="h-8 w-8 rounded-full border border-white/10 bg-white/[0.04] transition-all duration-500 group-hover:scale-110 group-hover:bg-white/[0.08]" />
              </div>
              <span className="block text-[9px] font-semibold uppercase tracking-[0.16em] text-white/40">{item.label}</span>
              <strong className="mt-2 block text-xl font-semibold tracking-tight text-white">{item.value}</strong>
              <span className="mt-2 block text-[11px] leading-relaxed text-white/45">{item.detail}</span>
              <div className="absolute inset-x-6 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-fuchsia-400 via-amber-300 to-transparent transition-transform duration-500 group-hover:scale-x-100 sm:inset-x-7" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
