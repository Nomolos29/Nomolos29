import React from 'react';
import SectionHeading from '../utility/SectionHeading';

const AboutSection = () => {
  const stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '15+', label: 'Projects Completed' },
    { number: '4', label: 'Industry Partners' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  const values = [
    {
      icon: '⚡',
      title: 'Performance First',
      description: 'Every line of code is optimized for speed, ensuring your users get the best experience possible.'
    },
    {
      icon: '📱',
      title: 'Mobile Responsive',
      description: 'All designs are crafted to work flawlessly across every device and screen size.'
    },
    {
      icon: '🎯',
      title: 'User-Centric Design',
      description: 'I prioritize intuitive interfaces that convert visitors into customers.'
    },
    {
      icon: '🔧',
      title: 'Clean Architecture',
      description: 'Maintainable, scalable code that grows with your business needs.'
    }
  ];

  return (
    <section className="w-full py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">

        <SectionHeading
          badge="About Me"
          title="Building digital experiences that perform at scale"
          subtitle="I'm Solomon, a passionate front-end developer with a focus on creating responsive, SEO-optimized web solutions. From concept to deployment, I ensure every project delivers exceptional user experience and business results."
          size="md"
          className="mb-16"
        />

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Personal Touch */}
        <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Why Choose Me?
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              I don&apos;t just write code—I craft digital solutions. With experience across blockchain education,
              project management platforms, and digital agencies, I understand what makes businesses succeed online.
              Every project is an opportunity to create something exceptional.
            </p>
            <div className="inline-flex items-center gap-4 text-blue-600 font-medium">
              <span>Let&apos;s build something amazing together</span>
              <span className="text-2xl">🚀</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;