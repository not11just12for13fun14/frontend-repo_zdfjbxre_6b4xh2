import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/10 to-slate-950"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-white/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs">Creative agency crafting playful, modern experiences</span>
          </div>
          <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            Make it memorable.
            <span className="block bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-amber-300 bg-clip-text text-transparent">Make it interactive.</span>
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-xl">
            We blend 3D, motion, and brand to turn products into experiences. From concept to launch, we design interfaces people love.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-6 py-3 font-medium shadow-[0_10px_40px_-10px_rgba(255,255,255,0.5)] hover:shadow-[0_10px_50px_-10px_rgba(255,255,255,0.7)] transition">Start a project</a>
            <a href="#work" className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-medium text-white backdrop-blur hover:bg-white/20 transition">See our work</a>
          </div>
        </div>
      </div>
    </section>
  )
}
