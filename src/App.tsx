import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Pricing from './components/Pricing'
import CaseStudy from './components/CaseStudy'
import WhyUs from './components/WhyUs'
import CTA from './components/CTA'
import Footer from './components/Footer'
import WhatWeDo from './components/WhatWeDo'
import Portfolio from './components/Portfolio'
import ScrollTop from './components/ScrollTop'

export default function App(){
  return (
  <div className="min-h-screen text-[var(--fg)]">
      <Navbar />
  <main id="main" role="main" className="overflow-x-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <Hero />
          <WhatWeDo />
          <Portfolio />
          <section id="problem" className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold h-condensed">The problems we fix</h2>
              <p className="mt-4 text-muted-dark">We help brands stuck in reactive posting, low engagement, and messy influencer efforts. You get strategy-driven creative, predictable systems, and campaigns that actually move the needle.</p>
              <ul className="mt-6 space-y-3 text-muted-dark">
                <li>• Inconsistent content and brand voice</li>
                <li>• No clear strategy or measurable goals</li>
                <li>• Low engagement and audience stagnation</li>
                <li>• Complex influencer campaigns that drain time</li>
              </ul>
            </div>
            <div className="card-bg p-8 rounded-lg">
              <h4 className="text-xl font-semibold">Our answer</h4>
              <p className="mt-4 text-muted-dark">A creative + operations playbook: tight strategy, repeatable content systems, performance measurement, and dedicated campaign management.</p>
              <div className="mt-6 flex gap-4">
                <a href="#pricing" className="px-5 py-3 bg-[var(--candy)] text-white rounded-md font-semibold">See Packages</a>
                <a href="#contact" className="px-5 py-3 border border-black/10 rounded-md text-[var(--coal)]">Book a call</a>
              </div>
            </div>
          </div>
          </section>

          <Services />
          <Process />
          <Pricing />
          <CaseStudy />
          <WhyUs />
          <CTA />
        </div>
      </main>
      <Footer />
      <ScrollTop />
    </div>
  )
}
