import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CLINIC_CONTACT, buildWhatsAppLink } from "@/data/content";
import { CURRENT_CITIES_TEXT } from "@/data/units";
import { PROFESSIONAL_REGISTRATION } from "@/lib/site-policy";

export const metadata: Metadata = {
  title: "Sobre | Psicólogo Clínico",
  description: "Trajetória profissional de Cristiano Ávila, psicólogo clínico com atendimento presencial e online.",
  alternates: { canonical: "/sobre" },
};

export default function SobrePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f5f2] text-[#111111] selection:bg-black selection:text-white">
      <Header />

      <section className="relative overflow-hidden px-4 pb-20 pt-36 sm:px-6 sm:pb-24 sm:pt-44 lg:pb-32">
        <div className="pointer-events-none absolute inset-0 soft-grid opacity-[0.2]" />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.06fr_.94fr] lg:items-end lg:gap-16">
          <div>
            <span className="editorial-label">Trajetória profissional</span>
            <h1 className="mt-5 max-w-5xl text-[3rem] font-medium leading-[0.95] tracking-[-0.06em] text-black sm:text-6xl lg:text-[6.4rem]">Clínica, experiência e <span className="font-serif font-normal italic text-zinc-500">escuta em diferentes contextos.</span></h1>
            <p className="mt-7 max-w-2xl text-base font-light leading-relaxed text-zinc-600 sm:text-lg">Cristiano Ávila da Silva é psicólogo clínico, {PROFESSIONAL_REGISTRATION}, com atendimento presencial e online e formação complementar em hipnoterapia e temas relacionados ao comportamento humano.</p>
          </div>

          <div className="relative mx-auto w-full max-w-[520px] lg:ml-auto">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[34px] border border-white bg-zinc-100 shadow-[0_38px_100px_rgba(0,0,0,0.13)]">
              <Image src={CLINIC_CONTACT.avatarUrl} alt="Cristiano Ávila da Silva" fill sizes="(max-width: 1024px) 92vw, 520px" className="object-cover object-top" priority />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent px-6 pb-7 pt-24 text-white sm:px-8">
                <p className="text-2xl font-semibold tracking-[-0.03em]">Cristiano Ávila da Silva</p>
                <p className="mt-1 text-xs text-white/58">Psicólogo Clínico • {PROFESSIONAL_REGISTRATION}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-tone="dark" className="relative overflow-hidden bg-black py-20 text-white sm:py-24 lg:py-32">
        <div className="cta-cinematic-grid pointer-events-none absolute inset-0 opacity-50" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[.48fr_1fr] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:h-fit"><span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/35">Perfil</span><p className="mt-6 max-w-sm text-sm font-light leading-relaxed text-white/45">A atuação reúne prática clínica, experiência institucional e comunicação em saúde mental.</p></div>
            <div className="grid gap-4 sm:grid-cols-2">
              <article className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7 sm:p-8"><span className="font-mono text-[10px] text-white/28">01</span><h2 className="mt-12 text-2xl font-semibold tracking-[-0.035em]">No consultório</h2><p className="mt-4 text-sm font-light leading-relaxed text-white/55">O trabalho inclui psicoterapia e, quando fizer sentido para a demanda, recursos complementares ligados à hipnoterapia e à compreensão de aspectos cognitivos e comportamentais.</p></article>
              <article className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7 sm:p-8"><span className="font-mono text-[10px] text-white/28">02</span><h2 className="mt-12 text-2xl font-semibold tracking-[-0.035em]">Experiência profissional</h2><p className="mt-4 text-sm font-light leading-relaxed text-white/55">A trajetória inclui experiência institucional junto à Fundação Casa Atibaia, atividades de educação em saúde mental, palestras e produção de conteúdo.</p></article>
              <article className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7 sm:p-8 sm:col-span-2"><span className="font-mono text-[10px] text-white/28">03</span><h2 className="mt-12 text-2xl font-semibold tracking-[-0.035em]">Formação complementar</h2><div className="mt-5 grid gap-3 text-sm font-light leading-relaxed text-white/55 sm:grid-cols-3"><p>Certificação em hipnoterapia pelo OMNI Training Center.</p><p>Estudos e atualização continuada em neurociência, comportamento e saúde mental.</p><p>Vivência profissional em contextos clínicos e institucionais.</p></div></article>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 rounded-[32px] border border-zinc-200 bg-white p-7 shadow-[0_26px_80px_rgba(0,0,0,0.05)] sm:p-10 lg:grid-cols-[1fr_auto] lg:items-end lg:p-12">
            <div><span className="editorial-label">Atendimento</span><h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">Presencial em {CURRENT_CITIES_TEXT} e online por videochamada.</h2></div>
            <a href={buildWhatsAppLink("Olá, Dr. Cristiano. Gostaria de consultar horários para uma primeira sessão.")} target="_blank" rel="noopener noreferrer" className="btn-primary px-7 py-3.5 text-xs">Consultar horários ↗</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
