'use client'

import { fleetData } from '@/lib/data'
import { Zap } from 'lucide-react'

export function Fleet() {
  return (
    <section id="fleet" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16 animate-slideUp">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="accent-line"></div>
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">Our Fleet</span>
            <div className="accent-line"></div>
          </div>
          <h2 className="luxury-heading mb-4">Premium Vehicle Selection</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our diverse fleet of luxury vehicles accommodates all transportation needs, from intimate group travel to large corporate events.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {fleetData.map((vehicle, idx) => (
            <div
              key={vehicle.id}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-card to-background border border-border hover:border-primary transition-all duration-300 h-80"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Vehicle Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/5"></div>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-6 z-10">
                <div className="space-y-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span className="text-2xl">🚗</span>
                  </div>
                  <div>
                    <h3 className="luxury-heading text-lg mb-2 group-hover:text-primary transition-colors">
                      {vehicle.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {vehicle.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="flex items-center gap-2 pt-4 border-t border-border">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Premium Features</span>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Info Banner */}
        <div className="mt-16 p-8 md:p-12 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/5 border border-primary/20">
          <div className="max-w-3xl">
            <h3 className="luxury-heading text-2xl mb-3">All Vehicles Include</h3>
            <ul className="grid md:grid-cols-2 gap-4">
              {['Professional Chauffeur', 'Climate Control', 'Entertainment System', 'Luxury Amenities', 'GPS Navigation', 'Complimentary WiFi'].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
