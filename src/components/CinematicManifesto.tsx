export default function CinematicManifesto() {
  return (
    <section id="perspectiva" data-tone="dark" className="manifesto-section relative overflow-hidden bg-[#090909] text-white">
      <div className="manifesto-grid pointer-events-none absolute inset-0" />
      <div className="manifesto-glow pointer-events-none absolute left-[14%] top-[18%] h-[28rem] w-[28rem] rounded-full bg-white/[0.055] blur-[110px]" />
      <div className="relative z-10 mx-auto flex min-h-[78svh] max-w-7xl items-center px-4 py-24 sm:px-6 lg:min-h-[92svh] lg:py-32">
        <div className="grid w-full gap-14 lg:grid-cols-[0.34fr_1fr] lg:items-start lg:gap-20">
          <div className="lg:sticky lg:top-32">
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40">Perspectiva clínica</span>
            <div className="mt-6 h-px w-20 bg-white/20" />
            <p className="mt-6 max-w-xs text-sm font-light leading-relaxed text-white/45">Nem toda resposta aparece rápido. Às vezes, o primeiro movimento é criar espaço para observar com mais clareza.</p>
          </div>

          <div className="relative">
            <span className="manifesto-number pointer-events-none absolute -left-5 -top-14 font-serif text-[8rem] leading-none text-white/[0.035] sm:text-[11rem] lg:-left-16 lg:-top-24 lg:text-[16rem]">01</span>
            <h2 className="manifesto-heading max-w-5xl text-[2.7rem] font-medium leading-[0.95] tracking-[-0.055em] text-white min-[390px]:text-5xl sm:text-6xl lg:text-[6.2rem]">
              <span className="manifesto-line block">Compreender antes de</span>
              <span className="manifesto-line block font-serif italic text-white/78">apressar uma resposta.</span>
            </h2>
            <div className="mt-10 grid gap-7 border-t border-white/10 pt-8 sm:grid-cols-2 lg:mt-14 lg:gap-12 lg:pt-10">
              <p className="max-w-xl text-base font-light leading-relaxed text-white/55 sm:text-lg">A terapia pode oferecer uma pausa na velocidade do cotidiano: um lugar para reconhecer padrões, organizar experiências e perceber o que se repete.</p>
              <p className="max-w-xl text-base font-light leading-relaxed text-white/55 sm:text-lg">O trabalho acontece pela conversa clínica e pela observação do que surge em sessão, sem fórmulas prontas e sem transformar cada dificuldade em uma resposta automática.</p>
            </div>
            <div className="mt-10 flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
              <span className="h-px w-12 bg-white/20" />
              Escuta • clareza • continuidade
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
