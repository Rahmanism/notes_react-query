import { useSearchParams } from 'react-router-dom'
import PostCard from '../components/PostCard'

const Post = ({ id }) => {
  const searchParams = useSearchParams()
  if (!id) {
    console.log(searchParams[0])
    id = searchParams['id']
  }

  if (!id) return
  return <PostCard post={{ id: id }} />
}

export default Post
