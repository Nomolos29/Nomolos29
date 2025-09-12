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
    // Initial load from cache
    const cached = getCachedSocialData();
    if (cached) {
      setSocialData(cached);
    }

    // Update cache if needed (will trigger at midnight)
    updateCacheIfNeeded().then((updated) => {
      if (updated) {
        setSocialData(updated);
      }
    });

    // Set up interval to check every minute if it's midnight
    const interval = setInterval(() => {
      const now = new Date();
      if (now.getHours() === 0 && now.getMinutes() < 5) {
        updateCacheIfNeeded().then((updated) => {
          if (updated) {
            setSocialData(updated);
          }
        });
      }
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  const getLatestContentForPlatform = (platform: string) => {
    if (!socialData) return undefined;

    switch (platform) {
      case 'github':
        return socialData.github;
      case 'twitter':
        return socialData.twitter;
      case 'youtube':
        return socialData.youtube;
      default:
        return undefined;
    }
  };

  return (
    <section className='flex justify-center w-full pt-36 px-4 md:px-8 relative'>
      <main className='flex flex-col items-center w-full max-w-4xl text-center gap-y-5 z-[2]'>
        <div className='space-y-3'>
          <p className='text-lg md:text-2xl font-semibold text-primary capitalize'>Optimized code. Seamless UX.</p>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-foreground'>I build <span className='text-primary font-semibold'>responsive</span> websites that perform at scale.</h1>
        </div>

        <p className='w-full md:w-[85%] text-base md:text-lg text-muted-foreground max-w-3xl'>I&apos;m Solomon — a front-end developer focused on building responsive, SEO-optimized interfaces with clean architecture and intentional user experience. From React to Next.js, I turn ideas into fast-loading, accessible, and delightful web products.</p>

        <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-x-5 mt-8 w-full max-w-md'>
          <Button textSize='lg' butonText='View my resume' buttonLink='#' buttonType='outline' />
          <Button textSize='lg' buttonLink='#' butonText="Let's Build Together" buttonType='filled' />
        </div>

        <div className='mt-8 w-full justify-center relative z-[2] max-w-4xl'>
          <div className='absolute bg-gradient-to-b from-background/10 via-background/50 to-background h-[300px] md:h-[400px] bottom-0 w-full' />
          <Image src={heroMockup} alt='Website mock-up' className='w-full h-auto' />
        </div>
      </main>



      <div className='hidden lg:block'>
        {socialIcons.map((icon, index) => (
          <Link href={icon.link} target='_blank' key={index}>
            <div className={`absolute ${icon.position === "top-left" ? "left-23" : icon.position === "top-right" ? "right-23" : icon.position === "bottom-right" ? "bottom-[50%] right-50" : icon.position === "bottom-left" ? "bottom-[50%] left-50" : icon.position === "left-center" ? "top-[32%] left-14" : icon.position === "right-center" ? "top-[32%] right-14" : ""}`}>
              <main className={`h-[60px] group w-[60px] bg-card cursor-pointer shadow-[1px_1px_10px] relative ${icon.color === "blue" ? "shadow-blue-400 text-primary" : icon.color === "black" ? "shadow-gray-400 text-foreground" : icon.color === "red" ? "shadow-red-400 text-red-600" : icon.color === "green" ? "shadow-green-400 text-green-900" : ""}  flex items-center justify-center text-2xl rounded-full`}>
                {icon.icon}

                <div className={`p-2 -top-[22px] ${icon.link !== "#"  && "animate-pulse"} ${icon.labelDirection === "right" ? "-right-5" : "-left-5"} absolute rounded-full ${icon.color === "blue" ? "bg-blue-400" : icon.color === "black" ? "bg-gray-500" : icon.color === "red" ? "bg-red-500" : icon.color === "green" ? "bg-green-500" : ""}`} />

                <SocialHoverCard
                  platform={icon.platform}
                  name={icon.name}
                  color={icon.color}
                  labelDirection={icon.labelDirection}
                  latestContent={getLatestContentForPlatform(icon.platform)}
                  link={icon.link}
                />
              </main>
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile Social Icons */}
      <div className='lg:hidden w-full max-w-md mx-auto mt-8 z-[3]'>
        <div className='flex justify-center gap-4 flex-wrap'>
          {socialIcons.map((icon, index) => (
            <Link href={icon.link} target='_blank' key={index}>
              <div className={`h-[50px] w-[50px] bg-card cursor-pointer shadow-[1px_1px_10px] ${icon.color === "blue" ? "shadow-blue-400 text-primary" : icon.color === "black" ? "shadow-gray-400 text-foreground" : icon.color === "red" ? "shadow-red-400 text-red-600" : icon.color === "green" ? "shadow-green-400 text-green-900" : ""} flex items-center justify-center text-xl rounded-full hover:scale-110 transition-transform`}>
                {icon.icon}
              </div>
            </Link>
          ))}
        </div>
      </div>

    </section>
  )
}

export default HeroSection