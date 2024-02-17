import { useNavigate, useParams } from 'react-router-dom'
import PostCard from '../components/PostCard'
import usePost from '../hooks/usePost'
import Loading from '../components/Loading'
import ErrorBox from '../components/ErrorBox'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deletePost } from '../api/posts'
import { toast } from 'react-toastify'

const PostPage = () => {
  const { id } = useParams()
  const { isLoading, isError, data: post, error } = usePost(id)
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: () => deletePost(id),
    onSuccess: () => {
      toast('Deleted!')
      queryClient.invalidateQueries({ queryKey: ['posts'] })
      navigate('/')
    },
  })

  if (isLoading) return <Loading />
  if (error) return <ErrorBox message={error.message} />
  if (!post) return <div>no data!!!!</div>

  return (
    <PostCard
      post={post[0]}
      deletePost={id => {
        if (confirm('Are you sure you want to delete this post?')) {
          mutation.mutate(id)
        }
      }}
    />
  )
}

export default PostPage
