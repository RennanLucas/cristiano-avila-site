import { PROFESSIONAL_REGISTRATION } from "@/lib/site-policy";

const CREDENTIALS = [
  { label: "Registro profissional", value: PROFESSIONAL_REGISTRATION, detail: "Psicologia clínica", accent: "from-sky-300/80 via-cyan-200/45 to-transparent" },
  { label: "Experiência", value: "+10 anos", detail: "Atuação clínica e institucional", accent: "from-fuchsia-300/80 via-violet-200/45 to-transparent" },
  { label: "Atendimento presencial", value: "4 cidades", detail: "Praia Grande • Atibaia • SBC • Santos", accent: "from-amber-200/90 via-orange-200/45 to-transparent" },
  { label: "Formação complementar", value: "OMNI", detail: "Hipnoterapia clínica", accent: "from-emerald-200/80 via-teal-200/40 to-transparent" },
];

function CredentialIcon({ index }: { index: number }) {
  const common = "h-[18px] w-[18px]";
  if (index === 0) return <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M12 3 6.5 5v5.2c0 4 2.3 7.6 5.5 9.1 3.2-1.5 5.5-5.1 5.5-9.1V5L12 3Z" strokeWidth="1.55" /><path d="m9.4 11.9 1.6 1.6 3.7-4" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  if (index === 1) return <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><circle cx="12" cy="12" r="7.5" strokeWidth="1.55" /><path d="M12 8v4.4l2.8 1.7" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  if (index === 2) return <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M12 20s5-4.6 5-9a5 5 0 1 0-10 0c0 4.4 5 9 5 9Z" strokeWidth="1.55" /><circle cx="12" cy="11" r="1.8" strokeWidth="1.55" /></svg>;
  return <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M7 4.5h8.5A1.5 1.5 0 0 1 17 6v12H8a2 2 0 0 1-2-2V5.5A1 1 0 0 1 7 4.5Z" strokeWidth="1.55" /><path d="M9.5 8h4.5M9.5 11h4.5M9.5 14h3" strokeWidth="1.55" strokeLinecap="round" /></svg>;
}

export default function TrustBadges() {
  return (
    <div className="mx-auto w-full max-w-6xl">
      <section className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#101012] p-2.5 text-white shadow-[0_42px_120px_rgba(0,0,0,0.22)] sm:rounded-[34px] sm:p-3">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(217,70,239,0.10),transparent_34%),radial-gradient(circle_at_92%_100%,rgba(251,191,36,0.08),transparent_31%)]" />
        <div className="pointer-events-none absolute inset-0 soft-grid opacity-[0.045]" />
        <div className="relative z-10 overflow-hidden rounded-[23px] border border-white/[0.07] bg-white/[0.025] sm:rounded-[29px]">
          <div className="grid gap-7 border-b border-white/[0.07] px-5 py-7 sm:px-8 sm:py-9 lg:grid-cols-[1.1fr_.9fr] lg:items-end lg:px-10 lg:py-10">
            <div className="max-w-2xl"><div className="flex items-center gap-3"><span className="h-px w-7 bg-white/20" /><span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/45 sm:text-[10px]">Perfil profissional</span></div><h2 className="mt-4 max-w-xl text-[1.6rem] font-semibold leading-[1.03] tracking-[-0.045em] text-white sm:text-3xl lg:text-[2.15rem]">Credenciais e formas de atendimento</h2></div>
            <div className="lg:justify-self-end lg:text-right"><p className="max-w-lg text-[11px] font-light leading-[1.75] text-white/58 sm:text-[13px]">Psicologia clínica com atendimento presencial e online, experiência profissional e formação complementar em hipnoterapia.</p><div className="mt-4 flex items-center gap-2 lg:justify-end"><span className="h-1.5 w-1.5 rounded-full bg-white/30" /><span className="text-[9px] font-medium uppercase tracking-[0.16em] text-white/32">Atendimento profissional</span></div></div>
          </div>

          <div className="grid gap-2.5 p-2.5 min-[390px]:grid-cols-2 sm:gap-3 sm:p-3 lg:grid-cols-4">
            {CREDENTIALS.map((item, index) => (
              <article key={item.label} className="group relative min-h-[172px] overflow-hidden rounded-[20px] border border-white/[0.07] bg-white/[0.032] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.025)] transition-[transform,background-color,border-color,box-shadow] duration-300 md:hover:-translate-y-1.5 md:hover:border-white/[0.12] md:hover:bg-white/[0.052] md:hover:shadow-[0_22px_55px_rgba(0,0,0,0.20)] sm:min-h-[205px] sm:rounded-[22px] sm:p-6">
                <div className="pointer-events-none absolute -right-14 -top-14 h-32 w-32 rounded-full border border-white/[0.055] bg-white/[0.018] transition-transform duration-700 group-hover:scale-125" />
                <div className="relative z-10 flex h-full flex-col"><div className="flex items-center justify-between gap-4"><span className="font-mono text-[9px] tracking-[0.1em] text-white/28 sm:text-[10px]">{String(index + 1).padStart(2, "0")}</span><span className="flex h-9 w-9 items-center justify-center rounded-[14px] border border-white/[0.09] bg-white/[0.035] text-white/48 transition-all duration-300 group-hover:scale-105 group-hover:text-white/85 sm:h-10 sm:w-10"><CredentialIcon index={index} /></span></div><div className="mt-auto pt-7 sm:pt-9"><span className="block text-[8px] font-semibold uppercase tracking-[0.17em] text-white/44 sm:text-[9px]">{item.label}</span><strong className="mt-2.5 block text-[1.22rem] font-semibold leading-tight tracking-[-0.035em] text-white sm:text-[1.55rem]">{item.value}</strong><span className="mt-2.5 block text-[10px] font-light leading-relaxed text-white/54 sm:text-[11px]">{item.detail}</span></div></div>
                <div className={`absolute inset-x-5 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r ${item.accent} transition-transform duration-500 group-hover:scale-x-100 sm:inset-x-6`} />
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
