'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Star, ArrowRight, ShieldCheck, Clock, Award } from 'lucide-react';

const stats = [
  { value: '15+', label: 'Years of Service' },
  { value: '50k+', label: 'Rides Completed' },
  { value: '4.9', label: 'Average Rating' },
];

export function HeroPremium() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center">
      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero/luxury-limo-hero.png"
          alt="Luxury limousine at night"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover"
        />
        {/* Adaptive scrim: warm/light in light mode, deep navy in dark mode */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/20 dark:from-background/95 dark:via-background/75 dark:to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      {/* North Star motif */}
      <div className="absolute inset-0 z-[1] pointer-events-none" aria-hidden="true">
        <Star className="absolute top-[18%] right-[14%] w-5 h-5 text-primary/70 fill-primary/40 animate-float" />
        <Star className="absolute top-[32%] right-[28%] w-3 h-3 text-primary/50 fill-primary/30" />
        <Star className="absolute top-[24%] right-[8%] w-2.5 h-2.5 text-primary/60 fill-primary/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-max w-full pt-28 pb-16">
        <div
          className={`max-w-2xl transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary">
              Premier Ground Transportation
            </span>
          </div>

          <h1 className="font-serif font-bold mb-6 leading-[1.05] text-foreground">
            Arrive in
            <span className="block text-primary">Effortless Luxury</span>
          </h1>

          <p className="body-text max-w-xl mb-8">
            Chauffeured limousines, executive sedans, and event transportation across
            Connecticut and New York — refined service built around your schedule.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href="#book" className="btn-primary">
              Book Your Ride
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="#fleet" className="btn-secondary">
              Explore the Fleet
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
            {[
              { icon: ShieldCheck, text: 'Fully Insured & Vetted' },
              { icon: Clock, text: '24/7 Availability' },
              { icon: Award, text: 'Award-Winning Service' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.text} className="flex items-center gap-2 text-sm text-foreground-secondary">
                  <Icon className="w-4 h-4 text-primary" />
                  {item.text}
                </div>
              );
            })}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-lg">
            {stats.map((stat) => (
              <div key={stat.label} className="border-l-2 border-primary/40 pl-4">
                <p className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-foreground-tertiary">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
