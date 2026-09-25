"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CLINIC_CONTACT } from "@/data/content";

export default function SobrePage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main className="min-h-screen bg-white text-[#111111] overflow-x-hidden selection:bg-black selection:text-white">
      <Header />
      
      {/* Hero Parallax */}
      <section ref={containerRef} className="relative h-[70vh] flex items-center justify-center overflow-hidden border-b border-zinc-100">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <img
            src={CLINIC_CONTACT.avatarUrl}
            alt="Cristiano Ávila"
            className="w-full h-full object-cover object-[center_20%] grayscale opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
        </motion.div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-[10px] font-bold tracking-widest text-zinc-500 uppercase mb-6">
              Trajetória Profissional
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-black leading-tight mb-6">
              Escuta atenta e <br className="hidden md:block" />
              <span className="text-zinc-400">ciência aplicada.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white relative z-20">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="prose prose-zinc prose-lg lg:prose-xl font-light text-textMuted leading-relaxed mx-auto"
          >
            <p className="text-2xl text-black font-medium tracking-tight mb-10 leading-snug">
              "Acredito que o verdadeiro processo terapêutico ocorre na interseção entre o rigor metodológico da neurociência e a humanidade do encontro clínico."
            </p>

            <p>
              Sou <strong>Cristiano Ávila da Silva</strong>, psicólogo clínico, neurocientista e hipnoterapeuta com mais de 10 anos de experiência dedicados ao estudo do comportamento humano e à otimização da saúde mental.
            </p>

            <h3 className="text-black font-semibold tracking-tight mt-12 mb-4">A Abordagem Clínica</h3>
            <p>
              Minha prática clínica não se baseia em protocolos engessados. Pelo contrário, ela é o resultado da integração cuidadosa entre a Psicologia Baseada em Evidências e as mais recentes descobertas da Neurociência. Esse modelo permite que as intervenções sejam desenhadas sob medida para a arquitetura mental de cada paciente.
            </p>

            <p>
              Trabalho principalmente com adultos enfrentando quadros de ansiedade crônica, TDAH, desregulação emocional profunda, traumas e a constante busca por alta performance sob pressão.
            </p>

            <h3 className="text-black font-semibold tracking-tight mt-12 mb-4">Certificações e Background</h3>
            <ul className="list-disc pl-5 space-y-3">
              <li>Membro certificado do <strong>OMNI Training Center</strong> (EUA/Suíça), uma das mais rigorosas instituições de hipnoterapia clínica do mundo.</li>
              <li>Atuação institucional anterior junto à <strong>Fundação Casa Atibaia</strong>, liderando intervenções de reprogramação mental e reinserção social de jovens em cenários de alta complexidade.</li>
              <li>Especialização contínua em Neurociência Aplicada ao Comportamento.</li>
            </ul>

            <div className="mt-16 pt-10 border-t border-zinc-100">
              <img 
                src={CLINIC_CONTACT.avatarUrl} 
                alt="Dr. Cristiano Ávila" 
                className="w-full h-[400px] object-cover object-top rounded-2xl mb-8 grayscale hover:grayscale-0 transition-all duration-700 shadow-apple"
              />
              <p className="text-sm text-center">
                Atendimentos presenciais nos consultórios de <strong className="text-black">São Paulo, Atibaia e Santos</strong>, ou sessões online globais com a mesma eficácia metodológica.
              </p>
            </div>

          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
