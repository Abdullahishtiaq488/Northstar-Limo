'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { HeaderProfessional } from '@/components/header-professional';
import { FooterProfessional } from '@/components/footer-professional';
import { FleetModal } from '@/components/fleet-modal';
import { PageHeader } from '@/components/page-header';
import { ArrowRight } from 'lucide-react';

const allFleetData = [
  {
    name: 'Executive Van Terra',
    image: '/vehicles/executive-van-terra.png',
    capacity: '6-8 passengers',
    features: ['Spacious Interior', 'Premium Leather', 'Climate Control', 'Entertainment System', 'Wheelchair Accessible'],
    description: 'Professional executive transport with premium comfort for group travel.',
    fullDescription: 'The Executive Van Terra offers spacious seating with premium amenities, perfect for corporate transport and group journeys.',
    yearModel: '2024',
    exteriorColor: 'Pearl White',
    interiorColor: 'Black Leather',
    amenities: ['Spacious seating', 'Climate zones', 'Premium audio', 'USB charging', 'Panoramic windows'],
  },
  {
    name: 'Hummer Limousine',
    image: '/vehicles/hummer-limousine.png',
    capacity: '10-14 passengers',
    features: ['Stretched Design', 'Party Atmosphere', 'Premium Sound', 'LED Lighting', 'Luxury Bar'],
    description: 'The ultimate party experience with luxury and style combined.',
    fullDescription: 'Our Hummer Limousine features a stretched interior with premium entertainment, perfect for celebrations and special events.',
    yearModel: '2024',
    exteriorColor: 'Jet Black',
    interiorColor: 'Premium Cream',
    amenities: ['Dance floor', 'Premium bar service', 'LED lighting', 'Surround sound', 'Customizable atmosphere'],
  },
  {
    name: 'Limo Bus',
    image: '/vehicles/limo-bus.png',
    capacity: '12-16 passengers',
    features: ['Party Bus', 'Dance Floor', 'Premium Sound', 'Full Bar', 'LED Entertainment'],
    description: 'Modern party bus experience with state-of-the-art entertainment.',
    fullDescription: 'Our Limo Bus combines luxury with entertainment, featuring premium audio-visual systems and full bar service for unforgettable events.',
    yearModel: '2024',
    exteriorColor: 'Onyx Black',
    interiorColor: 'Premium Black',
    amenities: ['Dance floor', 'DJ booth', 'LED walls', 'Premium bar', 'Sound system'],
  },
  {
    name: 'Limousine',
    image: '/vehicles/sprinter-limo.png',
    capacity: '6-8 passengers',
    features: ['Classic Luxury', 'Elegant Design', 'Premium Interior', 'Climate Control', 'Professional Service'],
    description: 'Timeless luxury and elegance for distinguished occasions.',
    fullDescription: 'Our classic Limousine combines timeless elegance with modern comfort, perfect for formal events and executive travel.',
    yearModel: '2024',
    exteriorColor: 'Pearl White',
    interiorColor: 'Black Leather',
    amenities: ['Premium seating', 'Climate control', 'Champagne service', 'Privacy partition', 'Premium audio'],
  },
  {
    name: 'Luxury Sedans',
    image: '/vehicles/luxury-sedans.png',
    capacity: '4 passengers',
    features: ['Executive Class', 'Advanced Technology', 'Premium Comfort', 'Sophisticated Design', 'Ultimate Refinement'],
    description: 'Executive luxury sedans for the most discerning travelers.',
    fullDescription: 'Our luxury sedans provide the ultimate in comfort and sophistication, perfect for business travel and special occasions.',
    yearModel: '2024',
    exteriorColor: 'Midnight Black',
    interiorColor: 'Tan Leather',
    amenities: ['Heated leather seats', 'Panoramic roof', 'Premium audio system', 'Climate zones', 'WiFi connectivity'],
  },
  {
    name: 'Minibus',
    image: '/vehicles/minibus.png',
    capacity: '8-12 passengers',
    features: ['Comfortable Seating', 'Group Transport', 'Climate Control', 'Entertainment', 'Professional Driver'],
    description: 'Perfect for group travel with comfort and style.',
    fullDescription: 'Our minibus offers comfortable seating for groups with modern amenities, ideal for corporate outings and family events.',
    yearModel: '2024',
    exteriorColor: 'Pearl White',
    interiorColor: 'Grey Interior',
    amenities: ['Comfortable seating', 'Air conditioning', 'Onboard entertainment', 'USB ports', 'Large windows'],
  },
  {
    name: 'Motorcoach',
    image: '/vehicles/motorcoach.png',
    capacity: '40-50 passengers',
    features: ['Large Capacity', 'Long Distance', 'Premium Comfort', 'Full Amenities', 'Professional Service'],
    description: 'Premium luxury motorcoach for large group transportation.',
    fullDescription: 'Our motorcoach provides comfortable long-distance travel for large groups with premium amenities and professional service.',
    yearModel: '2024',
    exteriorColor: 'Black and Silver',
    interiorColor: 'Premium Beige',
    amenities: ['Comfortable reclining seats', 'Onboard restroom', 'Premium audio', 'Climate control', 'Large luggage capacity'],
  },
  {
    name: 'Sprinter Limo',
    image: '/vehicles/sprinter-limo.png',
    capacity: '6-8 passengers',
    features: ['Modern Design', 'Spacious Interior', 'Premium Comfort', 'Versatile Use', 'Professional Appearance'],
    description: 'Modern stretched limousine for versatile group transport.',
    fullDescription: 'Our Sprinter Limousine combines modern design with spacious interiors, perfect for weddings, events, and corporate travel.',
    yearModel: '2024',
    exteriorColor: 'Pearl White',
    interiorColor: 'Black Leather',
    amenities: ['Stretch interior', 'Bar service', 'Premium lighting', 'Sound system', 'Comfortable seating'],
  },
  {
    name: 'SUV',
    image: '/vehicles/suv.png',
    capacity: '6-7 passengers',
    features: ['Premium SUV', 'Executive Comfort', 'Advanced Technology', 'All-Terrain Capability', 'Luxury Interior'],
    description: 'Luxury SUV for executive and leisure travel.',
    fullDescription: 'Our premium SUVs offer the perfect blend of comfort, technology, and capability for any journey.',
    yearModel: '2024',
    exteriorColor: 'Jet Black',
    interiorColor: 'Premium Black Leather',
    amenities: ['All-wheel drive', 'Premium seats', 'Advanced safety', 'Climate control', 'Premium audio'],
  },
  {
    name: 'Van Terra',
    image: '/vehicles/van-terra.png',
    capacity: '8-10 passengers',
    features: ['Versatile Transport', 'Premium Comfort', 'Spacious Interior', 'Group Capacity', 'Professional Service'],
    description: 'Versatile van for group and corporate transportation.',
    fullDescription: 'Our Van Terra provides comfortable, versatile transport for groups, combining space with premium amenities.',
    yearModel: '2024',
    exteriorColor: 'White',
    interiorColor: 'Grey Leather',
    amenities: ['Spacious seating', 'Climate control', 'USB charging', 'Large windows', 'Professional appearance'],
  },
  {
    name: 'Wheelchair-Accessible Vehicle',
    image: '/vehicles/wheelchair-accessible.png',
    capacity: '4-5 passengers',
    features: ['ADA Compliant', 'Wheelchair Lift', 'Premium Comfort', 'Professional Service', 'Secure Transport'],
    description: 'Fully accessible luxury transportation for all passengers.',
    fullDescription: 'Our wheelchair-accessible vehicles provide dignity and comfort with full ADA compliance and professional service.',
    yearModel: '2024',
    exteriorColor: 'Pearl White',
    interiorColor: 'Premium Interior',
    amenities: ['Wheelchair lift', 'Spacious interior', 'Climate control', 'Professional driver', 'Secure restraints'],
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

      <main>
        <PageHeader
          subtitle="Our Fleet"
          title="Premium Luxury Vehicle Collection"
          description="Explore our meticulously maintained fleet of luxury vehicles. Click on any vehicle to view detailed specifications and amenities."
        />

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
                <div className="card overflow-hidden h-full flex flex-col hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* Vehicle Image */}
                  <div className="relative aspect-video overflow-hidden bg-muted flex-shrink-0">
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
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {vehicle.name}
                    </h3>
                    <p className="text-sm text-foreground-secondary mb-4">
                      {vehicle.capacity}
                    </p>
                    
                    {/* Description with fade effect */}
                    <div className="relative mb-6 flex-grow min-h-[60px]">
                      <p className="body-text-light line-clamp-3">
                        {vehicle.description}
                      </p>
                      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent pointer-events-none" />
                    </div>

                    {/* Features Preview */}
                    <div className="flex flex-wrap gap-2 mb-6 mt-auto">
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
                    <button className="w-full px-4 py-2 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn mt-auto">
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
      </main>

      <FooterProfessional />
    </div>
  );
}
