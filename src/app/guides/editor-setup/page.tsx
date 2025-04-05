"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ConfigGenerator from "@/components/ConfigGenerator";

interface ConfigSection {
  title: string;
  description: string;
  code: string;
  explanation: string;
}

const configSections: ConfigSection[] = [
  {
    title: "Project Context Configuration",
    description: "Optimize how Cursor AI understands your project structure",
    code: `{
  "projectContext": {
    "includePaths": ["src/**/*", "docs/**/*"],
    "excludePaths": ["**/node_modules/**", "**/dist/**"],
    "maxContextFiles": 10,
    "priorityFiles": ["README.md", "docs/*.md", ".cursor-config.json"]
  }
}`,
    explanation:
      "Define which files Cursor AI should focus on for context, improving response relevance.",
  },
  {
    title: "Code Style Rules",
    description: "Maintain consistent code formatting across your project",
    code: `{
  "codeStyle": {
    "typescript": {
      "quotes": "single",
      "semicolons": true,
      "indentSize": 2,
      "maxLineLength": 80,
      "preferArrowFunctions": true,
      "preferConst": true
    },
    "react": {
      "componentStyle": "functional",
      "propsInterface": true,
      "styleApproach": "tailwind"
    }
  }
}`,
    explanation:
      "Ensure AI-generated code follows your project's style conventions.",
  },
  {
    title: "Documentation Templates",
    description: "Standardize documentation generation",
    code: `{
  "docTemplates": {
    "component": {
      "include": ["props", "examples", "notes"],
      "style": "jsdoc",
      "generateStorybook": true
    },
    "function": {
      "include": ["params", "returns", "examples"],
      "style": "tsdoc"
    }
  }
}`,
    explanation:
      "Define documentation standards for consistent AI-generated documentation.",
  },
  {
    title: "AI Interaction Rules",
    description: "Optimize AI responses for your needs",
    code: `{
  "aiConfig": {
    "responseStyle": "concise",
    "includeExamples": true,
    "defaultLanguage": "typescript",
    "autoComplete": {
      "enabled": true,
      "triggerCharacters": [".", "(", "["]
    },
    "contextWindow": {
      "linesBefore": 50,
      "linesAfter": 20
    }
  }
}`,
    explanation:
      "Customize how Cursor AI interacts with you for optimal productivity.",
  },
];

const bestPractices = [
  {
    category: "Project Structure",
    practices: [
      "Keep related files close together in the directory structure",
      "Use feature-based organization for larger projects",
      "Maintain clear separation between UI components and business logic",
      "Group reusable utilities and hooks in dedicated directories",
    ],
  },
  {
    category: "Code Organization",
    practices: [
      "Follow consistent naming conventions across the project",
      "Use TypeScript interfaces for better type safety",
      "Keep components focused and single-responsibility",
      "Implement proper error boundaries and fallbacks",
    ],
  },
  {
    category: "AI Interaction",
    practices: [
      "Provide clear context when asking for AI assistance",
      "Use specific prompts for better results",
      "Break down complex tasks into smaller chunks",
      "Leverage AI for code reviews and optimizations",
    ],
  },
  {
    category: "Documentation",
    practices: [
      "Document complex logic and business rules",
      "Include examples in component documentation",
      "Keep README files up to date",
      "Use JSDoc comments for better IDE integration",
    ],
  },
];

const EditorSetupPage: FC = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-primary mb-4">
          Cursor AI Editor Setup Guide
        </h1>
        <p className="text-xl text-muted-foreground">
          Optimize your editor configuration for maximum AI assistance
        </p>
      </motion.div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-primary mb-6">
          Interactive Configuration Generator
        </h2>
        <ConfigGenerator />
      </div>

      <div className="grid gap-12 mb-16">
        {configSections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-background/50 backdrop-blur-sm rounded-lg p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-primary mb-3">
              {section.title}
            </h2>
            <p className="text-muted-foreground mb-6">{section.description}</p>
            <div className="mb-6">
              <pre className="bg-black/90 p-6 rounded-lg overflow-x-auto">
                <code className="text-green-400 text-sm">{section.code}</code>
              </pre>
            </div>
            <p className="text-sm text-muted-foreground">
              {section.explanation}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="grid gap-8 md:grid-cols-2 mb-16"
      >
        {bestPractices.map((category) => (
          <div
            key={category.category}
            className="bg-background/50 backdrop-blur-sm rounded-lg p-6 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-primary mb-4">
              {category.category}
            </h3>
            <ul className="space-y-3">
              {category.practices.map((practice) => (
                <li key={practice} className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span className="text-muted-foreground">{practice}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-primary/5 rounded-lg p-8"
      >
        <h2 className="text-2xl font-bold text-primary mb-6">
          Essential Setup Steps
        </h2>
        <ol className="space-y-4">
          <li className="flex items-start">
            <span className="text-primary font-bold mr-2">1.</span>
            <span>
              Use the configuration generator above to create your base config
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-primary font-bold mr-2">2.</span>
            <span>
              Customize the generated configuration for your specific needs
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-primary font-bold mr-2">3.</span>
            <span>Add project-specific documentation in `/docs`</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary font-bold mr-2">4.</span>
            <span>Create custom prompt templates for common tasks</span>
          </li>
        </ol>

        <div className="mt-8 p-6 bg-background/80 rounded-lg">
          <h3 className="text-xl font-semibold text-primary mb-4">Pro Tips</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span>
                Keep your configuration file up to date as your project evolves
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span>Document project-specific conventions in README.md</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span>
                Use consistent naming patterns for better AI understanding
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span>
                Regularly update excluded paths to maintain performance
              </span>
            </li>
          </ul>
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/docs/superuser-guide"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 transition-colors"
          >
            View Complete Documentation
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default EditorSetupPage;
