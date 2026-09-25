"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, Variants } from "framer-motion";
import { UNITS_DATA, buildWhatsAppLink } from "@/data/content";

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemAnim: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function UnidadesPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#111111] overflow-x-hidden selection:bg-black selection:text-white">
      <Header />

      <section className="pt-36 sm:pt-44 pb-16 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200/80 text-[11px] font-semibold tracking-wider uppercase text-zinc-600 mb-6">
              Atendimento presencial
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-black leading-[1.08] mb-6">
              Consultórios em <span className="text-zinc-400 font-light">4 cidades.</span>
            </h1>
            <p className="text-lg sm:text-xl text-zinc-600 font-light leading-relaxed max-w-2xl">
              Consulte endereços, horários e opções de atendimento presencial em São Paulo, Atibaia, Santos e São Bernardo do Campo.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-28 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={container} initial="hidden" animate="show" className="grid lg:grid-cols-2 gap-8 lg:gap-10">
            {UNITS_DATA.map((unit) => (
              <motion.article
                key={unit.id}
                id={unit.id}
                variants={itemAnim}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-zinc-200/70 shadow-sm hover:shadow-apple transition-all duration-500 scroll-mt-28"
              >
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-zinc-900">
                  <Image
                    src={unit.imageUrl}
                    alt={`Consultório em ${unit.city} - ${unit.title}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-[1.025] transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                  <div className="absolute top-5 left-5">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-black shadow-sm">
                      {unit.city} • {unit.state}
                    </span>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-xs uppercase tracking-widest text-zinc-300 font-medium mb-1">{unit.complement || "Consultório"}</p>
                    <h2 className="text-2xl font-bold text-white tracking-tight">{unit.title}</h2>
                  </div>
                </div>

                <div className="p-7 sm:p-9 flex-1 flex flex-col justify-between">
                  <div>
                    {unit.tagline && <p className="text-sm font-medium text-zinc-700 mb-6 pb-5 border-b border-zinc-100">{unit.tagline}</p>}

                    <div className="space-y-4 mb-8 text-sm text-zinc-600 font-light">
                      <div>
                        <strong className="block text-zinc-900 font-medium">Endereço</strong>
                        <span>{unit.address} - {unit.neighborhood}</span>
                        <span className="block text-xs text-zinc-400 mt-0.5">CEP {unit.zip}</span>
                      </div>
                      <div>
                        <strong className="block text-zinc-900 font-medium">Horário de atendimento</strong>
                        <span>{unit.hours}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-zinc-100 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                    <a href={buildWhatsAppLink(`Olá, Dr. Cristiano! Gostaria de informações sobre agendamento presencial na unidade de ${unit.city}.`)} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs py-3 px-5 text-center flex-1 justify-center">
                      Ver disponibilidade
                    </a>
                    <a href={unit.mapsExternalLink} target="_blank" rel="noopener noreferrer" className="btn-outline text-xs py-3 px-5 text-center inline-flex items-center justify-center gap-1.5">
                      Abrir no mapa
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-br from-zinc-900 to-black text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-apple"
          >
            <div className="max-w-xl text-center md:text-left">
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-3">Atendimento online</span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">Não está próximo de uma unidade?</h3>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                Consulte a disponibilidade para atendimento psicológico online. A adequação da modalidade é considerada de acordo com cada situação e com as normas profissionais aplicáveis.
              </p>
            </div>
            <a href={buildWhatsAppLink("Olá, Dr. Cristiano! Gostaria de informações sobre atendimento psicológico online.")} target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 rounded-full bg-white text-black font-semibold text-xs text-center hover:bg-zinc-200 transition-colors shadow-sm">
              Informações sobre atendimento online
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
