// import AboutSection from "@/components/pages/home/sections/AboutSection";
// import SkillsSection from "@/components/pages/home/sections/SkillsSection";
import ProjectsSection from "@/components/pages/home/sections/ProjectsSection";
import { Introduction, HeroSection, FaqSection, QuestioniareSection } from "@/components/pages/home/sections";

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <HeroSection />
      <Introduction />
      <div className="max-w-screen-2xl mx-auto w-full px-4 sm:px-5 lg:px-10">
      </div>

      <ProjectsSection />
      <QuestioniareSection />
      <FaqSection />
      {/* <AboutSection />
      <SkillsSection /> */}
    </div>
  );
}
