"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaXTwitter, FaWhatsapp, FaEnvelope, FaLocationDot } from 'react-icons/fa6';

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
    { name: 'GitHub', url: 'https://github.com/Nomolos29/', icon: <FaGithub className='w-5 h-5' />, color: 'hover:text-white' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/nomolos29', icon: <FaLinkedin className='w-5 h-5' />, color: 'hover:text-[#4da3ff]' },
    { name: 'Twitter', url: 'https://x.com/Nomoreloss29', icon: <FaXTwitter className='w-5 h-5' />, color: 'hover:text-white' },
    { name: 'WhatsApp', url: 'https://wa.me/+2348101123098', icon: <FaWhatsapp className='w-5 h-5' />, color: 'hover:text-green-400' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Me', href: '/about-me' },
    { name: 'Projects', href: '/projects' },
    { name: 'Skills & Stack', href: '/#skills' },
    { name: 'Contact', href: '/contacts' },
  ];

  const services = [
    { name: 'Frontend Engineering (React / Next.js)', href: '/contacts' },
    { name: 'SaaS & Dashboard Development', href: '/projects' },
    { name: 'E-Commerce & CMS Solutions', href: '/projects' },
    { name: 'Web3 & Smart Contract Integration', href: '/contacts' },
    { name: 'Technical Consultation & Audits', href: '/contacts' },
  ];

  return (
    <footer className='bg-[#0a0a0f] text-gray-400 border-t border-white/10'>
      <div className='max-w-6xl mx-auto px-4 py-16'>
        {/* Main grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12'>
          {/* Brand */}
          <div className='lg:col-span-1'>
            <div className='mb-4'>
              <Link href='/' className='text-2xl font-bold text-white font-[family-name:var(--font-rubikMaze)]'>
                Nomolos<span className='text-primary'>.</span>
              </Link>
              <p className='text-[#4da3ff] text-sm font-medium mt-1'>
                Sunday Solomon • Software Engineer
              </p>
            </div>
            <p className='text-gray-400 mb-6 leading-relaxed text-sm'>
              Building fast, accessible, and conversion-focused digital experiences with React, Next.js, TypeScript, and modern web technologies.
            </p>
            <div className='flex gap-3'>
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 ${social.color} hover:border-white/30 hover:-translate-y-0.5 transition-all duration-200`}
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-base font-semibold text-white mb-5'>Navigation</h4>
            <ul className='space-y-3'>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className='text-gray-400 hover:text-white transition-colors duration-200 text-sm inline-flex items-center gap-1.5 group'
                  >
                    <span className='w-1.5 h-1.5 rounded-full bg-primary/60 group-hover:bg-primary transition-colors' />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className='text-base font-semibold text-white mb-5'>Capabilities</h4>
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

          {/* Contact */}
          <div>
            <h4 className='text-base font-semibold text-white mb-5'>Get in Touch</h4>
            <div className='space-y-4'>
              <div className='flex items-center gap-3'>
                <FaEnvelope className='w-4 h-4 text-[#4da3ff] shrink-0' />
                <Link
                  href='mailto:nomolos2019@gmail.com'
                  className='text-gray-400 hover:text-white transition-colors duration-200 text-sm'
                >
                  nomolos2019@gmail.com
                </Link>
              </div>
              <div className='flex items-center gap-3'>
                <FaWhatsapp className='w-4 h-4 text-emerald-400 shrink-0' />
                <Link
                  href='https://wa.me/+2348101123098'
                  target='_blank'
                  className='text-gray-400 hover:text-white transition-colors duration-200 text-sm'
                >
                  +234 810 112 3098
                </Link>
              </div>
              <div className='flex items-start gap-3'>
                <FaLocationDot className='w-4 h-4 text-[#f835a7] mt-0.5 shrink-0' />
                <span className='text-gray-400 text-sm'>Lagos, Nigeria (Remote Worldwide)</span>
              </div>
            </div>

            <div className='mt-6 p-3.5 bg-emerald-950/40 border border-emerald-700/40 rounded-xl'>
              <div className='flex items-center gap-2.5'>
                <span className='w-2 h-2 bg-emerald-400 rounded-full animate-pulse shrink-0' />
                <span className='text-emerald-400 text-xs sm:text-sm font-medium'>
                  Available for new projects
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className='border-t border-white/10 pt-12 mb-12'>
          <div className='max-w-2xl mx-auto text-center'>
            <h3 className='text-xl font-semibold text-white mb-2'>Stay in the Loop</h3>
            <p className='text-gray-400 text-sm mb-6'>
              Get notified about new case studies, engineering insights, and product launches.
            </p>
            {subscribed ? (
              <div className='max-w-md mx-auto py-3 px-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-sm font-medium'>
                Thanks for subscribing! You&apos;re on the list.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className='flex flex-col sm:flex-row gap-3 max-w-md mx-auto'>
                <input
                  type='email'
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Enter your email'
                  className='flex-1 px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-white placeholder:text-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm'
                />
                <button
                  type='submit'
                  className='px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl transition-colors duration-200 text-sm whitespace-nowrap cursor-pointer'
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className='border-t border-white/10 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-gray-500 text-sm'>
              © {currentYear} Sunday Solomon (Solomon Nurudeen). All rights reserved.
            </p>
            <div className='flex items-center gap-6 text-sm text-gray-500'>
              <Link href='/about-me' className='hover:text-white transition-colors duration-200'>
                About
              </Link>
              <Link href='/projects' className='hover:text-white transition-colors duration-200'>
                Projects
              </Link>
              <Link href='/contacts' className='hover:text-white transition-colors duration-200'>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
