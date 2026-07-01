'use client';

import Link from 'next/link';
import { Mail, MapPin, Phone, ArrowRight, Star } from 'lucide-react';

// --- Custom SVG Icons (unchanged) ---
const FacebookIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const CommunityIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
  </svg>
);
// -------------------------------------

export function FooterProfessional() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Fleet', href: '/fleet' },
        { label: 'Services', href: '/services' },
        { label: 'Blog', href: '/blog' },
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
    { icon: FacebookIcon, href: '#', label: 'Facebook' },
    { icon: InstagramIcon, href: '#', label: 'Instagram' },
    { icon: CommunityIcon, href: '#', label: 'Community' },
  ];

  return (
    <footer className="bg-background-secondary border-t border-primary/10 relative overflow-hidden">
      {/* --- Decorative animated blobs --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

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
      {/* --- Main Footer Content --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-lg shadow-primary/30 ring-1 ring-primary/20">
                <Star className="w-6 h-6 text-primary-foreground fill-primary-foreground" />
              </div>
              <div className="leading-none">
                <p className="font-serif font-bold text-foreground text-xl">North Star</p>
                <p className="text-[0.65rem] font-semibold text-primary tracking-[0.3em] uppercase">Limo</p>
              </div>
            </div>
            <p className="text-sm text-foreground-secondary leading-relaxed mb-6 max-w-xs">
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
                    className="w-10 h-10 rounded-xl bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center text-foreground-secondary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20"
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Link sections - arrows removed */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold text-foreground mb-6 text-lg relative inline-block">
                {section.title}
                <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-primary/40 rounded-full" />
              </h4>
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
            <h4 className="font-bold text-foreground mb-6 text-lg relative inline-block">
              Get in Touch
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-primary/40 rounded-full" />
            </h4>
            <div className="space-y-4">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <Link
                    key={info.label}
                    href={info.href}
                    className="flex items-start gap-3 text-sm text-foreground-secondary hover:text-primary transition-colors duration-300 group"
                  >
                    <span className="mt-0.5 p-1.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="leading-relaxed group-hover:underline decoration-primary/30 underline-offset-2">
                      {info.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* --- Bottom Bar --- */}
        <div className="relative pt-8">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-foreground-tertiary pt-6">
            <p className="font-light tracking-wide">
              © {currentYear} North Star Limo. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-primary transition-colors duration-200 text-xs uppercase tracking-wider">Privacy</Link>
              <Link href="/terms" className="hover:text-primary transition-colors duration-200 text-xs uppercase tracking-wider">Terms</Link>
              <Link href="#" className="hover:text-primary transition-colors duration-200 text-xs uppercase tracking-wider">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}