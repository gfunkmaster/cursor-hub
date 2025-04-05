import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge class names with Tailwind CSS classes
 * @param inputs - Class names to merge
 * @returns Merged class names string
 *
 * @example
 * ```tsx
 * // Basic usage
 * <div className={cn('base-class', condition && 'conditional-class')} />
 *
 * // With dynamic classes
 * <div className={cn('base-class', {
 *   'active-class': isActive,
 *   'disabled-class': isDisabled
 * })} />
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
