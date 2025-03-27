// 삼항 연산자 사용
const Component = (props) => {
  return <div>{props.isLoggedIn ? <h1>환영합니다!</h1> : <h1>로그인해주세요</h1>}</div>
}

// 논리 연산자 (&&) 사용
const Component1 = (props) => {
  return <div>{props.isLoggedIn && <h1>환영합니다!</h1>}</div>
}

const Loading = () => {
  return <div>Loading...</div>
}

const Error = () => {
  return <div>Error...</div>
}

const Content = () => {
  return <div>Content...</div>
}

// 즉시 실행 함수(IIFE) 사용
// 하지만 관례로 가독성을 위해 IIFE 사용은 지양 합니다
const Component2 = (props) => {
  return (
    <div>
      {(() => {
        if (props.status === 'loading') {
          return <Loading />
        } else if (props.status === 'error') {
          return <Error />
        } else {
          return <Content />
        }
      })()}
    </div>
  )
}

export default function InsertJs() {
  return (
    <main>
      <Component isLoggedIn={true} />
      <Component1 isLoggedIn={true} />
      <Component2 status="loading" />
    </main>
  )
}
