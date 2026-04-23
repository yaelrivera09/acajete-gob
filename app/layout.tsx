import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

// Tipografía para títulos (elegante, editorial)
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

// Tipografía para texto de lectura
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "H. Ayuntamiento de Acajete, Veracruz | 2026 - 2029",
  description:
    "Sitio oficial del H. Ayuntamiento de Acajete, Veracruz. Gobierno municipal 2026-2029. Trámites, transparencia y servicios al ciudadano.",
  keywords: ["Acajete", "Veracruz", "Ayuntamiento", "Gobierno Municipal", "2026"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}