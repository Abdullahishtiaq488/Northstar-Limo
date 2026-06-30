'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { FleetModal } from './fleet-modal';

const fleetPreview = [
  {
    name: 'Rolls Royce Phantom',
    image: '/vehicles/rolls-royce-phantom.png',
    capacity: '4 passengers',
    features: ['Luxury Seating', 'Premium Sound', 'Climate Control', 'Champagne Bar', 'Premium Lighting'],
    description: 'The ultimate expression of luxury and prestige for your most important moments.',
    fullDescription: 'Experience unparalleled luxury with our Rolls Royce Phantom. Featuring hand-crafted interiors, bespoke comfort systems, and iconic British excellence.',
    yearModel: '2023',
    exteriorColor: 'Midnight Black',
    interiorColor: 'Cream Leather',
    amenities: ['Champagne chilling service', 'Wireless phone charger', 'Premium WiFi hotspot', 'Ambient lighting control', 'Heated leather seats'],
  },
  {
    name: 'Mercedes S-Class',
    image: '/vehicles/mercedes-s-class.png',
    capacity: '4 passengers',
    features: ['Advanced Tech', 'Smooth Ride', 'Executive Interior', 'Premium Audio', 'Smart Climate'],
    description: 'Ultimate comfort and sophistication for executive travel.',
    fullDescription: 'The Mercedes-Benz S-Class combines cutting-edge technology with supreme comfort. Perfect for executive meetings and special occasions.',
    yearModel: '2023',
    exteriorColor: 'Pearl White',
    interiorColor: 'Black Leather',
    amenities: ['AIRMATIC suspension', 'Panoramic sunroof', 'Burmester audio system', 'Heated seats', 'Ambient lighting'],
  },
  {
    name: 'Bentley Continental',
    image: '/vehicles/bentley-continental.png',
    capacity: '4 passengers',
    features: ['Hand-Crafted', 'Premium Materials', 'Bespoke Comfort', 'Signature Styling', 'Refined Performance'],
    description: 'Handcrafted excellence for the discerning traveler.',
    fullDescription: 'Every detail of the Bentley Continental is meticulously crafted to provide an incomparable luxury experience.',
    yearModel: '2023',
    exteriorColor: 'Midnight Sapphire',
    interiorColor: 'Tan Leather',
    amenities: ['Bespoke leather interior', 'Panoramic glass roof', 'Premium audio', 'Climate zones', 'Seat massage'],
  },
];

export function FleetLimited() {
  const [selectedVehicle, setSelectedVehicle] = useState<typeof fleetPreview[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      { threshold: 0.1 }
    );

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  const handleVehicleClick = (vehicle: typeof fleetPreview[0]) => {
    setSelectedVehicle(vehicle);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="fleet" className="section-pad-xl bg-gradient-to-b from-background to-background-secondary relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
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

          {/* Fleet Grid - Limited to 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {fleetPreview.map((vehicle, index) => (
              <div
                key={index}
                ref={(el) => {
                  itemsRef.current[index] = el;
                }}
                className={`group cursor-pointer transition-all duration-700 ${
                  visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                onClick={() => handleVehicleClick(vehicle)}
              >
                <div className="card overflow-hidden h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* Vehicle Image */}
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      fill
                      quality={85}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {vehicle.name}
                    </h3>
                    <p className="text-sm text-foreground-secondary mb-4">
                      {vehicle.capacity}
                    </p>
                    <p className="body-text-light mb-6">
                      {vehicle.description}
                    </p>

                    {/* Features Preview */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {vehicle.features.slice(0, 2).map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                      {vehicle.features.length > 2 && (
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                          +{vehicle.features.length - 2}
                        </span>
                      )}
                    </div>

                    {/* View Details Button */}
                    <button className="w-full px-4 py-2 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                      View Details
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Link href="/fleet" className="btn-primary">
              View All Fleet
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Fleet Modal */}
      <FleetModal
        vehicle={selectedVehicle}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
