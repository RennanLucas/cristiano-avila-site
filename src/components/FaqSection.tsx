"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { buildWhatsAppLink } from "@/data/content";
import { CURRENT_CITIES_TEXT } from "@/data/units";

const FAQ_ITEMS = [
  {
    category: "Consultas",
    question: "Como funciona a primeira consulta?",
    answer:
      "A primeira sessão é dedicada à escuta da sua demanda, compreensão do contexto atual e alinhamento de objetivos. A partir disso, o acompanhamento é organizado de forma individualizada, respeitando as necessidades e os limites de cada pessoa.",
  },
  {
    category: "Online",
    question: "Como funciona o atendimento psicológico online?",
    answer:
      "O atendimento online é realizado por videoconferência, em ambiente reservado e com os mesmos deveres éticos aplicáveis ao exercício profissional. A prestação de serviços psicológicos mediados por tecnologias digitais é regulamentada pela Resolução CFP nº 9/2024. A indicação da modalidade é avaliada conforme as características e necessidades de cada caso.",
  },
  {
    category: "Hipnoterapia",
    question: "Como a hipnoterapia clínica pode ser utilizada?",
    answer:
      "A hipnoterapia pode ser empregada como recurso complementar quando houver indicação clínica e concordância da pessoa atendida. O procedimento envolve atenção focalizada e participação ativa, sem perda automática de consciência ou de controle.",
  },
  {
    category: "Planos",
    question: "O atendimento é particular? É possível solicitar reembolso?",
    answer:
      "Os atendimentos são particulares. Quando aplicável, é fornecida a documentação referente ao serviço prestado para que a pessoa consulte diretamente as regras de reembolso do próprio plano de saúde. Valores e condições de reembolso dependem de cada operadora e contrato.",
  },
  {
    category: "Duração",
    question: "Qual é a duração e a frequência das sessões?",
    answer:
      "As sessões individuais costumam durar cerca de 50 minutos. A frequência é definida de acordo com a avaliação profissional, os objetivos do acompanhamento e as necessidades de cada pessoa, podendo ser ajustada ao longo do processo.",
  },
  {
    category: "Presencial",
    question: "Onde ficam os consultórios presenciais?",
    answer:
      `Há atendimento presencial em ${CURRENT_CITIES_TEXT}. Os endereços completos e links para mapa estão disponíveis na página de unidades.`,
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="pointer-events-none absolute -left-28 top-24 h-80 w-80 rounded-full bg-zinc-100 blur-[110px]" />
      <div className="aurora-orb absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-sky-100/50 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0.35, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
            className="lg:self-start"
          >
            <span className="editorial-label">Informações sobre o atendimento</span>
            <h2 className="mt-4 max-w-md text-3xl font-semibold leading-[1.05] tracking-[-0.045em] text-black sm:text-4xl lg:text-5xl">
              Dúvidas importantes, respostas objetivas.
            </h2>
            <p className="mt-5 max-w-md text-base font-light leading-relaxed text-zinc-600">
              Informações gerais sobre consultas, modalidades, organização do acompanhamento e atendimento presencial.
            </p>

            <div className="mt-9 overflow-hidden rounded-[28px] premium-dark p-6 text-white sm:p-7">
              <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/35">Precisa falar com a equipe?</span>
              <h3 className="mt-3 text-xl font-semibold tracking-[-0.025em]">Envie apenas o necessário para o primeiro contato.</h3>
              <p className="mt-3 text-xs font-light leading-relaxed text-white/50">
                Questões clínicas podem ser conversadas posteriormente em ambiente apropriado de atendimento.
              </p>
              <a
                href={buildWhatsAppLink("Olá! Tenho uma dúvida sobre o atendimento e gostaria de mais informações.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[11px] font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Falar pelo WhatsApp <span aria-hidden="true">↗</span>
              </a>
            </div>
          </motion.div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <motion.article
                  key={item.question}
                  initial={{ opacity: 0.45, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-35px" }}
                  transition={{ duration: 0.36, delay: idx * 0.025, ease: [0.16, 1, 0.3, 1] }}
                  className={`group overflow-hidden rounded-[24px] border transition-all duration-500 ${
                    isOpen
                      ? "border-zinc-300 bg-white shadow-[0_22px_60px_rgba(0,0,0,0.08)]"
                      : "border-zinc-200/80 bg-zinc-50/55 hover:border-zinc-300 hover:bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="flex w-full items-center gap-4 p-5 text-left sm:p-6"
                    aria-expanded={isOpen}
                  >
                    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border font-mono text-[10px] transition-all duration-300 ${isOpen ? "border-black bg-black text-white" : "border-zinc-200 bg-white text-zinc-400 group-hover:text-black"}`}>
                      {String(idx + 1).padStart(2, "0")}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="mb-1 block text-[9px] font-semibold uppercase tracking-[0.16em] text-zinc-400">{item.category}</span>
                      <span className="block text-base font-semibold tracking-[-0.02em] text-black sm:text-lg">{item.question}</span>
                    </span>

                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? "rotate-45 border-black bg-black text-white" : "border-zinc-200 bg-white text-black"}`} aria-hidden="true">
                      +
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="ml-[76px] border-t border-zinc-100 px-0 pb-6 pr-6 pt-5 text-sm font-light leading-relaxed text-zinc-600 sm:ml-[84px] sm:pr-8">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
