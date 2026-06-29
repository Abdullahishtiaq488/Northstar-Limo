'use client'

import { useState } from 'react'
import { faqData } from '@/lib/data'
import { ChevronDown } from 'lucide-react'

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    )
  }

  let itemId = 0

  return (
    <section id="faq" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16 animate-slideUp">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="accent-line"></div>
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">FAQ</span>
            <div className="accent-line"></div>
          </div>
          <h2 className="luxury-heading mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services and how we can assist you.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((category) => (
            <div key={category.category} className="space-y-4">
              <h3 className="luxury-heading text-lg px-6 py-4 bg-primary/5 rounded-lg border border-primary/20">
                {category.category}
              </h3>

              <div className="space-y-3">
                {category.items.map((item) => {
                  const id = itemId++
                  const isOpen = openItems.includes(id)

                  return (
                    <div
                      key={id}
                      className="border border-border rounded-lg overflow-hidden bg-background hover:border-primary/50 transition-colors"
                    >
                      <button
                        onClick={() => toggleItem(id)}
                        className="w-full p-6 flex items-center justify-between gap-4 hover:bg-muted/50 transition-colors group"
                      >
                        <span className="text-left font-semibold text-foreground group-hover:text-primary transition-colors">
                          {item.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-6 pt-2 border-t border-border bg-muted/30 animate-slideUp">
                          <p className="text-muted-foreground leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Help */}
        <div className="mt-16 p-8 md:p-12 rounded-xl bg-gradient-to-r from-secondary/5 to-primary/5 border border-border text-center">
          <h3 className="luxury-heading text-xl mb-3">Can't find what you're looking for?</h3>
          <p className="text-muted-foreground mb-6">
            Our team is ready to help. Contact us for personalized assistance.
          </p>
          <a
            href="tel:(475) 341-8410"
            className="inline-block button-luxury"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}
