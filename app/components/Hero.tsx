"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative py-32 text-center overflow-hidden">
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
        className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
      >
        Computer Engineering student building clean, reliable software systems.
        Passionate about web development, automation, and creating tools that
        make life easier.
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
          className="px-6 py-3 rounded-lg bg-blue-500 dark:bg-blue-600 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-transform"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/randomAccount"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg bg-cyan-500 dark:bg-cyan-600 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-transform"
        >
          LinkedIn
        </a>
        <a
          href="mailto:fake@email.com"
          className="px-6 py-3 rounded-lg bg-gray-700 dark:bg-gray-300 text-white dark:text-gray-900 font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-transform"
        >
          Email
        </a>
      </motion.div>

      {/* Subtle glow behind heading */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-72 h-72 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 opacity-20 blur-3xl mt-[-100px]"></div>
      </div>
    </section>
  );
}
