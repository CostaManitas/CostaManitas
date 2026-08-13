'use client'

import site from "../data/site"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 border-t-4 border-black">
      <div className="container mx-auto px-4 text-center">
  		<p className="text-sm text-gray-400 max-w-3xl mx-auto mb-4">
  Costa Manitas es un servicio local de pequeñas reparaciones y mantenimiento del hogar en Gijón. Trabajo directamente en viviendas y pequeños negocios, por lo que no dispongo de local abierto al público.
</p>
          <p className="font-bold text-lg mb-2">{site.siteName}</p>
         <p className="text-sm font-bold text-gray-400">
          Tu manitas de confianza · WhatsApp: {site.phoneIntlSpaced}
        </p>

		<p className="text-[10px] text-gray-600 mt-1">
		  Contacto directo: {site.phoneIntl}
		</p>
        </div>
      </footer>
  )
}
