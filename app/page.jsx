import dynamic from 'next/dynamic';
import Hero from '../components/Hero';

// Lazy load de componentes no críticos para mejorar LCP
const SeguimientoBanner = dynamic(() => import('../components/SeguimientoBanner'), {
  loading: () => <div className="min-h-[100px]" />,
});
const NotariaExpressSection = dynamic(() => import('../components/NotariaExpressSection'), {
  loading: () => <div className="min-h-[200px]" />,
});
const ServiciosSection = dynamic(() => import('../components/ServiciosSection'), {
  loading: () => <div className="min-h-[200px]" />,
});
const Ubicacion = dynamic(() => import('../components/Ubicacion'), {
  loading: () => <div className="min-h-[200px]" />,
});
const Contacto = dynamic(() => import('../components/Contacto'), {
  loading: () => <div className="min-h-[200px]" />,
});
const Footer = dynamic(() => import('../components/Footer'), {
  loading: () => null,
});

export const metadata = {
  title: 'Notaría Sarmiento Moreno - Servicios Notariales en Valparaíso',
  description: 'Notaría Sarmiento Moreno ubicada en calle Chacabuco, Valparaíso. Servicios notariales profesionales frente al terminal de buses y a pasos del Congreso Nacional. Escrituras, poderes, autorizaciones y más.',
  keywords: 'notaría, notaria, Valparaíso, chacabuco, servicios notariales, escrituras, poderes, autorizaciones, terminal de buses, Congreso Nacional',
  openGraph: {
    title: 'Notaría Sarmiento Moreno - Servicios Notariales en Valparaíso',
    description: 'Notaría Sarmiento Moreno en calle Chacabuco, Valparaíso. Servicios notariales profesionales con atención personalizada. Ubicada frente al terminal de buses.',
    images: ['/og-image.svg'],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <SeguimientoBanner />
      <NotariaExpressSection />
      <ServiciosSection />
      <Ubicacion />
      <Contacto />
      <Footer />
    </main>
  );
}
