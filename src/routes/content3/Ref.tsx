import { useEffect, useRef } from 'react'

const RefComponent = () => {
  const ref = useRef(null)

  // 랜더링 후 동작
  useEffect(() => {
    // div element
    console.log(ref.current)
  }, [])

  return <div ref={ref}>hello</div>
}

export default function Ref() {
  return (
    <div>
      <RefComponent />
    </div>
  )
}
