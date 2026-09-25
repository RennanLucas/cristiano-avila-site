'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ARTICLES_DATA } from '@/data/content';

export default function BlogPreview() {
  const articles = ARTICLES_DATA.slice(0, 3);

  return (
    <section id="blog" className="relative overflow-hidden bg-[#F2F2F0] py-20 sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 soft-grid opacity-[0.34] [mask-image:radial-gradient(circle_at_center,black,transparent_85%)]" />
      <div className="aurora-orb absolute -left-20 top-8 h-64 w-64 rounded-full bg-sky-100/60 blur-[90px]" />
      <div className="aurora-orb aurora-orb-delayed absolute -right-20 bottom-8 h-72 w-72 rounded-full bg-fuchsia-100/45 blur-[95px]" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0.5, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-35px' }}
          transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 flex flex-col justify-between gap-6 sm:mb-16 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <span className="editorial-label">Blog & conteúdo</span>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-black sm:text-4xl lg:text-5xl">
              Leituras para aprofundar a compreensão sobre mente e comportamento.
            </h2>
            <p className="mt-4 text-[15px] font-light leading-relaxed text-zinc-600 sm:text-base lg:text-lg">
              Conteúdo informativo em uma apresentação editorial, sem fotografias genéricas que simulem situações clínicas.
            </p>
          </div>

          <Link href="/blog" className="btn-outline inline-flex w-full items-center gap-2 text-xs sm:w-auto">Ver todos os artigos <span aria-hidden="true">→</span></Link>
        </motion.div>

        <div className="grid gap-5 sm:gap-6 lg:grid-cols-12">
          {articles.map((article, idx) => {
            const featured = idx === 0;
            return (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0.55, y: 16, scale: 0.995 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-35px' }}
                transition={{ duration: 0.42, delay: idx * 0.045, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -7 }}
                className={`${featured ? 'lg:col-span-7 lg:row-span-2' : 'lg:col-span-5'} group relative overflow-hidden rounded-[26px] sm:rounded-[30px] ${featured ? 'premium-dark min-h-[410px] text-white sm:min-h-[470px] lg:min-h-[520px]' : 'premium-glass min-h-[230px] sm:min-h-[250px]'} p-6 sm:p-9`}
              >
                <div className={`pointer-events-none absolute ${featured ? '-right-24 -top-24 h-72 w-72 border-white/10 bg-white/[0.03]' : '-right-16 -top-16 h-44 w-44 border-zinc-200 bg-white/60'} rounded-full border transition-transform duration-700 group-hover:scale-125`} />
                {featured && <div className="pointer-events-none absolute -bottom-20 -left-16 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[80px]" />}

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <div className={`flex items-center justify-between gap-4 text-[9px] font-semibold uppercase tracking-[0.14em] sm:text-[10px] sm:tracking-[0.16em] ${featured ? 'text-white/40' : 'text-zinc-400'}`}>
                      <span className="min-w-0 truncate">{article.category}</span>
                      <span className="shrink-0">{String(idx + 1).padStart(2, '0')}</span>
                    </div>

                    <h3 className={`${featured ? 'mt-12 max-w-full text-[1.75rem] text-white min-[390px]:text-3xl sm:mt-20 sm:max-w-[90%] sm:text-4xl' : 'mt-8 text-[1.35rem] text-black sm:mt-10 sm:text-2xl'} font-semibold leading-[1.08] tracking-[-0.035em]`}>
                      <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                    </h3>

                    <p className={`${featured ? 'max-w-2xl text-white/60' : 'text-zinc-600'} mt-4 line-clamp-4 text-sm font-light leading-relaxed sm:mt-5`}>
                      {article.excerpt}
                    </p>
                  </div>

                  <div className={`${featured ? 'border-white/10' : 'border-zinc-200/70'} mt-8 border-t pt-5 sm:mt-10`}>
                    <div className={`flex flex-wrap items-center justify-between gap-2 text-[11px] sm:text-xs ${featured ? 'text-white/40' : 'text-zinc-500'}`}>
                      <span>{article.date}</span>
                      <span>{article.readTime}</span>
                    </div>
                    <Link
                      href={`/blog/${article.slug}`}
                      className={`mt-5 inline-flex items-center gap-2 text-xs font-semibold transition-all group-hover:gap-4 ${featured ? 'text-white' : 'text-black'}`}
                    >
                      Ler artigo <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
