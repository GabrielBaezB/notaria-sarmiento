// components/Ubicacion.jsx
export default function Ubicacion() {
  return (
    <section id="ubicacion" className="py-20 px-6 bg-notaria-gris">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2">
          <h3 className="text-3xl font-bold text-notaria-azul mb-6 text-center md:text-left">¿Dónde estamos?</h3>
          <div className="rounded-xl overflow-hidden shadow-lg border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.3902693360974!2d-71.60885982432606!3d-33.0461907735523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689e1b5f0deb183%3A0x272eb3215cbfa249!2sNotar%C3%ADa%20Emilio%20Sarmiento%20Moreno!5e0!3m2!1ses-419!2scl!4v1747541376862!5m2!1ses-419!2scl"
              width="100%" 
              height="400" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Ubicación de la Notaría"
              aria-label="Mapa de ubicación de la Notaría Sarmiento Moreno"
            ></iframe>
          </div>
        </div>
        <div className="bg-notaria-blanco p-6 rounded-xl shadow-md border text-center md:text-left h-fit self-center">
          <h4 className="text-xl font-bold text-notaria-azul mb-2">Horario de Atención</h4>
          <p className="text-gray-700">Lunes a Viernes</p>
          <p className="text-gray-700">09:00 a 13:30 hrs</p>
          <p className="text-gray-700">14:30 a 16:30 hrs</p>
          <p className="mt-2 text-sm text-gray-500">(Colación de 13:30 a 14:30)</p>
        </div>
      </div>
    </section>
  );
}