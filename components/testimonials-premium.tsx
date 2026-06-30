'use client';

import { Star } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    name: 'James Mitchell',
    title: 'CEO, Fortune 500 Company',
    content: 'North Star Limo has been our preferred transportation partner for executive events. Their professionalism and attention to detail are unmatched.',
    rating: 5,
    initials: 'JM',
  },
  {
    name: 'Sarah Anderson',
    title: 'Wedding Planner',
    content: 'We\'ve used North Star Limo for over 100 weddings. Every bride and groom has been thrilled with their service. Simply the best in the industry.',
    rating: 5,
    initials: 'SA',
  },
  {
    name: 'David Chen',
    title: 'Hotel Concierge Manager',
    content: 'Our guests consistently praise their limousine service. The drivers are courteous, the vehicles are pristine, and the experience is luxurious.',
    rating: 5,
    initials: 'DC',
  },
  {
    name: 'Michelle Rodriguez',
    title: 'Event Coordinator',
    content: 'Reliability, elegance, and professionalism define North Star Limo. They make every event special from the moment guests arrive.',
    rating: 5,
    initials: 'MR',
  },
];

export function TestimonialsPremium() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [autoScroll, setAutoScroll] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setAutoScroll((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="section-pad-xl bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">Client Stories</span>
          </div>
          <h2 className="heading-luxury mb-4">
            Trusted by<br />
            <span className="text-primary">Industry Leaders</span>
          </h2>
          <p className="body-text max-w-2xl mx-auto">
            Hear from our satisfied clients who have experienced the North Star Limo difference.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => {
                itemsRef.current[index] = el;
              }}
              className={`group transition-all duration-700 ${
                visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="card p-8 h-full relative hover:shadow-2xl">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="body-text mb-6 italic">"{testimonial.content}"</p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-foreground font-bold">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="body-text-light text-xs">{testimonial.title}</p>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute top-0 left-0 w-1 h-0 bg-gradient-to-b from-primary to-primary-light group-hover:h-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Featured Testimonial Carousel */}
        <div className="relative">
          <div className="card p-12 bg-gradient-to-br from-primary/10 via-background to-background border-2 border-primary/20">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg font-bold mb-2">Outstanding Service</p>
                <p className="text-primary text-sm">Rated 5/5 by all clients</p>
              </div>

              <div className="lg:col-span-2">
                <p className="text-2xl font-serif mb-4 italic">
                  "{testimonials[autoScroll].content}"
                </p>
                <p className="font-bold text-lg">{testimonials[autoScroll].name}</p>
                <p className="body-text-light">{testimonials[autoScroll].title}</p>
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="flex gap-2 mt-8 justify-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setAutoScroll(index)}
                  className={`h-2 transition-all duration-300 rounded-full ${
                    index === autoScroll ? 'w-8 bg-primary' : 'w-2 bg-primary/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
