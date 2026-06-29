'use client'

import { servicesData } from '@/lib/data'
import { ArrowRight } from 'lucide-react'

export function Services() {
  return (
    <section id="services" className="section-padding bg-card/30 relative">
      <div className="container-max">
        <div className="text-center mb-16 animate-slideUp">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="accent-line"></div>
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">Our Services</span>
            <div className="accent-line"></div>
          </div>
          <h2 className="luxury-heading mb-4">Comprehensive Transportation Solutions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            North Star Limo offers an exclusive array of premier transportation services tailored to elevate every journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-xl bg-background border border-border hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="luxury-heading text-xl mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              <button className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl -ml-32 -mb-32"></div>
    </section>
  )
}
