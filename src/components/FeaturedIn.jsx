import React from 'react'

export default function FeaturedIn(){
  const logos = [
    'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/0/08/Google_New_Logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/2/24/Intel-logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/5/51/Apple_logo_black.svg',
  ]
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm uppercase tracking-widest text-slate-500/80">Trusted by builders and enterprise teams</p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center opacity-80">
          {logos.map((src, i) => (
            <img key={i} src={src} className="h-8 mx-auto object-contain" />
          ))}
        </div>
      </div>
    </section>
  )
}
