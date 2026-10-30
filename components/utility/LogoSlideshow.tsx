'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { FaArrowRight } from 'react-icons/fa6';
import { PortfolioCard } from '../pages/home/utils';

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
  interval = 4500,
  showDots = true,
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

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
      <div className='w-full bg-gradient-to-b from-[30%] from-gray-900 to-black rounded-[24px] md:rounded-[32px] py-12 md:py-20 px-6 md:px-12 lg:px-14 overflow-hidden shadow-[10px_10px_20px_rgba(0,0,0,0.25)]'>
        {/* Top PortfolioCard Header */}
        <div className='flex flex-col items-center text-center mb-10'>
          <PortfolioCard
            preHeading='Trusted By Teams'
            headingText='Partners'
            subheadingText='Companies & Programs'
          />
        </div>

        {/* Main Two-Column Editorial Split (Matches FaqSection & Introduction pattern) */}
        <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 w-full'>
          {/* Left Column: Big Poppins Typography + Pill Controls */}
          <div className='w-full lg:w-[50%] font-[family-name:var(--font-poppins)] space-y-6'>
            <h2 className='text-4xl sm:text-5xl md:text-6xl text-white leading-tight'>
              Teams That <span className='text-[#f835a7]'>Trusted</span> My{' '}
              <span className='text-primary'>Craft</span>.
            </h2>
            <p className='text-gray-300 text-lg md:text-xl w-full md:w-[90%] leading-relaxed'>
              From SaaS product teams and digital marketing agencies to Web3 ecosystems, I collaborate closely with founders and engineers to ship products that last.
            </p>

            {/* Partner Pill Selector + Chevrons (Matches ProjectsSection pattern) */}
            <div className='flex items-center gap-3 pt-2 flex-wrap'>
              <button
                type='button'
                onClick={prevSlide}
                aria-label='Previous company'
                className='p-2.5 rounded-full border border-white/30 text-white hover:bg-white/10 transition flex-shrink-0 cursor-pointer'
              >
                <BiChevronLeft size={24} />
              </button>

              <div className='flex flex-wrap gap-2'>
                {companies.map((company, index) => (
                  <button
                    key={index}
                    type='button'
                    onClick={() => goToSlide(index)}
                    className={`px-4 py-2 rounded-full border-2 font-semibold text-xs sm:text-sm transition-all duration-300 cursor-pointer ${
                      index === currentIndex
                        ? 'bg-white border-white text-black'
                        : 'bg-transparent border-white/40 text-white hover:border-white'
                    }`}
                  >
                    {company.name}
                  </button>
                ))}
              </div>

              <button
                type='button'
                onClick={nextSlide}
                aria-label='Next company'
                className='p-2.5 rounded-full border border-white/30 text-white hover:bg-white/10 transition flex-shrink-0 cursor-pointer'
              >
                <BiChevronRight size={24} />
              </button>
            </div>

            {/* Pill-Dot Indicators (Matches ProjectsSection pagination dots) */}
            {showDots && (
              <div className='flex items-center space-x-2 pt-2'>
                {companies.map((company, index) => (
                  <button
                    key={index}
                    type='button'
                    onClick={() => goToSlide(index)}
                    aria-label={`Select ${company.name}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      index === currentIndex
                        ? 'bg-primary w-[60px]'
                        : 'bg-white/40 w-[10px] hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Signature Pill CTAs */}
            <div className='flex flex-wrap items-center gap-4 pt-3'>
              <Link
                href='https://wa.me/+2348101123098'
                target='_blank'
                className='inline-flex gap-x-4 items-center text-black text-base sm:text-lg py-3 px-6 rounded-full cursor-pointer bg-white hover:bg-gray-100 transition-all'
              >
                Let&apos;s Build Together <FaArrowRight />
              </Link>
            </div>
          </div>

          {/* Right Column: Tilted Nested Card (Matches Accordion.tsx QuestionCard pattern) */}
          <div className='w-full lg:w-[46%] flex flex-col gap-y-6'>
            <div
              className={`bg-white text-gray-900 w-full rounded-2xl transition-all ease-in-out duration-500 shadow-[10px_10px_20px_rgba(252,249,249,0.1)] ${
                currentIndex % 2 === 0
                  ? 'rotate-2 hover:rotate-0'
                  : '-rotate-2 hover:rotate-0'
              }`}
            >
              {/* Card Top Header Bar */}
              <div className='flex justify-between items-center px-5 py-3.5 border-b border-gray-200 font-[family-name:var(--font-poppins)]'>
                <p className='text-sm font-medium text-gray-800'>
                  Partner <span className='pl-1 font-bold text-primary'>0{currentIndex + 1}</span>
                </p>
                <span className='text-xs font-semibold px-3 py-1 rounded-full border border-gray-300 text-gray-700'>
                  {currentCompany.industry}
                </span>
              </div>

              {/* Inner Dark Box */}
              <div className='p-3'>
                <div className='bg-gray-900 text-white p-6 md:p-8 overflow-hidden rounded-2xl flex flex-col gap-y-5 font-[family-name:var(--font-poppins)]'>
                  {/* Logo Showcase Box + BubbleTag Dot */}
                  <div className='flex items-center justify-between gap-4'>
                    <div className='h-16 px-5 rounded-xl bg-white flex items-center justify-center shadow-md min-w-[140px]'>
                      {currentCompany.logoUrl ? (
                        <div className='relative w-32 h-10 flex items-center justify-center'>
                          <Image
                            src={currentCompany.logoUrl}
                            alt={`${currentCompany.name} logo`}
                            fill
                            className='object-contain'
                            priority
                          />
                        </div>
                      ) : (
                        <span className='text-2xl font-bold text-black font-[family-name:var(--font-rubikMaze)]'>
                          {currentCompany.logoText}
                        </span>
                      )}
                    </div>

                    <span className='font-[family-name:var(--font-italianno)] text-2xl sm:text-3xl text-gray-300 border border-white/30 px-4 py-0.5 rounded-full'>
                      Featured Partner
                    </span>
                  </div>

                  {/* Company Title & Description */}
                  <div className='space-y-2.5'>
                    <h3 className='text-2xl md:text-3xl font-semibold text-white'>
                      {currentCompany.name}
                    </h3>
                    <p className='text-sm sm:text-base text-gray-200 leading-relaxed italic'>
                      &ldquo;{currentCompany.description}&rdquo;
                    </p>
                  </div>

                  {/* Bottom Action Link */}
                  {currentCompany.website && currentCompany.website !== '#' && (
                    <div className='pt-2'>
                      <Link
                        href={currentCompany.website}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex gap-x-4 items-center text-white text-base py-2.5 px-6 border-2 rounded-full border-white hover:bg-white hover:text-black transition-all cursor-pointer'
                      >
                        Visit {currentCompany.name} <FaArrowRight />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Thumbnail Switcher Row */}
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2'>
              {companies.map((company, index) => (
                <button
                  key={index}
                  type='button'
                  onClick={() => goToSlide(index)}
                  className={`p-2 rounded-2xl transition-all duration-300 cursor-pointer ${
                    index === currentIndex
                      ? 'bg-white text-black shadow-[6px_6px_15px_rgba(0,0,0,0.3)] -translate-y-1'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  <div className='bg-gray-900 text-white rounded-xl py-2.5 px-3 flex flex-col items-center justify-center'>
                    <span className='text-xs font-bold tracking-wider uppercase truncate max-w-full'>
                      {company.name}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoSlideshow;
