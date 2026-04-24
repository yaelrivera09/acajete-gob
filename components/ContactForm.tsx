"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Construye el mensaje formateado para WhatsApp
    const textoWhatsApp = `*Nuevo mensaje desde el sitio web del H. Ayuntamiento de Acajete*%0A%0A*Nombre:* ${nombre}%0A*Correo:* ${email}%0A*Teléfono:* ${telefono || "No proporcionado"}%0A*Asunto:* ${asunto}%0A%0A*Mensaje:*%0A${mensaje}`;

    // Genera el enlace de WhatsApp con el número del ayuntamiento (formato internacional con +52 para México)
    const numeroWhatsApp = `52${siteConfig.whatsapp}`;
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${textoWhatsApp}`;

    // Abre WhatsApp en una nueva pestaña
    window.open(urlWhatsApp, "_blank");

    setEnviado(true);
    setTimeout(() => {
      setNombre("");
      setEmail("");
      setTelefono("");
      setAsunto("");
      setMensaje("");
      setEnviado(false);
    }, 4500);
  };

  if (enviado) {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-100 flex items-center justify-center">
          <CheckCircle2 className="text-brand-700" size={32} />
        </div>
        <h3 className="text-2xl text-brand-900 font-bold mb-2">
          ¡Mensaje listo para enviar!
        </h3>
        <p className="text-brand-700">
          Se abrió WhatsApp con tu mensaje. Solo presiona enviar para que llegue al H. Ayuntamiento.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <CampoInput label="Nombre completo" value={nombre} onChange={setNombre} required placeholder="Tu nombre" />
        <CampoInput label="Correo electrónico" type="email" value={email} onChange={setEmail} required placeholder="correo@ejemplo.com" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <CampoInput label="Teléfono" type="tel" value={telefono} onChange={setTelefono} placeholder="(000) 000-0000" />
        <CampoInput label="Asunto" value={asunto} onChange={setAsunto} required placeholder="¿En qué podemos ayudarte?" />
      </div>

      <div>
        <label className="block text-[10px] uppercase tracking-[0.2em] text-brand-700 font-semibold mb-2">
          Mensaje *
        </label>
        <textarea
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          required
          rows={5}
          placeholder="Escribe tu mensaje aquí..."
          className="w-full px-4 py-3 border border-brand-200 rounded-sm bg-white text-brand-900 placeholder:text-brand-400 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition resize-none"
        />
      </div>

      <p className="text-xs text-brand-600 italic">
        Al enviar este formulario aceptas nuestro{" "}
        <a href="/aviso-privacidad" className="text-accent-600 hover:underline font-semibold">
          Aviso de Privacidad
        </a>
        . Tu mensaje se enviará directo a nuestro WhatsApp institucional.
      </p>

      <button
        type="submit"
        className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-3.5 rounded-sm font-semibold text-sm uppercase tracking-wider transition hover:gap-3"
      >
        Enviar por WhatsApp
        <Send size={16} />
      </button>
    </form>
  );
}

function CampoInput({
  label,
  type = "text",
  value,
  onChange,
  required,
  placeholder,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-[10px] uppercase tracking-[0.2em] text-brand-700 font-semibold mb-2">
        {label} {required && "*"}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-brand-200 rounded-sm bg-white text-brand-900 placeholder:text-brand-400 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition"
      />
    </div>
  );
}