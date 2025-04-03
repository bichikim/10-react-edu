interface PostProps {
  title: string
  content: string
  isLike: boolean
}

export const Post = (props: PostProps) => {
  const { title, content, isLike } = props
  return (
    <button
      className="flex flex-row gap-2"
      onClick={() => {
        console.log('clicked')
      }}
    >
      <span>{title}</span>
      <span>{content}</span>
      {isLike && <span>좋아요</span>}
    </button>
  )
}

export default function PropsPage() {
  const posts = [
    { id: 1, title: '첫 번째 게시글', content: '게시글 내용입니다.', isLike: false },
    { id: 2, title: '두 번째 게시글', content: '게시글 내용입니다.', isLike: true },
    { id: 3, title: '세 번째 게시글', content: '게시글 내용입니다.', isLike: false },
  ]
  return (
    <main className="flex flex-col gap-4">
      {posts.map((post) => {
        return <Post key={post.id} {...post} />
      })}
    </main>
  )
}
