// components/Header.jsx
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-notaria-azul text-notaria-blanco px-6 py-4 flex justify-between items-center shadow-md sticky top-0 z-50">
      {/* Logo SVG */}
      <a href="/" className="flex items-center">
        <Image
          src="/logo.svg"
          alt="Notaría Emilio Sarmiento Moreno"
          width={450}
          height={48}
          priority
        />
      </a>

      {/* Navegación */}
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
      </nav>
    </header>
  );
}
