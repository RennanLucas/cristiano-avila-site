'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ARTICLES_DATA } from '@/data/content';

export default function BlogPreview() {
  const articles = ARTICLES_DATA.slice(0, 3);

  return (
    <section id="blog" className="py-24 lg:py-32 bg-surface relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-3">
              <span className="w-6 h-[1.5px] bg-zinc-200" />
              <span className="inline-block px-3 py-1 rounded-full bg-zinc-100 text-[10px] font-bold tracking-widest text-zinc-500 uppercase mb-3">BLOG & ARTIGOS CLÍNICOS</span>
            </div>

            <h2 className="tracking-tight text-3xl sm:text-4xl lg:text-5xl text-black tracking-tight">
              Conteúdos sobre Mente e Comportamento
            </h2>

            <p className="text-textMuted text-base lg:text-lg font-light leading-relaxed">
              Reflexões baseadas em psicologia, neurociência e prática clínica para auxiliar na compreensão das suas emoções.
            </p>
          </div>

          <div>
            <Link
              href="/blog"
              className="btn-outline text-xs inline-flex items-center gap-2"
            >
              <span>Acessar todo o blog</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* 3 Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
              className="group bg-white rounded-2xl overflow-hidden border border-zinc-200/8 shadow-sm hover:shadow-apple-hover hover:-translate-y-1.5 transition-all duration-400 flex flex-col justify-between"
            >
              <div>
                {/* Article Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute top-4 left-4 text-[10px] uppercase tracking-wider font-semibold bg-white/95 text-black px-3 py-1 rounded-full shadow-sm">
                    {article.category}
                  </span>
                </div>

                {/* Article Text */}
                <div className="p-7 space-y-4">
                  <div className="flex items-center justify-between text-xs text-textMuted">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="tracking-tight text-xl sm:text-2xl text-black font-semibold leading-snug group-hover:text-zinc-500 transition-colors">
                    <Link href={`/blog/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-textMuted text-sm leading-relaxed font-light line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Read More Link */}
              <div className="px-7 pb-7 pt-2">
                <Link
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-black group-hover:text-zinc-500 transition-colors"
                >
                  <span>Ler artigo completo</span>
                  <svg className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
