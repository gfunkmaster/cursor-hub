import { FC } from "react";
import Link from "next/link";
import {
  LightBulbIcon,
  CodeBracketIcon,
  SparklesIcon,
  CpuChipIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  BeakerIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

const CodeCompletionPage: FC = () => {
  const aiFeatures = [
    {
      title: "AI-Powered Context Understanding",
      description: "Advanced language models analyze your entire codebase",
      icon: <BeakerIcon className="w-6 h-6" />,
      capabilities: [
        "Understands project-wide dependencies",
        "Learns from your coding patterns",
        "Adapts to your coding style",
        "Considers file relationships",
      ],
    },
    {
      title: "Predictive Intelligence",
      description: "Smart predictions beyond simple completions",
      icon: <SparklesIcon className="w-6 h-6" />,
      capabilities: [
        "Multi-line code suggestions",
        "Full function implementations",
        "Complex pattern recognition",
        "Framework-aware completions",
      ],
    },
    {
      title: "Dynamic Learning",
      description: "Continuously improving completion accuracy",
      icon: <ArrowPathIcon className="w-6 h-6" />,
      capabilities: [
        "Learns from accepted completions",
        "Adapts to project conventions",
        "Improves with usage",
        "Team pattern recognition",
      ],
    },
  ];

  const completionExamples = [
    {
      title: "Smart Function Completion",
      description: "AI understands function context and purpose",
      before: `function calculateTotal(items) {
  // AI completes the implementation
`,
      after: `function calculateTotal(items) {
  return items.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
}`,
    },
    {
      title: "React Component Patterns",
      description: "Intelligent component structure suggestions",
      before: `interface UserProfileProps {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  // AI suggests component structure
`,
      after: `interface UserProfileProps {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div className="flex items-center space-x-4 p-4 rounded-lg bg-white shadow">
      <img
        src={user.avatar}
        alt={user.name}
        className="w-12 h-12 rounded-full"
      />
      <div>
        <h3 className="font-medium">{user.name}</h3>
        <p className="text-gray-500">{user.email}</p>
      </div>
    </div>
  );
};`,
    },
    {
      title: "API Integration Patterns",
      description: "Context-aware API implementation suggestions",
      before: `async function fetchUserData(userId: string) {
  // AI completes with error handling and typing
`,
      after: `async function fetchUserData(userId: string): Promise<User> {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    if (!response.ok) {
      throw new Error(\`Failed to fetch user: \${response.statusText}\`);
    }
    const data = await response.json();
    return data as User;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}`,
    },
  ];

  const aiAdvantages = [
    {
      title: "Context-Aware Completions",
      features: [
        "Analyzes entire codebase context",
        "Understands project dependencies",
        "Considers imported modules",
        "Respects coding conventions",
      ],
    },
    {
      title: "Intelligent Suggestions",
      features: [
        "Complete function bodies",
        "Complex logic patterns",
        "Error handling templates",
        "Type-safe completions",
      ],
    },
    {
      title: "Learning Capabilities",
      features: [
        "Adapts to coding style",
        "Learns from corrections",
        "Improves over time",
        "Team pattern recognition",
      ],
    },
    {
      title: "Framework Intelligence",
      features: [
        "Framework-specific patterns",
        "Best practice suggestions",
        "Component structures",
        "Hook implementations",
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="mb-16">
        <h1 className="text-4xl font-bold mb-4">AI-First Code Completion</h1>
        <p className="text-xl text-muted-foreground">
          Experience the next generation of intelligent code completion powered
          by advanced AI
        </p>
      </div>

      {/* AI Features */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">AI-Powered Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {aiFeatures.map((feature) => (
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
                {feature.capabilities.map((capability) => (
                  <li
                    key={capability}
                    className="flex items-center gap-2 text-sm"
                  >
                    <SparklesIcon className="w-4 h-4 text-primary" />
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Completion Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          Smart Completion Examples
        </h2>
        <div className="space-y-8">
          {completionExamples.map((example) => (
            <div
              key={example.title}
              className="bg-background/50 p-6 rounded-lg space-y-4"
            >
              <div>
                <h3 className="font-semibold mb-2">{example.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {example.description}
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <CodeBracketIcon className="w-4 h-4" />
                    <span>Initial Code</span>
                  </div>
                  <pre className="bg-black/90 p-4 rounded text-sm font-mono text-green-400 overflow-x-auto">
                    {example.before}
                  </pre>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <SparklesIcon className="w-4 h-4" />
                    <span>AI Completion</span>
                  </div>
                  <pre className="bg-black/90 p-4 rounded text-sm font-mono text-green-400 overflow-x-auto">
                    {example.after}
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI Advantages */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">AI Advantages</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {aiAdvantages.map((category) => (
            <div
              key={category.title}
              className="bg-background/50 p-6 rounded-lg space-y-4"
            >
              <h3 className="font-semibold">{category.title}</h3>
              <ul className="space-y-2">
                {category.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <LightBulbIcon className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>{feature}</span>
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

export default CodeCompletionPage;
