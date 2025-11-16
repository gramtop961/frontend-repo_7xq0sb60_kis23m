import React from 'react'

const items = [
  {
    title: 'Submit Project Details',
    img: 'https://images.unsplash.com/photo-1514477917009-d05ab5d15507?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Receive Instant Quote',
    img: 'https://images.unsplash.com/photo-1551281044-8d8c1d8d5d63?q=80&w=2069&auto=format&fit=crop',
  },
  {
    title: 'Schedule Cleaning',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2069&auto=format&fit=crop',
  },
]

export default function HowItWorks(){
  return (
    <section id="how" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-light tracking-tight text-slate-900">How it works</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((i, idx) => (
            <div key={idx} className="rounded-3xl overflow-hidden bg-white/30 backdrop-blur-xl border border-white/40 shadow-lg">
              <img src={i.img} alt="" className="h-44 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-medium tracking-tight text-slate-900">{i.title}</h3>
                <p className="mt-2 text-sm text-slate-600/90">Seamless, transparent, and fast—from intake to on-site execution.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
