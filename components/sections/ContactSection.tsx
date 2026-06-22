'use client';

import React, { useState } from 'react';
import SectionHeading from '../utility/SectionHeading';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', project: '', budget: '', message: '', timeline: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setFormData({ name: '', email: '', company: '', project: '', budget: '', message: '', timeline: '' });
    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'nomolos2019@gmail.com', link: 'mailto:nomolos2019@gmail.com' },
    { icon: '💬', label: 'WhatsApp', value: '+234 810 112 3098', link: 'https://wa.me/+2348101123098' },
    { icon: '📍', label: 'Location', value: 'Lagos, Nigeria', link: '#' },
    { icon: '🐦', label: 'Twitter', value: '@Nomoreloss29', link: 'https://x.com/Nomoreloss29' },
  ];

  const budgetRanges = ['$5,000 - $10,000', '$10,000 - $25,000', '$25,000 - $50,000', '$50,000+', "Let's discuss"];
  const projectTypes = ['Web Application', 'E-commerce Platform', 'SaaS Product', 'Mobile App', 'API Development', 'Consultation', 'Other'];

  const inputClass = 'w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all';

  return (
    <section id='contact' className='w-full py-20 px-4 bg-muted/30'>
      <div className='max-w-6xl mx-auto'>
        <SectionHeading
          badge="Let's Work Together"
          title='Ready to bring your vision to life?'
          subtitle="Whether you're a startup looking to build your MVP or an established company wanting to scale, I'm here to help turn your ideas into exceptional digital experiences."
          size='md'
          className='mb-16'
        />

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>

          {/* Form */}
          <div className='lg:col-span-2'>
            <div className='bg-card border border-border rounded-2xl p-8 shadow-sm'>
              <h3 className='text-2xl font-semibold text-foreground mb-6'>Tell me about your project</h3>

              {submitted && (
                <div className='mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-600 dark:text-green-400 text-sm font-medium'>
                  ✅ Message sent! I&apos;ll get back to you within 24 hours.
                </div>
              )}

              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label htmlFor='name' className='block text-sm font-medium text-foreground mb-2'>Full Name *</label>
                    <input type='text' id='name' name='name' required value={formData.name} onChange={handleInputChange} className={inputClass} placeholder='John Doe' />
                  </div>
                  <div>
                    <label htmlFor='email' className='block text-sm font-medium text-foreground mb-2'>Email Address *</label>
                    <input type='email' id='email' name='email' required value={formData.email} onChange={handleInputChange} className={inputClass} placeholder='john@company.com' />
                  </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label htmlFor='company' className='block text-sm font-medium text-foreground mb-2'>Company/Organization</label>
                    <input type='text' id='company' name='company' value={formData.company} onChange={handleInputChange} className={inputClass} placeholder='Acme Inc.' />
                  </div>
                  <div>
                    <label htmlFor='project' className='block text-sm font-medium text-foreground mb-2'>Project Type *</label>
                    <select id='project' name='project' required value={formData.project} onChange={handleInputChange} className={inputClass}>
                      <option value=''>Select project type</option>
                      {projectTypes.map((type, i) => <option key={i} value={type}>{type}</option>)}
                    </select>
                  </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label htmlFor='budget' className='block text-sm font-medium text-foreground mb-2'>Project Budget</label>
                    <select id='budget' name='budget' value={formData.budget} onChange={handleInputChange} className={inputClass}>
                      <option value=''>Select budget range</option>
                      {budgetRanges.map((range, i) => <option key={i} value={range}>{range}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor='timeline' className='block text-sm font-medium text-foreground mb-2'>Timeline</label>
                    <input type='text' id='timeline' name='timeline' value={formData.timeline} onChange={handleInputChange} className={inputClass} placeholder='e.g., 2-3 months' />
                  </div>
                </div>

                <div>
                  <label htmlFor='message' className='block text-sm font-medium text-foreground mb-2'>Project Description *</label>
                  <textarea id='message' name='message' required rows={6} value={formData.message} onChange={handleInputChange} className={`${inputClass} resize-none`} placeholder='Tell me about your project goals, target audience, and any specific requirements...' />
                </div>

                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full md:w-auto px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className='space-y-6'>
            <div className='bg-card border border-border rounded-2xl p-6 shadow-sm'>
              <h3 className='text-xl font-semibold text-foreground mb-6'>Get in touch</h3>
              <div className='space-y-4'>
                {contactInfo.map((info, index) => (
                  <div key={index} className='flex items-center gap-4'>
                    <div className='w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-lg shrink-0'>
                      {info.icon}
                    </div>
                    <div>
                      <p className='text-sm text-muted-foreground'>{info.label}</p>
                      {info.link !== '#' ? (
                        <a href={info.link} className='font-medium text-foreground hover:text-primary transition-colors'>
                          {info.value}
                        </a>
                      ) : (
                        <p className='font-medium text-foreground'>{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className='bg-primary rounded-2xl p-6 text-primary-foreground'>
              <h3 className='text-xl font-semibold mb-4'>Quick Response</h3>
              <div className='space-y-3'>
                <div className='flex items-center gap-3'>
                  <span className='w-2 h-2 bg-green-400 rounded-full shrink-0'></span>
                  <span className='text-primary-foreground/80 text-sm'>Usually respond within 2–4 hours</span>
                </div>
                <div className='flex items-center gap-3'>
                  <span className='w-2 h-2 bg-yellow-400 rounded-full shrink-0'></span>
                  <span className='text-primary-foreground/80 text-sm'>Free consultation call within 48 hours</span>
                </div>
                <div className='flex items-center gap-3'>
                  <span className='w-2 h-2 bg-blue-300 rounded-full shrink-0'></span>
                  <span className='text-primary-foreground/80 text-sm'>Detailed proposal within 5–7 days</span>
                </div>
              </div>
            </div>

            <div className='bg-card border border-border rounded-2xl p-6 shadow-sm'>
              <div className='flex items-center justify-between mb-3'>
                <h3 className='text-lg font-semibold text-foreground'>Availability</h3>
                <span className='px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 text-sm font-medium rounded-full'>
                  Open
                </span>
              </div>
              <p className='text-muted-foreground text-sm leading-relaxed'>
                Currently accepting new projects for Q1 2025. Book a consultation to discuss your timeline.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
