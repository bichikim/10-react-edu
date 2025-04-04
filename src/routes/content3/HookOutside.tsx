import { useState } from 'react'

// outside hook does not work and throw error
// eslint-disable-next-line react-hooks/rules-of-hooks
// const [state, setState] = useState(0)

export default function HookOutside() {
  const [state, setState] = useState(0)
  return (
    <div>
      HookOutside {state}
      <button onClick={() => setState(state + 1)}>+</button>
    </div>
  )
}
