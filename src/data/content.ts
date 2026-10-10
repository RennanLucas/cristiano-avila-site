export * from "./content-legacy";

import type { Article } from "./content-legacy";
import {
  CLINIC_CONTACT as LEGACY_CLINIC_CONTACT,
  UNITS_DATA as LEGACY_UNITS_DATA,
} from "./content-legacy";

const WHATSAPP_PHONE = "(11) 98061-1571";
const WHATSAPP_PHONE_RAW = "5511980611571";
const DEFAULT_WHATSAPP_MESSAGE =
  "Olá, gostaria de informações sobre o atendimento psicológico com Cristiano Ávila.";

export const CLINIC_CONTACT = {
  ...LEGACY_CLINIC_CONTACT,
  phone: WHATSAPP_PHONE,
  phoneRaw: WHATSAPP_PHONE_RAW,
  email: "",
  whatsappUrl: `https://wa.me/${WHATSAPP_PHONE_RAW}?text=${encodeURIComponent(DEFAULT_WHATSAPP_MESSAGE)}`,
};

export function buildWhatsAppLink(customMessage: string): string {
  return `https://wa.me/${WHATSAPP_PHONE_RAW}?text=${encodeURIComponent(customMessage)}`;
}

export const UNITS_DATA = LEGACY_UNITS_DATA.map((unit) => ({
  ...unit,
  phone: WHATSAPP_PHONE,
  whatsapp: WHATSAPP_PHONE_RAW,
}));

/**
 * Conteúdo editorial revisado para linguagem psicoeducativa e responsável.
 * Evita promessas de resultado, causalidade neurobiológica simplificada e
 * afirmações clínicas absolutas. O blog não substitui avaliação individual.
 */
export const ARTICLES_DATA: Article[] = [
  {
    slug: "ciclo-invisivel",
    title: "Ciclo Invisível: por que alguns padrões parecem se repetir?",
    category: "Desenvolvimento Pessoal",
    date: "23/09/2026",
    readTime: "7 min de leitura",
    author: "Cristiano Ávila",
    excerpt: "Uma leitura sobre como experiências anteriores, hábitos e respostas emocionais podem influenciar escolhas atuais — e como a psicoterapia pode ajudar a observar esses padrões com mais clareza.",
    imageUrl: "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?w=900&q=85&fit=crop",
    content: [
      "Você já percebeu que certas reações, escolhas ou conflitos parecem reaparecer mesmo quando existe vontade de agir de outra forma? Esse tipo de repetição pode ter diferentes explicações e costuma envolver a combinação entre história de vida, hábitos, contexto atual, emoções e formas aprendidas de responder às situações.",
      "Experiências anteriores podem influenciar a maneira como interpretamos acontecimentos do presente. Isso não significa que exista uma causa única ou uma memória específica responsável por todo comportamento. Na prática clínica, é mais útil observar quando o padrão aparece, o que costuma antecedê-lo e quais consequências ele produz.",
      "Ao reconhecer essas sequências com mais clareza, torna-se possível experimentar respostas diferentes e avaliar o que funciona melhor em situações reais. Mudanças psicológicas geralmente são graduais e podem exigir tempo, repetição e revisão de estratégias.",
      "Na psicoterapia, esse trabalho pode incluir a exploração de pensamentos, emoções, relações, limites e comportamentos recorrentes. O objetivo não é apagar o passado, mas ampliar a compreensão sobre o presente e construir alternativas mais coerentes com as necessidades atuais."
    ]
  },
  {
    slug: "ilusao-de-controlar-o-incontrolavel",
    title: "A ilusão de controlar o incontrolável: quando antecipar tudo vira sobrecarga",
    category: "Ansiedade & Emoções",
    date: "17/08/2026",
    readTime: "6 min de leitura",
    author: "Cristiano Ávila",
    excerpt: "Antecipar cenários pode trazer uma sensação momentânea de segurança, mas também pode aumentar a tensão quando a tentativa de prever tudo ocupa espaço demais no cotidiano.",
    imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=900&q=85&fit=crop",
    content: [
      "Planejar faz parte da vida. O problema aparece quando a necessidade de prever cada possibilidade passa a ocupar grande parte do tempo, aumenta a tensão e dificulta estar presente no que realmente está acontecendo.",
      "Em períodos de ansiedade, a mente pode produzir muitos cenários possíveis como tentativa de reduzir a incerteza. Ainda assim, pensar repetidamente sobre todos eles não garante controle sobre o futuro e pode alimentar um ciclo de preocupação, checagem e cansaço.",
      "Uma pergunta útil é distinguir o que depende de uma ação concreta agora daquilo que, por enquanto, permanece incerto. Essa diferença ajuda a direcionar energia para decisões possíveis sem exigir uma segurança que nenhuma pessoa consegue ter o tempo todo.",
      "Na psicoterapia, podem ser trabalhadas a relação com a incerteza, as estratégias usadas para buscar segurança e os efeitos dessas estratégias na rotina. O processo é individual e não existe uma técnica única adequada para todas as pessoas."
    ]
  },
  {
    slug: "mascara-que-ficou-colada-a-pele",
    title: "A máscara que ficou colada à pele: quando agradar os outros deixa pouco espaço para si",
    category: "Autoconhecimento",
    date: "14/08/2026",
    readTime: "8 min de leitura",
    author: "Cristiano Ávila",
    excerpt: "Adaptar-se às expectativas de outras pessoas pode ser necessário em muitos momentos, mas também pode se tornar desgastante quando os próprios limites deixam de ser percebidos.",
    imageUrl: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=900&q=85&fit=crop",
    content: [
      "Ser disponível, responsável e atento às necessidades de outras pessoas pode ser uma qualidade. A dificuldade surge quando esse papel se torna tão constante que quase não sobra espaço para perceber o próprio cansaço, preferências ou limites.",
      "Algumas pessoas aprendem cedo que evitar conflitos, corresponder às expectativas ou assumir muitas responsabilidades ajuda a manter vínculos e reduzir tensões. Com o tempo, porém, esse modo de funcionar pode continuar mesmo em contextos nos quais já não é necessário.",
      "Perceber esse padrão não significa deixar de cuidar dos outros. Significa observar quando a adaptação é uma escolha e quando ela acontece automaticamente, acompanhada de culpa, medo de desapontar ou dificuldade para dizer não.",
      "A psicoterapia pode oferecer um espaço para examinar essas relações, reconhecer necessidades próprias e experimentar formas mais claras de comunicação e estabelecimento de limites. Esse movimento costuma ser construído aos poucos, respeitando a história e o contexto de cada pessoa."
    ]
  },
  {
    slug: "o-alarme-que-nao-desliga",
    title: "O alarme que não desliga: entendendo a ansiedade sem simplificações",
    category: "Psicologia & Ansiedade",
    date: "12/08/2026",
    readTime: "5 min de leitura",
    author: "Cristiano Ávila",
    excerpt: "Ansiedade envolve pensamentos, emoções, sensações físicas e contexto. Entender essa combinação pode ser mais útil do que reduzir a experiência a uma única região do cérebro ou a uma única causa.",
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=900&q=85&fit=crop",
    content: [
      "Ouvir que alguém deveria apenas 'relaxar' ou 'pensar menos' raramente ajuda quando a ansiedade está intensa. A experiência pode envolver aceleração dos pensamentos, tensão física, dificuldade de concentração, alterações no sono e uma sensação persistente de ameaça ou preocupação.",
      "O organismo possui sistemas envolvidos na detecção de ameaça e na preparação para responder a situações importantes. Na ansiedade, porém, não é adequado explicar toda a experiência por uma única estrutura cerebral ou por um mecanismo isolado: fatores psicológicos, biológicos, sociais e situacionais podem interagir.",
      "Por isso, a avaliação precisa considerar frequência, intensidade, situações em que os sintomas aparecem, impacto na rotina e outros aspectos da saúde. Em alguns casos, também pode ser indicado acompanhamento médico ou trabalho conjunto com outros profissionais.",
      "A psicoterapia pode ajudar a compreender padrões de preocupação, evitação e resposta ao estresse, além de desenvolver estratégias compatíveis com cada caso. Recursos complementares, quando utilizados, devem fazer sentido para a demanda e não substituem uma avaliação clínica individualizada."
    ]
  }
];
