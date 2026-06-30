'use client';

import { Users, Briefcase, Heart, Clock, Shield, Zap, ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { HeaderProfessional } from '@/components/header-professional';
import { FooterProfessional } from '@/components/footer-professional';
import { PageHeader } from '@/components/page-header';
import { ServiceCardPremium } from '@/components/service-card-premium';

const allServices = [
  {
    icon: Users,
    title: 'Group Events',
    description: 'Perfect for weddings, corporate retreats, and celebrations. Capacity up to 14 passengers with premium amenities.',
    features: ['Up to 14 passengers', 'Custom itineraries', 'Professional drivers', 'Real-time tracking'],
  },
  {
    icon: Briefcase,
    title: 'Corporate Travel',
    description: 'Executive transportation for business meetings, conferences, and VIP clients with professional chauffeurs.',
    features: ['24/7 availability', 'Flexible scheduling', 'Expense reporting', 'Priority booking'],
  },
  {
    icon: Heart,
    title: 'Special Occasions',
    description: 'Make your special moments unforgettable with our premium event transportation tailored to your celebration.',
    features: ['Wedding transportation', 'Anniversary services', 'Engagement parties', 'Personal touch'],
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Round-the-clock service with professional drivers ready whenever you need us, day or night.',
    features: ['Immediate response', 'No wait times', 'Quick pickups', 'Emergency service'],
  },
  {
    icon: Shield,
    title: 'Premium Safety',
    description: 'Fully insured, professionally trained drivers, and meticulously maintained vehicles for your peace of mind.',
    features: ['Background checks', 'Safety inspections', 'Insurance coverage', 'Certified drivers'],
  },
  {
    icon: Zap,
    title: 'Instant Booking',
    description: 'Easy online reservation system with real-time confirmation and flexible cancellation policies.',
    features: ['Mobile app', 'Web booking', 'Real-time confirmation', 'Easy modifications'],
  },
  {
    icon: Users,
    title: 'Airport Transfers',
    description: 'Reliable airport transportation with real-time flight tracking and complimentary wait time.',
    features: ['Flight tracking', 'No extra charges', 'Flexible timing', 'Multiple terminals'],
  },
  {
    icon: Heart,
    title: 'Wedding Services',
    description: 'Complete wedding transportation packages including ceremony, reception, and guest coordination.',
    features: ['Multi-vehicle coordination', 'Timeline management', 'Professional staff', 'Day-of support'],
  },
  {
    icon: Briefcase,
    title: 'Executive Packages',
    description: 'VIP service with premium vehicles, experienced drivers, and white-glove treatment for executives.',
    features: ['Luxury vehicles', 'Premium drivers', 'Concierge service', 'Confidentiality'],
  },
];

export default function ServicesPage() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = itemsRef.current.indexOf(entry.target as HTMLDivElement);
          if (entry.isIntersecting && index !== -1) {
            setVisibleItems((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <HeaderProfessional />
      <main>
        <PageHeader
          subtitle="Our Expertise"
          title="World-Class Transportation Services"
          description="Discover our comprehensive range of premium transportation solutions designed to meet every travel need with excellence and professionalism."
        />

        {/* Services Grid */}
        <section className="section-pad-xl bg-background relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allServices.map((service, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    itemsRef.current[index] = el;
                  }}
                  className={`transition-all duration-700 ${
                    visibleItems[index]
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-12'
                  }`}
                >
                  <ServiceCardPremium
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    features={service.features}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-pad-xl bg-gradient-to-b from-background to-background-secondary relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="heading-luxury mb-6">Ready to Experience Premium Transportation?</h2>
            <p className="body-text max-w-2xl mx-auto mb-8">
              Contact us today to learn more about our services and get a customized quote for your transportation needs.
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
