import { useState, useEffect } from 'react'
export const StrictEffect = () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  // https://react.dev/learn/synchronizing-with-effects#fetching-data
  useEffect(() => {
    let ignore = false
    if (!ignore) {
      console.log('count', count)
      setCount2(() => count)
    }

    return () => {
      ignore = true
    }
  }, [count])

  return (
    <div className="flex flex-col gap-2">
      <span> count : {count}</span>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <span> count2 : {count2}</span>
      <button onClick={() => setCount2(count2 + 1)}>Increment2</button>
    </div>
  )
}

export default function StrictEffectPage() {
  return (
    <div>
      <StrictEffect />
    </div>
  )
}
