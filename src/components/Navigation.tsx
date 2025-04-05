"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { GuideSearch } from "./GuideSearch";

interface NavigationItem {
  title: string;
  description: string;
  href: string;
  icon: string;
}

const mainFeatures: NavigationItem[] = [
  {
    title: "AI Command Center",
    description: "Master Cursor's AI-powered features and commands",
    href: "/ai-features/command-center",
    icon: "🎮",
  },
  {
    title: "AI Chat Interface",
    description: "Learn to have effective conversations with Cursor AI",
    href: "/ai-features/chat-interface",
    icon: "💬",
  },
  {
    title: "Code Generation",
    description: "Generate high-quality code with AI assistance",
    href: "/ai-features/code-generation",
    icon: "✨",
  },
  {
    title: "Intelligent Completion",
    description: "Experience context-aware code completion",
    href: "/ai-features/code-completion",
    icon: "⚡",
  },
  {
    title: "Language Support",
    description: "Explore supported languages and frameworks",
    href: "/ai-features/language-support",
    icon: "🌐",
  },
  {
    title: "AI Documentation",
    description: "Generate and maintain documentation with AI",
    href: "/ai-features/documentation",
    icon: "📚",
  },
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
  {
    title: "Code Refactoring",
    description: "Transform and optimize your code with AI",
    href: "/ai-features/code-refactoring",
    icon: "🔄",
  },
];

export const guides: NavigationItem[] = [
  {
    title: "Quick Start Guide",
    description: "Get up and running quickly with Cursor AI",
    href: "/guides/quick-start",
    icon: "🚀",
  },
  {
    title: "Prompt Engineering",
    description: "Learn effective prompt engineering techniques for Cursor AI",
    href: "/guides/prompt-engineering",
    icon: "🎯",
  },
  {
    title: "Editor Setup",
    description: "Configure Cursor AI for optimal performance",
    href: "/guides/editor-setup",
    icon: "⚙️",
  },
  {
    title: "Superuser Guide",
    description: "Master Cursor AI with advanced tips and best practices",
    href: "/guides/superuser",
    icon: "👑",
  },
  {
    title: "Productivity Mastery",
    description: "Advanced techniques to supercharge your workflow",
    href: "/guides/productivity",
    icon: "⚡",
  },
  {
    title: "Advanced Prompting",
    description: "Master advanced prompting techniques for better results",
    href: "/guides/advanced-prompting",
    icon: "🎯",
  },
  {
    title: "Interactive Examples",
    description: "Learn through hands-on interactive examples",
    href: "/guides/interactive-examples",
    icon: "🔄",
  },
  {
    title: "Best Practices",
    description: "Follow recommended best practices for optimal results",
    href: "/guides/best-practices",
    icon: "✨",
  },
  {
    title: "Troubleshooting",
    description: "Common issues and solutions",
    href: "/guides/troubleshooting",
    icon: "🔧",
  },
  {
    title: "Prompt Templates",
    description: "Ready-to-use prompt templates for various tasks",
    href: "/guides/prompt-templates",
    icon: "📝",
  },
  {
    title: "Keyboard Shortcuts",
    description: "Speed up your workflow with keyboard shortcuts",
    href: "/guides/keyboard-shortcuts",
    icon: "⌨️",
  },
  {
    title: "Recommended Extensions",
    description: "Enhance Cursor AI with recommended extensions",
    href: "/guides/recommended-extensions",
    icon: "🔌",
  },
  {
    title: "Complex Features",
    description: "Interactive demos of advanced Cursor AI features",
    href: "/guides/complex-features",
    icon: "🔥",
  },
  {
    title: "Common Templates",
    description: "Ready-to-use templates for common use cases",
    href: "/guides/templates",
    icon: "📋",
  },
  {
    title: "Performance Guide",
    description: "Optimize your Cursor AI workflow",
    href: "/guides/performance",
    icon: "⚡",
  },
  {
    title: "Security Guide",
    description: "Best practices for secure development",
    href: "/guides/security",
    icon: "🔒",
  },
];

export function Navigation() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      className={`bg-background border-r border-border/40 transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="h-14 flex items-center justify-between px-4 border-b border-border/40">
          {!isCollapsed ? (
            <Link href="/" className="flex items-center space-x-2">
              <motion.div
                className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.span
                className="font-bold text-lg text-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Cursor AI
              </motion.span>
            </Link>
          ) : (
            <Link href="/" className="flex items-center justify-center">
              <motion.div
                className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </Link>
          )}
          <div className="flex items-center gap-2">
            {!isCollapsed && <GuideSearch guides={guides} />}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-2 rounded-md hover:bg-accent/10 text-foreground/60 hover:text-foreground/80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                {isCollapsed ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto py-4">
          <div className="space-y-6 px-2">
            {/* Main Features */}
            <div>
              {!isCollapsed && (
                <h2 className="px-3 text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2">
                  Main Features
                </h2>
              )}
              <div className="space-y-1">
                {mainFeatures.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                        isActive
                          ? "bg-accent text-accent-foreground"
                          : "hover:bg-accent/10 text-foreground/60 hover:text-foreground/80"
                      }`}
                    >
                      <span className="text-xl flex-shrink-0">{item.icon}</span>
                      {!isCollapsed && (
                        <div className="flex flex-col">
                          <span className="text-sm font-medium">
                            {item.title}
                          </span>
                          <span className="text-xs text-foreground/60 line-clamp-1">
                            {item.description}
                          </span>
                        </div>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Guides */}
            <div>
              {!isCollapsed && (
                <h2 className="px-3 text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2">
                  Guides
                </h2>
              )}
              <div className="space-y-1">
                {guides.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                        isActive
                          ? "bg-accent text-accent-foreground"
                          : "hover:bg-accent/10 text-foreground/60 hover:text-foreground/80"
                      }`}
                    >
                      <span className="text-xl flex-shrink-0">{item.icon}</span>
                      {!isCollapsed && (
                        <div className="flex flex-col">
                          <span className="text-sm font-medium">
                            {item.title}
                          </span>
                          <span className="text-xs text-foreground/60 line-clamp-1">
                            {item.description}
                          </span>
                        </div>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </nav>

        {/* Footer */}
        <div className="border-t border-border/40 p-4">
          {!isCollapsed && (
            <div className="text-xs text-foreground/60 text-center">
              Built with ❤️ using Next.js
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
