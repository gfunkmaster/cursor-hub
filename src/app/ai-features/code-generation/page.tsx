import { FC } from "react";
import Link from "next/link";
import {
  CodeBracketIcon,
  BeakerIcon,
  DocumentCheckIcon,
  CubeIcon,
  ArrowRightIcon,
  CommandLineIcon,
} from "@heroicons/react/24/outline";

const CodeGenerationPage: FC = () => {
  const generationFeatures = [
    {
      title: "Smart Component Generation",
      description: "Generate React components with best practices",
      icon: <CodeBracketIcon className="w-6 h-6" />,
      features: [
        "TypeScript support with proper types",
        "Built-in error handling",
        "Accessibility compliance",
        "Responsive design patterns",
      ],
    },
    {
      title: "API Integration",
      description: "Generate API endpoints and integrations",
      icon: <CubeIcon className="w-6 h-6" />,
      features: [
        "Type-safe API routes",
        "Request validation",
        "Error handling middleware",
        "OpenAPI/Swagger documentation",
      ],
    },
    {
      title: "Test Generation",
      description: "Create comprehensive test suites",
      icon: <BeakerIcon className="w-6 h-6" />,
      features: [
        "Unit test generation",
        "Integration test scenarios",
        "Mock data creation",
        "Edge case coverage",
      ],
    },
  ];

  const commonUseCases = [
    {
      title: "Component Creation",
      examples: [
        {
          prompt: "Create a data table component with sorting and pagination",
          context: "UI Component Development",
          output: [
            "TypeScript React component",
            "Sort functionality",
            "Pagination controls",
            "Loading states",
          ],
        },
        {
          prompt: "Generate a form with validation for user registration",
          context: "Form Development",
          output: [
            "Form component with validation",
            "Error handling",
            "Submit functionality",
            "Success feedback",
          ],
        },
      ],
    },
    {
      title: "API Development",
      examples: [
        {
          prompt: "Create a REST API endpoint for user authentication",
          context: "Backend Development",
          output: [
            "API route handler",
            "Request validation",
            "JWT implementation",
            "Error responses",
          ],
        },
        {
          prompt: "Generate CRUD operations for products",
          context: "API Development",
          output: [
            "CRUD endpoints",
            "Database operations",
            "Input validation",
            "Response formatting",
          ],
        },
      ],
    },
    {
      title: "Testing",
      examples: [
        {
          prompt: "Generate unit tests for the authentication service",
          context: "Test Development",
          output: [
            "Test suite setup",
            "Mock implementations",
            "Edge case tests",
            "Error scenarios",
          ],
        },
        {
          prompt: "Create integration tests for the checkout flow",
          context: "E2E Testing",
          output: [
            "Test scenarios",
            "API mocking",
            "State verification",
            "Error handling tests",
          ],
        },
      ],
    },
  ];

  const bestPractices = [
    {
      title: "Clear Requirements",
      description: "Specify detailed requirements for better output",
      tips: [
        "Define expected behavior",
        "Specify error handling needs",
        "Include performance requirements",
        "Mention specific patterns to follow",
      ],
    },
    {
      title: "Code Style",
      description: "Maintain consistent code quality",
      tips: [
        "Specify preferred naming conventions",
        "Request documentation comments",
        "Define type safety requirements",
        "Mention code organization preferences",
      ],
    },
    {
      title: "Progressive Generation",
      description: "Build complex features incrementally",
      tips: [
        "Start with basic structure",
        "Add features step by step",
        "Validate each iteration",
        "Refine and optimize progressively",
      ],
    },
  ];

  const advancedFeatures = [
    {
      title: "Project-Wide Generation",
      description: "Generate code across multiple files",
      command:
        "Generate a complete authentication system with frontend and backend",
      features: [
        "Multi-file awareness",
        "Dependency management",
        "Configuration updates",
        "Documentation generation",
      ],
    },
    {
      title: "Pattern Replication",
      description: "Replicate existing patterns in new code",
      command: "Create a new service following the UserService pattern",
      features: [
        "Pattern recognition",
        "Consistent implementation",
        "Automated adaptation",
        "Context awareness",
      ],
    },
    {
      title: "Intelligent Refactoring",
      description: "Transform existing code with new patterns",
      command: "Refactor this class to use the repository pattern",
      features: [
        "Code analysis",
        "Pattern application",
        "Safe transformations",
        "Documentation updates",
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="mb-16">
        <h1 className="text-4xl font-bold mb-4">Code Generation</h1>
        <p className="text-xl text-muted-foreground">
          Master AI-powered code generation to accelerate your development
          workflow
        </p>
      </div>

      {/* Key Features */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {generationFeatures.map((feature) => (
            <div
              key={feature.title}
              className="bg-background/50 p-6 rounded-lg space-y-4"
            >
              <div className="flex items-center gap-2">
                <div className="text-primary">{feature.icon}</div>
                <h3 className="font-semibold">{feature.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.features.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <CommandLineIcon className="w-4 h-4 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Common Use Cases */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Common Use Cases</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {commonUseCases.map((useCase) => (
            <div
              key={useCase.title}
              className="bg-background/50 p-6 rounded-lg space-y-4"
            >
              <h3 className="font-semibold">{useCase.title}</h3>
              <div className="space-y-4">
                {useCase.examples.map((example) => (
                  <div key={example.prompt} className="space-y-3">
                    <div className="bg-black/90 p-4 rounded">
                      <code className="block text-sm text-green-400">
                        {example.prompt}
                      </code>
                      <div className="text-xs text-muted-foreground mt-2">
                        Context: {example.context}
                      </div>
                    </div>
                    <div className="space-y-1">
                      {example.output.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <ArrowRightIcon className="w-4 h-4 text-primary" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Best Practices */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Best Practices</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {bestPractices.map((practice) => (
            <div
              key={practice.title}
              className="bg-background/50 p-6 rounded-lg space-y-4"
            >
              <h3 className="font-semibold">{practice.title}</h3>
              <p className="text-sm text-muted-foreground">
                {practice.description}
              </p>
              <ul className="space-y-2">
                {practice.tips.map((tip) => (
                  <li key={tip} className="flex items-start gap-2 text-sm">
                    <DocumentCheckIcon className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Advanced Features */}
      <section>
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
              <div className="bg-black/90 p-3 rounded">
                <code className="text-sm text-green-400">
                  {feature.command}
                </code>
              </div>
              <ul className="space-y-2">
                {feature.features.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <BeakerIcon className="w-4 h-4 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CodeGenerationPage;
