"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CLINIC_CONTACT } from "@/data/content";

export default function YouTubeSection() {
  return (
    <section className="relative overflow-hidden bg-[#0B0B0D] py-24 text-white lg:py-32">
      <div className="pointer-events-none absolute inset-0 soft-grid opacity-[0.055]" />
      <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-red-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-fuchsia-500/[0.08] blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.68, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-red-300">
              <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
              YouTube • {CLINIC_CONTACT.youtubeHandle}
            </div>

            <h2 className="max-w-2xl text-3xl font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-4xl lg:text-6xl">
              Conteúdo para continuar a reflexão além do consultório.
            </h2>

            <p className="mt-6 max-w-2xl text-sm font-light leading-relaxed text-white/55 sm:text-base lg:text-lg">
              Vídeos e reflexões sobre psicologia, comportamento e saúde mental em caráter informativo e psicoeducativo.
            </p>

            <a
              href={CLINIC_CONTACT.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-xs font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(255,255,255,0.13)]"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-600 text-white">
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </span>
              Abrir canal oficial
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">↗</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.72, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.045] p-5 shadow-[0_38px_110px_rgba(0,0,0,0.38)] backdrop-blur-xl sm:p-7">
              <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-red-500/[0.07] blur-[80px]" />
              <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-fuchsia-500/[0.06] blur-[90px]" />

              <div className="relative z-10 overflow-hidden rounded-[28px] border border-white/10 bg-black/30 p-6 sm:p-8">
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-[20px] border border-white/10 sm:h-[76px] sm:w-[76px]">
                    <Image
                      src={CLINIC_CONTACT.avatarUrl}
                      alt="Cristiano Ávila"
                      fill
                      sizes="76px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <span className="text-[9px] font-semibold uppercase tracking-[0.17em] text-white/35">Canal oficial</span>
                    <p className="mt-1 text-xl font-semibold tracking-[-0.025em] text-white">Cristiano Ávila</p>
                    <p className="mt-1 text-xs text-white/40">{CLINIC_CONTACT.youtubeHandle}</p>
                  </div>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    { label: "Formato", value: "Conteúdo psicoeducativo" },
                    { label: "Temas", value: "Mente & comportamento" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: 0.2 + index * 0.08 }}
                      whileHover={{ y: -4 }}
                      className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition-colors hover:bg-white/[0.06]"
                    >
                      <span className="block text-[9px] font-semibold uppercase tracking-[0.16em] text-white/30">{item.label}</span>
                      <strong className="mt-1.5 block text-sm font-medium text-white">{item.value}</strong>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-7 border-t border-white/10 pt-6">
                  <p className="text-[11px] font-light leading-relaxed text-white/35">
                    Os conteúdos do canal são informativos e não substituem avaliação ou acompanhamento psicológico individualizado.
                  </p>
                </div>
              </div>

              <motion.a
                href={CLINIC_CONTACT.youtube}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, rotate: 1 }}
                className="floating-card absolute -right-2 top-10 hidden items-center gap-3 rounded-2xl border border-white/10 bg-white px-4 py-3 text-black shadow-[0_20px_50px_rgba(0,0,0,0.25)] sm:flex lg:-right-8"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">▶</span>
                <div>
                  <span className="block text-[9px] font-semibold uppercase tracking-[0.15em] text-zinc-400">Assistir agora</span>
                  <strong className="mt-0.5 block text-xs font-semibold">YouTube</strong>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
