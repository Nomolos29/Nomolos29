"use client"

import React, { useId } from 'react'

interface ArchitecturalBackdropProps {
  /**
   * 'hero' — Rich, multi-layered architectural backdrop for page hero headers
   * 'subtle' — Refined, lower-density backdrop for dark sections (e.g. FAQ, Footer, 404)
   */
  variant?: 'hero' | 'subtle'
}

const ArchitecturalBackdrop: React.FC<ArchitecturalBackdropProps> = ({
  variant = 'hero',
}) => {
  const uid = useId().replace(/:/g, '')
  const primaryGradId = `beam-primary-${uid}`
  const accentGradId = `beam-accent-${uid}`
  const verticalGradId = `beam-vert-${uid}`

  const isHero = variant === 'hero'

  return (
    <div className='pointer-events-none absolute inset-0 overflow-hidden' aria-hidden='true'>
      {/* Layer 1: Panning Dual-Scale Engineering Blueprint Grid */}
      <div
        className={`absolute inset-0 animate-grid-pan bg-[linear-gradient(to_right,rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.18)_1px,transparent_1px)] bg-[size:56px_56px] ${
          isHero ? 'opacity-45' : 'opacity-25'
        }`}
        style={{
          maskImage: 'radial-gradient(ellipse 90% 80% at 50% 45%, black 35%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 90% 80% at 50% 45%, black 35%, transparent 100%)',
        }}
      />

      {/* Fine secondary dot-matrix overlay */}
      <div
        className={`absolute inset-0 bg-[radial-gradient(rgba(56,189,248,0.32)_1px,transparent_1px)] [background-size:28px_28px] ${
          isHero ? 'opacity-30' : 'opacity-15'
        }`}
        style={{
          maskImage: 'radial-gradient(ellipse 75% 70% at 50% 45%, black 20%, transparent 95%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 75% 70% at 50% 45%, black 20%, transparent 95%)',
        }}
      />

      {/* Layer 2: Drifting Ambient Aurora Glow Fields */}
      <div
        className={`
          absolute -top-24 left-[6%] rounded-full bg-primary/25 blur-[125px] animate-orbit-slow
          ${isHero ? 'w-[440px] h-[440px]' : 'w-[340px] h-[340px] opacity-60'}
        `}
      />
      <div
        className={`
          absolute top-[18%] right-[5%] rounded-full bg-[#f835a7]/20 blur-[130px] animate-orbit-reverse
          ${isHero ? 'w-[400px] h-[400px]' : 'w-[300px] h-[300px] opacity-55'}
        `}
      />
      {isHero && (
        <div className='
          absolute bottom-0 left-[32%] w-[460px] h-[300px] rounded-full
          bg-sky-500/15 blur-[135px] animate-pulse-glow
        ' />
      )}

      {/* Layer 3: Full-Canvas Architectural SVG Schematic, Animated Data-Flow Ribbons & Sonar Nodes */}
      <svg
        className={`absolute inset-0 w-full h-full ${isHero ? 'opacity-75' : 'opacity-45'}`}
        viewBox='0 0 1440 800'
        fill='none'
        preserveAspectRatio='xMidYMid slice'
      >
        <defs>
          <linearGradient id={primaryGradId} x1='0%' y1='0%' x2='100%' y2='0%'>
            <stop offset='0%' stopColor='#014ba7' stopOpacity='0' />
            <stop offset='50%' stopColor='#38bdf8' stopOpacity='1' />
            <stop offset='100%' stopColor='#f835a7' stopOpacity='0' />
          </linearGradient>
          <linearGradient id={accentGradId} x1='100%' y1='0%' x2='0%' y2='100%'>
            <stop offset='0%' stopColor='#f835a7' stopOpacity='0' />
            <stop offset='50%' stopColor='#f835a7' stopOpacity='0.95' />
            <stop offset='100%' stopColor='#38bdf8' stopOpacity='0' />
          </linearGradient>
          <linearGradient id={verticalGradId} x1='0%' y1='0%' x2='0%' y2='100%'>
            <stop offset='0%' stopColor='#38bdf8' stopOpacity='0' />
            <stop offset='50%' stopColor='#38bdf8' stopOpacity='0.85' />
            <stop offset='100%' stopColor='#f835a7' stopOpacity='0' />
          </linearGradient>
        </defs>

        {/* Static architectural blueprint curves & orthogonal circuit traces */}
        <path
          d='M-100 180 C 280 180, 420 420, 760 420 C 1080 420, 1200 200, 1540 200'
          stroke='rgba(56,189,248,0.18)'
          strokeWidth='1'
          strokeDasharray='5 7'
        />
        <path
          d='M-60 620 C 360 620, 520 320, 960 320 C 1200 320, 1320 560, 1540 560'
          stroke='rgba(248,53,167,0.18)'
          strokeWidth='1'
          strokeDasharray='4 6'
        />

        {isHero && (
          <>
            <path
              d='M-80 700 L 340 700 L 420 630 L 980 630 L 1060 700 L 1520 700'
              stroke='rgba(1,75,167,0.22)'
              strokeWidth='1.2'
              strokeDasharray='6 6'
            />
            <path
              d='M 170 -40 L 170 210 L 240 280 L 240 840'
              stroke='rgba(56,189,248,0.14)'
              strokeWidth='1'
            />
            <path
              d='M 1270 -40 L 1270 230 L 1200 300 L 1200 840'
              stroke='rgba(248,53,167,0.14)'
              strokeWidth='1'
            />
          </>
        )}

        {/* Animated Travelling Light Beams */}
        <path
          d='M-100 180 C 280 180, 420 420, 760 420 C 1080 420, 1200 200, 1540 200'
          stroke={`url(#${primaryGradId})`}
          strokeWidth='2.2'
          strokeLinecap='round'
          className='animate-beam-flow'
        />
        <path
          d='M-60 620 C 360 620, 520 320, 960 320 C 1200 320, 1320 560, 1540 560'
          stroke={`url(#${accentGradId})`}
          strokeWidth='2.2'
          strokeLinecap='round'
          className='animate-beam-flow-delayed'
        />

        {isHero && (
          <>
            <path
              d='M-80 700 L 340 700 L 420 630 L 980 630 L 1060 700 L 1520 700'
              stroke={`url(#${primaryGradId})`}
              strokeWidth='2'
              strokeLinecap='round'
              className='animate-beam-flow-fast'
            />
            <path
              d='M 170 -40 L 170 210 L 240 280 L 240 840'
              stroke={`url(#${verticalGradId})`}
              strokeWidth='2'
              strokeLinecap='round'
              className='animate-beam-flow-delayed'
            />
            <path
              d='M 1270 -40 L 1270 230 L 1200 300 L 1200 840'
              stroke={`url(#${verticalGradId})`}
              strokeWidth='2'
              strokeLinecap='round'
              className='animate-beam-flow-fast'
            />
          </>
        )}

        {/* Sonar-Pulsing Coordinate Nodes */}
        <g>
          <circle cx='310' cy='250' r='3.5' fill='#38bdf8' />
          <circle
            cx='310'
            cy='250'
            r='9'
            stroke='#38bdf8'
            strokeWidth='1.4'
            className='animate-sonar-ping'
          />

          <circle cx='760' cy='420' r='3.5' fill='#f835a7' />
          <circle
            cx='760'
            cy='420'
            r='9'
            stroke='#f835a7'
            strokeWidth='1.4'
            className='animate-sonar-ping-delayed'
          />

          <circle cx='1140' cy='380' r='3.5' fill='#38bdf8' />
          <circle
            cx='1140'
            cy='380'
            r='9'
            stroke='#38bdf8'
            strokeWidth='1.4'
            className='animate-sonar-ping'
          />
        </g>

        {/* Precision Blueprint Crosshairs (+) */}
        <g stroke='rgba(148,163,184,0.35)' strokeWidth='1.2'>
          <path d='M95 110 H109 M102 103 V117' />
          <path d='M1335 110 H1349 M1342 103 V117' />
          <path d='M95 680 H109 M102 673 V687' />
          <path d='M1335 680 H1349 M1342 673 V687' />
        </g>
      </svg>

      {/* Layer 4: Counter-Rotating Orbital Gyroscopes & Floating Isometric Wireframes */}
      {isHero ? (
        <>
          {/* Upper-Left Counter-Rotating Gyroscope */}
          <div className='hidden md:flex absolute top-10 left-[3%] w-60 h-60 rounded-full border border-sky-400/20 items-center justify-center animate-[spin_45s_linear_infinite]'>
            <div className='w-44 h-44 rounded-full border border-dashed border-white/15 animate-[spin_28s_linear_infinite_reverse]' />
            <div className='w-28 h-28 rounded-full border border-[#f835a7]/20' />
            <div className='absolute -top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-sky-400 shadow-[0_0_14px_#38bdf8]' />
            <div className='absolute top-1/2 -right-1.5 -translate-y-1/2 w-2 h-2 rounded-full bg-[#f835a7] shadow-[0_0_12px_#f835a7]' />
          </div>

          {/* Upper-Right Architectural Radar Compass */}
          <div className='hidden md:flex absolute top-12 right-[3%] w-72 h-72 rounded-full border border-white/15 items-center justify-center animate-[spin_55s_linear_infinite]'>
            <div className='absolute inset-6 rounded-full border border-dashed border-primary/35 animate-[spin_32s_linear_infinite_reverse]' />
            <div className='absolute inset-14 rounded-full border border-[#f835a7]/25' />
            <div className='w-full h-[1px] bg-gradient-to-r from-transparent via-sky-400/25 to-transparent' />
            <div className='h-full w-[1px] bg-gradient-to-b from-transparent via-[#f835a7]/25 to-transparent absolute' />
            <div className='absolute -top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_14px_#1e7cee]' />
            <div className='absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#f835a7] shadow-[0_0_14px_#f835a7]' />
          </div>

          {/* Floating Isometric Wireframe Hexagon (Left) */}
          <div className='hidden xl:block absolute bottom-14 left-[2.5%] float-2 opacity-50'>
            <svg width='76' height='76' viewBox='0 0 88 88' fill='none'>
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

          {/* Floating Isometric Wireframe Cube (Right) */}
          <div className='hidden xl:block absolute bottom-16 right-[2.5%] float-4 opacity-50'>
            <svg width='74' height='74' viewBox='0 0 84 84' fill='none'>
              <polygon
                points='42,8 74,26 74,60 42,78 10,60 10,26'
                stroke='#f835a7'
                strokeWidth='1.2'
                strokeOpacity='0.55'
              />
              <polyline
                points='10,26 42,44 74,26'
                stroke='#38bdf8'
                strokeWidth='1.1'
                strokeOpacity='0.45'
              />
              <line x1='42' y1='44' x2='42' y2='78' stroke='#38bdf8' strokeWidth='1.1' strokeOpacity='0.45' />
              <circle cx='42' cy='44' r='3' fill='#f835a7' />
            </svg>
          </div>
        </>
      ) : (
        /* Subtle Dark Variant: Single refined corner orbital compass */
        <div className='hidden lg:flex absolute -top-16 right-[4%] w-64 h-64 rounded-full border border-white/[0.08] items-center justify-center animate-[spin_60s_linear_infinite] opacity-60'>
          <div className='w-44 h-44 rounded-full border border-dashed border-primary/25 animate-[spin_38s_linear_infinite_reverse]' />
          <div className='absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary/70' />
          <div className='absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#f835a7]/70' />
        </div>
      )}
    </div>
  )
}

export default ArchitecturalBackdrop

