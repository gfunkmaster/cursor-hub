import { FC } from "react";
import Link from "next/link";
import {
  ArrowLeftIcon,
  BeakerIcon,
  CommandLineIcon,
  LightBulbIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

const AdvancedTechniquesPage: FC = () => {
  const advancedPatterns = [
    {
      title: "Chain Commands",
      description: "Combine multiple commands for complex transformations",
      example: {
        steps: [
          "Convert this to TypeScript",
          "Add error handling",
          "Generate unit tests",
        ],
        explanation: "Chain commands to progressively enhance your code",
      },
      icon: <CommandLineIcon className="w-5 h-5" />,
    },
    {
      title: "Context-Aware Refactoring",
      description: "Use project context for smarter code changes",
      example: {
        steps: [
          "Refactor to match the pattern in UserService",
          "Update types based on the API schema",
          "Add logging consistent with the project",
        ],
        explanation: "Leverage existing patterns and conventions",
      },
      icon: <BeakerIcon className="w-5 h-5" />,
    },
    {
      title: "Smart Code Generation",
      description: "Generate code that integrates with your codebase",
      example: {
        steps: [
          "Create a component using our design system",
          "Add state management with our store pattern",
          "Include our standard error boundaries",
        ],
        explanation: "Generate code that follows project patterns",
      },
      icon: <CodeBracketIcon className="w-5 h-5" />,
    },
  ];

  const advancedFeatures = [
    {
      title: "Custom Code Templates",
      description: "Create reusable templates for common patterns",
      steps: [
        "Define template with placeholders",
        "Use variables for dynamic content",
        "Apply consistent styling and patterns",
      ],
    },
    {
      title: "Batch Operations",
      description: "Apply similar changes across multiple files",
      steps: [
        "Select files or patterns",
        "Define transformation rules",
        "Preview and apply changes",
      ],
    },
    {
      title: "Integration Workflows",
      description: "Combine AI with your development workflow",
      steps: [
        "Code review assistance",
        "Documentation generation",
        "Test coverage analysis",
      ],
    },
  ];

  const powerUserTips = [
    {
      title: "Project-Wide Refactoring",
      description: "Safely refactor code across your entire project",
      commands: [
        "Update all API endpoints to new format",
        "Migrate components to TypeScript",
        "Standardize error handling across services",
      ],
    },
    {
      title: "Code Analysis",
      description: "Get deep insights into your code",
      commands: [
        "Analyze performance bottlenecks",
        "Find security vulnerabilities",
        "Identify code duplication",
      ],
    },
    {
      title: "Architecture Assistance",
      description: "Get help with architectural decisions",
      commands: [
        "Suggest optimal data structures",
        "Recommend design patterns",
        "Evaluate trade-offs",
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <Link
        href="/ai-features/command-center"
        className="inline-flex items-center text-primary hover:text-primary/80 mb-8"
      >
        <ArrowLeftIcon className="w-4 h-4 mr-2" />
        Back to Command Center
      </Link>

      <div className="mb-16">
        <h1 className="text-4xl font-bold mb-4">Advanced Techniques</h1>
        <p className="text-xl text-muted-foreground">
          Master advanced patterns and techniques to unlock the full potential
          of Cursor AI
        </p>
      </div>

      {/* Advanced Patterns */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          Advanced Command Patterns
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {advancedPatterns.map((pattern) => (
            <div
              key={pattern.title}
              className="bg-background/50 p-6 rounded-lg space-y-4"
            >
              <div className="flex items-center gap-2">
                <div className="text-primary">{pattern.icon}</div>
                <h3 className="font-semibold">{pattern.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {pattern.description}
              </p>
              <div className="space-y-2">
                <div className="bg-black/90 p-3 rounded space-y-2">
                  {pattern.example.steps.map((step, index) => (
                    <div key={step} className="flex items-start gap-2">
                      <span className="text-primary text-sm">{index + 1}.</span>
                      <code className="text-sm text-green-400">{step}</code>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">
                  {pattern.example.explanation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Advanced Features */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Advanced Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {advancedFeatures.map((feature) => (
            <div
              key={feature.title}
              className="bg-background/50 p-6 rounded-lg space-y-4"
            >
              <h3 className="font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
              <div className="space-y-2">
                {feature.steps.map((step) => (
                  <div
                    key={step}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <LightBulbIcon className="w-4 h-4 text-primary" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Power User Tips */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Power User Tips</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {powerUserTips.map((tip) => (
            <div
              key={tip.title}
              className="bg-background/50 p-6 rounded-lg space-y-4"
            >
              <h3 className="font-semibold">{tip.title}</h3>
              <p className="text-sm text-muted-foreground">{tip.description}</p>
              <div className="bg-black/90 p-3 rounded space-y-2">
                {tip.commands.map((command) => (
                  <code key={command} className="block text-sm text-green-400">
                    {command}
                  </code>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AdvancedTechniquesPage;
