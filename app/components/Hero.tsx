"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative py-32 text-center">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6"
      >
        Hidden Name
      </motion.h1>

      {/* About me */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-10"
      >
        Computer Engineering student focused on building clean, reliable
        software systems. Passionate about web development, automation, and
        creating tools that make life easier.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex justify-center gap-6 flex-wrap"
      >
        <a
          href="https://github.com/fake"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/randomAccount"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all"
        >
          LinkedIn
        </a>
        <a
          href="mailto:fake@email.com"
          className="px-6 py-3 rounded-lg bg-gray-700 hover:bg-gray-800 dark:bg-gray-300 dark:hover:bg-gray-400 text-white dark:text-gray-900 font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all"
        >
          Email
        </a>
      </motion.div>
    </section>
  );
}