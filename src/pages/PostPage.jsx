import { useParams, useSearchParams } from 'react-router-dom'
import PostCard from '../components/PostCard'
import usePost from '../hooks/usePost'
import Loading from '../components/Loading'
import ErrorBox from '../components/ErrorBox'

const PostPage = () => {
  const { id } = useParams()
  const { isLoading, isError, data: post, error } = usePost(id)

  if (isLoading) return <Loading />
  if (error) return <ErrorBox message={error.message} />
  if (!post) return <div>no data!!!!</div>

  return <PostCard post={post[0]} />
}

export default PostPage
