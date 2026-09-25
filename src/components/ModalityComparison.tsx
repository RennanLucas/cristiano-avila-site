"use client";

import { motion } from "framer-motion";
import { CLINIC_CONTACT } from "@/data/content";

export default function ModalityComparison() {
  const comparisonItems = [
    {
      feature: "Eficácia Clínica",
      online: "Comprovadamente idêntica à presencial pela neurociência e CFP",
      presencial: "Padrão de imersão direta e contato face a face",
    },
    {
      feature: "Localização",
      online: "De qualquer lugar do Brasil e exterior (via sala segura criptografada)",
      presencial: "Consultórios em SP (Santana), Atibaia, Santos e SBC",
    },
    {
      feature: "Ambiente",
      online: "Conforto e privacidade do seu próprio espaço",
      presencial: "Consultório com isolamento acústico e controle sensorial",
    },
    {
      feature: "Tempo & Deslocamento",
      online: "Zero trânsito, sem esperas em sala compartilhada",
      presencial: "Fácil acesso com estacionamento próximo",
    },
    {
      feature: "Sigilo & Ética",
      online: "Plataforma em conformidade com a Resolução CFP nº 11/2018",
      presencial: "Prontuário sob sigilo médico absoluto (Código CFP)",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-t border-zinc-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-zinc-100 text-[10px] font-bold tracking-widest text-zinc-600 uppercase mb-3">
            Escolha sua experiência
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-3">
            Presencial ou Online?
          </h2>
          <p className="text-textMuted text-base font-light">
            Ambas as modalidades utilizam a mesma base teórica e compromisso com o seu desenvolvimento.
          </p>
        </div>

        {/* Tabela Comparativa Estilo Apple */}
        <div className="overflow-hidden rounded-3xl border border-zinc-200/80 shadow-apple bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-zinc-200/80">
            {/* Coluna 1: Online */}
            <div className="p-8 md:p-10 flex flex-col justify-between bg-zinc-50/50">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-[11px] font-semibold mb-4">
                  <span>Atendimento Online</span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-black mb-2">
                  Flexibilidade Sem Fronteiras
                </h3>
                <p className="text-xs text-textMuted leading-relaxed mb-6 font-light">
                  Ideal para quem possui rotina intensa, viaja com frequência ou reside fora das cidades com consultório físico.
                </p>

                <ul className="space-y-4 pt-4 border-t border-zinc-200/60">
                  {comparisonItems.map((item, idx) => (
                    <li key={idx} className="text-xs">
                      <span className="font-semibold text-black block mb-0.5">{item.feature}</span>
                      <span className="text-textMuted leading-relaxed">{item.online}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 mt-6">
                <a
                  href={`https://wa.me/${CLINIC_CONTACT.phoneRaw}?text=Ol%C3%A1%2C%20Dr.%20Cristiano.%20Tenho%20interesse%20em%20agendar%20uma%20consulta%20na%20modalidade%20ONLINE.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center py-3.5 px-6 rounded-full bg-black text-white text-xs font-semibold hover:bg-zinc-800 transition-colors shadow-sm"
                >
                  Agendar Sessão Online
                </a>
              </div>
            </div>

            {/* Coluna 2: Presencial */}
            <div className="p-8 md:p-10 flex flex-col justify-between bg-white">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-800 text-[11px] font-semibold mb-4">
                  <span>Consultórios Físicos</span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-black mb-2">
                  Presença & Foco Absoluto
                </h3>
                <p className="text-xs text-textMuted leading-relaxed mb-6 font-light">
                  Atendimentos em consultórios privativos e discretos em São Paulo (Santana), Atibaia, Santos e SBC.
                </p>

                <ul className="space-y-4 pt-4 border-t border-zinc-200/60">
                  {comparisonItems.map((item, idx) => (
                    <li key={idx} className="text-xs">
                      <span className="font-semibold text-black block mb-0.5">{item.feature}</span>
                      <span className="text-textMuted leading-relaxed">{item.presencial}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 mt-6">
                <a
                  href={`https://wa.me/${CLINIC_CONTACT.phoneRaw}?text=Ol%C3%A1%2C%20Dr.%20Cristiano.%20Tenho%20interesse%20em%20agendar%20uma%20consulta%20PRESENCIAL.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center py-3.5 px-6 rounded-full bg-zinc-100 text-black text-xs font-semibold hover:bg-zinc-200 border border-zinc-200/70 transition-colors"
                >
                  Agendar Sessão Presencial
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
