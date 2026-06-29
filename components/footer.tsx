'use client'

import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import { contactInfo, companyInfo } from '@/lib/data'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-md">
      <div className="container-max py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-serif font-bold text-primary-foreground">
                NS
              </div>
              <div>
                <div className="font-serif font-bold text-foreground">North Star</div>
                <div className="text-xs text-muted-foreground">Limo</div>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premier ground transportation services offering luxury, reliability, and exceptional customer service.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              <a href="#" className="p-2 hover:bg-muted rounded-lg transition-colors">
                <span className="text-primary text-lg">f</span>
              </a>
              <a href="#" className="p-2 hover:bg-muted rounded-lg transition-colors">
                <span className="text-primary text-lg">📷</span>
              </a>
              <a href="#" className="p-2 hover:bg-muted rounded-lg transition-colors">
                <span className="text-primary text-lg">in</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Navigation</h4>
            <ul className="space-y-3">
              {[
                { href: '#home', label: 'Home' },
                { href: '#services', label: 'Services' },
                { href: '#fleet', label: 'Fleet' },
                { href: '#testimonials', label: 'Reviews' },
                { href: '#faq', label: 'FAQ' },
              ].map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                'Airport Transfers',
                'Corporate Travel',
                'Wedding Services',
                'Event Transportation',
                'Tours & Excursions',
              ].map(service => (
                <li key={service}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 break-all"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-muted-foreground text-sm">{contactInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border py-8">
          <div className="grid md:grid-cols-2 gap-8">
            <p className="text-sm text-muted-foreground">
              © {currentYear} {companyInfo.name}. All rights reserved.
            </p>
            <div className="flex gap-6 md:justify-end">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
