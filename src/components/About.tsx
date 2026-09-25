'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CLINIC_CONTACT } from '@/data/content';
import { PROFESSIONAL_REGISTRATION } from '@/lib/site-policy';

const EXPERIENCES = [
  'Psicologia Clínica',
  'Hipnoterapia Clínica',
  'Neurociência do Comportamento',
  'Psicologia Institucional',
  'Inteligência Emocional',
  'Palestras & Treinamentos',
  'Produção de Conteúdo',
  'Educação em Saúde Mental',
];

export default function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-surface relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-[420px] lg:max-w-none">
              <div className="relative rounded-[2rem] overflow-hidden bg-zinc-100 shadow-apple border border-zinc-200/70">
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={CLINIC_CONTACT.avatarUrl}
                    alt="Cristiano Ávila da Silva"
                    fill
                    sizes="(max-width: 1024px) 90vw, 520px"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-lg font-semibold">Cristiano Ávila da Silva</p>
                    <p className="text-xs text-white/80 mt-1">Psicólogo Clínico • {PROFESSIONAL_REGISTRATION}</p>
                  </div>
                </div>

                <div className="p-6 bg-white border-t border-zinc-200/70">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Formação complementar</p>
                  <h4 className="tracking-tight text-base text-black font-semibold mt-1">OMNI Training Center</h4>
                  <p className="text-[11px] text-textMuted mt-1">Certificação em hipnoterapia clínica.</p>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 rounded-2xl bg-white border border-zinc-200/80 shadow-sm overflow-hidden text-center">
                <div className="p-4">
                  <span className="block tracking-tight text-2xl font-bold text-black">+10</span>
                  <span className="text-[11px] text-textMuted">Anos de experiência</span>
                </div>
                <div className="p-4 border-l border-zinc-200">
                  <span className="block tracking-tight text-2xl font-bold text-black">4</span>
                  <span className="text-[11px] text-textMuted">Cidades de atendimento</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-7"
          >
            <div className="space-y-3">
              <span className="inline-block px-3 py-1 rounded-full bg-zinc-100 text-xs font-semibold tracking-widest text-zinc-600 mb-2">SOBRE O PROFISSIONAL</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-black font-semibold tracking-tight">Cristiano Ávila da Silva</h2>
              <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Psicólogo Clínico • Neurocientista • Hipnoterapeuta</p>
            </div>

            <div className="space-y-4 text-textMuted text-base lg:text-lg leading-relaxed font-light">
              <p>
                Cristiano Ávila atua em Psicologia Clínica e possui formação complementar em áreas relacionadas ao comportamento humano, neurociência e hipnoterapia.
              </p>
              <p>
                O acompanhamento é organizado de forma individualizada, considerando a demanda apresentada, o contexto de vida e os limites técnicos e éticos do exercício profissional.
              </p>
              <p>
                Sua trajetória também inclui experiência institucional junto à <strong>Fundação Casa Atibaia</strong>, além de atividades de educação em saúde mental, palestras e produção de conteúdo.
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-200/60">
              <h3 className="tracking-tight text-xl text-black font-semibold mb-4">Áreas de atuação e experiência</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {EXPERIENCES.map((exp) => (
                  <div key={exp} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-zinc-100 text-zinc-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-black font-medium">{exp}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <Link href="/sobre" className="btn-primary">Ver perfil profissional completo</Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
