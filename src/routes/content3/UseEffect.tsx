import { useEffect, useState } from 'react'

const UseEffectComponent = () => {
  const [state, setState] = useState(0)

  useEffect(() => {
    console.log('useEffect once')
  }, [])

  useEffect(() => {
    console.log('useEffect always')
  })

  useEffect(
    () => {
      console.log('useEffect when state changed')
    },
    // deps
    [state],
  )

  const handleClick = () => {
    setState(state + 1)
  }

  return (
    <div>
      <button onClick={handleClick}>더하기</button>
    </div>
  )
}

export default function UseEffect() {
  return (
    <div>
      <UseEffectComponent />
    </div>
  )
}
