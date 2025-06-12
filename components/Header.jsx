"use client";

import Image from "next/image";
import { useState } from "react";
import ModalInfo from "./ModalInfo";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-notaria-azul text-notaria-blanco px-6 py-4 flex justify-between items-center shadow-md sticky top-0 z-50">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Notaría Emilio Sarmiento Moreno - notaria en Valparaíso"
            width={450}
            height={48}
            priority
          />
        </a>

        {/* Botón hamburguesa visible solo en mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          ☰
        </button>

        {/* Menú de navegación: desktop */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium items-center">
          <a href="#servicios" className="hover:underline transition duration-300">
            Servicios
          </a>
          <a href="#ubicacion" className="hover:underline transition duration-300">
            Cómo llegar
          </a>
          <a href="#contacto" className="hover:underline transition duration-300">
            Contacto
          </a>
          <button
            onClick={() => setShowModal(true)}
            className="bg-white text-notaria-azul font-semibold px-4 py-1 rounded hover:bg-gray-100 transition duration-300"
          >
            Notarías de Turno
          </button>
        </nav>
      </header>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <div className="bg-notaria-azul text-white px-6 py-4 flex flex-col space-y-4 md:hidden">
          <a href="#servicios" onClick={() => setMenuOpen(false)} className="hover:underline">
            Servicios
          </a>
          <a href="#ubicacion" onClick={() => setMenuOpen(false)} className="hover:underline">
            Cómo llegar
          </a>
          <a href="#contacto" onClick={() => setMenuOpen(false)} className="hover:underline">
            Contacto
          </a>
          <button
            onClick={() => {
              setShowModal(true);
              setMenuOpen(false);
            }}
            className="bg-white text-notaria-azul font-semibold px-4 py-2 rounded hover:bg-gray-100"
          >
            Notarías de Turno
          </button>
        </div>
      )}

      {/* Modal */}
      <ModalInfo show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
