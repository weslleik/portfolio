import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  tag: string
  title: React.ReactNode
  className?: string
  center?: boolean
}

export function SectionHeader({ tag, title, className, center }: SectionHeaderProps) {
  return (
    <div className={cn(center && 'text-center', className)}>
      <p className="mb-3 font-mono text-xs tracking-[0.2em] text-purple-400 uppercase">
        {tag}
      </p>
      <h2 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
        {title}
      </h2>
      <div className={cn('mt-3 h-[3px] w-10 rounded-full bg-purple-500', center && 'mx-auto')} />
    </div>
  )
}
