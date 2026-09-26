"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CLINIC_CONTACT } from "@/data/content";
import { PROFESSIONAL_REGISTRATION } from "@/lib/site-policy";

const NAV_LINKS = [
  { name: "Especialidades", href: "/#especialidades" },
  { name: "Sobre", href: "/sobre" },
  { name: "Metodologia", href: "/#metodologia" },
  { name: "Unidades", href: "/unidades" },
  { name: "FAQ", href: "/#faq" },
  { name: "Contato", href: "/contato" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const scrollFrame = useRef<number | null>(null);
  const mobileMenuOpenRef = useRef(false);

  useEffect(() => {
    mobileMenuOpenRef.current = mobileMenuOpen;

    if (mobileMenuOpen) {
      setHeaderVisible(true);
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };

    if (mobileMenuOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const updateHeader = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      setIsScrolled(currentY > 16);

      if (mobileMenuOpenRef.current || currentY < 90) {
        setHeaderVisible(true);
      } else if (delta > 8) {
        setHeaderVisible(false);
      } else if (delta < -8) {
        setHeaderVisible(true);
      }

      lastScrollY.current = currentY;
      scrollFrame.current = null;
    };

    const handleScroll = () => {
      if (scrollFrame.current !== null) return;
      scrollFrame.current = window.requestAnimationFrame(updateHeader);
    };

    updateHeader();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollFrame.current !== null) window.cancelAnimationFrame(scrollFrame.current);
    };
  }, []);

  const toggleMobileMenu = () => {
    setHeaderVisible(true);
    setMobileMenuOpen((open) => !open);
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 px-2.5 pt-2.5 sm:px-5 sm:pt-4"
      style={{
        transform: headerVisible ? "translate3d(0,0,0)" : "translate3d(0,calc(-100% - 20px),0)",
        transition: "transform 240ms cubic-bezier(0.16, 1, 0.3, 1)",
        pointerEvents: headerVisible ? "auto" : "none",
        willChange: "transform",
      }}
    >
      <div
        className="relative mx-auto max-w-7xl overflow-visible rounded-[19px] border transition-[background-color,border-color,box-shadow] duration-200 sm:rounded-[22px]"
        style={{
          backgroundColor: isScrolled ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0)",
          borderColor: isScrolled ? "rgba(228,228,231,0.86)" : "rgba(255,255,255,0)",
          boxShadow: isScrolled ? "0 14px 42px rgba(0,0,0,0.09)" : "0 0 0 rgba(0,0,0,0)",
          backdropFilter: isScrolled ? "blur(14px) saturate(1.15)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(14px) saturate(1.15)" : "none",
        }}
      >
        <div className="flex items-center justify-between gap-2 px-2.5 py-2.5 min-[390px]:gap-3 min-[390px]:px-3 sm:px-4 lg:gap-4 lg:px-5">
          <Link href="/" className="relative z-10 flex min-w-0 flex-1 items-center lg:flex-none" aria-label="Ir para a página inicial">
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
            className="hidden items-center rounded-full border px-1.5 py-1 transition-colors duration-200 lg:flex"
            style={{
              backgroundColor: isScrolled ? "rgba(255,255,255,0.72)" : "rgba(255,255,255,0.34)",
              borderColor: isScrolled ? "rgba(228,228,231,0.78)" : "rgba(255,255,255,0.52)",
              backdropFilter: "blur(12px) saturate(1.2)",
              WebkitBackdropFilter: "blur(12px) saturate(1.2)",
            }}
            aria-label="Navegação principal"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="rounded-full px-3.5 py-2 text-[11px] font-medium text-zinc-600 transition-colors duration-200 hover:bg-white/80 hover:text-black xl:px-4"
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
            className={`relative z-10 flex h-11 w-11 shrink-0 touch-manipulation select-none items-center justify-center rounded-xl border text-black transition-colors duration-150 lg:hidden ${
              isScrolled ? "border-zinc-200/90 bg-white/95" : "border-white/80 bg-white/70"
            }`}
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <div className="flex h-4 w-5 flex-col justify-between" aria-hidden="true">
              <span className={`block h-[1.5px] w-full origin-center bg-current transition-transform duration-150 ${mobileMenuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`block h-[1.5px] w-full bg-current transition-opacity duration-100 ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`block h-[1.5px] w-full origin-center bg-current transition-transform duration-150 ${mobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </div>
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={`absolute inset-x-0 top-[calc(100%+8px)] max-h-[calc(100vh-86px)] overflow-y-auto rounded-[20px] border border-zinc-200/90 bg-white/[0.985] p-2.5 shadow-[0_22px_60px_rgba(0,0,0,0.14)] transition-[opacity,transform,visibility] duration-150 ease-out will-change-transform sm:rounded-[22px] sm:p-3 lg:hidden ${
            mobileMenuOpen
              ? "visible translate-y-0 opacity-100 pointer-events-auto"
              : "invisible -translate-y-1 opacity-0 pointer-events-none"
          }`}
        >
          <nav className="grid gap-1" aria-label="Navegação móvel">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMobileMenu}
                className="flex touch-manipulation items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-black transition-colors duration-150 active:bg-zinc-100 sm:py-3.5"
              >
                <span>{link.name}</span>
                <span className="text-zinc-300" aria-hidden="true">↗</span>
              </Link>
            ))}

            <div className="mt-2 border-t border-zinc-100 p-2 pt-4">
              <a href={CLINIC_CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary w-full touch-manipulation py-3.5 text-center text-xs font-semibold">
                Consultar agenda no WhatsApp
              </a>
              <p className="mt-3 text-center text-[10px] text-zinc-400">
                {CLINIC_CONTACT.fullName} • {PROFESSIONAL_REGISTRATION}
              </p>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
