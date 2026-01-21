"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative py-32 text-center overflow-hidden">
      {/* subtle gradient "outer space" background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0b0f2d] via-[#020617] to-[#0b0f2d] opacity-60"></div>

      {/* twinkling stars (optional subtle dots) */}
      <div className="absolute inset-0 -z-20">
        <div
          className="w-[2px] h-[2px] bg-white rounded-full absolute animate-pulse"
          style={{ top: "20%", left: "10%" }}
        ></div>
        <div
          className="w-[1.5px] h-[1.5px] bg-white rounded-full absolute animate-pulse"
          style={{ top: "50%", left: "70%" }}
        ></div>
        <div
          className="w-[2px] h-[2px] bg-white rounded-full absolute animate-pulse"
          style={{ top: "80%", left: "40%" }}
        ></div>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold text-gray-100 mb-6"
      >
        Hidden Name
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8"
      >
        Computer Engineering student focused on building clean, reliable
        software systems. Passionate about web development, automation, and
        creating tools that make life easier.
      </motion.p>

      {/* social links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex justify-center gap-6"
      >
        <a
          href="https://github.com/fake"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-500 rounded text-white hover:bg-blue-600 transition"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/randomAccount"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-400 rounded text-white hover:bg-blue-500 transition"
        >
          LinkedIn
        </a>
        <a
          href="mailto:fake@email.com"
          className="px-4 py-2 bg-gray-700 dark:bg-gray-300 text-white dark:text-gray-900 rounded hover:bg-gray-800 dark:hover:bg-gray-400 transition"
        >
          Email
        </a>
      </motion.div>
    </section>
  );
}
