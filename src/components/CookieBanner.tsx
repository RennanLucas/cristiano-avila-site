'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const acknowledged = localStorage.getItem('ca_privacy_notice_seen');
    if (!acknowledged) {
      const timer = setTimeout(() => setShow(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const close = () => {
    localStorage.setItem('ca_privacy_notice_seen', '1');
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-5 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-50 bg-white rounded-2xl p-5 shadow-2xl border border-zinc-200"
          role="dialog"
          aria-label="Aviso de privacidade"
        >
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-black">Privacidade</p>
            <p className="text-xs text-textMuted leading-relaxed">
              O site utiliza apenas recursos necessários ao funcionamento e às preferências de navegação. Consulte a{' '}
              <Link href="/politica-de-privacidade" className="text-black font-medium underline underline-offset-2">
                Política de Privacidade
              </Link>{' '}
              para saber mais.
            </p>
            <button
              type="button"
              onClick={close}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-black text-white hover:bg-zinc-800 transition-colors"
            >
              Entendi
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
