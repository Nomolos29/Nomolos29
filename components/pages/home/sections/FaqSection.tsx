import React from 'react'
import { Accordion } from '../utils'
import ArchitecturalBackdrop from '@/components/utility/ArchitecturalBackdrop'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa6'
import { FAQs } from '@/lib/data/FAQsData'

const FaqSection = () => {
  return (
    <section
      id='faq'
      className='relative overflow-hidden w-full flex justify-center py-20 bg-gradient-to-b from-[20%] from-gray-900 to-black px-5 md:px-10 xl:px-14'
    >
      <ArchitecturalBackdrop variant='subtle' />
      <div className='relative z-10 max-w-[1440px] w-full flex flex-col items-center justify-center'>
        <div className='flex flex-col gap-y-12 lg:flex-row justify-between items-start lg:items-center w-full'>
          {/* Left Intro Column */}
          <div className='w-full lg:w-[50%] xl:w-[46%] font-[family-name:var(--font-poppins)] space-y-6'>
            <span className='inline-block text-xs font-semibold uppercase tracking-widest text-[#4da3ff] bg-[#4da3ff]/10 border border-[#4da3ff]/30 px-3.5 py-1.5 rounded-full'>
              Frequently Asked Questions
            </span>
            <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight'>
              Everything You Might Want to Know
            </h2>
            <p className='text-gray-300 text-lg sm:text-xl max-w-xl leading-relaxed'>
              Transparency matters. Here&apos;s a closer look at how I work, what I build, and what you can expect when we collaborate.
            </p>
            <div className='flex flex-wrap items-center gap-4 pt-2'>
              <Link
                href='https://wa.me/+2348101123098'
                target='_blank'
                className='group inline-flex gap-x-3 items-center text-black font-semibold text-base sm:text-lg py-3.5 px-6 rounded-full cursor-pointer bg-white hover:bg-gray-100 transition-all shadow-lg'
              >
                Let&apos;s Build Together
                <FaArrowRight className='transition-transform duration-300 group-hover:translate-x-1.5' />
              </Link>

              <Link
                href='/contacts'
                className='group inline-flex gap-x-3 items-center text-white font-semibold text-base sm:text-lg py-3.5 px-6 border-2 rounded-full border-white/70 hover:bg-white/10 transition-all cursor-pointer'
              >
                Ask a Question
                <FaArrowRight className='transition-transform duration-300 group-hover:translate-x-1.5' />
              </Link>
            </div>
          </div>

          {/* Right Tilted FAQ Card Stack */}
          <div className='w-full lg:w-[46%] relative'>
            <div className='flex items-center justify-between text-xs text-gray-400 px-4 mb-2'>
              <span>Click or hover any card to expand</span>
              <span>{FAQs.length} Questions • Scroll for more ↓</span>
            </div>
            <Accordion questions={FAQs} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqSection
