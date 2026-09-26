"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { CLINIC_CONTACT, buildWhatsAppLink } from "@/data/content";
import { FIRST_CONTACT_PRIVACY_NOTE } from "@/lib/site-policy";

const CONTACT_REASONS = [
  "Quero marcar a primeira consulta",
  "Quero consultar horários",
  "Prefiro atendimento online",
  "Quero saber sobre uma unidade presencial",
  "Tenho outra dúvida",
];

export default function ContatoPage() {
  const [name, setName] = useState("");
  const [contactReason, setContactReason] = useState(CONTACT_REASONS[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedMsg = `Olá, Dr. Cristiano. Meu nome é ${name}. ${contactReason}.`;
    window.open(buildWhatsAppLink(formattedMsg), "_blank", "noopener,noreferrer");
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#111111] selection:bg-black selection:text-white">
      <Header />

      <section className="relative flex min-h-[88vh] items-center overflow-hidden px-6 pb-20 pt-36 sm:pt-40">
        <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-fuchsia-100/35 blur-[100px]" />
        <div className="pointer-events-none absolute -right-20 bottom-12 h-80 w-80 rounded-full bg-amber-100/50 blur-[110px]" />
        <div className="pointer-events-none absolute inset-0 soft-grid opacity-[0.28] [mask-image:radial-gradient(circle_at_center,black,transparent_84%)]" />

        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0.45, x: -14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="editorial-label">Contato</span>
              <h1 className="mt-4 text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-black sm:text-5xl md:text-7xl">
                Fale diretamente com o <span className="text-zinc-400">consultório.</span>
              </h1>
              <p className="mb-10 mt-6 max-w-lg text-base font-light leading-relaxed text-zinc-600 sm:text-lg">
                Use o WhatsApp para consultar horários, escolher entre presencial e online ou tirar uma dúvida antes de marcar.
              </p>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <a
                  href={CLINIC_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-glass rounded-[24px] p-5 transition-transform duration-300 hover:-translate-y-1"
                >
                  <span className="block text-[9px] font-semibold uppercase tracking-[0.16em] text-zinc-400">WhatsApp</span>
                  <strong className="mt-2 block text-lg tracking-tight text-black">{CLINIC_CONTACT.phone}</strong>
                </a>

                <a
                  href={`mailto:${CLINIC_CONTACT.email}`}
                  className="premium-glass rounded-[24px] p-5 transition-transform duration-300 hover:-translate-y-1"
                >
                  <span className="block text-[9px] font-semibold uppercase tracking-[0.16em] text-zinc-400">E-mail</span>
                  <strong className="mt-2 block break-all text-sm tracking-tight text-black">{CLINIC_CONTACT.email}</strong>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0.45, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="premium-card overflow-hidden rounded-[30px] bg-white/85"
            >
              <div className="border-b border-zinc-200/80 bg-zinc-950 px-6 py-6 text-white sm:px-8">
                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/40">Mensagem rápida</span>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">Já deixe o assunto pronto.</h2>
                <p className="mt-2 max-w-xl text-xs font-light leading-relaxed text-white/55">
                  Preencha seu nome, escolha o motivo do contato e abra a conversa no WhatsApp.
                </p>
              </div>

              <form className="space-y-7 p-6 sm:p-8" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-500">Seu nome</label>
                  <input
                    type="text"
                    id="name"
                    required
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3.5 text-sm outline-none transition-all focus:border-black focus:ring-1 focus:ring-black"
                    placeholder="Digite seu nome"
                  />
                </div>

                <fieldset>
                  <legend className="mb-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-500">Motivo do contato</legend>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {CONTACT_REASONS.map((reason, index) => {
                      const active = contactReason === reason;
                      return (
                        <button
                          key={reason}
                          type="button"
                          onClick={() => setContactReason(reason)}
                          aria-pressed={active}
                          className={`group flex min-h-[72px] items-center justify-between gap-3 rounded-2xl border px-4 py-3 text-left transition-all duration-300 ${
                            active
                              ? "border-black bg-black text-white shadow-lg"
                              : "border-zinc-200 bg-white text-zinc-700 hover:-translate-y-0.5 hover:border-zinc-400"
                          } ${index === CONTACT_REASONS.length - 1 ? "sm:col-span-2" : ""}`}
                        >
                          <span className="text-xs font-medium leading-relaxed">{reason}</span>
                          <span className={`h-2 w-2 shrink-0 rounded-full ${active ? "bg-white" : "bg-zinc-200 group-hover:bg-zinc-400"}`} aria-hidden="true" />
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                <div className="rounded-2xl border border-zinc-200 bg-zinc-50/80 p-4 text-[11px] leading-relaxed text-zinc-500">
                  {FIRST_CONTACT_PRIVACY_NOTE}
                </div>

                <button type="submit" className="btn-primary w-full rounded-2xl py-3.5 text-xs">
                  Abrir conversa no WhatsApp <span className="ml-2" aria-hidden="true">↗</span>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
