import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

//The "...input" props denotes that this function takes any number of arguments
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}

export function toPusherKey(key: string) {
  return key.replace(/:/g, "__");
}

export function chatHrefConstructor(id1: string, id2: string) {
  const sortedIds = [id1, id2].sort();
  return `${sortedIds[0]}--${sortedIds[1]}`;
}
