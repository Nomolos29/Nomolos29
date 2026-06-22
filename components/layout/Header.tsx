"use client"

import React, { useState } from 'react'
import Button from '../utility/Button'
import Link from 'next/link'
import { navMenu } from '@/lib/links'
import ThemeToggle from '../utility/ThemeToggle'
import { HiMenu, HiX } from 'react-icons/hi'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='w-full fixed top-0 px-4 md:px-10 py-5 flex justify-center items-center bg-transparent z-20'>
        <main className='max-w-screen-2xl w-full flex justify-between items-center bg-card/30 backdrop-blur-md rounded-full shadow-lg px-5 py-2'>
            {/* Desktop Layout */}
            <div className='hidden lg:flex items-center'>
                <div className='border-r-[1px] border-border px-3 py-2'>
                    <Link href='/' className='text-foreground font-bold text-lg tracking-tight hover:text-primary transition-colors'>Nomolos<span className='text-primary'>.</span></Link>
                </div>
                <nav className='border-l-[1px] border-border px-3 py-2 flex gap-x-5'>
                    {navMenu.map((menu, index) => (
                        <Link key={index} href={menu.link} className='relative'>
                            <button type='button' className='z-10 group p-1 text-foreground hover:text-primary transition-colors'>{menu.name}</button>
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Mobile Logo */}
            <div className='lg:hidden'>
                <Link href='/' className='text-foreground font-bold text-lg tracking-tight hover:text-primary transition-colors'>Nomolos<span className='text-primary'>.</span></Link>
            </div>
            
            {/* Desktop Actions */}
            <div className='hidden lg:flex items-center gap-3'>
                <ThemeToggle />
                <Button textSize='lg' butonText='View my Work' buttonLink='#' buttonType='filled' />
            </div>

            {/* Mobile Actions */}
            <div className='lg:hidden flex items-center gap-3'>
                <ThemeToggle />
                <button
                    type="button"
                    onClick={toggleMenu}
                    className='p-2 rounded-full bg-muted text-foreground'
                    aria-label='Toggle menu'
                >
                    {isMenuOpen ? <HiX className='w-6 h-6' /> : <HiMenu className='w-6 h-6' />}
                </button>
            </div>
        </main>

        {/* Mobile Menu */}
        {isMenuOpen && (
            <div className='lg:hidden absolute top-full left-4 right-4 mt-2 bg-card/95 backdrop-blur-md rounded-2xl shadow-lg py-4 px-6'>
                <nav className='flex flex-col gap-4'>
                    {navMenu.map((menu, index) => (
                        <Link 
                            key={index} 
                            href={menu.link} 
                            className='text-foreground hover:text-primary transition-colors py-2 border-b border-border last:border-b-0'
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {menu.name}
                        </Link>
                    ))}
                    <div className='pt-2'>
                        <Button textSize='lg' butonText='View my Work' buttonLink='#' buttonType='filled' />
                    </div>
                </nav>
            </div>
        )}
    </div>
  )
}

export default Header