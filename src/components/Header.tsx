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
      className="fixed inset-x-0 top-0 z-50 px-2.5 pt-2.5 sm:px-5 sm:pt-4"
      style={{
        transform: headerVisible ? "translateY(0)" : "translateY(calc(-100% - 20px))",
        transition: "transform 360ms cubic-bezier(0.16, 1, 0.3, 1)",
        pointerEvents: headerVisible ? "auto" : "none",
      }}
    >
      <motion.div
        layout
        className="relative mx-auto max-w-7xl overflow-visible rounded-[19px] border transition-all duration-500 sm:rounded-[22px]"
        style={{
          backgroundColor: isScrolled ? "rgba(255,255,255,0.78)" : "rgba(255,255,255,0)",
          borderColor: isScrolled ? "rgba(228,228,231,0.82)" : "rgba(255,255,255,0)",
          boxShadow: isScrolled ? "0 18px 55px rgba(0,0,0,0.10)" : "0 0 0 rgba(0,0,0,0)",
          backdropFilter: isScrolled ? "blur(22px) saturate(1.35)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(22px) saturate(1.35)" : "none",
        }}
      >
        <div className="flex items-center justify-between gap-2 px-2.5 py-2.5 min-[390px]:gap-3 min-[390px]:px-3 sm:px-4 lg:gap-4 lg:px-5">
          <Link href="/" className="group relative z-10 flex min-w-0 flex-1 items-center lg:flex-none" aria-label="Ir para a página inicial">
            <div className="relative w-[154px] min-[390px]:w-[174px] sm:w-[196px] lg:w-[210px]">
              <Image
                src="/images/logo-full.png"
                alt="Cristiano Ávila — Psicologia e Hipnoterapia"
                width={420}
                height={100}
                className="h-auto w-full object-contain object-left"
                priority
              />
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
              Consultar agenda
              <span className="ml-2" aria-hidden="true">↗</span>
            </a>
          </div>

          <button
            type="button"
            className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border text-black transition-all duration-500 min-[390px]:h-10 min-[390px]:w-10 lg:hidden"
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
            <div className="flex h-4 w-[18px] flex-col justify-between min-[390px]:w-5">
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
              className="absolute inset-x-0 top-[calc(100%+8px)] max-h-[calc(100vh-86px)] overflow-y-auto rounded-[20px] border border-zinc-200/80 bg-white/95 p-2.5 shadow-[0_28px_80px_rgba(0,0,0,0.16)] backdrop-blur-2xl sm:rounded-[22px] sm:p-3 lg:hidden"
            >
              <nav className="grid gap-1" aria-label="Navegação móvel">
                {navLinks.map((link, index) => (
                  <motion.div key={link.name} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.035 }}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-black transition-colors hover:bg-zinc-100 sm:py-3.5"
                    >
                      <span>{link.name}</span>
                      <span className="text-zinc-300" aria-hidden="true">↗</span>
                    </Link>
                  </motion.div>
                ))}

                <div className="mt-2 border-t border-zinc-100 p-2 pt-4">
                  <a href={CLINIC_CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary w-full py-3.5 text-center text-xs font-semibold">
                    Consultar agenda no WhatsApp
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
