"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { CLINIC_CONTACT, buildWhatsAppLink } from "@/data/content";
import { FIRST_CONTACT_PRIVACY_NOTE } from "@/lib/site-policy";

export default function ContatoPage() {
  const [name, setName] = useState("");
  const [contactReason, setContactReason] = useState("Informações sobre consulta");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedMsg = `Olá, Dr. Cristiano. Meu nome é ${name}. Gostaria de ${contactReason.toLowerCase()}.`;
    window.open(buildWhatsAppLink(formattedMsg), "_blank", "noopener,noreferrer");
  };

  return (
    <main className="min-h-screen bg-white text-[#111111] overflow-x-hidden selection:bg-black selection:text-white">
      <Header />

      <section className="pt-36 sm:pt-40 pb-20 px-6 min-h-[88vh] flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-zinc-100 text-[10px] font-bold tracking-widest text-zinc-600 uppercase mb-4">
                Contato e agendamento
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-black leading-tight mb-6">
                Vamos <span className="text-zinc-400">conversar.</span>
              </h1>
              <p className="text-base sm:text-lg text-textMuted font-light max-w-lg mb-10 leading-relaxed">
                Use este canal para dúvidas iniciais, informações sobre modalidades de atendimento e disponibilidade de agenda.
              </p>

              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-1.5">WhatsApp</p>
                  <a href={CLINIC_CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-xl sm:text-2xl font-bold tracking-tight hover:text-zinc-500 transition-colors">
                    {CLINIC_CONTACT.phone}
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-1.5">E-mail</p>
                  <a href={`mailto:${CLINIC_CONTACT.email}`} className="text-lg sm:text-2xl font-bold tracking-tight break-all hover:text-zinc-500 transition-colors">
                    {CLINIC_CONTACT.email}
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="bg-surface p-7 md:p-10 rounded-3xl border border-zinc-200/80 shadow-apple"
            >
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-black mb-2">Seu nome</label>
                  <input
                    type="text"
                    id="name"
                    required
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                    placeholder="Como podemos chamar você?"
                  />
                </div>

                <div>
                  <label htmlFor="reason" className="block text-xs font-semibold uppercase tracking-wider text-black mb-2">Assunto</label>
                  <select
                    id="reason"
                    value={contactReason}
                    onChange={(e) => setContactReason(e.target.value)}
                    className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                  >
                    <option>Informações sobre consulta</option>
                    <option>Verificar disponibilidade de agenda</option>
                    <option>Informações sobre atendimento online</option>
                    <option>Informações sobre atendimento presencial</option>
                    <option>Outro esclarecimento inicial</option>
                  </select>
                </div>

                <div className="rounded-2xl border border-zinc-200 bg-white p-4 text-xs leading-relaxed text-zinc-500">
                  {FIRST_CONTACT_PRIVACY_NOTE}
                </div>

                <button type="submit" className="w-full bg-black text-white rounded-xl py-3.5 font-semibold text-xs hover:bg-zinc-800 transition-colors shadow-apple">
                  Continuar no WhatsApp
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
