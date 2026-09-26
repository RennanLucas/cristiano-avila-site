"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { CLINIC_CONTACT } from "@/data/content";
import { CURRENT_CITIES_TEXT } from "@/data/units";
import { PROFESSIONAL_REGISTRATION } from "@/lib/site-policy";

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-white text-[#111111] overflow-x-hidden selection:bg-black selection:text-white">
      <Header />

      <section className="relative pt-36 sm:pt-44 pb-20 border-b border-zinc-100 bg-gradient-to-b from-zinc-50 to-white">
        <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-[1fr_.8fr] gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-3 py-1 rounded-full bg-white border border-zinc-200 text-[10px] font-bold tracking-widest text-zinc-500 uppercase mb-6">
              Trajetória profissional
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tighter text-black leading-tight mb-6">
              Escuta atenta e <span className="text-zinc-400">prática profissional individualizada.</span>
            </h1>
            <p className="text-base sm:text-lg text-zinc-600 font-light leading-relaxed max-w-2xl">
              Cristiano Ávila da Silva é psicólogo clínico, {PROFESSIONAL_REGISTRATION}, com atuação presencial e online e formação complementar em áreas relacionadas ao comportamento humano e hipnoterapia.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-zinc-200 shadow-2xl">
            <Image src={CLINIC_CONTACT.avatarUrl} alt="Cristiano Ávila da Silva" fill sizes="(max-width: 1024px) 90vw, 420px" className="object-cover object-top" priority />
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-8 text-base sm:text-lg text-zinc-600 font-light leading-relaxed">
            <p className="text-2xl text-black font-medium tracking-tight leading-snug">
              O atendimento parte da compreensão da história, do contexto e das necessidades de cada pessoa.
            </p>

            <div>
              <h2 className="text-2xl text-black font-semibold tracking-tight mb-4">Atuação clínica</h2>
              <p>
                A prática é organizada de forma individualizada e pode integrar recursos da psicologia clínica, neurociência e hipnoterapia quando pertinentes ao caso e compatíveis com os limites técnicos e éticos do exercício profissional.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-black font-semibold tracking-tight mb-4">Experiência profissional</h2>
              <p>
                A trajetória inclui atendimento clínico, experiência institucional junto à Fundação Casa Atibaia, atividades de educação em saúde mental, palestras e produção de conteúdo.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-black font-semibold tracking-tight mb-4">Formação complementar</h2>
              <ul className="list-disc pl-5 space-y-3">
                <li>Certificação em hipnoterapia pelo OMNI Training Center.</li>
                <li>Formação e atualização continuada em temas relacionados à neurociência e comportamento humano.</li>
                <li>Experiência em contextos clínicos e institucionais.</li>
              </ul>
            </div>

            <div className="pt-8 border-t border-zinc-100">
              <p className="text-sm text-zinc-500">
                Atendimento presencial em {CURRENT_CITIES_TEXT}, além de modalidade online quando adequada à situação apresentada.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
