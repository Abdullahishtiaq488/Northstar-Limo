'use client';

import { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
}

export function PageHeader({ title, subtitle, description, children }: PageHeaderProps) {
  return (
    <section className="relative w-full pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Animated gradient blur elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/15 rounded-full blur-3xl opacity-60 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-60 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-primary-light/8 rounded-full blur-3xl opacity-40" style={{ animation: 'float 6s ease-in-out infinite', animationDelay: '0.5s' }} />
        
        {/* Gradient mesh background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background-secondary opacity-40" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Subtitle tag */}
        {subtitle && (
          <div className="flex items-center justify-center mb-6">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">
                {subtitle}
              </span>
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>
          </div>
        )}

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-center text-foreground mb-6 leading-tight text-balance">
          {title}
        </h1>

        {/* Description */}
        {description && (
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-foreground-secondary text-center leading-relaxed">
            {description}
          </p>
        )}

        {/* Additional content slot */}
        {children && (
          <div className="mt-8">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
