import { useState } from 'react'

export const Component1 = () => {
  const [age, setAge] = useState(0)
  const content = `foo ${age}`

  const handleIncreaseAge = () => {
    setAge(age + 1)
  }

  console.log('updated')

  return (
    <div>
      <span>{age}</span>
      <span>{content}</span>
      <button onClick={handleIncreaseAge}>increase age</button>
    </div>
  )
}

export const Component2 = () => {
  const [age, setAge] = useState(0)
  const content = `foo ${age}`

  const handleIncreaseAge = () => {
    setAge((prev) => prev + 1)
  }

  console.log('updated')

  return (
    <div>
      <span>{age}</span>
      <span>{content}</span>
      <button onClick={handleIncreaseAge}>increase age</button>
    </div>
  )
}

export default function RenderingPage() {
  return (
    <div>
      <Component1 />
      <Component2 />
    </div>
  )
}
