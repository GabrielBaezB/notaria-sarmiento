// utils/seo.js
export const siteConfig = {
  title: 'Notaría Sarmiento Moreno',
  description: 'Notaría Sarmiento Moreno en calle Chacabuco, Valparaíso. Frente al terminal de buses y a pasos del Congreso Nacional. Servicios notariales confiables con atención personalizada.',
  url: 'https://notariasarmiento.cl',
  siteName: 'Notaría Sarmiento Moreno',
  locale: 'es_CL',
    type: 'website',
  twitterHandle: '@notariasarmiento',
  phone: '+56 51 2595840',
  phone: '+56 32 2548174',
  address: 'Chacabuco 2845, Valparaíso',
  coordinates: {
    latitude: -33.0458,
    longitude: -71.6208
  }
};

export const generateMetadata = (pageTitle, pageDescription, pageKeywords = '', canonical = '') => {
  const title = pageTitle ? `${pageTitle} | ${siteConfig.title}` : siteConfig.title;
  const description = pageDescription || siteConfig.description;
  const keywords = pageKeywords || 'notaría, notaria, Valparaíso, chacabuco, servicios notariales';
  const canonicalUrl = canonical || siteConfig.url;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
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
      title,
      description,
      images: [`${siteConfig.url}/og-image.png`],
    },
  };
};

export const generateStructuredData = (type = 'Notary', additionalData = {}) => {
  const baseData = {
    "@context": "https://schema.org",
    "@type": type,
    "name": siteConfig.title,
    "image": `${siteConfig.url}/og-image.png`,
    "address": {
      "@type": "PostalAddress",
              "streetAddress": "Chacabuco 2845",
      "addressLocality": "Valparaíso",
      "addressRegion": "Valparaíso",
      "postalCode": "2340000",
      "addressCountry": "CL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": siteConfig.coordinates.latitude,
      "longitude": siteConfig.coordinates.longitude
    },
    "url": siteConfig.url,
    "description": siteConfig.description,
    "telephone": siteConfig.phone,
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "$$",
  };

  return { ...baseData, ...additionalData };
};

export const generateBreadcrumbSchema = (items) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};
