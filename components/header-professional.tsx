'use client';

import { Menu, X, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export function HeaderProfessional() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const newTheme = isDark ? 'light' : 'dark';
    
    if (newTheme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    setIsDark(newTheme === 'dark');
  };

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Fleet', href: '#fleet' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  if (!mounted) return null;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/95 dark:bg-black/95 backdrop-blur-xl shadow-lg border-b border-yellow-600/30 dark:border-yellow-600/30'
          : 'bg-black/50 dark:bg-black/50 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-lg bg-gradient-to-br from-yellow-600 to-yellow-700 flex items-center justify-center shadow-md">
              <span className="text-black font-bold text-lg">⭐</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-sm font-bold text-white">North Star</span>
              <span className="text-xs font-semibold text-yellow-400 tracking-wider">LIMO</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-yellow-400 hover:bg-white/10 rounded-lg transition-all duration-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* CTA Button */}
            <button className="hidden sm:block px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-black text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              Book Now
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2.5 text-gray-300 hover:text-yellow-400 hover:bg-white/10 rounded-lg transition-all duration-300"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2.5 text-gray-300 hover:text-yellow-400 hover:bg-white/10 rounded-lg transition-all duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-yellow-600/30 bg-black/90">
            <div className="px-2 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-gray-300 hover:bg-white/10 hover:text-yellow-400 rounded-lg transition-all duration-300"
                >
                  {item.label}
                </Link>
              ))}
              <button className="w-full mt-4 px-4 py-2.5 bg-yellow-500 hover:bg-yellow-600 text-black text-sm font-semibold rounded-lg transition-all duration-300">
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
