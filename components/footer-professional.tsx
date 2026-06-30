'use client';

import Link from 'next/link';
import { Mail, MapPin, Phone, ArrowRight, Star, Share2 } from 'lucide-react';

export function FooterProfessional() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Fleet', href: '/fleet' },
        { label: 'Services', href: '/services' },
        { label: 'Careers', href: '#' },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'Airport Transfer', href: '/services' },
        { label: 'Corporate Travel', href: '/services' },
        { label: 'Events & Weddings', href: '/services' },
        { label: 'Special Occasions', href: '/services' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Contact Us', href: '/contact' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
      ],
    },
  ];

  const contactInfo = [
    { icon: Phone, label: '(475) 341-8410', href: 'tel:+14753418410' },
    { icon: Mail, label: 'mynorthstarlimo@gmail.com', href: 'mailto:mynorthstarlimo@gmail.com' },
    { icon: MapPin, label: '245 Colonial Ave, Unit 1A, Waterbury, CT 06704', href: '#' },
  ];

  const socialLinks = [
    { icon: Share2, href: '#', label: 'Facebook' },
    { icon: Share2, href: '#', label: 'Instagram' },
    { icon: Share2, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-background-secondary border-t border-border">
      {/* Newsletter */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 p-8 md:p-10">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
                Exclusive Offers
              </h3>
              <p className="text-foreground-secondary max-w-md">
                Subscribe for exclusive discounts, travel tips, and special offers delivered to your inbox.
              </p>
            </div>
            <form className="w-full md:w-auto flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                className="flex-1 md:w-64 px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-foreground-tertiary focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary hover:bg-primary-dark text-primary-foreground font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-light to-primary flex items-center justify-center shadow-md ring-1 ring-primary/30">
                <Star className="w-6 h-6 text-primary-foreground fill-primary-foreground" />
              </div>
              <div className="leading-none">
                <p className="font-serif font-bold text-foreground">North Star</p>
                <p className="text-[0.7rem] font-semibold text-primary tracking-[0.25em]">LIMO</p>
              </div>
            </div>
            <p className="text-sm text-foreground-secondary leading-relaxed mb-6">
              Premium luxury ground transportation for the most discerning clientele across Connecticut and New York.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-foreground-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Link sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold text-foreground mb-6 text-lg">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-foreground-secondary hover:text-primary transition-colors duration-300 text-sm font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-6 text-lg">Get in Touch</h4>
            <div className="space-y-4">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <Link
                    key={info.label}
                    href={info.href}
                    className="flex items-start gap-3 text-sm text-foreground-secondary hover:text-primary transition-colors duration-300 group"
                  >
                    <Icon className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                    <span className="leading-relaxed">{info.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground-tertiary">
            <p>© {currentYear} North Star Limo. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-primary transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
