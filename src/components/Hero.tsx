import Image from "next/image";
import HeroVideoBackground from "./HeroVideoBackground";
import TrustBadges from "./TrustBadges";
import HeroCinematicNote from "./HeroCinematicNote";
import { CLINIC_CONTACT, buildWhatsAppLink } from "@/data/content";
import { PROFESSIONAL_REGISTRATION } from "@/lib/site-policy";

export default function Hero() {
  return (
    <HeroVideoBackground>
      <section id="inicio" className="hero-stage relative overflow-hidden pb-12 pt-28 sm:pb-14 sm:pt-32 md:pt-36 lg:flex lg:min-h-[100svh] lg:items-center lg:pb-16 lg:pt-32">
        <div className="pointer-events-none absolute inset-0 soft-grid opacity-[0.34] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
        <div className="aurora-orb absolute -left-28 top-24 h-80 w-80 rounded-full bg-fuchsia-200/25 blur-[80px]" />
        <div className="aurora-orb aurora-orb-delayed absolute right-[-7rem] top-10 h-[26rem] w-[26rem] rounded-full bg-amber-100/45 blur-[95px]" />
        <div className="hero-wordmark pointer-events-none absolute inset-x-0 top-[22%] hidden select-none text-center font-serif text-[13vw] italic leading-none tracking-[-0.08em] text-black/[0.035] lg:block">PRESENÇA</div>
        <HeroCinematicNote />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8 xl:gap-12">
            <div className="hero-copy max-w-3xl lg:pb-10">
              <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-white/80 bg-white/72 px-3.5 py-1.5 text-[10px] font-medium text-zinc-700 shadow-[0_10px_32px_rgba(0,0,0,0.07)] sm:mb-7 sm:text-xs md:backdrop-blur-xl">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-900" />
                <span className="truncate">Psicologia clínica • {PROFESSIONAL_REGISTRATION}</span>
              </div>

              <h1 className="hero-title mb-6 text-[2.75rem] font-semibold leading-[0.94] tracking-[-0.06em] text-black min-[390px]:text-5xl sm:text-6xl lg:text-[5.45rem] xl:text-[6.1rem]">
                <span className="hero-title-line block">Entender o que</span>
                <span className="hero-title-line block font-serif font-normal italic text-zinc-700">acontece por dentro.</span>
              </h1>

              <p className="mb-8 max-w-xl text-[15px] font-light leading-relaxed text-zinc-600 sm:mb-9 sm:text-lg md:text-xl">Psicoterapia presencial e online com Cristiano Ávila para questões emocionais, comportamentais e relacionais.</p>

              <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
                <a data-cursor-label="Agendar" href={buildWhatsAppLink("Olá, Dr. Cristiano. Gostaria de verificar a disponibilidade para uma primeira consulta.")} target="_blank" rel="noopener noreferrer" className="btn-primary w-full py-3.5 text-center text-sm sm:w-auto">Consultar horários</a>
                <a data-cursor-label="Explorar" href="#especialidades" className="btn-outline w-full py-3.5 text-center text-sm sm:w-auto">Ver formas de atendimento</a>
              </div>

              <div className="mt-9 grid max-w-xl grid-cols-2 gap-4 border-t border-zinc-200/70 pt-5 text-xs text-zinc-500 sm:flex sm:flex-wrap sm:items-center sm:gap-x-8">
                <span><strong className="block text-sm font-semibold text-black">4 cidades</strong> atendimento presencial</span>
                <span><strong className="block text-sm font-semibold text-black">Online</strong> por videochamada</span>
              </div>
            </div>

            <div className="hero-visual hero-scroll-visual relative mx-auto w-full max-w-[540px] lg:ml-auto lg:max-w-[620px] xl:max-w-[660px]" data-cursor-label="Cristiano">
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2.35rem] bg-gradient-to-br from-white/90 via-white/20 to-zinc-200/50 blur-2xl sm:-inset-5 sm:rounded-[2.6rem]" />
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/80 bg-zinc-100 shadow-[0_32px_90px_rgba(0,0,0,0.14)] ring-1 ring-black/[0.04] sm:rounded-[2.5rem] lg:aspect-[4.3/5] lg:shadow-[0_44px_130px_rgba(0,0,0,0.18)]">
                  <Image src={CLINIC_CONTACT.avatarUrl} alt="Cristiano Ávila da Silva, psicólogo" fill sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) 540px, 660px" className="object-cover object-top transition-transform duration-700 md:hover:scale-[1.018]" priority />
                  <div className="absolute inset-0 bg-[linear-gradient(145deg,transparent_50%,rgba(0,0,0,0.30))]" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/88 via-black/32 to-transparent px-5 pb-6 pt-24 text-white sm:px-8 sm:pb-8 sm:pt-28">
                    <p className="text-lg font-semibold tracking-tight min-[390px]:text-xl sm:text-2xl">Cristiano Ávila da Silva</p>
                    <p className="mt-1 text-xs leading-relaxed text-white/72 min-[390px]:text-sm">Psicólogo Clínico • {PROFESSIONAL_REGISTRATION}</p>
                  </div>
                </div>
              </div>

              <div className="floating-card absolute -left-3 top-[17%] hidden rounded-2xl px-4 py-3 premium-glass sm:block lg:-left-16"><span className="block text-[9px] font-semibold uppercase tracking-[0.16em] text-zinc-400">Consultas</span><strong className="mt-1 block text-sm font-semibold text-black">Presencial & online</strong></div>
              <div className="floating-card floating-card-delayed absolute -right-2 bottom-[18%] hidden rounded-2xl px-4 py-3 premium-dark text-white sm:block lg:-right-8"><span className="block text-[9px] font-semibold uppercase tracking-[0.16em] text-white/45">Formação complementar</span><strong className="mt-1 block text-sm font-semibold">Hipnoterapia OMNI</strong></div>
            </div>
          </div>

          <div className="mt-12 sm:mt-14 lg:mt-10"><TrustBadges /></div>
        </div>

        <a href="#na-pratica" className="hero-scroll-cue absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.22em] text-zinc-400 lg:flex" data-cursor-label="Descer"><span className="hero-scroll-cue-line" />Role para explorar</a>
      </section>
    </HeroVideoBackground>
  );
}
