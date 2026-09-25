export default function TrustBadges() {
  const badges = [
    {
      title: "Registro Profissional Ativo",
      subtitle: "Conselho Regional de Psicologia (CRP SP)",
      description: "Prática em estrita conformidade com o Código de Ética Profissional.",
      icon: (
        <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Resolução CFP nº 11/2018",
      subtitle: "Terapia Online Habilitada",
      description: "Atendimento remoto regulamentado com criptografia ponta a ponta.",
      icon: (
        <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
    {
      title: "OMNI Training Center",
      subtitle: "Padrão Suíço ISO 9001",
      description: "Certificação internacional de excelência em hipnoterapia clínica.",
      icon: (
        <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      title: "Sigilo & LGPD Rigorosa",
      subtitle: "Privacidade Garantida",
      description: "Prontuário sob sigilo médico legal absoluto e proteção de dados.",
      icon: (
        <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-12 border-y border-zinc-100 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-50/70 border border-zinc-100 hover:border-zinc-200 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200/80 flex items-center justify-center shrink-0 shadow-sm">
                {badge.icon}
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold text-black tracking-tight leading-tight">
                  {badge.title}
                </p>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                  {badge.subtitle}
                </p>
                <p className="text-[11px] text-textMuted leading-relaxed font-light">
                  {badge.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
