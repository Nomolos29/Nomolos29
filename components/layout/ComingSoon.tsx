import React from 'react'
import { PortfolioCard } from '../pages/home/utils'

const ComingSoon = () => {
  return (
    <section className='h-[calc(100vh)] w-full flex items-center justify-center bg-gray-900'>
        <PortfolioCard subheadingText='Work In Progress' headingText='Coming Soon' preHeading='Ongoing Maintainance' />
    </section>
  )
}

export default ComingSoon