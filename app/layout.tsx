import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import { siteConfig } from "@/lib/data";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const SITIO = "https://acajete.gob.mx";
const DESCRIPCION =
  "Sitio oficial del H. Ayuntamiento de Acajete, Veracruz. Gobierno municipal 2026-2029. Trámites, transparencia y servicios al ciudadano.";

export const metadata: Metadata = {
  metadataBase: new URL(SITIO),
  title: "H. Ayuntamiento de Acajete, Veracruz | 2026 - 2029",
  description: DESCRIPCION,
  keywords: [
    "Acajete",
    "Acajete Veracruz",
    "Ayuntamiento de Acajete",
    "H. Ayuntamiento de Acajete",
    "Gobierno Municipal de Acajete",
    "Veracruz",
    "Transparencia Acajete",
    "2026-2029",
  ],
  applicationName: "H. Ayuntamiento de Acajete",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITIO,
    siteName: "H. Ayuntamiento de Acajete, Veracruz",
    title: "H. Ayuntamiento de Acajete, Veracruz | Sitio oficial",
    description: DESCRIPCION,
    images: [{ url: "/images/logo-acajete.jpg", width: 1080, height: 1082, alt: "Emblema del H. Ayuntamiento de Acajete" }],
  },
  robots: { index: true, follow: true },
};

// Datos estructurados: identifican el sitio como la organización
// gubernamental oficial del municipio ante buscadores.
const organizacionJsonLd = {
  "@context": "https://schema.org",
  "@type": "GovernmentOrganization",
  name: "H. Ayuntamiento de Acajete, Veracruz",
  alternateName: ["Ayuntamiento de Acajete", "Gobierno Municipal de Acajete"],
  url: SITIO,
  logo: `${SITIO}/images/logo-acajete-transparente.png`,
  email: siteConfig.email,
  telephone: `+52 ${siteConfig.phone}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Palacio Municipal, Centro",
    addressLocality: "Acajete",
    addressRegion: "Veracruz",
    addressCountry: "MX",
  },
  areaServed: { "@type": "AdministrativeArea", name: "Acajete, Veracruz" },
  sameAs: [siteConfig.facebook],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={montserrat.variable}>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizacionJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}