"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { CLINIC_CONTACT, buildWhatsAppLink } from "@/data/content";

export default function ContatoPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedMsg = `Olá, Dr. Cristiano! Meu nome é ${name || "um visitante do site"}.${phone ? ` Meu contato é ${phone}.` : ""}\n\n${message || "Gostaria de agendar uma consulta."}`;
    window.open(buildWhatsAppLink(formattedMsg), "_blank");
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-white text-[#111111] overflow-x-hidden selection:bg-black selection:text-white">
      <Header />
      
      <section className="pt-40 pb-20 px-6 min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-zinc-100 text-[10px] font-bold tracking-widest text-zinc-600 uppercase mb-4">
                Atendimento Confidencial
              </span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-black leading-tight mb-6">
                Vamos <br />
                <span className="text-zinc-400">conversar.</span>
              </h1>
              <p className="text-lg sm:text-xl text-textMuted font-light max-w-md mb-10 leading-relaxed">
                Agende sua consulta presencial ou online. Entraremos em contato com máxima agilidade para organizar seus horários.
              </p>

              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-1.5">WhatsApp Clínico</p>
                  <a
                    href={CLINIC_CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-bold tracking-tight hover:text-zinc-500 transition-colors"
                  >
                    {CLINIC_CONTACT.phone}
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-1.5">E-mail Direto</p>
                  <a
                    href={`mailto:${CLINIC_CONTACT.email}`}
                    className="text-2xl font-bold tracking-tight hover:text-zinc-500 transition-colors"
                  >
                    {CLINIC_CONTACT.email}
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="bg-surface p-8 md:p-12 rounded-3xl border border-zinc-200/80 shadow-apple"
            >
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-black mb-2">
                    Nome Completo
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-black mb-2">
                    WhatsApp para Retorno
                  </label>
                  <input 
                    type="tel" 
                    id="phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-black mb-2">
                    Como podemos ajudar?
                  </label>
                  <textarea 
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-black focus:ring-1 focus:ring-black transition-all resize-none"
                    placeholder="Gostaria de agendar uma primeira sessão presencial ou online..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-black text-white rounded-xl py-3.5 font-semibold text-xs hover:bg-zinc-800 transition-colors shadow-apple"
                >
                  {submitted ? "✓ Enviando para o WhatsApp..." : "Iniciar Agendamento no WhatsApp"}
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
