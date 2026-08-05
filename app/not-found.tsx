import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

const NotFound = () => {
  return (
    <section className='h-[calc(100vh)] w-full flex flex-col items-center justify-center bg-gray-900'>
      <h1 className='text-[20rem] -mb-10 uppercase text-white font-[family-name:var(--font-rubikMaze)] leading-tight'>404</h1>
      <p className='font-[family-name:var(--font-poppins)] text-lg w-[40%] text-center text-white'>The page you&apos;re looking for isn&apos;t here, but my best work certainly is. Start from the homepage and explore my projects.</p>
      <Link
          href="/"
          className='inline-flex gap-x-4 items-center text-black text-lg py-3 px-6 rounded-full cursor-pointer mt-10 bg-white'
      >
          Let&apos;s Go Back Home<FaArrowRight />
      </Link>
    </section>
  )
}

export default NotFound