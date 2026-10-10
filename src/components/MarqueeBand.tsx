const ITEMS = [
  "PSICOLOGIA CLÍNICA",
  "PRESENCIAL",
  "ONLINE",
  "PRAIA GRANDE",
  "SANTOS",
  "SÃO BERNARDO",
  "ATIBAIA",
  "CRP 06/119186",
];

export default function MarqueeBand() {
  const line = [...ITEMS, ...ITEMS];

  return (
    <div className="editorial-marquee border-y border-zinc-200/80 bg-white" aria-label="Informações do atendimento">
      <div className="editorial-marquee-track">
        {line.map((item, index) => (
          <span key={`${item}-${index}`} className="editorial-marquee-item">
            <span>{item}</span>
            <span className="editorial-marquee-dot" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
