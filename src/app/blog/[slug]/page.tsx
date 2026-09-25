import { ARTICLES_DATA, CLINIC_CONTACT, buildWhatsAppLink } from "@/data/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return ARTICLES_DATA.map((a) => ({
    slug: a.slug,
  }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = ARTICLES_DATA.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-[#111111] overflow-x-hidden selection:bg-black selection:text-white">
      <Header />

      <article className="pt-40 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <Link
            href="/blog"
            className="inline-flex items-center text-xs font-semibold text-zinc-500 hover:text-black transition-colors mb-10"
          >
            <svg className="w-3.5 h-3.5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Voltar para o Blog
          </Link>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-textMuted mb-6">
            <span className="px-3 py-1 rounded-full bg-zinc-100 text-black font-semibold text-[10px] uppercase tracking-wider">
              {article.category}
            </span>
            <span>•</span>
            <span>{article.date}</span>
            <span>•</span>
            <span className="font-mono">{article.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-black leading-[1.15] mb-8">
            {article.title}
          </h1>

          {/* Author mini badge */}
          <div className="flex items-center gap-3 pb-10 mb-10 border-b border-zinc-100">
            <img
              src={CLINIC_CONTACT.avatarUrl}
              alt={article.author}
              className="w-10 h-10 rounded-full object-cover object-top border border-zinc-200"
            />
            <div>
              <p className="text-xs font-bold text-black">{article.author}</p>
              <p className="text-[11px] text-textMuted">Psicólogo Clínico & Hipnoterapeuta</p>
            </div>
          </div>

          {/* Article Body */}
          <div className="space-y-6 text-base sm:text-lg text-zinc-700 font-light leading-relaxed">
            {article.content.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Bottom Consultation Box */}
          <div className="mt-16 p-8 rounded-3xl bg-zinc-50 border border-zinc-200/80 shadow-apple text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-black mb-1">
                Identificou-se com o tema deste artigo?
              </h3>
              <p className="text-xs text-textMuted font-light max-w-md">
                Você pode agendar uma primeira sessão com Cristiano Ávila para aprofundar suas questões de forma personalizada.
              </p>
            </div>
            <a
              href={buildWhatsAppLink(`Olá, Dr. Cristiano! Li o artigo "${article.title}" no seu site e gostaria de agendar uma consulta.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-3 px-6 whitespace-nowrap shrink-0"
            >
              Agendar Consulta no WhatsApp
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
