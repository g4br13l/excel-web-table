import { useEffect, useState } from 'react'



export function UseDebounce<T>(value: T, delay: number = 600) {

  const [debounceVal, setDebounceVal] = useState<T>(value)

  useEffect(() => {

    const timer = setTimeout(() => {
      setDebounceVal(value)
    }, delay)

    return () => clearTimeout(timer)

  }, [delay, value])

  return debounceVal
}
