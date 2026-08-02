import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { navLinks, profile } from '../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [glow, setGlow] = useState({ x: 50, y: -30 })
  const capsuleRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = capsuleRef.current?.getBoundingClientRect()
    if (!rect) return
    setGlow({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50"
    >
      <div className="mx-auto max-w-6xl px-3 pt-3">
        <nav
          ref={capsuleRef}
          onMouseMove={handleMouseMove}
          className={`liquid-header relative overflow-hidden rounded-2xl border border-white/10 border-t-white/20 border-b-white/20 bg-slate-900/50 shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all duration-300 ${
            scrolled ? 'shadow-[0_8px_40px_rgba(0,0,0,0.6)]' : ''
          }`}
        >
          {/* Liquid highlight — soft radial sheen that follows the cursor */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(139,92,246,0.22), rgba(34,211,238,0.08) 40%, transparent 65%)`,
              opacity: scrolled ? 1 : 0.7,
            }}
          />
          {/* Bottom inner hairline for a polished glass rim */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
          />

          <div className="relative flex items-center justify-between px-5 py-3.5">
            <a href="#home" className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 text-sm font-extrabold text-white shadow-[0_0_18px_rgba(139,92,246,0.5)]">
                HU
              </span>
              <span className="text-lg font-bold tracking-tight text-white">
                {profile.name}
                <span className="ml-2 rounded-full bg-violet-500/15 px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-widest text-violet-300">
                  Luau
                </span>
              </span>
            </a>

            <ul className="hidden items-center gap-7 text-sm font-medium text-slate-300 md:flex">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="btn-glow hidden items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-2.5 text-sm font-semibold text-white md:inline-flex"
              >
                <Sparkles size={16} />
                Hire Me
              </a>
              <button
                aria-label="Toggle menu"
                onClick={() => setOpen(!open)}
                className="glass grid size-10 place-items-center rounded-xl text-slate-200 md:hidden"
              >
                <div className="space-y-1.5">
                  <span className={`block h-0.5 w-5 bg-current transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
                  <span className={`block h-0.5 w-5 bg-current transition-opacity ${open ? 'opacity-0' : ''}`} />
                  <span className={`block h-0.5 w-5 bg-current transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
                </div>
              </button>
            </div>
          </div>

          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative border-t border-white/10 p-3 md:hidden"
            >
              <ul className="space-y-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-4 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/5"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="mt-2 block rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-2.5 text-center text-sm font-semibold text-white"
                  >
                    Hire Me
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </nav>
      </div>
    </motion.header>
  )
}
