'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { CLINIC_CONTACT } from '@/data/content';

const NAV_LINKS = [
  { name: 'Início', href: '/' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Especialidades', href: '/especialidades' },
  { name: 'Método', href: '/#metodo' },
  { name: 'Unidades', href: '/unidades' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contato', href: '/contato' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#F8F8F5]/90 backdrop-blur-md border-b border-[#18363B]/8 shadow-sm py-3.5'
            : 'bg-transparent py-5 lg:py-7'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="group flex flex-col focus:outline-none">
            <span className="font-serif text-2xl lg:text-[26px] text-[#18363B] font-normal tracking-tight group-hover:text-[#B7925A] transition-colors duration-300">
              Cristiano <span className="text-[#B7925A]">Ávila</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#667174] font-medium mt-0.5">
              Psicologia • Neurociência • Hipnoterapia
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 text-[13px] font-medium text-[#1C2628]/80 hover:text-[#18363B] transition-colors relative group"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-1 left-3.5 right-3.5 h-[1.5px] bg-[#B7925A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}

            <div className="pl-4">
              <a
                href={CLINIC_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs !py-3 !px-6 shadow-sm"
              >
                <span>Agendar Consulta</span>
                <svg className="w-3.5 h-3.5 text-[#B7925A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 rounded-lg text-[#18363B] hover:bg-[#18363B]/5 transition-colors focus:outline-none"
            aria-label="Abrir menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-[#18363B] transition-transform duration-300 ${
                  isMobileOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-[#18363B] transition-opacity duration-300 ${
                  isMobileOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-[#18363B] transition-transform duration-300 ${
                  isMobileOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-[#F8F8F5] pt-28 px-6 pb-12 flex flex-col justify-between lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col space-y-4">
              <span className="tag-gold mb-2">Menu de Navegação</span>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="font-serif text-2xl text-[#18363B] hover:text-[#B7925A] py-2 border-b border-[#18363B]/10 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-8 border-t border-[#18363B]/10 flex flex-col gap-4">
              <a
                href={CLINIC_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileOpen(false)}
                className="btn-gold w-full text-center"
              >
                Agendar Consulta pelo WhatsApp
              </a>
              <div className="text-center text-xs text-[#667174]">
                <p>{CLINIC_CONTACT.phone}</p>
                <p className="mt-1">{CLINIC_CONTACT.email}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
