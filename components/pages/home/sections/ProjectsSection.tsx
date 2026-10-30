"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { FaArrowRight, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { WEBPROJECTS } from "@/lib/data/projectData";
import { PortfolioCard } from "../utils";

const categories = [
  { label: "ALL PROJECTS", dataCategory: "ALL" },
  { label: "SAAS & ENTERPRISE", dataCategory: "SaaS & Enterprise" },
  { label: "E-COMMERCE", dataCategory: "E-Commerce" },
  { label: "FINTECH & ANALYTICS", dataCategory: "FinTech & Analytics" },
  { label: "CREATIVE & MEDIA", dataCategory: "Creative & Media" },
];

const ProjectsSection = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [showTemplates, setShowTemplates] = useState(true);
  const [slideDirection, setSlideDirection] = useState("none");
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    setShowTemplates(false);
    const timer = setTimeout(() => {
      setShowTemplates(true);
    }, 140);

    return () => clearTimeout(timer);
  }, [activeCategoryIndex]);

  const goToCategory = (index: number, direction = "none") => {
    if (index >= 0 && index < categories.length) {
      setSlideDirection(direction);
      setIsSliding(true);

      setTimeout(() => {
        setActiveCategoryIndex(index);
        setIsSliding(false);
      }, 140);
    }
  };

  const prevCategory = () => {
    goToCategory(activeCategoryIndex - 1, "left");
  };

  const nextCategory = () => {
    goToCategory(activeCategoryIndex + 1, "right");
  };

  const activeCategory = categories[activeCategoryIndex];
  const filteredProjects =
    activeCategory.dataCategory === "ALL"
      ? WEBPROJECTS.slice(0, 3)
      : WEBPROJECTS.filter(
          (project) => project.category === activeCategory.dataCategory
        ).slice(0, 3);

  return (
    <section
      id="projects"
      className="py-12 md:py-20 px-4 md:px-8 lg:px-10 xl:px-14"
    >
      <div className="max-w-[1440px] bg-gradient-to-br from-[#0c1f44] via-[#122B59] to-[#081329] overflow-hidden relative rounded-[28px] md:rounded-[36px] py-14 md:py-20 mx-auto px-5 md:px-12 lg:px-14 flex flex-col gap-y-8 items-center shadow-2xl border border-white/10">
        {/* Ambient Glows */}
        <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#6495ED]/20 blur-[110px]" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#f835a7]/15 blur-[110px]" />

        {/* Section Header */}
        <div className="text-center z-10">
          <PortfolioCard
            preHeading="Selected Works"
            headingText="Projects"
            subheadingText="Real Client Impact"
          />
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Explore production web applications, SaaS platforms, and e-commerce storefronts engineered for speed, conversion, and scale.
          </p>
        </div>

        {/* Category Carousel */}
        <div className="flex items-center justify-center gap-3 md:gap-4 w-full z-10">
          <button
            type="button"
            onClick={prevCategory}
            disabled={activeCategoryIndex === 0}
            aria-label="Previous category"
            className="p-2.5 rounded-full border border-white/30 text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition flex-shrink-0 cursor-pointer"
          >
            <BiChevronLeft size={24} />
          </button>

          {/* Mobile: Show active category pill with slide animation */}
          <div className="flex lg:hidden justify-center overflow-hidden min-w-[200px]">
            <button
              type="button"
              className={`px-6 py-2.5 rounded-full border-2 font-semibold text-xs sm:text-sm bg-[#6495ED] border-[#6495ED] text-white transition-all duration-150 ease-out ${
                isSliding
                  ? slideDirection === "right"
                    ? "-translate-x-full opacity-0"
                    : "translate-x-full opacity-0"
                  : "translate-x-0 opacity-100"
              }`}
            >
              {categories[activeCategoryIndex].label}
            </button>
          </div>

          {/* Desktop: Show all category buttons */}
          <div className="hidden lg:flex flex-wrap gap-2.5 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToCategory(index)}
                className={`px-4 py-2 xl:px-6 xl:py-2.5 rounded-full border font-semibold text-xs xl:text-sm transition-all duration-300 text-nowrap cursor-pointer ${
                  index === activeCategoryIndex
                    ? "bg-[#6495ED] border-[#6495ED] text-white shadow-[0_0_20px_rgba(100,149,237,0.45)]"
                    : "bg-white/5 border-white/25 text-white/85 hover:border-white hover:bg-white/10"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={nextCategory}
            disabled={activeCategoryIndex === categories.length - 1}
            aria-label="Next category"
            className="p-2.5 rounded-full border border-white/30 text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition flex-shrink-0 cursor-pointer"
          >
            <BiChevronRight size={24} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 z-10">
          {categories.map((cat, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Select ${cat.label}`}
              onClick={() => goToCategory(index)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                index === activeCategoryIndex
                  ? "bg-[#6495ED] w-[48px]"
                  : "bg-white/30 w-[10px] hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="w-full max-w-6xl mx-auto pt-4 z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 w-full">
            {filteredProjects.map((project, index) => (
              <div
                key={`${project.slug}-${activeCategoryIndex}`}
                className={`group bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col justify-between transition-all hover:-translate-y-2 ${
                  showTemplates
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{
                  transitionDuration: "650ms",
                  transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                  transitionDelay: showTemplates ? `${index * 120}ms` : "0ms",
                }}
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-[215px] bg-gray-900 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-black/70 backdrop-blur-md text-white border border-white/15">
                      {project.category}
                    </span>
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-medium bg-primary/90 text-white">
                      {project.year}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-xs font-medium text-primary">
                      <span>{project.company}</span>
                      <span>{project.role}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.technologies.slice(0, 4).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Links */}
                <div className="px-6 py-4 bg-gray-50/80 dark:bg-white/[0.03] border-t border-gray-200/80 dark:border-white/10 flex items-center justify-between">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900 dark:text-white hover:text-primary transition-colors"
                  >
                    Case Study <FaArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                  >
                    Live Site <FaArrowUpRightFromSquare className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA to All Projects Page */}
        <div className="pt-6 z-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white text-[#122B59] font-semibold text-base hover:bg-gray-100 transition-all shadow-lg"
          >
            View All {WEBPROJECTS.length} Projects
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
          <Link
            href="/contacts"
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full border-2 border-white/60 text-white font-semibold text-base hover:bg-white/10 transition-all"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
