import PageHeader from "@/components/PageHeader";
import { gruposNormatividad } from "@/lib/data";
import { FileText, ExternalLink, Download, Scale } from "lucide-react";

export const metadata = {
  title: "Reglamentos Municipales | H. Ayuntamiento de Acajete",
  description:
    "Reglamentos y normatividad vigente del H. Ayuntamiento de Acajete, Veracruz, así como el Plan Municipal de Desarrollo 2026-2029. Consulta y descarga en formato PDF.",
};

export default function ReglamentosPage() {
  return (
    <>
      <PageHeader
        title="Reglamentos Municipales"
        subtitle="Normatividad vigente"
        breadcrumbs={[{ label: "Reglamentos" }]}
      />

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 mb-12 max-w-3xl">
            <Scale className="text-accent-500 flex-shrink-0 mt-1" size={28} />
            <p className="text-brand-800 leading-relaxed">
              Consulta la normatividad municipal vigente aprobada por el H. Ayuntamiento de Acajete.
              Cada documento puede consultarse en línea o descargarse en formato PDF, en su versión
              íntegra tal como fue publicada.
            </p>
          </div>

          <div className="space-y-14">
            {gruposNormatividad.map((grupo) => (
              <div key={grupo.id}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-0.5 bg-accent-500" />
                  <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-brand-900 font-bold">
                    {grupo.nombre}
                  </h2>
                </div>

                <div className="space-y-5">
                  {grupo.documentos.map((doc) => (
                    <article
                      key={doc.id}
                      className="group bg-white rounded-sm shadow-sm hover:shadow-lg transition-all duration-300 border-l-4 border-brand-700 hover:border-accent-500 p-6 sm:p-7"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 flex-shrink-0 rounded-sm bg-brand-50 flex items-center justify-center group-hover:bg-accent-500 transition-colors">
                          <FileText size={22} className="text-brand-800 group-hover:text-white transition-colors" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="font-[family-name:var(--font-playfair)] text-lg sm:text-xl text-brand-900 font-bold leading-tight mb-2">
                            {doc.titulo}
                          </h3>

                          <p className="text-sm text-brand-700 leading-relaxed mb-3">
                            {doc.descripcion}
                          </p>

                          {doc.fuente && (
                            <p className="text-xs text-brand-500 italic mb-4">{doc.fuente}</p>
                          )}

                          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                            <span className="text-[11px] uppercase tracking-wider text-brand-500 font-semibold">
                              PDF · {doc.paginas} páginas · {doc.peso}
                            </span>

                            <a
                              href={doc.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-xs font-semibold text-accent-600 uppercase tracking-wider hover:gap-3 transition-all"
                            >
                              Consultar
                              <ExternalLink size={13} />
                            </a>

                            <a
                              href={doc.href}
                              download
                              className="inline-flex items-center gap-2 text-xs font-semibold text-brand-600 uppercase tracking-wider hover:text-brand-900 transition-colors"
                            >
                              Descargar
                              <Download size={13} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
