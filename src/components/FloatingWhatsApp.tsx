"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CLINIC_CONTACT, buildWhatsAppLink } from "@/data/content";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 250);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Exibir balão proativo após 4 segundos
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 4000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
        >
          {/* Proactive Balloon Card */}
          <AnimatePresence>
            {showBubble && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-2xl p-4 shadow-2xl border border-zinc-200/90 max-w-[280px] relative text-left"
              >
                <button
                  type="button"
                  onClick={() => setShowBubble(false)}
                  className="absolute top-2 right-2 text-zinc-400 hover:text-black p-1 text-xs"
                  aria-label="Fechar mensagem"
                >
                  ✕
                </button>
                <div className="flex items-center gap-2.5 mb-2">
                  <img
                    src={CLINIC_CONTACT.avatarUrl}
                    alt="Cristiano Ávila"
                    className="w-8 h-8 rounded-full object-cover object-top border border-zinc-200"
                  />
                  <div>
                    <p className="text-xs font-bold text-black leading-tight">Cristiano Ávila</p>
                    <p className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Online agora
                    </p>
                  </div>
                </div>
                <p className="text-xs text-zinc-600 leading-snug font-light mb-3">
                  Olá! Tem dúvidas sobre como funciona a primeira sessão ou quer verificar horários desta semana?
                </p>
                <a
                  href={buildWhatsAppLink("Olá, Dr. Cristiano! Vi a mensagem no site e gostaria de tirar uma dúvida sobre a consulta.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-2 px-3 rounded-xl bg-black text-white text-[11px] font-semibold hover:bg-zinc-800 transition-colors"
                >
                  Falar no WhatsApp
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating Circle Button */}
          <a
            href={CLINIC_CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir WhatsApp"
            className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 relative"
          >
            <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-white animate-pulse" />
            <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.913.913l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.675-.839-6.481-2.373l-.388-.322-2.65.889.889-2.65-.322-.388A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
