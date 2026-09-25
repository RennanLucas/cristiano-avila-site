"use client";

import { motion } from "framer-motion";
import { PROFESSIONAL_REGISTRATION } from "@/lib/site-policy";

const CREDENTIALS = [
  {
    label: "Registro profissional",
    value: PROFESSIONAL_REGISTRATION,
    detail: "Psicologia clínica",
  },
  {
    label: "Experiência",
    value: "+10 anos",
    detail: "Atuação clínica e institucional",
  },
  {
    label: "Atendimento presencial",
    value: "4 cidades",
    detail: "Praia Grande • Atibaia • SBC • Santos",
  },
  {
    label: "Formação complementar",
    value: "OMNI",
    detail: "Hipnoterapia clínica",
  },
];

function CredentialIcon({ index }: { index: number }) {
  const common = "h-4 w-4";

  if (index === 0) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
        <path d="M12 3 6.5 5v5.2c0 4 2.3 7.6 5.5 9.1 3.2-1.5 5.5-5.1 5.5-9.1V5L12 3Z" strokeWidth="1.6" />
        <path d="m9.4 11.9 1.6 1.6 3.7-4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
        <circle cx="12" cy="12" r="7.5" strokeWidth="1.6" />
        <path d="M12 8v4.4l2.8 1.7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (index === 2) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
        <path d="M12 20s5-4.6 5-9a5 5 0 1 0-10 0c0 4.4 5 9 5 9Z" strokeWidth="1.6" />
        <circle cx="12" cy="11" r="1.8" strokeWidth="1.6" />
      </svg>
    );
  }

  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path d="M7 4.5h8.5A1.5 1.5 0 0 1 17 6v12H8a2 2 0 0 1-2-2V5.5A1 1 0 0 1 7 4.5Z" strokeWidth="1.6" />
      <path d="M9.5 8h4.5M9.5 11h4.5M9.5 14h3" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function TrustBadges() {
  return (
    <div className="mx-auto w-full max-w-6xl">
      <div className="premium-dark relative overflow-hidden rounded-[30px] text-white">
        <div className="pointer-events-none absolute -left-16 -top-20 h-56 w-56 rounded-full bg-fuchsia-500/10 blur-[70px]" />
        <div className="pointer-events-none absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-amber-300/10 blur-[80px]" />
        <div className="pointer-events-none absolute inset-0 soft-grid opacity-[0.06]" />

        <div className="relative z-10 border-b border-white/[0.07] px-6 py-7 sm:px-8 lg:flex lg:items-end lg:justify-between lg:gap-12">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">Perfil profissional</span>
            <h2 className="mt-2 text-xl font-semibold tracking-[-0.025em] sm:text-2xl lg:text-[28px]">Credenciais e formas de atendimento</h2>
          </div>
          <p className="mt-4 max-w-xl text-xs font-light leading-relaxed text-white/65 lg:mt-0 lg:text-right lg:text-[13px]">
            Informações objetivas sobre registro, experiência, presença física e formação complementar.
          </p>
        </div>

        <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-4">
          {CREDENTIALS.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.42, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="group relative min-h-[190px] border-white/[0.07] p-6 transition-colors duration-500 hover:bg-white/[0.025] sm:p-7 [&:not(:first-child)]:border-t sm:[&:nth-child(even)]:border-l sm:[&:nth-child(n+3)]:border-t lg:[&:not(:first-child)]:border-l lg:[&:nth-child(n+3)]:border-t-0"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="font-mono text-[10px] text-white/30">{String(index + 1).padStart(2, "0")}</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.09] bg-white/[0.035] text-white/45 transition-all duration-500 group-hover:border-white/15 group-hover:bg-white/[0.07] group-hover:text-white/75">
                  <CredentialIcon index={index} />
                </span>
              </div>

              <span className="block text-[9px] font-semibold uppercase tracking-[0.17em] text-white/50">{item.label}</span>
              <strong className="mt-2.5 block text-[22px] font-semibold tracking-[-0.025em] text-white lg:text-2xl">{item.value}</strong>
              <span className="mt-2.5 block text-[11px] leading-relaxed text-white/60">{item.detail}</span>

              <div className="absolute inset-x-6 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-fuchsia-400/80 via-amber-300/70 to-transparent transition-transform duration-500 group-hover:scale-x-100 sm:inset-x-7" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
