import { motion } from 'framer-motion'
import { ArrowRight, Code2, ShieldCheck } from 'lucide-react'
import Starfield from './Starfield'
import { specialties } from '../data/content'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' as const },
  }),
}

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pt-8 pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(139,92,246,0.18),transparent_70%),radial-gradient(ellipse_40%_40%_at_85%_60%,rgba(34,211,238,0.08),transparent_70%)]" />
      <div className="grid-bg absolute inset-0" />
      <Starfield />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div variants={fadeUp} custom={0} initial="hidden" animate="show">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs text-slate-300">
            <span className="size-2 animate-pulse rounded-full bg-emerald-400" />
            Available for commissions
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate="show"
          className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          Roblox Scripting Services —{' '}
          <span className="neon-text">Clean Luau systems</span> built to perform under load.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          custom={2}
          initial="hidden"
          animate="show"
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-300"
        >
          Specializing in{' '}
          {specialties.map((s, i) => (
            <span key={s}>
              <span className="font-semibold text-slate-100">{s}</span>
              {i < specialties.length - 2 && ', '}
              {i === specialties.length - 2 && ' & '}
            </span>
          ))}
          — engineered for speed, readability, and scale.
        </motion.p>

        <motion.div
          variants={fadeUp}
          custom={3}
          initial="hidden"
          animate="show"
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#work"
            className="btn-glow inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-7 py-3.5 text-sm font-semibold text-white"
          >
            View My Work
            <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="glass inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold text-slate-100 transition-all hover:border-violet-400/50 hover:text-white"
          >
            Hire Me
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={4}
          initial="hidden"
          animate="show"
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400"
        >
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck size={14} className="text-emerald-400" /> NDA Friendly
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Code2 size={14} className="text-cyan-400" /> Clean, Documented Code
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="text-violet-400">▲</span> Performance Optimized
          </span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <div className="float-slow text-xs tracking-[0.3em] uppercase">Scroll</div>
      </motion.div>
    </section>
  )
}
