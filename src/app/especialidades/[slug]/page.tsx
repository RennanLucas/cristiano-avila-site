import { SPECIALTIES_DATA } from "@/data/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import Link from "next/link";
import MagneticButton from "@/components/MagneticButton";

export function generateStaticParams() {
  return SPECIALTIES_DATA.map((s) => ({
    slug: s.slug,
  }));
}

export default function SpecialtyPage({ params }: { params: { slug: string } }) {
  const specialty = SPECIALTIES_DATA.find((s) => s.slug === params.slug);

  if (!specialty) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-[#111111] overflow-x-hidden selection:bg-black selection:text-white">
      <Header />
      
      <section className="pt-40 pb-20 px-6 border-b border-zinc-100">
        <div className="max-w-4xl mx-auto">
          <Link href="/#especialidades" className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-black transition-colors mb-12">
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Voltar para Especialidades
          </Link>
          
          <span className="inline-block px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-[10px] font-bold tracking-widest text-zinc-500 uppercase mb-6">
            Especialidade Clínica
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-black leading-tight mb-8">
            {specialty.title}
          </h1>
          <p className="text-2xl text-textMuted font-light leading-relaxed max-w-2xl">
            {specialty.shortDesc}
          </p>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-zinc prose-lg lg:prose-xl font-light text-textMuted leading-relaxed">
            {specialty.fullDesc.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-20 pt-10 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold tracking-tight text-black mb-2">Precisa de ajuda com {specialty.title.toLowerCase()}?</h3>
              <p className="text-sm text-zinc-500">Agende uma primeira sessão para discutirmos sua situação clínica.</p>
            </div>
            <MagneticButton href="/contato">
              <div className="btn-primary whitespace-nowrap">Agendar Sessão</div>
            </MagneticButton>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
