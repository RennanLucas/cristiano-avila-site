"use client";

import { motion } from "framer-motion";
import { DEMANDS_LIST } from "@/data/content";

export default function Demands() {
  return (
    <section className="py-24 lg:py-32 bg-white relative border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-zinc-100 text-[10px] font-bold tracking-widest text-zinc-600 uppercase mb-3">
            Demandas & Situações Clínicas
          </span>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black mb-4">
            Em quais situações o acompanhamento pode ajudar?
          </h2>

          <p className="text-textMuted text-base sm:text-lg font-light leading-relaxed">
            Buscar apoio psicológico é um passo de maturidade e autocuidado. A psicoterapia oferece suporte estruturado para diversas fases, transições e desafios emocionais.
          </p>
        </div>

        {/* Demands Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {DEMANDS_LIST.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="p-6 rounded-3xl bg-surface border border-zinc-200/80 hover:border-black hover:shadow-apple transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-2 h-2 rounded-full bg-zinc-300 mb-3 group-hover:bg-black transition-colors" />
                <h3 className="text-base font-bold text-black tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-textMuted font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
