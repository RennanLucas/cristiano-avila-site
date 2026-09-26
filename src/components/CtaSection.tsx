import { CLINIC_CONTACT, buildWhatsAppLink } from "@/data/contact-lite";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-black py-24 text-white lg:py-32">
      <div className="pointer-events-none absolute inset-0 soft-grid opacity-[0.08]" />
      <div aria-hidden="true" className="cta-orbit pointer-events-none absolute left-1/2 top-1/2 hidden h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07] md:block">
        <span className="absolute left-1/2 top-[-5px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-white/30 shadow-[0_0_25px_rgba(255,255,255,0.35)]" />
      </div>
      <div aria-hidden="true" className="cta-orbit-reverse pointer-events-none absolute left-1/2 top-1/2 hidden h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06] md:block">
        <span className="absolute right-8 top-8 h-2 w-2 rounded-full bg-fuchsia-300/50 shadow-[0_0_28px_rgba(240,171,252,0.5)]" />
      </div>
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/[0.07] blur-[90px] sm:h-[380px] sm:w-[380px]" />
      <div className="pointer-events-none absolute left-[58%] top-[48%] hidden h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300/[0.06] blur-[95px] sm:block" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.045] p-6 text-center shadow-[0_32px_90px_rgba(0,0,0,0.34)] sm:rounded-[34px] sm:p-10 sm:backdrop-blur-xl lg:p-14">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40">Agenda</span>
            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-4xl lg:text-6xl">Quer consultar horários para uma primeira sessão?</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base font-light leading-relaxed text-white/60 lg:text-lg">Envie uma mensagem pelo WhatsApp, escolha entre presencial ou online e veja as opções disponíveis.</p>
          </div>

          <div className="mt-9">
            <a href={buildWhatsAppLink("Olá, Dr. Cristiano! Gostaria de consultar os horários disponíveis para uma primeira sessão.")} target="_blank" rel="noopener noreferrer" className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-xs font-semibold text-black shadow-[0_18px_50px_rgba(255,255,255,0.12)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(255,255,255,0.16)] active:translate-y-0 sm:w-auto sm:px-8">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.913.913l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.675-.839-6.481-2.373l-.388-.322-2.65.889.889-2.65-.322-.388A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" /></svg>
              <span>Consultar pelo WhatsApp</span>
              <span className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">→</span>
            </a>
          </div>

          <div className="relative mt-10 grid gap-3 border-t border-white/10 pt-7 sm:grid-cols-3">
            <a href={`tel:+${CLINIC_CONTACT.phoneRaw}`} className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-4 text-left transition-colors duration-200 hover:bg-white/[0.07]">
              <span className="block text-[9px] font-semibold uppercase tracking-[0.16em] text-white/35">Telefone</span>
              <strong className="mt-1.5 block text-sm font-medium text-white">{CLINIC_CONTACT.phone}</strong>
            </a>
            <a href={`mailto:${CLINIC_CONTACT.email}`} className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-4 text-left transition-colors duration-200 hover:bg-white/[0.07]">
              <span className="block text-[9px] font-semibold uppercase tracking-[0.16em] text-white/35">E-mail</span>
              <strong className="mt-1.5 block truncate text-sm font-medium text-white">{CLINIC_CONTACT.email}</strong>
            </a>
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-4 text-left">
              <span className="block text-[9px] font-semibold uppercase tracking-[0.16em] text-white/35">Consultas</span>
              <strong className="mt-1.5 block text-sm font-medium text-white">Presencial & online</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
