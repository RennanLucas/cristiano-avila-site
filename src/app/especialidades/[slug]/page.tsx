import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SPECIALTIES_DATA, CLINIC_CONTACT, buildWhatsAppLink } from "@/data/content";
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

  const title = `${specialty.title} | Atendimento psicológico`;
  const description = specialty.shortDesc.slice(0, 155);
  const url = `${SITE_URL}/especialidades/${specialty.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website", images: [`${SITE_URL}${CLINIC_CONTACT.avatarUrl}`] },
  };
}

export default function SpecialtyPage({ params }: { params: { slug: string } }) {
  const specialty = SPECIALTIES_DATA.find((s) => s.slug === params.slug && isPublicSpecialty(s.id));
  if (!specialty) notFound();

  const otherSpecialties = SPECIALTIES_DATA.filter((s) => s.slug !== specialty.slug && isPublicSpecialty(s.id)).slice(0, 3);
  const whatsappMessage = `Olá, Dr. Cristiano. Li a página sobre ${specialty.title} e gostaria de verificar a disponibilidade para uma consulta.`;
  const currentCities = CURRENT_UNITS.map((unit) => unit.city).join(", ");

  return (
    <main className="min-h-screen overflow-x-hidden bg-white pb-20 text-[#111111] selection:bg-black selection:text-white sm:pb-0">
      <Header />

      <section className="relative overflow-hidden border-b border-zinc-100 bg-gradient-to-b from-zinc-50/80 to-white px-4 pb-16 pt-36 sm:px-6 sm:pt-44">
        <div className="pointer-events-none absolute right-[8%] top-24 h-64 w-64 rounded-full border border-zinc-200 bg-white/60 shadow-sm" />
        <div className="pointer-events-none absolute right-[13%] top-36 h-40 w-40 rounded-full border border-zinc-100 bg-zinc-50" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-xs text-zinc-400" aria-label="Breadcrumb">
            <Link href="/" className="transition-colors hover:text-black">Início</Link><span>/</span>
            <Link href="/#especialidades" className="transition-colors hover:text-black">Formas de atendimento</Link><span>/</span>
            <span className="font-semibold text-black">{specialty.title}</span>
          </nav>

          <span className="mb-5 inline-block text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">{specialty.badge}</span>
          <h1 className="mb-4 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-black sm:text-6xl md:text-7xl">{specialty.title}</h1>
          <p className="mb-6 text-lg font-light leading-relaxed text-zinc-500 sm:text-2xl">{specialty.subtitle}</p>
          <p className="mb-9 max-w-3xl text-base font-light leading-relaxed text-zinc-600 sm:text-lg">{specialty.shortDesc}</p>

          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <a href={buildWhatsAppLink(whatsappMessage)} target="_blank" rel="noopener noreferrer" className="btn-primary px-7 py-3.5 text-center shadow-apple">Ver disponibilidade</a>
            <Link href="/#especialidades" className="btn-outline px-7 py-3.5 text-center">Ver outras opções</Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid items-start gap-12 sm:gap-16 lg:grid-cols-3">
            <div className="space-y-10 lg:col-span-2">
              <div className="relative overflow-hidden rounded-[28px] border border-zinc-200 bg-zinc-950 p-7 text-white shadow-[0_24px_70px_rgba(0,0,0,0.10)] sm:p-10">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_34%)]" />
                <div className="relative z-10 grid gap-8 sm:grid-cols-[auto_1fr] sm:items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 font-mono text-xl font-semibold text-white/80">
                    {specialty.num}
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45">Acompanhamento individualizado</span>
                    <p className="mt-3 text-base font-light leading-relaxed text-white/75">
                      Cada acompanhamento é conduzido de forma individual, considerando a história, o contexto, as necessidades e os objetivos definidos ao longo do processo terapêutico.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 text-base font-light leading-relaxed text-zinc-600 sm:text-lg">
                <h2 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl">Como o acompanhamento pode ser conduzido</h2>
                {specialty.fullDesc.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)}
              </div>

              <div className="grid gap-8 border-t border-zinc-100 pt-8 sm:grid-cols-2">
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-black">Demandas que podem ser avaliadas</h3>
                  <ul className="space-y-3">
                    {specialty.indications.map((item, i) => <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-600"><span aria-hidden="true">•</span><span>{item}</span></li>)}
                  </ul>
                </div>

                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-black">Objetivos do acompanhamento</h3>
                  <ul className="space-y-3">
                    {specialty.benefits.map((item, i) => <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-600"><span aria-hidden="true">•</span><span>{item}</span></li>)}
                  </ul>
                </div>
              </div>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-28">
              <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 text-left">
                <div className="mb-5 flex items-center gap-3.5">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-zinc-200 bg-white">
                    <Image src={CLINIC_CONTACT.avatarUrl} alt="Cristiano Ávila" fill sizes="56px" className="object-cover object-top" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-black">{CLINIC_CONTACT.fullName}</h4>
                    <p className="mt-0.5 text-xs text-zinc-500">Psicólogo Clínico</p>
                    <p className="mt-1 text-[11px] text-zinc-500">{PROFESSIONAL_REGISTRATION}</p>
                  </div>
                </div>

                <div className="space-y-3 border-t border-zinc-200 pt-4 text-xs text-zinc-600">
                  <p><strong className="text-black">Modalidade:</strong> presencial e online</p>
                  <p><strong className="text-black">Presencial:</strong> {currentCities}</p>
                  <p><strong className="text-black">Privacidade:</strong> atendimento sujeito ao dever de sigilo profissional e às normas aplicáveis.</p>
                </div>

                <a href={buildWhatsAppLink(whatsappMessage)} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 block w-full py-3 text-center text-xs">Falar sobre disponibilidade</a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="mb-8 text-2xl font-semibold tracking-tight text-black">Outras formas de atendimento</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {otherSpecialties.map((item) => (
              <Link key={item.id} href={`/especialidades/${item.slug}`} className="group rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-zinc-400 hover:shadow-sm">
                <h3 className="mb-2 text-base font-semibold text-black">{item.title}</h3>
                <p className="line-clamp-3 text-xs leading-relaxed text-zinc-600">{item.shortDesc}</p>
                <span className="mt-5 inline-block text-xs font-semibold text-black">Conhecer →</span>
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
