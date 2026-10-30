"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navMenu } from '@/lib/data/links'
import ThemeToggle from '../utility/ThemeToggle'
import { HiMenu, HiX } from 'react-icons/hi'
import { FaArrowRight } from 'react-icons/fa6'

const RESUME_URL =
  'https://docs.google.com/document/d/1pFrc0rIWIzWElseapHJOr--Kb_OVY_IA/edit?usp=sharing&ouid=114183603003822068308&rtpof=true&sd=true'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const allNavItems = [{ name: 'Home', link: '/' }, ...navMenu]

  return (
    <header className='w-full fixed top-0 left-0 right-0 px-4 md:px-8 lg:px-10 xl:px-14 pt-3 md:pt-4 flex justify-center items-center z-50 pointer-events-none'>
      <div
        className={`max-w-[1440px] w-full pointer-events-auto rounded-full px-4 sm:px-6 md:px-8 py-3 flex justify-between items-center transition-all duration-300 ${
          scrolled
            ? 'bg-gray-900/95 backdrop-blur-xl border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.35)]'
            : 'bg-gray-900/80 backdrop-blur-md border border-white/15 shadow-[0_4px_20px_rgba(0,0,0,0.2)]'
        }`}
      >
        {/* Left: Brand Logo with BubbleTag Dot Motif */}
        <div className='flex items-center gap-x-2'>
          <span className='h-3.5 w-3.5 rounded-full bg-white border border-white hidden sm:inline-block' />
          <Link
            href='/'
            className='text-white font-bold text-xl sm:text-2xl tracking-tight hover:text-primary transition-colors font-[family-name:var(--font-rubikMaze)] uppercase'
          >
            Nomolos
            <span className='text-primary font-[family-name:var(--font-rubikMaze)] ml-1'>.</span>
          </Link>
        </div>

        {/* Center: Desktop Pill Navigation (Matches BubbleTag / ProjectsSection Pill Tabs) */}
        <nav className='hidden lg:flex items-center gap-x-2 bg-black/50 border border-white/15 rounded-full p-1.5'>
          {allNavItems.map((menu, index) => {
            const isActive =
              menu.link === '/'
                ? pathname === '/'
                : pathname === menu.link || pathname.startsWith(`${menu.link}/`)
            return (
              <Link
                key={index}
                href={menu.link}
                className={`px-5 py-1.5 rounded-full text-sm font-[family-name:var(--font-poppins)] font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-white text-black shadow-sm'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {menu.name}
              </Link>
            )
          })}
        </nav>

        {/* Right: Desktop Actions (Signature Pill CTA with Arrow) */}
        <div className='hidden lg:flex items-center gap-x-3'>
          <ThemeToggle />
          <Link
            href={RESUME_URL}
            target='_blank'
            className='group inline-flex gap-x-3 items-center text-black bg-white hover:bg-primary hover:text-white text-sm font-[family-name:var(--font-poppins)] font-medium py-2.5 px-6 rounded-full border border-white hover:border-primary transition-all duration-300 cursor-pointer'
          >
            View My Resume
            <FaArrowRight className='transition-transform duration-300 group-hover:translate-x-1' />
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className='lg:hidden flex items-center gap-2.5'>
          <ThemeToggle />
          <button
            type='button'
            onClick={toggleMenu}
            className='h-10 w-10 rounded-full border border-white/40 bg-black/60 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer'
            aria-label='Toggle menu'
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <HiX className='w-5 h-5' /> : <HiMenu className='w-5 h-5' />}
          </button>
        </div>
      </div>

      {/* Mobile Menu — Styled with the signature White-Outer / Gray-900-Inner Accordion Card Frame */}
      <div
        className={`lg:hidden pointer-events-auto absolute top-full left-4 right-4 mt-3 bg-white rounded-2xl p-3 shadow-[10px_10px_20px_rgba(0,0,0,0.3)] transition-all duration-300 origin-top ${
          isMenuOpen
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 -translate-y-3 pointer-events-none'
        }`}
      >
        <div className='flex justify-between items-center px-3 pb-2.5 mb-2 border-b border-gray-200'>
          <span className='text-xs uppercase tracking-widest text-gray-500 font-[family-name:var(--font-poppins)]'>
            Navigation Menu
          </span>
          <span className='font-[family-name:var(--font-italianno)] text-xl text-gray-800'>
            Sunday Solomon
          </span>
        </div>

        <nav className='bg-gray-900 text-white p-4 rounded-2xl flex flex-col gap-2 font-[family-name:var(--font-poppins)]'>
          {allNavItems.map((menu, index) => {
            const isActive =
              menu.link === '/'
                ? pathname === '/'
                : pathname === menu.link || pathname.startsWith(`${menu.link}/`)
            return (
              <Link
                key={index}
                href={menu.link}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center justify-between py-2.5 px-4 rounded-full text-sm transition-all ${
                  isActive
                    ? 'bg-white text-black font-semibold'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{menu.name}</span>
                <FaArrowRight className='w-3.5 h-3.5' />
              </Link>
            )
          })}

          <div className='pt-3 mt-2 border-t border-white/15'>
            <Link
              href={RESUME_URL}
              target='_blank'
              onClick={() => setIsMenuOpen(false)}
              className='w-full inline-flex justify-center gap-x-3 items-center text-white text-sm py-3 px-6 border-2 rounded-full border-white hover:bg-white hover:text-black transition-all cursor-pointer'
            >
              View My Resume <FaArrowRight />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
