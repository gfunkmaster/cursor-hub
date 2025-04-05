import { FC } from "react";
import Link from "next/link";
import {
  ArrowLeftIcon,
  BeakerIcon,
  SparklesIcon,
  CommandLineIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

const AdvancedTechniquesPage: FC = () => {
  const advancedPatterns = [
    {
      title: "AI-Driven Refactoring",
      description: "Complex codebase transformations using AI",
      examples: [
        {
          scenario: "Pattern Migration",
          command:
            "Analyze this component and suggest modern React patterns to replace legacy code",
          explanation:
            "AI identifies outdated patterns and suggests modern alternatives",
        },
        {
          scenario: "Architecture Transformation",
          command:
            "Convert this MVC structure to use the repository pattern with dependency injection",
          explanation:
            "AI handles complex architectural changes while maintaining functionality",
        },
      ],
    },
    {
      title: "Multi-Step AI Workflows",
      description: "Breaking down complex tasks into AI-guided steps",
      examples: [
        {
          scenario: "Feature Implementation",
          command:
            "1. First, create a data model for user preferences\n2. Then, generate CRUD endpoints\n3. Finally, add caching layer",
          explanation:
            "AI maintains context between steps for coherent implementation",
        },
        {
          scenario: "Testing Strategy",
          command:
            "1. Generate unit tests for core functions\n2. Add integration tests for API flows\n3. Create E2E test scenarios",
          explanation: "AI builds comprehensive test coverage incrementally",
        },
      ],
    },
    {
      title: "Context-Aware Generation",
      description: "Leveraging project context for smarter AI outputs",
      examples: [
        {
          scenario: "Style Matching",
          command:
            "Create a new component following the styling patterns from ThemeProvider",
          explanation: "AI analyzes existing styles and maintains consistency",
        },
        {
          scenario: "Error Handling",
          command:
            "Add error handling following our custom ErrorBoundary pattern",
          explanation:
            "AI replicates project-specific error handling approaches",
        },
      ],
    },
  ];

  const aiTechniques = [
    {
      title: "Pattern Recognition",
      description: "Help AI learn from your codebase",
      steps: [
        "Keep consistent naming conventions",
        "Maintain clear file structure",
        "Document key patterns explicitly",
        "Use typed interfaces consistently",
      ],
      icon: <BeakerIcon className="w-6 h-6" />,
    },
    {
      title: "Context Management",
      description: "Optimize AI's understanding of context",
      steps: [
        "Keep relevant files open",
        "Reference specific components",
        "Mention architectural decisions",
        "Include business logic context",
      ],
      icon: <SparklesIcon className="w-6 h-6" />,
    },
    {
      title: "Iterative Development",
      description: "Refine AI outputs effectively",
      steps: [
        "Start with broad commands",
        "Refine with specific requirements",
        "Request targeted improvements",
        "Validate and iterate",
      ],
      icon: <CommandLineIcon className="w-6 h-6" />,
    },
    {
      title: "Code Evolution",
      description: "Guide AI in evolving your codebase",
      steps: [
        "Identify improvement areas",
        "Plan incremental changes",
        "Maintain backwards compatibility",
        "Document transformations",
      ],
      icon: <ArrowPathIcon className="w-6 h-6" />,
    },
  ];

  const bestPractices = [
    {
      title: "Maximize AI Context",
      tips: [
        "Keep related files open in editor",
        "Reference specific file locations",
        "Mention relevant dependencies",
        "Include business requirements",
      ],
    },
    {
      title: "Structured Commands",
      tips: [
        "Use clear, specific language",
        "Break down complex requests",
        "Include acceptance criteria",
        "Specify edge cases",
      ],
    },
    {
      title: "Quality Control",
      tips: [
        "Review AI-generated code thoroughly",
        "Test edge cases explicitly",
        "Validate business logic",
        "Check performance implications",
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
        <h1 className="text-4xl font-bold mb-4">Advanced AI Techniques</h1>
        <p className="text-xl text-muted-foreground">
          Master advanced patterns for AI-first development with Cursor
        </p>
      </div>

      {/* Advanced Patterns */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Advanced AI Patterns</h2>
        <div className="space-y-8">
          {advancedPatterns.map((pattern) => (
            <div
              key={pattern.title}
              className="bg-background/50 p-6 rounded-lg space-y-6"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{pattern.title}</h3>
                <p className="text-muted-foreground">{pattern.description}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {pattern.examples.map((example) => (
                  <div key={example.scenario} className="space-y-3">
                    <h4 className="font-medium text-sm">{example.scenario}</h4>
                    <div className="bg-black/90 p-3 rounded">
                      <code className="text-sm text-green-400 whitespace-pre-wrap">
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

      {/* AI Techniques */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          AI Optimization Techniques
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {aiTechniques.map((technique) => (
            <div
              key={technique.title}
              className="bg-background/50 p-6 rounded-lg space-y-4"
            >
              <div className="flex items-center gap-2">
                <div className="text-primary">{technique.icon}</div>
                <h3 className="font-semibold">{technique.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {technique.description}
              </p>
              <ul className="space-y-2">
                {technique.steps.map((step) => (
                  <li key={step} className="flex items-start gap-2 text-sm">
                    <SparklesIcon className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Best Practices */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Advanced Best Practices</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {bestPractices.map((practice) => (
            <div
              key={practice.title}
              className="bg-background/50 p-6 rounded-lg space-y-4"
            >
              <h3 className="font-semibold">{practice.title}</h3>
              <ul className="space-y-2">
                {practice.tips.map((tip) => (
                  <li key={tip} className="flex items-start gap-2 text-sm">
                    <CommandLineIcon className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>{tip}</span>
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

export default AdvancedTechniquesPage;
