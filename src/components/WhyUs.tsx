import React from 'react'
export default function WhyUs(){
  return (
    <section id="about" className="py-20 border-t border-white/6">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3">
          <h2 className="bauhaus display-subtitle text-3xl font-bold h-condensed">Big Daddy Media & PR</h2>
          <svg className="w-6 h-6 text-[var(--cherry)]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" className="circle-outline" />
          </svg>
        </div>

        <div className="mt-4 grid gap-8 md:grid-cols-2">
          <div className="max-w-3xl">
            <h4 className="font-semibold">Our Story</h4>
            <p className="mt-2 text-muted-dark">Founded by Celine, Big Daddy Media & PR was built from a simple realization: most brands don’t have a content problem… they have a connection problem. After years of working behind the scenes in social media, creator marketing, and brand strategy, we saw the same pattern over and over. Brands were playing it safe, blending in, and wondering why nothing was converting. Big Daddy was created to change that.</p>

            <p className="mt-4 text-muted-dark">We exist to help brands step outside the box, take creative risks, and show up in a way that actually gets attention. Through creator-driven content, strategic partnerships, and bold storytelling, we turn passive audiences into engaged communities.</p>

            <div className="inner-divider mt-6" />

            <h4 className="mt-6 font-semibold">Our Vision</h4>
            <p className="mt-2 text-muted-dark">We’re building more than a marketing agency. We’re building a creator-powered ecosystem where brands and creators collaborate to produce content that people actually care about. Our vision is to redefine how brands grow online by making content feel human, not manufactured. We believe the future of marketing isn’t polished… it’s real, disruptive, and driven by creators who understand culture. And we’re here to lead that shift.</p>
          </div>

          <aside className="max-w-md">
            <div className="card-bg card-border p-5">
              <h5 className="font-semibold">What we offer</h5>
              <ul className="mt-3 list-disc list-inside text-muted-dark space-y-2">
                <li>Content Creation & Social Media Management</li>
                <li>Community Engagement</li>
                <li>Short Form Video Content</li>
                <li>Strategy Development</li>
                <li>Consultation</li>
                <li>Campaign Strategy</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
