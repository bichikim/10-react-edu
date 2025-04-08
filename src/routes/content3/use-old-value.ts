import { useRef, useEffect, RefObject } from 'react'

export const useOldValue = <T>(value: T): RefObject<T> => {
  const ref = useRef(value)

  useEffect(() => {
    // 랜더링이 끝나고 value 저장
    ref.current = value
  }, [value])

  return ref
}
