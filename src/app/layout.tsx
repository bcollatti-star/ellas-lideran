import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ellas Lideran Santa Fe | Reconocimiento a Mujeres Líderes",
  description:
    "El reconocimiento provincial a 50 mujeres santafesinas que transforman la provincia. 09 de Marzo 2026 | Fundación Pensar, Rosario, Santa Fe.",
  keywords: "Ellas Lideran, Santa Fe, mujeres líderes, reconocimiento, Rosario, liderazgo femenino",
  openGraph: {
    title: "Ellas Lideran Santa Fe",
    description: "El reconocimiento provincial a mujeres santafesinas que transforman la provincia.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-white text-charcoal">{children}</body>
    </html>
  );
}
