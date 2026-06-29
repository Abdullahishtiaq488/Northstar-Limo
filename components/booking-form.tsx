'use client'

import { useState } from 'react'
import { MapPin, Users, Briefcase, Calendar, Clock, Phone, Mail, User, ArrowRight } from 'lucide-react'

export function BookingForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    fromAddress: '',
    toAddress: '',
    date: '',
    time: '',
    passengers: '',
    luggage: '',
    name: '',
    phone: '',
    email: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setStep(1)
      setFormData({
        fromAddress: '',
        toAddress: '',
        date: '',
        time: '',
        passengers: '',
        luggage: '',
        name: '',
        phone: '',
        email: '',
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="booking" className="section-padding bg-card/30 relative">
      <div className="container-max">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-slideUp">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="accent-line"></div>
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">Book Now</span>
              <div className="accent-line"></div>
            </div>
            <h2 className="luxury-heading mb-4">Get Your Quotation</h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below to receive a personalized quote for your transportation needs.
            </p>
          </div>

          {submitted ? (
            <div className="p-12 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/5 border border-primary/30 text-center animate-scaleIn">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="luxury-heading text-2xl mb-3 text-primary">Thank You!</h3>
              <p className="text-foreground mb-2">We've received your booking request.</p>
              <p className="text-muted-foreground">We'll contact you within 2 hours with a detailed quote.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8 md:p-12 rounded-xl bg-background border border-border">
              {/* Step Indicator */}
              <div className="flex items-center gap-2 mb-8">
                {[1, 2].map(s => (
                  <div key={s} className="flex items-center gap-2">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                      s === step
                        ? 'bg-primary text-primary-foreground'
                        : s < step
                        ? 'bg-primary/30 text-primary'
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {s}
                    </div>
                    {s === 1 && <span className="text-sm font-medium text-foreground">Trip Details</span>}
                    {s === 2 && <span className="text-sm font-medium text-foreground">Your Information</span>}
                    {s < 2 && <div className="w-8 h-0.5 bg-muted ml-2"></div>}
                  </div>
                ))}
              </div>

              {/* Step 1: Trip Details */}
              {step === 1 && (
                <div className="space-y-6 animate-slideUp">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Pickup Location</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-3.5 w-5 h-5 text-primary pointer-events-none" />
                      <input
                        type="text"
                        name="fromAddress"
                        placeholder="Enter pickup address"
                        value={formData.fromAddress}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Destination</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-3.5 w-5 h-5 text-primary pointer-events-none" />
                      <input
                        type="text"
                        name="toAddress"
                        placeholder="Enter destination address"
                        value={formData.toAddress}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-3.5 w-5 h-5 text-primary pointer-events-none" />
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-3 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Time</label>
                      <div className="relative">
                        <Clock className="absolute left-4 top-3.5 w-5 h-5 text-primary pointer-events-none" />
                        <input
                          type="time"
                          name="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-3 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Passengers</label>
                      <div className="relative">
                        <Users className="absolute left-4 top-3.5 w-5 h-5 text-primary pointer-events-none" />
                        <input
                          type="number"
                          name="passengers"
                          min="1"
                          placeholder="Number of passengers"
                          value={formData.passengers}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Luggage</label>
                      <div className="relative">
                        <Briefcase className="absolute left-4 top-3.5 w-5 h-5 text-primary pointer-events-none" />
                        <input
                          type="number"
                          name="luggage"
                          min="0"
                          placeholder="Number of luggage"
                          value={formData.luggage}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full button-luxury inline-flex items-center justify-center gap-2 mt-2"
                  >
                    Continue <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Step 2: Personal Information */}
              {step === 2 && (
                <div className="space-y-6 animate-slideUp">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-3.5 w-5 h-5 text-primary pointer-events-none" />
                      <input
                        type="text"
                        name="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-3.5 w-5 h-5 text-primary pointer-events-none" />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-3.5 w-5 h-5 text-primary pointer-events-none" />
                      <input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 button-outline-luxury"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 button-luxury inline-flex items-center justify-center gap-2"
                    >
                      Get Quote <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -mr-32 -mb-32"></div>
    </section>
  )
}
