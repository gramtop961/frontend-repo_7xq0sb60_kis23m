import React, { useEffect, useState } from 'react'
import { List, X } from '@phosphor-icons/react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#quote', label: 'Get a Quote' },
  { href: '#how', label: 'How it Works' },
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
  }, [open])

  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}>        
        <motion.nav
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={`mt-4 rounded-2xl border ${scrolled ? 'backdrop-blur-xl bg-white/50 border-white/30 shadow-lg' : 'backdrop-blur-md bg-white/30 border-white/20'} px-5 py-3 flex items-center justify-between`}
        >
          <a href="#home" className="flex items-center gap-3">
            <LogoMark />
            <div className="leading-tight">
              <div className="text-slate-900 tracking-tight font-light text-lg">Olympus Cleaning</div>
              <div className="text-xs text-slate-600/70 tracking-wider uppercase">Arizona • Commercial</div>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-slate-700/80 hover:text-slate-900 transition tracking-tight text-sm">
                {l.label}
              </a>
            ))}
            <a href="#quote" className="btn-neu">Get a Free Quote</a>
          </div>

          <button className="md:hidden p-2 rounded-xl bg-white/40 border border-white/30 shadow-sm" onClick={() => setOpen(true)} aria-label="Open menu">
            <List size={28} weight="regular" />
          </button>
        </motion.nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 200, damping: 24 }}
            className="fixed top-0 right-0 h-screen w-[88%] sm:w-[420px] bg-white/70 backdrop-blur-2xl border-l border-white/40 shadow-2xl p-6 flex flex-col"
          >
            <div className="flex items-center justify-between">
              <a href="#home" onClick={() => setOpen(false)} className="flex items-center gap-3">
                <LogoMark compact />
                <span className="text-slate-900 font-medium tracking-tight">Olympus Cleaning</span>
              </a>
              <button onClick={() => setOpen(false)} className="p-2 rounded-xl bg-white/40 border border-white/30" aria-label="Close menu">
                <X size={26} />
              </button>
            </div>
            <div className="mt-8 flex flex-col gap-4">
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-slate-800 text-lg">
                  {l.label}
                </a>
              ))}
            </div>
            <div className="mt-auto pt-6">
              <a href="#quote" onClick={() => setOpen(false)} className="btn-neu w-full text-center block">Get a Free Quote</a>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  )
}

function LogoMark({ compact = false }) {
  return (
    <svg width={compact ? 28 : 36} height={compact ? 28 : 36} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="50%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#7dd3fc" />
        </linearGradient>
      </defs>
      <path d="M32 6L10 30h14l8-9 8 9h14L32 6z" fill="url(#g)" opacity="0.95" />
      <path d="M10 34l22 24 22-24H42L32 46 22 34H10z" fill="url(#g)" opacity="0.7" />
    </svg>
  )
}
