"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UNITS_DATA, buildWhatsAppLink } from "@/data/content";

export default function Locations() {
  const [selectedUnit, setSelectedUnit] = useState(UNITS_DATA[0]);
  const [viewMode, setViewMode] = useState<"photo" | "map">("photo");

  return (
    <section id="unidades" className="py-24 lg:py-32 bg-white relative border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-zinc-100 text-[10px] font-bold tracking-widest text-zinc-600 uppercase mb-3">
            Atendimento Presencial
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black mb-4">
            Consultórios em 4 Cidades
          </h2>
          <p className="text-textMuted text-base font-light leading-relaxed">
            Ambientes privativos, seguros e confortáveis para atendimento psicológico presencial com hora marcada.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {UNITS_DATA.map((unit) => {
            const isActive = selectedUnit.id === unit.id;
            return (
              <button
                key={unit.id}
                type="button"
                onClick={() => setSelectedUnit(unit)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${isActive ? "bg-black text-white shadow-apple scale-[1.02]" : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 border border-zinc-200/50"}`}
              >
                <span>{unit.city}</span>
                <span className={`text-[10px] ml-1.5 opacity-60 ${isActive ? "text-white" : "text-zinc-500"}`}>
                  ({unit.state})
                </span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedUnit.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="bg-surface rounded-3xl p-8 sm:p-12 border border-zinc-200/80 shadow-apple max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center"
          >
            <div>
              <span className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase block mb-2">
                Unidade {selectedUnit.city} • {selectedUnit.state}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-black tracking-tight mb-2">
                {selectedUnit.title}
              </h3>
              {selectedUnit.tagline && <p className="text-xs text-zinc-500 font-normal mb-6">{selectedUnit.tagline}</p>}

              <div className="space-y-4 text-sm text-textMuted font-light mb-8">
                <div>
                  <strong className="text-black font-medium block">Endereço:</strong>
                  <span>{selectedUnit.address}</span>
                  {selectedUnit.complement && <span className="block text-xs text-zinc-500">{selectedUnit.complement}</span>}
                </div>
                <div>
                  <strong className="text-black font-medium block">Horários:</strong>
                  <span>{selectedUnit.hours || "Atendimento com hora marcada"}</span>
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
                    Abrir no mapa
                  </a>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-end gap-1.5">
                <button type="button" onClick={() => setViewMode("photo")} className={`px-3 py-1 rounded-full text-[11px] font-medium transition-all ${viewMode === "photo" ? "bg-black text-white shadow-sm" : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"}`}>
                  Foto do Consultório
                </button>
                <button type="button" onClick={() => setViewMode("map")} className={`px-3 py-1 rounded-full text-[11px] font-medium transition-all ${viewMode === "map" ? "bg-black text-white shadow-sm" : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"}`}>
                  Mapa Interativo
                </button>
              </div>

              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-zinc-900 border border-zinc-200 shadow-sm">
                {viewMode === "photo" ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={selectedUnit.imageUrl}
                      alt={`Consultório de ${selectedUnit.city}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="text-[11px] font-medium text-white/90">{selectedUnit.title} — {selectedUnit.city}</span>
                    </div>
                  </div>
                ) : (
                  <iframe
                    title={`Mapa ${selectedUnit.city}`}
                    src={selectedUnit.mapEmbedUrl || "https://maps.google.com/maps?q=Atibaia&t=&z=13&ie=UTF8&iwloc=&output=embed"}
                    className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 text-center">
          <a href="/unidades" className="inline-flex items-center text-xs font-semibold text-zinc-700 hover:text-black transition-colors">
            Ver detalhes e fotos de todas as 4 unidades
          </a>
        </div>
      </div>
    </section>
  );
}
