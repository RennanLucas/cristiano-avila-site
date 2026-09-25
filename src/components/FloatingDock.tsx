"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CLINIC_CONTACT, buildWhatsAppLink } from "@/data/content";
import { PROFESSIONAL_REGISTRATION } from "@/lib/site-policy";

export default function FloatingDock() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.aside
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-0 sm:bottom-6 left-0 right-0 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 z-40 bg-white/95 sm:rounded-full backdrop-blur-xl border-t sm:border border-zinc-200 shadow-2xl px-4 py-2.5 sm:py-2"
          style={{ paddingBottom: "max(10px, env(safe-area-inset-bottom))" }}
          aria-label="Atalho para agendamento"
        >
          <div className="flex items-center justify-between sm:justify-start gap-4 sm:gap-5">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="relative w-9 h-9 sm:w-8 sm:h-8 rounded-full overflow-hidden border border-zinc-200 bg-zinc-100 shrink-0">
                <Image src={CLINIC_CONTACT.avatarUrl} alt="Cristiano Ávila" fill sizes="36px" className="object-cover object-top" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-black truncate">Cristiano Ávila</p>
                <p className="text-[10px] text-zinc-500 truncate">Psicólogo • {PROFESSIONAL_REGISTRATION}</p>
              </div>
            </div>

            <a
              href={buildWhatsAppLink("Olá, Dr. Cristiano. Gostaria de verificar a disponibilidade para uma consulta.")}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center justify-center bg-black text-white px-4 py-2.5 sm:py-2 rounded-full text-xs font-semibold hover:bg-zinc-800 transition-colors"
            >
              Ver disponibilidade
            </a>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
