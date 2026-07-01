'use client';

import { Mail, Phone, MapPin, Clock, Send, CheckCircle, ArrowRight } from 'lucide-react';
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
    href: 'tel:+14753418410',
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'mynorthstarlimo@gmail.com',
    description: 'We respond within 2 hours',
    href: 'mailto:mynorthstarlimo@gmail.com',
  },
  {
    icon: MapPin,
    title: 'Address',
    details: 'Waterbury, CT',
    description: '245 Colonial Ave, Unit 1A, 06704',
    href: '#',
  },
  {
    icon: Clock,
    title: 'Hours',
    details: '24/7 Service',
    description: 'Always available for your needs',
    href: '#',
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

        {/* Contact Info Cards - Clean, no blur */}
        <section className="section-pad-xl bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <a
                    key={idx}
                    href={info.href}
                    className="group block bg-background-secondary border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 dark:bg-background-secondary/50"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm text-foreground mb-1 group-hover:text-primary transition-colors">
                          {info.title}
                        </h3>
                        <p className="text-sm font-medium text-primary break-words">{info.details}</p>
                        <p className="text-xs text-foreground-secondary mt-1">{info.description}</p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Form + Map Section - Two column layout */}
        <section className="section-pad-xl bg-background-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form - takes 2/3 */}
              <div className="lg:col-span-2">
                <div className="bg-background border border-border rounded-3xl p-8 sm:p-10 shadow-sm dark:bg-background/80">
                  <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
                      Send us a Message
                    </h2>
                    <p className="text-foreground-secondary">
                      Tell us about your transportation needs and we'll get back to you promptly.
                    </p>
                  </div>

                  {submitted ? (
                    <div className="bg-success/10 border border-success/30 rounded-2xl p-8 text-center">
                      <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-foreground mb-2">Thank You!</h3>
                      <p className="text-foreground-secondary">
                        We've received your message and will be in touch within 2 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-semibold text-foreground-secondary mb-1.5">
                            Full Name <span className="text-primary">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-background-secondary border border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none dark:bg-background/50"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-foreground-secondary mb-1.5">
                            Email Address <span className="text-primary">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-background-secondary border border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none dark:bg-background/50"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-semibold text-foreground-secondary mb-1.5">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            placeholder="(123) 456-7890"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-background-secondary border border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none dark:bg-background/50"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-foreground-secondary mb-1.5">
                            Service Type
                          </label>
                          <select
                            name="serviceType"
                            value={formData.serviceType}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-background-secondary border border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none appearance-none dark:bg-background/50"
                          >
                            <option value="general">General Inquiry</option>
                            <option value="airport">Airport Transfer</option>
                            <option value="corporate">Corporate Travel</option>
                            <option value="event">Event Transportation</option>
                            <option value="wedding">Wedding Services</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-foreground-secondary mb-1.5">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-background-secondary border border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none dark:bg-background/50"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-foreground-secondary mb-1.5">
                          Message <span className="text-primary">*</span>
                        </label>
                        <textarea
                          name="message"
                          placeholder="Tell us about your transportation needs..."
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          required
                          className="w-full px-4 py-3 bg-background-secondary border border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none dark:bg-background/50"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full sm:w-auto px-8 py-3.5 bg-primary hover:bg-primary-dark text-primary-foreground font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5"
                      >
                        Send Message
                        <Send className="w-4 h-4" />
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Sidebar - Map / Location */}
              <div className="lg:col-span-1">
                <div className="bg-background border border-border rounded-3xl p-6 shadow-sm h-full flex flex-col dark:bg-background/80">
                  <h3 className="font-bold text-foreground text-lg mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Find Us
                  </h3>
                  <div className="flex-1 bg-background-secondary rounded-xl overflow-hidden min-h-[220px] relative border border-border dark:bg-background/50">
                    {/* Replace with actual map embed */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-foreground-secondary p-4 text-center">
                      <MapPin className="w-10 h-10 text-primary/40 mb-2" />
                      <p className="text-sm font-medium">245 Colonial Ave, Unit 1A</p>
                      <p className="text-sm">Waterbury, CT 06704</p>
                      <a
                        href="https://maps.google.com/maps?q=245+Colonial+Ave,+Waterbury,+CT+06704"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 text-xs text-primary hover:underline font-medium inline-flex items-center gap-1"
                      >
                        Open in Google Maps <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                  <div className="mt-4 space-y-1.5 text-xs text-foreground-secondary">
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Free parking available
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Wheelchair accessible
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Professional chauffeurs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterProfessional />
    </>
  );
}