'use client';

import { motion } from 'framer-motion';
import { CLINIC_CONTACT } from '@/data/content';

export default function CtaSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#18363B] text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#B7925A]/10 blur-[150px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #FFFFFF 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10 space-y-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-4"
        >
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#B7925A] block">
            AGENDE SEU ATENDIMENTO
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.18]">
            Comece uma conversa sobre o que você está vivendo.
          </h2>

          <p className="text-white/70 text-base lg:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Entre em contato para obter informações sobre modalidades de atendimento presencial ou online, horários e disponibilidade de agenda com Cristiano Ávila.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="pt-4"
        >
          <a
            href={CLINIC_CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-sm !py-4.5 !px-10 shadow-gold inline-flex items-center gap-3"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.913.913l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.675-.839-6.481-2.373l-.388-.322-2.65.889.889-2.65-.322-.388A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            <span>Falar pelo WhatsApp</span>
          </a>
        </motion.div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-xs text-white/60">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#B7925A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-white font-medium">{CLINIC_CONTACT.phone}</span>
          </div>

          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#B7925A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-white/80">{CLINIC_CONTACT.email}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Atendimento Presencial e Online</span>
          </div>
        </div>

      </div>
    </section>
  );
}
