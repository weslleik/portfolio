'use client'

import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mx = 0, my = 0, rx = 0, ry = 0
    let rafId = 0

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY }

    const animate = () => {
      dot.style.left = `${mx}px`
      dot.style.top  = `${my}px`
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      ring.style.left = `${rx}px`
      ring.style.top  = `${ry}px`
      rafId = requestAnimationFrame(animate)
    }

    const onEnter = () => {
      ring.style.width        = '60px'
      ring.style.height       = '60px'
      ring.style.borderColor  = 'rgb(224 64 251)'
      dot.style.transform     = 'translate(-50%,-50%) scale(1.8)'
    }
    const onLeave = () => {
      ring.style.width        = '36px'
      ring.style.height       = '36px'
      ring.style.borderColor  = 'rgb(184 111 255)'
      dot.style.transform     = 'translate(-50%,-50%) scale(1)'
    }

    const interactiveSelector = 'a, button, [data-interactive]'
    const addListeners = () => {
      document.querySelectorAll<HTMLElement>(interactiveSelector).forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }

    window.addEventListener('mousemove', onMove)
    animate()
    addListeners()

    // Re-attach on DOM mutations (e.g. filter buttons re-render)
    const observer = new MutationObserver(addListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMove)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-400 transition-transform duration-100"
        style={{ boxShadow: '0 0 10px rgb(184 111 255), 0 0 20px rgb(184 111 255)' }}
      />
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed z-[9998] h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400 opacity-60"
        style={{ transition: 'width 0.3s, height 0.3s, border-color 0.3s' }}
      />
    </>
  )
}
