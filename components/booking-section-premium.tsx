'use client';

import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { useState } from 'react';

export function BookingSectionPremium() {
  const [formData, setFormData] = useState({
    pickupLocation: '',
    dropoffLocation: '',
    date: '',
    passengers: '1',
    luggage: '0',
    name: '',
    phone: '',
    email: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
  };

  return (
    <section id="book" className="section-pad-xl bg-gradient-to-b from-background-secondary to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Section */}
          <div>
            <div className="inline-block mb-4">
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">Easy Booking</span>
            </div>
            <h2 className="heading-luxury mb-6">
              Reserve Your<br />
              <span className="text-primary">Luxury Ride</span>
            </h2>
            <p className="body-text mb-8">
              Book your premium limousine service in just a few clicks. Our intelligent system will match you with the perfect vehicle for your needs.
            </p>

            {/* Feature List */}
            <div className="space-y-4">
              {[
                { icon: Clock, text: 'Instant confirmation' },
                { icon: MapPin, text: 'Real-time tracking' },
                { icon: Users, text: 'Professional drivers' },
                { icon: Calendar, text: '24/7 availability' },
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="font-semibold">{feature.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Booking Form */}
          <div className="card p-8 lg:p-12 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Pickup Location */}
              <div>
                <label className="block text-sm font-semibold mb-2">Pickup Location *</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-3.5 w-5 h-5 text-primary pointer-events-none" />
                  <input
                    type="text"
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={handleInputChange}
                    placeholder="Enter pickup address"
                    className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    required
                  />
                </div>
              </div>

              {/* Dropoff Location */}
              <div>
                <label className="block text-sm font-semibold mb-2">Dropoff Location *</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-3.5 w-5 h-5 text-primary pointer-events-none" />
                  <input
                    type="text"
                    name="dropoffLocation"
                    value={formData.dropoffLocation}
                    onChange={handleInputChange}
                    placeholder="Enter destination address"
                    className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    required
                  />
                </div>
              </div>

              {/* Date and Luggage */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Date *</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-3.5 w-5 h-5 text-primary pointer-events-none" />
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Luggage *</label>
                  <input
                    type="number"
                    name="luggage"
                    value={formData.luggage}
                    onChange={handleInputChange}
                    placeholder="Number of luggage"
                    min="0"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    required
                  />
                </div>
              </div>

              {/* Passengers */}
              <div>
                <label className="block text-sm font-semibold mb-2">Number of Passengers *</label>
                <div className="relative">
                  <Users className="absolute left-4 top-3.5 w-5 h-5 text-primary pointer-events-none" />
                  <select
                    name="passengers"
                    value={formData.passengers}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all appearance-none"
                    required
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Passenger' : 'Passengers'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full Name *"
                  className="px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email *"
                  className="px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  required
                />
              </div>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone Number *"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                required
              />

              {/* Submit Button */}
              <button type="submit" className="btn-primary w-full">
                Request Booking
              </button>

              <p className="text-center text-xs text-muted-dark">
                We will confirm your booking within 2 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
