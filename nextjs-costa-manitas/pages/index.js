import Head from 'next/head'
import { useState } from 'react'
import {
  Hammer,
  Paintbrush,
  Drill,
  Zap,
  Droplet,
  DoorOpen,
  Wrench,
  Scissors,
  SearchCheck,
  ClipboardCheck,
  Phone,
  MessageCircle,
  ChevronLeft,
  ChevronRight
} from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { services, galleryImages, contactInfo } from "../data/mock"

const iconMap = {
  hammer: Hammer,
  paintbrush: Paintbrush,
  drill: Drill,
  zap: Zap,
  droplet: Droplet,
  "door-open": DoorOpen,
  wrench: Wrench,
  scissors: Scissors,
  "search-check": SearchCheck,
  "clipboard-check": ClipboardCheck
};

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  // Structured Data
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
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "19:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "28"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Manitas",
      "itemListElement": services.map((service) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        }
      }))
    }
  };

  return (
    <>
      <Head>
        <title>Costa Manitas Gijón | Pequeñas Reparaciones y Mantenimiento del Hogar</title>
        <meta name="description" content="Manitas de confianza en Gijón para pequeñas reparaciones, trabajos personalizados y carpintería ligera en el hogar. Profesional, claro y con precios transparentes." />
        <meta name="keywords" content="manitas Gijón, reparaciones hogar Gijón, pequeñas reparaciones Gijón, mantenimiento hogar Gijón, arreglos en casa Gijón, carpintería ligera Gijón, fontanero Gijón, electricista Gijón" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Costa Manitas Gijón | Pequeñas Reparaciones y Mantenimiento del Hogar" />
        <meta property="og:description" content="Manitas de confianza en Gijón para pequeñas reparaciones, trabajos personalizados y carpintería ligera." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:image" content="https://customer-assets.emergentagent.com/job_2d80d311-23e3-4b67-a48c-a05b64438fa1/artifacts/ght79igp_Opcion%20A.jfif" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Costa Manitas Gijón" />
        <meta name="twitter:description" content="Manitas de confianza en Gijón para pequeñas reparaciones y mantenimiento del hogar" />
        
        {/* Local Business */}
        <meta name="geo.region" content="ES-O" />
        <meta name="geo.placename" content="Gijón" />
        <meta name="geo.position" content="43.5322;-5.6611" />
        
        <link rel="canonical" href="https://costamanitas.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="border-b-4 border-black bg-white sticky top-0 z-40">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="https://customer-assets.emergentagent.com/job_2d80d311-23e3-4b67-a48c-a05b64438fa1/artifacts/ght79igp_Opcion%20A.jfif"
                alt="Costa Manitas Gijón Logo"
                width="80"
                height="80"
                className="h-20 w-auto"
              />
              <div>
                <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tight">Costa Manitas Gijón</h1>
                <p className="text-xs md:text-sm font-bold">Tu manitas de confianza</p>
              </div>
            </div>
            <a href={contactInfo.whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-base border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all px-6 py-3">
                <MessageCircle className="mr-2 h-5 w-5" />
                <span className="hidden md:inline">Contactar WhatsApp</span>
                <span className="md:hidden">WhatsApp</span>
              </Button>
            </a>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-white border-b-4 border-black">
          <div className="container mx-auto px-4 py-12">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <div className="inline-block bg-yellow-400 border-2 border-black px-4 py-2 rotate-[-2deg] mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <p className="text-sm font-black uppercase">Solo en Gijón</p>
                </div>
                <h2 className="text-5xl md:text-6xl font-black uppercase mb-6 leading-tight">
                  ¡Cuéntame qué necesitas!
                </h2>
                <p className="text-xl mb-8 font-bold text-gray-700">
                  Manitas de confianza en Gijón para pequeñas reparaciones y trabajos en carpintería ligera. Profesionalidad y precios claros para el hogar.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={contactInfo.whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-black hover:bg-gray-800 text-white font-bold text-lg px-8 py-6 border-2 border-black shadow-[6px_6px_0px_0px_rgba(250,204,21,1)] hover:shadow-[3px_3px_0px_0px_rgba(250,204,21,1)] transition-all">
                      <MessageCircle className="mr-2 h-6 w-6" />
                      WhatsApp: {contactInfo.phone}
                    </Button>
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-400 border-4 border-black rotate-3 rounded-lg"></div>
                <img
                  src="https://customer-assets.emergentagent.com/job_2d80d311-23e3-4b67-a48c-a05b64438fa1/artifacts/oi1f136a_ChatGPT%20Image%20Jan%2015%2C%202026%2C%2011_24_22%20AM.png"
                  alt="Servicios de Costa Manitas en Gijón"
                  width="600"
                  height="600"
                  className="relative border-4 border-black rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sobre Costa Section */}
        <section className="py-20 bg-white border-b-4 border-black">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-black uppercase mb-8 relative inline-block">
                Sobre Costa
                <span className="absolute -bottom-2 left-0 w-full h-2 bg-yellow-400"></span>
              </h2>
              <div className="bg-gray-50 border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <p className="text-lg font-bold text-gray-700 mb-4">
                  Soy Costa, tu manitas de confianza en Gijón. Con años de experiencia en reparaciones 
                  y mantenimiento del hogar, me dedico a solucionar esos pequeños (y no tan pequeños) 
                  problemas que surgen en casa.
                </p>
                <p className="text-lg font-bold text-gray-700">
                  Trabajo con presupuesto previo y solo en Gijón y zonas cercanas, garantizando un servicio cercano, 
                  honesto y de calidad. ¡No dejes que los problemas crezcan, contáctame hoy!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Continue in next message due to length... */}
      </div>
    </>
  )
}
