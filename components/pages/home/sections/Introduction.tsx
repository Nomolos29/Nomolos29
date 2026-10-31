"use client"

import React, { useEffect, useRef, useState } from 'react'
import { PortfolioCard } from '../utils'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight, FaArrowUpRightFromSquare } from 'react-icons/fa6'

const Introduction = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id='about'
      ref={sectionRef}
      className='relative w-full flex justify-center py-16 md:py-24 bg-gradient-to-b from-black via-gray-800/90 to-background px-5 md:px-8 lg:px-10 xl:px-14 overflow-hidden'
    >
      {/* ── Mature Multi-Layer Architectural Background Graphics & Motion ── */}
      <div className='pointer-events-none absolute inset-0 overflow-hidden' aria-hidden='true'>
        {/* Layer 1: Panning Dual-Scale Engineering Blueprint Grid */}
        <div
          className='absolute inset-0 opacity-50 dark:opacity-35 animate-grid-pan bg-[linear-gradient(to_right,rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.18)_1px,transparent_1px)] bg-[size:56px_56px]'
          style={{
            maskImage: 'radial-gradient(ellipse 92% 85% at 50% 45%, black 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 92% 85% at 50% 45%, black 40%, transparent 100%)',
          }}
        />
        {/* Fine secondary dot-matrix overlay */}
        <div
          className='absolute inset-0 opacity-30 dark:opacity-25 bg-[radial-gradient(rgba(56,189,248,0.35)_1px,transparent_1px)] [background-size:28px_28px]'
          style={{
            maskImage: 'radial-gradient(ellipse 75% 70% at 50% 40%, black 20%, transparent 95%)',
            WebkitMaskImage: 'radial-gradient(ellipse 75% 70% at 50% 40%, black 20%, transparent 95%)',
          }}
        />

        {/* Layer 2: 5 Drifting Ambient Aurora Glow Fields */}
        <div className='absolute -top-24 left-[5%] w-[460px] h-[460px] rounded-full bg-primary/25 blur-[125px] animate-orbit-slow' />
        <div className='absolute top-[18%] right-[4%] w-[420px] h-[420px] rounded-full bg-[#f835a7]/20 blur-[130px] animate-orbit-reverse' />
        <div className='absolute top-[48%] left-[28%] w-[500px] h-[360px] rounded-full bg-sky-500/15 blur-[135px] animate-pulse-glow' />
        <div className='absolute -bottom-20 left-[8%] w-[380px] h-[320px] rounded-full bg-[#f835a7]/15 blur-[120px] animate-pulse-glow' />
        <div className='absolute -bottom-16 right-[10%] w-[440px] h-[340px] rounded-full bg-primary/20 blur-[125px] animate-orbit-slow' />

        {/* Layer 3: Full-Canvas Architectural SVG Schematic, 6 Animated Data-Flow Ribbons & Sonar Nodes */}
        <svg
          className='absolute inset-0 w-full h-full opacity-75 dark:opacity-80'
          viewBox='0 0 1440 1050'
          fill='none'
          preserveAspectRatio='xMidYMid slice'
        >
          <defs>
            <linearGradient id='intro-beam-primary' x1='0%' y1='0%' x2='100%' y2='0%'>
              <stop offset='0%' stopColor='#014ba7' stopOpacity='0' />
              <stop offset='50%' stopColor='#38bdf8' stopOpacity='1' />
              <stop offset='100%' stopColor='#f835a7' stopOpacity='0' />
            </linearGradient>
            <linearGradient id='intro-beam-accent' x1='100%' y1='0%' x2='0%' y2='100%'>
              <stop offset='0%' stopColor='#f835a7' stopOpacity='0' />
              <stop offset='50%' stopColor='#f835a7' stopOpacity='0.95' />
              <stop offset='100%' stopColor='#38bdf8' stopOpacity='0' />
            </linearGradient>
            <linearGradient id='intro-beam-vertical' x1='0%' y1='0%' x2='0%' y2='100%'>
              <stop offset='0%' stopColor='#38bdf8' stopOpacity='0' />
              <stop offset='50%' stopColor='#38bdf8' stopOpacity='0.85' />
              <stop offset='100%' stopColor='#f835a7' stopOpacity='0' />
            </linearGradient>
          </defs>

          {/* Static architectural blueprint curves & orthogonal circuit traces */}
          <path
            d='M-100 190 C 260 190, 380 390, 720 390 C 1060 390, 1180 190, 1540 190'
            stroke='rgba(56,189,248,0.2)'
            strokeWidth='1'
            strokeDasharray='5 7'
          />
          <path
            d='M-100 320 C 320 320, 440 560, 860 560 C 1140 560, 1260 340, 1540 340'
            stroke='rgba(148,163,184,0.22)'
            strokeWidth='1'
            strokeDasharray='4 6'
          />
          <path
            d='M-60 760 C 360 760, 520 430, 960 430 C 1200 430, 1320 680, 1540 680'
            stroke='rgba(248,53,167,0.2)'
            strokeWidth='1'
            strokeDasharray='4 6'
          />
          <path
            d='M-80 910 L 340 910 L 420 830 L 980 830 L 1060 910 L 1520 910'
            stroke='rgba(1,75,167,0.24)'
            strokeWidth='1.2'
            strokeDasharray='6 6'
          />
          <path
            d='M 180 -40 L 180 240 L 250 310 L 250 1080'
            stroke='rgba(56,189,248,0.14)'
            strokeWidth='1'
          />
          <path
            d='M 1260 -40 L 1260 280 L 1190 350 L 1190 1080'
            stroke='rgba(248,53,167,0.14)'
            strokeWidth='1'
          />

          {/* 6 Animated Travelling Light Beams */}
          <path
            d='M-100 190 C 260 190, 380 390, 720 390 C 1060 390, 1180 190, 1540 190'
            stroke='url(#intro-beam-primary)'
            strokeWidth='2.5'
            strokeLinecap='round'
            className='animate-beam-flow-fast'
          />
          <path
            d='M-100 320 C 320 320, 440 560, 860 560 C 1140 560, 1260 340, 1540 340'
            stroke='url(#intro-beam-primary)'
            strokeWidth='2.5'
            strokeLinecap='round'
            className='animate-beam-flow'
          />
          <path
            d='M-60 760 C 360 760, 520 430, 960 430 C 1200 430, 1320 680, 1540 680'
            stroke='url(#intro-beam-accent)'
            strokeWidth='2.5'
            strokeLinecap='round'
            className='animate-beam-flow-delayed'
          />
          <path
            d='M-80 910 L 340 910 L 420 830 L 980 830 L 1060 910 L 1520 910'
            stroke='url(#intro-beam-primary)'
            strokeWidth='2'
            strokeLinecap='round'
            className='animate-beam-flow-delayed'
          />
          <path
            d='M 180 -40 L 180 240 L 250 310 L 250 1080'
            stroke='url(#intro-beam-vertical)'
            strokeWidth='2'
            strokeLinecap='round'
            className='animate-beam-flow'
          />
          <path
            d='M 1260 -40 L 1260 280 L 1190 350 L 1190 1080'
            stroke='url(#intro-beam-vertical)'
            strokeWidth='2'
            strokeLinecap='round'
            className='animate-beam-flow-fast'
          />

          {/* Sonar-Pulsing Coordinate Nodes */}
          <g>
            <circle cx='180' cy='240' r='4' fill='#38bdf8' />
            <circle cx='180' cy='240' r='9' stroke='#38bdf8' strokeWidth='1.5' className='animate-sonar-ping' />

            <circle cx='340' cy='345' r='4' fill='#38bdf8' />
            <circle cx='340' cy='345' r='10' stroke='#38bdf8' strokeWidth='1.5' className='animate-sonar-ping-delayed' />

            <circle cx='720' cy='390' r='4' fill='#f835a7' />
            <circle cx='720' cy='390' r='10' stroke='#f835a7' strokeWidth='1.5' className='animate-sonar-ping' />

            <circle cx='860' cy='560' r='4' fill='#f835a7' />
            <circle cx='860' cy='560' r='10' stroke='#f835a7' strokeWidth='1.5' className='animate-sonar-ping-delayed' />

            <circle cx='1260' cy='280' r='4' fill='#38bdf8' />
            <circle cx='1260' cy='280' r='9' stroke='#38bdf8' strokeWidth='1.5' className='animate-sonar-ping' />

            <circle cx='420' cy='830' r='3.5' fill='#014ba7' />
            <circle cx='980' cy='830' r='3.5' fill='#f835a7' />
          </g>

          {/* Precision Blueprint Crosshairs (+) */}
          <g stroke='rgba(148,163,184,0.4)' strokeWidth='1.2'>
            <path d='M95 120 H109 M102 113 V127' />
            <path d='M1335 120 H1349 M1342 113 V127' />
            <path d='M75 520 H89 M82 513 V527' />
            <path d='M1355 520 H1369 M1362 513 V527' />
            <path d='M95 940 H109 M102 933 V947' />
            <path d='M1335 940 H1349 M1342 933 V947' />
          </g>
        </svg>

        {/* Layer 4: Multi-Ring Counter-Rotating Orbital Gyroscopes & Floating Isometric Wireframes */}
        {/* Upper-Left Counter-Rotating Gyroscope */}
        <div className='hidden md:flex absolute top-8 left-[3%] w-64 h-64 rounded-full border border-sky-400/20 items-center justify-center animate-[spin_45s_linear_infinite]'>
          <div className='w-48 h-48 rounded-full border border-dashed border-white/15 animate-[spin_28s_linear_infinite_reverse]' />
          <div className='w-32 h-32 rounded-full border border-[#f835a7]/20' />
          <div className='absolute -top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-sky-400 shadow-[0_0_14px_#38bdf8]' />
          <div className='absolute top-1/2 -right-1.5 -translate-y-1/2 w-2 h-2 rounded-full bg-[#f835a7] shadow-[0_0_12px_#f835a7]' />
        </div>

        {/* Upper-Right Architectural Radar Compass */}
        <div className='hidden md:flex absolute top-10 right-[3%] w-80 h-80 rounded-full border border-white/15 items-center justify-center animate-[spin_55s_linear_infinite]'>
          <div className='absolute inset-6 rounded-full border border-dashed border-primary/35 animate-[spin_32s_linear_infinite_reverse]' />
          <div className='absolute inset-14 rounded-full border border-[#f835a7]/25' />
          <div className='w-full h-[1px] bg-gradient-to-r from-transparent via-sky-400/25 to-transparent' />
          <div className='h-full w-[1px] bg-gradient-to-b from-transparent via-[#f835a7]/25 to-transparent absolute' />
          <div className='absolute -top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_14px_#1e7cee]' />
          <div className='absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#f835a7] shadow-[0_0_14px_#f835a7]' />
        </div>

        {/* Mid-Left Floating Isometric Wireframe Hexagon */}
        <div className='hidden xl:block absolute top-[44%] left-[1.5%] float-2 opacity-55'>
          <svg width='88' height='88' viewBox='0 0 88 88' fill='none'>
            <polygon
              points='44,6 78,25 78,63 44,82 10,63 10,25'
              stroke='#38bdf8'
              strokeWidth='1.2'
              strokeOpacity='0.55'
            />
            <polygon
              points='44,18 68,31 68,57 44,70 20,57 20,31'
              stroke='#f835a7'
              strokeWidth='1'
              strokeDasharray='3 3'
              strokeOpacity='0.5'
            />
            <line x1='44' y1='6' x2='44' y2='44' stroke='#38bdf8' strokeOpacity='0.35' />
            <line x1='78' y1='63' x2='44' y2='44' stroke='#38bdf8' strokeOpacity='0.35' />
            <line x1='10' y1='63' x2='44' y2='44' stroke='#38bdf8' strokeOpacity='0.35' />
            <circle cx='44' cy='44' r='3' fill='#38bdf8' />
          </svg>
        </div>

        {/* Mid-Right Floating Isometric Wireframe Cube */}
        <div className='hidden xl:block absolute top-[54%] right-[1.5%] float-4 opacity-55'>
          <svg width='84' height='84' viewBox='0 0 84 84' fill='none'>
            <polygon
              points='42,8 74,26 74,60 42,78 10,60 10,26'
              stroke='#f835a7'
              strokeWidth='1.2'
              strokeOpacity='0.55'
            />
            <polyline points='10,26 42,44 74,26' stroke='#38bdf8' strokeWidth='1.1' strokeOpacity='0.45' />
            <line x1='42' y1='44' x2='42' y2='78' stroke='#38bdf8' strokeWidth='1.1' strokeOpacity='0.45' />
            <circle cx='42' cy='44' r='3' fill='#f835a7' />
          </svg>
        </div>

        {/* Bottom-Right Orbital Ring (Visible in Light & Dark Mode) */}
        <div className='hidden lg:flex absolute -bottom-24 right-[18%] w-72 h-72 rounded-full border border-primary/20 items-center justify-center animate-[spin_50s_linear_infinite_reverse]'>
          <div className='w-52 h-52 rounded-full border border-dashed border-[#f835a7]/25' />
          <div className='absolute -top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-primary/80' />
        </div>
      </div>

      <div className='relative z-10 max-w-[1440px] w-full flex flex-col items-center'>
        {/* Top Intro Header */}
        <div className='flex flex-col items-center w-full md:max-w-[920px]'>
          <PortfolioCard
            preHeading='Meet Sunday Solomon'
            headingText='introduction'
            subheadingText='The Person Behind the Code'
          />
          <p className='w-[96%] md:w-full text-center text-base sm:text-lg text-gray-200 leading-relaxed'>
            I&apos;m Sunday Solomon, a Software Engineer and student at the National Institute for Information Technology (NIIT) with over five years of experience designing and building modern digital products. My journey has taken me across both Web2 and Web3, where I&apos;ve developed everything from responsive business websites and e-commerce platforms to decentralized applications and blockchain solutions.
          </p>
        </div>

        {/* Main Original Asymmetric Layout with Current Card Design */}
        <div className='w-full flex flex-col md:flex-row justify-between py-14 md:py-20 gap-5 lg:gap-10 items-start'>
          {/* Left Column (30% on lg) */}
          <div className='md:w-[48%] lg:w-3/10 flex flex-col gap-6 lg:gap-7'>
            {/* Top-Left White/Surface Card (Kept on the card as requested) */}
            <div
              className={`group relative overflow-hidden lg:h-[440px] flex flex-col justify-between space-y-4 bg-card/95 backdrop-blur-md border border-border hover:border-primary/45 rounded-3xl p-6 xl:p-7 shadow-xl transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Interior Card Dot-Matrix Texture */}
              <div
                aria-hidden='true'
                className='pointer-events-none absolute inset-0 opacity-[0.09] dark:opacity-[0.14] bg-[radial-gradient(#014ba7_1.2px,transparent_1.2px)] [background-size:18px_18px]'
                style={{
                  maskImage: 'radial-gradient(circle at 85% 20%, black 20%, transparent 75%)',
                  WebkitMaskImage: 'radial-gradient(circle at 85% 20%, black 20%, transparent 75%)',
                }}
              />

              {/* Multi-ring counter-rotating orbital graphic in top-right corner */}
              <div
                aria-hidden='true'
                className='pointer-events-none absolute -top-16 -right-16 w-52 h-52 rounded-full border border-primary/25 flex items-center justify-center animate-[spin_36s_linear_infinite] group-hover:border-primary/45 transition-colors duration-500'
              >
                <div className='w-36 h-36 rounded-full border border-dashed border-[#f835a7]/35 animate-[spin_22s_linear_infinite_reverse]' />
                <div className='w-20 h-20 rounded-full border border-primary/20' />
                <div className='absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#014ba7]' />
                <div className='absolute bottom-3 right-5 w-1.5 h-1.5 rounded-full bg-[#f835a7]' />
              </div>

              {/* Subtle bottom telemetry wave inside top-left card */}
              <svg
                aria-hidden='true'
                className='pointer-events-none absolute bottom-0 left-0 w-full h-24 opacity-20 dark:opacity-30'
                viewBox='0 0 400 90'
                fill='none'
                preserveAspectRatio='none'
              >
                <path
                  d='M0 65 C 90 20, 160 85, 260 40 C 320 15, 360 55, 400 30'
                  stroke='#014ba7'
                  strokeWidth='1.5'
                  strokeDasharray='4 4'
                />
                <path
                  d='M0 78 C 110 45, 200 85, 310 50 C 355 35, 380 60, 400 48'
                  stroke='#f835a7'
                  strokeWidth='1.2'
                />
              </svg>

              <span className='relative z-10 inline-flex items-center gap-2 w-fit text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1.5 rounded-full'>
                <span className='w-1.5 h-1.5 rounded-full bg-primary animate-ping' />
                <span className='w-1.5 h-1.5 rounded-full bg-primary -ml-3.5' />
                Product Mindset
              </span>
              <h2 className='relative z-10 text-3xl sm:text-4xl xl:text-[44px] font-bold text-foreground font-[family-name:var(--font-poppins)] leading-[1.12]'>
                Building Digital <span className='text-[#f835a7]'>Products</span> that{' '}
                <span className='text-primary'>Scale</span>.
              </h2>
              <p className='relative z-10 text-sm sm:text-base text-muted-foreground leading-relaxed'>
                Regardless of the technology, my focus has always remained creating products that are intuitive, scalable, and built with long-term maintainability in mind.
              </p>
            </div>

            {/* Desktop/Tablet Wide Product Builder Callout Card (Stretches under Middle Column on lg+) */}
            <div
              style={{ transitionDelay: '180ms' }}
              className={`group hidden md:flex overflow-hidden lg:h-[230px] bg-gradient-to-br from-primary/15 via-card to-card border border-primary/25 hover:border-primary/45 rounded-3xl p-6 xl:p-7 shadow-xl flex-col justify-between gap-4 lg:w-[216%] xl:w-[228%] relative z-10 transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Animated SVG Topographic Waves & Circuit Trace on the right side of the wide card */}
              <svg
                aria-hidden='true'
                className='pointer-events-none absolute right-0 top-0 h-full w-2/3 opacity-35 dark:opacity-45'
                viewBox='0 0 500 230'
                fill='none'
                preserveAspectRatio='xMaxYMid slice'
              >
                <circle cx='430' cy='115' r='150' stroke='#014ba7' strokeOpacity='0.22' strokeWidth='1' strokeDasharray='5 5' />
                <circle cx='430' cy='115' r='110' stroke='#f835a7' strokeOpacity='0.25' strokeWidth='1' />
                <circle cx='430' cy='115' r='70' stroke='#014ba7' strokeOpacity='0.3' strokeWidth='1' strokeDasharray='3 4' />
                <path
                  d='M 120 195 C 230 195, 270 65, 390 65 L 500 65'
                  stroke='url(#intro-beam-primary)'
                  strokeWidth='2'
                  className='animate-beam-flow-fast'
                />
                <circle cx='390' cy='65' r='3.5' fill='#014ba7' />
                <circle cx='390' cy='65' r='9' stroke='#014ba7' strokeWidth='1.2' className='animate-sonar-ping' />
              </svg>

              {/* Counter-rotating geometric ring on bottom-right corner */}
              <div
                aria-hidden='true'
                className='pointer-events-none absolute -right-10 -bottom-14 w-56 h-56 rounded-full border border-primary/20 flex items-center justify-center transition-transform duration-700 group-hover:scale-110'
              >
                <div className='w-40 h-40 rounded-full border border-dashed border-[#f835a7]/30 animate-[spin_35s_linear_infinite]' />
                <div className='w-24 h-24 rounded-full bg-primary/10 blur-xl' />
              </div>

              <div className='relative z-10 w-[95%] md:w-[88%] space-y-2'>
                <h3 className='text-lg xl:text-xl font-semibold text-foreground'>
                  More Than Just Delivering Features
                </h3>
                <p className='text-sm xl:text-base text-muted-foreground leading-relaxed'>
                  Beyond writing code, I think like a product builder. I care deeply about user experience, performance, accessibility, and creating solutions that solve real business problems rather than simply delivering features.
                </p>
              </div>
              <div className='relative z-10 flex flex-wrap items-center gap-3'>
                <Link
                  href='https://wa.me/+2348101123098'
                  target='_blank'
                  className='group/btn inline-flex gap-x-3 items-center text-primary-foreground text-sm xl:text-base font-medium py-2.5 px-6 rounded-full cursor-pointer bg-primary hover:bg-primary/90 transition-all shadow-md'
                >
                  Let&apos;s Build Together
                  <FaArrowRight className='transition-transform duration-300 group-hover/btn:translate-x-1.5' />
                </Link>
                <Link
                  href='/about-me'
                  className='inline-flex items-center gap-x-2 text-sm font-medium text-foreground hover:text-primary py-2.5 px-4 transition-colors'
                >
                  More About Me →
                </Link>
              </div>
            </div>
          </div>

          {/* Right 2-Column Group (70% on lg) */}
          <div className='w-full md:w-[48%] lg:w-[70%] flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-10 items-start'>
            {/* Middle Column — Shorter Card sitting directly above the wide callout banner on lg+ */}
            <div
              style={{ transitionDelay: '100ms' }}
              className={`relative w-full lg:w-[48%] h-[430px] md:h-[400px] lg:h-[440px] group bg-card/95 backdrop-blur-md border border-border rounded-3xl p-6 shadow-xl hover:shadow-2xl hover:border-primary/45 transition-all duration-700 flex flex-col justify-between overflow-hidden ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Subtle engineering grid header pattern inside Middle Card */}
              <div
                aria-hidden='true'
                className='pointer-events-none absolute top-0 inset-x-0 h-36 opacity-[0.08] dark:opacity-[0.14] bg-[linear-gradient(to_right,#014ba7_1px,transparent_1px),linear-gradient(to_bottom,#014ba7_1px,transparent_1px)] bg-[size:20px_20px]'
                style={{
                  maskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)',
                }}
              />
              <div
                aria-hidden='true'
                className='pointer-events-none absolute -top-12 right-8 w-28 h-28 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/20 transition-colors'
              />

              <div className='relative z-10 space-y-3'>
                <div className='flex items-center justify-between'>
                  <span className='inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-primary'>
                    <span className='w-1.5 h-1.5 rounded-full bg-primary animate-pulse' />
                    Custom Engineering
                  </span>
                  <Link
                    href='https://www.proconomic.com/value-tracker'
                    target='_blank'
                    className='inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors'
                  >
                    Live Preview <FaArrowUpRightFromSquare className='w-3 h-3' />
                  </Link>
                </div>
                <p className='text-sm sm:text-base text-muted-foreground leading-relaxed'>
                  I enjoy transforming complex ideas into clean user experiences through modern technologies like{' '}
                  <span className='text-primary font-semibold'>
                    <Link href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target='_blank' className='hover:underline'>JavaScript</Link>,{' '}
                    <Link href='https://www.typescriptlang.org/' target='_blank' className='hover:underline'>TypeScript</Link>,{' '}
                    <Link href='https://react.dev/' target='_blank' className='hover:underline'>React</Link>,{' '}
                    <Link href='https://nextjs.org/' target='_blank' className='hover:underline'>Next.js</Link>,{' '}
                    <Link href='https://tailwindcss.com/' target='_blank' className='hover:underline'>Tailwind CSS</Link>, &{' '}
                    <Link href='https://www.soliditylang.org/' target='_blank' className='hover:underline'>Solidity</Link>.
                  </span>
                </p>
              </div>

              <Link
                href='https://www.proconomic.com/value-tracker'
                target='_blank'
                className='relative z-10 mt-4 block rounded-2xl overflow-hidden bg-muted/50 border border-border/60 flex-1 min-h-0'
              >
                <Image
                  src='/homepage/acedboard-value-tracker-section-mockup.png'
                  alt='Proconomic Value Tracker mockup'
                  width={1000}
                  height={800}
                  className='w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105'
                />
              </Link>
            </div>

            {/* Far-Right Column — Compact CMS Card on top + Tall Showcase Card reaching the exact bottom of the wide banner */}
            <div className='w-full lg:w-[48%] flex flex-col gap-6 lg:gap-7 relative'>
              <div
                style={{ transitionDelay: '200ms' }}
                className={`group relative overflow-hidden lg:h-[160px] p-6 bg-card/95 backdrop-blur-md border border-border hover:border-[#f835a7]/45 rounded-3xl shadow-xl flex flex-col justify-center transition-all duration-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Dual Counter-Rotating Rings inside CMS Card */}
                <div
                  aria-hidden='true'
                  className='pointer-events-none absolute -top-12 -right-12 w-36 h-36 rounded-full border border-[#f835a7]/25 flex items-center justify-center animate-[spin_32s_linear_infinite]'
                >
                  <div className='w-24 h-24 rounded-full border border-dashed border-primary/25 animate-[spin_20s_linear_infinite_reverse]' />
                  <div className='absolute bottom-1 left-4 w-1.5 h-1.5 rounded-full bg-[#f835a7]' />
                </div>

                <span className='relative z-10 inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#f835a7] mb-2'>
                  <span className='w-1.5 h-1.5 rounded-full bg-[#f835a7] animate-pulse' />
                  Design & CMS Platforms
                </span>
                <p className='relative z-10 text-sm sm:text-base text-muted-foreground leading-relaxed'>
                  And a variety of no-code & <span className='text-primary font-medium'>CMS platforms</span> including{' '}
                  <span className='text-primary font-semibold'>
                    <Link href='https://wordpress.com/' target='_blank' className='hover:underline'>WordPress</Link>,{' '}
                    <Link href='https://elementor.com/' target='_blank' className='hover:underline'>Elementor</Link>,{' '}
                    <Link href='https://www.elegantthemes.com/gallery/divi/' target='_blank' className='hover:underline'>Divi</Link>, and{' '}
                    <Link href='https://www.figma.com/' target='_blank' className='hover:underline'>Figma</Link>.
                  </span>
                </p>
              </div>

              <div
                style={{ transitionDelay: '280ms' }}
                className={`w-full lg:h-[510px] bg-card/95 backdrop-blur-md border border-border hover:border-primary/40 rounded-3xl p-4 lg:p-5 shadow-xl flex flex-col justify-between gap-4 overflow-hidden transition-all duration-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Audiocreeb Desktop + Mobile Layer */}
                <div className='group relative h-48 sm:h-52 lg:h-[222px] rounded-2xl overflow-hidden border border-border/60 bg-muted/40 p-2'>
                  <Link href='https://audiocreeb.com/about-us/' target='_blank' className='block w-full h-full overflow-hidden rounded-xl'>
                    <Image
                      src='/homepage/audiocreeb-about-page-desktop.jpeg'
                      alt='Audiocreeb desktop showcase'
                      width={900}
                      height={500}
                      className='w-full h-full object-cover object-top rounded-xl transition-transform duration-700 group-hover:scale-105'
                    />
                  </Link>
                  <Link
                    href='https://audiocreeb.com/'
                    target='_blank'
                    className='absolute bottom-3 right-3 w-20 sm:w-24 rounded-lg overflow-hidden border-2 border-white shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105'
                  >
                    <Image
                      src='/homepage/audiocreeb-home-page-mobile.jpeg'
                      alt='Audiocreeb mobile view'
                      width={160}
                      height={320}
                      className='w-full h-28 object-cover object-top'
                    />
                  </Link>
                  <span className='absolute top-4 left-4 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-sm text-white text-xs font-medium'>
                    Audiocreeb
                  </span>
                </div>

                {/* Schick Collections Layer */}
                <div className='group relative h-48 sm:h-52 lg:h-[222px] rounded-2xl overflow-hidden border border-border/60 bg-muted/40 p-2'>
                  <Link href='https://www.schickcollections.com/' target='_blank' className='block w-full h-full overflow-hidden rounded-xl'>
                    <Image
                      src='/homepage/schickcollection-homepage.png'
                      alt='Schick Collections e-commerce showcase'
                      width={900}
                      height={500}
                      className='w-full h-full object-cover object-top rounded-xl transition-transform duration-700 group-hover:scale-105'
                    />
                  </Link>
                  <Link
                    href='https://www.schickcollections.com/'
                    target='_blank'
                    className='absolute bottom-3 right-3 w-20 sm:w-24 rounded-lg overflow-hidden border-2 border-white shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105'
                  >
                    <Image
                      src='/homepage/schickcollection-homepage.png'
                      alt='Schick Collections mobile preview'
                      width={160}
                      height={320}
                      className='w-full h-28 object-cover object-top'
                    />
                  </Link>
                  <span className='absolute top-4 left-4 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-sm text-white text-xs font-medium'>
                    Schick Collections
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile-only Product Builder Callout Card at bottom */}
            <div className='flex md:hidden bg-gradient-to-br from-primary/15 via-card to-card border border-primary/25 rounded-3xl p-7 shadow-xl flex-col justify-between gap-6'>
              <div className='space-y-3'>
                <h3 className='text-xl font-semibold text-foreground'>
                  More Than Just Delivering Features
                </h3>
                <p className='text-base text-muted-foreground leading-relaxed'>
                  Beyond writing code, I think like a product builder. I care deeply about user experience, performance, accessibility, and creating solutions that solve real business problems rather than simply delivering features.
                </p>
              </div>
              <div className='flex flex-wrap items-center gap-3'>
                <Link
                  href='https://wa.me/+2348101123098'
                  target='_blank'
                  className='group inline-flex gap-x-3 items-center text-primary-foreground text-base font-medium py-3 px-6 rounded-full cursor-pointer bg-primary hover:bg-primary/90 transition-all shadow-md'
                >
                  Let&apos;s Build Together
                  <FaArrowRight className='transition-transform duration-300 group-hover:translate-x-1.5' />
                </Link>
                <Link
                  href='/about-me'
                  className='inline-flex items-center gap-x-2 text-sm font-medium text-foreground hover:text-primary py-3 px-4 transition-colors'
                >
                  More About Me →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Introduction
