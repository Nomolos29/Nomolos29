"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaWhatsapp,
  FaEnvelope,
  FaArrowRight,
} from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

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
    { name: 'Home', href: '/' },
    { name: 'About Me', href: '/about-me' },
    { name: 'Projects', href: '/projects' },
    { name: 'Tech Stack', href: '/#skills' },
    { name: 'Contact Me', href: '/contacts' },
  ];

  const services = [
    { name: 'Frontend Engineering (React & Next.js)', href: '/contacts' },
    { name: 'SaaS & Dashboard Interfaces', href: '/projects' },
    { name: 'E-Commerce & CMS Platforms', href: '/projects' },
    { name: 'Web3 & Smart Contract UI', href: '/contacts' },
    { name: 'Performance & SEO Optimization', href: '/contacts' },
  ];

  return (
    <footer className='relative w-full bg-gradient-to-b from-gray-900 via-[#070709] to-black text-gray-400 pt-20 overflow-hidden font-[family-name:var(--font-poppins)] border-t border-white/10'>
      <div className='max-w-[1440px] mx-auto px-5 md:px-8 lg:px-10 xl:px-14 relative z-10'>
        {/* Top Editorial CTA + Newsletter Split */}
        <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 pb-16 border-b border-white/15'>
          <div className='max-w-xl space-y-4'>
            {/* Signature BubbleTag Motif */}
            <div className='flex items-center gap-x-1.5'>
              <div className='h-7 w-7 rounded-full border border-white bg-transparent' />
              <p className='border border-white px-5 h-7 flex items-center justify-center text-sm italic rounded-full text-white'>
                Ready When You Are
              </p>
            </div>
            <h2 className='text-4xl sm:text-5xl md:text-6xl text-white leading-tight'>
              Let&apos;s Build Something <span className='text-[#f835a7]'>Remarkable</span>{' '}
              <span className='text-primary'>Together</span>.
            </h2>
          </div>

          {/* Right Nested Card Newsletter Box (Matches Accordion / Partner Card Style) */}
          <div className='w-full lg:w-[460px] bg-white text-gray-900 rounded-2xl shadow-[10px_10px_20px_rgba(252,249,249,0.08)] rotate-1 hover:rotate-0 transition-transform duration-500'>
            <div className='flex justify-between items-center px-5 py-3 border-b border-gray-200'>
              <p className='text-xs uppercase tracking-wider font-semibold text-gray-600'>
                Stay Updated
              </p>
              <span className='font-[family-name:var(--font-italianno)] text-2xl text-gray-900'>
                Sunday Solomon
              </span>
            </div>
            <div className='p-3'>
              <div className='bg-gray-900 text-white p-5 rounded-2xl space-y-4'>
                <p className='text-sm text-gray-300 leading-relaxed'>
                  Get notified when I ship new projects, case studies, and frontend engineering insights.
                </p>
                {subscribed ? (
                  <div className='py-3 px-4 rounded-full bg-white text-black text-sm font-medium text-center'>
                    ✓ Subscribed! Thanks for joining.
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className='flex flex-col sm:flex-row gap-2.5'>
                    <input
                      type='email'
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder='Enter your email'
                      className='flex-1 px-5 py-3 bg-black/60 border border-white/30 rounded-full text-white placeholder:text-gray-400 focus:border-white outline-none text-sm'
                    />
                    <button
                      type='submit'
                      className='inline-flex items-center justify-center gap-x-2 px-6 py-3 bg-white text-black hover:bg-primary hover:text-white font-medium rounded-full transition-colors text-sm whitespace-nowrap cursor-pointer'
                    >
                      Subscribe <FaArrowRight />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Middle 4-Column Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-16'>
          {/* Column 1: Brand + Social Arc Icons */}
          <div className='lg:col-span-4 space-y-6'>
            <div>
              <Link
                href='/'
                className='text-3xl font-bold text-white uppercase font-[family-name:var(--font-rubikMaze)]'
              >
                Nomolos<span className='text-primary ml-1'>.</span>
              </Link>
              <p className='text-gray-300 text-sm mt-3 leading-relaxed max-w-sm'>
                I build fast, scalable, and accessible web applications with a strong focus on performance, maintainability, and exceptional user experience.
              </p>
            </div>

            <div>
              <p className='uppercase text-xs tracking-widest text-white mb-4'>Find me on:</p>
              <div className='flex items-center gap-3'>
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.url}
                    target={social.url.startsWith('http') ? '_blank' : undefined}
                    rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={social.name}
                  >
                    <div className='h-[44px] w-[44px] text-white border border-white bg-black/60 cursor-pointer flex items-center justify-center text-base rounded-full hover:scale-110 hover:bg-white hover:text-black transition-all duration-300'>
                      {social.icon}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className='lg:col-span-2 space-y-4'>
            <h4 className='text-sm uppercase tracking-widest text-white font-semibold'>
              Navigation
            </h4>
            <ul className='space-y-3'>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className='text-gray-400 hover:text-white transition-colors duration-200 text-sm inline-flex items-center gap-2 group'
                  >
                    <span className='h-1.5 w-1.5 rounded-full bg-white/40 group-hover:bg-primary transition-colors' />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Capabilities */}
          <div className='lg:col-span-3 space-y-4'>
            <h4 className='text-sm uppercase tracking-widest text-white font-semibold'>
              What I Build
            </h4>
            <ul className='space-y-3'>
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className='text-gray-400 hover:text-white transition-colors duration-200 text-sm'
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Direct Contact + Availability Pill */}
          <div className='lg:col-span-3 space-y-4'>
            <h4 className='text-sm uppercase tracking-widest text-white font-semibold'>
              Get in Touch
            </h4>
            <div className='space-y-3 text-sm'>
              <p>
                <Link
                  href='mailto:nomolos2019@gmail.com'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  nomolos2019@gmail.com
                </Link>
              </p>
              <p>
                <Link
                  href='https://wa.me/+2348101123098'
                  target='_blank'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  +234 810 112 3098
                </Link>
              </p>
              <p className='text-gray-400'>Lagos, Nigeria • Remote Worldwide</p>
            </div>

            <div className='pt-2'>
              <div className='inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/30 bg-white/5'>
                <span className='w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse shrink-0' />
                <span className='text-white text-xs font-medium'>
                  Available for new projects
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className='border-t border-white/10 pt-8 pb-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-gray-500'>
          <p>© {currentYear} Sunday Solomon (Solomon Nurudeen). All rights reserved.</p>
          <div className='flex items-center gap-x-2'>
            <span className='h-5 w-5 rounded-full border border-white/30 inline-block' />
            <span className='font-[family-name:var(--font-italianno)] text-2xl text-gray-300 border border-white/30 px-4 rounded-full'>
              Designed & Engineered by Nomolos
            </span>
          </div>
        </div>
      </div>

      {/* Giant Faint Monumental "NOMOLOS" Wordmark Across the Bottom */}
      <div className='w-full overflow-hidden select-none pointer-events-none flex justify-center items-end pt-2'>
        <p
          aria-hidden='true'
          className='text-[19vw] leading-[0.78] tracking-tight uppercase font-[family-name:var(--font-rubikMaze)] bg-gradient-to-b from-white/[0.14] via-white/[0.05] to-transparent bg-clip-text text-transparent whitespace-nowrap -mb-[2.2vw]'
        >
          NOMOLOS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
