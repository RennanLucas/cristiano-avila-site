"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { buildWhatsAppLink } from "@/data/content";

const QUESTIONS = [
  {
    id: 1,
    title: "1. Como você descreveria seus pensamentos ao final do dia?",
    options: [
      { text: "Calmos, consigo desligar com facilidade", points: 0 },
      { text: "Às vezes acelerados, mas consigo descansar", points: 1 },
      { text: "Constantemente preocupados e difíceis de desacelerar", points: 2 },
    ],
  },
  {
    id: 2,
    title: "2. Com que frequência você sente cansaço físico ou desânimo sem causa aparente?",
    options: [
      { text: "Raramente ou apenas após esforço intenso", points: 0 },
      { text: "Alguns dias na semana", points: 1 },
      { text: "Quase todos os dias, acordo já com sensação de exaustão", points: 2 },
    ],
  },
  {
    id: 3,
    title: "3. Você percebe dificuldade de foco ou inquietação para terminar tarefas?",
    options: [
      { text: "Mantenho o foco com facilidade", points: 0 },
      { text: "Oscilo em momentos de sobrecarga", points: 1 },
      { text: "Sinto muita frustração e dispersão frequente", points: 2 },
    ],
  },
  {
    id: 4,
    title: "4. Como está a sua sensação de autonomia diante das suas emoções?",
    options: [
      { text: "Sinto que domino minhas respostas emocionais", points: 0 },
      { text: "Às vezes sinto irritabilidade ou angústia passageira", points: 1 },
      { text: "Sinto que as emoções tomam conta e me paralisam", points: 2 },
    ],
  },
];

export default function SelfAssessmentQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (points: number) => {
    const updated = [...answers, points];
    setAnswers(updated);

    if (currentStep + 1 < QUESTIONS.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const totalScore = answers.reduce((a, b) => a + b, 0);

  const getFeedback = () => {
    if (totalScore <= 2) {
      return {
        level: "Equilíbrio Estável",
        desc: "Seus níveis atuais de sobrecarga parecem baixos. O foco pode ser autoconhecimento preventivo e alta performance.",
        color: "text-emerald-700 bg-emerald-50 border-emerald-200",
      };
    } else if (totalScore <= 5) {
      return {
        level: "Sinais de Sobrecarga Moderada",
        desc: "Você apresenta sintomas intermitentes de ansiedade ou estresse. A intervenção precoce evita o agravamento para quadros crônicos.",
        color: "text-amber-800 bg-amber-50 border-amber-200",
      };
    } else {
      return {
        level: "Alerta de Esgotamento / Alta Tensão",
        desc: "Seus relatos indicam exaustão emocional significativa e sobrecarga cognitiva. É altamente recomendável uma avaliação clínica detalhada.",
        color: "text-rose-800 bg-rose-50 border-rose-200",
      };
    }
  };

  const restart = () => {
    setCurrentStep(0);
    setAnswers([]);
    setShowResult(false);
  };

  const feedback = getFeedback();
  const whatsappMsg = `Olá, Dr. Cristiano! Fiz a autoavaliação no seu site e meu resultado indicou "${feedback.level}". Gostaria de conversar para agendar uma consulta.`;

  return (
    <section id="autoavaliacao" className="py-20 md:py-28 bg-white border-t border-zinc-100">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-zinc-100 text-[10px] font-bold tracking-widest text-zinc-600 uppercase mb-3">
            Ferramenta Interativa
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-3">
            Autoavaliação de Sobrecarga
          </h2>
          <p className="text-textMuted text-sm font-light">
            Um teste rápido de 1 minuto para mapear seu momento emocional. Não substitui diagnóstico clínico.
          </p>
        </div>

        <div className="bg-surface rounded-3xl p-6 sm:p-10 border border-zinc-200/80 shadow-apple min-h-[320px] flex flex-col justify-between">
          {!showResult ? (
            <div>
              {/* Progresso do Quiz */}
              <div className="flex items-center justify-between text-xs text-textMuted mb-6 font-medium">
                <span>Pergunta {currentStep + 1} de {QUESTIONS.length}</span>
                <span className="font-mono text-zinc-400">
                  {Math.round(((currentStep + 1) / QUESTIONS.length) * 100)}%
                </span>
              </div>
              <div className="w-full bg-zinc-200 h-1.5 rounded-full overflow-hidden mb-8">
                <div
                  className="bg-black h-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}
                />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-black mb-6 tracking-tight">
                {QUESTIONS[currentStep].title}
              </h3>

              <div className="space-y-3">
                {QUESTIONS[currentStep].options.map((opt, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleSelect(opt.points)}
                    className="w-full text-left p-4 rounded-2xl bg-white border border-zinc-200/80 hover:border-black hover:shadow-sm text-sm font-medium text-zinc-800 transition-all active:scale-[0.99]"
                  >
                    {opt.text}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-4 space-y-6"
            >
              <div className={`inline-block px-4 py-2 rounded-full text-xs font-bold border ${feedback.color}`}>
                {feedback.level}
              </div>

              <p className="text-base text-zinc-700 max-w-lg mx-auto font-light leading-relaxed">
                {feedback.desc}
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={buildWhatsAppLink(whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full sm:w-auto text-xs py-3 px-8"
                >
                  Falar com Dr. Cristiano sobre este resultado
                </a>
                <button
                  type="button"
                  onClick={restart}
                  className="text-xs text-textMuted hover:text-black underline underline-offset-4"
                >
                  Refazer o teste
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
