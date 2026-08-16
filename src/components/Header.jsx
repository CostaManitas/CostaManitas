'use client'

import { MessageCircle, Menu, X } from "lucide-react"
import site from "../data/site"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Header({ whatsappLink = site.whatsappLink }) {
  const pathname = usePathname() || '/'
  const [open, setOpen] = useState(false)

  const nav = [
    { label: 'Inicio', href: '/' },
    { label: 'Reparaciones', href: '/pequenas-reparaciones-hogar-gijon/' },
    { label: 'Mantenimiento', href: '/mantenimiento-propiedades-gijon/' }
  ]

  function handleNavigate() {
    setOpen(false)
  }

  return (
    <header className="border-b-4 border-black bg-white sticky top-0 z-40">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-3 md:py-4 flex items-center">
        <div className="flex items-center gap-4">
          <img
            src="/logo.png"
            alt="Costa Manitas Gijón"
            className="h-20 w-auto"
          />
          <div>
            <div className="text-2xl md:text-3xl font-black uppercase tracking-tight">COSTA MANITAS</div>
            <p className="text-xs md:text-sm font-bold">Tu manitas de confianza</p>
          </div>
        </div>

        <div className="flex-1" />

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-3 md:gap-4 lg:gap-6 mr-2 md:mr-4 lg:mr-6">
          {nav.map((n) => {
            const normalize = (s) => {
              if (!s) return '/'
              // ensure leading slash and remove trailing slashes
              const withLead = s.startsWith('/') ? s : '/' + s
              if (withLead === '/') return '/'
              return withLead.replace(/\/+$/, '')
            }
            const p = normalize(pathname)
            const h = normalize(n.href)
            const active = p === h
            return (
              <Link key={n.href} href={n.href} className={`font-black uppercase text-sm md:text-base lg:text-lg whitespace-nowrap ${active ? 'text-black border-b-4 border-yellow-400 pb-2' : 'text-gray-800 hover:text-black'}`}>
                {n.label}
              </Link>
            )
          })}
        </nav>

        {/* WhatsApp CTA (desktop visible) */}
        <div className="hidden md:block">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" data-testid="header-whatsapp-btn">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold border-4 border-black transition-all inline-flex items-center justify-center text-sm md:text-base md:px-0 md:py-0 lg:px-6 lg:py-3 md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:w-12 md:h-12 lg:w-auto lg:h-auto overflow-hidden">
              <MessageCircle className="h-6 w-6 md:h-6 md:w-6 lg:h-8 lg:w-8 lg:mr-3" />
              <span className="hidden lg:inline text-center leading-tight">Contactar WhatsApp</span>
            </button>
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="ml-4 md:hidden">
          <button onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Chiudi menu' : 'Apri menu'} className="p-2 border-4 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden border-b-4 border-black bg-white">
          <div className="px-4 py-4 space-y-2">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} onClick={handleNavigate} className="block text-lg font-black uppercase py-3 border-b border-gray-100" role="menuitem">
                {n.label}
              </Link>
            ))}

            <div className="pt-2">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block">
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold border-4 border-black py-3">
                  <MessageCircle className="inline-block h-5 w-5 mr-2 align-middle" /> Contactar WhatsApp
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
