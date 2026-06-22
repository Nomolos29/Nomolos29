"use client"

import { socialIcons } from '@/lib/links'
import heroMockup from "@/public/homepage/acedboardShowcase.png"
import React, { useEffect, useState } from 'react'
import Button from '../utility/Button'
import Link from 'next/link'
import Image from 'next/image'
import SocialHoverCard from '../utility/SocialHoverCard'
import { getCachedSocialData, updateCacheIfNeeded, CachedData } from '@/lib/socialDataCache'

// Scattered desktop positions — original design intent preserved
// Each position maps to a spot around the hero content, staggered so they feel organic
const desktopPositions: Record<string, { pos: string; float: string }> = {
  'top-left':     { pos: 'top-[160px] left-[8%]',          float: 'float-1' },
  'top-right':    { pos: 'top-[140px] right-[8%]',          float: 'float-2' },
  'left-center':  { pos: 'top-[340px] left-[3%]',           float: 'float-3' },
  'right-center': { pos: 'top-[340px] right-[3%]',          float: 'float-4' },
  'bottom-left':  { pos: 'top-[520px] left-[10%]',           float: 'float-5' },
  'bottom-right': { pos: 'top-[520px] right-[10%]',          float: 'float-6' },
}

// Mobile arc: 6 icons arranged in a shallow upward curve using translate offsets
// Icons are spaced evenly, outer ones rise up to create arc shape
const mobileArcOffsets = [
  '-translate-y-4',   // index 0 — left outer, highest
  '-translate-y-6',   // index 1 — left inner, slightly higher
  '-translate-y-8',   // index 2 — center-left, peak
  '-translate-y-8',   // index 3 — center-right, peak
  '-translate-y-6',   // index 4 — right inner
  '-translate-y-4',   // index 5 — right outer
]

const mobileFloatClasses = ['float-1', 'float-2', 'float-3', 'float-4', 'float-5', 'float-6']

const HeroSection = () => {
  const [socialData, setSocialData] = useState<CachedData | null>(null)

  useEffect(() => {
    const cached = getCachedSocialData()
    if (cached) setSocialData(cached)

    updateCacheIfNeeded().then((updated) => {
      if (updated) setSocialData(updated)
    })

    const interval = setInterval(() => {
      const now = new Date()
      if (now.getHours() === 0 && now.getMinutes() < 5) {
        updateCacheIfNeeded().then((updated) => {
          if (updated) setSocialData(updated)
        })
      }
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  const getLatestContentForPlatform = (platform: string) => {
    if (!socialData) return undefined
    switch (platform) {
      case 'github':  return socialData.github
      case 'twitter': return socialData.twitter
      case 'youtube': return socialData.youtube
      default:        return undefined
    }
  }

  const iconColorClasses = (color: string) =>
    color === 'blue'  ? 'shadow-blue-400 text-primary'
    : color === 'black' ? 'shadow-gray-400 text-foreground'
    : color === 'red'   ? 'shadow-red-400 text-red-500'
    : color === 'green' ? 'shadow-green-400 text-green-600'
    : ''

  const dotColorClasses = (color: string) =>
    color === 'blue'  ? 'bg-blue-400'
    : color === 'black' ? 'bg-gray-500'
    : color === 'red'   ? 'bg-red-500'
    : color === 'green' ? 'bg-green-500'
    : ''

  return (
    <section className='relative flex justify-center w-full pt-36 pb-0 px-4 overflow-x-hidden'>

      {/* ── Center content ── */}
      <div className='flex flex-col items-center w-full max-w-4xl text-center gap-y-5 z-[2]'>
        <div className='space-y-3'>
          <p className='text-base sm:text-lg md:text-xl font-semibold text-primary capitalize'>
            Optimized code. Seamless UX.
          </p>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-foreground'>
            I build <span className='text-primary'>responsive</span> websites that perform at scale.
          </h1>
        </div>

        <p className='text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl'>
          I am Sunday Solomon, a front-end developer focused on building responsive, SEO-optimized interfaces
          with clean architecture and intentional user experience. From React to Next.js, I turn ideas into
          fast-loading, accessible, and delightful web products.
        </p>

        <div className='flex flex-col sm:flex-row items-center gap-4 mt-6 w-full max-w-sm sm:max-w-md'>
          <Button textSize='lg' butonText='View my resume' buttonLink='https://docs.google.com/document/d/1pFrc0rIWIzWElseapHJOr--Kb_OVY_IA/edit?usp=sharing&ouid=114183603003822068308&rtpof=true&sd=true' targetType='_blank' buttonType='outline' />
          <Button textSize='lg' buttonLink='#contact' butonText="Let's Build Together" buttonType='filled' />
        </div>

        {/* ── Mobile arc of social icons — sits right below buttons ── */}
        <div className='lg:hidden flex items-end justify-center gap-3 mt-4 mb-2 w-full'>
          {socialIcons.map((icon, index) => (
            <Link href={icon.link} target='_blank' key={index}>
              <div className={`${mobileArcOffsets[index]} ${mobileFloatClasses[index]} h-[46px] w-[46px] bg-card cursor-pointer shadow-[1px_1px_8px] ${iconColorClasses(icon.color)} flex items-center justify-center text-lg rounded-full hover:scale-110 transition-transform`}>
                {icon.icon}
              </div>
            </Link>
          ))}
        </div>

        {/* ── Hero mockup image ── */}
        <div className='mt-4 w-full relative z-[2]'>
          <div className='absolute bg-gradient-to-b from-background/10 via-background/60 to-background h-[200px] sm:h-[300px] md:h-[400px] bottom-0 w-full z-[1]' />
          <Image src={heroMockup} alt='Website mock-up' className='w-full h-auto rounded-t-2xl' priority />
        </div>
      </div>

      {/* ── Desktop scattered floating icons ── only on lg+ ── */}
      <div className='hidden lg:block'>
        {socialIcons.map((icon, index) => {
          const config = desktopPositions[icon.position]
          if (!config) return null
          return (
            <Link href={icon.link} target='_blank' key={index}>
              <div className={`absolute ${config.pos}`}>
                <div className={`${config.float} h-[60px] group w-[60px] bg-card cursor-pointer shadow-[1px_1px_10px] relative ${iconColorClasses(icon.color)} flex items-center justify-center text-2xl rounded-full hover:scale-110 transition-transform`}>
                  {icon.icon}

                  {/* Activity pulse dot */}
                  <div className={`p-2 -top-[22px] ${icon.link !== '#' && 'animate-pulse'} ${icon.labelDirection === 'right' ? '-right-5' : '-left-5'} absolute rounded-full ${dotColorClasses(icon.color)}`} />

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
          )
        })}
      </div>

    </section>
  )
}

export default HeroSection
