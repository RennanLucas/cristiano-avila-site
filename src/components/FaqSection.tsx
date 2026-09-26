import { buildWhatsAppLink } from "@/data/content";
import { CURRENT_CITIES_TEXT } from "@/data/units";

const FAQ_ITEMS = [
  { category: "Consultas", question: "Como funciona a primeira consulta?", answer: "A primeira sessão é dedicada à escuta da sua demanda, compreensão do contexto atual e alinhamento de objetivos. A partir disso, o acompanhamento é organizado de forma individualizada, respeitando as necessidades e os limites de cada pessoa." },
  { category: "Online", question: "Como funciona o atendimento psicológico online?", answer: "O atendimento online é realizado por videoconferência, em ambiente reservado e com os mesmos deveres éticos aplicáveis ao exercício profissional. A prestação de serviços psicológicos mediados por tecnologias digitais é regulamentada pela Resolução CFP nº 9/2024. A indicação da modalidade é avaliada conforme as características e necessidades de cada caso." },
  { category: "Hipnoterapia", question: "Como a hipnoterapia clínica pode ser utilizada?", answer: "A hipnoterapia pode ser empregada como recurso complementar quando houver indicação clínica e concordância da pessoa atendida. O procedimento envolve atenção focalizada e participação ativa, sem perda automática de consciência ou de controle." },
  { category: "Planos", question: "O atendimento é particular? É possível solicitar reembolso?", answer: "Os atendimentos são particulares. Quando aplicável, é fornecida a documentação referente ao serviço prestado para que a pessoa consulte diretamente as regras de reembolso do próprio plano de saúde. Valores e condições de reembolso dependem de cada operadora e contrato." },
  { category: "Duração", question: "Qual é a duração e a frequência das sessões?", answer: "As sessões individuais costumam durar cerca de 50 minutos. A frequência é definida de acordo com a avaliação profissional, os objetivos do acompanhamento e as necessidades de cada pessoa, podendo ser ajustada ao longo do processo." },
  { category: "Presencial", question: "Onde ficam os consultórios presenciais?", answer: `Há atendimento presencial em ${CURRENT_CITIES_TEXT}. Os endereços completos e links para mapa estão disponíveis na página de unidades.` },
];

export default function FaqSection() {
  return (
    <section id="faq" className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute -left-28 top-24 h-80 w-80 rounded-full bg-zinc-100 blur-[110px]" />
      <div className="aurora-orb absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-sky-100/50 blur-[100px]" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div className="lg:self-start">
            <span className="editorial-label">Informações sobre o atendimento</span>
            <h2 className="mt-4 max-w-md text-3xl font-semibold leading-[1.05] tracking-[-0.045em] text-black sm:text-4xl lg:text-5xl">Dúvidas importantes, respostas objetivas.</h2>
            <p className="mt-5 max-w-md text-[15px] font-light leading-relaxed text-zinc-600 sm:text-base">Consulte as principais informações sobre modalidades, frequência, reembolso e locais de atendimento.</p>
            <div className="mt-8 overflow-hidden rounded-[24px] premium-dark p-5 text-white min-[390px]:p-6 sm:mt-9 sm:rounded-[28px] sm:p-7">
              <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/35">Atendimento</span>
              <h3 className="mt-3 text-lg font-semibold tracking-[-0.025em] sm:text-xl">Ainda ficou com alguma dúvida?</h3>
              <p className="mt-3 text-xs font-light leading-relaxed text-white/50">Fale pelo WhatsApp para consultar horários, modalidades de atendimento e outras informações.</p>
              <a href={buildWhatsAppLink("Olá! Tenho uma dúvida sobre o atendimento e gostaria de mais informações.")} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-[11px] font-semibold text-black transition-transform duration-200 md:hover:-translate-y-0.5 sm:w-auto">Falar no WhatsApp <span aria-hidden="true">↗</span></a>
            </div>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, idx) => (
              <details key={item.question} open={idx === 0} className="group overflow-hidden rounded-[22px] border border-zinc-200/80 bg-zinc-50/55 transition-colors duration-200 open:border-zinc-300 open:bg-white sm:rounded-[24px]">
                <summary className="flex cursor-pointer list-none items-center gap-3 p-4 text-left min-[390px]:gap-4 min-[390px]:p-5 sm:p-6 [&::-webkit-details-marker]:hidden">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-white font-mono text-[9px] text-zinc-400 transition-colors duration-200 group-open:border-black group-open:bg-black group-open:text-white min-[390px]:h-11 min-[390px]:w-11 min-[390px]:rounded-2xl min-[390px]:text-[10px]">{String(idx + 1).padStart(2, "0")}</span>
                  <span className="min-w-0 flex-1"><span className="mb-1 block text-[8px] font-semibold uppercase tracking-[0.14em] text-zinc-400 min-[390px]:text-[9px] min-[390px]:tracking-[0.16em]">{item.category}</span><span className="block text-[15px] font-semibold leading-snug tracking-[-0.02em] text-black sm:text-lg">{item.question}</span></span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white text-black transition-transform duration-200 group-open:rotate-45 group-open:border-black group-open:bg-black group-open:text-white sm:h-9 sm:w-9" aria-hidden="true">+</span>
                </summary>
                <div className="border-t border-zinc-100 px-4 pb-5 pt-4 text-sm font-light leading-relaxed text-zinc-600 min-[390px]:px-5 min-[390px]:pb-6 sm:ml-[84px] sm:px-0 sm:pb-6 sm:pr-8 sm:pt-5">{item.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
