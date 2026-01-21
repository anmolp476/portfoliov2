"use client";

import { motion } from "framer-motion";

interface Experience {
  title: string;
  role: string;
  duration: string;
  details: string[];
}

const experiences: Experience[] = [
  {
    title: "Environment and Climate Change Canada",
    role: "Software Developer Intern",
    duration: "May 2024 – Aug 2025",
    details: [
      "Developed 25+ JIRA tickets for meteorological forecasting system",
      "Contributed 40+ JUnit tests, performed 30+ code reviews via Helix Swarm",
      "Facilitated daily standups, sprint planning, retros for 11-member team",
    ],
  },
  {
    title: "Exceed Robotics",
    role: "STEM Instructor",
    duration: "July 2023 – May 2024",
    details: [
      "Taught children game development with Pygame",
      "Led VEX Robotics sessions, improving team competition scores by 30%",
    ],
  },
  {
    title: "Eclipse Creations",
    role: "Software Developer Intern",
    duration: "Apr 2023 – Aug 2023",
    details: [
      "Optimized ASP.NET MVC website for 15% faster page load",
      "Maintained Confluence docs and executed Scrum methodology",
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <section className="my-24">
      <h2 className="text-3xl font-semibold mb-10 text-gray-900 dark:text-gray-100">
        Experience
      </h2>
      <div className="relative border-l-2 border-gray-300 dark:border-gray-700 ml-4">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="mb-10 pl-8 relative"
          >
            {/* Timeline dot */}
            <span className="absolute -left-5 top-1 w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-400 shadow-lg"></span>

            {/* Experience content */}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              {exp.role}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {exp.duration}
            </p>
            <ul className="mt-2 list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
              {exp.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
