"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import ConfigGenerator from "@/components/ConfigGenerator";
import {
  BookOpenIcon,
  CommandLineIcon,
  CogIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

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
          Cursor AI Editor Setup
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Configure your Cursor AI environment for optimal performance and
          productivity. Generate, customize, and manage your configuration with
          our interactive tools.
        </p>
      </motion.div>

      <div className="grid gap-8 mb-16">
        <div className="bg-background/50 backdrop-blur-sm rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            <CommandLineIcon className="w-6 h-6" />
            Quick Start Guide
          </h2>
          <ol className="space-y-4 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="font-bold text-primary">1.</span>
              Use the configuration generator below to create your custom
              settings
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-primary">2.</span>
              Preview and adjust the configuration in real-time
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-primary">3.</span>
              Download the generated .cursor-config.json file
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-primary">4.</span>
              Place the file in your project's root directory
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-primary">5.</span>
              Restart Cursor AI to apply the new configuration
            </li>
          </ol>
        </div>

        <div className="bg-background/50 backdrop-blur-sm rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-primary mb-6">
            Interactive Configuration Generator
          </h2>
          <ConfigGenerator />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {configSections.map((section) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-background/50 backdrop-blur-sm rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-primary mb-3">
                {section.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {section.description}
              </p>
              <div className="bg-black/90 p-4 rounded-lg overflow-x-auto">
                <pre className="text-green-400 text-sm">{section.code}</pre>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                {section.explanation}
              </p>
            </motion.div>
          ))}
        </div>
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
            <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
              <DocumentTextIcon className="w-5 h-5" />
              {category.category}
            </h3>
            <ul className="space-y-3">
              {category.practices.map((practice) => (
                <li key={practice} className="flex items-start gap-2">
                  <span className="text-primary">→</span>
                  <span className="text-muted-foreground">{practice}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>

      <div className="bg-background/50 backdrop-blur-sm rounded-lg p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
          <BookOpenIcon className="w-6 h-6" />
          Additional Resources
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="https://cursor.sh/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-background/80 rounded-lg hover:bg-background/90 transition-colors"
          >
            <h3 className="text-lg font-semibold text-primary mb-2">
              Official Documentation
            </h3>
            <p className="text-muted-foreground">
              Comprehensive guides and references for Cursor AI features
            </p>
          </a>
          <a
            href="https://github.com/getcursor/cursor"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-background/80 rounded-lg hover:bg-background/90 transition-colors"
          >
            <h3 className="text-lg font-semibold text-primary mb-2">
              GitHub Repository
            </h3>
            <p className="text-muted-foreground">
              Stay updated with the latest changes and contribute to Cursor AI
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EditorSetupPage;
