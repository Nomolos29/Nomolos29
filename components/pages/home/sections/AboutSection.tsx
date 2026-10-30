"use client"

import React, { useEffect, useRef, useState } from 'react';
import { PortfolioCard } from '../utils';
import LogoSlideshow from '../../../utility/LogoSlideshow';
import { companyShowcase } from '@/lib/data/links';
import { FaBolt, FaMobileScreenButton, FaBullseye, FaCubes } from 'react-icons/fa6';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '15+', label: 'Projects Completed' },
    { number: '4+', label: 'Industry Partners' },
    { number: '100%', label: 'Client Satisfaction' },
  ];

  const values = [
    {
      icon: <FaBolt className='w-6 h-6 text-amber-500' />,
      title: 'Performance First',
      description: 'Every line of code is optimized for speed, Core Web Vitals, and instant interaction so users get the best experience possible.',
    },
    {
      icon: <FaMobileScreenButton className='w-6 h-6 text-primary' />,
      title: 'Mobile-First Responsive',
      description: 'All interfaces are crafted to look and feel native across smartphones, tablets, laptops, and ultra-wide displays.',
    },
    {
      icon: <FaBullseye className='w-6 h-6 text-[#f835a7]' />,
      title: 'Conversion & User-Centric',
      description: 'I prioritize intuitive user journeys and visual hierarchy that turn visitors into loyal customers.',
    },
    {
      icon: <FaCubes className='w-6 h-6 text-emerald-500' />,
      title: 'Clean, Scalable Architecture',
      description: 'Maintainable, strongly-typed TypeScript & component-driven codebases that grow effortlessly with your business.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className='w-full py-16 md:py-24 px-4 md:px-8 lg:px-10 xl:px-14 bg-muted/30'
    >
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-14'>
          <PortfolioCard
            preHeading='Proven Track Record'
            headingText='Impact'
            subheadingText='Values & Partners'
            textColor='adaptive'
          />
          <p className='text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto'>
            From concept to deployment, I partner with startups, agencies, and enterprises to deliver digital products that perform at scale.
          </p>
        </div>

        {/* Stats */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-16'>
          {stats.map((stat, index) => (
            <div
              key={index}
              style={{ transitionDelay: `${index * 100}ms` }}
              className={`bg-card border border-border rounded-3xl p-6 text-center shadow-md hover:border-primary/40 hover:-translate-y-1 transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <div className='text-4xl md:text-5xl font-bold text-primary mb-2'>{stat.number}</div>
              <div className='text-sm sm:text-base text-muted-foreground font-medium'>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Core Values */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-7 mb-20'>
          {values.map((value, index) => (
            <div
              key={index}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
              className={`bg-card border border-border rounded-3xl p-8 shadow-md hover:shadow-xl hover:border-primary/40 hover:-translate-y-1 transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className='w-12 h-12 rounded-2xl bg-muted flex items-center justify-center mb-5'>
                {value.icon}
              </div>
              <h3 className='text-xl font-semibold text-foreground mb-2.5'>{value.title}</h3>
              <p className='text-muted-foreground leading-relaxed'>{value.description}</p>
            </div>
          ))}
        </div>

        {/* Companies & Partners Slideshow */}
        <div className='space-y-6'>
          <div className='text-center max-w-xl mx-auto'>
            <span className='text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1.5 rounded-full'>
              Trusted By Teams
            </span>
            <h3 className='text-2xl sm:text-3xl font-bold text-foreground mt-3'>
              Companies & Programs I&apos;ve Worked With
            </h3>
          </div>
          <LogoSlideshow companies={companyShowcase} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
