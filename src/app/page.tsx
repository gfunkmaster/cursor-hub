"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const features = [
  {
    title: "Getting Started",
    description: "Learn the basics of Cursor AI and set up your environment",
    href: "/getting-started",
    icon: "🚀",
  },
  {
    title: "Project Setup",
    description:
      "Master setting up new projects and working with existing codebases",
    href: "/project-setup",
    icon: "🏗️",
  },
  {
    title: "Daily Workflow",
    description: "Optimize your daily development tasks with Cursor AI",
    href: "/daily-workflow",
    icon: "💻",
  },
  {
    title: "Examples",
    description: "Explore real-world examples and best practices",
    href: "/examples",
    icon: "📚",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background/95">
      <section className="space-y-6 p-8">
        <div className="max-w-[64rem] mx-auto">
          <motion.h1
            className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text font-heading text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Master Cursor AI
          </motion.h1>
          <motion.p
            className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Your comprehensive guide to becoming a Cursor AI superuser. Learn
            best practices, workflows, and advanced techniques.
          </motion.p>

          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {features.map((feature) => (
              <motion.div key={feature.href} variants={item}>
                <Link
                  href={feature.href}
                  className="group relative overflow-hidden rounded-lg border bg-background/50 backdrop-blur-sm p-6 hover:bg-accent/10 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 flex flex-col h-full"
                >
                  <span className="text-3xl transform transition-transform group-hover:scale-110 duration-300 mb-4">
                    {feature.icon}
                  </span>
                  <div className="space-y-2">
                    <h3 className="font-bold text-xl group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
