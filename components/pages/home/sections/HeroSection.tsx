"use client"

import React, { useState } from 'react'
import { socialIcons } from '@/lib/data/links'
import NomolosPortrait from "@/public/Nomolos.png"
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa6"
import { PortfolioCard } from '../utils'
import Link from 'next/link'

const mobileArcOffsets = [
  '-translate-y-3',
  '-translate-y-6',
  '-translate-y-8',
  '-translate-y-6',
  '-translate-y-3',
]

const mobileFloatClasses = ['float-1', 'float-2', 'float-3', 'float-4', 'float-5']

const HeroSection = () => {
  const [parallax, setParallax] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const normX = (e.clientX - rect.left) / rect.width - 0.5
    const normY = (e.clientY - rect.top) / rect.height - 0.5
    setParallax({ x: normX, y: normY })
  }

  const handleMouseLeave = () => {
    setParallax({ x: 0, y: 0 })
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className='relative flex justify-center w-full min-h-[92vh] pt-28 lg:pb-32 xl:pb-40 px-4 overflow-hidden bg-gradient-to-b from-[25%] from-gray-900 via-[#070b14] to-black'
    >
      {/* Ambient Radial Glows */}
      <div className='pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-primary/20 blur-[130px] animate-pulse-glow z-0' />
      <div className='pointer-events-none absolute bottom-10 right-1/4 w-[320px] h-[320px] rounded-full bg-[#f835a7]/10 blur-[110px] z-0' />

      {/* ── Center content ── */}
      <div className='flex flex-col items-center w-full max-w-[1440px] text-center gap-y-5 z-[2]'>
        <PortfolioCard subheadingText='Sunday Solomon' headingText='Portfolio' preHeading='2026' />

        <div className='w-full pt-8 md:pt-14 xl:h-[600px] flex flex-col items-center'>
          <div className='flex flex-col items-center w-full'>
            <h1
              style={{
                transform: `translate3d(${parallax.x * -22}px, ${parallax.y * -12}px, 0)`,
              }}
              className='uppercase text-white font-[family-name:var(--font-alfaSlabOne)] text-[44px] sm:text-[64px] md:text-[106px] lg:text-[8.8rem] xl:text-9xl leading-tight z-[-2] transition-transform duration-300 ease-out select-none drop-shadow-[0_10px_30px_rgba(1,75,167,0.3)]'
            >
              Web Developer
            </h1>

            <div className='flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4 w-full lg:w-[950px] xl:w-[1200px] font-medium text-white mt-2'>
              <p className='text-sm sm:text-base md:text-lg text-gray-300 md:max-w-[320px] lg:max-w-[400px] text-center sm:text-left'>
                From <span className='text-[#4da3ff] font-semibold'>Frontend</span> engineering with JavaScript, TypeScript, React, Next.js and Solidity...
              </p>
              <p className='text-sm sm:text-base md:text-lg text-gray-300 md:max-w-[320px] lg:max-w-[400px] text-center sm:text-right'>
                To high-converting product design with <span className='text-[#4da3ff] font-semibold'>Figma, WordPress, Divi</span> & modern CMS tools.
              </p>
            </div>
          </div>

          <div className='flex flex-col md:flex-row justify-between items-center md:items-end w-full lg:w-[950px] xl:w-[1200px] pt-10 md:pt-16 gap-10'>
            {/* Left Bio & Actions */}
            <div className='md:w-[320px] lg:w-[350px] xl:w-[420px] text-left space-y-5 flex flex-col items-center md:items-start gap-y-6 md:gap-y-12'>
              <div className='flex flex-col items-center md:items-start space-y-5 md:space-y-7 relative'>
                <p className='w-[92%] md:w-full text-center md:text-left text-sm sm:text-base text-gray-300 leading-relaxed'>
                  I build fast, scalable, and accessible web applications with a strong focus on performance, maintainability, and exceptional user experience.
                </p>

                <div className='w-[140%] sm:w-[110%] block md:hidden my-2'>
                  <Image
                    src={NomolosPortrait}
                    alt='Sunday Solomon portrait'
                    width={1200}
                    height={600}
                    priority
                  />
                </div>

                <div className='flex flex-wrap items-center justify-center md:justify-start gap-3 pt-1'>
                  <Link
                    href='https://wa.me/+2348101123098'
                    target='_blank'
                    className='group inline-flex gap-x-3 items-center text-white text-base sm:text-lg py-3 px-6 border-2 rounded-full border-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer shadow-[0_0_25px_rgba(255,255,255,0.12)]'
                  >
                    Let&apos;s Connect
                    <FaArrowRight className='transition-transform duration-300 group-hover:translate-x-1.5' />
                  </Link>
                  <Link
                    href='#projects'
                    className='inline-flex items-center text-gray-300 hover:text-white text-sm sm:text-base py-3 px-5 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 transition-all duration-300'
                  >
                    Explore Work
                  </Link>
                </div>
              </div>

              <div>
                <p className='uppercase text-xs tracking-widest text-gray-400 text-center md:text-left'>
                  Find me on:
                </p>
                <div className='flex items-end justify-center md:justify-start gap-3 w-full mt-10 md:mt-8'>
                  {socialIcons.map((icon, index) => (
                    <Link
                      key={index}
                      href={icon.link}
                      target={icon.link.startsWith('http') ? '_blank' : undefined}
                      rel={icon.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      aria-label={icon.name}
                      className='group relative'
                    >
                      <span className='pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-white text-black text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md'>
                        {icon.name}
                      </span>
                      <div
                        className={`${mobileArcOffsets[index] ?? ''} ${mobileFloatClasses[index] ?? 'float-1'} h-[46px] w-[46px] text-white border border-white/70 bg-black/60 backdrop-blur-sm cursor-pointer flex items-center justify-center text-lg rounded-full hover:scale-115 hover:border-primary hover:bg-primary transition-all duration-300 shadow-lg`}
                      >
                        {icon.icon}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Floating Highlights Card (Desktop) */}
            <div className='hidden md:flex flex-col gap-4 w-[260px] lg:w-[300px] text-left bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-2xl mb-4'>
              <div className='flex items-center gap-2.5'>
                <span className='w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse' />
                <span className='text-xs uppercase tracking-wider text-emerald-400 font-semibold'>
                  Available for New Projects
                </span>
              </div>
              <div className='grid grid-cols-2 gap-3 pt-2 border-t border-white/10'>
                <div>
                  <p className='text-2xl lg:text-3xl font-bold text-white'>5+</p>
                  <p className='text-xs text-gray-400'>Years Building</p>
                </div>
                <div>
                  <p className='text-2xl lg:text-3xl font-bold text-[#4da3ff]'>15+</p>
                  <p className='text-xs text-gray-400'>Shipped Products</p>
                </div>
              </div>
              <p className='text-xs text-gray-400 leading-relaxed'>
                Specializing in high-performance React, Next.js, TypeScript & conversion-focused digital platforms.
              </p>
            </div>
          </div>
        </div>

        <Image
          src={NomolosPortrait}
          alt='Sunday Solomon portrait'
          width={1200}
          height={600}
          priority
          style={{
            transform: `translate3d(${parallax.x * 12}px, ${parallax.y * 6}px, 0)`,
          }}
          className='hidden md:block absolute bottom-0 z-[-1] transition-transform duration-300 ease-out pointer-events-none select-none'
        />
      </div>
    </section>
  )
}

export default HeroSection
