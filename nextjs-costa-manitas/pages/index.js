import dynamic from 'next/dynamic'
import Head from 'next/head'

const HomePage = dynamic(() => import('../components/HomePage'), {
  ssr: true
})

export default function Index() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Costa Manitas Gijón",
    "description": "Manitas de confianza en Gijón para pequeñas reparaciones, trabajos personalizados y carpintería ligera en el hogar",
    "image": "https://customer-assets.emergentagent.com/job_2d80d311-23e3-4b67-a48c-a05b64438fa1/artifacts/ght79igp_Opcion%20A.jfif",
    "telephone": "+34687705405",
    "priceRange": "€€",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Gijón",
      "addressRegion": "Asturias",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "43.5322",
      "longitude": "-5.6611"
    },
    "areaServed": {
      "@type": "City",
      "name": "Gijón"
    },
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "19:00"
    }]
  }

  return (
    <>
      <Head>
        <title>Costa Manitas Gijón | Pequeñas Reparaciones y Mantenimiento del Hogar</title>
        <meta name="description" content="Manitas de confianza en Gijón para pequeñas reparaciones, trabajos personalizados y carpintería ligera en el hogar. Profesional, claro y con precios transparentes." />
        <meta name="keywords" content="manitas Gijón, reparaciones hogar Gijón, pequeñas reparaciones Gijón, mantenimiento hogar Gijón, arreglos en casa Gijón" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://costamanitas.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <HomePage />
    </>
  )
}
