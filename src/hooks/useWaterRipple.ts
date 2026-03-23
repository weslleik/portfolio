'use client'

import { useEffect, useRef } from 'react'

const COLS = 80
const ROWS = 60
const DAMP = 0.97

export function useWaterRipple(canvasRef: React.RefObject<HTMLCanvasElement>) {
  const curr = useRef<Float32Array[]>([])
  const prev = useRef<Float32Array[]>([])
  const raf  = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
      init()
    }

    const init = () => {
      curr.current = Array.from({ length: ROWS }, () => new Float32Array(COLS))
      prev.current = Array.from({ length: ROWS }, () => new Float32Array(COLS))
    }

    const drop = (x: number, y: number, r = 4, strength = 8) => {
      const cx = Math.floor((x / window.innerWidth)  * COLS)
      const cy = Math.floor((y / window.innerHeight) * ROWS)
      for (let dy = -r; dy <= r; dy++) {
        for (let dx = -r; dx <= r; dx++) {
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < r) {
            const rr = cy + dy, cc = cx + dx
            if (rr >= 0 && rr < ROWS && cc >= 0 && cc < COLS)
              curr.current[rr][cc] += (1 - d / r) * strength
          }
        }
      }
    }

    let lastX = -1, lastY = -1
    const onMove = (e: MouseEvent) => {
      if (Math.abs(e.clientX - lastX) > 4 || Math.abs(e.clientY - lastY) > 4) {
        drop(e.clientX, e.clientY, 3, 5)
        lastX = e.clientX; lastY = e.clientY
      }
    }
    const onClick = (e: MouseEvent) => drop(e.clientX, e.clientY, 8, 20)

    const step = () => {
      for (let r = 1; r < ROWS - 1; r++) {
        for (let c = 1; c < COLS - 1; c++) {
          prev.current[r][c] =
            (curr.current[r-1][c] + curr.current[r+1][c] +
             curr.current[r][c-1] + curr.current[r][c+1]) / 2 -
            prev.current[r][c]
          prev.current[r][c] *= DAMP
        }
      }
      ;[curr.current, prev.current] = [prev.current, curr.current]
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const cw = canvas.width  / COLS
      const ch = canvas.height / ROWS
      for (let r = 1; r < ROWS - 1; r++) {
        for (let c = 1; c < COLS - 1; c++) {
          const v = curr.current[r][c]
          if (Math.abs(v) < 0.05) continue
          const alpha = Math.min(Math.abs(v) * 0.04, 0.5)
          const rgb   = v > 0 ? '184,111,255' : '224,64,251'
          ctx.fillStyle = `rgba(${rgb},${alpha})`
          ctx.fillRect(c * cw, r * ch, cw + 1, ch + 1)
        }
      }
    }

    const loop = () => {
      step()
      draw()
      raf.current = requestAnimationFrame(loop)
    }

    resize()
    window.addEventListener('resize',    resize)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('click',     onClick)
    loop()

    return () => {
      cancelAnimationFrame(raf.current)
      window.removeEventListener('resize',    resize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('click',     onClick)
    }
  }, [canvasRef])
}
