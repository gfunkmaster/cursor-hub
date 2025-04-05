export default function DailyWorkflow() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Daily Development Workflow 💻</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Feature Development</h2>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">1. Component Creation</h3>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                Create components with detailed specifications:
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                <pre className="whitespace-pre-wrap text-sm">
{`"Create a DataTable component with:
1. Features
   - Sorting
   - Filtering
   - Pagination
   - Row selection

2. Props Interface
   - Data structure
   - Customization options
   - Event handlers
   - Styling variants

3. Implementation
   - Accessibility support
   - Loading states
   - Error handling
   - Empty states

4. Documentation
   - Usage examples
   - Props documentation
   - Customization guide"`}
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">2. API Integration</h3>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                Request API integration with proper error handling:
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                <pre className="whitespace-pre-wrap text-sm">
{`"Implement API integration for [feature]:
1. Setup
   - API client configuration
   - Environment variables
   - Type definitions
   - Response interfaces

2. Implementation
   - Request/response handling
   - Error boundaries
   - Loading states
   - Cache management

3. Error Handling
   - Network errors
   - Validation errors
   - Rate limiting
   - Retry logic"`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Code Review & Refactoring</h2>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">1. Code Review</h3>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                Request comprehensive code review:
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                <pre className="whitespace-pre-wrap text-sm">
{`"Review this code for:
1. Code Quality
   - Clean code principles
   - SOLID principles
   - Design patterns
   - Type safety

2. Performance
   - Render optimization
   - Memory usage
   - Network efficiency
   - Bundle size impact

3. Security
   - Input validation
   - Data sanitization
   - Authentication/Authorization
   - Security best practices

4. Testing
   - Test coverage
   - Edge cases
   - Error scenarios
   - Integration points"`}
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">2. Refactoring</h3>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                Request code refactoring with specific goals:
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                <pre className="whitespace-pre-wrap text-sm">
{`"Refactor this code to:
1. Improve Maintainability
   - Extract reusable logic
   - Simplify complex functions
   - Enhance readability
   - Add documentation

2. Optimize Performance
   - Reduce re-renders
   - Optimize loops
   - Improve data structures
   - Implement memoization

3. Enhance Type Safety
   - Add/improve types
   - Use generics
   - Handle edge cases
   - Validate inputs"`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Testing & Debugging</h2>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">1. Test Creation</h3>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                Request comprehensive test coverage:
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                <pre className="whitespace-pre-wrap text-sm">
{`"Create tests for [component/feature]:
1. Unit Tests
   - Component rendering
   - Props validation
   - Event handlers
   - State management

2. Integration Tests
   - Component interactions
   - API integration
   - Route transitions
   - State updates

3. E2E Tests
   - User flows
   - Error scenarios
   - Edge cases
   - Performance metrics"`}
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">2. Debugging</h3>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                Debug issues effectively:
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                <pre className="whitespace-pre-wrap text-sm">
{`"Debug this issue:
1. Current Behavior
   - Error message
   - Stack trace
   - Reproduction steps
   - Environment details

2. Investigation
   - Code analysis
   - Log review
   - State inspection
   - Network requests

3. Solution
   - Root cause
   - Fix implementation
   - Prevention measures
   - Documentation updates"`}
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
            <h3 className="text-xl font-semibold mb-3">Efficiency Tips</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>Use keyboard shortcuts frequently</li>
              <li>Leverage code snippets</li>
              <li>Create reusable prompts</li>
              <li>Document common solutions</li>
              <li>Build component libraries</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Quality Tips</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>Write clear commit messages</li>
              <li>Review generated code carefully</li>
              <li>Test edge cases thoroughly</li>
              <li>Document important decisions</li>
              <li>Share knowledge with team</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
} 