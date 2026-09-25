"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Especialidades", href: "#especialidades" },
    { name: "Sobre", href: "#sobre" },
    { name: "Metodologia", href: "#metodologia" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Unidades", href: "#unidades" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/70 backdrop-blur-md border-b border-zinc-200/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-10 flex items-center gap-2 group">
          <span className="font-semibold text-lg tracking-tight text-black">
            Cristiano Ávila
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-textMuted hover:text-black transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://wa.me/5511943015504"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary py-2 px-5 text-xs"
          >
            Agendar Consulta
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-10 p-2 -mr-2 text-black"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Abrir menu</span>
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
            className="absolute top-16 left-0 right-0 bg-white border-b border-zinc-100 shadow-lg md:hidden"
          >
            <nav className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-black rounded-lg hover:bg-zinc-50"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-zinc-100 px-4 pb-2">
                <a
                  href="https://wa.me/5511943015504"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full"
                >
                  Agendar Consulta
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
