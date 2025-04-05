# Cursor AI Prompt Templates Guide

## Basic Prompt Structure

### General Format
```
[Action] [Target] [Context] [Constraints] [Output Format]
```

Example:
```
Refactor this function to use async/await instead of promises, maintaining the same functionality and error handling, and include JSDoc comments.
```

## Common Templates

### Code Generation

#### Function Creation
```
Create a [language] function that [functionality] with the following requirements:
- Input: [describe parameters]
- Output: [describe return value]
- Error handling: [describe error cases]
- Performance considerations: [describe constraints]
```

#### Component Creation
```
Create a React component for [purpose] that:
- Accepts props: [list props]
- Handles states: [list states]
- Includes these features: [list features]
- Uses [styling approach]
```

### Code Review

#### Code Analysis
```
Review this code for:
- Performance issues
- Security vulnerabilities
- Best practices violations
- Potential bugs
Provide specific recommendations for each issue found.
```

#### Optimization Request
```
Optimize this code for [performance/memory/readability] while maintaining:
- Current functionality
- Error handling
- Type safety
- Test coverage
```

### Documentation

#### Function Documentation
```
Document this function with:
- JSDoc comments
- Parameter descriptions
- Return value details
- Usage examples
- Edge cases
```

#### README Generation
```
Create a README for this project including:
- Project overview
- Installation steps
- Usage instructions
- API documentation
- Contributing guidelines
```

### Testing

#### Test Suite Creation
```
Generate tests for this [function/component] covering:
- Happy path scenarios
- Edge cases
- Error conditions
- Performance benchmarks
Use [testing framework] and include mocks where needed.
```

#### Test Case Expansion
```
Add test cases for:
- Missing edge cases
- Error scenarios
- Boundary conditions
- Integration points
```

## Advanced Templates

### System Design

#### Architecture Planning
```
Design a system architecture for [project] that:
- Scales to [requirements]
- Handles [specific challenges]
- Uses [technology stack]
- Considers [constraints]
Provide a high-level diagram and component breakdown.
```

#### API Design
```
Design a RESTful API for [service] with:
- Endpoint specifications
- Request/response formats
- Authentication/authorization
- Rate limiting
- Error handling
```

### Refactoring

#### Pattern Implementation
```
Refactor this code to use the [design pattern] pattern:
- Maintain existing functionality
- Improve [specific aspect]
- Consider [constraints]
- Include migration notes
```

#### Code Migration
```
Convert this code from [source] to [target]:
- Preserve functionality
- Optimize for [target platform]
- Handle [specific concerns]
- Include tests
```

## Pro Tips

### Context Enhancement
1. Include relevant code snippets
2. Specify dependencies and versions
3. Mention performance requirements
4. Describe edge cases
5. Reference existing patterns

### Clarity Guidelines
1. Be specific about requirements
2. Use consistent terminology
3. Break down complex requests
4. Prioritize constraints
5. Specify output format

### Best Practices
1. Start with high-level goals
2. Include acceptance criteria
3. Specify non-functional requirements
4. Request examples when needed
5. Ask for explanations of complex parts

## Common Scenarios

### Debugging
```
Debug this code that [problem description]:
1. Current behavior: [describe]
2. Expected behavior: [describe]
3. Error messages: [if any]
4. Recent changes: [if known]
```

### Performance Optimization
```
Profile and optimize this code for:
1. Time complexity
2. Memory usage
3. Network calls
4. Resource utilization
Provide before/after metrics.
```

### Security Review
```
Audit this code for:
1. Security vulnerabilities
2. Data validation
3. Authentication checks
4. Authorization rules
5. Input sanitization
```

## Remember
- Be specific and clear
- Provide context
- State constraints
- Request explanations
- Iterate on responses 