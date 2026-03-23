'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef }    from 'react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ABOUT, STATS }  from '@/lib/data'

function StatCard({ icon, value, label, sub }: { icon: string; value: string; label: string; sub: string }) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: '0 0 30px rgba(184,111,255,0.2)' }}
      className="rounded-2xl border border-purple-500/15 bg-[#120f1e] p-6 transition-colors duration-300 hover:border-purple-400/40"
    >
      <div className="mb-3 text-3xl">{icon}</div>
      <div className="text-2xl font-extrabold">{value}</div>
      <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-purple-400">{label}</div>
      <div className="mt-1 text-xs text-[#4a3f60]">{sub}</div>
    </motion.div>
  )
}

export function AboutSection() {
  const ref     = useRef(null)
  const inView  = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="relative z-10 px-8 py-28 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <SectionHeader tag="Who I Am" title={<>Bridging Art<br />&amp; Engineering</>} />
      </motion.div>

      <div className="mt-14 grid gap-16 md:grid-cols-2">
        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="space-y-5"
        >
          {ABOUT.paragraphs.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-[#9a8fb0] md:text-lg">
              {p}
            </p>
          ))}

          <div className="flex flex-wrap gap-2 pt-4">
            {ABOUT.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-purple-500/20 px-3 py-1 font-mono text-xs text-purple-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Stat cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="grid grid-cols-2 gap-4"
        >
          {STATS.map((s, i) => (
            <StatCard key={i} {...s} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
