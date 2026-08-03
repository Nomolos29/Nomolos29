// import ContactSection from "@/components/pages/home/sections/ContactSection"
import { PortfolioCard } from "@/components/pages/home/utils"
import { socialIcons } from "@/lib/links"
import NomolosPortrait from "@/public/Nomolos.png"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from "react-icons/fa6"

const page = () => {
  return (
    <div>
        <section className='relative flex justify-center w-full h-full pt-32 pb-40 px-4 overflow-hidden bg-gradient-to-b from-[30%] from-gray-900 to-black'>

      {/* ── Center content ── */}
      <div className='flex flex-col items-center w-full max-w-[1440px] text-center gap-y-5 z-[2]'>

        <PortfolioCard subheadingText='Sunday Solomon' headingText="Let's connect" preHeading='2026' />

        <div className='w-full h-[600px] flex flex-col items-center'>
          {/* <div className='flex flex-col items-center'>
            <h1 className='uppercase text-white font-[family-name:var(--font-alfaSlabOne)] text-3xl sm:text-4xl md:text-5xl lg:text-9xl leading-tight z-[-2]'>
              Web Developer
            </h1>
            <div className='flex justify-between w-[1200px] font-semibold text-white'>
              <p className='text-sm sm:text-base md:text-lg text-muted-foreground max-w-[400px] text-left'>
                From <span className='text-primary'>Frontend</span> development with JavaScript, TypeScript, React, Next.js and more...
              </p>
              <p className='text-sm sm:text-base md:text-lg text-muted-foreground max-w-[400px] text-right'>
                Web design using <span className='text-primary'>Figma, WordPress, Divi</span> and modern no-code tools
              </p>
            </div>
          </div> */}

          <div className='flex justify-between w-[1200px]'>
            <div className='max-w-[410px] text-left space-y-5 flex flex-col gap-y-14'>
              <div className='space-y-10 relative'>
                <p className='text-7xl text-white'>
                  Ready to bring your vision to life?
                </p>
                <Link
                  href={'https://wa.me/+2348101123098'}
                  target='_blank'
                  className='inline-flex gap-x-4 items-center text-white text-lg py-3 px-6 border-[2px] rounded-full border-white cursor-pointer mt-4'
                >
                  Let&apos;s Connect <FaArrowRight />
                </Link>
              </div>


            </div>

            <div>
                <div>
                    <p className='uppercase text-white'>find me on:</p>
                    {/* ── Mobile arc of social icons ── no SocialHoverCard inside so plain divs + onClick is fine ── */}
                    <div className='flex items-end gap-3 w-full mt-10'>
                    {socialIcons.map((icon, index) => (
                        <Link key={index} href={icon.link}>
                        <div
                            role='link'
                            tabIndex={0}
                            className={`h-[46px] text-white border border-white w-[46px] bg-black/60 cursor-pointer flex items-center justify-center text-lg rounded-full hover:scale-110 transition-transform`}
                        >
                            {icon.icon}
                        </div>
                        </Link>
                    ))}
                    </div>
                </div>

                    <div className='bg-primary rounded-2xl p-6 text-primary-foreground'>
                    <h3 className='text-xl font-semibold mb-4'>Quick Response</h3>
                    <div className='space-y-3'>
                        <div className='flex items-center gap-3'>
                        <span className='w-2 h-2 bg-green-400 rounded-full shrink-0'></span>
                        <span className='text-primary-foreground/80 text-sm'>Usually respond within 2–4 hours</span>
                        </div>
                        <div className='flex items-center gap-3'>
                        <span className='w-2 h-2 bg-yellow-400 rounded-full shrink-0'></span>
                        <span className='text-primary-foreground/80 text-sm'>Free consultation call within 48 hours</span>
                        </div>
                        <div className='flex items-center gap-3'>
                        <span className='w-2 h-2 bg-blue-300 rounded-full shrink-0'></span>
                        <span className='text-primary-foreground/80 text-sm'>Detailed proposal within 5–7 days</span>
                        </div>
                    </div>
                </div>
            </div>
          </div>

        </div>

        <Image src={NomolosPortrait} alt='hero mockup' width={1200} height={600} className='absolute bottom-0 z-[-1]' />

        {/* <div className="-mt-[20%]">
            <ContactSection />
        </div> */}
      </div>

    </section>
    </div>
  )
}

export default page