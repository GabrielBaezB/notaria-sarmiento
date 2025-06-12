import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'Notaría Sarmiento Moreno - Valparaíso',
  description: 'Notaría frente al terminal de buses y a pasos del Congreso Nacional.',
  keywords: 'notaría, notaria, Valparaíso, Valparaiso, documentos, escrituras, poderes, trámites notariales',
  authors: [{ name: 'Notaría Sarmiento Moreno' }],
  openGraph: {
    title: 'Notaría Sarmiento Moreno - Valparaíso',
    description: 'Notaría frente al terminal de buses y a pasos del Congreso Nacional.',
    url: 'https://www.notariasarmiento.cl',
    siteName: 'Notaría Sarmiento Moreno',
    images: [
      {
        url: 'https://www.notariasarmiento.cl/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Notaría Sarmiento Moreno',
      },
    ],
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Notaría Sarmiento Moreno - Valparaíso',
    description: 'Notaría frente al terminal de buses y a pasos del Congreso Nacional.',
    images: ['https://www.notariasarmiento.cl/og-image.webp'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.authors[0].name} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width.toString()} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height.toString()} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
        <link rel="canonical" href={metadata.openGraph.url} />
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
