import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cristiano Ávila | Psicólogo Clínico e Hipnoterapeuta",
  description:
    "Atendimento psicológico clínico baseado em ciência, escuta humanizada e estratégias integradas.",
  metadataBase: new URL("https://cristianoavilapsicologo.com.br"),
  openGraph: {
    title: "Cristiano Ávila | Psicólogo Clínico",
    description:
      "Atendimento baseado em ciência, escuta humanizada e estratégias integradas.",
    url: "https://cristianoavilapsicologo.com.br",
    siteName: "Cristiano Ávila",
    locale: "pt_BR",
    type: "website",
  },
};

import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-white text-[#111111] font-sans antialiased selection:bg-black selection:text-white overflow-x-hidden">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
