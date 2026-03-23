'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { GlowOrb }       from '@/components/ui/GlowOrb'
import { CONTACT }       from '@/lib/data'

export function ContactSection() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" ref={ref} className="relative z-10 overflow-hidden px-8 py-28 text-center md:px-20">
      <GlowOrb className="-bottom-20 left-1/2 h-[400px] w-[400px] -translate-x-1/2 opacity-15" color="purple" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <SectionHeader
          tag="Get In Touch"
          title={
            <>
              Let&apos;s Build Something{' '}
              <span className="text-purple-400">Together</span>
            </>
          }
          center
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mx-auto mt-8 max-w-md text-base leading-relaxed text-[#9a8fb0]"
      >
        I&apos;m open to new opportunities, collaborations, and interesting conversations.
        Whether it&apos;s a product, an idea, or something in between — let&apos;s talk.
      </motion.p>

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="mt-10 flex flex-wrap justify-center gap-3"
      >
        {CONTACT.links.map((link) => (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            data-interactive
            whileHover={{ y: -3 }}
            className="flex items-center gap-2 rounded-xl border border-purple-500/15 bg-[#120f1e] px-5 py-3 font-mono text-sm text-[#9a8fb0] transition-all duration-200 hover:border-purple-400 hover:text-purple-400"
            style={{ transition: 'box-shadow 0.2s' }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(184,111,255,0.2)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
            }}
          >
            <span>{link.icon}</span>
            {link.label}
          </motion.a>
        ))}
      </motion.div>

      {/* CTA button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="mt-8"
      >
        <motion.a
          href={`mailto:${CONTACT.email}`}
          data-interactive
          whileHover={{ y: -3, boxShadow: '0 0 50px rgba(184,111,255,0.35)' }}
          className="inline-block rounded-lg px-10 py-4 font-mono text-sm font-bold text-white"
          style={{
            background: 'linear-gradient(135deg,#b86fff,#7c3aed)',
            boxShadow:  '0 0 30px rgba(184,111,255,0.25)',
          }}
        >
          Say Hello 👋
        </motion.a>
      </motion.div>
    </section>
  )
}
