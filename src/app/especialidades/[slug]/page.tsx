import { SPECIALTIES_DATA, CLINIC_CONTACT, buildWhatsAppLink } from "@/data/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingDock from "@/components/FloatingDock";
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

  // Próximas especialidades para navegação cruzada
  const otherSpecialties = SPECIALTIES_DATA.filter((s) => s.slug !== specialty.slug).slice(0, 3);

  const whatsappMessage = `Olá, Dr. Cristiano! Li sobre o tratamento de ${specialty.title} no seu site e gostaria de agendar uma consulta.`;

  return (
    <main className="min-h-screen bg-white text-[#111111] overflow-x-hidden selection:bg-black selection:text-white pb-20 sm:pb-0">
      <Header />

      {/* Hero da Especialidade */}
      <section className="pt-36 sm:pt-44 pb-16 px-4 sm:px-6 border-b border-zinc-100 bg-gradient-to-b from-zinc-50/50 to-white">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-zinc-400 mb-8 flex-wrap">
            <Link href="/" className="hover:text-black transition-colors">
              Início
            </Link>
            <span>/</span>
            <Link href="/#especialidades" className="hover:text-black transition-colors">
              Especialidades
            </Link>
            <span>/</span>
            <span className="text-black font-semibold">{specialty.title}</span>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-zinc-900 text-white text-[11px] font-mono font-bold tracking-wider">
              {specialty.num}
            </span>
            <span className="px-3.5 py-1 rounded-full bg-zinc-100 border border-zinc-200/80 text-[11px] font-bold tracking-widest text-zinc-600 uppercase">
              {specialty.badge}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-black leading-[1.08] mb-4">
            {specialty.title}
          </h1>

          <p className="text-lg sm:text-2xl text-zinc-500 font-light leading-relaxed mb-6">
            {specialty.subtitle}
          </p>

          <p className="text-base sm:text-lg text-textMuted font-light leading-relaxed max-w-3xl mb-10">
            {specialty.shortDesc}
          </p>

          {/* Quick CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href={buildWhatsAppLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary shadow-apple w-full sm:w-auto text-center flex items-center justify-center gap-2 py-3.5 px-7"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.913.913l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.675-.839-6.481-2.373l-.388-.322-2.65.889.889-2.65-.322-.388A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              <span>Agendar Avaliação para {specialty.title}</span>
            </a>
            <MagneticButton href="/#especialidades" className="w-full sm:w-auto">
              <div className="btn-outline w-full sm:w-auto text-center py-3.5">
                Ver Outras Especialidades
              </div>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* Conteúdo Clínico Aprofundado */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-12 sm:gap-16 items-start">
            
            {/* Coluna Principal: Texto Clínico */}
            <div className="lg:col-span-2 space-y-8">
              {/* Imagem de Capa em Alta Resolução */}
              {specialty.imageUrl && (
                <div className="relative rounded-3xl overflow-hidden border border-zinc-200/80 shadow-apple aspect-[16/9] mb-10">
                  <img
                    src={specialty.imageUrl}
                    alt={specialty.title}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-4 left-6 text-xs text-white/90 font-medium tracking-wide">
                    {specialty.title} • Abordagem Baseada em Evidências
                  </span>
                </div>
              )}

              <div className="space-y-6 text-base sm:text-lg text-textMuted font-light leading-relaxed">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black">
                  Como funciona a intervenção terapêutica
                </h2>
                {specialty.fullDesc.map((paragraph, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Grid: Indicações vs Benefícios */}
              <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-zinc-100">
                {/* Indicações */}
                <div className="bg-zinc-50/80 rounded-2xl p-6 border border-zinc-200/70">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <h3 className="text-sm font-bold uppercase tracking-wider text-black">
                      Quando é Indicado
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {specialty.indications.map((ind, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 font-light leading-snug">
                        <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✓</span>
                        <span>{ind}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefícios */}
                <div className="bg-zinc-50/80 rounded-2xl p-6 border border-zinc-200/70">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <h3 className="text-sm font-bold uppercase tracking-wider text-black">
                      Resultados Esperados
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {specialty.benefits.map((ben, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 font-light leading-snug">
                        <span className="text-black font-bold shrink-0 mt-0.5">★</span>
                        <span>{ben}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar Clínica: Informações Práticas */}
            <div className="space-y-6 lg:sticky lg:top-28">
              {/* Card do Psicólogo */}
              <div className="p-6 rounded-3xl bg-zinc-50 border border-zinc-200/80 shadow-apple text-left">
                <div className="flex items-center gap-3.5 mb-5">
                  <img
                    src={CLINIC_CONTACT.avatarUrl}
                    alt="Cristiano Ávila"
                    className="w-14 h-14 rounded-2xl object-cover object-top border border-zinc-200 shadow-xs"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-black tracking-tight">Cristiano Ávila</h4>
                    <p className="text-xs text-textMuted font-light">Psicólogo Clínico & Neurocientista</p>
                    <span className="inline-block text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full font-semibold mt-1">
                      CRP SP Ativo
                    </span>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-zinc-200/60 text-xs">
                  <div className="flex justify-between py-1 border-b border-zinc-100">
                    <span className="text-zinc-500">Modalidade</span>
                    <span className="font-semibold text-black">Presencial & Online</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-zinc-100">
                    <span className="text-zinc-500">Duração</span>
                    <span className="font-semibold text-black">~50 minutos</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-zinc-100">
                    <span className="text-zinc-500">Sigilo Profissional</span>
                    <span className="font-semibold text-emerald-600">100% Protegido</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-zinc-100">
                    <span className="text-zinc-500">Reembolso Saúde</span>
                    <span className="font-semibold text-black">Recibo emitido</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-zinc-500">Unidades Físicas</span>
                    <span className="font-semibold text-black">SP, Atibaia, Santos</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-200">
                  <a
                    href={buildWhatsAppLink(whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center text-xs py-3 block shadow-sm"
                  >
                    Falar no WhatsApp
                  </a>
                </div>
              </div>

              {/* Box de Segurança Ética */}
              <div className="p-5 rounded-2xl bg-white border border-zinc-200/70 text-xs text-zinc-500 leading-relaxed space-y-2">
                <p className="font-bold text-black flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Atendimento Ético e Seguro
                </p>
                <p>
                  Sessões conduzidas sob o Código de Ética do Conselho Federal de Psicologia e certificações internacionais OMNI.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Outras Especialidades (Navegação Cruzada) */}
      <section className="py-20 bg-zinc-50/70 border-t border-zinc-200/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                Explore Outras Abordagens
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-black">
                Tratamentos Relacionados
              </h3>
            </div>
            <Link
              href="/#especialidades"
              className="text-xs font-semibold text-zinc-600 hover:text-black transition-colors"
            >
              Ver todas →
            </Link>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {otherSpecialties.map((item) => (
              <Link
                key={item.id}
                href={`/especialidades/${item.slug}`}
                className="group p-6 rounded-2xl bg-white border border-zinc-200/80 hover:border-black transition-all hover:shadow-apple flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold text-zinc-400 block mb-2">
                    {item.num}
                  </span>
                  <h4 className="text-base font-bold text-black tracking-tight mb-2 group-hover:text-zinc-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-textMuted font-light line-clamp-3 leading-relaxed">
                    {item.shortDesc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center text-xs font-bold text-black group-hover:text-zinc-500 transition-colors">
                  <span>Conhecer tratamento</span>
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </div>
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
