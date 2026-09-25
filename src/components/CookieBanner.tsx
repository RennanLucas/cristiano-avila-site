'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('ca_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('ca_cookie_consent', 'accepted');
    setShow(false);
  };

  const decline = () => {
    localStorage.setItem('ca_cookie_consent', 'declined');
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-6 left-6 right-6 sm:left-6 sm:right-auto sm:max-w-md z-50 bg-white rounded-2xl p-5 shadow-2xl border border-[#18363B]/10"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B7925A]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#18363B]">
                Privacidade & Cookies (LGPD)
              </span>
            </div>

            <p className="text-xs text-[#667174] leading-relaxed">
              Utilizamos cookies essenciais para garantir o correto funcionamento e segurança da sua navegação. Respeitamos sua privacidade conforme as diretrizes da LGPD.{' '}
              <Link href="/politica-de-privacidade" className="text-[#18363B] font-medium underline">
                Saiba mais
              </Link>.
            </p>

            <div className="flex items-center gap-2.5 pt-1">
              <button
                onClick={accept}
                className="flex-1 py-2 px-3 rounded-lg text-xs font-semibold bg-[#18363B] text-white hover:bg-[#0F262B] transition-colors"
              >
                Aceitar todos
              </button>
              <button
                onClick={decline}
                className="flex-1 py-2 px-3 rounded-lg text-xs font-medium border border-gray-200 text-[#667174] hover:text-[#18363B] hover:bg-gray-50 transition-colors"
              >
                Apenas necessários
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
