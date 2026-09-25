"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CLINIC_CONTACT, buildWhatsAppLink } from "@/data/content";

const FAQ_ITEMS = [
  {
    category: "Consultas",
    question: "Como funciona a primeira consulta de avaliação?",
    answer:
      "A primeira sessão é um espaço de escuta aprofundada e acolhimento. Mapeamos detalhadamente suas queixas, histórico de vida, sintomas atuais e objetivos terapêuticos. A partir dessa análise, estruturamos um plano de intervenção personalizado baseado em psicologia clínica e neurociência.",
  },
  {
    category: "Online",
    question: "A psicoterapia online tem a mesma eficácia que a presencial?",
    answer:
      "Sim. Diversos estudos científicos mundiais e resoluções do Conselho Federal de Psicologia (CFP nº 11/2018) comprovam que o atendimento online tem eficácia clínica equivalente ao presencial. As sessões ocorrem em plataforma segura, com áudio e vídeo de alta definição e sigilo rigoroso.",
  },
  {
    category: "Hipnoterapia",
    question: "Como a hipnoterapia clínica é aplicada e qual a diferença da hipnose de palco?",
    answer:
      "A hipnoterapia clínica é uma ferramenta terapêutica séria, focada no acesso a memórias emocionais e reprogramação de padrões de comportamento. O paciente permanece consciente e no controle durante todo o processo. Não há perda de consciência, desmaio ou qualquer semelhança com shows de entretenimento.",
  },
  {
    category: "Planos",
    question: "O consultório atende convênios médicos ou apenas particular?",
    answer:
      "Os atendimentos são realizados em caráter particular para garantir tempo de sessão estendido e atenção integral. No entanto, fornecemos recibo detalhado e nota fiscal com registro no CRP para solicitação de reembolso junto ao seu plano de saúde (Bradesco, SulAmérica, Amil, Care Plus, Omint, etc.).",
  },
  {
    category: "Duração",
    question: "Qual é a duração e a frequência habitual das sessões?",
    answer:
      "As sessões individuais têm duração de 50 minutos. A frequência padrão no início do processo é semanal, podendo ser ajustada conforme a evolução clínica e as necessidades de cada paciente.",
  },
  {
    category: "Presencial",
    question: "Onde ficam localizados os consultórios presenciais?",
    answer:
      "Dr. Cristiano atende em 4 cidades do Estado de São Paulo: Capital (Santana Corporate, Zona Norte), Atibaia (Alvinópolis), Santos (Edifício The Blue, Vila Matias) e São Bernardo do Campo (Edifício Domo Business, Centro). Todos os locais contam com fácil acesso, estacionamento e total privacidade.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 lg:py-32 bg-white relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-zinc-100 text-[10px] font-bold tracking-widest text-zinc-600 uppercase mb-3">
            Esclarecimento Clínico
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-textMuted text-base font-light">
            Transparência e clareza sobre o método, agendamento, reembolso e formato das sessões.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-zinc-200/80 bg-zinc-50/50 overflow-hidden transition-all duration-200 hover:border-zinc-300"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4"
                >
                  <span className="text-base sm:text-lg font-semibold text-black tracking-tight">
                    {item.question}
                  </span>
                  <span
                    className={`w-7 h-7 rounded-full bg-white border border-zinc-200 flex items-center justify-center shrink-0 text-black transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 text-sm text-textMuted leading-relaxed border-t border-zinc-100">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Card Dúvidas Extras */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-zinc-50 border border-zinc-200/80 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-black mb-1">Ficou com alguma dúvida específica?</h4>
            <p className="text-xs text-textMuted font-light">
              Nossa equipe responde diretamente pelo WhatsApp com discrição e rapidez.
            </p>
          </div>
          <a
            href={buildWhatsAppLink("Olá! Tenho uma dúvida que não encontrei na seção de perguntas do site.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary py-2.5 px-6 text-xs shrink-0"
          >
            Tirar dúvida no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
