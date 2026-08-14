"use client"

import { useState, useEffect } from "react"

export default function HeroRandomImage({ trabajos = [] }) {
  const visible = trabajos.filter(t => t.visible)
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if (visible.length === 0) return
    const idx = Math.floor(Math.random() * visible.length)
    setSelected(visible[idx])
  }, [])

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-yellow-400 border-4 border-black rotate-3 rounded-lg"></div>
      {selected && (
        <img src={selected.image} alt={selected.title} className="relative border-4 border-black rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] w-full" />
      )}
    </div>
  )
}
