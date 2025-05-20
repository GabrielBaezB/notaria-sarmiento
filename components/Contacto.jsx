// components/Contacto.jsx
'use client'

import { useState } from 'react';

export default function Contacto() {
  const emailOptions = [
    { label: 'Escrituras Publicas', value: process.env.NEXT_PUBLIC_EMAIL_ESCRITURAS },
    { label: 'Documentos Privados', value: process.env.NEXT_PUBLIC_EMAIL_PRIVADOS },
  ];

  // Estado para el email seleccionado
  const [recipient, setRecipient] = useState(emailOptions[0].value);

  return (
    <section id="contacto" className="py-20 px-6 bg-notaria-blanco">
      <div className="max-w-2xl mx-auto">
        <h3 className="text-3xl font-bold text-notaria-azul text-center mb-8">
          Contáctanos
        </h3>

        <form
          action={`https://formsubmit.co/${recipient}`}
          method="POST"
          className="space-y-6"
        >
          {/* ✅ Campos ocultos para redirección y sin captcha */}
          <input type="hidden" name="_next" value="https://notariasarmiento.cl/#contacto" />
          <input type="hidden" name="_captcha" value="false" />
          
          {/* 1) Selector de tipo */}
          <div>
            <label htmlFor="destino" className="block mb-2 text-sm font-medium text-notaria-azul">
              Enviar a
            </label>
            <select
              id="destino"
              name="destino"
              value={recipient}
              onChange={e => setRecipient(e.target.value)}
              className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-notaria-dorado"
            >
              {emailOptions.map(opt => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* 2) Campo Asunto */}
          <div>
            <label htmlFor="asunto" className="sr-only">Asunto</label>
            <input
              id="asunto"
              name="_subject"
              type="text"
              placeholder="Asunto"
              required
              className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-notaria-dorado"
            />
          </div>

          {/* 3) Datos de contacto */}
          <div>
            <label htmlFor="nombre" className="sr-only">Tu nombre</label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              placeholder="Tu nombre"
              required
              className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-notaria-dorado"
            />
          </div>
          <div>
            <label htmlFor="correo" className="sr-only">Tu correo</label>
            <input
              id="correo"
              name="correo"
              type="email"
              placeholder="Tu correo"
              required
              className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-notaria-dorado"
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
              className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-notaria-dorado"
            />
          </div>

          {/* 4) Botón */}
          <button
            type="submit"
            className="w-full bg-notaria-dorado text-notaria-blanco px-6 py-3 rounded-lg hover:bg-opacity-90 transition"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
