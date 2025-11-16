import React from 'react'

export default function Footer(){
  return (
    <footer className="py-12 border-t border-white/40 bg-white/30 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <svg width="28" height="28" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gf" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1e3a8a" />
                <stop offset="50%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#7dd3fc" />
              </linearGradient>
            </defs>
            <path d="M32 6L10 30h14l8-9 8 9h14L32 6z" fill="url(#gf)" opacity="0.95" />
            <path d="M10 34l22 24 22-24H42L32 46 22 34H10z" fill="url(#gf)" opacity="0.7" />
          </svg>
          <span className="text-slate-900 font-medium tracking-tight">Olympus Cleaning</span>
        </div>
        <div className="text-sm text-slate-700/80">© {new Date().getFullYear()} Olympus Cleaning. All rights reserved.</div>
        <div className="flex items-center gap-4 text-sm">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  )
}
