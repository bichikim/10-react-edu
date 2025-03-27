// 아무 것도 랜더링 하지 않는 함수
const MyComponent = () => {
  // 랜더링 할 내용
  return null
}

// string 을 랜더링 하는 함수
const HelloComponent = () => {
  // 랜더링 할 내용
  return 'hello'
}

// div 를 랜더링 하는 함수
const HelloDivComponent = () => {
  // 랜더링 할 내용 JSX
  return <div>hello</div>
}

export default function CreateComponent() {
  return (
    <main>
      <MyComponent />
      <HelloComponent />
      <HelloDivComponent />
    </main>
  )
}
