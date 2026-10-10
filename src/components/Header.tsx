"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CLINIC_CONTACT } from "@/data/contact-lite";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };

    const previousOverflow = document.documentElement.style.overflow;

    if (mobileMenuOpen) {
      document.documentElement.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.documentElement.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => setMobileMenuOpen((open) => !open);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-2.5 pt-2.5 sm:px-5 sm:pt-4">
      <div className="relative mx-auto max-w-7xl overflow-visible rounded-[19px] border border-zinc-200/80 bg-white/[0.96] shadow-[0_10px_30px_rgba(0,0,0,0.06)] sm:rounded-[22px]">
        <div className="flex items-center justify-between gap-2 px-2.5 py-2.5 min-[390px]:gap-3 min-[390px]:px-3 sm:px-4 lg:gap-4 lg:px-5">
          <Link
            href="/"
            className="relative z-10 flex min-w-0 flex-1 items-center lg:flex-none"
            aria-label="Ir para a página inicial"
          >
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
            className="hidden items-center rounded-full border border-zinc-200/80 bg-zinc-50/95 px-1.5 py-1 lg:flex"
            aria-label="Navegação principal"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="rounded-full px-3.5 py-2 text-[11px] font-medium text-zinc-600 transition-colors duration-150 hover:bg-white hover:text-black xl:px-4"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <span className="hidden text-[9px] font-semibold uppercase tracking-[0.16em] text-zinc-500 2xl:inline">
              Presencial & online
            </span>
            <a
              href={CLINIC_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-5 py-2.5 text-[11px] shadow-none"
            >
              Consultar agenda
              <span className="ml-2" aria-hidden="true">↗</span>
            </a>
          </div>

          <button
            type="button"
            className="relative z-10 flex h-11 w-11 shrink-0 touch-manipulation select-none items-center justify-center rounded-xl border border-zinc-200/90 bg-white text-black transition-colors duration-150 active:bg-zinc-100 lg:hidden"
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
          className={`absolute inset-x-0 top-[calc(100%+8px)] max-h-[calc(100dvh-86px)] overscroll-contain overflow-y-auto rounded-[20px] border border-zinc-200/90 bg-white/[0.99] p-2.5 shadow-[0_22px_60px_rgba(0,0,0,0.14)] transition-[opacity,transform,visibility] duration-150 ease-out sm:rounded-[22px] sm:p-3 lg:hidden ${
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
              <a
                href={CLINIC_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full touch-manipulation py-3.5 text-center text-xs font-semibold"
              >
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
