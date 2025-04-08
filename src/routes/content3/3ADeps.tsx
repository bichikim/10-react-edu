import { useEffect, useState, useCallback, useMemo } from 'react'

const DepsComponent = () => {
  const [state, setState] = useState(0)

  useEffect(() => {
    console.log('useEffect when state changed')
  }, [state])

  const handleClick = useCallback(() => {
    setState(state + 1)

    // state 변경 시 새로운 함수 반환
  }, [state])

  const stateWithDeco = useMemo(() => {
    return `${state}!!!`
    // deps 변경 시 새로운 값 반환
  }, [state])

  return (
    <div>
      <span>{stateWithDeco}</span>
      <button onClick={handleClick}>더하기</button>
    </div>
  )
}

export default function Deps() {
  return (
    <div>
      <DepsComponent />
    </div>
  )
}
