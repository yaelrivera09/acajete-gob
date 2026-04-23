import Link from "next/link";
import { ChevronRight } from "lucide-react";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
};

export default function PageHeader({ title, subtitle, breadcrumbs }: PageHeaderProps) {
  return (
    <section className="relative bg-brand-900 text-white overflow-hidden">
      {/* Patrón decorativo de pinos */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2060%20120%22%3E%3Cpath%20d%3D%22M30%200L45%2040L55%2050L30%20120L5%2050L15%2040Z%22%20fill%3D%22%23ffffff%22%2F%3E%3C%2Fsvg%3E')] bg-repeat" />
      </div>

      {/* Degradado naranja sutil en la esquina */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent-500/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-brand-300 mb-6">
            <Link href="/" className="hover:text-accent-400 transition">
              Inicio
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <ChevronRight size={12} />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-accent-400 transition">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-accent-400">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {subtitle && (
          <p className="text-xs uppercase tracking-[0.3em] text-accent-400 font-semibold mb-4">
            {subtitle}
          </p>
        )}
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
          {title}
        </h1>
      </div>

      {/* Línea decorativa inferior */}
      <div className="h-1 bg-gradient-to-r from-accent-600 via-accent-500 to-accent-600" />
    </section>
  );
}