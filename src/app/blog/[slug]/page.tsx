import type { Metadata } from "next";
import Image from "next/image";
import { ARTICLES_DATA, CLINIC_CONTACT, buildWhatsAppLink } from "@/data/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PROFESSIONAL_REGISTRATION, SITE_URL } from "@/lib/site-policy";

export function generateStaticParams() {
  return ARTICLES_DATA.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = ARTICLES_DATA.find((a) => a.slug === params.slug);
  if (!article) return {};

  const url = `${SITE_URL}/blog/${article.slug}`;
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url,
      type: "article",
      images: [`${SITE_URL}${CLINIC_CONTACT.avatarUrl}`],
    },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = ARTICLES_DATA.find((a) => a.slug === params.slug);
  if (!article) notFound();

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f6f6f3] text-[#111111] selection:bg-black selection:text-white">
      <Header />

      <article>
        <header data-tone="dark" className="relative overflow-hidden bg-black px-4 pb-20 pt-36 text-white sm:px-6 sm:pb-24 sm:pt-44 lg:pb-28">
          <div className="cta-cinematic-grid pointer-events-none absolute inset-0 opacity-60" />
          <div className="relative z-10 mx-auto max-w-5xl">
            <Link href="/blog" className="inline-flex items-center text-[10px] font-semibold uppercase tracking-[0.16em] text-white/42 transition-colors hover:text-white">← Voltar para o blog</Link>
            <div className="mt-10 flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/38"><span>{article.category}</span><span>•</span><span>{article.date}</span><span>•</span><span>{article.readTime}</span></div>
            <h1 className="mt-6 max-w-5xl text-[2.65rem] font-medium leading-[0.98] tracking-[-0.055em] text-white sm:text-5xl lg:text-7xl">{article.title}</h1>
            <p className="mt-7 max-w-3xl text-base font-light leading-relaxed text-white/55 sm:text-lg">{article.excerpt}</p>

            <div className="mt-10 flex items-center gap-3 border-t border-white/10 pt-7">
              <div className="relative h-11 w-11 overflow-hidden rounded-full border border-white/15 bg-zinc-900"><Image src={CLINIC_CONTACT.avatarUrl} alt={article.author} fill sizes="44px" className="object-cover object-top" /></div>
              <div><p className="text-xs font-semibold text-white">{article.author}</p><p className="mt-1 text-[10px] text-white/38">Psicólogo Clínico • {PROFESSIONAL_REGISTRATION}</p></div>
            </div>
          </div>
        </header>

        <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16">
            <div className="rounded-[30px] border border-zinc-200/80 bg-white p-6 shadow-[0_24px_70px_rgba(0,0,0,0.05)] sm:p-10 lg:p-14">
              <div className="space-y-7 text-base font-light leading-[1.9] text-zinc-700 sm:text-lg">
                {article.content.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)}
              </div>

              <div className="mt-14 border-t border-zinc-200 pt-7 text-xs font-light leading-relaxed text-zinc-500">
                Conteúdo informativo e psicoeducativo. Não estabelece diagnóstico, indicação de tratamento ou garantia de resultado e não substitui avaliação profissional individual.
              </div>
            </div>

            <aside className="lg:sticky lg:top-28 lg:h-fit">
              <div className="premium-dark rounded-[28px] p-6 text-white sm:p-7">
                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/35">Próximo passo</span>
                <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.035em]">Quer conversar sobre sua situação?</h2>
                <p className="mt-4 text-sm font-light leading-relaxed text-white/52">A primeira conversa serve para entender a procura e verificar modalidade, local e disponibilidade.</p>
                <a href={buildWhatsAppLink(`Olá, Dr. Cristiano. Li o artigo "${article.title}" e gostaria de verificar a disponibilidade para uma consulta.`)} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3.5 text-xs font-semibold text-black">Consultar horários ↗</a>
              </div>
            </aside>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}
