export interface CurrentUnit {
  id: string;
  city: string;
  state: string;
  title: string;
  address: string;
  complement?: string;
  neighborhood?: string;
  zip: string;
  mapsExternalLink: string;
  appleMapsExternalLink: string;
  mapEmbedUrl: string;
  availability: string;
  tagline: string;
}

function mapLinks(query: string) {
  const encoded = encodeURIComponent(query);
  return {
    mapsExternalLink: `https://www.google.com/maps/search/?api=1&query=${encoded}`,
    appleMapsExternalLink: `https://maps.apple.com/?q=${encoded}`,
    mapEmbedUrl: `https://www.google.com/maps?q=${encoded}&output=embed`,
  };
}

/**
 * Endereços revisados em 25/09/2026 com base no perfil público atual do
 * profissional e listagens públicas de atendimento. Mantemos somente dados
 * que podem ser verificados; horários específicos não são presumidos.
 */
export const CURRENT_UNITS: CurrentUnit[] = [
  {
    id: "praia-grande",
    city: "Praia Grande",
    state: "SP",
    title: "Consultório Praia Grande",
    address: "Rua Botafogo, 442",
    complement: "Atendimento presencial e online",
    zip: "11701-000",
    availability: "Atendimento com hora marcada",
    tagline: "Consultório para atendimento psicológico presencial em Praia Grande.",
    ...mapLinks("Rua Botafogo 442, Praia Grande, SP, 11701-000"),
  },
  {
    id: "atibaia",
    city: "Atibaia",
    state: "SP",
    title: "Clínica Mind & Life Atibaia",
    address: "Avenida Dona Gertrudes, 857",
    neighborhood: "Alvinópolis",
    zip: "12942-540",
    availability: "Atendimento com hora marcada",
    tagline: "Unidade presencial da Clínica Mind & Life em Alvinópolis, Atibaia.",
    ...mapLinks("Avenida Dona Gertrudes 857, Alvinópolis, Atibaia, SP, 12942-540"),
  },
  {
    id: "sao-bernardo",
    city: "São Bernardo do Campo",
    state: "SP",
    title: "Consultório São Bernardo do Campo",
    address: "Rua José Versolato, 111",
    complement: "Torre B • sala 707",
    neighborhood: "Centro",
    zip: "09750-730",
    availability: "Atendimento com hora marcada",
    tagline: "Consultório para atendimento psicológico no centro de São Bernardo do Campo.",
    ...mapLinks("Rua José Versolato 111, Torre B sala 707, São Bernardo do Campo, SP, 09750-730"),
  },
  {
    id: "santos",
    city: "Santos",
    state: "SP",
    title: "Consultório Santos",
    address: "Avenida Conselheiro Nébias, 756",
    complement: "11º andar • conjunto 1106",
    neighborhood: "Boqueirão",
    zip: "11045-002",
    availability: "Atendimento com hora marcada",
    tagline: "Consultório para atendimento psicológico no bairro Boqueirão, em Santos.",
    ...mapLinks("Avenida Conselheiro Nébias 756, conjunto 1106, Santos, SP, 11045-002"),
  },
];

export const CURRENT_CITY_NAMES = CURRENT_UNITS.map((unit) => unit.city);

export const CURRENT_CITIES_TEXT = CURRENT_CITY_NAMES.length > 1
  ? `${CURRENT_CITY_NAMES.slice(0, -1).join(", ")} e ${CURRENT_CITY_NAMES[CURRENT_CITY_NAMES.length - 1]}`
  : CURRENT_CITY_NAMES[0] ?? "";
