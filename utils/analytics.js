// utils/analytics.js
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

// Google Tag Manager
export const gtmPageview = (url) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'page_view',
      page_location: url,
      page_title: document.title,
      business_type: 'Notary',
      service_area: 'Valparaíso',
      business_name: 'Notaría Sarmiento Moreno'
    });
  }
};

// Event tracking para GTM
export const gtmEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...parameters,
      business_type: 'Notary',
      service_area: 'Valparaíso',
      business_name: 'Notaría Sarmiento Moreno'
    });
  }
};

// Google Analytics (si se usa junto con GTM)
export const pageview = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_location: url,
    });
  }
};

export const event = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Structured data para analytics
export const generateAnalyticsData = (pageData) => {
  return {
    page_title: pageData.title,
    page_url: pageData.url,
    page_type: pageData.type || 'website',
    business_name: 'Notaría Sarmiento Moreno',
    business_type: 'Notary',
    location: 'Valparaíso, Chile',
    service_area: 'Valparaíso',
  };
};

// Conversion tracking para GTM
export const trackConversion = (conversionType, value = 0) => {
  gtmEvent('conversion', {
    conversion_type: conversionType,
    value: value,
    currency: 'CLP'
  });
};

// Contact tracking para GTM
export const trackContact = (method) => {
  gtmEvent('contact_form_submit', {
    contact_method: method,
    business_type: 'Notary'
  });
};

// Service tracking para GTM
export const trackServiceView = (serviceName) => {
  gtmEvent('service_view', {
    service_name: serviceName,
    business_type: 'Notary'
  });
};

// Phone call tracking para GTM
export const trackPhoneCall = (phoneNumber) => {
  gtmEvent('phone_call', {
    phone_number: phoneNumber,
    business_type: 'Notary'
  });
};

// Location tracking para GTM
export const trackLocationView = () => {
  gtmEvent('location_view', {
    business_type: 'Notary',
    location: 'Valparaíso'
  });
}; 