# Next.js Starter Template with Cursor AI

This template demonstrates how to build a modern Next.js application using Cursor AI. Follow along with the prompts to create a full-featured application.

## Getting Started

1. Create a new Next.js project:

```bash
Press Cmd/Ctrl + K and type:
create a new Next.js project with TypeScript, Tailwind CSS, and testing setup
```

2. Initialize the project structure:

```
Press Cmd/Ctrl + / and type:
Create a scalable project structure with:
- src/
  - components/
  - features/
  - hooks/
  - utils/
  - types/
  - styles/
  - tests/
```

## Core Features

### 1. Authentication

Add authentication using Next-Auth:

```
Add authentication to the project with:
- Email/password login
- Social providers (Google, GitHub)
- Protected routes
- User session management
```

### 2. Database Integration

Set up Prisma with PostgreSQL:

```
Add Prisma database integration with:
- User model
- Basic CRUD operations
- Migration setup
- Environment configuration
```

### 3. API Routes

Create type-safe API routes:

```
Generate API routes for:
- User management
- Authentication
- Data operations
- File uploads
```

### 4. Components

Build core components:

```
Create reusable components:
- Layout with navigation
- Form components
- Data tables
- Modal system
```

### 5. State Management

Add state management:

```
Implement state management using:
- React Context for auth
- React Query for server state
- Zustand for UI state
```

## Testing

### 1. Unit Tests

Generate unit tests:

```
Create Jest tests for:
- Utility functions
- Hooks
- Components
- API routes
```

### 2. Integration Tests

Add integration tests:

```
Create integration tests for:
- User flows
- API endpoints
- Authentication
- Database operations
```

### 3. E2E Tests

Set up end-to-end tests:

```
Add Cypress tests for:
- User journeys
- Critical paths
- Edge cases
```

## Deployment

### 1. Environment Setup

Configure environments:

```
Set up environment configuration for:
- Development
- Staging
- Production
```

### 2. CI/CD

Add GitHub Actions:

```
Create CI/CD workflows for:
- Testing
- Linting
- Building
- Deployment
```

### 3. Monitoring

Add monitoring:

```
Implement monitoring with:
- Error tracking
- Performance metrics
- Usage analytics
```

## Best Practices

### 1. Code Quality

Maintain high code quality:

```
Add quality tools:
- ESLint configuration
- Prettier setup
- Husky pre-commit hooks
- TypeScript strict mode
```

### 2. Performance

Optimize performance:

```
Implement performance features:
- Image optimization
- Code splitting
- Bundle analysis
- Caching strategies
```

### 3. Security

Add security measures:

```
Implement security features:
- CSRF protection
- Rate limiting
- Input validation
- Security headers
```

## Development Workflow

### 1. Getting Started

```bash
# Clone the repository
git clone [repository-url]

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

### 2. Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run test     # Run tests
npm run lint     # Run linting
```

### 3. Directory Structure

```
src/
├── components/     # Reusable UI components
├── features/       # Feature-based modules
├── hooks/          # Custom React hooks
├── pages/          # Next.js pages
├── styles/         # Global styles
├── types/          # TypeScript types
├── utils/          # Utility functions
└── tests/          # Test files
```

## Using with Cursor AI

### 1. Component Generation

To create a new component:

```
Press Cmd/Ctrl + K and type:
create a new [component-name] component with TypeScript and tests
```

### 2. API Routes

To add an API route:

```
Press Cmd/Ctrl + K and type:
create a new API route for [feature] with validation and error handling
```

### 3. Database Operations

To add database operations:

```
Press Cmd/Ctrl + K and type:
create Prisma operations for [model] with proper error handling
```

### 4. Testing

To generate tests:

```
Press Cmd/Ctrl + K and type:
create tests for [component/feature] including unit and integration tests
```

## Next Steps

1. Clone this template
2. Follow the setup instructions
3. Use Cursor AI to help implement features
4. Customize for your needs

Need help? Press `Cmd/Ctrl + /` and ask anything!
