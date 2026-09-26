import { buildWhatsAppLink } from "@/data/content";
import { CURRENT_CITIES_TEXT } from "@/data/units";

const FAQ_ITEMS = [
  { category: "Primeira sessão", question: "O que acontece na primeira consulta?", answer: "A primeira sessão é uma conversa para entender o motivo da procura, o que está acontecendo agora e alguns pontos importantes da sua história. Também é um momento para conhecer a forma de trabalho do psicólogo e esclarecer dúvidas antes de seguir." },
  { category: "Online", question: "Como funciona a consulta por videochamada?", answer: "O atendimento online acontece por videoconferência, em horário agendado. É importante estar em um local reservado, com conexão estável e condições para conversar com privacidade. Os serviços psicológicos mediados por tecnologias digitais são regulamentados pela Resolução CFP nº 9/2024." },
  { category: "Hipnose clínica", question: "A pessoa perde o controle durante a hipnose?", answer: "Não. Na hipnose clínica, a pessoa permanece participativa e em comunicação durante a experiência. O recurso trabalha com atenção focalizada e relaxamento e pode ser utilizado como parte da psicoterapia quando fizer sentido para o trabalho realizado em sessão." },
  { category: "Pagamento", question: "O atendimento é particular? Posso pedir reembolso?", answer: "Os atendimentos são particulares. Quando necessário, é fornecida a documentação referente ao serviço prestado para que você consulte diretamente com o seu plano de saúde as regras e condições de reembolso." },
  { category: "Tempo de sessão", question: "Quanto tempo dura uma sessão?", answer: "As sessões individuais costumam durar cerca de 50 minutos. A periodicidade é combinada ao longo do processo e pode mudar conforme a evolução das conversas e a organização da agenda." },
  { category: "Consultórios", question: "Em quais cidades há atendimento presencial?", answer: `Há consultórios em ${CURRENT_CITIES_TEXT}. Na página de unidades você encontra endereço, Google Maps, Apple Maps e o link para consultar horários em cada cidade.` },
];

export default function FaqSection() {
  return (
    <section id="faq" className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute -left-28 top-24 h-80 w-80 rounded-full bg-zinc-100 blur-[110px]" />
      <div className="aurora-orb absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-sky-100/50 blur-[100px]" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div className="lg:self-start">
            <span className="editorial-label">Perguntas frequentes</span>
            <h2 className="mt-4 max-w-md text-3xl font-semibold leading-[1.05] tracking-[-0.045em] text-black sm:text-4xl lg:text-5xl">O que vale saber antes de marcar uma consulta.</h2>
            <p className="mt-5 max-w-md text-[15px] font-light leading-relaxed text-zinc-600 sm:text-base">Informações práticas sobre primeira sessão, atendimento online, hipnose clínica, duração, reembolso e consultórios.</p>
            <div className="mt-8 overflow-hidden rounded-[24px] premium-dark p-5 text-white min-[390px]:p-6 sm:mt-9 sm:rounded-[28px] sm:p-7">
              <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/35">Contato direto</span>
              <h3 className="mt-3 text-lg font-semibold tracking-[-0.025em] sm:text-xl">Sua dúvida não está aqui?</h3>
              <p className="mt-3 text-xs font-light leading-relaxed text-white/50">Envie uma mensagem para consultar horários ou perguntar algo específico sobre a consulta.</p>
              <a href={buildWhatsAppLink("Olá! Tenho uma dúvida sobre a consulta e gostaria de mais informações.")} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-[11px] font-semibold text-black transition-transform duration-200 md:hover:-translate-y-0.5 sm:w-auto">Falar no WhatsApp <span aria-hidden="true">↗</span></a>
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
