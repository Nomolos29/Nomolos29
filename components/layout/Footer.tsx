"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import ArchitecturalBackdrop from '@/components/utility/ArchitecturalBackdrop';
import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaWhatsapp,
  FaEnvelope,
  FaArrowRight,
  FaArrowUpRightFromSquare,
} from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [spotPos, setSpotPos] = useState({ x: 50, y: 50 });
  const [isHoveringWordmark, setIsHoveringWordmark] = useState(false);

  const handleWordmarkMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setSpotPos({ x, y });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Nomolos29/', icon: <FaGithub /> },
    { name: 'Twitter / X', url: 'https://x.com/Nomoreloss29', icon: <FaXTwitter /> },
    { name: 'WhatsApp', url: 'https://wa.me/+2348101123098', icon: <FaWhatsapp /> },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/nomolos29', icon: <FaLinkedinIn /> },
    { name: 'Email', url: 'mailto:nomolos2019@gmail.com', icon: <FaEnvelope /> },
  ];

  const quickLinks = [
    { num: '01', name: 'Home', href: '/' },
    { num: '02', name: 'About Me', href: '/about-me' },
    { num: '03', name: 'Projects', href: '/projects' },
    { num: '04', name: 'Tech Stack', href: '/#skills' },
    { num: '05', name: 'Contact Me', href: '/contacts' },
  ];

  const services = [
    { name: 'Frontend Engineering (React & Next.js)', href: '/contacts' },
    { name: 'SaaS & Dashboard Interfaces', href: '/projects' },
    { name: 'E-Commerce & CMS Platforms', href: '/projects' },
    { name: 'Web3 & Smart Contract UI', href: '/contacts' },
    { name: 'Performance & SEO Optimization', href: '/contacts' },
  ];

  return (
    <footer className='relative w-full bg-[#050507] text-gray-400 overflow-hidden font-[family-name:var(--font-poppins)]'>
      <ArchitecturalBackdrop variant='subtle' />
      {/* ── PART 1: Distinct High-Contrast Light Newsletter Banner ── */}
      <div className='relative z-10 w-full bg-gradient-to-b from-black/80 to-transparent pt-10 pb-16 px-5 md:px-8 lg:px-10 xl:px-14'>
        <div className='max-w-[1440px] mx-auto bg-gradient-to-r from-[20%] to-80% from-gray-200 via-gray-100 to-white text-black rounded-[28px] md:rounded-[36px] p-8 sm:p-10 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.45)] relative overflow-hidden'>
          {/* Decorative faint circle */}
          <div className='pointer-events-none absolute -right-16 -bottom-24 w-80 h-80 rounded-full border-[24px] border-black/[0.04]' />

          <div className='relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10'>
            {/* Left Copy */}
            <div className='max-w-xl space-y-4'>
              <div className='flex items-center gap-x-1.5'>
                <div className='h-7 w-7 rounded-full border border-black bg-black' />
                <p className='border border-black px-5 h-7 flex items-center justify-center text-sm italic rounded-full text-black bg-white'>
                  Monthly Dispatch
                </p>
              </div>
              <h2 className='text-4xl sm:text-5xl md:text-6xl text-black leading-tight tracking-tight'>
                Stay Ahead of the <span className='text-primary'>Curve</span>.
              </h2>
              <p className='text-gray-700 text-base sm:text-lg leading-relaxed'>
                Get occasional updates when I ship new products, publish frontend architecture notes, or open slots for new client collaborations.
              </p>
            </div>

            {/* Right Integrated Pill Capsule Form */}
            <div className='w-full lg:w-[480px] space-y-4'>
              {subscribed ? (
                <div className='py-4 px-6 rounded-full bg-black text-white text-base font-medium text-center shadow-lg'>
                  ✓ You&apos;re subscribed! Welcome aboard.
                </div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className='w-full bg-white border-2 border-black rounded-full p-1.5 pl-5 flex items-center justify-between shadow-[6px_6px_0px_#000000] focus-within:shadow-[8px_8px_0px_#014ba7] focus-within:border-primary transition-all'
                >
                  <input
                    type='email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter your email address...'
                    className='w-full bg-transparent text-black placeholder:text-gray-500 outline-none text-sm sm:text-base pr-3'
                  />
                  <button
                    type='submit'
                    className='group inline-flex items-center gap-x-2.5 px-6 py-3.5 bg-black hover:bg-primary text-white font-medium rounded-full transition-colors text-sm sm:text-base whitespace-nowrap cursor-pointer shrink-0'
                  >
                    Subscribe
                    <FaArrowRight className='transition-transform duration-300 group-hover:translate-x-1' />
                  </button>
                </form>
              )}

              <div className='flex flex-wrap items-center gap-x-6 gap-y-2 px-3 text-xs sm:text-sm text-gray-600 font-medium'>
                <span>✓ New Case Studies</span>
                <span>✓ Engineering Notes</span>
                <span>✓ Zero Spam</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── PART 2: Architectural Dark Grid Footer ── */}
      <div className='max-w-[1440px] mx-auto px-5 md:px-8 lg:px-10 xl:px-14 relative z-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 border-y border-white/15 divide-y md:divide-y-0 lg:divide-x divide-white/15'>
          {/* Cell 1: Brand Identity & Status */}
          <div className='lg:col-span-4 py-12 lg:pr-10 flex flex-col justify-between space-y-8'>
            <div className='space-y-4'>
              <Link
                href='/'
                className='inline-block text-3xl sm:text-4xl font-bold text-white uppercase font-[family-name:var(--font-rubikMaze)]'
              >
                Nomolos<span className='text-primary ml-1'>.</span>
              </Link>
              <p className='text-gray-400 text-sm sm:text-base leading-relaxed max-w-sm'>
                Crafting fast, scalable, and accessible digital products with React, Next.js, TypeScript, and modern web technologies.
              </p>
            </div>

            <div className='space-y-4'>
              <div className='inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/20 bg-white/[0.03]'>
                <span className='w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse shrink-0' />
                <span className='text-white text-xs sm:text-sm font-medium'>
                  Available for new projects
                </span>
              </div>
              <p className='text-xs text-gray-500 uppercase tracking-widest'>
                Based in Lagos, Nigeria • Working Worldwide
              </p>
            </div>
          </div>

          {/* Cell 2: Numbered Editorial Navigation */}
          <div className='lg:col-span-3 py-12 lg:px-10 space-y-5'>
            <h4 className='text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold'>
              Index
            </h4>
            <ul className='space-y-3.5'>
              {quickLinks.map((link) => (
                <li key={link.num}>
                  <Link
                    href={link.href}
                    className='group flex items-center justify-between text-gray-300 hover:text-white transition-colors py-0.5'
                  >
                    <span className='flex items-center gap-3'>
                      <span className='text-xs font-mono text-primary'>{link.num}</span>
                      <span className='text-base font-medium group-hover:translate-x-1.5 transition-transform duration-300'>
                        {link.name}
                      </span>
                    </span>
                    <FaArrowRight className='w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary' />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cell 3: Capabilities */}
          <div className='lg:col-span-3 py-12 lg:px-10 space-y-5'>
            <h4 className='text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold'>
              Capabilities
            </h4>
            <ul className='space-y-3.5'>
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className='text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base block'
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cell 4: Direct Contact & Socials */}
          <div className='lg:col-span-2 py-12 lg:pl-8 flex flex-col justify-between space-y-8'>
            <div className='space-y-4'>
              <h4 className='text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold'>
                Direct
              </h4>
              <div className='space-y-2.5 text-sm'>
                <Link
                  href='mailto:nomolos2019@gmail.com'
                  className='text-white hover:text-primary transition-colors flex items-center gap-1.5 break-all font-medium'
                >
                  Email Me <FaArrowUpRightFromSquare className='w-3 h-3 shrink-0' />
                </Link>
                <Link
                  href='https://wa.me/+2348101123098'
                  target='_blank'
                  className='text-white hover:text-[#f835a7] transition-colors flex items-center gap-1.5 font-medium'
                >
                  WhatsApp <FaArrowUpRightFromSquare className='w-3 h-3 shrink-0' />
                </Link>
              </div>
            </div>

            <div className='space-y-3'>
              <p className='text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold'>
                Socials
              </p>
              <div className='flex flex-wrap items-center gap-2.5'>
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.url}
                    target={social.url.startsWith('http') ? '_blank' : undefined}
                    rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={social.name}
                  >
                    <div className='h-10 w-10 text-white border border-white/40 bg-black cursor-pointer flex items-center justify-center text-sm rounded-full hover:scale-110 hover:bg-white hover:text-black hover:border-white transition-all duration-300'>
                      {social.icon}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metadata Row */}
        <div className='py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-gray-500'>
          <p>© {currentYear} Sunday Solomon (Solomon Nurudeen). All rights reserved.</p>
          <div className='flex items-center gap-x-2'>
            <span className='h-5 w-5 rounded-full border border-white/30 inline-block' />
            <span className='font-[family-name:var(--font-italianno)] text-2xl text-gray-300 border border-white/30 px-4 rounded-full'>
              Sunday Solomon
            </span>
          </div>
        </div>
      </div>

      {/* ── PART 3: Monumental Etched "NOMOLOS" Wordmark with Monochrome Torch Reveal ── */}
      <div
        onMouseMove={handleWordmarkMouseMove}
        onMouseEnter={() => setIsHoveringWordmark(true)}
        onMouseLeave={() => setIsHoveringWordmark(false)}
        className='relative z-10 w-full overflow-hidden select-none pt-2 flex justify-center items-end'
      >
        <div className='relative flex justify-center items-end w-full'>
          {/* Base Layer: Matte Brushed-Metal Monumental Wordmark */}
          <p
            aria-hidden='true'
            className='text-[19vw] leading-[0.78] tracking-tight uppercase font-[family-name:var(--font-rubikMaze)] bg-gradient-to-b from-white/[0.14] via-white/[0.05] to-transparent bg-clip-text text-transparent whitespace-nowrap -mb-[2.2vw]'
            style={{
              WebkitTextStroke: '1px rgba(255, 255, 255, 0.06)',
            }}
          >
            NOMOLOS
          </p>

          {/* Interactive Torch Layer: Crisp Platinum Specular Reveal Masked to Cursor Position */}
          <p
            aria-hidden='true'
            className='pointer-events-none absolute inset-0 flex justify-center items-end text-[19vw] leading-[0.78] tracking-tight uppercase font-[family-name:var(--font-rubikMaze)] bg-gradient-to-b from-white/75 via-white/35 to-transparent bg-clip-text text-transparent whitespace-nowrap -mb-[2.2vw] transition-opacity duration-500'
            style={{
              opacity: isHoveringWordmark ? 1 : 0,
              WebkitTextStroke: '1px rgba(255, 255, 255, 0.38)',
              maskImage: `radial-gradient(340px circle at ${spotPos.x}% ${spotPos.y}%, black 0%, rgba(0,0,0,0.4) 45%, transparent 100%)`,
              WebkitMaskImage: `radial-gradient(340px circle at ${spotPos.x}% ${spotPos.y}%, black 0%, rgba(0,0,0,0.4) 45%, transparent 100%)`,
            }}
          >
            NOMOLOS
          </p>

          {/* Bottom Vignette Fade into #050507 so the base dissolves cleanly */}
          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 bottom-0 h-10 sm:h-16 bg-gradient-to-t from-[#050507] via-[#050507]/70 to-transparent'
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
