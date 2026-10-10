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
    <section id="faq" className="faq-editorial relative overflow-hidden bg-[#f7f7f5] py-20 sm:py-24 lg:py-36">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.62fr_1.38fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <span className="editorial-label">Perguntas frequentes</span>
            <h2 className="mt-4 max-w-lg text-4xl font-semibold leading-[0.98] tracking-[-0.05em] text-black sm:text-5xl lg:text-6xl">Antes de marcar, <span className="font-serif font-normal italic text-zinc-500">vale saber.</span></h2>
            <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-zinc-600 sm:text-base">Informações práticas sobre primeira sessão, online, hipnose clínica, duração, reembolso e consultórios.</p>
            <a data-cursor-label="Perguntar" href={buildWhatsAppLink("Olá! Tenho uma dúvida sobre a consulta e gostaria de mais informações.")} target="_blank" rel="noopener noreferrer" className="btn-outline mt-8 px-6 py-3 text-xs">Fazer outra pergunta</a>
          </div>

          <div className="border-t border-black/10">
            {FAQ_ITEMS.map((item, idx) => (
              <details key={item.question} open={idx === 0} className="faq-row group border-b border-black/10" data-cursor-label="Abrir">
                <summary className="grid cursor-pointer list-none gap-4 py-7 text-left sm:grid-cols-[62px_1fr_auto] sm:items-start sm:gap-6 sm:py-9 [&::-webkit-details-marker]:hidden">
                  <span className="font-serif text-3xl italic leading-none text-zinc-300 sm:text-4xl">{String(idx + 1).padStart(2, "0")}</span>
                  <span className="min-w-0"><span className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.18em] text-zinc-400">{item.category}</span><span className="block max-w-3xl text-xl font-semibold leading-tight tracking-[-0.035em] text-black sm:text-2xl lg:text-3xl">{item.question}</span></span>
                  <span className="faq-plus flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-300 text-lg text-black transition-all duration-200 group-open:rotate-45 group-open:bg-black group-open:text-white" aria-hidden="true">+</span>
                </summary>
                <div className="faq-answer pb-8 pl-0 pr-0 text-sm font-light leading-relaxed text-zinc-600 sm:pb-10 sm:pl-[88px] sm:pr-20 sm:text-base"><div className="max-w-2xl">{item.answer}</div></div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
