import { motion } from 'framer-motion'
import { stats, techStack } from '../data/content'
import CountUp from './CountUp'

export default function About() {
  return (
    <section id="about" className="relative px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-sm text-fuchsia-400">// about_me</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Code You Can <span className="neon-text">Trust</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="glass card-glow rounded-2xl p-5 text-center">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                  <p className="mt-2 text-xs font-medium tracking-wide text-slate-400 uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="glass rounded-2xl p-6">
              <p className="leading-relaxed text-slate-300">
                I build Roblox systems the way I'd want them handed to me: clean, documented, and
                boring to debug. You'll never open a file and wonder what it does. NDA-compliant by
                default, with post-launch support after handoff so issues don't become your problem.
              </p>
              <p className="mt-3 leading-relaxed text-slate-400">
                Every commit is tested under simulated load — because "works in studio" isn't a
                performance target.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-mono text-sm text-slate-400">tech_stack</h3>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {techStack.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                  className="glass card-glow cursor-default rounded-lg px-3.5 py-2 font-mono text-sm text-slate-200 hover:text-white"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
