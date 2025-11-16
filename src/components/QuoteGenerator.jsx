import React, { useMemo, useState } from 'react'
import { Calendar, DownloadSimple, EnvelopeSimple, MapPin, Phone, User, Buildings, Ruler, UsersThree } from '@phosphor-icons/react'

const services = [
  'Construction Site Final Clean',
  'Data Center Deep Clean',
  'Office / Facility Maintenance',
  'Hazard / Specialty',
]

function formatCurrency(n){
  return n.toLocaleString(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
}

export default function QuoteGenerator(){
  const [form, setForm] = useState({
    service: services[0],
    location: '',
    size: '',
    labourers: 4,
    startDate: '',
    duration: '2 days',
    name: '',
    email: '',
    phone: '',
  })

  const baseRate = useMemo(() => {
    switch(form.service){
      case 'Data Center Deep Clean': return 0.85
      case 'Construction Site Final Clean': return 0.65
      case 'Hazard / Specialty': return 1.2
      default: return 0.55
    }
  }, [form.service])

  const estimate = useMemo(() => {
    const size = parseFloat(form.size || '0')
    const crew = parseInt(form.labourers || '0', 10)
    const labour = crew * 320 // base per-day labour cost proxy
    const materials = size * 0.05
    const total = Math.max(800, size * baseRate + labour + materials)
    return Math.round(total)
  }, [form.size, form.labourers, baseRate])

  const handle = (k) => (e) => setForm(v => ({ ...v, [k]: e.target.value }))

  const downloadPdf = () => {
    const content = `Olympus Cleaning\nInstant Quote\nService: ${form.service}\nLocation: ${form.location}\nSize: ${form.size} sq ft\nCrew: ${form.labourers}\nStart: ${form.startDate}\nDuration: ${form.duration}\nContact: ${form.name} | ${form.email} | ${form.phone}\n\nEstimated Total: ${formatCurrency(estimate)}`
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'olympus-quote.txt'
    a.click()
    URL.revokeObjectURL(url)
  }

  const emailQuote = () => {
    const subject = encodeURIComponent('Olympus Cleaning — Instant Quote')
    const body = encodeURIComponent(`Hello,\n\nHere is my project info:\nService: ${form.service}\nLocation: ${form.location}\nSize: ${form.size} sq ft\nCrew: ${form.labourers}\nStart: ${form.startDate}\nDuration: ${form.duration}\n\nEstimated Total: ${formatCurrency(estimate)}\n\n— ${form.name} (${form.phone})`)
    window.location.href = `mailto:${form.email || 'sales@olympuscleaning.com'}?subject=${subject}&body=${body}`
  }

  return (
    <section id="quote" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="relative rounded-3xl bg-white/30 backdrop-blur-xl border border-white/40 shadow-xl p-6">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-white/40 to-white/10" />
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-light tracking-tight text-slate-900">Instant quote</h3>
              <span className="text-xs rounded-full px-3 py-1 bg-blue-600 text-white shadow">Glass UI</span>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field icon={Buildings} label="Service">
                <select value={form.service} onChange={handle('service')} className="field-input">
                  {services.map((s) => <option key={s}>{s}</option>)}
                </select>
              </Field>

              <Field icon={MapPin} label="Job location">
                <input value={form.location} onChange={handle('location')} placeholder="City, State" className="field-input" />
              </Field>

              <Field icon={Ruler} label="Project size (sq ft)">
                <input type="number" value={form.size} onChange={handle('size')} placeholder="e.g. 12,000" className="field-input" />
              </Field>

              <Field icon={UsersThree} label="Contract labourers">
                <input type="number" value={form.labourers} onChange={handle('labourers')} className="field-input" />
              </Field>

              <Field icon={Calendar} label="Start date">
                <input type="date" value={form.startDate} onChange={handle('startDate')} className="field-input" />
              </Field>

              <Field icon={Calendar} label="Estimated duration">
                <input value={form.duration} onChange={handle('duration')} placeholder="e.g. 3 days" className="field-input" />
              </Field>

              <Field icon={User} label="Contact name">
                <input value={form.name} onChange={handle('name')} placeholder="Full name" className="field-input" />
              </Field>

              <Field icon={EnvelopeSimple} label="Email">
                <input type="email" value={form.email} onChange={handle('email')} placeholder="name@company.com" className="field-input" />
              </Field>

              <Field icon={Phone} label="Phone">
                <input value={form.phone} onChange={handle('phone')} placeholder="(555) 555-5555" className="field-input" />
              </Field>
            </div>

            <div className="mt-6 grid sm:grid-cols-3 gap-3">
              <button className="btn-neu" onClick={emailQuote}><EnvelopeSimple size={18} className="mr-2" /> Email Quote</button>
              <button className="btn-neu" onClick={downloadPdf}><DownloadSimple size={18} className="mr-2" /> Download</button>
              <a href="#contact" className="btn-neu text-center">Talk to Sales</a>
            </div>
          </div>

          <div className="rounded-3xl bg-white/30 backdrop-blur-xl border border-white/40 shadow-xl p-6 flex flex-col justify-between">
            <div>
              <div className="text-sm uppercase tracking-wider text-slate-600/90">Estimated total</div>
              <div className="mt-2 text-5xl font-light tracking-tight text-slate-900">{formatCurrency(estimate)}</div>
              <p className="mt-2 text-sm text-slate-600/90">Pricing is an instant estimate. Final quote issued after site review and scope confirmation.</p>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="p-4 rounded-2xl bg-white/40 border border-white/50">
                <div className="text-slate-600/90">Service</div>
                <div className="text-slate-900/90 mt-1">{form.service}</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/40 border border-white/50">
                <div className="text-slate-600/90">Crew</div>
                <div className="text-slate-900/90 mt-1">{form.labourers} people</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/40 border border-white/50">
                <div className="text-slate-600/90">Size</div>
                <div className="text-slate-900/90 mt-1">{form.size || 0} sq ft</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/40 border border-white/50">
                <div className="text-slate-600/90">Start</div>
                <div className="text-slate-900/90 mt-1">{form.startDate || 'TBD'}</div>
              </div>
            </div>
            <div className="mt-6">
              <button className="btn-neu w-full">Confirm & Save Quote</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ icon: Icon, label, children }){
  return (
    <label className="block">
      <div className="text-xs uppercase tracking-wider text-slate-600/90 mb-1">{label}</div>
      <div className="flex items-center gap-2 rounded-2xl bg-white/50 border border-white/60 px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400/50">
        <Icon size={18} weight="light" className="text-slate-700/80" />
        {children}
      </div>
    </label>
  )
}
