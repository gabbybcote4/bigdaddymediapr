import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollTop(){
  const [visible, setVisible] = useState(false)

  useEffect(()=>{
    const onScroll = () => setVisible(window.pageYOffset > 240)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!visible) return null

  return (
    <button
      aria-label="Scroll to top"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full bg-candy text-white flex items-center justify-center shadow-xl hover:scale-105 transform transition"
    >
      <ArrowUp size={20} />
    </button>
  )
}
