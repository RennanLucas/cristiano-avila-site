"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { CLINIC_CONTACT } from "@/data/content";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
      {/* Very subtle background gradient like Linear/Vercel */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-zinc-200 via-white to-white blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-medium text-zinc-600 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
            Atendimento Presencial e Online
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.1, type: "spring", bounce: 0.3 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-black leading-[1.1] mb-6"
          >
            Compreender a mente é o <br className="hidden md:block" />
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="text-zinc-400"
            >
              primeiro passo.
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-textMuted max-w-2xl font-light leading-relaxed mb-10"
          >
            Atendimento psicológico clínico baseado em escuta qualificada, conhecimento neurocientífico e estratégias terapêuticas rigorosamente individualizadas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <MagneticButton href={CLINIC_CONTACT.whatsappUrl}>
              <div className="btn-primary">Agendar uma consulta</div>
            </MagneticButton>
            <MagneticButton href="#especialidades">
              <div className="btn-outline">Conhecer especialidades</div>
            </MagneticButton>
          </motion.div>

          {/* Minimalist Profile/Trust Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-20 pt-10 border-t border-zinc-100 w-full flex flex-col md:flex-row items-center justify-between gap-8 text-left"
          >
            <div className="flex items-center gap-4">
              <img 
                src={CLINIC_CONTACT.avatarUrl} 
                alt="Cristiano Ávila" 
                className="w-12 h-12 rounded-full object-cover border border-zinc-200 grayscale"
              />
              <div>
                <p className="text-sm font-semibold text-black">Cristiano Ávila da Silva</p>
                <p className="text-xs text-textMuted">Psicólogo Clínico & Neurocientista</p>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="flex flex-col">
                <span className="text-xs text-textMuted mb-1">Certificação</span>
                <span className="text-sm font-medium text-black">OMNI Training Center</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-textMuted mb-1">Unidades</span>
                <span className="text-sm font-medium text-black">SP, Atibaia, Santos</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
