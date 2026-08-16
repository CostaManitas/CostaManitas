"use client"

import React, { useState } from "react"

export default function FAQClient({ items = [] }) {
  return (
    <div>
      {items.map((item, index) => (
        <FAQItem key={index} item={item} />
      ))}
    </div>
  )
}

function FAQItem({ item }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b-4 border-black">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-6 flex justify-between items-center font-black uppercase text-lg"
      >
        {item.question}
        <span className="text-2xl">{open ? '−' : '+'}</span>
      </button>

      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="font-bold text-gray-700 whitespace-pre-line leading-relaxed">{item.answer}</p>
      </div>
    </div>
  )
}
