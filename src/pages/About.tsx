import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function About(){
  return (
    <div className="min-h-screen text-[var(--fg)] bg-[var(--bg)]">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-12 pt-20">
        <header className="mb-8">
          <h1 className="display-subtitle text-4xl font-bold">Our Story</h1>
        </header>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl font-semibold">Big Daddy Media & PR</h2>
            <p className="mt-4 text-muted-dark">Big Daddy Media & PR was founded by Celine after realizing most brands aren’t struggling with content, they’re struggling to actually connect with people. Because posting more doesn’t fix anything if no one cares or converts.</p>

            <p className="mt-4 text-muted-dark">After years of working behind the scenes in social media, creator marketing, and brand strategy, we saw the same pattern over and over. Brands were playing it safe, blending in, and wondering why nothing was converting.</p>

            <p className="mt-4 text-muted-dark">Big Daddy was created to change that. We exist to help brands step outside the box, take creative risks, and show up in a way that actually gets attention. Through creator-driven content, strategic partnerships, and bold storytelling, we turn passive audiences into engaged communities.</p>

            <h3 className="mt-6 font-semibold">Our Vision</h3>
            <p className="mt-2 text-muted-dark">We’re building a creator-powered ecosystem where brands and creators collaborate to produce content that people actually care about. Our vision is to redefine how brands grow online by making content feel human, not manufactured. We believe the future of marketing isn’t polished… it’s real, disruptive, and driven by creators who understand culture. And we’re here to lead that shift.</p>

            {/* <h3 className="mt-6 font-semibold">Client Application</h3>
            <p className="mt-2 text-muted-dark">This application is for business owners who are ready to invest in high-level social media and marketing services. Our monthly packages start at $1000/month with a minimum 3-month commitment. If you’re not financially ready to commit to this level of service, please do not submit this form.</p> */}
          </div>

          <aside className="rounded-lg overflow-hidden">
            <img src="/images/image-03.png" alt="Celine" className="w-full h-auto object-cover rounded-lg shadow" />
            <div className="p-4 bg-white/6 card-border">
              <div className="font-semibold">Celine — Founder</div>
              <div className="mt-1 text-muted-dark text-sm">Founder, strategist, and creator-led marketer.</div>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  )
}
