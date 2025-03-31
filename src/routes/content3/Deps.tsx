import { useEffect, useState, useCallback, useMemo } from 'react'

const DepsComponent = () => {
  const [state, setState] = useState(0)

  useEffect(() => {
    console.log('useEffect when state changed')
  }, [state])

  const handleClick = useCallback(() => {
    setState(state + 1)
  }, [state])

  const stateWithDeco = useMemo(() => {
    return `${state}!!!`
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
