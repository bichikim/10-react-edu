const Component = () => {
  const posts = [
    { id: 1, title: '첫 번째 게시글', content: '게시글 내용입니다.' },
    { id: 2, title: '두 번째 게시글', content: '게시글 내용입니다.' },
  ]

  return (
    <ol>
      {
        // js list map
        posts.map((item) => (
          // return
          <li title={`post-${item.id}`} key={item.id}>
            <span>{item.title}</span>
            <span>{item.content}</span>
          </li>
        ))
      }
    </ol>
  )
}

export default function LoopJSX() {
  return (
    <main>
      <Component />
    </main>
  )
}
