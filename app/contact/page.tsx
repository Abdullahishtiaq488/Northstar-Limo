'use client';

import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { HeaderProfessional } from '@/components/header-professional';
import { FooterProfessional } from '@/components/footer-professional';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: '(203) 555-0123',
    description: 'Available 24/7 for booking and inquiries',
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'info@northstarlimo.com',
    description: 'We respond within 2 hours',
  },
  {
    icon: MapPin,
    title: 'Address',
    details: 'New Haven, Connecticut',
    description: 'Serving Connecticut and New York',
  },
  {
    icon: Clock,
    title: 'Hours',
    details: '24/7 Service',
    description: 'Always available for your needs',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'general',
    date: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to a backend or email service
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: 'general',
        date: '',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <HeaderProfessional />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">Get In Touch</span>
            <h1 className="heading-luxury mt-2 mb-6">
              Ready to Book Your<br />
              <span className="text-primary">Luxury Transportation?</span>
            </h1>
            <p className="body-text text-lg max-w-2xl">
              Contact our team today and let us help you plan the perfect journey. We&apos;re here 24/7 to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-pad-xl bg-background-secondary relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="card p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{info.title}</h3>
                  <p className="text-foreground font-semibold text-sm mb-2">{info.details}</p>
                  <p className="text-xs text-foreground-tertiary">{info.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="section-pad-xl bg-background relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="heading-luxury mb-8">Send us a Message</h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <div className="text-4xl mb-4">✓</div>
                  <h3 className="font-bold text-lg mb-2 text-green-900">Thank you for contacting us!</h3>
                  <p className="text-green-700">We&apos;ll get back to you shortly with more information.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background-secondary text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background-secondary text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background-secondary text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="(203) 555-0123"
                    />
                  </div>

                  {/* Service Type */}
                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-semibold mb-2">
                      Service Type
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background-secondary text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="airport">Airport Transfer</option>
                      <option value="wedding">Wedding Service</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="special">Special Occasion</option>
                    </select>
                  </div>

                  {/* Date */}
                  <div>
                    <label htmlFor="date" className="block text-sm font-semibold mb-2">
                      Preferred Date (Optional)
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background-secondary text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background-secondary text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                      placeholder="Tell us about your transportation needs..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn-primary w-full"
                  >
                    Send Message
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>

            {/* Info & Services */}
            <div>
              <h2 className="heading-luxury mb-8">Why Choose Us?</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg mb-2">Professional Chauffeurs</h3>
                  <p className="text-foreground-secondary">
                    Highly trained, courteous drivers with extensive experience in luxury transportation.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">Premium Fleet</h3>
                  <p className="text-foreground-secondary">
                    Meticulously maintained luxury vehicles including limousines, sedans, and SUVs.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">24/7 Availability</h3>
                  <p className="text-foreground-secondary">
                    Round-the-clock service with instant booking and flexible scheduling.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">Transparent Pricing</h3>
                  <p className="text-foreground-secondary">
                    No hidden fees. Get a detailed quote before you book your ride.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">Fully Insured</h3>
                  <p className="text-foreground-secondary">
                    Complete insurance coverage for your peace of mind and protection.
                  </p>
                </div>

                <Link href="/services" className="btn-secondary mt-8">
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-pad-xl bg-background-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="heading-luxury mb-4">Still Have Questions?</h2>
          <p className="body-text max-w-2xl mx-auto mb-6">
            Call us directly at <span className="font-semibold">(203) 555-0123</span> or visit us to discuss your needs.
          </p>
          <a href="tel:+12035550123" className="btn-primary inline-flex">
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </div>
      </section>

      <FooterProfessional />
    </div>
  );
}
