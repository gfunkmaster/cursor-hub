# Cursor AI Prompt Engineering Guide

## Basic Principles

### 1. Be Specific

✅ Good:

```
Create a React component that displays a user profile with:
- Name and avatar
- Email and location
- Bio section
- Edit button that triggers a modal
```

❌ Bad:

```
Make a user profile component
```

### 2. Provide Context

✅ Good:

```
We're using Next.js 13 with TypeScript and Tailwind CSS. Create an authentication form that:
- Handles email/password login
- Includes form validation
- Shows loading states
- Handles error messages
```

❌ Bad:

```
Create a login form
```

### 3. Include Requirements

✅ Good:

```
Generate an API endpoint that:
- Accepts POST requests
- Validates input with Zod
- Returns JSON response
- Includes error handling
- Has TypeScript types
```

❌ Bad:

```
Create an API endpoint
```

## Common Patterns

### 1. Component Creation

```typescript
// Pattern:
Create a [Component Name] that:
1. Takes props: [list props]
2. Handles states: [list states]
3. Includes features: [list features]
4. Uses: [list technologies]
5. Implements: [list patterns]

// Example:
Create a DataTable component that:
1. Takes props: data, columns, sorting, pagination
2. Handles states: loading, error, selected rows
3. Includes features: sorting, filtering, pagination
4. Uses: TypeScript, styled-components
5. Implements: virtualization for large datasets
```

### 2. API Integration

```typescript
// Pattern:
Implement [API Name] integration that:
1. Handles methods: [list methods]
2. Includes features: [list features]
3. Uses: [list technologies]
4. Implements: [list patterns]

// Example:
Implement user authentication API that:
1. Handles methods: login, register, reset password
2. Includes features: JWT tokens, refresh tokens
3. Uses: TypeScript, Express, Prisma
4. Implements: rate limiting, input validation
```

### 3. Testing

```typescript
// Pattern:
Create tests for [Component/Function] that:
1. Test scenarios: [list scenarios]
2. Mock: [list mocks]
3. Include: [list types]
4. Verify: [list checks]

// Example:
Create tests for UserProfile component that:
1. Test scenarios: render, update, error states
2. Mock: API calls, user data
3. Include: unit tests, integration tests
4. Verify: rendering, interactions, error handling
```

## Advanced Techniques

### 1. Progressive Development

```typescript
// Step 1: Basic Structure
Create a basic structure for [feature] with:
- Types/interfaces
- Component skeleton
- Basic styling

// Step 2: Core Functionality
Add core functionality:
- State management
- Event handlers
- Basic error handling

// Step 3: Enhancement
Add advanced features:
- Loading states
- Error boundaries
- Performance optimization

// Step 4: Polish
Finalize the implementation:
- Accessibility
- Documentation
- Tests
```

### 2. Refactoring

```typescript
// Pattern:
Refactor [code] to:
1. Improve: [list improvements]
2. Fix: [list issues]
3. Add: [list additions]
4. Remove: [list removals]

// Example:
Refactor user authentication to:
1. Improve: type safety, error handling
2. Fix: memory leaks, race conditions
3. Add: refresh token logic, persistence
4. Remove: redundant API calls
```

### 3. Debugging

```typescript
// Pattern:
Debug [issue] where:
1. Current behavior: [describe]
2. Expected behavior: [describe]
3. Error message: [paste]
4. Related code: [paste]

// Example:
Debug infinite loop where:
1. Current behavior: component re-renders continuously
2. Expected behavior: renders once on data change
3. Error message: "Maximum update depth exceeded"
4. Related code: useEffect hook in UserProfile
```

## Best Practices

### 1. Structure Your Prompts

```
1. Start with the goal
2. List requirements
3. Specify technologies
4. Include constraints
5. Request examples
```

### 2. Use Clear Language

```
✅ Use:
- Specific technical terms
- Clear requirements
- Measurable outcomes

❌ Avoid:
- Ambiguous terms
- Unclear scope
- Vague requirements
```

### 3. Iterate and Refine

```
1. Start with basic prompt
2. Review output
3. Refine requirements
4. Add missing details
5. Try again
```

## Common Use Cases

### 1. Feature Implementation

```
Implement [feature] with:
- TypeScript types
- React hooks
- Error handling
- Loading states
- Unit tests
- Documentation
```

### 2. Code Review

```
Review this code for:
- Performance issues
- Security concerns
- Best practices
- Type safety
- Error handling
- Test coverage
```

### 3. Documentation

```
Generate documentation for [code] including:
- Overview
- Installation
- Usage examples
- API reference
- TypeScript types
- Common issues
```

## Troubleshooting

### 1. Unclear Results

```
If results are unclear:
1. Add more context
2. Be more specific
3. Include code examples
4. List technologies
5. Specify versions
```

### 2. Incorrect Output

```
If output is incorrect:
1. Check requirements
2. Verify context
3. Add constraints
4. Provide examples
5. Iterate prompt
```

### 3. Performance Issues

```
If AI is slow:
1. Simplify request
2. Break into steps
3. Reduce scope
4. Focus on core
5. Progressive enhancement
```

Remember: The key to effective prompts is being specific, providing context, and using progressive development when needed.
