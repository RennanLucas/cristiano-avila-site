"use client";

import { motion } from "framer-motion";

export default function Quote() {
  return (
    <section className="relative py-28 lg:py-36 bg-black text-white overflow-hidden flex items-center justify-center">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-zinc-200/10 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #FFFFFF 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400 block">
            Filosofia de Atendimento
          </span>

          <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-white">
            “A mesma mente que adoece é a mesma que pode{" "}
            <span className="text-zinc-400">
              se transformar
            </span>
            .”
          </blockquote>

          <div className="w-12 h-px bg-zinc-700 mx-auto mt-8" />

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white font-semibold">
              Cristiano Ávila da Silva
            </p>
            <p className="text-[11px] text-zinc-400 font-light mt-0.5">
              Psicólogo Clínico, Neurocientista & Hipnoterapeuta
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
