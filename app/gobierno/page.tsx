import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import { cabildo, siteConfig } from "@/lib/data";
import { Users } from "lucide-react";

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
                <div className="relative aspect-[4/5] bg-gradient-to-br from-brand-100 to-brand-200 overflow-hidden">
                  {/* TODO: Cuando tengas las fotos, reemplaza este bloque por:
                      <Image src={persona.imagen} alt={persona.nombre} fill className="object-cover" />
                  */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-brand-800 flex items-center justify-center">
                        <Users className="text-white" size={28} />
                      </div>
                      <p className="text-xs text-brand-700 font-semibold">📷 Foto oficial</p>
                      <p className="text-[10px] text-brand-600 mt-1">400×500 px</p>
                    </div>
                  </div>

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
                </div>
              </article>
            ))}
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