import { useRef } from 'react'

export const useUpdatedRef = <T>(value: T) => {
  const ref = useRef(value)
  ref.current = value
  return ref
}
