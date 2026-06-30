'use client';

import { Award, Users, CheckCircle, Heart } from 'lucide-react';
import Link from 'next/link';
import { HeaderProfessional } from '@/components/header-professional';
import { FooterProfessional } from '@/components/footer-professional';

const milestones = [
  { year: '2009', title: 'Founded', description: 'North Star Limo founded with a vision for luxury transportation' },
  { year: '2015', title: 'Expansion', description: 'Expanded service area across Connecticut and New York' },
  { year: '2019', title: 'Recognition', description: 'Awarded Best Luxury Transportation Service in the region' },
  { year: '2024', title: 'Excellence', description: 'Serving over 50,000+ satisfied customers annually' },
];

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'We deliver premium service with meticulous attention to every detail.',
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'Your satisfaction is our top priority in everything we do.',
  },
  {
    icon: CheckCircle,
    title: 'Reliability',
    description: 'Punctuality and consistency define our commitment to you.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'We genuinely care about making your journey exceptional.',
  },
];

const team = [
  {
    name: 'James Anderson',
    role: 'CEO & Founder',
    bio: 'With 25+ years in the luxury transportation industry, James founded North Star Limo to set new standards of excellence.',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Director of Operations',
    bio: 'Sarah ensures every ride is perfectly coordinated with 15 years of operational excellence.',
  },
  {
    name: 'Michael Torres',
    role: 'Fleet Manager',
    bio: 'Michael maintains our pristine fleet of luxury vehicles with uncompromising standards.',
  },
  {
    name: 'Emma Chen',
    role: 'Customer Service Director',
    bio: 'Emma leads our award-winning customer service team dedicated to your satisfaction.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderProfessional />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">Our Story</span>
            <h1 className="heading-luxury mt-2 mb-6">
              Luxury Transportation<br />
              <span className="text-primary">Since 2009</span>
            </h1>
            <p className="body-text text-lg max-w-2xl">
              North Star Limo has been setting the standard for premium transportation across Connecticut and New York, delivering exceptional service to over 50,000 satisfied clients.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-pad-xl bg-background-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-luxury mb-6">Our Mission</h2>
              <p className="body-text mb-6">
                To provide the finest luxury transportation experience by combining professional excellence, meticulous attention to detail, and genuine care for our clients.
              </p>
              <p className="body-text mb-8">
                Every journey with North Star Limo is an opportunity to exceed expectations. From the moment you book until you reach your destination, we ensure every detail reflects our commitment to your comfort and satisfaction.
              </p>
              <Link href="/services" className="btn-primary">
                Explore Our Services
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6 border border-primary/20">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <p className="text-sm text-foreground-secondary">Years of Excellence</p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6 border border-primary/20">
                <div className="text-4xl font-bold text-primary mb-2">50k+</div>
                <p className="text-sm text-foreground-secondary">Happy Customers</p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6 border border-primary/20">
                <div className="text-4xl font-bold text-primary mb-2">4.9★</div>
                <p className="text-sm text-foreground-secondary">Average Rating</p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6 border border-primary/20">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <p className="text-sm text-foreground-secondary">Availability</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-pad-xl bg-background relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-luxury mb-4">Our Core Values</h2>
            <p className="body-text max-w-2xl mx-auto">
              These principles guide everything we do and define our commitment to you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="card p-6 text-center hover:shadow-lg transition-all">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-foreground-secondary">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-pad-xl bg-background-secondary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-luxury mb-4">Our Journey</h2>
            <p className="body-text max-w-2xl mx-auto">
              15 years of delivering excellence and building lasting relationships.
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20 border-2 border-primary">
                    <span className="text-sm font-bold text-primary">{milestone.year}</span>
                  </div>
                </div>
                <div className="flex-grow pt-2">
                  <h3 className="font-bold text-lg mb-1">{milestone.title}</h3>
                  <p className="text-foreground-secondary">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-pad-xl bg-background relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-luxury mb-4">Our Leadership Team</h2>
            <p className="body-text max-w-2xl mx-auto">
              Meet the dedicated professionals behind North Star Limo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-light mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">{member.name.charAt(0)}</span>
                </div>
                <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-sm text-foreground-secondary">{member.bio}</p>
              </div>
            ))}
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
          <h2 className="heading-luxury mb-6">Experience the North Star Difference</h2>
          <p className="body-text max-w-2xl mx-auto mb-8">
            Join thousands of satisfied customers who trust us for their transportation needs.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in Touch Today
          </Link>
        </div>
      </section>

      <FooterProfessional />
    </div>
  );
}
