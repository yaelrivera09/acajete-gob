export default function HoldingPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-6 relative overflow-hidden">

      {/* Fondo decorativo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-emerald-900/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-emerald-800/15 blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 max-w-xl w-full text-center space-y-10">

        {/* Badge de estado */}
        <div className="inline-flex items-center gap-2 bg-emerald-950/80 border border-emerald-800/60 rounded-full px-4 py-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-400 text-xs font-semibold uppercase tracking-widest">
            Proyecto completado
          </span>
        </div>

        {/* Nombre */}
        <div className="space-y-2">
          <p className="text-white/40 text-sm uppercase tracking-[0.4em] font-medium">
            Desarrollado por
          </p>
          <h1 className="text-white font-bold leading-tight" style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)" }}>
            Jonathan Yael<br />
            <span className="text-emerald-400">Rivera Becerril</span>
          </h1>
          <p className="text-white/50 text-sm tracking-wider">
            Desarrollo Web · Diseño Digital · Mantenimiento
          </p>
        </div>

        {/* Separador */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-white/20 text-xs uppercase tracking-widest">En espera de</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Mensaje */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 space-y-3 backdrop-blur-sm">
          <p className="text-white/90 text-lg font-medium leading-relaxed">
            Este sitio web está <span className="text-emerald-400 font-semibold">listo para publicarse</span>.
          </p>
          <p className="text-white/50 text-sm leading-relaxed">
            El proyecto ha sido desarrollado y entregado al cliente. Su activación,
            dominio oficial y plan de mantenimiento continuo están pendientes de contratación.
          </p>
        </div>

        {/* Contacto */}
        <div className="space-y-3">
          <p className="text-white/30 text-xs uppercase tracking-widest">¿Listo para publicar tu sitio?</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:5667530599"
              className="group flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 py-3 rounded-full transition-all duration-200 text-sm w-full sm:w-auto justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              566 753 0599
            </a>
            <a
              href="mailto:yaelrivera.0908@gmail.com"
              className="flex items-center gap-2.5 bg-white/[0.06] hover:bg-white/[0.10] border border-white/10 text-white/80 hover:text-white px-6 py-3 rounded-full transition-all duration-200 text-sm w-full sm:w-auto justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              yaelrivera.0908@gmail.com
            </a>
          </div>
        </div>

        {/* Footer */}
        <p className="text-white/15 text-xs">
          © {new Date().getFullYear()} Jonathan Yael Rivera Becerril · Todos los derechos reservados
        </p>

      </div>
    </main>
  );
}
