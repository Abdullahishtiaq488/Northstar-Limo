'use client';

import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { HeaderProfessional } from '@/components/header-professional';
import { FooterProfessional } from '@/components/footer-professional';
import { PageHeader } from '@/components/page-header';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: '(475) 341-8410',
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
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', serviceType: 'general', date: '', message: '' });
  };

  return (
    <>
      <HeaderProfessional />
      <main className="bg-background">
        <PageHeader
          subtitle="Get in Touch"
          title="Let's Plan Your Journey"
          description="Have questions or ready to book your next ride? Our team is here to help. Contact us today and experience premium transportation."
        />

        {/* Contact Info Cards */}
        <section className="section-pad-xl bg-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <div key={idx} className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/15 to-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
                    <div className="relative bg-background-secondary border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-sm text-foreground mb-1">{info.title}</h3>
                      <p className="text-xs font-semibold text-primary mb-2">{info.details}</p>
                      <p className="text-xs text-foreground-secondary">{info.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="section-pad-xl bg-background-secondary relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-background border border-border rounded-3xl p-8 sm:p-12">
              <h2 className="heading-luxury text-center mb-2">Send us a Message</h2>
              <p className="text-center text-foreground-secondary mb-10">
                Tell us about your transportation needs and we'll get back to you promptly.
              </p>

              {submitted ? (
                <div className="bg-gradient-to-r from-success/10 to-success/5 border border-success/30 rounded-2xl p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Thank You!</h3>
                  <p className="text-foreground-secondary">
                    We've received your message and will be in touch within 2 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    >
                      <option value="general">Select Service Type</option>
                      <option value="airport">Airport Transfer</option>
                      <option value="corporate">Corporate Travel</option>
                      <option value="event">Event Transportation</option>
                      <option value="wedding">Wedding Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />

                  <textarea
                    name="message"
                    placeholder="Tell us about your transportation needs..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  />

                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    Send Message
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <FooterProfessional />
    </>
  );
}
