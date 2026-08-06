import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
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
                className={`relative aspect-video overflow-hidden bg-gradient-to-br ${project.gradient} bg-night-soft`}
              >
                <div className="absolute inset-0 grid-bg opacity-60" />
                {project.videoUrl.toLowerCase().endsWith('.mp4') ? (
                  <video
                    className="relative h-full w-full object-cover"
                    src={project.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    aria-label={`${project.title} gameplay showcase`}
                  />
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
    </section>
  )
}
