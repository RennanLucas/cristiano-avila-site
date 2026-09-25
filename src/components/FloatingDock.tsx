"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { CLINIC_CONTACT, buildWhatsAppLink } from "@/data/content";

export default function FloatingDock() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* ========================================================= */}
          {/* DESKTOP: Centered Floating Pill (Minimalista & Luxuoso)  */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden sm:flex items-center gap-1.5 p-1.5 rounded-full bg-white/85 backdrop-blur-2xl border border-zinc-200/80 shadow-2xl"
          >
            {/* Item 1: Início */}
            <Link
              href="/"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold text-zinc-700 hover:text-black hover:bg-zinc-100/80 transition-all"
              title="Ir para o Início"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Início</span>
            </Link>

            {/* Item 2: Especialidades */}
            <Link
              href="/#especialidades"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold text-zinc-700 hover:text-black hover:bg-zinc-100/80 transition-all"
              title="Ver Especialidades"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Especialidades</span>
            </Link>

            {/* Item 3: Sobre */}
            <Link
              href="/sobre"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold text-zinc-700 hover:text-black hover:bg-zinc-100/80 transition-all"
              title="Sobre o Psicólogo"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Sobre</span>
            </Link>

            {/* Item 4: Unidades */}
            <Link
              href="/unidades"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold text-zinc-700 hover:text-black hover:bg-zinc-100/80 transition-all"
              title="Consultórios"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              <span>Unidades</span>
            </Link>

            {/* Separador */}
            <div className="h-4 w-px bg-zinc-200 mx-1" />

            {/* Item 5: CTA WhatsApp */}
            <a
              href={CLINIC_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-black text-white text-xs font-semibold hover:bg-zinc-800 transition-all shadow-sm group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Agendar Consulta</span>
            </a>
          </motion.div>

          {/* ========================================================= */}
          {/* MOBILE: Native iOS/Android Bottom Bar (Estilo App Apple)  */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 backdrop-blur-2xl border-t border-zinc-200/90 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] px-4 py-2.5"
            style={{ paddingBottom: "max(12px, env(safe-area-inset-bottom))" }}
          >
            <div className="flex items-center justify-between gap-3">
              {/* Info Dr. Cristiano Ávila */}
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="relative shrink-0">
                  <img
                    src={CLINIC_CONTACT.avatarUrl}
                    alt="Cristiano Ávila"
                    className="w-10 h-10 rounded-full object-cover object-top border border-zinc-200 shadow-xs"
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white" />
                </div>
                <div className="truncate">
                  <p className="text-xs font-bold text-black leading-tight truncate">Dr. Cristiano Ávila</p>
                  <p className="text-[10px] text-zinc-500 leading-tight flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    Online • CRP SP Ativo
                  </p>
                </div>
              </div>

              {/* Botão de Agendamento Rápido no WhatsApp */}
              <a
                href={buildWhatsAppLink("Olá, Dr. Cristiano! Gostaria de agendar uma consulta.")}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 flex items-center gap-2 bg-[#25D366] active:bg-[#20ba5a] text-white px-4 py-2.5 rounded-full text-xs font-bold shadow-md active:scale-95 transition-all"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.913.913l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.675-.839-6.481-2.373l-.388-.322-2.65.889.889-2.65-.322-.388A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                <span>Agendar</span>
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
