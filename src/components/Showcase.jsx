import React from 'react'

const projects = [
  {
    title: 'Orbit UI',
    desc: 'A multi-sensory commerce platform with 3D product stories.',
    tags: ['React', 'Spline', 'Three'],
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Nova Play',
    desc: 'Interactive brand world built for launch week hype.',
    tags: ['Brand', 'Motion', 'WebGL'],
    image: 'https://images.unsplash.com/photo-1557264337-e8a93017fe92?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Fluid OS',
    desc: 'A next-gen operating system concept for modular work.',
    tags: ['Design', 'Proto', 'Motion'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop'
  }
]

export default function Showcase() {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Selected work</h2>
            <p className="mt-3 text-white/70">A few recent explorations blending interface, motion, and 3D.
            </p>
          </div>
          <a href="#contact" className="hidden md:inline-flex rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white backdrop-blur hover:bg-white/10">Get in touch</a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.image} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent" />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">{t}</span>
                  ))}
                </div>
                <h3 className="mt-3 text-xl font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-white/70">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
