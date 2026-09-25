import Link from "next/link";
import { CLINIC_CONTACT, SPECIALTIES_DATA, UNITS_DATA } from "@/data/content";
import BreatheExercise from "./BreatheExercise";

export default function Footer() {
  return (
    <footer className="bg-[#FAFAFA] pt-20 pb-12 border-t border-zinc-200/80 text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-zinc-200/80">
          
          {/* Col 1: Brand & Credibility (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-zinc-200 bg-white">
                <img
                  src="/images/logo-icon.png"
                  alt="Logo Cristiano Ávila"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 leading-none">
                  Psicólogo
                </span>
                <span className="font-bold text-xl tracking-tight text-black leading-tight">
                  Cristiano Ávila
                </span>
              </div>
            </Link>

            <p className="text-textMuted text-xs leading-relaxed max-w-sm font-light">
              Atendimento psicológico clínico fundamentado em evidências científicas, escuta humanizada e estratégias integradas para a saúde mental e o desenvolvimento pessoal.
            </p>

            <div className="space-y-1.5 text-xs text-textMuted font-light">
              <p>• Certificação Internacional pela <strong>OMNI Training Center</strong></p>
              <p>• Atendimento presencial em 4 cidades de São Paulo</p>
              <p>• Atendimento online para pacientes no Brasil e exterior</p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2.5 pt-2 flex-wrap">
              <a
                href={CLINIC_CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-black hover:border-black transition-colors shadow-sm"
                aria-label="Instagram"
                title="Instagram @dr.cristianoavilla"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a
                href={CLINIC_CONTACT.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-red-600 hover:border-red-600 transition-colors shadow-sm"
                aria-label="Canal no YouTube"
                title="Canal Oficial no YouTube @cristianoavilapsi"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              <a
                href={CLINIC_CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-[#1877F2] hover:border-[#1877F2] transition-colors shadow-sm"
                aria-label="Facebook"
                title="Página no Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a
                href={CLINIC_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center hover:bg-emerald-700 transition-colors shadow-sm"
                aria-label="WhatsApp"
                title="WhatsApp Clínico"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.913.913l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.675-.839-6.481-2.373l-.388-.322-2.65.889.889-2.65-.322-.388A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navegação (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-black uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-textMuted font-light">
              <li><Link href="/" className="hover:text-black transition-colors">Início</Link></li>
              <li><Link href="/sobre" className="hover:text-black transition-colors">Sobre Dr. Cristiano Ávila</Link></li>
              <li><Link href="/#especialidades" className="hover:text-black transition-colors">Especialidades Clínicas</Link></li>
              <li><Link href="/#metodologia" className="hover:text-black transition-colors">Método Clínico</Link></li>
              <li><Link href="/unidades" className="hover:text-black transition-colors">Consultórios Presenciais</Link></li>
              <li><Link href="/#faq" className="hover:text-black transition-colors">Perguntas Frequentes</Link></li>
              <li><Link href="/contato" className="hover:text-black transition-colors">Fale Conosco</Link></li>
            </ul>
          </div>

          {/* Col 3: Especialidades (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-black uppercase tracking-wider">
              Especialidades
            </h4>
            <ul className="space-y-2 text-xs text-textMuted font-light">
              {SPECIALTIES_DATA.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <Link href={`/especialidades/${s.slug}`} className="hover:text-black transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contato & Unidades (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-black uppercase tracking-wider">
              Consultórios
            </h4>
            <ul className="space-y-2 text-xs text-textMuted font-light">
              {UNITS_DATA.map((u) => (
                <li key={u.id}>
                  <Link href={`/unidades#${u.id}`} className="hover:text-black transition-colors block">
                    {u.city} ({u.state})
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Breathe & LGPD */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-textMuted font-light">
          <p>
            © {new Date().getFullYear()} Cristiano Ávila da Silva. Todos os direitos reservados.
          </p>

          <BreatheExercise />

          <div className="flex items-center gap-6">
            <Link href="/politica-de-privacidade" className="hover:text-black transition-colors">
              Política de Privacidade (LGPD)
            </Link>
            <Link href="/politica-de-privacidade" className="hover:text-black transition-colors">
              Termos de Atendimento
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
