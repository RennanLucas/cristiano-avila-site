import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SPECIALTIES_DATA, CLINIC_CONTACT, buildWhatsAppLink } from "@/data/content";
import { SPECIALTY_COPY } from "@/data/specialty-copy";
import { CURRENT_UNITS } from "@/data/units";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingDock from "@/components/FloatingDock";
import { isPublicSpecialty, PROFESSIONAL_REGISTRATION, SITE_URL } from "@/lib/site-policy";

export function generateStaticParams() {
  return SPECIALTIES_DATA.filter((s) => isPublicSpecialty(s.id)).map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const specialty = SPECIALTIES_DATA.find((s) => s.slug === params.slug && isPublicSpecialty(s.id));
  if (!specialty) return {};

  const copy = SPECIALTY_COPY[specialty.id];
  const title = `${specialty.title} | Atendimento psicológico`;
  const description = (copy?.shortDesc ?? specialty.shortDesc).slice(0, 155);
  const url = `${SITE_URL}/especialidades/${specialty.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website", images: [`${SITE_URL}${CLINIC_CONTACT.avatarUrl}`] },
  };
}

export default function SpecialtyPage({ params }: { params: { slug: string } }) {
  const baseSpecialty = SPECIALTIES_DATA.find((s) => s.slug === params.slug && isPublicSpecialty(s.id));
  if (!baseSpecialty) notFound();

  const copy = SPECIALTY_COPY[baseSpecialty.id];
  const specialty = { ...baseSpecialty, ...(copy ?? {}) };
  const summary = copy?.summary ?? baseSpecialty.shortDesc;
  const otherSpecialties = SPECIALTIES_DATA
    .filter((s) => s.slug !== specialty.slug && isPublicSpecialty(s.id))
    .slice(0, 3)
    .map((item) => ({ ...item, ...(SPECIALTY_COPY[item.id] ?? {}) }));
  const whatsappMessage = `Olá, Dr. Cristiano. Li a página sobre ${specialty.title} e gostaria de consultar a disponibilidade para uma sessão.`;
  const currentCities = CURRENT_UNITS.map((unit) => unit.city).join(", ");

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f5f2] pb-20 text-[#111111] selection:bg-black selection:text-white sm:pb-0">
      <Header />

      <section data-tone="dark" className="relative overflow-hidden bg-black px-4 pb-20 pt-36 text-white sm:px-6 sm:pb-24 sm:pt-44 lg:pb-32">
        <div className="cta-cinematic-grid pointer-events-none absolute inset-0 opacity-60" />
        <div className="pointer-events-none absolute -right-8 top-24 font-serif text-[10rem] italic leading-none text-white/[0.04] sm:text-[16rem] lg:right-[5%] lg:text-[22rem]">{specialty.num}</div>
        <div className="relative z-10 mx-auto max-w-7xl">
          <nav className="mb-10 flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/35" aria-label="Breadcrumb">
            <Link href="/" className="transition-colors hover:text-white">Início</Link><span>/</span>
            <Link href="/#especialidades" className="transition-colors hover:text-white">Atendimentos</Link><span>/</span>
            <span className="text-white/70">{specialty.title}</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-end lg:gap-16">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/38">{specialty.badge}</span>
              <h1 className="mt-5 max-w-5xl text-[3.15rem] font-medium leading-[0.92] tracking-[-0.06em] text-white sm:text-6xl lg:text-[7.2rem]">{specialty.title}</h1>
              <p className="mt-6 max-w-3xl font-serif text-2xl italic leading-snug text-white/58 sm:text-3xl">{specialty.subtitle}</p>
            </div>
            <div className="max-w-xl lg:justify-self-end">
              <p className="text-base font-light leading-relaxed text-white/55 sm:text-lg">{specialty.shortDesc}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={buildWhatsAppLink(whatsappMessage)} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-7 py-3.5 text-center text-xs font-semibold text-black transition-transform hover:scale-[1.02]">Consultar horários ↗</a>
                <Link href="/#especialidades" className="rounded-full border border-white/15 px-7 py-3.5 text-center text-xs font-semibold text-white/75 transition-colors hover:bg-white/10 hover:text-white">Outras opções</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_330px] lg:gap-16">
            <div className="space-y-12">
              <section className="premium-dark relative overflow-hidden rounded-[32px] p-7 text-white sm:p-10 lg:p-12">
                <div className="pointer-events-none absolute -right-10 -top-20 font-serif text-[12rem] italic leading-none text-white/[0.04]">{specialty.num}</div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-5"><span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/35">Em foco</span><span className="font-mono text-[10px] text-white/28">{specialty.num}</span></div>
                  <p className="mt-16 max-w-4xl text-2xl font-light leading-[1.35] tracking-[-0.025em] text-white/78 sm:text-3xl lg:text-4xl">{summary}</p>
                </div>
              </section>

              <section>
                <span className="editorial-label">Como funciona</span>
                <h2 className="mt-4 max-w-4xl text-3xl font-semibold leading-[1.03] tracking-[-0.045em] text-black sm:text-5xl">Como essa frente pode ser trabalhada.</h2>
                <div className="mt-8 grid gap-6 text-base font-light leading-[1.85] text-zinc-650 sm:text-lg">
                  {specialty.fullDesc.map((paragraph, idx) => <p key={idx} className="max-w-4xl">{paragraph}</p>)}
                </div>
              </section>

              <div className="grid gap-5 md:grid-cols-2">
                <section className="premium-glass rounded-[30px] p-7 sm:p-9">
                  <div className="flex items-center justify-between"><span className="font-mono text-[10px] text-zinc-400">01</span><span className="text-[9px] font-semibold uppercase tracking-[0.17em] text-zinc-400">Situações</span></div>
                  <h3 className="mt-10 text-2xl font-semibold leading-tight tracking-[-0.035em] text-black">O que pode chegar à sessão</h3>
                  <ul className="mt-6 space-y-4">
                    {specialty.indications.map((item, i) => <li key={i} className="grid grid-cols-[18px_1fr] gap-3 border-t border-zinc-200/70 pt-4 text-sm font-light leading-relaxed text-zinc-600 first:border-t-0 first:pt-0"><span className="font-mono text-[9px] text-zinc-300">{String(i + 1).padStart(2, "0")}</span><span>{item}</span></li>)}
                  </ul>
                </section>

                <section className="premium-dark rounded-[30px] p-7 text-white sm:p-9">
                  <div className="flex items-center justify-between"><span className="font-mono text-[10px] text-white/28">02</span><span className="text-[9px] font-semibold uppercase tracking-[0.17em] text-white/35">Trabalho clínico</span></div>
                  <h3 className="mt-10 text-2xl font-semibold leading-tight tracking-[-0.035em] text-white">Aspectos que podem ser trabalhados</h3>
                  <ul className="mt-6 space-y-4">
                    {specialty.benefits.map((item, i) => <li key={i} className="grid grid-cols-[18px_1fr] gap-3 border-t border-white/10 pt-4 text-sm font-light leading-relaxed text-white/58 first:border-t-0 first:pt-0"><span className="font-mono text-[9px] text-white/25">{String(i + 1).padStart(2, "0")}</span><span>{item}</span></li>)}
                  </ul>
                </section>
              </div>
            </div>

            <aside className="lg:sticky lg:top-28 lg:h-fit">
              <div className="overflow-hidden rounded-[30px] border border-zinc-200 bg-white shadow-[0_24px_70px_rgba(0,0,0,0.06)]">
                <div className="relative aspect-[4/3] bg-zinc-100">
                  <Image src={CLINIC_CONTACT.avatarUrl} alt="Cristiano Ávila" fill sizes="330px" className="object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white"><p className="text-lg font-semibold">{CLINIC_CONTACT.fullName}</p><p className="mt-1 text-[10px] text-white/55">Psicólogo Clínico • {PROFESSIONAL_REGISTRATION}</p></div>
                </div>
                <div className="p-6 sm:p-7">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-zinc-400">Atendimento</span>
                  <div className="mt-4 space-y-4 border-y border-zinc-200 py-5 text-xs font-light leading-relaxed text-zinc-600">
                    <p><strong className="font-semibold text-black">Formato</strong><br />Presencial e online</p>
                    <p><strong className="font-semibold text-black">Consultórios</strong><br />{currentCities}</p>
                    <p><strong className="font-semibold text-black">Contato</strong><br />Agenda e dúvidas pelo WhatsApp</p>
                  </div>
                  <a href={buildWhatsAppLink(whatsappMessage)} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 block w-full py-3.5 text-center text-xs">Consultar disponibilidade ↗</a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 flex items-end justify-between gap-6"><div><span className="editorial-label">Continuar explorando</span><h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-black sm:text-5xl">Outras formas de atendimento.</h2></div></div>
          <div className="divide-y divide-zinc-200 border-y border-zinc-200">
            {otherSpecialties.map((item, index) => (
              <Link key={item.id} href={`/especialidades/${item.slug}`} className="group grid gap-3 py-6 transition-colors hover:bg-zinc-50 sm:grid-cols-[54px_1fr_auto] sm:items-center sm:px-3 sm:py-8">
                <span className="font-mono text-[10px] text-zinc-400">{String(index + 1).padStart(2, "0")}</span>
                <div><h3 className="text-2xl font-semibold tracking-[-0.035em] text-black sm:text-3xl">{item.title}</h3><p className="mt-2 max-w-3xl text-sm font-light leading-relaxed text-zinc-500">{item.shortDesc}</p></div>
                <span className="text-xl text-zinc-300 transition-transform group-hover:translate-x-1 group-hover:text-black">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingDock />
    </main>
  );
}
