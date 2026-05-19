'use client';

import dynamic from 'next/dynamic';

// Lazy load de WhatsAppButton para no bloquear el render inicial
const WhatsAppButton = dynamic(() => import('./WhatsAppButton'), {
  ssr: false,
});

export default function WhatsAppButtonWrapper() {
  return <WhatsAppButton />;
}
