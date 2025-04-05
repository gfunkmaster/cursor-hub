import { FC } from "react";
import Link from "next/link";
import {
  ArrowLeftIcon,
  ChatBubbleLeftRightIcon,
  ArrowPathIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";

const MultiTurnConversationsPage: FC = () => {
  const conversationPatterns = [
    {
      title: "Progressive Refinement",
      description: "Iteratively improve code through conversation",
      example: {
        steps: [
          {
            user: "Create a React form component",
            ai: "Here's a basic form component...",
          },
          {
            user: "Add form validation",
            ai: "Adding validation with proper error handling...",
          },
          {
            user: "Now add loading state",
            ai: "Implementing loading states and feedback...",
          },
        ],
        explanation: "Build features incrementally through natural dialogue",
      },
    },
    {
      title: "Problem Diagnosis",
      description: "Debug issues through interactive discussion",
      example: {
        steps: [
          {
            user: "Why is this component re-rendering?",
            ai: "Let's check the dependencies...",
          },
          {
            user: "I see useEffect is causing it",
            ai: "We can optimize by using useMemo...",
          },
          {
            user: "Can you show me how?",
            ai: "Here's the optimized version...",
          },
        ],
        explanation: "Interactive debugging through conversation",
      },
    },
    {
      title: "Architecture Planning",
      description: "Design solutions through collaborative discussion",
      example: {
        steps: [
          {
            user: "How should I structure this feature?",
            ai: "Let's break down the requirements...",
          },
          {
            user: "What about data management?",
            ai: "We could use these patterns...",
          },
          {
            user: "How does that handle scaling?",
            ai: "Here's how it scales...",
          },
        ],
        explanation: "Collaborative solution design through dialogue",
      },
    },
  ];

  const bestPractices = [
    {
      title: "Maintain Context",
      tips: [
        "Reference previous messages when needed",
        "Keep the conversation focused on one topic",
        "Explicitly state when switching contexts",
        "Use code snippets for clarity",
      ],
    },
    {
      title: "Clear Communication",
      tips: [
        "Ask specific, focused questions",
        "Provide relevant code examples",
        "Clarify assumptions",
        "Confirm understanding before proceeding",
      ],
    },
    {
      title: "Effective Follow-up",
      tips: [
        "Build on previous responses",
        "Ask for clarification when needed",
        "Request alternative approaches",
        "Validate solutions incrementally",
      ],
    },
  ];

  const advancedTechniques = [
    {
      title: "Context Switching",
      description: "Effectively manage multiple topics",
      steps: [
        "Signal topic changes explicitly",
        "Summarize current progress",
        "Reference relevant previous points",
        "Maintain clear conversation boundaries",
      ],
    },
    {
      title: "Deep Dives",
      description: "Explore topics comprehensively",
      steps: [
        "Start with high-level overview",
        "Progressively add detail",
        "Explore edge cases",
        "Document key insights",
      ],
    },
    {
      title: "Solution Refinement",
      description: "Iteratively improve solutions",
      steps: [
        "Begin with basic implementation",
        "Add features incrementally",
        "Optimize performance",
        "Enhance error handling",
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <Link
        href="/ai-features/chat-interface"
        className="inline-flex items-center text-primary hover:text-primary/80 mb-8"
      >
        <ArrowLeftIcon className="w-4 h-4 mr-2" />
        Back to Chat Interface
      </Link>

      <div className="mb-16">
        <h1 className="text-4xl font-bold mb-4">Multi-Turn Conversations</h1>
        <p className="text-xl text-muted-foreground">
          Master the art of extended AI dialogues for complex problem-solving
        </p>
      </div>

      {/* Conversation Patterns */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Conversation Patterns</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {conversationPatterns.map((pattern) => (
            <div
              key={pattern.title}
              className="bg-background/50 p-6 rounded-lg space-y-4"
            >
              <h3 className="font-semibold">{pattern.title}</h3>
              <p className="text-sm text-muted-foreground">
                {pattern.description}
              </p>
              <div className="space-y-3">
                {pattern.example.steps.map((step, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-primary text-sm">You:</span>
                      <code className="text-sm">{step.user}</code>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-green-500 text-sm">AI:</span>
                      <code className="text-sm text-muted-foreground">
                        {step.ai}
                      </code>
                    </div>
                  </div>
                ))}
                <p className="text-xs text-muted-foreground mt-2">
                  {pattern.example.explanation}
                </p>
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
              <ul className="space-y-2">
                {practice.tips.map((tip) => (
                  <li key={tip} className="flex items-start gap-2 text-sm">
                    <LightBulbIcon className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Advanced Techniques */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Advanced Techniques</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {advancedTechniques.map((technique) => (
            <div
              key={technique.title}
              className="bg-background/50 p-6 rounded-lg space-y-4"
            >
              <h3 className="font-semibold">{technique.title}</h3>
              <p className="text-sm text-muted-foreground">
                {technique.description}
              </p>
              <div className="space-y-2">
                {technique.steps.map((step) => (
                  <div
                    key={step}
                    className="flex items-center gap-2 text-sm bg-black/90 p-2 rounded"
                  >
                    <ArrowPathIcon className="w-4 h-4 text-primary" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MultiTurnConversationsPage;
