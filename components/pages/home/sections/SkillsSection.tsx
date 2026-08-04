import React from 'react';
import SectionHeading from '../../../utility/SectionHeading';
import { Tools } from '../utils';

const SkillsSection = () => {
  const skillCategories = [
    {
      category: 'Frontend Development',
      skills: [
        { name: 'React/Next.js', level: 95, icon: '⚛️' },
        { name: 'TypeScript', level: 90, icon: '🏷️' },
        { name: 'Tailwind CSS', level: 95, icon: '🎨' },
        { name: 'HTML5/CSS3', level: 95, icon: '📝' },
      ],
    },
    {
      category: 'Backend & Tools',
      skills: [
        { name: 'Node.js', level: 85, icon: '⚡' },
        { name: 'Git/GitHub', level: 90, icon: '🐙' },
        { name: 'APIs/REST', level: 85, icon: '🔌' },
        { name: 'Database Design', level: 80, icon: '🗄️' },
      ],
    },
    {
      category: 'Design & UX',
      skills: [
        { name: 'Responsive Design', level: 95, icon: '📱' },
        { name: 'User Experience', level: 90, icon: '👥' },
        { name: 'Performance Optimization', level: 90, icon: '🚀' },
        { name: 'SEO Optimization', level: 85, icon: '🔍' },
      ],
    },
  ];

  // const certifications = [
  //   { name: 'Web3Bridge Graduate', issuer: 'Web3Bridge Africa', year: '2023', badge: '🎓' },
  //   { name: 'React Development', issuer: 'Self-Directed Learning', year: '2022', badge: '⚛️' },
  //   { name: 'Next.js Expert', issuer: 'Professional Projects', year: '2023', badge: '▲' },
  // ];

  return (
    <section id='skills' className='w-full pb-20 px-4 bg-background'>
      <div className='max-w-6xl mx-auto'>
        <SectionHeading
          badge='Skills & Expertise'
          title='Technologies I master for exceptional results'
          subtitle='From modern frameworks to performance optimization, I stay current with the latest tools and best practices to deliver cutting-edge solutions.'
          size='md'
          className='mb-16'
        />

        {/* Skills Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16'>
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className='bg-card border border-border rounded-2xl p-6 shadow-sm'>
              <h3 className='text-xl font-semibold text-foreground mb-6 text-center'>{category.category}</h3>
              <div className='space-y-4'>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className='space-y-2'>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-2'>
                        <span className='text-lg'>{skill.icon}</span>
                        <span className='font-medium text-foreground'>{skill.name}</span>
                      </div>
                      <span className='text-sm font-medium text-primary'>{skill.level}%</span>
                    </div>
                    <div className='w-full bg-muted rounded-full h-2'>
                      <div
                        className='bg-gradient-to-r from-primary to-primary/70 h-2 rounded-full transition-all duration-700 ease-out'
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Tools />

        {/* Certifications */}
        {/* <div className='bg-primary/5 border border-primary/20 rounded-2xl p-8'>
          <h3 className='text-2xl font-semibold text-foreground mb-8 text-center'>Education & Certifications</h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {certifications.map((cert, index) => (
              <div key={index} className='bg-card border border-border rounded-xl p-6 text-center shadow-sm'>
                <div className='text-3xl mb-3'>{cert.badge}</div>
                <h4 className='font-semibold text-foreground mb-2'>{cert.name}</h4>
                <p className='text-muted-foreground text-sm mb-1'>{cert.issuer}</p>
                <p className='text-primary font-medium text-sm'>{cert.year}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* CTA */}
        <div className='mt-16 text-center'>
          <h3 className='text-2xl font-semibold text-foreground mb-4'>Ready to bring your vision to life?</h3>
          <p className='text-lg text-muted-foreground mb-8 max-w-2xl mx-auto'>
            Let&apos;s discuss how these skills can help scale your business and create exceptional user experiences.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a href='#projects' className='px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-colors'>
              View My Projects
            </a>
            <a href='#contact' className='px-8 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary/10 transition-colors'>
              Let&apos;s Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
