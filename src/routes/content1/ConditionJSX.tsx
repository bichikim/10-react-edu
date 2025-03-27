interface HelloProps {
  isButton: boolean
}

// 엘리먼트 내부가 아니라면 중괄호를 쓸 이유가 없습니다
const Hello = (props: HelloProps) => {
  return props.isButton ? <button>hello</button> : <div>hello</div>
}

export default function ConditionJSX() {
  return (
    <main>
      <Hello isButton={true} />
      <Hello isButton={false} />
    </main>
  )
}
