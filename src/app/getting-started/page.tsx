"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  CommandLineIcon,
  SparklesIcon,
  KeyIcon,
  DocumentTextIcon,
  CogIcon,
  BeakerIcon,
  LightBulbIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

interface QuickTip {
  title: string;
  description: string;
  shortcut?: string;
}

interface Section {
  title: string;
  description: string;
  icon: JSX.Element;
  content: React.ReactNode;
}

const GettingStartedPage: FC = () => {
  const quickTips: QuickTip[] = [
    {
      title: "Quick AI Command",
      description: "Access AI assistance instantly",
      shortcut: "Cmd + K",
    },
    {
      title: "Line Edit",
      description: "Edit current line with AI",
      shortcut: "Cmd + L",
    },
    {
      title: "Multi-Line Edit",
      description: "Edit selected lines with AI",
      shortcut: "Cmd + Shift + L",
    },
    {
      title: "Inline Chat",
      description: "Chat about specific code",
      shortcut: "Cmd + I",
    },
    {
      title: "Code Actions",
      description: "Quick AI suggestions",
      shortcut: "Cmd + ;",
    },
  ];

  const sections: Section[] = [
    {
      title: "Initial Setup",
      description: "Get your environment ready for AI-powered development",
      icon: <CogIcon className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold text-lg">Essential Steps:</h4>
          <ol className="space-y-3 list-decimal list-inside">
            <li>Install Node.js and Git</li>
            <li>Set up your .cursor-config.json (use our generator)</li>
            <li>Configure project-specific settings</li>
            <li>Set up your docs/ folder structure</li>
          </ol>
          <div className="bg-black/90 p-4 rounded-md mt-4">
            <pre className="text-green-400 text-sm">
              {`// Example .cursor-config.json structure
{
  "project": {
    "name": "your-project",
    "type": "next-app"
  },
  "ai": {
    "contextStrategy": "balanced",
    "autoSuggest": true
  }
}`}
            </pre>
          </div>
        </div>
      ),
    },
    {
      title: "AI Communication",
      description: "Master the art of effective AI prompting",
      icon: <SparklesIcon className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <h4 className="font-semibold text-lg">Effective Prompting:</h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-primary">→</span>
              <div>
                <span className="font-medium">Be Specific:</span>
                <pre className="text-sm bg-black/90 p-2 rounded mt-1">
                  "Refactor this function to use async/await and add error
                  handling"
                </pre>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">→</span>
              <div>
                <span className="font-medium">Provide Context:</span>
                <pre className="text-sm bg-black/90 p-2 rounded mt-1">
                  "This is a React component that fetches user data. Add loading
                  and error states."
                </pre>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">→</span>
              <div>
                <span className="font-medium">Iterative Refinement:</span>
                <pre className="text-sm bg-black/90 p-2 rounded mt-1">
                  "Now optimize this code for performance, focusing on
                  memoization"
                </pre>
              </div>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Project Organization",
      description: "Structure your project for optimal AI understanding",
      icon: <DocumentTextIcon className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold">Essential Files:</h4>
              <ul className="space-y-1 text-sm">
                <li>📄 README.md</li>
                <li>⚙️ .cursor-config.json</li>
                <li>📁 docs/</li>
                <li>🔍 .gitignore</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Docs Structure:</h4>
              <ul className="space-y-1 text-sm">
                <li>📁 docs/guides/</li>
                <li>📁 docs/api/</li>
                <li>📁 docs/examples/</li>
                <li>📁 docs/best-practices/</li>
              </ul>
            </div>
          </div>
          <div className="bg-black/90 p-4 rounded-md mt-4">
            <pre className="text-green-400 text-sm">
              {`# Recommended Structure
src/
  ├── components/
  ├── lib/
  ├── types/
  └── utils/
docs/
  ├── guides/
  ├── api/
  └── examples/`}
            </pre>
          </div>
        </div>
      ),
    },
    {
      title: "Hidden Treasures",
      description: "Discover powerful features you might have missed",
      icon: <LightBulbIcon className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="bg-background/50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Smart Selection</h4>
              <p className="text-sm text-muted-foreground">
                Double-click a variable to select all occurrences. AI
                understands the context!
              </p>
            </div>
            <div className="bg-background/50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Context Awareness</h4>
              <p className="text-sm text-muted-foreground">
                AI remembers your previous interactions within the same file.
              </p>
            </div>
            <div className="bg-background/50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Smart Imports</h4>
              <p className="text-sm text-muted-foreground">
                AI automatically manages imports when generating code.
              </p>
            </div>
            <div className="bg-background/50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Code Actions</h4>
              <p className="text-sm text-muted-foreground">
                Look for the 💡 icon for AI-powered code improvements.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Best Practices",
      description: "Optimize your workflow with these proven patterns",
      icon: <BeakerIcon className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold">Daily Habits:</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-primary">1.</span>
                  Start with clear documentation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">2.</span>
                  Use consistent naming patterns
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">3.</span>
                  Keep related code close together
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">4.</span>
                  Commit small, meaningful changes
                </li>
              </ul>
            </div>
            <div className="bg-background/50 p-4 rounded-lg mt-4">
              <h4 className="font-semibold mb-2">Pro Tips:</h4>
              <ul className="space-y-2 text-sm">
                <li>• Create reusable prompt templates</li>
                <li>• Maintain a personal snippets library</li>
                <li>• Document complex business logic</li>
                <li>• Use AI for code reviews</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-primary mb-4">
          Welcome to Cursor AI
        </h1>
        <p className="text-xl text-muted-foreground">
          Your complete guide to becoming a Cursor AI superuser
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mb-16">
        {quickTips.map((tip) => (
          <motion.div
            key={tip.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-background/50 backdrop-blur-sm rounded-lg p-4 shadow-lg"
          >
            <h3 className="font-semibold text-primary mb-2">{tip.title}</h3>
            <p className="text-sm text-muted-foreground mb-2">
              {tip.description}
            </p>
            {tip.shortcut && (
              <div className="flex items-center gap-2">
                <KeyIcon className="w-4 h-4 text-primary" />
                <code className="text-xs bg-background/90 px-2 py-1 rounded">
                  {tip.shortcut}
                </code>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="space-y-16">
        {sections.map((section, index) => (
          <motion.section
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-background/50 backdrop-blur-sm rounded-lg p-8 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                {section.icon}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-primary">
                  {section.title}
                </h2>
                <p className="text-muted-foreground">{section.description}</p>
              </div>
            </div>
            {section.content}
          </motion.section>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-16 text-center"
      >
        <h2 className="text-2xl font-bold text-primary mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="text-muted-foreground mb-8">
          Explore our detailed guides and become a Cursor AI expert
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/guides/editor-setup"
            className="inline-flex items-center gap-2 px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 transition-colors"
          >
            <CogIcon className="w-5 h-5" />
            Configure Your Editor
          </Link>
          <Link
            href="/guides/productivity"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-base font-medium rounded-md text-primary hover:bg-primary/10 transition-colors"
          >
            <RocketLaunchIcon className="w-5 h-5" />
            Boost Productivity
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default GettingStartedPage;
