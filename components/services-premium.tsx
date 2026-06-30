'use client';

import { Users, Briefcase, Heart, Clock, Shield, Zap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const services = [
  {
    icon: Users,
    title: 'Group Events',
    description: 'Perfect for weddings, corporate retreats, and celebrations. Capacity up to 14 passengers with premium amenities.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Briefcase,
    title: 'Corporate Travel',
    description: 'Executive transportation for business meetings, conferences, and VIP clients worldwide.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Heart,
    title: 'Special Occasions',
    description: 'Make your special moments unforgettable with our premium event transportation services.',
    color: 'from-rose-500 to-orange-500',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Round-the-clock service with professional drivers ready whenever you need us.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Shield,
    title: 'Premium Safety',
    description: 'Fully insured, professionally trained drivers, and meticulously maintained vehicles.',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Zap,
    title: 'Instant Booking',
    description: 'Easy online reservation system with real-time confirmation and flexible cancellation.',
    color: 'from-amber-500 to-yellow-500',
  },
];

export function ServicesPremium() {
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
          <div className="inline-block mb-4">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">Our Services</span>
          </div>
          <h2 className="heading-luxury mb-4">
            Premium Services<br />
            <span className="text-primary">Tailored to Your Needs</span>
          </h2>
          <p className="body-text max-w-2xl mx-auto">
            From corporate transportation to special events, we deliver exceptional service for every occasion.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                ref={(el) => {
                  itemsRef.current[index] = el;
                }}
                className={`group relative transition-all duration-700 ${
                  visibleItems[index]
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                }`}
              >
                <div className="card p-8 h-full relative hover:shadow-2xl">
                  {/* Icon Container */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="body-text-light">
                    {service.description}
                  </p>

                  {/* Hover Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-primary-light group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
