import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, ClipboardCopy, MessageCircle, Send } from 'lucide-react'
import { profile, requirements } from '../data/content'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [toastVisible, setToastVisible] = useState(false)

  const copyDiscord = async () => {
    try {
      await navigator.clipboard.writeText(profile.discord)
      setCopied(true)
      setToastVisible(true)
      setTimeout(() => setCopied(false), 2000)
      setTimeout(() => setToastVisible(false), 2200)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section id="contact" className="relative px-5 py-24">
      <AnimatePresence>
        {toastVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 28 }}
            className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
          >
            <div className="liquid-header flex items-center gap-2.5 rounded-full border border-white/10 border-t-white/20 bg-slate-900/70 py-3 pl-4 pr-5 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
              <span className="grid size-6 place-items-center rounded-full bg-emerald-500/20 ring-1 ring-emerald-400/40">
                <Check size={13} className="text-emerald-300" />
              </span>
              <p className="text-sm font-medium text-white">
                Discord handle copied — {profile.discord}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_60%,rgba(139,92,246,0.14),transparent_70%)]" />
      <div className="relative mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="font-mono text-sm text-violet-400">// commissions</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Let's Build <span className="neon-text">Something Great</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass card-glow mt-12 rounded-3xl p-8"
        >
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="text-center sm:text-left">
              <p className="text-sm text-slate-400">Discord</p>
              <div className="mt-2 flex items-center justify-center gap-3 sm:justify-start">
                <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-[#5865F2] to-[#7c3aed] text-white">
                  <MessageCircle size={20} />
                </span>
                <span className="font-mono text-lg font-semibold text-white">
                  {profile.discord}
                </span>
              </div>
            </div>

            <button
              onClick={copyDiscord}
              className={`btn-glow inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all ${
                copied
                  ? 'bg-emerald-500 text-white'
                  : 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white'
              }`}
            >
              {copied ? <Check size={16} /> : <ClipboardCopy size={16} />}
              {copied ? 'Copied!' : 'Copy Discord Handle'}
            </button>
          </div>

          <div className="mt-6 flex justify-center border-t border-white/10 pt-6 sm:justify-start">
            <a
              href={profile.xUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium text-slate-200 transition-all hover:border-cyan-400/40 hover:text-white"
            >
              <Send size={15} className="text-cyan-300" />
              DM me on X / Twitter
            </a>
          </div>

          <div className="mt-8 rounded-2xl bg-white/[0.03] p-6 ring-1 ring-white/10">
            <h3 className="text-sm font-bold text-white">
              📋 When reaching out, include:
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {requirements.map((req) => (
                <li key={req} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-violet-500/15 ring-1 ring-violet-500/30">
                    <Check size={11} className="text-violet-300" />
                  </span>
                  {req}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
              <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />
              Replies within a few hours
            </span>
            <span className="size-1 rounded-full bg-white/15" />
            <span className="text-xs text-slate-400">Paid commissions only</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
