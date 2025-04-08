import { useState } from 'react'

export const Component1 = () => {
  const [age, setAge] = useState(0)
  const content = `foo ${age}`

  const handleIncreaseAge = () => {
    setAge(age + 1)
    // 2 ?
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

export const Component3 = () => {
  const [count, setCount] = useState(0)
  const [flag, setFlag] = useState(false)

  // React 18 이전
  //   const handleClick1 = () => {
  //     setCount((c) => c + 1) // 리렌더링 발생
  //     setFlag((f) => !f) // 리렌더링 발생
  //   }

  // React 18
  const handleClick2 = () => {
    setCount((c) => c + 1) // 배치 처리됨
    setFlag((f) => !f) // 배치 처리됨
    // 두 업데이트가 하나의 리렌더링으로 처리됨
  }

  return (
    <div>
      <button onClick={handleClick2}>Update</button>
      <div>Count: {count}</div>
      <div>Flag: {String(flag)}</div>
    </div>
  )
}

export default function UpdateStatePage() {
  return (
    <div>
      <Component1 />
    </div>
  )
}
