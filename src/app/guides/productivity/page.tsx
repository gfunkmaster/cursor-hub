"use client";

import { FC } from "react";
import CursorDemo from "@/components/CursorDemo";
import PromptTemplates from "@/components/PromptTemplates";

const ProductivityPage: FC = () => {
  const tips = [
    {
      title: "Context-Aware Prompting",
      description:
        "Learn to provide the right context in your prompts. Include relevant code snippets, dependencies, and requirements to get more accurate responses.",
      example:
        "When asking about a bug, include the error message, relevant code, and expected behavior.",
    },
    {
      title: "Iterative Development",
      description:
        "Break down complex tasks into smaller, manageable chunks. Use Cursor AI to help with each step, building upon previous responses.",
      example:
        "Start with basic functionality, then iteratively add features, styling, and optimizations.",
    },
    {
      title: "Smart File Management",
      description:
        "Organize your workspace efficiently. Use Cursor AI to help create consistent file structures and maintain clean architecture.",
      example:
        "Group related components, maintain clear imports, and follow naming conventions.",
    },
    {
      title: "Testing Strategies",
      description:
        "Leverage AI for test creation. Ask for test cases, edge cases, and comprehensive test coverage.",
      example:
        "Generate unit tests, integration tests, and end-to-end tests with proper assertions.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Advanced Productivity with Cursor AI
        </h1>
        <p className="text-xl text-muted-foreground">
          Master these techniques to supercharge your development workflow
        </p>
      </div>

      <div className="mb-16">
        <CursorDemo />
      </div>

      <div className="grid gap-8 md:grid-cols-2 mb-16">
        {tips.map((tip) => (
          <div
            key={tip.title}
            className="bg-background/50 backdrop-blur-sm rounded-lg p-6 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-primary mb-3">
              {tip.title}
            </h3>
            <p className="text-muted-foreground mb-4">{tip.description}</p>
            <div className="bg-background/90 p-4 rounded-lg">
              <p className="text-sm font-mono text-foreground">{tip.example}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-16">
        <PromptTemplates />
      </div>

      <div className="bg-primary/5 rounded-lg p-8 backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-primary mb-6">
          Pro Tips for Maximum Efficiency
        </h2>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-primary mr-2">→</span>
            <span>
              Use keyboard shortcuts extensively to speed up your workflow
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">→</span>
            <span>
              Maintain a personal library of successful prompts and patterns
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">→</span>
            <span>Combine multiple AI commands for complex tasks</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">→</span>
            <span>Regular practice with new features and capabilities</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductivityPage;
