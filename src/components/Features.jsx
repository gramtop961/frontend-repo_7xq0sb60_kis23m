import React from 'react'
import { ShieldCheck, Factory, HardHat, UsersThree } from '@phosphor-icons/react'

const features = [
  { title: 'Contract Labour Services', icon: UsersThree },
  { title: 'Construction Site Final Clean', icon: HardHat },
  { title: 'Data Center Deep Clean', icon: Factory },
  { title: 'Safety-Certified Staff', icon: ShieldCheck },
]

export default function Features(){
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-light tracking-tight text-slate-900">Core capabilities</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-3xl p-6 bg-white/20 backdrop-blur-xl border border-white/40 shadow-lg">
              <f.icon size={36} weight="light" className="text-slate-800" />
              <h3 className="mt-4 text-lg tracking-tight text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600/90">Delivered by trained crews with documented SOPs and safety compliance.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
