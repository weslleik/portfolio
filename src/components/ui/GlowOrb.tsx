import { cn } from '@/lib/utils'

interface GlowOrbProps {
  className?: string
  color?: 'purple' | 'fuchsia'
}

export function GlowOrb({ className, color = 'purple' }: GlowOrbProps) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute rounded-full opacity-10 blur-[100px] animate-[drift_12s_ease-in-out_infinite_alternate]',
        color === 'purple'  && 'bg-purple-500',
        color === 'fuchsia' && 'bg-fuchsia-500',
        className,
      )}
    />
  )
}
