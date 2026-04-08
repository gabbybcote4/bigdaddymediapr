import React, { useState, useEffect } from 'react'

const EXAMPLES = [
  {
    category: 'BEAUTY / COSMETICS',
    brand: 'Vanta Skin',
    industry: 'Skincare (acne + barrier repair)',
    project: 'Product Launch + Content System',
    visual: ['Soft matte lighting', 'neutral tones', 'glass textures', 'close-up product shots', 'UGC-style clips'],
    content: ['POV your skin finally stops reacting', 'this fixed my barrier in 7 days', 'before/after style lighting change (same model)'],
    caseStudy: 'We launched Vanta Skin’s barrier repair serum with a content-first strategy built around trust and relatability. Instead of polished ads, we leaned into UGC-style storytelling and repetitive visual hooks.',
    results: ['+38% engagement rate increase', '120K+ views across launch content', '3.2x increase in product page clicks']
  },
  {
    category: 'FASHION / STREETWEAR',
    brand: 'Static Club',
    industry: 'Streetwear',
    project: 'Drop Campaign + Creator Seeding',
    visual: ['Flash photography', 'gritty night shots', 'mirror selfies', 'urban textures', 'fast cuts'],
    content: ['don’t buy this hoodie', 'outfit check but make it toxic', 'walking clips, zoom cuts, text overlays'],
    caseStudy: 'Static Club needed more than a drop—they needed attention. We built a campaign around short-form, high-frequency content paired with micro-creator seeding.',
    results: ['15 creators activated', '210K+ organic views in 10 days', 'First drop sold out within 72 hours']
  },
  {
    category: 'LOCAL SERVICE',
    brand: 'Bare Studio',
    industry: 'Lash & Brow Studio',
    project: 'Client Acquisition Content System',
    visual: ['Clean bright minimal aesthetic', 'close-ups of lashes, tools, hands', 'satisfying transitions'],
    content: ['clients who come once vs clients who stay', 'this is why your lashes aren’t lasting', 'transformation clips (close eye → open eye)'],
    caseStudy: 'Bare Studio needed consistent bookings, not just occasional spikes. We built a content system focused on education, trust, and visual transformations.',
    results: ['+52% increase in bookings within 30 days', '3x increase in profile saves', 'Consistent weekly client inquiries']
  },
  {
    category: 'E-COMMERCE',
    brand: 'Luma Bottle',
    industry: 'Lifestyle / hydration',
    project: 'UGC Ad Creative + Testing',
    visual: ['Bright clean lifestyle', 'gym clips', 'desk & car shots', 'natural lighting'],
    content: ['I didn’t think this would matter but…', 'this fixed my water intake problem', 'quick cuts + captions'],
    caseStudy: 'Luma Bottle needed content that felt native to the platform—not like ads. We created multiple UGC-style variations and tested hooks rapidly.',
    results: ['4.1x increase in ad CTR', '27% lower CPA after creative testing', 'Top-performing video reached 180K views']
  },
  {
    category: 'PERSONAL BRAND / CREATOR',
    brand: 'Aria Vale',
    industry: 'Lifestyle / influencer',
    project: 'Personal Brand Growth System',
    visual: ['Soft editorial aesthetic', 'talking-to-camera', 'neutral tones', 'subtle motion'],
    content: ['things I stopped doing that changed my life', 'this is your sign to reset', 'aesthetic routine clips'],
    caseStudy: 'Aria wanted to grow her audience without losing her voice. We built a content system that balanced personal storytelling with structured growth tactics.',
    results: ['+18K followers in 30 days', '2–3 viral videos (100K+ views)', 'Increased brand deal inquiries']
  }
]



  // We'll export a wrapper that includes modal state via a small HOC-like approach
  export function PortfolioWithModal(){
    const [active, setActive] = useState<any>(null)

    useEffect(() => {
      const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setActive(null) }
      if (active) {
        document.addEventListener('keydown', onKey)
        // prevent background scroll
        const prev = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        return () => {
          document.removeEventListener('keydown', onKey)
          document.body.style.overflow = prev
        }
      }
    }, [active])

    // Render the original Portfolio and the modal
    return (
      <>
        <PortfolioInner onOpen={setActive} />
      {active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/20" onClick={() => setActive(null)} aria-hidden />
          <div role="dialog" aria-modal="true" className="relative max-w-3xl w-full mx-4 modal-bg p-6 shadow-lg">
            <button onClick={() => setActive(null)} className="absolute right-4 top-4 text-[var(--coal)]">✕</button>
            <div className="text-[var(--cherry)] text-sm font-semibold">{active.category} — {active.industry}</div>
            <h3 className="text-2xl font-bold mt-2">{active.brand}</h3>
            <div className="mt-2 text-muted-dark">{active.project}</div>

            <div className="mt-4 text-muted-dark">
              <div className="font-semibold">Visual direction</div>
              <ul className="mt-1 list-disc list-inside">{active.visual.map((v: string) => (<li key={v}>{v}</li>))}</ul>

              <div className="font-semibold mt-3">Content to mock</div>
              <ul className="mt-1 list-disc list-inside">{active.content.map((c: string) => (<li key={c}>{c}</li>))}</ul>

              <div className="font-semibold mt-3">Case study</div>
              <p className="mt-1">{active.caseStudy}</p>

              <div className="font-semibold mt-3">Results</div>
              <ul className="mt-1 list-disc list-inside">{active.results.map((r: string) => (<li key={r}>{r}</li>))}</ul>
            </div>
          </div>
        </div>
      )}
      </>
    )
  }

  // split the original component into an inner component that accepts an open handler
  function PortfolioInner({ onOpen }: { onOpen: (ex: any) => void }){
    return (
      <section id="portfolio" className="py-16 border-t border-white/6">
        <div className="max-w-6xl mx-auto px-6">
  <h2 className="text-3xl font-bold bauhaus">Portfolio</h2>
    <p className="mt-3 text-muted-dark max-w-2xl">Short looping demos and campaign highlights. Click any entry for details.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {EXAMPLES.map(ex => (
                <article key={ex.brand} className="p-6 card-bg card-border">
                <div className="text-candy text-sm font-semibold">{ex.category} — {ex.industry}</div>
                <h4 className="text-xl font-bold mt-2">{ex.brand}</h4>
                <div className="mt-2 text-muted-dark">{ex.project}</div>

                  <div className="mt-4 text-sm text-muted-dark">
                      <button
                        className="mt-4 inline-flex items-center gap-3 text-sm font-semibold text-white bg-[var(--candy)] hover:bg-[#ff364a] rounded-full py-2 px-4 shadow"
                        onClick={() => onOpen(ex)}
                      >
                        View case details
                      </button>
                  </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    )
  }

  export default PortfolioWithModal
