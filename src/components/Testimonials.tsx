"use client";

import { motion } from "framer-motion";
import { CLINIC_CONTACT } from "@/data/content";

const PLATFORMS = [
  {
    name: "Doctoralia",
    href: CLINIC_CONTACT.doctoraliaUrl,
    text: "Perfil profissional e avaliações publicadas diretamente na plataforma.",
    code: "01",
  },
  {
    name: "Zenklub",
    href: CLINIC_CONTACT.zenklubUrl,
    text: "Informações públicas disponíveis no perfil externo do profissional.",
    code: "02",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative overflow-hidden border-y border-zinc-200/60 bg-[#F3F3F1] py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 soft-grid opacity-[0.22] [mask-image:radial-gradient(circle_at_center,black,transparent_84%)]" />
      <div className="aurora-orb absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-amber-100/60 blur-[100px]" />
      <div className="aurora-orb aurora-orb-delayed absolute -right-20 top-10 h-72 w-72 rounded-full bg-fuchsia-100/45 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-stretch gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="premium-dark relative overflow-hidden rounded-[32px] p-7 text-white sm:p-10 lg:p-12"
          >
            <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[90px]" />
            <div className="pointer-events-none absolute -bottom-24 right-[-3rem] h-72 w-72 rounded-full bg-amber-300/10 blur-[95px]" />
            <div className="pointer-events-none absolute inset-0 soft-grid opacity-[0.06]" />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">Referências públicas</span>
                <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                  Avaliações consultadas fora do próprio site.
                </h2>
                <p className="mt-5 max-w-xl text-sm font-light leading-relaxed text-white/55 sm:text-base">
                  Para preservar a privacidade de pacientes e evitar exposição de experiências clínicas no site, as avaliações ficam nas plataformas onde foram publicadas.
                </p>
              </div>

              <div className="mt-10 border-t border-white/10 pt-6">
                <div className="flex items-center gap-3 text-xs text-white/40">
                  <span className="h-px w-8 bg-white/20" />
                  Plataformas independentes
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {PLATFORMS.map((platform, index) => (
              <motion.a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 26, scale: 0.985 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.58, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8 }}
                className="group premium-glass relative min-h-[330px] overflow-hidden rounded-[30px] p-7 sm:p-8"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full border border-zinc-200/60 bg-white/50 transition-transform duration-700 group-hover:scale-125" />
                <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-zinc-100 blur-[60px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-zinc-400">{platform.code}</span>
                      <span className="rounded-full border border-zinc-200 bg-white/75 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-zinc-400">
                        Externo
                      </span>
                    </div>

                    <h3 className="mt-16 text-3xl font-semibold tracking-[-0.035em] text-black">{platform.name}</h3>
                    <p className="mt-4 text-sm font-light leading-relaxed text-zinc-600">{platform.text}</p>
                  </div>

                  <div className="mt-10 flex items-center justify-between border-t border-zinc-200/70 pt-5">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-400">Abrir plataforma</span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg" aria-hidden="true">↗</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
