import { FC } from "react";
import Link from "next/link";
import { ArrowLeftIcon, LightBulbIcon } from "@heroicons/react/24/outline";

const NaturalLanguageGuidePage: FC = () => {
  const commandExamples = [
    {
      category: "Code Generation",
      examples: [
        {
          command: "Create a React form component with validation",
          explanation:
            "Generates a complete form component with built-in validation",
        },
        {
          command: "Add error handling to this function",
          explanation:
            "Wraps the current function with try-catch and proper error handling",
        },
        {
          command: "Create an API endpoint for user authentication",
          explanation:
            "Generates a complete authentication endpoint with security best practices",
        },
      ],
    },
    {
      category: "Code Transformation",
      examples: [
        {
          command: "Convert this to TypeScript",
          explanation:
            "Adds type annotations and converts JS code to TypeScript",
        },
        {
          command: "Refactor this to use async/await",
          explanation: "Converts Promise-based code to async/await syntax",
        },
        {
          command: "Optimize this function for performance",
          explanation: "Analyzes and improves code performance",
        },
      ],
    },
    {
      category: "Documentation & Testing",
      examples: [
        {
          command: "Add JSDoc comments to this function",
          explanation: "Generates comprehensive documentation comments",
        },
        {
          command: "Create unit tests for this component",
          explanation: "Generates test cases with good coverage",
        },
        {
          command: "Document this API endpoint",
          explanation: "Creates API documentation with examples",
        },
      ],
    },
  ];

  const bestPractices = [
    {
      title: "Be Specific",
      description:
        "Include details about the desired outcome, programming language, and any specific requirements",
      example:
        "Create a TypeScript React component that handles form submission with Zod validation",
    },
    {
      title: "Provide Context",
      description:
        "Mention relevant frameworks, libraries, or patterns you want to use",
      example: "Add Redux Toolkit state management to this React component",
    },
    {
      title: "Specify Constraints",
      description:
        "Mention any limitations or specific requirements that should be considered",
      example:
        "Optimize this function for memory usage, keeping it under O(n) space complexity",
    },
    {
      title: "Request Explanations",
      description:
        "Ask for comments or documentation to understand the generated code",
      example: "Create a sorting algorithm and explain each step with comments",
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
        <h1 className="text-4xl font-bold mb-4">Natural Language Commands</h1>
        <p className="text-xl text-muted-foreground">
          Learn how to effectively communicate with Cursor's AI to get exactly
          what you need
        </p>
      </div>

      {/* Best Practices */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Best Practices</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {bestPractices.map((practice) => (
            <div
              key={practice.title}
              className="bg-background/50 p-6 rounded-lg space-y-4"
            >
              <h3 className="font-semibold flex items-center gap-2">
                <LightBulbIcon className="w-5 h-5 text-primary" />
                {practice.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {practice.description}
              </p>
              <div className="bg-black/90 p-3 rounded">
                <code className="text-sm text-green-400">
                  {practice.example}
                </code>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Command Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Command Examples</h2>
        <div className="space-y-8">
          {commandExamples.map((category) => (
            <div key={category.category}>
              <h3 className="text-xl font-semibold mb-4">
                {category.category}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.examples.map((example) => (
                  <div
                    key={example.command}
                    className="bg-background/50 p-4 rounded-lg space-y-3"
                  >
                    <div className="bg-black/90 p-3 rounded">
                      <code className="text-sm text-green-400">
                        {example.command}
                      </code>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {example.explanation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pro Tips */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Pro Tips</h2>
        <div className="bg-background/50 p-6 rounded-lg space-y-4">
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-primary">•</span>
              <div>
                <p className="font-medium">Use Multi-Step Commands</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Break down complex tasks into smaller, more manageable
                  commands for better results
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary">•</span>
              <div>
                <p className="font-medium">Leverage Context</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Cursor AI understands your project context. Reference existing
                  code and patterns
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary">•</span>
              <div>
                <p className="font-medium">Iterate and Refine</p>
                <p className="text-sm text-muted-foreground mt-1">
                  If the first result isn't perfect, refine your command with
                  more specific requirements
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary">•</span>
              <div>
                <p className="font-medium">Use Technical Terms</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Include specific technical terms and patterns when relevant
                  for more precise results
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default NaturalLanguageGuidePage;
