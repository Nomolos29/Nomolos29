import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/nomolos29',
      icon: <FaGithub className="w-5 h-5" />,
      color: 'hover:text-gray-900'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/solomonnurudeen',
      icon: <FaLinkedin className="w-5 h-5" />,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/nomolos29',
      icon: <FaTwitter className="w-5 h-5" />,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/nomolos29',
      icon: <FaInstagram className="w-5 h-5" />,
      color: 'hover:text-pink-500'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Web Development', href: '#' },
    { name: 'SaaS Development', href: '#' },
    { name: 'API Development', href: '#' },
    { name: 'Consultation', href: '#' }
  ];

  // const resources = [
  //   { name: 'Blog', href: '#' },
  //   { name: 'Case Studies', href: '#' },
  //   { name: 'Tech Stack', href: '#' },
  //   { name: 'Process', href: '#' }
  // ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold">Solomon</h3>
              <p className="text-blue-400 font-medium">Full-Stack Developer</p>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Building exceptional digital experiences with modern technologies.
              Specializing in React, Next.js, and scalable web applications.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-colors duration-200`}
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaEnvelope className="w-4 h-4 text-blue-400" />
                <Link
                  href="mailto:solomon@nomolos.dev"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  solomon@nomolos.dev
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="w-4 h-4 text-blue-400" />
                <Link
                  href="tel:+2348123456789"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  +234 (0) 812 345 6789
                </Link>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-4 h-4 text-blue-400 mt-0.5">📍</span>
                <span className="text-gray-400">
                  Lagos, Nigeria
                </span>
              </div>
            </div>

            {/* Availability Status */}
            <div className="mt-6 p-3 bg-green-900/30 border border-green-700/50 rounded-lg">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-green-400 text-sm font-medium">Available for new projects</span>
              </div>
            </div>
          </div>

        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 pt-12 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-6">
              Get notified about new projects, blog posts, and development insights.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 font-semibold rounded-lg transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} Solomon Nurudeen. All rights reserved.
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white transition-colors duration-200">
                Sitemap
              </Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;