import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

//The "...input" props denotes that this function takes any number of arguments
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}
