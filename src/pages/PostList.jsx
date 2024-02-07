import { Button } from 'react-bootstrap'
import usePosts from '../hooks/usePosts'
import Loading from '../components/Loading'
import PostCard from '../components/PostCard'

const PostList = () => {
  const { isLoading, isError, data: posts, error } = usePosts()

  if (isLoading) return <Loading />
  if (isError)
    return <div className="error">Something happend. {error.message}</div>
  return (
    <div>
      <h2>Post List</h2>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
      <hr />
      <Button as="a" href="/post/add">
        Add Post
      </Button>
    </div>
  )
}

export default PostList
