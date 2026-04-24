import PageHeader from "@/components/PageHeader";
import { siteConfig } from "@/lib/data";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata = {
    title: "Contacto | H. Ayuntamiento de Acajete",
    description: "Contacta al H. Ayuntamiento de Acajete, Veracruz. Estamos para servirte.",
};

export default function ContactoPage() {
    return (
        <>
            <PageHeader
                title="Contáctanos"
                subtitle="Estamos para servirte"
                breadcrumbs={[{ label: "Contacto" }]}
            />

            <SeccionInfoContacto />
            <SeccionFormulario />
            <SeccionUbicacion />
        </>
    );
}

function SeccionInfoContacto() {
    const items = [
        {
            icon: MapPin,
            label: "Dirección",
            valor: siteConfig.address,
            esCorreo: false,
        },
        {
            icon: Phone,
            label: "Teléfono",
            valor: siteConfig.phone,
            esCorreo: false,
        },
        {
            icon: Mail,
            label: "Correo",
            valor: siteConfig.email,
            esCorreo: true,
        },
        {
            icon: Clock,
            label: "Horario",
            valor: `${siteConfig.horario.semana} · ${siteConfig.horario.sabado}`,
            esCorreo: false,
        },
    ];

    return (
        <section className="py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {items.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div key={idx} className="bg-white p-6 rounded-sm shadow-sm hover:shadow-md transition border-t-4 border-accent-500 text-center">
                                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-brand-50 flex items-center justify-center">
                                    <Icon size={24} className="text-accent-600" />
                                </div>
                                <p className="text-[10px] uppercase tracking-[0.2em] text-accent-600 font-semibold mb-2">
                                    {item.label}
                                </p>
                                {item.esCorreo ? (
                                    <a href={`mailto:${item.valor}`} className="text-xs text-brand-800 leading-relaxed break-all hover:text-accent-600 transition">
                                        {item.valor}
                                    </a>
                                ) : (
                                    <p className="text-sm text-brand-800 leading-relaxed">{item.valor}</p>
                                )}                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function SeccionFormulario() {
    return (
        <section className="py-12 pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-sm shadow-lg overflow-hidden">
                    <div className="bg-brand-900 text-white p-8 md:p-10">
                        <p className="text-xs uppercase tracking-[0.3em] text-accent-400 font-semibold mb-3">
                            Escríbenos
                        </p>
                        <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold mb-3">
                            Envíanos un mensaje
                        </h2>
                        <p className="text-brand-100">
                            ¿Tienes alguna duda, propuesta o solicitud? Llena el formulario y nos pondremos en contacto contigo.
                        </p>
                    </div>

                    <div className="p-8 md:p-10">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
}

function SeccionUbicacion() {
    return (
        <section className="py-16 bg-brand-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-accent-600 font-semibold mb-3">
                            Visítanos
                        </p>
                        <h3 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-brand-900 font-bold mb-5">
                            Palacio Municipal de Acajete
                        </h3>
                        <p className="text-brand-700 leading-relaxed mb-6">
                            Estamos ubicados en el corazón de Acajete. Te esperamos de lunes a viernes para atender tus trámites, consultas y propuestas.
                        </p>
                        <div className="flex items-start gap-3">
                            <MapPin className="text-accent-600 flex-shrink-0 mt-1" size={20} />
                            <p className="text-brand-800">
                                Palacio Municipal, Centro
                                <br />
                                Acajete, Veracruz, México
                            </p>
                        </div>
                    </div>

                    <div className="relative aspect-video rounded-sm overflow-hidden shadow-lg flex items-center justify-center bg-gradient-to-br from-brand-200 to-mist-200">
                        <div className="text-center p-8">
                            <MapPin className="mx-auto text-brand-700 mb-3" size={40} />
                            <p className="text-sm text-brand-800 font-semibold">
                                📷 Mapa de Google Maps (opcional)
                            </p>
                            <p className="text-xs text-brand-700 mt-1">
                                Aquí se puede embeber un mapa o foto del Palacio
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}