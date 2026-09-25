import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ARTICLES_DATA } from "@/data/content";

export const metadata = {
  title: "Blog & Artigos Clínicos | Cristiano Ávila",
  description: "Artigos científicos, reflexões sobre neurociência, ansiedade, hipnoterapia e comportamento humano por Cristiano Ávila.",
};

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-white text-[#111111] overflow-x-hidden selection:bg-black selection:text-white">
      <Header />

      <section className="pt-40 pb-20 px-6 border-b border-zinc-100">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-[10px] font-bold tracking-widest text-zinc-500 uppercase mb-6">
            Publicações & Neurociência
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-black leading-tight mb-6">
            Blog & Artigos <br />
            <span className="text-zinc-400">Clínicos.</span>
          </h1>
          <p className="text-xl text-textMuted font-light max-w-2xl leading-relaxed">
            Conhecimento aprofundado sobre o funcionamento da mente, saúde emocional, neurociência aplicada e comportamento humano.
          </p>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ARTICLES_DATA.map((article) => (
              <article
                key={article.slug}
                className="group flex flex-col justify-between bg-white rounded-3xl p-7 border border-zinc-200/80 hover:border-black hover:shadow-apple transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-textMuted mb-4">
                    <span className="font-semibold text-black bg-zinc-100 px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wide">
                      {article.category}
                    </span>
                    <span className="font-mono text-[11px]">{article.readTime}</span>
                  </div>

                  <h2 className="text-xl font-bold text-black tracking-tight leading-snug mb-3 group-hover:text-black">
                    <Link href={`/blog/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>

                  <p className="text-xs text-textMuted font-light leading-relaxed mb-6 line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-semibold text-black">
                  <span>{article.date}</span>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    Ler artigo
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
