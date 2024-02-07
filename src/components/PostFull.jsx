function PostFull({ post }) {
  return (
    <div>
      <h3>{post.title}</h3>
      <article>{post.body}</article>
    </div>
  )
}

export default PostFull
