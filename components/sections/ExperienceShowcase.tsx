import { companyShowcase } from '@/lib/links'
import React from 'react'
import SectionHeading from '../utility/SectionHeading'
import LogoSlideshow from '../utility/LogoSlideshow'

const ExperienceShowcase = () => {
  return (
    <section className='w-full py-12 sm:py-16 lg:py-20 px-4'>
      <div className='max-w-6xl mx-auto'>
        <SectionHeading 
          badge="Trusted Partners"
          title="Trusted by teams, shaped by impact."
          subtitle="From digital agencies to blockchain startups, I've partnered with forward-thinking teams to build products that are fast, functional, and truly user-first."
          size="md"
          className="mb-12 lg:mb-16"
        />

        {/* Logo Slideshow */}
        <LogoSlideshow 
          companies={companyShowcase}
          autoplay={true}
          interval={5000}
          showDots={true}
          className="mb-12 lg:mb-16"
        />

        {/* Stats Section */}
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 lg:mt-16 pt-12 lg:pt-16 border-t border-border'>
          <div className='text-center'>
            <div className='text-2xl sm:text-3xl font-bold text-primary mb-2'>15+</div>
            <div className='text-muted-foreground font-medium'>Projects Delivered</div>
          </div>
          <div className='text-center'>
            <div className='text-2xl sm:text-3xl font-bold text-primary mb-2'>4</div>
            <div className='text-muted-foreground font-medium'>Industry Partners</div>
          </div>
          <div className='text-center'>
            <div className='text-2xl sm:text-3xl font-bold text-primary mb-2'>100%</div>
            <div className='text-muted-foreground font-medium'>Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceShowcase