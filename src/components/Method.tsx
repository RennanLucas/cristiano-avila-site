import { buildWhatsAppLink } from "@/data/content";

const METHOD_STEPS = [
  {
    num: "01",
    title: "Primeiro contato",
    desc: "Você consulta horários, modalidade e local de preferência pelo WhatsApp. Não é necessário explicar toda a sua história nesse primeiro momento.",
    badge: "Agenda & informações",
  },
  {
    num: "02",
    title: "Primeira sessão",
    desc: "A conversa começa pelo motivo da procura, pelo que está acontecendo agora e por informações da história que ajudam a compreender melhor a situação.",
    badge: "Escuta inicial",
  },
  {
    num: "03",
    title: "Definição de foco",
    desc: "Com o avanço das conversas, ficam mais claros os temas prioritários da terapia e os pontos que merecem ser trabalhados com maior profundidade.",
    badge: "Direção clínica",
  },
  {
    num: "04",
    title: "Continuidade",
    desc: "As sessões seguintes acompanham o que muda, o que ainda se repete e como novas formas de lidar com essas questões aparecem no cotidiano.",
    badge: "Acompanhamento",
  },
];

export default function Method() {
  return (
    <section id="metodologia" className="relative overflow-hidden border-t border-zinc-100 bg-white py-24 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-24 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-zinc-100/80 blur-[120px]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="editorial-label">Como funciona</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-black md:text-5xl">Da primeira mensagem às sessões seguintes.</h2>
          <p className="mt-5 text-base font-light leading-relaxed text-zinc-600 sm:text-lg">Um caminho simples para entender como começa o contato e o que acontece depois que a terapia é iniciada.</p>
        </div>

        <div className="relative">
          <div className="absolute left-[7%] right-[7%] top-8 hidden h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent lg:block" />
          <div className="absolute left-[12%] right-[12%] top-8 hidden h-px bg-black lg:block" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {METHOD_STEPS.map((step, idx) => (
              <article key={step.num} className="group relative transition-transform duration-300 md:hover:-translate-y-2">
                <div className="relative z-10 mb-5 ml-6 flex h-16 w-16 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-[0_14px_38px_rgba(0,0,0,0.09)] transition-all duration-300 group-hover:scale-105 group-hover:bg-black group-hover:text-white lg:mx-auto">
                  <span className="font-mono text-sm font-semibold">{step.num}</span>
                  <span className="absolute inset-[-7px] rounded-full border border-zinc-100 transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="premium-card relative min-h-[250px] overflow-hidden rounded-[26px] p-7">
                  <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-zinc-100 transition-transform duration-700 group-hover:scale-125" />
                  <div className="pointer-events-none absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-amber-100/45 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative z-10"><span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-zinc-400">Etapa {String(idx + 1).padStart(2, "0")}</span><h3 className="mt-4 text-xl font-semibold tracking-[-0.025em] text-black">{step.title}</h3><p className="mt-4 text-sm font-light leading-relaxed text-zinc-600">{step.desc}</p></div>
                  <div className="relative z-10 mt-7 border-t border-zinc-200/70 pt-4 text-[11px] font-light leading-relaxed text-zinc-500">{step.badge}</div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a href={buildWhatsAppLink("Olá, Dr. Cristiano! Gostaria de saber como funciona a primeira consulta e consultar horários.")} target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-3.5 text-xs">Perguntar sobre a primeira consulta</a>
        </div>
      </div>
    </section>
  );
}
