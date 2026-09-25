"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CLINIC_CONTACT } from "@/data/content";

export default function YouTubeSection() {
  return (
    <section className="py-24 lg:py-32 bg-zinc-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,0,0,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_30%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-[11px] font-bold tracking-widest text-red-400 uppercase mb-5">
              Canal no YouTube • {CLINIC_CONTACT.youtubeHandle}
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-5">
              Conteúdo sobre psicologia, comportamento e saúde mental.
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-zinc-400 font-light leading-relaxed max-w-2xl mb-8">
              Acesse o canal de Cristiano Ávila para acompanhar vídeos, reflexões e conteúdos de caráter informativo e psicoeducativo.
            </p>

            <a
              href={CLINIC_CONTACT.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-white text-black px-6 py-3.5 rounded-full text-xs font-bold tracking-wide hover:bg-zinc-100 transition-colors"
            >
              <svg className="w-5 h-5 fill-red-600" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Abrir canal oficial
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="rounded-[2rem] border border-zinc-800 bg-zinc-900 p-7 sm:p-9 shadow-2xl">
              <div className="flex items-center gap-4">
                <Image
                  src={CLINIC_CONTACT.avatarUrl}
                  alt="Cristiano Ávila"
                  width={72}
                  height={72}
                  className="h-16 w-16 sm:h-[72px] sm:w-[72px] rounded-2xl object-cover object-top border border-zinc-700"
                />
                <div>
                  <p className="text-lg font-bold text-white">Cristiano Ávila</p>
                  <p className="text-sm text-zinc-400 mt-1">{CLINIC_CONTACT.youtubeHandle}</p>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4">
                  <span className="block text-[10px] uppercase tracking-widest text-zinc-500 font-semibold mb-1">Conteúdo</span>
                  <strong className="text-sm text-white">Psicoeducativo</strong>
                </div>
                <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4">
                  <span className="block text-[10px] uppercase tracking-widest text-zinc-500 font-semibold mb-1">Temas</span>
                  <strong className="text-sm text-white">Mente & comportamento</strong>
                </div>
              </div>

              <p className="mt-6 text-xs leading-relaxed text-zinc-500">
                Os conteúdos do canal são informativos e não substituem avaliação ou acompanhamento psicológico individualizado.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
