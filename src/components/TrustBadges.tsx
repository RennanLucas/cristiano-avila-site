import Image from "next/image";
import { CLINIC_CONTACT } from "@/data/content";
import { PROFESSIONAL_REGISTRATION } from "@/lib/site-policy";

export default function TrustBadges() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="relative overflow-hidden rounded-[28px] border border-zinc-200/90 bg-white/95 shadow-[0_18px_55px_rgba(0,0,0,0.08)] backdrop-blur">
        <div className="absolute left-0 top-0 h-px w-28 bg-gradient-to-r from-fuchsia-500 via-orange-400 to-transparent" />
        <div className="absolute left-0 bottom-0 h-px w-28 bg-gradient-to-r from-fuchsia-500 via-orange-400 to-transparent" />

        <div className="grid gap-7 px-5 py-6 sm:px-8 sm:py-7 lg:grid-cols-[1.7fr_1fr] lg:items-center lg:gap-10">
          <div className="flex min-w-0 items-center gap-4 sm:gap-5">
            <Image
              src={CLINIC_CONTACT.avatarUrl}
              alt="Cristiano Ávila da Silva"
              width={84}
              height={84}
              className="h-[70px] w-[70px] sm:h-[82px] sm:w-[82px] shrink-0 rounded-[20px] object-cover object-top shadow-sm"
            />

            <div className="min-w-0">
              <h2 className="text-lg sm:text-2xl font-bold tracking-tight text-black">
                Cristiano Ávila da Silva
              </h2>
              <p className="mt-0.5 text-xs sm:text-sm text-zinc-500">
                Psicólogo Clínico & Hipnoterapeuta
              </p>
              <div className="mt-2.5 flex flex-wrap gap-2">
                <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-[10px] sm:text-[11px] font-semibold text-zinc-600">
                  Certificação OMNI
                </span>
                <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-[10px] sm:text-[11px] font-semibold text-zinc-600">
                  {PROFESSIONAL_REGISTRATION}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 border-t border-zinc-200 pt-5 lg:border-l lg:border-t-0 lg:pl-9 lg:pt-0">
            <div className="pr-3 sm:pr-5">
              <span className="block text-[9px] sm:text-[10px] font-bold uppercase tracking-wide text-zinc-500">
                Experiência
              </span>
              <strong className="mt-1 block text-sm sm:text-lg font-bold text-black">+10 anos</strong>
            </div>

            <div className="border-l border-zinc-200 px-3 sm:px-5">
              <span className="block text-[9px] sm:text-[10px] font-bold uppercase tracking-wide text-zinc-500">
                Consultórios
              </span>
              <strong className="mt-1 block text-sm sm:text-lg font-bold text-black">4 cidades</strong>
            </div>

            <div className="border-l border-zinc-200 pl-3 sm:pl-5">
              <span className="block text-[9px] sm:text-[10px] font-bold uppercase tracking-wide text-zinc-500">
                Atendimento
              </span>
              <strong className="mt-1 block text-xs sm:text-base font-bold leading-snug text-black">Presencial & Online</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
