// lib/utils.ts
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(p0: string, className: string | undefined, ...inputs: []) {
  return twMerge(clsx(inputs))
}
