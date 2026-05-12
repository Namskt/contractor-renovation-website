import HeroSection from "../components/home/HeroSection";
import StatsSection from "../components/home/StatsSection";
import ServicesSection from "../components/home/ServicesSection";
import AboutSection from "../components/home/AboutSection";
import WhyChooseSection from "../components/home/WhyChooseSection";
import ProjectsSection from "../components/home/ProjectsSection";
import WorkProcessSection from "../components/home/WorkProcessSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import CTASection from "../components/home/CTASection";

export default function Home() {
 return (
  <>
   <HeroSection />
   <StatsSection />
   <ServicesSection />
   <AboutSection />
   <WhyChooseSection />
   <ProjectsSection />
   <WorkProcessSection />
   <TestimonialsSection />
   <CTASection />
  </>
 );
}