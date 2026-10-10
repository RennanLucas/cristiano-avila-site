import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ARTICLES_DATA } from "@/data/content";

export const metadata: Metadata = {
  title: "Blog | Psicologia, Saúde Mental e Comportamento",
  description: "Artigos psicoeducativos sobre psicologia, saúde mental, emoções, comportamento e relações por Cristiano Ávila.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Psicologia, Saúde Mental e Comportamento",
    description: "Artigos psicoeducativos sobre psicologia, saúde mental, emoções, comportamento e relações por Cristiano Ávila.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f5f2] text-[#111111] selection:bg-black selection:text-white">
      <Header />

      <section data-tone="dark" className="relative overflow-hidden bg-black px-4 pb-20 pt-36 text-white sm:px-6 sm:pb-24 sm:pt-44 lg:pb-32">
        <div className="cta-cinematic-grid pointer-events-none absolute inset-0 opacity-60" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <span className="text-[10px] font-semibold uppercase tracking-[0.26em] text-white/35">Blog • Psicologia & comportamento</span>
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <h1 className="max-w-5xl text-[3rem] font-medium leading-[0.94] tracking-[-0.06em] text-white sm:text-6xl lg:text-[6.4rem]">Leituras para <span className="font-serif font-normal italic text-white/58">pensar com mais clareza.</span></h1>
            <p className="max-w-md text-sm font-light leading-relaxed text-white/52 sm:text-base lg:justify-self-end">Conteúdo psicoeducativo sobre emoções, relações e comportamento. Os artigos não substituem avaliação ou acompanhamento psicológico individual.</p>
          </div>
        </div>
      </section>

      <section className="relative py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-5 lg:grid-cols-12">
            {ARTICLES_DATA.map((article, index) => {
              const featured = index === 0;
              return (
                <article key={article.slug} className={`${featured ? "premium-dark text-white lg:col-span-7 lg:row-span-2 lg:min-h-[520px]" : "premium-glass text-black lg:col-span-5 lg:min-h-[250px]"} group relative overflow-hidden rounded-[30px] p-7 transition-transform duration-300 md:hover:-translate-y-1.5 sm:p-9`}>
                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div>
                      <div className={`flex items-center justify-between gap-4 text-[9px] font-semibold uppercase tracking-[0.16em] ${featured ? "text-white/38" : "text-zinc-400"}`}><span>{article.category}</span><span className="font-mono">{String(index + 1).padStart(2, "0")}</span></div>
                      <h2 className={`${featured ? "mt-16 max-w-2xl text-3xl text-white sm:mt-24 sm:text-5xl" : "mt-10 text-2xl text-black sm:text-3xl"} font-semibold leading-[1.04] tracking-[-0.04em]`}><Link href={`/blog/${article.slug}`}>{article.title}</Link></h2>
                      <p className={`${featured ? "text-white/55" : "text-zinc-600"} mt-5 max-w-2xl text-sm font-light leading-relaxed`}>{article.excerpt}</p>
                    </div>
                    <div className={`${featured ? "border-white/10 text-white/38" : "border-zinc-200/80 text-zinc-500"} mt-10 flex items-center justify-between gap-4 border-t pt-5 text-xs`}><span>{article.date} • {article.readTime}</span><Link href={`/blog/${article.slug}`} className={`${featured ? "text-white" : "text-black"} font-semibold transition-transform group-hover:translate-x-1`}>Ler →</Link></div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
