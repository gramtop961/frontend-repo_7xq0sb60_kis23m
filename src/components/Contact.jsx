import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-3xl font-light tracking-tight text-slate-900">Contact us</h2>
          <p className="mt-3 text-slate-700/90">We respond within one business day. For urgent jobs, call our 24/7 line.</p>
          <div className="mt-6 space-y-2 text-slate-700/90">
            <p><strong>Phone:</strong> (602) 555-0132</p>
            <p><strong>Email:</strong> sales@olympuscleaning.com</p>
            <p><strong>Address:</strong> Phoenix, Arizona</p>
          </div>
        </div>
        <form className="rounded-3xl bg-white/30 backdrop-blur-xl border border-white/40 shadow-xl p-6 grid grid-cols-2 gap-4">
          <input placeholder="Name" className="field-input col-span-2 sm:col-span-1" />
          <input placeholder="Email" type="email" className="field-input col-span-2 sm:col-span-1" />
          <input placeholder="Company" className="field-input col-span-2" />
          <textarea placeholder="How can we help?" className="field-input col-span-2 h-32" />
          <button className="btn-neu col-span-2">Send message</button>
        </form>
      </div>
    </section>
  )
}
