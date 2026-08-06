import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'
import { projects, type Project } from '../data/content'

const cardAnim = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: (i % 3) * 0.1, duration: 0.5, ease: 'easeOut' as const },
  }),
}

export default function Work() {
  const [selected, setSelected] = useState<Project | null>(null)

  useEffect(() => {
    if (!selected) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [selected])

  return (
    <section id="work" className="relative px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-sm text-violet-400">// recent_work</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Systems I've <span className="neon-text">Shipped</span>
          </h2>
          <p className="mt-3 max-w-xl text-slate-400">
            A snapshot of recent commissions — each one built to scale with player count and kept
            readable for future maintainers.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              variants={cardAnim}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              className="glass card-glow group flex flex-col overflow-hidden rounded-2xl"
            >
              <div
                className={`relative aspect-video overflow-hidden bg-gradient-to-br ${project.gradient} bg-night-soft`}
              >
                <div className="absolute inset-0 grid-bg opacity-60" />
                {project.videoUrl.toLowerCase().endsWith('.mp4') ? (
                  <button
                    type="button"
                    className="block h-full w-full cursor-pointer"
                    onClick={() => setSelected(project)}
                    aria-label={`Enlarge ${project.title} gameplay showcase`}
                  >
                    <video
                      className="relative h-full w-full object-cover"
                      src={project.videoUrl}
                      autoPlay
                      loop
                      muted
                      playsInline
                      aria-label={`${project.title} gameplay showcase`}
                    />
                  </button>
                ) : (
                  <div className="relative flex h-full items-center justify-center">
                    <span className="float-slow text-5xl drop-shadow-[0_0_24px_rgba(168,85,247,0.55)]">
                      {project.icon}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold text-white">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-violet-500/10 px-2 py-1 font-mono text-[11px] text-violet-300 ring-1 ring-violet-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="group/cta mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-cyan-300 transition-colors hover:text-cyan-200"
                >
                  Discuss a build like this
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover/cta:translate-x-1"
                  />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md sm:p-8"
            onClick={() => setSelected(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${selected.title} video enlarged`}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25"
                onClick={() => setSelected(null)}
                aria-label="Close video"
              >
                <X size={20} />
              </button>
              <video
                className="max-h-[75vh] w-full rounded-xl border border-white/15 bg-black object-contain"
                src={selected.videoUrl}
                autoPlay
                loop
                controls
                playsInline
              />
              <p className="mt-3 text-center font-mono text-sm text-slate-300">
                {selected.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
