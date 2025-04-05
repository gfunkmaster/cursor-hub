import { FC } from "react";
import Link from "next/link";
import {
  ChatBubbleLeftRightIcon,
  CodeBracketIcon,
  LightBulbIcon,
  BeakerIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const ChatInterfacePage: FC = () => {
  const chatFeatures = [
    {
      title: "Inline Code Chat",
      description: "Chat directly within your code context",
      icon: <ChatBubbleLeftRightIcon className="w-6 h-6" />,
      features: [
        "Context-aware conversations",
        "Multi-file awareness",
        "Code snippet references",
        "Inline code suggestions",
      ],
    },
    {
      title: "Smart Code Understanding",
      description: "AI that understands your codebase",
      icon: <CodeBracketIcon className="w-6 h-6" />,
      features: [
        "Project structure awareness",
        "Type system understanding",
        "Dependency knowledge",
        "Pattern recognition",
      ],
    },
    {
      title: "Intelligent Assistance",
      description: "Get help with complex development tasks",
      icon: <LightBulbIcon className="w-6 h-6" />,
      features: [
        "Code explanations",
        "Bug finding assistance",
        "Performance optimization tips",
        "Best practice suggestions",
      ],
    },
  ];

  const commonScenarios = [
    {
      title: "Code Understanding",
      examples: [
        {
          prompt: "Explain how this function works",
          context: "When reviewing complex code",
          outcome: "Detailed explanation with examples",
        },
        {
          prompt: "What are the potential edge cases here?",
          context: "During code review",
          outcome: "Analysis of possible failure points",
        },
      ],
    },
    {
      title: "Problem Solving",
      examples: [
        {
          prompt: "Why am I getting this error?",
          context: "When debugging issues",
          outcome: "Root cause analysis and solutions",
        },
        {
          prompt: "How can I optimize this code?",
          context: "Performance improvement",
          outcome: "Optimization suggestions with explanations",
        },
      ],
    },
    {
      title: "Development Assistance",
      examples: [
        {
          prompt: "What's the best way to implement this feature?",
          context: "Feature planning",
          outcome: "Architecture and implementation suggestions",
        },
        {
          prompt: "How should I test this component?",
          context: "Test planning",
          outcome: "Test strategy and example cases",
        },
      ],
    },
  ];

  const advancedTips = [
    {
      title: "Context Management",
      description: "Maximize AI understanding",
      tips: [
        "Reference specific files and line numbers",
        "Include relevant type definitions",
        "Mention related components or functions",
        "Specify framework or library context",
      ],
    },
    {
      title: "Conversation Flow",
      description: "Structure effective dialogues",
      tips: [
        "Start with clear objectives",
        "Break complex questions into steps",
        "Build on previous responses",
        "Ask for clarification when needed",
      ],
    },
    {
      title: "Code Integration",
      description: "Seamless code workflows",
      tips: [
        "Use inline code references",
        "Request specific code examples",
        "Ask for implementation alternatives",
        "Verify generated code",
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="mb-16">
        <h1 className="text-4xl font-bold mb-4">AI Chat Interface</h1>
        <p className="text-xl text-muted-foreground">
          Master the art of conversing with Cursor AI to enhance your
          development workflow
        </p>
      </div>

      {/* Key Features */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {chatFeatures.map((feature) => (
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
                    <BeakerIcon className="w-4 h-4 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Common Scenarios */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Common Scenarios</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {commonScenarios.map((scenario) => (
            <div
              key={scenario.title}
              className="bg-background/50 p-6 rounded-lg space-y-4"
            >
              <h3 className="font-semibold">{scenario.title}</h3>
              <div className="space-y-4">
                {scenario.examples.map((example) => (
                  <div
                    key={example.prompt}
                    className="bg-black/90 p-4 rounded space-y-2"
                  >
                    <code className="block text-sm text-green-400">
                      {example.prompt}
                    </code>
                    <div className="text-xs text-muted-foreground">
                      <p>Context: {example.context}</p>
                      <p>Outcome: {example.outcome}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Advanced Tips */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Advanced Tips</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {advancedTips.map((tip) => (
            <div
              key={tip.title}
              className="bg-background/50 p-6 rounded-lg space-y-4"
            >
              <h3 className="font-semibold">{tip.title}</h3>
              <p className="text-sm text-muted-foreground">{tip.description}</p>
              <ul className="space-y-2">
                {tip.tips.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <ArrowRightIcon className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Reference */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Quick Reference</h2>
        <div className="bg-background/50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Keyboard Shortcuts</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Open Chat Interface</span>
                  <kbd className="px-2 py-1 text-sm font-mono bg-black/90 rounded">
                    Cmd + I
                  </kbd>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Quick Command</span>
                  <kbd className="px-2 py-1 text-sm font-mono bg-black/90 rounded">
                    Cmd + K
                  </kbd>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Accept Suggestion</span>
                  <kbd className="px-2 py-1 text-sm font-mono bg-black/90 rounded">
                    Tab
                  </kbd>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Best Practices</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <ArrowRightIcon className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Always provide relevant context in your questions</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRightIcon className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Break complex problems into smaller steps</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRightIcon className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>
                    Review and validate AI suggestions before applying
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChatInterfacePage;
