import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { WEBPROJECTS } from '@/lib/data/projectData'
import ArchitecturalBackdrop from '@/components/utility/ArchitecturalBackdrop'
import { FaArrowLeft, FaArrowRight, FaArrowUpRightFromSquare, FaCircleCheck } from 'react-icons/fa6'

export function generateStaticParams() {
  return WEBPROJECTS.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const projectIndex = WEBPROJECTS.findIndex((p) => p.slug === slug)

  if (projectIndex === -1) {
    notFound()
  }

  const project = WEBPROJECTS[projectIndex]
  const prevProject =
    projectIndex > 0 ? WEBPROJECTS[projectIndex - 1] : WEBPROJECTS[WEBPROJECTS.length - 1]
  const nextProject =
    projectIndex < WEBPROJECTS.length - 1 ? WEBPROJECTS[projectIndex + 1] : WEBPROJECTS[0]

  return (
    <div className='min-h-screen bg-background overflow-hidden'>
      {/* Case Study Hero */}
      <section className='relative w-full pt-32 pb-16 px-4 md:px-8 lg:px-10 xl:px-14 bg-gradient-to-b from-gray-900 via-[#081022] to-black overflow-hidden'>
        <ArchitecturalBackdrop variant='hero' />
        <div className='max-w-5xl mx-auto z-10 relative space-y-6'>
          <Link
            href='/projects'
            className='inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors'
          >
            <FaArrowLeft className='w-3.5 h-3.5' /> Back to All Projects
          </Link>

          <div className='flex flex-wrap items-center gap-3'>
            <span className='px-3.5 py-1 rounded-full text-xs font-semibold bg-primary text-white'>
              {project.category}
            </span>
            <span className='px-3.5 py-1 rounded-full text-xs font-medium bg-white/10 text-gray-200'>
              {project.company} • {project.year}
            </span>
            <span className='px-3.5 py-1 rounded-full text-xs font-medium bg-white/10 text-[#4da3ff]'>
              {project.role}
            </span>
          </div>

          <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight font-[family-name:var(--font-poppins)]'>
            {project.name}
          </h1>

          <p className='text-gray-300 text-lg sm:text-xl leading-relaxed max-w-3xl'>
            {project.longDescription}
          </p>

          <div className='flex flex-wrap items-center gap-4 pt-2'>
            <Link
              href={project.liveUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-lg'
            >
              Visit Live Platform <FaArrowUpRightFromSquare className='w-4 h-4' />
            </Link>
            <Link
              href='/contacts'
              className='inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border-2 border-white/60 text-white font-semibold hover:bg-white/10 transition-all'
            >
              Build Something Similar
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className='w-full py-16 px-4 md:px-8 lg:px-10 xl:px-14 bg-background'>
        <div className='max-w-5xl mx-auto space-y-14'>
          {/* Primary Showcase Image */}
          <div className='relative rounded-3xl overflow-hidden border border-border bg-card shadow-2xl'>
            <Image
              src={project.image}
              alt={project.name}
              width={1400}
              height={850}
              className='w-full h-auto object-cover'
              priority
            />
          </div>

          {/* Metrics Row */}
          {project.metrics && (
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {project.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className='bg-card border border-border rounded-2xl p-6 shadow-md flex items-center gap-3.5'
                >
                  <FaCircleCheck className='w-6 h-6 text-primary shrink-0' />
                  <span className='font-semibold text-foreground'>{metric}</span>
                </div>
              ))}
            </div>
          )}

          {/* Two-Column Breakdown: Key Contributions & Stack */}
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-10'>
            <div className='lg:col-span-8 bg-card border border-border rounded-3xl p-8 shadow-md space-y-5'>
              <h2 className='text-2xl font-bold text-foreground'>
                Engineering & Design Highlights
              </h2>
              <ul className='space-y-4'>
                {project.highlights.map((item, idx) => (
                  <li key={idx} className='flex items-start gap-3 text-muted-foreground leading-relaxed'>
                    <span className='w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5'>
                      {idx + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className='lg:col-span-4 bg-card border border-border rounded-3xl p-8 shadow-md space-y-6'>
              <div>
                <h3 className='text-lg font-bold text-foreground mb-3'>Technologies Used</h3>
                <div className='flex flex-wrap gap-2'>
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className='px-3.5 py-1.5 rounded-xl bg-muted border border-border text-sm font-medium text-foreground'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className='pt-4 border-t border-border space-y-2 text-sm'>
                <div className='flex justify-between'>
                  <span className='text-muted-foreground'>Client:</span>
                  <span className='font-semibold text-foreground'>{project.company}</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-muted-foreground'>Role:</span>
                  <span className='font-semibold text-foreground'>{project.role}</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-muted-foreground'>Year:</span>
                  <span className='font-semibold text-foreground'>{project.year}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Gallery Screens */}
          {project.gallery && project.gallery.length > 1 && (
            <div className='space-y-6'>
              <h2 className='text-2xl font-bold text-foreground'>Additional Views</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {project.gallery.slice(1).map((imgUrl, idx) => (
                  <div
                    key={idx}
                    className='rounded-2xl overflow-hidden border border-border bg-card shadow-lg'
                  >
                    <Image
                      src={imgUrl}
                      alt={`${project.name} view ${idx + 2}`}
                      width={900}
                      height={600}
                      className='w-full h-auto object-cover'
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Next / Previous Project Navigation */}
          <div className='pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4'>
            <Link
              href={`/projects/${prevProject.slug}`}
              className='group flex items-center gap-3 p-4 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all w-full sm:w-auto'
            >
              <FaArrowLeft className='w-4 h-4 text-primary transition-transform group-hover:-translate-x-1' />
              <div>
                <p className='text-xs text-muted-foreground'>Previous Project</p>
                <p className='font-semibold text-foreground'>{prevProject.name}</p>
              </div>
            </Link>

            <Link
              href={`/projects/${nextProject.slug}`}
              className='group flex items-center justify-end gap-3 p-4 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all w-full sm:w-auto text-right'
            >
              <div>
                <p className='text-xs text-muted-foreground'>Next Project</p>
                <p className='font-semibold text-foreground'>{nextProject.name}</p>
              </div>
              <FaArrowRight className='w-4 h-4 text-primary transition-transform group-hover:translate-x-1' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

