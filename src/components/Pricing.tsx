import { PACKAGES } from '../data/constants'

export default function Pricing(){
  return (
    <section id="pricing" className="py-10 border-t border-white/6">
      <div className=" mx-auto px-6">
        <div className="flex items-center gap-3">
          <h2 className="bauhaus display-subtitle text-3xl font-bold h-condensed">Packages</h2>
          <svg className="w-6 h-6 text-candy" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" className="circle-outline" />
          </svg>
        </div>
  <p className=" text-muted-dark max-w-2xl">Three curated engagement levels crafted to match where you are and where you want to go.</p>
        <div className="mt-4 grid gap-2 grid-cols-1 md:grid-cols-4 items-stretch">
          {PACKAGES.map((p, idx) => (
            <div key={p.id} className={`p-4 rounded-lg flex flex-col h-full min-h-[320px] md:min-h-[420px] ${idx===1 ? 'card-gradient ring-1 ring-candy/20 card-border' : 'card-bg card-border'}`}>
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="text-sm text-muted-dark">{p.name}</div>
                  <div className="text-xl font-bold mt-2">{p.price}</div>
                  {p.summary && <div className="mt-2 text-muted-dark text-sm">{p.summary}</div>}
                </div>
              </div>
              <ul className="mt-4 text-muted-dark">{p.bullets.map(b => (<li key={b}>• {b}</li>))}</ul>

              <div className="mt-6"><div className="text-sm text-muted-dark">Ideal client</div><div className="mt-1 text-sm font-semibold">{p.ideal}</div></div>

              <div className="mt-auto flex justify-center">
                <a href="#contact" className={`w-full sm:w-auto inline-block px-6 py-3 rounded-md text-center font-semibold hover-cherry hover-border-cherry ${idx===1 ? 'bg-[var(--candy)] text-white' : 'border border-black/10 text-[var(--coal)]'}`}>Get Started</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
