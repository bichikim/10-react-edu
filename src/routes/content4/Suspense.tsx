import { Suspense } from 'react'
import { useFetch } from './use-fetch'

async function fetchData() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return { message: '데이터 로딩 완료!' }
}
// 비동기 데이터를 가져오는 함수

// 비동기 컴포넌트
const AsyncContent = () => {
  const data = useFetch(fetchData)
  return <div>{data?.message}</div>
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

export function SuspenseExample() {
  return (
    <div className="p-4">
      <p className="mb-4">2초 후에 데이터를 로드합니다.</p>

      <Suspense fallback={<Loading />}>
        <AsyncContent />
      </Suspense>
    </div>
  )
}
