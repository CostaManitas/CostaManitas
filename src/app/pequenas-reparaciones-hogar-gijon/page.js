import Header from "../../components/Header"
import Footer from "../../components/Footer"
import site from "../../data/site"
import trabajos from "../../data/trabajos"
import Link from "next/link"
import { MessageCircle, Phone, Package, Wrench, Ruler, Zap, Hammer, Droplet } from "lucide-react"
import HeroRandomImage from "../../components/HeroRandomImage"

export const metadata = {
  title: 'Pequeñas reparaciones y mantenimiento del hogar en Gijón',
}

export default function Page() {
  const whatsapp = site.whatsappLink
  const phone = site.phoneDisplay

  const categories = [
          {
            title: 'Montaje y adaptación de muebles',
            anchor: 'montaje-adaptacion-muebles',
            description: `Realizo el montaje de armarios, muebles auxiliares, estanterías, muebles de cocina y otros elementos para el hogar, siguiendo las instrucciones del fabricante y adaptando el montaje cuando las características del espacio o del propio mueble lo requieren.

También puedo ocuparme de muebles que ya han sido desmontados y necesitan volver a montarse, así como de pequeños ajustes para que puertas, cajones, baldas y otros elementos queden correctamente colocados y funcionen como deben.

Trabajo con muebles de diferentes fabricantes y modelos, adaptándome a las instrucciones y a las particularidades de cada montaje. Puedo realizar tanto montajes nuevos como pequeñas adaptaciones o ajustes necesarios para que el mueble quede bien instalado y listo para utilizar.`
          },
          {
            title: 'Puertas, persianas y herrajes',
            anchor: 'puertas-persianas-herrajes',
            description: `Realizo pequeñas reparaciones y ajustes en puertas, persianas y elementos de herraje de muebles y viviendas. Esto incluye la sustitución y ajuste de bisagras, reparación de puntos de fijación, cambio de manillas, tornillería y otros herrajes deteriorados.

Una parte habitual de estos trabajos consiste en recuperar puertas que ya no cierran correctamente, quedan desalineadas o tienen las fijaciones dañadas. En muebles de cocina y armarios puedo realizar el cambio de bisagras, reparar la zona de madera donde estaban fijadas y volver a ajustar las puertas para recuperar su funcionamiento.

También puedo solucionar pequeños problemas de fijación en manillas y otros herrajes cuando los agujeros originales están deteriorados o ya no permiten una sujeción adecuada. El objetivo es recuperar la funcionalidad del elemento sin necesidad de sustituir todo el mueble o la puerta.`
          },
          {
            title: 'Instalación de elementos en paredes',
            anchor: 'instalacion-elementos-paredes',
            description: `Instalo y fijo distintos elementos en paredes, adaptando el sistema de fijación al tipo de pared, al peso del elemento y a las condiciones concretas del lugar. El objetivo es conseguir una instalación estable, nivelada y correctamente terminada.

Realizo la instalación de espejos, baldas y estanterías, soportes de televisión, barras para cortinas, cabeceros, pequeños muebles suspendidos y otros elementos decorativos o funcionales. Cuando es necesario, compruebo previamente la zona de trabajo para elegir el sistema de fijación más adecuado y realizar las perforaciones con seguridad.

También me ocupo de la nivelación y del ajuste final. Por ejemplo, un espejo grande y pesado puede necesitar un sistema de fijación específico, mientras que una serie de estanterías requiere especial atención a las medidas y a la alineación para que el resultado sea uniforme.`
          },
          {
            title: 'Iluminación y pequeñas reparaciones eléctricas',
            anchor: 'iluminacion-pequenas-reparaciones-electricas',
            description: `Realizo trabajos sencillos de electricidad relacionados con elementos existentes de la vivienda, como instalación o sustitución de lámparas, apliques, interruptores, enchufes y timbres.

También puedo realizar pequeñas adaptaciones cuando la instalación existente necesita una solución práctica para colocar un elemento en una nueva posición. Por ejemplo, puedo adaptar la fijación y la conexión de una lámpara cuando el punto eléctrico y el punto de fijación no coinciden, o realizar pequeñas modificaciones para colocar correctamente un interruptor o una toma.

Son intervenciones puntuales sobre instalaciones domésticas existentes. No realizo instalaciones eléctricas completas ni trabajos que requieran una intervención especializada de mayor alcance, pero sí pequeñas reparaciones y mejoras que permiten solucionar problemas habituales de iluminación y electricidad básica en una vivienda.`
          },
          {
            title: 'Carpintería, madera y acabados',
            anchor: 'carpinteria-madera-acabados',
            description: `Realizo pequeños trabajos de carpintería y reparación de elementos de madera, especialmente cuando una pieza, una fijación o un acabado se ha deteriorado y puede recuperarse sin necesidad de sustituir todo el elemento.

Los trabajos pueden incluir reparación y refuerzo de madera, creación de nuevos puntos de fijación, pequeños cortes y adaptaciones, reparación de zócalos, listones y otros elementos, así como trabajos de acabado como barnizado, esmalte y protección de superficies cuando el trabajo lo requiere.

Por ejemplo, puedo reparar una zona de madera dañada donde estaba fijada una bisagra, adaptar un zócalo de cocina para dejar espacio a una nueva lavavajillas o recuperar pequeños listones de parquet que se hayan despegado. También realizo retoques y acabados para proteger o mejorar el aspecto de elementos de madera y metal, incluyendo la aplicación de productos antióxido cuando corresponde.

El objetivo es solucionar el problema de forma precisa y aprovechar el elemento existente siempre que sea posible, evitando sustituciones innecesarias.`
          },
          {
            title: 'Fontanería y mantenimiento del hogar',
            anchor: 'fontaneria-mantenimiento-hogar',
            description: `Realizo pequeños trabajos de fontanería y mantenimiento general de la vivienda que pueden resolverse sin una obra o una instalación compleja. Son intervenciones puntuales destinadas a solucionar pequeños problemas, sustituir elementos sencillos o mantener la vivienda en buen estado.

Dentro de este tipo de trabajos se incluyen, por ejemplo, cambios de grifos y otros mecanismos sencillos, pequeños ajustes, revisiones y trabajos de puesta a punto. También puedo ayudarte con pequeñas tareas de mantenimiento que aparecen con el uso habitual de una vivienda y que necesitan una solución práctica.

El mantenimiento periódico y las pequeñas reparaciones permiten mantener una vivienda en buenas condiciones y evitar que problemas menores terminen convirtiéndose en intervenciones más importantes. Mi trabajo está orientado precisamente a este tipo de necesidades puntuales, directamente en viviendas de Gijón.`
          }
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
                <p className="font-bold text-lg text-gray-700 mb-6">Realizo pequeñas reparaciones, montajes, ajustes y trabajos de mantenimiento directamente en viviendas de Gijón. Me ocupo de esos trabajos que necesitan una solución práctica y cuidada, pero que no requieren una gran reforma. Te explico lo que necesita el trabajo y te doy presupuesto antes de empezar.</p>

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
                <div className="w-full lg:w-[min(80%,480px)] mt-6 lg:mt-0">
                  <HeroRandomImage trabajos={trabajos.filter(t => t.visible)} />
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
                <article id={c.anchor} key={i} className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all bg-white rounded-lg overflow-hidden">
                  <div className="relative">
                    <div
                      className="w-full h-32 bg-gradient-to-br from-gray-50 to-gray-100 border-b-4 border-black flex items-center justify-center relative overflow-hidden"
                      style={{
                        backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px), radial-gradient(circle, #000 1px, transparent 1px)`,
                        backgroundSize: '4px 4px, 6px 6px',
                        backgroundPosition: '0 0, 3px 3px'
                      }}
                    >
                      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, black 0, black 2px, transparent 2px, transparent 8px)' }}></div>

                      <div className="relative z-10 bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" style={{ transform: `rotate(${i % 2 === 0 ? '-2deg' : '2deg'})` }}>
                        {(() => {
                          const icons = [Package, Wrench, Ruler, Zap, Hammer, Droplet]
                          const Icon = icons[i % icons.length]
                          return <Icon className="h-12 w-12 stroke-[2.5px]" />
                        })()}
                      </div>

                      <div className="absolute top-4 left-4 w-12 h-1 bg-black transform -rotate-12"></div>
                      <div className="absolute top-6 left-3 w-8 h-1 bg-black transform -rotate-12"></div>
                      <div className="absolute bottom-4 right-4 w-12 h-1 bg-black transform rotate-12"></div>
                      <div className="absolute bottom-6 right-3 w-8 h-1 bg-black transform rotate-12"></div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-black text-lg uppercase leading-tight mb-4">{c.title}</h3>
                    <div className="text-gray-700 font-bold text-base leading-relaxed space-y-4">
                      {c.description.split('\n\n').map((para, idx) => (
                        <p key={idx} className="mb-4">{para}</p>
                      ))}
                    </div>
                  </div>
                </article>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {trabajos
                .filter(t => t.visible)
                .slice(0, 6)
                .map((trabajo) => (
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

            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative border-4 border-black p-6 bg-gray-50 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <div className="absolute left-1 text-4xl md:text-5xl font-black text-black leading-none" style={{top: '-0.0625rem', textShadow: '2px 2px 0px #FACC15'}}>1</div>
                  <div className="pt-4">
                    <h3 className="font-black mb-2">Me explicas qué necesitas</h3>
                    <p className="font-bold text-gray-700">Puedes contarme el problema por WhatsApp o teléfono y enviar fotografías si ayudan a entender el trabajo.</p>
                  </div>
                </div>

                <div className="relative border-4 border-black p-6 bg-gray-50 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <div className="absolute left-1 text-4xl md:text-5xl font-black text-black leading-none" style={{top: '-0.0625rem', textShadow: '2px 2px 0px #FACC15'}}>2</div>
                  <div className="pt-4">
                    <h3 className="font-black mb-2">Valoro el trabajo</h3>
                    <p className="font-bold text-gray-700">Reviso lo que necesitas y, cuando es necesario, valoro el trabajo directamente en la vivienda.</p>
                  </div>
                </div>

                <div className="relative border-4 border-black p-6 bg-gray-50 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <div className="absolute left-1 text-4xl md:text-5xl font-black text-black leading-none" style={{top: '-0.0625rem', textShadow: '2px 2px 0px #FACC15'}}>3</div>
                  <div className="pt-4">
                    <h3 className="font-black mb-2">Te doy presupuesto antes de empezar</h3>
                    <p className="font-bold text-gray-700">Antes de comenzar te explico qué se va a hacer y cuál es el presupuesto acordado.</p>
                  </div>
                </div>

                <div className="relative border-4 border-black p-6 bg-gray-50 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <div className="absolute left-1 text-4xl md:text-5xl font-black text-black leading-none" style={{top: '-0.0625rem', textShadow: '2px 2px 0px #FACC15'}}>4</div>
                  <div className="pt-4">
                    <h3 className="font-black mb-2">Realizo el trabajo directamente en tu vivienda</h3>
                    <p className="font-bold text-gray-700">Realizo el trabajo de forma directa, cuidando tanto la solución como los ajustes y el acabado final.</p>
                  </div>
                </div>
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
                  <a href="/mantenimiento-propiedades-gijon/">
                    <button className="bg-white text-black font-bold px-6 py-3 border-2 border-black">Mantenimiento de propiedades en Gijón</button>
                  </a>
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
