"use client";

import { motion } from "framer-motion";
import { CLINIC_CONTACT, buildWhatsAppLink } from "@/data/content";

const STEPS = [
  {
    step: "01",
    title: "Consulta Particular",
    desc: "Você agenda e realiza sua consulta particular, garantindo tempo adequado, sigilo integral e atendimento personalizado.",
  },
  {
    step: "02",
    title: "Emissão de Recibo & Nota Fiscal",
    desc: "Fornecemos recibo médico oficial constando CRM/CRP, descrição do atendimento psicológico e valor pago.",
  },
  {
    step: "03",
    title: "Envio ao Aplicativo do Plano",
    desc: "Basta tirar foto do recibo e fazer upload diretamente no app do seu plano de saúde em menos de 2 minutos.",
  },
  {
    step: "04",
    title: "Crédito em Conta",
    desc: "O convênio realiza o reembolso com depósito direto na sua conta bancária de acordo com as diretrizes do seu contrato.",
  },
];

const INSURANCES = [
  "Bradesco Saúde",
  "SulAmérica",
  "Amil",
  "Omint",
  "Care Plus",
  "Porto Seguro",
  "Allianz",
  "Unimed",
];

export default function ReembolsoGuide() {
  return (
    <section className="py-20 md:py-28 bg-[#FAFAFA] border-y border-zinc-200/60 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-zinc-200/80 text-[10px] font-bold tracking-widest text-zinc-700 uppercase mb-3">
            Atendimento Particular & Reembolso
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black mb-4">
            Como funciona o reembolso do seu plano?
          </h2>
          <p className="text-textMuted text-base font-light leading-relaxed">
            A maioria dos planos de saúde prevê o reembolso para consultas com psicólogo de sua livre escolha. Entenda como é simples:
          </p>
        </div>

        {/* 4 Passos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {STEPS.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white p-7 rounded-3xl border border-zinc-200/80 shadow-apple flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl font-extrabold text-zinc-200 block mb-4 tracking-tighter">
                  {s.step}
                </span>
                <h3 className="text-lg font-bold text-black tracking-tight mb-2">
                  {s.title}
                </h3>
                <p className="text-xs text-textMuted leading-relaxed font-light">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Convênios Pills */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
              Planos habitualmente aceitos para solicitação de reembolso:
            </p>
            <div className="flex flex-wrap gap-2">
              {INSURANCES.map((ins, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-zinc-100 text-[11px] font-medium text-zinc-700 border border-zinc-200/50"
                >
                  {ins}
                </span>
              ))}
            </div>
          </div>

          <a
            href={buildWhatsAppLink("Olá! Gostaria de entender mais sobre os valores das consultas e como funciona o recibo para reembolso do meu plano.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary py-3 px-6 text-xs whitespace-nowrap shrink-0"
          >
            Consultar sobre recibo de reembolso
          </a>
        </div>
      </div>
    </section>
  );
}
