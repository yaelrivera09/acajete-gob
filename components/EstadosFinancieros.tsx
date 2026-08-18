"use client";

import { useState } from "react";
import { ChevronDown, FileText, Download } from "lucide-react";
import { estadosFinancierosT1_2026, type Categoria, type Documento } from "@/lib/data-transparencia";

type Datos = typeof estadosFinancierosT1_2026;

export default function EstadosFinancieros({ datos = estadosFinancierosT1_2026 }: { datos?: Datos }) {
  const { lgcg, ldf, periodo } = datos;

  return (
    <section className="pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-0.5 bg-accent-500" />
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-brand-900 font-bold">
            Estados Financieros — {periodo}
          </h2>
        </div>
        <p className="text-sm text-brand-600 mb-10 pl-[52px]">
          Información publicada conforme a la normatividad vigente. Haz clic en cualquier documento para consultarlo.
        </p>

        {/* LGCG */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="bg-brand-800 text-white text-xs font-bold px-3 py-1 rounded-sm tracking-wider uppercase">
              {lgcg.siglas}
            </span>
            <span className="text-brand-700 text-sm font-medium">{lgcg.nombre}</span>
          </div>

          <div className="space-y-3">
            {lgcg.meses.map((mes) => (
              <MesAccordion key={mes.id} titulo={mes.nombre}>
                <div className="space-y-4 pt-2">
                  {mes.categorias.map((cat) => (
                    <CategoriaBlock key={cat.nombre} categoria={cat} />
                  ))}
                </div>
              </MesAccordion>
            ))}
          </div>
        </div>

        {/* LDF */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="bg-accent-600 text-white text-xs font-bold px-3 py-1 rounded-sm tracking-wider uppercase">
              {ldf.siglas}
            </span>
            <span className="text-brand-700 text-sm font-medium">{ldf.nombre}</span>
          </div>

          <div className="space-y-3">
            {ldf.meses.map((mes) => (
              <MesAccordion key={mes.id} titulo={mes.nombre}>
                <ListaDocumentos documentos={mes.documentos} />
              </MesAccordion>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MesAccordion({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  const [abierto, setAbierto] = useState(false);

  return (
    <div className="border border-brand-200 rounded-sm overflow-hidden">
      <button
        onClick={() => setAbierto(!abierto)}
        className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-brand-50 transition-colors text-left"
      >
        <span className="font-[family-name:var(--font-playfair)] font-semibold text-brand-900">
          {titulo}
        </span>
        <ChevronDown
          size={18}
          className={`text-accent-600 transition-transform duration-200 flex-shrink-0 ${abierto ? "rotate-180" : ""}`}
        />
      </button>

      {abierto && (
        <div className="px-6 pb-5 bg-brand-50/40 border-t border-brand-100">
          {children}
        </div>
      )}
    </div>
  );
}

function CategoriaBlock({ categoria }: { categoria: Categoria }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.2em] text-accent-600 font-semibold mb-2 mt-4">
        {categoria.nombre}
      </p>
      <ListaDocumentos documentos={categoria.documentos} />
    </div>
  );
}

function ListaDocumentos({ documentos }: { documentos: Documento[] }) {
  return (
    <ul className="space-y-1">
      {documentos.map((doc) => (
        <li key={doc.href}>
          <a
            href={doc.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-3 py-2.5 rounded-sm hover:bg-white hover:shadow-sm transition-all"
          >
            <FileText size={15} className="text-brand-400 group-hover:text-accent-500 flex-shrink-0 transition-colors" />
            <span className="text-sm text-brand-800 group-hover:text-brand-900 flex-1 leading-snug">
              {doc.nombre}
            </span>
            <Download size={13} className="text-brand-300 group-hover:text-accent-500 flex-shrink-0 transition-colors" />
          </a>
        </li>
      ))}
    </ul>
  );
}
