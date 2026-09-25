"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { buildWhatsAppLink } from "@/data/content";

const GOALS = [
  { id: "ansiedade", label: "Ansiedade ou Pânico", icon: "🧠" },
  { id: "tdah", label: "TDAH e Foco", icon: "⚡" },
  { id: "burnout", label: "Sobrecarga & Burnout", icon: "💼" },
  { id: "hipnose", label: "Hipnoterapia Clínica", icon: "🌀" },
  { id: "emocional", label: "Autoconhecimento", icon: "🌱" },
  { id: "outro", label: "Outra Demanda", icon: "💬" },
];

const LOCATIONS = [
  { id: "online", label: "Online (Brasil & Exterior)", tag: "Mais flexível" },
  { id: "sp", label: "São Paulo (Santana Corporate)", tag: "Presencial" },
  { id: "atibaia", label: "Atibaia (Alvinópolis)", tag: "Presencial" },
  { id: "santos", label: "Santos (The Blue - Vila Matias)", tag: "Presencial" },
  { id: "sbc", label: "São Bernardo do Campo (Domo Business)", tag: "Presencial" },
];

const PERIODS = [
  { id: "manha", label: "Manhã" },
  { id: "tarde", label: "Tarde" },
  { id: "noite", label: "Noite" },
  { id: "qualquer", label: "Horário flexível" },
];

export default function QuickTriage() {
  const [selectedGoal, setSelectedGoal] = useState(GOALS[0]);
  const [selectedLocation, setSelectedLocation] = useState(LOCATIONS[0]);
  const [selectedPeriod, setSelectedPeriod] = useState(PERIODS[3]);

  const customMessage = `Olá, Dr. Cristiano! Estive em seu site e gostaria de agendar uma consulta.\n\n• Motivo principal: ${selectedGoal.label}\n• Modalidade: ${selectedLocation.label}\n• Período preferido: ${selectedPeriod.label}\n\nPoderia me informar sobre a disponibilidade de horários?`;

  const whatsappHref = buildWhatsAppLink(customMessage);

  return (
    <section className="py-20 md:py-28 bg-[#FAFAFA] border-y border-zinc-200/70 relative overflow-hidden">
      {/* Background subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-zinc-200/40 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-zinc-200/70 text-[10px] font-bold tracking-widest text-zinc-700 uppercase mb-3">
            Triagem Rápida em 3 Passos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-3">
            Qual é a sua prioridade hoje?
          </h2>
          <p className="text-textMuted text-base font-light">
            Selecione suas preferências abaixo para gerar uma mensagem pronta e obter resposta ágil da nossa equipe.
          </p>
        </div>

        {/* Card Interativo */}
        <div className="bg-white rounded-3xl p-6 md:p-10 border border-zinc-200 shadow-apple">
          {/* Passo 1: Motivo */}
          <div className="mb-8">
            <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">
              1. Motivo ou área de foco
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {GOALS.map((goal) => {
                const isSelected = selectedGoal.id === goal.id;
                return (
                  <button
                    key={goal.id}
                    type="button"
                    onClick={() => setSelectedGoal(goal)}
                    className={`flex items-center gap-2 px-3.5 py-3 rounded-xl text-left text-xs font-medium transition-all duration-150 ${
                      isSelected
                        ? "bg-black text-white shadow-sm scale-[1.01]"
                        : "bg-zinc-50 text-zinc-700 hover:bg-zinc-100 border border-zinc-200/60"
                    }`}
                  >
                    <span>{goal.icon}</span>
                    <span className="truncate">{goal.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Passo 2: Modalidade */}
          <div className="mb-8">
            <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">
              2. Modalidade de atendimento
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {LOCATIONS.map((loc) => {
                const isSelected = selectedLocation.id === loc.id;
                return (
                  <button
                    key={loc.id}
                    type="button"
                    onClick={() => setSelectedLocation(loc)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-left text-xs font-medium transition-all duration-150 ${
                      isSelected
                        ? "bg-black text-white shadow-sm scale-[1.01]"
                        : "bg-zinc-50 text-zinc-700 hover:bg-zinc-100 border border-zinc-200/60"
                    }`}
                  >
                    <span className="truncate">{loc.label}</span>
                    <span
                      className={`text-[9px] uppercase px-1.5 py-0.5 rounded tracking-wide font-semibold ml-2 shrink-0 ${
                        isSelected
                          ? "bg-white/20 text-white"
                          : "bg-zinc-200/70 text-zinc-600"
                      }`}
                    >
                      {loc.tag}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Passo 3: Período */}
          <div className="mb-10">
            <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">
              3. Preferência de horário
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {PERIODS.map((period) => {
                const isSelected = selectedPeriod.id === period.id;
                return (
                  <button
                    key={period.id}
                    type="button"
                    onClick={() => setSelectedPeriod(period)}
                    className={`px-4 py-2.5 rounded-xl text-center text-xs font-medium transition-all duration-150 ${
                      isSelected
                        ? "bg-black text-white shadow-sm"
                        : "bg-zinc-50 text-zinc-700 hover:bg-zinc-100 border border-zinc-200/60"
                    }`}
                  >
                    {period.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Ação final e CTA */}
          <div className="pt-6 border-t border-zinc-100 flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-3 text-xs text-textMuted">
              <span className="flex h-2.5 w-2.5 relative shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span>
                Resposta média da equipe em <strong className="text-black font-semibold">até 2 horas úteis</strong>
              </span>
            </div>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-black text-white text-xs font-semibold hover:bg-zinc-800 transition-all shadow-apple active:scale-[0.98]"
            >
              <span>Continuar no WhatsApp com essa preferência</span>
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.913.913l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.675-.839-6.481-2.373l-.388-.322-2.65.889.889-2.65-.322-.388A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
