const ITEMS = [
  {title: 'UGC Content', body: 'Short form videos, product demos, and native-feeling UGC that converts.'},
  {title: 'Influencer Partnerships', body: 'Creator-first campaigns with measurable KPIs and tight briefs.'},
  {title: 'Brand Storytelling', body: 'Narrative-driven content and launch-focused creative.'}
]

const THUMBS = ['image-01.png','image-02.png','image-03.png']

export default function WhatWeDo(){
  return (
    <section id="services" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
  <h2 className="text-3xl font-bold bauhaus">What We Do</h2>
  <p className="mt-3 text-muted-dark max-w-2xl">We build short-form creative systems, manage creator relationships, and run campaigns that drive attention and sales.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {ITEMS.map((i, idx) => (
            <div key={i.title} className="p-6 card-bg">
              <div className="overflow-hidden rounded-md">
                <img src={`/images/${THUMBS[idx % THUMBS.length]}`} alt={i.title} className="w-full h-40 object-cover rounded-md" />
              </div>
              <div className="text-[var(--candy)] font-bold mt-4">{i.title}</div>
              <div className="mt-2 text-muted-dark">{i.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
