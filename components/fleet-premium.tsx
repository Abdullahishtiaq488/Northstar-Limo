'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Users, Zap, Shield } from 'lucide-react';

const fleetData = [
  {
    name: 'Rolls Royce Phantom',
    image: '/vehicles/rolls-royce-phantom.png',
    capacity: '4 passengers',
    features: ['Luxury Seating', 'Premium Sound', 'Climate Control'],
    description: 'The ultimate expression of luxury and prestige for your most important moments.',
  },
  {
    name: 'Mercedes S-Class',
    image: '/vehicles/mercedes-s-class.png',
    capacity: '4 passengers',
    features: ['Advanced Tech', 'Smooth Ride', 'Executive Interior'],
    description: 'Ultimate comfort and sophistication for executive travel.',
  },
  {
    name: 'Bentley Continental',
    image: '/vehicles/bentley-continental.png',
    capacity: '4 passengers',
    features: ['Hand-Crafted', 'Premium Materials', 'Bespoke Comfort'],
    description: 'Handcrafted excellence for the discerning traveler.',
  },
  {
    name: 'Mercedes Maybach',
    image: '/vehicles/maybach.png',
    capacity: '4 passengers',
    features: ['Ultra-Luxury', 'Spacious', 'State-of-Art Tech'],
    description: 'The pinnacle of automotive luxury and innovation.',
  },
  {
    name: 'Tesla Model S',
    image: '/vehicles/tesla-model-s.png',
    capacity: '5 passengers',
    features: ['Electric', 'Eco-Friendly', 'Modern Design'],
    description: 'Cutting-edge technology meets sustainable luxury.',
  },
  {
    name: 'Cadillac Escalade',
    image: '/vehicles/suv-escalade.png',
    capacity: '6 passengers',
    features: ['Spacious', 'Premium Audio', 'All-Terrain Capable'],
    description: 'Premium SUV experience with ultimate comfort and style.',
  },
];

export function FleetPremium() {
  const [activeIndex, setActiveIndex] = useState(0);
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
          }
        });
      },
      { threshold: 0.1 }
    );

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="fleet" className="section-pad-xl bg-gradient-to-b from-background to-background-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">Our Fleet</span>
          </div>
          <h2 className="heading-luxury mb-4">
            Premium Vehicles<br />
            <span className="text-primary">Handpicked for Excellence</span>
          </h2>
          <p className="body-text max-w-2xl mx-auto">
            Each vehicle in our fleet represents the pinnacle of luxury, comfort, and sophistication.
          </p>
        </div>

        {/* Featured Vehicle */}
        <div className="mb-16 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className={`relative overflow-hidden rounded-2xl transition-all duration-700 ${
              activeIndex !== 0 ? 'opacity-0 translate-x-10' : 'opacity-100 translate-x-0'
            }`}>
              <div className="aspect-video bg-muted relative group">
                <Image
                  src={fleetData[activeIndex].image}
                  alt={fleetData[activeIndex].name}
                  fill
                  priority
                  quality={90}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Details */}
            <div>
              <h3 className="subheading mb-2">{fleetData[activeIndex].name}</h3>
              <div className="divider mb-6" />
              <p className="body-text mb-6">{fleetData[activeIndex].description}</p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-dark uppercase font-semibold">Capacity</p>
                    <p className="font-semibold">{fleetData[activeIndex].capacity}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-dark uppercase font-semibold">Features</p>
                    <p className="font-semibold">{fleetData[activeIndex].features.length}+ Premium</p>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className="flex flex-wrap gap-2 mb-8">
                {fleetData[activeIndex].features.map((feature, idx) => (
                  <span key={idx} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {feature}
                  </span>
                ))}
              </div>

              <button className="btn-primary">
                Request This Vehicle
              </button>
            </div>
          </div>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fleetData.map((vehicle, index) => (
            <div
              key={index}
              ref={(el) => {
                itemsRef.current[index] = el;
              }}
              className={`cursor-pointer group transition-all duration-700 ${
                visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div className={`card overflow-hidden transition-all duration-300 ${
                activeIndex === index ? 'ring-2 ring-primary' : ''
              }`}>
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    quality={85}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h4 className="font-bold mb-2 group-hover:text-primary transition-colors">{vehicle.name}</h4>
                  <p className="body-text-light">{vehicle.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
