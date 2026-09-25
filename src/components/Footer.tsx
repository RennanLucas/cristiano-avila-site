import Image from "next/image";
import Link from "next/link";
import { CLINIC_CONTACT, SPECIALTIES_DATA } from "@/data/content";
import { CURRENT_UNITS } from "@/data/units";
import { isPublicSpecialty, PROFESSIONAL_REGISTRATION } from "@/lib/site-policy";

export default function Footer() {
  const publicSpecialties = SPECIALTIES_DATA.filter((item) => isPublicSpecialty(item.id)).slice(0, 6);

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 pb-28 pt-16 text-black sm:pb-12 sm:pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 border-b border-zinc-200 pb-12 sm:gap-12 sm:pb-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="min-w-0 space-y-5 lg:col-span-5">
            <Link href="/" className="group inline-flex max-w-full items-center gap-3">
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-zinc-200 bg-white sm:h-11 sm:w-11">
                <Image src="/images/logo-icon.png" alt="Símbolo da marca Cristiano Ávila" fill sizes="44px" className="object-cover" />
              </div>
              <div className="min-w-0 text-left">
                <span className="block truncate text-[9px] font-semibold uppercase leading-none tracking-[0.14em] text-zinc-500 sm:text-[10px] sm:tracking-[0.16em]">Psicólogo • {PROFESSIONAL_REGISTRATION}</span>
                <span className="mt-1 block truncate text-lg font-semibold leading-tight tracking-tight text-black sm:text-xl">{CLINIC_CONTACT.fullName}</span>
              </div>
            </Link>

            <p className="max-w-md text-sm font-light leading-relaxed text-zinc-600">Atendimento psicológico presencial e online, com escuta qualificada e planejamento clínico individualizado.</p>

            <div className="min-w-0 space-y-1.5 text-xs text-zinc-500">
              <p>{CLINIC_CONTACT.phone}</p>
              <p className="break-all">{CLINIC_CONTACT.email}</p>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              <a href={CLINIC_CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="rounded-full border border-zinc-200 bg-white px-3 py-2 text-xs font-medium transition-colors hover:border-zinc-400">Instagram</a>
              <a href={CLINIC_CONTACT.youtube} target="_blank" rel="noopener noreferrer" className="rounded-full border border-zinc-200 bg-white px-3 py-2 text-xs font-medium transition-colors hover:border-zinc-400">YouTube</a>
              <a href={CLINIC_CONTACT.doctoraliaUrl} target="_blank" rel="noopener noreferrer" className="rounded-full border border-zinc-200 bg-white px-3 py-2 text-xs font-medium transition-colors hover:border-zinc-400">Doctoralia</a>
            </div>
          </div>

          <div className="lg:col-span-2"><h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-black">Navegação</h2><ul className="space-y-2.5 text-sm font-light text-zinc-600"><li><Link href="/sobre" className="hover:text-black">Sobre</Link></li><li><Link href="/#especialidades" className="hover:text-black">Atendimentos</Link></li><li><Link href="/unidades" className="hover:text-black">Unidades</Link></li><li><Link href="/blog" className="hover:text-black">Blog</Link></li><li><Link href="/contato" className="hover:text-black">Contato</Link></li></ul></div>
          <div className="lg:col-span-3"><h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-black">Formas de atendimento</h2><ul className="space-y-2.5 text-sm font-light text-zinc-600">{publicSpecialties.map((item) => <li key={item.id}><Link href={`/especialidades/${item.slug}`} className="hover:text-black">{item.title}</Link></li>)}</ul></div>
          <div className="lg:col-span-2"><h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-black">Presencial</h2><ul className="space-y-2.5 text-sm font-light text-zinc-600">{CURRENT_UNITS.map((unit) => <li key={unit.id}><Link href={`/unidades#${unit.id}`} className="hover:text-black">{unit.city}</Link></li>)}</ul></div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 pt-7 text-[11px] font-light leading-relaxed text-zinc-500 sm:pt-8 sm:text-xs md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} {CLINIC_CONTACT.fullName}. Todos os direitos reservados.</p>
          <p className="max-w-xl">Informações deste site têm caráter informativo e não substituem avaliação psicológica individual.</p>
          <div className="flex flex-wrap items-center gap-5"><Link href="/politica-de-privacidade" className="hover:text-black">Privacidade</Link><Link href="/contato" className="hover:text-black">Contato</Link></div>
        </div>
      </div>
    </footer>
  );
}
