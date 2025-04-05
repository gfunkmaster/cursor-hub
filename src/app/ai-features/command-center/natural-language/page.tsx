import { FC } from "react";
import Link from "next/link";
import {
  ArrowLeftIcon,
  LightBulbIcon,
  SparklesIcon,
  BeakerIcon,
  CommandLineIcon,
  ChatBubbleLeftIcon,
  CursorArrowRaysIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";

const NaturalLanguageGuidePage: FC = () => {
  const conversationExamples = [
    {
      title: "Natural Problem Solving",
      description:
        "Describe problems in plain English, just like talking to a colleague",
      conversation: [
        {
          user: "This function is hard to read and has too many nested if statements",
          ai: "I'll analyze the code and suggest a cleaner structure using early returns and guard clauses...",
          explanation: "AI understands the intent and suggests improvements",
        },
        {
          user: "Could you also make it handle errors better?",
          ai: "I'll add proper error handling and logging. Here's the improved version...",
          explanation: "Natural follow-up refinements",
        },
      ],
    },
    {
      title: "Feature Implementation",
      description: "Describe features you want to add in natural language",
      conversation: [
        {
          user: "I need a form that validates email, shows errors, and has loading states",
          ai: "I'll create a form component with email validation. First, let's set up the structure...",
          explanation: "AI breaks down complex requirements",
        },
        {
          user: "Great, can we also add password confirmation?",
          ai: "I'll add password and confirmation fields with matching validation...",
          explanation: "Iterative feature addition",
        },
      ],
    },
    {
      title: "Code Understanding",
      description: "Ask about code in natural language",
      conversation: [
        {
          user: "What's happening in this useEffect hook?",
          ai: "This hook is managing user authentication state. Let me break it down...",
          explanation: "AI provides contextual explanations",
        },
        {
          user: "Could there be any memory leaks here?",
          ai: "Let me check the cleanup function and subscription handling...",
          explanation: "Natural follow-up questions",
        },
      ],
    },
  ];

  const aiFirstPrinciples = [
    {
      title: "Think in Conversations",
      description:
        "Treat Cursor AI as a pair programmer you can talk to naturally",
      examples: [
        "Can you help me understand this code?",
        "What's a better way to structure this?",
        "How would you implement this feature?",
      ],
    },
    {
      title: "Iterative Refinement",
      description: "Have a natural back-and-forth to perfect your code",
      examples: [
        "That's good, but can we make it more performant?",
        "Could you add TypeScript types to this?",
        "How would you handle edge cases?",
      ],
    },
    {
      title: "Context Sharing",
      description: "Naturally provide context like you would to a teammate",
      examples: [
        "We're using the repository pattern in this project...",
        "Our error handling usually includes logging...",
        "We prefer functional components with hooks...",
      ],
    },
  ];

  const naturalWorkflows = [
    {
      title: "Start with High-Level Goals",
      steps: [
        {
          description: "Describe what you want to achieve",
          example: "I need a secure authentication system with OAuth",
        },
        {
          description: "Let AI suggest approach and architecture",
          example:
            "AI: Let's break this down into authentication service, hooks, and UI components...",
        },
        {
          description: "Refine the solution together",
          example: "Could we add remember me functionality?",
        },
      ],
    },
    {
      title: "Debug Like a Conversation",
      steps: [
        {
          description: "Describe the issue naturally",
          example: "Users are getting logged out randomly",
        },
        {
          description: "Let AI investigate",
          example:
            "AI: Let me check the token refresh logic and session handling...",
        },
        {
          description: "Collaborate on solutions",
          example: "What if we implement persistent sessions?",
        },
      ],
    },
    {
      title: "Evolve Code Naturally",
      steps: [
        {
          description: "Start with basic implementation",
          example: "Create a simple user profile page",
        },
        {
          description: "Add features conversationally",
          example: "Now let's add image upload capability",
        },
        {
          description: "Refine and optimize",
          example: "Can we make the image upload more efficient?",
        },
      ],
    },
  ];

  const aiConfigurationPatterns = [
    {
      title: "Response Style Control",
      description: "Naturally guide AI's response style and depth",
      conversation: [
        {
          user: "I need a detailed explanation of this authentication flow",
          ai: "I'll provide a comprehensive breakdown of the authentication system...",
          explanation: "AI adjusts to detailed mode",
        },
        {
          user: "Now give me a quick summary instead",
          ai: "Here's the key points: User credentials → Token generation → Session management",
          explanation: "AI adapts to concise mode",
        },
      ],
    },
    {
      title: "Context Management",
      description: "Control what information AI considers",
      conversation: [
        {
          user: "Only look at the auth module when suggesting improvements",
          ai: "I'll focus my analysis on the authentication-related files...",
          explanation: "AI scopes its context",
        },
        {
          user: "Also consider our security guidelines from the docs",
          ai: "Including security documentation in my analysis...",
          explanation: "AI expands context intelligently",
        },
      ],
    },
    {
      title: "Creative vs Conservative",
      description: "Guide AI's innovation level",
      conversation: [
        {
          user: "Suggest some creative ways to improve our user onboarding",
          ai: "Here are some innovative approaches we could explore...",
          explanation: "AI switches to creative mode",
        },
        {
          user: "Now let's stick to our established patterns",
          ai: "I'll suggest improvements within our current architecture...",
          explanation: "AI switches to conservative mode",
        },
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <Link
        href="/ai-features/command-center"
        className="inline-flex items-center text-primary hover:text-primary/80 mb-8"
      >
        <ArrowLeftIcon className="w-4 h-4 mr-2" />
        Back to Command Center
      </Link>

      <div className="mb-16">
        <h1 className="text-4xl font-bold mb-4">
          Natural Language Development
        </h1>
        <p className="text-xl text-muted-foreground">
          Experience true AI-first development by having natural conversations
          with Cursor AI
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">AI-First Development</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {aiFirstPrinciples.map((principle) => (
            <div
              key={principle.title}
              className="bg-background/50 p-6 rounded-lg space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <LightBulbIcon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold">{principle.title}</h3>
              </div>
              <p className="text-muted-foreground">{principle.description}</p>
              <div className="space-y-2">
                {principle.examples.map((example, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm bg-muted p-2 rounded"
                  >
                    <ChatBubbleLeftIcon className="w-4 h-4 text-primary" />
                    <span>{example}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Natural Conversations</h2>
        <div className="space-y-8">
          {conversationExamples.map((example) => (
            <div
              key={example.title}
              className="bg-background/50 p-6 rounded-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <ChatBubbleLeftIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{example.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {example.description}
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                {example.conversation.map((message, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <CursorArrowRaysIcon className="w-5 h-5 text-primary" />
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
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          Natural Development Workflows
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {naturalWorkflows.map((workflow) => (
            <div
              key={workflow.title}
              className="bg-background/50 p-6 rounded-lg"
            >
              <h3 className="font-semibold mb-4">{workflow.title}</h3>
              <div className="space-y-4">
                {workflow.steps.map((step, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="bg-primary/10 p-1.5 rounded text-sm">
                        {i + 1}
                      </div>
                      <div className="font-medium text-sm">
                        {step.description}
                      </div>
                    </div>
                    <div className="bg-muted p-2 rounded text-sm">
                      {step.example}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          AI Configuration Through Conversation
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Control AI behavior naturally through conversation, just like guiding
          a teammate
        </p>
        <div className="space-y-8">
          {aiConfigurationPatterns.map((pattern) => (
            <div
              key={pattern.title}
              className="bg-background/50 p-6 rounded-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <AdjustmentsHorizontalIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{pattern.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {pattern.description}
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                {pattern.conversation.map((message, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <CursorArrowRaysIcon className="w-5 h-5 text-primary" />
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
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NaturalLanguageGuidePage;
