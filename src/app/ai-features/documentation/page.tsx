import { FC } from "react";
import {
  DocumentTextIcon,
  DocumentDuplicateIcon,
  CodeBracketIcon,
  BookOpenIcon,
  SparklesIcon,
  CommandLineIcon,
} from "@heroicons/react/24/outline";

const DocumentationPage: FC = () => {
  const aiFeatures = [
    {
      title: "Smart Documentation Generation",
      description: "AI-powered documentation that understands your code",
      icon: <DocumentTextIcon className="w-6 h-6" />,
      capabilities: [
        {
          name: "Context-Aware Comments",
          description: "Generate meaningful comments based on code analysis",
          example: "/document explain the business logic in this service class",
        },
        {
          name: "Type Documentation",
          description: "Automatically document types, interfaces, and schemas",
          example:
            "/document generate type documentation for this API response",
        },
      ],
    },
    {
      title: "API Documentation",
      description: "Comprehensive API documentation with examples",
      icon: <CodeBracketIcon className="w-6 h-6" />,
      capabilities: [
        {
          name: "Endpoint Documentation",
          description: "Document API endpoints with request/response examples",
          example: "/document create OpenAPI spec for this Express router",
        },
        {
          name: "Authentication Flows",
          description: "Document authentication and authorization patterns",
          example:
            "/document explain OAuth flow implementation in this service",
        },
      ],
    },
    {
      title: "README Generation",
      description: "Project documentation that stays up to date",
      icon: <BookOpenIcon className="w-6 h-6" />,
      capabilities: [
        {
          name: "Project Overview",
          description: "Generate comprehensive project documentation",
          example: "/document create README with setup and usage instructions",
        },
        {
          name: "Architecture Documentation",
          description: "Document system architecture and design patterns",
          example:
            "/document explain the architecture patterns in this project",
        },
      ],
    },
  ];

  const documentationPatterns = [
    {
      title: "Component Documentation",
      description: "Document React components and their usage",
      examples: [
        {
          before:
            "interface ButtonProps {\n  variant: 'primary' | 'secondary';\n  size: 'sm' | 'md' | 'lg';\n  isLoading?: boolean;\n  children: React.ReactNode;\n}",
          command: "/document generate component documentation with examples",
          after:
            "/**\n * A flexible Button component that supports different variants and sizes\n *\n * @component\n * @example\n * ```tsx\n * <Button variant=\"primary\" size=\"md\" isLoading={false}>\n *   Click Me\n * </Button>\n * ```\n *\n * @param {Object} props - Component props\n * @param {'primary' | 'secondary'} props.variant - Visual style variant\n * @param {'sm' | 'md' | 'lg'} props.size - Button size\n * @param {boolean} [props.isLoading] - Show loading state\n * @param {React.ReactNode} props.children - Button content\n */",
        },
      ],
    },
    {
      title: "Function Documentation",
      description: "Document complex functions and their behavior",
      examples: [
        {
          before:
            "async function fetchUserData(userId: string, include: string[] = []) {\n  const response = await api.get(`/users/${userId}`, { params: { include } });\n  return response.data;\n}",
          command: "/document explain this function with JSDoc",
          after:
            "/**\n * Fetches user data from the API with optional included relations\n *\n * @async\n * @param {string} userId - The unique identifier of the user\n * @param {string[]} [include=[]] - Array of relations to include in the response\n * @returns {Promise<User>} The user data with requested relations\n * @throws {ApiError} When the user is not found or server errors occur\n *\n * @example\n * ```ts\n * // Fetch user with posts and comments\n * const user = await fetchUserData('123', ['posts', 'comments']);\n * ```\n */",
        },
      ],
    },
  ];

  const aiTechniques = [
    {
      title: "Documentation Maintenance",
      description: "Keep documentation in sync with code changes",
      steps: [
        "Update docs when code changes",
        "Validate existing documentation",
        "Identify outdated sections",
        "Suggest improvements",
      ],
    },
    {
      title: "Documentation Style",
      description: "Maintain consistent documentation style",
      steps: [
        "Follow project conventions",
        "Use consistent formatting",
        "Include relevant examples",
        "Add type information",
      ],
    },
    {
      title: "Integration Patterns",
      description: "Document system integrations and workflows",
      steps: [
        "Describe data flows",
        "Explain error handling",
        "Document edge cases",
        "Include configuration",
      ],
    },
  ];

  const bestPractices = [
    {
      title: "AI-First Documentation",
      tips: [
        "Start with AI-generated docs",
        "Review and enhance content",
        "Keep context in view",
        "Update incrementally",
      ],
    },
    {
      title: "Documentation Structure",
      tips: [
        "Organize by feature",
        "Include usage examples",
        "Document edge cases",
        "Add troubleshooting",
      ],
    },
    {
      title: "Maintenance Strategy",
      tips: [
        "Update with code changes",
        "Review periodically",
        "Version documentation",
        "Archive old versions",
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="mb-16">
        <h1 className="text-4xl font-bold mb-4">AI-Powered Documentation</h1>
        <p className="text-xl text-muted-foreground">
          Generate and maintain comprehensive documentation using Cursor AI
        </p>
      </div>

      {/* AI Features */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          AI Documentation Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {aiFeatures.map((feature) => (
            <div
              key={feature.title}
              className="bg-background/50 p-6 rounded-lg space-y-6"
            >
              <div className="flex items-center gap-2">
                <div className="text-primary">{feature.icon}</div>
                <h3 className="font-semibold">{feature.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
              <div className="space-y-4">
                {feature.capabilities.map((capability) => (
                  <div key={capability.name} className="space-y-2">
                    <h4 className="text-sm font-medium">{capability.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {capability.description}
                    </p>
                    <div className="bg-black/90 p-3 rounded">
                      <code className="text-sm text-emerald-400 whitespace-pre-wrap">
                        {capability.example}
                      </code>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Documentation Patterns */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Documentation Patterns</h2>
        <div className="space-y-8">
          {documentationPatterns.map((pattern) => (
            <div
              key={pattern.title}
              className="bg-background/50 p-6 rounded-lg space-y-6"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{pattern.title}</h3>
                <p className="text-muted-foreground">{pattern.description}</p>
              </div>
              <div className="space-y-6">
                {pattern.examples.map((example, index) => (
                  <div key={index} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm font-medium">
                          <DocumentDuplicateIcon className="w-4 h-4" />
                          <span>Original Code</span>
                        </div>
                        <pre className="bg-black/90 p-4 rounded text-sm font-mono text-blue-400 overflow-x-auto">
                          {example.before}
                        </pre>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm font-medium">
                          <SparklesIcon className="w-4 h-4" />
                          <span>AI-Generated Documentation</span>
                        </div>
                        <pre className="bg-black/90 p-4 rounded text-sm font-mono text-emerald-400 overflow-x-auto">
                          {example.after}
                        </pre>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CommandLineIcon className="w-4 h-4 text-primary" />
                      <code className="bg-black/90 px-3 py-2 rounded-md">
                        {example.command}
                      </code>
                    </div>
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
          AI Documentation Techniques
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {aiTechniques.map((technique) => (
            <div
              key={technique.title}
              className="bg-background/50 p-6 rounded-lg space-y-4"
            >
              <h3 className="font-semibold">{technique.title}</h3>
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
        <h2 className="text-2xl font-semibold mb-6">
          Documentation Best Practices
        </h2>
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

export default DocumentationPage;
