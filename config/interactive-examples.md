# Interactive Examples for Cursor AI

## Code Generation Examples

### 1. React Component Generation
```typescript
// Input Prompt:
"Create a React component for a responsive navigation bar with:
- Logo
- Navigation links
- Mobile menu
- Dark mode toggle
- Search bar
Use Tailwind CSS for styling."

// Example Component:
import React, { useState } from 'react';
import { MoonIcon, SunIcon, MenuIcon, SearchIcon } from '@heroicons/react/outline';

interface NavbarProps {
  logo: string;
  links: { text: string; href: string }[];
}

export function Navbar({ logo, links }: NavbarProps) {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="bg-white dark:bg-gray-800">
      {/* Component implementation */}
    </nav>
  );
}
```

### 2. API Integration
```typescript
// Input Prompt:
"Create a custom hook for fetching and caching data from an API with:
- Loading state
- Error handling
- Data caching
- Automatic retry
- TypeScript types"

// Example Hook:
import { useState, useEffect } from 'react';

interface UseFetchOptions<T> {
  url: string;
  initialData?: T;
  retryCount?: number;
}

export function useFetch<T>({ url, initialData, retryCount = 3 }: UseFetchOptions<T>) {
  // Hook implementation
}
```

## Refactoring Examples

### 1. Performance Optimization
```typescript
// Before:
function ExpensiveComponent({ data }) {
  const processedData = data.map(item => heavyProcessing(item));
  return <div>{processedData.map(renderItem)}</div>;
}

// Input Prompt:
"Optimize this component for performance using:
- Memoization
- Virtual rendering
- Lazy loading
- Code splitting"

// After:
import { useMemo } from 'react';
import { VirtualList } from './VirtualList';

function ExpensiveComponent({ data }) {
  const processedData = useMemo(
    () => data.map(item => heavyProcessing(item)),
    [data]
  );
  
  return <VirtualList items={processedData} renderItem={renderItem} />;
}
```

### 2. Code Modernization
```typescript
// Before:
class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: null };
  }
  
  componentDidMount() {
    fetchUser(this.props.id).then(user => this.setState({ user }));
  }
  
  render() {
    return this.state.user ? <div>{this.state.user.name}</div> : null;
  }
}

// Input Prompt:
"Convert this class component to a functional component using:
- Hooks
- TypeScript
- Error boundaries
- Loading states"

// After:
interface User {
  id: string;
  name: string;
}

function UserProfile({ id }: { id: string }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    fetchUser(id)
      .then(setUser)
      .finally(() => setIsLoading(false));
  }, [id]);
  
  if (isLoading) return <LoadingSpinner />;
  if (!user) return <ErrorMessage />;
  
  return <div>{user.name}</div>;
}
```

## Testing Examples

### 1. Unit Testing
```typescript
// Component to Test:
function Counter({ initialCount = 0 }) {
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      <span>Count: {count}</span>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  );
}

// Input Prompt:
"Generate comprehensive tests for this Counter component using:
- React Testing Library
- Jest
- User event simulation
- Accessibility checks"

// Example Tests:
import { render, screen, fireEvent } from '@testing-library/react';

describe('Counter', () => {
  it('renders with initial count', () => {
    render(<Counter initialCount={5} />);
    expect(screen.getByText('Count: 5')).toBeInTheDocument();
  });
  
  it('increments count when clicked', () => {
    render(<Counter />);
    fireEvent.click(screen.getByText('Increment'));
    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });
});
```

### 2. Integration Testing
```typescript
// Feature to Test:
function TodoList() {
  const [todos, setTodos] = useState([]);
  const addTodo = (text) => setTodos([...todos, { text, done: false }]);
  
  return (
    <div>
      <AddTodoForm onAdd={addTodo} />
      <TodoItems items={todos} />
    </div>
  );
}

// Input Prompt:
"Create integration tests for this TodoList component testing:
- Form submission
- List updates
- Item completion
- Error states"

// Example Tests:
describe('TodoList Integration', () => {
  it('adds and completes todos', async () => {
    render(<TodoList />);
    
    // Add todo
    const input = screen.getByPlaceholderText('Add todo');
    fireEvent.change(input, { target: { value: 'New todo' } });
    fireEvent.click(screen.getByText('Add'));
    
    // Verify todo was added
    expect(screen.getByText('New todo')).toBeInTheDocument();
    
    // Complete todo
    fireEvent.click(screen.getByRole('checkbox'));
    expect(screen.getByText('New todo')).toHaveClass('completed');
  });
});
```

## Error Handling Examples

### 1. Form Validation
```typescript
// Input Prompt:
"Create a form validation system using:
- Zod schema validation
- Error messages
- Field highlighting
- Real-time validation"

// Example Implementation:
import { z } from 'zod';

const userSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword']
});

function SignupForm() {
  // Form implementation with validation
}
```

### 2. API Error Handling
```typescript
// Input Prompt:
"Implement comprehensive API error handling with:
- Error types
- Retry logic
- User feedback
- Error logging"

// Example Implementation:
class APIError extends Error {
  constructor(
    message: string,
    public status: number,
    public code: string
  ) {
    super(message);
  }
}

async function fetchWithRetry<T>(
  url: string,
  options: RequestInit = {},
  retries = 3
): Promise<T> {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new APIError(
        response.statusText,
        response.status,
        await response.text()
      );
    }
    return response.json();
  } catch (error) {
    if (retries > 0) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return fetchWithRetry(url, options, retries - 1);
    }
    throw error;
  }
}
```

## Remember
- Copy and adapt these examples
- Customize for your needs
- Test thoroughly
- Handle edge cases
- Document changes 