'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import { CLINIC_CONTACT } from '@/data/content';

const EXPERIENCES = [
  'Psicologia Clínica',
  'Hipnoterapia Clínica',
  'Neurociência do Comportamento',
  'Psicologia Institucional',
  'Inteligência Emocional',
  'Palestras & Treinamentos',
  'Produção de Conteúdo Científico',
  'Educação em Saúde Mental',
];

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="sobre" ref={containerRef} className="py-24 lg:py-32 bg-surface relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait & Credential Badge (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-[420px] lg:max-w-none">
              
              {/* Decorative Frame */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border border-zinc-200/30 -z-10 hidden sm:block" />

              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-zinc-100 to-zinc-50 shadow-apple border border-zinc-200/10">
                <div className="aspect-[4/5] w-full overflow-hidden bg-black relative">
                  <motion.img
                    style={{ y, scale: 1.15 }}
                    src={CLINIC_CONTACT.avatarUrl}
                    alt="Dr. Cristiano Ávila da Silva"
                    className="absolute inset-0 w-full h-full object-cover object-top filter contrast-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating OMNI Certification Card */}
                <div className="p-6 bg-white border-t border-zinc-200/20">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-full bg-black text-zinc-500 flex items-center justify-center tracking-tight text-lg font-bold flex-shrink-0">
                      O
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                        Certificação Internacional
                      </p>
                      <h4 className="tracking-tight text-base text-black font-semibold">
                        OMNI Training Center
                      </h4>
                      <p className="text-[11px] text-textMuted">
                        Hipnoterapia Clínica de Padrão Global
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stat highlight pill */}
              <div className="mt-5 p-4 rounded-xl bg-white border border-zinc-200/8 shadow-sm flex items-center justify-between text-center">
                <div>
                  <span className="block tracking-tight text-2xl font-bold text-black">+10</span>
                  <span className="text-[11px] text-textMuted">Anos de experiência</span>
                </div>
                <div className="h-8 w-[1px] bg-gray-200" />
                <div>
                  <span className="block tracking-tight text-2xl font-bold text-zinc-500">4</span>
                  <span className="text-[11px] text-textMuted">Cidades de atendimento</span>
                </div>
                <div className="h-8 w-[1px] bg-gray-200" />
                <div>
                  <span className="block tracking-tight text-2xl font-bold text-black">+1.300</span>
                  <span className="text-[11px] text-textMuted">Atendimentos em 2022*</span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Bio & Experience (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-7"
          >
            <div className="space-y-3">
              <span className="inline-block px-3 py-1 rounded-full bg-zinc-100 text-xs font-semibold tracking-widest text-zinc-600 mb-2">SOBRE O PROFISSIONAL</span>
              <h2 className="tracking-tight text-3xl sm:text-4xl lg:text-5xl text-black tracking-tight">
                Cristiano Ávila da Silva
              </h2>
              <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider">
                Psicólogo Clínico • Neurocientista • Hipnoterapeuta
              </p>
            </div>

            <div className="space-y-4 text-textMuted text-base lg:text-lg leading-relaxed font-light">
              <p>
                Cristiano Ávila atua nas áreas de <strong>Psicologia Clínica, Neurociência e Hipnoterapia</strong>. Ao longo de sua trajetória profissional, consolidou ampla experiência no atendimento clínico e institucional, trabalhando com diferentes demandas relacionadas ao comportamento humano, emoções e saúde mental.
              </p>
              <p>
                Sua atuação integra conhecimentos de psicologia, neurociência, hipnose clínica e outras ferramentas terapêuticas aplicadas de maneira individualizada de acordo com a singularidade de cada paciente.
              </p>
              <p>
                Desenvolveu também reconhecido trabalho como psicólogo institucional junto à <strong>Fundação Casa Atibaia</strong>, aplicando intervenções focadas no acolhimento, reprogramação mental e reinserção social de jovens em conflito com a lei.
              </p>
              <p>
                Além do consultório clínico, atua como palestrante e escritor, abordando temas de saúde mental, inteligência emocional, autogestão e comportamento humano para empresas e grupos.
              </p>
            </div>

            {/* Experience Checklist */}
            <div className="pt-4 border-t border-zinc-200/10">
              <h3 className="tracking-tight text-xl text-black font-semibold mb-4">
                Áreas de Domínio & Prática
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {EXPERIENCES.map((exp) => (
                  <div key={exp} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-zinc-200/15 text-zinc-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-black font-medium">{exp}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <Link href="/sobre" className="btn-primary">
                Ver perfil profissional completo
              </Link>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
