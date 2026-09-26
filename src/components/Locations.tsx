"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CURRENT_UNITS } from "@/data/units";
import { buildWhatsAppLink } from "@/data/content";

export default function Locations() {
  const [selectedUnit, setSelectedUnit] = useState(CURRENT_UNITS[0]);

  return (
    <section id="unidades" className="relative overflow-hidden border-t border-zinc-100 bg-white py-20 sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-zinc-100 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <span className="inline-flex rounded-full border border-zinc-200 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500 shadow-sm">
            Atendimento presencial
          </span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-black md:text-5xl">
            Atendimento presencial em 4 cidades
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] font-light leading-relaxed text-zinc-600 sm:text-base">
            Escolha a cidade para consultar endereço, mapa e disponibilidade de atendimento.
          </p>
        </div>

        <div className="-mx-1 mb-8 flex max-w-full flex-nowrap items-center justify-start gap-2.5 overflow-x-auto px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-auto sm:mb-10 sm:max-w-4xl sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0">
          {CURRENT_UNITS.map((unit) => {
            const active = selectedUnit.id === unit.id;
            return (
              <motion.button
                key={unit.id}
                type="button"
                onClick={() => setSelectedUnit(unit)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`shrink-0 rounded-full px-4 py-2.5 text-xs font-semibold transition-all ${
                  active
                    ? "bg-black text-white shadow-lg"
                    : "border border-zinc-200 bg-white text-zinc-600 hover:border-zinc-400"
                }`}
              >
                {unit.city}
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedUnit.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto grid max-w-6xl overflow-hidden rounded-[26px] border border-zinc-200 bg-zinc-950 shadow-[0_24px_70px_rgba(0,0,0,0.11)] sm:rounded-[30px] sm:shadow-[0_30px_90px_rgba(0,0,0,0.12)] lg:grid-cols-[0.88fr_1.12fr]"
          >
            <div className="relative flex flex-col justify-between p-6 text-white min-[390px]:p-7 sm:p-10 lg:p-12">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.11),transparent_36%)]" />
              <div className="relative z-10">
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">
                  Unidade {selectedUnit.city}
                </span>
                <h3 className="mt-3 text-[1.4rem] font-semibold tracking-tight min-[390px]:text-2xl sm:text-3xl">
                  {selectedUnit.title}
                </h3>
                <p className="mt-3 max-w-md text-sm font-light leading-relaxed text-white/65">
                  {selectedUnit.tagline}
                </p>

                <div className="mt-7 space-y-5 border-t border-white/10 pt-6 sm:mt-8 sm:pt-7">
                  <div>
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-white/40">Endereço</span>
                    <p className="mt-1.5 break-words text-sm leading-relaxed text-white/90">
                      {selectedUnit.address}
                      {selectedUnit.complement ? <><br />{selectedUnit.complement}</> : null}
                      {selectedUnit.neighborhood ? <><br />{selectedUnit.neighborhood} • {selectedUnit.city}/{selectedUnit.state}</> : <><br />{selectedUnit.city}/{selectedUnit.state}</>}
                      <br />CEP {selectedUnit.zip}
                    </p>
                  </div>

                  <div>
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-white/40">Disponibilidade</span>
                    <p className="mt-1.5 text-sm text-white/90">{selectedUnit.availability}</p>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row">
                <a
                  href={buildWhatsAppLink(`Olá, Dr. Cristiano. Gostaria de verificar a disponibilidade de atendimento presencial em ${selectedUnit.city}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-full bg-white px-5 py-3 text-center text-xs font-semibold text-black transition-transform hover:-translate-y-0.5 sm:w-auto"
                >
                  Consultar horários
                </a>
                <a
                  href={selectedUnit.mapsExternalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3 text-center text-xs font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
                >
                  Abrir no Google Maps
                </a>
              </div>
            </div>

            <div className="relative min-h-[300px] border-t border-zinc-800 bg-zinc-900 sm:min-h-[360px] lg:min-h-[520px] lg:border-l lg:border-t-0">
              <iframe
                title={`Mapa da unidade de ${selectedUnit.city}`}
                src={selectedUnit.mapEmbedUrl}
                className="absolute inset-0 h-full w-full border-0 grayscale-[0.35] contrast-[0.95]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-zinc-950/20 to-transparent" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
