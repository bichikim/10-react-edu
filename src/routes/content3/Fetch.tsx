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
