import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merges Tailwind classes and resolves conflicts safely. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
