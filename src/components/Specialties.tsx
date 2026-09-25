"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import SpotlightCard from "./SpotlightCard";
import { SPECIALTIES_DATA } from "@/data/content";
import { isPublicSpecialty } from "@/lib/site-policy";

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemAnim: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.52, ease: [0.16, 1, 0.3, 1] } },
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
    <section id="especialidades" className="relative overflow-hidden border-t border-zinc-200/60 bg-[#F5F5F3] py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 soft-grid opacity-[0.38] [mask-image:radial-gradient(circle_at_center,black,transparent_85%)]" />
      <div className="aurora-orb absolute -right-20 top-20 h-72 w-72 rounded-full bg-amber-100/60 blur-[90px]" />
      <div className="aurora-orb aurora-orb-delayed absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-fuchsia-100/45 blur-[95px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="editorial-label">Formas de atendimento</span>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-black md:text-5xl">
              Um plano clínico construído em torno da sua história.
            </h2>
            <p className="mt-4 text-base font-light leading-relaxed text-zinc-600 sm:text-lg">
              O acompanhamento é definido após avaliação profissional, considerando contexto, necessidades e objetivos de cada pessoa.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-2 rounded-full border border-white/80 bg-white/65 p-1.5 shadow-sm backdrop-blur-xl" role="group" aria-label="Filtrar formas de atendimento">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilter(cat.id)}
                aria-pressed={filter === cat.id}
                className={`relative rounded-full px-4 py-2 text-xs font-medium transition-colors ${filter === cat.id ? "text-white" : "text-zinc-600 hover:text-black"}`}
              >
                {filter === cat.id && (
                  <motion.span layoutId="specialtyFilter" className="absolute inset-0 rounded-full bg-black shadow-lg" transition={{ type: "spring", stiffness: 400, damping: 30 }} />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div
            key={filter}
            variants={container}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, y: 10 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredData.map((item, index) => (
              <motion.div key={item.id} variants={itemAnim} layout className="h-full">
                <SpotlightCard className="h-full min-h-[320px] p-7 sm:p-8">
                  <div>
                    <div className="mb-10 flex items-start justify-between gap-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-200/80 bg-white/80 shadow-sm">
                        <span className="font-mono text-xs font-semibold text-zinc-500">{String(index + 1).padStart(2, "0")}</span>
                      </div>
                      <span className="max-w-[150px] text-right text-[9px] font-semibold uppercase tracking-[0.16em] text-zinc-400">{item.badge}</span>
                    </div>

                    <h3 className="max-w-[90%] text-2xl font-semibold tracking-[-0.03em] text-black">{item.title}</h3>
                    <p className="mt-4 text-sm font-light leading-relaxed text-zinc-600">{item.shortDesc}</p>
                  </div>

                  <div className="mt-10 flex items-center justify-between border-t border-zinc-200/70 pt-5">
                    <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-zinc-400">Saiba mais</span>
                    <Link href={`/especialidades/${item.slug}`} className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-all duration-300 hover:scale-110 hover:shadow-lg" aria-label={`Conhecer ${item.title}`}>
                      <span aria-hidden="true">↗</span>
                    </Link>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
