import './globals.css'

export const metadata = {
  title: 'Costa Manitas Gijón - Tu Manitas de Confianza | Reparaciones del Hogar',
  description: 'Costa Manitas ofrece servicios de reparación y mantenimiento del hogar en Gijón. Fontanería, electricidad, carpintería, pintura y más. Presupuesto previo sin compromiso. Contacta por WhatsApp: 687 70 54 05',
  keywords: 'manitas Gijón, reparaciones hogar Gijón, fontanero Gijón, electricista Gijón, carpintero Gijón, pintor Gijón, mantenimiento hogar, bricolaje, reformas pequeñas',
  authors: [{ name: 'Costa Manitas' }],
  creator: 'Costa Manitas',
  publisher: 'Costa Manitas',
  robots: 'index, follow',
  openGraph: {
    title: 'Costa Manitas Gijón - Tu Manitas de Confianza',
    description: 'Reparaciones y mantenimiento del hogar en Gijón. Presupuesto previo. WhatsApp: 687 70 54 05',
    url: 'https://costamanitas.com',
    siteName: 'Costa Manitas Gijón',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Costa Manitas Gijón - Tu Manitas de Confianza',
    description: 'Reparaciones y mantenimiento del hogar en Gijón. Presupuesto previo.',
  },
  alternates: {
    canonical: 'https://costamanitas.com',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="geo.region" content="ES-AS" />
        <meta name="geo.placename" content="Gijón" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
