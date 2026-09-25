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
    <main className="min-h-screen bg-white text-[#111111] overflow-x-hidden selection:bg-black selection:text-white">
      <Header />
      <article className="pt-40 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center text-xs font-semibold text-zinc-500 hover:text-black transition-colors mb-10">← Voltar para o blog</Link>

          <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500 mb-6">
            <span className="px-3 py-1 rounded-full bg-zinc-100 text-black font-semibold text-[10px] uppercase tracking-wider">{article.category}</span>
            <span>•</span><span>{article.date}</span><span>•</span><span>{article.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-black leading-[1.15] mb-8">{article.title}</h1>

          <div className="flex items-center gap-3 pb-10 mb-10 border-b border-zinc-100">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-zinc-200 bg-zinc-100">
              <Image src={CLINIC_CONTACT.avatarUrl} alt={article.author} fill sizes="40px" className="object-cover object-top" />
            </div>
            <div>
              <p className="text-xs font-semibold text-black">{article.author}</p>
              <p className="text-[11px] text-zinc-500">Psicólogo Clínico • {PROFESSIONAL_REGISTRATION}</p>
            </div>
          </div>

          <div className="space-y-6 text-base sm:text-lg text-zinc-700 font-light leading-relaxed">
            {article.content.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)}
          </div>

          <div className="mt-16 p-8 rounded-3xl bg-zinc-50 border border-zinc-200 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-lg font-semibold text-black mb-1">Quer conversar com um profissional?</h2>
              <p className="text-xs text-zinc-600 font-light max-w-md">O conteúdo do blog é informativo e não substitui avaliação ou acompanhamento psicológico individual.</p>
            </div>
            <a href={buildWhatsAppLink(`Olá, Dr. Cristiano. Li o artigo "${article.title}" e gostaria de verificar a disponibilidade para uma consulta.`)} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs py-3 px-6 whitespace-nowrap shrink-0">Ver disponibilidade</a>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
