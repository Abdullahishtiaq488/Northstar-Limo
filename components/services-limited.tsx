'use client';

import { Users, Briefcase, Heart, ArrowRight, Zap, Shield, Clock } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ServiceCardPremium } from './service-card-premium';

const servicesPreview = [
  {
    icon: Users,
    title: 'Group Events',
    description: 'Perfect for weddings, corporate retreats, and celebrations with premium amenities.',
    features: ['Up to 14 passengers', 'Custom itineraries', 'Professional drivers'],
  },
  {
    icon: Briefcase,
    title: 'Corporate Travel',
    description: 'Executive transportation for business meetings, conferences, and VIP clients.',
    features: ['24/7 availability', 'Flexible scheduling', 'Confidentiality assured'],
  },
  {
    icon: Heart,
    title: 'Special Occasions',
    description: 'Make your special moments unforgettable with premium event transportation.',
    features: ['Wedding transportation', 'Anniversary services', 'Personal touch'],
  },
];

export function ServicesLimited() {
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
    <section id="services" className="section-pad-xl bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">
                Our Expertise
              </span>
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>
          </div>
          <h2 className="heading-luxury mb-4">
            Premium Services<br />
            <span className="text-primary">Tailored to Your Needs</span>
          </h2>
          <p className="body-text max-w-2xl mx-auto">
            From corporate transportation to special events, we deliver exceptional service for every occasion.
          </p>
        </div>

        {/* Services Grid - Limited to 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {servicesPreview.map((service, index) => (
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

        {/* View All Button */}
        <div className="text-center">
          <Link href="/services" className="btn-primary">
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
