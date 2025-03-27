interface Component1Props {
  // children prop 가 required
  children: string
}

const Component1 = (props: Component1Props) => {
  return props.children
}

interface Component2Props {
  // children prop 가 optional
  children?: string
}

const Component2 = (props: Component2Props) => {
  // children prop 가 optional 이므로 undefined 이면 빈랭더링 이라고 알려주는 null 반환
  return props.children ?? null
}

const Parent = () => {
  return (
    <div>
      {/* children prop 가 required 이지만 문자열을 전달하면 타입 오류 발생하지 않음 */}
      <Component1>Component1</Component1>
      {/* children prop 가 required 이므로 타입 오류 발생 */}
      {/* <Component1></Component1> */}
      {/* optional 이므로 전달하지 않아도 타입 오류 발생하지 않음 */}
      <Component2 />
    </div>
  )
}

export default function PropsChildren() {
  return (
    <main>
      <Parent />
    </main>
  )
}
