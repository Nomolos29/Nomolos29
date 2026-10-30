"use client"

import React from 'react';
import LogoSlideshow from '../../../utility/LogoSlideshow';
import { companyShowcase } from '@/lib/data/links';

const AboutSection = () => {
  return (
    <section className='w-full py-12 md:py-20 px-5 md:px-8 lg:px-10 xl:px-14 bg-background'>
      <div className='max-w-[1440px] mx-auto'>
        <LogoSlideshow companies={companyShowcase} />
      </div>
    </section>
  );
};

export default AboutSection;
