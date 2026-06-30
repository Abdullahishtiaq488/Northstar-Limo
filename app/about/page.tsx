'use client';

import { Award, Users, CheckCircle, Heart, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { HeaderProfessional } from '@/components/header-professional';
import { FooterProfessional } from '@/components/footer-professional';
import { PageHeader } from '@/components/page-header';

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
    description: 'We deliver premium service with meticulous attention to every detail and unwavering quality standards.',
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'Your satisfaction is our top priority in everything we do, from booking to journey completion.',
  },
  {
    icon: CheckCircle,
    title: 'Reliability',
    description: 'Punctuality and consistency define our commitment to professional transportation excellence.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'We genuinely care about making your journey exceptional and memorable every single time.',
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
    bio: 'Sarah ensures every ride is perfectly coordinated with 15 years of operational excellence and precision.',
  },
  {
    name: 'Michael Torres',
    role: 'Fleet Manager',
    bio: 'Michael maintains our pristine fleet of luxury vehicles with uncompromising standards and expertise.',
  },
  {
    name: 'Emma Chen',
    role: 'Customer Service Director',
    bio: 'Emma leads our award-winning customer service team dedicated to exceeding your expectations.',
  },
];

export default function AboutPage() {
  return (
    <>
      <HeaderProfessional />
      <main className="bg-background">
        <PageHeader
          subtitle="Our Story"
          title="Luxury Transportation Since 2009"
          description="North Star Limo has been setting the standard for premium transportation across Connecticut and New York, delivering exceptional service to over 50,000 satisfied clients."
        />

        {/* Mission Section */}
        <section className="section-pad-xl bg-background-secondary relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="heading-luxury text-center mb-8">Our Mission</h2>
            <p className="text-lg leading-relaxed text-foreground-secondary text-center mb-6">
              At North Star Limo, our mission is to redefine luxury transportation by providing unparalleled service, professional expertise, and unforgettable experiences for every client. We believe that transportation should be more than just a ride—it should be an extension of excellence and sophistication.
            </p>
            <p className="text-lg leading-relaxed text-foreground-secondary text-center">
              We are committed to maintaining the highest standards of safety, reliability, and customer satisfaction, ensuring that every journey with us is a premium experience from start to finish.
            </p>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="section-pad-xl bg-background relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm font-semibold text-primary tracking-wider uppercase">
                    Our Journey
                  </span>
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
              </div>
              <h2 className="heading-luxury">Milestones & Achievements</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map((milestone, idx) => (
                <div key={idx} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative bg-background-secondary border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
                    <div className="text-3xl font-serif font-bold text-primary mb-2">{milestone.year}</div>
                    <h3 className="font-bold text-foreground mb-2">{milestone.title}</h3>
                    <p className="text-sm text-foreground-secondary leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="section-pad-xl bg-background-secondary relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm font-semibold text-primary tracking-wider uppercase">
                    Core Values
                  </span>
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
              </div>
              <h2 className="heading-luxury">What Drives Us Forward</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, idx) => {
                const Icon = value.icon;
                return (
                  <div key={idx} className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/15 to-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
                    <div className="relative bg-background border border-border rounded-2xl p-8 transition-all duration-300 hover:border-primary/30">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 mb-6 group-hover:from-primary/30 group-hover:to-accent/20 transition-colors">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                      <p className="text-foreground-secondary leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="section-pad-xl bg-background relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm font-semibold text-primary tracking-wider uppercase">
                    Leadership
                  </span>
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
              </div>
              <h2 className="heading-luxury">Meet Our Team</h2>
              <p className="text-foreground-secondary text-lg mt-4 max-w-2xl mx-auto">
                Our experienced team of professionals is dedicated to delivering exceptional service with expertise and passion.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, idx) => (
                <div key={idx} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/10 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative bg-background-secondary border border-border rounded-xl p-6 text-center hover:border-primary/30 transition-all duration-300">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground mb-1">{member.name}</h3>
                    <p className="text-sm text-primary font-semibold mb-3">{member.role}</p>
                    <p className="text-sm text-foreground-secondary leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-pad-xl bg-gradient-to-b from-background-secondary to-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="heading-luxury mb-6">Experience the North Star Difference</h2>
            <p className="text-lg text-foreground-secondary mb-8">
              Ready to discover why we're the premier choice for luxury transportation? Contact us today.
            </p>
            <a href="/contact" className="btn-primary">
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>
      <FooterProfessional />
    </>
  );
}
