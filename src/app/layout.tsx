import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import { CURRENT_CITIES_TEXT } from "@/data/units";
import { SITE_URL } from "@/lib/site-policy";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Cristiano Ávila | Psicólogo Clínico",
    template: "%s | Cristiano Ávila",
  },
  description: `Psicoterapia presencial e online com Cristiano Ávila, Psicólogo Clínico. Consultórios em ${CURRENT_CITIES_TEXT}.`,
  applicationName: "Cristiano Ávila Psicólogo",
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/favicon-64.png", type: "image/png", sizes: "64x64" }],
    shortcut: "/favicon-64.png",
  },
  openGraph: {
    title: "Cristiano Ávila | Psicólogo Clínico",
    description: "Psicoterapia presencial e online para questões emocionais, comportamentais e relacionais.",
    url: SITE_URL,
    siteName: "Cristiano Ávila",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/images/cristiano_avila.jpg", alt: "Cristiano Ávila, psicólogo clínico" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cristiano Ávila | Psicólogo Clínico",
    description: "Psicoterapia presencial e online.",
    images: ["/images/cristiano_avila.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} scroll-smooth`}>
      <head><JsonLd /></head>
      <body className="relative overflow-x-hidden bg-white font-sans text-[#111111] antialiased selection:bg-black selection:text-white">
        {children}
      </body>
    </html>
  );
}
