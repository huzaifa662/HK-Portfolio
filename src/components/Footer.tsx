import { Send, MessageCircle, Mail } from 'lucide-react'
import { navLinks, profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-bold text-white">
            {profile.name}
            <span className="ml-2 text-slate-500">· {profile.tagline}</span>
          </p>
          <p className="mt-1 text-xs text-slate-500">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-5 text-xs text-slate-400">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={profile.xUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X / Twitter"
            className="glass grid size-9 place-items-center rounded-lg text-slate-300 transition-all hover:border-cyan-400/40 hover:text-white"
          >
            <Send size={15} />
          </a>
          <a
            href="#contact"
            aria-label="Discord"
            className="glass grid size-9 place-items-center rounded-lg text-slate-300 transition-all hover:border-violet-400/40 hover:text-white"
          >
            <MessageCircle size={15} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="glass grid size-9 place-items-center rounded-lg text-slate-300 transition-all hover:border-fuchsia-400/40 hover:text-white"
          >
            <Mail size={15} />
          </a>
        </div>
      </div>
    </footer>
  )
}
