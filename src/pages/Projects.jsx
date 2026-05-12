import { useMemo, useState } from "react";
import ProjectsHero from "../components/projects/ProjectsHero";
import ProjectFilter from "../components/projects/ProjectFilter";
import ProjectGrid from "../components/projects/ProjectGrid";
import CTASection from "../components/home/CTASection";
import { projects } from "../data/projects";

export default function Projects() {
 const [activeCategory, setActiveCategory] = useState("Semua");

 const filteredProjects = useMemo(() => {
  if (activeCategory === "Semua") return projects;

  return projects.filter((project) => project.category === activeCategory);
 }, [activeCategory]);

 return (
  <>
   <ProjectsHero />
   <ProjectFilter
    activeCategory={activeCategory}
    setActiveCategory={setActiveCategory}
   />
   <ProjectGrid projects={filteredProjects} />
   <CTASection />
  </>
 );
}