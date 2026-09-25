'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CLINIC_CONTACT } from '@/data/content';

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
        >
          {/* Tooltip speech bubble */}
          <div className="hidden sm:block bg-white text-black text-xs font-semibold py-2 px-3.5 rounded-full shadow-apple border border-zinc-200/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            Fale com Cristiano Ávila
          </div>

          <a
            href={CLINIC_CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar pelo WhatsApp com Cristiano Ávila"
            className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 relative"
          >
            {/* Ping indicator */}
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-zinc-200 rounded-full border-2 border-white" />

            <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.913.913l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.675-.839-6.481-2.373l-.388-.322-2.65.889.889-2.65-.322-.388A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
