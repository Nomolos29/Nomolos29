import React from 'react'
import { PortfolioCard } from '../pages/home/utils'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa6'

const ComingSoon = () => {
  return (
    <section className='h-[calc(100vh)] w-full flex flex-col items-center justify-center bg-gray-900 mt-10'>
        <PortfolioCard subheadingText='Work In Progress' headingText='Coming Soon' preHeading='Ongoing Maintainance' />
        <p className='font-[family-name:var(--font-poppins)] text-lg w-1/2 text-center text-white'>This section is currently being crafted with the same attention to detail, performance, and user experience that I bring to every project. It&apos;ll be available soon, thanks for your patience.</p>
        <Link
            href="/"
            className='inline-flex gap-x-4 items-center text-black text-lg py-3 px-6 rounded-full cursor-pointer mt-10 bg-white'
        >
            Let&apos;s Go Back Home<FaArrowRight />
        </Link>
    </section>
  )
}

export default ComingSoon