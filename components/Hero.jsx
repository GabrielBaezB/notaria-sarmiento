//components/Hero.jsx

export default function Hero() {
  return (
    <section className="relative w-full bg-white">
      {/* Encabezado principal mantenido para SEO y accesibilidad sin ocupar espacio visual */}
      <div className="sr-only">
        <h1>
          Notaría Sarmiento Moreno - Servicios Notariales en Valparaíso
        </h1>
        <p>
          Frente al terminal de buses y a pasos del Congreso Nacional. Atención profesional, rápida y segura en Valparaíso.
        </p>
      </div>

      {/* Trámites en línea - Documenta.cl */}
      <iframe
        src="https://tramites.documenta.cl/embed/entidad/1846a4c2-c73c-11f1-8277-aa33d2a2a54e"
        title="Trámites en línea"
        width="100%"
        height="760"
        loading="lazy"
        style={{ border: 0, width: '100%', minHeight: '760px' }}
      />
    </section>
  );
}
