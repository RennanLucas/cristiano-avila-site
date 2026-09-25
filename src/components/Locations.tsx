"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UNITS_DATA, CLINIC_CONTACT, buildWhatsAppLink } from "@/data/content";

export default function Locations() {
  const [selectedUnit, setSelectedUnit] = useState(UNITS_DATA[0]);

  return (
    <section id="unidades" className="py-24 lg:py-32 bg-white relative border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-zinc-100 text-[10px] font-bold tracking-widest text-zinc-600 uppercase mb-3">
            Atendimento Presencial
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black mb-4">
            Consultórios em 4 Cidades
          </h2>
          <p className="text-textMuted text-base font-light leading-relaxed">
            Ambientes privativos, seguros e confortáveis desenhados para acolher sua história com total sigilo e comodidade.
          </p>
        </div>

        {/* City Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {UNITS_DATA.map((unit) => {
            const isActive = selectedUnit.id === unit.id;
            return (
              <button
                key={unit.id}
                type="button"
                onClick={() => setSelectedUnit(unit)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-black text-white shadow-apple scale-[1.02]"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 border border-zinc-200/50"
                }`}
              >
                <span>{unit.city}</span>
                <span className={`text-[10px] ml-1.5 opacity-60 ${isActive ? "text-white" : "text-zinc-500"}`}>
                  ({unit.state})
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Unit Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedUnit.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="bg-surface rounded-3xl p-8 sm:p-12 border border-zinc-200/80 shadow-apple max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center"
          >
            <div>
              <span className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase block mb-2">
                Unidade {selectedUnit.city}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-black tracking-tight mb-4">
                {selectedUnit.title}
              </h3>
              
              <div className="space-y-4 text-sm text-textMuted font-light mb-8">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-black shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <strong className="text-black font-medium block">Endereço:</strong>
                    <span>{selectedUnit.address}</span>
                    {selectedUnit.complement && <span className="block text-xs">{selectedUnit.complement}</span>}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-black shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong className="text-black font-medium block">Horários:</strong>
                    <span>{selectedUnit.hours || "Segunda a Sexta das 08h às 20h (com hora marcada)"}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={buildWhatsAppLink(`Olá, Dr. Cristiano! Gostaria de verificar a disponibilidade de agenda presencial na unidade de ${selectedUnit.city}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs py-3 px-6 text-center"
                >
                  Agendar em {selectedUnit.city}
                </a>

                {selectedUnit.mapsExternalLink && (
                  <a
                    href={selectedUnit.mapsExternalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-xs py-3 px-6 text-center"
                  >
                    Ver rotas no mapa
                  </a>
                )}
              </div>
            </div>

            {/* Visual Mini Map / Photo */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-zinc-200 border border-zinc-200">
              <iframe
                title={`Mapa ${selectedUnit.city}`}
                src={selectedUnit.mapEmbedUrl || "https://maps.google.com/maps?q=Atibaia&t=&z=13&ie=UTF8&iwloc=&output=embed"}
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
