import { useEffect, useRef } from 'react'

export default function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    const glow = glowRef.current
    if (!glow) return

    let targetX = window.innerWidth / 2
    let targetY = window.innerHeight / 3
    let x = targetX
    let y = targetY
    let raf = 0
    let active = false

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX
      targetY = e.clientY
      if (!active) {
        active = true
        loop()
      }
    }

    const loop = () => {
      x += (targetX - x) * 0.09
      y += (targetY - y) * 0.09
      glow.style.setProperty('--mouse-x', `${x}px`)
      glow.style.setProperty('--mouse-y', `${y}px`)
      if (Math.abs(targetX - x) > 0.5 || Math.abs(targetY - y) > 0.5) {
        raf = requestAnimationFrame(loop)
      } else {
        active = false
      }
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      aria-hidden
      className="mouse-glow pointer-events-none fixed inset-0 z-30"
    />
  )
}
