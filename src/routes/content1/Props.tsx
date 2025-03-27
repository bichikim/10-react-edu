// hello Message 를 랜더링 하는 함수
const HelloComponent = (props) => {
  // 랜더링 할 내용
  // 랜더링 결과 hello
  return props.message
}

// HelloComponent 를 렌더링 하는 부모 컴포넌트
const ParentComponent = () => {
  // div 같은 방법으로 HelloComponent 를 message prop hello 와 함께 랜더링 한다고 선언 합니다
  return <HelloComponent message="hello"></HelloComponent>
}

export default function PropsPage() {
  return (
    <main>
      <ParentComponent />
    </main>
  )
}
