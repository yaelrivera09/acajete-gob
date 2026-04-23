"use client";

import { useState } from "react";
import { ChevronDown, CheckCircle2, DollarSign, Clock, Users, CreditCard } from "lucide-react";

type Tramite = {
  id: string;
  titulo: string;
  subtitulo?: string;
  costo: string;
  esGratuito?: boolean;
  lugarPago?: string;
  descripcion?: string;
  tiempoRespuesta?: string;
  solicitantes?: string;
  formaPago?: string;
  requisitos: string[];
};

export default function TramiteAccordion({ tramite }: { tramite: Tramite }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="bg-white rounded-sm shadow-sm hover:shadow-md transition overflow-hidden border border-brand-100">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left hover:bg-brand-50 transition"
        aria-expanded={open}
      >
        <div className="flex-1 min-w-0">
          <h3 className="font-[family-name:var(--font-playfair)] text-lg md:text-xl text-brand-900 font-bold leading-tight">
            {tramite.titulo}
          </h3>
          {tramite.subtitulo && (
            <p className="text-xs text-brand-600 mt-1 italic">{tramite.subtitulo}</p>
          )}
          <div className="flex flex-wrap items-center gap-2 mt-3">
            <span
              className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-sm ${
                tramite.esGratuito
                  ? "bg-brand-100 text-brand-800"
                  : "bg-accent-100 text-accent-800"
              }`}
            >
              <DollarSign size={12} />
              {tramite.costo}
            </span>
            {tramite.tiempoRespuesta && (
              <span className="inline-flex items-center gap-1 text-xs text-brand-600 px-2.5 py-1">
                <Clock size={12} />
                {tramite.tiempoRespuesta}
              </span>
            )}
          </div>
        </div>

        <div
          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
            open ? "bg-accent-500 text-white rotate-180" : "bg-brand-50 text-brand-700"
          }`}
        >
          <ChevronDown size={20} />
        </div>
      </button>

      {open && (
        <div className="px-5 md:px-6 pb-6 pt-2 border-t border-brand-100 animate-[fadeIn_0.3s_ease-out]">
          {tramite.descripcion && (
            <p className="text-brand-700 leading-relaxed mb-5 italic">
              {tramite.descripcion}
            </p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            {tramite.lugarPago && (
              <InfoBox icon={CreditCard} label="Lugar de pago" value={tramite.lugarPago} />
            )}
            {tramite.formaPago && (
              <InfoBox icon={CreditCard} label="Forma de pago" value={tramite.formaPago} />
            )}
            {tramite.solicitantes && (
              <InfoBox icon={Users} label="Pueden solicitarlo" value={tramite.solicitantes} />
            )}
            {tramite.tiempoRespuesta && (
              <InfoBox icon={Clock} label="Tiempo de respuesta" value={tramite.tiempoRespuesta} />
            )}
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent-600 font-semibold mb-3">
              Requisitos
            </p>
            <ul className="space-y-2.5">
              {tramite.requisitos.map((req, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-brand-800 leading-relaxed">
                  <CheckCircle2 size={18} className="text-accent-500 flex-shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </article>
  );
}

function InfoBox({ icon: Icon, label, value }: { icon: React.ComponentType<{ size?: number; className?: string }>; label: string; value: string }) {
  return (
    <div className="bg-brand-50 rounded-sm p-3 flex items-start gap-3">
      <Icon size={16} className="text-accent-600 flex-shrink-0 mt-0.5" />
      <div className="min-w-0">
        <p className="text-[10px] uppercase tracking-wider text-brand-700 font-semibold mb-0.5">
          {label}
        </p>
        <p className="text-xs text-brand-800 leading-relaxed">{value}</p>
      </div>
    </div>
  );
}