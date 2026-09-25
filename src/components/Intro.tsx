"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CLINIC_CONTACT, buildWhatsAppLink } from "@/data/content";

export default function Intro() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-3">
              <span className="inline-block px-3 py-1 rounded-full bg-zinc-100 text-[10px] font-bold tracking-widest text-zinc-600 uppercase mb-3">
                Uma Abordagem Integrada
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black leading-[1.15]">
                Cada pessoa possui uma história única.{" "}
                <span className="text-zinc-400 block sm:inline">
                  O tratamento também deve ser individual.
                </span>
              </h2>
            </div>

            <div className="space-y-5 text-textMuted text-base lg:text-lg leading-relaxed font-light">
              <p>
                O processo terapêutico parte da compreensão aprofundada das experiências, emoções, comportamentos e particularidades de cada pessoa. Não existem fórmulas prontas para dores humanas singulares.
              </p>
              <p>
                Por meio da integração entre <strong className="text-black font-medium">psicoterapia clínica, neurociência aplicada e hipnoterapia</strong>, estruturamos caminhos seguros e práticos para identificar as origens do sofrimento, reestruturar padrões limitantes e promover transformações duradouras.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/sobre"
                className="btn-outline text-xs py-3 px-6 text-center"
              >
                Conheça a metodologia completa
              </Link>
              <a
                href={buildWhatsAppLink("Olá, Dr. Cristiano! Gostaria de entender mais sobre o método de atendimento.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs py-3 px-6 text-center"
              >
                Falar com a equipe
              </a>
            </div>
          </motion.div>

          {/* Right Highlights Column (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="p-7 rounded-3xl bg-surface border border-zinc-200/80 shadow-apple">
              <span className="text-xs font-mono font-bold text-zinc-400 block mb-2">01 / CIÊNCIA</span>
              <h3 className="text-lg font-bold text-black tracking-tight mb-2">Base em Evidências</h3>
              <p className="text-xs text-textMuted leading-relaxed font-light">
                Intervenções validadas pela neurociência e psicologia contemporânea, sem promessas milagrosas.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-surface border border-zinc-200/80 shadow-apple">
              <span className="text-xs font-mono font-bold text-zinc-400 block mb-2">02 / HUMANIZAÇÃO</span>
              <h3 className="text-lg font-bold text-black tracking-tight mb-2">Escuta Qualificada & Sigilo</h3>
              <p className="text-xs text-textMuted leading-relaxed font-light">
                Ambiente livre de julgamentos morais, com acolhimento rigoroso sob o código de ética do CFP.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-surface border border-zinc-200/80 shadow-apple">
              <span className="text-xs font-mono font-bold text-zinc-400 block mb-2">03 / RESULTADOS</span>
              <h3 className="text-lg font-bold text-black tracking-tight mb-2">Autonomia Emocional</h3>
              <p className="text-xs text-textMuted leading-relaxed font-light">
                O objetivo não é criar dependência da terapia, mas instrumentalizar você para assumir o controle da própria vida.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
