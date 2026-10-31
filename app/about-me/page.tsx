import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PortfolioCard } from '@/components/pages/home/utils'
import AboutSection from '@/components/pages/home/sections/AboutSection'
import SkillsSection from '@/components/pages/home/sections/SkillsSection'
import FaqSection from '@/components/pages/home/sections/FaqSection'
import ArchitecturalBackdrop from '@/components/utility/ArchitecturalBackdrop'
import NomolosPortrait from '@/public/Nomolos.png'
import { FaArrowRight, FaBriefcase, FaGraduationCap, FaCode } from 'react-icons/fa6'

const experienceTimeline = [
  {
    period: '2024 — Present',
    role: 'Frontend Engineer',
    organization: 'Acedboard & Enterprise SaaS Projects',
    type: 'work',
    description:
      'Architecting responsive product interfaces, interactive template showcases, and value-tracking analytics dashboards using Next.js, TypeScript, and Tailwind CSS.',
    highlights: ['Next.js 15 App Router', 'Design Systems', '98+ Lighthouse Performance'],
  },
  {
    period: '2023 — Present',
    role: 'Software Engineering Student',
    organization: 'National Institute for Information Technology (NIIT)',
    type: 'education',
    description:
      'Deepening foundations in software architecture, data structures, relational databases, and full-stack application engineering.',
    highlights: ['Software Architecture', 'Full-Stack Engineering', 'Database Systems'],
  },
  {
    period: '2023 — 2024',
    role: 'Web Developer & Digital Solutions Specialist',
    organization: 'WC Digital Agency & Client Storefronts',
    type: 'work',
    description:
      'Delivered high-converting e-commerce storefronts and brand websites (Audiocreeb, Schick Collections, Radiance Cookware) with custom UI/UX, payment integrations, and technical SEO.',
    highlights: ['E-Commerce', 'WordPress / WooCommerce', 'Technical SEO'],
  },
  {
    period: '2023',
    role: 'Web3 & Blockchain Developer Cohort',
    organization: 'Web3Bridge Africa',
    type: 'code',
    description:
      'Trained in smart contract engineering with Solidity, decentralized application (dApp) frontend integration, and EVM tooling.',
    highlights: ['Solidity', 'Ethers.js / Wagmi', 'Smart Contracts'],
  },
]

const AboutMePage = () => {
  return (
    <div className='min-h-screen bg-background overflow-hidden'>
      {/* Hero Banner */}
      <section className='relative flex justify-center w-full pt-32 pb-20 px-4 md:px-8 lg:px-10 xl:px-14 overflow-hidden bg-gradient-to-b from-[25%] from-gray-900 via-[#080d1a] to-black'>
        <ArchitecturalBackdrop variant='hero' />

        <div className='max-w-[1280px] w-full flex flex-col items-center z-10'>
          <PortfolioCard
            preHeading='Software Engineer'
            headingText='About Me'
            subheadingText='Sunday Solomon'
          />

          <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full pt-8'>
            {/* Left Story */}
            <div className='lg:col-span-7 space-y-6 text-left'>
              <span className='inline-block text-xs font-semibold uppercase tracking-widest text-[#4da3ff] bg-[#4da3ff]/10 border border-[#4da3ff]/30 px-3.5 py-1.5 rounded-full'>
                Lagos, Nigeria • Collaborating Worldwide
              </span>
              <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight font-[family-name:var(--font-poppins)]'>
                Bridging thoughtful <span className='text-[#4da3ff]'>design</span> and resilient{' '}
                <span className='text-[#f835a7]'>engineering</span>.
              </h1>
              <p className='text-gray-300 text-base sm:text-lg leading-relaxed'>
                I&apos;m Sunday Solomon (Solomon Nurudeen), a Front-End & Full-Stack Web Developer with over 5 years of hands-on experience turning ambitious ideas into fast, accessible, and revenue-driving digital products.
              </p>
              <p className='text-gray-400 text-base leading-relaxed'>
                Whether I&apos;m engineering a complex SaaS interface in React, Next.js, and TypeScript, writing smart contracts in Solidity, or crafting a high-converting e-commerce experience in WordPress and Figma, my north star is always measurable user and business impact.
              </p>

              <div className='flex flex-wrap items-center gap-4 pt-3'>
                <Link
                  href='/contacts'
                  className='group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-lg'
                >
                  Work With Me
                  <FaArrowRight className='transition-transform duration-300 group-hover:translate-x-1.5' />
                </Link>
                <Link
                  href='https://docs.google.com/document/d/1pFrc0rIWIzWElseapHJOr--Kb_OVY_IA/edit?usp=sharing&ouid=114183603003822068308&rtpof=true&sd=true'
                  target='_blank'
                  className='inline-flex items-center gap-3 px-7 py-3.5 rounded-full border-2 border-white/60 text-white font-semibold hover:bg-white/10 transition-all'
                >
                  Download Resume
                </Link>
              </div>
            </div>

            {/* Right Portrait Card */}
            <div className='lg:col-span-5 flex justify-center'>
              <div className='relative rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-white/10 to-transparent p-3 shadow-2xl max-w-[420px] w-full'>
                <Image
                  src={NomolosPortrait}
                  alt='Sunday Solomon'
                  width={700}
                  height={500}
                  className='w-full h-auto object-cover rounded-2xl'
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Education Timeline */}
      <section className='w-full py-20 px-4 md:px-8 lg:px-10 xl:px-14 bg-background'>
        <div className='max-w-5xl mx-auto'>
          <div className='text-center mb-16'>
            <span className='text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1.5 rounded-full'>
              Career & Education
            </span>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 font-[family-name:var(--font-poppins)]'>
              My Journey So Far
            </h2>
            <p className='text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mt-3'>
              A timeline of the roles, programs, and milestones that shaped my engineering approach.
            </p>
          </div>

          <div className='relative border-l-2 border-primary/30 ml-4 md:ml-8 pl-6 md:pl-10 space-y-10'>
            {experienceTimeline.map((item, idx) => (
              <div
                key={idx}
                className='relative bg-card border border-border rounded-3xl p-6 md:p-8 shadow-md hover:shadow-xl hover:border-primary/40 transition-all duration-300'
              >
                <span className='absolute -left-[37px] md:-left-[53px] top-7 w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center shadow-md'>
                  {item.type === 'education' ? (
                    <FaGraduationCap className='w-4 h-4' />
                  ) : item.type === 'code' ? (
                    <FaCode className='w-4 h-4' />
                  ) : (
                    <FaBriefcase className='w-4 h-4' />
                  )}
                </span>

                <div className='flex flex-wrap items-center justify-between gap-2 mb-2'>
                  <span className='text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full'>
                    {item.period}
                  </span>
                  <span className='text-sm font-medium text-muted-foreground'>
                    {item.organization}
                  </span>
                </div>

                <h3 className='text-xl sm:text-2xl font-bold text-foreground mb-2'>
                  {item.role}
                </h3>
                <p className='text-muted-foreground leading-relaxed mb-4'>
                  {item.description}
                </p>

                <div className='flex flex-wrap gap-2'>
                  {item.highlights.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className='text-xs font-medium px-3 py-1 rounded-lg bg-muted text-foreground/80 border border-border'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats, Core Values & Partner Companies */}
      <AboutSection />

      {/* Tech Stack */}
      <SkillsSection />

      {/* FAQs */}
      <FaqSection />
    </div>
  )
}

export default AboutMePage
