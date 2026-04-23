import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { tramitesRegistroCivil, tramitesCatastro } from "@/lib/data";
import { FileText, Home, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Trámites y Servicios | H. Ayuntamiento de Acajete",
  description: "Conoce los trámites y servicios que ofrece el H. Ayuntamiento de Acajete.",
};

const categorias = [
  {
    href: "/tramites/registro-civil",
    icon: FileText,
    titulo: "Registro Civil",
    descripcion: "Actas, matrimonios, defunciones, divorcios y más trámites del Registro Civil.",
    cantidad: tramitesRegistroCivil.length,
    destacado: "17 trámites disponibles",
  },
  {
    href: "/tramites/catastro",
    icon: Home,
    titulo: "Catastro Municipal",
    descripcion: "Cédulas catastrales, certificados de valor y actualizaciones al registro.",
    cantidad: tramitesCatastro.length,
    destacado: "3 trámites disponibles",
  },
];

export default function TramitesPage() {
  return (
    <>
      <PageHeader
        title="Trámites y Servicios"
        subtitle="Atención ciudadana"
        breadcrumbs={[{ label: "Trámites" }]}
      />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-brand-800 leading-relaxed">
            Consulta los requisitos, costos y tiempos de respuesta de los trámites que puedes realizar en el H. Ayuntamiento de Acajete. Selecciona la categoría de tu interés.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categorias.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className="group bg-white rounded-sm p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-accent-500"
                >
                  <div className="w-16 h-16 rounded-sm bg-brand-50 flex items-center justify-center mb-5 group-hover:bg-accent-500 transition-colors">
                    <Icon size={28} className="text-brand-800 group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-accent-600 font-semibold mb-2">
                    {cat.destacado}
                  </p>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-brand-900 font-bold mb-3">
                    {cat.titulo}
                  </h3>
                  <p className="text-brand-700 leading-relaxed mb-5">
                    {cat.descripcion}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent-600 uppercase tracking-wider group-hover:gap-2 transition-all">
                    Ver trámites
                    <ArrowRight size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-accent-400 font-semibold mb-4">
            Importante
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold mb-4">
            Atención personalizada
          </h2>
          <p className="text-brand-100 leading-relaxed">
            Todos los trámites se realizan en el Palacio Municipal de Acajete, en horario de lunes a viernes de 9:00 a 16:00 hrs. Los costos pueden actualizarse anualmente conforme a la Ley de Ingresos del Municipio.
          </p>
        </div>
      </section>
    </>
  );
}