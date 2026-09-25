"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { CLINIC_CONTACT } from "@/data/content";

export default function FloatingDock() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 350);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden sm:flex items-center gap-1.5 p-1.5 rounded-full bg-white/80 backdrop-blur-xl border border-zinc-200/80 shadow-2xl"
        >
          {/* Item 1: Início */}
          <Link
            href="/"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold text-zinc-700 hover:text-black hover:bg-zinc-100 transition-all"
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
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold text-zinc-700 hover:text-black hover:bg-zinc-100 transition-all"
            title="Ver Especialidades"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>Especialidades</span>
          </Link>

          {/* Item 3: Unidades */}
          <Link
            href="/unidades"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold text-zinc-700 hover:text-black hover:bg-zinc-100 transition-all"
            title="Consultórios"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            <span>Unidades</span>
          </Link>

          {/* Separador */}
          <div className="h-4 w-px bg-zinc-200 mx-1" />

          {/* Item 4: WhatsApp Direto */}
          <a
            href={CLINIC_CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-black text-white text-xs font-semibold hover:bg-zinc-800 transition-all shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Agendar Consulta</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
