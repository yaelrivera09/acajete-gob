import PageHeader from "@/components/PageHeader";
import { Mountain, TreePine, Milk, Camera } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Turismo | H. Ayuntamiento de Acajete",
  description: "Descubre Acajete, Veracruz: bosques, tradición lechera y gastronomía local.",
};

export default function TurismoPage() {
  return (
    <>
      <PageHeader
        title="Descubre Acajete"
        subtitle="Turismo y cultura"
        breadcrumbs={[{ label: "Turismo" }]}
      />

      <SeccionIntro />
      <SeccionAtractivos />
      <SeccionEnDesarrollo />
    </>
  );
}

function SeccionIntro() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-lg text-brand-800 leading-relaxed">
          Acajete es un municipio veracruzano con identidad propia. Tierra de bosques de pino, tradición lechera y una comunidad orgullosa de su herencia. Muy pronto tendremos toda la información turística para que descubras cada rincón de nuestro municipio.
        </p>
      </div>
    </section>
  );
}

function SeccionAtractivos() {
  const atractivos = [
    {
      icon: TreePine,
      titulo: "Bosques de Pino",
      descripcion: "Paisajes de montaña con bosques de pino que caracterizan nuestro municipio y enmarcan el escudo de Acajete.",
    },
    {
      icon: Milk,
      titulo: "Tradición Lechera",
      descripcion: "Reconocido por su producción de leche, quesos artesanales y derivados lácteos de alta calidad.",
    },
    {
      icon: Mountain,
      titulo: "Paisajes Naturales",
      descripcion: "Cielos abiertos, clima fresco y vistas que invitan a la contemplación y al descanso.",
    },
    {
      icon: Camera,
      titulo: "Identidad y Cultura",
      descripcion: "Comunidad con tradiciones vivas, gastronomía local y la calidez de su gente acajetense.",
    },
  ];

  return (
    <section className="pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-0.5 bg-accent-500" />
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-brand-900 font-bold">
            Lo que nos distingue
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {atractivos.map((item, idx) => {
            const Icon = item.icon;
            return (
              <article key={idx} className="group bg-white rounded-sm p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-t-2 border-accent-500">
                <div className="w-14 h-14 rounded-sm bg-brand-50 flex items-center justify-center mb-4 group-hover:bg-accent-500 transition-colors">
                  <Icon size={26} className="text-brand-800 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-lg text-brand-900 font-bold mb-2">
                  {item.titulo}
                </h3>
                <p className="text-sm text-brand-700 leading-relaxed">
                  {item.descripcion}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SeccionEnDesarrollo() {
  return (
    <section className="py-20 bg-brand-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2060%20120%22%3E%3Cpath%20d%3D%22M30%200L45%2040L55%2050L30%20120L5%2050L15%2040Z%22%20fill%3D%22%23ffffff%22%2F%3E%3C%2Fsvg%3E')] bg-repeat" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Camera className="mx-auto text-accent-400 mb-5" size={48} />
        <p className="text-xs uppercase tracking-[0.3em] text-accent-400 font-semibold mb-4">
          Próximamente
        </p>
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold mb-5">
          Guía turística en desarrollo
        </h2>
        <p className="text-brand-100 leading-relaxed mb-8 max-w-2xl mx-auto">
          Estamos preparando una guía completa con lugares de interés, gastronomía, hospedaje, festividades y recorridos. Mientras tanto, conoce nuestros servicios y el trabajo del H. Ayuntamiento.
        </p>
        <Link href="/" className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-7 py-3 rounded-sm font-semibold text-sm uppercase tracking-wider transition hover:gap-3">
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}