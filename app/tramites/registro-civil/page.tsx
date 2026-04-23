import PageHeader from "@/components/PageHeader";
import TramiteAccordion from "@/components/TramiteAccordion";
import { tramitesRegistroCivil } from "@/lib/data";
import { Info } from "lucide-react";

export const metadata = {
  title: "Registro Civil | Trámites | H. Ayuntamiento de Acajete",
  description: "Trámites del Registro Civil: actas, matrimonios, defunciones y más.",
};

export default function RegistroCivilPage() {
  return (
    <>
      <PageHeader
        title="Registro Civil"
        subtitle="Trámites y servicios"
        breadcrumbs={[
          { label: "Trámites", href: "/tramites" },
          { label: "Registro Civil" },
        ]}
      />

      <SeccionIntro />
      <SeccionTramites />
      <SeccionContacto />
    </>
  );
}

function SeccionIntro() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-lg text-brand-800 leading-relaxed">
          Selecciona el trámite que deseas realizar para ver todos los requisitos, costos y documentación necesaria.
        </p>
      </div>
    </section>
  );
}

function SeccionTramites() {
  return (
    <section className="pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-accent-50 border-l-4 border-accent-500 p-5 rounded-sm flex gap-3 mb-8">
          <Info size={20} className="text-accent-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-brand-800 leading-relaxed">
            Los pagos se realizan en la <strong>Tesorería Municipal</strong>. Presenta tu documentación en la Oficialía del Registro Civil para iniciar el trámite.
          </p>
        </div>

        <div className="space-y-3">
          {tramitesRegistroCivil.map((tramite) => (
            <TramiteAccordion key={tramite.id} tramite={tramite} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SeccionContacto() {
  return (
    <section className="py-12 bg-brand-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-brand-900 font-bold mb-3">
          ¿Tienes dudas sobre algún trámite?
        </h3>
        <p className="text-brand-700 mb-6">
          Visítanos en el Palacio Municipal o contáctanos directamente.
        </p>
        <a href="/contacto" className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-7 py-3 rounded-sm font-semibold text-sm uppercase tracking-wider transition">
          Contactar Registro Civil
        </a>
      </div>
    </section>
  );
}