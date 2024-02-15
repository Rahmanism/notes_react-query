import { Button } from 'react-bootstrap'
import usePosts from '../hooks/usePosts'
import Loading from '../components/Loading'
import PostCard from '../components/PostCard'
import ErrorBox from '../components/ErrorBox'

const PostsPage = () => {
  const { isLoading, isError, data: posts, error } = usePosts()

  if (isLoading) return <Loading />
  if (isError) return <ErrorBox message={error.message} />
  return (
    <div>
      {posts.map(post => (
        <PostCard key={post.id} post={post} className="post-row" />
      ))}
      <hr />
      <Button as="a" href="/post/add">
        Add Post
      </Button>
    </div>
  )
}

export default PostsPage
