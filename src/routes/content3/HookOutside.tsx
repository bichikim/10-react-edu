import { useState } from 'react'

// outside hook does not work
// eslint-disable-next-line react-hooks/rules-of-hooks
const [state, setState] = useState(0)

export default function HookOutside() {
  return (
    <div>
      HookOutside {state}
      <button onClick={() => setState(state + 1)}>+</button>
    </div>
  )
}
