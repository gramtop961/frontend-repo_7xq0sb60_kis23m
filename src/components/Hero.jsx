import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative pt-36 pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 right-1/2 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-blue-200/60 to-cyan-200/40 blur-3xl" />
        <div className="absolute -bottom-20 left-1/2 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-indigo-200/50 to-blue-100/50 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center"
        >
          <p className="inline-block rounded-full border border-white/40 bg-white/30 backdrop-blur-md px-3 py-1 text-xs tracking-wider uppercase text-slate-700/80">Arizona • Commercial Cleaning</p>
          <h1 className="mt-5 text-5xl sm:text-6xl font-light tracking-tight text-slate-900">
            Olympus Cleaning
          </h1>
          <p className="mt-4 text-slate-700/80 max-w-2xl mx-auto">
            Precision commercial cleaning trusted by construction firms, data centers, and enterprise facilities. Professional, fast, and compliance-first.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a href="#quote" className="btn-neu text-base">Get a Free Quote</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mt-14"
        >
          <div className="aspect-[16/8] rounded-3xl overflow-hidden border border-white/40 bg-white/30 backdrop-blur-xl shadow-xl">
            <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop" alt="Commercial cleaning" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
