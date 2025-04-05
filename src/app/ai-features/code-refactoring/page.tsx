import { FC } from "react";
import { Card } from "@/components/ui/card";
import {
  CommandLineIcon,
  SparklesIcon,
  ArrowPathIcon,
  ChatBubbleLeftIcon,
  CursorArrowRaysIcon,
  CodeBracketIcon,
  ExclamationTriangleIcon,
  LightBulbIcon,
  BeakerIcon,
} from "@heroicons/react/24/outline";

const CodeRefactoringPage: FC = () => {
  const aiFirstFeatures = [
    {
      title: "Natural Language Understanding",
      description: "Just describe what you want to change in plain English",
      example: {
        userRequest: "Make this code more readable and use modern syntax",
        explanation:
          "Cursor AI understands intent and context, no need for specific refactoring commands",
      },
    },
    {
      title: "Context-Aware Suggestions",
      description: "AI analyzes your entire codebase for smarter refactoring",
      example: {
        userRequest: "Update this component to match our project's patterns",
        explanation:
          "AI learns from your existing code to maintain consistency",
      },
    },
    {
      title: "Intelligent Code Analysis",
      description: "Proactive suggestions for code improvements",
      example: {
        userRequest: "Check if this code can be improved",
        explanation:
          "AI identifies potential optimizations and modern patterns",
      },
    },
  ];

  const refactoringFeatures = [
    {
      title: "AI-Assisted Refactoring",
      description:
        "Intelligent code restructuring that maintains functionality while improving code quality.",
      command: "/refactor convert this to modern JavaScript",
      examples: [
        {
          before: `function calculateTotal(items) {
  let total = 0;
  for(let i = 0; i < items.length; i++) {
    total += items[i].price * items[i].quantity;
  }
  return total;
}`,
          after: `const calculateTotal = (items) => 
  items.reduce((total, { price, quantity }) => 
    total + price * quantity, 0);`,
          explanation:
            "Transforms imperative code into a more functional and concise form using modern JavaScript features.",
          aiPrompt:
            "Refactor this function to use modern JavaScript features like arrow functions and array methods.",
        },
      ],
    },
    {
      title: "Pattern Recognition",
      description:
        "Identifies common code patterns and suggests optimized alternatives.",
      command: "/refactor simplify these null checks",
      examples: [
        {
          before: `if (user && user.profile && user.profile.settings && user.profile.settings.theme) {
  return user.profile.settings.theme;
} else {
  return 'default';
}`,
          after: `return user?.profile?.settings?.theme ?? 'default';`,
          explanation:
            "Recognizes nested null checks and converts them to optional chaining with nullish coalescing.",
          aiPrompt:
            "Simplify these nested null checks using optional chaining.",
        },
      ],
    },
    {
      title: "Code Optimization",
      description:
        "Suggests performance improvements and better coding practices.",
      command: "/refactor optimize this loop for performance",
      examples: [
        {
          before: `const data = [];
for (let i = 0; i < array.length; i++) {
  if (array[i].value > 10) {
    data.push(array[i].value * 2);
  }
}`,
          after: `const data = array
  .filter(item => item.value > 10)
  .map(item => item.value * 2);`,
          explanation:
            "Optimizes loops into more efficient and readable array methods.",
          aiPrompt:
            "Convert this loop to use array methods for better performance and readability.",
        },
      ],
    },
  ];

  const aiCommands = [
    {
      command: "/refactor",
      description:
        "General refactoring command that understands context and suggests improvements",
      examples: [
        "/refactor convert to TypeScript",
        "/refactor improve performance",
        "/refactor add error handling",
      ],
    },
    {
      command: "/explain refactoring",
      description: "Get explanations about suggested refactoring changes",
      examples: [
        "/explain why this refactoring is better",
        "/explain performance implications",
        "/explain type safety improvements",
      ],
    },
    {
      command: "/analyze code",
      description: "Analyze code for potential refactoring opportunities",
      examples: [
        "/analyze code for performance issues",
        "/analyze code smells",
        "/analyze technical debt",
      ],
    },
  ];

  const bestPractices = [
    {
      title: "Context-Aware Refactoring",
      description:
        "AI analyzes the entire codebase to ensure refactoring maintains project consistency.",
      tip: "Use /analyze codebase before major refactoring",
    },
    {
      title: "Type Safety",
      description:
        "Preserves and enhances type definitions during refactoring in TypeScript projects.",
      tip: "Add /refactor with --types flag for type-aware refactoring",
    },
    {
      title: "Performance Impact",
      description:
        "Evaluates the performance implications of suggested refactoring changes.",
      tip: "Use /analyze performance to check impact",
    },
  ];

  const advancedFeatures = [
    {
      title: "Multi-File Refactoring",
      description:
        "Intelligently updates references across multiple files when refactoring.",
      command: "/refactor --scope=project",
    },
    {
      title: "Code Smell Detection",
      description:
        "Identifies potential issues and suggests improvements automatically.",
      command: "/analyze smells",
    },
    {
      title: "Framework-Specific Patterns",
      description:
        "Applies best practices specific to your framework (React, Vue, Angular, etc.).",
      command: "/refactor --framework=react",
    },
  ];

  const howToRefactor = [
    {
      step: 1,
      title: "Select Your Code",
      description: "Highlight the code you want to refactor in the editor",
      icon: CursorArrowRaysIcon,
      tip: "You can select multiple lines or an entire file",
    },
    {
      step: 2,
      title: "Open AI Chat",
      description: "Press Cmd/Ctrl + L to open the Cursor AI chat interface",
      icon: ChatBubbleLeftIcon,
      tip: "You can also click the chat icon in the bottom right",
    },
    {
      step: 3,
      title: "Describe the Refactoring",
      description: "Tell AI what you want to improve, for example:",
      icon: SparklesIcon,
      examples: [
        "Convert this to modern JavaScript using array methods",
        "Simplify these nested if statements",
        "Make this code more performant",
        "Refactor this to use TypeScript",
      ],
    },
  ];

  const languageSpecificExamples = [
    {
      language: "Python",
      examples: [
        {
          title: "List Comprehension",
          before: `numbers = []
for num in range(1, 11):
    if num % 2 == 0:
        numbers.append(num * 2)`,
          after: `numbers = [num * 2 for num in range(1, 11) if num % 2 == 0]`,
          aiPrompt: "Convert this loop to a Python list comprehension",
        },
        {
          title: "Context Manager",
          before: `f = open('file.txt', 'r')
content = f.read()
f.close()`,
          after: `with open('file.txt', 'r') as f:
    content = f.read()`,
          aiPrompt:
            "Refactor this to use Python's context manager (with statement)",
        },
      ],
    },
    {
      language: "TypeScript",
      examples: [
        {
          title: "Type Safety",
          before: `function processUser(user) {
  return user.name + ' is ' + user.age + ' years old';
}`,
          after: `interface User {
  name: string;
  age: number;
}

function processUser(user: User): string {
  return \`\${user.name} is \${user.age} years old\`;
}`,
          aiPrompt:
            "Add TypeScript types to this function and use template literals",
        },
      ],
    },
    {
      language: "React",
      examples: [
        {
          title: "Hooks Conversion",
          before: `class Counter extends React.Component {
  state = { count: 0 };
  
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <button onClick={this.increment}>
        Count: {this.state.count}
      </button>
    );
  }
}`,
          after: `const Counter = () => {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
};`,
          aiPrompt:
            "Convert this class component to a functional component using hooks",
        },
      ],
    },
  ];

  const troubleshootingGuide = [
    {
      issue: "Refactoring Breaks Dependencies",
      description: "Changes affect other parts of the codebase",
      solution: "Use project-wide refactoring",
      command: "/refactor --scope=project",
      tip: "Always analyze the full impact before applying changes",
    },
    {
      issue: "Type Errors After Refactoring",
      description: "TypeScript shows errors in refactored code",
      solution: "Enable type-aware refactoring",
      command: "/refactor --types",
      tip: "Check type definitions before and after refactoring",
    },
    {
      issue: "Performance Regression",
      description: "Refactored code is slower",
      solution: "Analyze performance impact",
      command: "/analyze performance --compare",
      tip: "Run performance tests on both versions",
    },
  ];

  const advancedTechniques = [
    {
      title: "Multi-Step Refactoring",
      description: "Break down complex refactoring into steps",
      steps: [
        "1. Analyze current structure: '/analyze structure'",
        "2. Plan refactoring steps: '/plan refactoring'",
        "3. Apply changes incrementally: '/refactor --step=1'",
      ],
    },
    {
      title: "Interactive Refinement",
      description: "Iteratively improve the refactored code",
      steps: [
        "1. Initial refactoring: '/refactor initial'",
        "2. Review changes: '/explain changes'",
        "3. Request improvements: '/refactor improve --aspect=performance'",
      ],
    },
    {
      title: "Pattern-Based Refactoring",
      description: "Apply common design patterns",
      steps: [
        "1. Identify pattern: '/analyze pattern'",
        "2. Suggest pattern: '/suggest pattern'",
        "3. Apply pattern: '/refactor pattern --type=factory'",
      ],
    },
  ];

  const aiConversationExamples = [
    {
      title: "Iterative Refinement",
      description: "Have a natural conversation with AI to perfect your code",
      conversation: [
        {
          user: "Can you make this code more maintainable?",
          ai: "I'll help you improve the code. First, let me analyze its structure...",
          explanation: "AI understands high-level goals",
        },
        {
          user: "Could you also add error handling?",
          ai: "I'll add try-catch blocks and validate inputs. Here's the improved version...",
          explanation: "Natural follow-up requests",
        },
        {
          user: "Great! Now can we make it more performant?",
          ai: "I'll optimize the operations. Here's what I'm changing and why...",
          explanation: "Continuous improvement through dialogue",
        },
      ],
    },
    {
      title: "Learning from Context",
      description: "AI adapts to your project's patterns and preferences",
      conversation: [
        {
          user: "Refactor this to match our team's style",
          ai: "I see you're using the repository pattern. I'll restructure accordingly...",
          explanation: "AI learns from your codebase",
        },
        {
          user: "Yes, and follow our error handling convention",
          ai: "I'll use your custom error classes and logging patterns...",
          explanation: "Adapts to project conventions",
        },
      ],
    },
    {
      title: "Complex Refactoring Made Simple",
      description: "Break down complex changes through natural dialogue",
      conversation: [
        {
          user: "We need to switch from Redux to Context API",
          ai: "Let's approach this step by step. First, I'll identify all Redux usage...",
          explanation: "AI handles complex transitions",
        },
        {
          user: "Make sure we keep the existing functionality",
          ai: "I'll create equivalent Context providers and maintain the current state flow...",
          explanation: "Preserves behavior while changing implementation",
        },
      ],
    },
  ];

  const specificScenarios = [
    {
      title: "Architectural Transformation",
      description: "Converting from monolithic to microservices architecture",
      conversation: [
        {
          user: "Help me split this monolithic service into microservices",
          ai: "I'll analyze the service boundaries first. I see several independent domains: user management, order processing, and inventory...",
          explanation: "AI identifies natural service boundaries",
        },
        {
          user: "Let's start with the order processing service",
          ai: "I'll extract the order-related models, controllers, and services. First, let's identify all dependencies...",
          explanation: "Breaking down complex changes into manageable steps",
        },
        {
          user: "How should these services communicate?",
          ai: "Based on your existing patterns, I recommend using REST APIs for synchronous operations and message queues for async tasks...",
          explanation: "AI suggests patterns based on codebase analysis",
        },
      ],
    },
    {
      title: "Performance Optimization",
      description: "Identifying and fixing performance bottlenecks",
      conversation: [
        {
          user: "This API endpoint is slow, can you help optimize it?",
          ai: "I notice several N+1 queries and unnecessary data fetching. Let's analyze the query patterns...",
          explanation: "AI identifies performance patterns",
        },
        {
          user: "Can we cache some of these results?",
          ai: "Yes, I see repeated queries for static data. I'll add Redis caching following your existing cache patterns...",
          explanation: "Suggesting optimizations while maintaining patterns",
        },
      ],
    },
    {
      title: "Security Hardening",
      description: "Improving code security with AI assistance",
      conversation: [
        {
          user: "Review this authentication code for security issues",
          ai: "I've found potential vulnerabilities: unencrypted password storage, missing rate limiting, and SQL injection risks...",
          explanation: "AI performs security analysis",
        },
        {
          user: "How can we fix these issues?",
          ai: "Let's implement password hashing with bcrypt, add rate limiting middleware, and use parameterized queries...",
          explanation: "Providing security-focused solutions",
        },
      ],
    },
  ];

  const aiAnalysisFeatures = [
    {
      title: "Static Analysis",
      description: "AI-powered code quality assessment",
      capabilities: [
        {
          name: "Code Smell Detection",
          example:
            "Identifying duplicate code, complex methods, and tight coupling",
          command: "/analyze code-smells",
        },
        {
          name: "Dependency Analysis",
          example: "Finding unused imports and circular dependencies",
          command: "/analyze dependencies",
        },
        {
          name: "Type Safety Check",
          example: "Detecting potential runtime type errors",
          command: "/analyze types",
        },
      ],
    },
    {
      title: "Pattern Recognition",
      description: "Learning and suggesting consistent patterns",
      capabilities: [
        {
          name: "Style Consistency",
          example: "Ensuring code follows team's style conventions",
          command: "/analyze style",
        },
        {
          name: "Architecture Patterns",
          example: "Identifying and suggesting design patterns",
          command: "/analyze architecture",
        },
        {
          name: "Error Handling",
          example: "Consistent error handling approaches",
          command: "/analyze error-handling",
        },
      ],
    },
    {
      title: "Impact Analysis",
      description: "Understanding refactoring implications",
      capabilities: [
        {
          name: "Change Impact",
          example: "Identifying affected components and tests",
          command: "/analyze impact",
        },
        {
          name: "Performance Impact",
          example: "Estimating performance changes",
          command: "/analyze performance",
        },
        {
          name: "Breaking Changes",
          example: "Detecting API compatibility issues",
          command: "/analyze compatibility",
        },
      ],
    },
  ];

  const teamPatternExamples = [
    {
      title: "Error Handling Patterns",
      before: `try {
  await processOrder(data);
} catch (error) {
  console.error(error);
  throw error;
}`,
      after: `try {
  await processOrder(data);
} catch (error) {
  logger.error('Order processing failed', { 
    orderId: data.id,
    error: error.message,
    stack: error.stack 
  });
  throw new OrderProcessingError(error.message, { cause: error });
}`,
      explanation:
        "AI learns your team's error logging and custom error classes",
    },
    {
      title: "Repository Pattern",
      before: `class UserService {
  async getUser(id) {
    return await db.query('SELECT * FROM users WHERE id = ?', [id]);
  }
}`,
      after: `@Injectable()
class UserRepository extends BaseRepository<User> {
  async findById(id: string): Promise<User | null> {
    return this.createQueryBuilder('user')
      .where('user.id = :id', { id })
      .getOne();
  }
}`,
      explanation:
        "AI recognizes and applies your team's repository pattern implementation",
    },
    {
      title: "Component Structure",
      before: `function UserProfile({ user }) {
  return <div>{user.name}</div>;
}`,
      after: `interface UserProfileProps {
  user: User;
}

export const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  const theme = useTheme();
  const styles = useStyles();
  
  return (
    <Card className={styles.profileCard}>
      <ProfileHeader user={user} />
      <ProfileContent user={user} />
    </Card>
  );
};`,
      explanation:
        "AI learns your team's component organization and styling patterns",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">AI-Powered Code Refactoring</h1>
        <p className="text-lg text-muted-foreground mb-6">
          Transform and optimize your code with AI-powered refactoring tools
          that understand your codebase's context and patterns.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">The Cursor AI-First Approach</h2>
        <p className="text-muted-foreground mb-4">
          Unlike traditional refactoring tools, Cursor AI understands your
          intentions through natural language and learns from your codebase.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {aiFirstFeatures.map((feature, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <BeakerIcon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold">{feature.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {feature.description}
              </p>
              <div className="bg-primary/5 p-4 rounded-lg space-y-3">
                <div className="flex items-center gap-2">
                  <ChatBubbleLeftIcon className="w-4 h-4 text-primary" />
                  <code className="text-sm">{feature.example.userRequest}</code>
                </div>
                <p className="text-xs text-muted-foreground">
                  {feature.example.explanation}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">
          How to Refactor with Cursor AI
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {howToRefactor.map((step) => (
            <Card key={step.step} className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Step {step.step}</div>
                  <div className="text-lg font-medium">{step.title}</div>
                </div>
              </div>
              <p className="text-muted-foreground mb-3">{step.description}</p>
              {step.tip && (
                <div className="text-sm bg-muted/50 p-2 rounded">
                  💡 Tip: {step.tip}
                </div>
              )}
              {step.examples && (
                <div className="mt-3 space-y-2">
                  <div className="text-sm font-medium">Example prompts:</div>
                  {step.examples.map((example, i) => (
                    <div
                      key={i}
                      className="text-sm bg-muted p-2 rounded flex items-center gap-2"
                    >
                      <ChatBubbleLeftIcon className="w-4 h-4 text-primary" />
                      {example}
                    </div>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Key Refactoring Features</h2>
        {refactoringFeatures.map((feature, index) => (
          <Card key={index} className="p-6">
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-muted-foreground mb-4">{feature.description}</p>
            {feature.examples.map((example, i) => (
              <div key={i} className="space-y-3 mt-4">
                <div className="space-y-2">
                  <p className="font-medium">Original Code:</p>
                  <pre className="p-3 bg-muted rounded-md text-blue-400">
                    {example.before}
                  </pre>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                  <div className="flex items-center gap-2 mb-3">
                    <CursorArrowRaysIcon className="w-5 h-5 text-primary" />
                    <span className="font-medium">How to refactor this:</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="bg-primary/10 p-1.5 rounded">1</div>
                      <span>Select the code above in your editor</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-primary/10 p-1.5 rounded">2</div>
                      <span>Press Cmd/Ctrl + L to open AI chat</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="bg-primary/10 p-1.5 rounded">3</div>
                      <div>
                        <span>Type your request:</span>
                        <div className="mt-2 bg-muted p-2 rounded flex items-center gap-2">
                          <ChatBubbleLeftIcon className="w-4 h-4 text-primary" />
                          <code>{example.aiPrompt}</code>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="font-medium">Refactored Code:</p>
                  <pre className="p-3 bg-muted rounded-md text-emerald-400">
                    {example.after}
                  </pre>
                </div>
                <p className="text-sm text-muted-foreground">
                  {example.explanation}
                </p>
              </div>
            ))}
          </Card>
        ))}
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">AI Commands for Refactoring</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {aiCommands.map((command, index) => (
            <Card key={index} className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <CommandLineIcon className="w-5 h-5 text-primary" />
                <code className="font-semibold">{command.command}</code>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                {command.description}
              </p>
              <div className="space-y-2">
                {command.examples.map((example, i) => (
                  <code
                    key={i}
                    className="block text-xs bg-muted px-2 py-1 rounded"
                  >
                    {example}
                  </code>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Best Practices</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {bestPractices.map((practice, index) => (
            <Card key={index} className="p-4">
              <h3 className="font-semibold mb-2">{practice.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">
                {practice.description}
              </p>
              <div className="flex items-center gap-2">
                <ArrowPathIcon className="w-4 h-4 text-primary" />
                <code className="text-xs bg-muted px-2 py-1 rounded">
                  {practice.tip}
                </code>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Advanced Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {advancedFeatures.map((feature, index) => (
            <Card key={index} className="p-4">
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">
                {feature.description}
              </p>
              <div className="flex items-center gap-2">
                <CommandLineIcon className="w-4 h-4 text-primary" />
                <code className="text-xs bg-muted px-2 py-1 rounded">
                  {feature.command}
                </code>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Language-Specific Examples</h2>
        {languageSpecificExamples.map((lang, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <CodeBracketIcon className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">{lang.language}</h3>
            </div>
            <div className="space-y-6">
              {lang.examples.map((example, i) => (
                <div key={i} className="space-y-4">
                  <h4 className="font-medium">{example.title}</h4>
                  <div className="space-y-2">
                    <p className="font-medium">Original Code:</p>
                    <pre className="p-3 bg-muted rounded-md text-blue-400">
                      {example.before}
                    </pre>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                    <div className="flex items-center gap-2">
                      <ChatBubbleLeftIcon className="w-4 h-4 text-primary" />
                      <code>{example.aiPrompt}</code>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium">Refactored Code:</p>
                    <pre className="p-3 bg-muted rounded-md text-emerald-400">
                      {example.after}
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Troubleshooting Guide</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {troubleshootingGuide.map((item, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <ExclamationTriangleIcon className="w-5 h-5 text-yellow-500" />
                <h3 className="font-semibold">{item.issue}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {item.description}
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CommandLineIcon className="w-4 h-4 text-primary" />
                  <code className="text-sm bg-muted px-2 py-1 rounded">
                    {item.command}
                  </code>
                </div>
                <div className="flex items-center gap-2">
                  <LightBulbIcon className="w-4 h-4 text-yellow-500" />
                  <p className="text-sm">{item.tip}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Advanced AI Chat Techniques</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {advancedTechniques.map((technique, index) => (
            <Card key={index} className="p-6">
              <h3 className="font-semibold mb-2">{technique.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {technique.description}
              </p>
              <div className="space-y-2">
                {technique.steps.map((step, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="bg-primary/10 p-1.5 rounded text-xs">
                      {i + 1}
                    </div>
                    <code className="text-sm">{step}</code>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">
          Specific Refactoring Scenarios
        </h2>
        <p className="text-muted-foreground mb-4">
          See how Cursor AI handles complex refactoring scenarios through
          natural conversation.
        </p>
        {specificScenarios.map((scenario, index) => (
          <Card key={index} className="p-6">
            <h3 className="text-xl font-semibold mb-2">{scenario.title}</h3>
            <p className="text-muted-foreground mb-4">{scenario.description}</p>
            <div className="space-y-4">
              {scenario.conversation.map((message, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <ChatBubbleLeftIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium mb-1">You</div>
                      <div className="bg-muted p-3 rounded-lg">
                        {message.user}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 ml-6">
                    <div className="bg-emerald-100 p-2 rounded-lg">
                      <SparklesIcon className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium mb-1">Cursor AI</div>
                      <div className="bg-emerald-50 p-3 rounded-lg text-emerald-800">
                        {message.ai}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {message.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">AI-Powered Analysis</h2>
        <p className="text-muted-foreground mb-4">
          Discover how Cursor AI analyzes your code to suggest meaningful
          improvements.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {aiAnalysisFeatures.map((feature, index) => (
            <Card key={index} className="p-6">
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {feature.description}
              </p>
              <div className="space-y-4">
                {feature.capabilities.map((capability, i) => (
                  <div key={i} className="space-y-2">
                    <div className="font-medium text-sm">{capability.name}</div>
                    <p className="text-xs text-muted-foreground">
                      {capability.example}
                    </p>
                    <div className="flex items-center gap-2">
                      <CommandLineIcon className="w-4 h-4 text-primary" />
                      <code className="text-xs bg-muted px-2 py-1 rounded">
                        {capability.command}
                      </code>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">
          Learning Your Team's Patterns
        </h2>
        <p className="text-muted-foreground mb-4">
          See how Cursor AI learns and applies your team's coding patterns and
          conventions.
        </p>
        <div className="space-y-6">
          {teamPatternExamples.map((pattern, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-xl font-semibold mb-3">{pattern.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="font-medium mb-2">Original Code:</p>
                  <pre className="p-3 bg-muted rounded-md text-blue-400">
                    {pattern.before}
                  </pre>
                </div>
                <div>
                  <p className="font-medium mb-2">Pattern-Aware Refactoring:</p>
                  <pre className="p-3 bg-muted rounded-md text-emerald-400">
                    {pattern.after}
                  </pre>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                <LightBulbIcon className="w-4 h-4 inline-block mr-2 text-yellow-500" />
                {pattern.explanation}
              </p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CodeRefactoringPage;
