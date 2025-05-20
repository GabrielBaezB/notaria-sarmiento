// app/page.jsx
import Header from '../components/Header';
import Hero from '../components/Hero';
import ServiciosSection from '../components/ServiciosSection';
import Ubicacion from '../components/Ubicacion';
import Contacto from '../components/Contacto';
import Footer from '../components/Footer';

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