import Link from "next/link";
import { buildWhatsAppLink } from "@/data/content";

const PRINCIPLES = [
  { number: "01", label: "Escuta", title: "Entender o que está acontecendo", text: "As primeiras conversas ajudam a organizar a queixa, reconhecer padrões e perceber o que hoje merece mais atenção.", dark: false },
  { number: "02", label: "Clareza", title: "Dar nome ao que se repete", text: "Pensamentos, emoções, relações e situações do cotidiano podem ser observados com mais distância e compreensão.", dark: true },
  { number: "03", label: "Prática", title: "Levar a terapia para a vida real", text: "O que aparece nas sessões pode abrir novas formas de lidar com escolhas, limites, conflitos e mudanças fora do consultório.", dark: false },
];

export default function Intro() {
  return (
    <section className="relative overflow-hidden border-t border-zinc-100 bg-white py-24 lg:py-32">
      <div className="pointer-events-none absolute right-[-10rem] top-24 h-80 w-80 rounded-full bg-zinc-100 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-0 left-[-8rem] h-72 w-72 rounded-full bg-amber-50 blur-[100px]" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-8 lg:col-span-6">
            <div>
              <span className="editorial-label">Na prática</span>
              <h2 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-[-0.045em] text-black sm:text-4xl lg:text-5xl">Terapia também é aprender a enxergar com mais clareza o que hoje parece confuso.</h2>
              <p className="mt-5 max-w-xl text-base font-light leading-relaxed text-zinc-500 min-[390px]:text-lg">A sessão oferece tempo e espaço para conversar sobre o que está acontecendo, sem precisar chegar com tudo organizado ou saber exatamente por onde começar.</p>
            </div>
            <div className="max-w-xl space-y-5 text-base font-light leading-relaxed text-zinc-600 lg:text-lg">
              <p>Questões emocionais, conflitos, mudanças importantes, padrões de comportamento e dificuldades nos relacionamentos podem ganhar outra leitura quando são examinados com calma.</p>
              <p>Quando fizer sentido, a condução pode incluir recursos da <strong className="font-medium text-black">psicologia clínica, neurociência e hipnoterapia</strong> como parte do trabalho realizado em sessão.</p>
            </div>
            <div className="flex flex-col items-stretch gap-3 pt-2 sm:flex-row sm:items-center">
              <Link href="/sobre" className="btn-outline px-6 py-3 text-center text-xs">Conhecer o profissional</Link>
              <a href={buildWhatsAppLink("Olá, Dr. Cristiano! Gostaria de entender melhor como funciona a primeira consulta.")} target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3 text-center text-xs">Como funciona a primeira consulta?</a>
            </div>
          </div>

          <div className="relative lg:col-span-6 lg:min-h-[560px]">
            <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-100 lg:block" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-100 lg:block" />
            <div className="grid gap-4 sm:grid-cols-2 lg:block">
              {PRINCIPLES.map((item, idx) => (
                <article key={item.number} className={`${item.dark ? "premium-dark text-white" : "premium-glass text-black"} relative overflow-hidden rounded-[28px] p-7 transition-transform duration-300 md:hover:-translate-y-2 sm:p-8 ${idx === 2 ? "sm:col-span-2" : ""} lg:absolute lg:w-[68%] ${idx === 0 ? "lg:left-0 lg:top-0" : idx === 1 ? "lg:right-0 lg:top-[31%]" : "lg:bottom-0 lg:left-[7%]"}`}>
                  <div className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full border ${item.dark ? "border-white/10 bg-white/[0.03]" : "border-zinc-200/70 bg-white/45"}`} />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-4"><span className={`font-mono text-[10px] font-semibold ${item.dark ? "text-white/35" : "text-zinc-400"}`}>{item.number}</span><span className={`text-[9px] font-semibold uppercase tracking-[0.17em] ${item.dark ? "text-white/40" : "text-zinc-400"}`}>{item.label}</span></div>
                    <h3 className={`mt-8 text-xl font-semibold tracking-[-0.025em] ${item.dark ? "text-white" : "text-black"}`}>{item.title}</h3>
                    <p className={`mt-3 text-sm font-light leading-relaxed ${item.dark ? "text-white/60" : "text-zinc-600"}`}>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
