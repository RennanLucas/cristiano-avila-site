"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { buildWhatsAppLink } from "@/data/content";

export default function Intro() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-3">
              <span className="inline-block px-3 py-1 rounded-full bg-zinc-100 text-[10px] font-bold tracking-widest text-zinc-600 uppercase mb-3">
                Atendimento individualizado
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black leading-[1.15]">
                Cada pessoa possui uma história única.{" "}
                <span className="text-zinc-400 block sm:inline">O acompanhamento também deve respeitar essa singularidade.</span>
              </h2>
            </div>

            <div className="space-y-5 text-textMuted text-base lg:text-lg leading-relaxed font-light">
              <p>
                O processo terapêutico parte da compreensão das experiências, emoções, comportamentos e do contexto de vida de cada pessoa. Não existem fórmulas prontas para questões humanas complexas.
              </p>
              <p>
                O trabalho pode integrar recursos da <strong className="text-black font-medium">psicologia clínica, neurociência e hipnoterapia</strong>, quando pertinentes ao caso, sempre dentro dos limites técnicos, éticos e profissionais do atendimento.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link href="/sobre" className="btn-outline text-xs py-3 px-6 text-center">Conhecer a abordagem profissional</Link>
              <a href={buildWhatsAppLink("Olá, Dr. Cristiano! Gostaria de entender melhor como funciona o atendimento.")} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs py-3 px-6 text-center">
                Tirar uma dúvida
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="p-7 rounded-3xl bg-surface border border-zinc-200/80 shadow-apple">
              <span className="text-xs font-mono font-bold text-zinc-400 block mb-2">01 / TÉCNICA</span>
              <h3 className="text-lg font-bold text-black tracking-tight mb-2">Planejamento individualizado</h3>
              <p className="text-xs text-textMuted leading-relaxed font-light">A condução é ajustada ao contexto e às necessidades apresentadas em cada acompanhamento.</p>
            </div>

            <div className="p-7 rounded-3xl bg-surface border border-zinc-200/80 shadow-apple">
              <span className="text-xs font-mono font-bold text-zinc-400 block mb-2">02 / ÉTICA</span>
              <h3 className="text-lg font-bold text-black tracking-tight mb-2">Escuta qualificada e sigilo</h3>
              <p className="text-xs text-textMuted leading-relaxed font-light">O atendimento observa o Código de Ética Profissional e a legislação aplicável à proteção de dados.</p>
            </div>

            <div className="p-7 rounded-3xl bg-surface border border-zinc-200/80 shadow-apple">
              <span className="text-xs font-mono font-bold text-zinc-400 block mb-2">03 / PROCESSO</span>
              <h3 className="text-lg font-bold text-black tracking-tight mb-2">Autonomia e compreensão</h3>
              <p className="text-xs text-textMuted leading-relaxed font-light">O acompanhamento busca ampliar repertório, compreensão e recursos para lidar com diferentes situações da vida.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
