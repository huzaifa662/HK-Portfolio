import { motion } from 'framer-motion'
import { BadgeCheck, Quote, Star } from 'lucide-react'
import { reviews } from '../data/content'

export default function Reviews() {
  return (
    <section id="reviews" className="relative px-5 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,rgba(34,211,238,0.05),transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-sm text-cyan-400">// client_reviews</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            What Clients <span className="neon-text">Say</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((review, i) => (
            <motion.figure
              key={review.handle}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="glass card-glow flex flex-col rounded-2xl p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={15} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-mono text-xs text-slate-400">5.0 / 5</span>
              </div>

              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-300">
                <Quote size={16} className="mb-2 inline text-violet-400/60" />
                "{review.quote}"
              </blockquote>

              <figcaption className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
                <img
                  src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${review.handle.replace(/[^a-zA-Z0-9]/g, '')}`}
                  alt={`${review.handle} avatar`}
                  loading="lazy"
                  className="size-10 shrink-0 rounded-full ring-2 ring-violet-500/30"
                />
                <div>
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-white">
                    {review.handle}
                    <span className="inline-flex items-center gap-1 rounded-full bg-sky-500/15 px-2 py-0.5 text-[10px] font-semibold text-sky-300 ring-1 ring-sky-500/30">
                      <BadgeCheck size={11} className="fill-sky-500 text-white" />
                      Verified Client
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">{review.project}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
