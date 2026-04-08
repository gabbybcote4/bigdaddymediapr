import { useState, useRef } from 'react'
import { Menu, X } from 'lucide-react'

const links = [ 
  { href: '#problem', label: 'Problems' }, 
  { href: '#services', label: 'Services' }, 
  { href: '#process', label: 'Process' }, 
  { href: '#pricing', label: 'Packages' }, 
  { href: '#case', label: 'Case Study' },
  { href: '/about.html', label: 'About' }
]

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const [logoSrc] = useState('/images/logo1.png')
  const headerRef = useRef<HTMLElement | null>(null)
  const scrollTo = (id: string) => {
    setOpen(false)
    // If an absolute path was passed, just navigate there
    if (id.startsWith('/')) {
      window.location.href = id
      return
    }

    const el = document.querySelector(id) as HTMLElement | null
    if (el) {
      const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 0
      const y = el.getBoundingClientRect().top + window.pageYOffset - headerHeight - 8 
      window.scrollTo({ top: Math.max(0, Math.floor(y)), behavior: 'smooth' })
      return
    }

    // If the element isn't found (e.g. we're on /about.html), navigate to the home page with the hash
    // This ensures links work from the standalone About page.
    try {
      window.location.href = `${window.location.origin}/${id}`
    } catch (err) {
      // fallback: set location to root with hash
      window.location.href = `/${id}`
    }
  }

  return (
  <header ref={headerRef} role="banner" className="sticky top-0 z-50 header-light">

    <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
      <a href="#main" className="sr-only focus:not-sr-only">Skip to main content</a>
        <div className="flex items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img src={logoSrc} alt="Big Daddy Media" className="h-40 w-auto md:h-40" />
            </a>
          </div>
        </div>

        <nav role="navigation" aria-label="Main navigation" className="hidden md:flex items-center gap-6">
          {links.map(l => (
            l.href && l.href.startsWith('/') ? (
              <a key={l.href} href={l.href} className="text-muted-dark hover-cherry text-sm">{l.label}</a>
            ) : (
              <button key={l.href} onClick={() => scrollTo(l.href)} className="text-muted-dark hover-cherry text-sm">{l.label}</button>
            )
          ))}
          <button onClick={() => scrollTo('#pricing')} className=" px-4 py-2 bg-[var(--candy)] text-white rounded-md font-semibold">Packages</button>
        </nav>

        <div className="md:hidden"><button onClick={()=>setOpen(s=>!s)} aria-label="menu" className="p-2">{open ? <X /> : <Menu />}</button></div>
      </div>
  {open && (
    <div className="md:hidden border-t" style={{borderColor:'rgba(40,40,40,0.06)'}}>
      <div className="px-6 py-4 flex flex-col gap-3 bg-[rgba(254,236,222,0.95)]">
        {links.map(l => (
          l.href && l.href.startsWith('/') ? (
            <a key={l.href} href={l.href} className="text-left text-muted-dark hover-cherry py-2">{l.label}</a>
          ) : (
            <button key={l.href} onClick={() => scrollTo(l.href)} className="text-left text-muted-dark hover-cherry py-2">{l.label}</button>
          )
        ))}
        <button onClick={() => scrollTo('#pricing')} className="mt-2 px-4 py-2 bg-[var(--candy)] text-white rounded-md font-semibold">Packages</button>
      </div>
    </div>
  )}

    </header>
  )
}
