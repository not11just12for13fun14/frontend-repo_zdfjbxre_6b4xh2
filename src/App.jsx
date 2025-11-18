import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Showcase from './components/Showcase'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Subtle starfield background */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(168,85,247,0.12),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(34,211,238,0.12),transparent_35%)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Services />
        <Showcase />
        <CTA />
      </main>
      <footer className="relative border-t border-white/10 py-10 text-center text-white/60">
        <p>© {new Date().getFullYear()} Playform Studio — Crafted with care.</p>
      </footer>
    </div>
  )
}

export default App
