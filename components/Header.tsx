"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { mainNav, siteConfig } from "@/lib/data";

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Detecta el scroll para cambiar el estilo del header
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            {/* Barra superior delgada con información de contacto */}
            <div className="bg-brand-900 text-brand-100 text-xs py-2 px-4 hidden md:block">
                <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
                    <span>Gobierno Municipal {siteConfig.period}</span>
                    <div className="flex gap-6 items-center">
                        <a href={`mailto:${siteConfig.email}`} className="hover:text-accent-400 transition truncate">
                            {siteConfig.email}
                        </a>
                        <span className="hidden lg:inline">·</span>
                        <a href={`tel:${siteConfig.phone}`} className="hover:text-accent-400 transition whitespace-nowrap">
                            {siteConfig.phone}
                        </a>
                    </div>
                </div>
            </div>

            {/* Header principal sticky */}
            <header
                className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
                        ? "bg-white/95 backdrop-blur-md shadow-md"
                        : "bg-white"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo + nombre */}
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="relative w-14 h-14 flex-shrink-0">
                                <Image
                                    src="/images/logo-acajete.jpg"
                                    alt="Escudo de Acajete"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <div className="hidden sm:block">
                                <p className="font-[family-name:var(--font-playfair)] text-lg leading-tight text-brand-800 font-bold">
                                    Acajete
                                </p>
                                <p className="text-[10px] uppercase tracking-[0.2em] text-accent-600 font-semibold">
                                    Veracruz · {siteConfig.period}
                                </p>
                            </div>
                        </Link>

                        {/* Navegación desktop */}
                        <nav className="hidden lg:flex items-center gap-1">
                            {mainNav.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="relative px-4 py-2 text-sm font-medium text-brand-900 hover:text-accent-600 transition-colors group"
                                >
                                    {item.label}
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-3/4" />
                                </Link>
                            ))}
                        </nav>

                        {/* Botón menú móvil */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="lg:hidden p-2 rounded-md text-brand-800 hover:bg-brand-50"
                            aria-label="Abrir menú"
                        >
                            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Menú móvil desplegable */}
                {mobileOpen && (
                    <nav className="lg:hidden bg-white border-t border-brand-100 shadow-lg animate-[fadeIn_0.3s_ease-out]">
                        <div className="px-4 py-3 space-y-1">
                            {mainNav.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block px-4 py-3 rounded-md text-brand-900 hover:bg-accent-50 hover:text-accent-700 font-medium transition"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </nav>
                )}
            </header>
        </>
    );
}