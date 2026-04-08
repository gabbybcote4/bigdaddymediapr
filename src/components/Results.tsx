const STATS = [ {label: 'Successful launches', value: '12+'}, {label: 'Organic reach', value: '1.4M'}, {label: 'Delivery rate', value: '100%'} ]

export default function Results(){
  return (
    <section id="results" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
  <h2 className="text-3xl font-bold bauhaus">Results</h2>
        <p className="mt-3 text-muted-dark max-w-2xl">Selected campaign outcomes and performance highlights.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {STATS.map(s=> (
            <div key={s.label} className="p-6 text-center card-bg">
              <div className="text-4xl font-extrabold">{s.value}</div>
              <div className="mt-2 text-muted-dark">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
