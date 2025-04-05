/**
 * Common type definitions for the Cursor AI Hub project.
 * These types are used throughout the application to ensure type safety and provide better documentation.
 */

/**
 * Represents a code example in the playground
 * @typedef {Object} CodeExample
 */
export interface CodeExample {
  /** Unique identifier for the example */
  id: string;
  /** Title of the code example */
  title: string;
  /** Optional description of what the example demonstrates */
  description?: string;
  /** The actual code content */
  code: string;
  /** Programming language of the code */
  language: "typescript" | "javascript" | "jsx" | "tsx";
  /** Tags for categorizing the example */
  tags: string[];
}

/**
 * Configuration for Cursor AI prompts
 * @typedef {Object} CursorPrompt
 */
export interface CursorPrompt {
  /** Title of the prompt template */
  title: string;
  /** The actual prompt content */
  content: string;
  /** Context or description of when to use this prompt */
  context: string;
  /** Example usage of the prompt */
  example: string;
  /** Categories this prompt belongs to */
  categories: string[];
}

/**
 * Common props for components with loading states
 * @typedef {Object} WithLoadingProps
 */
export interface WithLoadingProps {
  /** Whether the component is in a loading state */
  isLoading?: boolean;
  /** Optional loading message */
  loadingMessage?: string;
}

/**
 * Common props for components with error handling
 * @typedef {Object} WithErrorProps
 */
export interface WithErrorProps {
  /** Error object if an error occurred */
  error?: Error | null;
  /** Optional custom error message */
  errorMessage?: string;
  /** Callback to retry the operation */
  onRetry?: () => void;
}

/**
 * Configuration for code editor features
 * @typedef {Object} EditorConfig
 */
export interface EditorConfig {
  /** Theme for the code editor */
  theme: "light" | "dark" | "system";
  /** Font size in pixels */
  fontSize: number;
  /** Whether to show line numbers */
  showLineNumbers: boolean;
  /** Whether to enable code formatting */
  formatOnSave: boolean;
  /** Tab size in spaces */
  tabSize: 2 | 4 | 8;
}

/**
 * Common response structure for API endpoints
 * @typedef {Object} ApiResponse
 */
export interface ApiResponse<T> {
  /** Whether the request was successful */
  success: boolean;
  /** The response data */
  data?: T;
  /** Error message if the request failed */
  error?: string;
  /** Optional metadata */
  meta?: Record<string, unknown>;
}

// Export type guards and utility types
export type LoadingState = "idle" | "loading" | "success" | "error";
export type Theme = "light" | "dark" | "system";
export type ViewMode = "split" | "preview" | "code";
