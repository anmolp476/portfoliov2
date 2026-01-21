import LightDarkToggle from "./components/LightDarkToggle";
import ExperienceTimeline from "./components/ExperienceTimeline";

export default function Home() {
  return (
    <main className="min-h-screen px-6 md:px-16 py-20 max-w-5xl mx-auto">
      <LightDarkToggle />
      <ExperienceTimeline />
    </main>
  );
}
