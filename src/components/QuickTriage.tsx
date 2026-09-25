"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { buildWhatsAppLink } from "@/data/content";
import { CURRENT_UNITS } from "@/data/units";
import { FIRST_CONTACT_PRIVACY_NOTE } from "@/lib/site-policy";

const LOCATIONS = [
  { id: "online", label: "Online" },
  ...CURRENT_UNITS.map((unit) => ({ id: unit.id, label: unit.city })),
];

const PERIODS = [
  { id: "manha", label: "Manhã" },
  { id: "tarde", label: "Tarde" },
  { id: "noite", label: "Noite" },
  { id: "flexivel", label: "Flexível" },
];

export default function QuickTriage() {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedPeriod, setSelectedPeriod] = useState<string | null>(null);

  const location = LOCATIONS.find((item) => item.id === selectedLocation)?.label;
  const period = PERIODS.find((item) => item.id === selectedPeriod)?.label;
  const ready = Boolean(location || period);

  const details = [
    location ? `Modalidade/local: ${location}` : null,
    period ? `Período preferido: ${period}` : null,
  ].filter(Boolean).join("\n");

  const customMessage = `Olá, Dr. Cristiano. Gostaria de verificar a disponibilidade para uma primeira consulta.${details ? `\n\n${details}` : ""}`;

  return (
    <section className="relative overflow-hidden border-y border-zinc-200/60 bg-[#F3F3F1] py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 soft-grid opacity-[0.28] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />
      <div className="aurora-orb absolute -left-24 top-12 h-72 w-72 rounded-full bg-fuchsia-100/45 blur-[100px]" />
      <div className="aurora-orb aurora-orb-delayed absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-amber-100/60 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="grid overflow-hidden rounded-[34px] premium-dark text-white lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div className="relative flex min-h-[420px] flex-col justify-between overflow-hidden border-b border-white/10 p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
            <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-[85px]" />
            <div className="pointer-events-none absolute -bottom-20 right-[-3rem] h-72 w-72 rounded-full bg-amber-300/10 blur-[90px]" />
            <div className="pointer-events-none absolute inset-0 soft-grid opacity-[0.07]" />

            <div className="relative z-10">
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">Primeiro contato</span>
              <h2 className="mt-5 max-w-md text-3xl font-semibold leading-[1.06] tracking-[-0.04em] sm:text-4xl lg:text-[2.85rem]">
                Consulte a disponibilidade em menos de um minuto.
              </h2>
              <p className="mt-5 max-w-md text-sm font-light leading-relaxed text-white/55 sm:text-base">
                Escolha apenas local e período de preferência. Questões clínicas ficam para o ambiente adequado de atendimento.
              </p>
            </div>

            <div className="relative z-10 mt-10 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 backdrop-blur">
                <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/35">Etapa 01</span>
                <strong className="mt-1.5 block text-sm font-medium text-white">Escolha o local</strong>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 backdrop-blur">
                <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/35">Etapa 02</span>
                <strong className="mt-1.5 block text-sm font-medium text-white">Indique o período</strong>
              </div>
            </div>
          </div>

          <div className="bg-white/95 p-6 text-black sm:p-9 lg:p-12">
            <div className="grid gap-9">
              <fieldset>
                <div className="mb-4 flex items-center justify-between gap-4">
                  <legend className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">Onde prefere ser atendido?</legend>
                  <span className="font-mono text-[10px] text-zinc-300">01 / 02</span>
                </div>

                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                  {LOCATIONS.map((loc) => {
                    const active = selectedLocation === loc.id;
                    return (
                      <motion.button
                        key={loc.id}
                        type="button"
                        onClick={() => setSelectedLocation(loc.id)}
                        aria-pressed={active}
                        whileTap={{ scale: 0.97 }}
                        className={`relative overflow-hidden rounded-2xl border px-3 py-3.5 text-left text-xs font-medium transition-colors duration-300 ${active ? "border-black text-white" : "border-zinc-200 bg-zinc-50/75 text-zinc-600 hover:border-zinc-400 hover:bg-white"}`}
                      >
                        {active && <motion.span layoutId="locationChoice" className="absolute inset-0 bg-black" transition={{ type: "spring", stiffness: 420, damping: 32 }} />}
                        <span className="relative z-10 flex items-center justify-between gap-2">
                          <span>{loc.label}</span>
                          <span className={active ? "text-white/50" : "text-zinc-300"} aria-hidden="true">•</span>
                        </span>
                      </motion.button>
                    );
                  })}
                </div>
              </fieldset>

              <fieldset>
                <div className="mb-4 flex items-center justify-between gap-4">
                  <legend className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">Período de preferência</legend>
                  <span className="font-mono text-[10px] text-zinc-300">02 / 02</span>
                </div>

                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                  {PERIODS.map((periodItem) => {
                    const active = selectedPeriod === periodItem.id;
                    return (
                      <motion.button
                        key={periodItem.id}
                        type="button"
                        onClick={() => setSelectedPeriod(periodItem.id)}
                        aria-pressed={active}
                        whileTap={{ scale: 0.97 }}
                        className={`relative overflow-hidden rounded-2xl border px-3 py-3.5 text-center text-xs font-medium transition-colors duration-300 ${active ? "border-black text-white" : "border-zinc-200 bg-zinc-50/75 text-zinc-600 hover:border-zinc-400 hover:bg-white"}`}
                      >
                        {active && <motion.span layoutId="periodChoice" className="absolute inset-0 bg-black" transition={{ type: "spring", stiffness: 420, damping: 32 }} />}
                        <span className="relative z-10">{periodItem.label}</span>
                      </motion.button>
                    );
                  })}
                </div>
              </fieldset>

              <div className="border-t border-zinc-200 pt-7">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${location ?? "none"}-${period ?? "none"}`}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.22 }}
                    className="mb-5 flex min-h-[42px] flex-wrap items-center gap-2"
                  >
                    {location ? <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-[10px] font-semibold text-zinc-600">{location}</span> : null}
                    {period ? <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-[10px] font-semibold text-zinc-600">{period}</span> : null}
                    {!ready ? <span className="text-xs font-light text-zinc-400">Você pode selecionar uma ou as duas opções.</span> : null}
                  </motion.div>
                </AnimatePresence>

                <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                  <p className="max-w-xl text-[10px] font-light leading-relaxed text-zinc-400">{FIRST_CONTACT_PRIVACY_NOTE}</p>
                  <a href={buildWhatsAppLink(customMessage)} target="_blank" rel="noopener noreferrer" className="btn-primary shrink-0 px-7 py-3.5 text-center text-xs">
                    Continuar no WhatsApp <span className="ml-2" aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
