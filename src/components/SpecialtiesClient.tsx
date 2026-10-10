"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

export type SpecialtySummary = {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  badge: string;
};

const CATEGORIES = [
  { id: "todos", label: "Todas" },
  { id: "clinica", label: "Psicoterapia & Neuro" },
  { id: "hipnose", label: "Hipnoterapia" },
  { id: "online", label: "Atendimento online" },
];

export default function SpecialtiesClient({ items }: { items: SpecialtySummary[] }) {
  const [filter, setFilter] = useState("todos");
  const filteredData = useMemo(() => items.filter((item) => {
    if (filter === "todos") return true;
    if (filter === "clinica") return ["psicoterapia", "neuropsicologia", "pnl"].includes(item.id);
    if (filter === "hipnose") return item.id === "hipnoterapia";
    if (filter === "online") return item.id === "psicologia-sem-fronteiras";
    return true;
  }), [filter, items]);

  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    if (!filteredData.some((item) => item.id === activeId)) setActiveId(filteredData[0]?.id ?? "");
  }, [activeId, filteredData]);

  const activeItem = filteredData.find((item) => item.id === activeId) ?? filteredData[0];
  const activeIndex = activeItem ? items.findIndex((item) => item.id === activeItem.id) : 0;

  return (
    <section id="especialidades" className="specialties-editorial relative overflow-hidden border-t border-zinc-200/60 bg-[#F2F1EE] py-20 sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 soft-grid opacity-[0.24] [mask-image:radial-gradient(circle_at_center,black,transparent_88%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 grid gap-8 lg:mb-16 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-4xl">
            <span className="editorial-label">Formas de atendimento</span>
            <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-black sm:text-5xl lg:text-7xl">Escolha uma frente e <span className="font-serif font-normal italic text-zinc-600">explore o foco.</span></h2>
          </div>
          <p className="max-w-sm text-sm font-light leading-relaxed text-zinc-600 lg:pb-1">Passe pelas opções para ver como cada frente se diferencia antes de abrir a página completa.</p>
        </div>

        <div className="mb-8 flex max-w-full flex-nowrap gap-1.5 overflow-x-auto rounded-full border border-white/80 bg-white/60 p-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:w-fit" role="group" aria-label="Filtrar formas de atendimento">
          {CATEGORIES.map((cat) => {
            const active = filter === cat.id;
            return <button key={cat.id} type="button" onClick={() => setFilter(cat.id)} aria-pressed={active} className={`shrink-0 rounded-full px-4 py-2 text-xs font-medium transition-colors ${active ? "bg-black text-white" : "text-zinc-600 hover:bg-white hover:text-black"}`}>{cat.label}</button>;
          })}
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <div className="divide-y divide-black/10 border-y border-black/10">
            {filteredData.map((item, index) => {
              const active = item.id === activeItem?.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onMouseEnter={() => setActiveId(item.id)}
                  onFocus={() => setActiveId(item.id)}
                  onClick={() => setActiveId(item.id)}
                  className={`specialty-row group flex w-full items-center gap-4 py-5 text-left transition-opacity sm:gap-6 sm:py-6 ${active ? "opacity-100" : "opacity-45 hover:opacity-80"}`}
                  aria-pressed={active}
                  data-cursor-label="Explorar"
                >
                  <span className="w-8 shrink-0 font-mono text-[10px] text-zinc-400">{String(index + 1).padStart(2, "0")}</span>
                  <span className={`min-w-0 flex-1 text-[1.55rem] font-semibold leading-none tracking-[-0.04em] transition-transform duration-200 sm:text-3xl lg:text-[2.35rem] ${active ? "translate-x-1" : ""}`}>{item.title}</span>
                  <span className={`shrink-0 text-lg transition-transform duration-200 ${active ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"}`} aria-hidden="true">↗</span>
                </button>
              );
            })}
          </div>

          {activeItem ? (
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div key={activeItem.id} className="specialty-focus-panel relative min-h-[430px] overflow-hidden rounded-[30px] bg-black p-7 text-white shadow-[0_40px_110px_rgba(0,0,0,0.18)] sm:p-9 lg:min-h-[560px] lg:rounded-[38px] lg:p-11" data-cursor-label="Abrir">
                <div className="specialty-focus-grid pointer-events-none absolute inset-0" />
                <span className="pointer-events-none absolute -right-5 -top-12 font-serif text-[11rem] italic leading-none text-white/[0.045] sm:text-[15rem]">{String(activeIndex + 1).padStart(2, "0")}</span>
                <div className="relative z-10 flex h-full min-h-[370px] flex-col justify-between lg:min-h-[470px]">
                  <div>
                    <div className="flex items-center justify-between gap-4"><span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/40">{activeItem.badge}</span><span className="font-mono text-[10px] text-white/30">{String(activeIndex + 1).padStart(2, "0")}</span></div>
                    <h3 className="mt-16 max-w-xl text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">{activeItem.title}</h3>
                    <p className="mt-7 max-w-xl text-base font-light leading-relaxed text-white/58 sm:text-lg">{activeItem.shortDesc}</p>
                  </div>
                  <div className="mt-12 flex items-end justify-between gap-5 border-t border-white/10 pt-6">
                    <div><span className="block text-[9px] font-semibold uppercase tracking-[0.18em] text-white/30">Conteúdo completo</span><span className="mt-1 block text-xs text-white/55">Como funciona • indicações • formatos</span></div>
                    <Link href={`/especialidades/${activeItem.slug}`} data-cursor-label="Abrir" className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-lg text-black transition-transform duration-200 hover:scale-105" aria-label={`Conhecer ${activeItem.title}`}>↗</Link>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
