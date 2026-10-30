"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import {
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaLayerGroup,
} from "react-icons/fa6";
import { WEBPROJECTS } from "@/lib/data/projectData";
import { PortfolioCard } from "../utils";

const categories = [
  { label: "ALL PROJECTS", dataCategory: "ALL" },
  { label: "SAAS & ENTERPRISE", dataCategory: "SaaS & Enterprise" },
  { label: "E-COMMERCE", dataCategory: "E-Commerce" },
  { label: "FINTECH & ANALYTICS", dataCategory: "FinTech & Analytics" },
  { label: "CREATIVE & MEDIA", dataCategory: "Creative & Media" },
];

// Bespoke accent palettes per project so the open white canvas dynamically shifts mood
const projectThemes = [
  {
    accentText: "text-[#014ba7]",
    accentBg: "bg-[#014ba7]",
    accentBorder: "border-[#014ba7]",
    glow: "from-[#014ba7]/20 via-[#6495ED]/10 to-transparent",
  },
  {
    accentText: "text-[#f835a7]",
    accentBg: "bg-[#f835a7]",
    accentBorder: "border-[#f835a7]",
    glow: "from-[#f835a7]/20 via-purple-500/10 to-transparent",
  },
  {
    accentText: "text-emerald-600",
    accentBg: "bg-emerald-600",
    accentBorder: "border-emerald-600",
    glow: "from-emerald-500/20 via-teal-400/10 to-transparent",
  },
  {
    accentText: "text-indigo-600",
    accentBg: "bg-indigo-600",
    accentBorder: "border-indigo-600",
    glow: "from-indigo-500/20 via-blue-400/10 to-transparent",
  },
  {
    accentText: "text-rose-600",
    accentBg: "bg-rose-600",
    accentBorder: "border-rose-600",
    glow: "from-rose-500/20 via-orange-400/10 to-transparent",
  },
];

// Slower, smoother 10-second slide interval
const SLIDE_DURATION_MS = 10000;

const ProjectsSection = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [activeViewIndex, setActiveViewIndex] = useState(0);
  const [isSlidingCategory, setIsSlidingCategory] = useState(false);
  const [slideDirection, setSlideDirection] = useState("none");
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const activeCategory = categories[activeCategoryIndex];
  const categoryProjects =
    activeCategory.dataCategory === "ALL"
      ? WEBPROJECTS
      : WEBPROJECTS.filter(
          (project) => project.category === activeCategory.dataCategory
        );

  const safeSlideIndex =
    activeSlideIndex < categoryProjects.length ? activeSlideIndex : 0;
  const currentProject = categoryProjects[safeSlideIndex] || WEBPROJECTS[0];
  const currentTheme = projectThemes[safeSlideIndex % projectThemes.length];

  const gallery =
    currentProject.gallery && currentProject.gallery.length > 0
      ? currentProject.gallery
      : [currentProject.image];

  const goToCategory = (index: number, direction = "none") => {
    if (index >= 0 && index < categories.length) {
      setSlideDirection(direction);
      setIsSlidingCategory(true);

      setTimeout(() => {
        setActiveCategoryIndex(index);
        setActiveSlideIndex(0);
        setActiveViewIndex(0);
        setProgress(0);
        setIsSlidingCategory(false);
      }, 220);
    }
  };

  const prevCategory = () => goToCategory(activeCategoryIndex - 1, "left");
  const nextCategory = () => goToCategory(activeCategoryIndex + 1, "right");

  const goToSlide = (index: number) => {
    if (index >= 0 && index < categoryProjects.length) {
      setActiveSlideIndex(index);
      setActiveViewIndex(0);
      setProgress(0);
    }
  };

  const prevSlide = () => {
    goToSlide(
      (safeSlideIndex - 1 + categoryProjects.length) % categoryProjects.length
    );
  };

  const nextSlide = () => {
    goToSlide((safeSlideIndex + 1) % categoryProjects.length);
  };

  // Slower, smoother auto-advance project slides within the active category
  useEffect(() => {
    if (isPaused || categoryProjects.length <= 1) return;

    const stepMs = 50;
    const increment = (stepMs / SLIDE_DURATION_MS) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev + increment >= 100) {
          setActiveSlideIndex((curr) => (curr + 1) % categoryProjects.length);
          setActiveViewIndex(0);
          return 0;
        }
        return prev + increment;
      });
    }, stepMs);

    return () => clearInterval(timer);
  }, [isPaused, categoryProjects.length, activeCategoryIndex, safeSlideIndex]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: nx * 6, y: ny * -6 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const titleWords = currentProject.name.split(" ");
  const mainTitle = titleWords.slice(0, -1).join(" ");
  const accentTitle = titleWords.slice(-1)[0];

  return (
    <section
      id="projects"
      className="relative py-24 md:pb-36 px-5 md:px-10 lg:px-14 xl:px-20 bg-background overflow-hidden font-[family-name:var(--font-poppins)]"
    >
      {/* ── Dynamic Mood Aura Behind Stage ── */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute top-2/3 right-10 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-gradient-radial ${currentTheme.glow} blur-[130px] transition-all duration-1000 z-0`}
      />

      <div className="max-w-[1440px] mx-auto relative z-10 flex flex-col items-center">
        {/* ── 1. Shorter, Cleaner Header ("Featured Projects" in Transparent Capsule, "Projects" as Main Heading) ── */}
        <div className="text-center mb-6 md:mb-8">
          <PortfolioCard
            preHeading="Featured Projects"
            headingText="Projects"
            subheadingText="Selected Works"
            textColor="adaptive"
          />
        </div>

        {/* ── 2. Category Carousel Controls with Generous Spacing ── */}
        <div className="flex items-center justify-center gap-4 md:gap-5 w-full mb-8">
          <button
            type="button"
            onClick={prevCategory}
            disabled={activeCategoryIndex === 0}
            aria-label="Previous category"
            className="p-3 rounded-full border border-foreground/30 text-foreground hover:bg-foreground hover:text-background disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-500 flex-shrink-0 cursor-pointer"
          >
            <BiChevronLeft size={24} />
          </button>

          {/* Mobile Active Category Pill */}
          <div className="flex lg:hidden justify-center overflow-hidden min-w-[210px]">
            <button
              type="button"
              className={`px-7 py-3 rounded-full border-2 font-semibold text-sm ${currentTheme.accentBg} ${currentTheme.accentBorder} text-white transition-all duration-300 ease-out ${
                isSlidingCategory
                  ? slideDirection === "right"
                    ? "-translate-x-full opacity-0"
                    : "translate-x-full opacity-0"
                  : "translate-x-0 opacity-100"
              }`}
            >
              {categories[activeCategoryIndex].label}
            </button>
          </div>

          {/* Desktop Category Pills */}
          <div className="hidden lg:flex gap-3.5 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToCategory(index)}
                className={`px-6 py-3 xl:px-7 xl:py-3.5 rounded-full border-2 font-semibold text-sm xl:text-base transition-all duration-500 text-nowrap cursor-pointer ${
                  index === activeCategoryIndex
                    ? "bg-foreground border-foreground text-background shadow-lg scale-105"
                    : "bg-transparent border-foreground/25 text-foreground hover:border-foreground"
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
            className="p-3 rounded-full border border-foreground/30 text-foreground hover:bg-foreground hover:text-background disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-500 flex-shrink-0 cursor-pointer"
          >
            <BiChevronRight size={24} />
          </button>
        </div>

        {/* ── Category Pagination Dots ── */}
        <div className="flex justify-center space-x-2.5 mb-14 md:mb-20">
          {categories.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToCategory(index)}
              className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                index === activeCategoryIndex
                  ? `${currentTheme.accentBg} w-[60px]`
                  : "bg-foreground/20 w-[10px] hover:bg-foreground/45"
              }`}
            />
          ))}
        </div>

        {/* ── 3. THE MAIN PROJECT HIGHLIGHT STAGE (With Large Rubik Maze Number Clearly Visible in This Section) ── */}
        <div
          className="relative w-full py-6 md:py-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Large Bolder Rubik Maze Number Positioned Clearly Within the Main Project Highlight Section */}
          <div
            aria-hidden="true"
            className="pointer-events-none select-none absolute -top-14 sm:-top-20 left-0 md:left-4 z-0 transition-all duration-1000 ease-out"
          >
            <span className="block text-[9rem] sm:text-[13rem] lg:text-[17rem] font-bold leading-none font-[family-name:var(--font-rubikMaze)] text-black/15 dark:text-white/15 tracking-tighter">
              0{safeSlideIndex + 1}
            </span>
          </div>

          <div
            className={`relative z-10 w-full flex flex-col ${
              safeSlideIndex % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } justify-between items-center gap-16 lg:gap-20 xl:gap-24 min-h-[540px] transition-all duration-1000`}
          >
            {/* ── STORY SIDE (Alternates Left / Right as you slide) ── */}
            <div
              key={`story-${currentProject.slug}`}
              className="w-full lg:w-[44%] flex flex-col gap-y-7 pt-6 sm:pt-10 animate-[fade-up_1.1s_cubic-bezier(0.16,1,0.3,1)_forwards]"
            >
              {/* Signature BubbleTag + Cursive Category Pill */}
              <div className="flex flex-wrap items-center gap-3.5">
                <div className="flex items-center gap-x-2">
                  <div
                    className={`h-8 w-8 rounded-full ${currentTheme.accentBg} text-white flex items-center justify-center text-xs font-bold shadow-md`}
                  >
                    0{safeSlideIndex + 1}
                  </div>
                  <p className="border border-foreground/80 px-5 h-8 flex items-center justify-center text-sm italic rounded-full text-foreground bg-background/90 backdrop-blur-sm shadow-sm">
                    {currentProject.company} • {currentProject.year}
                  </p>
                </div>

                <span className="font-[family-name:var(--font-italianno)] text-2xl sm:text-3xl text-muted-foreground px-2">
                  {currentProject.role}
                </span>
              </div>

              {/* Expressive Editorial Title */}
              <h3 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-foreground leading-[1.12] tracking-tight">
                {mainTitle}{" "}
                <span
                  className={`${currentTheme.accentText} underline decoration-wavy decoration-1 underline-offset-8`}
                >
                  {accentTitle}
                </span>
                .
              </h3>

              {/* Rich Project Narrative */}
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                {currentProject.longDescription || currentProject.description}
              </p>

              {/* Key Highlights Bullet Strips */}
              {currentProject.highlights && (
                <div className="space-y-3.5 border-l-2 border-foreground/20 pl-5 py-1">
                  {currentProject.highlights.slice(0, 2).map((point, idx) => (
                    <p
                      key={idx}
                      className="text-sm sm:text-base text-foreground/85 leading-relaxed"
                    >
                      <span
                        className={`font-bold mr-2 ${currentTheme.accentText}`}
                      >
                        ✦
                      </span>
                      {point}
                    </p>
                  ))}
                </div>
              )}

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                {currentProject.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full bg-muted text-foreground border border-border hover:border-foreground transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Signature Pill Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href={currentProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex gap-x-4 items-center text-background bg-foreground hover:bg-primary hover:text-white text-base sm:text-lg py-3.5 px-8 rounded-full cursor-pointer transition-all duration-500 shadow-[0_10px_25px_rgba(0,0,0,0.18)]"
                >
                  Launch Live Site
                  <FaArrowUpRightFromSquare className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </Link>

                <Link
                  href={`/projects/${currentProject.slug}`}
                  className="group inline-flex gap-x-3 items-center text-foreground text-base sm:text-lg py-3.5 px-8 border-2 border-foreground rounded-full hover:bg-foreground hover:text-background transition-all duration-500 cursor-pointer"
                >
                  Case Study
                  <FaArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </div>

            {/* ── 3D FANNED DECK STAGE (Slower, Smoother Glide Transitions) ── */}
            <div
              className="w-full lg:w-[52%] relative h-[380px] sm:h-[460px] md:h-[520px] flex items-center justify-center px-2 sm:px-6"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {categoryProjects.map((project, index) => {
                const total = categoryProjects.length;
                const offset = (index - safeSlideIndex + total) % total;

                if (offset > 2 && offset !== total - 1) return null;

                const isFront = offset === 0;
                const isNext = offset === 1;
                const isThird = offset === 2;

                let deckTransform =
                  "translate3d(0px, 0px, 0px) scale(1) rotate(0deg)";
                let zIndex = 30;
                let opacity = "opacity-100";

                if (isFront) {
                  deckTransform = `perspective(1200px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg) translate3d(0px, 0px, 0px) scale(1)`;
                  zIndex = 30;
                  opacity = "opacity-100";
                } else if (isNext) {
                  deckTransform =
                    "perspective(1200px) translate3d(36px, -24px, -60px) scale(0.92) rotate(3deg)";
                  zIndex = 20;
                  opacity = "opacity-65 hover:opacity-90";
                } else if (isThird) {
                  deckTransform =
                    "perspective(1200px) translate3d(68px, -44px, -120px) scale(0.84) rotate(6deg)";
                  zIndex = 10;
                  opacity = "opacity-35";
                } else {
                  deckTransform =
                    "perspective(1200px) translate3d(-44px, 24px, -80px) scale(0.88) rotate(-4deg)";
                  zIndex = 5;
                  opacity = "opacity-0 pointer-events-none";
                }

                const displayImage =
                  isFront && gallery[activeViewIndex]
                    ? gallery[activeViewIndex]
                    : project.image;

                const secondaryImg =
                  project.gallery && project.gallery.length > 1
                    ? project.gallery[
                        isFront
                          ? (activeViewIndex + 1) % project.gallery.length
                          : 1
                      ]
                    : null;

                return (
                  <div
                    key={project.slug}
                    onClick={() => {
                      if (!isFront) goToSlide(index);
                    }}
                    style={{
                      transform: deckTransform,
                      zIndex,
                      transition: isFront
                        ? "transform 450ms cubic-bezier(0.22, 1, 0.36, 1), opacity 800ms ease"
                        : "all 1100ms cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                    className={`absolute w-[92%] sm:w-[88%] h-[320px] sm:h-[400px] md:h-[440px] ${opacity} ${
                      !isFront ? "cursor-pointer" : ""
                    }`}
                  >
                    {/* Main Showcase Card Frame */}
                    <div className="w-full h-full bg-white rounded-[28px] p-3.5 sm:p-4 border border-gray-200 shadow-[0_25px_60px_rgba(0,0,0,0.18)] relative overflow-hidden group">
                      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-900">
                        <Image
                          src={displayImage}
                          alt={project.name}
                          fill
                          className="object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-105"
                          priority={isFront}
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                        {/* Top-Left Category & Screen Switcher Inside Active Card */}
                        {isFront && (
                          <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-20">
                            <span className="px-4 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-white text-xs font-medium border border-white/20">
                              {project.category}
                            </span>

                            {gallery.length > 1 && (
                              <div className="flex items-center gap-1.5 bg-black/75 backdrop-blur-md p-1 rounded-full border border-white/20">
                                {gallery.map((_, vIdx) => (
                                  <button
                                    key={vIdx}
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setActiveViewIndex(vIdx);
                                    }}
                                    className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-all duration-500 cursor-pointer ${
                                      activeViewIndex === vIdx
                                        ? "bg-white text-black shadow-sm"
                                        : "text-gray-300 hover:text-white"
                                    }`}
                                  >
                                    Screen {vIdx + 1}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        )}

                        {/* Click Hint on Peeking Back Cards */}
                        {!isFront && (
                          <div className="absolute inset-0 bg-black/40 flex items-start justify-end p-5">
                            <span className="px-4 py-1.5 rounded-full bg-white text-black text-xs font-bold shadow-md">
                              Up Next: {project.name} →
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* ── FLOATING LAYER 1: Tilted Nested Dark Metric Card ── */}
                    {isFront && project.metrics && project.metrics[0] && (
                      <div className="hidden sm:block absolute -top-7 -left-7 z-40 bg-white text-gray-900 rounded-2xl p-2 shadow-[10px_15px_30px_rgba(0,0,0,0.22)] -rotate-3 hover:rotate-0 transition-transform duration-700 max-w-[240px]">
                        <div className="flex items-center justify-between px-3 py-1 border-b border-gray-200 text-[10px] font-bold uppercase tracking-wider text-gray-500">
                          <span>Impact Metric</span>
                          <span className={currentTheme.accentText}>★</span>
                        </div>
                        <div className="bg-gray-900 text-white px-4 py-2.5 rounded-xl mt-1">
                          <p className="text-xs font-medium leading-snug">
                            {project.metrics[0]}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* ── FLOATING LAYER 2: Overlapping Secondary Screenshot Card ── */}
                    {isFront && secondaryImg && (
                      <button
                        type="button"
                        onClick={() =>
                          setActiveViewIndex(
                            (activeViewIndex + 1) % gallery.length
                          )
                        }
                        title="Click to swap screen view"
                        className="hidden sm:block absolute -bottom-8 -right-6 z-40 w-[195px] md:w-[240px] h-[130px] md:h-[160px] bg-white p-2 rounded-2xl shadow-[-12px_18px_35px_rgba(0,0,0,0.28)] rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-700 cursor-pointer group/sec"
                      >
                        <div className="relative w-full h-full rounded-xl overflow-hidden bg-gray-900">
                          <Image
                            src={secondaryImg}
                            alt={`${project.name} alternate screen`}
                            fill
                            className="object-cover object-top"
                          />
                          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/sec:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                            <span className="px-3 py-1 rounded-full bg-white text-black text-[11px] font-bold flex items-center gap-1.5 shadow">
                              <FaLayerGroup className="w-3 h-3" /> Swap View
                            </span>
                          </div>
                        </div>
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── 4. FLOATING FILMSTRIP DOCK (Single Horizontal Overflowing Row + Title-Relative Capsule Widths) ── */}
          <div className="mt-20 md:mt-28 w-full flex justify-center">
            <div className="w-full max-w-5xl bg-gray-900 text-white rounded-3xl lg:rounded-full p-3 sm:px-5 sm:py-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.25)] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Prev Arrow */}
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous project"
                className="hidden md:flex h-11 w-11 rounded-full border border-white/20 hover:bg-white hover:text-black items-center justify-center transition-colors duration-500 shrink-0 cursor-pointer"
              >
                <BiChevronLeft size={24} />
              </button>

              {/* Filmstrip Project Capsules — Horizontal Overflowing Row, Width Relative to Each Title */}
              <div className="flex items-center gap-3 w-full overflow-x-auto scrollbar-hide py-1 px-1">
                {categoryProjects.map((project, index) => {
                  const isActive = index === safeSlideIndex;
                  return (
                    <button
                      key={project.slug}
                      type="button"
                      onClick={() => goToSlide(index)}
                      className={`relative overflow-hidden w-fit shrink-0 flex items-center gap-3.5 py-2.5 pl-2.5 pr-5 rounded-full border transition-all duration-500 cursor-pointer text-left ${
                        isActive
                          ? "bg-white text-black border-white shadow-lg scale-[1.03]"
                          : "bg-white/5 text-gray-300 border-white/15 hover:bg-white/15 hover:text-white"
                      }`}
                    >
                      {/* Mini Circular Thumbnail */}
                      <div className="relative h-9 w-9 rounded-full overflow-hidden bg-gray-800 shrink-0 border border-black/10">
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="object-cover object-top"
                        />
                      </div>

                      {/* Title & Number (Sized Relative to Title Length) */}
                      <div className="w-fit">
                        <p
                          className={`text-[10px] font-bold uppercase tracking-wider whitespace-nowrap ${
                            isActive ? "text-primary" : "text-gray-400"
                          }`}
                        >
                          0{index + 1} • {project.company}
                        </p>
                        <p className="text-xs sm:text-sm font-semibold whitespace-nowrap">
                          {project.name}
                        </p>
                      </div>

                      {/* Liquid Auto-Advance Progress Bar on Active Filmstrip Capsule */}
                      {isActive && categoryProjects.length > 1 && (
                        <span
                          className={`absolute bottom-0 left-0 h-1 ${currentTheme.accentBg} transition-all duration-100 ease-linear`}
                          style={{ width: `${progress}%` }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Next Arrow + Mobile Controls */}
              <div className="flex items-center justify-between w-full md:w-auto gap-3 shrink-0 px-2 md:px-0">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous project"
                  className="flex md:hidden h-10 w-10 rounded-full border border-white/20 hover:bg-white hover:text-black items-center justify-center transition-colors cursor-pointer"
                >
                  <BiChevronLeft size={22} />
                </button>
                <span className="text-xs font-mono text-gray-400 md:hidden">
                  0{safeSlideIndex + 1} / 0{categoryProjects.length}
                </span>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next project"
                  className="flex h-10 w-10 md:h-11 md:w-11 rounded-full border border-white/20 hover:bg-white hover:text-black items-center justify-center transition-colors duration-500 cursor-pointer"
                >
                  <BiChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
