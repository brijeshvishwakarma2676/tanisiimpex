import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind CSS classes with clsx for conditional class composition.
 * Handles conflicts like 'p-4 p-6' → 'p-6'
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
