export * from "./content-legacy";

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
