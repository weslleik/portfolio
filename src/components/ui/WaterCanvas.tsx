'use client'

import { useRef } from 'react'
import { useWaterRipple } from '@/hooks/useWaterRipple'

export function WaterCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)
  useWaterRipple(ref)

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] opacity-35"
    />
  )
}
