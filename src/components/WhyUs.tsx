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
            <p className="mt-2 text-muted-dark">Big Daddy Media & PR was founded by Celine after realizing most brands aren’t struggling with content, they’re struggling to actually connect with people. Because posting more doesn’t fix anything if no one cares or converts.</p>

            <p className="mt-2 text-muted-dark">After years of working behind the scenes in social media, creator marketing, and brand strategy, we saw the same pattern over and over. Brands were playing it safe, blending in, and wondering why nothing was converting.</p>

            <p className="mt-2 text-muted-dark">Big Daddy was created to change that. We exist to help brands step outside the box, take creative risks, and show up in a way that actually gets attention. Through creator-driven content, strategic partnerships, and bold storytelling, we turn passive audiences into engaged communities.</p>

            <div className="inner-divider mt-6" />

            <h4 className="mt-6 font-semibold">Our Vision</h4>
            <p className="mt-2 text-muted-dark">We’re building a creator-powered ecosystem where brands and creators collaborate to produce content that people actually care about. Our vision is to redefine how brands grow online by making content feel human, not manufactured.</p>

            <p className="mt-2 text-muted-dark">We believe the future of marketing isn’t polished… it’s real, disruptive, and driven by creators who understand culture. And we’re here to lead that shift.</p>

            <div className="inner-divider mt-6" />

            <h4 className="mt-6 font-semibold">What we offer</h4>
            <div className="mt-3 text-muted-dark space-y-4">
              <div>
                <strong>Content Creation & Social Media Management</strong>
                <p className="mt-1">Big Daddy turns your brand into content people actually stop for, blending strategy, storytelling, and creator-driven marketing that converts attention into sales. We don’t just post, we build momentum, positioning your brand to stand out, scale fast, and stay relevant.</p>
              </div>

              <div>
                <strong>Short Form Video Content</strong>
                <p className="mt-1">We create scroll-stopping short-form videos designed to grab attention fast, keep people watching, and turn views into real engagement and sales. Every piece is built with strategy behind it, so your content doesn’t just look good, it performs.</p>
              </div>

              <div>
                <strong>Consultation</strong>
                <p className="mt-1">Book a consultation with Big Daddy and get a clear, no-BS strategy on how to grow your brand, attract the right audience, and actually convert content into revenue. If you’re ready to stop guessing and start scaling, we’ll show you exactly what to do next.</p>
              </div>

              <div>
                <strong>Campaign Strategy</strong>
                <p className="mt-1">We build data-driven campaign strategies that align your content, messaging, and offers to actually move people from attention to action. Every step is intentional, so you’re not just launching campaigns, you’re creating momentum that drives real growth.</p>
              </div>

              <div>
                <strong>Automations</strong>
                <p className="mt-1">We build smart automations that handle your follow-ups, nurture your audience, and turn interest into sales without you having to chase every lead manually. Less busywork, more consistency, and way fewer things slipping through the cracks.</p>
              </div>
            </div>

            <div className="inner-divider mt-6" />

            <h4 className="mt-6 font-semibold">Our Process</h4>
            <ul className="mt-2 list-disc list-inside text-muted-dark space-y-1">
              <li>Discovery call</li>
              <li>Contract and agreement</li>
              <li>Onboarding</li>
              <li>Time to shine</li>
            </ul>

            <div className="inner-divider mt-6" />

            <h4 className="mt-6 font-semibold">Client Application Form</h4>
            <p className="mt-2 text-muted-dark">Please read before applying:</p>
            <p className="mt-2 text-muted-dark">This application is for business owners who are ready to invest in high-level social media and marketing services. Our monthly packages start at $1000/month with a minimum 3-month commitment. If you’re not financially ready to commit to this level of service, please do not submit this form.</p>

            <p className="mt-2 text-muted-dark">Once we receive your application, we’ll review it carefully. If you qualify and we see a mutual fit, we’ll invite you to book a free discovery call where we’ll dive deeper into your goals and provide you with a tailor-made proposal. We only take on a limited number of clients at a time to maintain high quality, so please apply only if you’re serious and ready to take action.</p>
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
