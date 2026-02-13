import React, { useState } from "react";
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
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { services, testimonials, galleryImages, contactInfo } from "../data/mock";

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

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b-4 border-black bg-white sticky top-0 z-40">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://customer-assets.emergentagent.com/job_2d80d311-23e3-4b67-a48c-a05b64438fa1/artifacts/ght79igp_Opcion%20A.jfif"
              alt="Costa Manitas Logo"
              className="h-20 w-20 object-contain border-2 border-black rounded-full bg-white"
            />
            <div>
              <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tight">Costa Manitas Gijón</h1>
              <p className="text-xs md:text-sm font-bold">Tu manitas de confianza</p>
            </div>
          </div>
          <a href={contactInfo.whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
              <MessageCircle className="mr-2 h-5 w-5" />
              <span className="hidden md:inline">Contactar</span>
            </Button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white border-b-4 border-black">
        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-yellow-400 border-2 border-black px-4 py-2 rotate-[-2deg] mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <p className="text-sm font-black uppercase">Solo en Gijón</p>
              </div>
              <h2 className="text-5xl md:text-6xl font-black uppercase mb-6 leading-tight">
                ¡Cuéntame qué necesitas!
              </h2>
              <p className="text-xl mb-8 font-bold text-gray-700">
                Reparaciones y mantenimiento del hogar con presupuesto previo. 
                Tu manitas de confianza para pequeños y grandes trabajos.
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
                alt="Costa Manitas - Servicios"
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
                Trabajo con presupuesto previo y solo en Gijón, garantizando un servicio cercano, 
                honesto y de calidad. ¡No dejes que los problemas crezcan, contáctame hoy!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50 border-b-4 border-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-12 relative inline-block left-1/2 -translate-x-1/2">
            Servicios
            <span className="absolute -bottom-2 left-0 w-full h-2 bg-yellow-400"></span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              const rotation = index % 2 === 0 ? "-rotate-3" : "rotate-3";
              return (
                <Card
                  key={service.id}
                  className="border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1 bg-white relative overflow-visible"
                >
                  <CardHeader>
                    <div className="relative mb-4">
                      {/* Comic burst effect */}
                      <div className="absolute -inset-4 z-0">
                        <div className="absolute top-0 left-0 w-6 h-6 bg-yellow-400 rotate-45 opacity-60"></div>
                        <div className="absolute top-2 right-0 w-4 h-4 bg-yellow-400 rotate-12 opacity-50"></div>
                        <div className="absolute bottom-0 left-2 w-5 h-5 bg-yellow-400 -rotate-12 opacity-50"></div>
                        <div className="absolute bottom-2 right-2 w-3 h-3 bg-yellow-400 rotate-45 opacity-60"></div>
                      </div>
                      
                      {/* Icon container with comic style */}
                      <div className={`w-24 h-24 bg-yellow-400 border-4 border-black flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative z-10 ${rotation} hover:rotate-0 transition-transform duration-300`}
                           style={{
                             clipPath: "polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)"
                           }}>
                        <Icon className="h-12 w-12 stroke-[3px] text-black" />
                      </div>
                      
                      {/* Comic lines effect */}
                      <div className="absolute -top-2 -right-2 w-8 h-1 bg-black"></div>
                      <div className="absolute -top-1 -right-3 w-6 h-1 bg-black"></div>
                      <div className="absolute top-0 -right-4 w-4 h-1 bg-black"></div>
                    </div>
                    <CardTitle className="font-black text-lg uppercase leading-tight">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-700 font-bold text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonios Section */}
      <section className="py-20 bg-white border-b-4 border-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-12 relative inline-block left-1/2 -translate-x-1/2">
            Opiniones
            <span className="absolute -bottom-2 left-0 w-full h-2 bg-yellow-400"></span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="border-4 border-black shadow-[6px_6px_0px_0px_rgba(250,204,21,1)] bg-white"
              >
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 stroke-black stroke-2" />
                    ))}
                  </div>
                  <CardTitle className="font-black text-lg">{testimonial.name}</CardTitle>
                  <CardDescription className="font-bold text-black">
                    {testimonial.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-bold text-gray-700 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Galería Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white border-b-4 border-black">
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
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white border-4 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
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
      <section className="py-20 bg-white">
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
              <a href={contactInfo.whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button className="w-full mt-6 bg-black hover:bg-gray-800 text-white font-bold text-lg py-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] transition-all">
                  <MessageCircle className="mr-2 h-6 w-6" />
                  Enviar WhatsApp
                </Button>
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

      {/* Footer */}
      <footer className="bg-black text-white py-8 border-t-4 border-black">
        <div className="container mx-auto px-4 text-center">
          <p className="font-bold text-lg mb-2">Costa Manitas Gijón</p>
          <p className="text-sm font-bold text-gray-400">
            Tu manitas de confianza · {new Date().getFullYear()}
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={contactInfo.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-8 z-40 bg-yellow-400 hover:bg-yellow-500 p-4 rounded-full border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all hover:scale-110 animate-pulse"
        aria-label="Contactar por WhatsApp"
        title="¡Contáctame por WhatsApp!"
      >
        <MessageCircle className="h-8 w-8 text-black" />
        {/* Speech bubble */}
        <div className="absolute -top-16 right-0 bg-white border-4 border-black px-3 py-2 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
          <p className="text-sm font-black">¡Escríbeme!</p>
          <div className="absolute -bottom-2 right-4 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-black"></div>
          <div className="absolute -bottom-1 right-4 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[7px] border-t-white"></div>
        </div>
      </a>
    </div>
  );
};

export default Home;
