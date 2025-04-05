# Live Prompt Tuning Guide

## Component Creation Template

```
Create a new [Component Name] component with the following requirements:
- Purpose: [Brief description of component's purpose]
- Props: [List required props and their types]
- Styling: [Describe desired styling/theme]
- Behavior: [Describe interactive behavior]
- Dependencies: [List any required packages]
- Location: src/components/[ComponentName].tsx
```

## Feature Implementation Template

```
Implement [Feature Name] with these specifications:
- Goal: [What the feature should accomplish]
- Requirements:
  1. [Requirement 1]
  2. [Requirement 2]
  ...
- Technical Constraints:
  - [List any technical limitations]
  - [Performance requirements]
- Testing Criteria:
  - [List test cases]
```

## Bug Fix Template

```
Debug [Issue Description]:
- Current Behavior: [What's happening]
- Expected Behavior: [What should happen]
- Error Message: [If applicable]
- Steps to Reproduce:
  1. [Step 1]
  2. [Step 2]
  ...
- Relevant Files:
  - [File paths]
```

## Code Review Template

```
Review the following changes in [File Path]:
- Focus Areas:
  - Code style consistency
  - Performance implications
  - Security considerations
  - Type safety
- Questions:
  - [Specific questions about implementation]
```

## Documentation Template

```
Document [Feature/Component]:
- Overview: [Brief description]
- Usage Examples:
  - [Basic usage]
  - [Advanced scenarios]
- API Reference:
  - Props/Parameters
  - Return values
  - Side effects
- Best Practices:
  - [Do's and don'ts]
```

## Project-Specific Guidelines

### Style Conventions

- Use TypeScript for all new components
- Follow Tailwind CSS class naming conventions
- Maintain consistent file structure
- Use named exports for components

### Component Structure

- Separate logic from presentation
- Use custom hooks for complex state management
- Include prop type definitions
- Add JSDoc comments for public APIs

### Testing Requirements

- Write unit tests for utility functions
- Add integration tests for complex features
- Include accessibility tests
- Document test coverage expectations

## Tips for Effective Prompting

1. Be Specific

   - Provide clear requirements
   - Include context and constraints
   - Specify desired output format

2. Use Examples

   - Show existing similar code
   - Provide sample data
   - Reference similar features

3. Iterate

   - Start with basic implementation
   - Review and refine
   - Ask for specific improvements

4. Provide Context

   - Reference related files
   - Explain project architecture
   - Mention dependencies

5. Set Constraints
   - Performance requirements
   - Browser compatibility
   - Package size limits
   - Accessibility standards
