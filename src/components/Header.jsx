'use client'

import { MessageCircle } from "lucide-react"
import site from "../data/site"

export default function Header({ whatsappLink = site.whatsappLink }) {
  return (
    <header className="border-b-4 border-black bg-white sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="/logo.png"
            alt="Costa Manitas Gijón"
            className="h-20 w-auto"
          />
          <div>
            <div className="text-2xl md:text-3xl font-black uppercase tracking-tight">{site.siteName}</div>
            <p className="text-xs md:text-sm font-bold">Tu manitas de confianza</p>
          </div>
        </div>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" data-testid="header-whatsapp-btn">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold border-4 border-black transition-all flex items-center justify-center
		  md:px-6 md:py-3 md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
		  p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">

		  <MessageCircle className="h-5 w-5 md:mr-2" />

		  <span className="hidden md:inline">
			Contactar WhatsApp
		  </span>
		</button>
        </a>
      </div>
    </header>
  )
}
