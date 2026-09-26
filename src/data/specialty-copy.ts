export type SpecialtyCopy = {
  subtitle: string;
  shortDesc: string;
  summary: string;
  fullDesc: string[];
  indications: string[];
  benefits: string[];
};

export const SPECIALTY_COPY: Record<string, SpecialtyCopy> = {
  psicoterapia: {
    subtitle: "Escuta clínica para compreender emoções, padrões e relações.",
    shortDesc: "Processo terapêutico voltado à compreensão do sofrimento emocional, dos padrões de comportamento e das relações que atravessam o cotidiano.",
    summary: "A psicoterapia cria um espaço de conversa clínica para organizar experiências, reconhecer padrões recorrentes e ampliar a compreensão sobre escolhas, emoções e vínculos.",
    fullDesc: [
      "Na psicoterapia, situações atuais podem ser exploradas junto da história de vida para compreender como determinados modos de pensar, sentir e reagir foram se formando ao longo do tempo.",
      "As sessões também podem abordar ansiedade, conflitos relacionais, perdas, mudanças importantes, autocobrança e outras questões que estejam interferindo na vida cotidiana.",
      "O trabalho clínico pode utilizar recursos de diferentes referenciais psicológicos de acordo com a formação profissional e com o que fizer sentido para o processo em curso."
    ],
    indications: [
      "Ansiedade, estresse e sobrecarga emocional",
      "Conflitos nos relacionamentos e dificuldades de comunicação",
      "Luto, mudanças de vida e momentos de crise",
      "Autoconhecimento, escolhas e tomada de decisões"
    ],
    benefits: [
      "Reconhecimento de padrões emocionais e comportamentais",
      "Desenvolvimento de recursos para lidar com situações difíceis",
      "Comunicação, limites e relações interpessoais",
      "Maior clareza sobre sentimentos, escolhas e prioridades"
    ]
  },
  hipnoterapia: {
    subtitle: "Hipnose clínica como recurso complementar à psicoterapia.",
    shortDesc: "Uso clínico da hipnose para favorecer foco atencional, relaxamento e exploração de experiências relevantes ao trabalho terapêutico.",
    summary: "A hipnose clínica utiliza atenção focalizada e relaxamento como ferramentas de trabalho. A pessoa permanece participativa durante o processo e pode interrompê-lo a qualquer momento.",
    fullDesc: [
      "Na prática clínica, a hipnose pode ser utilizada para aprofundar a atenção sobre sensações, imagens, memórias e respostas emocionais que aparecem durante o processo terapêutico.",
      "O recurso não depende de perda de consciência ou de controle. A participação é ativa, com comunicação entre profissional e paciente ao longo da experiência.",
      "Cristiano Ávila possui formação complementar em hipnoterapia pelo OMNI Training Center e integra esse recurso ao trabalho clínico quando ele faz parte da proposta terapêutica."
    ],
    indications: [
      "Medos e respostas de ansiedade",
      "Dificuldade de relaxamento e tensão persistente",
      "Experiências emocionalmente marcantes",
      "Padrões automáticos que a pessoa deseja compreender melhor"
    ],
    benefits: [
      "Atenção focalizada e percepção de sensações internas",
      "Exploração de associações, imagens e memórias",
      "Relaxamento como recurso dentro da sessão",
      "Ampliação da observação sobre respostas emocionais automáticas"
    ]
  },
  neuropsicologia: {
    subtitle: "Cognição, atenção, memória e comportamento na compreensão clínica.",
    shortDesc: "Integra conhecimentos sobre funções cognitivas e comportamento para compreender como atenção, memória, organização e emoções aparecem no dia a dia.",
    summary: "Essa frente observa a relação entre funcionamento cognitivo, emoções e comportamento, ajudando a organizar queixas ligadas a atenção, memória, planejamento e desempenho cotidiano.",
    fullDesc: [
      "A neuropsicologia estuda a relação entre processos cerebrais, cognição, emoções e comportamento. Na clínica, esse olhar pode contribuir para compreender queixas que envolvem atenção, memória, organização e tomada de decisão.",
      "A investigação parte da história relatada, das situações em que as dificuldades aparecem e do impacto percebido na rotina, nos estudos, no trabalho ou nas relações.",
      "Quando necessário, as informações levantadas também podem ajudar a organizar o diálogo com outros profissionais envolvidos no cuidado."
    ],
    indications: [
      "Queixas de atenção, concentração ou organização",
      "Dificuldades de memória percebidas no cotidiano",
      "Problemas de planejamento, priorização ou tomada de decisão",
      "Mudanças no desempenho cognitivo percebidas pela própria pessoa"
    ],
    benefits: [
      "Compreensão mais clara das situações em que as dificuldades aparecem",
      "Identificação de estratégias práticas para a rotina",
      "Organização de informações sobre funcionamento cognitivo",
      "Acompanhamento de aspectos cognitivos associados ao bem-estar emocional"
    ]
  },
  pnl: {
    subtitle: "Comunicação, linguagem e percepção como recursos complementares.",
    shortDesc: "Ferramentas de linguagem e percepção utilizadas em exercícios de comunicação, definição de objetivos e observação de padrões de resposta.",
    summary: "Recursos de PNL podem ser usados para observar linguagem, comunicação e a maneira como a pessoa organiza determinadas experiências.",
    fullDesc: [
      "Algumas técnicas de Programação Neurolinguística trabalham com linguagem, percepção e representação de experiências. Na clínica, esses recursos podem aparecer em exercícios específicos de comunicação e auto-observação.",
      "O foco é perceber como determinadas formas de interpretar situações influenciam respostas, escolhas e interações com outras pessoas.",
      "Essas ferramentas aparecem como exercícios pontuais dentro de um trabalho psicológico mais amplo, vinculadas ao tema que está sendo discutido em sessão."
    ],
    indications: [
      "Dificuldades de comunicação e expressão",
      "Padrões de interpretação que geram conflitos recorrentes",
      "Definição de metas e organização de prioridades",
      "Treino de percepção e auto-observação"
    ],
    benefits: [
      "Observação de padrões de linguagem e comunicação",
      "Exploração de diferentes formas de interpretar uma situação",
      "Organização de objetivos de curto e médio prazo",
      "Desenvolvimento de estratégias de comunicação mais claras"
    ]
  },
  "psicologia-sem-fronteiras": {
    subtitle: "Atendimento psicológico online para brasileiros no Brasil e no exterior.",
    shortDesc: "Consultas por videochamada para quem busca acesso ao atendimento psicológico independentemente da cidade onde mora.",
    summary: "O atendimento online permite realizar as sessões por videochamada, mantendo continuidade mesmo para quem mora longe dos consultórios presenciais.",
    fullDesc: [
      "As sessões online acontecem por videochamada e seguem a mesma organização de horário e duração utilizada no atendimento clínico presencial.",
      "A modalidade pode ser conveniente para brasileiros que vivem em outras cidades ou países, pessoas com rotina de viagens ou quem prefere realizar a sessão de casa.",
      "Para a consulta, é importante contar com conexão estável e um ambiente reservado onde seja possível conversar com tranquilidade."
    ],
    indications: [
      "Brasileiros que residem em outras cidades ou no exterior",
      "Pessoas com dificuldade de deslocamento até o consultório",
      "Rotinas de trabalho ou viagem que exigem maior flexibilidade",
      "Quem prefere realizar as sessões em ambiente próprio e reservado"
    ],
    benefits: [
      "Acesso ao atendimento sem necessidade de deslocamento",
      "Continuidade das sessões durante viagens ou mudanças de cidade",
      "Mais opções para conciliar a consulta com a rotina",
      "Atendimento por videochamada em local escolhido pelo paciente"
    ]
  },
  "terapia-em-grupo": {
    subtitle: "Encontros mediados para troca, reflexão e desenvolvimento interpessoal.",
    shortDesc: "Espaço terapêutico em grupo no qual experiências podem ser compartilhadas e trabalhadas com mediação profissional.",
    summary: "A terapia em grupo reúne pessoas em encontros mediados, criando espaço para escuta, troca de experiências e observação de como cada participante se relaciona consigo e com os outros.",
    fullDesc: [
      "O grupo permite que diferentes experiências sejam ouvidas dentro de um espaço estruturado, com mediação profissional e acordos de convivência entre os participantes.",
      "Além dos temas trazidos para cada encontro, as próprias interações do grupo podem oferecer material para refletir sobre comunicação, limites, pertencimento e formas de se relacionar.",
      "A composição, o formato e a proposta de cada grupo podem variar de acordo com o tema e com o planejamento dos encontros."
    ],
    indications: [
      "Dificuldades de comunicação e convivência",
      "Sensação de isolamento ou dificuldade de pertencimento",
      "Questões relacionais que se repetem em diferentes contextos",
      "Interesse em aprender também a partir da troca com outras pessoas"
    ],
    benefits: [
      "Escuta de diferentes perspectivas sobre experiências semelhantes",
      "Observação de padrões de comunicação e relacionamento",
      "Exercício de expressão, escuta e estabelecimento de limites",
      "Construção de repertório a partir das trocas do grupo"
    ]
  }
};
