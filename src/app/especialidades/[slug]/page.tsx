import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SPECIALTIES_DATA, CLINIC_CONTACT, buildWhatsAppLink } from "@/data/content";
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
    openGraph: { title, description, url, type: "website", images: specialty.imageUrl ? [specialty.imageUrl] : undefined },
  };
}

export default function SpecialtyPage({ params }: { params: { slug: string } }) {
  const specialty = SPECIALTIES_DATA.find((s) => s.slug === params.slug && isPublicSpecialty(s.id));
  if (!specialty) notFound();

  const otherSpecialties = SPECIALTIES_DATA.filter((s) => s.slug !== specialty.slug && isPublicSpecialty(s.id)).slice(0, 3);
  const whatsappMessage = `Olá, Dr. Cristiano. Li a página sobre ${specialty.title} e gostaria de verificar a disponibilidade para uma consulta.`;

  return (
    <main className="min-h-screen bg-white text-[#111111] overflow-x-hidden selection:bg-black selection:text-white pb-20 sm:pb-0">
      <Header />

      <section className="pt-36 sm:pt-44 pb-16 px-4 sm:px-6 border-b border-zinc-100 bg-gradient-to-b from-zinc-50/70 to-white">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-zinc-400 mb-8 flex-wrap" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-black transition-colors">Início</Link><span>/</span>
            <Link href="/#especialidades" className="hover:text-black transition-colors">Formas de atendimento</Link><span>/</span>
            <span className="text-black font-semibold">{specialty.title}</span>
          </nav>

          <span className="inline-block text-[11px] uppercase tracking-[0.16em] font-semibold text-zinc-500 mb-5">{specialty.badge}</span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-[-0.045em] text-black leading-[1.05] mb-4">{specialty.title}</h1>
          <p className="text-lg sm:text-2xl text-zinc-500 font-light leading-relaxed mb-6">{specialty.subtitle}</p>
          <p className="text-base sm:text-lg text-zinc-600 font-light leading-relaxed max-w-3xl mb-9">{specialty.shortDesc}</p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a href={buildWhatsAppLink(whatsappMessage)} target="_blank" rel="noopener noreferrer" className="btn-primary shadow-apple text-center py-3.5 px-7">Ver disponibilidade</a>
            <Link href="/#especialidades" className="btn-outline text-center py-3.5 px-7">Ver outras opções</Link>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-12 sm:gap-16 items-start">
            <div className="lg:col-span-2 space-y-10">
              {specialty.imageUrl && (
                <div className="relative rounded-3xl overflow-hidden border border-zinc-200 aspect-[16/9]">
                  <Image src={specialty.imageUrl} alt={`Imagem relacionada a ${specialty.title}`} fill sizes="(max-width: 1024px) 100vw, 680px" className="object-cover" />
                </div>
              )}

              <div className="space-y-6 text-base sm:text-lg text-zinc-600 font-light leading-relaxed">
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-black">Como o acompanhamento pode ser conduzido</h2>
                {specialty.fullDesc.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)}
              </div>

              <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-zinc-100">
                <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-200">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-black mb-4">Demandas que podem ser avaliadas</h3>
                  <ul className="space-y-3">
                    {specialty.indications.map((item, i) => <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-600"><span aria-hidden="true">•</span><span>{item}</span></li>)}
                  </ul>
                </div>

                <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-200">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-black mb-4">Objetivos possíveis do processo</h3>
                  <ul className="space-y-3">
                    {specialty.benefits.map((item, i) => <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-600"><span aria-hidden="true">•</span><span>{item}</span></li>)}
                  </ul>
                  <p className="text-[11px] text-zinc-500 mt-5 leading-relaxed">Objetivos e estratégias variam conforme avaliação profissional e não constituem promessa de resultado.</p>
                </div>
              </div>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-28">
              <div className="p-6 rounded-3xl bg-zinc-50 border border-zinc-200 text-left">
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-zinc-200 bg-white shrink-0">
                    <Image src={CLINIC_CONTACT.avatarUrl} alt="Cristiano Ávila" fill sizes="56px" className="object-cover object-top" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-black">{CLINIC_CONTACT.fullName}</h4>
                    <p className="text-xs text-zinc-500 mt-0.5">Psicólogo Clínico</p>
                    <p className="text-[11px] text-zinc-500 mt-1">{PROFESSIONAL_REGISTRATION}</p>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-zinc-200 text-xs text-zinc-600">
                  <p><strong className="text-black">Modalidade:</strong> presencial e online</p>
                  <p><strong className="text-black">Unidades:</strong> São Paulo, Atibaia, Santos e São Bernardo do Campo</p>
                  <p><strong className="text-black">Privacidade:</strong> atendimento sujeito ao dever de sigilo profissional e às normas aplicáveis.</p>
                </div>

                <a href={buildWhatsAppLink(whatsappMessage)} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center text-xs py-3 mt-6 block">Falar sobre disponibilidade</a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">Outras formas de atendimento</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {otherSpecialties.map((item) => (
              <Link key={item.id} href={`/especialidades/${item.slug}`} className="group p-6 rounded-2xl bg-white border border-zinc-200 hover:border-zinc-400 transition-all">
                <h3 className="text-base font-semibold text-black mb-2">{item.title}</h3>
                <p className="text-xs text-zinc-600 line-clamp-3 leading-relaxed">{item.shortDesc}</p>
                <span className="inline-block mt-5 text-xs font-semibold text-black">Conhecer →</span>
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
