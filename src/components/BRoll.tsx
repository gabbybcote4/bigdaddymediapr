import React from 'react'
import { Play } from 'lucide-react'

const items = new Array(6).fill(0).map((_,i)=>({ id: i, title: `Clip ${i+1}` }))

export default function BRoll(){
  return (
    <section id="broll" className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-6">
          <h2 className="display-subtitle">Clean aesthetic B‑roll</h2>
          <p className="mt-3 text-muted-dark max-w-2xl">Short-form, editorial B‑roll visuals — simple, versatile assets you can cut into reels and ads.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {items.map(it=> (
            <div key={it.id} className="broll-card group relative overflow-hidden">
              <div className="broll-thumb relative" style={{backgroundImage: 'linear-gradient(135deg, rgba(40,40,40,0.02), rgba(40,40,40,0.0))'}}>
                {/* circle outline top-left */}
                <div className="absolute left-4 top-4 circle-outline">
                  <svg width="48" height="48" viewBox="0 0 48 48"><circle cx="24" cy="24" r="20" /></svg>
                </div>
                {/* small arrow pointing to title */}
                <div className="absolute right-3 top-8 overlay-arrow">
                  <svg viewBox="0 0 24 16" width="56" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 8h18M18 4l4 4-4 4" stroke="white" strokeOpacity={0.9} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="broll-overlay w-full">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-dark">{it.title}</div>
                    <button aria-label={`Play ${it.title}`} className="p-2 bg-white/6 rounded hover:bg-white/10 transition relative">
                      <Play size={16} className="text-[var(--coal)]" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="text-sm text-muted-dark">Short loop | 6–12s</div>
                <div className="mt-2 text-[var(--coal)] font-semibold"><span className="subtitle-highlight">Light</span>, editorial motion</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
