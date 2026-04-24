"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Acajete",
    subtitle: "Un municipio con raíces profundas, visión moderna",
    description:
      "Tierra de tradición lechera, bosques de pino y gente trabajadora. Bienvenidos al sitio oficial del H. Ayuntamiento 2026 — 2029.",
    cta: { label: "Conoce nuestro gobierno", href: "/gobierno" },
    image: null,
    placeholderLabel: "Foto panorámica de Acajete (1920×1080)",
  },
  {
    title: "Trámites y Servicios",
    subtitle: "Transparentes, accesibles y sin complicaciones",
    description:
      "Registro Civil, Catastro, constancias y más. Todos los requisitos y costos claramente publicados para tu tranquilidad.",
    cta: { label: "Ver trámites", href: "/tramites" },
    image: null,
    placeholderLabel: "Foto del Palacio Municipal o atención ciudadana (1920×1080)",
  },
  {
    title: "Gobierno Abierto",
    subtitle: "Información pública al alcance de todos",
    description:
      "Nuestro compromiso es la transparencia. Consulta información financiera, contable y de gestión de manera directa.",
    cta: { label: "Portal de transparencia", href: "/transparencia" },
    image: null,
    placeholderLabel: "Foto de cabildo o evento institucional (1920×1080)",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const goTo = (idx: number) => setCurrent(idx);
  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      next();
    } else if (distance < -minSwipeDistance) {
      prev();
    }
  };

  return (
    <section
      className="relative h-[85vh] min-h-[560px] max-h-[800px] overflow-hidden bg-brand-900"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${idx === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          {slide.image ? (
            <div
              className="absolute inset-0 bg-cover bg-center animate-[kenburns_20s_ease-out_infinite_alternate]"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-brand-800 via-brand-900 to-brand-950">
              <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%3E%3Cpath%20d%3D%22M50%2010L60%2040L90%2045L67%2065L75%2095L50%2078L25%2095L33%2065L10%2045L40%2040Z%22%20fill%3D%22%23ffffff%22%20opacity%3D%220.1%22%2F%3E%3C%2Fsvg%3E')]" />
              <div className="absolute bottom-6 left-6 text-xs text-brand-300 bg-black/40 px-3 py-1.5 rounded-full border border-brand-600/50">
                📷 {slide.placeholderLabel}
              </div>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/60 to-brand-950/30" />

          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <p key={`sub-${idx}-${current}`} className="text-xs sm:text-sm uppercase tracking-[0.3em] text-accent-400 font-semibold mb-4 animate-[fadeInUp_0.7s_ease-out_forwards]">
                  {slide.subtitle}
                </p>
                <h1 key={`title-${idx}-${current}`} className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-bold mb-6 leading-[1.05] animate-[fadeInUp_0.7s_ease-out_0.1s_forwards] opacity-0">
                  {slide.title}
                </h1>
                <p key={`desc-${idx}-${current}`} className="text-base sm:text-lg text-brand-100 mb-8 max-w-2xl leading-relaxed animate-[fadeInUp_0.7s_ease-out_0.2s_forwards] opacity-0">
                  {slide.description}
                </p>
                <Link key={`cta-${idx}-${current}`} href={slide.cta.href} className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-7 py-3.5 rounded-sm font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:gap-3 shadow-lg hover:shadow-xl animate-[fadeInUp_0.7s_ease-out_0.3s_forwards] opacity-0">
                  {slide.cta.label}
                  <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button onClick={prev} className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 lg:w-12 lg:h-12 items-center justify-center rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm text-white transition border border-white/20" aria-label="Slide anterior">
        <ChevronLeft size={22} />
      </button>
      <button onClick={next} className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 lg:w-12 lg:h-12 items-center justify-center rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm text-white transition border border-white/20" aria-label="Slide siguiente">
        <ChevronRight size={22} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`h-1 transition-all duration-500 ${idx === current ? "w-12 bg-accent-500" : "w-8 bg-white/40 hover:bg-white/60"}`}
            aria-label={`Ir al slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}