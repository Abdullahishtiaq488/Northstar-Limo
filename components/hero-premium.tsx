'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  Star,
  ArrowRight,
  ShieldCheck,
  Clock,
  Award,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

type Slide = {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
};

const slides: Slide[] = [
  {
    image: '/hero/slide-1.png',
    alt: 'Black luxury stretch limousine on a city street at night',
    eyebrow: 'Premier Ground Transportation',
    title: 'Arrive in',
    highlight: 'Effortless Luxury',
    description:
      'Chauffeured limousines and executive transport across Connecticut and New York — refined service built entirely around your schedule.',
  },
  {
    image: '/hero/slide-2.png',
    alt: 'Chauffeur opening the door of an executive luxury sedan',
    eyebrow: 'Corporate & Airport Travel',
    title: 'Executive Travel,',
    highlight: 'Perfected',
    description:
      'Professional chauffeurs, immaculate sedans, and on-time airport transfers that keep your business moving without a single missed beat.',
  },
  {
    image: '/hero/slide-3.png',
    alt: 'White luxury limousine decorated for a wedding at golden hour',
    eyebrow: 'Weddings & Special Events',
    title: 'Celebrate Every',
    highlight: 'Milestone Moment',
    description:
      'From weddings to galas and nights on the town, ride in elegance with transportation tailored to make your occasion unforgettable.',
  },
];

const stats = [
  { value: '15+', label: 'Years of Service' },
  { value: '50k+', label: 'Rides Completed' },
  { value: '4.9', label: 'Average Rating' },
];

const trustBadges = [
  { icon: ShieldCheck, text: 'Fully Insured & Vetted' },
  { icon: Clock, text: '24/7 Availability' },
  { icon: Award, text: 'Award-Winning Service' },
];

const SLIDE_DURATION = 6000;

export function HeroPremium() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [loaded, setLoaded] = useState<boolean[]>(() => slides.map(() => false));
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    setCurrent((index + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Auto-advance
  useEffect(() => {
    if (!isPlaying) return;
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, current]);

  const handleLoad = (index: number) => {
    setLoaded((prevLoaded) => {
      if (prevLoaded[index]) return prevLoaded;
      const copy = [...prevLoaded];
      copy[index] = true;
      return copy;
    });
  };

  const active = slides[current];
  const isActiveLoaded = loaded[current];

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center">
      {/* Skeleton — visible until the active slide image has loaded */}
      {!isActiveLoaded && (
        <div className="absolute inset-0 z-20 skeleton-shimmer" aria-hidden="true">
          <div className="container-max w-full h-full flex items-center">
            <div className="max-w-2xl pt-28 pb-16 w-full space-y-6">
              <div className="h-9 w-64 rounded-full bg-foreground/10" />
              <div className="h-14 w-3/4 rounded-lg bg-foreground/10" />
              <div className="h-14 w-2/3 rounded-lg bg-foreground/10" />
              <div className="h-20 w-full max-w-xl rounded-lg bg-foreground/10" />
              <div className="flex gap-4 pt-2">
                <div className="h-14 w-48 rounded-lg bg-foreground/10" />
                <div className="h-14 w-44 rounded-lg bg-foreground/10" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Slides */}
      <div className="absolute inset-0 z-0" style={{ minHeight: '100vh' }}>
        {slides.map((slide, i) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
              i === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image || '/placeholder.svg'}
              alt={slide.alt}
              fill
              priority={i === 0}
              quality={90}
              sizes="100vw"
              className={`object-cover transition-transform duration-[8000ms] ease-out ${
                i === current ? 'scale-105' : 'scale-100'
              }`}
              onLoad={() => handleLoad(i)}
              onError={() => handleLoad(i)}
            />
          </div>
        ))}
        {/* Adaptive scrims for legibility in both themes */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/20 dark:from-background/95 dark:via-background/75 dark:to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      {/* North Star motif */}
      <div className="absolute inset-0 z-[1] pointer-events-none" aria-hidden="true">
        <Star className="absolute top-[18%] right-[14%] w-5 h-5 text-primary/70 fill-primary/40 animate-float" />
        <Star className="absolute top-[32%] right-[28%] w-3 h-3 text-primary/50 fill-primary/30" />
        <Star className="absolute top-[24%] right-[8%] w-2.5 h-2.5 text-primary/60 fill-primary/40" />
      </div>

      {/* Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-20">
        {/* key forces re-mount per slide so the rise animation replays */}
        <div key={current} className="max-w-2xl">
          {/* Eyebrow badge */}
          <div className="animate-rise inline-flex items-center gap-2 mb-6 pl-1.5 pr-3.5 py-1 rounded-full bg-surface/70 border border-primary/25 backdrop-blur-md shadow-sm">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary">
              <Star className="w-3 h-3 text-primary-foreground fill-primary-foreground" />
            </span>
            <span className="text-[0.7rem] font-semibold tracking-[0.16em] uppercase text-foreground-secondary">
              {active.eyebrow}
            </span>
          </div>

          <h1 className="font-serif font-bold mb-5 leading-[1.06] text-foreground text-4xl sm:text-5xl lg:text-6xl min-h-[2.1em]">
            <span className="animate-rise rise-delay-1 inline-block">{active.title}</span>
            <span className="animate-rise rise-delay-2 block text-primary">
              {active.highlight}
            </span>
          </h1>

          <p className="animate-rise rise-delay-3 body-text max-w-xl mb-8 min-h-[4.5em] sm:min-h-[3.5em]">
            {active.description}
          </p>

          {/* CTAs */}
          <div className="animate-rise rise-delay-4 flex flex-col sm:flex-row gap-4 mb-10">
            <Link href="#book" className="btn-primary">
              Book Your Ride
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="#fleet" className="btn-secondary">
              Explore the Fleet
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-2.5 mb-10">
            {trustBadges.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.text}
                  className="inline-flex items-center gap-2 rounded-full bg-surface/60 border border-border px-3.5 py-1.5 backdrop-blur-sm"
                >
                  <Icon className="w-4 h-4 text-primary" />
                  <span className="text-xs sm:text-sm font-medium text-foreground-secondary">
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-lg">
            {stats.map((stat) => (
              <div key={stat.label} className="border-l-2 border-primary/40 pl-4">
                <p className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-foreground-tertiary">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel controls */}
      <div className="absolute right-4 sm:right-8 top-24 z-30">
        <button
          type="button"
          onClick={() => setIsPlaying((p) => !p)}
          aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-surface/70 border border-border backdrop-blur-md text-foreground-secondary hover:text-primary hover:border-primary/50 transition-colors shadow-sm"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
      </div>

      {/* Prev / Next + indicators */}
      <div className="absolute bottom-6 right-4 sm:right-8 z-30 flex items-center gap-3">
        <div className="flex items-center gap-2 mr-1">
          {slides.map((slide, i) => (
            <button
              key={slide.image}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === current}
              className="group h-1.5 rounded-full overflow-hidden bg-foreground/20 transition-all duration-300"
              style={{ width: i === current ? '2.5rem' : '0.75rem' }}
            >
              <span
                className={`block h-full rounded-full bg-primary origin-left ${
                  i === current ? 'w-full' : 'w-0'
                }`}
                style={
                  i === current && isPlaying
                    ? {
                        animation: `progressFill ${SLIDE_DURATION}ms linear both`,
                      }
                    : undefined
                }
              />
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface/70 border border-border backdrop-blur-md text-foreground-secondary hover:text-primary hover:border-primary/50 transition-colors shadow-sm"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface/70 border border-border backdrop-blur-md text-foreground-secondary hover:text-primary hover:border-primary/50 transition-colors shadow-sm"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
