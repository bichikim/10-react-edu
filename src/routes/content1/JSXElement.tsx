// 엘리먼트 랜더링 하기
const HelloDivComponent = () => {
  // 실제 랜더링 결과 <div>hello</div>
  return <div>hello</div>
}

// 엘리먼트 content 를 props 에서 가져와서 랜더링 하기
interface HelloDivChildrenComponentProps {
  message: string
}

const HelloDivChildrenComponent = (props: HelloDivChildrenComponentProps) => {
  return <div>{props.message}</div>
}

// 엘리먼트 속성 랜더링 하기
const HelloDivAttrComponent = () => {
  return <div title="message">hello</div>
}

// 엘리먼트 속성을 props 에서 가져와 랜더링 하기

interface HelloDivAttrComponentProps {
  title: string
  message: string
}

const HelloDivAttrPropsComponent = (props: HelloDivAttrComponentProps) => {
  return <div title={props.title}>{props.message}</div>
}

export default function JSXElement() {
  return (
    <main>
      <HelloDivComponent />
      <HelloDivChildrenComponent message="hello" />
      <HelloDivAttrComponent />
      <HelloDivAttrPropsComponent title="message" message="hello" />
    </main>
  )
}
