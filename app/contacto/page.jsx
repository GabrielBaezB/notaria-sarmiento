import ContactoClient from '../../components/ContactoClient';

export const metadata = {
  title: 'Contacto - Notaría Sarmiento Moreno | Valparaíso',
  description: 'Contacta con la Notaría Sarmiento Moreno en Valparaíso. Teléfono: +56 32 2548174. Ubicados en Chacabuco 2845, frente al terminal de buses.',
      keywords: 'contacto notaría, notaría valparaíso teléfono, notaría sarmiento moreno contacto, chacabuco 2845',
  openGraph: {
    title: 'Contacto - Notaría Sarmiento Moreno',
    description: 'Contacta con la Notaría Sarmiento Moreno en Valparaíso',
    type: 'website',
  },
};

export default function ContactoPage() {
  return <ContactoClient />;
} 