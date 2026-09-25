"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const MILESTONES = [
  {
    year: "2012",
    title: "Início da Prática Clínica",
    desc: "Graduação em Psicologia e início dos atendimentos focados em transtornos de ansiedade, estresse e regulação emocional.",
  },
  {
    year: "2015",
    title: "Psicologia Institucional na Fundação Casa",
    desc: "Atuação de alta complexidade em Atibaia, liderando intervenções de acolhimento e reprogramação comportamental para reinserção social de jovens.",
  },
  {
    year: "2018",
    title: "Certificação Internacional OMNI",
    desc: "Conclusão da formação avançada no OMNI Hypnosis Training Center, com certificação global de excelência sob a norma internacional ISO 9001.",
  },
  {
    year: "2020",
    title: "Expansão para Atendimento Global",
    desc: "Estruturação de protocolos para telepsicologia em estrita conformidade com o CFP, atendendo pacientes em diversos países.",
  },
  {
    year: "2022",
    title: "+1.300 Atendimentos & 4 Unidades",
    desc: "Consolidação dos consultórios próprios em São Paulo (Santana), Atibaia, Santos e São Bernardo do Campo.",
  },
  {
    year: "Presente",
    title: "Neurociência Aplicada ao Bem-Estar",
    desc: "Abordagem integrativa contínua unindo neuroplasticidade, hipnoterapia científica e acompanhamento clínico rigoroso.",
  },
];

export default function CareerTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-white border-t border-zinc-100 relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-zinc-100 text-[10px] font-bold tracking-widest text-zinc-600 uppercase mb-3">
            Trajetória & Bagagem
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black mb-4">
            Linha do Tempo Profissional
          </h2>
          <p className="text-textMuted text-base font-light">
            Mais de uma década de dedicação ao estudo e tratamento da mente humana.
          </p>
        </div>

        {/* Linha guia com preenchimento dinâmico */}
        <div className="relative ml-4 md:ml-32 space-y-12">
          {/* Fundo da linha cinza estática */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-200" />

          {/* Linha preta animada preenchida pelo scroll */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-0 top-0 bottom-0 w-px bg-black origin-top z-10"
          />

          {MILESTONES.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="relative pl-8 md:pl-10"
            >
              {/* Dot com pulso animado */}
              <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-black ring-4 ring-white z-20" />

              {/* Ano */}
              <span className="md:absolute md:-left-32 md:text-right md:w-24 text-xs font-bold text-zinc-400 uppercase tracking-widest block mb-1">
                {item.year}
              </span>

              <h3 className="text-lg font-bold text-black tracking-tight mb-1.5">
                {item.title}
              </h3>
              <p className="text-sm text-textMuted font-light leading-relaxed max-w-2xl">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
