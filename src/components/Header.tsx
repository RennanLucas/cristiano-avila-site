"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { CLINIC_CONTACT } from "@/data/content";
import { PROFESSIONAL_REGISTRATION } from "@/lib/site-policy";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 150, damping: 28, mass: 0.35 });

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      setIsScrolled(currentY > 16);

      if (mobileMenuOpen || currentY < 90) {
        setHeaderVisible(true);
      } else if (delta > 6) {
        setHeaderVisible(false);
      } else if (delta < -6) {
        setHeaderVisible(true);
      }

      lastScrollY.current = currentY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

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
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4"
      style={{
        transform: headerVisible ? "translateY(0)" : "translateY(calc(-100% - 20px))",
        transition: "transform 360ms cubic-bezier(0.16, 1, 0.3, 1)",
        pointerEvents: headerVisible ? "auto" : "none",
      }}
    >
      <motion.div
        layout
        className="relative mx-auto max-w-7xl overflow-visible rounded-[22px] border transition-all duration-500"
        style={{
          backgroundColor: isScrolled ? "rgba(255,255,255,0.78)" : "rgba(255,255,255,0)",
          borderColor: isScrolled ? "rgba(228,228,231,0.82)" : "rgba(255,255,255,0)",
          boxShadow: isScrolled ? "0 18px 55px rgba(0,0,0,0.10)" : "0 0 0 rgba(0,0,0,0)",
          backdropFilter: isScrolled ? "blur(22px) saturate(1.35)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(22px) saturate(1.35)" : "none",
        }}
      >
        <div className="flex items-center justify-between gap-4 px-3 py-2.5 sm:px-4 lg:px-5">
          <Link href="/" className="group relative z-10 flex min-w-0 items-center gap-3" aria-label="Ir para a página inicial">
            <motion.div
              whileHover={{ rotate: 3, scale: 1.04 }}
              transition={{ type: "spring", stiffness: 320, damping: 20 }}
              className={`relative h-10 w-10 shrink-0 overflow-hidden rounded-2xl border bg-white transition-all duration-500 ${isScrolled ? "border-zinc-200/80 shadow-sm" : "border-white/70 shadow-[0_8px_24px_rgba(0,0,0,0.07)]"}`}
            >
              <Image src="/images/logo-icon.png" alt="Símbolo da marca Cristiano Ávila" fill sizes="40px" className="object-cover" priority />
            </motion.div>

            <div className="min-w-0 text-left">
              <span className="block truncate text-[9px] font-semibold uppercase leading-none tracking-[0.18em] text-zinc-500 sm:text-[10px]">
                Psicólogo • {PROFESSIONAL_REGISTRATION}
              </span>
              <span className="mt-1 block truncate text-[15px] font-semibold leading-tight tracking-[-0.025em] text-black sm:text-base">
                Cristiano Ávila
              </span>
            </div>
          </Link>

          <nav
            className="hidden items-center rounded-full border px-1.5 py-1 transition-all duration-500 lg:flex"
            style={{
              backgroundColor: isScrolled ? "rgba(255,255,255,0.70)" : "rgba(255,255,255,0.34)",
              borderColor: isScrolled ? "rgba(228,228,231,0.78)" : "rgba(255,255,255,0.52)",
              backdropFilter: "blur(16px) saturate(1.25)",
              WebkitBackdropFilter: "blur(16px) saturate(1.25)",
              boxShadow: isScrolled ? "0 8px 24px rgba(0,0,0,0.055)" : "0 6px 22px rgba(0,0,0,0.035)",
            }}
            aria-label="Navegação principal"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="rounded-full px-3.5 py-2 text-[11px] font-medium text-zinc-600 transition-all duration-300 hover:bg-white/80 hover:text-black xl:px-4"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <span className="hidden text-[9px] font-semibold uppercase tracking-[0.16em] text-zinc-500 2xl:inline">
              Presencial & online
            </span>
            <a href={CLINIC_CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary px-5 py-2.5 text-[11px] shadow-none">
              Agendar consulta
              <span className="ml-2" aria-hidden="true">↗</span>
            </a>
          </div>

          <button
            type="button"
            className="relative z-10 -mr-1 flex h-10 w-10 items-center justify-center rounded-xl border text-black transition-all duration-500 lg:hidden"
            style={{
              backgroundColor: isScrolled ? "rgba(255,255,255,0.78)" : "rgba(255,255,255,0.42)",
              borderColor: isScrolled ? "rgba(228,228,231,0.82)" : "rgba(255,255,255,0.6)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
            }}
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileMenuOpen}
          >
            <div className="flex h-4 w-5 flex-col justify-between">
              <span className={`block h-[1.5px] w-full bg-current transition-transform duration-300 ${mobileMenuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`block h-[1.5px] w-full bg-current transition-opacity duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-[1.5px] w-full bg-current transition-transform duration-300 ${mobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </div>
          </button>
        </div>

        <motion.div className={`absolute inset-x-4 bottom-0 h-px origin-left bg-gradient-to-r from-black via-zinc-500 to-transparent transition-opacity duration-500 ${isScrolled ? "opacity-100" : "opacity-0"}`} style={{ scaleX: progress }} />

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.985 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-x-0 top-[calc(100%+8px)] overflow-hidden rounded-[22px] border border-zinc-200/80 bg-white/95 p-3 shadow-[0_28px_80px_rgba(0,0,0,0.16)] backdrop-blur-2xl lg:hidden"
            >
              <nav className="grid gap-1" aria-label="Navegação móvel">
                {navLinks.map((link, index) => (
                  <motion.div key={link.name} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.035 }}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-medium text-black transition-colors hover:bg-zinc-100"
                    >
                      <span>{link.name}</span>
                      <span className="text-zinc-300" aria-hidden="true">↗</span>
                    </Link>
                  </motion.div>
                ))}

                <div className="mt-2 border-t border-zinc-100 p-2 pt-4">
                  <a href={CLINIC_CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary w-full py-3.5 text-center text-xs font-semibold">
                    Agendar pelo WhatsApp
                  </a>
                  <p className="mt-3 text-center text-[10px] text-zinc-400">
                    {CLINIC_CONTACT.fullName} • {PROFESSIONAL_REGISTRATION}
                  </p>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
