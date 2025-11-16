import React from 'react'

const plans = [
  {
    name: 'Single Job',
    price: '$1,200+',
    desc: 'One-off post-construction or specialty clean.',
    bullets: ['On-demand crew', 'Tools & chemicals provided', '48h scheduling'],
    recommended: false,
  },
  {
    name: 'Ongoing Contract',
    price: '$2,800+/mo',
    desc: 'Recurring cleans for facilities and offices.',
    bullets: ['Dedicated team', 'Custom SOPs', 'Priority scheduling'],
    recommended: true,
  },
  {
    name: 'Enterprise SLA',
    price: 'Custom',
    desc: 'Large sites, hyperscale, and high-security environments.',
    bullets: ['SLA-backed response', 'Compliance documentation', '24/7 availability'],
    recommended: false,
  },
]

export default function Pricing(){
  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-light tracking-tight text-slate-900">Transparent pricing</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <div key={i} className={`relative rounded-3xl p-6 bg-white/20 backdrop-blur-xl border border-white/40 shadow-lg ${p.recommended ? 'ring-2 ring-blue-400/60' : ''}`}>
              {p.recommended && (
                <span className="absolute -top-3 right-6 inline-flex items-center gap-2 rounded-full bg-blue-600 text-white text-xs px-3 py-1 shadow-md">Recommended</span>
              )}
              <div className="text-sm uppercase tracking-wider text-slate-600/90">{p.name}</div>
              <div className="mt-2 text-3xl font-light tracking-tight text-slate-900">{p.price}</div>
              <p className="mt-2 text-sm text-slate-600/90">{p.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-800/90">
                {p.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600/70" />
                    {b}
                  </li>
                ))}
              </ul>
              <button className="btn-neu mt-6 w-full">Select</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
