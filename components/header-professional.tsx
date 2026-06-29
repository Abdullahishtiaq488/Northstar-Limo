'use client';

import { Menu, X, Moon, Sun, Star, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export function HeaderProfessional() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains('dark'));

    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const newTheme = isDark ? 'light' : 'dark';

    html.classList.toggle('dark', newTheme === 'dark');
    html.setAttribute('data-theme', newTheme);
    try {
      localStorage.setItem('theme', newTheme);
    } catch {}
    setIsDark(newTheme === 'dark');
  };

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Fleet', href: '#fleet' },
    { label: 'Book', href: '#book' },
    { label: 'Testimonials', href: '#testimonials' },
  ];

  if (!mounted) return null;

  // The hero's top gradient tints toward the theme background, so themed
  // text stays legible whether or not the header is scrolled.
  const linkColor = 'text-foreground-secondary hover:text-primary';
  const iconColor = 'text-foreground-secondary hover:text-primary hover:bg-muted';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/85 backdrop-blur-xl shadow-lg border-b border-border'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-primary-light to-primary flex items-center justify-center shadow-md ring-1 ring-primary/30">
              <Star className="w-6 h-6 text-primary-foreground fill-primary-foreground" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-base font-serif font-bold tracking-tight text-foreground">
                North Star
              </span>
              <span className="text-[0.7rem] font-semibold text-primary tracking-[0.25em]">
                LIMO
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${linkColor}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            <a
              href="tel:+14753418410"
              className={`hidden lg:flex items-center gap-2 text-sm font-medium transition-colors ${linkColor}`}
            >
              <Phone className="w-4 h-4" />
              (475) 341-8410
            </a>

            <Link
              href="#book"
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-primary hover:bg-primary-dark text-primary-foreground text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              Book Now
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className={`p-2.5 rounded-lg transition-all duration-300 ${iconColor}`}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className={`md:hidden p-2.5 rounded-lg transition-all duration-300 ${iconColor}`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl rounded-b-2xl shadow-lg">
            <div className="px-2 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2.5 text-foreground-secondary hover:bg-muted hover:text-primary rounded-lg font-medium transition-all duration-300"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#book"
                onClick={() => setIsOpen(false)}
                className="block text-center mt-3 px-4 py-3 bg-primary hover:bg-primary-dark text-primary-foreground text-sm font-semibold rounded-lg transition-all duration-300"
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
