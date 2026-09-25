"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BreatheExercise() {
  const [isOpen, setIsOpen] = useState(false);
  const [phase, setPhase] = useState<"inspire" | "segure" | "expire">("inspire");

  useEffect(() => {
    if (!isOpen) return;

    const cycle = () => {
      setPhase("inspire");
      setTimeout(() => {
        setPhase("segure");
        setTimeout(() => {
          setPhase("expire");
        }, 4000);
      }, 4000);
    };

    cycle();
    const interval = setInterval(cycle, 12000);

    return () => clearInterval(interval);
  }, [isOpen]);

  const phaseText = {
    inspire: "Inspire lentamente pelo nariz...",
    segure: "Segure o ar com calma...",
    expire: "Expire suavemente pela boca...",
  };

  return (
    <>
      {/* Botão de Ativação Discreto no Rodapé */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 hover:bg-zinc-200 border border-zinc-200/80 text-xs font-semibold text-zinc-700 transition-all shadow-sm"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>Exercício de Respiração (10s)</span>
      </button>

      {/* Modal Minimalista de Acolhimento */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-6 bg-black/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-3xl p-8 sm:p-12 max-w-md w-full text-center relative border border-zinc-200 shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 text-zinc-400 hover:text-black p-2 text-sm"
                aria-label="Fechar exercício"
              >
                ✕
              </button>

              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block mb-2">
                Mindfulness Clínico
              </span>
              <h3 className="text-xl font-bold text-black mb-2 tracking-tight">
                Pausa para Regulação Vagal
              </h3>
              <p className="text-xs text-textMuted font-light mb-8">
                Diminua a frequência cardíaca e acalme o sistema nervoso através da respiração consciente em ciclos 4-4-4.
              </p>

              {/* Círculo Animado que Expande e Contrai */}
              <div className="relative w-48 h-48 mx-auto flex items-center justify-center mb-8">
                <motion.div
                  animate={{
                    scale: phase === "inspire" ? 1.4 : phase === "segure" ? 1.4 : 0.85,
                    backgroundColor: phase === "inspire" ? "rgb(236 253 245)" : phase === "segure" ? "rgb(254 243 199)" : "rgb(244 244 245)",
                  }}
                  transition={{ duration: 4, ease: "easeInOut" }}
                  className="w-36 h-36 rounded-full border border-zinc-200 flex items-center justify-center shadow-inner"
                >
                  <motion.div
                    animate={{
                      scale: phase === "inspire" ? 1.2 : phase === "segure" ? 1.2 : 0.8,
                    }}
                    transition={{ duration: 4, ease: "easeInOut" }}
                    className="w-20 h-20 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs shadow-md uppercase tracking-wider"
                  >
                    {phase}
                  </motion.div>
                </motion.div>
              </div>

              <p className="text-sm font-medium text-black min-h-[24px]">
                {phaseText[phase]}
              </p>

              <div className="mt-8 pt-6 border-t border-zinc-100">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="btn-outline text-xs py-2.5 px-6 w-full"
                >
                  Concluir exercício
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
