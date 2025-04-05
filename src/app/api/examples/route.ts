import { NextResponse } from "next/server";
import type { CodeExample, ApiResponse } from "@/types";

/**
 * GET /api/examples
 * Returns a list of code examples
 *
 * @example Cursor AI Prompt
 * "Help me implement an API endpoint that:
 * - Returns a list of code examples
 * - Includes proper error handling
 * - Has TypeScript types
 * - Follows REST best practices"
 */
export async function GET() {
  try {
    // Simulated database query
    const examples: CodeExample[] = [
      {
        id: "1",
        title: "React Counter",
        description: "Simple counter implementation with hooks",
        code: `function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`,
        language: "tsx",
        tags: ["react", "hooks", "beginner"],
      },
      // Add more examples...
    ];

    const response: ApiResponse<CodeExample[]> = {
      success: true,
      data: examples,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error fetching examples:", error);

    const errorResponse: ApiResponse<null> = {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };

    return NextResponse.json(errorResponse, { status: 500 });
  }
}

/**
 * POST /api/examples
 * Creates a new code example
 *
 * @example Cursor AI Prompt
 * "Help me create a new code example with:
 * - Title and description
 * - Code content
 * - Programming language
 * - Tags for categorization"
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.title || !body.code || !body.language) {
      const errorResponse: ApiResponse<null> = {
        success: false,
        error: "Missing required fields",
      };
      return NextResponse.json(errorResponse, { status: 400 });
    }

    // Create new example (simulated)
    const newExample: CodeExample = {
      id: Date.now().toString(),
      title: body.title,
      description: body.description,
      code: body.code,
      language: body.language,
      tags: body.tags || [],
    };

    const response: ApiResponse<CodeExample> = {
      success: true,
      data: newExample,
    };

    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    console.error("Error creating example:", error);

    const errorResponse: ApiResponse<null> = {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };

    return NextResponse.json(errorResponse, { status: 500 });
  }
}
