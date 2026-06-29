'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Phone, Menu, X, Moon, Sun } from 'lucide-react'
import { contactInfo } from '@/lib/data'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check dark mode preference
    const isDarkMode = document.documentElement.classList.contains('dark')
    setIsDark(isDarkMode)
  }, [])

  const toggleDarkMode = () => {
    const html = document.documentElement
    const newIsDark = !isDark
    
    if (newIsDark) {
      html.classList.add('dark')
      html.setAttribute('data-theme', 'dark')
      localStorage.theme = 'dark'
    } else {
      html.classList.remove('dark')
      html.setAttribute('data-theme', 'light')
      localStorage.theme = 'light'
    }
    setIsDark(newIsDark)
  }

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#fleet', label: 'Fleet' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#faq', label: 'FAQ' },
  ]

  return (
    <>
      {/* Top Contact Strip */}
      <div className="hidden md:block border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container-max flex items-center justify-between py-3 text-sm">
          <div className="flex items-center gap-6">
            <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span>{contactInfo.phone}</span>
            </a>
            <a href={`mailto:${contactInfo.email}`} className="text-foreground hover:text-primary transition-colors">
              {contactInfo.email}
            </a>
          </div>
          <div className="flex items-center gap-4">
            {mounted && (
              <button
                onClick={toggleDarkMode}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-md sticky top-0 md:top-[49px] z-40">
        <div className="container-max flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-serif font-bold text-primary-foreground text-lg">
              NS
            </div>
            <div className="hidden md:block">
              <div className="font-serif font-bold text-foreground">North Star</div>
              <div className="text-xs text-muted-foreground">Limo</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${contactInfo.phone}`}
              className="hidden md:flex items-center gap-2 button-luxury"
            >
              <Phone className="w-4 h-4" />
              <span className="font-semibold">Call Now</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-border bg-card">
            <nav className="container-max py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`tel:${contactInfo.phone}`}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all duration-300 mt-2"
              >
                Call Now: {contactInfo.phone}
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
