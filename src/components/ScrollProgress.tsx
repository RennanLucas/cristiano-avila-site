"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useState, useEffect } from "react";

export default function ScrollProgress() {
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setShowTopBtn(latest > 400);
    });
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Barra de Progresso Ultrafina no Topo */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-zinc-400 via-black to-zinc-800 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Botão Flutuante Voltar ao Topo */}
      <motion.button
        type="button"
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: showTopBtn ? 1 : 0,
          scale: showTopBtn ? 1 : 0.8,
          pointerEvents: showTopBtn ? "auto" : "none",
        }}
        transition={{ duration: 0.2 }}
        aria-label="Voltar ao topo"
        className="fixed bottom-6 left-6 z-40 p-3 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200/80 shadow-apple text-black hover:bg-black hover:text-white transition-all duration-200 group"
      >
        <svg
          className="w-4 h-4 transform group-hover:-translate-y-0.5 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </>
  );
}
