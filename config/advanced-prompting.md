# Advanced AI Prompting Techniques

## Core Concepts

### 1. Chain of Thought Prompting
```
// Instead of:
"Create a React component for a data table"

// Use:
"Let's create a React data table component:
1. First, define the interface for table props and row data
2. Then, create the basic table structure with headers
3. Next, implement row rendering with sorting
4. Finally, add pagination and filtering
Please start with step 1."
```

### 2. Context Layering
```
// Base Context
"Working on a Next.js TypeScript project with:
- React 18
- Tailwind CSS
- Jest for testing
- ESLint configuration"

// Feature Context
"Within this project, we need a user authentication system that:
- Uses NextAuth.js
- Supports multiple providers
- Includes role-based access
- Handles session management"

// Implementation Context
"For the Google authentication provider:
1. Set up OAuth credentials
2. Configure NextAuth.js
3. Implement protected routes
4. Add user role management"
```

### 3. Progressive Refinement
```
// Initial Request
"Create a basic form component"

// Refinement 1
"Add form validation with:
- Required fields
- Email format
- Password strength"

// Refinement 2
"Enhance error handling with:
- Field-level errors
- Form-level errors
- Submission validation"

// Refinement 3
"Optimize performance with:
- Debounced validation
- Memoized callbacks
- Controlled inputs"
```

## Advanced Patterns

### 1. State Machine Prompting
```
"Implement a form wizard with these states:
1. Initial -> Personal Info
2. Personal Info -> Contact Details
   - Validate email and phone
   - Allow going back
3. Contact Details -> Review
   - Show summary
   - Allow editing previous steps
4. Review -> Submission
   - Confirm all data
   - Handle API submission"
```

### 2. Component Composition
```
"Let's build a complex dashboard:
1. Layout Component
   - Header with navigation
   - Sidebar with filters
   - Main content area
   - Responsive design

2. Data Components
   - Charts and graphs
   - Data tables
   - Status cards
   - Loading states

3. Integration
   - Connect components
   - Handle data flow
   - Manage state
   - Optimize performance"
```

### 3. Error Recovery
```
"If the API call fails:
1. Retry with exponential backoff
2. Show user-friendly error
3. Provide retry option
4. Log error details
5. Maintain data consistency"
```

## Optimization Techniques

### 1. Performance Prompting
```
"Optimize this component for:
1. Initial Load
   - Code splitting
   - Lazy loading
   - Bundle size

2. Runtime Performance
   - Memoization
   - Virtual scrolling
   - Debouncing

3. Memory Management
   - Cleanup effects
   - Resource disposal
   - Cache invalidation"
```

### 2. Type-Driven Development
```
"Let's design this feature using types first:
1. Define interfaces
   - Data models
   - Component props
   - API responses

2. Implement type guards
   - Runtime validation
   - Error handling
   - Edge cases

3. Create implementations
   - Type-safe components
   - Utility functions
   - Custom hooks"
```

## Testing Strategies

### 1. Test-Driven Prompting
```
"Let's develop this feature using TDD:
1. Write failing tests
   - Unit tests
   - Integration tests
   - Edge cases

2. Implement feature
   - Pass each test
   - Refactor code
   - Maintain coverage

3. Add regression tests
   - Performance tests
   - Error scenarios
   - Browser compatibility"
```

### 2. Comprehensive Testing
```
"Test this authentication system for:
1. Happy Path
   - Successful login
   - Valid session
   - Proper redirect

2. Edge Cases
   - Invalid credentials
   - Expired tokens
   - Network errors

3. Security
   - CSRF protection
   - XSS prevention
   - Rate limiting"
```

## Best Practices

### 1. Documentation First
```
"Before implementation, let's document:
1. Component API
   - Props interface
   - Event handlers
   - Return types

2. Usage Examples
   - Basic usage
   - Advanced scenarios
   - Edge cases

3. Integration Guide
   - Setup steps
   - Dependencies
   - Configuration"
```

### 2. Maintainability
```
"Design this system for maintainability:
1. Code Structure
   - Clear hierarchy
   - Modular design
   - Consistent patterns

2. Error Handling
   - Centralized handling
   - Clear messages
   - Recovery paths

3. Documentation
   - Inline comments
   - API documentation
   - Usage examples"
```

## Pro Tips

### 1. Iterative Refinement
- Start with high-level design
- Break down into smaller tasks
- Implement incrementally
- Test each iteration
- Document changes

### 2. Context Management
- Maintain consistent context
- Update as requirements change
- Reference previous decisions
- Track dependencies
- Document assumptions

### 3. Error Prevention
- Validate inputs early
- Handle edge cases
- Provide clear feedback
- Log important events
- Plan for recovery

## Remember
- Be specific and clear
- Provide complete context
- Break down complex tasks
- Test thoroughly
- Document everything 