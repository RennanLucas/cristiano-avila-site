"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, Variants } from "framer-motion";
import { CURRENT_UNITS } from "@/data/units";
import { buildWhatsAppLink } from "@/data/content";

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemAnim: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export default function UnidadesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#FAFAFA] text-[#111111] selection:bg-black selection:text-white">
      <Header />

      <section className="relative overflow-hidden px-4 pb-14 pt-32 min-[390px]:pb-16 sm:px-6 sm:pt-44">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_15%,rgba(0,0,0,0.055),transparent_32%)]" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <span className="inline-flex rounded-full border border-zinc-200 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500 shadow-sm">
              Atendimento presencial
            </span>
            <h1 className="mt-5 text-[2.2rem] font-semibold leading-[1.04] tracking-[-0.04em] text-black min-[390px]:mt-6 min-[390px]:text-4xl sm:text-6xl md:text-7xl">
              Atendimento presencial em quatro cidades.
            </h1>
            <p className="mt-5 max-w-2xl text-base font-light leading-relaxed text-zinc-600 min-[390px]:mt-6 sm:text-xl">
              Encontre o endereço da unidade mais conveniente, consulte o mapa e verifique a disponibilidade de horários para atendimento.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 sm:pb-28">
        <div className="mx-auto max-w-7xl">
          <motion.div variants={container} initial="hidden" animate="show" className="grid gap-6 sm:gap-7 lg:grid-cols-2">
            {CURRENT_UNITS.map((unit, index) => (
              <motion.article
                key={unit.id}
                id={unit.id}
                variants={itemAnim}
                whileHover={{ y: -4 }}
                className="group scroll-mt-28 overflow-hidden rounded-[26px] border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-[0_28px_70px_rgba(0,0,0,0.09)] sm:rounded-[28px]"
              >
                <div className="relative h-60 overflow-hidden border-b border-zinc-200 bg-zinc-950 min-[390px]:h-64 sm:h-72">
                  <iframe
                    title={`Mapa da unidade de ${unit.city}`}
                    src={unit.mapEmbedUrl}
                    className="absolute inset-0 h-full w-full border-0 grayscale-[0.35] contrast-[0.96] transition duration-700 group-hover:grayscale-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex flex-col items-start gap-2 text-white sm:bottom-5 sm:left-5 sm:right-5 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
                    <div className="min-w-0">
                      <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/65 sm:text-[10px] sm:tracking-[0.18em]">Unidade {String(index + 1).padStart(2, "0")}</span>
                      <h2 className="mt-1 break-words text-xl font-semibold tracking-tight sm:text-2xl">{unit.city}</h2>
                    </div>
                    <span className="shrink-0 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[10px] font-medium backdrop-blur">Presencial</span>
                  </div>
                </div>

                <div className="p-6 min-[390px]:p-7 sm:p-8">
                  <h3 className="text-xl font-semibold tracking-tight text-black">{unit.title}</h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-zinc-600">{unit.tagline}</p>

                  <div className="mt-7 grid gap-5 border-t border-zinc-100 pt-6 sm:grid-cols-2">
                    <div className="min-w-0">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-400">Endereço</span>
                      <p className="mt-1.5 break-words text-sm leading-relaxed text-zinc-700">
                        {unit.address}
                        {unit.complement ? <><br />{unit.complement}</> : null}
                        {unit.neighborhood ? <><br />{unit.neighborhood}</> : null}
                        <br />{unit.city}/{unit.state} • CEP {unit.zip}
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-400">Agenda</span>
                      <p className="mt-1.5 text-sm text-zinc-700">{unit.availability}</p>
                    </div>
                  </div>

                  <div className="mt-7 flex flex-col gap-3 border-t border-zinc-100 pt-6 sm:flex-row">
                    <a
                      href={buildWhatsAppLink(`Olá, Dr. Cristiano. Gostaria de verificar disponibilidade de atendimento presencial em ${unit.city}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex-1 px-5 py-3 text-center text-xs"
                    >
                      Consultar horários
                    </a>
                    <a
                      href={unit.mapsExternalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline px-5 py-3 text-center text-xs"
                    >
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
            className="mt-14 overflow-hidden rounded-[26px] bg-black p-6 text-white shadow-[0_30px_80px_rgba(0,0,0,0.18)] min-[390px]:p-8 sm:mt-16 sm:rounded-[30px] sm:p-12"
          >
            <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
              <div className="max-w-2xl">
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">Atendimento online</span>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Prefere atendimento online?</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-white/65">
                  O atendimento psicológico online oferece praticidade para quem busca acompanhamento à distância. Consulte a disponibilidade e tire suas dúvidas sobre essa modalidade.
                </p>
              </div>
              <a
                href={buildWhatsAppLink("Olá, Dr. Cristiano. Gostaria de informações sobre atendimento psicológico online.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full bg-white px-6 py-3.5 text-center text-xs font-semibold text-black transition-transform hover:-translate-y-0.5 md:w-auto"
              >
                Consultar atendimento online
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
