import { useQuery } from '@tanstack/react-query'
import { fetchPost } from '../api/posts'

const usePost = id => {
  console.log('🤷🏻‍♂️ id in usePost', id)
  const fetchPostQuery = useQuery({
    queryKey: ['posts', id],
    queryFn: () => fetchPost(id),
  })
  return fetchPostQuery
}

export default usePost
