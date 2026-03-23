'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionHeader }    from '@/components/ui/SectionHeader'
import { useCounter }       from '@/hooks/useCounter'
import { SKILLS }           from '@/lib/data'
import type { Skill, SkillCategory } from '@/types'
import { cn }               from '@/lib/utils'

const FILTERS: { label: string; value: SkillCategory | 'all' }[] = [
  { label: 'All',      value: 'all'      },
  { label: 'Language', value: 'language' },
  { label: 'Front-end',value: 'frontend' },
  { label: 'Back-end', value: 'backend'  },
  { label: 'Tool',     value: 'tool'     },
]

function SkillCard({ skill, index, sectionInView }: { skill: Skill; index: number; sectionInView: boolean }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true })
  const active = inView && sectionInView
  const count  = useCounter(skill.level, 1200, active)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -4, boxShadow: '0 0 28px rgba(184,111,255,0.22)' }}
      data-interactive
      className="group rounded-xl border border-purple-500/15 bg-[#120f1e] p-5 transition-colors duration-300 hover:border-purple-400/40"
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="font-semibold tracking-tight">{skill.name}</span>
        <span className="font-mono text-sm text-purple-400">{count}%</span>
      </div>

      {/* Bar */}
      <div className="mb-3 h-1 overflow-hidden rounded-full bg-[#1e1730]">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: active ? `${skill.level}%` : 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, #b86fff, #e040fb)' }}
        />
      </div>

      <span className="rounded-full border border-purple-500/20 px-2.5 py-0.5 font-mono text-[10px] text-[#4a3f60]">
        {skill.category}
      </span>
    </motion.div>
  )
}

export function SkillsSection() {
  const [active, setActive] = useState<SkillCategory | 'all'>('all')
  const ref     = useRef(null)
  const inView  = useInView(ref, { once: true, margin: '-80px' })

  const filtered = active === 'all' ? SKILLS : SKILLS.filter((s) => s.category === active)

  return (
    <section id="skills" ref={ref} className="relative z-10 px-8 py-28 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <SectionHeader tag="What I Use" title="Skills & Tools" />
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-10 flex flex-wrap gap-2"
      >
        {FILTERS.map((f) => (
          <button
            key={f.value}
            data-interactive
            onClick={() => setActive(f.value)}
            className={cn(
              'rounded-full border px-4 py-2 font-mono text-xs tracking-wide transition-all duration-200',
              active === f.value
                ? 'border-purple-400 bg-purple-500/10 text-purple-400'
                : 'border-purple-500/15 text-[#9a8fb0] hover:border-purple-400 hover:text-purple-400',
            )}
          >
            {f.label}
          </button>
        ))}
      </motion.div>

      {/* Grid */}
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} index={i} sectionInView={inView} />
        ))}
      </div>
    </section>
  )
}
