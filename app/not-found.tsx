import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

const NotFound = () => {
  return (
    <section className='min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black px-4 text-center'>
      <h1 className='text-[7rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] -mb-4 sm:-mb-10 uppercase text-white font-[family-name:var(--font-rubikMaze)] leading-tight select-none'>
        404
      </h1>
      <p className='font-[family-name:var(--font-poppins)] text-base sm:text-lg max-w-lg text-center text-gray-300 leading-relaxed'>
        The page you&apos;re looking for isn&apos;t here, but my best work certainly is. Start from the homepage and explore my projects.
      </p>
      <Link
        href='/'
        className='group inline-flex gap-x-3 items-center text-black font-semibold text-base sm:text-lg py-3.5 px-7 rounded-full cursor-pointer mt-8 bg-white hover:bg-gray-100 transition-all shadow-lg'
      >
        Let&apos;s Go Back Home
        <FaArrowRight className='transition-transform group-hover:translate-x-1.5' />
      </Link>
    </section>
  )
}

export default NotFound
