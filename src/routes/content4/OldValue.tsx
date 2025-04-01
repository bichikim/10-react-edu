import { useState } from 'react'
import { useOldValue } from './use-old-value'

export default function OldValue() {
  const [count, setCount] = useState(0)

  const oldCount = useOldValue(count)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <p>Count: {count}</p>
      <p>Old Count: {oldCount}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}
