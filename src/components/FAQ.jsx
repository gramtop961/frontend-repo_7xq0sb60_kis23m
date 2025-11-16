import React from 'react'

const faqs = [
  { q: 'How accurate is the online quote?', a: 'Our quote engine uses scope, size, and crew requirements to estimate pricing. Detailed site assessments may adjust totals before work begins.' },
  { q: 'Are your teams OSHA or HIPAA compliant?', a: 'Yes. Crews are trained on OSHA standards and deploy HIPAA-safe practices where applicable. Compliance documentation is available on request.' },
  { q: 'Do you service out-of-state projects?', a: 'Primarily Arizona, but we mobilize for regional projects with notice. Enterprise SLAs include multi-state coverage.' },
]

export default function FAQ(){
  return (
    <section id="faq" className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-light tracking-tight text-slate-900">FAQ</h2>
        <div className="mt-8 divide-y divide-white/40 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/40 shadow-lg">
          {faqs.map((f, i) => (
            <details key={i} className="p-6 group">
              <summary className="cursor-pointer list-none text-slate-900/90 font-medium tracking-tight">{f.q}</summary>
              <p className="mt-2 text-slate-600/90">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
