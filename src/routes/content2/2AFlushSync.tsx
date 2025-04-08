import { useState } from 'react'
import { flushSync } from 'react-dom'

export const Example = () => {
  const [count, setCount] = useState(0)
  const [flag, setFlag] = useState(false)

  const handleClick = () => {
    flushSync(() => {
      setCount((c) => c + 1) // 즉시 리렌더링
    })

    flushSync(() => {
      setFlag((f) => !f) // 즉시 리렌더링
    })
  }

  return (
    <div>
      <button onClick={handleClick}>Update</button>
      <div>Count: {count}</div>
      <div>Flag: {String(flag)}</div>
    </div>
  )
}

export default function FlushSyncPage() {
  return <Example />
}
