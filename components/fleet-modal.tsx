'use client';

import Image from 'next/image';
import { X, Users, Zap, Shield, Heart, Gauge, Wind } from 'lucide-react';
import { useEffect } from 'react';

interface FleetModalProps {
  vehicle: {
    name: string;
    image: string;
    capacity: string;
    features: string[];
    description: string;
    fullDescription?: string;
    yearModel?: string;
    interiorColor?: string;
    exteriorColor?: string;
    amenities?: string[];
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

export function FleetModal({ vehicle, isOpen, onClose }: FleetModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      const header = document.querySelector('header');
      if (header) {
        header.style.zIndex = '30';
        header.style.pointerEvents = 'none';
        header.style.opacity = '0.5';
      }
    } else {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
      const header = document.querySelector('header');
      if (header) {
        header.style.zIndex = '';
        header.style.pointerEvents = '';
        header.style.opacity = '';
      }
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
      const header = document.querySelector('header');
      if (header) {
        header.style.zIndex = '';
        header.style.pointerEvents = '';
        header.style.opacity = '';
      }
    };
  }, [isOpen]);

  if (!isOpen || !vehicle) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className="bg-background rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto animate-fade-in"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 p-2 rounded-lg bg-background-secondary hover:bg-muted transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Vehicle Image */}
          <div className="relative w-full aspect-video overflow-hidden bg-muted">
            <Image
              src={vehicle.image}
              alt={vehicle.name}
              fill
              priority
              quality={95}
              sizes="100vw"
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Header */}
            <div className="mb-8">
              <h2 className="heading-luxury mb-2">{vehicle.name}</h2>
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full" />
            </div>

            {/* Description */}
            <p className="body-text mb-8">
              {vehicle.fullDescription || vehicle.description}
            </p>

            {/* Key Features Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-foreground-tertiary uppercase font-semibold tracking-wide">Capacity</p>
                  <p className="font-bold text-lg">{vehicle.capacity}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-foreground-tertiary uppercase font-semibold tracking-wide">Features</p>
                  <p className="font-bold text-lg">{vehicle.features.length}+ Premium</p>
                </div>
              </div>

              {vehicle.yearModel && (
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Gauge className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-foreground-tertiary uppercase font-semibold tracking-wide">Year</p>
                    <p className="font-bold text-lg">{vehicle.yearModel}</p>
                  </div>
                </div>
              )}

              {vehicle.exteriorColor && (
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Wind className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-foreground-tertiary uppercase font-semibold tracking-wide">Color</p>
                    <p className="font-bold text-lg">{vehicle.exteriorColor}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Features List */}
            <div className="mb-8">
              <h3 className="font-bold text-lg mb-4">Premium Features</h3>
              <div className="flex flex-wrap gap-2">
                {vehicle.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 text-primary rounded-full text-sm font-medium border border-primary/20"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Amenities */}
            {vehicle.amenities && vehicle.amenities.length > 0 && (
              <div className="mb-8">
                <h3 className="font-bold text-lg mb-4">Onboard Amenities</h3>
                <div className="space-y-2">
                  {vehicle.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Heart className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground-secondary">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="pt-4 border-t border-border">
              <button className="btn-primary w-full">
                Request This Vehicle
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
