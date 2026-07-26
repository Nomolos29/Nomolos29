import { ExperienceShowcase, HeroSection } from "@/components";
import AboutSection from "@/components/pages/home/sections/AboutSection";
import SkillsSection from "@/components/pages/home/sections/SkillsSection";
import ProjectsSection from "@/components/pages/home/sections/ProjectsSection";
import ContactSection from "@/components/pages/home/sections/ContactSection";
import Footer from "@/components/pages/home/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <div className="max-w-screen-2xl mx-auto w-full px-4 sm:px-5 lg:px-10">
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
