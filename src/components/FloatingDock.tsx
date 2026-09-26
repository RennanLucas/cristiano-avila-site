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
          className="fixed inset-x-2.5 bottom-2.5 z-40 rounded-2xl border border-zinc-200 bg-white/95 px-2.5 py-2 shadow-2xl backdrop-blur-xl min-[390px]:inset-x-3 min-[390px]:bottom-3 min-[390px]:px-3 min-[390px]:py-2.5 sm:hidden"
          style={{ paddingBottom: "max(8px, env(safe-area-inset-bottom))" }}
          aria-label="Atalho para agendamento"
        >
          <div className="flex items-center justify-between gap-2.5 min-[390px]:gap-3">
            <div className="flex min-w-0 items-center gap-2 min-[390px]:gap-2.5">
              <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full border border-zinc-200 bg-zinc-100 min-[390px]:h-9 min-[390px]:w-9">
                <Image src={CLINIC_CONTACT.avatarUrl} alt="Cristiano Ávila" fill sizes="36px" className="object-cover object-top" />
              </div>
              <div className="min-w-0">
                <p className="truncate text-[11px] font-semibold text-black min-[390px]:text-xs">Cristiano Ávila</p>
                <p className="hidden truncate text-[9px] text-zinc-500 min-[350px]:block min-[390px]:text-[10px]">Psicólogo • {PROFESSIONAL_REGISTRATION}</p>
              </div>
            </div>

            <a
              href={buildWhatsAppLink("Olá, Dr. Cristiano. Gostaria de verificar a disponibilidade para uma consulta.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-black px-3.5 py-2.5 text-[11px] font-semibold text-white transition-colors hover:bg-zinc-800 min-[390px]:px-4 min-[390px]:text-xs"
            >
              <span className="min-[370px]:hidden">Agendar</span>
              <span className="hidden min-[370px]:inline">Disponibilidade</span>
            </a>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
