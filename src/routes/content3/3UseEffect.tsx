import { useEffect, useState } from 'react'

const UseEffectComponent = () => {
  const [state, setState] = useState(0)

  useEffect(() => {
    console.log('useEffect once')
    // 최초 랜더링 시 실행
  }, [])

  useEffect(() => {
    console.log('useEffect always')
    // 랜더링 될 때마다 실행
  })

  useEffect(
    () => {
      console.log('useEffect when state changed')
    },
    // deps state 변경 시 실행
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
