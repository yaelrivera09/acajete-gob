import PageHeader from "@/components/PageHeader";
import { directores, cabildo, siteConfig } from "@/lib/data";
import Image from "next/image";
import { Briefcase, Mail, Phone, UserCircle } from "lucide-react";

export const metadata = {
    title: "Directorio | H. Ayuntamiento de Acajete",
    description: "Directorio de directores de área del H. Ayuntamiento de Acajete, Veracruz.",
};

type Director = {
    area: string;
    titular: string;
    nombre: string;
    imagen: string | null;
};

function DirectorCard({ director }: { director: Director }) {
    return (
        <div className="bg-white rounded-sm shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border-t-4 border-brand-700 hover:border-accent-500 group">
            <div className="relative h-52 bg-brand-100 overflow-hidden">
                {director.imagen ? (
                    <Image
                        src={director.imagen}
                        alt={director.nombre}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <UserCircle className="text-brand-300" size={72} />
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 via-transparent to-transparent" />
            </div>
            <div className="p-5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-accent-600 font-semibold mb-1">
                    {director.area}
                </p>
                <p className="font-[family-name:var(--font-playfair)] text-base text-brand-900 font-bold leading-tight mb-0.5">
                    {director.nombre}
                </p>
                <p className="text-xs text-brand-600">{director.titular}</p>
            </div>
        </div>
    );
}

export default function DirectorioPage() {
    return (
        <>
            <PageHeader
                title="Directorio Institucional"
                subtitle="Directores de área"
                breadcrumbs={[{ label: "Directorio" }]}
            />

            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-lg text-brand-800 leading-relaxed">
                        Conoce a las personas responsables de cada dirección del H. Ayuntamiento. Estamos para atenderte y trabajar por Acajete.
                    </p>
                </div>
            </section>

            <section className="pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-0.5 bg-accent-500" />
                        <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-brand-900 font-bold">
                            Honorable Cabildo
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {cabildo.map((persona, idx) => (
                            <div key={idx} className="bg-white p-5 rounded-sm shadow-sm hover:shadow-md transition border-l-4 border-accent-500">
                                <p className="text-[10px] uppercase tracking-[0.15em] text-accent-600 font-semibold mb-1">
                                    {persona.cargo}
                                </p>
                                <p className="font-[family-name:var(--font-playfair)] text-base text-brand-900 font-bold leading-tight">
                                    {persona.nombre}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-0.5 bg-accent-500" />
                        <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-brand-900 font-bold">
                            Direcciones de Área
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {directores.map((dir, idx) => (
                            <DirectorCard key={idx} director={dir} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12 bg-brand-900 text-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                        <div>
                            <Briefcase className="text-accent-400 mx-auto md:mx-0 mb-3" size={28} />
                            <p className="text-xs uppercase tracking-wider text-accent-400 font-semibold mb-1">
                                Horario de atención
                            </p>
                            <p className="text-brand-100 text-sm">{siteConfig.horario.semana}</p>
                            <p className="text-brand-100 text-sm">{siteConfig.horario.sabado}</p>
                        </div>
                        <div>
                            <Phone className="text-accent-400 mx-auto md:mx-0 mb-3" size={28} />
                            <p className="text-xs uppercase tracking-wider text-accent-400 font-semibold mb-1">
                                Teléfono
                            </p>
                            <p className="text-brand-100">{siteConfig.phone}</p>
                        </div>
                        <div>
                            <Mail className="text-accent-400 mx-auto md:mx-0 mb-3" size={28} />
                            <p className="text-xs uppercase tracking-wider text-accent-400 font-semibold mb-1">
                                Correo institucional
                            </p>
                            <a href={`mailto:${siteConfig.email}`} className="text-brand-100 hover:text-accent-400 transition">
                                {siteConfig.email}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
