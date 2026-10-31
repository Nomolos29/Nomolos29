"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PortfolioCard } from '@/components/pages/home/utils'
import { WEBPROJECTS } from '@/lib/data/projectData'
import QuestioniareSection from '@/components/pages/home/sections/QuestioniareSection'
import ArchitecturalBackdrop from '@/components/utility/ArchitecturalBackdrop'
import { FaArrowRight, FaArrowUpRightFromSquare, FaMagnifyingGlass } from 'react-icons/fa6'

const categories = [
  'All',
  'SaaS & Enterprise',
  'E-Commerce',
  'FinTech & Analytics',
  'Creative & Media',
]

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProjects = WEBPROJECTS.filter((project) => {
    const matchesCategory =
      selectedCategory === 'All' || project.category === selectedCategory
    const query = searchQuery.toLowerCase().trim()
    const matchesSearch =
      !query ||
      project.name.toLowerCase().includes(query) ||
      project.company.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.technologies.some((t) => t.toLowerCase().includes(query))
    return matchesCategory && matchesSearch
  })

  return (
    <div className='min-h-screen bg-background overflow-hidden'>
      {/* Hero Banner */}
      <section className='relative flex justify-center w-full pt-32 pb-20 px-4 md:px-8 lg:px-10 xl:px-14 bg-gradient-to-b from-[25%] from-gray-900 via-[#081022] to-black overflow-hidden'>
        <ArchitecturalBackdrop variant='hero' />

        <div className='max-w-[1280px] w-full flex flex-col items-center text-center z-10'>
          <PortfolioCard
            preHeading='Selected Works'
            headingText='Projects'
            subheadingText='Case Studies & Live Apps'
          />
          <p className='text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed'>
            A curated showcase of SaaS platforms, financial dashboards, creative studios, and e-commerce storefronts I&apos;ve designed and engineered.
          </p>

          {/* Filter & Search Bar */}
          <div className='w-full max-w-4xl mt-10 flex flex-col md:flex-row items-center justify-between gap-4 bg-white/[0.04] backdrop-blur-md border border-white/15 rounded-2xl p-3'>
            <div className='flex flex-wrap items-center justify-center gap-2'>
              {categories.map((cat) => (
                <button
                  key={cat}
                  type='button'
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-primary text-white shadow-md'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className='relative w-full md:w-64'>
              <FaMagnifyingGlass className='w-3.5 h-3.5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2' />
              <input
                type='text'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder='Search tech or project...'
                className='w-full pl-9 pr-4 py-2 rounded-xl bg-black/50 border border-white/15 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-primary'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className='w-full py-16 md:py-24 px-4 md:px-8 lg:px-10 xl:px-14 bg-background'>
        <div className='max-w-6xl mx-auto'>
          {filteredProjects.length === 0 ? (
            <div className='text-center py-20 bg-card border border-border rounded-3xl p-10'>
              <p className='text-xl font-semibold text-foreground mb-2'>
                No projects match your current filter
              </p>
              <p className='text-muted-foreground mb-6'>
                Try clearing your search or selecting &ldquo;All&rdquo; categories.
              </p>
              <button
                type='button'
                onClick={() => {
                  setSelectedCategory('All')
                  setSearchQuery('')
                }}
                className='px-6 py-2.5 rounded-full bg-primary text-white font-medium text-sm cursor-pointer'
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {filteredProjects.map((project) => (
                <div
                  key={project.slug}
                  className='group bg-card border border-border rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between'
                >
                  <div>
                    {/* Thumbnail */}
                    <div className='relative h-64 sm:h-72 bg-gray-900 overflow-hidden'>
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className='object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105'
                      />
                      <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent' />
                      <span className='absolute top-4 left-4 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-black/75 backdrop-blur-md text-white border border-white/15'>
                        {project.category}
                      </span>
                      <span className='absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-primary text-white'>
                        {project.year}
                      </span>
                    </div>

                    {/* Details */}
                    <div className='p-7 space-y-4'>
                      <div className='flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-primary'>
                        <span>{project.company}</span>
                        <span>{project.role}</span>
                      </div>

                      <h2 className='text-2xl font-bold text-foreground group-hover:text-primary transition-colors'>
                        {project.name}
                      </h2>

                      <p className='text-muted-foreground text-sm sm:text-base leading-relaxed'>
                        {project.description}
                      </p>

                      {project.metrics && (
                        <div className='grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1'>
                          {project.metrics.map((metric, mIdx) => (
                            <div
                              key={mIdx}
                              className='text-xs font-medium px-3 py-2 rounded-xl bg-primary/5 border border-primary/15 text-foreground'
                            >
                              ✓ {metric}
                            </div>
                          ))}
                        </div>
                      )}

                      <div className='flex flex-wrap gap-2 pt-2'>
                        {project.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className='text-xs font-medium px-3 py-1 rounded-lg bg-muted text-foreground/85 border border-border'
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Footer */}
                  <div className='px-7 py-5 bg-muted/40 border-t border-border flex items-center justify-between'>
                    <Link
                      href={`/projects/${project.slug}`}
                      className='group/btn inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors'
                    >
                      Read Case Study
                      <FaArrowRight className='w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1' />
                    </Link>

                    <Link
                      href={project.liveUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors'
                    >
                      Visit Live Site <FaArrowUpRightFromSquare className='w-3 h-3' />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Discovery Questionnaire CTA */}
      <QuestioniareSection />
    </div>
  )
}

export default ProjectsPage
