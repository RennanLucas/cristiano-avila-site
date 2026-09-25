"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { CLINIC_CONTACT } from "@/data/content";
import MagneticButton from "@/components/MagneticButton";

export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-white text-[#111111] overflow-x-hidden selection:bg-black selection:text-white">
      <Header />
      
      <section className="pt-40 pb-20 px-6 min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-black leading-tight mb-6">
                Vamos <br />
                <span className="text-zinc-400">conversar.</span>
              </h1>
              <p className="text-xl text-textMuted font-light max-w-md mb-12">
                Agende sua consulta presencial ou online. Entraremos em contato o mais breve possível para ajustar os horários.
              </p>

              <div className="space-y-8">
                <div>
                  <p className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-2">WhatsApp</p>
                  <a href={CLINIC_CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-2xl font-bold tracking-tight hover:text-zinc-500 transition-colors">
                    {CLINIC_CONTACT.phone}
                  </a>
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-2">E-mail Direto</p>
                  <a href={`mailto:${CLINIC_CONTACT.email}`} className="text-2xl font-bold tracking-tight hover:text-zinc-500 transition-colors">
                    {CLINIC_CONTACT.email}
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="bg-surface p-8 md:p-12 rounded-3xl border border-zinc-100 shadow-apple"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-black mb-2">Nome Completo</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                    placeholder="João Silva"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-black mb-2">WhatsApp</label>
                  <input 
                    type="tel" 
                    id="phone"
                    className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-black mb-2">Como podemos ajudar?</label>
                  <textarea 
                    id="message"
                    rows={4}
                    className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 outline-none focus:border-black focus:ring-1 focus:ring-black transition-all resize-none"
                    placeholder="Gostaria de agendar uma primeira sessão online..."
                  />
                </div>
                
                <MagneticButton className="w-full">
                  <button className="w-full bg-black text-white rounded-xl py-4 font-semibold hover:bg-zinc-800 transition-colors">
                    Enviar Mensagem
                  </button>
                </MagneticButton>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
