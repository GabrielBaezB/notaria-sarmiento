'use client';

import { useState } from 'react';

export default function Contacto() {
  const emailOptions = [
    { label: 'Escrituras Públicas', value: process.env.NEXT_PUBLIC_EMAIL_ESCRITURAS },
    { label: 'Documentos Privados', value: process.env.NEXT_PUBLIC_EMAIL_PRIVADOS },
  ];

  const [recipient, setRecipient] = useState(emailOptions[0].value);

  return (
    <section
      id="contacto"
      className="bg-notaria-blanco py-16 px-4 sm:px-6 md:px-8 min-h-[800px] max-w-6xl mx-auto"
      style={{ contain: 'layout' }}
    >
      <div className="max-w-3xl mx-auto">
        <h3 className="text-3xl sm:text-4xl font-bold text-notaria-azul text-center mb-10">
          Contáctanos
        </h3>

        <form
          action={`https://formsubmit.co/${recipient}`}
          method="POST"
          className="space-y-6"
        >
          <input type="hidden" name="_next" value="https://notariasarmiento.cl/#contacto" />
          <input type="hidden" name="_captcha" value="false" />

          {/* Destino */}
          <div>
            <label
              htmlFor="destino"
              className="block text-sm font-medium text-notaria-azul mb-2"
            >
              Enviar a
            </label>
            <select
              id="destino"
              name="destino"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-notaria-dorado transition-all duration-200"
            >
              {emailOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Asunto */}
          <div>
            <label htmlFor="asunto" className="sr-only">Asunto</label>
            <input
              id="asunto"
              name="_subject"
              type="text"
              placeholder="Asunto"
              required
              className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-notaria-dorado transition-all duration-200"
            />
          </div>

          {/* Nombre */}
          <div>
            <label htmlFor="nombre" className="sr-only">Tu nombre</label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              placeholder="Tu nombre"
              required
              className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-notaria-dorado transition-all duration-200"
            />
          </div>

          {/* Correo */}
          <div>
            <label htmlFor="correo" className="sr-only">Tu correo</label>
            <input
              id="correo"
              name="correo"
              type="email"
              placeholder="Tu correo"
              required
              className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-notaria-dorado transition-all duration-200"
            />
          </div>

          {/* Mensaje */}
          <div>
            <label htmlFor="mensaje" className="sr-only">Tu mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              placeholder="Tu mensaje"
              rows={5}
              required
              className="w-full min-h-[140px] px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-notaria-dorado transition-all duration-200 resize-vertical"
            />
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="w-full bg-notaria-dorado text-white font-medium py-3 rounded-lg hover:bg-opacity-90 transition-all duration-200"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
