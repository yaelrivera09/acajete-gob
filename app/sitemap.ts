import type { MetadataRoute } from "next";

const BASE = "https://acajete.gob.mx";

const rutas: { path: string; prioridad: number; frecuencia: "weekly" | "monthly" | "yearly" }[] = [
  { path: "", prioridad: 1, frecuencia: "weekly" },
  { path: "/transparencia", prioridad: 0.9, frecuencia: "weekly" },
  { path: "/tramites", prioridad: 0.8, frecuencia: "monthly" },
  { path: "/tramites/registro-civil", prioridad: 0.7, frecuencia: "monthly" },
  { path: "/tramites/catastro", prioridad: 0.7, frecuencia: "monthly" },
  { path: "/gobierno", prioridad: 0.8, frecuencia: "monthly" },
  { path: "/directorio", prioridad: 0.8, frecuencia: "monthly" },
  { path: "/obras-publicas", prioridad: 0.7, frecuencia: "monthly" },
  { path: "/turismo", prioridad: 0.6, frecuencia: "monthly" },
  { path: "/contacto", prioridad: 0.6, frecuencia: "yearly" },
  { path: "/aviso-privacidad", prioridad: 0.3, frecuencia: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const ahora = new Date();
  return rutas.map(({ path, prioridad, frecuencia }) => ({
    url: `${BASE}${path}`,
    lastModified: ahora,
    changeFrequency: frecuencia,
    priority: prioridad,
  }));
}
