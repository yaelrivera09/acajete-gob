import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import HoldingOverlay from "@/components/HoldingOverlay";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
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
    <html lang="es" className={montserrat.variable}>
      <body className="min-h-screen flex flex-col">
        <HoldingOverlay />
        <Header />
        <main className="flex-1">{children}</main>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}