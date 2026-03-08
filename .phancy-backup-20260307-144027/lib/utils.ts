import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format, parseISO } from "date-fns";

// Utility for merging Tailwind classes
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// Format YYYY-MM-DD date string for display
export function formatDate(dateStr: string): string {
    try {
        return format(parseISO(dateStr), "MMMM d, yyyy");
    } catch {
        return dateStr;
    }
}

// Convert a string to a URL-friendly slug
export function slugify(str: string): string {
    return str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
}

// Truncate a string to a given character count
export function truncate(str: string, length: number): string {
    if (str.length <= length) return str;
    return str.slice(0, length).trim() + "…";
}
