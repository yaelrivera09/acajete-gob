import Link from "next/link";
import Image from "next/image";
import { FileText, Users, Eye, Phone, ArrowRight, MapPin } from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";

// Accesos rápidos que aparecen debajo del hero
const quickAccess = [
  {
    icon: FileText,
    title: "Trámites y Servicios",
    description: "Registro Civil, Catastro y más trámites municipales.",
    href: "/tramites",
  },
  {
    icon: Users,
    title: "Directorio",
    description: "Conoce a tu gobierno y a los directores de área.",
    href: "/directorio",
  },
  {
    icon: Eye,
    title: "Transparencia",
    description: "Información pública y rendición de cuentas.",
    href: "/transparencia",
  },
  {
    icon: Phone,
    title: "Contacto",
    description: "Escríbenos o visítanos en el Palacio Municipal.",
    href: "/contacto",
  },
];

export default function Home() {
  return (
    <>
      {/* ============ HERO CARRUSEL ============ */}
      <HeroCarousel />

      {/* ============ ACCESOS RÁPIDOS ============ */}
      <section className="relative -mt-16 z-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickAccess.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group bg-white rounded-sm p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-accent-500"
                >
                  <div className="w-12 h-12 rounded-sm bg-brand-50 flex items-center justify-center mb-4 group-hover:bg-accent-500 transition-colors">
                    <Icon className="text-brand-800 group-hover:text-white transition-colors" size={24} />
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl text-brand-900 font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-brand-700 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent-600 uppercase tracking-wider group-hover:gap-2 transition-all">
                    Ingresar
                    <ArrowRight size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ CONVOCATORIA ============ */}
      <section className="py-16 bg-brand-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-accent-600 font-semibold mb-4">
            Aviso oficial
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-brand-900 font-bold mb-8">
            Convocatoria
          </h2>
          <div className="relative inline-block shadow-2xl rounded-sm overflow-hidden">
            <Image
              src="/images/convocatoria.jpeg"
              alt="Convocatoria oficial del H. Ayuntamiento de Acajete"
              width={800}
              height={1100}
              className="w-full max-w-2xl mx-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* ============ MENSAJE INSTITUCIONAL ============ */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Imagen / placeholder de la presidenta */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] bg-gradient-to-br from-brand-100 to-brand-200 rounded-sm overflow-hidden shadow-2xl">
                {/* TODO: reemplazar con foto oficial de la presidenta */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-brand-800 flex items-center justify-center">
                      <Users className="text-white" size={32} />
                    </div>
                    <p className="text-sm text-brand-700 font-semibold">
                      📷 Foto oficial de la Presidenta
                    </p>
                    <p className="text-xs text-brand-600 mt-1">
                      Recomendado: 800×1000 px
                    </p>
                  </div>
                </div>
                {/* Decoración esquina */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-accent-500" />
                <div className="absolute bottom-0 left-0 w-20 h-1 bg-accent-500" />
              </div>
            </div>

            {/* Texto */}
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.3em] text-accent-600 font-semibold mb-4">
                Mensaje de la Presidenta
              </p>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-brand-900 font-bold mb-6 leading-tight">
                Un gobierno de puertas abiertas para todas y todos
              </h2>
              <div className="space-y-4 text-brand-800 leading-relaxed">
                <p>
                  En este sitio encontrarás información clara y accesible sobre los servicios, trámites y avances de nuestra administración. Nuestro compromiso es trabajar de la mano de las familias acajetenses, con honestidad, cercanía y resultados.
                </p>
                <p>
                  Acajete es un municipio con gran riqueza natural, tradición lechera y gente trabajadora. Desde el H. Ayuntamiento impulsamos obras, servicios y programas pensados para fortalecer nuestra comunidad.
                </p>
                <p className="font-[family-name:var(--font-playfair)] italic text-brand-700 text-lg pt-2 border-l-4 border-accent-500 pl-4">
                  &quot;Gobernar es servir, y servir es nuestro mayor orgullo.&quot;
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-brand-200">
                <p className="font-[family-name:var(--font-playfair)] text-xl text-brand-900 font-bold">
                  C. María Claudia Nava Santos
                </p>
                <p className="text-sm text-accent-600 uppercase tracking-wider mt-1">
                  Presidenta Municipal
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============ CONOCE ACAJETE ============ */}
      <section className="py-20 md:py-28 bg-brand-900 text-white relative overflow-hidden">
        {/* Patrón decorativo de fondo */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2060%20120%22%3E%3Cpath%20d%3D%22M30%200L45%2040L55%2050L30%20120L5%2050L15%2040Z%22%20fill%3D%22%23ffffff%22%2F%3E%3C%2Fsvg%3E')] bg-repeat" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-accent-400 font-semibold mb-4">
              Nuestro municipio
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Acajete, tierra de bosques, lácteos y tradición
            </h2>
            <p className="text-brand-100 text-lg leading-relaxed mb-8">
              Ubicado en el estado de Veracruz, Acajete es reconocido por su producción lechera, sus quesos artesanales y sus bosques de pino que enmarcan el paisaje. Un municipio donde la tradición se encuentra con el progreso.
            </p>
          </div>

          {/* Grid de datos rápidos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-12 border-t border-brand-700">
            {[
              { value: "2026", label: "Inicio de gestión" },
              { value: "16", label: "Direcciones de área" },
              { value: "15+", label: "Trámites disponibles" },
              { value: "100%", label: "Transparencia" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-accent-400 font-bold mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-brand-200 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BANNER CTA ============ */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-accent-500 to-accent-600 rounded-sm p-10 md:p-16 relative overflow-hidden">
            {/* Decoración */}
            <div className="absolute -right-10 -top-10 w-64 h-64 rounded-full bg-white/10" />
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-white/5" />

            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <p className="text-xs uppercase tracking-[0.3em] text-white/80 font-semibold mb-3">
                  Visítanos
                </p>
                <h3 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-white font-bold mb-3">
                  ¿Necesitas realizar un trámite?
                </h3>
                <p className="text-white/90 text-lg">
                  Encuentra todos los requisitos, costos y tiempos de respuesta en nuestra sección de trámites municipales.
                </p>
              </div>
              <div className="flex md:justify-end">
                <Link
                  href="/tramites"
                  className="inline-flex items-center gap-2 bg-white text-accent-700 hover:bg-brand-50 px-8 py-4 rounded-sm font-bold text-sm uppercase tracking-wider transition-all hover:gap-3 shadow-xl"
                >
                  Ver trámites
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ UBICACIÓN ============ */}
      <section className="py-16 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accent-600 font-semibold mb-3">
                Ubicación
              </p>
              <h3 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-brand-900 font-bold mb-4">
                Palacio Municipal de Acajete
              </h3>
              <p className="text-brand-700 leading-relaxed mb-6">
                Estamos para servirte. Visítanos de lunes a viernes en horario de oficina.
              </p>
              <div className="flex items-start gap-3">
                <MapPin className="text-accent-600 flex-shrink-0 mt-1" size={20} />
                <p className="text-brand-800">
                  Palacio Municipal, Centro<br />
                  Acajete, Veracruz, México
                </p>
              </div>
            </div>
            {/* Placeholder para mapa o foto del palacio */}
            {/* Foto del Palacio Municipal */}
            <div className="relative aspect-video rounded-sm overflow-hidden shadow-2xl group">
              <Image
                src="/images/hero/location.jpg"
                alt="Palacio Municipal de Acajete, Veracruz"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay sutil para darle profundidad */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/40 via-transparent to-transparent" />
              {/* Detalle decorativo esquina */}
              <div className="absolute top-4 left-4 bg-accent-500 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-sm shadow-lg">
                <span className="flex items-center gap-1.5">
                  <MapPin size={12} />
                  Acajete, Ver.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}