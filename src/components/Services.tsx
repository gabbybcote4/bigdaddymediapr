import React from 'react'
import { SERVICES } from '../data/constants'
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

        <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, idx) => (
            <motion.div key={s.id} whileHover={{ y: -6 }} className="p-6 card-bg card-border relative overflow-hidden">
              {idx === 0 && (
                <svg className="absolute -top-3 -right-3 w-16 h-16 text-[var(--cherry)] opacity-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M3 12a9 9 0 1118 0 9 9 0 01-18 0z" stroke="currentColor" strokeWidth="1.5" className="circle-outline" />
                </svg>
              )}
              <h4 className="font-semibold text-lg">{s.title}</h4>
              {s.tagline && <div className="mt-2 text-[var(--cherry)] font-semibold">{s.tagline}</div>}
              <p className="mt-3 text-muted-dark text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
