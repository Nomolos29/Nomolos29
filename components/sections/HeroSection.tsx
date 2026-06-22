"use client"

import { socialIcons } from '@/lib/links'
import heroMockup from "@/public/homepage/acedboardShowcase.png"
import React, { useEffect, useState } from 'react'
import Button from '../utility/Button'
import Link from 'next/link'
import Image from 'next/image'
import SocialHoverCard from '../utility/SocialHoverCard'
import { getCachedSocialData, updateCacheIfNeeded, CachedData } from '@/lib/socialDataCache'

const HeroSection = () => {
  const [socialData, setSocialData] = useState<CachedData | null>(null);

  useEffect(() => {
    const cached = getCachedSocialData();
    if (cached) setSocialData(cached);

    updateCacheIfNeeded().then((updated) => {
      if (updated) setSocialData(updated);
    });

    const interval = setInterval(() => {
      const now = new Date();
      if (now.getHours() === 0 && now.getMinutes() < 5) {
        updateCacheIfNeeded().then((updated) => {
          if (updated) setSocialData(updated);
        });
      }
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const getLatestContentForPlatform = (platform: string) => {
    if (!socialData) return undefined;
    switch (platform) {
      case 'github': return socialData.github;
      case 'twitter': return socialData.twitter;
      case 'youtube': return socialData.youtube;
      default: return undefined;
    }
  };

  const iconColorClasses = (color: string) =>
    color === 'blue' ? 'shadow-blue-400 text-primary'
    : color === 'black' ? 'shadow-gray-400 text-foreground'
    : color === 'red' ? 'shadow-red-400 text-red-500'
    : color === 'green' ? 'shadow-green-400 text-green-600'
    : '';

  const dotColorClasses = (color: string) =>
    color === 'blue' ? 'bg-blue-400'
    : color === 'black' ? 'bg-gray-500'
    : color === 'red' ? 'bg-red-500'
    : color === 'green' ? 'bg-green-500'
    : '';

  // Fixed positions relative to the section using absolute positioning
  // Arranged symmetrically: 3 on left column, 3 on right column
  const desktopPositions: Record<string, string> = {
    'top-left':     'top-[130px] left-[2vw]',
    'top-right':    'top-[130px] right-[2vw]',
    'left-center':  'top-[280px] left-[2vw]',
    'right-center': 'top-[280px] right-[2vw]',
    'bottom-left':  'top-[430px] left-[2vw]',
    'bottom-right': 'top-[430px] right-[2vw]',
  };

  return (
    <section className='relative flex justify-center w-full pt-36 pb-0 px-4 overflow-x-hidden'>
      {/* Center content */}
      <div className='flex flex-col items-center w-full max-w-3xl text-center gap-y-5 z-[2]'>
        <div className='space-y-3'>
          <p className='text-base sm:text-lg md:text-xl font-semibold text-primary capitalize'>
            Optimized code. Seamless UX.
          </p>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-foreground'>
            I build <span className='text-primary'>responsive</span> websites that perform at scale.
          </h1>
        </div>

        <p className='text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl'>
          I&apos;m Solomon — a front-end developer focused on building responsive, SEO-optimized interfaces
          with clean architecture and intentional user experience. From React to Next.js, I turn ideas into
          fast-loading, accessible, and delightful web products.
        </p>

        <div className='flex flex-col sm:flex-row items-center gap-4 mt-6 w-full max-w-sm sm:max-w-md'>
          <Button textSize='lg' butonText='View my resume' buttonLink='/resume' buttonType='outline' />
          <Button textSize='lg' buttonLink='#contact' butonText="Let's Build Together" buttonType='filled' />
        </div>

        {/* Hero mockup image */}
        <div className='mt-8 w-full relative z-[2]'>
          <div className='absolute bg-gradient-to-b from-background/10 via-background/60 to-background h-[200px] sm:h-[300px] md:h-[400px] bottom-0 w-full z-[1]' />
          <Image src={heroMockup} alt='Website mock-up' className='w-full h-auto rounded-t-2xl' priority />
        </div>
      </div>

      {/* Desktop floating social icons — only visible on xl and above to avoid overlap */}
      <div className='hidden xl:block'>
        {socialIcons.map((icon, index) => (
          <Link href={icon.link} target='_blank' key={index}>
            <div className={`absolute ${desktopPositions[icon.position] ?? 'hidden'}`}>
              <div className={`h-[56px] group w-[56px] bg-card cursor-pointer shadow-[1px_1px_10px] relative ${iconColorClasses(icon.color)} flex items-center justify-center text-2xl rounded-full transition-transform hover:scale-110`}>
                {icon.icon}
                <div className={`p-[7px] -top-[18px] ${icon.link !== '#' && 'animate-pulse'} ${icon.labelDirection === 'right' ? '-right-4' : '-left-4'} absolute rounded-full ${dotColorClasses(icon.color)}`} />
                <SocialHoverCard
                  platform={icon.platform}
                  name={icon.name}
                  color={icon.color}
                  labelDirection={icon.labelDirection}
                  latestContent={getLatestContentForPlatform(icon.platform)}
                  link={icon.link}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile + tablet social icons row */}
      <div className='xl:hidden absolute bottom-4 left-0 right-0 flex justify-center gap-3 z-[3] px-4'>
        {socialIcons.map((icon, index) => (
          <Link href={icon.link} target='_blank' key={index}>
            <div className={`h-[46px] w-[46px] bg-card cursor-pointer shadow-[1px_1px_8px] ${iconColorClasses(icon.color)} flex items-center justify-center text-lg rounded-full hover:scale-110 transition-transform`}>
              {icon.icon}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
