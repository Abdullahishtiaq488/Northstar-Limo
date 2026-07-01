'use client';

import { Menu, X, Moon, Sun, Star, Phone, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function HeaderProfessional() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

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
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Fleet', href: '/fleet' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  if (!mounted) return null;

  const isActive = (href: string) => pathname === href;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-2xl shadow-xl border-b border-primary/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative">
            {isScrolled && (
              <div className="absolute -inset-4 bg-primary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            )}
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-primary-light to-primary flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all duration-300 ring-1 ring-primary/30 group-hover:scale-105">
              <Star className="w-6 h-6 text-primary-foreground fill-primary-foreground transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-base font-serif font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                North Star
              </span>
              <span className="text-[0.7rem] font-semibold text-primary tracking-[0.25em] relative">
                LIMO
                <span className="absolute -bottom-0.5 left-0 w-full h-px bg-primary/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - improved link color */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${
                    active
                      ? 'text-primary'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {item.label}
                  <span 
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-300 ${
                      active ? 'w-6' : 'w-0 group-hover:w-4'
                    }`}
                  />
                  <span className="absolute inset-0 rounded-lg bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            <a
              href="tel:+14753418410"
              className={`hidden lg:flex items-center gap-2 text-sm font-medium transition-all duration-300 group ${
                isScrolled ? 'text-foreground hover:text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              <span className="relative">
                <Phone className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                {isScrolled && (
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-primary rounded-full animate-ping" />
                )}
              </span>
              <span className="hidden xl:inline">(475) 341-8410</span>
            </a>

            <Link
              href="/#book"
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground text-sm font-semibold rounded-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Book Now
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className={`p-2.5 rounded-lg transition-all duration-300 hover:bg-primary/10 group relative ${
                isScrolled ? 'text-foreground hover:text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              {isDark ? <Sun className="w-5 h-5 transition-transform duration-500 group-hover:rotate-90" /> : <Moon className="w-5 h-5 transition-transform duration-500 group-hover:rotate-12" />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className={`md:hidden p-2.5 rounded-lg transition-all duration-300 ${
                isScrolled ? 'text-foreground hover:text-primary hover:bg-muted' : 'text-foreground hover:text-primary hover:bg-muted/10'
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Enhanced */}
        {isOpen && (
          <div className="md:hidden overflow-hidden">
            <div className="border-t border-border/50 bg-background/95 backdrop-blur-2xl rounded-2xl shadow-2xl mt-2 p-2">
              <div className="space-y-1">
                {navItems.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                        active
                          ? 'bg-primary/10 text-primary font-semibold'
                          : 'text-foreground hover:bg-muted hover:text-primary'
                      }`}
                    >
                      {active && (
                        <span className="w-1 h-6 bg-primary rounded-full" />
                      )}
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
                <Link
                  href="/#book"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 mt-3 px-4 py-3 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
                >
                  <Sparkles className="w-4 h-4" />
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}