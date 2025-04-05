"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CodePlayground } from "@/components/CodePlayground";
import { Spinner } from "@/components/ui/Spinner";
import type {
  Tutorial,
  TutorialStep,
} from "@/components/tutorials/TutorialCard";

interface TutorialPageProps {
  params: {
    id: string;
  };
}

const EXAMPLE_TUTORIAL: Tutorial = {
  id: "getting-started-cursor",
  title: "Getting Started with Cursor AI",
  description:
    "Learn how to use Cursor AI effectively for your development workflow",
  difficulty: "beginner",
  duration: "15 minutes",
  topics: ["Cursor AI", "Development", "Productivity"],
  steps: [
    {
      title: "Understanding Cursor AI Commands",
      description: `Let's start by learning the basic commands in Cursor AI. These commands will help you interact with the AI assistant effectively.`,
      code: `// Common Cursor AI Commands:
      
// 1. Generate code (Cmd/Ctrl + K)
// Example prompt: "Create a React component that..."

// 2. Explain code (Cmd/Ctrl + /)
// Select code and ask: "Explain this code"

// 3. Fix issues (Cmd/Ctrl + I)
// Select problematic code and ask: "Fix this issue"

// 4. Refactor code (Cmd/Ctrl + R)
// Select code and ask: "Refactor this to..."`,
      action: "Try using these commands in your editor",
    },
    {
      title: "Writing Effective Prompts",
      description:
        "Learn how to write clear and effective prompts to get the best results from Cursor AI.",
      code: `// Example of a good prompt:
"Create a TypeScript React component that:
- Takes user input
- Validates email format
- Shows error messages
- Has loading states
- Uses proper types"

// Instead of:
"Make me a form component"`,
      action: "Practice writing detailed prompts",
    },
    {
      title: "Working with Context",
      description:
        "Understanding how to provide context to get better results from Cursor AI.",
      code: `// Bad: No context
"Fix this bug"

// Good: With context
"Fix this bug in the user authentication flow:
- Current behavior: Login fails silently
- Expected: Show error message
- Error occurs in: auth.ts
- Related components: LoginForm.tsx
- Stack trace: [paste error]"`,
      action: "Try providing context in your prompts",
    },
  ],
};

export default function TutorialPage({ params }: TutorialPageProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const tutorial = EXAMPLE_TUTORIAL; // In real app, fetch based on params.id

  const step = tutorial.steps[currentStep];
  const totalSteps = tutorial.steps.length;

  const nextStep = () => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps - 1));
      setIsLoading(false);
    }, 500);
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">{tutorial.title}</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {tutorial.description}
        </p>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">
            Step {currentStep + 1} of {totalSteps}
          </span>
          <div className="flex-1 h-2 bg-gray-200 rounded-full">
            <div
              className="h-full bg-blue-500 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">{step.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {step.description}
            </p>

            {step.code && (
              <div className="mb-6">
                <CodePlayground code={step.code} title="Example" />
              </div>
            )}

            {step.action && (
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">
                  Your Turn
                </h3>
                <p className="text-blue-700 dark:text-blue-300">
                  {step.action}
                </p>
              </div>
            )}
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>

            <button
              onClick={nextStep}
              disabled={currentStep === totalSteps - 1 || isLoading}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? <Spinner size="sm" variant="ghost" /> : "Next Step"}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
