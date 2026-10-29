"use client";

import { useEffect, useState } from "react";
import { CURRENT_UNITS } from "@/data/units";
import { buildWhatsAppLink } from "@/data/contact-lite";

export default function Locations() {
  const [selectedUnit, setSelectedUnit] = useState(CURRENT_UNITS[0]);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const syncMapPreference = () => {
      if (desktop.matches) setShowMap(true);
    };
    syncMapPreference();
    desktop.addEventListener?.("change", syncMapPreference);
    return () => desktop.removeEventListener?.("change", syncMapPreference);
  }, []);

  const selectUnit = (unit: (typeof CURRENT_UNITS)[number]) => {
    setSelectedUnit(unit);
    if (typeof window !== "undefined" && !window.matchMedia("(min-width: 768px)").matches) setShowMap(false);
  };

  return (
    <section id="unidades" className="locations-stage relative overflow-hidden border-t border-zinc-100 bg-[#0b0b0c] pb-28 pt-20 text-white sm:py-24 lg:py-32" data-tone="dark">
      <div className="locations-grid pointer-events-none absolute inset-0" />
      <div className="relative z-10 mx-auto max-w-7xl px-3 sm:px-6">
        <div className="mb-10 grid gap-6 sm:mb-12 lg:mb-16 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.26em] text-white/38">Atendimento presencial</span>
            <h2 className="mt-5 max-w-4xl text-[2.55rem] font-semibold leading-[0.98] tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl">Quatro cidades. <span className="font-serif font-normal italic text-white/52">Um mesmo cuidado.</span></h2>
          </div>
          <p className="max-w-sm text-sm font-light leading-relaxed text-white/45">Escolha uma cidade para ver endereço, mapa e consultar disponibilidade.</p>
        </div>

        <div className="grid min-w-0 overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.035] shadow-[0_40px_120px_rgba(0,0,0,0.34)] sm:rounded-[30px] lg:min-h-[650px] lg:grid-cols-[0.36fr_0.64fr] lg:rounded-[38px]">
          <div className="min-w-0 border-b border-white/10 p-3 sm:p-6 lg:border-b-0 lg:border-r lg:p-8">
            <div className="grid grid-cols-2 gap-2 lg:flex lg:flex-col lg:gap-0">
              {CURRENT_UNITS.map((unit, index) => {
                const active = selectedUnit.id === unit.id;
                return (
                  <button
                    key={unit.id}
                    type="button"
                    onClick={() => selectUnit(unit)}
                    className={`group flex min-h-[66px] min-w-0 w-full items-center gap-3 rounded-2xl px-3 py-3 text-left transition-all lg:min-h-0 lg:rounded-none lg:border-b lg:border-white/10 lg:px-0 lg:py-6 ${active ? "bg-white text-black lg:bg-transparent lg:text-white" : "border border-white/10 text-white/60 lg:border-x-0 lg:border-t-0 lg:hover:text-white"}`}
                    data-cursor-label="Selecionar"
                  >
                    <span className={`shrink-0 font-mono text-[9px] ${active ? "text-black/50 lg:text-white/35" : "text-white/25"}`}>{String(index + 1).padStart(2, "0")}</span>
                    <span className="min-w-0 text-[13px] font-semibold leading-[1.12] sm:text-sm lg:text-xl">{unit.city}</span>
                    <span className={`ml-auto hidden text-base transition-transform lg:block ${active ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-70"}`}>↗</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-8 hidden lg:block">
              <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/25">Selecionado</span>
              <div className="mt-3 font-serif text-[4.4rem] italic leading-none tracking-[-0.06em] text-white/[0.08]">{selectedUnit.city}</div>
            </div>
          </div>

          <div key={selectedUnit.id} className="location-detail-enter grid min-w-0 lg:grid-rows-[0.58fr_0.42fr]">
            <div className="relative min-h-[290px] min-w-0 bg-zinc-900 sm:min-h-[420px]">
              {showMap ? (
                <iframe title={`Mapa da unidade de ${selectedUnit.city}`} src={selectedUnit.mapEmbedUrl} className="absolute inset-0 h-full w-full border-0 grayscale-[0.55] contrast-[0.96] invert-[0.02]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_58%)] px-5 py-8 text-center">
                  <div className="w-full max-w-[280px]">
                    <p className="text-base font-medium text-white">Mapa sob demanda</p>
                    <p className="mt-2 text-xs leading-relaxed text-white/50">No celular, o mapa só é carregado quando você pedir.</p>
                    <button type="button" onClick={() => setShowMap(true)} className="mt-5 min-h-12 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black">Carregar mapa</button>
                  </div>
                </div>
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
              <div className="pointer-events-none absolute bottom-4 left-4 max-w-[calc(100%-2rem)] rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/70 backdrop-blur-md sm:bottom-7 sm:left-7">{selectedUnit.city} • SP</div>
            </div>

            <div className="grid min-w-0 gap-7 border-t border-white/10 p-5 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-end lg:p-10">
              <div className="min-w-0">
                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/32">{selectedUnit.availability}</span>
                <h3 className="mt-3 text-[1.65rem] font-semibold leading-[1.04] tracking-[-0.035em] text-white sm:text-3xl">{selectedUnit.title}</h3>
                <p className="mt-4 max-w-xl break-words text-sm font-light leading-relaxed text-white/52">{selectedUnit.address}{selectedUnit.complement ? ` • ${selectedUnit.complement}` : ""}{selectedUnit.neighborhood ? ` • ${selectedUnit.neighborhood}` : ""} • {selectedUnit.city}/{selectedUnit.state} • CEP {selectedUnit.zip}</p>
              </div>
              <div className="grid grid-cols-2 gap-2 lg:flex lg:max-w-[250px] lg:flex-wrap lg:justify-end">
                <a data-cursor-label="Agenda" href={buildWhatsAppLink(`Olá, Dr. Cristiano. Gostaria de verificar a disponibilidade de atendimento presencial em ${selectedUnit.city}.`)} target="_blank" rel="noopener noreferrer" className="col-span-2 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 py-3 text-center text-xs font-semibold text-black lg:col-span-1">Consultar horários</a>
                <a data-cursor-label="Mapa" href={selectedUnit.mapsExternalLink} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-4 py-3 text-center text-xs font-semibold text-white/75 transition-colors hover:bg-white/10 hover:text-white">Google</a>
                <a data-cursor-label="Mapa" href={selectedUnit.appleMapsExternalLink} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-4 py-3 text-center text-xs font-semibold text-white/75 transition-colors hover:bg-white/10 hover:text-white">Apple</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
