// app/page.jsx
'use client';

import dynamic from 'next/dynamic';

const Header = dynamic(() => import('../components/Header'));
const Hero = dynamic(() => import('../components/Hero'));
const ServiciosSection = dynamic(() => import('../components/ServiciosSection'));
const Ubicacion = dynamic(() => import('../components/Ubicacion'), { ssr: false });
const Contacto = dynamic(() => import('../components/Contacto'), { ssr: false });
const Footer = dynamic(() => import('../components/Footer'));

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ServiciosSection />
      <Ubicacion />
      <Contacto />
      <Footer />
    </>
  );
}
