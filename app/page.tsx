import AboutSection from "@/components/pages/home/sections/AboutSection";
import ProjectsSection from "@/components/pages/home/sections/ProjectsSection";
import { Introduction, HeroSection, FaqSection, QuestioniareSection, SkillsSection } from "@/components/pages/home/sections";

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <HeroSection />
      <Introduction />
      <SkillsSection />
      <ProjectsSection />
      <AboutSection />
      <QuestioniareSection />
      <FaqSection />
    </div>
  );
}
