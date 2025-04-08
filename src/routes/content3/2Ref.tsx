import { useEffect, useRef, RefObject, useState } from 'react'

const RefComponent = () => {
  // element 초기 값은 null 로 설정
  const ref = useRef(null)

  // 랜더링 후 동작
  useEffect(() => {
    // div element
    console.log(ref.current)
  }, [])

  return <div ref={ref}>hello</div>
}

interface RefComponent2Props {
  ref: RefObject<HTMLDivElement | null>
}

const RefComponent2 = (props: RefComponent2Props) => {
  return <div ref={props.ref}>hello</div>
}

const ParentRefComponent2 = () => {
  const ref = useRef(null)

  useEffect(() => {
    console.log(ref.current)
  }, [])

  return <RefComponent2 ref={ref} />
}

interface RefComponent3Props {
  value: number
}

const RefComponent3 = (props: RefComponent3Props) => {
  // 최초값 유지목적
  // ref.current 변경은 재랜더링과 상관 없다
  const ref = useRef(props.value)

  return (
    <div>
      {ref.current}, {props.value}
    </div>
  )
}

export default function Ref() {
  const [value, setValue] = useState(10)

  return (
    <div>
      <RefComponent />
      <ParentRefComponent2 />
      <RefComponent3 value={value} />
      <button onClick={() => setValue(value + 1)}>증가</button>
    </div>
  )
}
