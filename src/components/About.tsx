'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
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
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-[#F8F8F5] relative overflow-hidden">
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
              <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border border-[#B7925A]/30 -z-10 hidden sm:block" />

              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#18363B] to-[#0F262B] shadow-luxury border border-[#18363B]/10">
                <div className="aspect-[4/5] w-full overflow-hidden bg-[#18363B]">
                  <img
                    src={CLINIC_CONTACT.avatarUrl}
                    alt="Dr. Cristiano Ávila da Silva"
                    className="w-full h-full object-cover object-top filter contrast-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18363B] via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating OMNI Certification Card */}
                <div className="p-6 bg-white border-t border-[#B7925A]/20">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-full bg-[#18363B] text-[#B7925A] flex items-center justify-center font-serif text-lg font-bold flex-shrink-0">
                      O
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#B7925A]">
                        Certificação Internacional
                      </p>
                      <h4 className="font-serif text-base text-[#18363B] font-semibold">
                        OMNI Training Center
                      </h4>
                      <p className="text-[11px] text-[#667174]">
                        Hipnoterapia Clínica de Padrão Global
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stat highlight pill */}
              <div className="mt-5 p-4 rounded-xl bg-white border border-[#18363B]/8 shadow-sm flex items-center justify-between text-center">
                <div>
                  <span className="block font-serif text-2xl font-bold text-[#18363B]">+10</span>
                  <span className="text-[11px] text-[#667174]">Anos de experiência</span>
                </div>
                <div className="h-8 w-[1px] bg-gray-200" />
                <div>
                  <span className="block font-serif text-2xl font-bold text-[#B7925A]">4</span>
                  <span className="text-[11px] text-[#667174]">Cidades de atendimento</span>
                </div>
                <div className="h-8 w-[1px] bg-gray-200" />
                <div>
                  <span className="block font-serif text-2xl font-bold text-[#18363B]">+1.300</span>
                  <span className="text-[11px] text-[#667174]">Atendimentos em 2022*</span>
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
              <span className="tag-gold">SOBRE O PROFISSIONAL</span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#18363B] tracking-tight">
                Cristiano Ávila da Silva
              </h2>
              <p className="text-sm font-medium text-[#B7925A] uppercase tracking-wider">
                Psicólogo Clínico • Neurocientista • Hipnoterapeuta
              </p>
            </div>

            <div className="space-y-4 text-[#667174] text-base lg:text-lg leading-relaxed font-light">
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
            <div className="pt-4 border-t border-[#18363B]/10">
              <h3 className="font-serif text-xl text-[#18363B] font-semibold mb-4">
                Áreas de Domínio & Prática
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {EXPERIENCES.map((exp) => (
                  <div key={exp} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#B7925A]/15 text-[#B7925A] flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-[#1C2628] font-medium">{exp}</span>
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
