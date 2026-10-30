"use client"

import React from 'react'
import { PortfolioCard } from '../utils'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight, FaArrowUpRightFromSquare } from 'react-icons/fa6'

const Introduction = () => {
  return (
    <section
      id='about'
      className='w-full flex justify-center py-16 md:py-24 bg-gradient-to-b from-black via-gray-800/90 to-background px-5 md:px-8 lg:px-10 xl:px-14'
    >
      <div className='max-w-[1440px] w-full flex flex-col items-center'>
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
            <div className='lg:h-[440px] flex flex-col justify-between space-y-4 bg-card/90 backdrop-blur-md border border-border rounded-3xl p-6 xl:p-7 shadow-xl'>
              <span className='inline-block w-fit text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1.5 rounded-full'>
                Product Mindset
              </span>
              <h2 className='text-3xl sm:text-4xl xl:text-[44px] font-bold text-foreground font-[family-name:var(--font-poppins)] leading-[1.12]'>
                Building Digital <span className='text-[#f835a7]'>Products</span> that{' '}
                <span className='text-primary'>Scale</span>.
              </h2>
              <p className='text-sm sm:text-base text-muted-foreground leading-relaxed'>
                Regardless of the technology, my focus has always remained creating products that are intuitive, scalable, and built with long-term maintainability in mind.
              </p>
            </div>

            {/* Desktop/Tablet Wide Product Builder Callout Card (Stretches under Middle Column on lg+) */}
            <div className='hidden md:flex lg:h-[230px] bg-gradient-to-br from-primary/15 via-card to-card border border-primary/25 rounded-3xl p-6 xl:p-7 shadow-xl flex-col justify-between gap-4 lg:w-[216%] xl:w-[228%] relative z-10'>
              <div className='w-[95%] md:w-[88%] space-y-2'>
                <h3 className='text-lg xl:text-xl font-semibold text-foreground'>
                  More Than Just Delivering Features
                </h3>
                <p className='text-sm xl:text-base text-muted-foreground leading-relaxed'>
                  Beyond writing code, I think like a product builder. I care deeply about user experience, performance, accessibility, and creating solutions that solve real business problems rather than simply delivering features.
                </p>
              </div>
              <div className='flex flex-wrap items-center gap-3'>
                <Link
                  href='https://wa.me/+2348101123098'
                  target='_blank'
                  className='group inline-flex gap-x-3 items-center text-primary-foreground text-sm xl:text-base font-medium py-2.5 px-6 rounded-full cursor-pointer bg-primary hover:bg-primary/90 transition-all shadow-md'
                >
                  Let&apos;s Build Together
                  <FaArrowRight className='transition-transform duration-300 group-hover:translate-x-1.5' />
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
            <div className='w-full lg:w-[48%] h-[430px] md:h-[400px] lg:h-[440px] group bg-card border border-border rounded-3xl p-6 shadow-xl hover:shadow-2xl hover:border-primary/40 transition-all duration-500 flex flex-col justify-between overflow-hidden'>
              <div className='space-y-3'>
                <div className='flex items-center justify-between'>
                  <span className='text-xs uppercase tracking-wider font-semibold text-primary'>
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
                className='relative mt-4 block rounded-2xl overflow-hidden bg-muted/50 border border-border/60 flex-1 min-h-0'
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
              <div className='lg:h-[160px] p-6 bg-card border border-border rounded-3xl shadow-xl flex flex-col justify-center'>
                <span className='text-xs uppercase tracking-wider font-semibold text-[#f835a7] block mb-2'>
                  Design & CMS Platforms
                </span>
                <p className='text-sm sm:text-base text-muted-foreground leading-relaxed'>
                  And a variety of no-code & <span className='text-primary font-medium'>CMS platforms</span> including{' '}
                  <span className='text-primary font-semibold'>
                    <Link href='https://wordpress.com/' target='_blank' className='hover:underline'>WordPress</Link>,{' '}
                    <Link href='https://elementor.com/' target='_blank' className='hover:underline'>Elementor</Link>,{' '}
                    <Link href='https://www.elegantthemes.com/gallery/divi/' target='_blank' className='hover:underline'>Divi</Link>, and{' '}
                    <Link href='https://www.figma.com/' target='_blank' className='hover:underline'>Figma</Link>.
                  </span>
                </p>
              </div>

              <div className='w-full lg:h-[510px] bg-card border border-border rounded-3xl p-4 lg:p-5 shadow-xl flex flex-col justify-between gap-4 overflow-hidden'>
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
