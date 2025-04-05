"use client";

import { FC, useState } from "react";
import { motion } from "framer-motion";
import { CheckIcon, ClipboardIcon } from "@heroicons/react/24/outline";

interface PromptTemplate {
  category: string;
  prompt: string;
  description: string;
}

const templates: PromptTemplate[] = [
  {
    category: "Code Generation",
    prompt:
      "Generate a [Component] using [Framework] with these features: [List features]. Include TypeScript types and styling.",
    description: "Create new components with specific requirements",
  },
  {
    category: "Refactoring",
    prompt:
      "Refactor this code to use [Pattern/Principle]. Focus on [specific aspects] while maintaining functionality.",
    description: "Improve code structure and readability",
  },
  {
    category: "Documentation",
    prompt:
      "Document this [function/component] following [standard]. Include: purpose, params, return values, examples.",
    description: "Create comprehensive documentation",
  },
  {
    category: "Testing",
    prompt:
      "Write tests for this [component/function]. Include: unit tests, edge cases, mocking, and test coverage goals.",
    description: "Generate test suites",
  },
  {
    category: "Performance",
    prompt:
      "Analyze this code for performance issues. Focus on: [specific concerns]. Suggest optimizations.",
    description: "Optimize code performance",
  },
];

const PromptTemplates: FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = async (text: string, index: number) => {
    await navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-primary">AI Prompt Templates</h3>
      <div className="grid gap-6">
        {templates.map((template, index) => (
          <motion.div
            key={template.category}
            className="bg-background/50 backdrop-blur-sm rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-lg font-semibold text-foreground">
                  {template.category}
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  {template.description}
                </p>
              </div>
              <button
                onClick={() => copyToClipboard(template.prompt, index)}
                className="p-2 hover:bg-accent/10 rounded-lg transition-colors"
              >
                {copiedIndex === index ? (
                  <CheckIcon className="w-5 h-5 text-green-500" />
                ) : (
                  <ClipboardIcon className="w-5 h-5 text-muted-foreground" />
                )}
              </button>
            </div>
            <pre className="bg-background/90 p-4 rounded-lg text-sm font-mono overflow-x-auto">
              {template.prompt}
            </pre>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PromptTemplates;
