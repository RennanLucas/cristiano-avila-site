"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import HeroVideoBackground from "./HeroVideoBackground";
import TrustBadges from "./TrustBadges";
import { CLINIC_CONTACT, buildWhatsAppLink } from "@/data/content";
import { PROFESSIONAL_REGISTRATION } from "@/lib/site-policy";

export default function Hero() {
  return (
    <HeroVideoBackground>
      <section className="relative pt-32 pb-10 md:pt-40 md:pb-14 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-12 lg:gap-16 items-center">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 border border-zinc-200 text-[11px] sm:text-xs font-medium text-zinc-700 mb-7 shadow-sm backdrop-blur"
              >
                <span>Psicologia clínica • {PROFESSIONAL_REGISTRATION}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.05 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-semibold tracking-[-0.045em] text-black leading-[1.02] mb-6"
              >
                Um espaço profissional para compreender o que você está vivendo.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.12 }}
                className="text-base sm:text-lg md:text-xl text-zinc-600 max-w-2xl font-light leading-relaxed mb-8"
              >
                Atendimento psicológico presencial e online, com escuta qualificada, planejamento individualizado e recursos clínicos adequados às necessidades de cada pessoa.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
              >
                <MagneticButton href={buildWhatsAppLink("Olá, Dr. Cristiano. Gostaria de verificar a disponibilidade para uma primeira consulta.")} className="w-full sm:w-auto">
                  <div className="btn-primary shadow-apple w-full sm:w-auto text-center py-3.5 text-sm">Ver disponibilidade</div>
                </MagneticButton>
                <MagneticButton href="#especialidades" className="w-full sm:w-auto">
                  <div className="btn-outline w-full sm:w-auto text-center py-3.5 text-sm">Conhecer formas de atendimento</div>
                </MagneticButton>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative mx-auto w-full max-w-[500px]"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-100 shadow-2xl">
                <Image
                  src={CLINIC_CONTACT.avatarUrl}
                  alt="Cristiano Ávila da Silva, psicólogo"
                  fill
                  sizes="(max-width: 1024px) 90vw, 500px"
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent p-6 sm:p-8 pt-20 text-white">
                  <p className="text-lg sm:text-xl font-semibold tracking-tight">Cristiano Ávila da Silva</p>
                  <p className="text-sm text-white/80 mt-1">Psicólogo Clínico • {PROFESSIONAL_REGISTRATION}</p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-zinc-200 bg-white/90 p-4 shadow-sm backdrop-blur">
                  <span className="block text-[10px] uppercase tracking-widest font-semibold text-zinc-400 mb-1">Atendimento</span>
                  <span className="text-sm font-semibold text-black">Presencial & online</span>
                </div>
                <div className="rounded-2xl border border-zinc-200 bg-white/90 p-4 shadow-sm backdrop-blur">
                  <span className="block text-[10px] uppercase tracking-widest font-semibold text-zinc-400 mb-1">Formação complementar</span>
                  <span className="text-sm font-semibold text-black">Hipnoterapia OMNI</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 sm:mt-14"
          >
            <TrustBadges />
          </motion.div>
        </div>
      </section>
    </HeroVideoBackground>
  );
}
