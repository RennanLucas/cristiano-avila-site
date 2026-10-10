import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Locations from "@/components/Locations";
import { CURRENT_CITIES_TEXT } from "@/data/units";
import { buildWhatsAppLink } from "@/data/content";

export const metadata: Metadata = {
  title: "Unidades | Atendimento presencial",
  description: `Atendimento psicológico presencial em ${CURRENT_CITIES_TEXT}. Consulte endereços, mapas e disponibilidade de horários.`,
  alternates: { canonical: "/unidades" },
};

export default function UnidadesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f5f2] text-[#111111] selection:bg-black selection:text-white">
      <Header />

      <section className="relative overflow-hidden px-4 pb-20 pt-36 sm:px-6 sm:pb-24 sm:pt-44 lg:pb-28">
        <div className="pointer-events-none absolute inset-0 soft-grid opacity-[0.22]" />
        <div className="pointer-events-none absolute -right-24 top-20 h-80 w-80 rounded-full bg-zinc-200/50 blur-[110px]" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <span className="editorial-label">Atendimento presencial</span>
          <div className="mt-5 grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
            <h1 className="max-w-5xl text-[3rem] font-medium leading-[0.94] tracking-[-0.06em] text-black sm:text-6xl lg:text-[6.5rem]">Quatro cidades. <span className="font-serif font-normal italic text-zinc-500">Uma experiência de atendimento.</span></h1>
            <div className="max-w-md lg:justify-self-end">
              <p className="text-base font-light leading-relaxed text-zinc-600">Escolha a unidade mais conveniente para consultar endereço, mapa e disponibilidade. O atendimento online também continua disponível.</p>
              <a href={buildWhatsAppLink("Olá, Dr. Cristiano. Gostaria de consultar os horários e escolher a unidade mais conveniente para atendimento.")} target="_blank" rel="noopener noreferrer" className="btn-primary mt-7 inline-flex px-7 py-3.5 text-xs">Consultar agenda ↗</a>
            </div>
          </div>
        </div>
      </section>

      <Locations />

      <section className="bg-[#f5f5f2] px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 rounded-[32px] border border-zinc-200 bg-white p-7 shadow-[0_28px_80px_rgba(0,0,0,0.05)] sm:p-10 lg:grid-cols-[1fr_auto] lg:items-end lg:p-12">
            <div>
              <span className="editorial-label">Atendimento online</span>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-[1.03] tracking-[-0.045em] text-black sm:text-5xl">Prefere fazer a sessão por videochamada?</h2>
              <p className="mt-5 max-w-2xl text-sm font-light leading-relaxed text-zinc-600 sm:text-base">Consulte a disponibilidade para atendimento online sem depender da cidade onde você está.</p>
            </div>
            <a href={buildWhatsAppLink("Olá, Dr. Cristiano. Gostaria de informações e horários para atendimento psicológico online.")} target="_blank" rel="noopener noreferrer" className="btn-outline px-7 py-3.5 text-center text-xs">Consultar online ↗</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
