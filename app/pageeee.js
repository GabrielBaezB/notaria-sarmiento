"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  HiOutlineDocumentText, HiOutlineClipboardList, HiOutlineCheckCircle, 
  HiOutlineLocationMarker, HiOutlineBriefcase, HiOutlineKey, 
  HiOutlineUserGroup, HiOutlineClipboardCheck, HiOutlineGlobeAlt, 
  HiOutlineLibrary, HiOutlinePhotograph, HiX 
} from 'react-icons/hi';

// Data extracted to separate constant for better maintainability
const SERVICIOS = [
  {
    title: 'Transferencias de Vehículos',
    icon: HiOutlineKey,
    requisitos: `-Cédula de identidad vigente.\nCertificado de Anotaciones vigente (al día).\n-Certificado de Multas (al día).\n-Permiso de Circulación vigente.\n-Poder si actúa un tercero.\n-RUT y Escritura si son personas jurídicas.`,
  },
  {
    title: 'Contrato de Arrendamiento',
    icon: HiOutlineClipboardList,
    requisitos: `-Comparecencia personal arrendador y arrendatario.\n-Cédula de identidad vigente.\n-Certificado de Dominio Vigente.`,
  },
  {
    title: 'Compraventa Inmuebles',
    icon: HiOutlineDocumentText,
    requisitos: `-Debe otorgarse por escritura pública.\n-Asesoría de abogado.\n-Inscripción en el Conservador de Bienes Raíces.`,
  },
  {
    title: 'Salvoconducto (propietario)',
    icon: HiOutlineClipboardCheck,
    requisitos: `-Solicitar en ciudad de origen.\n-Comprobante de pago o avalúo a nombre del propietario.\n-Nombre y patente del chofer.`,
  },
  {
    title: 'Salvoconducto (arrendatario)',
    icon: HiOutlineClipboardCheck,
    requisitos: `-Autorización del dueño.\n-Comprobantes de luz y agua al día.\n-Pago última renta.\n-Nombre y patente del chofer.`,
  },
  {
    title: 'Finiquito de Trabajo',
    icon: HiOutlineBriefcase,
    requisitos: `-Comparecencia personal.\n-3 copias del finiquito.\n-Cotizaciones previsionales al día.\n-No estar en registro de deudores de pensión.\n-3 últimas liquidaciones si corresponde.`,
  },
  {
    title: 'Redacción de Testamento',
    icon: HiOutlineLibrary,
    requisitos: `-Solemne abierto: ante notario y testigos.\n-Solemne cerrado: se entrega sellado.`,
  },
  {
    title: 'Permiso para salir del país (con uno de los padres)',
    icon: HiOutlineUserGroup,
    requisitos: `-Pasaporte o Cédula vigente.\n-Certificado de nacimiento o libreta + 3 copias.\n-Autorización del padre que no viaja o del Tribunal + 3 copias.`,
  },
  {
    title: 'Permiso para salir del país (sin padres)',
    icon: HiOutlineUserGroup,
    requisitos: `-Pasaporte o cédula vigente.\n-Certificado de nacimiento + 3 copias.\n-Defunción de ambos padres si aplica + 3 copias.\n-Autorización notarial de ambos padres + 3 copias.`,
  },
  {
    title: 'Constitución de Sociedad',
    icon: HiOutlineGlobeAlt,
    requisitos: `-Minuta de abogado.\n-Escritura pública.\n-Inscripción en Registro de Comercio.\n-Publicación en Diario Oficial.\n-O Ley 20.659 para modalidad simplificada.`,
  },
  {
    title: 'Legalización de Fotocopias',
    icon: HiOutlinePhotograph,
    requisitos: `-Exhibir el original a legalizar.`,
  },
];

// Breaking down into reusable components
const Header = () => (
  <header className="bg-notaria-azul text-notaria-blanco px-6 py-4 flex justify-between items-center shadow-md sticky top-0 z-50">
    <h1 className="text-2xl font-bold tracking-tight">Notaría Sarmiento Moreno</h1>
    <nav className="hidden md:flex space-x-6 text-sm font-medium items-center">
      <a href="#servicios" className="hover:underline transition duration-300">Servicios</a>
      <a href="#ubicacion" className="hover:underline transition duration-300">Cómo llegar</a>
      <a href="#contacto" className="hover:underline transition duration-300">Contacto</a>
    </nav>
  </header>
);

const Hero = () => (
  <section className="relative w-full h-[400px] md:h-[500px]">
    <Image
      src="/carrusel1.jpg"
      alt="Notaría Sarmiento"
      fill
      sizes="100vw"
      className="object-cover"
      priority
    />
    <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4">
      <div className="text-center text-notaria-blanco max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Notaría Sarmiento Moreno
        </h2>
        <p className="mt-4 text-lg md:text-xl">
          Frente al terminal de buses y a pasos del Congreso Nacional. Atención profesional, rápida y segura en Valparaíso.
        </p>
      </div>
    </div>
  </section>
);

const ServicioCard = ({ servicio, isActive, onClick, isDesktop }) => {
  const { title, icon: Icon, requisitos } = servicio;
  
  return (
    <motion.div
      className="p-6 rounded-xl border shadow-sm bg-notaria-gris flex flex-col items-center relative hover:shadow-md transition cursor-pointer"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
    >
      <Icon className="text-notaria-dorado text-4xl mb-4" aria-hidden="true" />
      <h4 className="text-xl font-semibold text-notaria-azul text-center">{title}</h4>
      {(isActive || (isDesktop)) && (
        <motion.div
          className={`mt-4 w-full text-left text-sm whitespace-pre-line bg-notaria-blanco rounded-xl p-4 ${isActive ? 'block' : 'hidden md:block'} shadow-inner relative`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <button
            className="absolute top-2 right-2 text-gray-400 hover:text-red-600 md:hidden"
            onClick={(e) => {
              e.stopPropagation();
              onClick(e, true);
            }}
            aria-label="Cerrar requisitos"
          >
            <HiX className="w-5 h-5" />
          </button>
          <h5 className="text-notaria-azul font-semibold mb-2">Requisitos:</h5>
          {requisitos}
        </motion.div>
      )}
    </motion.div>
  );
};

const Servicios = ({ isClient, isDesktop }) => {
  const [servicioActivo, setServicioActivo] = useState(null);

  const handleServicioClick = (index, forceClose = false) => {
    if (forceClose) {
      setServicioActivo(null);
      return;
    }
    setServicioActivo(servicioActivo === index ? null : index);
  };

  return (
    <section id="servicios" className="py-20 px-6 bg-notaria-gris">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-notaria-azul mb-12">Servicios Notariales</h3>
        {isClient && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICIOS.map((servicio, index) => (
              <ServicioCard
                key={index}
                servicio={servicio}
                isActive={servicioActivo === index}
                onClick={(e, forceClose) => handleServicioClick(index, forceClose)}
                isDesktop={isDesktop && servicioActivo === null}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const Ubicacion = () => (
  <section id="ubicacion" className="py-20 px-6 bg-gray-100">
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

const Contacto = () => (
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

const Footer = () => (
  <footer className="bg-notaria-azul text-notaria-blanco text-center py-8">
    <div className="space-y-2 text-sm">
      <p>© {new Date().getFullYear()} Notaría Sarmiento Moreno - Valparaíso</p>
      <p>Tel: +56 32 123 4567 | Email: contacto@notariasarmiento.cl</p>
    </div>
  </footer>
);

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Servicios isClient={isClient} isDesktop={isDesktop} />
      <Ubicacion />
      <Contacto />
      <Footer />
    </>
  );
}