import { CLINIC_CONTACT } from "@/data/content";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 lg:py-28 bg-zinc-50 border-y border-zinc-200/70">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-10 lg:gap-16 items-center">
          <div>
            <span className="text-[11px] font-semibold tracking-[0.16em] text-zinc-500 uppercase">Referências públicas</span>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-black mt-3 mb-5">
              Consulte avaliações em plataformas independentes
            </h2>
            <p className="text-zinc-600 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
              Para preservar a privacidade de pacientes e evitar exposição de experiências clínicas no próprio site, avaliações públicas podem ser consultadas diretamente nas plataformas onde foram registradas.
            </p>
          </div>

          <div className="grid gap-4">
            <a href={CLINIC_CONTACT.doctoraliaUrl} target="_blank" rel="noopener noreferrer" className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-zinc-300 transition-all">
              <span className="block text-[10px] uppercase tracking-widest font-semibold text-zinc-400 mb-2">Plataforma externa</span>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-black">Doctoralia</h3>
                  <p className="text-sm text-zinc-500 mt-1">Ver perfil profissional e avaliações publicadas na plataforma.</p>
                </div>
                <span className="text-xl text-zinc-400 group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
              </div>
            </a>

            <a href={CLINIC_CONTACT.zenklubUrl} target="_blank" rel="noopener noreferrer" className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-zinc-300 transition-all">
              <span className="block text-[10px] uppercase tracking-widest font-semibold text-zinc-400 mb-2">Plataforma externa</span>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-black">Zenklub</h3>
                  <p className="text-sm text-zinc-500 mt-1">Consultar informações disponíveis no perfil externo.</p>
                </div>
                <span className="text-xl text-zinc-400 group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
