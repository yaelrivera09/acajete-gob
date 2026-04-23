import PageHeader from "@/components/PageHeader";
import { HardHat, ClipboardList, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Obras Públicas | H. Ayuntamiento de Acajete",
  description: "Información sobre las obras públicas del H. Ayuntamiento de Acajete, Veracruz.",
};

export default function ObrasPublicasPage() {
  return (
    <>
      <PageHeader
        title="Obras Públicas"
        subtitle="Desarrollo e infraestructura"
        breadcrumbs={[{ label: "Obras Públicas" }]}
      />

      <SeccionIntro />
      <SeccionProximamente />
      <SeccionCompromiso />
    </>
  );
}

function SeccionIntro() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-lg text-brand-800 leading-relaxed">
          La Dirección de Obras Públicas trabaja para mejorar la infraestructura municipal, elevar la calidad de vida de las familias acajetenses y atender las necesidades de cada comunidad.
        </p>
      </div>
    </section>
  );
}

function SeccionProximamente() {
  return (
    <section className="pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-sm shadow-lg p-10 md:p-16 text-center border-t-4 border-accent-500">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-brand-50 flex items-center justify-center">
            <HardHat className="text-accent-500" size={40} />
          </div>

          <p className="text-xs uppercase tracking-[0.3em] text-accent-600 font-semibold mb-3">
            Proyectos en planeación
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-brand-900 font-bold mb-5">
            Próximamente publicaremos los proyectos
          </h2>
          <p className="text-brand-700 leading-relaxed mb-8 max-w-2xl mx-auto">
            La presente administración se encuentra en la etapa de planeación y priorización de obras públicas para el periodo 2026-2029. Muy pronto encontrarás aquí el listado completo de proyectos, con avances, ubicación e información presupuestal.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 pt-10 border-t border-brand-100">
            <InfoItem icon={ClipboardList} label="Proyectos en análisis" valor="Por publicar" />
            <InfoItem icon={HardHat} label="Obras activas" valor="Próximamente" />
            <InfoItem icon={ClipboardList} label="Periodo de gestión" valor="2026 — 2029" />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoItem({ icon: Icon, label, valor }: { icon: React.ComponentType<{ size?: number; className?: string }>; label: string; valor: string }) {
  return (
    <div className="text-center">
      <Icon size={24} className="mx-auto text-accent-500 mb-2" />
      <p className="text-[10px] uppercase tracking-wider text-brand-600 font-semibold mb-1">
        {label}
      </p>
      <p className="text-sm text-brand-900 font-semibold">{valor}</p>
    </div>
  );
}

function SeccionCompromiso() {
  return (
    <section className="py-16 bg-brand-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent-600 font-semibold mb-3">
              Participación ciudadana
            </p>
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-brand-900 font-bold mb-4">
              Tu opinión construye Acajete
            </h3>
            <p className="text-brand-800 leading-relaxed mb-6">
              ¿Hay alguna obra o mejora que consideres prioritaria en tu comunidad? Acércate a la Dirección de Obras Públicas o contáctanos. Escuchamos a cada ciudadano.
            </p>
            <Link href="/contacto" className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-7 py-3 rounded-sm font-semibold text-sm uppercase tracking-wider transition hover:gap-3">
              Enviar propuesta
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="bg-white rounded-sm p-8 shadow-md border-l-4 border-brand-700">
            <p className="text-xs uppercase tracking-[0.2em] text-brand-700 font-semibold mb-3">
              Contacto directo
            </p>
            <h4 className="font-[family-name:var(--font-playfair)] text-xl text-brand-900 font-bold mb-2">
              Dirección de Obras Públicas
            </h4>
            <p className="text-sm text-brand-700 mb-1">Director:</p>
            <p className="text-brand-900 font-semibold mb-4">
              Ing. Esteban Cutberto Alarcón Hernández
            </p>
            <p className="text-xs text-brand-600 italic">
              Palacio Municipal, Acajete, Veracruz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}