'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ARTICLES_DATA } from '@/data/content';

export default function BlogPreview() {
  const articles = ARTICLES_DATA.slice(0, 3);

  return (
    <section id="blog" className="relative overflow-hidden bg-[#F7F7F5] py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,0,0,0.04),transparent_28%)]" />
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">Blog & conteúdo</span>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-black sm:text-4xl lg:text-5xl">
              Leituras sobre mente, comportamento e saúde emocional.
            </h2>
            <p className="mt-4 text-base font-light leading-relaxed text-zinc-600 lg:text-lg">
              Conteúdo editorial em formato limpo, sem fotografias genéricas ou imagens artificiais que possam sugerir cenas clínicas reais.
            </p>
          </div>

          <Link href="/blog" className="btn-outline inline-flex items-center gap-2 text-xs">
            Ver todos os artigos <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {articles.map((article, idx) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="group relative flex min-h-[390px] flex-col justify-between overflow-hidden rounded-[28px] border border-zinc-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-[0_28px_70px_rgba(0,0,0,0.08)]"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-zinc-100 bg-zinc-50 transition-transform duration-700 group-hover:scale-125" />
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-400">
                  <span>{article.category}</span>
                  <span>{String(idx + 1).padStart(2, '0')}</span>
                </div>

                <h3 className="mt-10 text-2xl font-semibold leading-tight tracking-[-0.025em] text-black">
                  <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                </h3>

                <p className="mt-4 line-clamp-4 text-sm font-light leading-relaxed text-zinc-600">
                  {article.excerpt}
                </p>
              </div>

              <div className="relative z-10 mt-10 border-t border-zinc-100 pt-5">
                <div className="flex items-center justify-between gap-4 text-xs text-zinc-500">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
                <Link
                  href={`/blog/${article.slug}`}
                  className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-black transition-all group-hover:gap-3"
                >
                  Ler artigo <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
