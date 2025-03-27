interface HelloComponentProps {
  // required 는 반드시 prop 을 전달해야 한다
  message: string
  // optional 은 prop 을 꼭 전달하지 않아도 된다
  title?: string
}

const HelloComponent = (props: HelloComponentProps) => {
  return props.message
}

const ParentComponent1 = () => {
  // message prop 은 required 이므로 전달하지 않으면 타입 오류 발생
  return <>{/*<HelloComponent /> */}</>
}

const ParentComponent2 = () => {
  // message prop 은 required 이므로 전달하지 않으면 타입 오류 발생
  // title prop 은 optional 이므로 전달하지 않아도 타입 오류 발생하지 않음
  return <HelloComponent message="hi" />
}

export default function PropsOptional() {
  return (
    <main>
      <ParentComponent1 />
      <ParentComponent2 />
    </main>
  )
}
