import PageHeader from "@/components/PageHeader";
import { avisoPrivacidad } from "@/lib/data";
import { Shield, Calendar, MapPin } from "lucide-react";

export const metadata = {
  title: "Aviso de Privacidad | H. Ayuntamiento de Acajete",
  description: "Aviso de Privacidad del H. Ayuntamiento de Acajete, Veracruz.",
};

export default function AvisoPrivacidadPage() {
  return (
    <>
      <PageHeader
        title="Aviso de Privacidad"
        subtitle="Protección de datos personales"
        breadcrumbs={[{ label: "Aviso de Privacidad" }]}
      />

      <SeccionIntro />
      <SeccionContenido />
    </>
  );
}

function SeccionIntro() {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-sm shadow-md p-8 border-t-4 border-accent-500">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 flex-shrink-0 rounded-full bg-brand-50 flex items-center justify-center">
              <Shield className="text-accent-500" size={24} />
            </div>
            <div className="flex-1">
              <h2 className="font-[family-name:var(--font-playfair)] text-xl text-brand-900 font-bold mb-2">
                {avisoPrivacidad.responsable}
              </h2>
              <p className="text-sm text-brand-700 leading-relaxed">
                El presente aviso cumple con lo dispuesto por la Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados y la legislación aplicable en el estado de Veracruz.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-brand-100">
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-accent-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-brand-600 font-semibold mb-1">
                  Domicilio
                </p>
                <p className="text-sm text-brand-800">{avisoPrivacidad.domicilio}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar size={16} className="text-accent-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-brand-600 font-semibold mb-1">
                  Última actualización
                </p>
                <p className="text-sm text-brand-800">{avisoPrivacidad.ultimaActualizacion}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SeccionContenido() {
  return (
    <section className="pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-5">
          {avisoPrivacidad.secciones.map((sec, idx) => (
            <article key={idx} className="bg-white rounded-sm shadow-sm p-7 border-l-4 border-brand-700 hover:border-accent-500 transition">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-brand-900 text-white flex items-center justify-center text-sm font-bold">
                  {idx + 1}
                </span>
                <h3 className="font-[family-name:var(--font-playfair)] text-lg md:text-xl text-brand-900 font-bold leading-tight">
                  {sec.titulo}
                </h3>
              </div>
              <p className="text-brand-700 leading-relaxed pl-11">{sec.contenido}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 bg-brand-50 rounded-sm p-8 text-center">
          <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-brand-900 font-bold mb-3">
            ¿Tienes preguntas sobre tus datos?
          </h3>
          <p className="text-brand-700 mb-6">
            Contacta a la Unidad de Transparencia del H. Ayuntamiento de Acajete.
          </p>
          <a href="/contacto" className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-7 py-3 rounded-sm font-semibold text-sm uppercase tracking-wider transition">
            Contactar
          </a>
        </div>
      </div>
    </section>
  );
}