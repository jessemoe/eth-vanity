import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { memoize } from "lodash";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getRootUrl = memoize(
  () => {
    return "https://ethvanity.vercel.app"
  }
) 