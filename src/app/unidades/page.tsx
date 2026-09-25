"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, Variants } from "framer-motion";
import { UNITS_DATA, CLINIC_CONTACT, buildWhatsAppLink } from "@/data/content";
import MagneticButton from "@/components/MagneticButton";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemAnim: Variants = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function UnidadesPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#111111] overflow-x-hidden selection:bg-black selection:text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-36 sm:pt-44 pb-16 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200/80 text-[11px] font-semibold tracking-wider uppercase text-zinc-600 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Atendimento Presencial Especializado
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-black leading-[1.08] mb-6">
              Consultórios <br className="hidden sm:inline" />
              <span className="text-zinc-400 font-light">físicos de excelência.</span>
            </h1>
            <p className="text-lg sm:text-xl text-zinc-600 font-light leading-relaxed max-w-2xl">
              Ambientes privativos cuidadosamente projetados para garantir sigilo rigoroso, isolamento acústico e acolhimento clínico de alto padrão em 4 cidades estratégicas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Units Grid */}
      <section className="pb-28 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid lg:grid-cols-2 gap-8 lg:gap-10"
          >
            {UNITS_DATA.map((unit) => (
              <motion.article
                key={unit.id}
                variants={itemAnim}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-zinc-200/70 shadow-sm hover:shadow-apple transition-all duration-500"
              >
                {/* Clinic Photo */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-zinc-900">
                  <img 
                    src={unit.imageUrl}
                    alt={`Consultório Dr. Cristiano Ávila em ${unit.city} - ${unit.title}`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Badge on Photo */}
                  <div className="absolute top-5 left-5">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-black shadow-sm">
                      {unit.city} • {unit.state}
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-xs uppercase tracking-widest text-zinc-300 font-medium mb-1">
                      {unit.complement || "Consultório Clínico"}
                    </p>
                    <h2 className="text-2xl font-bold text-white tracking-tight">
                      {unit.title}
                    </h2>
                  </div>
                </div>

                {/* Details Content */}
                <div className="p-7 sm:p-9 flex-1 flex flex-col justify-between">
                  <div>
                    {unit.tagline && (
                      <p className="text-sm font-medium text-zinc-700 mb-6 pb-5 border-b border-zinc-100">
                        {unit.tagline}
                      </p>
                    )}

                    <div className="space-y-4 mb-8 text-sm text-zinc-600 font-light">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center shrink-0 mt-0.5 text-zinc-800">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <strong className="block text-zinc-900 font-medium">Endereço</strong>
                          <span>{unit.address} - {unit.neighborhood}</span>
                          <span className="block text-xs text-zinc-400 mt-0.5">CEP {unit.zip}</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center shrink-0 mt-0.5 text-zinc-800">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <strong className="block text-zinc-900 font-medium">Horário de Atendimento</strong>
                          <span>{unit.hours}</span>
                          <span className="block text-xs text-emerald-600 font-medium mt-0.5">Consultas com hora marcada</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-zinc-100 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                    <a
                      href={buildWhatsAppLink(`Olá, Dr. Cristiano! Gostaria de informações sobre agendamento presencial na unidade de ${unit.city} (${unit.title}).`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-xs py-3 px-5 text-center flex-1 justify-center"
                    >
                      Agendar em {unit.city}
                    </a>
                    
                    <a
                      href={unit.mapsExternalLink || `https://maps.google.com/?q=${encodeURIComponent(unit.address + ", " + unit.city)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline text-xs py-3 px-5 text-center inline-flex items-center justify-center gap-1.5"
                    >
                      <span>Abrir no Mapa</span>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Online Alternative Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-br from-zinc-900 to-black text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-apple"
          >
            <div className="max-w-xl text-center md:text-left">
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-3">
                Modalidade Online Internacional
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
                Não está próximo de uma unidade física?
              </h3>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                O Dr. Cristiano Ávila realiza consultas por videoconferência em ambiente criptografado para todo o Brasil e brasileiros no exterior, com a mesma eficácia e rigor clínico.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <a
                href={buildWhatsAppLink("Olá, Dr. Cristiano! Gostaria de agendar uma consulta psicológica na modalidade Online.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-white text-black font-semibold text-xs text-center hover:bg-zinc-200 transition-colors shadow-sm"
              >
                Agendar Consulta Online
              </a>
              <a
                href="/especialidades/psicologia-sem-fronteiras"
                className="px-6 py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-xs text-center hover:bg-white/20 transition-colors"
              >
                Saiba como funciona
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
