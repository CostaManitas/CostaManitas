'use client'

import { useState } from "react"
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
  Star,
  ChevronLeft,
  ChevronRight
} from "lucide-react"

const services = [
  { id: 1, title: "Retoques y reparación de madera existente", description: "Puertas · muebles · pequeños elementos", icon: "hammer" },
  { id: 2, title: "Esmaltes, barniz y antióxido", description: "Para madera y metal", icon: "paintbrush" },
  { id: 3, title: "Montajes y perforaciones", description: "Baldas · estantes · pasamanos · barras de seguridad · televisores", icon: "drill" },
  { id: 4, title: "Electricidad básica", description: "Sustitución de enchufes, lámparas, interruptores, canaletas", icon: "zap" },
  { id: 5, title: "Fontanería simple", description: "Grifos · sifones · silicona", icon: "droplet" },
  { id: 6, title: "Puertas y ajustes", description: "Bisagras · cierres · alineación", icon: "door-open" },
  { id: 7, title: "Reparaciones domésticas puntuales", description: "Pequeños arreglos en casa", icon: "wrench" },
  { id: 8, title: "Jardín – trabajos puntuales", description: "Corte, limpieza y mantenimiento básico", icon: "scissors" },
  { id: 9, title: "Revisión y pequeños mantenimientos", description: "Antes de que el problema crezca", icon: "search-check" },
  { id: 10, title: "Asesoramiento práctico en domicilio", description: "Qué reparar, qué no, y cómo hacerlo bien", icon: "clipboard-check" }
]

const testimonials = [
  { id: 1, name: "María González", location: "Gijón", text: "Costa arregló todas las puertas de mi casa en un día. ¡Trabajo impecable y muy profesional!", rating: 5 },
  { id: 2, name: "Javier Fernández", location: "Gijón", text: "Muy contento con el servicio. Montó unos muebles y dejó todo perfecto. Lo recomiendo 100%.", rating: 5 },
  { id: 3, name: "Ana Martínez", location: "Gijón", text: "Rápido, eficiente y económico. Costa es el manitas que todos necesitamos en Gijón.", rating: 5 }
]

const galleryImages = [
  { id: 1, title: "Reparación de puerta", image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&h=400&fit=crop" },
  { id: 2, title: "Montaje de muebles", image: "https://images.unsplash.com/photo-1615874694520-474822394e73?w=600&h=400&fit=crop" },
  { id: 3, title: "Trabajos de fontanería", image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&h=400&fit=crop" },
  { id: 4, title: "Instalación eléctrica", image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&h=400&fit=crop" },
  { id: 5, title: "Pintura y barniz", image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&h=400&fit=crop" },
  { id: 6, title: "Trabajos de jardín", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop" }
]

const contactInfo = {
  phone: "687 70 54 05",
  location: "Gijón",
  whatsappLink: "https://wa.me/34687705405",
  qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://wa.me/34687705405"
}

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
}

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Floating WhatsApp Button */}
      <a
        href={contactInfo.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg border-4 border-black transition-transform hover:scale-110"
        data-testid="floating-whatsapp-btn"
      >
        <MessageCircle className="h-8 w-8" />
      </a>

      {/* Header */}
      <header className="border-b-4 border-black bg-white sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="Costa Manitas Gijón"
              className="h-20 w-auto"
            />
            <div>
              <div className="text-2xl md:text-3xl font-black uppercase tracking-tight">Costa Manitas Gijón</div>
              <p className="text-xs md:text-sm font-bold">Tu manitas de confianza</p>
            </div>
          </div>
          <a href={contactInfo.whatsappLink} target="_blank" rel="noopener noreferrer" data-testid="header-whatsapp-btn">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-base border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all px-6 py-3 flex items-center">
              <MessageCircle className="mr-2 h-5 w-5" />
              <span className="hidden md:inline">Contactar WhatsApp</span>
              <span className="md:hidden">WhatsApp</span>
            </button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white border-b-4 border-black" data-testid="hero-section">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-block bg-yellow-400 border-2 border-black px-4 py-2 rotate-[-2deg] mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <p className="text-sm font-black uppercase">Solo en Gijón</p>
              </div>
              <h1 className="text-5xl md:text-6xl font-black uppercase mb-6 leading-tight">
                Manitas en Gijón para reparaciones del hogar
              </h1>
              <p className="text-xl mb-8 font-bold text-gray-700">
                Reparaciones y mantenimiento del hogar con presupuesto previo. 
                Tu manitas de confianza para pequeños y grandes trabajos.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={contactInfo.whatsappLink} target="_blank" rel="noopener noreferrer" data-testid="hero-whatsapp-btn">
                  <button className="bg-black hover:bg-gray-800 text-white font-bold text-lg px-8 py-6 border-2 border-black shadow-[6px_6px_0px_0px_rgba(250,204,21,1)] hover:shadow-[3px_3px_0px_0px_rgba(250,204,21,1)] transition-all flex items-center">
                    <MessageCircle className="mr-2 h-6 w-6" />
                    WhatsApp: {contactInfo.phone}
                  </button>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-400 border-4 border-black rotate-3 rounded-lg"></div>
              <img
                src="https://customer-assets.emergentagent.com/job_2d80d311-23e3-4b67-a48c-a05b64438fa1/artifacts/oi1f136a_ChatGPT%20Image%20Jan%2015%2C%202026%2C%2011_24_22%20AM.png"
                alt="Costa Manitas - Servicios"
                className="relative border-4 border-black rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Costa Section */}
      <section className="py-20 bg-white border-b-4 border-black" data-testid="about-section">
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
                Trabajo con presupuesto previo y solo en Gijón, garantizando un servicio cercano, 
                honesto y de calidad. ¡No dejes que los problemas crezcan, contáctame hoy!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50 border-b-4 border-black" data-testid="services-section">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-12 relative inline-block left-1/2 -translate-x-1/2">
            Servicios
            <span className="absolute -bottom-2 left-0 w-full h-2 bg-yellow-400"></span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon]
              return (
                <div
                  key={service.id}
                  className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1 bg-white rounded-lg overflow-hidden"
                  data-testid={`service-card-${service.id}`}
                >
                  {/* Comic-style illustration box */}
                  <div className="relative">
                    <div 
                      className="w-full h-32 bg-gradient-to-br from-gray-50 to-gray-100 border-b-4 border-black flex items-center justify-center relative overflow-hidden"
                      style={{
                        backgroundImage: `
                          radial-gradient(circle, #000 1px, transparent 1px),
                          radial-gradient(circle, #000 1px, transparent 1px)
                        `,
                        backgroundSize: '4px 4px, 6px 6px',
                        backgroundPosition: '0 0, 3px 3px'
                      }}
                    >
                      <div className="absolute inset-0 opacity-5" style={{
                        backgroundImage: 'repeating-linear-gradient(45deg, black 0, black 2px, transparent 2px, transparent 8px)'
                      }}></div>
                      
                      <div className="relative z-10 bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                           style={{ transform: `rotate(${index % 2 === 0 ? '-2deg' : '2deg'})` }}>
                        <Icon className="h-12 w-12 stroke-[2.5px]" />
                      </div>
                      
                      <div className="absolute top-4 left-4 w-12 h-1 bg-black transform -rotate-12"></div>
                      <div className="absolute top-6 left-3 w-8 h-1 bg-black transform -rotate-12"></div>
                      <div className="absolute bottom-4 right-4 w-12 h-1 bg-black transform rotate-12"></div>
                      <div className="absolute bottom-6 right-3 w-8 h-1 bg-black transform rotate-12"></div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-black text-lg uppercase leading-tight mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 font-bold text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonios Section */}
      <section className="py-20 bg-white border-b-4 border-black" data-testid="testimonials-section">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-12 relative inline-block left-1/2 -translate-x-1/2">
            Opiniones
            <span className="absolute -bottom-2 left-0 w-full h-2 bg-yellow-400"></span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="border-4 border-black shadow-[6px_6px_0px_0px_rgba(250,204,21,1)] bg-white rounded-lg p-6"
                data-testid={`testimonial-card-${testimonial.id}`}
              >
                <div className="flex gap-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 stroke-black stroke-2" />
                  ))}
                </div>
                <h3 className="font-black text-lg">{testimonial.name}</h3>
                <p className="font-bold text-black text-sm mb-4">{testimonial.location}</p>
                <p className="font-bold text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white border-b-4 border-black" data-testid="gallery-section">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-12 relative inline-block left-1/2 -translate-x-1/2">
            Trabajos Realizados
            <span className="absolute -bottom-2 left-0 w-full h-2 bg-yellow-400"></span>
          </h2>
          
          {/* Featured Image Carousel */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="relative border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white">
              <img
                src={galleryImages[currentImageIndex].image}
                alt={galleryImages[currentImageIndex].title}
                className="w-full h-96 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-yellow-400 border-t-4 border-black p-4">
                <p className="font-black text-xl uppercase text-center">
                  {galleryImages[currentImageIndex].title}
                </p>
              </div>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white border-4 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                data-testid="gallery-prev-btn"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white border-4 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                data-testid="gallery-next-btn"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {galleryImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setCurrentImageIndex(index)}
                className={`border-4 border-black overflow-hidden transition-all ${
                  currentImageIndex === index
                    ? "shadow-[4px_4px_0px_0px_rgba(250,204,21,1)] scale-105"
                    : "shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:scale-105"
                }`}
                data-testid={`gallery-thumb-${image.id}`}
              >
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-20 object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white" data-testid="contact-section">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-12 relative inline-block left-1/2 -translate-x-1/2">
            Contacto
            <span className="absolute -bottom-2 left-0 w-full h-2 bg-yellow-400"></span>
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="border-4 border-black p-8 bg-yellow-400 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-3xl font-black uppercase mb-6">¡Hablemos!</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white border-2 border-black rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold text-sm">Teléfono / WhatsApp</p>
                    <p className="text-2xl font-black">{contactInfo.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white border-2 border-black rounded-lg flex items-center justify-center">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold text-sm">Ubicación</p>
                    <p className="text-2xl font-black">{contactInfo.location}</p>
                  </div>
                </div>
              </div>
              <a href={contactInfo.whatsappLink} target="_blank" rel="noopener noreferrer" data-testid="contact-whatsapp-btn">
                <button className="w-full mt-6 bg-black hover:bg-gray-800 text-white font-bold text-lg py-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] transition-all flex items-center justify-center">
                  <MessageCircle className="mr-2 h-6 w-6" />
                  Enviar WhatsApp
                </button>
              </a>
            </div>
            <div className="border-4 border-black p-8 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center">
              <h3 className="text-2xl font-black uppercase mb-4 text-center">
                Escanea el código QR
              </h3>
              <img
                src={contactInfo.qrCode}
                alt="QR Code WhatsApp"
                className="w-48 h-48 border-4 border-black"
              />
              <p className="text-center font-bold mt-4 text-gray-700">
                Contáctame directamente desde tu móvil
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <div className="inline-block bg-gray-100 border-4 border-black px-8 py-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-lg font-black uppercase">Presupuesto previo · Solo Gijón</p>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Costa Manitas Gijón",
            "description": "Servicios de reparación y mantenimiento del hogar en Gijón. Fontanería, electricidad, carpintería, pintura y más.",
            "url": "https://costamanitas.com",
            "telephone": "+34687705405",
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
            "priceRange": "€€",
            "openingHours": "Mo-Fr 09:00-19:00",
            "sameAs": [
              "https://wa.me/34687705405"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Servicios de Manitas",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Carpintería y reparación de madera" }},
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pintura, esmaltes y barniz" }},
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Montajes y perforaciones" }},
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Electricidad básica" }},
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fontanería simple" }},
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Reparación de puertas" }},
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mantenimiento de jardín" }}
              ]
            }
          })
        }}
      />

      {/* Footer */}
      <footer className="bg-black text-white py-8 border-t-4 border-black">
        <div className="container mx-auto px-4 text-center">
          <p className="font-bold text-lg mb-2">Costa Manitas Gijón</p>
          <p className="text-sm font-bold text-gray-400">
            Tu manitas de confianza · {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  )
}
