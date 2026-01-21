import LightDarkToggle from "./components/LightDarkToggle";
import Hero from "./components/Hero";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="min-h-screen px-6 md:px-16 py-20 max-w-5xl mx-auto">
      <LightDarkToggle />
      <Hero />
      <ExperienceTimeline />
      <ProjectsSection />
    </main>
  );
}
