'use client'

import { Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { contactInfo, featuresData } from '@/lib/data'

export function Hero() {
  return (
    <section id="home" className="section-padding relative overflow-hidden pt-8 md:pt-16">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slideUp">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="accent-line"></div>
                <span className="text-sm font-semibold text-primary uppercase tracking-widest">Featured</span>
              </div>
              <h1 className="luxury-heading text-5xl md:text-6xl lg:text-7xl leading-tight">
                Premium <span className="gradient-text">Ground Transportation</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Experience elegance and reliability with North Star Limo. From airport transfers to corporate events, we deliver exceptional service every journey.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-4 py-6">
              {featuresData.slice(0, 3).map((feature, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">{feature.title}</p>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={`tel:${contactInfo.phone}`}
                className="button-luxury inline-flex items-center justify-center gap-2 group"
              >
                <span>Call Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="button-outline-luxury"
              >
                Get a Quote
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden animate-slideInRight">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/10"></div>
            
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -ml-48 -mb-48"></div>

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <div className="text-5xl md:text-6xl">🚗</div>
              </div>
              <h3 className="luxury-heading text-2xl md:text-3xl mb-4">Luxury Fleet</h3>
              <p className="text-muted-foreground mb-8 max-w-xs">
                Choose from our curated selection of premium vehicles
              </p>
              <Link href="#fleet" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                View Fleet <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
