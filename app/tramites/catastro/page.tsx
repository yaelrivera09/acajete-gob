import PageHeader from "@/components/PageHeader";
import TramiteAccordion from "@/components/TramiteAccordion";
import { tramitesCatastro } from "@/lib/data";
import { Info } from "lucide-react";

export const metadata = {
  title: "Catastro Municipal | Trámites | H. Ayuntamiento de Acajete",
  description: "Trámites de Catastro Municipal: cédulas catastrales, certificados y actualizaciones.",
};

export default function CatastroPage() {
  return (
    <>
      <PageHeader
        title="Catastro Municipal"
        subtitle="Trámites y servicios"
        breadcrumbs={[
          { label: "Trámites", href: "/tramites" },
          { label: "Catastro" },
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
          Realiza tus trámites de catastro municipal. Todos los trámites tienen un tiempo de respuesta de 15 días naturales.
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
            Los pagos pueden realizarse en <strong>efectivo</strong> o por <strong>transferencia bancaria</strong> a la cuenta institucional del H. Ayuntamiento de Acajete, Veracruz.
          </p>
        </div>

        <div className="space-y-3">
          {tramitesCatastro.map((tramite) => (
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
          ¿Necesitas orientación?
        </h3>
        <p className="text-brand-700 mb-6">
          Nuestro equipo de Catastro está listo para atenderte.
        </p>
        <a href="/contacto" className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-7 py-3 rounded-sm font-semibold text-sm uppercase tracking-wider transition">
          Contactar Catastro
        </a>
      </div>
    </section>
  );
}