import PageHeader from "@/components/PageHeader";
import { directores, cabildo, siteConfig } from "@/lib/data";
import { Briefcase, Mail, Phone } from "lucide-react";

export const metadata = {
    title: "Directorio | H. Ayuntamiento de Acajete",
    description: "Directorio de directores de área del H. Ayuntamiento de Acajete, Veracruz.",
};

type Director = {
    area: string;
    titular: string;
    nombre: string;
};

function DirectorRow({ director }: { director: Director }) {
    return (
        <div className="p-5 hover:bg-brand-50 transition">
            <p className="text-[10px] uppercase tracking-[0.2em] text-accent-600 font-semibold mb-1">
                {director.area}
            </p>
            <p className="font-[family-name:var(--font-playfair)] text-base text-brand-900 font-bold leading-tight mb-0.5">
                {director.nombre}
            </p>
            <p className="text-xs text-brand-600">{director.titular}</p>
        </div>
    );
}

export default function DirectorioPage() {
    const mitad = Math.ceil(directores.length / 2);
    const columnaIzq = directores.slice(0, mitad);
    const columnaDer = directores.slice(mitad);

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

                    <div className="bg-white rounded-sm shadow-md overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="divide-y divide-brand-100">
                                {columnaIzq.map((dir, idx) => (
                                    <DirectorRow key={`izq-${idx}`} director={dir} />
                                ))}
                            </div>
                            <div className="divide-y divide-brand-100 md:border-l border-brand-100">
                                {columnaDer.map((dir, idx) => (
                                    <DirectorRow key={`der-${idx}`} director={dir} />
                                ))}
                            </div>
                        </div>
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