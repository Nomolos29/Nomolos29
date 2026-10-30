'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaEnvelope, FaWhatsapp, FaLocationDot, FaXTwitter, FaArrowRight } from 'react-icons/fa6';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    budget: '',
    message: '',
    timeline: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setIsSubmitting(false);
    setSubmitted(true);

    // Also construct mailto so the user can send immediately via their mail client if desired
    const subject = encodeURIComponent(
      `Project Inquiry: ${formData.project || 'New Project'} — ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${
        formData.company || 'N/A'
      }\nProject Type: ${formData.project}\nBudget: ${
        formData.budget || 'Flexible'
      }\nTimeline: ${formData.timeline || 'Flexible'}\n\nProject Details:\n${formData.message}`
    );
    window.open(`mailto:nomolos2019@gmail.com?subject=${subject}&body=${body}`, '_self');

    setFormData({
      name: '',
      email: '',
      company: '',
      project: '',
      budget: '',
      message: '',
      timeline: '',
    });
    setTimeout(() => setSubmitted(false), 7000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className='w-5 h-5 text-primary' />,
      label: 'Email',
      value: 'nomolos2019@gmail.com',
      link: 'mailto:nomolos2019@gmail.com',
    },
    {
      icon: <FaWhatsapp className='w-5 h-5 text-emerald-500' />,
      label: 'WhatsApp',
      value: '+234 810 112 3098',
      link: 'https://wa.me/+2348101123098',
    },
    {
      icon: <FaXTwitter className='w-5 h-5 text-foreground' />,
      label: 'X (Twitter)',
      value: '@Nomoreloss29',
      link: 'https://x.com/Nomoreloss29',
    },
    {
      icon: <FaLocationDot className='w-5 h-5 text-[#f835a7]' />,
      label: 'Location',
      value: 'Lagos, Nigeria (Remote Worldwide)',
      link: '#contact',
    },
  ];

  const budgetRanges = [
    '$1,000 - $3,000',
    '$3,000 - $7,500',
    '$7,500 - $15,000',
    '$15,000+',
    "Let's discuss",
  ];
  const projectTypes = [
    'Web Application (React / Next.js)',
    'E-Commerce Storefront',
    'SaaS Product / Dashboard',
    'WordPress / CMS Website',
    'Web3 / dApp Integration',
    'UI/UX Redesign & Performance Audit',
    'Other',
  ];

  const inputClass =
    'w-full px-4 py-3.5 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all';

  return (
    <section id='contact' className='w-full py-16 md:py-24 px-4 md:px-8 lg:px-10 xl:px-14 bg-background'>
      <div className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
          {/* Form */}
          <div className='lg:col-span-2'>
            <div className='bg-card border border-border rounded-3xl p-7 md:p-10 shadow-xl'>
              <h2 className='text-2xl sm:text-3xl font-bold text-foreground mb-2'>
                Tell me about your project
              </h2>
              <p className='text-muted-foreground text-sm sm:text-base mb-8'>
                Fill out the brief below and I&apos;ll get back to you within a few hours with next steps.
              </p>

              {submitted && (
                <div className='mb-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-600 dark:text-emerald-400 text-sm font-medium'>
                  ✅ Your project brief is ready! Your email client has been opened, or you can message me directly on WhatsApp anytime.
                </div>
              )}

              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label htmlFor='name' className='block text-sm font-medium text-foreground mb-2'>
                      Full Name *
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className={inputClass}
                      placeholder='John Doe'
                    />
                  </div>
                  <div>
                    <label htmlFor='email' className='block text-sm font-medium text-foreground mb-2'>
                      Email Address *
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className={inputClass}
                      placeholder='john@company.com'
                    />
                  </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label htmlFor='company' className='block text-sm font-medium text-foreground mb-2'>
                      Company / Organization
                    </label>
                    <input
                      type='text'
                      id='company'
                      name='company'
                      value={formData.company}
                      onChange={handleInputChange}
                      className={inputClass}
                      placeholder='Acme Inc.'
                    />
                  </div>
                  <div>
                    <label htmlFor='project' className='block text-sm font-medium text-foreground mb-2'>
                      Project Type *
                    </label>
                    <select
                      id='project'
                      name='project'
                      required
                      value={formData.project}
                      onChange={handleInputChange}
                      className={inputClass}
                    >
                      <option value=''>Select project type</option>
                      {projectTypes.map((type, i) => (
                        <option key={i} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label htmlFor='budget' className='block text-sm font-medium text-foreground mb-2'>
                      Estimated Budget
                    </label>
                    <select
                      id='budget'
                      name='budget'
                      value={formData.budget}
                      onChange={handleInputChange}
                      className={inputClass}
                    >
                      <option value=''>Select budget range</option>
                      {budgetRanges.map((range, i) => (
                        <option key={i} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor='timeline' className='block text-sm font-medium text-foreground mb-2'>
                      Target Timeline
                    </label>
                    <input
                      type='text'
                      id='timeline'
                      name='timeline'
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className={inputClass}
                      placeholder='e.g., 4–6 weeks'
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor='message' className='block text-sm font-medium text-foreground mb-2'>
                    Project Description *
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`${inputClass} resize-none`}
                    placeholder='Tell me about your goals, target audience, and key features...'
                  />
                </div>

                <div className='flex flex-wrap items-center gap-4'>
                  <button
                    type='submit'
                    disabled={isSubmitting}
                    className='group inline-flex items-center gap-3 px-8 py-3.5 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-all disabled:opacity-50 cursor-pointer shadow-lg'
                  >
                    {isSubmitting ? 'Preparing Brief...' : 'Send Message'}
                    <FaArrowRight className='transition-transform group-hover:translate-x-1' />
                  </button>

                  <Link
                    href='https://wa.me/+2348101123098'
                    target='_blank'
                    className='inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border text-foreground hover:border-emerald-500 hover:text-emerald-500 font-medium text-sm transition-colors'
                  >
                    <FaWhatsapp className='w-4 h-4 text-emerald-500' /> Chat on WhatsApp Instead
                  </Link>
                </div>
              </form>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className='space-y-6'>
            {/* Availability Card */}
            <div className='bg-card border border-border rounded-3xl p-7 shadow-lg'>
              <div className='flex items-center justify-between mb-3'>
                <h3 className='text-lg font-semibold text-foreground'>Availability</h3>
                <span className='inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold rounded-full'>
                  <span className='w-2 h-2 rounded-full bg-emerald-500 animate-pulse' />
                  Open for 2026
                </span>
              </div>
              <p className='text-muted-foreground text-sm leading-relaxed'>
                Currently accepting new frontend, full-stack, and CMS projects, as well as remote contract roles.
              </p>
            </div>

            {/* Direct Channels */}
            <div className='bg-card border border-border rounded-3xl p-7 shadow-lg space-y-5'>
              <h3 className='text-lg font-semibold text-foreground'>Direct Channels</h3>
              <div className='space-y-4'>
                {contactInfo.map((info, idx) => (
                  <Link
                    key={idx}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    className='flex items-center gap-3.5 p-3 rounded-2xl bg-muted/60 hover:bg-muted border border-transparent hover:border-border transition-all'
                  >
                    <div className='w-10 h-10 rounded-xl bg-card flex items-center justify-center shadow-sm shrink-0'>
                      {info.icon}
                    </div>
                    <div className='overflow-hidden'>
                      <p className='text-xs text-muted-foreground'>{info.label}</p>
                      <p className='text-sm font-medium text-foreground truncate'>{info.value}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
