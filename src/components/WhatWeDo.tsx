import { SERVICES_CATEGORIES } from '../data/constants'

export default function WhatWeDo(){
  return (
    <section id="services" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold bauhaus">What We Do</h2>
        <p className="mt-3 text-muted-dark max-w-2xl">We build short-form creative systems, manage creator relationships, and run campaigns that drive attention and sales.</p>

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
