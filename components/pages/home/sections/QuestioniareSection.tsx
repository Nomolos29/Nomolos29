import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

const QuestioniareSection = () => {
  return (
    <section className='w-full flex justify-center px-5 md:px-8 lg:px-10 xl:px-14 pb-20'>
        <div className='flex flex-col md:flex-row justify-between w-full pt-10 md:py-7 pl-7 md:pl-10 bg-gradient-to-r mt-5 max-w-[1440px] rounded-2xl from-[20%] to-60% from-gray-200 to-gray-50 relative md:pb-10'>
            <div className='w-[90%] lg:w-[60%] xl:w-[50%] flex flex-col gap-y-5'>
                <h2 className='text-5xl md:text-7xl text-black font-[family-name:var(--font-poppins)]'>Tell Me About Your Project.</h2>
                <p className='font-[family-name:var(--font-poppins)] text-lg w-[95%] lg:w-[80%] xl:w-full'>Every successful website begins with understanding your business. This short questionnaire helps me learn about your goals, audience, and project requirements so I can build a solution that&apos;s tailored to your needs.</p>
                <Link
                    href={'https://forms.gle/RPojyZdLGsYW2He47'}
                    target='_blank'
                    className='inline-flex gap-x-4 w-fit items-center text-white text-lg py-3 px-6 rounded-full cursor-pointer mt-6 bg-black'
                >
                    Fill the Questionnaire <FaArrowRight />
                </Link>
            </div>
            <div className='w-[210%] md:w-[30%]'>
                <Link href="https://radiancecookware.com/" target='_blank'> <Image src="/homepage/chatgpt-mobile-mockup.png" alt='Radiance Cookware mobile mockup' width={950} height={400} className='md:object-fit -ml-[27%] md:m-0 md:absolute lg:bottom-[-15%] xl:bottom-[-17%] lg:left-[25%] xl:left-[42%] bg-no-repeat' /></Link>
            </div>
        </div>
    </section>
  )
}

export default QuestioniareSection