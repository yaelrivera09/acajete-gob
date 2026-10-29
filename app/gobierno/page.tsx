import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import { cabildo, siteConfig } from "@/lib/data";
import { UserCircle, ExternalLink, Download } from "lucide-react";
import Correo from "@/components/Correo";

export const metadata = {
  title: "Gobierno | H. Ayuntamiento de Acajete",
  description: "Conoce al Cabildo Municipal de Acajete, Veracruz 2026-2029.",
};

export default function GobiernoPage() {
  return (
    <>
      <PageHeader
        title="Cabildo Municipal"
        subtitle={`Gobierno ${siteConfig.period}`}
        breadcrumbs={[{ label: "Gobierno" }]}
      />

      {/* Introducción */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-brand-800 leading-relaxed">
            El Honorable Ayuntamiento de Acajete está conformado por servidoras y servidores
            públicos comprometidos con el desarrollo, la transparencia y la cercanía con las
            familias acajetenses.
          </p>
        </div>
      </section>

      {/* Grid del Cabildo */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {cabildo.map((persona, idx) => (
              <article
                key={idx}
                className="group bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              >
                {/* Foto o placeholder */}
                <div className="relative aspect-[4/5] bg-brand-100 overflow-hidden">
                  {persona.imagen ? (
                    <Image
                      src={persona.imagen}
                      alt={persona.nombre}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <UserCircle className="text-brand-300" size={72} />
                    </div>
                  )}

                  {/* Franja naranja decorativa */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>

                {/* Información */}
                <div className="p-6">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-accent-600 font-semibold mb-2">
                    {persona.cargo}
                  </p>
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg text-brand-900 font-bold leading-tight">
                    {persona.nombre}
                  </h3>
                  {persona.correo && (
                    <a
                      href={`mailto:${persona.correo}`}
                      className="mt-3 inline-block text-[11px] leading-snug text-accent-600 hover:text-accent-700 transition-colors break-words"
                    >
                      <Correo valor={persona.correo} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Organigrama */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-0.5 bg-accent-500" />
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-brand-900 font-bold">
              Organigrama
            </h2>
          </div>
          <p className="text-sm text-brand-600 mb-8 pl-[52px]">
            Estructura orgánica del H. Ayuntamiento de Acajete, administración 2026&nbsp;&ndash;&nbsp;2029.
          </p>

          <a
            href="/images/organigrama-2026-2029.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white rounded-sm shadow-sm hover:shadow-lg transition-shadow duration-300 border border-brand-100 p-4 sm:p-6"
            aria-label="Ver el organigrama en tamaño completo"
          >
            <div className="relative w-full" style={{ aspectRatio: "1 / 1" }}>
              <Image
                src="/images/organigrama-2026-2029.jpg"
                alt="Organigrama del H. Ayuntamiento de Acajete, Veracruz, administración 2026-2029"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 1000px"
              />
            </div>
          </a>

          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
            <a
              href="/images/organigrama-2026-2029.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-accent-600 uppercase tracking-wider hover:gap-3 transition-all"
            >
              Ver en tamaño completo
              <ExternalLink size={13} />
            </a>
            <a
              href="/images/organigrama-2026-2029.jpg"
              download
              className="inline-flex items-center gap-2 text-xs font-semibold text-brand-600 uppercase tracking-wider hover:text-brand-900 transition-colors"
            >
              Descargar
              <Download size={13} />
            </a>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-10 rounded-sm shadow-md border-t-4 border-accent-500">
              <p className="text-xs uppercase tracking-[0.3em] text-accent-600 font-semibold mb-4">
                Misión
              </p>
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-brand-900 font-bold mb-4">
                Servir con honestidad y cercanía
              </h3>
              <p className="text-brand-800 leading-relaxed">
                Trabajar por el bienestar de las familias acajetenses, impulsando obras y
                servicios de calidad, con manejo responsable de los recursos públicos y una
                administración transparente al servicio de la comunidad.
              </p>
            </div>

            <div className="bg-white p-10 rounded-sm shadow-md border-t-4 border-brand-700">
              <p className="text-xs uppercase tracking-[0.3em] text-brand-700 font-semibold mb-4">
                Visión
              </p>
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-brand-900 font-bold mb-4">
                Un Acajete próspero y unido
              </h3>
              <p className="text-brand-800 leading-relaxed">
                Consolidar a Acajete como un municipio moderno, con desarrollo económico
                sostenible, identidad cultural fuerte y oportunidades para todas y todos sus
                habitantes, en especial para las nuevas generaciones.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}