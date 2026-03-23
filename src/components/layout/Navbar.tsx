'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '@/lib/data'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [light,    setLight]    = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('light', light)
  }, [light])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 flex items-center justify-between px-8 py-4 transition-all duration-300 md:px-12',
        scrolled && 'backdrop-blur-xl border-b border-purple-500/10',
        scrolled
          ? light ? 'bg-[#f5f0ff]/80' : 'bg-[#09080f]/75'
          : 'bg-transparent',
      )}
    >
      {/* Logo */}
      <a href="#" className="font-mono text-sm text-purple-400 tracking-wide">
        &lt;WeslleiKopceski/&gt;
      </a>

      {/* Desktop links */}
      <ul className="hidden items-center gap-8 md:flex">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="relative font-mono text-xs uppercase tracking-widest text-[#9a8fb0] transition-colors duration-200 hover:text-purple-400 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Right controls */}
      <div className="flex items-center gap-3">
        {/* Theme toggle */}
        <button
          data-interactive
          onClick={() => setLight((v) => !v)}
          className="flex items-center gap-2 rounded-full border border-purple-500/20 bg-[#120f1e] px-4 py-2 font-mono text-xs text-[#9a8fb0] transition-all duration-200 hover:border-purple-400 hover:text-purple-400"
        >
          <span>{light ? '🌙' : '☀️'}</span>
          <span>{light ? 'Dark' : 'Light'}</span>
        </button>

        {/* Mobile hamburger */}
        <button
          data-interactive
          className="flex flex-col gap-[5px] md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={cn(
                'block h-px w-6 bg-purple-400 transition-all duration-300',
                menuOpen && i === 0 && 'translate-y-[6px] rotate-45',
                menuOpen && i === 1 && 'opacity-0',
                menuOpen && i === 2 && '-translate-y-[6px] -rotate-45',
              )}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{    opacity: 0, y: -16 }}
            className="absolute inset-x-0 top-full border-b border-purple-500/10 bg-[#09080f]/95 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1 px-8 py-6">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 font-mono text-sm uppercase tracking-widest text-[#9a8fb0] hover:text-purple-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
