'use client'

import { useState, useEffect } from "react"
import {
  Package,
  Wrench,
  Ruler,
  Zap,
  Hammer,
  Droplet,
  Leaf,
  Paintbrush,
  Drill,
  Lightbulb,
  Fence,
  SearchCheck,
  ClipboardCheck,
  Phone,
  MessageCircle,
  MapPin,
  Star,
  BadgeCheck,
  ShieldCheck,
  Receipt,
  Users,
  House,
  ArrowRight
} from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import site from "../data/site"
import trabajos from "../data/trabajos"

function FAQItem({ item }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b-4 border-black">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-6 flex justify-between items-center font-black uppercase text-lg"
      >
        {item.question}
        <span className="text-2xl">
          {open ? "−" : "+"}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <p className="font-bold text-gray-700 whitespace-pre-line leading-relaxed">
          {item.answer}
        </p>
      </div>
    </div>
  )
}

const trustItems = [
  {
    icon: BadgeCheck,
    text: "Autónomo registrado"
  },
  {
    icon: ShieldCheck,
    text: "Seguro de responsabilidad civil"
  },
  {
    icon: Receipt,
    text: "Presupuesto previo"
  },
  {
    icon: Users,
    text: "Trato directo sin intermediarios"
  },
  {
    icon: Star,
    text: "Valoraciones verificadas en Google"
  },
  {
    icon: House,
    text: "Servicio a domicilio en Gijón"
  }
]

const services = [
  {
    id: 1,
    title: 'Montaje y adaptación de muebles',
    description: 'Montaje de armarios, muebles, estanterías y muebles de cocina, con ajustes y adaptaciones cuando el espacio o el mueble lo requieren.',
    icon: 'package',
    anchor: 'montaje-adaptacion-muebles'
  },
  {
    id: 2,
    title: 'Puertas, persianas y herrajes',
    description: 'Reparación y ajuste de puertas y persianas, cambio de bisagras, manillas y otros herrajes deteriorados.',
    icon: 'wrench',
    anchor: 'puertas-persianas-herrajes'
  },
  {
    id: 3,
    title: 'Instalación de elementos en paredes',
    description: 'Instalación de espejos, estanterías, soportes de TV, barras para cortinas y otros elementos fijados a pared.',
    icon: 'ruler',
    anchor: 'instalacion-elementos-paredes'
  },
  {
    id: 4,
    title: 'Iluminación y pequeñas reparaciones eléctricas',
    description: 'Instalación de lámparas y apliques, sustitución de enchufes, interruptores y timbres, y pequeñas reparaciones eléctricas.',
    icon: 'zap',
    anchor: 'iluminacion-pequenas-reparaciones-electricas'
  },
  {
    id: 5,
    title: 'Carpintería, madera y acabados',
    description: 'Reparaciones y ajustes de madera, pequeños trabajos de carpintería, cortes, adaptaciones, barnizado, esmaltes y acabados.',
    icon: 'hammer',
    anchor: 'carpinteria-madera-acabados'
  },
  {
    id: 6,
    title: 'Fontanería y mantenimiento del hogar',
    description: 'Pequeñas reparaciones de fontanería, cambios de grifos, ajustes, revisiones y mantenimiento puntual de la vivienda.',
    icon: 'droplet',
    anchor: 'fontaneria-mantenimiento-hogar'
  }
]

const reviews = [
    {
    id: 4,
    name: "José P.",
    rating: 5,
    date: "Apr 2026",
    text: "Un trabajo impecable en el montaje de un mueble"
  },
  {
    id: 5,
    name: "Beatriz P.",
    rating: 5,
    date: "Apr 2026",
    text: "Me quedé  muy satisfecha con su trabajo, muy económico  y profesional, sin duda contaré  con sus servicios cuando lo necesite"
  },
  {
    id: 3,
    name: "Laura W.",
    rating: 5,
    date: "Mar 2026",
    text: "Costa ha sido desde el minuto uno encantador y amable, no solo ha solucionado el problema que tenía, también ha sido una persona considerada con la que da gusto contar. Su trato y amabilidad son inmejorables al igual que su trabajo. Si necesito algo ya sé con quien contar sin dudarlo. Todo han sido facilidades con él"
  }
]

// galleryImages removed (hidden gallery was deleted)

// `trabajos` dataset now imported from src/data/trabajos.js

const contactInfo = {
  phone: site.phoneDisplay,
  location: "Gijón",
  whatsappLink: site.whatsappLink,
  qrCode: site.qrCode
}

const iconMap = {
  package: Package,
  wrench: Wrench,
  ruler: Ruler,
  zap: Zap,
  hammer: Hammer,
  droplet: Droplet,
  paintbrush: Paintbrush,
  drill: Drill,
  scissors: Fence,
  "search-check": SearchCheck,
  "clipboard-check": ClipboardCheck
}

export default function Home() {
  // currentImageIndex and image navigation removed (only used by hidden gallery)
  const [previewTrabajos, setPreviewTrabajos] = useState(() => {
    const visibles = trabajos.filter(t => t.visible)
    return visibles.slice(0, 3)
  })

  useEffect(() => {
    const visibles = trabajos.filter(t => t.visible)
    if (visibles.length <= 3) return
    const copy = [...visibles]
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[copy[i], copy[j]] = [copy[j], copy[i]]
    }
    setPreviewTrabajos(copy.slice(0, 3))
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Floating WhatsApp Button */}
      <a
        href={contactInfo.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg border-4 border-black transition-transform hover:scale-110"
        data-testid="floating-whatsapp-btn"
      >
        <MessageCircle className="h-8 w-8" />
      </a>

      {/* Header (extracted) */}
      <Header whatsappLink={contactInfo.whatsappLink} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white border-b-4 border-black" data-testid="hero-section">
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase mb-4 md:mb-6 leading-[0.95] md:leading-tight text-center md:text-left">
			  <span className="bg-yellow-400/60 px-2 inline leading-[1.1] box-decoration-clone">
				Manitas en Gijón para pequeños arreglos y mantenimiento del hogar
			  </span>
			</h1>
              <p className="text-xl mb-6 md:mb-8 font-bold text-gray-700 text-center md:text-left">
                Si en casa hay algo que necesita arreglo, cuenta conmigo. 
				Soluciones prácticas, presupuesto claro y trato directo en Gijón.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
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
				  src="/flyer_hero.webp"
				  alt="Costa Manitas - Servicios"
				  width="800"
				  height="600"
                className="relative border-4 border-black rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] w-full"/>
            </div>
          </div>
        </div>
      </section>

{/* Así trabajo Section */}
<section className="py-12 md:py-20 bg-white border-b-4 border-black" data-testid="about-section">
  <div className="container mx-auto px-4">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-black uppercase mb-8 relative inline-block">
        Así trabajo
        <span className="absolute -bottom-2 left-0 w-full h-2 bg-yellow-400"></span>
      </h2>
      <div className="bg-gray-50 border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <p className="text-lg font-bold text-gray-700 mb-4">
          Soy Costa y me gusta trabajar de forma cercana y responsable, cuidando los detalles que muchas veces se pasan por alto en casa. Disfruto resolviendo esos pequeños arreglos que hacen que todo vuelva a funcionar como debe.
        </p>
        <p className="text-lg font-bold text-gray-700 mb-4">
          No me dedico a grandes reformas, sino a mejoras puntuales, ajustes y soluciones prácticas del día a día. Si no tienes claro cómo solucionar un pequeño problema, puedes explicarme qué necesitas y valorar conmigo la opción más práctica antes de realizar el trabajo. Creo en el trabajo bien hecho, en explicar las cosas con claridad y en ofrecer siempre un presupuesto previo.
        </p>
        <p className="text-lg font-bold text-gray-700">
          Trabajo exclusivamente en Gijón, lo que me permite dar un trato directo y estar disponible cuando realmente se necesita.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Reviews Section */}
<section className="py-12 md:py-20 bg-white border-b-4 border-black">
  <div className="container mx-auto px-4">

    {/* HEADER CENTRATO */}
    <div className="max-w-3xl mx-auto text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 relative inline-block">
        Opiniones de clientes
        <span className="absolute -bottom-2 left-0 w-full h-2 bg-yellow-400"></span>
      </h2>

      <p className="text-xl font-bold text-gray-700 mb-4">
        ⭐ 5.0 en Google (17 reseñas)
      </p>

      <a 
        href="https://www.google.com/maps/place/Costa+Manitas/@43.5314833,-5.7096544,13z/data=!3m1!4b1!4m6!3m5!1s0x494ef7dcd552abcb:0x764d0a2e1e2feb62!8m2!3d43.5314284!4d-5.6684546!16s%2Fg%2F11n43c0dpy?entry=ttu&g_ep=EgoyMDI2MDIxNi4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold underline hover:text-gray-800 transition-all"
      >
        Ver todas las reseñas en Google
      </a>
    </div>

    {/* GRID REVIEWS */}
    <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible pb-2 max-w-4xl mx-auto snap-x md:snap-none">
      {reviews.map((review) => (
        <div
          key={review.id}
          className="min-w-[280px] md:min-w-0 max-w-[320px] md:max-w-none flex-shrink-0 md:flex-shrink snap-start md:snap-none border-4 border-black p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
        >
          
          {/* NOME + DATA */}
          <div className="flex items-center justify-between mb-2">
            <p className="font-black">{review.name}</p>
            <p className="text-sm font-bold text-gray-500">{review.date}</p>
          </div>

          {/* STELLE */}
          <div className="flex mb-3">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-black" />
            ))}
          </div>

          {/* TESTO */}
          <p className="text-gray-700 font-bold leading-relaxed">
            {review.text}
          </p>
        </div>
      ))}
    </div>

    {/* CTA */}
    <div className="text-center mt-12">
      <p className="text-lg font-bold text-gray-700 mb-4">
        ¿Necesitas ayuda con algo en casa?
      </p>

      <a href={contactInfo.whatsappLink} target="_blank" rel="noopener noreferrer">
        <button className="bg-black hover:bg-gray-800 text-white font-bold text-lg px-8 py-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(250,204,21,1)] hover:shadow-[2px_2px_0px_0px_rgba(250,204,21,1)] transition-all flex items-center justify-center mx-auto">
          <MessageCircle className="mr-2 h-6 w-6" />
          Escríbeme por WhatsApp
        </button>
      </a>
    </div>

  </div>
</section>

{/* Trabajos Section */}
<section className="py-12 md:py-20 bg-white border-b-4 border-black">
  <div className="container mx-auto px-4">

    {/* Titolo */}
    <div className="text-center mb-10">
      <h2 className="text-3xl md:text-5xl font-black uppercase relative inline-block">
        Trabajos reales en Gijón
        <span className="absolute -bottom-2 left-0 w-full h-2 bg-yellow-400"></span>
      </h2>
      <p className="mt-4 font-bold text-gray-700">
        Algunos trabajos recientes en viviendas de Gijón
      </p>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {previewTrabajos.map((trabajo) => (
        <div
          key={trabajo.id}
          className="border-4 border-black bg-gray-50 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
        >
          <img
            src={trabajo.image}
            alt={trabajo.title}
            width="800"
            height="600"
            loading="lazy"
            className="w-full h-48 object-cover border-b-4 border-black"
          />
          <div className="p-4">
            <h3 className="font-black uppercase text-sm mb-2">
              {trabajo.title}
            </h3>
            <p className="font-bold text-gray-700 text-sm">
              {trabajo.text}
            </p>
          </div>
        </div>
      ))}
    </div>

    <div className="flex justify-center mt-6">
      <a
        href="/pequenas-reparaciones-hogar-gijon/"
        className="group text-black font-black text-lg hover:text-gray-600 transition-colors inline-flex items-center gap-2"
        aria-label="Ver todos los trabajos realizados en Gijón"
      >
        Ver todos los trabajos realizados en Gijón
        <ArrowRight className="w-[22px] h-[22px] inline-block transform transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true" />
      </a>
    </div>

  </div>
</section>

{/* Confianza y tranquilidad */}
<section className="py-12 md:py-20 bg-white border-b-4 border-black">
  <div className="container mx-auto px-4">

    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-5xl font-black uppercase relative inline-block">
        Confianza y tranquilidad
        <span className="absolute -bottom-2 left-0 w-full h-2 bg-yellow-400"></span>
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {trustItems.map((item, index) => {
        const Icon = item.icon

        return (
          <div
            key={index}
            className="border-4 border-black bg-white p-6 text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
          >
            <Icon className="w-10 h-10 mx-auto mb-4" />

            <p className="font-black uppercase text-sm leading-snug">
              {item.text}
            </p>
          </div>
        )
      })}
    </div>

  </div>
</section>

      {/* Servicios Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-white to-gray-50 border-b-4 border-black" data-testid="services-section">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-12 relative inline-block left-1/2 -translate-x-1/2">
            Servicios
            <span className="absolute -bottom-2 left-0 w-full h-2 bg-yellow-400"></span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] ?? Wrench
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
                    <div className="mt-6 flex justify-end">
                      <a
                        href={`/pequenas-reparaciones-hogar-gijon/#${service.anchor}`}
                        className="inline-flex items-center font-bold text-black group hover:text-gray-600 transition-colors"
                      >
                        Ver servicio
                        <ArrowRight className="ml-2 w-5 h-5 transform transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
            </div>
            <div className="w-full mt-6">
              <div className="border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-4">
                  <Leaf className="w-8 h-8 text-black flex-shrink-0" aria-hidden="true" />
                  <div className="flex flex-col">
                    <h3 className="font-black text-xl">Jardín y mantenimiento exterior</h3>
                    <p className="font-bold text-gray-700 text-sm">También realizo pequeños trabajos de jardín y mantenimiento exterior.</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
		{/* FAQ Section */}
		<section className="py-12 md:py-20 bg-white border-b-4 border-black" data-testid="faq-section">
		  <div className="container mx-auto px-4">
			<h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-12 relative inline-block left-1/2 -translate-x-1/2">
			  Preguntas Frecuentes
			  <span className="absolute -bottom-2 left-0 w-full h-2 bg-yellow-400"></span>
			</h2>

			<div className="max-w-3xl mx-auto">
			  {[
				{
				  question: "¿Qué servicios realiza un manitas en Gijón?",
				  answer: `Soy Costa, manitas en Gijón.
		Realizo pequeñas reparaciones del hogar y trabajos de carpintería ligera, con especial atención a la restauración y mejora de madera existente. También me ocupo de instalaciones sencillas y mantenimiento doméstico puntual.
		No realizo reformas integrales ni obras grandes.`
				},
				{
				  question: "¿Cuánto cuesta un manitas en Gijón?",
				  answer: `El precio depende del tipo de trabajo y del tiempo necesario.
		Siempre explico el coste antes de empezar y ofrezco un presupuesto previo, con precios claros y sin sorpresas.`
				},
				{
				  question: "¿Trabajas en toda la ciudad de Gijón?",
				  answer: `Trabajo exclusivamente en Gijón ciudad.
		Esto me permite organizar mejor cada servicio y mantener un trato directo y cercano.`
				},
				{
				  question: "¿Haces reparaciones urgentes en Gijón?",
				  answer: `No soy un servicio de urgencias 24 horas.
		Si el trabajo es pequeño y estoy disponible, intento ayudarte lo antes posible dentro de mi horario habitual.`
				},
				{
				  question: "¿Ofreces presupuesto sin compromiso?",
				  answer: `Sí.
		Si puedes enviarme una foto y una breve explicación del trabajo, puedo orientarte y darte un presupuesto aproximado antes de confirmar la visita.`
				},
				{
				  question: "¿Realizas trabajos de carpintería ligera en Gijón?",
				  answer: `Sí.
		Me ocupo de pequeños proyectos de restauración, reparación y mejora en madera existente, como muebles, armarios, cajones o elementos de madera que necesiten ajuste o recuperación.`
				},
				{
				  question: "¿Qué tipo de trabajos no realizas?",
				  answer: `No realizo reformas completas, instalaciones eléctricas integrales ni trabajos estructurales.
		Me centro en reparaciones concretas y mejoras puntuales que puedan hacerse de forma cuidada y sin obras grandes.`
				}
			  ].map((item, index) => (
				<FAQItem key={index} item={item} />
			  ))}
			</div>
		  </div>
		</section>
      {/* Gallery section removed (was hidden) */}
	  
	  {/* English Section */}
		<section className="py-12 md:py-20 bg-gradient-to-br from-white to-gray-50 border-b-4 border-black">
		  <div className="container mx-auto px-4">
			<div className="max-w-3xl mx-auto text-center">
			  
			  <h2 className="text-4xl md:text-5xl font-black uppercase mb-8 relative inline-block">
				Handyman in Gijón
				<span className="absolute -bottom-2 left-0 w-full h-2 bg-yellow-400"></span>
			  </h2>

			  <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
				<p className="text-lg font-bold text-gray-700 mb-4">
				  Small home repairs and maintenance in Gijón.
				</p>

				<p className="text-lg font-bold text-gray-700 mb-4">
				  I help with furniture adjustments, wall mounting, minor repairs and small improvement works. Clear communication and careful work.
				</p>

				<p className="text-lg font-bold text-gray-700">
				  If you need help with a small job at home, feel free to get in touch.
				</p>
			  </div>

			</div>
		  </div>
		</section>

      {/* Contact Section */}
      <section className="py-12 md:py-20 bg-white" data-testid="contact-section">
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
                    <MapPin className="h-6 w-6" />
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
			  <a 
				  href="https://www.google.com/maps/place/Costa+Manitas/@43.5314833,-5.7096544,13z/data=!3m1!4b1!4m6!3m5!1s0x494ef7dcd552abcb:0x764d0a2e1e2feb62!8m2!3d43.5314284!4d-5.6684546!16s%2Fg%2F11n43c0dpy?entry=ttu&g_ep=EgoyMDI2MDIxNi4wIKXMDSoASAFQAw%3D%3D"
				  target="_blank" 
				  rel="noopener noreferrer"
				  className="block mt-4 text-center font-bold underline hover:text-gray-800 transition-all"
				>
				  ⭐ Ver perfil en Google
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

      {/* Footer (extracted) */}
      <Footer phone={contactInfo.phone} />
    </div>
  )
}
