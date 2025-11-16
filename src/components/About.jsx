import React from 'react'

export default function About(){
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-light tracking-tight text-slate-900">About Olympus Cleaning</h2>
        <p className="mt-6 text-slate-700/90 leading-relaxed">
          Born in Arizona, Olympus Cleaning partners with contractors and enterprise facilities to deliver commercial-only cleaning services. Our teams are vetted, safety-certified, and trained on strict SOPs for dust control, contamination prevention, and site compliance. From final construction cleans to sensitive data center environments, we operate with precision and speed.
        </p>
        <div className="mt-6 grid sm:grid-cols-3 gap-4">
          <div className="rounded-2xl p-4 bg-white/30 backdrop-blur-xl border border-white/40">
            <div className="text-3xl font-light tracking-tight text-slate-900">24/7</div>
            <div className="text-sm text-slate-600/90">Rapid response crews</div>
          </div>
          <div className="rounded-2xl p-4 bg-white/30 backdrop-blur-xl border border-white/40">
            <div className="text-3xl font-light tracking-tight text-slate-900">100%</div>
            <div className="text-sm text-slate-600/90">OSHA aware practices</div>
          </div>
          <div className="rounded-2xl p-4 bg-white/30 backdrop-blur-xl border border-white/40">
            <div className="text-3xl font-light tracking-tight text-slate-900">Statewide</div>
            <div className="text-sm text-slate-600/90">Arizona coverage</div>
          </div>
        </div>
      </div>
    </section>
  )
}
