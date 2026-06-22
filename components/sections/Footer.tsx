import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaXTwitter, FaWhatsapp, FaEnvelope } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Nomolos29/', icon: <FaGithub className='w-5 h-5' />, color: 'hover:text-foreground' },
    { name: 'LinkedIn', url: '#', icon: <FaLinkedin className='w-5 h-5' />, color: 'hover:text-primary' },
    { name: 'Twitter', url: 'https://x.com/Nomoreloss29', icon: <FaXTwitter className='w-5 h-5' />, color: 'hover:text-foreground' },
    { name: 'WhatsApp', url: 'https://wa.me/+2348101123098', icon: <FaWhatsapp className='w-5 h-5' />, color: 'hover:text-green-500' },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    { name: 'Web Development', href: '#' },
    { name: 'SaaS Development', href: '#' },
    { name: 'API Development', href: '#' },
    { name: 'Consultation', href: '#contact' },
  ];

  return (
    <footer className='bg-[#0d0d0d] text-gray-400'>
      <div className='max-w-6xl mx-auto px-4 py-16'>

        {/* Main grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>

          {/* Brand */}
          <div className='lg:col-span-1'>
            <div className='mb-4'>
              <h3 className='text-2xl font-bold text-white'>Nomolos<span className='text-primary'>.</span></h3>
              <p className='text-primary text-sm font-medium mt-1'>Front-End Developer</p>
            </div>
            <p className='text-gray-400 mb-6 leading-relaxed text-sm'>
              Building exceptional digital experiences with modern technologies.
              Specializing in React, Next.js, and scalable web applications.
            </p>
            <div className='flex gap-4'>
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`text-gray-500 ${social.color} transition-colors duration-200`}
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-base font-semibold text-white mb-5'>Quick Links</h4>
            <ul className='space-y-3'>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className='text-gray-400 hover:text-white transition-colors duration-200 text-sm'>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className='text-base font-semibold text-white mb-5'>Services</h4>
            <ul className='space-y-3'>
              {services.map((service, index) => (
                <li key={index}>
                  <Link href={service.href} className='text-gray-400 hover:text-white transition-colors duration-200 text-sm'>
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
                <FaEnvelope className='w-4 h-4 text-primary shrink-0' />
                <Link href='mailto:nomolos2019@gmail.com' className='text-gray-400 hover:text-white transition-colors duration-200 text-sm'>
                  nomolos2019@gmail.com
                </Link>
              </div>
              <div className='flex items-center gap-3'>
                <FaWhatsapp className='w-4 h-4 text-primary shrink-0' />
                <Link href='https://wa.me/+2348101123098' className='text-gray-400 hover:text-white transition-colors duration-200 text-sm'>
                  +234 810 112 3098
                </Link>
              </div>
              <div className='flex items-start gap-3'>
                <span className='text-primary mt-0.5 text-sm shrink-0'>📍</span>
                <span className='text-gray-400 text-sm'>Lagos, Nigeria</span>
              </div>
            </div>

            <div className='mt-6 p-3 bg-green-900/30 border border-green-700/40 rounded-lg'>
              <div className='flex items-center gap-2'>
                <span className='w-2 h-2 bg-green-400 rounded-full animate-pulse shrink-0'></span>
                <span className='text-green-400 text-sm font-medium'>Available for new projects</span>
              </div>
            </div>
          </div>

        </div>

        {/* Newsletter */}
        <div className='border-t border-gray-800 pt-12 mb-12'>
          <div className='max-w-2xl mx-auto text-center'>
            <h3 className='text-xl font-semibold text-white mb-3'>Stay Updated</h3>
            <p className='text-gray-400 text-sm mb-6'>
              Get notified about new projects and development insights.
            </p>
            <form className='flex flex-col sm:flex-row gap-3 max-w-md mx-auto'>
              <input
                type='email'
                placeholder='Enter your email'
                className='flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder:text-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm'
              />
              <button
                type='submit'
                className='px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors duration-200 text-sm whitespace-nowrap'
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className='border-t border-gray-800 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-gray-500 text-sm'>
              © {currentYear} Solomon Nurudeen. All rights reserved.
            </p>
            <div className='flex items-center gap-6 text-sm text-gray-500'>
              <Link href='#' className='hover:text-white transition-colors duration-200'>Privacy Policy</Link>
              <Link href='#' className='hover:text-white transition-colors duration-200'>Terms of Service</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
