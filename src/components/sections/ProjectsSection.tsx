'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { PROJECTS }      from '@/lib/data'
import type { Project }  from '@/types'
import { cn }            from '@/lib/utils'

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      data-interactive
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-2xl border border-purple-500/15 bg-[#120f1e] p-7 transition-all duration-300 hover:border-purple-400/50',
        project.featured && 'md:col-span-1',
      )}
      style={{
        boxShadow: '0 0 0 rgba(184,111,255,0)',
        transition: 'box-shadow 0.3s, transform 0.3s, border-color 0.3s',
      }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLElement).style.boxShadow = '0 0 35px rgba(184,111,255,0.18)'
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 rgba(184,111,255,0)'
      }}
    >
      {/* Top row */}
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.15em] text-purple-400">
            {project.subtitle}
          </p>
          <h3 className="text-xl font-bold leading-tight">{project.title}</h3>
        </div>

        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 shrink-0 rounded-lg border border-purple-500/20 p-2 text-[#9a8fb0] transition-all duration-200 hover:border-purple-400 hover:text-purple-400"
            aria-label={`View ${project.title}`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        )}
      </div>

      {/* Description */}
      <p className="mb-6 flex-1 text-sm leading-relaxed text-[#9a8fb0]">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-purple-500/15 px-3 py-1 font-mono text-[10px] text-[#9a8fb0]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Hover gradient line */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 rounded-t-2xl transition-transform duration-500 group-hover:scale-x-100"
        style={{ background: 'linear-gradient(90deg,#b86fff,#e040fb)' }}
      />
    </motion.article>
  )
}

export function ProjectsSection() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" ref={ref} className="relative z-10 px-8 py-28 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <SectionHeader tag="Things I've Built" title="Projects" />
      </motion.div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
