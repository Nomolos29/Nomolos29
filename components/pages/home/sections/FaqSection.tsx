import React from 'react'
import { Accordion } from '../utils'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa6'
import { FAQs } from '@/lib/data/FAQsData'

const FaqSection = () => {
  return (
    <section className='w-full flex justify-center py-14 bg-gradient-to-b from-[30%] from-gray-900 to-black px-14'>
        <main className='max-w-[1440px] flex flex-col items-center justify-center overflow-hidden'>
            <div className='flex justify-between items-center w-full h-[550px]'>
                <div className='lg:w-[55%] xl:w-[45%] font-[family-name:var(--font-poppins)] space-y-5'>
                    <h2 className='text-7xl text-white lg:pr-5 xl:p-0'>Everything You Might Want to Know</h2>
                    <p className='text-gray-300 text-xl lg:w-[80%] xl:w-[70%]'>Transparency matters. Here&apos;s a closer look at how I work, what I build, and what you can expect.</p>
                    <div className='flex items-center gap-x-5'>
                        <Link
                            href={'https://wa.me/+2348101123098'}
                            target='_blank'
                            className='inline-flex gap-x-4 items-center text-black text-lg py-3 px-6 rounded-full cursor-pointer mt-6 bg-white'
                        >
                            Let&apos;s Build Together <FaArrowRight />
                        </Link>

                        <Link
                            href={'https://wa.me/+2348101123098'}
                            target='_blank'
                            className='inline-flex gap-x-4 items-center text-white text-lg py-3 px-6 border-[2px] rounded-full border-white cursor-pointer mt-4'
                        >
                            Let&apos;s Connect <FaArrowRight />
                        </Link>
                    </div>
                </div>
                <div className='w-[35%] space-y-10 overflow-y-scroll h-full px-2 py-5 scrollbar-hide'>
                    <Accordion questions={FAQs} />
                </div>
            </div>
        </main>
    </section>
  )
}

export default FaqSection