const WHATSAPP_PHONE = "(11) 98061-1571";
const WHATSAPP_PHONE_RAW = "5511980611571";
const DEFAULT_WHATSAPP_MESSAGE =
  "Olá, gostaria de informações sobre o atendimento psicológico com Cristiano Ávila.";

export const CLINIC_CONTACT = {
  name: "Cristiano Ávila",
  fullName: "Cristiano Ávila da Silva",
  phone: WHATSAPP_PHONE,
  phoneRaw: WHATSAPP_PHONE_RAW,
  email: "contato@cristianoavilapsicologo.com.br",
  avatarUrl: "/images/cristiano_avila.jpg",
  whatsappUrl: `https://wa.me/${WHATSAPP_PHONE_RAW}?text=${encodeURIComponent(DEFAULT_WHATSAPP_MESSAGE)}`,
};

export function buildWhatsAppLink(customMessage: string): string {
  return `https://wa.me/${WHATSAPP_PHONE_RAW}?text=${encodeURIComponent(customMessage)}`;
}
