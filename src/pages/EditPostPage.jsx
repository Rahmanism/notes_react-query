import { useParams } from 'react-router-dom'
import PostForm from '../components/PostForm'
import usePost from '../hooks/usePost'
import Loading from '../components/Loading'
import ErrorBox from '../components/ErrorBox'

const EditPostPage = () => {
  const { id } = useParams()
  console.log('🚙 id in edit:', id)
  const { isLoading, isError, data: post, error } = usePost(id)

  if (isLoading) return <Loading />
  if (error) return <ErrorBox message={error.message} />
  if (!post) return <div>no data!!!!</div>

  return (
    <div>
      <h2>Edit Post</h2>
      <PostForm postToEdit={post[0]} />
    </div>
  )
}

export default EditPostPage
