"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CLINIC_CONTACT } from "@/data/content";

interface VideoItem {
  id: string;
  title: string;
  duration: string;
  tag: string;
  desc: string;
  thumbnail: string;
  youtubeUrl: string;
}

const FEATURED_VIDEO: VideoItem = {
  id: "featured",
  title: "A Mente que Adoece é a Mesma que Cura: Quebrando ciclos inconscientes",
  duration: "24:18",
  tag: "Episódio em Destaque",
  desc: "Neste vídeo aprofundado, o Dr. Cristiano Ávila explora como registros mnêmicos e circuitos de hipervigilância mantém padrões de ansiedade e depressão ativos, e como a integração entre Neurociência e Hipnose Clínica restaura a autorregulação.",
  thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=85&fit=crop",
  youtubeUrl: CLINIC_CONTACT.youtube,
};

const VIDEOS: VideoItem[] = [
  {
    id: "v1",
    title: "Ansiedade, Foco e TDAH: A neuroquímica por trás da dispersão mental",
    duration: "16:45",
    tag: "Neurociência Prática",
    desc: "Por que a força de vontade não basta para manter o foco sob sobrecarga emocional e como regular a dopamina.",
    thumbnail: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=85&fit=crop",
    youtubeUrl: CLINIC_CONTACT.youtube,
  },
  {
    id: "v2",
    title: "Hipnoterapia Clínica OMNI: Desmistificando o acesso ao subconsciente",
    duration: "21:10",
    tag: "Hipnose Clínica",
    desc: "Entenda o protocolo suíço ISO 9001 e como o foco atencional reduz defesas psíquicas para ressignificar traumas.",
    thumbnail: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=85&fit=crop",
    youtubeUrl: CLINIC_CONTACT.youtube,
  },
  {
    id: "v3",
    title: "Burnout e Esgotamento: Por que o corpo desliga antes da mente",
    duration: "18:30",
    tag: "Saúde Mental no Trabalho",
    desc: "A fisiologia do esgotamento profissional, o colapso adrenérgico e os primeiros passos de recuperação clínica.",
    thumbnail: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=85&fit=crop",
    youtubeUrl: CLINIC_CONTACT.youtube,
  },
  {
    id: "v4",
    title: "Constelação Familiar: Como padrões inconscientes atravessam gerações",
    duration: "25:00",
    tag: "Dinâmicas Relacionais",
    desc: "Como dinâmicas e lealdades invisíveis da família de origem moldam escolhas afetivas e bloqueios na vida adulta.",
    thumbnail: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=85&fit=crop",
    youtubeUrl: CLINIC_CONTACT.youtube,
  },
];

export default function YouTubeSection() {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  return (
    <section className="py-24 lg:py-32 bg-zinc-950 text-white relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-emerald-600/5 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Subtle Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-[11px] font-bold tracking-widest text-red-400 uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>Canal Oficial no YouTube • @cristianoavilapsi</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
              Psicoeducação & <br />
              <span className="text-zinc-400">A Mente que Cura.</span>
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg text-zinc-400 font-light leading-relaxed">
              Acompanhe aulas clínicas, reflexões neurocientíficas e estratégias de autogestão emocional compartilhadas pelo Dr. Cristiano Ávila em seu canal oficial.
            </p>
          </div>

          {/* Quick Subscribe Button */}
          <div className="shrink-0 flex items-center gap-3">
            <a
              href={CLINIC_CONTACT.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#FF0000] hover:bg-[#d90000] text-white px-6 py-3.5 rounded-full text-xs font-bold tracking-wide shadow-lg hover:shadow-red-500/20 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>Inscrever-se no Canal</span>
            </a>
          </div>
        </div>

        {/* Featured Video Card (MasterClass / Apple TV Style) */}
        <div className="mb-14">
          <div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900/80 shadow-2xl group">
            <div className="grid lg:grid-cols-12 gap-0 items-center">
              
              {/* Thumbnail com Play Button */}
              <div className="lg:col-span-7 relative aspect-[16/9] lg:aspect-[16/10] overflow-hidden bg-zinc-950">
                <img
                  src={FEATURED_VIDEO.thumbnail}
                  alt={FEATURED_VIDEO.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent lg:hidden" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-zinc-900/90 hidden lg:block" />

                {/* Duration Badge */}
                <span className="absolute bottom-4 left-4 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-white text-[11px] font-mono font-semibold tracking-wider border border-white/10">
                  ⏱ {FEATURED_VIDEO.duration}
                </span>

                {/* Big Animated Play Button */}
                <a
                  href={FEATURED_VIDEO.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center group/btn"
                  aria-label="Assistir vídeo no YouTube"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600/90 hover:bg-red-600 text-white flex items-center justify-center shadow-2xl group-hover/btn:scale-110 active:scale-95 transition-all duration-300 backdrop-blur-sm border-2 border-white/20">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </a>
              </div>

              {/* Informações do Vídeo */}
              <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-full bg-red-500/20 text-red-400 text-[10px] font-bold tracking-wider uppercase border border-red-500/30">
                      {FEATURED_VIDEO.tag}
                    </span>
                    <span className="text-zinc-500 text-xs">Exclusivo YouTube</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white mb-4 leading-snug group-hover:text-red-400 transition-colors">
                    {FEATURED_VIDEO.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mb-6">
                    {FEATURED_VIDEO.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-zinc-800/80 flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={CLINIC_CONTACT.avatarUrl}
                      alt="Dr. Cristiano Ávila"
                      className="w-10 h-10 rounded-full object-cover object-top border border-zinc-700"
                    />
                    <div>
                      <p className="text-xs font-bold text-white">Dr. Cristiano Ávila</p>
                      <p className="text-[10px] text-zinc-500 font-light">Autor de "A Mente que Cura"</p>
                    </div>
                  </div>

                  <a
                    href={FEATURED_VIDEO.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-red-400 hover:text-red-300 transition-colors group/link"
                  >
                    <span>Assistir no YouTube</span>
                    <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* Video Grid (Mais Episódios do Canal) */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span>Aulas Clínicas & Vídeos Recentes</span>
            </h3>
            <a
              href={CLINIC_CONTACT.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
            >
              Acessar canal completo →
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VIDEOS.map((video) => (
              <a
                key={video.id}
                href={video.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-600 transition-all duration-300 overflow-hidden hover:shadow-xl hover:-translate-y-1"
              >
                {/* Thumbnail */}
                <div className="relative aspect-[16/9] overflow-hidden bg-zinc-950">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Play Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-11 h-11 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Duration */}
                  <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-[10px] font-mono text-zinc-300 border border-white/10">
                    {video.duration}
                  </span>

                  {/* Tag */}
                  <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-zinc-900/90 backdrop-blur-md text-[9px] font-semibold text-zinc-300 border border-white/10 uppercase tracking-wider">
                    {video.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-red-400 transition-colors line-clamp-2 leading-snug mb-2">
                      {video.title}
                    </h4>
                    <p className="text-xs text-zinc-400 font-light line-clamp-2 leading-relaxed">
                      {video.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-500">
                    <span>Dr. Cristiano Ávila</span>
                    <span className="text-red-400 font-semibold group-hover:translate-x-0.5 transition-transform">Assistir →</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Community Banner (YouTube + Facebook) */}
        <div className="mt-16 rounded-3xl p-6 sm:p-10 bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-zinc-950 border border-zinc-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left w-full md:w-auto">
            <div className="relative shrink-0">
              <img
                src={CLINIC_CONTACT.avatarUrl}
                alt="Dr. Cristiano Ávila"
                className="w-14 h-14 rounded-2xl object-cover object-top border border-zinc-700 shadow-md"
              />
              <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-zinc-900" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Acompanhe o Dr. Cristiano nas redes
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 font-light">
                Vídeos semanais no YouTube e publicações clínicas exclusivas no Facebook.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto flex-wrap sm:flex-nowrap">
            {/* Botão YouTube */}
            <a
              href={CLINIC_CONTACT.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-[#FF0000] hover:bg-[#d90000] text-white px-5 py-3 rounded-full text-xs font-bold transition-all shadow-md active:scale-95"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>Canal no YouTube</span>
            </a>

            {/* Botão Facebook */}
            <a
              href={CLINIC_CONTACT.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-[#1877F2] hover:bg-[#166fe5] text-white px-5 py-3 rounded-full text-xs font-bold transition-all shadow-md active:scale-95"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Página no Facebook</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
