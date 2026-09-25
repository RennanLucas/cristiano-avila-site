'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { SPECIALTIES_DATA } from '@/data/content';

export default function Specialties() {
  return (
    <section id="especialidades" className="py-24 lg:py-32 bg-[#F8F8F5] relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3"
          >
            <span className="w-6 h-[1.5px] bg-[#B7925A]" />
            <span className="tag-gold text-xs">ÁREAS DE ATUAÇÃO</span>
            <span className="w-6 h-[1.5px] bg-[#B7925A]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#18363B] tracking-tight"
          >
            Especialidades Clínicas
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[#667174] text-base lg:text-lg font-light leading-relaxed"
          >
            Diferentes abordagens integradas com rigor técnico e sensibilidade para atender às necessidades específicas de cada fase e demanda.
          </motion.p>
        </div>

        {/* Specialties Grid (8 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {SPECIALTIES_DATA.map((spec, index) => (
            <motion.div
              key={spec.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#18363B]/8 shadow-sm hover:shadow-luxury-hover hover:-translate-y-1.5 transition-all duration-400"
            >
              {/* Card Image with Badge */}
              <div className="relative h-48 w-full overflow-hidden bg-[#18363B]">
                <img
                  src={spec.imageUrl}
                  alt={spec.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.95]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#18363B] via-[#18363B]/30 to-transparent" />
                
                {/* Number & Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="text-xs font-serif font-bold text-white bg-[#18363B]/80 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/20">
                    {spec.num}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#B7925A] bg-white/95 px-2.5 py-1 rounded-md shadow-sm">
                    {spec.badge}
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 z-10">
                  <span className="text-[11px] text-[#B7925A] font-medium tracking-wide">
                    {spec.subtitle}
                  </span>
                  <h3 className="font-serif text-xl text-white font-semibold leading-snug">
                    {spec.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-5">
                <p className="text-[#667174] text-sm leading-relaxed font-light line-clamp-4">
                  {spec.shortDesc}
                </p>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    href={`/especialidades/${spec.slug}`}
                    className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#18363B] group-hover:text-[#B7925A] transition-colors"
                  >
                    <span>Conhecer detalhes</span>
                    <svg className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>

                  <a
                    href={`https://wa.me/5511995235839?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20${encodeURIComponent(spec.title)}%20com%20Cristiano%20%C3%81vila.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Agendar esta especialidade"
                    className="p-1.5 text-[#667174] hover:text-[#B7925A] hover:bg-[#B7925A]/10 rounded-full transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.913.913l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Navigation CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/especialidades"
            className="btn-outline"
          >
            Ver catálogo completo de especialidades
          </Link>
        </div>

      </div>
    </section>
  );
}
