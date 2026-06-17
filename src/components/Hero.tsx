import { motion } from 'framer-motion'

export default function Hero(){
  const handleScroll = (id: string) => { const el = document.querySelector(id); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }) }

  return (
    <section id="hero" className="min-h-[72vh] flex items-center">
      <div className="max-w-6xl mx-auto px-6 w-full py-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y:0, opacity:1 }} transition={{ duration: 0.6 }} className="bauhaus text-5xl md:text-6xl font-extrabold h-condensed leading-tight">
            Big Daddy Media & PR builds content that actually converts.
          </motion.h1>
          <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.2 }} className="mt-6 text-muted-dark max-w-2xl">Strategy, content systems, influencer partnerships, and launch campaigns designed to grow brands—not just make them look good.</motion.p>
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.25 }} className="mt-3 text-[var(--coal)] font-semibold">we whip your marketing into shape</motion.div>
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.4 }} className="mt-8 flex gap-4 justify-center lg:justify-start">
            <button onClick={()=>handleScroll('#contact')} className="px-6 py-3 bg-[var(--candy)] text-white rounded-md font-semibold shadow-md">Get Started</button>
            <button onClick={()=>handleScroll('#case')} className="px-6 py-3 border border-black/10 rounded-md text-[var(--coal)] hover-cherry hover-border-cherry">View Case Study</button>
          </motion.div>
          <motion.div className="mt-8 text-muted-dark text-sm flex gap-6 justify-center lg:justify-start" initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.6 }}>
            <div><div className="text-[var(--coal)] font-bold">12+</div><div className="text-muted-dark text-xs">successful launches</div></div>
            <div><div className="text-[var(--coal)] font-bold">1.4M</div><div className="text-muted-dark text-xs">organic reach achieved</div></div>
            <div><div className="text-[var(--coal)] font-bold">100%</div><div className="text-muted-dark text-xs">campaign delivery rate</div></div>
          </motion.div>
          </div>

          <div className="flex flex-col items-center lg:items-end gap-6">
            <div className="max-w-3xl w-full text-center md:text-right px-4 py-4 rounded-lg card-bg card-border">
              <div className="text-lg font-semibold text-[var(--coal)]">We don’t post for the sake of posting.</div>
              <div className="mt-1 text-muted-dark">We build systems that turn attention into growth.</div>
            </div>

            <motion.div initial={{ x: 40, opacity:0 }} animate={{ x:0, opacity:1 }} transition={{ duration:0.6 }} className="hidden lg:block w-full max-w-md">
              <div className="rounded-2xl overflow-hidden glow-accent card-bg relative">
                <img src="/images/IMG_8700.jpeg" alt="Workspace" className="w-full h-84 object-cover" />
                <div className="video-overlay" aria-hidden />
                <div className="video-vignette" aria-hidden />
                <div className="video-glow" aria-hidden />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
