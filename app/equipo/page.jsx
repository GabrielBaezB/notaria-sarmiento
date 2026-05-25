import Link from 'next/link';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Nómina de suplentes - Trabajadores remuneracion - Notaría Sarmiento Moreno',
  description: 'Conoce a nuestro equipo de trabajo y notarios suplentes en Notaría Sarmiento Moreno, Valparaíso.',
};

export default function EquipoPage() {
  return (
    <main className="min-h-screen bg-notaria-gris flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm">
          <ol className="flex space-x-2">
            <li><Link href="/" className="text-blue-600 hover:underline">Inicio</Link></li>
            <li>/</li>
            <li className="text-gray-600">Nómina de suplentes - Trabajadores remuneracion</li>
          </ol>
        </nav>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12 mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-notaria-azul mb-10 text-center">
            Nómina de suplentes - Trabajadores remuneracion
          </h1>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-notaria-azul mb-6 border-b pb-2">
              Nómina Notarios Suplentes
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
              <li>Salvador Claudio Espinoza Silva.</li>
              <li>Alfonso Gastón Del Fierro Elgart.</li>
              <li>Mateo Alonso Godoy Fourque.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-notaria-azul mb-6 border-b pb-2">
              Nómina de Trabajadores
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
              <li>DORIS DE LOURDES VILLALOBOS AROS.</li>
              <li>INGRID PAMELA ORTIZ ORTIZ.</li>
              <li>ANA MARÍA RIVERA ASTETE.</li>
              <li>ARTURO ALFREDO REPETTO SAIEG.</li>
              <li>SHARIM MANDELEIN SAA SOBRADO.</li>
              <li>INES ANGELICA SAAVEDRA DURAN.</li>
              <li>WENDY ADAMAR IBARRA MEDINA.</li>
              <li>IRENE PRISCILLA DEL CARMEN EMBRY MCGRATH.</li>
              <li>DANIELA GIOVANNA FREDES SAN JUAN.</li>
            </ul>

            <div className="mt-8 p-6 bg-red-50 border border-red-200 rounded-lg text-red-700 font-bold flex flex-col sm:flex-row justify-between items-center text-lg gap-2 shadow-sm">
              <span>Total de remuneraciones:</span>
              <span className="text-2xl font-extrabold text-red-600">$6.850.927 pesos</span>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
