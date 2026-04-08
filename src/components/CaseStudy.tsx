import React from 'react'
import { CASE_STUDY } from '../data/constants'

export default function CaseStudy(){
  return (
    <section id="case" className="py-20 border-t border-white/6">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3">
          <h2 className="bauhaus display-subtitle text-3xl font-bold h-condensed">{CASE_STUDY.headline}</h2>
          <svg className="w-6 h-6 text-[var(--cherry)]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" className="circle-outline" />
          </svg>
        </div>
        <div className="mt-6 grid md:grid-cols-2 gap-8 items-start">
          <div className="card-bg card-border rounded-lg p-6">
            <h4 className="font-semibold">Overview</h4>
            <p className="mt-2 text-muted-dark">{CASE_STUDY.overview}</p>
            <h4 className="mt-4 font-semibold">Deliverables</h4>
            <ul className="mt-2 text-muted-dark space-y-2">{CASE_STUDY.deliverables.map(d => (<li key={d}>• {d}</li>))}</ul>
          </div>

          <div className="rounded-lg p-6 card-gradient card-border">
            <h4 className="font-semibold">Approach</h4>
            <p className="mt-2 text-muted-dark">{CASE_STUDY.approach}</p>
            <h4 className="mt-6 font-semibold">Result</h4>
            <p className="mt-2 text-muted-dark">{CASE_STUDY.result}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
