import { useState, useEffect, Suspense } from 'react'

function useFetch<I, T>(fetch: (arg: I) => Promise<T>, arg: I) {
  function resolvePromise(result: T) {
    // promsie fulfilled
    _setStatus('fulfilled')
    _setResult(result)
  }
  function rejectPromise(error: Error) {
    // promsie rejected
    _setStatus('error')
    _setError(error)
  }
  const [_promise, _setPromise] = useState<Promise<void>>()
  const [_status, _setStatus] = useState<'pending' | 'fulfilled' | 'error'>('pending')
  const [_result, _setResult] = useState<T>()
  const [_error, _setError] = useState<Error>()

  useEffect(() => {
    console.log('arg', arg)
    _setStatus('pending')
    _setPromise(fetch(arg).then(resolvePromise, rejectPromise))
  }, [arg])

  console.log('status', _status)

  if (_status === 'pending' && _promise) {
    throw _promise // * suspense fallback *
  }
  if (_status === 'error') {
    throw _error // error
  }
  return _result // rendering result
}

async function fetchData(value: number) {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return { message: `데이터 로딩 완료! ${value}` }
}

function Test() {
  const [count, setCount] = useState(0)
  const data = useFetch(fetchData, count)
  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>증가</button>
      <div>{data?.message}</div>
    </div>
  )
}

export default function Test2() {
  return (
    <div>
      <Suspense fallback={<div>로딩중...</div>}>
        <Test />
      </Suspense>
    </div>
  )
}
