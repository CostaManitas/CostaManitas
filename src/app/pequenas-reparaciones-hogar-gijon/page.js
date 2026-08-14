import Header from "../../components/Header"
import Footer from "../../components/Footer"
import site from "../../data/site"
import Link from "next/link"
import { MessageCircle, Gavel, Phone } from "lucide-react"

export const metadata = {
  title: 'Pequeñas reparaciones y mantenimiento del hogar en Gijón',
}

export default function Page() {
  const whatsapp = site.whatsappLink
  const phone = site.phoneDisplay

  const categories = [
    'Montaje y adaptación de muebles',
    'Puertas y persianas',
    'Iluminación y pequeñas reparaciones eléctricas',
    'Paredes y accesorios',
    'Carpintería y reparaciones puntuales',
    'Mantenimiento del hogar'
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header whatsappLink={whatsapp} />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-gray-50 to-white border-b-4 border-black">
          <div className="container mx-auto px-4 py-12">
            <div className="grid lg:grid-cols-2 gap-8 items-stretch">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase mb-4 leading-tight">
                  Pequeñas reparaciones y mantenimiento del hogar en Gijón
                </h1>
                <p className="font-bold text-lg text-gray-700 mb-6">[Introducción breve — contenido definitivo pendiente]</p>

                <div className="flex flex-wrap gap-4">
                  <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                    <button className="bg-black hover:bg-gray-800 text-white font-bold text-lg px-8 py-6 border-2 border-black shadow-[6px_6px_0px_0px_rgba(250,204,21,1)] hover:shadow-[3px_3px_0px_0px_rgba(250,204,21,1)] transition-all flex items-center">
                      <MessageCircle className="mr-2 h-6 w-6" />
                      WhatsApp: {phone}
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
                <div className="w-full lg:w-[min(80%,480px)] aspect-[4/3] bg-gray-100 border-4 border-black rounded-lg overflow-hidden mt-6 lg:mt-0">
                  <span className="font-black uppercase flex items-center justify-center w-full h-full">IMAGEN DEL TRABAJO</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12 bg-white border-b-4 border-black">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl md:max-w-5xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-black uppercase mb-8 relative inline-block">¿Qué tipo de trabajos realizo?
                <span className="absolute -bottom-2 left-0 w-full h-2 bg-yellow-400"></span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 
              {categories.map((c, i) => (
                <div key={i} className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1 bg-white rounded-lg overflow-hidden">
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

                      <div className="relative z-10 bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" style={{ transform: `rotate(${i % 2 === 0 ? '-2deg' : '2deg'})` }}>
                        <Gavel className="h-12 w-12 stroke-[2.5px]" />
                      </div>

                      <div className="absolute top-4 left-4 w-12 h-1 bg-black transform -rotate-12"></div>
                      <div className="absolute top-6 left-3 w-8 h-1 bg-black transform -rotate-12"></div>
                      <div className="absolute bottom-4 right-4 w-12 h-1 bg-black transform rotate-12"></div>
                      <div className="absolute bottom-6 right-3 w-8 h-1 bg-black transform rotate-12"></div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-black text-lg uppercase leading-tight mb-3">{c}</h3>
                    <p className="text-gray-700 font-bold text-base leading-relaxed">[Texto provisional — contenido pendiente]</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trabajos reales */}
        <section className="py-12 bg-white border-b-4 border-black">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-black uppercase mb-8 relative inline-block">Trabajos reales en viviendas de Gijón
                <span className="absolute -bottom-2 left-0 w-full h-2 bg-yellow-400"></span>
              </h2>
            </div>
            <p className="font-bold text-gray-700 mb-6 text-center">[Colección de trabajos reales — imágenes pendientes]</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[1,2,3,4,5,6].map((n) => (
                <article key={n} className="border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden rounded-lg hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                  <div className="w-full h-36 bg-gray-200 border-b-4 border-black flex items-center justify-center">
                    <span className="font-black uppercase text-sm text-gray-500">IMAGEN PENDIENTE</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-black uppercase text-sm mb-2">[Título provisional]</h3>
                    <p className="font-bold text-gray-700 text-sm">[Descripción provisional]</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-8">
              <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                <button className="bg-black hover:bg-gray-800 text-white font-bold text-lg px-8 py-6 border-2 border-black shadow-[6px_6px_0px_0px_rgba(250,204,21,1)] hover:shadow-[3px_3px_0px_0px_rgba(250,204,21,1)] transition-all flex items-center justify-center mx-auto">
                  <MessageCircle className="mr-2 h-6 w-6" />
                  WhatsApp: {phone}
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* Cómo trabajo */}
        <section className="py-12 bg-white border-b-4 border-black">
          <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-black uppercase mb-8 relative inline-block">Cómo trabajo
                  <span className="absolute -bottom-2 left-0 w-full h-2 bg-yellow-400"></span>
                </h2>
              </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="border-4 border-black p-6 bg-gray-50 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-black mb-2">1. Me explicas qué necesitas</h3>
                <p className="font-bold text-gray-700">[Texto provisional]</p>
              </div>
              <div className="border-4 border-black p-6 bg-gray-50 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-black mb-2">2. Valoro el trabajo</h3>
                <p className="font-bold text-gray-700">[Texto provisional]</p>
              </div>
              <div className="border-4 border-black p-6 bg-gray-50 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-black mb-2">3. Te doy presupuesto antes de empezar</h3>
                <p className="font-bold text-gray-700">[Texto provisional]</p>
              </div>
              <div className="border-4 border-black p-6 bg-gray-50 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-black mb-2">4. Realizo el trabajo directamente en tu vivienda</h3>
                <p className="font-bold text-gray-700">[Texto provisional]</p>
              </div>
            </div>
          </div>
        </section>

        {/* Qué no realizo */}
        <section className="py-12 bg-white border-b-4 border-black">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-black uppercase mb-8 relative inline-block">¿Qué tipo de trabajos no realizo?
                <span className="absolute -bottom-2 left-0 w-full h-2 bg-yellow-400"></span>
              </h2>
            </div>
            <div className="border-4 border-black p-6 bg-gray-50 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg">
              <p className="font-bold text-gray-700">No realizo grandes reformas, obras completas ni instalaciones complejas. Mi trabajo está centrado en pequeñas reparaciones, montajes, ajustes y mantenimiento puntual.</p>
            </div>
          </div>
        </section>

        {/* CTA final + link placeholder to Page 2 */}
        <section className="py-12 bg-white border-b-4 border-black">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-black uppercase mb-8 relative inline-block">¿Tienes un pequeño arreglo pendiente?
                <span className="absolute -bottom-2 left-0 w-full h-2 bg-yellow-400"></span>
              </h2>
            </div>
            <p className="font-bold text-gray-700 mb-6">Cuéntame qué necesitas y te diré si puedo ayudarte.</p>

            <div className="flex justify-center gap-4 mb-6">
              <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                <button className="bg-black hover:bg-gray-800 text-white font-bold text-lg px-8 py-6 border-2 border-black shadow-[6px_6px_0px_0px_rgba(250,204,21,1)] hover:shadow-[3px_3px_0px_0px_rgba(250,204,21,1)] transition-all flex items-center justify-center mx-auto">
                  <MessageCircle className="mr-2 h-6 w-6" />
                  WhatsApp: {phone}
                </button>
              </a>

              <a href={`tel:${site.phoneIntl}`}>
                <button className="inline-flex bg-white text-black font-bold text-lg px-8 py-4 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-100 transition-all items-center justify-center mx-auto">
                  <Phone className="mr-2 h-6 w-6" />
                  Llamar
                </button>
              </a>
            </div>

            <div className="mt-8">
              <div className="inline-block border-4 border-black p-4 bg-gray-50">
                <p className="font-bold">¿Necesitas mantenimiento de una vivienda, trastero o propiedad? También realizo trabajos de mantenimiento puntual para propietarios y pequeñas propiedades en Gijón.</p>
                <div className="mt-4">
                  <button disabled className="bg-white text-black font-bold px-6 py-3 border-2 border-black opacity-60">Ver mantenimiento de propiedades (Próximamente)</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
