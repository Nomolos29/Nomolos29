"use client"

import React from "react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiSolidity,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiFigma,
  SiWordpress,
  SiElementor,
  SiHtml5,
  SiCss3,
  SiVercel,
  SiMongodb,
} from "react-icons/si";

const topStack = [
  { name: "Next.js 15", icon: SiNextdotjs, color: "group-hover:text-foreground" },
  { name: "React 19", icon: SiReact, color: "group-hover:text-[#61DAFB]" },
  { name: "TypeScript", icon: SiTypescript, color: "group-hover:text-[#3178C6]" },
  { name: "JavaScript (ES6+)", icon: SiJavascript, color: "group-hover:text-[#F7DF1E]" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "group-hover:text-[#06B6D4]" },
  { name: "Solidity / Web3", icon: SiSolidity, color: "group-hover:text-[#627EEA]" },
  { name: "Node.js", icon: SiNodedotjs, color: "group-hover:text-[#339933]" },
  { name: "HTML5", icon: SiHtml5, color: "group-hover:text-[#E34F26]" },
];

const bottomStack = [
  { name: "Figma UI/UX", icon: SiFigma, color: "group-hover:text-[#F24E1E]" },
  { name: "Git", icon: SiGit, color: "group-hover:text-[#F05032]" },
  { name: "GitHub Actions", icon: SiGithub, color: "group-hover:text-foreground" },
  { name: "WordPress", icon: SiWordpress, color: "group-hover:text-[#21759B]" },
  { name: "Elementor", icon: SiElementor, color: "group-hover:text-[#92003B]" },
  { name: "CSS3 & Animations", icon: SiCss3, color: "group-hover:text-[#1572B6]" },
  { name: "Vercel Edge", icon: SiVercel, color: "group-hover:text-foreground" },
  { name: "MongoDB", icon: SiMongodb, color: "group-hover:text-[#47A248]" },
];

const Tools = () => {
  return (
    <div className="py-8 px-4 border border-border shadow-xl bg-card/80 backdrop-blur-md rounded-3xl flex flex-col overflow-hidden w-full relative marquee-mask">
      <div className="flex flex-col items-center space-y-5">
        {/* Top Row - Marquee Left */}
        <div className="overflow-hidden whitespace-nowrap w-full">
          <div className="flex items-center gap-5 w-max animate-marquee-left">
            {[...topStack, ...topStack].map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div
                  key={index}
                  className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-muted/60 hover:bg-muted border border-border/70 hover:border-primary/40 transition-all duration-300 cursor-default hover:-translate-y-0.5 shadow-sm"
                >
                  <Icon
                    className={`w-6 h-6 text-muted-foreground transition-colors duration-300 ${tool.color}`}
                  />
                  <span className="text-sm font-medium text-foreground">
                    {tool.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Row - Marquee Right */}
        <div className="overflow-hidden whitespace-nowrap w-full">
          <div className="flex items-center gap-5 w-max animate-marquee-right">
            {[...bottomStack, ...bottomStack].map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div
                  key={index}
                  className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-muted/60 hover:bg-muted border border-border/70 hover:border-primary/40 transition-all duration-300 cursor-default hover:-translate-y-0.5 shadow-sm"
                >
                  <Icon
                    className={`w-6 h-6 text-muted-foreground transition-colors duration-300 ${tool.color}`}
                  />
                  <span className="text-sm font-medium text-foreground">
                    {tool.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
