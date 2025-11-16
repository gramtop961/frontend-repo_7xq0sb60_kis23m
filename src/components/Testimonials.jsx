import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  { quote: 'Saved us 3 days of post-construction cleanup.', author: 'Site Supervisor, Phoenix', badge: 'Construction' },
  { quote: 'Compliant with hyperscale data center regulations.', author: 'Operations Lead, Mesa', badge: 'Data Center' },
  { quote: 'Crew was on-site within 12 hours—impeccable results.', author: 'Facilities Director, Scottsdale', badge: 'Rapid Response' },
  { quote: 'Zero dust policy passed our white-glove inspection.', author: 'Project Manager, Tempe', badge: 'Quality' },
]

export default function Testimonials(){
  return (
    <section className="py-20" id="testimonials">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-light tracking-tight text-slate-900">What clients say</h2>
        </div>
        <div className="mt-8 overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 24, ease: 'linear' }}
            className="flex gap-6"
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="min-w-[320px] max-w-md rounded-3xl bg-white/30 backdrop-blur-xl border border-white/40 shadow-lg p-6">
                <div className="text-xs uppercase tracking-wider text-slate-600/80">{t.badge}</div>
                <p className="mt-3 text-slate-800/90">“{t.quote}”</p>
                <div className="mt-4 text-sm text-slate-600">{t.author}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
