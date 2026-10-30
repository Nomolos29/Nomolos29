"use client"

import React, { useState, useEffect } from 'react'
import Button from '../utility/Button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navMenu } from '@/lib/data/links'
import ThemeToggle from '../utility/ThemeToggle'
import { HiMenu, HiX } from 'react-icons/hi'

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

  return (
    <header
      className={`w-full fixed top-0 px-4 md:px-10 py-3.5 flex justify-center items-center z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/85 backdrop-blur-xl border-b border-border/80 shadow-[0_8px_30px_rgb(0,0,0,0.08)]'
          : 'bg-background/70 backdrop-blur-md border-b border-border/40'
      }`}
    >
      <div className='max-w-screen-2xl w-full flex justify-between items-center'>
        {/* Desktop Layout */}
        <div className='hidden lg:flex items-center'>
          <div className='border-r border-border pr-5 py-1.5'>
            <Link
              href='/'
              className='text-foreground font-bold text-2xl tracking-tight hover:text-primary transition-colors font-[family-name:var(--font-rubikMaze)]'
            >
              Nomolos
              <span className='text-primary font-[family-name:var(--font-rubikMaze)] ml-1'>.</span>
            </Link>
          </div>
          <nav className='pl-5 py-1.5 flex items-center gap-x-6'>
            <Link
              href='/'
              className={`relative py-1 text-sm font-medium transition-colors group ${
                pathname === '/' ? 'text-primary' : 'text-foreground/80 hover:text-primary'
              }`}
            >
              Home
              <span
                className={`absolute left-0 -bottom-0.5 h-[2px] bg-primary rounded-full transition-all duration-300 ${
                  pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
            {navMenu.map((menu, index) => {
              const isActive = pathname === menu.link || pathname.startsWith(`${menu.link}/`)
              return (
                <Link
                  key={index}
                  href={menu.link}
                  className={`relative py-1 text-sm font-medium transition-colors group ${
                    isActive ? 'text-primary' : 'text-foreground/80 hover:text-primary'
                  }`}
                >
                  {menu.name}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-[2px] bg-primary rounded-full transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              )
            })}
          </nav>
        </div>

        {/* Mobile Logo */}
        <div className='lg:hidden'>
          <Link
            href='/'
            className='text-foreground font-bold text-xl tracking-tight hover:text-primary transition-colors font-[family-name:var(--font-rubikMaze)]'
          >
            Nomolos<span className='text-primary'>.</span>
          </Link>
        </div>

        {/* Desktop Actions */}
        <div className='hidden lg:flex items-center gap-3'>
          <ThemeToggle />
          <Button
            targetType='_blank'
            textSize='lg'
            butonText='View My Resume'
            buttonLink={RESUME_URL}
            buttonType='filled'
          />
        </div>

        {/* Mobile Actions */}
        <div className='lg:hidden flex items-center gap-3'>
          <ThemeToggle />
          <button
            type='button'
            onClick={toggleMenu}
            className='p-2.5 rounded-full bg-muted text-foreground hover:bg-primary/10 hover:text-primary transition-colors'
            aria-label='Toggle menu'
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <HiX className='w-6 h-6' /> : <HiMenu className='w-6 h-6' />}
          </button>
        </div>
      </div>

      {/* Animated Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-4 right-4 mt-2 bg-card/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl py-5 px-6 transition-all duration-300 origin-top ${
          isMenuOpen
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-95 -translate-y-3 pointer-events-none'
        }`}
      >
        <nav className='flex flex-col gap-2'>
          <Link
            href='/'
            className={`py-2.5 px-3 rounded-lg font-medium transition-colors ${
              pathname === '/'
                ? 'bg-primary/10 text-primary'
                : 'text-foreground hover:bg-muted hover:text-primary'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          {navMenu.map((menu, index) => {
            const isActive = pathname === menu.link
            return (
              <Link
                key={index}
                href={menu.link}
                className={`py-2.5 px-3 rounded-lg font-medium transition-colors ${
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-foreground hover:bg-muted hover:text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {menu.name}
              </Link>
            )
          })}
          <div className='pt-3 mt-2 border-t border-border'>
            <Button
              targetType='_blank'
              textSize='lg'
              butonText='View My Resume'
              buttonLink={RESUME_URL}
              buttonType='filled'
            />
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
