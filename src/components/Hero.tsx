"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "./MagneticButton";
import HeroVideoBackground from "./HeroVideoBackground";
import TrustBadges from "./TrustBadges";
import { CLINIC_CONTACT, buildWhatsAppLink } from "@/data/content";
import { PROFESSIONAL_REGISTRATION } from "@/lib/site-policy";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1, 1.04]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 32]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0.72]);

  return (
    <HeroVideoBackground>
      <section ref={heroRef} className="relative overflow-hidden pb-10 pt-28 sm:pb-12 sm:pt-32 md:pb-16 md:pt-40">
        <div className="pointer-events-none absolute inset-0 soft-grid opacity-[0.45] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />
        <div className="aurora-orb absolute -left-28 top-24 h-80 w-80 rounded-full bg-fuchsia-200/30 blur-[80px]" />
        <div className="aurora-orb aurora-orb-delayed absolute right-[-7rem] top-10 h-[26rem] w-[26rem] rounded-full bg-amber-100/55 blur-[95px]" />
        <div className="aurora-orb absolute bottom-0 left-[42%] h-64 w-64 rounded-full bg-sky-100/45 blur-[90px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-[1.02fr_.98fr] lg:gap-16">
            <motion.div style={{ y: copyY, opacity: fade }} className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-white/80 bg-white/72 px-3.5 py-1.5 text-[10px] font-medium text-zinc-700 shadow-[0_10px_32px_rgba(0,0,0,0.07)] backdrop-blur-xl sm:mb-7 sm:text-xs"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-900" />
                <span className="truncate">Psicologia clínica • {PROFESSIONAL_REGISTRATION}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 26, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="mb-5 text-[2.55rem] font-semibold leading-[0.98] tracking-[-0.055em] text-black min-[390px]:text-5xl sm:mb-6 sm:text-5xl md:text-6xl lg:text-[4.7rem]"
              >
                Cuidado psicológico com profundidade, presença e direção.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.14 }}
                className="mb-8 max-w-2xl text-[15px] font-light leading-relaxed text-zinc-600 sm:mb-9 sm:text-lg md:text-xl"
              >
                Atendimento presencial e online com escuta qualificada, planejamento individualizado e recursos clínicos adequados às necessidades de cada pessoa.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.22 }}
                className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4"
              >
                <MagneticButton href={buildWhatsAppLink("Olá, Dr. Cristiano. Gostaria de verificar a disponibilidade para uma primeira consulta.")} className="w-full sm:w-auto">
                  <div className="btn-primary w-full py-3.5 text-center text-sm sm:w-auto">Ver disponibilidade</div>
                </MagneticButton>
                <MagneticButton href="#especialidades" className="w-full sm:w-auto">
                  <div className="btn-outline w-full py-3.5 text-center text-sm sm:w-auto">Conhecer formas de atendimento</div>
                </MagneticButton>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.34 }}
                className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs text-zinc-500 sm:mt-9"
              >
                <span className="inline-flex items-center gap-2"><span className="h-px w-5 bg-zinc-300" />Presencial em 4 cidades</span>
                <span className="inline-flex items-center gap-2"><span className="h-px w-5 bg-zinc-300" />Atendimento online</span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 34, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto w-full max-w-[500px] lg:max-w-[540px]"
            >
              <motion.div style={{ y: portraitY, scale: portraitScale }} className="relative">
                <div className="absolute -inset-4 rounded-[2.25rem] bg-gradient-to-br from-white/90 via-white/20 to-zinc-200/50 blur-2xl sm:-inset-5 sm:rounded-[2.4rem]" />
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/80 bg-zinc-100 shadow-[0_30px_80px_rgba(0,0,0,0.14)] ring-1 ring-black/[0.04] sm:rounded-[2.35rem] sm:shadow-[0_38px_100px_rgba(0,0,0,0.16)]">
                  <Image
                    src={CLINIC_CONTACT.avatarUrl}
                    alt="Cristiano Ávila da Silva, psicólogo"
                    fill
                    sizes="(max-width: 1024px) 90vw, 540px"
                    className="object-cover object-top transition-transform duration-[1200ms] hover:scale-[1.025]"
                    priority
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(145deg,transparent_52%,rgba(0,0,0,0.28))]" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent px-5 pb-6 pt-24 text-white sm:px-8 sm:pb-8 sm:pt-28">
                    <p className="text-lg font-semibold tracking-tight min-[390px]:text-xl sm:text-2xl">Cristiano Ávila da Silva</p>
                    <p className="mt-1 text-xs leading-relaxed text-white/75 min-[390px]:text-sm">Psicólogo Clínico • {PROFESSIONAL_REGISTRATION}</p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-3 min-[390px]:grid-cols-2 sm:hidden">
                  <div className="premium-glass min-w-0 rounded-2xl p-4">
                    <span className="block text-[9px] font-semibold uppercase tracking-widest text-zinc-400">Atendimento</span>
                    <strong className="mt-1 block text-sm leading-snug text-black">Presencial & online</strong>
                  </div>
                  <div className="premium-dark min-w-0 rounded-2xl p-4 text-white">
                    <span className="block text-[9px] font-semibold uppercase tracking-widest text-white/45">Formação</span>
                    <strong className="mt-1 block text-sm leading-snug">Hipnoterapia OMNI</strong>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20, y: 16 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.65, delay: 0.55 }}
                className="floating-card absolute -left-3 top-[17%] hidden rounded-2xl px-4 py-3 premium-glass sm:block lg:-left-12"
              >
                <span className="block text-[9px] font-semibold uppercase tracking-[0.16em] text-zinc-400">Atendimento</span>
                <strong className="mt-1 block text-sm font-semibold text-black">Presencial & online</strong>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 18, y: 18 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.65, delay: 0.66 }}
                className="floating-card floating-card-delayed absolute -right-2 bottom-[18%] hidden rounded-2xl px-4 py-3 premium-dark text-white sm:block lg:-right-10"
              >
                <span className="block text-[9px] font-semibold uppercase tracking-[0.16em] text-white/45">Formação complementar</span>
                <strong className="mt-1 block text-sm font-semibold">Hipnoterapia OMNI</strong>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.48 }}
            className="mt-12 sm:mt-16"
          >
            <TrustBadges />
          </motion.div>
        </div>
      </section>
    </HeroVideoBackground>
  );
}
