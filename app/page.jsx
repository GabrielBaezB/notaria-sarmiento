'use client';

import Header from '../components/Header';
import Hero from '../components/Hero';
import ServiciosSection from '../components/ServiciosSection';
import dynamic from 'next/dynamic';
import Contacto from '../components/Contacto';
import Footer from '../components/Footer';

// Solo este se deja con SSR desactivado si usa Google Maps u objetos que dependen del `window`
const Ubicacion = dynamic(() => import('../components/Ubicacion'), { ssr: false });

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
