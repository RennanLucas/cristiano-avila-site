'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { UNITS_DATA, CLINIC_CONTACT } from '@/data/content';

export default function Locations() {
  const [selectedUnit, setSelectedUnit] = useState(UNITS_DATA[0]);

  return (
    <section id="unidades" className="py-24 lg:py-32 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-3">
            <span className="w-6 h-[1.5px] bg-zinc-200" />
            <span className="inline-block px-3 py-1 rounded-full bg-zinc-100 text-[10px] font-bold tracking-widest text-zinc-500 uppercase mb-3">ONDE ENCONTRAR ATENDIMENTO PRESENCIAL</span>
            <span className="w-6 h-[1.5px] bg-zinc-200" />
          </div>

          <h2 className="tracking-tight text-3xl sm:text-4xl lg:text-5xl text-black tracking-tight">
            Consultórios em 4 Cidades
          </h2>

          <p className="text-textMuted text-base lg:text-lg font-light leading-relaxed">
            Ambientes privativos, seguros e confortáveis desenhados para acolher sua história com total sigilo e comodidade.
          </p>
        </div>

        {/* Units Grid & Dynamic Map Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: 4 Unit Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {UNITS_DATA.map((unit) => {
              const isActive = selectedUnit.id === unit.id;
              return (
                <div
                  key={unit.id}
                  onClick={() => setSelectedUnit(unit)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border text-left ${
                    isActive
                      ? 'bg-black text-white border-zinc-200 shadow-apple'
                      : 'bg-surface text-black border-zinc-200/8 hover:border-zinc-200/40 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="tracking-tight text-2xl font-semibold">
                      {unit.city}
                    </span>
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                        isActive
                          ? 'bg-zinc-200 text-white'
                          : 'bg-black/10 text-black'
                      }`}
                    >
                      {unit.state}
                    </span>
                  </div>

                  <p className={`text-sm leading-relaxed mb-3 ${isActive ? 'text-white/80' : 'text-textMuted'}`}>
                    <strong>{unit.address}</strong>
                    {unit.complement && ` • ${unit.complement}`}
                    <br />
                    {unit.neighborhood} — CEP {unit.zip}
                  </p>

                  <div className={`text-xs flex items-center gap-2 mb-4 ${isActive ? 'text-zinc-500' : 'text-black'}`}>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>{unit.phone}</span>
                  </div>

                  <div className="flex items-center gap-3 pt-3 border-t border-current/10">
                    <a
                      href={`https://wa.me/5511995235839?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20atendimento%20presencial%20na%20unidade%20de%20${encodeURIComponent(unit.city)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={`text-xs font-semibold py-2 px-4 rounded-full transition-colors ${
                        isActive
                          ? 'bg-zinc-200 text-white hover:bg-[#96753E]'
                          : 'bg-black text-white hover:bg-[#0F262B]'
                      }`}
                    >
                      Agendar em {unit.city}
                    </a>

                    <a
                      href={unit.mapsExternalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={`text-xs font-medium py-2 px-3 rounded-full border transition-colors flex items-center gap-1 ${
                        isActive
                          ? 'border-white/20 text-white hover:bg-white/10'
                          : 'border-zinc-200/20 text-black hover:bg-white'
                      }`}
                    >
                      <span>Abrir no Maps</span>
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Google Maps Embed (7 cols) */}
          <div className="lg:col-span-7 h-full">
            <div className="sticky top-28 bg-surface rounded-3xl overflow-hidden border border-zinc-200/10 shadow-apple h-[560px] flex flex-col">
              {/* Map Title Bar */}
              <div className="p-4 px-6 bg-white border-b border-gray-100 flex items-center justify-between">
                <div>
                  <h4 className="tracking-tight text-lg text-black font-semibold">
                    {selectedUnit.title}
                  </h4>
                  <p className="text-xs text-textMuted">
                    {selectedUnit.address} — {selectedUnit.neighborhood}, {selectedUnit.city} - {selectedUnit.state}
                  </p>
                </div>
                <a
                  href={selectedUnit.mapsExternalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-zinc-500 hover:underline flex items-center gap-1 font-semibold"
                >
                  Rotas
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>

              {/* Map Iframe */}
              <div className="flex-grow w-full relative">
                <iframe
                  key={selectedUnit.id}
                  src={selectedUnit.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa do consultório em ${selectedUnit.city}`}
                  className="w-full h-full"
                />
              </div>

              {/* Footnote */}
              <div className="p-3 bg-white text-center text-xs text-textMuted border-t border-gray-100">
                <span>{selectedUnit.hours}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
