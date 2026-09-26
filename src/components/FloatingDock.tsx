"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CLINIC_CONTACT, buildWhatsAppLink } from "@/data/content";
import { PROFESSIONAL_REGISTRATION } from "@/lib/site-policy";

export default function FloatingDock() {
  const [visible, setVisible] = useState(false);
  const visibleRef = useRef(false);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const update = () => {
      const nextVisible = Math.max(0, window.scrollY) > 500;

      if (nextVisible !== visibleRef.current) {
        visibleRef.current = nextVisible;
        setVisible(nextVisible);
      }

      frameRef.current = null;
    };

    const handleScroll = () => {
      if (frameRef.current !== null) return;
      frameRef.current = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

  if (!visible) return null;

  return (
    <aside
      className="fixed inset-x-2.5 bottom-2.5 z-40 rounded-2xl border border-zinc-200 bg-white/[0.98] px-2.5 py-2 shadow-[0_14px_40px_rgba(0,0,0,0.16)] min-[390px]:inset-x-3 min-[390px]:bottom-3 min-[390px]:px-3 min-[390px]:py-2.5 sm:hidden"
      style={{ paddingBottom: "max(8px, env(safe-area-inset-bottom))" }}
      aria-label="Atalho para agendamento"
    >
      <div className="flex items-center justify-between gap-2.5 min-[390px]:gap-3">
        <div className="flex min-w-0 items-center gap-2 min-[390px]:gap-2.5">
          <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full border border-zinc-200 bg-zinc-100 min-[390px]:h-9 min-[390px]:w-9">
            <Image
              src={CLINIC_CONTACT.avatarUrl}
              alt="Cristiano Ávila"
              fill
              sizes="36px"
              className="object-cover object-top"
            />
          </div>
          <div className="min-w-0">
            <p className="truncate text-[11px] font-semibold text-black min-[390px]:text-xs">Cristiano Ávila</p>
            <p className="hidden truncate text-[9px] text-zinc-500 min-[350px]:block min-[390px]:text-[10px]">
              Psicólogo • {PROFESSIONAL_REGISTRATION}
            </p>
          </div>
        </div>

        <a
          href={buildWhatsAppLink("Olá, Dr. Cristiano. Gostaria de verificar a disponibilidade para uma consulta.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 touch-manipulation items-center justify-center rounded-full bg-black px-3.5 py-2.5 text-[11px] font-semibold text-white transition-colors duration-150 active:bg-zinc-800 min-[390px]:px-4 min-[390px]:text-xs"
        >
          <span className="min-[370px]:hidden">Agendar</span>
          <span className="hidden min-[370px]:inline">Disponibilidade</span>
        </a>
      </div>
    </aside>
  );
}
