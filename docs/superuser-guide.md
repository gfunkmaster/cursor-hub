# Cursor AI Superuser Guide

## Daily Habits Checklist

### 1. Command Center (Cmd+K)

- [ ] Use Cmd+K to quickly access AI assistance
- [ ] Ask for code explanations and improvements
- [ ] Request documentation for complex functions
- [ ] Get suggestions for better patterns

### 2. Context is King

- [ ] Keep code organized in logical folders
- [ ] Write clear, descriptive comments
- [ ] Use TypeScript for better type hints
- [ ] Maintain up-to-date documentation

### 3. Effective Prompting

- [ ] Be specific about requirements
- [ ] Include relevant context
- [ ] Use template prompts for consistency
- [ ] Iterate on responses with refinements

### 4. Project Organization

- [ ] Follow consistent naming conventions
- [ ] Use meaningful file structure
- [ ] Keep related code together
- [ ] Document architectural decisions

## Power User Tips

### Quick Actions

```bash
# Create component alias
alias cc="cursor create-component"

# Open project in Cursor
alias cur="cursor open"

# Generate documentation
alias cdoc="cursor document"
```

### Keyboard Shortcuts

| Action     | Shortcut    |
| ---------- | ----------- |
| AI Assist  | Cmd+K       |
| Quick Fix  | Cmd+.       |
| Go to File | Cmd+P       |
| Search All | Cmd+Shift+F |

### Best Practices

1. **Small, Focused Commits**

   - Makes it easier for AI to understand changes
   - Helps with debugging and reviews
   - Enables better context tracking

2. **Clear Documentation**

   - Write TODOs with specific requirements
   - Include examples in comments
   - Document edge cases and assumptions

3. **Regular Updates**

   - Keep dependencies current
   - Update Cursor regularly
   - Review and update documentation

4. **Project Structure**
   ```
   src/
   ├── components/    # Reusable UI components
   ├── app/          # Next.js pages
   ├── lib/          # Shared utilities
   ├── types/        # TypeScript definitions
   └── styles/       # Global styles
   ```

## Prompt Templates

### Creating Components

```
Create a new React component with:
- TypeScript props interface
- Proper error handling
- Unit tests
- Storybook documentation
```

### Adding Features

```
Add a feature to [Component] that:
- Handles [specific use case]
- Includes error states
- Is accessible
- Has proper types
```

### Debugging

```
Debug this issue by:
1. Explaining the current behavior
2. Identifying potential causes
3. Suggesting solutions
4. Preventing future occurrences
```

## Project-Specific Guidelines

### Code Style

- Use double quotes for strings
- Max line length: 80 characters
- Use TypeScript for all new code
- Follow component structure template

### Documentation

- Keep README.md updated
- Document all exported functions
- Include usage examples
- Explain complex logic

### Testing

- Write tests for new components
- Include edge cases
- Test accessibility
- Document test scenarios

## Continuous Improvement

### Regular Reviews

- Review AI-generated code
- Look for patterns to template
- Update documentation
- Share learnings with team

### Feedback Loop

- Note what works well
- Identify areas for improvement
- Refine prompt templates
- Update guidelines as needed
