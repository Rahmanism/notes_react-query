import PostForm from '../components/PostForm'

const EditPost = ({ post }) => {
  return (
    <div>
      <h2>Edit Post</h2>
      <PostForm post={post} />
    </div>
  )
}

export default EditPost
