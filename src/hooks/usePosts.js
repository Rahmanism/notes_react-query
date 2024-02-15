import { useQuery } from '@tanstack/react-query'
import { fetchPosts } from '../api/posts'

const usePosts = () => {
  const fetchPostsQuery = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  })
  return fetchPostsQuery
}

export default usePosts
