// components/Contacto.jsx
export default function Contacto() {
  return (
    <section id="contacto" className="py-20 px-6 bg-notaria-blanco">
      <div className="max-w-2xl mx-auto">
        <h3 className="text-3xl font-bold text-notaria-azul text-center mb-8">Contáctanos</h3>
        <form
          action="https://formsubmit.co/tu-correo@notariasarmiento.cl"
          method="POST"
          className="space-y-6"
        >
          <div>
            <label htmlFor="nombre" className="sr-only">Tu nombre</label>
            <input 
              id="nombre"
              type="text" 
              name="nombre" 
              placeholder="Tu nombre" 
              required 
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-notaria-dorado" 
            />
          </div>
          <div>
            <label htmlFor="correo" className="sr-only">Tu correo</label>
            <input 
              id="correo"
              type="email" 
              name="correo" 
              placeholder="Tu correo" 
              required 
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-notaria-dorado" 
            />
          </div>
          <div>
            <label htmlFor="mensaje" className="sr-only">Tu mensaje</label>
            <textarea 
              id="mensaje"
              name="mensaje" 
              rows="5" 
              placeholder="Tu mensaje" 
              required 
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-notaria-dorado"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="bg-notaria-dorado text-notaria-blanco px-6 py-3 rounded-lg hover:bg-notaria-dorado transition w-full text-center"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}