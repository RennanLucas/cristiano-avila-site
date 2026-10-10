import { buildWhatsAppLink } from "@/data/content";

const METHOD_STEPS = [
  { num: "01", title: "Primeiro contato", desc: "Você consulta horários, modalidade e local de preferência pelo WhatsApp. Não é necessário explicar toda a sua história nesse primeiro momento.", badge: "Agenda & informações" },
  { num: "02", title: "Primeira sessão", desc: "A conversa começa pelo motivo da procura, pelo que está acontecendo agora e por informações da história que ajudam a compreender melhor a situação.", badge: "Escuta inicial" },
  { num: "03", title: "Definição de foco", desc: "Com o avanço das conversas, ficam mais claros os temas prioritários da terapia e os pontos que merecem ser trabalhados com maior profundidade.", badge: "Direção clínica" },
  { num: "04", title: "Continuidade", desc: "As sessões seguintes acompanham o que muda, o que ainda se repete e como novas formas de lidar com essas questões aparecem no cotidiano.", badge: "Acompanhamento" },
];

export default function Method() {
  return (
    <section id="metodologia" className="method-story relative border-t border-zinc-100 bg-white py-24 lg:py-36">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <span className="editorial-label">Como funciona</span>
            <h2 className="mt-4 max-w-lg text-4xl font-semibold leading-[0.98] tracking-[-0.05em] text-black sm:text-5xl lg:text-6xl">Um processo que <span className="font-serif font-normal italic text-zinc-500">ganha direção</span> com o tempo.</h2>
            <p className="mt-6 max-w-md text-base font-light leading-relaxed text-zinc-600">Da primeira mensagem às sessões seguintes, cada etapa ajuda a tornar mais claro o que precisa de atenção naquele momento.</p>
            <a data-cursor-label="Perguntar" href={buildWhatsAppLink("Olá, Dr. Cristiano! Gostaria de saber como funciona a primeira consulta e consultar horários.")} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8 px-7 py-3.5 text-xs">Perguntar sobre a primeira consulta</a>
          </div>

          <div className="method-timeline relative">
            <div className="method-timeline-line" aria-hidden="true" />
            {METHOD_STEPS.map((step, idx) => (
              <article key={step.num} className="method-step relative grid gap-5 border-t border-zinc-200/80 py-8 first:border-t-0 sm:grid-cols-[110px_1fr] sm:gap-8 sm:py-10 lg:min-h-[230px] lg:items-start" data-cursor-label={`Etapa ${step.num}`}>
                <div className="relative">
                  <span className="method-step-number block font-serif text-[4.8rem] italic leading-[0.78] tracking-[-0.07em] text-zinc-200 sm:text-[6.6rem]">{step.num}</span>
                  <span className="method-step-dot" aria-hidden="true" />
                </div>
                <div className="pt-1 sm:pt-2">
                  <div className="flex flex-wrap items-center gap-3"><span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-zinc-400">Etapa {String(idx + 1).padStart(2, "0")}</span><span className="h-px w-8 bg-zinc-200" /><span className="text-[10px] text-zinc-400">{step.badge}</span></div>
                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.035em] text-black sm:text-3xl">{step.title}</h3>
                  <p className="mt-4 max-w-xl text-sm font-light leading-relaxed text-zinc-600 sm:text-base">{step.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
