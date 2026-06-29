'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export function HeroPremium() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-background flex items-center justify-center">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-30" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Hero Image */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Image
          src="/hero/luxury-limo-hero.png"
          alt="Luxury Limousine Service"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover"
          style={{ contentVisibility: 'auto' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-max section-pad-xl flex flex-col items-center justify-center text-center px-4 sm:px-6">
        <div className={`transition-all duration-1000 w-full ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6 inline-flex items-center justify-center">
            <span className="text-yellow-300 text-xs sm:text-sm font-semibold tracking-widest uppercase drop-shadow-lg">Luxury Ground Transportation</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-2xl max-w-5xl mx-auto">
            Experience
            <span className="block text-yellow-300 mt-2">
              Legendary Luxury
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow-lg font-light">
            Premier ground transportation for those who demand excellence. Elevate your journey with our exclusive fleet and unparalleled service.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-primary">
              Book Your Ride
            </button>
            <button className="btn-secondary">
              Explore Fleet
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col items-center animate-bounce">
            <span className="text-white text-xs font-semibold uppercase mb-2 drop-shadow-lg">Scroll to explore</span>
            <svg className="w-6 h-6 text-primary drop-shadow-lg animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
