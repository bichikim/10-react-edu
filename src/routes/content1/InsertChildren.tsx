// div 내부 JS 값
const Hello = (props) => {
  return <div>{props.message}</div>
}

// div 내부 JS 값 + 일반 텍스트
const Hello1 = (props) => {
  return <div>message: {props.message}</div>
}

// div 내부 content JS 연산
const Hello2 = (props) => {
  return <div>count: {props.count * 2}</div>
}

// 속성에서 JS
const Hello3 = (props) => {
  return <div title={`count: ${props.count * 2}`}>count: {props.count * 2}</div>
}

export default function InsertChildren() {
  return (
    <main>
      <Hello message="hello" />
      <Hello1 message="hello" />
      <Hello2 count={1} />
      <Hello3 count={1} />
    </main>
  )
}
