import { motion } from 'framer-motion'
import { ExternalLink, Gamepad2, Play } from 'lucide-react'
import { projects } from '../data/content'

const cardAnim = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: (i % 3) * 0.1, duration: 0.5, ease: 'easeOut' as const },
  }),
}

export default function Work() {
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
                className={`relative h-40 bg-gradient-to-br ${project.gradient} bg-night-soft`}
              >
                <div className="absolute inset-0 grid-bg opacity-60" />
                <span className="absolute right-4 bottom-3 text-4xl opacity-90 transition-transform duration-300 group-hover:scale-125">
                  {project.icon}
                </span>
                <span className="glass absolute top-3 left-3 rounded-md px-2 py-1 font-mono text-[10px] text-slate-300">
                  noclip://preview
                </span>
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

                <div className="mt-5 flex flex-wrap gap-2">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold text-emerald-300 transition-all hover:border-emerald-400/40 hover:text-emerald-200"
                  >
                    <Gamepad2 size={13} /> Try Place Demo
                  </a>
                  <a
                    href={project.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold text-rose-300 transition-all hover:border-rose-400/40 hover:text-rose-200"
                  >
                    <Play size={13} /> Watch Gameplay Showcase
                  </a>
                  <a
                    href="#contact"
                    className="ml-auto inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-300 transition-colors hover:text-cyan-200"
                  >
                    Discuss a build like this <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
