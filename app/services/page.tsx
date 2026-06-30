'use client';

import { Users, Briefcase, Heart, Clock, Shield, Zap, ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { HeaderProfessional } from '@/components/header-professional';
import { FooterProfessional } from '@/components/footer-professional';

const allServices = [
  {
    icon: Users,
    title: 'Group Events',
    description: 'Perfect for weddings, corporate retreats, and celebrations. Capacity up to 14 passengers with premium amenities and dedicated event coordinators.',
    color: 'from-blue-500 to-cyan-500',
    details: 'Our group event service includes complimentary consultation, flexible scheduling, and customizable packages for your unique needs.',
  },
  {
    icon: Briefcase,
    title: 'Corporate Travel',
    description: 'Executive transportation for business meetings, conferences, and VIP clients worldwide with professional chauffeurs.',
    color: 'from-purple-500 to-pink-500',
    details: 'We specialize in seamless corporate travel with real-time tracking, premium amenities, and expense reporting for your convenience.',
  },
  {
    icon: Heart,
    title: 'Special Occasions',
    description: 'Make your special moments unforgettable with our premium event transportation services tailored to your celebration.',
    color: 'from-rose-500 to-orange-500',
    details: 'From engagements to anniversaries, our team ensures your special day is perfect with attention to every detail.',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Round-the-clock service with professional drivers ready whenever you need us, day or night.',
    color: 'from-emerald-500 to-teal-500',
    details: 'Our 24/7 dispatch team ensures immediate response times and reliable service whenever you require transportation.',
  },
  {
    icon: Shield,
    title: 'Premium Safety',
    description: 'Fully insured, professionally trained drivers, and meticulously maintained vehicles for your peace of mind.',
    color: 'from-indigo-500 to-blue-500',
    details: 'All vehicles undergo rigorous safety inspections, and drivers are background-checked and certified professionals.',
  },
  {
    icon: Zap,
    title: 'Instant Booking',
    description: 'Easy online reservation system with real-time confirmation and flexible cancellation policies.',
    color: 'from-amber-500 to-yellow-500',
    details: 'Book in seconds through our mobile app or website with instant confirmation and direct driver communication.',
  },
  {
    icon: Users,
    title: 'Airport Transfers',
    description: 'Reliable airport transportation with real-time flight tracking and complimentary wait time.',
    color: 'from-sky-500 to-blue-500',
    details: 'Never miss a flight again. We monitor your flight in real-time and adjust pickup times accordingly.',
  },
  {
    icon: Heart,
    title: 'Wedding Services',
    description: 'Complete wedding transportation packages including ceremony, reception, and guest coordination.',
    color: 'from-pink-500 to-rose-500',
    details: 'Let us handle transportation while you celebrate. Multi-vehicle fleets coordinated for your entire wedding party.',
  },
  {
    icon: Briefcase,
    title: 'Executive Packages',
    description: 'VIP service with premium vehicles, experienced drivers, and white-glove treatment for executives.',
    color: 'from-slate-700 to-slate-900',
    details: 'Impress clients and colleagues with luxury transportation that reflects your professional standards.',
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
    <div className="min-h-screen bg-background">
      <HeaderProfessional />

      {/* Page Header */}
      <section className="pt-32 pb-16 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">Our Expertise</span>
            <h1 className="heading-luxury mt-2 mb-6">
              Comprehensive Luxury<br />
              <span className="text-primary">Transportation Services</span>
            </h1>
            <p className="body-text text-lg max-w-2xl">
              From airport transfers to special occasions, we offer a complete range of premium limousine and transportation services tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-pad-xl bg-background relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => {
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
                    <p className="body-text-light mb-4">
                      {service.description}
                    </p>
                    <p className="text-sm text-foreground-tertiary mb-6 italic">
                      {service.details}
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

      {/* CTA Section */}
      <section className="section-pad-xl bg-background-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="heading-luxury mb-6">Ready to Experience Luxury?</h2>
          <p className="body-text max-w-2xl mx-auto mb-8">
            Contact us today to discuss your transportation needs and receive a personalized quote.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <FooterProfessional />
    </div>
  );
}
