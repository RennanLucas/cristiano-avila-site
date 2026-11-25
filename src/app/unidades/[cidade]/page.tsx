import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CURRENT_UNITS } from "@/data/units";
import { buildWhatsAppLink } from "@/data/contact-lite";
import { PROFESSIONAL_REGISTRATION } from "@/lib/site-policy";

export const dynamicParams = false;
export function generateStaticParams() {
  return CURRENT_UNITS.map(unit => ({ cidade: unit.id }));
}
type Props = { params: Promise<{ cidade: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { cidade } = await params;
  const unit = CURRENT_UNITS.find(item => item.id === cidade);
  if (!unit) return {};
  const title = `Psicólogo em ${unit.city}`;
  const description = `Atendimento psicológico presencial com Cristiano Ávila em ${unit.city}, SP. Conheça o consultório e consulte horários pelo WhatsApp.`;
  const url = `/unidades/${unit.id}`;
  return { title, description, alternates: { canonical: url }, openGraph: { title, description, url } };
}

export default async function UnitPage({ params }: Props) {
  const { cidade } = await params;
  const unit = CURRENT_UNITS.find(item => item.id === cidade);
  if (!unit) notFound();
  const whatsapp = buildWhatsAppLink(`Olá, gostaria de consultar horários para atendimento presencial em ${unit.city}.`);
  return (
    <main id="conteudo-principal" className="min-h-screen bg-white text-zinc-900">
      <Header />
      <section className="relative overflow-hidden px-4 pb-20 pt-36 sm:px-6 lg:pb-28 lg:pt-44">
        <div className="pointer-events-none absolute inset-0 soft-grid opacity-20" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl">
          <Link href="/unidades" className="text-sm font-medium underline underline-offset-4">Voltar às unidades</Link>
          <div className="mt-8 grid items-start gap-10 lg:grid-cols-2">
            <div>
              <p className="editorial-label">Cristiano Ávila • {PROFESSIONAL_REGISTRATION}</p>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">Psicólogo em <span className="font-serif font-normal italic">{unit.city}</span></h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600">Atendimento psicológico presencial com hora marcada. Consulte a disponibilidade para uma primeira sessão e esclareça dúvidas sobre o atendimento.</p>
              <a data-contact-action="booking_click" href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8 inline-block px-6 py-4 text-center">Consultar horários pelo WhatsApp</a>
              <p className="mt-4 text-sm text-zinc-600">Evite compartilhar detalhes clínicos sensíveis no primeiro contato.</p>
            </div>
            <div className="premium-card rounded-[28px] border border-zinc-200 bg-zinc-50 p-6 sm:p-10">
              <h2 className="text-2xl font-semibold">{unit.title}</h2>
              <address className="mt-5 not-italic leading-relaxed text-zinc-700">
                {unit.address}<br />
                {unit.complement && <>{unit.complement}<br /></>}
                {unit.neighborhood && <>{unit.neighborhood}<br /></>}
                {unit.city} – {unit.state}, {unit.zip}
              </address>
              <p className="mt-5 text-sm text-zinc-600">{unit.availability}</p>
              <a href={unit.mapsExternalLink} target="_blank" rel="noopener noreferrer" className="btn-outline mt-6 inline-block px-5 py-3">Como chegar</a>
            </div>
          </div>
          <div className="mt-16 border-t border-zinc-200 pt-10">
            <h2 className="text-2xl font-semibold">Outras unidades e atendimento online</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {CURRENT_UNITS.filter(item => item.id !== unit.id).map(item => <Link key={item.id} href={`/unidades/${item.id}`} className="btn-outline px-4 py-3">{item.city}</Link>)}
              <Link href="/contato" className="btn-outline px-4 py-3">Atendimento online</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
