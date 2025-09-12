import { ExperienceShowcase, HeroSection } from "@/components";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-screen-2xl mx-auto w-full px-4 sm:px-5 lg:px-10">
        <HeroSection />
        <ExperienceShowcase />
      </div>
      
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
