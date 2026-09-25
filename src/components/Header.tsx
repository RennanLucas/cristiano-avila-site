"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CLINIC_CONTACT } from "@/data/content";
import { PROFESSIONAL_REGISTRATION } from "@/lib/site-policy";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
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
          ? "bg-white/92 backdrop-blur-xl border-b border-zinc-200/70 shadow-sm"
          : "bg-white/75 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link href="/" className="relative z-10 flex items-center gap-3 group" aria-label="Ir para a página inicial">
          <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-zinc-200 shadow-sm bg-white">
            <Image src="/images/logo-icon.png" alt="Símbolo da marca Cristiano Ávila" fill sizes="40px" className="object-cover" priority />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[10px] uppercase font-semibold tracking-[0.18em] text-zinc-500 leading-none">
              Psicólogo • {PROFESSIONAL_REGISTRATION}
            </span>
            <span className="font-semibold text-base tracking-tight text-black leading-tight">
              Cristiano Ávila
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-xs font-medium text-zinc-600 hover:text-black transition-colors">
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <span className="hidden xl:inline text-[10px] font-medium tracking-wider text-zinc-500 uppercase">
            Presencial e online
          </span>
          <a href={CLINIC_CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary py-2.5 px-5 text-xs shadow-sm">
            Agendar consulta
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden relative z-10 p-2 -mr-2 text-black"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileMenuOpen}
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span className={`block w-full h-[1.5px] bg-current transition-transform duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-full h-[1.5px] bg-current transition-opacity duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-full h-[1.5px] bg-current transition-transform duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.18 }} className="absolute top-full left-0 right-0 bg-white border-b border-zinc-200 shadow-xl lg:hidden">
            <nav className="flex flex-col p-5 gap-1" aria-label="Navegação móvel">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 text-sm font-medium text-black rounded-xl hover:bg-zinc-100 transition-colors">
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-zinc-100 px-2 pb-2 space-y-2">
                <a href={CLINIC_CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center py-3.5 text-xs font-semibold">
                  Agendar pelo WhatsApp
                </a>
                <p className="text-[11px] text-center text-zinc-500">
                  {CLINIC_CONTACT.fullName} • {PROFESSIONAL_REGISTRATION}
                </p>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
