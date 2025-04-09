import { useRef, useState, useEffect } from 'react'
import { useUpdatedRef } from '../content3/updated-ref'

type FetchState = 'pending' | 'fulfilled' | 'error'

export const useFetch = <T, R>(loader: (payload: T, signal: AbortSignal) => Promise<R>, payload: T): R | undefined => {
  const [promise, setPromise] = useState<Promise<void>>()
  const [status, setStatus] = useState<FetchState>('pending')
  const [result, setResult] = useState<R>()
  const [error, setError] = useState<Error>()

  const loaderRef = useUpdatedRef(loader)
  const fetchedPayload = useRef<T | null | undefined>(null)

  const resolvePromise = (result: R) => {
    setStatus('fulfilled')
    setResult(result)
  }

  const rejectPromise = (error: Error) => {
    setStatus('error')
    setError(error)
  }

  useEffect(() => {
    const abortController = new AbortController()
    // dev 환경에서 Strict mode 일때 Suspense 자식으로 렌더링이 두번 일어나는 것을 방지하기 위해 조건 추가
    if (import.meta.env.DEV && Object.is(JSON.stringify(fetchedPayload.current), JSON.stringify(payload))) {
      return
    }

    setStatus('pending')
    setPromise(loaderRef.current(payload, abortController.signal).then((resolve) => resolvePromise(resolve), rejectPromise))

    return () => {
      abortController.abort()
      fetchedPayload.current = payload
    }
    // JSON.stringify 보다 더 효율적인 비교 방법이 있습니다
  }, [loaderRef, JSON.stringify(payload)])

  if (status === 'pending' && promise) {
    throw promise
  }

  if (status === 'error') {
    throw error
  }

  return result
}
