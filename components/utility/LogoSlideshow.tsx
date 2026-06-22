'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Company {
  name: string;
  description: string;
  industry: string;
  website: string;
  logoUrl?: string;
  logoText: string;
  featured?: boolean;
}

interface LogoSlideshowProps {
  companies: Company[];
  autoplay?: boolean;
  interval?: number;
  showDots?: boolean;
  className?: string;
}

const LogoSlideshow: React.FC<LogoSlideshowProps> = ({
  companies,
  autoplay = true,
  interval = 4000,
  showDots = true,
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-advance slideshow
  useEffect(() => {
    if (!autoplay || isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % companies.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoplay, interval, companies.length, isHovered]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % companies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + companies.length) % companies.length);
  };

  const currentCompany = companies[currentIndex];

  return (
    <div 
      className={`relative w-full ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Slide Area */}
      <div className="relative overflow-hidden rounded-2xl bg-card border border-border shadow-lg">
        
        {/* Logo Display */}
        <div className="flex items-center justify-center p-12 min-h-[200px]">
          <div className="text-center space-y-6 max-w-md mx-auto">
            
            {/* Logo */}
            <div className="flex items-center justify-center">
              {currentCompany.logoUrl ? (
                <div className="relative w-40 h-20 flex items-center justify-center">
                  <Image
                    src={currentCompany.logoUrl}
                    alt={`${currentCompany.name} logo`}
                    fill
                    className="object-contain filter drop-shadow-sm"
                    priority
                  />
                </div>
              ) : (
                <div className="w-24 h-24 rounded-xl bg-primary/10 flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-primary">
                    {currentCompany.logoText}
                  </span>
                </div>
              )}
            </div>

            {/* Company Info */}
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-foreground">
                {currentCompany.name}
              </h3>
              <p className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full inline-block">
                {currentCompany.industry}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {currentCompany.description}
              </p>
            </div>

          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:text-foreground hover:bg-card transition-all duration-200 shadow-sm"
          aria-label="Previous company"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:text-foreground hover:bg-card transition-all duration-200 shadow-sm"
          aria-label="Next company"
        >
          →
        </button>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="h-1 bg-border/40">
            <div
              className="h-full bg-gradient-to-r from-primary to-primary/70 transition-all duration-300 ease-out"
              style={{
                width: `${((currentIndex + 1) / companies.length) * 100}%`
              }}
            />
          </div>
        </div>
      </div>

      {/* Dot Indicators */}
      {showDots && (
        <div className="flex items-center justify-center space-x-3 mt-6">
          {companies.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-primary scale-110'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Company Grid Preview */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
        {companies.map((company, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`p-4 rounded-lg border transition-all duration-200 ${
              index === currentIndex
                ? 'border-primary/40 bg-primary/5 scale-105'
                : 'border-border bg-card hover:border-border/80 hover:shadow-sm'
            }`}
          >
            <div className="flex items-center justify-center h-12">
              {company.logoUrl ? (
                <div className="relative w-20 h-8 flex items-center justify-center">
                  <Image
                    src={company.logoUrl}
                    alt={`${company.name} logo`}
                    fill
                    className="object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              ) : (
                <div className="text-xs font-semibold text-muted-foreground">
                  {company.logoText}
                </div>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LogoSlideshow;