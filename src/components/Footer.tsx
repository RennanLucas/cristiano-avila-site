import Link from 'next/link';
import { CLINIC_CONTACT, SPECIALTIES_DATA, UNITS_DATA } from '@/data/content';

export default function Footer() {
  return (
    <footer className="bg-[#F8F8F5] pt-20 pb-12 border-t border-[#18363B]/10 text-[#1C2628]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-[#18363B]/10">
          
          {/* Col 1: Brand & Credibility (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div>
              <Link href="/" className="inline-block">
                <span className="font-serif text-2xl lg:text-3xl text-[#18363B] font-semibold tracking-tight">
                  Cristiano <span className="text-[#B7925A]">Ávila</span>
                </span>
              </Link>
              <p className="text-xs uppercase tracking-widest text-[#B7925A] font-semibold mt-1">
                Psicólogo & Hipnoterapeuta Clínico
              </p>
            </div>

            <p className="text-[#667174] text-sm leading-relaxed max-w-sm font-light">
              Atendimento psicológico clínico fundamentado em evidências científicas, escuta humanizada e estratégias integradas para a saúde mental e o desenvolvimento pessoal.
            </p>

            <div className="space-y-1.5 text-xs text-[#667174]">
              <p>• Certificação Internacional pela <strong>OMNI Training Center</strong></p>
              <p>• Atuação presencial em 4 cidades do Estado de São Paulo</p>
              <p>• Atendimento online para pacientes no Brasil e exterior</p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={CLINIC_CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#18363B]/15 flex items-center justify-center text-[#18363B] hover:border-[#B7925A] hover:text-[#B7925A] transition-colors shadow-sm"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a
                href={CLINIC_CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#18363B]/15 flex items-center justify-center text-[#18363B] hover:border-[#B7925A] hover:text-[#B7925A] transition-colors shadow-sm"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>

              <a
                href={CLINIC_CONTACT.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#18363B]/15 flex items-center justify-center text-[#18363B] hover:border-[#B7925A] hover:text-[#B7925A] transition-colors shadow-sm"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>

              <a
                href={CLINIC_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center hover:bg-emerald-700 transition-colors shadow-sm"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.913.913l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.675-.839-6.481-2.373l-.388-.322-2.65.889.889-2.65-.322-.388A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
              </a>
            </div>

            {/* Portals Badges */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={CLINIC_CONTACT.doctoraliaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-semibold text-[#18363B] bg-white border border-[#18363B]/15 px-3 py-1.5 rounded-full hover:border-[#B7925A] transition-colors"
              >
                Perfil Doctoralia
              </a>
              <a
                href={CLINIC_CONTACT.zenklubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-semibold text-[#18363B] bg-white border border-[#18363B]/15 px-3 py-1.5 rounded-full hover:border-[#B7925A] transition-colors"
              >
                Perfil Zenklub
              </a>
            </div>
          </div>

          {/* Col 2: Navegação (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-lg text-[#18363B] font-semibold">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm text-[#667174]">
              <li><Link href="/" className="hover:text-[#B7925A] transition-colors">Início</Link></li>
              <li><Link href="/sobre" className="hover:text-[#B7925A] transition-colors">Sobre Cristiano Ávila</Link></li>
              <li><Link href="/especialidades" className="hover:text-[#B7925A] transition-colors">Especialidades</Link></li>
              <li><Link href="/#metodo" className="hover:text-[#B7925A] transition-colors">Método Clínico</Link></li>
              <li><Link href="/unidades" className="hover:text-[#B7925A] transition-colors">Unidades Presenciais</Link></li>
              <li><Link href="/blog" className="hover:text-[#B7925A] transition-colors">Blog & Artigos</Link></li>
              <li><Link href="/contato" className="hover:text-[#B7925A] transition-colors">Fale Conosco</Link></li>
            </ul>
          </div>

          {/* Col 3: Especialidades (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg text-[#18363B] font-semibold">
              Especialidades
            </h4>
            <ul className="space-y-2.5 text-sm text-[#667174]">
              {SPECIALTIES_DATA.map((s) => (
                <li key={s.id}>
                  <Link href={`/especialidades/${s.slug}`} className="hover:text-[#B7925A] transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contato & Unidades (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg text-[#18363B] font-semibold">
              Contato & Agendamento
            </h4>
            
            <div className="space-y-3 text-sm text-[#667174]">
              <p className="flex items-center gap-2">
                <span className="font-semibold text-[#18363B]">WhatsApp:</span>
                <a href={CLINIC_CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#B7925A] font-medium text-[#18363B]">
                  {CLINIC_CONTACT.phone}
                </a>
              </p>
              <p className="text-xs break-all">
                <span className="font-semibold text-[#18363B] block mb-0.5">E-mail:</span>
                <a href={`mailto:${CLINIC_CONTACT.email}`} className="hover:text-[#B7925A]">
                  {CLINIC_CONTACT.email}
                </a>
              </p>
            </div>

            <div className="pt-3 border-t border-gray-200">
              <h5 className="text-xs font-semibold uppercase tracking-wider text-[#18363B] mb-2">
                Consultórios Presenciais:
              </h5>
              <div className="grid grid-cols-2 gap-2 text-xs text-[#667174]">
                {UNITS_DATA.map((u) => (
                  <Link key={u.id} href="/unidades" className="hover:text-[#B7925A] transition-colors">
                    • {u.city} ({u.state})
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & LGPD */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#667174]">
          <p>
            © {new Date().getFullYear()} Cristiano Ávila da Silva. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/politica-de-privacidade" className="hover:text-[#B7925A] transition-colors">
              Política de Privacidade (LGPD)
            </Link>
            <Link href="/contato" className="hover:text-[#B7925A] transition-colors">
              Termos de Atendimento
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
