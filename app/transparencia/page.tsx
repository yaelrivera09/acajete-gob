import PageHeader from "@/components/PageHeader";
import { leyesTransparencia } from "@/lib/data";
import EstadosFinancieros from "@/components/EstadosFinancieros";
import FraccionesLey875 from "@/components/FraccionesLey875";
import { estadosFinancierosT1_2026, estadosFinancierosT2_2026 } from "@/lib/data-transparencia";
import { Scale, FileText, ExternalLink, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Transparencia | H. Ayuntamiento de Acajete",
  description:
    "Portal de transparencia del H. Ayuntamiento de Acajete, Veracruz. Acceso a información pública y rendición de cuentas.",
};

export default function TransparenciaPage() {
  return (
    <>
      <PageHeader
        title="Portal de Transparencia"
        subtitle="Rendición de cuentas"
        breadcrumbs={[{ label: "Transparencia" }]}
      />

      <SeccionIntro />
      <SeccionLeyes />
      <FraccionesLey875 />
      <EstadosFinancieros datos={estadosFinancierosT1_2026} />
      <EstadosFinancieros datos={estadosFinancierosT2_2026} />
      <SeccionCompromiso />
    </>
  );
}

function SeccionIntro() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ShieldCheck className="mx-auto text-accent-500 mb-4" size={48} />
        <p className="text-lg text-brand-800 leading-relaxed">
          El H. Ayuntamiento de Acajete garantiza el acceso a la información pública conforme a los marcos legales vigentes. Aquí podrás consultar la normatividad aplicable y la información de interés público.
        </p>
      </div>
    </section>
  );
}

function SeccionLeyes() {
  return (
    <section className="pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-0.5 bg-accent-500" />
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-brand-900 font-bold">
            Marco Legal
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {leyesTransparencia.map((ley) => (
            <article key={ley.id} className="group bg-white rounded-sm p-7 shadow-sm hover:shadow-lg transition-all duration-300 border-t-4 border-brand-700 hover:border-accent-500">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-sm bg-brand-50 flex items-center justify-center group-hover:bg-accent-500 transition-colors">
                  <Scale size={22} className="text-brand-800 group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-accent-600 font-semibold mb-1">
                    {ley.numero}
                  </p>
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg text-brand-900 font-bold leading-tight">
                    {ley.titulo}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-brand-700 leading-relaxed mb-5">
                {ley.descripcion}
              </p>

              <a href={ley.enlace} className="inline-flex items-center gap-2 text-xs font-semibold text-accent-600 uppercase tracking-wider hover:gap-3 transition-all">
                Consultar información
                <ExternalLink size={12} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SeccionCompromiso() {
  return (
    <section className="py-16 bg-brand-900 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent-400 font-semibold mb-4">
              Nuestro compromiso
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold mb-5">
              Gobierno abierto y honesto
            </h2>
            <p className="text-brand-100 leading-relaxed mb-5">
              Creemos en la transparencia como principio fundamental del servicio público. Por ello, ponemos a disposición de toda la ciudadanía la información relevante sobre el manejo de los recursos, las decisiones administrativas y los resultados de la gestión municipal.
            </p>
            <p className="text-brand-200 text-sm italic">
              &quot;La información pública pertenece a las personas, nuestro deber es hacerla accesible.&quot;
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <EstadisticaBox valor="100%" label="Información pública" />
            <EstadisticaBox valor="4" label="Marcos legales" />
            <EstadisticaBox valor="24/7" label="Consulta en línea" />
            <EstadisticaBox valor="0" label="Información oculta" />
          </div>
        </div>
      </div>
    </section>
  );
}

function EstadisticaBox({ valor, label }: { valor: string; label: string }) {
  return (
    <div className="bg-brand-800 p-5 rounded-sm border border-brand-700">
      <p className="font-[family-name:var(--font-playfair)] text-3xl text-accent-400 font-bold mb-1">
        {valor}
      </p>
      <p className="text-xs text-brand-200 uppercase tracking-wider">{label}</p>
    </div>
  );
}