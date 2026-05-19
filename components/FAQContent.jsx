'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function FAQContent() {
  const [isClient, setIsClient] = useState(false);
  const [openItems, setOpenItems] = useState(new Set());

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  if (!isClient) {
    return null;
  }

  const faqs = [
    {
      pregunta: "¿Qué documentos necesito para un poder simple?",
      respuesta: "Para un poder simple necesitas tu cédula de identidad vigente, los datos completos de la persona autorizada y el detalle específico del trámite que se va a realizar."
    },
    {
      pregunta: "¿Cuánto tiempo toma realizar una autorización de viaje para menores?",
      respuesta: "La autorización de viaje para menores se realiza en aproximadamente 15-20 minutos, siempre que tengas todos los documentos necesarios."
    },
    {
      pregunta: "¿Ambos padres deben estar presentes para la autorización de menores?",
      respuesta: "Sí, ambos padres deben presentarse personalmente en la notaría. En caso de imposibilidad de uno de ellos, se puede realizar mediante poder notarial."
    },
    {
      pregunta: "¿Qué documentos necesito para vender una propiedad?",
      respuesta: "Para vender una propiedad necesitas: cédulas de identidad de ambas partes, certificado de dominio vigente, certificado de avalúo fiscal, certificados de no deuda de contribuciones y agua potable."
    },
    {
      pregunta: "¿Atienden sin cita previa?",
      respuesta: "Sí, atendemos sin cita previa en horario de atención. Sin embargo, para trámites complejos recomendamos llamar con anticipación."
    },
    {
      pregunta: "¿Cuáles son los horarios de atención?",
      respuesta: "Nuestros horarios son: Lunes a Jueves de 09:00 a 14:00 y 15:00 a 17:30, Viernes de 09:00 a 14:00 y 15:00 a 16:30. Sábados y domingos permanecemos cerrados."
    },
    {
      pregunta: "¿Dónde están ubicados?",
                      respuesta: "Estamos ubicados en Chacabuco 2845, Valparaíso, frente al terminal de buses y a pasos del Congreso Nacional."
    },
    {
      pregunta: "¿Qué métodos de pago aceptan?",
      respuesta: "Aceptamos efectivo, transferencias bancarias, tarjetas de crédito y débito. Para mayor información sobre precios, consulta directamente en la notaría."
    }
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm">
        <ol className="flex space-x-2">
          <li><Link href="/" className="text-blue-600 hover:underline">Inicio</Link></li>
          <li>/</li>
          <li className="text-gray-600">Preguntas Frecuentes</li>
        </ol>
      </nav>

      <article>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-notaria-azul">
          Preguntas Frecuentes
        </h1>
        
        <section className="mb-8">
          <p className="text-lg mb-4">
            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios notariales. 
            Si no encuentras la respuesta que buscas, no dudes en contactarnos.
          </p>
        </section>

        <section className="mb-12">
          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4 border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-notaria-dorado rounded-lg"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-notaria-azul">
                      {faq.pregunta}
                    </h3>
                    <span className={`text-2xl text-notaria-dorado transition-transform duration-200 ${openItems.has(index) ? 'rotate-45' : ''}`}>
                      +
                    </span>
                  </div>
                </button>
                {openItems.has(index) && (
                  <div className="px-6 pb-4 bg-gray-50 rounded-b-lg">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.respuesta}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="text-center bg-notaria-azul text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            ¿No encontraste tu respuesta?
          </h2>
          <p className="mb-6">
            Llámanos directamente y te ayudamos con cualquier consulta
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:+56512595840" 
              className="bg-notaria-dorado text-notaria-azul font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition"
            >
              📞 Llamar: +56 51 2595840
            </a>
            <a 
              href="tel:+56322548174" 
              className="bg-notaria-dorado text-notaria-azul font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition"
            >
              📞 Llamar: +56 32 2548174
            </a>
          </div>
        </section>
      </article>
    </main>
  );
} 