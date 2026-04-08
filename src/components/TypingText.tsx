import React, { useEffect, useState } from 'react'

type Props = { text: string; speed?: number }

// JS-driven typing so the caret sits immediately after the visible characters
export default function TypingText({ text, speed = 40 }: Props){
  const [visible, setVisible] = useState(0)

  useEffect(() => {
    setVisible(0)
    if (!text || text.length === 0) return

    let mounted = true
    let i = 0
    let tickTimer: number | undefined
    let resetTimer: number | undefined

    const start = () => {
      i = 0
      setVisible(0)
      const tick = () => {
        if (!mounted) return
        i += 1
        setVisible(i)
        if (i < text.length) {
          tickTimer = window.setTimeout(tick, speed)
        } else {
          // finished typing — schedule restart after 60s
          resetTimer = window.setTimeout(() => {
            if (!mounted) return
            start()
          }, 60000)
        }
      }
      tickTimer = window.setTimeout(tick, speed)
    }

    start()

    return () => { mounted = false; if (tickTimer) clearTimeout(tickTimer); if (resetTimer) clearTimeout(resetTimer) }
  }, [text, speed])

  const shown = text.slice(0, visible)

  return (
    <span aria-live="polite" className="inline-block">
      <span className="typing-chars">{shown || '\u00A0'}</span>
      <span className="typing-caret" aria-hidden="true" />
    </span>
  )
}
