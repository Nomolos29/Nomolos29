"use client"

import React, { useEffect, useRef, useState } from 'react';
import { PortfolioCard, Tools } from '../utils';
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiNodedotjs,
  SiGit,
  SiSolidity,
  SiFigma,
  SiWordpress,
} from 'react-icons/si';
import { FaBolt, FaMobileScreenButton, FaMagnifyingGlassChart } from 'react-icons/fa6';

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      category: 'Frontend Engineering',
      badge: 'Core Stack',
      skills: [
        { name: 'React & Next.js', level: 95, tag: 'Expert', icon: <SiNextdotjs className='w-5 h-5 text-primary' /> },
        { name: 'TypeScript / ES6+', level: 90, tag: 'Advanced', icon: <SiTypescript className='w-5 h-5 text-[#3178C6]' /> },
        { name: 'Tailwind CSS', level: 95, tag: 'Expert', icon: <SiTailwindcss className='w-5 h-5 text-[#06B6D4]' /> },
        { name: 'Semantic HTML5 & CSS3', level: 95, tag: 'Expert', icon: <SiHtml5 className='w-5 h-5 text-[#E34F26]' /> },
      ],
    },
    {
      category: 'Backend, Web3 & Tooling',
      badge: 'Architecture',
      skills: [
        { name: 'Node.js & REST APIs', level: 85, tag: 'Production', icon: <SiNodedotjs className='w-5 h-5 text-[#339933]' /> },
        { name: 'Git & CI/CD Workflows', level: 92, tag: 'Expert', icon: <SiGit className='w-5 h-5 text-[#F05032]' /> },
        { name: 'Solidity & Web3 dApps', level: 82, tag: 'Production', icon: <SiSolidity className='w-5 h-5 text-[#627EEA]' /> },
        { name: 'WordPress, Divi & Elementor', level: 92, tag: 'Expert', icon: <SiWordpress className='w-5 h-5 text-[#21759B]' /> },
      ],
    },
    {
      category: 'Design, UX & Performance',
      badge: 'User Experience',
      skills: [
        { name: 'Responsive & Mobile-First UI', level: 96, tag: 'Expert', icon: <FaMobileScreenButton className='w-5 h-5 text-primary' /> },
        { name: 'Figma UI/UX Prototyping', level: 90, tag: 'Advanced', icon: <SiFigma className='w-5 h-5 text-[#F24E1E]' /> },
        { name: 'Core Web Vitals & Speed', level: 92, tag: 'Expert', icon: <FaBolt className='w-5 h-5 text-amber-500' /> },
        { name: 'Technical SEO Optimization', level: 88, tag: 'Advanced', icon: <FaMagnifyingGlassChart className='w-5 h-5 text-emerald-500' /> },
      ],
    },
  ];

  return (
    <section
      id='skills'
      ref={sectionRef}
      className='w-full py-16 md:pt-24 px-4 md:px-8 lg:px-10 xl:px-14 bg-background'
    >
      <div className='max-w-6xl mx-auto'>
        <div className='flex flex-col items-center text-center mb-12'>
          <PortfolioCard
            preHeading='Skills & Expertise'
            headingText='Tech Stack'
            subheadingText='Engineered for Scale'
            textColor='adaptive'
          />
          <p className='text-base sm:text-lg text-muted-foreground max-w-2xl'>
            From modern React & Next.js architectures to Web3 smart contracts and high-converting CMS platforms, I combine clean engineering with sharp visual design.
          </p>
        </div>

        {/* Skills Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-40'>
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              style={{ transitionDelay: `${categoryIndex * 120}ms` }}
              className={`bg-card border border-border rounded-3xl p-7 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className='flex items-center justify-between mb-6 pb-4 border-b border-border'>
                <h3 className='text-xl font-semibold text-foreground'>{category.category}</h3>
                <span className='text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary'>
                  {category.badge}
                </span>
              </div>

              <div className='space-y-5'>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className='space-y-2'>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-2.5'>
                        <span className='p-2 rounded-xl bg-muted flex items-center justify-center'>
                          {skill.icon}
                        </span>
                        <span className='font-medium text-sm sm:text-base text-foreground'>
                          {skill.name}
                        </span>
                      </div>
                      <div className='flex items-center gap-2'>
                        <span className='text-[11px] font-medium px-2 py-0.5 rounded-md bg-muted text-muted-foreground'>
                          {skill.tag}
                        </span>
                        <span className='text-sm font-semibold text-primary'>
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                    <div className='w-full bg-muted rounded-full h-2 overflow-hidden'>
                      <div
                        className='bg-gradient-to-r from-primary via-[#4da3ff] to-[#f835a7] h-2 rounded-full transition-all duration-1000 ease-out'
                        style={{
                          width: inView ? `${skill.level}%` : '0%',
                          transitionDelay: `${categoryIndex * 150 + skillIndex * 100}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Infinite Dual-Row Stack Marquee */}
        <Tools />
      </div>
    </section>
  );
};

export default SkillsSection;
