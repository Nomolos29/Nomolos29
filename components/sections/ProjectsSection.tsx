import React from 'react';
import SectionHeading from '../utility/SectionHeading';
import Link from 'next/link';

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
      features: [
        'Real-time collaboration',
        'Advanced project analytics',
        'Customizable workflows',
        'Team management'
      ]
    },
    {
      id: 2,
      title: 'Web3Bridge Learning Portal',
      description: 'Educational platform for blockchain development training with interactive courses, progress tracking, and community features.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      category: 'Education Platform',
      status: 'In Development',
      link: '#',
      github: '#',
      features: [
        'Interactive blockchain courses',
        'Progress tracking system',
        'Community forums',
        'Live coding sessions'
      ]
    },
    {
      id: 3,
      title: 'WC Digital Portfolio',
      description: 'High-converting agency website with modern animations, case studies showcase, and lead generation optimization.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
      category: 'Business Website',
      status: 'Live',
      link: 'https://wcdigitalagency.com/',
      github: '#',
      features: [
        'Animated interactions',
        'Case studies showcase',
        'Lead capture forms',
        'Performance optimized'
      ]
    },
    {
      id: 4,
      title: 'KBM Property Dashboard',
      description: 'Real estate management dashboard with property listings, client portal, and investment analytics for property management.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Chart.js', 'Firebase', 'Tailwind CSS'],
      category: 'Dashboard',
      status: 'Live',
      link: '#',
      github: '#',
      features: [
        'Property management',
        'Investment analytics',
        'Client portal',
        'Document management'
      ]
    }
  ];

  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <section className="w-full py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        <SectionHeading
          badge="Featured Projects"
          title="Crafting digital solutions that drive results"
          subtitle="Each project represents a unique challenge solved with modern technology, thoughtful design, and a focus on user experience and business outcomes."
          size="md"
          className="mb-16"
        />

        {/* Featured Project */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-16">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={featuredProject.image}
                alt={featuredProject.title}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8 lg:p-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  Featured
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                  {featuredProject.status}
                </span>
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {featuredProject.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {featuredProject.description}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                <ul className="grid grid-cols-2 gap-2">
                  {featuredProject.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {featuredProject.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <Link href={featuredProject.link} target="_blank" rel="noopener noreferrer">
                  <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                    View Live Site
                  </button>
                </Link>
                {featuredProject.github !== '#' && (
                  <Link href={featuredProject.github} target="_blank" rel="noopener noreferrer">
                    <button className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                      View Code
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    project.status === 'Live'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex gap-3">
                  {project.link !== '#' && (
                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                      <button className="flex-1 py-2 px-4 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                        View Project
                      </button>
                    </Link>
                  )}
                  {project.github !== '#' && (
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <button className="flex-1 py-2 px-4 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
                        Code
                      </button>
                    </Link>
                  )}
                  {project.link === '#' && project.github === '#' && (
                    <button className="flex-1 py-2 px-4 bg-gray-100 text-gray-500 text-sm font-medium rounded-lg cursor-not-allowed">
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to start your next project?
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Let&apos;s collaborate to bring your vision to life with modern technology and exceptional design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-colors">
                Start a Project
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-colors">
                View All Projects
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;