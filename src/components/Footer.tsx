import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer(){
  const scrollToWithOffset = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    const el = document.querySelector(id) as HTMLElement | null
    if (!el) return
    const header = document.querySelector('header') as HTMLElement | null
    const headerHeight = header ? header.offsetHeight : 0
    const y = el.getBoundingClientRect().top + window.pageYOffset - headerHeight - 8
    window.scrollTo({ top: Math.max(0, Math.floor(y)), behavior: 'smooth' })
  }

  return (
    <footer role="contentinfo" className="border-t border-white/6">
      <div className=" mx-auto px-6 py-5 flex flex-col md:flex-row items-start justify-between">
        <div>
          <div className="text-candy font-bold bauhaus display-subtitle">Big Daddy Media & PR</div>
          <div className=" text-muted-dark text-sm"><a href="mailto:bigdaddymediapr@gmail.com" className="hover:underline">bigdaddymediapr@gmail.com</a></div>
        </div>

        <div className="flex gap-6">
          <a href="#hero" onClick={scrollToWithOffset('#hero')} className="text-muted-dark hover-cherry">About</a>
          <a href="#services" onClick={scrollToWithOffset('#services')} className="text-muted-dark hover-cherry">Services</a>
          <a href="#contact" onClick={scrollToWithOffset('#contact')} className="text-muted-dark hover-cherry">Contact</a>
        </div>

  <div className="flex items-center gap-4 text-muted-dark">
          <a href="https://facebook.com/bigdaddymedia" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[var(--cherry)]"><Facebook /></a>
          <a href="https://instagram.com/bigdaddymedia" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[var(--cherry)]"><Instagram /></a>
          <a href="https://twitter.com/bigdaddymedia" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-[var(--cherry)]"><Twitter /></a>
        </div>
      </div>

  <div className="text-center text-xs text-muted-dark py-3">© 2026 Big Daddy Media & PR — All rights reserved</div>
    </footer>
  )
}
