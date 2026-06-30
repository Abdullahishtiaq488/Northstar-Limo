'use client';

import { LucideIcon } from 'lucide-react';

interface ServiceCardPremiumProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
}

export function ServiceCardPremium({
  icon: Icon,
  title,
  description,
  features,
}: ServiceCardPremiumProps) {
  return (
    <div className="group relative h-full">
      {/* Background glow on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
      
      {/* Card container */}
      <div className="relative h-full bg-background-secondary border border-border rounded-2xl p-8 sm:p-10 transition-all duration-500 hover:shadow-2xl hover:border-primary/30">
        {/* Top accent line */}
        <div className="absolute top-0 left-8 w-12 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full" />

        {/* Icon container */}
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 group-hover:from-primary/25 group-hover:to-accent/20 transition-colors duration-300">
            <Icon className="w-8 h-8 text-primary group-hover:text-primary-dark transition-colors duration-300" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-foreground-secondary text-base leading-relaxed mb-6">
          {description}
        </p>

        {/* Features list */}
        {features && features.length > 0 && (
          <div className="space-y-3 mb-6 pt-6 border-t border-border">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <span className="text-sm text-foreground-secondary leading-relaxed">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Bottom accent */}
        <div className="pt-4 border-t border-border/50">
          <div className="text-sm font-semibold text-primary group-hover:text-primary-dark transition-colors duration-300 flex items-center gap-2">
            Learn more
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </div>
        </div>
      </div>
    </div>
  );
}
