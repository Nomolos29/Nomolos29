import React from 'react';
import SectionHeading from '../../../utility/SectionHeading';
import Link from 'next/link';
import Image from 'next/image';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Acedboard Platform',
      description: 'Modern project management SaaS with real-time collaboration, customizable workflows, and advanced analytics. Built with Next.js and TypeScript.',
      image: '/homepage/acedboardShowcase.png',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      category: 'SaaS Platform',
      status: 'Live',
      link: 'https://www.acedboard.com/',
      github: '#',
      features: ['Real-time collaboration', 'Advanced project analytics', 'Customizable workflows', 'Team management'],
    },
    {
      id: 2,
      title: 'Web3Bridge Learning Portal',
      description: 'Educational platform for blockchain development training with interactive courses, progress tracking, and community features.',
      image: null,
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      category: 'Education Platform',
      status: 'In Development',
      link: '#',
      github: '#',
      features: ['Interactive blockchain courses', 'Progress tracking system', 'Community forums', 'Live coding sessions'],
    },
    {
      id: 3,
      title: 'WC Digital Portfolio',
      description: 'High-converting agency website with modern animations, case studies showcase, and lead generation optimization.',
      image: null,
      technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
      category: 'Business Website',
      status: 'Live',
      link: 'https://wcdigitalagency.com/',
      github: '#',
      features: ['Animated interactions', 'Case studies showcase', 'Lead capture forms', 'Performance optimized'],
    },
    {
      id: 4,
      title: 'KBM Property Dashboard',
      description: 'Real estate management dashboard with property listings, client portal, and investment analytics for property management.',
      image: null,
      technologies: ['React', 'Chart.js', 'Firebase', 'Tailwind CSS'],
      category: 'Dashboard',
      status: 'Live',
      link: '#',
      github: '#',
      features: ['Property management', 'Investment analytics', 'Client portal', 'Document management'],
    },
  ];

  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  const ProjectImagePlaceholder = ({ title }: { title: string }) => (
    <div className='w-full h-full min-h-[192px] bg-muted flex items-center justify-center rounded-t-2xl'>
      <span className='text-muted-foreground text-sm font-medium'>{title}</span>
    </div>
  );

  return (
    <section id='projects' className='w-full py-20 px-4 bg-muted/30'>
      <div className='max-w-6xl mx-auto'>
        <SectionHeading
          badge='Featured Projects'
          title='Crafting digital solutions that drive results'
          subtitle='Each project represents a unique challenge solved with modern technology, thoughtful design, and a focus on user experience and business outcomes.'
          size='md'
          className='mb-16'
        />

        {/* Featured Project */}
        <div className='bg-card border border-border rounded-2xl overflow-hidden shadow-lg mb-16'>
          <div className='md:flex'>
            <div className='md:w-1/2 relative min-h-[256px]'>
              {featuredProject.image ? (
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  fill
                  className='object-cover'
                />
              ) : (
                <ProjectImagePlaceholder title={featuredProject.title} />
              )}
            </div>
            <div className='md:w-1/2 p-8 lg:p-12'>
              <div className='flex items-center gap-3 mb-4'>
                <span className='px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full'>Featured</span>
                <span className='px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 text-sm font-medium rounded-full'>
                  {featuredProject.status}
                </span>
              </div>

              <h3 className='text-2xl lg:text-3xl font-bold text-foreground mb-3'>{featuredProject.title}</h3>
              <p className='text-muted-foreground mb-6 leading-relaxed'>{featuredProject.description}</p>

              <div className='mb-6'>
                <h4 className='font-semibold text-foreground mb-3'>Key Features:</h4>
                <ul className='grid grid-cols-2 gap-2'>
                  {featuredProject.features.map((feature, index) => (
                    <li key={index} className='flex items-center text-sm text-muted-foreground'>
                      <span className='w-2 h-2 bg-primary rounded-full mr-2 shrink-0'></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className='flex flex-wrap gap-2 mb-6'>
                {featuredProject.technologies.map((tech, index) => (
                  <span key={index} className='px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full border border-border'>
                    {tech}
                  </span>
                ))}
              </div>

              <div className='flex gap-4'>
                <Link href={featuredProject.link} target='_blank' rel='noopener noreferrer'>
                  <button className='px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors'>
                    View Live Site
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {otherProjects.map((project) => (
            <div key={project.id} className='bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300'>
              <div className='relative h-48'>
                {project.image ? (
                  <Image src={project.image} alt={project.title} fill className='object-cover' />
                ) : (
                  <ProjectImagePlaceholder title={project.title} />
                )}
              </div>
              <div className='p-6'>
                <div className='flex items-center justify-between mb-3'>
                  <span className='px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full border border-border'>
                    {project.category}
                  </span>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    project.status === 'Live'
                      ? 'bg-green-500/10 text-green-600 dark:text-green-400'
                      : 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <h3 className='text-xl font-bold text-foreground mb-2'>{project.title}</h3>
                <p className='text-muted-foreground text-sm mb-4 leading-relaxed'>{project.description}</p>

                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className='px-2 py-1 bg-muted text-muted-foreground text-xs rounded border border-border'>
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className='px-2 py-1 bg-muted text-muted-foreground text-xs rounded border border-border'>
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className='flex gap-3'>
                  {project.link !== '#' ? (
                    <Link href={project.link} target='_blank' rel='noopener noreferrer' className='flex-1'>
                      <button className='w-full py-2 px-4 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors'>
                        View Project
                      </button>
                    </Link>
                  ) : (
                    <button className='flex-1 py-2 px-4 bg-muted text-muted-foreground text-sm font-medium rounded-lg cursor-not-allowed border border-border'>
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className='mt-16'>
          <div className='bg-primary rounded-2xl p-8 md:p-12 text-primary-foreground text-center'>
            <h3 className='text-2xl md:text-3xl font-bold mb-4'>Ready to start your next project?</h3>
            <p className='text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto'>
              Let&apos;s collaborate to bring your vision to life with modern technology and exceptional design.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a href='#contact' className='px-8 py-3 bg-background text-foreground font-semibold rounded-full hover:bg-background/90 transition-colors'>
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
