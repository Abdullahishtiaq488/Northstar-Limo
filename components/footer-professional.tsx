'use client';

import Link from 'next/link';
import { Mail, MapPin, Phone, Share2, ArrowRight } from 'lucide-react';

export function FooterProfessional() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Company',
      links: ['About Us', 'Our Fleet', 'Leadership', 'Careers', 'Press'],
    },
    {
      title: 'Services',
      links: ['Airport Transfer', 'Corporate Travel', 'Events & Weddings', 'Private Tours', 'Premium Concierge'],
    },
    {
      title: 'Support',
      links: ['Booking Help', 'FAQ', 'Contact Us', 'Privacy Policy', 'Terms of Service'],
    },
  ];

  const contactInfo = [
    { icon: Phone, label: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: Mail, label: 'hello@northstarlimo.com', href: 'mailto:hello@northstarlimo.com' },
    { icon: MapPin, label: '123 Luxury Ave, Hartford, CT 06101', href: '#' },
  ];

  const socialLinks = [
    { icon: Share2, href: '#', label: 'Facebook' },
    { icon: Share2, href: '#', label: 'Twitter' },
    { icon: Share2, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-black/95 dark:bg-black/95 border-t border-yellow-600/30 dark:border-yellow-600/30">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-black to-black/80 dark:from-black dark:to-black/80 border-b border-yellow-600/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Exclusive Offers
              </h3>
              <p className="text-gray-400 max-w-md">
                Subscribe to get exclusive discounts, travel tips, and special offers delivered to your inbox.
              </p>
            </div>
            <form className="w-full md:w-auto flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:flex-initial px-4 py-3 rounded-lg bg-white/10 border border-yellow-600/30 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-600 to-yellow-700 flex items-center justify-center shadow-md">
                <span className="text-black font-bold text-lg">⭐</span>
              </div>
              <div>
                <p className="font-bold text-white">North Star</p>
                <p className="text-xs font-semibold text-yellow-400">LIMO</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Premium luxury ground transportation for the most discerning clientele worldwide.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-gray-300 hover:bg-yellow-500 hover:text-black transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold text-white mb-6 text-lg">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-sm font-medium"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div>
            <h4 className="font-bold text-white mb-6 text-lg">
              Get in Touch
            </h4>
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <Link
                  key={info.label}
                  href={info.href}
                  className="flex items-start gap-3 text-sm text-gray-400 hover:text-yellow-400 transition-colors duration-300 group"
                >
                  <info.icon className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
                  <span className="leading-relaxed">{info.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-yellow-600/30 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>
              © {currentYear} North Star Limo. All rights reserved. Built with excellence.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-yellow-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-yellow-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-yellow-400 transition-colors">
                Cookie Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
