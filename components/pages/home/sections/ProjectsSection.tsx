"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
// import Link from "next/link";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { WEBPROJECTS } from "@/lib/projectData"
import { PortfolioCard } from "../utils";

const categories = [
  { label: "TELECOMS", dataCategory: "Telecomms" },
  { label: "ENGINEERING", dataCategory: "Human Resource" },
  { label: "PRIVATE EQUITY", dataCategory: "Financial Service" },
  { label: "OPERATIONS", dataCategory: "Production and Operation" },
  { label: "FINANCE", dataCategory: "Financial Service" },
  { label: "MARKETING", dataCategory: "Marketing and Advertising" },
];

const Templates = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [showTemplates, setShowTemplates] = useState(true);
  const [slideDirection, setSlideDirection] = useState("none");
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    // Reset animation when category changes
    setShowTemplates(false);
    const timer = setTimeout(() => {
      setShowTemplates(true);
    }, 200);

    return () => clearTimeout(timer);
  }, [activeCategoryIndex]);

  const goToCategory = (index: number, direction = "none") => {
    if (index >= 0 && index < categories.length) {
      setSlideDirection(direction);
      setIsSliding(true);

      setTimeout(() => {
        setActiveCategoryIndex(index);
        setIsSliding(false);
      }, 150);
    }
  };

  const prevCategory = () => {
    goToCategory(activeCategoryIndex - 1, "left");
  };

  const nextCategory = () => {
    goToCategory(activeCategoryIndex + 1, "right");
  };

  // Filter templates by active category and get first 3
  const activeCategory = categories[activeCategoryIndex];
  const filteredTemplates = WEBPROJECTS.filter(
    (project) => project.category === activeCategory.dataCategory,
  ).slice(0, 3);

  return (
    <section className="py-12 md:py-20 px-4 md:px-10 lg:px-14">
      <div className="max-w-[1400px] bg-[#122B59] overflow-hidden relative rounded-[24px] md:rounded-[32px] py-12 md:py-20 mx-auto px-4 md:px-14 flex flex-col gap-y-8 md:gap-y-10 items-center">
        {/* Category Carousel */}
        <div className="flex items-center justify-center gap-4 mb-8 w-full">
          <button
            onClick={prevCategory}
            disabled={activeCategoryIndex === 0}
            className="p-2 rounded-full border border-white/30 text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition flex-shrink-0"
          >
            <BiChevronLeft size={24} />
          </button>

          {/* Mobile: Show only active button with slide animation */}
          <div className="flex lg:hidden justify-center overflow-hidden min-w-[180px]">
            <button
              className={`px-6 py-3 rounded-full border-2 font-semibold text-sm bg-[#6495ED] border-[#6495ED] text-white transition-all duration-150 ease-out ${
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

          {/* Desktop: Show all buttons */}
          <div className="hidden lg:flex gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => goToCategory(index)}
                className={`px-3 py-1 xl:px-6 xl:py-3 rounded-full border-2 font-semibold text-sm xl:text-base transition-all duration-300 text-nowrap ${
                  index === activeCategoryIndex
                    ? "bg-[#6495ED] border-[#6495ED] text-white"
                    : "bg-transparent border-white/50 text-white hover:border-white"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <button
            onClick={nextCategory}
            disabled={activeCategoryIndex === categories.length - 1}
            className="p-2 rounded-full border border-white/30 text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition flex-shrink-0"
          >
            <BiChevronRight size={24} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2">
          {categories.map((_, index) => (
            <button
              key={index}
              onClick={() => goToCategory(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeCategoryIndex
                  ? "bg-[#6495ED] w-[60px]"
                  : "bg-white/40 w-[10px] hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="text-center">
          <PortfolioCard headingText='Featured Projects' />
        </div>

        {/* Template Cards */}
        <div className="flex justify-center items-center w-full max-w-6xl mx-auto pt-10">
          {/* Template Preview Cards */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center w-full px-4 md:px-0">
            {filteredTemplates.map((project, index) => (
              <div
                key={`${activeCategoryIndex}-${index}`}
                className={`bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-[320px] md:w-[280px] transition-all ${
                  showTemplates
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[150%]"
                }`}
                style={{
                  transitionDuration: "900ms",
                  transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                  transitionDelay: showTemplates ? `${index * 300}ms` : "0ms",
                }}
              >
                <div className="relative h-[200px] md:h-[220px] bg-gray-100">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <Image
          src="/homepage/templateSection.svg"
          alt="image of human point to templates"
          width={500}
          height={500}
          className="absolute bottom-0 left-0 z-[3] w-2/3 md:w-1/2 xl:w-fit"
        />
      </div>
    </section>
  );
};

export default Templates;
