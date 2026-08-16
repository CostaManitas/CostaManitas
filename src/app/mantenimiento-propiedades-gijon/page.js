import Header from "../../components/Header"
import Footer from "../../components/Footer"
import site from "../../data/site"
import trabajos from "../../data/trabajos"
import HeroIllustration from "../../components/HeroIllustration"
import FAQClient from "../../components/FAQClient"
import { MessageCircle, Phone, Package, Wrench, Ruler, Zap, Hammer, Droplet, Lightbulb, ClipboardCheck } from "lucide-react"

export const metadata = {
  title: 'Mantenimiento de propiedades en Gijón',
}



const viviendaBlocks = [
  {
    title: 'Revisiones y puesta a punto',
    text: 'Comprobación y pequeños ajustes de elementos de la vivienda que necesitan atención antes de volver a utilizarla o después de un periodo sin uso.',
    icon: Package
  },
  {
    title: 'Pequeñas reparaciones',
    text: 'Puertas, persianas, bisagras, muebles, elementos eléctricos sencillos, fontanería y otros pequeños problemas de mantenimiento.',
    icon: Wrench
  },
  {
    title: 'Preparación de viviendas',
    text: 'Pequeños trabajos para dejar una vivienda preparada antes de una nueva estancia, después de un periodo cerrada o antes de volver a ponerla en uso.',
    icon: ClipboardCheck
  },
  {
    title: 'Mantenimiento puntual',
    text: 'Intervenciones concretas para conservar la vivienda en buenas condiciones sin necesidad de realizar una reforma.',
    icon: Hammer
  }
]

const negociosBlocks = [
  {
    title: 'Tiendas y pequeños comercios',
    text: 'Ajustes, montajes, reparaciones y pequeños trabajos necesarios para mantener el espacio en buenas condiciones.',
    icon: Ruler
  },
  {
    title: 'Oficinas y espacios de trabajo',
    text: 'Mantenimiento puntual de mobiliario, iluminación, fijaciones y pequeñas adaptaciones del espacio de trabajo.',
    icon: Lightbulb
  },
  {
    title: 'Trasteros y otras propiedades',
    text: 'Mantenimiento y pequeñas reparaciones para conservar estos espacios en buenas condiciones y resolver las necesidades que puedan surgir con el tiempo.',
    icon: Droplet
  }
]

const trabajosList = [
  'Ajuste y reparación de puertas y persianas',
  'Sustitución de bisagras y pequeños herrajes',
  'Reparación y montaje de muebles',
  'Iluminación y pequeñas reparaciones eléctricas',
  'Pequeñas reparaciones de fontanería',
  'Fijación de elementos en paredes',
  'Pequeños trabajos de carpintería',
  'Revisión y diagnóstico de pequeños problemas de mantenimiento',
  'Pequeños trabajos de puesta a punto'
]

const audienceBlocks = [
  {
    title: 'Propietarios que viven fuera de Gijón',
    text: 'Si tienes una propiedad en Gijón y no puedes estar allí para ocuparte personalmente de pequeños trabajos de mantenimiento, puedes contar conmigo para revisar, solucionar y mantener al día las necesidades que puedan surgir.',
    icon: Package
  },
  {
    title: 'Segundas residencias, viviendas de uso ocasional y alquiler turístico',
    text: 'Una revisión, una reparación o una puesta a punto antes de una nueva estancia puede ayudar a mantener la vivienda en buenas condiciones, especialmente cuando permanece cerrada durante parte del año o se utiliza para alquiler turístico.',
    icon: Wrench
  },
  {
    title: 'Pequeños negocios',
    text: 'Una persona local para resolver pequeños trabajos de mantenimiento sin tener que gestionar cada necesidad con un profesional diferente.',
    icon: Ruler
  },
  {
    title: 'Agencias y profesionales',
    text: 'También puedo colaborar con agencias y otros profesionales cuando una vivienda o propiedad necesita pequeños trabajos de mantenimiento dentro del alcance de un servicio de manitas.',
    icon: Zap
  }
]

const faqItems = [
  {
    question: '¿QUÉ INCLUYE EL MANTENIMIENTO DE PROPIEDADES?',
    answer: 'Incluye pequeños trabajos de revisión, ajuste, reparación y puesta a punto que puedan realizarse directamente en la propiedad sin necesidad de una obra o instalación compleja.'
  },
  {
    question: '¿TRABAJAS CON VIVIENDAS QUE PERMANECEN VACÍAS?',
    answer: 'Sí. Puedo realizar pequeños trabajos de mantenimiento y puesta a punto en viviendas vacías, de uso ocasional o destinadas al alquiler turístico en Gijón.'
  },
  {
    question: '¿TRABAJAS CON NEGOCIOS Y LOCALES?',
    answer: 'Sí. Puedo realizar pequeños trabajos de mantenimiento en tiendas, oficinas y otros espacios, siempre que el trabajo esté dentro de los servicios que realizo.'
  },
  {
    question: '¿PUEDES ENCARGARTE DE VARIOS PEQUEÑOS TRABAJOS EN UNA MISMA VISITA?',
    answer: 'Sí, cuando los trabajos se pueden valorar y organizar previamente, puedo realizar varias pequeñas tareas en una misma intervención.'
  }
]

export default function Page() {
  const whatsapp = site.whatsappLink
  const phone = site.phoneDisplay

  return (
    <div className="min-h-screen bg-white">
      <Header whatsappLink={whatsapp} />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-gray-50 to-white border-b-4 border-black">
          <div className="container mx-auto px-4 py-12">
            <div className="grid lg:grid-cols-2 gap-8 items-stretch">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase mb-4 leading-tight">Mantenimiento de propiedades en Gijón</h1>
                <p className="font-bold text-lg text-gray-700 mb-6">Pequeños trabajos de mantenimiento, revisiones y reparaciones para viviendas, apartamentos turísticos, negocios y otras propiedades en Gijón. Un servicio local y directo para mantener cada espacio en buenas condiciones, incluso cuando no puedes ocuparte personalmente.</p>

                <div className="flex flex-wrap gap-4">
                  <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                    <button className="bg-black hover:bg-gray-800 text-white font-bold text-lg px-8 py-6 border-2 border-black shadow-[6px_6px_0px_0px_rgba(250,204,21,1)] hover:shadow-[3px_3px_0px_0px_rgba(250,204,21,1)] transition-all flex items-center">
                      <MessageCircle className="mr-2 h-6 w-6" />
                      Contactar por WhatsApp
                    </button>
                  </a>

                  <a href={`tel:${site.phoneIntl}`}>
                    <button className="inline-flex bg-white text-black font-bold text-lg px-8 py-4 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-100 transition-all items-center">
                      <Phone className="mr-2 h-6 w-6" />
                      Llamar
                    </button>
                  </a>
                </div>
              </div>

              <div className="flex relative justify-end">
                <div className="w-full lg:w-[min(80%,480px)] mt-6 lg:mt-0">
                  <HeroIllustration />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Viviendas y propiedades particulares */}
        <section className="py-12 bg-white border-b-4 border-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-black uppercase mb-4 relative inline-block">
                Mantenimiento para viviendas
                <br className="hidden md:block" />
                y propiedades particulares
                <span className="absolute -bottom-2 left-0 w-full h-2 bg-yellow-400"></span>
              </h2>

              <div className="px-4 w-full text-left mt-6 md:mt-8">
                <p className="font-bold text-gray-700">Una vivienda necesita pequeños trabajos de mantenimiento incluso cuando no hay ninguna avería importante. Revisiones, ajustes, reparaciones y pequeñas mejoras ayudan a mantener la propiedad en buen estado y a evitar que problemas sencillos se acumulen.</p>

                <p className="font-bold text-gray-700 mt-4">Trabajo directamente en viviendas de Gijón, incluyendo propiedades que permanecen vacías, segundas residencias, pisos de uso ocasional o viviendas destinadas al alquiler turístico. Puedes contar conmigo cuando necesitas resolver uno o varios pequeños trabajos sin tener que buscar un profesional diferente para cada tarea.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {viviendaBlocks.map((b, i) => {
                return (
                  <article key={i} className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white p-6 h-full flex flex-col justify-between">
                    <div>
                      <h3 className="font-black text-lg uppercase mb-4">{b.title}</h3>
                      <p className="font-bold text-gray-700">{b.text}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* Section 3: Negocios y otras propiedades */}
        <section className="py-12 bg-white border-b-4 border-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-black uppercase mb-4 relative inline-block">Mantenimiento para negocios y otras propiedades
                <span className="absolute -bottom-2 left-0 w-full h-2 bg-yellow-400"></span>
              </h2>

              <div className="px-4 w-full text-left mt-6 md:mt-8">
                <p className="font-bold text-gray-700">Los pequeños problemas también forman parte del día a día de un negocio. Un elemento de iluminación que necesita reparación, un elemento del mobiliario que necesita ajuste o una pequeña adaptación del espacio para un nuevo uso son trabajos que conviene solucionar sin convertirlos en una obra.</p>

                <p className="font-bold text-gray-700 mt-4">Ofrezco un servicio local para pequeños negocios y otras propiedades que necesitan realizar este tipo de trabajos de mantenimiento en Gijón, con trato directo y presupuesto previo.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {negociosBlocks.map((n, i) => {
                const Icon = n.icon
                return (
                  <article key={i} className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all bg-white rounded-lg overflow-hidden">
                    <div className="relative">
                      <div
                        className="w-full h-28 bg-gradient-to-br from-gray-50 to-gray-100 border-b-4 border-black flex items-center justify-center relative overflow-hidden"
                        style={{
                          backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px), radial-gradient(circle, #000 1px, transparent 1px)`,
                          backgroundSize: '4px 4px, 6px 6px',
                          backgroundPosition: '0 0, 3px 3px'
                        }}
                      >
                        <div className="relative z-10 bg-white border-4 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" style={{ transform: `rotate(${i % 2 === 0 ? '-2deg' : '2deg'})` }}>
                          <Icon className="h-10 w-10 stroke-[2.5px]" />
                        </div>

                        <div className="absolute top-3 left-3 w-12 h-1 bg-black transform -rotate-12"></div>
                        <div className="absolute top-6 left-4 w-8 h-1 bg-black transform -rotate-12"></div>
                        <div className="absolute bottom-4 right-4 w-12 h-1 bg-black transform rotate-12"></div>
                        <div className="absolute bottom-6 right-3 w-8 h-1 bg-black transform rotate-12"></div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="font-black text-lg uppercase leading-tight mb-4">{n.title}</h3>
                      <div className="text-gray-700 font-bold text-base leading-relaxed space-y-4">
                        {n.text.split('\n\n').map((para, idx) => (
                          <p key={idx} className="mb-4">{para}</p>
                        ))}
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* Section 4: ¿Qué tipo de trabajos puedo realizar? */}
        <section className="py-12 bg-white border-b-4 border-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-black uppercase mb-4 relative inline-block">¿Qué tipo de trabajos puedo realizar?
                <span className="absolute -bottom-2 left-0 w-full h-2 bg-yellow-400"></span>
              </h2>
              <p className="font-bold text-gray-700 max-w-3xl mx-auto mt-6 md:mt-8">Algunos ejemplos de trabajos que pueden formar parte del mantenimiento de una propiedad:</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {trabajosList.map((t, i) => {
                const icons = [Wrench, Package, Package, Lightbulb, Droplet, Ruler, Hammer, ClipboardCheck, Zap]
                const Icon = icons[i % icons.length]
                return (
                  <div key={i} className="flex items-center gap-4">
                    <div className="bg-[#FACC15] border-4 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
                      <Icon className="h-8 w-8 stroke-[2.5px]" />
                    </div>
                    <div className="font-black text-gray-700 uppercase text-lg md:text-xl">{t}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Section 5: ¿Para quién puede ser útil? */}
        <section className="py-12 bg-white border-b-4 border-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-black uppercase mb-4 relative inline-block">¿Para quién puede ser útil?
                <span className="absolute -bottom-2 left-0 w-full h-2 bg-yellow-400"></span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {audienceBlocks.map((a, i) => {
                const Icon = a.icon
                return (
                  <article key={i} className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all bg-white rounded-lg overflow-hidden">
                    <div className="relative">
                      <div
                        className="w-full h-28 bg-gradient-to-br from-gray-50 to-gray-100 border-b-4 border-black flex items-center justify-center relative overflow-hidden"
                        style={{
                          backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px), radial-gradient(circle, #000 1px, transparent 1px)`,
                          backgroundSize: '4px 4px, 6px 6px',
                          backgroundPosition: '0 0, 3px 3px'
                        }}
                      >
                        <div className="relative z-10 bg-white border-4 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" style={{ transform: `rotate(${i % 2 === 0 ? '-2deg' : '2deg'})` }}>
                          <Icon className="h-10 w-10 stroke-[2.5px]" />
                        </div>

                        <div className="absolute top-3 left-3 w-12 h-1 bg-black transform -rotate-12"></div>
                        <div className="absolute top-6 left-4 w-8 h-1 bg-black transform -rotate-12"></div>
                        <div className="absolute bottom-4 right-4 w-12 h-1 bg-black transform rotate-12"></div>
                        <div className="absolute bottom-6 right-3 w-8 h-1 bg-black transform rotate-12"></div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="font-black text-lg uppercase leading-tight mb-4">{a.title}</h3>
                      <div className="text-gray-700 font-bold text-base leading-relaxed space-y-4">
                        {a.text.split('\n\n').map((para, idx) => (
                          <p key={idx} className="mb-4">{para}</p>
                        ))}
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* Section 6: Editorial */}
        <section className="py-12 bg-white border-b-4 border-black">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 relative inline-block">Un servicio de mantenimiento práctico, no una gestión inmobiliaria
                <span className="absolute -bottom-2 left-0 w-full h-2 bg-yellow-400"></span>
              </h2>
              <p className="font-bold text-gray-700 mt-6 md:mt-8">Costa Manitas no es una empresa de administración de fincas ni de gestión de alquileres. Tampoco realizo limpieza profesional, vigilancia o mantenimiento integral de edificios.

Me centro en pequeños trabajos de mantenimiento, revisiones, ajustes y reparaciones que puedo realizar personalmente en viviendas, negocios y otras propiedades de Gijón. Cuando una incidencia requiere un profesional especializado o una intervención fuera de mi alcance, lo indico antes de asumir el trabajo.</p>
            </div>
          </div>
        </section>

        {/* Section 7: FAQ */}
        <section className="py-12 md:py-20 bg-white border-b-4 border-black">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-black uppercase relative inline-block">FAQ
                <span className="absolute -bottom-2 left-0 w-full h-2 bg-yellow-400"></span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <FAQClient items={faqItems} />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12 bg-white border-b-4 border-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-4 relative inline-block">¿Necesitas mantener una propiedad en Gijón?
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-yellow-400"></span>
            </h2>
            <p className="font-bold text-gray-700 mt-6 md:mt-8 mb-6">Cuéntame qué necesitas y podemos valorar la mejor forma de resolverlo.</p>

            <div className="flex justify-center">
              <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                <button className="bg-black hover:bg-gray-800 text-white font-bold text-lg px-8 py-6 border-2 border-black shadow-[6px_6px_0px_0px_rgba(250,204,21,1)] hover:shadow-[3px_3px_0px_0px_rgba(250,204,21,1)] transition-all flex items-center">
                  <MessageCircle className="mr-2 h-6 w-6" />
                  Contactar por WhatsApp
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
