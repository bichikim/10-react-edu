import { Suspense, useState, useRef } from 'react'
import { useFetch } from './use-fetch'

async function fetchData(value: number) {
  await new Promise((resolve) => setTimeout(resolve, value))
  return { message: `데이터 로딩 완료! ${value / 1000} 초` }
}
// 비동기 데이터를 가져오는 함수

interface AsyncContentProps {
  timeout: number
}
// 비동기 컴포넌트
const AsyncContent = ({ timeout }: AsyncContentProps) => {
  const timeRef = useRef(timeout)
  const data = useFetch(fetchData, timeout)

  return (
    <div>
      {data?.message} {timeRef.current}
    </div>
  )
}

// 로딩 상태를 표시하는 컴포넌트
function Loading() {
  return (
    <div className="p-4">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      <p data-testid="loading-text" className="mt-2">
        로딩 중...
      </p>
    </div>
  )
}

export default function SuspenseExample() {
  const [timeout, setTimeout] = useState(2000)

  const handleSetTimeout = () => {
    console.log('click!')
    setTimeout(timeout + 100)
  }

  return (
    <div className="p-4">
      <p className="mb-4">{timeout / 1000}초 후에 데이터를 로드합니다.</p>

      <Suspense fallback={<Loading />}>
        <AsyncContent timeout={timeout} />
      </Suspense>
      <button onClick={handleSetTimeout}>0.1초 증가</button>
    </div>
  )
}
