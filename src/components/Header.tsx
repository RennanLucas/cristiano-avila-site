"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CLINIC_CONTACT } from "@/data/content";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Especialidades", href: "/#especialidades" },
    { name: "Sobre", href: "/sobre" },
    { name: "Metodologia", href: "/#metodologia" },
    { name: "Unidades", href: "/unidades" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contato", href: "/contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-zinc-200/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-18 py-3 flex items-center justify-between">
        {/* Logo oficial (Imagem 2) com nome */}
        <Link href="/" className="relative z-10 flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-zinc-200/80 shadow-sm group-hover:scale-105 transition-transform duration-200 bg-white">
            <img
              src="/images/logo-icon.png"
              alt="Logo Psicólogo Cristiano Ávila"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 leading-none">
              Psicólogo
            </span>
            <span className="font-bold text-base tracking-tight text-black leading-tight">
              Cristiano Ávila
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-semibold text-textMuted hover:text-black transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-5">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
              Agenda Aberta
            </span>
          </div>
          <a
            href={CLINIC_CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary py-2 px-5 text-xs shadow-sm"
          >
            Agendar Consulta
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="md:hidden relative z-10 p-2 -mr-2 text-black"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span
              className={`block w-full h-[1.5px] bg-current transition-transform duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-full h-[1.5px] bg-current transition-opacity duration-300 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-full h-[1.5px] bg-current transition-transform duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-b border-zinc-200/90 shadow-2xl md:hidden"
          >
            <nav className="flex flex-col p-5 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-sm font-semibold text-black rounded-xl hover:bg-zinc-100/80 transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <svg className="w-4 h-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-zinc-100 px-2 pb-2 space-y-2">
                <a
                  href={CLINIC_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center py-3.5 text-xs font-bold shadow-apple"
                >
                  Agendar Consulta no WhatsApp
                </a>
                <p className="text-[11px] text-center text-zinc-500 font-light">
                  {CLINIC_CONTACT.phone} • Atendimento Sigiloso
                </p>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
