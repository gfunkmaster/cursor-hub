// Static guide content
const guides = {
  'getting-started': `
# Getting Started with Cursor AI 🚀

## Introduction
Cursor AI is your intelligent coding companion that helps you write, understand, and maintain code more efficiently.

## Key Features
- Smart code completion
- Natural language code generation
- Intelligent code explanations
- Automated refactoring
- Context-aware suggestions

## Basic Usage
1. Open a project in Cursor
2. Use natural language to describe what you want to do
3. Let Cursor AI help you write and modify code
4. Review and refine the suggestions

## Best Practices
- Be specific in your requests
- Provide context when needed
- Review generated code carefully
- Use version control
`,

  'project-setup': `
# Project Setup Mastery 🏗️

## Setting Up New Projects
Learn how to effectively use Cursor AI when starting new projects.

## Project Structure Best Practices
Discover optimal project organization patterns.

## Advanced Configuration
Master Cursor AI's configuration options.

## Working with Existing Projects
Tips for integrating Cursor AI into existing codebases.

## Pro Tips
Expert-level techniques for project setup.
`,

  'daily-workflow': `
# Daily Workflow Guide 💻

## Feature Development
Learn how to use Cursor AI for efficient feature development.

## Code Review & Refactoring
Leverage AI for better code reviews and refactoring.

## Testing & Debugging
Use AI to write tests and fix bugs faster.

## Pro Tips
Advanced techniques for daily development tasks.
`,

  'advanced': `
# Advanced Techniques 🔧

## Advanced Prompt Engineering
Master the art of crafting effective prompts.

## System Design & Architecture
Use AI for better system design decisions.

## Advanced Testing Strategies
Implement comprehensive testing approaches.

## Pro Tips
Expert-level techniques for maximum productivity.
`
};

export function loadGuideContent() {
  return guides;
} 