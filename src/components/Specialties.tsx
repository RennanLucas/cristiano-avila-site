"use client";

import { motion, Variants } from "framer-motion";
import { SPECIALTIES_DATA } from "@/data/content";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemAnim: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

export default function Specialties() {
  return (
    <section id="especialidades" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:w-2/3">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-4"
          >
            Áreas de Atuação
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-textMuted font-light"
          >
            Especialidades clínicas com abordagem baseada em evidências para o tratamento de transtornos e otimização do bem-estar emocional.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SPECIALTIES_DATA.map((item) => (
            <motion.div
              key={item.id}
              variants={itemAnim}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group p-8 rounded-2xl bg-white border border-border hover:shadow-apple transition-all duration-300 flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mb-6 text-black group-hover:scale-110 group-hover:bg-black group-hover:text-white transition-all duration-300">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              
              <h3 className="text-xl font-semibold text-black tracking-tight mb-3">
                {item.title}
              </h3>
              
              <p className="text-sm text-textMuted leading-relaxed flex-grow">
                {item.shortDesc}
              </p>

              <div className="mt-6 pt-6 border-t border-zinc-100 flex items-center text-sm font-medium text-black">
                Saber mais
                <motion.svg 
                  className="w-4 h-4 ml-2" 
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
