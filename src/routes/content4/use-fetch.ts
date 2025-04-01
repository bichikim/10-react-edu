import { useRef, useState, useEffect } from 'react'

export const useFetch = <T, R>(loader: (payload?: T) => Promise<R>, payload?: T): R | undefined => {
  const loaderRef = useRef(loader)
  const [promise, setPromise] = useState<Promise<any> | null>(null)
  const [data, setData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const promise = loaderRef.current(payload)
    setPromise(promise)
    promise
      .then((data) => {
        setData(data)
        setIsLoading(false)
      })
      .catch((error) => {
        setError(error)
        setIsLoading(false)
      })
  }, [loaderRef, payload])

  if (isLoading && promise) {
    throw promise
  }

  if (error) {
    throw error
  }

  return data
}
