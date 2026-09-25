export interface Specialty {
  id: string;
  slug: string;
  num: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  fullDesc: string[];
  indications: string[];
  benefits: string[];
  imageUrl: string;
  badge: string;
}

export interface Article {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  excerpt: string;
  content: string[];
  imageUrl: string;
}

export interface Unit {
  id: string;
  city: string;
  state: string;
  title: string;
  address: string;
  complement: string;
  neighborhood: string;
  zip: string;
  phone: string;
  whatsapp: string;
  mapEmbedUrl: string;
  mapsExternalLink: string;
  hours: string;
}

export interface Testimonial {
  id: number;
  name: string;
  date: string;
  city?: string;
  text: string;
  treatment: string;
  initials: string;
}

export const CLINIC_CONTACT = {
  name: "Cristiano Ávila",
  fullName: "Cristiano Ávila da Silva",
  title: "Psicólogo & Hipnoterapeuta Clínico",
  subtitles: "Psicologia • Neurociência • Hipnoterapia",
  phone: "(11) 99523-5839",
  phoneRaw: "5511995235839",
  email: "contato@cristianoavilapsicologo.com.br",
  whatsappUrl: "https://wa.me/5511995235839?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20atendimento%20psicol%C3%B3gico%20com%20Cristiano%20%C3%81vila.",
  doctoraliaUrl: "https://www.doctoralia.com.br/cristiano-avila-da-silva/psicologo/sao-bernardo-do-campo",
  zenklubUrl: "https://zenklub.com.br/psicologos/cristiano-avila-da-silva/",
  instagram: "https://www.instagram.com/dr.cristianoavilla/",
  facebook: "https://www.facebook.com/share/17h4a7qP6Y/",
  youtube: "https://youtube.com/@cristianoavilapsi?si=P42fyPQubOZbYq1f",
  youtubeHandle: "@cristianoavilapsi",
  experienceYears: "+10 anos de experiência clínica",
  certifications: "Certificação Internacional OMNI Training Center",
  avatarUrl: "/images/cristiano_avila.jpg",
};

export function buildWhatsAppLink(customMessage: string): string {
  const base = `https://wa.me/${CLINIC_CONTACT.phoneRaw}`;
  return `${base}?text=${encodeURIComponent(customMessage)}`;
}

export const UNITS_DATA: Unit[] = [
  {
    id: "atibaia",
    city: "Atibaia",
    state: "SP",
    title: "Unidade Atibaia",
    address: "Avenida Dona Gertrudes, 857",
    complement: "Consultório Terapêutico",
    neighborhood: "Alvinópolis",
    zip: "12942-540",
    phone: "(11) 99523-5839",
    whatsapp: "5511995235839",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.8876483526543!2d-46.5684725!3d-23.1195159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cec160e1d5a7d3%3A0xc3f1f7253503f8f!2sAv.%20Dona%20Gertrudes%2C%20857%20-%20Alvin%C3%B3polis%2C%20Atibaia%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000",
    mapsExternalLink: "https://maps.google.com/?q=Avenida+Dona+Gertrudes,+857,+Alvinopolis,+Atibaia+-+SP",
    hours: "Segunda a Sexta: 08h às 20h | Sábados: 08h às 13h"
  },
  {
    id: "sao-paulo",
    city: "São Paulo",
    state: "SP",
    title: "Unidade Santana (Zona Norte)",
    address: "Rua Ana Bem-vinda de Andrade, 51",
    complement: "Santana Corporate",
    neighborhood: "Santana",
    zip: "02016-040",
    phone: "(11) 99523-5839",
    whatsapp: "5511995235839",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.278546597771!2d-46.6268846!3d-23.4984241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef633f81e37ff%3A0x6bfe76e73685bc94!2sR.%20Ana%20Bemvinda%20de%20Andrade%2C%2051%20-%20Santana%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000001",
    mapsExternalLink: "https://maps.google.com/?q=Rua+Ana+Bem-vinda+de+Andrade,+51,+Santana,+Sao+Paulo+-+SP",
    hours: "Segunda a Sexta: 08h às 21h"
  },
  {
    id: "santos",
    city: "Santos",
    state: "SP",
    title: "Unidade The Blue Santos",
    address: "Av. Senador Feijó, 686",
    complement: "6º andar • Conjunto 623 (Edifício The Blue)",
    neighborhood: "Vila Matias",
    zip: "11015-504",
    phone: "(11) 99523-5839",
    whatsapp: "5511995235839",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3646.108427748197!2d-46.3323048!3d-23.9554605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce030b62b77247%3A0xc3f6d5ef0a5528c7!2sAv.%20Sen.%20Feij%C3%B3%2C%20686%20-%20Vila%20Matias%2C%20Santos%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000002",
    mapsExternalLink: "https://maps.google.com/?q=Av.+Senador+Feijo,+686,+Santos+-+SP",
    hours: "Atendimento presencial programado"
  },
  {
    id: "sbc",
    city: "São Bernardo do Campo",
    state: "SP",
    title: "Unidade Domo Business",
    address: "Rua José Versolato, 111",
    complement: "7º andar • Sala 707 (Edifício Domo Business)",
    neighborhood: "Centro",
    zip: "09750-730",
    phone: "(11) 99523-5839",
    whatsapp: "5511995235839",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.2504938634964!2d-46.5492472!3d-23.6938363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4232338f98c7%3A0x6a2ea1295fcad15a!2sR.%20Jos%C3%A9%20Versolato%2C%20111%20-%20Centro%2C%20S%C3%A3o%20Bernardo%20do%20Campo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000003",
    mapsExternalLink: "https://maps.google.com/?q=Rua+Jose+Versolato,+111,+Sao+Bernardo+do+Campo+-+SP",
    hours: "Segunda a Sexta: 08h às 20h"
  }
];

export const SPECIALTIES_DATA: Specialty[] = [
  {
    id: "psicoterapia",
    slug: "psicoterapia",
    num: "01",
    title: "Psicoterapia",
    subtitle: "Abordagem Integrativa & Humanizada",
    shortDesc: "Espaço confidencial de escuta qualificada, compreensão e desenvolvimento emocional individualizado, estruturado a partir da singularidade de cada pessoa.",
    fullDesc: [
      "O acompanhamento psicoterapêutico é desenvolvido de acordo com as necessidades e particularidades de cada paciente, criando um espaço de escuta, compreensão e desenvolvimento emocional.",
      "Diferente de abordagens rígidas, o trabalho clínico integra referenciais teóricos contemporâneos — incluindo Terapia Cognitivo-Comportamental (TCC), neurociências e psicologia humanista — ajustados ao contexto de vida de cada indivíduo.",
      "Antes de iniciar o acompanhamento, realiza-se uma avaliação atenta para mapear esquemas mentais, padrões comportamentais e demandas emocionais, traçando um planejamento claro e seguro focado em autonomia e equilíbrio sustentável."
    ],
    indications: [
      "Ansiedade generalizada, crises de pânico e fobias",
      "Sintomas depressivos e desânimo persistente",
      "Dificuldades nos relacionamentos e comunicação interpessoal",
      "Transições de vida, luto e momentos de crise",
      "Processos de autoconhecimento e tomada de decisões conscientes"
    ],
    benefits: [
      "Compreensão clara dos gatilhos emocionais",
      "Desenvolvimento de estratégias de regulação e autorregulação",
      "Fortalecimento da autoeficácia e da autoestima",
      "Relações interpessoais mais autênticas e equilibradas"
    ],
    imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=85&fit=crop",
    badge: "Clínica Geral & Integrativa"
  },
  {
    id: "hipnoterapia",
    slug: "hipnoterapia",
    num: "02",
    title: "Hipnoterapia",
    subtitle: "Hipnose Clínica Especializada (OMNI)",
    shortDesc: "Recurso terapêutico complementar baseado em foco atencional e relaxamento profundo para ressignificar padrões emocionais diretamente na mente subconsciente.",
    fullDesc: [
      "A hipnoterapia utiliza técnicas específicas de atenção concentrada e relaxamento físico e mental como recurso complementar dentro do processo psicoterapêutico.",
      "Com certificação internacional pela conceituada OMNI Training Center, o protocolo de atendimento é conduzido de forma ética, científica e transparente, sem misticismo ou perda de controle por parte do paciente.",
      "Ao alcançar estados focais de consciência, é possível investigar raízes emocionais de bloqueios, dessensibilizar memórias dolorosas e consolidar novas respostas cognitivas e comportamentais de forma segura."
    ],
    indications: [
      "Medos profundos, fobias específicas e aversões",
      "Ansiedade antecipatória, estresse crônico e insônia",
      "Hábitos repetitivos indesejados e bloqueios emocionais",
      "Dores psicossomáticas e tensão corporal acumulada"
    ],
    benefits: [
      "Acesso seguro a registros emocionais subconscientes",
      "Ressignificação de crenças autolimitantes profundas",
      "Relaxamento profundo e redução de reatividades automáticas",
      "Ferramentas práticas de auto-hipnose para o cotidiano"
    ],
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=85&fit=crop",
    badge: "Certificação OMNI Internacional"
  },
  {
    id: "neuropsicologia",
    slug: "neuropsicologia",
    num: "03",
    title: "Neuropsicologia",
    subtitle: "Cognição, Cérebro & Comportamento",
    shortDesc: "Compreensão aprofundada da relação entre funcionamento neurológico, processamento cognitivo, regulação emocional e padrões de comportamento.",
    fullDesc: [
      "A Neuropsicologia é a área dedicada a compreender como as estruturas e sistemas cerebrais interagem com o pensamento, as emoções e o comportamento humano.",
      "Por meio de entrevistas clínicas, investigação cognitiva e observação comportamental, avaliam-se funções como atenção, memória, raciocínio lógico, tomada de decisão e controle inibitório.",
      "A partir dessa compreensão, elaboram-se intervenções personalizadas de estimulação ou reabilitação, além de orientações práticas para a família e para o próprio paciente."
    ],
    indications: [
      "Dificuldades atencionais, dispersão e suspeita de TDAH",
      "Queixas de memória, raciocínio e rendimento intelectual",
      "Alterações cognitivas associadas a quadros de estresse severo",
      "Necessidade de mapeamento do perfil cognitivo individual"
    ],
    benefits: [
      "Identificação precisa de potencialidades e pontos de atenção cognitiva",
      "Estratégias compensatórias para rotina de trabalho e estudos",
      "Alinhamento entre fisiologia cerebral e gestão emocional",
      "Clareza diagnóstica para orientação multidisciplinar"
    ],
    imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=85&fit=crop",
    badge: "Base Neurocientífica"
  },
  {
    id: "pnl",
    slug: "pnl",
    num: "04",
    title: "PNL",
    subtitle: "Programação Neurolinguística",
    shortDesc: "Estratégias pragmáticas de linguagem, mapas mentais e percepção que atuam como ferramentas complementares no aprimoramento e autogestão pessoal.",
    fullDesc: [
      "A Programação Neurolinguística (PNL) oferece um conjunto de modelos e ferramentas que exploram como a linguagem interna e externa estrutura nossa percepção da realidade.",
      "Aplicada de forma complementar no contexto do desenvolvimento pessoal, a PNL auxilia na identificação de modelos mentais limitantes e na construção de novas referências comportamentais.",
      "O paciente aprende a reconhecer seus diálogos internos, reestruturar interpretações subjetivas e desenvolver posturas mais assertivas perante desafios cotidianos."
    ],
    indications: [
      "Padrões de auto-sabotagem e insegurança ao se posicionar",
      "Dificuldades de comunicação interpessoal e oratória",
      "Alinhamento de metas pessoais e profissionais",
      "Desejo de flexibilidade mental e ampliação de perspectiva"
    ],
    benefits: [
      "Comunicação mais clara e assertiva",
      "Ressignificação rápida de diálogos internos autocríticos",
      "Maior flexibilidade para lidar com imprevistos e conflitos",
      "Desenvolvimento de foco direcionado a objetivos claros"
    ],
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=85&fit=crop",
    badge: "Comunicação & Percepção"
  },
  {
    id: "constelacao-sistemica-familiar",
    slug: "constelacao-sistemica-familiar",
    num: "05",
    title: "Constelação Sistêmica Familiar",
    subtitle: "Padrões Relacionais & Vínculos",
    shortDesc: "Abordagem terapêutica voltada à observação, compreensão e pacificação de padrões relacionais, lealdades invisíveis e repetições transgeracionais.",
    fullDesc: [
      "A abordagem sistêmica familiar propõe um olhar cuidadoso sobre a teia de relações na qual o indivíduo está inserido, observando dinâmicas relacionais que atravessam gerações.",
      "Muitas vezes, dificuldades de posicionamento, bloqueios afetivos ou sentimentos difusos guardam relação com papéis assumidos de forma inconsciente dentro do sistema familiar.",
      "O trabalho permite enxergar tais conexões com serenidade e respeito, promovendo um reposicionamento saudável que libera o paciente para viver sua própria trajetória."
    ],
    indications: [
      "Conflitos familiares recorrentes e rupturas de vínculo",
      "Sensação de carregar pesos e responsabilidades que não lhe pertencem",
      "Dificuldades para construir relacionamentos afetivos equilibrados",
      "Padrões repetitivos de perda ou estagnação familiar"
    ],
    benefits: [
      "Visão ampla e pacificada da própria ancestralidade e história",
      "Liberação de lealdades inconscientes limitantes",
      "Maior leveza para ocupar o próprio lugar na família e na vida",
      "Melhoria na qualidade dos diálogos familiares"
    ],
    imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=85&fit=crop",
    badge: "Visão Sistêmica"
  },
  {
    id: "psicologia-sem-fronteiras",
    slug: "psicologia-sem-fronteiras",
    num: "06",
    title: "Psicologia sem Fronteiras",
    subtitle: "Atendimento Online Internacional",
    shortDesc: "Consultoria e acompanhamento psicológico por videoconferência em ambiente criptografado para brasileiros residentes no Brasil e no exterior.",
    fullDesc: [
      "A modalidade online elimina barreiras geográficas, permitindo que brasileiros em qualquer estado ou vivendo no exterior tenham acesso a acompanhamento especializado em sua língua materna.",
      "Viver fora do país ou em rotinas de alta mobilidade envolve desafios singulares: choque cultural, distância das redes de apoio, adaptação profissional e sentimentos de solidão.",
      "As sessões ocorrem por plataformas seguras de videochamada, mantendo o mesmo rigor ético, profundidade técnica e sigilo das consultas presenciais."
    ],
    indications: [
      "Brasileiros expatriados que buscam terapia na língua nativa",
      "Profissionais com agendas dinâmicas ou viagens frequentes",
      "Pessoas residentes em cidades com pouca oferta de especialistas",
      "Busca por comodidade e acolhimento no conforto de sua casa"
    ],
    benefits: [
      "Acesso de qualquer lugar do mundo com flexibilidade de fuso horário",
      "Ambiente confidencial, seguro e protegido por sigilo profissional",
      "Continuidade ininterrupta do processo mesmo em viagens",
      "Economia de tempo de deslocamento em grandes centros urbanos"
    ],
    imageUrl: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&q=85&fit=crop",
    badge: "Alcance Global"
  },
  {
    id: "terapia-em-grupo",
    slug: "terapia-em-grupo",
    num: "07",
    title: "Terapia em Grupo",
    subtitle: "Desenvolvimento Interpessoal & Partilha",
    shortDesc: "Encontros estruturados e mediados que proporcionam troca de vivências, identificação mútua, reflexão profunda e crescimento coletivo.",
    fullDesc: [
      "Os processos terapêuticos conduzidos em grupo oferecem um rico laboratório relacional, onde os participantes encontram um ambiente seguro para compartilhar desafios humanos comuns.",
      "Ouvir a experiência do outro diminui a sensação de isolamento e amplia a compreensão de que muitas angústias são universais.",
      "Com a mediação técnica do profissional, o grupo torna-se uma potente rede de acolhimento, desenvolvimento de empatia e treino de habilidades sociais e emocionais."
    ],
    indications: [
      "Sensação de isolamento e dificuldade para expressar sentimentos",
      "Desejo de aprimorar habilidades sociais e relacionais",
      "Demandas comuns de inteligência emocional e autogestão",
      "Busca por uma experiência terapêutica dinâmica e enriquecedora"
    ],
    benefits: [
      "Quebra da sensação de isolamento e solidão emocional",
      "Diversidade de perspectivas e aprendizados sobre o mesmo tema",
      "Espaço seguro de pertencimento sem julgamentos",
      "Desenvolvimento de comunicação não-violenta e escuta empática"
    ],
    imageUrl: "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?w=800&q=85&fit=crop",
    badge: "Laboratório Humano"
  },
  {
    id: "massagem-relaxante",
    slug: "massagem-relaxante",
    num: "08",
    title: "Terapias Complementares & Relaxamento",
    subtitle: "Conexão Corpo & Mente",
    shortDesc: "Recursos corporais integrativos para alívio de tensões somáticas, desaceleração do sistema nervoso autônomo e restauração do bem-estar global.",
    fullDesc: [
      "A mente e o corpo funcionam como um sistema integrado inseparável: quadros contínuos de estresse e ansiedade geram sobrecarga muscular, rigidez cervical e fadiga crônica.",
      "Dentro de uma perspectiva de cuidado integral, técnicas corporais de relaxamento e massoterapia relaxante auxiliam na desativação dos circuitos de hipervigilância somática.",
      "Esse cuidado complementar atua como regulador do sistema nervoso simpático, promovendo alívio imediato da tensão física e restaurando a sensação de calma interna."
    ],
    indications: [
      "Tensão muscular concentrada em ombros, pescoço e costas",
      "Sensação contínua de sobrecarga física e exaustão mental",
      "Insônia decorrente de agitação corporal",
      "Busca por autocuidado integral e desaceleração"
    ],
    benefits: [
      "Redução da rigidez corporal e alívio de nós de tensão",
      "Estímulo à circulação e oxigenação tecidual",
      "Indução a estados restauradores de relaxamento profundo",
      "Maior consciência corporal e reconexão consigo mesmo"
    ],
    imageUrl: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=85&fit=crop",
    badge: "Cuidado Somático"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 1,
    name: "Leonardo",
    date: "12/05/2024",
    initials: "L",
    treatment: "Hipnoterapia & TCC Integrativa",
    text: "Quando procurei o Dr. Cristiano Avila, estava vindo de uma terapia de 8 meses em modo online. Trabalhei muito a terapia TCC, mas não conseguia evoluir o considerável. Em apenas 7 sessões com o Dr., aproximadamente, consegui reduzir drasticamente o meu problema. Hoje, meu sono é o melhor que já tive em 5 anos, sem precisar de remédios. Recomendo, pois as sessões de hipnoterapia aliada com a TCC foram o grande diferencial do Dr. Cristiano em seu tratamento. Sou muito agradecido por ter me ajudado a retomar o autocontrole."
  },
  {
    id: 2,
    name: "Bianca",
    date: "25/06/2023",
    initials: "B",
    treatment: "Psicoterapia Clínica",
    text: "Passei pelas sessões de terapia recentemente com o Dr. e só tenho a agradecer. Estava em crise de ansiedade, totalmente perdida. Com a ajuda dele, consegui (e ainda continuo evoluindo) trazer de volta meu autocontrole. Como dizia em terapia, é praticamente uma aula onde aperfeiçoamos nosso eu, e entendemos que tudo é sobre nós mesmos e como lidamos com as situações. Ele nos faz entender isso com clareza admirável."
  },
  {
    id: 3,
    name: "Marina",
    date: "23/06/2023",
    initials: "M",
    treatment: "Acompanhamento Individual e Familiar",
    text: "Eu procurei o Dr. Cristiano em plena crise de vida, com um bebê de 6 meses em casa quando descobri desafios severos na família. Desde a primeira consulta o Dr. Cris foi cirúrgico tratando os focos dos problemas em nós. O tratamento me deixou mais autoconsciente, independente, proativa, resiliente, paciente, tranquila e em paz com minhas decisões. Ele te trata sempre com respeito, carinho e compaixão. Estou feliz demais com os resultados alcançados!"
  },
  {
    id: 4,
    name: "Danilo Levoto Fernandes",
    date: "20/04/2023",
    initials: "D",
    treatment: "Psicoterapia e Hipnose",
    text: "Muito bom! Diferente de outros psicólogos em que o atendimento se torna um diálogo perpétuo e sem direcionamento, o doutor possui muitas estratégias e explicações claras que me fizeram me conhecer de verdade. Todas as sessões tínhamos algo prático a ser trabalhado, com ferramentas que levo para a vida inteira. Simplesmente uma experiência e um profissional incrível!"
  },
  {
    id: 5,
    name: "Deborah",
    date: "05/04/2023",
    initials: "D",
    treatment: "Autoconhecimento e Saúde Mental",
    text: "Difícil resumir em poucas palavras a jornada que passei ao longo das sessões em um momento desafiador da minha vida. É muito importante buscarmos profissionais que utilizem ferramentas eficazes com maestria, empatia e acolhimento. A transformação interna é nítida e nos dá força, coragem e clareza para seguir em frente com todos os aprendizados. Recomendo muito o trabalho do Cristiano."
  },
  {
    id: 6,
    name: "Guilherme",
    date: "16/03/2023",
    initials: "G",
    treatment: "Psicoterapia Cognitiva",
    text: "Já fiz terapia alguns anos com uma variedade de profissionais, e gostei demais do atendimento e do método do Dr. Cristiano. A abordagem dele explica de modo didático e objetivo o que está acontecendo e como os exercícios propostos atuam para resolver o desconforto. Essa clareza e segurança foram fundamentais para a evolução do meu tratamento."
  },
  {
    id: 7,
    name: "Flavio",
    date: "16/03/2023",
    initials: "F",
    treatment: "Inteligência Emocional",
    text: "Com abordagem simples e técnicas eficientes, o Dr. Cristiano me ajudou a entender os meus comportamentos e reações emocionais perante situações cruciais da minha vida. Hoje me sinto seguro para lidar com as demandas diárias e tenho muito maior estabilidade e habilidade emocional."
  },
  {
    id: 8,
    name: "Denise Giusti",
    date: "19/01/2022",
    initials: "D",
    treatment: "Tratamento Integrado",
    text: "Por muitos anos busquei por tratamento mas nunca obtive resultados consistentes. O trabalho com o Dr. Cristiano foi completamente diferente! Consegui perceber as mudanças ocorrendo gradativamente a cada sessão. Excelente profissional, esclarece tudo com respeito e precisão. Os resultados em minha vida são visíveis."
  }
];

export const ARTICLES_DATA: Article[] = [
  {
    slug: "ciclo-invisivel",
    title: "Ciclo Invisível: por que você continua repetindo comportamentos que fazem você sofrer?",
    category: "Desenvolvimento Pessoal",
    date: "23/09/2026",
    readTime: "7 min de leitura",
    author: "Cristiano Ávila",
    excerpt: "Compreenda como os circuitos mnêmicos e memórias implícitas mantêm padrões emocionais reativos em funcionamento e conheça caminhos seguros para interromper esse ciclo.",
    imageUrl: "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?w=900&q=85&fit=crop",
    content: [
      "Você já teve a sensação de que, mesmo prometendo a si mesmo agir diferente, acaba caindo exatamente nas mesmas situações, reações ou escolhas que geram desgaste?",
      "Na psicologia e na neurociência do comportamento, esse fenômeno é conhecido como ciclo de repetição inconsciente. Não se trata de fraqueza ou falta de força de vontade, mas sim de trilhas neurais e memórias emocionais gravadas em momentos formativos da sua vida.",
      "Quando uma situação do presente compartilha qualquer semelhança sutil com uma dor do passado, o cérebro ativa imediatamente a mesma resposta defensiva — seja através da fuga, da raiva, do isolamento ou da necessidade desesperada de agradar.",
      "A chave da transformação clínica não está em brigar com o sintoma, mas em identificar a origem mnêmica desse registro e promover novas experiências emocionais corretivas. Ao ressignificar a memória da dor, abrem-se caminhos para escolhas verdadeiramente conscientes e libertadoras."
    ]
  },
  {
    slug: "ilusao-de-controlar-o-incontrolavel",
    title: "A ilusão de controlar o incontrolável: o esgotamento de quem tenta prever tudo para se proteger",
    category: "Ansiedade & Emoções",
    date: "17/08/2026",
    readTime: "6 min de leitura",
    author: "Cristiano Ávila",
    excerpt: "A hipervigilância e a necessidade crônica de antecipar cenários são respostas aprendidas de defesa. Aprenda como desarmar a armadilha do controle compulsivo.",
    imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=900&q=85&fit=crop",
    content: [
      "A pessoa ansiosa frequentemente carrega uma crença silenciosa: 'se eu pensar em tudo o que pode dar errado com antecedência, estarei segura e nada me pegará desprevenida'.",
      "Embora essa estratégia pareça protetora na superfície, seu custo biológico e psíquico é avassalador. O cérebro permanece em estado de alarme permanente, liberando cortisol e adrenalina mesmo quando o ambiente ao redor está completamente calmo.",
      "O controle obsessivo é, no fundo, uma tentativa desesperada de acalmar a intolerância à incerteza. Quanto mais tentamos prever variáveis humanas incontroláveis, maior se torna o sentimento de desamparo quando algo foge ao script.",
      "No processo terapêutico, trabalhamos para substituir o controle pelo desenvolvimento de recursos internos de enfrentamento. Quando você confia na sua capacidade de lidar com o imprevisto, o alarme finalmente pode ser desligado."
    ]
  },
  {
    slug: "mascara-que-ficou-colada-a-pele",
    title: "A máscara que ficou colada à pele: o esgotamento de quem vive para agradar os outros",
    category: "Autoconhecimento",
    date: "14/08/2026",
    readTime: "8 min de leitura",
    author: "Cristiano Ávila",
    excerpt: "Quando a adaptação excessiva às expectativas alheias consome sua própria identidade, o corpo responde com fadiga, ansiedade e perda de vitalidade.",
    imageUrl: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=900&q=85&fit=crop",
    content: [
      "Muitas pessoas chegam ao consultório expressando uma queixa comum: 'eu cuido de tudo e de todos, sou o pilar de sustentação da minha família ou equipe, mas sinto um vazio profundo por dentro'.",
      "Essa máscara do 'indivíduo perfeito, prestativo e inabalável' costuma nascer na infância como uma estratégia legítima de pertencimento e proteção afetiva.",
      "O problema surge com o passar dos anos: a pessoa acostuma-se tanto a antecipar os desejos dos outros que desconecta-se completamente dos próprios sentimentos, limites e vontades básicas.",
      "Recuperar a própria voz não significa tornar-se egoísta, mas estabelecer uma relação de integridade consigo mesmo. Aprender a dizer 'não' para o que fere seus limites é o primeiro passo para dizer um 'sim' verdadeiro para a sua própria vida."
    ]
  },
  {
    slug: "o-alarme-que-nao-desliga",
    title: "O alarme que não desliga: a ansiedade não é excesso de pensamento, é adaptação biológica",
    category: "Neurociência Clínica",
    date: "12/08/2026",
    readTime: "5 min de leitura",
    author: "Cristiano Ávila",
    excerpt: "Entenda o papel da amígdala e do sistema límbico na manutenção de quadros ansiosos e como a hipnose clínica e a psicoterapia atuam na regulação neurofisiológica.",
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=900&q=85&fit=crop",
    content: [
      "Frequentemente ouvimos que pessoas ansiosas deveriam 'apenas relaxar' ou 'pensar menos'. Essa recomendação ignora a neurobiologia da resposta ao estresse.",
      "A ansiedade clínica não é um simples defeito cognitivo; é a ativação involuntária do circuito de sobrevivência da amígdala cortical.",
      "Quando esse circuito é acionado, o córtex pré-frontal — responsável pela lógica e planejamento calmo — é parcialmente inibido para priorizar a resposta de luta ou fuga.",
      "Por isso, estratégias que integram relaxamento neurobiológico, hipnose clínica e reestruturação cognitiva produzem resultados muito superiores a meras tentativas de controle racional."
    ]
  }
];

export const METHOD_STEPS = [
  {
    num: "01",
    title: "Primeiro contato",
    desc: "O paciente entra em contato pelo WhatsApp ou telefone para relatar brevemente sua demanda e verificar disponibilidade de horários para a modalidade presencial ou online.",
    badge: "Acolhimento Inicial"
  },
  {
    num: "02",
    title: "Consulta inicial & Avaliação",
    desc: "Momento dedicado à escuta aprofundada da história de vida, contexto atual, sintomas e objetivos pretendidos, mapeando a dinâmica psicológica do paciente.",
    badge: "Mapeamento Clínico"
  },
  {
    num: "03",
    title: "Plano terapêutico individual",
    desc: "A abordagem terapêutica é desenhada sob medida, integrando psicoterapia, hipnose clínica, neuropsicologia ou outras ferramentas de acordo com as particularidades da pessoa.",
    badge: "Personalização"
  },
  {
    num: "04",
    title: "Acompanhamento & Evolução",
    desc: "As sessões ocorrem com foco em resultados sustentáveis, autonomia emocional e autogestão, ajustando intervenções conforme os progressos conquistados.",
    badge: "Autonomia & Equilíbrio"
  }
];

export const DEMANDS_LIST = [
  { title: "Ansiedade & Pânico", desc: "Crises agudas, apreensão constante e sintomas psicossomáticos." },
  { title: "Estresse & Esgotamento", desc: "Sobrecarga de trabalho, fadiga mental e sensação contínua de tensão." },
  { title: "Medos & Fobias", desc: "Aversões incapacitantes e bloqueios que limitam a liberdade pessoal." },
  { title: "Dificuldades Emocionais", desc: "Sensação de vazio, tristeza persistente e instabilidade de humor." },
  { title: "Autoconhecimento", desc: "Compreensão lúcida de quem você é e do que deseja para sua trajetória." },
  { title: "Relacionamentos", desc: "Comunicação assertiva, resolução de conflitos e estabelecimento de limites." },
  { title: "Mudanças de Comportamento", desc: "Rompimento de hábitos prejudiciais e fortalecimento de posturas ativas." },
  { title: "Desenvolvimento Pessoal", desc: "Alinhamento de valores, foco e ampliação do potencial humano." },
  { title: "Luto & Transições", desc: "Acolhimento em perdas significativas, separações e mudanças de ciclo." },
  { title: "Desafios Profissionais", desc: "Insegurança na carreira, síndrome do impostor e tomada de decisões." },
  { title: "Conflitos Familiares", desc: "Ressignificação de dinâmicas familiares difíceis e lealdades inconscientes." },
  { title: "Padrões Repetitivos", desc: "Identificação e desativação de ciclos comportamentais de sofrimento." }
];
