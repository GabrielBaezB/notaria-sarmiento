//app/layout.js
import './globals.css';
import { siteConfig, generateStructuredData } from '../utils/seo';
import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../components/Header';
import GoogleTagManager from '../components/GoogleTagManager';
import WhatsAppButtonWrapper from '../components/WhatsAppButtonWrapper';
import KioskInactivityTimer from '../components/KioskInactivityTimer';

export const metadata = {
  metadataBase: new URL('https://notariasarmiento.cl'),
  title: 'Notaría Sarmiento Moreno - Chacabuco Valparaíso',
  description: 'Notaría Sarmiento Moreno en calle Chacabuco 2845, Valparaíso. Servicios notariales confiables frente al terminal de buses y a pasos del Congreso Nacional. Escrituras, poderes, autorizaciones, contratos y más con atención personalizada.',
  keywords: 'notaría, notaria, Valparaíso, chacabuco, notaria chacabuco, notaria valparaiso, documentos, escrituras, poderes, trámites notariales, terminal de buses, Congreso Nacional',
  authors: [{ name: 'Notaría Sarmiento Moreno' }],
  openGraph: {
    title: 'Notaría Sarmiento Moreno - Chacabuco Valparaíso',
    description: 'Ubicada en calle Chacabuco, Valparaíso. Frente al terminal de buses y cerca del Congreso Nacional. Servicios notariales con atención profesional, rápida y segura.',
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
    description: 'Notaría Sarmiento Moreno en Valparaíso. Servicios notariales profesionales frente al terminal de buses y a pasos del Congreso Nacional. Escrituras, poderes y trámites legales.',
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
    bing: '455EAF44693F00D2C7F99F7D02FE7416',
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

const structuredData = generateStructuredData('Notary', {
  "serviceType": [
    "Escrituras públicas",
    "Poderes simples",
    "Autorizaciones de viaje",
    "Compraventa de inmuebles",
    "Contratos de arrendamiento",
    "Transferencias de vehículos"
  ],
  "areaServed": {
    "@type": "City",
    "name": "Valparaíso"
  }
});

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.authors[0].name} />
        <meta name="msvalidate.01" content={metadata.verification.bing} />
        {metadata.verification.google && (
          <meta name="google-site-verification" content={metadata.verification.google} />
        )}

        {/* OpenGraph */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width.toString()} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height.toString()} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:type" content={metadata.openGraph.type} />

        {/* Twitter */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />

        {/* Preconnect to external origins - Early hints */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Canonical */}
        <link rel="canonical" href={metadata.openGraph.url} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/carrusel1.webp" as="image" fetchPriority="high" type="image/webp" />
        <link rel="preload" href="/logo.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/favicon.ico" as="image" type="image/x-icon" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

        {/* PWA */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1B2A41" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Notaría Sarmiento" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />

        <title>{metadata.title}</title>
      </head>
      <body className="font-sans">
        <KioskInactivityTimer />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-K2CG5N2W"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>
        
        <ErrorBoundary>
          <Header />
          {children}
          <WhatsAppButtonWrapper />
        </ErrorBoundary>
        
        {/* Structured Data - Deferred */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
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
            `
          }}
        />
      </body>
    </html>
  );
}
