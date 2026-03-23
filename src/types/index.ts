export interface Skill {
  name: string
  level: number          // 0–100
  category: SkillCategory
}

export type SkillCategory = 'language' | 'frontend' | 'backend' | 'tool'

export interface Project {
  title: string
  subtitle: string
  description: string
  tags: string[]
  href?: string
  featured?: boolean
}

export interface StatCard {
  icon: string
  value: string
  label: string
  sub: string
}

export interface NavLink {
  label: string
  href: string
}
