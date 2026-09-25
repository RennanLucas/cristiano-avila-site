"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, Variants } from "framer-motion";
import { UNITS_DATA } from "@/data/content";
import MagneticButton from "@/components/MagneticButton";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemAnim: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } }
};

export default function UnidadesPage() {
  return (
    <main className="min-h-screen bg-white text-[#111111] overflow-x-hidden selection:bg-black selection:text-white">
      <Header />
      
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-20 max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-black leading-tight mb-6">
              Consultórios <br />
              <span className="text-zinc-400">físicos.</span>
            </h1>
            <p className="text-xl text-textMuted font-light">
              Espaços pensados meticulosamente para o sigilo, conforto e foco absoluto no processo clínico.
            </p>
          </motion.div>

          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid lg:grid-cols-2 gap-10"
          >
            {UNITS_DATA.map((unit) => (
              <motion.div
                key={unit.id}
                variants={itemAnim}
                className="group flex flex-col sm:flex-row bg-surface rounded-3xl overflow-hidden border border-zinc-100 hover:shadow-apple transition-all duration-500"
              >
                {/* Aesthetic Image Placeholder */}
                <div className="sm:w-2/5 h-64 sm:h-auto bg-black relative overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                    alt={unit.city}
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                <div className="p-8 sm:w-3/5 flex flex-col justify-center">
                  <span className="text-xs font-bold tracking-widest text-zinc-400 uppercase mb-2">
                    {unit.state}
                  </span>
                  <h2 className="text-2xl font-bold tracking-tight text-black mb-4">
                    {unit.city}
                  </h2>
                  <p className="text-sm text-textMuted mb-6 leading-relaxed">
                    {unit.address}
                  </p>
                  
                  <div className="mt-auto">
                    <MagneticButton href={`https://maps.google.com/?q=${encodeURIComponent(unit.address)}`}>
                      <div className="inline-flex items-center text-sm font-semibold text-black hover:text-zinc-500 transition-colors">
                        Abrir no mapa
                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </MagneticButton>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
