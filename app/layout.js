import './globals.css'

export const metadata = {
  title: 'Notaría Sarmiento Moreno - Valparaíso',
  description: 'Notaría frente al terminal de buses y a pasos del Congreso Nacional.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}