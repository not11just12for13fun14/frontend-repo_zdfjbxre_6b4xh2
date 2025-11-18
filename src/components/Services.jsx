import React from 'react'
import { Sparkles, Zap, Pointer, Palette } from 'lucide-react'

const services = [
  {
    icon: <Sparkles className="h-5 w-5" />, 
    title: 'Brand + Identity',
    desc: 'Playful, modern brands that feel alive across mediums.'
  },
  {
    icon: <Zap className="h-5 w-5" />, 
    title: 'Product Design',
    desc: 'Interfaces that are as intuitive as they are delightful.'
  },
  {
    icon: <Pointer className="h-5 w-5" />, 
    title: 'Interactive 3D',
    desc: 'Immersive Spline experiences and WebGL storytelling.'
  },
  {
    icon: <Palette className="h-5 w-5" />, 
    title: 'Motion + Prototyping',
    desc: 'Micro-interactions and flows that feel just right.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.08),transparent_40%),radial-gradient(circle_at_80%_40%,rgba(244,114,182,0.08),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">What we do</h2>
          <p className="mt-3 text-white/70">A focused set of capabilities to ship standout digital products.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:bg-white/10">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
                {s.icon}
              </div>
              <h3 className="mt-4 text-white font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <button className="mt-4 text-sm text-cyan-300 group-hover:text-cyan-200">Learn more →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
