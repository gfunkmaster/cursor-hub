# Cursor AI Security Best Practices

## Secure Development with AI

### Code Generation Security

```typescript
// Ask Cursor AI to generate secure code
// Prompt: "Create a secure authentication middleware with rate limiting"

import rateLimit from "express-rate-limit";
import { verifyToken } from "./auth";

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many authentication attempts, please try again later",
});

const secureAuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

// Apply rate limiting to auth routes
app.use("/api/auth", authLimiter);
```

### Secure Input Validation

```typescript
// Ask Cursor AI to generate input validation
// Prompt: "Create a secure input validation schema for user registration"

import { z } from "zod";

const UserRegistrationSchema = z.object({
  email: z
    .string()
    .email("Invalid email format")
    .min(5, "Email too short")
    .max(100, "Email too long"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(100, "Password too long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain uppercase, lowercase, number and special character"
    ),
  name: z
    .string()
    .min(2, "Name too short")
    .max(50, "Name too long")
    .regex(/^[a-zA-Z\s]*$/, "Name can only contain letters and spaces"),
});

// Use with Cursor AI validation
const validateUserInput = (data: unknown) => {
  try {
    return UserRegistrationSchema.parse(data);
  } catch (error) {
    throw new Error("Invalid user data");
  }
};
```

## AI-Assisted Security Practices

### 1. Code Review Security

Ask Cursor AI to review code for security issues:

```typescript
// Prompt: "Review this code for security vulnerabilities"

// Before - Insecure code
const executeQuery = (query: string) => {
  return db.raw(query);
};

// After - Secure code with parameterization
const executeQuery = (query: string, params: any[]) => {
  return db.raw(query, params);
};
```

### 2. Security Pattern Generation

Use Cursor AI to generate secure patterns:

```typescript
// Prompt: "Generate a secure file upload handler"

const secureFileUpload = multer({
  storage: multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, file.fieldname + "-" + uniqueSuffix);
    },
  }),
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png"];
    if (!allowedTypes.includes(file.mimetype)) {
      cb(new Error("Invalid file type"));
      return;
    }
    cb(null, true);
  },
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
});
```

## Security Checklist for AI Development

### Implementation

- [ ] Use AI to generate secure code patterns
- [ ] Validate AI-generated code for security issues
- [ ] Implement proper error handling
- [ ] Use secure dependencies
- [ ] Follow security best practices
- [ ] Test security measures
- [ ] Document security features

### Code Generation

- [ ] Review AI-generated code
- [ ] Check for security vulnerabilities
- [ ] Validate input/output
- [ ] Implement proper authentication
- [ ] Use secure communication
- [ ] Handle sensitive data properly
- [ ] Test edge cases

## Best Practices with Cursor AI

### 1. Secure Code Generation

- Use specific security-focused prompts
- Review generated code thoroughly
- Test security implementations
- Document security measures

### 2. Security Review

- Ask AI to review code for vulnerabilities
- Implement suggested security fixes
- Test security improvements
- Monitor for new security issues

### 3. Dependency Management

```typescript
// Ask Cursor AI to check dependencies
// Prompt: "Review and secure package.json dependencies"

{
  "scripts": {
    "audit": "npm audit",
    "audit:fix": "npm audit fix",
    "preinstall": "npm audit"
  },
  "dependencies": {
    // Only use secure, up-to-date packages
  }
}
```

## Common Security Patterns

### 1. Authentication

```typescript
// Ask Cursor AI: "Generate secure JWT authentication"
import * as jwt from "jsonwebtoken";

const generateSecureToken = (userId: string): string => {
  return jwt.sign({ userId }, process.env.JWT_SECRET!, {
    expiresIn: "1h",
    algorithm: "HS256",
  });
};
```

### 2. Data Validation

```typescript
// Ask Cursor AI: "Create secure data validation"
const validateData = <T>(schema: z.ZodSchema<T>, data: unknown): T => {
  try {
    return schema.parse(data);
  } catch (error) {
    throw new Error("Validation failed");
  }
};
```

### 3. Error Handling

```typescript
// Ask Cursor AI: "Generate secure error handling"
const handleError = (error: unknown) => {
  if (error instanceof Error) {
    // Log error safely
    logger.error({
      message: error.message,
      stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
    });
  }
  // Return safe error message
  return {
    error: "An error occurred",
    code: "INTERNAL_ERROR",
  };
};
```

## Security Resources

- [Cursor AI Security Documentation](https://cursor.sh/docs/security)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/security/)
- [TypeScript Security Guidelines](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)
