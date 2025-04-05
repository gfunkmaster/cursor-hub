import { FC } from "react";
import Link from "next/link";
import {
  CommandLineIcon,
  SparklesIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  ArrowPathIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const CommandCenterPage: FC = () => {
  const commandCategories = [
    {
      title: "Code Generation Commands",
      description: "Generate code with AI assistance",
      icon: <SparklesIcon className="w-6 h-6" />,
      commands: [
        {
          name: "/generate",
          description: "Generate new code based on your description",
          example: "/generate a React form component with email validation",
          tips: [
            "Be specific about requirements",
            "Mention framework/libraries",
            "Specify desired patterns",
          ],
        },
        {
          name: "/implement",
          description: "Implement a specific function or feature",
          example: "/implement sorting algorithm for this array",
          tips: [
            "Describe edge cases",
            "Mention performance requirements",
            "Specify return types",
          ],
        },
        {
          name: "/test",
          description: "Generate test cases for your code",
          example: "/test generate unit tests for UserProfile component",
          tips: [
            "Specify test framework",
            "Mention edge cases",
            "Include mock requirements",
          ],
        },
      ],
    },
    {
      title: "Code Analysis Commands",
      description: "Analyze and improve existing code",
      icon: <DocumentTextIcon className="w-6 h-6" />,
      commands: [
        {
          name: "/explain",
          description: "Get detailed explanation of selected code",
          example:
            "/explain const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/",
          tips: [
            "Select specific code section",
            "Ask about specific aspects",
            "Request examples",
          ],
        },
        {
          name: "/review",
          description: "Get code review and suggestions",
          example:
            "/review function fetchUsers() { const data = await fetch('/api/users'); return data; }",
          tips: [
            "Specify review focus",
            "Mention performance concerns",
            "Ask about alternatives",
          ],
        },
        {
          name: "/optimize",
          description: "Get optimization suggestions",
          example:
            "/optimize SELECT * FROM users JOIN orders ON users.id = orders.user_id",
          tips: [
            "Mention performance goals",
            "Specify constraints",
            "Include current issues",
          ],
        },
      ],
    },
    {
      title: "AI Chat Commands",
      description: "Interact with AI for assistance",
      icon: <ChatBubbleLeftRightIcon className="w-6 h-6" />,
      commands: [
        {
          name: "/ask",
          description: "Ask questions about code or programming concepts",
          example: "/ask explain dependency injection in React",
          tips: ["Be specific", "Provide context", "Ask for examples"],
        },
        {
          name: "/help",
          description: "Get help with errors or issues",
          example: "/help debug this TypeScript error",
          tips: [
            "Include error messages",
            "Show relevant code",
            "Describe expected behavior",
          ],
        },
        {
          name: "/suggest",
          description: "Get suggestions for improvements",
          example: "/suggest better way to handle this state",
          tips: [
            "Show current approach",
            "Mention constraints",
            "Specify goals",
          ],
        },
      ],
    },
    {
      title: "Refactoring Commands",
      description: "Improve code structure and quality",
      icon: <ArrowPathIcon className="w-6 h-6" />,
      commands: [
        {
          name: "/refactor",
          description: "Refactor code for better structure",
          example:
            "/refactor const [name, setName] = useState(''); const [email, setEmail] = useState('');",
          tips: [
            "Specify refactoring goal",
            "Mention patterns to use",
            "Include constraints",
          ],
        },
        {
          name: "/clean",
          description: "Clean up and improve code quality",
          example: "/clean improve readability of this function",
          tips: [
            "Mention style guide",
            "Specify naming conventions",
            "Include formatting preferences",
          ],
        },
        {
          name: "/migrate",
          description: "Help migrating code to new patterns",
          example: "/migrate update to React 18 features",
          tips: [
            "Specify target version",
            "Mention breaking changes",
            "Include dependencies",
          ],
        },
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">AI Command Center</h1>
        <p className="text-xl text-muted-foreground">
          Master Cursor's AI commands to supercharge your development workflow
        </p>
      </div>

      {/* Quick Start */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Quick Start</h2>
        <div className="bg-background/50 p-6 rounded-lg space-y-4">
          <p className="text-sm text-muted-foreground">
            Access AI commands by typing <code className="text-primary">/</code>{" "}
            in the editor. Commands are context-aware and will provide relevant
            suggestions based on your current file and selection.
          </p>
          <div className="flex items-center gap-2 text-sm">
            <CommandLineIcon className="w-4 h-4 text-primary" />
            <span>
              Press{" "}
              <code className="bg-black/90 px-2 py-1 rounded">Cmd + /</code>{" "}
              (Mac) or{" "}
              <code className="bg-black/90 px-2 py-1 rounded">Ctrl + /</code>{" "}
              (Windows) for quick command access
            </span>
          </div>
        </div>
      </section>

      {/* Command Categories */}
      <section className="space-y-16">
        {commandCategories.map((category) => (
          <div key={category.title} className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="text-primary">{category.icon}</div>
              <div>
                <h2 className="text-2xl font-semibold">{category.title}</h2>
                <p className="text-muted-foreground">{category.description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {category.commands.map((command) => (
                <div
                  key={command.name}
                  className="bg-background/50 p-6 rounded-lg space-y-4"
                >
                  <div className="space-y-1">
                    <h3 className="font-semibold text-primary">
                      {command.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {command.description}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CommandLineIcon className="w-4 h-4 text-primary mt-1" />
                      <code className="text-sm bg-black/90 px-3 py-2 rounded-md text-green-400 whitespace-pre-wrap break-all">
                        {command.example}
                      </code>
                    </div>
                    <ul className="space-y-1">
                      {command.tips.map((tip) => (
                        <li
                          key={tip}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <SparklesIcon className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Learn More */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Learn More</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Link
            href="/ai-features/command-center/natural-language"
            className="group bg-background/50 p-6 rounded-lg hover:bg-background/70 transition"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Natural Language Guide</h3>
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition" />
            </div>
            <p className="text-sm text-muted-foreground">
              Master the art of communicating with Cursor's AI to get exactly
              what you need
            </p>
          </Link>
          <Link
            href="/ai-features/command-center/advanced"
            className="group bg-background/50 p-6 rounded-lg hover:bg-background/70 transition"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Advanced Techniques</h3>
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition" />
            </div>
            <p className="text-sm text-muted-foreground">
              Learn advanced patterns and techniques for complex development
              tasks
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CommandCenterPage;
