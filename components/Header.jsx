"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ModalInfo from "./ModalInfo";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleAnchorNavigation = (anchor) => {
    // Cerrar menú móvil si está abierto
    setMenuOpen(false);

    // Si estamos en la página principal, hacer scroll al anclaje
    if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Si estamos en otra página, navegar a la principal con el anclaje
      window.location.href = `/${anchor}`;
    }
  };

  return (
    <>
      <header className="relative bg-notaria-azul text-notaria-blanco px-6 py-4 shadow-md sticky top-0 z-[99]">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Notaría Emilio Sarmiento Moreno - notaria en Valparaíso"
              width={450}
              height={48}
              priority
              fetchPriority="high"
            />
          </Link>

          {/* Botón hamburguesa visible solo en mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Abrir menú"
          >
            ☰
          </button>

          {/* Menú de navegación: desktop */}
          <nav className="hidden md:flex space-x-6 text-sm font-medium items-center">
            <Link href="/servicios" className="hover:underline transition duration-300">
              Servicios
            </Link>
            <Link href="/indice-escrituras" className="hover:underline transition duration-300">
              Índice de Escrituras
            </Link>
            <Link href="/horarios" className="hover:underline transition duration-300">
              Horarios
            </Link>
            <Link href="/faq" className="hover:underline transition duration-300">
              FAQ
            </Link>
            <Link href="/como-llegar" className="hover:underline transition duration-300">
              Cómo llegar
            </Link>
            <Link href="/contacto" className="hover:underline transition duration-300">
              Contacto
            </Link>
            <button
              onClick={() => setShowModal(true)}
              className="bg-white text-notaria-azul font-semibold px-4 py-1 rounded hover:bg-gray-100 transition duration-300"
            >
              Notarías de Turno
            </button>
            <a
              href="https://gesnot.cl/seguimiento/clientes/login.jsp?notaria=58"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-notaria-dorado text-white font-semibold px-4 py-1 rounded hover:bg-yellow-600 transition duration-300"
            >
              Seguimiento
            </a>
          </nav>
        </div>
      </header>

      {/* Menú móvil desplegable */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-[999] md:hidden transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className={`fixed top-0 left-0 right-0 bg-notaria-azul text-white px-6 py-4 flex flex-col space-y-4 z-[1000] transform transition-transform duration-300 ${menuOpen ? 'translate-y-0' : '-translate-y-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-bold">Menú</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white hover:text-gray-300 text-2xl"
              aria-label="Cerrar menú"
            >
              ×
            </button>
          </div>
          <Link href="/servicios" onClick={() => setMenuOpen(false)} className="hover:underline py-3 border-b border-blue-600">
            Servicios
          </Link>
          <Link href="/indice-escrituras" onClick={() => setMenuOpen(false)} className="hover:underline py-3 border-b border-blue-600">
            Índice de Escrituras
          </Link>
          <Link href="/horarios" onClick={() => setMenuOpen(false)} className="hover:underline py-3 border-b border-blue-600">
            Horarios
          </Link>
          <Link href="/faq" onClick={() => setMenuOpen(false)} className="hover:underline py-3 border-b border-blue-600">
            FAQ
          </Link>
          <Link href="/como-llegar" onClick={() => setMenuOpen(false)} className="hover:underline py-3 border-b border-blue-600">
            Cómo llegar
          </Link>
          <Link href="/contacto" onClick={() => setMenuOpen(false)} className="hover:underline py-3 border-b border-blue-600">
            Contacto
          </Link>
          <button
            onClick={() => {
              setShowModal(true);
              setMenuOpen(false);
            }}
            className="bg-white text-notaria-azul font-semibold px-4 py-3 rounded hover:bg-gray-100 mt-4"
          >
            Notarías de Turno
          </button>
          <a
            href="https://gesnot.cl/seguimiento/clientes/login.jsp?notaria=58"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="bg-notaria-dorado text-white font-semibold px-4 py-3 rounded hover:bg-yellow-600 mt-2 text-center"
          >
            Seguimiento Web
          </a>
        </div>
      </div>

      {/* Modal */}
      <ModalInfo show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}