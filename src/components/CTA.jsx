import React from 'react'

export default function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_100%,rgba(34,211,238,0.12),transparent)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900/60 to-slate-800 p-10 md:p-14 backdrop-blur-xl">
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Have a project in mind?</h3>
              <p className="mt-3 max-w-xl text-white/70">Tell us about the product you want to bring to life. We’ll reply within 24 hours with next steps.</p>
            </div>
            <a href="mailto:hello@playform.studio" className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 font-medium text-slate-900 shadow-[0_10px_40px_-10px_rgba(255,255,255,0.5)] hover:shadow-[0_10px_50px_-10px_rgba(255,255,255,0.7)] transition">hello@playform.studio</a>
          </div>
        </div>
      </div>
    </section>
  )
}
