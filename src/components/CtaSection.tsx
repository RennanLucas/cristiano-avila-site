import { CLINIC_CONTACT, buildWhatsAppLink } from "@/data/contact-lite";

export default function CtaSection() {
  return (
    <section id="agenda" data-tone="dark" className="cta-cinematic relative overflow-hidden bg-black text-white">
      <div className="cta-cinematic-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.045] blur-[120px]" />
      <div className="relative z-10 mx-auto flex min-h-[82svh] max-w-7xl items-center px-4 py-24 sm:px-6 lg:min-h-[96svh] lg:py-32">
        <div className="w-full">
          <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[auto_1fr] lg:items-end lg:gap-16 lg:pb-14">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/35">Agenda</span>
              <div className="mt-4 h-px w-16 bg-white/20" />
            </div>
            <h2 className="max-w-5xl text-[2.9rem] font-medium leading-[0.92] tracking-[-0.06em] text-white min-[390px]:text-5xl sm:text-6xl lg:text-[7.1rem] xl:text-[8rem]">Talvez o primeiro passo seja <span className="font-serif font-normal italic text-white/62">simplesmente conversar.</span></h2>
          </div>

          <div className="grid gap-8 pt-9 lg:grid-cols-[1fr_auto] lg:items-end lg:pt-12">
            <div>
              <p className="max-w-2xl text-base font-light leading-relaxed text-white/52 sm:text-lg">Envie uma mensagem pelo WhatsApp, escolha entre presencial ou online e consulte os horários disponíveis para uma primeira sessão.</p>
              <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/30"><span>{CLINIC_CONTACT.phone}</span><span>Presencial & online</span></div>
            </div>

            <a data-cursor-label="Conversar" href={buildWhatsAppLink("Olá, Dr. Cristiano! Gostaria de consultar os horários disponíveis para uma primeira sessão.")} target="_blank" rel="noopener noreferrer" className="cta-circle group flex h-36 w-36 items-center justify-center rounded-full bg-white text-center text-xs font-semibold text-black transition-transform duration-300 hover:scale-[1.04] sm:h-40 sm:w-40 lg:h-44 lg:w-44">
              <span>Consultar<br />horários <span className="ml-1 inline-block transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span></span>
            </a>
          </div>

          <div className="mt-12 grid gap-3 border-t border-white/10 pt-7 sm:grid-cols-3 lg:mt-16">
            <a data-cursor-label="Ligar" href={`tel:+${CLINIC_CONTACT.phoneRaw}`} className="cta-meta-card"><span>Telefone</span><strong>{CLINIC_CONTACT.phone}</strong></a>
            <a data-cursor-label="WhatsApp" href={CLINIC_CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="cta-meta-card"><span>Contato</span><strong>WhatsApp direto</strong></a>
            <div className="cta-meta-card"><span>Formato</span><strong>Presencial & online</strong></div>
          </div>
        </div>
      </div>
    </section>
  );
}
