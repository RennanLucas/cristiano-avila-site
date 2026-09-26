import Image from "next/image";
import Link from "next/link";
import { CLINIC_CONTACT } from "@/data/content";
import { PROFESSIONAL_REGISTRATION } from "@/lib/site-policy";

const EXPERIENCES = ["Psicologia Clínica","Hipnoterapia Clínica","Neurociência & comportamento","Psicologia Institucional","Educação em Saúde Mental","Palestras & Treinamentos","Produção de Conteúdo"];

export default function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-[#F6F6F4] py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 soft-grid opacity-[0.22] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />
      <div className="aurora-orb absolute -left-28 top-16 h-80 w-80 rounded-full bg-sky-100/60 blur-[105px]" />
      <div className="aurora-orb aurora-orb-delayed absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-amber-100/65 blur-[105px]" />
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-[470px] lg:sticky lg:top-28 lg:max-w-none">
              <div className="pointer-events-none absolute -inset-5 rounded-[2.6rem] bg-gradient-to-br from-white/90 via-white/20 to-zinc-200/40 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2.4rem] border border-white/80 bg-zinc-100 shadow-[0_38px_100px_rgba(0,0,0,0.13)] ring-1 ring-black/[0.04]">
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image src={CLINIC_CONTACT.avatarUrl} alt="Cristiano Ávila da Silva" fill sizes="(max-width: 1024px) 90vw, 520px" className="object-cover object-top transition-transform duration-[1000ms] md:hover:scale-[1.025]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-8"><span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/45">Perfil profissional</span><p className="mt-2 text-2xl font-semibold tracking-[-0.025em]">Cristiano Ávila da Silva</p><p className="mt-1 text-sm text-white/65">Psicólogo Clínico • {PROFESSIONAL_REGISTRATION}</p></div>
                </div>
              </div>
              <div className="floating-card absolute -left-3 top-[16%] hidden rounded-2xl px-4 py-3 premium-glass sm:block lg:-left-10"><span className="block text-[9px] font-semibold uppercase tracking-[0.16em] text-zinc-400">Experiência</span><strong className="mt-1 block text-sm font-semibold text-black">+10 anos</strong></div>
              <div className="floating-card floating-card-delayed absolute -right-3 bottom-[16%] hidden rounded-2xl px-4 py-3 premium-dark text-white sm:block lg:-right-8"><span className="block text-[9px] font-semibold uppercase tracking-[0.16em] text-white/40">Formação complementar</span><strong className="mt-1 block text-sm font-semibold">OMNI Training Center</strong></div>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pt-6">
            <div><span className="editorial-label">Sobre o profissional</span><h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-[1.04] tracking-[-0.045em] text-black sm:text-4xl lg:text-6xl">Uma prática clínica construída com escuta, contexto e individualização.</h2><p className="mt-6 max-w-2xl text-base font-light leading-relaxed text-zinc-600 sm:text-lg">Cristiano Ávila atua em Psicologia Clínica e possui formação complementar em áreas relacionadas ao comportamento humano, neurociência e hipnoterapia.</p></div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[{num:"01",title:"Condução individualizada",text:"O acompanhamento considera a demanda apresentada, o contexto de vida e os limites técnicos e éticos do exercício profissional.",dark:false},{num:"02",title:"Experiência institucional",text:"A trajetória inclui experiência junto à Fundação Casa Atibaia, além de atividades de educação em saúde mental e palestras.",dark:true}].map((item) => (
                <article key={item.num} className={`${item.dark ? "premium-dark text-white" : "premium-glass text-black"} relative min-h-[245px] overflow-hidden rounded-[28px] p-7 transition-transform duration-300 md:hover:-translate-y-1.5`}>
                  <div className={`pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full border ${item.dark ? "border-white/10 bg-white/[0.03]" : "border-zinc-200/60 bg-white/45"}`} />
                  <span className={`font-mono text-[10px] ${item.dark ? "text-white/30" : "text-zinc-400"}`}>{item.num}</span><h3 className={`mt-12 text-xl font-semibold tracking-[-0.025em] ${item.dark ? "text-white" : "text-black"}`}>{item.title}</h3><p className={`mt-3 text-sm font-light leading-relaxed ${item.dark ? "text-white/55" : "text-zinc-600"}`}>{item.text}</p>
                </article>
              ))}
            </div>
            <div className="mt-10 border-t border-zinc-200/80 pt-8">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div><span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-400">Áreas de atuação e experiência</span><div className="mt-4 flex max-w-3xl flex-wrap gap-2">{EXPERIENCES.map((exp) => <span key={exp} className="rounded-full border border-zinc-200 bg-white/80 px-3.5 py-2 text-[11px] font-medium text-zinc-600 shadow-sm md:backdrop-blur">{exp}</span>)}</div></div>
                <Link href="/sobre" className="btn-primary shrink-0 px-6 py-3 text-xs">Ver perfil completo <span className="ml-2" aria-hidden="true">↗</span></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
