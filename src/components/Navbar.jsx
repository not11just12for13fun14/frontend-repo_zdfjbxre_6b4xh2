import React from 'react'
import { Menu, Sparkles } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-3">
          <a href="#top" className="flex items-center gap-2">
            <div className="grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 shadow-[0_0_30px_rgba(168,85,247,0.35)]">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-white font-semibold tracking-tight">Playform</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-4 py-2 font-medium hover:bg-white/90 transition-colors">Start a project</a>
          </nav>
          <button className="md:hidden text-white/90" aria-label="Open menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  )
}
