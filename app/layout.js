// app/layout.js
import './globals.css';
import { siteConfig, generateStructuredData } from '../utils/seo';
import { GTM_ID } from '../utils/analytics';
import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../components/Header';
import GoogleTagManager from '../components/GoogleTagManager';
import WhatsAppButtonWrapper from '../components/WhatsAppButtonWrapper';
import KioskInactivityTimer from '../components/KioskInactivityTimer';
import AfcModal from '../components/AfcModal';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1B2A41',
};

export const metadata = {
  metadataBase: new URL('https://notariasarmiento.cl'),
  title: 'Notaría Sarmiento Moreno - Chacabuco Valparaíso',
  description:
    'Notaría Sarmiento Moreno en calle Chacabuco 2845, Valparaíso. Servicios notariales confiables frente al terminal de buses y a pasos del Congreso Nacional. Escrituras, poderes, autorizaciones, contratos y más con atención personalizada.',
  keywords:
    'notaría, notaria, Valparaíso, chacabuco, notaria chacabuco, notaria valparaiso, documentos, escrituras, poderes, trámites notariales, terminal de buses, Congreso Nacional',
  authors: [{ name: 'Notaría Sarmiento Moreno' }],
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.svg',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Notaría Sarmiento',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Notaría Sarmiento Moreno - Chacabuco Valparaíso',
    description:
      'Ubicada en calle Chacabuco, Valparaíso. Frente al terminal de buses y cerca del Congreso Nacional. Servicios notariales con atención profesional, rápida y segura.',
    url: siteConfig.url,
    siteName: siteConfig.siteName,
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
    locale: siteConfig.locale,
    type: siteConfig.type,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Notaría Sarmiento Moreno - Chacabuco, Valparaíso',
    description:
      'Notaría Sarmiento Moreno en Valparaíso. Servicios notariales profesionales frente al terminal de buses y a pasos del Congreso Nacional. Escrituras, poderes y trámites legales.',
    images: [`${siteConfig.url}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    other: {
      'msvalidate.01': '455EAF44693F00D2C7F99F7D02FE7416',
    },
  },
};

const structuredData = generateStructuredData('Notary', {
  serviceType: [
    'Escrituras públicas',
    'Poderes simples',
    'Autorizaciones de viaje',
    'Compraventa de inmuebles',
    'Contratos de arrendamiento',
    'Transferencias de vehículos',
  ],
  areaServed: {
    '@type': 'City',
    name: 'Valparaíso',
  },
});

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="font-sans">
        <KioskInactivityTimer />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <ErrorBoundary>
          <Header />
          <AfcModal />
          {children}
          <WhatsAppButtonWrapper />
        </ErrorBoundary>

        {/* Structured Data - Deferred */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* Google Tag Manager - Deferred */}
        <GoogleTagManager />

        {/* Service Worker Registration - Deferred */}
        <script
          defer
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      // Service Worker registrado exitosamente
                    })
                    .catch(function(registrationError) {
                      // Error en el registro del Service Worker
                    });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
