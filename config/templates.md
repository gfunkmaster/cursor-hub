# Common Use Case Templates

## Component Templates

### Basic Component

Create a simple React component with TypeScript:

```typescript
interface Props {
  title: string;
  onAction: () => void;
  isLoading?: boolean;
}

export const MyComponent: FC<Props> = ({
  title,
  onAction,
  isLoading = false,
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <button onClick={onAction} disabled={isLoading}>
        {isLoading ? "Loading..." : "Click me"}
      </button>
    </div>
  );
};
```

### Form Component

Generate a form component with validation:

```typescript
interface FormData {
  email: string;
  password: string;
}

export const LoginForm: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Form submission logic
    } catch (error) {
      setErrors({
        /* ... */
      });
    } finally {
      setLoading(false);
    }
  };

  return <form onSubmit={handleSubmit}>{/* Form fields */}</form>;
};
```

## Hook Templates

### Custom Hook

Create a custom React hook:

```typescript
interface Options {
  initialValue: number;
  max?: number;
}

export const useCounter = (options: Options) => {
  const [count, setCount] = useState(options.initialValue);
  const [error, setError] = useState<string | null>(null);

  const increment = () => {
    if (options.max && count >= options.max) {
      setError("Maximum value reached");
      return;
    }
    setCount((prev) => prev + 1);
    setError(null);
  };

  return { count, increment, error };
};
```

## API Templates

### API Route

Create a Next.js API route:

```typescript
import { NextApiRequest, NextApiResponse } from "next";

interface Data {
  id: string;
  name: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | { error: string }>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Validate input
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }

    // Process request
    const data = await processData(name);

    // Return response
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
}
```

## Utility Templates

### Utility Function

Create a utility function:

```typescript
/**
 * Formats a number as currency
 * @param value - The number to format
 * @param currency - The currency code (default: USD)
 * @returns Formatted currency string
 * @throws {Error} If value is not a number
 */
export const formatCurrency = (
  value: number,
  currency: string = "USD"
): string => {
  if (typeof value !== "number") {
    throw new Error("Value must be a number");
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(value);
};
```

## Usage Instructions

### How to Use Templates

1. Select the appropriate template category
2. Copy the template code
3. Replace placeholder values
4. Customize for your needs
5. Add necessary imports
6. Test the implementation

### Template Customization

- Add TypeScript types
- Include error handling
- Add loading states
- Implement proper validation
- Add documentation
- Include tests

### Best Practices

- Keep templates simple
- Follow naming conventions
- Use consistent patterns
- Document assumptions
- Include error cases
- Test thoroughly
