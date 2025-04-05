export default function Advanced() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Advanced Techniques 🔧</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Advanced Prompt Engineering</h2>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">1. Context-Rich Prompts</h3>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                Create detailed prompts with full context:
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                <pre className="whitespace-pre-wrap text-sm">
{`"I'm working on [feature] in a [framework] project.
Current Context:
- Using TypeScript with strict mode
- Following atomic design principles
- Using Redux for state management
- Testing with Jest and RTL

Technical Requirements:
1. Architecture
   - Micro-frontend compatible
   - Module federation support
   - Shared dependencies
   - Cross-team collaboration

2. Performance Goals
   - < 100ms initial render
   - < 50kb bundle size
   - 90+ Lighthouse score
   - PWA support

3. Quality Standards
   - 100% test coverage
   - Sonar compliance
   - A11y requirements
   - i18n support"`}
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">2. Multi-Step Problem Solving</h3>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                Break down complex problems:
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                <pre className="whitespace-pre-wrap text-sm">
{`"Let's implement [complex feature] in steps:
1. Architecture Design
   - System components
   - Data flow
   - State management
   - API contracts

2. Core Implementation
   - Base components
   - Business logic
   - Data models
   - API integration

3. Enhancement Phase
   - Performance optimization
   - Error handling
   - Edge cases
   - Documentation

4. Quality Assurance
   - Unit tests
   - Integration tests
   - Performance tests
   - Security audit"`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">System Design & Architecture</h2>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">1. Architecture Planning</h3>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                Request comprehensive architecture design:
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                <pre className="whitespace-pre-wrap text-sm">
{`"Design a scalable architecture for [system]:
1. System Requirements
   - User load expectations
   - Data volume projections
   - Performance requirements
   - Security needs

2. Technical Stack
   - Frontend framework
   - Backend services
   - Database choices
   - Infrastructure

3. System Components
   - Service boundaries
   - Data models
   - API design
   - Integration points

4. Implementation Strategy
   - Development phases
   - Team structure
   - Timeline estimates
   - Risk assessment"`}
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">2. Performance Optimization</h3>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                Request performance improvements:
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                <pre className="whitespace-pre-wrap text-sm">
{`"Optimize [component/feature] for performance:
1. Current Metrics
   - Load time analysis
   - Memory usage
   - Network requests
   - Bundle size

2. Optimization Areas
   - Code splitting
   - Resource loading
   - Caching strategy
   - State management

3. Implementation
   - Lazy loading
   - Memoization
   - Virtual scrolling
   - Image optimization

4. Monitoring
   - Performance metrics
   - User metrics
   - Error tracking
   - Analytics"`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Advanced Testing Strategies</h2>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">1. Comprehensive Testing</h3>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                Request advanced testing implementation:
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                <pre className="whitespace-pre-wrap text-sm">
{`"Implement comprehensive testing for [feature]:
1. Test Strategy
   - Test pyramid structure
   - Coverage goals
   - Testing tools
   - CI/CD integration

2. Test Types
   - Unit tests
   - Integration tests
   - E2E tests
   - Performance tests

3. Advanced Scenarios
   - Race conditions
   - Network failures
   - State conflicts
   - Security vulnerabilities

4. Quality Metrics
   - Code coverage
   - Mutation testing
   - Performance benchmarks
   - Security scanning"`}
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">2. Security Testing</h3>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                Implement security testing:
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                <pre className="whitespace-pre-wrap text-sm">
{`"Implement security testing for [feature]:
1. Security Requirements
   - Authentication
   - Authorization
   - Data protection
   - Compliance needs

2. Test Scenarios
   - Input validation
   - XSS prevention
   - CSRF protection
   - SQL injection

3. Implementation
   - Security headers
   - Data encryption
   - Access control
   - Audit logging

4. Monitoring
   - Security alerts
   - Audit trails
   - Penetration testing
   - Vulnerability scanning"`}
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
            <h3 className="text-xl font-semibold mb-3">Advanced Workflow Tips</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>Create custom prompt templates</li>
              <li>Build reusable code patterns</li>
              <li>Maintain documentation as code</li>
              <li>Automate repetitive tasks</li>
              <li>Use version control effectively</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Best Practices</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>Follow security guidelines</li>
              <li>Implement performance budgets</li>
              <li>Use design patterns consistently</li>
              <li>Monitor technical debt</li>
              <li>Regular code reviews</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
} 