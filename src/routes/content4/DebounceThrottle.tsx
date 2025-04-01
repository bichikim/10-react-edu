import { useState, useRef } from 'react'

function useDebounce<T>(callback: (value: T) => void, delay: number): (value: T) => void {
  const timerRef = useRef<number | null>(null)

  return (value: T) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    timerRef.current = setTimeout(() => {
      callback(value)
    }, delay)
  }
}

function useThrottle<T extends (...args: any[]) => any>(callback: T, delay: number): T {
  const lastRun = useRef<number>(0)

  return ((...args: Parameters<T>) => {
    const now = Date.now()
    if (now - lastRun.current >= delay) {
      callback(...args)
      lastRun.current = now
    }
  }) as T
}

export function DebounceThrottleExample() {
  const [input, setInput] = useState('')
  const [count, setCount] = useState(0)

  const debouncedValue = useDebounce((value: string) => {
    setInput(value)
  }, 500)

  const throttledIncrement = useThrottle(() => {
    setCount((prev) => prev + 1)
  }, 1000)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedValue(e.target.value)
  }

  return (
    <div className="p-4">
      <input type="text" value={input} onChange={handleInputChange} className="border p-2 rounded" placeholder="입력해보세요..." />
      <p data-testid="debounced-value" className="mt-2">
        input
      </p>

      <button onClick={throttledIncrement} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
        Increment (Throttled)
      </button>
      <p data-testid="count" className="mt-2">
        {count}
      </p>
    </div>
  )
}
