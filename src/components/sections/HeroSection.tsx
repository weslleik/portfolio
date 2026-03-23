'use client'

import { motion } from 'framer-motion'
import { useTypewriter } from '@/hooks/useTypewriter'
import { GlowOrb }       from '@/components/ui/GlowOrb'
import { HERO }          from '@/lib/data'

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 28 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export function HeroSection() {
  const role = useTypewriter({ words: HERO.roles })

  return (
    <section
      id="hero"
      className="relative z-10 flex min-h-screen flex-col justify-center overflow-hidden px-8 md:px-20"
    >
      <GlowOrb className="-right-32 -top-32 h-[500px] w-[500px]" color="purple" />
      <GlowOrb className="-bottom-20 -left-32 h-[380px] w-[380px] [animation-delay:-5s]" color="fuchsia" />

      {/* Greeting */}
      <motion.p {...fadeUp(0.3)} className="mb-4 font-mono text-sm tracking-[0.15em] text-purple-400">
        {HERO.greeting}
      </motion.p>

      {/* Name */}
      <motion.h1
        {...fadeUp(0.5)}
        className="text-[clamp(3rem,9vw,7.5rem)] font-extrabold leading-none tracking-tight"
      >
        {HERO.firstName}{' '}
        <span className="text-purple-400">{HERO.lastName}</span>
      </motion.h1>

      {/* Typewriter */}
      <motion.div {...fadeUp(0.7)} className="mt-5 flex items-center gap-2">
        <span className="font-mono text-[clamp(1rem,2.5vw,1.6rem)] text-fuchsia-400">&gt;&nbsp;</span>
        <span
          className="font-mono text-[clamp(1rem,2.5vw,1.6rem)] animate-blink border-r-2 border-purple-400 pr-1"
        >
          {role}
        </span>
      </motion.div>

      {/* Bio */}
      <motion.p
        {...fadeUp(0.9)}
        className="mt-8 max-w-lg text-base leading-relaxed text-[#9a8fb0] md:text-lg"
      >
        {HERO.bio}
      </motion.p>

      {/* CTAs */}
      <motion.div {...fadeUp(1.1)} className="mt-10 flex flex-wrap gap-4">
        <a
          href="#projects"
          data-interactive
          className="rounded px-8 py-3.5 font-mono text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1"
          style={{
            background: 'linear-gradient(135deg,#b86fff,#7c3aed)',
            boxShadow: '0 0 30px rgba(184,111,255,0.25)',
          }}
        >
          See My Work
        </a>
        <a
          href="#contact"
          data-interactive
          className="rounded border border-purple-500/20 px-8 py-3.5 font-mono text-sm text-[#ede8f5] transition-all duration-300 hover:-translate-y-1 hover:border-purple-400 hover:text-purple-400"
        >
          Contact Me
        </a>
      </motion.div>

      {/* Location tag */}
      <motion.div
        {...fadeUp(1.3)}
        className="mt-10 flex items-center gap-3 font-mono text-xs text-[#4a3f60]"
      >
        <span className="h-px w-10 bg-[#4a3f60]" />
        📍 {HERO.location}
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.15em] text-[#4a3f60] md:left-20"
      >
        <span className="h-px w-10 bg-[#4a3f60]" /> Scroll Down
      </motion.div>
    </section>
  )
}
