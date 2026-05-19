// utils/servicios.js
import {
  HiOutlineDocumentText, HiOutlineClipboardList, HiOutlineCheckCircle,
  HiOutlineBriefcase, HiOutlineKey, HiOutlineUserGroup, HiOutlineClipboardCheck,
  HiOutlineGlobeAlt, HiOutlineLibrary, HiOutlinePhotograph
} from 'react-icons/hi';

export const SERVICIOS = [
  {
    title: 'Transferencias de Vehículos',
    icon: HiOutlineKey,
    requisitos: [
      "Cédula de identidad vigente.",
      "Certificado de Anotaciones vigente (al día).",
      "Certificado de Multas (al día).",
      "Permiso de Circulación vigente.",
      "Poder si actúa un tercero.",
      "RUT y Escritura si son personas jurídicas."
    ],
  },
  {
    title: 'Contrato de Arrendamiento',
    icon: HiOutlineClipboardList,
    requisitos: [
      "Comparecencia personal arrendador y arrendatario.",
      "Cédula de identidad vigente.",
      "Certificado de Dominio Vigente."
    ],
  },
  {
    title: 'Compraventa Inmuebles',
    icon: HiOutlineDocumentText,
    requisitos: [
      "Debe otorgarse por escritura pública.",
      "Asesoría de abogado.",
      "Inscripción en el Conservador de Bienes Raíces."
    ],
  },
  {
    title: 'Salvoconducto (propietario)',
    icon: HiOutlineClipboardCheck,
    requisitos: [
      "Solicitar en ciudad de origen.",
      "Comprobante de pago o avalúo a nombre del propietario.",
      "Nombre y patente del chofer."
    ],
  },
  {
    title: 'Salvoconducto (arrendatario)',
    icon: HiOutlineClipboardCheck,
    requisitos: [
      "Autorización del dueño.",
      "Comprobantes de luz y agua al día.",
      "Pago última renta.",
      "Nombre y patente del chofer."
    ],
  },
  {
    title: 'Finiquito de Trabajo',
    icon: HiOutlineBriefcase,
    requisitos: [
      "Comparecencia personal.",
      "3 copias del finiquito.",
      "Cotizaciones previsionales al día.",
      "No estar en registro de deudores de pensión.",
      "3 últimas liquidaciones si corresponde."
    ],
  },
  {
    title: 'Redacción de Testamento',
    icon: HiOutlineLibrary,
    requisitos: [
      "Solemne abierto: ante notario y testigos.",
      "Solemne cerrado: se entrega sellado."
    ],
  },
  {
    title: 'Permiso para salir del país (con uno de los padres)',
    icon: HiOutlineUserGroup,
    requisitos: [
      "Pasaporte o Cédula vigente.",
      "Certificado de nacimiento o libreta + 3 copias.",
      "Autorización del padre que no viaja o del Tribunal + 3 copias."
    ],
  },
  {
    title: 'Permiso para salir del país (sin padres)',
    icon: HiOutlineUserGroup,
    requisitos: [
      "Pasaporte o cédula vigente.",
      "Certificado de nacimiento + 3 copias.",
      "Defunción de ambos padres si aplica + 3 copias.",
      "Autorización notarial de ambos padres + 3 copias."
    ],
  },
  {
    title: 'Constitución de Sociedad',
    icon: HiOutlineGlobeAlt,
    requisitos: [
      "Minuta de abogado.",
      "Escritura pública.",
      "Inscripción en Registro de Comercio.",
      "Publicación en Diario Oficial.",
      "O Ley 20.659 para modalidad simplificada."
    ],
  },
  {
    title: 'Legalización de Fotocopias',
    icon: HiOutlinePhotograph,
    requisitos: [
      "Exhibir el original a legalizar."
    ],
  },
  {
    title: 'Poder Simple o Especial',
    icon: HiOutlineCheckCircle,
    requisitos: [
      "Comparecencia personal del otorgante.",
      "Cédula de identidad vigente.",
      "Redacción del mandato o indicación del propósito."
    ],
  },
  {
    title: 'Declaración Jurada Simple',
    icon: HiOutlineCheckCircle,
    requisitos: [
      "Comparecencia personal.",
      "Cédula de identidad vigente.",
      "Texto de la declaración o instrucciones para su redacción."
    ],
  },
  {
    title: 'Revocación de Poder',
    icon: HiOutlineCheckCircle,
    requisitos: [
      "Comparecencia del revocante.",
      "Datos o copia del poder a revocar.",
      "Cédula de identidad vigente."
    ],
  },
  {
    title: 'Autorización de Viaje de Menores (Dentro de Chile)',
    icon: HiOutlineUserGroup,
    requisitos: [
      "Comparecencia de los padres o tutores.",
      "Cédula de identidad vigente de los autorizantes.",
      "Certificado de nacimiento del menor."
    ],
  },
  {
    title: 'Certificación de Firmas',
    icon: HiOutlineCheckCircle,
    requisitos: [
      "Comparecencia personal del firmante.",
      "Cédula de identidad vigente.",
      "Documento a firmar."
    ],
  },
  {
    title: 'Tarifas Notariales',
    icon: HiOutlineDocumentText,
    href: 'https://www.bcn.cl/leychile/navegar?idNorma=127917&idParte=',
    requisitos: [
      "Haga clic en esta tarjeta para consultar el arancel oficial en el sitio de la Biblioteca del Congreso Nacional."
    ],
  },
];