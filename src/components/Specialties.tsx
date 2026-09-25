"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { SPECIALTIES_DATA } from "@/data/content";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemAnim: Variants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export default function Specialties() {
  const [filter, setFilter] = useState("todos");

  const categories = [
    { id: "todos", label: "Todas as Especialidades" },
    { id: "cognicao", label: "Ansiedade & TDAH" },
    { id: "hipnose", label: "Hipnoterapia" },
    { id: "comportamento", label: "Neurociência & Casais" },
  ];

  const filteredData = SPECIALTIES_DATA.filter((item) => {
    if (filter === "todos") return true;
    if (filter === "cognicao") return item.slug.includes("ansiedade") || item.slug.includes("tdah") || item.slug.includes("neuro");
    if (filter === "hipnose") return item.slug.includes("hipno");
    return true;
  });

  return (
    <section id="especialidades" className="py-24 lg:py-32 bg-surface border-t border-zinc-200/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-zinc-100 text-[10px] font-bold tracking-widest text-zinc-600 uppercase mb-3">
              Áreas de Domínio Clínico
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold tracking-tight text-black mb-4"
            >
              Abordagens & Especialidades
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base sm:text-lg text-textMuted font-light leading-relaxed"
            >
              Intervenções planejadas com rigor científico para alívio de sintomas agudos e reestruturação duradoura da saúde mental.
            </motion.p>
          </div>

          {/* Categorias / Filtro Rápido */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilter(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  filter === cat.id
                    ? "bg-black text-white shadow-sm"
                    : "bg-white text-zinc-600 border border-zinc-200 hover:border-black"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Especialidades com Efeito Hover */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredData.map((item, idx) => (
            <motion.div
              key={item.id}
              variants={itemAnim}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group p-8 rounded-3xl bg-white border border-zinc-200/80 hover:border-zinc-400 hover:shadow-apple transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden"
            >
              {/* Top Row: Icon + Number */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="font-mono text-xs font-bold text-zinc-300 group-hover:text-zinc-500 transition-colors">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-black tracking-tight mb-2 group-hover:text-black">
                  {item.title}
                </h3>

                <p className="text-xs text-textMuted leading-relaxed font-light mb-6">
                  {item.shortDesc}
                </p>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-semibold text-black">
                <Link
                  href={`/especialidades/${item.slug}`}
                  className="inline-flex items-center gap-1.5 hover:translate-x-1 transition-transform"
                >
                  <span>Conhecer detalhes do tratamento</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
