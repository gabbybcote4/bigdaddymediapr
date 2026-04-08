const ITEMS = [
  { title: 'Discovery call', body: 'We learn your goals, audience, and the results you care about.' },
  { title: 'Contract & agreement', body: 'We align scope, timelines, and success metrics so expectations are clear.' },
  { title: 'Onboarding', body: 'We get everything in place—content calendars, creative briefs, and creator outreach.' },
  { title: 'Time to shine', body: 'We launch, optimize, and scale the content system so it becomes a repeatable growth engine.' }
]

export default function Process(){
  return (
    <section id="process" className="py-16 border-t border-white/6">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3">
          <h2 className="bauhaus display-subtitle text-3xl font-bold h-condensed">How it works</h2>
          <svg className="w-6 h-6 text-candy" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" className="circle-outline" />
          </svg>
        </div>

  <p className="mt-3 text-muted-dark max-w-2xl">A simple, repeatable system: strategy, content, distribution, and continuous optimization.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          {ITEMS.map((it, idx) => (
            <div key={it.title} className="p-6 card-bg card-border">
              <div className="text-[var(--candy)] font-bold">{it.title}</div>
              <div className="mt-2 text-muted-dark">{it.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
