import ContactSection from "@/components/pages/home/sections/ContactSection"
import { PortfolioCard } from "@/components/pages/home/utils"
import { socialIcons } from "@/lib/data/links"
import NomolosPortrait from "@/public/Nomolos.png"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from "react-icons/fa6"

const ContactsPage = () => {
  return (
    <div className='min-h-screen bg-background overflow-hidden'>
      <section className='relative flex justify-center w-full pt-28 pb-24 lg:pb-36 px-4 md:px-8 lg:px-10 overflow-hidden bg-gradient-to-b from-[30%] from-gray-900 via-[#080d1a] to-black'>
        {/* Ambient Glow */}
        <div className='pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[130px]' />

        {/* ── Center content ── */}
        <div className='flex flex-col items-center w-full max-w-[1360px] text-center gap-y-6 z-[2]'>
          <PortfolioCard
            subheadingText='Sunday Solomon'
            headingText="Let's connect"
            preHeading='2026'
          />

          <div className='w-full lg:min-h-[460px] flex flex-col justify-between items-center pt-6'>
            <div className='flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 w-full'>
              {/* Left CTA Headline */}
              <div className='max-w-[440px] text-center lg:text-left space-y-6'>
                <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight font-[family-name:var(--font-poppins)]'>
                  Ready to bring your vision to life?
                </h1>
                <p className='text-gray-300 text-base sm:text-lg leading-relaxed'>
                  Whether you have a full product specification or just an early idea, let&apos;s turn it into a fast, scalable digital experience.
                </p>
                <div className='flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2'>
                  <Link
                    href='https://wa.me/+2348101123098'
                    target='_blank'
                    className='group inline-flex gap-x-3 items-center text-white text-base sm:text-lg py-3.5 px-7 border-2 rounded-full border-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer'
                  >
                    Chat on WhatsApp
                    <FaArrowRight className='transition-transform duration-300 group-hover:translate-x-1.5' />
                  </Link>
                  <Link
                    href='#contact'
                    className='inline-flex items-center text-gray-300 hover:text-white text-sm sm:text-base py-3.5 px-6 rounded-full bg-white/10 hover:bg-white/20 transition-all'
                  >
                    Fill Project Brief ↓
                  </Link>
                </div>
              </div>

              {/* Right Socials + Quick Response Card */}
              <div className='flex flex-col items-center lg:items-end gap-6 w-full max-w-[380px]'>
                <div className='w-full text-center lg:text-left'>
                  <p className='uppercase text-xs tracking-widest text-gray-400'>
                    Find me on:
                  </p>
                  <div className='flex items-center justify-center lg:justify-start gap-3 w-full mt-4'>
                    {socialIcons.map((icon, index) => (
                      <Link
                        key={index}
                        href={icon.link}
                        target={icon.link.startsWith('http') ? '_blank' : undefined}
                        rel={icon.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        aria-label={icon.name}
                      >
                        <div className='h-[46px] w-[46px] text-white border border-white/70 bg-black/60 cursor-pointer flex items-center justify-center text-lg rounded-full hover:scale-110 hover:bg-primary hover:border-primary transition-all'>
                          {icon.icon}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className='w-full bg-primary/90 backdrop-blur-md border border-white/20 rounded-3xl p-6 text-white text-left shadow-2xl'>
                  <h2 className='text-xl font-semibold mb-4'>Quick Response Guarantee</h2>
                  <div className='space-y-3'>
                    <div className='flex items-center gap-3'>
                      <span className='w-2.5 h-2.5 bg-emerald-400 rounded-full shrink-0 animate-pulse' />
                      <span className='text-white/90 text-sm'>
                        Usually respond within 2–4 hours
                      </span>
                    </div>
                    <div className='flex items-center gap-3'>
                      <span className='w-2.5 h-2.5 bg-amber-300 rounded-full shrink-0' />
                      <span className='text-white/90 text-sm'>
                        Free consultation call within 48 hours
                      </span>
                    </div>
                    <div className='flex items-center gap-3'>
                      <span className='w-2.5 h-2.5 bg-sky-300 rounded-full shrink-0' />
                      <span className='text-white/90 text-sm'>
                        Detailed scope & proposal within 3–5 days
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Image
            src={NomolosPortrait}
            alt='Sunday Solomon portrait'
            width={1100}
            height={550}
            className='hidden lg:block absolute bottom-0 z-[-1] pointer-events-none select-none opacity-90'
          />
        </div>
      </section>

      {/* Full Interactive Contact Form & Direct Channels */}
      <ContactSection />
    </div>
  )
}

export default ContactsPage
