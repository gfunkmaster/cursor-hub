# Building a Feature with Cursor AI: Practical Example

This guide walks through building a real feature using Cursor AI, demonstrating the concepts from our main guide in action.

## Example Feature: Smart Component Generator

We'll build a smart component generator that creates React components with TypeScript, tests, and documentation.

### 1. Initial Setup

1. Open Cursor AI and type:

```
Create a new component generator that:
- Takes a component name and props
- Generates TypeScript React components
- Includes styled-components setup
- Adds Jest tests
- Creates documentation
```

2. When Cursor AI responds, it will help you create the base structure:

```typescript
// src/utils/componentGenerator.ts
interface ComponentConfig {
  name: string;
  props: {
    name: string;
    type: string;
    required: boolean;
  }[];
  styling?: boolean;
  tests?: boolean;
  documentation?: boolean;
}

export function generateComponent(config: ComponentConfig): {
  component: string;
  tests: string;
  documentation: string;
} {
  // Implementation will be provided by Cursor AI
}
```

### 2. Building the Generator

1. Ask Cursor AI to implement the generator:

```
Implement the generateComponent function with:
- TypeScript React component generation
- Styled-components integration
- Jest test template
- JSDoc documentation
```

2. Cursor AI will help you implement the function:

```typescript
// Example of what Cursor AI will generate
export function generateComponent(config: ComponentConfig) {
  const componentCode = generateComponentCode(config);
  const testCode = generateTestCode(config);
  const docs = generateDocs(config);

  return {
    component: componentCode,
    tests: testCode,
    documentation: docs,
  };
}
```

### 3. Adding Tests

1. Ask Cursor AI to add tests:

```
Create Jest tests for the component generator that:
- Verify component generation
- Test prop handling
- Check styling integration
- Validate documentation
```

2. Cursor AI will help create test cases:

```typescript
// src/utils/__tests__/componentGenerator.test.ts
describe("Component Generator", () => {
  it("generates a basic component", () => {
    // Test implementation
  });

  it("handles props correctly", () => {
    // Test implementation
  });
});
```

### 4. Creating Documentation

1. Use Cursor AI to generate documentation:

```
Create documentation for the component generator:
- Usage examples
- API reference
- Best practices
- Common patterns
```

2. Cursor AI will help create comprehensive docs:

```markdown
# Component Generator

Generate React components with TypeScript support...
```

### 5. Using the Generator

1. Create a new component:

```typescript
const config: ComponentConfig = {
  name: "UserProfile",
  props: [
    { name: "user", type: "User", required: true },
    { name: "onUpdate", type: "(user: User) => void", required: true },
  ],
  styling: true,
  tests: true,
  documentation: true,
};

const { component, tests, documentation } = generateComponent(config);
```

2. Review and customize:

```
Review this generated component for:
- Type safety
- Best practices
- Performance
- Accessibility
```

## Key Learnings

1. **Progressive Development**

   - Start with interface definition
   - Implement core functionality
   - Add tests
   - Create documentation

2. **AI Collaboration**

   - Clear, specific prompts
   - Iterative improvements
   - Code review assistance
   - Documentation help

3. **Best Practices**
   - Type safety first
   - Comprehensive testing
   - Clear documentation
   - Maintainable code

## Next Steps

1. Enhance the generator:

```
Add features to the component generator:
- Storybook integration
- CSS module support
- Custom hooks
- Performance optimization
```

2. Create more examples:

```
Generate example components for:
- Forms
- Data tables
- Navigation
- Modals
```

This practical example demonstrates how to use Cursor AI effectively in a real-world scenario. Try building this feature yourself, using the prompts provided, and see how Cursor AI can help you create production-ready code.
