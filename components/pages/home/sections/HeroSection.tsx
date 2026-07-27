import { socialIcons } from '@/lib/links'
import NomolosPortrait from "@/public/Nomolos.png"
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa6"
import { PortfolioCard } from '../utils'
import Link from 'next/link'


const mobileArcOffsets = [
  '-translate-y-4',
  '-translate-y-6',
  '-translate-y-8',
  '-translate-y-8',
  '-translate-y-6',
  '-translate-y-4',
]

const mobileFloatClasses = ['float-1', 'float-2', 'float-3', 'float-4', 'float-5', 'float-6']

const HeroSection = () => {
  const iconColorClasses = (color: string) =>
    color === 'blue'  ? 'shadow-blue-400 text-primary'
    : color === 'black' ? 'shadow-gray-400 text-foreground'
    : color === 'red'   ? 'shadow-red-400 text-red-500'
    : color === 'green' ? 'shadow-green-400 text-green-600'
    : ''


  return (
    <section className='relative flex justify-center w-full h-full pt-32 pb-40 px-4 overflow-hidden bg-gradient-to-b from-[30%] from-gray-900 to-black'>

      {/* ── Center content ── */}
      <div className='flex flex-col items-center w-full max-w-[1440px] text-center gap-y-5 z-[2]'>

        <PortfolioCard subheadingText='Sunday Solomon' headingText='Portfolio' preHeading='2026' />

        <div className='w-full pt-20 h-[600px] flex flex-col items-center'>
          <div className='flex flex-col items-center'>
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
          </div>

          <div className='flex justify-between w-[1200px] pt-20'>
            <div className='max-w-[410px] text-left space-y-5 flex flex-col gap-y-14'>
              <div className='space-y-10 relative'>
                <p className='text-sm sm:text-base text-muted-foreground'>
                  I build fast, scalable and accessible web applications with a strong focus on performance, maintainability and exceptional user experience.
                </p>
                <Link
                  href={'https://wa.me/+2348101123098'}
                  target='_blank'
                  className='inline-flex gap-x-4 items-center text-white text-lg py-3 px-6 border-[2px] rounded-full border-white cursor-pointer mt-4'
                >
                  Let&apos;s Connect <FaArrowRight />
                </Link>
              </div>

              <div>
                <p className='uppercase text-white'>find me on:</p>
                {/* ── Mobile arc of social icons ── no SocialHoverCard inside so plain divs + onClick is fine ── */}
                <div className='flex items-end gap-3 w-full mt-10'>
                  {socialIcons.map((icon, index) => (
                    <Link key={index} href={icon.link}>
                      <div
                        role='link'
                        tabIndex={0}
                        className={`${mobileArcOffsets[index]} ${mobileFloatClasses[index]} h-[46px] text-gray-800 border border-white w-[46px] bg-black/60 cursor-pointer ${iconColorClasses(icon.color)} flex items-center justify-center text-lg rounded-full hover:scale-110 transition-transform`}
                      >
                        {icon.icon}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        <Image src={NomolosPortrait} alt='hero mockup' width={1200} height={600} className='absolute bottom-0 z-[-1]' />

        {/* <h1 className='absolute text-9xl font-[family-name:var(--font-rubikMaze)] text-gray-900 -bottom-12'>Sunday Solomon</h1> */}
      </div>

    </section>
  )
}

export default HeroSection
