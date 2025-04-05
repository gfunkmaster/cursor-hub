"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import ConfigGenerator from "@/components/ConfigGenerator";
import {
  BookOpenIcon,
  CommandLineIcon,
  CogIcon,
  DocumentTextIcon,
  LightBulbIcon,
  CheckCircleIcon,
  ArrowPathIcon,
  BeakerIcon,
  ShieldCheckIcon,
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

const setupSteps = [
  {
    title: "Generate Configuration",
    description:
      "Use our interactive generator to create a custom configuration",
    icon: <CogIcon className="w-6 h-6" />,
    tips: [
      "Choose your project type carefully for optimal AI assistance",
      "Configure context strategy based on your project size",
      "Enable TypeScript for better type inference",
      "Adjust context lines based on your code complexity",
    ],
  },
  {
    title: "Review and Customize",
    description: "Preview and adjust your configuration",
    icon: <DocumentTextIcon className="w-6 h-6" />,
    tips: [
      "Verify all required fields are filled",
      "Check validation messages",
      "Review the generated configuration",
      "Adjust settings based on your needs",
    ],
  },
  {
    title: "Apply Configuration",
    description: "Save and apply your configuration",
    icon: <CheckCircleIcon className="w-6 h-6" />,
    tips: [
      "Download the .cursor-config.json file",
      "Place it in your project root",
      "Restart Cursor AI to apply changes",
      "Test the new configuration",
    ],
  },
];

const troubleshootingGuide = [
  {
    issue: "Configuration Not Loading",
    solutions: [
      "Verify .cursor-config.json is in the project root",
      "Check file permissions",
      "Ensure valid JSON format",
      "Restart Cursor AI after changes",
    ],
    icon: <ArrowPathIcon className="w-5 h-5" />,
  },
  {
    issue: "AI Responses Not Optimal",
    solutions: [
      "Adjust context strategy settings",
      "Review project structure configuration",
      "Update priorityFiles list",
      "Increase maxContextFiles if needed",
    ],
    icon: <BeakerIcon className="w-5 h-5" />,
  },
  {
    issue: "Security Concerns",
    solutions: [
      "Review excludePaths configuration",
      "Check file access permissions",
      "Verify sensitive file patterns are excluded",
      "Enable secure coding suggestions",
    ],
    icon: <ShieldCheckIcon className="w-5 h-5" />,
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
          productivity. Follow our step-by-step guide to create and manage your
          configuration.
        </p>
      </motion.div>

      <div className="grid gap-8 mb-16">
        {/* Quick Navigation */}
        <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-primary mb-4">
            Quick Navigation
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Setup Steps", "Configuration", "Examples", "Best Practices"].map(
              (section) => (
                <a
                  key={section}
                  href={`#${section.toLowerCase().replace(" ", "-")}`}
                  className="px-4 py-2 bg-background/80 rounded-lg hover:bg-background/90 transition-colors text-center"
                >
                  {section}
                </a>
              )
            )}
          </div>
        </div>

        {/* Setup Steps */}
        <div id="setup-steps" className="scroll-mt-16">
          <h2 className="text-2xl font-bold text-primary mb-6">
            Setup Process
          </h2>
          <div className="grid gap-6 md:grid-cols-3 mb-8">
            {setupSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-background/50 backdrop-blur-sm rounded-lg p-6 shadow-lg relative"
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-primary">
                    {step.title}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.tips.map((tip) => (
                    <li key={tip} className="flex items-start gap-2 text-sm">
                      <LightBulbIcon className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{tip}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Configuration Generator */}
        <div id="configuration" className="scroll-mt-16">
          <h2 className="text-2xl font-bold text-primary mb-6">
            Interactive Configuration Generator
          </h2>
          <div className="bg-background/50 backdrop-blur-sm rounded-lg p-8 shadow-lg">
            <ConfigGenerator />
          </div>
        </div>

        {/* Troubleshooting Guide */}
        <div className="bg-background/50 backdrop-blur-sm rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            <CommandLineIcon className="w-6 h-6" />
            Troubleshooting Guide
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {troubleshootingGuide.map((item) => (
              <div key={item.issue} className="bg-background/80 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  {item.icon}
                  <h3 className="font-semibold text-primary">{item.issue}</h3>
                </div>
                <ul className="space-y-2">
                  {item.solutions.map((solution) => (
                    <li
                      key={solution}
                      className="flex items-start gap-2 text-sm"
                    >
                      <CheckCircleIcon className="w-4 h-4 text-green-500 mt-1" />
                      <span className="text-muted-foreground">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Configuration Examples */}
        <div id="examples" className="scroll-mt-16">
          <h2 className="text-2xl font-bold text-primary mb-6">
            Configuration Examples
          </h2>
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

        {/* Best Practices */}
        <div id="best-practices" className="scroll-mt-16">
          <h2 className="text-2xl font-bold text-primary mb-6">
            Best Practices
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
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
                      <CheckCircleIcon className="w-4 h-4 text-green-500 mt-1" />
                      <span className="text-muted-foreground">{practice}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Resources */}
        <div className="bg-background/50 backdrop-blur-sm rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            <BookOpenIcon className="w-6 h-6" />
            Additional Resources
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
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
            <a
              href="https://discord.gg/cursor"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-background/80 rounded-lg hover:bg-background/90 transition-colors"
            >
              <h3 className="text-lg font-semibold text-primary mb-2">
                Community Discord
              </h3>
              <p className="text-muted-foreground">
                Join the Cursor AI community for support and discussions
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorSetupPage;
