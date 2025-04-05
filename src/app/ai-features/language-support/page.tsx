import { FC } from "react";
import Link from "next/link";
import {
  CodeBracketIcon,
  CubeIcon,
  WrenchIcon,
  CommandLineIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const LanguageSupportPage: FC = () => {
  const supportedLanguages = [
    {
      name: "TypeScript/JavaScript",
      description: "Full support for modern web development",
      icon: <CodeBracketIcon className="w-6 h-6" />,
      features: [
        "React/Next.js integration",
        "Type inference and validation",
        "Package management",
        "Modern ECMAScript features",
      ],
    },
    {
      name: "Python",
      description: "Comprehensive Python development support",
      icon: <CubeIcon className="w-6 h-6" />,
      features: [
        "Type hints support",
        "Virtual environment handling",
        "Package management",
        "Framework integration",
      ],
    },
    {
      name: "Java",
      description: "Enterprise-grade Java development",
      icon: <WrenchIcon className="w-6 h-6" />,
      features: [
        "Spring Boot integration",
        "Maven/Gradle support",
        "Type system understanding",
        "Enterprise patterns",
      ],
    },
  ];

  const frameworkSupport = [
    {
      name: "React & Next.js",
      features: [
        {
          title: "Component Generation",
          description: "Create components with best practices",
          examples: [
            "Type-safe props interfaces",
            "Hooks implementation",
            "Error boundaries",
            "Performance optimization",
          ],
        },
        {
          title: "Routing & Data Fetching",
          description: "Handle routing and data management",
          examples: [
            "API route handlers",
            "Server components",
            "Data fetching patterns",
            "Cache management",
          ],
        },
      ],
    },
    {
      name: "Django & FastAPI",
      features: [
        {
          title: "API Development",
          description: "Build robust Python backends",
          examples: [
            "Route handlers",
            "Model definitions",
            "Schema validation",
            "Authentication flows",
          ],
        },
        {
          title: "Database Integration",
          description: "Manage data and models",
          examples: [
            "ORM patterns",
            "Migration handling",
            "Query optimization",
            "Relationship management",
          ],
        },
      ],
    },
    {
      name: "Spring Boot",
      features: [
        {
          title: "Enterprise Patterns",
          description: "Implement enterprise-grade features",
          examples: [
            "Dependency injection",
            "Service layers",
            "Repository patterns",
            "Security configuration",
          ],
        },
        {
          title: "API Development",
          description: "Create RESTful services",
          examples: [
            "Controller setup",
            "DTO mapping",
            "Validation logic",
            "Exception handling",
          ],
        },
      ],
    },
  ];

  const languageFeatures = [
    {
      category: "Syntax Understanding",
      features: [
        "Language-specific syntax highlighting",
        "Code formatting rules",
        "Style guide compliance",
        "Best practice suggestions",
      ],
    },
    {
      category: "Type Systems",
      features: [
        "Static type checking",
        "Type inference",
        "Generic type handling",
        "Interface/class relationships",
      ],
    },
    {
      category: "Tooling Integration",
      features: [
        "Package managers (npm, pip, maven)",
        "Build tools integration",
        "Testing frameworks",
        "Linter configuration",
      ],
    },
    {
      category: "Framework Support",
      features: [
        "Framework-specific patterns",
        "Component lifecycles",
        "State management",
        "Routing systems",
      ],
    },
  ];

  const bestPractices = [
    {
      title: "Language-Specific Setup",
      tips: [
        "Configure language servers properly",
        "Set up type checking",
        "Enable linting rules",
        "Use recommended extensions",
      ],
    },
    {
      title: "Framework Configuration",
      tips: [
        "Follow framework conventions",
        "Use official plugins",
        "Configure build tools",
        "Set up testing environment",
      ],
    },
    {
      title: "Code Organization",
      tips: [
        "Follow language idioms",
        "Use consistent file structure",
        "Implement proper modularity",
        "Maintain clear dependencies",
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="mb-16">
        <h1 className="text-4xl font-bold mb-4">Language Support</h1>
        <p className="text-xl text-muted-foreground">
          Explore Cursor AI's comprehensive language and framework support
        </p>
      </div>

      {/* Supported Languages */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Supported Languages</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {supportedLanguages.map((lang) => (
            <div
              key={lang.name}
              className="bg-background/50 p-6 rounded-lg space-y-4"
            >
              <div className="flex items-center gap-2">
                <div className="text-primary">{lang.icon}</div>
                <h3 className="font-semibold">{lang.name}</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {lang.description}
              </p>
              <ul className="space-y-2">
                {lang.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <CommandLineIcon className="w-4 h-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Framework Support */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Framework Support</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {frameworkSupport.map((framework) => (
            <div
              key={framework.name}
              className="bg-background/50 p-6 rounded-lg space-y-6"
            >
              <h3 className="font-semibold">{framework.name}</h3>
              <div className="space-y-4">
                {framework.features.map((feature) => (
                  <div key={feature.title} className="space-y-2">
                    <h4 className="font-medium text-sm">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                    <div className="bg-black/90 p-3 rounded space-y-1">
                      {feature.examples.map((example) => (
                        <code
                          key={example}
                          className="block text-sm text-green-400"
                        >
                          {example}
                        </code>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Language Features */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Language Features</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {languageFeatures.map((category) => (
            <div
              key={category.category}
              className="bg-background/50 p-6 rounded-lg space-y-4"
            >
              <h3 className="font-semibold">{category.category}</h3>
              <ul className="space-y-2">
                {category.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <ArrowRightIcon className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Best Practices */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Best Practices</h2>
        <div className="grid md:grid-cols-3 gap-8">
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

export default LanguageSupportPage;
