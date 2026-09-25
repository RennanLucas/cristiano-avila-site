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
    <section id="faq" className="py-24 lg:py-32 bg-white relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-zinc-100 text-[10px] font-bold tracking-widest text-zinc-600 uppercase mb-3">
            Informações sobre o atendimento
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black mb-4">Perguntas frequentes</h2>
          <p className="text-textMuted text-base font-light">
            Informações gerais sobre consultas, modalidades e organização do acompanhamento.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={item.question} className="rounded-2xl border border-zinc-200/80 bg-zinc-50/50 overflow-hidden transition-all duration-200 hover:border-zinc-300">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-black tracking-tight">{item.question}</span>
                  <span className={`w-7 h-7 rounded-full bg-white border border-zinc-200 flex items-center justify-center shrink-0 text-black transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} aria-hidden="true">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: "easeInOut" }}>
                      <div className="px-6 pb-6 pt-2 text-sm text-textMuted leading-relaxed border-t border-zinc-100">{item.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-zinc-50 border border-zinc-200/80 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-black mb-1">Ficou com alguma dúvida?</h4>
            <p className="text-xs text-textMuted font-light">Envie apenas as informações necessárias para agendamento ou esclarecimentos iniciais.</p>
          </div>
          <a href={buildWhatsAppLink("Olá! Tenho uma dúvida sobre o atendimento e gostaria de mais informações.")} target="_blank" rel="noopener noreferrer" className="btn-primary py-2.5 px-6 text-xs shrink-0">
            Falar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
