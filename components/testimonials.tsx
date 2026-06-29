'use client'

import { testimonialsData } from '@/lib/data'
import { Star, Quote } from 'lucide-react'

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-card/50 relative">
      <div className="container-max">
        <div className="text-center mb-16 animate-slideUp">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="accent-line"></div>
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">Testimonials</span>
            <div className="accent-line"></div>
          </div>
          <h2 className="luxury-heading mb-4">Client Experiences</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our satisfied clients who have experienced North Star Limo's premium service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {testimonialsData.map((testimonial, idx) => (
            <div
              key={testimonial.id}
              className="group p-8 rounded-xl bg-background border border-border hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary/30 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="pt-6 border-t border-border">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">Verified Customer</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="p-12 rounded-xl bg-gradient-to-r from-primary via-primary/80 to-primary/60 text-center">
          <h3 className="luxury-heading text-2xl md:text-3xl text-primary-foreground mb-4">
            Ready to Experience Excellence?
          </h3>
          <p className="text-primary-foreground/90 mb-8 max-w-xl mx-auto">
            Join thousands of satisfied customers who trust North Star Limo for their transportation needs.
          </p>
          <a
            href="tel:(475) 341-8410"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary-foreground text-primary font-semibold rounded hover:shadow-lg transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -ml-32 -mt-32"></div>
    </section>
  )
}
