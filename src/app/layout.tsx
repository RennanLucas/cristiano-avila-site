import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cristiano Ávila | Psicólogo e Hipnoterapeuta em SP e Santos",
  description:
    "Atendimento psicológico clínico, psicoterapia, hipnoterapia e neuropsicologia com Cristiano Ávila. Unidades em Atibaia, São Paulo, Santos e São Bernardo do Campo.",
  metadataBase: new URL("https://cristianoavilapsicologo.com.br"),
  openGraph: {
    title: "Cristiano Ávila | Psicólogo e Hipnoterapeuta",
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
    <html lang="pt-BR" className={`${inter.variable} ${dmSerif.variable} scroll-smooth`}>
      <body className="bg-[#F8F8F5] text-[#1C2628] font-sans antialiased selection:bg-[#18363B] selection:text-white">
        {children}
      </body>
    </html>
  );
}
