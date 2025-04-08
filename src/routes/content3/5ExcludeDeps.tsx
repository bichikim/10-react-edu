import { useEffect, useRef, useState } from 'react'

interface ExampleProps {
  name: string
  age: number
}

const Example = ({ name, age }: ExampleProps) => {
  const argRef = useRef(age)
  argRef.current = age
  useEffect(() => {
    const age = argRef.current
    // 최신 age 값을 사용 하지만 age 가 바뀔때 effect 는 실행하고 싶지 않는 경우
    console.log(name, age)
    // dep 에 argRef 대신 arg 를 안써도 되지만 그건 deps lint 에 걸리며 올바르지 않습니다
  }, [name, argRef])

  return (
    <div>
      {age} {name}
    </div>
  )
}

export default function ExcludeDeps() {
  const [age, setAge] = useState(20)
  const [name, setName] = useState('John')
  return (
    <div>
      <Example name={name} age={age} />
      <button onClick={() => setAge(age + 1)}>Increase Age</button>
      <button onClick={() => setName((prev) => prev + 'a')}>Change Name</button>
    </div>
  )
}
