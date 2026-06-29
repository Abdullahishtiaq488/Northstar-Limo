'use client';

import { Mail, MapPin, Phone, ArrowUp } from 'lucide-react';
import { useState } from 'react';

export function FooterPremium() {
  const [scrollToTop] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-background to-foreground/5 relative">
      {/* Main Footer */}
      <div className="container-max py-16 md:py-20 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">North Star</h3>
            <p className="text-primary font-semibold mb-4">LIMO</p>
            <p className="body-text-light">
              Premier luxury ground transportation for those who demand nothing but the best.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Our Fleet', 'Services', 'Careers', 'Press'].map((link) => (
                <li key={link}>
                  <a href="#" className="body-text-light hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {['Airport Transfer', 'Corporate Travel', 'Events', 'Weddings', 'Tours'].map((service) => (
                <li key={service}>
                  <a href="#" className="body-text-light hover:text-primary transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-muted-dark uppercase font-semibold">Phone</p>
                  <a href="tel:+1234567890" className="font-semibold hover:text-primary transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-muted-dark uppercase font-semibold">Email</p>
                  <a href="mailto:info@northstarlimo.com" className="font-semibold hover:text-primary transition-colors">
                    info@northstarlimo.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-muted-dark uppercase font-semibold">Address</p>
                  <p className="font-semibold">123 Luxury Ave, NY 10001</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="body-text-light text-center md:text-left">
            © 2024 North Star Limo. All rights reserved. | <a href="#" className="text-primary hover:underline">Privacy Policy</a> | <a href="#" className="text-primary hover:underline">Terms of Service</a>
          </p>

          <button
            onClick={handleScrollToTop}
            className="w-12 h-12 rounded-full bg-primary text-foreground flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        </div>
      </div>
    </footer>
  );
}
