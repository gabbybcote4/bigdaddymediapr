import React from 'react'
import { SERVICES, SERVICES_CATEGORIES } from '../data/constants'
import { motion } from 'framer-motion'

export default function Services(){
  return (
    <section id="services" className="py-20 border-t border-white/6">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3">
          <h2 className="bauhaus display-subtitle text-3xl font-bold h-condensed">What we do</h2>
          <svg className="w-6 h-6 text-[var(--cherry)]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" className="circle-outline" />
          </svg>
        </div>

  <p className="mt-3 text-muted-dark max-w-2xl">We build campaigns and systems for brands who want high-quality attention, consistent creative output, and measurable growth.</p>
        {/* Multi-column services list inspired by reference: category headings + item lists */}
        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES_CATEGORIES.map(cat => (
              <div key={cat.category}>
                <h4 className="text-[var(--candy)] font-semibold tracking-wide text-sm uppercase">{cat.category}</h4>
                <ul className="mt-4 space-y-3">
                  {cat.items.map(item => (
                    <li key={item} className="text-muted-dark text-sm leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
