import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato",
  description: "Consulte horários e fale com o consultório de Cristiano Ávila pelo WhatsApp.",
  alternates: { canonical: "/contato" },
};

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
