import './globals.css'
import site from "../data/site"

export const metadata = {
	metadataBase: new URL(site.siteUrl),
  title: 'Manitas en Gijón | Trato directo y trabajo cuidado',
  description: 'Manitas en Gijón para pequeñas reparaciones y mantenimiento del hogar. Trabajo cuidado, trato directo y presupuesto claro. Escríbeme por WhatsApp.',
  keywords: 'manitas Gijón, reparaciones hogar Gijón, fontanero Gijón, electricista Gijón, carpintero Gijón, pintor Gijón, mantenimiento hogar, bricolaje, reformas pequeñas',
  authors: [{ name: 'Costa Manitas' }],
  creator: 'Costa Manitas',
  publisher: 'Costa Manitas',
  robots: 'index, follow',
  openGraph: {
    title: 'Costa Manitas Gijón - Tu Manitas de Confianza',
    description: 'Reparaciones y mantenimiento del hogar en Gijón. Presupuesto previo. WhatsApp: 687 70 54 05',
	url: site.siteUrl,
    siteName: 'Costa Manitas Gijón',
    locale: 'es_ES',
    type: 'website',
	images: [
			{
				url: site.ogImage,
		width: 1200,
		height: 630,
		alt: 'Costa Manitas Gijón - Reparaciones del Hogar'
	  }
	],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Costa Manitas Gijón - Tu Manitas de Confianza',
    description: 'Reparaciones y mantenimiento del hogar en Gijón. Presupuesto previo.',
  },
  alternates: {
	canonical: site.siteUrl,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="geo.region" content="ES-AS" />
        <meta name="geo.placename" content="Gijón" />
        <link rel="icon" href="/favicon.ico" />
		
	{/* Schema - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
			  "@context": "https://schema.org",
			  "@type": "LocalBusiness",
			  "name": site.siteName,
			  "image": `${site.siteUrl}${site.logo}`,
			  "url": site.siteUrl,
			  "telephone": site.phoneIntl,
			  "priceRange": "€",
			  "address": {
				"@type": "PostalAddress",
				"addressLocality": "Gijón",
				"addressRegion": "Asturias",
				"addressCountry": "ES"
			  },
			  "geo": {
				"@type": "GeoCoordinates",
				"latitude": 43.5322,
				"longitude": -5.6611
			  },
			  "areaServed": {
				"@type": "City",
				"name": "Gijón"
			  },
			  "openingHoursSpecification": [{
				"@type": "OpeningHoursSpecification",
				"dayOfWeek": [
				  "Monday",
				  "Tuesday",
				  "Wednesday",
				  "Thursday",
				  "Friday"
				],
				"opens": "09:00",
				"closes": "18:00"
			  }],
							"sameAs": [
								site.whatsappLink,
								`tel:${site.phoneIntl}`
							],
			  "hasOfferCatalog": {
			  "@type": "OfferCatalog",
			  "name": "Servicios de manitas en Gijón",
			  "itemListElement": [
				{
				  "@type": "Offer",
				  "itemOffered": {
					"@type": "Service",
					"name": "Montaje de muebles y estanterías"
				  }
				},
				{
				  "@type": "Offer",
				  "itemOffered": {
					"@type": "Service",
					"name": "Instalación de soportes TV y montaje en pared"
				  }
				},
				{
				  "@type": "Offer",
				  "itemOffered": {
					"@type": "Service",
					"name": "Reparación de grifos y cisternas"
				  }
				},
				{
				  "@type": "Offer",
				  "itemOffered": {
					"@type": "Service",
					"name": "Instalación de lámparas y pequeños trabajos eléctricos"
				  }
				},
				{
				  "@type": "Offer",
				  "itemOffered": {
					"@type": "Service",
					"name": "Ajuste de puertas, ventanas y muebles"
				  }
				},
				{
				  "@type": "Offer",
				  "itemOffered": {
					"@type": "Service",
					"name": "Pequeñas reparaciones del hogar en Gijón"
				  }
				}
			  ]
			}
			})
          }}
        />
		
		{/* Schema - FAQPage */}
		<script
		  type="application/ld+json"
		  dangerouslySetInnerHTML={{
			__html: JSON.stringify({
			  "@context": "https://schema.org",
			  "@type": "FAQPage",
			  "mainEntity": [
				{
				  "@type": "Question",
				  "name": "¿Qué servicios realiza un manitas en Gijón?",
				  "acceptedAnswer": {
					"@type": "Answer",
					"text": "Soy Costa, manitas en Gijón. Realizo pequeñas reparaciones del hogar y trabajos de carpintería ligera, con especial atención a la restauración y mejora de madera existente. También me ocupo de instalaciones sencillas y mantenimiento doméstico puntual. No realizo reformas integrales ni obras grandes."
				  }
				},
				{
				  "@type": "Question",
				  "name": "¿Cuánto cuesta un manitas en Gijón?",
				  "acceptedAnswer": {
					"@type": "Answer",
					"text": "El precio depende del tipo de trabajo y del tiempo necesario. Siempre explico el coste antes de empezar y ofrezco un presupuesto previo, con precios claros y sin sorpresas."
				  }
				},
				{
				  "@type": "Question",
				  "name": "¿Trabajas en toda la ciudad de Gijón?",
				  "acceptedAnswer": {
					"@type": "Answer",
					"text": "Trabajo exclusivamente en Gijón ciudad. Esto me permite organizar mejor cada servicio y mantener un trato directo y cercano."
				  }
				},
				{
				  "@type": "Question",
				  "name": "¿Haces reparaciones urgentes en Gijón?",
				  "acceptedAnswer": {
					"@type": "Answer",
					"text": "No soy un servicio de urgencias 24 horas. Si el trabajo es pequeño y estoy disponible, intento ayudarte lo antes posible dentro de mi horario habitual."
				  }
				},
				{
				  "@type": "Question",
				  "name": "¿Ofreces presupuesto sin compromiso?",
				  "acceptedAnswer": {
					"@type": "Answer",
					"text": "Sí. Si puedes enviarme una foto y una breve explicación del trabajo, puedo orientarte y darte un presupuesto aproximado antes de confirmar la visita."
				  }
				},
				{
				  "@type": "Question",
				  "name": "¿Realizas trabajos de carpintería ligera en Gijón?",
				  "acceptedAnswer": {
					"@type": "Answer",
					"text": "Sí. Me ocupo de pequeños proyectos de restauración, reparación y mejora en madera existente, como muebles, armarios, cajones o elementos de madera que necesiten ajuste o recuperación."
				  }
				},
				{
				  "@type": "Question",
				  "name": "¿Qué tipo de trabajos no realizas?",
				  "acceptedAnswer": {
					"@type": "Answer",
					"text": "No realizo reformas completas, instalaciones eléctricas integrales ni trabajos estructurales. Me centro en reparaciones concretas y mejoras puntuales que puedan hacerse de forma cuidada y sin obras grandes."
				  }
				}
			  ]
			})
		  }}
		/>
      </head>
      <body>{children}</body>
    </html>
  )
}

