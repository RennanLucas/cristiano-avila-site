"use client";

import { useState } from "react";
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

  const details = [
    location ? `Modalidade/local: ${location}` : null,
    period ? `Período preferido: ${period}` : null,
  ].filter(Boolean).join("\n");

  const customMessage = `Olá, Dr. Cristiano. Gostaria de verificar a disponibilidade para uma primeira consulta.${details ? `\n\n${details}` : ""}`;

  return (
    <section className="py-20 md:py-24 bg-white border-y border-zinc-200/70">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11px] font-semibold tracking-[0.16em] text-zinc-500 uppercase">Primeiro contato</span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black mt-3 mb-3">
            Consulte a disponibilidade de atendimento
          </h2>
          <p className="text-zinc-600 text-base font-light leading-relaxed">
            Você pode informar apenas modalidade e período. Questões clínicas podem ser conversadas no ambiente apropriado de atendimento.
          </p>
        </div>

        <div className="bg-zinc-50 rounded-3xl p-6 md:p-9 border border-zinc-200">
          <div className="grid md:grid-cols-2 gap-8">
            <fieldset>
              <legend className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">Onde prefere ser atendido?</legend>
              <div className="flex flex-wrap gap-2">
                {LOCATIONS.map((loc) => (
                  <button key={loc.id} type="button" onClick={() => setSelectedLocation(loc.id)} aria-pressed={selectedLocation === loc.id} className={`px-3.5 py-2.5 rounded-xl text-xs font-medium border transition-all ${selectedLocation === loc.id ? "bg-black text-white border-black" : "bg-white text-zinc-700 border-zinc-200 hover:border-zinc-400"}`}>
                    {loc.label}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">Período de preferência</legend>
              <div className="flex flex-wrap gap-2">
                {PERIODS.map((periodItem) => (
                  <button key={periodItem.id} type="button" onClick={() => setSelectedPeriod(periodItem.id)} aria-pressed={selectedPeriod === periodItem.id} className={`px-3.5 py-2.5 rounded-xl text-xs font-medium border transition-all ${selectedPeriod === periodItem.id ? "bg-black text-white border-black" : "bg-white text-zinc-700 border-zinc-200 hover:border-zinc-400"}`}>
                    {periodItem.label}
                  </button>
                ))}
              </div>
            </fieldset>
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-200 flex flex-col md:flex-row md:items-end justify-between gap-5">
            <p className="text-[11px] leading-relaxed text-zinc-500 max-w-xl">{FIRST_CONTACT_PRIVACY_NOTE}</p>
            <a href={buildWhatsAppLink(customMessage)} target="_blank" rel="noopener noreferrer" className="btn-primary shrink-0 text-xs py-3.5 px-7 text-center">
              Continuar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
