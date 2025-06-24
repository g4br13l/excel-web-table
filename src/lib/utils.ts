import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'



export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<T extends (...args: any) => any>(
  fn: T,
  delay: number = 1_000
) {

  let timer: Parameters<typeof clearTimeout>[0]

  return (...args: Parameters<T>) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}

