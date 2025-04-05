export default function ProjectSetup() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Project Setup Mastery 🏗️</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Setting Up New Projects</h2>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">1. Project Initialization</h3>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                Start with a clear, detailed prompt that outlines your project requirements:
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                <pre className="whitespace-pre-wrap text-sm">
{`"I want to create a new [framework] project with:
- Tech stack: Next.js, TypeScript, Tailwind CSS
- Features: Authentication, API routes, Database integration
- Testing: Jest, React Testing Library
- CI/CD: GitHub Actions
Please include:
- Project structure
- Essential dependencies
- Configuration files
- Basic components"`}
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">2. Project Structure Best Practices</h3>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                Request a well-organized project structure:
              </p>
              <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg text-sm">
{`src/
├── components/
│   ├── common/      # Reusable components
│   ├── features/    # Feature-specific components
│   └── layout/      # Layout components
├── lib/
│   ├── api/        # API utilities
│   ├── hooks/      # Custom hooks
│   └── utils/      # Helper functions
├── pages/          # Route pages
├── styles/         # Global styles
└── types/          # TypeScript types`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Advanced Configuration</h2>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">1. TypeScript Configuration</h3>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                Request optimized TypeScript settings:
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                <pre className="whitespace-pre-wrap text-sm">
{`"Configure TypeScript with:
- Strict mode enabled
- Path aliases for clean imports
- Module resolution settings
- ESLint integration
Include best practices for:
- Type definitions
- Generic constraints
- Utility types"`}
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">2. ESLint & Prettier Setup</h3>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                Request comprehensive linting configuration:
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                <pre className="whitespace-pre-wrap text-sm">
{`"Set up ESLint and Prettier with:
- TypeScript support
- React best practices
- Import sorting
- Code style rules
Include configurations for:
- VS Code integration
- Pre-commit hooks
- Automated fixing"`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Working with Existing Projects</h2>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">1. Project Analysis</h3>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                Start with a comprehensive analysis:
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                <pre className="whitespace-pre-wrap text-sm">
{`"Analyze this codebase and provide:
1. Architecture Overview
   - Design patterns used
   - State management approach
   - Data flow patterns

2. Code Organization
   - File structure
   - Component hierarchy
   - Module dependencies

3. Technical Assessment
   - Performance bottlenecks
   - Security concerns
   - Technical debt areas

4. Improvement Opportunities
   - Refactoring suggestions
   - Modern practice adoption
   - Testing coverage gaps"`}
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">2. Adding New Features</h3>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                Request feature implementation with context:
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                <pre className="whitespace-pre-wrap text-sm">
{`"I need to add [feature] to the existing project.
Current Context:
- Project uses [framework/library versions]
- Following [architectural pattern]
- Using [state management solution]

Requirements:
1. Technical Specifications
   - TypeScript interfaces
   - API integration
   - State management
   - Error handling

2. Implementation Details
   - Component structure
   - Data flow
   - Edge cases
   - Performance considerations

3. Testing Strategy
   - Unit tests
   - Integration tests
   - E2E scenarios"`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Pro Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Project Setup Tips</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>Always specify Node.js and package manager versions</li>
              <li>Include environment variable templates</li>
              <li>Set up Git hooks for consistency</li>
              <li>Configure VS Code workspace settings</li>
              <li>Document setup steps in README</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Best Practices</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>Use consistent naming conventions</li>
              <li>Implement proper error boundaries</li>
              <li>Set up logging and monitoring</li>
              <li>Configure proper security measures</li>
              <li>Establish coding standards</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
} 