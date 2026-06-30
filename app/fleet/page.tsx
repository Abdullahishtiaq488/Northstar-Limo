'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { HeaderProfessional } from '@/components/header-professional';
import { FooterProfessional } from '@/components/footer-professional';
import { FleetModal } from '@/components/fleet-modal';
import { ArrowRight } from 'lucide-react';

const allFleetData = [
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
  {
    name: 'Mercedes Maybach',
    image: '/vehicles/maybach.png',
    capacity: '4 passengers',
    features: ['Ultra-Luxury', 'Spacious', 'State-of-Art Tech', 'Exclusive Features', 'Premium Materials'],
    description: 'The pinnacle of automotive luxury and innovation.',
    fullDescription: 'The Mercedes-Maybach represents the pinnacle of luxury automobiles with ultra-spacious interiors and cutting-edge technology.',
    yearModel: '2023',
    exteriorColor: 'Silver Arrow',
    interiorColor: 'Premium Black',
    amenities: ['Reclining rear seats', 'Champagne cooler', 'Executive desk', 'Premium WiFi', 'Theater lighting'],
  },
  {
    name: 'Tesla Model S',
    image: '/vehicles/tesla-model-s.png',
    capacity: '5 passengers',
    features: ['Electric', 'Eco-Friendly', 'Modern Design', 'Advanced Tech', 'Sustainable Luxury'],
    description: 'Cutting-edge technology meets sustainable luxury.',
    fullDescription: 'Experience the future of luxury transportation with Tesla\'s Model S. Zero emissions, exceptional performance, and innovative technology.',
    yearModel: '2023',
    exteriorColor: 'Solid Black',
    interiorColor: 'Premium Black Interior',
    amenities: ['Supercharger access', 'Over-the-air updates', 'Premium audio', 'Climate control', 'Panoramic roof'],
  },
  {
    name: 'Cadillac Escalade',
    image: '/vehicles/suv-escalade.png',
    capacity: '6 passengers',
    features: ['Spacious', 'Premium Audio', 'All-Terrain Capable', 'Luxury SUV', 'Superior Comfort'],
    description: 'Premium SUV experience with ultimate comfort and style.',
    fullDescription: 'The Cadillac Escalade offers spacious luxury seating, premium entertainment systems, and refined performance for group travel.',
    yearModel: '2023',
    exteriorColor: 'Onyx Black',
    interiorColor: 'Jet Black Leather',
    amenities: ['Rear seat entertainment', 'Premium audio system', 'Heated seats', 'Power sunroof', 'Climate zones'],
  },
  {
    name: 'Porsche Panamera',
    image: '/vehicles/porsche-panamera.png',
    capacity: '4 passengers',
    features: ['Performance', 'Sporty Luxury', 'Advanced Handling', 'Premium Interior', 'Smooth Performance'],
    description: 'Sports sedan excellence meets ultimate comfort.',
    fullDescription: 'Experience the perfect blend of high-performance sports car dynamics with luxury sedan comfort in the Porsche Panamera.',
    yearModel: '2023',
    exteriorColor: 'Racing Yellow',
    interiorColor: 'Leather Burgundy',
    amenities: ['Adaptive suspension', 'Premium audio', 'Heated leather seats', 'Panoramic sunroof', 'Climate control'],
  },
  {
    name: 'BMW 7 Series',
    image: '/vehicles/bmw-7-series.png',
    capacity: '5 passengers',
    features: ['Innovation', 'Luxury Sedan', 'Smart Technology', 'Refined Comfort', 'Executive Class'],
    description: 'German engineering meets luxury comfort.',
    fullDescription: 'The BMW 7 Series combines innovative technology with sophisticated luxury for an unparalleled driving experience.',
    yearModel: '2023',
    exteriorColor: 'Alpine White',
    interiorColor: 'Fine-Grain Leather',
    amenities: ['iDrive system', 'Premium audio', 'Heated massage seats', 'Ambient lighting', 'WiFi connectivity'],
  },
  {
    name: 'Audi A8',
    image: '/vehicles/audi-a8.png',
    capacity: '5 passengers',
    features: ['Executive Comfort', 'Advanced Technology', 'Luxurious Interior', 'Smooth Ride', 'Premium Craftsmanship'],
    description: 'Executive luxury with technological sophistication.',
    fullDescription: 'The Audi A8 delivers executive-level comfort with advanced technology and meticulously crafted interiors.',
    yearModel: '2023',
    exteriorColor: 'Glacier White',
    interiorColor: 'Premium Napa Leather',
    amenities: ['Virtual cockpit', 'Bang & Olufsen audio', 'Heated seats', 'Air quality system', 'Panoramic roof'],
  },
];

export default function FleetPage() {
  const [selectedVehicle, setSelectedVehicle] = useState<typeof allFleetData[0] | null>(null);
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

  const handleVehicleClick = (vehicle: typeof allFleetData[0]) => {
    setSelectedVehicle(vehicle);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <HeaderProfessional />

      {/* Page Header */}
      <section className="pt-32 pb-16 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">Our Fleet</span>
            <h1 className="heading-luxury mt-2 mb-6">
              Premium Luxury<br />
              <span className="text-primary">Vehicle Collection</span>
            </h1>
            <p className="body-text text-lg max-w-2xl">
              Explore our meticulously maintained fleet of luxury vehicles. Click on any vehicle to view detailed specifications and amenities.
            </p>
          </div>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="section-pad-xl bg-background relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allFleetData.map((vehicle, index) => (
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-pad-xl bg-background-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="heading-luxury mb-6">Ready to Book Your Luxury Ride?</h2>
          <p className="body-text max-w-2xl mx-auto mb-8">
            Select the perfect vehicle from our premium fleet and experience luxury transportation at its finest.
          </p>
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="btn-primary"
          >
            Browse Fleet Above
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Fleet Modal */}
      <FleetModal
        vehicle={selectedVehicle}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <FooterProfessional />
    </div>
  );
}
