import Image from "next/image";
import Link from "next/link";
import { CLINIC_CONTACT, SPECIALTIES_DATA } from "@/data/content";
import { CURRENT_UNITS } from "@/data/units";
import { isPublicSpecialty, PROFESSIONAL_REGISTRATION } from "@/lib/site-policy";

export default function Footer() {
  const publicSpecialties = SPECIALTIES_DATA.filter((item) => isPublicSpecialty(item.id)).slice(0, 6);

  return (
    <footer className="bg-zinc-50 pt-20 pb-12 border-t border-zinc-200 text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-14 border-b border-zinc-200">
          <div className="lg:col-span-5 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-zinc-200 bg-white">
                <Image src="/images/logo-icon.png" alt="Símbolo da marca Cristiano Ávila" fill sizes="44px" className="object-cover" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase font-semibold tracking-[0.16em] text-zinc-500 leading-none">Psicólogo • {PROFESSIONAL_REGISTRATION}</span>
                <span className="font-semibold text-xl tracking-tight text-black leading-tight mt-1">{CLINIC_CONTACT.fullName}</span>
              </div>
            </Link>

            <p className="text-zinc-600 text-sm leading-relaxed max-w-md font-light">
              Atendimento psicológico presencial e online, com escuta qualificada e planejamento clínico individualizado.
            </p>

            <div className="text-xs text-zinc-500 space-y-1.5">
              <p>{CLINIC_CONTACT.phone}</p>
              <p>{CLINIC_CONTACT.email}</p>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              <a href={CLINIC_CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded-full bg-white border border-zinc-200 text-xs font-medium hover:border-zinc-400 transition-colors">Instagram</a>
              <a href={CLINIC_CONTACT.youtube} target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded-full bg-white border border-zinc-200 text-xs font-medium hover:border-zinc-400 transition-colors">YouTube</a>
              <a href={CLINIC_CONTACT.doctoraliaUrl} target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded-full bg-white border border-zinc-200 text-xs font-medium hover:border-zinc-400 transition-colors">Doctoralia</a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-black mb-4">Navegação</h2>
            <ul className="space-y-2.5 text-sm text-zinc-600 font-light">
              <li><Link href="/sobre" className="hover:text-black">Sobre</Link></li>
              <li><Link href="/#especialidades" className="hover:text-black">Atendimentos</Link></li>
              <li><Link href="/unidades" className="hover:text-black">Unidades</Link></li>
              <li><Link href="/blog" className="hover:text-black">Blog</Link></li>
              <li><Link href="/contato" className="hover:text-black">Contato</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-black mb-4">Formas de atendimento</h2>
            <ul className="space-y-2.5 text-sm text-zinc-600 font-light">
              {publicSpecialties.map((item) => (
                <li key={item.id}><Link href={`/especialidades/${item.slug}`} className="hover:text-black">{item.title}</Link></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-black mb-4">Presencial</h2>
            <ul className="space-y-2.5 text-sm text-zinc-600 font-light">
              {CURRENT_UNITS.map((unit) => (
                <li key={unit.id}><Link href={`/unidades#${unit.id}`} className="hover:text-black">{unit.city}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-zinc-500 font-light">
          <p>© {new Date().getFullYear()} {CLINIC_CONTACT.fullName}. Todos os direitos reservados.</p>
          <p className="max-w-xl">Informações deste site têm caráter informativo e não substituem avaliação psicológica individual.</p>
          <div className="flex items-center gap-5">
            <Link href="/politica-de-privacidade" className="hover:text-black">Privacidade</Link>
            <Link href="/contato" className="hover:text-black">Contato</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
