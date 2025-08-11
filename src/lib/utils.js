import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Merges a list of tailwind inputs so there is no huge overflow
export const cn = (...inputs) => {
    return twMerge(clsx(inputs))
}