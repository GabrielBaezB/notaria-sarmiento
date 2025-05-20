// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-notaria-azul text-notaria-blanco text-center py-8">
      <div className="space-y-2 text-sm">
        <p>© {new Date().getFullYear()} Notaría Sarmiento Moreno - Valparaíso</p>
        <p>Tel: +56 32 123 4567 | Email: contacto@notariasarmiento.cl</p>
      </div>
    </footer>
  );
}