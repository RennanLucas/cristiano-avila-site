import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} scroll-smooth`}>
      <head>
        <JsonLd />
      </head>
      <body className="bg-white text-[#111111] font-sans antialiased selection:bg-black selection:text-white overflow-x-hidden relative">
        <div 
          className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.015]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        />
        {children}
      </body>
    </html>
  );
}
