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
  metadataBase: new URL("https://ellaslideransantafe.com.ar"),
  title: "Ellas Lideran Santa Fe | Reconocimiento a Mujeres Líderes",
  description:
    "El reconocimiento provincial a 50 mujeres santafesinas que transforman la provincia. 09 de Marzo 2027 | Salón Metropolitano, Rosario, Santa Fe.",
  keywords: "Ellas Lideran, Santa Fe, mujeres líderes, reconocimiento, Rosario, liderazgo femenino",
  openGraph: {
    title: "Ellas Lideran Santa Fe",
    description: "El reconocimiento provincial a 50 mujeres santafesinas que transforman la provincia. 9 de Marzo 2027 · Salón Metropolitano, Rosario.",
    type: "website",
    images: [
      {
        url: "/open-graph.png",
        width: 1200,
        height: 630,
        alt: "Ellas Lideran Santa Fe 2027",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ellas Lideran Santa Fe",
    description: "El reconocimiento provincial a 50 mujeres santafesinas que transforman la provincia.",
    images: ["/open-graph.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-white text-charcoal">{children}</body>
    </html>
  );
}
