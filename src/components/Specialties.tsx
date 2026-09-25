"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import SpotlightCard from "./SpotlightCard";
import { SPECIALTIES_DATA } from "@/data/content";
import { isPublicSpecialty } from "@/lib/site-policy";

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const itemAnim: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function Specialties() {
  const [filter, setFilter] = useState("todos");
  const publicData = SPECIALTIES_DATA.filter((item) => isPublicSpecialty(item.id));

  const categories = [
    { id: "todos", label: "Todas" },
    { id: "clinica", label: "Psicoterapia & Neuro" },
    { id: "hipnose", label: "Hipnoterapia" },
    { id: "online", label: "Atendimento online" },
  ];

  const filteredData = publicData.filter((item) => {
    if (filter === "todos") return true;
    if (filter === "clinica") return ["psicoterapia", "neuropsicologia", "pnl"].includes(item.id);
    if (filter === "hipnose") return item.id === "hipnoterapia";
    if (filter === "online") return item.id === "psicologia-sem-fronteiras";
    return true;
  });

  return (
    <section id="especialidades" className="py-24 lg:py-32 bg-zinc-50 border-t border-zinc-200/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="inline-block text-[11px] font-semibold tracking-[0.16em] text-zinc-500 uppercase mb-3">
              Formas de atendimento
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-black mb-4">
              Acompanhamento clínico individualizado
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 font-light leading-relaxed">
              O plano terapêutico é definido após avaliação profissional, considerando a história, as necessidades e os objetivos de cada pessoa.
            </p>
          </div>

          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar formas de atendimento">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilter(cat.id)}
                aria-pressed={filter === cat.id}
                className={`px-3.5 py-2 rounded-full text-xs font-medium transition-all ${
                  filter === cat.id
                    ? "bg-black text-white"
                    : "bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-400"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((item) => (
            <motion.div key={item.id} variants={itemAnim} className="h-full">
              <SpotlightCard className="p-8 h-full">
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-zinc-400">{item.badge}</span>
                  <h3 className="text-xl font-semibold text-black tracking-tight mt-4 mb-2">{item.title}</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed font-light mb-6">{item.shortDesc}</p>
                </div>
                <div className="pt-4 border-t border-zinc-100">
                  <Link href={`/especialidades/${item.slug}`} className="inline-flex items-center gap-2 text-xs font-semibold text-black hover:gap-3 transition-all">
                    Conhecer esta forma de atendimento <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
