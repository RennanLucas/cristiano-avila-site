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
    handleScroll();
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
          className="fixed inset-x-3 bottom-3 z-40 rounded-2xl border border-zinc-200 bg-white/95 px-3 py-2.5 shadow-2xl backdrop-blur-xl sm:hidden"
          style={{ paddingBottom: "max(10px, env(safe-area-inset-bottom))" }}
          aria-label="Atalho para agendamento"
        >
          <div className="flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-2.5">
              <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-zinc-200 bg-zinc-100">
                <Image src={CLINIC_CONTACT.avatarUrl} alt="Cristiano Ávila" fill sizes="36px" className="object-cover object-top" />
              </div>
              <div className="min-w-0">
                <p className="truncate text-xs font-semibold text-black">Cristiano Ávila</p>
                <p className="truncate text-[10px] text-zinc-500">Psicólogo • {PROFESSIONAL_REGISTRATION}</p>
              </div>
            </div>

            <a
              href={buildWhatsAppLink("Olá, Dr. Cristiano. Gostaria de verificar a disponibilidade para uma consulta.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-black px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-zinc-800"
            >
              Disponibilidade
            </a>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
