import { useEffect, useState } from 'react'

export interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

const FetchComponent = () => {
  const [data, setData] = useState<Todo | null>(null)

  useEffect(() => {
    // useEffect 는 외부 리소스 비동기 처리 시 사용하기 좋은 위치
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => setData(() => json))
  }, [])

  return <div>{data?.title}</div>
}

export default function Fetch() {
  return (
    <div>
      <FetchComponent />
    </div>
  )
}
