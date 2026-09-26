export const SITE_URL = "https://cristiano-avila-site.vercel.app";

export const PROFESSIONAL_REGISTRATION = "CRP 06/119186";

/**
 * Serviços ocultados da comunicação pública principal do site.
 * A lista é deliberadamente conservadora para manter o posicionamento
 * centrado em serviços psicológicos e evitar apresentar práticas que
 * exigem revisão ética/profissional específica como especialidades clínicas.
 */
export const BLOCKED_PUBLIC_SPECIALTY_IDS = new Set([
  "constelacao-sistemica-familiar",
  "massagem-relaxante",
]);

export function isPublicSpecialty(id: string): boolean {
  return !BLOCKED_PUBLIC_SPECIALTY_IDS.has(id);
}

export const FIRST_CONTACT_PRIVACY_NOTE =
  "Depois de enviar, a conversa continua diretamente pelo WhatsApp para combinar os próximos detalhes.";
