"use client";

import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
}

const projects: Project[] = [
  {
    title: "Job Finder Automation",
    description:
      "Automated job finder system that scrapes Google Jobs via SerpApi, filters results, and generates weekly reports.",
    tech: [
      "React",
      "TailwindCSS",
      "Docker",
      "Python",
      "GitHub Actions",
      "SerpApi",
    ],
    link: "https://github.com/fake/job-finder",
  },
];

export default function ProjectsSection() {
  return (
    <section className="my-24">
      <h2 className="text-3xl font-semibold mb-10 text-gray-900 dark:text-gray-100">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="p-6 rounded-xl border border-gray-300 dark:border-gray-700 shadow hover:shadow-lg transition-shadow bg-white dark:bg-gray-900"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
              {proj.title}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
              {proj.description}
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-blue-500 dark:text-blue-400">
              {proj.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-2 py-1 border border-blue-500 dark:border-blue-400 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
            {proj.link && (
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-500 dark:text-blue-400 underline text-sm"
              >
                View Project
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
