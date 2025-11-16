import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedIn from './components/FeaturedIn'
import Testimonials from './components/Testimonials'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Mission from './components/Mission'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import QuoteGenerator from './components/QuoteGenerator'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'

export default function App(){
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      <main>
        <Hero />
        <FeaturedIn />
        <section id="about" className="sr-only" />
        <QuoteGenerator />
        <Testimonials />
        <HowItWorks />
        <Features />
        <Mission />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
